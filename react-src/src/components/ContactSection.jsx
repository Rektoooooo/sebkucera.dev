import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';
import GlowCard from './GlowCard';

const channels = [
  {
    label: 'Email',
    value: 'sebastian.kucera@icloud.com',
    href: 'mailto:sebastian.kucera@icloud.com',
    icon: HiMail,
    accent: '#a855f7',
  },
  {
    label: 'LinkedIn',
    value: 'sebastian-kucera',
    href: 'https://www.linkedin.com/in/sebastian-kucera-31719b1b0/',
    icon: SiLinkedin,
    accent: '#0A66C2',
  },
  {
    label: 'GitHub',
    value: 'Rektoooooo',
    href: 'https://github.com/Rektoooooo',
    icon: SiGithub,
    accent: '#c084fc',
  },
  {
    label: 'Instagram',
    value: 'seb.kuc',
    href: 'https://www.instagram.com/seb.kuc/',
    icon: SiInstagram,
    accent: '#d946ef',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-blue-500/5 to-transparent blur-3xl -z-10" aria-hidden="true" />

      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Let's{' '}
          <span className="bg-gradient-to-r from-purple-200 to-purple-600 bg-clip-text text-transparent">
            connect
          </span>
        </h2>
      </div>

      {/* Signature card */}
      <GlowCard glowColor="#a855f7">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 backdrop-blur-xl md:p-10">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[80%] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" aria-hidden="true" />

          <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/item relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400/40 hover:bg-white/[0.05]"
                  style={{ '--accent': c.accent }}
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 transition-shadow duration-300 group-hover/item:shadow-[0_0_24px_var(--accent)]"
                    style={{ background: `linear-gradient(135deg, ${c.accent}22, ${c.accent}08)` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: c.accent }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      {c.label}
                    </div>
                    <div className="truncate text-sm font-medium text-white">{c.value}</div>
                  </div>
                  <svg
                    className="h-3.5 w-3.5 shrink-0 text-zinc-500 transition-all duration-200 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-purple-300"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 9L9 3M9 3H4.5M9 3V7.5" />
                  </svg>
                </a>
              );
            })}
          </div>
        </div>
      </GlowCard>
    </section>
  );
}
