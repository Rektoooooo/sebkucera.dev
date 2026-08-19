import { VALUES } from '../content'

export default function Values() {
  return (
    <section className="px-6 py-16 sm:px-14 sm:py-20">
      <div className="grid gap-[18px] md:grid-cols-3">
        {VALUES.map((v, i) => (
          <div
            key={v.title}
            className="reveal rounded-[14px] bg-white p-[26px]"
            style={{ '--reveal-delay': `${i * 80}ms` }}
          >
            <div className="mb-2 text-[34px] leading-none text-yellow" aria-hidden="true">
              ✦
            </div>
            <div className="mb-2 text-lg font-bold tracking-tight">{v.title}</div>
            <p className="m-0 font-mono text-sm leading-[1.75] text-[#3A3F49]">{v.copy}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
