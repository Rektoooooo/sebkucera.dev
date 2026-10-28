import { useId } from 'react'

// SF Symbols–style glyphs, defined once and reused with <I name="…" />.
const PATHS = {
  star: <path fill="currentColor" d="m10 2.3 2.4 4.9 5.3.8-3.9 3.7.9 5.3L10 14.5 5.3 17l.9-5.3L2.3 8l5.3-.8L10 2.3Z" />,
  phone: (
    <>
      <rect x="5.8" y="1.8" width="8.4" height="16.4" rx="2.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.8 4.2h2.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  mac: (
    <>
      <rect x="3.8" y="4" width="12.4" height="8.6" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M1.8 15.6h16.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  grid: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="2.8" y="2.8" width="6" height="6" rx="1.8" />
      <rect x="11.2" y="2.8" width="6" height="6" rx="1.8" />
      <rect x="2.8" y="11.2" width="6" height="6" rx="1.8" />
      <rect x="11.2" y="11.2" width="6" height="6" rx="1.8" />
    </g>
  ),
  person: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="10" cy="6.8" r="3.3" />
      <path d="M3.8 17.2c.9-3.3 3.3-5 6.2-5s5.3 1.7 6.2 5" />
    </g>
  ),
  mail: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <rect x="2.3" y="4.3" width="15.4" height="11.4" rx="2.2" />
      <path d="m3.4 5.8 6.6 5 6.6-5" />
    </g>
  ),
  today: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <rect x="2.8" y="2.8" width="14.4" height="14.4" rx="3.6" />
      <path d="M6.4 7.4h7.2M6.4 11h4.6" />
    </g>
  ),
  search: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="8.6" cy="8.6" r="5.6" />
      <path d="m13 13 4.2 4.2" />
    </g>
  ),
  briefcase: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <rect x="2.6" y="5.8" width="14.8" height="10.8" rx="2.4" />
      <path d="M7.2 5.8V4.6c0-.9.7-1.6 1.6-1.6h2.4c.9 0 1.6.7 1.6 1.6v1.2M2.8 10.4h14.4" />
    </g>
  ),
  globe: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="10" cy="10" r="7.4" />
      <path d="M2.8 10h14.4M10 2.6c2 2 3 4.5 3 7.4s-1 5.4-3 7.4c-2-2-3-4.5-3-7.4s1-5.4 3-7.4Z" />
    </g>
  ),
  pin: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M10 17.6s-5.4-5-5.4-9.2a5.4 5.4 0 0 1 10.8 0c0 4.2-5.4 9.2-5.4 9.2Z" strokeLinejoin="round" />
      <circle cx="10" cy="8.4" r="1.9" />
    </g>
  ),
  cap: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
      <path d="m10 4 8 3.8-8 3.8-8-3.8L10 4Z" />
      <path d="M5.2 9.4v3.8c1.3 1.3 2.9 2 4.8 2s3.5-.7 4.8-2V9.4M18 7.8v4.4" />
    </g>
  ),
  code: <path d="m7 5.5-4.5 4.5L7 14.5m6-9 4.5 4.5-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
  copy: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="6.6" y="6.6" width="10" height="10.6" rx="2.2" />
      <path d="M13.4 6.4V5a2.2 2.2 0 0 0-2.2-2.2H5A2.2 2.2 0 0 0 2.8 5v6.2A2.2 2.2 0 0 0 5 13.4h1.4" />
    </g>
  ),
  sparkle: <path fill="currentColor" d="M10 1.8c.5 3.9 2.4 5.8 6.2 6.3v.4c-3.8.5-5.7 2.4-6.2 6.3h-.4c-.5-3.9-2.4-5.8-6.2-6.3v-.4c3.8-.5 5.7-2.4 6.2-6.3h.4Z" />,
  chevDown: <path d="m5 8 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
  chevLeft: <path d="m12.5 4.5-5.5 5.5 5.5 5.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  arrow: <path d="M4 10h11m-4.5-4.5L15 10l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />,
  out: <path d="M8 4.5h7.5V12M15.2 4.8 5 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  check: (
    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="7.6" />
      <path d="m6.8 10.2 2.2 2.2 4.2-4.6" />
    </g>
  ),
}

export function I({ name, className = 'i' }) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      {PATHS[name]}
    </svg>
  )
}

// Dock tile art. Each fills its tile; the tile's rounded corners do the clipping.
export function HomeTile() {
  const id = `t${useId().replace(/[^a-z0-9]/gi, '')}` // safe inside url(#…)
  return (
    <svg className="tile-art" viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8f7bff" />
          <stop offset=".55" stopColor="#ff7ab8" />
          <stop offset="1" stopColor="#ffb06b" />
        </linearGradient>
        <radialGradient id={`${id}shine`} cx=".28" cy=".16" r=".85">
          <stop offset="0" stopColor="#fff" stopOpacity=".6" />
          <stop offset=".55" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill={`url(#${id}bg)`} />
      <rect width="100" height="100" fill={`url(#${id}shine)`} />
      <text x="50" y="70" textAnchor="middle" fontSize="60" fontWeight="800" fill="#fff" fontFamily="ui-rounded, 'SF Pro Rounded', -apple-system, system-ui, sans-serif" style={{ filter: 'drop-shadow(0 2px 3px rgba(80, 20, 90, .3))' }}>
        S
      </text>
    </svg>
  )
}

export function MailTile() {
  const id = `t${useId().replace(/[^a-z0-9]/gi, '')}` // safe inside url(#…)
  return (
    <svg className="tile-art" viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6fd0ff" />
          <stop offset=".5" stopColor="#1b8fff" />
          <stop offset="1" stopColor="#0a5fe0" />
        </linearGradient>
        <linearGradient id={`${id}paper`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#e3eaf4" />
        </linearGradient>
        <linearGradient id={`${id}flap`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fdfeff" />
          <stop offset="1" stopColor="#edf2f8" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill={`url(#${id}bg)`} />
      <rect x="15" y="31" width="70" height="46" rx="6" fill="#003a8c" opacity=".22" />
      <rect x="15" y="27" width="70" height="46" rx="6" fill={`url(#${id}paper)`} />
      <path d="M17 71 41 49M83 71 59 49" stroke="#9fb2cc" strokeWidth="1.6" strokeLinecap="round" opacity=".7" />
      <path d="M15.6 31.5Q15 27 21 27h58q6 0 5.4 4.5L54 55q-4 3-8 0Z" fill={`url(#${id}flap)`} />
      <path d="M16 31 46 55q4 3 8 0l30-24" fill="none" stroke="#a8b9d0" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

// GitHub's mark (Octicons), for the Dock's GitHub tile.
export function GitHubMark() {
  return (
    <svg className="i" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
    </svg>
  )
}

export function Wifi() {
  // three arcs around one point, like the macOS menu-bar Wi-Fi symbol
  return (
    <svg viewBox="0 0 20 15" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M1.9 5.9a11.4 11.4 0 0 1 16.2 0" />
        <path d="M4.9 8.9a7.2 7.2 0 0 1 10.2 0" />
      </g>
      <path fill="currentColor" d="M10 14.2 7.4 11.6a3.7 3.7 0 0 1 5.2 0L10 14.2Z" />
    </svg>
  )
}

export function Battery() {
  return (
    <svg viewBox="0 0 26 12" fill="none" stroke="currentColor" aria-hidden="true">
      <rect x=".75" y=".75" width="21.5" height="10.5" rx="3" strokeOpacity=".5" strokeWidth="1.2" />
      <rect x="2.5" y="2.5" width="15" height="7" rx="1.6" fill="currentColor" stroke="none" />
      <path d="M24 4.2v3.6" strokeWidth="1.6" strokeLinecap="round" strokeOpacity=".5" />
    </svg>
  )
}

export function Padlock({ open }) {
  return open ? (
    <svg className="open" viewBox="0 0 18 24" fill="currentColor" aria-hidden="true">
      <path d="M13 .5a5.2 5.2 0 0 0-5.2 5.2V10H3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2H9.9V5.7a3.1 3.1 0 0 1 6.2 0v1.6h2.1V5.7A5.2 5.2 0 0 0 13 .5Z" />
    </svg>
  ) : (
    <svg className="closed" viewBox="0 0 18 24" fill="currentColor" aria-hidden="true">
      <path d="M9 1.5a5.2 5.2 0 0 0-5.2 5.2V10H3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-.8V6.7A5.2 5.2 0 0 0 9 1.5Zm-3.1 5.2a3.1 3.1 0 0 1 6.2 0V10H5.9V6.7Z" />
    </svg>
  )
}
