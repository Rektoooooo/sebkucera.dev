import { useCallback, useEffect, useMemo, useState } from 'react'
import AboutWindow from './components/AboutWindow'
import AppPage from './components/AppPage'
import Discover from './components/Discover'
import Dock from './components/Dock'
import LockScreen from './components/LockScreen'
import MenuBar from './components/MenuBar'
import Confetti, { Banner } from './components/Party'
import Sidebar, { SECTIONS } from './components/Sidebar'
import Spotlight from './components/Spotlight'
import TabBar from './components/TabBar'
import { UI } from './components/ui'
import { LINKS } from './content'
import { useKonami } from './hooks/useKonami'
import { usePragueClock } from './hooks/usePragueClock'
import { useRoute } from './hooks/useRoute'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useUnlock } from './hooks/useUnlock'

const SECTION_IDS = SECTIONS.map((s) => s.id)

export default function App() {
  const route = useRoute()
  const clock = usePragueClock()
  const active = useScrollSpy(SECTION_IDS, !route.app)
  const [burst, setBurst] = useState(0)
  const [notice, setNotice] = useState(null)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [spotlightOpen, setSpotlightOpen] = useState(false)
  const [asleep, setAsleep] = useState(false)

  useUnlock()

  const ui = useMemo(() => {
    const notify = (n) => setNotice({ ...n, id: Date.now() })
    return {
      notify,
      openAbout: () => setAboutOpen(true),
      openSpotlight: () => setSpotlightOpen(true),
      sleep: () => setAsleep(true),
      party: () => {
        setBurst((n) => n + 1)
        notify({ title: 'Konami code accepted', text: '30 extra lives added to your account. Use them wisely.' })
      },
      copyEmail: () =>
        navigator.clipboard
          ?.writeText(LINKS.email)
          .then(() => notify({ title: 'Email copied', text: `${LINKS.email} is on your clipboard.` }))
          .catch(() => window.location.assign(`mailto:${LINKS.email}`)),
    }
  }, [])

  useKonami(ui.party)

  // ⌘K / Ctrl+K (or "/" outside a text field) opens Spotlight; any key or click wakes the Mac.
  useEffect(() => {
    const onKey = (e) => {
      if (asleep) return setAsleep(false)
      const typing = e.target.closest?.('input, textarea')
      if (((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') || (e.key === '/' && !typing)) {
        e.preventDefault()
        setSpotlightOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [asleep])

  return (
    <UI.Provider value={ui}>
      <div className="wall" aria-hidden="true" />
      <MenuBar clock={clock.menubar} />
      <LockScreen date={clock.date} />
      <div className="spacer" />
      <main className="window" id="top">
        <Sidebar active={active} />
        <div className="content">
          {route.app ? (
            <AppPage key={route.app} id={route.app} />
          ) : (
            <Discover date={clock.date} time={clock.time} />
          )}
        </div>
      </main>
      <Dock openApp={route.app} />
      <TabBar active={active} />
      {aboutOpen && <AboutWindow onClose={() => setAboutOpen(false)} />}
      {spotlightOpen && <Spotlight onClose={() => setSpotlightOpen(false)} />}
      <Banner notice={notice} />
      <Confetti burst={burst} />
      {asleep && (
        <button className="sleep" type="button" onClick={() => setAsleep(false)} aria-label="Wake">
          <span>Click anywhere to wake</span>
        </button>
      )}
    </UI.Provider>
  )
}
