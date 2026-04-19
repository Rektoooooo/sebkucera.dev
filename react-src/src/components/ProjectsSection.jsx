import { useState, useMemo } from 'react';
import GlowCard from './GlowCard';
import Tabs from './Tabs';

const projects = [
  {
    id: '01',
    title: 'ShadowLift',
    platform: 'iOS',
    category: 'Health & Fitness',
    description: 'Track strength progress and optimize your workouts with an interface that stays out of the way.',
    image: '/images/App icons/ShadowLift logo.png',
    kind: 'icon',
    glow: '#a855f7',
    links: [
      { label: 'Website', href: 'https://shadowlift.app', tone: 'primary' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/shadowlift/id6743451583', tone: 'appstore' },
      { label: 'GitHub', href: 'https://github.com/Rektoooooo/ShadowLift', tone: 'github' },
    ],
  },
  {
    id: '02',
    title: 'Habit Owl',
    platform: 'iOS',
    category: 'Productivity',
    description: 'Build better habits with streak tracking, focus sessions, and Apple Watch support.',
    image: '/images/App icons/HabitOwl logo.png',
    kind: 'icon',
    glow: '#c084fc',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/us/app/myhabitowl/id6757938878', tone: 'appstore' },
      { label: 'GitHub', href: 'https://github.com/Rektoooooo/HabitFlow', tone: 'github' },
    ],
  },
  {
    id: '03',
    title: 'MealPrepAI',
    platform: 'iOS',
    category: 'Food & Drink',
    description: 'AI-powered meal planning and prep tailored to your goals.',
    image: '/images/App icons/MealPrepAI logo.png',
    kind: 'icon',
    glow: '#d946ef',
    links: [
      { label: 'GitHub', href: 'https://github.com/Rektoooooo/MealPrepAI', tone: 'github' },
    ],
  },
  {
    id: '04',
    title: 'CC Settings',
    platform: 'macOS',
    category: 'Developer Tools',
    description: 'A native macOS app for managing Claude Code settings with ease.',
    image: '/images/macos/CC-settings.png',
    kind: 'banner',
    glow: '#a855f7',
    links: [
      { label: 'GitHub', href: 'https://github.com/Rektoooooo/CC-Settings', tone: 'github' },
    ],
  },
  {
    id: '05',
    title: 'ApplyTailor',
    platform: 'Web',
    category: 'AI / Tools',
    description: 'Land more interviews with AI-tailored applications.',
    image: '/images/web-screenshots/applytailor.png',
    kind: 'banner',
    glow: '#c084fc',
    links: [
      { label: 'Website', href: 'https://applytailor.com', tone: 'primary' },
      { label: 'GitHub', href: 'https://github.com/Rektoooooo/applytailor', tone: 'github' },
    ],
  },
  {
    id: '06',
    title: 'Autoškola Trefa',
    platform: 'Web',
    category: 'Web Development',
    description: 'Driving school website with course info and online booking.',
    image: '/images/web-screenshots/autoskola-trefa.png',
    kind: 'banner',
    glow: '#9333ea',
    links: [
      { label: 'Website', href: 'https://www.autoskolatrefa.cz/', tone: 'primary' },
    ],
  },
  {
    id: '07',
    title: 'Claude Code for iOS',
    platform: 'Web',
    category: 'Landing Page',
    description: 'Landing page for the Claude Code iOS companion experience.',
    image: '/images/web-screenshots/claude-code-for-ios.png',
    kind: 'banner',
    glow: '#8b5cf6',
    links: [
      { label: 'Website', href: 'https://sebkucera.dev/claude-code-for-ios/', tone: 'primary' },
    ],
  },
  {
    id: '08',
    title: 'Real Estate Demo',
    platform: 'Web',
    category: 'Web Development',
    description: 'Modern real estate website with interactive property listings.',
    image: '/images/web-screenshots/real-estate.png',
    kind: 'banner',
    glow: '#a78bfa',
    links: [
      { label: 'Website', href: 'https://sebkucera.dev/real-estate-demo/', tone: 'primary' },
    ],
  },
  {
    id: '09',
    title: 'Restaurant Demo',
    platform: 'Web',
    category: 'Web Development',
    description: 'Beautiful restaurant website with menu and reservation system.',
    image: '/images/web-screenshots/restaurant.png',
    kind: 'banner',
    glow: '#d946ef',
    links: [
      { label: 'Website', href: 'https://sebkucera.dev/restaurant-demo/', tone: 'primary' },
    ],
  },
  {
    id: '10',
    title: 'Local Coder',
    platform: 'Web',
    category: 'Developer Tools',
    description: 'Marketing site for a local-first coding assistant.',
    image: '/images/web-screenshots/local-coder.png',
    kind: 'banner',
    glow: '#a855f7',
    links: [
      { label: 'Website', href: 'https://localcoder-site.vercel.app/en', tone: 'primary' },
    ],
  },
];

const filters = ['All', 'iOS', 'macOS', 'Web'];

function PlatformBadge({ platform }) {
  return (
    <span className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-200">
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" aria-hidden="true" />
      {platform}
    </span>
  );
}

function LinkChip({ href, children, tone = 'primary' }) {
  const base = 'group/link inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-all backdrop-blur-sm';
  const styles = {
    primary: 'border-purple-500/30 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-white hover:border-purple-400/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]',
    appstore: 'border-blue-500/30 bg-gradient-to-r from-blue-500/15 to-blue-600/15 text-white hover:border-blue-400/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]',
    github: 'border-emerald-500/30 bg-gradient-to-r from-emerald-500/15 to-emerald-600/15 text-white hover:border-emerald-400/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]',
  };
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles[tone]}`}>
      {children}
      <svg className="h-3 w-3 -mr-0.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9L9 3M9 3H4.5M9 3V7.5" />
      </svg>
    </a>
  );
}

function ProjectCard({ project }) {
  const isBanner = project.kind === 'banner';
  return (
    <div className="h-full">
      <GlowCard glowColor={project.glow} className="h-full">
        <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 transition-all duration-300 group-hover:border-purple-500/30">
          {/* Meta row */}
          <div className="flex items-center justify-between gap-3 px-5 pt-5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
              P/{project.id}
            </span>
            <PlatformBadge platform={project.platform} />
          </div>

          {/* Visual */}
          {isBanner ? (
            <div className="relative mx-5 mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/40">
              <div className="aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" aria-hidden="true" />
            </div>
          ) : (
            <div className="mt-5 flex items-center gap-4 px-5">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[22%] border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
                <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-300/80">
                {project.category}
              </div>
            </div>
          )}

          {/* Body */}
          <div className="flex flex-1 flex-col gap-4 px-5 pb-5 pt-5">
            <div>
              {isBanner && (
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-300/80">
                  {project.category}
                </div>
              )}
              <h3 className="text-2xl font-bold tracking-tight text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{project.description}</p>
            </div>

            {project.links.length > 0 && (
              <div className="mt-auto flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <LinkChip key={link.label} href={link.href} tone={link.tone}>
                    {link.label}
                  </LinkChip>
                ))}
              </div>
            )}
          </div>
        </article>
      </GlowCard>
    </div>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');

  const visible = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((p) => p.platform === filter);
  }, [filter]);

  const counts = useMemo(
    () => ({
      All: projects.length,
      iOS: projects.filter((p) => p.platform === 'iOS').length,
      macOS: projects.filter((p) => p.platform === 'macOS').length,
      Web: projects.filter((p) => p.platform === 'Web').length,
    }),
    []
  );

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-24"
    >
      {/* Ambient purple wash — matches the rest of the site */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-blue-500/5 to-transparent blur-3xl -z-10" aria-hidden="true" />

      {/* Header */}
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Projects{' '}
            <span className="bg-gradient-to-r from-purple-200 to-purple-600 bg-clip-text text-transparent">
              & Case Studies
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
            A running index of apps, sites, and tools I've shipped. Filter by platform or browse the whole catalog.
          </p>
        </div>

        <a
          href="https://github.com/Rektoooooo"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 self-start text-sm text-zinc-400 transition-colors hover:text-white md:self-end"
        >
          All on GitHub
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>

      {/* Tabs + count */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <Tabs items={filters} value={filter} onChange={setFilter} ariaLabel="Filter projects" />
        <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
          <span className="text-purple-300">{String(counts[filter]).padStart(2, '0')}</span>
          <span className="mx-1.5 text-zinc-600">/</span>
          {String(projects.length).padStart(2, '0')} entries
        </div>
      </div>

      {/* Uniform grid — 3 per row on desktop */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
