import { useCallback, useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Values from './components/Values'
import Contact from './components/Contact'
import { Confetti, OwlPeek, Toast, useToast } from './components/Eggs'
import { useRevealAll } from './hooks/useReveal'
import { useKonami } from './hooks/useKonami'

export default function App() {
  const { message, toast } = useToast()
  const [burstId, setBurstId] = useState(0)

  useRevealAll()

  const party = useCallback(() => {
    setBurstId((n) => n + 1)
    toast('🎉 Konami accepted. 30 extra lives credited to your account.')
    document.documentElement.classList.add('party')
    const prevTitle = document.title
    document.title = '🎉 sebkucera.dev'
    setTimeout(() => {
      document.documentElement.classList.remove('party')
      document.title = prevTitle
    }, 4000)
  }, [toast])

  useKonami(party)

  // The 3D keyboard's heart key (and anything mapped to 'party') fires this.
  useEffect(() => {
    const onToast = (e) => toast(e.detail)
    window.addEventListener('sk-party', party)
    window.addEventListener('sk-toast', onToast)
    return () => {
      window.removeEventListener('sk-party', party)
      window.removeEventListener('sk-toast', onToast)
    }
  }, [party, toast])

  return (
    <>
      <Nav toast={toast} />
      <main>
        <Hero toast={toast} />
        <Projects />
        <About />
        <Values />
      </main>
      <Contact />
      <Toast message={message} />
      <Confetti burstId={burstId} />
      <OwlPeek />
    </>
  )
}
