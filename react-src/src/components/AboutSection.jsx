import GlowCard from './GlowCard';

const facts = [
  { label: 'Based in', value: 'Prague, CZ' },
  { label: 'Studying', value: 'Software Eng. · Unicorn U.' },
  { label: 'Focus', value: 'iOS · SwiftUI · React' },
  { label: 'Shipping', value: 'ShadowLift, Habit Owl' },
];

const stats = [
  { k: '5+', v: 'years coding' },
  { k: '2', v: 'apps on App Store' },
  { k: '10+', v: 'projects shipped' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-transparent blur-3xl -z-10" aria-hidden="true" />

      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          A bit{' '}
          <span className="bg-gradient-to-r from-purple-200 to-purple-600 bg-clip-text text-transparent">
            about me
          </span>
        </h2>
      </div>

      {/* Two-column layout: identity card + bio + facts */}
      <div className="grid gap-5 md:grid-cols-5">
        {/* Identity card */}
        <GlowCard glowColor="#a855f7" className="md:col-span-2">
          <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0">
            {/* Gradient header */}
            <div className="relative overflow-hidden p-6 pb-16">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-fuchsia-500/20 to-transparent" aria-hidden="true" />
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-purple-500/20 blur-3xl" aria-hidden="true" />
              <div className="relative z-10 flex items-start justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Available
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-purple-200/80">
                  ID/001
                </span>
              </div>
            </div>

            {/* Avatar overlapping header/body */}
            <div className="relative -mt-12 px-6">
              <div className="relative h-24 w-24 overflow-hidden rounded-3xl border-4 border-[#0a0a0a] shadow-[0_8px_24px_rgba(168,85,247,0.4)]">
                <img
                  src="/images/sebastian-portrait.jpg"
                  alt="Sebastian Kučera"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Identity body */}
            <div className="flex flex-1 flex-col gap-5 px-6 pb-6 pt-4">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Sebastian Kučera</h3>
                <p className="mt-1 text-sm text-zinc-400">Swift & React developer</p>
              </div>

              {/* Facts list */}
              <dl className="space-y-2.5">
                {facts.map((f) => (
                  <div key={f.label} className="flex items-baseline justify-between gap-4 border-b border-white/5 pb-2 last:border-0">
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      {f.label}
                    </dt>
                    <dd className="text-right text-sm text-white">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        </GlowCard>

        {/* Right column: bio + stats */}
        <div className="flex flex-col gap-5 md:col-span-3">
          {/* Bio card */}
          <GlowCard glowColor="#c084fc" className="flex-1">
            <article className="relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 md:p-8">
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-purple-400" aria-hidden="true" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-purple-300/80">
                  The short version
                </span>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-zinc-300 md:text-lg">
                <p>
                  I'm a student of Software Engineering at{' '}
                  <span className="font-semibold text-white">Unicorn University</span> in Prague, and an iOS
                  developer who's happiest shipping polished SwiftUI interfaces.
                </p>
                <p>
                  I love working on ambitious projects — things like my fitness app{' '}
                  <span className="font-semibold text-white">ShadowLift</span> — and I'm always up for
                  learning, collaborating, and building clean, thoughtful products.
                </p>
                <p>
                  Outside coding I'm into training and staying active. If you're interested in working
                  together, my inbox is open.
                </p>
              </div>
            </article>
          </GlowCard>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <GlowCard key={s.v} glowColor="#a855f7">
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4 text-center">
                  <div className="bg-gradient-to-r from-purple-200 to-purple-500 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                    {s.k}
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    {s.v}
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
