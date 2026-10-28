import { useEffect, useMemo, useRef, useState } from 'react'
import github from '../data/github.json'
import { LINKS } from '../content'
import { dayDate, fullDate } from '../format'
import { GitHubMark, I } from './Icons'

// The contribution grid from the GitHub profile (a snapshot taken at deploy time, see
// scripts/github-activity.mjs). Squares are sized in whole pixels so every one renders identically.
const DAY = 86400000
const GAP = 3
const MIN_CELL = 10 // below this the grid scrolls sideways instead of shrinking
const MAX_CELL = 15
const WEEKS = github.weeks.length

const monthFmt = new Intl.DateTimeFormat('en-US', { month: 'short', timeZone: 'UTC' })
const external = { target: '_blank', rel: 'noopener noreferrer' }
const still = () => matchMedia('(prefers-reduced-motion: reduce)').matches

function useCalendar() {
  return useMemo(() => {
    const start = Date.parse(`${github.start}T00:00:00Z`)
    const days = []
    github.weeks.forEach((week, w) =>
      week.forEach(([count, level], k) => {
        const i = days.length
        days.push({ i, week: w, row: w === 0 ? github.firstWeekday + k : k, count, level, date: new Date(start + i * DAY) })
      })
    )
    const best = days.reduce((a, d) => (d.count > a.count ? d : a), days[0])
    // a label over the first column of each month, dropping a cramped first one like GitHub does
    const firstSunday = start - github.firstWeekday * DAY
    let months = github.weeks
      .map((_, w) => [w, monthFmt.format(new Date(firstSunday + w * 7 * DAY))])
      .filter(([, m], k, all) => k === 0 || m !== all[k - 1][1])
    if (months.length > 1 && months[1][0] < 3) months = months.slice(1)
    return { days, best, months }
  }, [])
}

export default function GitHubCard() {
  const { days, best, months } = useCalendar()
  const card = useRef(null)
  const scroller = useRef(null)
  const [cell, setCell] = useState(MAX_CELL)
  const [shown, setShown] = useState(false)
  const [tip, setTip] = useState(null)

  // largest whole-pixel square that fits; on narrow screens keep MIN_CELL and scroll instead
  useEffect(() => {
    const el = scroller.current
    const fit = () => setCell(Math.max(MIN_CELL, Math.min(MAX_CELL, Math.floor((el.clientWidth + GAP) / WEEKS - GAP))))
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // start scrolled to the latest weeks when the grid is wider than its box
  useEffect(() => {
    scroller.current.scrollLeft = scroller.current.scrollWidth
  }, [cell])

  // fill the grid in, column by column, the first time it scrolls into view
  useEffect(() => {
    if (still() || !('IntersectionObserver' in window)) return setShown(true)
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true)
        io.disconnect()
      }
    }, { threshold: 0.3 })
    io.observe(card.current)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!tip) return undefined
    const clear = (e) => !e.target?.closest?.('.gh-grid') && setTip(null)
    window.addEventListener('scroll', clear, { passive: true })
    document.addEventListener('pointerdown', clear)
    return () => {
      window.removeEventListener('scroll', clear)
      document.removeEventListener('pointerdown', clear)
    }
  }, [tip])

  const point = (e) => {
    const sq = e.target.closest?.('[data-i]')
    if (!sq) return
    const r = sq.getBoundingClientRect()
    const c = card.current.getBoundingClientRect()
    const x = r.left + r.width / 2 - c.left
    // keep the tooltip inside the card near its edges
    const align = x > c.width - 140 ? 'end' : x < 140 ? 'start' : 'mid'
    setTip({ d: days[sq.dataset.i], x, y: r.top - c.top, align })
  }

  return (
    <div className={`gh ${shown ? 'in' : 'pre'}`} ref={card}>
      <div className="gh-top">
        <div className="gh-id">
          <span className="gh-mark">
            <GitHubMark />
          </span>
          <span>
            <b>@{github.login}</b>
            <span>On GitHub since {github.joined}</span>
          </span>
        </div>
        <a className="gh-follow" href={LINKS.github} {...external}>
          Follow
          <I name="out" />
        </a>
      </div>

      <div className="gh-hero">
        <div className="gh-total">
          <b>{github.total.toLocaleString('en-US')}</b>
          <span>contributions in the last year</span>
        </div>
        <dl className="gh-stats">
          <div>
            <dt>Active days</dt>
            <dd>{github.activeDays}</dd>
          </div>
          <div>
            <dt>Longest streak</dt>
            <dd>
              {github.longestStreak}
              <small>days</small>
            </dd>
          </div>
          <div>
            <dt>Best day</dt>
            <dd>
              {best.count}
              <small>{dayDate(best.date).replace(/^\w+ /, '')}</small>
            </dd>
          </div>
          <div>
            <dt>Public repos</dt>
            <dd>{github.publicRepos}</dd>
          </div>
        </dl>
      </div>

      <div className="gh-cal" style={{ '--cell': `${cell}px`, '--gap': `${GAP}px`, '--weeks': WEEKS }}>
        <div className="gh-days" aria-hidden="true">
          <span />
          <span>Mon</span>
          <span />
          <span>Wed</span>
          <span />
          <span>Fri</span>
          <span />
        </div>
        <div className="gh-scroll" ref={scroller} onScroll={() => setTip(null)}>
          <div className="gh-months" aria-hidden="true">
            {months.map(([w, m]) => (
              <span key={w} style={{ gridColumn: `${w + 1} / span 4` }}>
                {m}
              </span>
            ))}
          </div>
          <div
            className="gh-grid"
            role="img"
            aria-label={`${github.total} contributions in the last year`}
            onPointerOver={point}
            onClick={point}
            onPointerLeave={() => setTip(null)}
          >
            {days.map((d) => (
              <i key={d.i} data-i={d.i} data-l={d.level} style={{ gridColumn: d.week + 1, gridRow: d.row + 1, '--c': d.week }} />
            ))}
          </div>
        </div>
      </div>

      <div className="gh-foot">
        <span>Updated {fullDate(github.updated)}</span>
        <span className="gh-scale" aria-hidden="true">
          Less
          {[0, 1, 2, 3, 4].map((l) => (
            <i key={l} data-l={l} />
          ))}
          More
        </span>
      </div>

      {github.recent?.length > 0 && (
        <div className="gh-repos">
          {github.recent.map((r) => (
            <a key={r.name} className="gh-repo" href={`${LINKS.github}/${r.name}`} {...external}>
              <b>{r.name}</b>
              <p>{r.description || 'No description yet.'}</p>
              {r.language && (
                <small>
                  <i style={{ background: r.color ?? '#8b949e' }} />
                  {r.language}
                </small>
              )}
            </a>
          ))}
        </div>
      )}

      {tip && (
        <div className="gh-tip" data-align={tip.align} style={{ left: tip.x, top: tip.y }} aria-hidden="true">
          <b>{tip.d.count ? `${tip.d.count} contribution${tip.d.count === 1 ? '' : 's'}` : 'No contributions'}</b> on{' '}
          {dayDate(tip.d.date)}
        </div>
      )}
    </div>
  )
}
