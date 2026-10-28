import { useEffect, useMemo, useRef, useState } from 'react'
import { APPS, LINKS, SPOTLIGHT_JOKES } from '../content'
import { appHref } from '../hooks/useRoute'
import { scrollToLock } from '../hooks/useUnlock'
import { I } from './Icons'
import { SECTIONS } from './Sidebar'
import { useUI } from './ui'

// Spotlight (⌘K): jump to any app or section, run a few actions, find a few jokes.
export default function Spotlight({ onClose }) {
  const ui = useUI()
  const [q, setQ] = useState('')
  const [sel, setSel] = useState(0)
  const input = useRef(null)
  const list = useRef(null)
  const opener = useRef(document.activeElement)

  const all = useMemo(() => {
    const go = (hash) => () => {
      window.location.hash = hash
    }
    const run = { email: () => window.location.assign(`mailto:${LINKS.email}`), party: ui.party }
    return {
      apps: Object.entries(APPS).map(([id, a]) => ({ key: id, title: a.name, text: a.subtitle, icon: a.icon, kind: 'App', go: go(appHref(id)) })),
      sections: SECTIONS.map((s) => ({ key: `s-${s.id}`, title: s.label, text: 'Section', glyph: s.icon, kind: 'Section', go: go(`#${s.id}`) })),
      actions: [
        { key: 'a-about', title: 'About This Developer', text: 'System information', glyph: 'person', go: ui.openAbout },
        { key: 'a-mail', title: 'Email Sebastian', text: LINKS.email, glyph: 'mail', go: run.email },
        { key: 'a-copy', title: 'Copy email address', text: LINKS.email, glyph: 'copy', go: ui.copyEmail },
        { key: 'a-gh', title: 'Open GitHub', text: 'github.com/Rektoooooo', glyph: 'code', go: () => window.open(LINKS.github, '_blank', 'noopener') },
        { key: 'a-lock', title: 'Lock Screen', text: 'Back to the start', glyph: 'chevDown', go: scrollToLock },
      ].map((a) => ({ ...a, kind: 'Action' })),
      jokes: SPOTLIGHT_JOKES.map((j, i) => ({ key: `j-${i}`, words: j.words, title: j.title, text: j.text, glyph: 'sparkle', kind: '', go: run[j.action] })),
    }
  }, [ui])

  const groups = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return [['Suggestions', all.apps.slice(0, 6)], ['Actions', all.actions]]
    const hit = (r) => `${r.title} ${r.text}`.toLowerCase().includes(term)
    const jokes = all.jokes.filter((j) => j.words.some((w) => w.startsWith(term) || term.startsWith(w)))
    return [
      ['', jokes],
      ['Apps', all.apps.filter(hit)],
      ['Sections', all.sections.filter(hit)],
      ['Actions', all.actions.filter(hit)],
    ].filter(([, list]) => list.length)
  }, [q, all])

  const flat = groups.flatMap(([, list]) => list)
  const current = Math.min(sel, Math.max(flat.length - 1, 0))

  // focus the field; give focus back to whatever opened Spotlight when it closes
  useEffect(() => {
    input.current?.focus()
    const back = opener.current
    return () => back?.focus?.({ preventScroll: true })
  }, [])

  // keep the selected result in view while arrowing through a long list
  useEffect(() => {
    list.current?.querySelector('.spot-item.on')?.scrollIntoView({ block: 'nearest' })
  }, [current, q])

  const pick = (r) => {
    onClose()
    r?.go?.()
  }
  const onKey = (e) => {
    const down = e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)
    const up = e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)
    if (e.key === 'Escape') onClose()
    else if (down || up) {
      // Tab moves through results too, so focus never leaves Spotlight
      e.preventDefault()
      const n = Math.max(flat.length, 1)
      setSel((current + (down ? 1 : n - 1)) % n)
      input.current?.focus()
    } else if (e.key === 'Enter') {
      e.preventDefault()
      pick(flat[current])
    }
  }

  let n = -1
  return (
    <>
      <div className="spot-backdrop" onClick={onClose} />
      <div className="spot" role="dialog" aria-modal="true" aria-label="Spotlight Search" onKeyDown={onKey}>
        <label className="spot-input">
          <I name="search" />
          <input
            ref={input}
            value={q}
            onChange={(e) => {
              setQ(e.target.value)
              setSel(0)
            }}
            placeholder="Spotlight Search"
            aria-label="Search apps and sections"
            spellCheck="false"
            autoComplete="off"
          />
        </label>
        <div className="spot-list" ref={list}>
          {flat.length === 0 && <p className="spot-empty">No results. Try “coffee”.</p>}
          {groups.map(([title, list]) => (
            <div key={title || 'top'}>
              {title && <div className="spot-sec">{title}</div>}
              {list.map((r) => {
                n += 1
                const i = n
                return (
                  <button
                    key={r.key}
                    type="button"
                    className={`spot-item${i === current ? ' on' : ''}`}
                    onMouseMove={() => setSel(i)}
                    onClick={() => pick(r)}
                  >
                    {r.icon ? <img src={r.icon} alt="" width="32" height="32" /> : <span className="glyph"><I name={r.glyph} /></span>}
                    <span className="t">
                      <b>{r.title}</b>
                      <span>{r.text}</span>
                    </span>
                    {r.kind && <span className="kind">{r.kind}</span>}
                  </button>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
