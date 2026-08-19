import { PROJECTS } from '../content'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-6 bg-white px-6 py-16 sm:px-14 sm:py-[76px]">
      <div className="mb-9 flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="text-[clamp(2.4rem,5vw,3.75rem)] font-bold tracking-[-0.035em]">Projects</h2>
        <span className="font-mono text-[13px] text-gray-light">
          {String(PROJECTS.length).padStart(2, '0')} SELECTED
        </span>
      </div>

      <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <a
            key={p.n}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hard-card hard-card-hover reveal flex min-h-[210px] flex-col gap-2.5 bg-bg p-6"
          >
            <div className="flex justify-between font-mono text-xs text-gray-light">
              <span>{p.n}</span>
              <span>{p.platform}</span>
            </div>
            <div className="text-[25px] font-bold tracking-[-0.025em]">{p.title}</div>
            <div className="flex-1 font-mono text-[13px] leading-[1.7] text-gray-mid">{p.blurb}</div>
            <span className="self-start rounded-full bg-blue-soft px-3 py-2 font-mono text-[11px] font-medium tracking-[0.08em] text-blue">
              {p.stack}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
