import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { APPS } from '../content'
import { scrollToUnlocked, unlockDistance } from './useUnlock'

// Hash routes: '#/app/<id>' opens that app's page; any other hash is a section on Discover.
function parse() {
  const m = window.location.hash.match(/^#\/app\/([\w-]+)/)
  if (m && APPS[m[1]]) return { app: m[1], section: null }
  return { app: null, section: window.location.hash.slice(1) || null }
}

// Each history entry we create is tagged with whether it was opened straight from Discover,
// so "‹ Discover" can step back only when that really returns to Discover (and never off-site).
let restoring = false
let savedScroll = null

export const appHref = (id) => `#/app/${id}`

export function goBack() {
  restoring = true
  if (window.history.state?.fromDiscover) {
    window.history.back()
  } else {
    window.history.pushState({ fromDiscover: false }, '', window.location.pathname + window.location.search)
    window.dispatchEvent(new HashChangeEvent('hashchange'))
  }
}

// App page → another app page swaps the entry instead of stacking it, so Back still means Discover.
export function switchApp(e, id) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return // let ⌘-click open a new tab
  e.preventDefault()
  window.history.replaceState(window.history.state, '', appHref(id))
  window.dispatchEvent(new HashChangeEvent('hashchange'))
}

export function useRoute() {
  const [route, setRoute] = useState(parse)
  const current = useRef(route)

  useEffect(() => {
    if (window.history.state == null) window.history.replaceState({ fromDiscover: false }, '')
    const onHash = () => {
      const prev = current.current
      const next = parse()
      // tag entries the browser just created for a link click
      if (window.history.state == null) window.history.replaceState({ fromDiscover: !prev.app && !!next.app }, '')
      // remember where Discover was before the app page replaces it (and the page gets shorter)
      if (next.app && !prev.app) savedScroll = window.scrollY
      current.current = next
      setRoute(next)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // Scroll: an app page opens at the top of the window; Back returns to where you were on Discover.
  useLayoutEffect(() => {
    const back = restoring
    restoring = false
    if (route.app) {
      if (savedScroll === null) savedScroll = window.scrollY
      scrollToUnlocked({ smooth: false })
      return
    }
    const saved = savedScroll
    savedScroll = null
    if (route.section && !back) document.getElementById(route.section)?.scrollIntoView()
    else if (saved !== null) window.scrollTo({ top: Math.max(saved, unlockDistance()), behavior: 'instant' })
  }, [route])

  return route
}
