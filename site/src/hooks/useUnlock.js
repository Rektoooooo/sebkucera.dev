import { useEffect } from 'react'

const DESKTOP = '(min-width: 900px)'
const SETTLE = 46 // on a Mac the window settles just under the menu bar
const W_START = 0.34 // where the window starts rising; keep in sync with --w in index.css

export const prefersStill = () => matchMedia('(prefers-reduced-motion: reduce)').matches

// Scroll distance over which the Mac unlocks: until the App Store window reaches its resting spot.
export function unlockDistance() {
  const win = document.querySelector('.window')
  if (!win) return 1
  return Math.max(1, win.offsetTop - (matchMedia(DESKTOP).matches ? SETTLE : 0))
}

export function scrollToUnlocked({ smooth = true } = {}) {
  window.scrollTo({ top: unlockDistance(), behavior: smooth && !prefersStill() ? 'smooth' : 'instant' })
}

export function scrollToLock() {
  window.scrollTo({ top: 0, behavior: prefersStill() ? 'instant' : 'smooth' })
}

// Drives the lock screen → App Store transition. Writes --p (0 → 1) on <html>, which the CSS turns
// into every stage of the animation, plus a few state classes. Also runs the Dock's autohide.
export function useUnlock() {
  useEffect(() => {
    const root = document.documentElement
    const win = document.querySelector('.window')
    let queued = false
    let lastY = window.scrollY
    let top = 0
    let settle = 0
    let vh = 0
    const measure = () => {
      top = win.offsetTop
      settle = matchMedia(DESKTOP).matches ? SETTLE : 0
      vh = window.innerHeight
    }

    const update = () => {
      queued = false
      const d = Math.max(1, top - settle)
      const y = window.scrollY
      const p = Math.min(1, Math.max(0, y / d))
      root.style.setProperty('--p', p.toFixed(4))
      // Pin the window while it unlocks: it rises from just below the fold to its resting spot as the
      // unlock plays, no matter how far the page has scrolled, then hands over to normal scrolling at p = 1.
      const w = Math.min(1, Math.max(0, (p - W_START) / (1 - W_START)))
      const pinned = settle + (1 - w) * (vh - settle) - (top - y)
      win.style.setProperty('--wy', p >= 1 || prefersStill() ? '0px' : `${pinned.toFixed(1)}px`)
      root.classList.toggle('chrome', prefersStill() || p > 0.6) // menu bar, Dock and tab bar are on screen
      root.classList.toggle('released', p > 0.42) // lock screen fully faded: let clicks through to the window
      root.classList.toggle('unlocked', p > 0.7)
      root.classList.toggle('settled', p >= 1)
      // Dock autohide: tuck it away while reading down the page, bring it back on any scroll up.
      if (y > d + 40 && y > lastY) root.classList.add('dock-away')
      else if (y < lastY || y <= d + 40) root.classList.remove('dock-away')
      lastY = y
    }
    const onScroll = () => {
      if (!queued) {
        queued = true
        requestAnimationFrame(update)
      }
    }
    const onResize = () => {
      measure()
      onScroll()
    }
    const onPointer = (e) => {
      if (e.clientY > window.innerHeight - 90) root.classList.remove('dock-away')
    }

    measure()
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    window.addEventListener('pointermove', onPointer, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onPointer)
    }
  }, [])
}
