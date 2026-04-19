import { useEffect, useState } from 'react';
import { SiSwift, SiReact } from 'react-icons/si';

const ROTATING = ['iOS apps', 'SwiftUI interfaces', 'React websites', 'polished products'];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWordIndex((i) => (i + 1) % ROTATING.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative mx-auto max-w-6xl px-4 pt-16 pb-24 sm:px-6 sm:pt-24 sm:pb-32 md:px-12 md:pt-32 md:pb-40">
      {/* Subtle grid overlay — premium atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(168,85,247,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.15) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 75%)',
        }}
      />

      {/* Soft top wash */}
      <div
        className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: text */}
        <div className="relative z-10 lg:col-span-7">
          {/* Status pill */}
          <div className="mb-8 flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-xl">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Available for work
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500 sm:inline">
              · Prague · GMT+2
            </span>
          </div>

          {/* Split name — editorial hierarchy */}
          <h1 className="mb-6 text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em]">
            <span className="block font-light text-white/95">Sebastian</span>
            <span className="block bg-gradient-to-br from-purple-200 via-fuchsia-300 to-purple-600 bg-clip-text text-transparent">
              Kučera<span className="text-purple-400">.</span>
            </span>
          </h1>

          {/* Tagline with rotating word */}
          <p className="mb-4 text-xl text-zinc-300 md:text-2xl">
            I build{' '}
            <span className="relative inline-flex h-[1.25em] min-w-[8ch] items-baseline overflow-hidden align-baseline text-white">
              {ROTATING.map((w, i) => (
                <span
                  key={w}
                  className={`absolute left-0 top-0 whitespace-nowrap bg-gradient-to-r from-purple-200 to-fuchsia-300 bg-clip-text font-semibold text-transparent transition-all duration-500 ${
                    i === wordIndex
                      ? 'translate-y-0 opacity-100'
                      : '-translate-y-3 opacity-0 pointer-events-none'
                  }`}
                  aria-hidden={i !== wordIndex}
                >
                  {w}
                </span>
              ))}
              <span className="invisible whitespace-nowrap font-semibold">SwiftUI interfaces</span>
            </span>
          </p>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Swift, SwiftUI, and React — currently studying Software Engineering at Unicorn
            University and shipping apps to the App Store.
          </p>

          {/* CTAs */}
          <div className="mb-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl border border-purple-400/40 bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3.5 font-semibold text-white shadow-[0_8px_32px_rgba(168,85,247,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_48px_rgba(168,85,247,0.55)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-700 group-hover:translate-x-full" aria-hidden="true" />
              View Projects
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#work-with-me"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-purple-400/40 hover:bg-white/10 hover:shadow-[0_8px_32px_rgba(168,85,247,0.2)]"
            >
              Let's talk
              <svg className="h-4 w-4 text-zinc-400 transition-all group-hover:text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 12h18M13 5l8 7-8 7" />
              </svg>
            </a>
          </div>

          {/* Inline stats — premium minimalism */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-baseline gap-2">
              <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-2xl font-bold text-transparent">
                5+
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                years
              </span>
            </div>
            <span className="h-4 w-px bg-white/10" aria-hidden="true" />
            <div className="flex items-baseline gap-2">
              <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-2xl font-bold text-transparent">
                3
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                apps on App Store
              </span>
            </div>
            <span className="h-4 w-px bg-white/10" aria-hidden="true" />
            <div className="flex items-baseline gap-2">
              <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-2xl font-bold text-transparent">
                10+
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                projects shipped
              </span>
            </div>
          </div>
        </div>

        {/* Right: showcase — live product instead of portrait */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
            {/* Ambient halo */}
            <div
              className="pointer-events-none absolute -inset-12 -z-10 rounded-[3rem] bg-gradient-to-br from-purple-500/40 via-fuchsia-500/25 to-transparent blur-3xl"
              aria-hidden="true"
            />

            {/* Background secondary phone (ShadowLift peek behind) */}
            <div
              className="pointer-events-none absolute -left-4 top-10 hidden w-56 opacity-40 sm:block md:w-60"
              style={{ transform: 'rotate(-12deg)' }}
              aria-hidden="true"
            >
              <img
                src="/images/main-portrait.png"
                alt=""
                className="w-full drop-shadow-[0_24px_48px_rgba(168,85,247,0.35)]"
              />
            </div>

            {/* Primary phone — MealPrepAI */}
            <div
              className="hero-float relative z-10 w-[78%] sm:w-[72%] md:w-[68%]"
              style={{ transform: 'rotate(3deg)' }}
            >
              <img
                src="/images/mealprepai-portrait.png"
                alt="MealPrepAI — AI meal planning"
                className="w-full drop-shadow-[0_32px_64px_rgba(0,0,0,0.6)]"
                loading="eager"
              />
            </div>

            {/* Floating chips */}
            <div
              className="hero-float-slow absolute -left-2 top-4 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-xs font-semibold backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
              style={{ transform: 'rotate(-6deg)' }}
            >
              <SiSwift style={{ color: '#F05138' }} className="h-4 w-4" />
              <span className="text-white">Swift</span>
            </div>
            <div
              className="hero-float-slow absolute -right-2 bottom-20 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-xs font-semibold backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
              style={{ transform: 'rotate(6deg)', animationDelay: '1.5s' }}
            >
              <SiReact style={{ color: '#61DAFB' }} className="h-4 w-4" />
              <span className="text-white">React</span>
            </div>

            {/* Bottom live badge */}
            <div className="absolute -bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full border border-purple-400/40 bg-black/80 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-purple-200 backdrop-blur-xl shadow-[0_8px_24px_rgba(168,85,247,0.35)]">
              <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Live on the App Store
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow stack — kept but softened */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-purple-600/30 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[450px] w-[900px] -translate-x-1/2 rounded-full bg-purple-500/35 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-purple-400/40 blur-[80px]"
        aria-hidden="true"
      />
    </section>
  );
}
