// All editable site content lives here.
// Every fact on an app page comes from that project's README or its App Store listing.

export const LINKS = {
  email: 'sebastian.kucera@icloud.com',
  github: 'https://github.com/Rektoooooo',
  linkedin: 'https://www.linkedin.com/in/sebastian-kucera-31719b1b0/',
}

export const ME = {
  first: 'Sebastian',
  last: 'Kučera',
  role: 'iOS developer in Prague',
  pitch: 'I build iOS apps with SwiftUI and tools for the Mac.',
  avatar: '/img/avatar.webp',
}

// The About section ("Meet the developer").
export const ABOUT = [
  'I started writing Swift in my bedroom about five years ago and never really stopped. Today I build native iPhone and Mac apps with SwiftUI, two of them on the App Store, plus tools for developers like Bow and CC Settings.',
  'I study software engineering at Unicorn University in Prague, and I care about the last ten percent: haptics, empty states, spacing. The stuff everyone feels but nobody sees.',
]
export const FACTS = [
  { icon: 'pin', text: 'Prague, Czechia' },
  { icon: 'cap', text: 'Unicorn University' },
  { icon: 'code', text: 'Writing Swift for ~5 years' },
]
export const STACK = ['Swift', 'SwiftUI', 'SwiftData', 'CloudKit', 'HealthKit', 'WidgetKit', 'StoreKit 2', 'TypeScript', 'React', 'Next.js', 'Electron', 'Supabase']

// "What I do" and the business pitch.
export const SERVICES = [
  { icon: 'phone', tint: 'tint-blue', title: 'iPhone & iPad apps', text: 'Native SwiftUI apps from the first sketch to the App Store, with HealthKit, widgets, Apple Watch and subscriptions when you need them.' },
  { icon: 'mac', tint: 'tint-violet', title: 'Mac apps & tools', text: 'Native Mac apps and menu-bar utilities, signed, notarized and installable with Homebrew.' },
  { icon: 'globe', tint: 'tint-pink', title: 'Websites & web apps', text: 'Fast, polished sites and web apps in React and Next.js, like drivepass.cz and applytailor.com.' },
]
export const HIRE = {
  eyebrow: 'For businesses',
  title: 'Need an app or a website for your business?',
  text: 'Tell me what you have in mind: what it should do, who it’s for and when you need it. I usually reply within a day, often with questions.',
  subject: 'Project inquiry',
  status: 'Taking on new projects',
  icons: ['shadowlift', 'drivepass', 'myhabitowl', 'bow'],
}

// Sidebar "What's new" card.
export const WHATS_NEW = { app: 'bow', title: 'Bow 0.1 is out', text: 'The first release of my Arc-style browser for the Mac.' }

// Easter eggs: the "About This Developer" window (menu bar logo, or tap the avatar) and Spotlight (⌘K).
export const SYSTEM_INFO = {
  version: 'Sebastian 26',
  specs: [
    ['Chip', 'Swift 6 + SwiftUI'],
    ['Memory', 'About five years of Swift'],
    ['Startup Disk', 'Prague, Czechia'],
    ['Graphics', 'Pixel-perfect, mostly'],
    ['Cooling', 'Espresso'],
  ],
  serial: 'HIRE-ME-2026',
}
export const SPOTLIGHT_JOKES = [
  { words: ['coffee', 'espresso', 'kava', 'káva'], title: 'Espresso level: dangerously high', text: 'Every app here was built on it.' },
  { words: ['password', 'heslo', '1234'], title: 'Nice try', text: 'The password is scrolling.' },
  { words: ['hello', 'hi', 'hey', 'ahoj'], title: 'Ahoj! 👋', text: 'Press Return to say hi by email.', action: 'email' },
  { words: ['konami', 'party', 'confetti'], title: 'Party mode', text: 'Press Return. You know you want to.', action: 'party' },
  { words: ['sudo', 'hire'], title: 'sudo hire sebastian', text: 'Permission granted. Press Return.', action: 'email' },
]

// Screenshot helper: /img/shots/<app>-<n>.webp with its pixel size (prevents layout shift).
const PHONE = [560, 1217]
const shots = (id, count, size = PHONE) =>
  Array.from({ length: count }, (_, i) => ({ src: `/img/shots/${id}-${i + 1}.webp`, w: size[0], h: size[1] }))
const gh = (repo) => `https://github.com/Rektoooooo/${repo}`

// Every app gets an App Store–style page at #/app/<id>.
// `repo` / `appStoreId` feed the release snapshot (scripts/releases.mjs) behind "What's New".
// `card` is how it looks on the Discover page; `strip` is the row of facts under the header.
export const APPS = {
  drivepass: {
    name: 'DrivePass',
    subtitle: 'Pass the Czech driving test',
    icon: '/img/apps/drivepass.webp',
    action: { label: 'Open drivepass.cz', href: 'https://drivepass.cz' },
    card: {
      eyebrow: 'Featured · Web & iPhone',
      title: 'Pass the Czech driving test. Have fun doing it.',
      tagline: 'Driving-test prep, plus a platform for driving schools',
      cta: 'VISIT',
      bg: 'bg-drivepass',
    },
    strip: [
      { label: 'Price', value: 'Free', note: 'No ads' },
      { label: 'Questions', value: '1,136', note: 'Official bank' },
      { label: 'Platform', value: 'Web', note: 'iPhone & iPad' },
      { label: 'Language', value: 'CS', note: '+ Ukrainian' },
      { label: 'Built with', value: 'SwiftUI', note: '+ Next.js' },
    ],
    shotsKind: 'phone',
    shots: shots('drivepass', 6),
    description: [
      'DrivePass turns studying for the Czech driving theory test into something you actually want to open. You learn on a Duolingo-style path, review with spaced repetition, and take mock exams in the exact official format: 25 questions, 30 minutes, 43 points out of 50 to pass.',
      'Driving schools get their own side. Instructors can message students, sync lessons with Apple Calendar, and handle documents and payments from the web.',
    ],
    features: [
      'All 1,136 official questions',
      'All 329 road signs',
      'Spaced repetition that knows when you’re ready',
      'Mock exams in the official format',
      'Junction-priority trainer',
      'Czech and Ukrainian',
    ],
    info: [
      ['For', 'Learner drivers and driving schools'],
      ['Platforms', 'Web, iPhone and iPad'],
      ['Languages', 'Czech, Ukrainian'],
      ['Price', 'Free theory practice, no ads'],
      ['Data', 'Stored in the EU'],
      ['Built with', 'SwiftUI, Next.js, Supabase'],
    ],
    links: [['Website', 'https://drivepass.cz']],
  },

  shadowlift: {
    name: 'ShadowLift',
    subtitle: 'Fitness Tracker',
    icon: '/img/apps/shadowlift.webp',
    appStore: true,
    appStoreId: 6743451583,
    action: { label: 'View in App Store', href: 'https://apps.apple.com/app/shadowlift/id6743451583' },
    row: 'Workout tracker with HealthKit sync',
    strip: [
      { label: 'Price', value: 'Free', note: 'In-app purchases' },
      { label: 'Age', value: '13+', note: 'Years old' },
      { label: 'Category', value: 'Fitness', note: 'Health & Fitness' },
      { label: 'Requires', value: 'iOS 26', note: 'iPhone & iPad' },
      { label: 'Language', value: 'EN', note: 'English' },
    ],
    shotsKind: 'phone',
    shots: shots('shadowlift', 5, [560, 1103]),
    description: [
      'ShadowLift is a workout log for people who actually lift. Build your own split, log every set (warm-ups, drop sets, sets to failure) and let it spot your personal records. Progress photos, a muscle radar chart and weight and BMI charts show how far you’ve come.',
      'It works offline, syncs through iCloud and Apple Health, and the Pro + AI plan adds workout summaries generated on-device with Apple Intelligence.',
    ],
    features: [
      'Custom splits, with five templates to start from',
      'Warm-up, drop, failure and other set types',
      'Automatic personal-record detection',
      'Progress photos with a pose overlay',
      'Apple Health and iCloud sync',
      'On-device AI summaries (Pro + AI)',
    ],
    info: [
      ['Category', 'Health & Fitness'],
      ['Compatibility', 'iPhone and iPad with iOS 26 or later'],
      ['Languages', 'English'],
      ['Age rating', '13+'],
      ['Price', 'Free, with in-app purchases'],
      ['Built with', 'SwiftUI, SwiftData, CloudKit, HealthKit'],
    ],
    links: [
      ['Website', 'https://shadowlift.app'],
      ['Source code', gh('ShadowLift')],
    ],
  },

  myhabitowl: {
    name: 'MyHabitOwl',
    subtitle: 'Build better habits',
    icon: '/img/apps/myhabitowl.webp',
    appStore: true,
    appStoreId: 6757938878,
    action: { label: 'View in App Store', href: 'https://apps.apple.com/app/myhabitowl/id6757938878' },
    row: 'Habits, streaks and focus sessions',
    strip: [
      { label: 'Price', value: 'Free', note: 'In-app purchases' },
      { label: 'Age', value: '9+', note: 'Years old' },
      { label: 'Category', value: 'Lifestyle', note: 'Habits' },
      { label: 'Also on', value: 'Watch', note: 'Premium' },
      { label: 'Language', value: 'EN', note: 'English' },
    ],
    shotsKind: 'phone',
    shots: [...shots('myhabitowl', 3, [560, 1216]), ...shots('myhabitowl', 6, [560, 1103]).slice(3)],
    description: [
      'MyHabitOwl is a habit tracker with an owl who keeps you honest. Track yes/no habits, numbers or timed habits, keep your streaks alive, and chain habits together so one leads into the next.',
      'There’s a built-in focus timer, Apple Health integration for sleep, water and calories, Home Screen widgets, and an Apple Watch app with Premium.',
    ],
    features: [
      'Yes/no, numeric and timed habits',
      'Streaks and completion charts',
      'Habit chains',
      'Pomodoro-style focus timer',
      'Apple Health: sleep, water, calories',
      'Widgets, and an Apple Watch app with Premium',
    ],
    info: [
      ['Category', 'Lifestyle'],
      ['Compatibility', 'iPhone and iPad with iOS 26 or later'],
      ['Apple Watch', 'Companion app with Premium'],
      ['Languages', 'English'],
      ['Age rating', '9+'],
      ['Price', 'Free, with in-app purchases'],
      ['Built with', 'SwiftUI, SwiftData, WidgetKit'],
    ],
    links: [['Source code', gh('HabitFlow')]],
  },

  bow: {
    name: 'Bow',
    subtitle: 'A browser in the spirit of Arc',
    icon: '/img/apps/bow.webp',
    repo: 'bow',
    action: { label: 'Download for Mac', href: `${gh('bow')}/releases/latest` },
    card: {
      eyebrow: 'Browser',
      title: 'A browser in the spirit of Arc',
      tagline: 'Sidebar tabs, Spaces, Peek, Split View',
      cta: 'GET',
      bg: 'bg-bow',
    },
    strip: [
      { label: 'Price', value: 'Free', note: 'Open source' },
      { label: 'License', value: 'MIT', note: 'On GitHub' },
      { label: 'Requires', value: 'macOS 13', note: 'Apple silicon' },
      { label: 'Built with', value: 'Electron', note: 'TypeScript' },
    ],
    shotsKind: 'mac',
    shots: shots('bow', 5, [1400, 875]),
    description: [
      'Bow is an open-source Mac browser in the spirit of Arc. Tabs live in a vertical sidebar, Spaces keep work and life apart, and tabs you haven’t touched in a while tidy themselves away.',
      'Peek opens links in a preview, Split View puts two pages side by side, and the Command Bar (⌘T) gets you anywhere. It blocks ads and trackers, and it can import your Arc setup.',
    ],
    features: [
      'Vertical sidebar with pinned tabs and folders',
      'Spaces with their own profiles',
      'Peek and Split View',
      'Command Bar (⌘T)',
      'Ad and tracker blocking',
      'Import from Arc',
    ],
    info: [
      ['Category', 'Web browser'],
      ['Compatibility', 'macOS 13 or later, Apple silicon'],
      ['License', 'MIT'],
      ['Price', 'Free'],
      ['Built with', 'Electron, TypeScript'],
    ],
    links: [['Source code', gh('bow')]],
  },

  'cc-settings': {
    name: 'CC Settings',
    subtitle: 'Claude Code settings, native on your Mac',
    icon: '/img/apps/cc-settings.webp',
    repo: 'CC-Settings',
    action: { label: 'Download for Mac', href: `${gh('CC-Settings')}/releases/latest` },
    card: {
      eyebrow: 'Developer tools',
      title: 'No more hand-editing JSON',
      tagline: 'A native Mac app for your Claude Code settings',
      cta: 'GET',
      bg: 'bg-cc',
    },
    strip: [
      { label: 'Price', value: 'Free', note: 'Open source' },
      { label: 'License', value: 'MIT', note: 'On GitHub' },
      { label: 'Requires', value: 'macOS 26', note: 'or later' },
      { label: 'Built with', value: 'SwiftUI', note: 'Swift 6' },
      { label: 'Install', value: 'brew', note: 'or DMG' },
    ],
    shotsKind: 'mac',
    shots: [
      { src: '/img/shots/cc-settings-1.webp', w: 1400, h: 960 },
      { src: '/img/shots/cc-settings-2.webp', w: 1400, h: 786 },
    ],
    description: [
      'CC Settings is a native Mac app for managing Claude Code, so you never have to hand-edit its JSON again. It covers settings, permissions, hooks, MCP servers, skills, commands, agents and CLAUDE.md files, with profiles you can switch between and per-project overrides.',
      'Saves are instant and field-level, so it never overwrites keys it doesn’t know about. There’s also a session history browser, usage stats and global search.',
    ],
    features: [
      'Every Claude Code setting in one window',
      'Profiles and per-project overrides',
      'Editors for hooks, MCP servers, skills and agents',
      'Never overwrites keys it doesn’t know',
      'Session history and usage stats',
      'Global search',
    ],
    info: [
      ['Category', 'Developer tools'],
      ['Compatibility', 'macOS 26 or later'],
      ['Install', 'brew install --cask rektoooooo/tap/cc-settings'],
      ['License', 'MIT'],
      ['Price', 'Free'],
      ['Built with', 'SwiftUI, Swift 6'],
    ],
    links: [['Source code', gh('CC-Settings')]],
  },

  stayawake: {
    name: 'StayAwake',
    subtitle: 'Close the lid. Claude keeps working.',
    icon: '/img/apps/stayawake.webp',
    repo: 'StayAwake',
    action: { label: 'Download for Mac', href: `${gh('StayAwake')}/releases/latest` },
    card: {
      eyebrow: 'Menu bar',
      title: 'Close the lid. Claude keeps working.',
      tagline: 'Keeps your Mac awake while Claude Code works',
      cta: 'GET',
      bg: 'bg-stay',
    },
    strip: [
      { label: 'Price', value: 'Free', note: 'Open source' },
      { label: 'License', value: 'MIT', note: 'On GitHub' },
      { label: 'Requires', value: 'macOS 13', note: 'Apple silicon' },
      { label: 'Lives in', value: 'Menu bar', note: 'No Dock icon' },
    ],
    shotsKind: 'panel',
    shots: [{ src: '/img/shots/stayawake-1.webp', w: 560, h: 837 }],
    description: [
      'Close your MacBook’s lid and it goes to sleep, whatever Claude Code was in the middle of. StayAwake fixes that from the menu bar: turn on Follow Claude Code and your Mac stays awake exactly while Claude is working, then sleeps again after five quiet minutes.',
      'Battery and thermal guards keep it safe, live bars show your 5-hour and 7-day usage, and quitting the app always restores normal sleep.',
    ],
    features: [
      'Follow Claude Code: awake only while it works',
      'Sleeps again after 5 quiet minutes',
      'Battery guard below 20%, plus a thermal guard',
      'Live 5-hour and 7-day usage bars',
      'Optional auto-resume after a usage limit',
      'Quitting restores normal sleep',
    ],
    info: [
      ['Category', 'Utilities'],
      ['Compatibility', 'macOS 13 or later, Apple silicon'],
      ['License', 'MIT'],
      ['Price', 'Free'],
      ['Built with', 'Swift, AppKit'],
    ],
    links: [['Source code', gh('StayAwake')]],
  },

  mealprepai: {
    name: 'MealPrepAI',
    subtitle: 'AI meal plans that hit your macros',
    icon: '/img/apps/mealprepai.webp',
    action: { label: 'View on GitHub', href: gh('MealPrepAI') },
    strip: [
      { label: 'Platform', value: 'iPhone', note: 'iOS 26' },
      { label: 'AI', value: 'Claude', note: 'via Firebase' },
      { label: 'Health', value: 'Synced', note: 'Apple Health' },
      { label: 'Built with', value: 'SwiftUI', note: 'SwiftData' },
    ],
    shotsKind: 'phone',
    shots: shots('mealprepai', 5, [560, 1218]),
    description: [
      'MealPrepAI plans your week of meals around your calorie and macro targets, then turns the plan into a grocery list sorted by aisle. Don’t like a meal? Swap it with one tap.',
      'It handles diets and allergies from the first launch, keeps a searchable recipe library and syncs nutrition to Apple Health. The plans come from Claude, called through Firebase Cloud Functions.',
    ],
    features: [
      'Weekly plans that hit your calories and macros',
      'One-tap meal swap',
      'Grocery lists sorted by aisle',
      'Searchable recipe library',
      'Diets and allergies built in',
      'Apple Health nutrition sync',
    ],
    info: [
      ['Compatibility', 'iPhone with iOS 26 or later'],
      ['Built with', 'SwiftUI, SwiftData, HealthKit, StoreKit 2'],
      ['AI', 'Claude via Firebase Cloud Functions'],
    ],
    links: [['Source code', gh('MealPrepAI')]],
  },

  mycartally: {
    name: 'MyCarTally',
    subtitle: 'What your car really costs',
    icon: '/img/apps/mycartally.webp',
    action: { label: 'View on GitHub', href: gh('mycartally-ios') },
    strip: [
      { label: 'Platform', value: 'iPhone', note: 'SwiftUI' },
      { label: 'Receipts', value: 'Scan', note: 'Vision OCR' },
      { label: 'Data', value: 'Local', note: 'Stays on device' },
      { label: 'Export', value: 'CSV', note: 'and PDF' },
    ],
    shots: [],
    description: [
      'MyCarTally keeps track of what your car really costs. Scan a fuel or service receipt and it reads the numbers for you, then tracks consumption in L/100 km, maintenance reminders and every expense, across as many cars as you have.',
      'Charts show where the money goes, you can export to CSV or PDF, there’s a Home Screen widget, and all your data stays on your device.',
    ],
    features: [
      'Receipt scanner (Vision OCR)',
      'Fuel tracking in L/100 km',
      'Maintenance reminders',
      'Multiple vehicles',
      'Charts, plus CSV and PDF export',
      'Home Screen widget',
    ],
    info: [
      ['Platform', 'iPhone'],
      ['Built with', 'SwiftUI, SwiftData, Vision, Swift Charts, WidgetKit'],
      ['Privacy', 'Data stays on your device'],
    ],
    links: [['Source code', gh('mycartally-ios')]],
  },

  applytailor: {
    name: 'ApplyTailor',
    subtitle: 'AI-tailored job applications',
    icon: '/img/apps/applytailor.webp',
    action: { label: 'Open applytailor.com', href: 'https://applytailor.com' },
    strip: [
      { label: 'Platform', value: 'Web', note: 'Any browser' },
      { label: 'AI', value: 'Claude', note: 'Anthropic' },
      { label: 'Built with', value: 'React', note: 'Supabase' },
    ],
    shotsKind: 'mac',
    shots: [
      { src: '/img/shots/applytailor-1.webp', w: 1400, h: 788 },
      { src: '/img/shots/applytailor-2.webp', w: 1297, h: 643 },
    ],
    description: [
      'ApplyTailor reads a job description and writes the application for it: CV bullets tailored to the role, a cover letter, and a match score with the keywords you’re missing.',
      'Smart Reply drafts professional answers to recruiter emails, and you set up your base profile once and reuse it for every application.',
    ],
    features: [
      'Tailored CV bullets',
      'Keyword analysis and match score',
      'Cover letters',
      'Smart replies to recruiter emails',
      'One reusable base profile',
    ],
    info: [
      ['Platform', 'Web'],
      ['Built with', 'React, Supabase, Claude, Stripe'],
    ],
    links: [
      ['Website', 'https://applytailor.com'],
      ['Source code', gh('applytailor')],
    ],
  },

  redstone: {
    name: 'Computational Redstone',
    subtitle: 'Agent skills for redstone computers',
    icon: '/img/apps/redstone.webp',
    action: { label: 'View on GitHub', href: gh('computational-redstone') },
    strip: [
      { label: 'Components', value: '195', note: 'From 19 worlds' },
      { label: 'Skills', value: '8', note: 'For Claude Code' },
      { label: 'Minecraft', value: 'Java', note: '1.18.2' },
      { label: 'Built with', value: 'Python', note: 'Toolchain' },
    ],
    shots: [],
    description: [
      'Computational Redstone is an agent skill library and toolchain for building computers out of Minecraft redstone. Eight skills go from logic gates and number systems up to arithmetic, memory, displays and a full CPU.',
      'The toolchain reads Minecraft world files directly, without running the game, extracts redstone builds as reusable components (195 so far, from 19 published worlds) and generates .litematic schematics.',
    ],
    features: [
      'Eight skills, from logic gates to a CPU',
      'Reads world files without Minecraft',
      '195 reusable components from 19 worlds',
      'Generates .litematic schematics',
    ],
    info: [
      ['Works with', 'Claude Code skills'],
      ['Minecraft', 'Java Edition 1.18.2 conventions'],
      ['Built with', 'Python'],
    ],
    links: [['Source code', gh('computational-redstone')]],
  },
}

// What goes where on the Discover page (ids from APPS).
export const DISCOVER = {
  featured: 'drivepass',
  appStore: ['shadowlift', 'myhabitowl'],
  mac: ['bow', 'cc-settings', 'stayawake'],
  more: ['mealprepai', 'mycartally', 'applytailor', 'redstone'],
}

// Lock-screen notifications. `app` opens that app's page; `href` jumps to a section.
export const NOTIFICATIONS = [
  { from: 'Sebastian', icon: '/img/avatar.webp', note: 'now', text: 'I build iOS apps with SwiftUI and tools for the Mac.', href: '#about' },
  { from: 'DrivePass', app: 'drivepass', note: 'featured', text: 'Playful prep for the Czech driving test, plus a platform for driving schools.' },
  { from: 'Bow', app: 'bow', note: 'open source', text: 'A browser in the spirit of Arc, for macOS.' },
]

// The Dock (Mac): app ids, with null for a divider.
export const DOCK = ['shadowlift', 'myhabitowl', 'drivepass', null, 'bow', 'cc-settings', 'stayawake']
