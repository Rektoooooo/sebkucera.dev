// All editable site content lives here.

// 3D hero scene (Spline). Leave `scene` empty to use the built-in floating cards.
// After remixing a scene in Spline: Export → Code → copy the URL ending in `scene.splinecode`.
export const SPLINE = {
  scene: 'https://prod.spline.design/8WSq-WHuoZjr-ljr/scene.splinecode',
  // Camera zoom (absolute) — 0.4 fits the whole keyboard in the hero container.
  zoom: 0.4,
  // Maps Spline object names (lowercase, substring match) to actions:
  // '#id' scrolls to a section, 'top' scrolls up, 'mailto:…' opens mail,
  // 'party' fires the confetti egg, 'toast:…' shows a toast.
  // NOTE: names are the scene's internal object names, not the visible labels —
  // "Key YOU" wears the Works label, "Key Esc" wears About, "Key Send" is Hire Me ⏎.
  actions: {
    you: '#projects',
    esc: '#about',
    send: '#contact',
    heart: 'party',
    smile: 'toast:🙂 hey, that tickles',
  },
}

export const LINKS = {
  email: 'sebastian.kucera@icloud.com',
  github: 'https://github.com/Rektoooooo',
  linkedin: 'https://www.linkedin.com/in/sebastian-kucera-31719b1b0/',
  instagram: 'https://www.instagram.com/seb.kuc/',
}

export const PROJECTS = [
  {
    n: '01',
    title: 'ShadowLift',
    blurb: 'Strength training that tracks your progress and stays out of your way. HealthKit, offline-first.',
    stack: 'SwiftUI',
    platform: 'iOS',
    href: 'https://apps.apple.com/us/app/shadowlift/id6743451583',
  },
  {
    n: '02',
    title: 'Habit Owl',
    blurb: 'Habit streaks, focus sessions, and an opinionated owl. Apple Watch support included.',
    stack: 'SwiftUI',
    platform: 'iOS',
    href: 'https://apps.apple.com/us/app/myhabitowl/id6757938878',
  },
  {
    n: '03',
    title: 'MealPrepAI',
    blurb: 'AI-powered meal planning tailored to your goals. Point it at your week and it does the thinking.',
    stack: 'SwiftUI · AI',
    platform: 'iOS',
    href: 'https://github.com/Rektoooooo/MealPrepAI',
  },
  {
    n: '04',
    title: 'CC Settings',
    blurb: 'Native settings manager for Claude Code. Because nobody should hand-edit JSON at midnight.',
    stack: 'SwiftUI',
    platform: 'macOS',
    href: 'https://github.com/Rektoooooo/CC-Settings',
  },
  {
    n: '05',
    title: 'DrivePass',
    blurb: 'Playful driver’s-licence prep — official questions, daily streaks, mock exams. Free.',
    stack: 'React',
    platform: 'Web',
    href: 'https://drivepass.cz',
  },
  {
    n: '06',
    title: 'ApplyTailor',
    blurb: 'AI-tailored job applications that land more interviews. Stop sending generic resumes.',
    stack: 'React',
    platform: 'Web',
    href: 'https://applytailor.com',
  },
]

export const VALUES = [
  { title: 'Design first', copy: 'If it doesn’t feel good to tap, it’s not done.' },
  { title: 'Ship small, ship often', copy: 'Short iterations, real builds, weekly check-ins.' },
  {
    title: 'The last 10%',
    copy: 'Haptics, empty states, spacing — the stuff everyone feels but nobody sees.',
  },
]

export const ABOUT = [
  'I started writing Swift in my bedroom about five years ago and never really stopped. Today I split my time between native iOS — SwiftUI, HealthKit, the occasional stubborn animation — and React front-ends, while studying software engineering at Unicorn University in Prague.',
  'I’m junior on paper and I’ll say so. But I’m quick, I ask the awkward question early, and I care a lot about the last ten percent. If you need a pair of hands that won’t need much steering, that’s me.',
]
