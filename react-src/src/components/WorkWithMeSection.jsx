import { useState } from 'react';
import { HiDeviceMobile, HiCode, HiLightBulb } from 'react-icons/hi';
import GlowCard from './GlowCard';
import Tabs from './Tabs';

const services = {
  iOS: {
    icon: HiDeviceMobile,
    headline: 'Native iOS apps with Swift & SwiftUI',
    summary:
      'Pixel-perfect apps that feel at home on iPhone, iPad, Watch, and Mac — from first sketch to App Store approval.',
    deliverables: [
      'SwiftUI interfaces built for iOS 17+',
      'HealthKit, CloudKit & StoreKit integration',
      'Apple Watch & widget support',
      'TestFlight beta + App Store submission',
    ],
    accent: '#a855f7',
  },
  Web: {
    icon: HiCode,
    headline: 'Modern React & Next.js websites',
    summary:
      'Fast, responsive, and built with care — React, Tailwind, and edge-deployed on Vercel or Cloudflare.',
    deliverables: [
      'React + Tailwind or Next.js build',
      'Vercel / Cloudflare deployment',
      'Animations, transitions & interactions',
      'Lighthouse 95+ scores',
    ],
    accent: '#c084fc',
  },
  Consulting: {
    icon: HiLightBulb,
    headline: 'Architecture & code reviews',
    summary:
      'A second pair of eyes on your codebase — Swift or TypeScript, async or synchronous, one-off or ongoing.',
    deliverables: [
      'Written code review reports',
      'Technical strategy & ADRs',
      'Refactor plans with effort estimates',
      'Pair-programming sessions',
    ],
    accent: '#d946ef',
  },
};

const serviceKeys = Object.keys(services);

const process = [
  { step: '01', title: 'Brief', copy: 'You describe the project — goals, constraints, vibe.' },
  { step: '02', title: 'Align', copy: 'We scope it together and agree on timeline + price.' },
  { step: '03', title: 'Build', copy: 'I ship in short iterations with regular check-ins.' },
  { step: '04', title: 'Launch', copy: "App Store, web deploy — we don't stop until it lives." },
];

function Input({ id, label, type = 'text', required, placeholder }) {
  return (
    <div className="group">
      <label
        htmlFor={id}
        className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500 transition-colors group-focus-within:text-purple-300"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-zinc-600 backdrop-blur-sm transition-all focus:border-purple-400/60 focus:bg-white/[0.05] focus:shadow-[0_0_24px_rgba(168,85,247,0.18)] focus:outline-none"
      />
    </div>
  );
}

function Textarea({ id, label, required, placeholder, rows = 4 }) {
  return (
    <div className="group">
      <label
        htmlFor={id}
        className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500 transition-colors group-focus-within:text-purple-300"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-zinc-600 backdrop-blur-sm transition-all focus:border-purple-400/60 focus:bg-white/[0.05] focus:shadow-[0_0_24px_rgba(168,85,247,0.18)] focus:outline-none"
      />
    </div>
  );
}

function Select({ id, label, children }) {
  return (
    <div className="group">
      <label
        htmlFor={id}
        className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500 transition-colors group-focus-within:text-purple-300"
      >
        {label}
      </label>
      <div className="relative mt-2">
        <select
          id={id}
          name={id}
          className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 pr-10 text-white backdrop-blur-sm transition-all focus:border-purple-400/60 focus:bg-white/[0.05] focus:shadow-[0_0_24px_rgba(168,85,247,0.18)] focus:outline-none"
        >
          {children}
        </select>
        <svg
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 4.5L6 7.5L9 4.5" />
        </svg>
      </div>
    </div>
  );
}

export default function WorkWithMeSection() {
  const [active, setActive] = useState('iOS');
  const s = services[active];
  const Icon = s.icon;

  return (
    <section id="work-with-me" className="relative mx-auto max-w-6xl px-6 py-24 md:px-12 md:py-32">
      {/* Ambient glow — matches site */}
      <div className="pointer-events-none absolute top-1/4 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[150px]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-fuchsia-600/10 blur-[150px]" aria-hidden="true" />

      {/* Header — consistent with the other sections */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Work{' '}
          <span className="bg-gradient-to-r from-purple-200 to-purple-600 bg-clip-text text-transparent">
            with me
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
          Pick the kind of work you need — iOS, web, or a sounding board for your own codebase.
        </p>
      </div>

      {/* Service selector */}
      <div className="mb-12 grid gap-5 lg:grid-cols-5">
        {/* Tabs column */}
        <div className="flex flex-col items-start gap-4 lg:col-span-2">
          <Tabs items={serviceKeys} value={active} onChange={setActive} ariaLabel="Choose a service" />

          <GlowCard glowColor={s.accent} className="w-full">
            <article className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 md:p-7">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10"
                  style={{
                    background: `linear-gradient(135deg, ${s.accent}22, ${s.accent}08)`,
                    boxShadow: `0 0 24px ${s.accent}22`,
                  }}
                >
                  <Icon className="h-5 w-5" style={{ color: s.accent }} />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  Service · {active}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-tight text-white md:text-2xl">
                {s.headline}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.summary}</p>

              <ul className="mt-6 space-y-2.5">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <svg
                      className="mt-[5px] h-3.5 w-3.5 shrink-0 text-purple-400"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 8L6.5 11.5L13 5" />
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>

            </article>
          </GlowCard>
        </div>

        {/* Contact form column */}
        <GlowCard glowColor="#a855f7" className="lg:col-span-3">
          <form
            action="https://formspree.io/f/xgoaydbn"
            method="POST"
            className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 md:p-8"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                Start a conversation
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                Tell me about your project — I'll reply within two business days.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Input id="name" label="Name" required placeholder="Your name" />
                <Input id="email" label="Email" type="email" required placeholder="you@email.com" />
              </div>

              <Select id="project" label="Project Type">
                <option value="ios" className="bg-zinc-900">iOS App Development</option>
                <option value="web" className="bg-zinc-900">Web Development</option>
                <option value="consulting" className="bg-zinc-900">Consulting</option>
                <option value="other" className="bg-zinc-900">Other</option>
              </Select>

              <Textarea
                id="message"
                label="Message"
                required
                placeholder="What are you building?"
                rows={5}
              />
            </div>

            <button
              type="submit"
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-purple-400/40 bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-[0_0_24px_rgba(168,85,247,0.35)] transition-all hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]"
            >
              Send message
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </button>
          </form>
        </GlowCard>
      </div>

      {/* Process strip */}
      <div className="relative">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-purple-400" aria-hidden="true" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-purple-300/80">
            The process
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-purple-400/40 to-transparent" aria-hidden="true" />
        </div>

        <div className="grid gap-3 md:grid-cols-4">
          {process.map((p, i) => (
            <div
              key={p.step}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:-translate-y-0.5 hover:border-purple-500/30"
            >
              <div className="pointer-events-none absolute -right-4 -top-6 select-none text-[80px] font-black leading-none text-white/[0.03]">
                {p.step}
              </div>
              <div className="relative">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" aria-hidden="true" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-purple-300/80">
                    Step {p.step}
                  </span>
                </div>
                <h4 className="mt-3 text-lg font-bold tracking-tight text-white">{p.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{p.copy}</p>
              </div>
              {i < process.length - 1 && (
                <div
                  className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 text-purple-400/40 md:block"
                  aria-hidden="true"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 3l5 5-5 5" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
