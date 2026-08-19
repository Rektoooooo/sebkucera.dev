import { ABOUT } from '../content'

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-6 px-6 pt-16 sm:px-14 sm:pt-20">
      <h2
        className="outline-text reveal m-0 text-right text-[clamp(3.6rem,10vw,8.25rem)] font-bold tracking-[-0.05em]"
        aria-label="About Me"
      >
        About Me
      </h2>
      <div className="mt-2 grid items-start gap-8 sm:mt-[-38px] md:grid-cols-2 md:gap-12">
        <div className="reveal font-mono text-[15px] leading-[1.85] text-[#3A3F49] md:pt-16">
          {ABOUT.map((p) => (
            <p key={p.slice(0, 24)} className="mb-[18px] last:mb-0">
              {p}
            </p>
          ))}
        </div>
        <div className="hard-card reveal overflow-hidden bg-white" style={{ '--reveal-delay': '120ms' }}>
          <img src="/img/sebastian.jpg" alt="Sebastian Kučera" className="block w-full" />
        </div>
      </div>
    </section>
  )
}
