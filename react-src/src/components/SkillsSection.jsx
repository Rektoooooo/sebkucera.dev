import { useMemo, useState } from 'react';
import {
  SiSwift,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiOpenai,
  SiGit,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { MdSpeed } from 'react-icons/md';
import GlowCard from './GlowCard';
import Tabs from './Tabs';

const skills = [
  {
    name: 'Swift',
    category: 'Language',
    description: 'Native iOS apps with Apple\'s modern language.',
    icon: SiSwift,
    color: '#F05138',
    level: 5,
  },
  {
    name: 'SwiftUI',
    category: 'Framework',
    description: 'Declarative UI across iPhone, iPad, Watch, and Mac.',
    icon: SiSwift,
    color: '#0D96F2',
    level: 5,
  },
  {
    name: 'React',
    category: 'Framework',
    description: 'Component-driven web apps with hooks and modern tooling.',
    icon: SiReact,
    color: '#61DAFB',
    level: 4,
  },
  {
    name: 'TypeScript',
    category: 'Language',
    description: 'Type-safe JavaScript for large, maintainable codebases.',
    icon: SiTypescript,
    color: '#3178C6',
    level: 4,
  },
  {
    name: 'JavaScript',
    category: 'Language',
    description: 'Modern ES6+, async programming, and the full web stack.',
    icon: SiJavascript,
    color: '#F7DF1E',
    level: 5,
  },
  {
    name: 'Tailwind CSS',
    category: 'Framework',
    description: 'Utility-first styling for fast, consistent interfaces.',
    icon: SiTailwindcss,
    color: '#38BDF8',
    level: 4,
  },
  {
    name: 'Java',
    category: 'Language',
    description: 'Object-oriented programming from university coursework.',
    icon: FaJava,
    color: '#E76F00',
    level: 3,
  },
  {
    name: 'SQL',
    category: 'Language',
    description: 'Database design, queries, and data modeling.',
    icon: SiPostgresql,
    color: '#4169E1',
    level: 3,
  },
  {
    name: 'AI-Assisted Dev',
    category: 'Workflow',
    description: 'Claude Code, Copilot, and ChatGPT for leverage and speed.',
    icon: SiOpenai,
    color: '#10A37F',
    level: 5,
  },
  {
    name: 'Git & GitHub',
    category: 'Workflow',
    description: 'Version control, PRs, and clean commit history.',
    icon: SiGit,
    color: '#F05032',
    level: 4,
  },
  {
    name: 'Performance',
    category: 'Workflow',
    description: 'Profiling, optimization, and shipping smooth experiences.',
    icon: MdSpeed,
    color: '#A855F7',
    level: 4,
  },
];

const categories = ['All', 'Language', 'Framework', 'Workflow'];

function LevelDots({ level }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Proficiency: ${level} of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`h-1 w-1 rounded-full ${
            i <= level ? 'bg-purple-400' : 'bg-white/10'
          }`}
        />
      ))}
    </div>
  );
}

function SkillCard({ skill }) {
  const Icon = skill.icon;
  return (
    <GlowCard glowColor="#a855f7" className="h-full">
      <article className="relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5 transition-all duration-300 group-hover:border-purple-500/30">
        <div className="flex items-start justify-between gap-3">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10"
            style={{
              background: `linear-gradient(135deg, ${skill.color}22, ${skill.color}08)`,
              boxShadow: `0 0 24px ${skill.color}22`,
            }}
          >
            <Icon className="h-5 w-5" style={{ color: skill.color }} />
          </div>
          <span className="rounded-full border border-purple-500/25 bg-purple-500/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-purple-200">
            {skill.category}
          </span>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold tracking-tight text-white">{skill.name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-zinc-400">{skill.description}</p>
        </div>

        <LevelDots level={skill.level} />
      </article>
    </GlowCard>
  );
}

export default function SkillsSection() {
  const [filter, setFilter] = useState('All');

  const visible = useMemo(() => {
    if (filter === 'All') return skills;
    return skills.filter((s) => s.category === filter);
  }, [filter]);

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-blue-500/5 to-transparent blur-3xl -z-10" aria-hidden="true" />

      {/* Header */}
      <div className="mb-10 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          The{' '}
          <span className="bg-gradient-to-r from-purple-200 to-purple-600 bg-clip-text text-transparent">
            toolkit
          </span>
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
          Languages, frameworks, and workflows I reach for when building iOS and web products.
        </p>
      </div>

      {/* Filter */}
      <div className="mb-8 flex justify-center">
        <Tabs items={categories} value={filter} onChange={setFilter} ariaLabel="Filter skills" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((s) => (
          <SkillCard key={s.name} skill={s} />
        ))}
      </div>
    </section>
  );
}
