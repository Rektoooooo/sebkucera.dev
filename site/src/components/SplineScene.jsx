import { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { SPLINE } from '../content'

// The scene's built-in mouse-follow is disabled entirely (we swallow move
// events before the runtime sees them) and replaced with our own gentle CSS
// tilt: the keyboard leans a few degrees toward the cursor, smoothly lerped.
// It cannot flip, snap, or drift — and keys stay clickable.
const MAX_TILT_X = 5 // deg, leaning up/down
const MAX_TILT_Y = 8 // deg, leaning left/right

function useGentleTilt(wrapRef) {
  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return undefined
    let target = { x: 0, y: 0 }
    let current = { x: 0, y: 0 }
    let raf = 0

    const onMove = (e) => {
      const r = wrap.getBoundingClientRect()
      // Cursor position relative to the scene, clamped to [-1, 1].
      const nx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width / 2)))
      const ny = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (r.height / 2)))
      target = { x: -ny * MAX_TILT_X, y: nx * MAX_TILT_Y }
      // Keep the runtime blind to cursor movement so its own follow stays idle.
      e.stopImmediatePropagation()
    }

    const tick = () => {
      current = {
        x: current.x + (target.x - current.x) * 0.08,
        y: current.y + (target.y - current.y) * 0.08,
      }
      wrap.style.transform = `perspective(900px) rotateX(${current.x.toFixed(2)}deg) rotateY(${current.y.toFixed(2)}deg)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    window.addEventListener('pointermove', onMove, { capture: true })
    window.addEventListener('mousemove', onMove, { capture: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove, { capture: true })
      window.removeEventListener('mousemove', onMove, { capture: true })
    }
  }, [wrapRef])
}

// Lazy-loaded 3D hero scene. Clicking named objects in the scene triggers
// the actions mapped in content.js (scroll, mailto, or the confetti egg).
export default function SplineScene() {
  const wrapRef = useRef(null)
  useGentleTilt(wrapRef)

  const onMouseDown = (e) => {
    const name = (e.target?.name || '').toLowerCase()
    if (import.meta.env.DEV) console.log('[spline] mousedown:', name)
    if (!name) return
    const match = Object.entries(SPLINE.actions).find(([key]) => name.includes(key))
    if (!match) return
    const action = match[1]
    if (action === 'party') {
      window.dispatchEvent(new CustomEvent('sk-party'))
    } else if (action === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (action.startsWith('toast:')) {
      window.dispatchEvent(new CustomEvent('sk-toast', { detail: action.slice(6) }))
    } else if (action.startsWith('mailto:')) {
      window.location.href = action
    } else if (action.startsWith('#')) {
      document.querySelector(action)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const onLoad = (app) => {
    if (SPLINE.zoom && SPLINE.zoom !== 1) {
      try {
        app.setZoom(SPLINE.zoom)
      } catch {
        /* older runtimes without setZoom */
      }
    }
    if (import.meta.env.DEV) {
      window.__splineApp = app
      // Dev aid: see the scene's object names for tuning SPLINE.actions.
      try {
        console.log('[spline] objects:', app.getAllObjects().map((o) => o.name))
      } catch {
        /* runtime API differences are fine to ignore */
      }
    }
  }

  return (
    <div ref={wrapRef} className="h-full w-full" aria-label="Interactive 3D keyboard — click the keys">
      <Spline scene={SPLINE.scene} onLoad={onLoad} onSplineMouseDown={onMouseDown} />
    </div>
  )
}
