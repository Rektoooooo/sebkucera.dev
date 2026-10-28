import { useEffect, useRef } from 'react'
import { APPS, DOCK, LINKS } from '../content'
import { appHref } from '../hooks/useRoute'
import { GitHubMark, HomeTile, MailTile } from './Icons'

// Magnification: icons near the cursor grow from BASE up to MAX px, easing off over RANGE px.
const BASE = 52
const MAX = 80
const RANGE = 150

function bounce(e) {
  const el = e.currentTarget
  el.classList.remove('bounce')
  void el.offsetWidth // restart the animation if it's already running
  el.classList.add('bounce')
  setTimeout(() => el.classList.remove('bounce'), 800)
}

function Item({ href, label, running, external, onClick, children }) {
  const out = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a className={`dock-item${running ? ' running' : ''}`} href={href} aria-label={label} onClick={onClick} {...out}>
      {children}
      <span className="dock-tip" aria-hidden="true">
        {label}
      </span>
      <span className="dock-dot" />
    </a>
  )
}

// The Mac Dock. Clicking an app bounces it and opens its App Store page.
export default function Dock({ openApp }) {
  const ref = useRef(null)

  useEffect(() => {
    const dock = ref.current
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined
    const items = [...dock.querySelectorAll('.dock-item')]
    let x = null
    let raf = 0

    const paint = () => {
      raf = 0
      // measure everything first, then write, so each frame costs one layout instead of one per icon
      const centres = items.map((el) => {
        const r = el.getBoundingClientRect()
        return r.left + r.width / 2
      })
      items.forEach((el, i) => {
        const d = x === null ? Infinity : Math.abs(x - centres[i])
        const s = d < RANGE ? BASE + (MAX - BASE) * Math.cos((d / RANGE) * (Math.PI / 2)) ** 2 : BASE
        el.style.setProperty('--s', `${s.toFixed(1)}px`)
      })
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(paint)
    }
    const move = (e) => {
      x = e.clientX
      dock.classList.add('magnify')
      schedule()
    }
    const leave = () => {
      x = null
      dock.classList.remove('magnify')
      schedule()
    }

    dock.addEventListener('pointermove', move)
    dock.addEventListener('pointerleave', leave)
    return () => {
      dock.removeEventListener('pointermove', move)
      dock.removeEventListener('pointerleave', leave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <nav className="dock" ref={ref} aria-label="Dock">
      <Item href="#top" label="Discover" running onClick={bounce}>
        <span className="dock-tile">
          <HomeTile />
        </span>
      </Item>
      <span className="dock-sep" />
      {DOCK.map((id, i) =>
        id ? (
          <Item key={id} href={appHref(id)} label={APPS[id].name} running={openApp === id} onClick={bounce}>
            <img src={APPS[id].icon} alt="" width="80" height="80" />
          </Item>
        ) : (
          <span key={`sep-${i}`} className="dock-sep" />
        )
      )}
      <span className="dock-sep" />
      <Item href={LINKS.github} label="GitHub" external onClick={bounce}>
        <span className="dock-tile github">
          <GitHubMark />
        </span>
      </Item>
      <Item href={`mailto:${LINKS.email}`} label="Say hi">
        <span className="dock-tile">
          <MailTile />
        </span>
      </Item>
    </nav>
  )
}
