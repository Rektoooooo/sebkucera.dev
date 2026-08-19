import { useEffect, useState } from 'react'
import { LINKS } from '../content'

function PragueClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Prague',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const t = setInterval(tick, 1000)
    return () => clearInterval(t)
  }, [])
  return <span className="tabular-nums">{time}</span>
}

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-6 bg-ink text-white">
      <div
        id="site-footer"
        className="flex flex-col justify-between gap-10 px-6 pb-10 pt-16 sm:px-14 sm:pt-[84px] md:flex-row md:items-end"
      >
        <div className="reveal">
          <h2 className="mb-3 text-[clamp(2.5rem,5.5vw,3.9rem)] font-bold tracking-[-0.035em]">
            Let’s <span className="hl-blue">talk.</span>
          </h2>
          <p className="m-0 max-w-[44ch] font-mono text-sm leading-[1.7] text-[#9AA1AE]">
            Open to work — tell me what you’re building and I’ll reply within a day. Usually with
            questions.
          </p>
        </div>
        <a
          href={`mailto:${LINKS.email}`}
          className="reveal inline-block self-start whitespace-nowrap bg-yellow px-[30px] py-[19px] font-mono text-sm font-medium tracking-[0.08em] text-ink transition-transform duration-200 hover:-translate-y-[3px] md:self-auto"
        >
          SAY HELLO
        </a>
      </div>

      <div className="mx-6 flex flex-col items-center justify-between gap-2 border-t border-white/10 py-6 font-mono text-[11px] text-[#6B7280] sm:mx-14 sm:flex-row">
        <p className="m-0">
          © 2026 Sebastian Kučera · Prague · <PragueClock />
        </p>
        <p className="m-0 select-none text-[#3A3F49]" aria-hidden="true" title="try it">
          ↑ ↑ ↓ ↓ ← → ← → B A
        </p>
      </div>
    </section>
  )
}
