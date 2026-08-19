import { useRef, useState } from 'react'
import { LINKS } from '../content'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav({ toast }) {
  const clicks = useRef(0)
  const [spinning, setSpinning] = useState(false)

  const onNameClick = () => {
    clicks.current += 1
    if (clicks.current === 3) toast('keep going…', 1600)
    if (clicks.current >= 5) {
      clicks.current = 0
      setSpinning(true)
      toast('Ahoj! 🇨🇿 You found Czech mode. That’s it. That’s the feature.')
      setTimeout(() => setSpinning(false), 800)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className="flex items-center justify-between px-6 py-6 sm:px-14">
      <button
        type="button"
        onClick={onNameClick}
        className={`font-mono text-[17px] font-medium tracking-tight ${spinning ? 'name-spin' : ''}`}
        title="sebkucera.dev"
      >
        👋 Hi, I’m Sebastian
      </button>

      <nav className="hidden gap-9 font-mono text-sm text-gray md:flex">
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} className="transition-colors hover:text-blue">
            {l.label}
          </a>
        ))}
      </nav>

      <div className="flex gap-2.5">
        <a
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-ink font-mono text-[11px] font-medium text-white transition-colors duration-200 hover:bg-blue"
        >
          GH
        </a>
        <a
          href={LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-ink font-mono text-[11px] font-medium text-white transition-colors duration-200 hover:bg-blue"
        >
          in
        </a>
      </div>
    </header>
  )
}
