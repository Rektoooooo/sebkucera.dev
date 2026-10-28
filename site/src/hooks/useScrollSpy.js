import { useEffect, useState } from 'react'

// Which of the given sections is being read: the last one whose top has passed a fifth of the screen.
export function useScrollSpy(ids, enabled) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    if (!enabled) return undefined
    let queued = false
    const update = () => {
      queued = false
      const line = window.innerHeight * 0.2
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
    }
    // measure a frame later, after useUnlock has moved the pinned window for this scroll position
    const onScroll = () => {
      if (!queued) {
        queued = true
        requestAnimationFrame(() => requestAnimationFrame(update))
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids, enabled])

  return enabled ? active : null
}
