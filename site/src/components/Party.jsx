import { ME } from '../content'

const COLORS = ['#ff7ab8', '#7a6cff', '#3aa0ff', '#ffc58f', '#43c6a8', '#0071e3']

// A Mac-style notification banner (top right). `notice.id` restarts it for repeat messages.
export function Banner({ notice }) {
  if (!notice) return null
  return (
    <div key={notice.id} className="banner glass" role="status">
      <img src={notice.icon ?? ME.avatar} alt="" width="38" height="38" />
      <div>
        <b>{notice.title}</b>
        <p>{notice.text}</p>
      </div>
    </div>
  )
}

// Konami code reward.
export default function Confetti({ burst }) {
  if (!burst) return null
  return (
    <div key={burst} aria-hidden="true">
      {Array.from({ length: 90 }, (_, i) => {
        const size = 6 + ((i * 7) % 8)
        const round = i % 3 === 0
        return (
          <span
            key={i}
            className="confetti"
            style={{
              left: `${(i * 137.5) % 100}vw`, // golden-angle spread, no Math.random needed
              width: size,
              height: round ? size : size * 0.45,
              borderRadius: round ? '50%' : 1,
              background: COLORS[i % COLORS.length],
              '--dur': `${2.4 + ((i * 13) % 18) / 10}s`,
              '--delay': `${((i * 29) % 12) / 10}s`,
            }}
          />
        )
      })}
    </div>
  )
}

export function printConsoleArt() {
  /* eslint-disable no-console */
  console.log(
    '%cHey, fellow developer 👋\n' +
      '%cPoking around? Good taste. This site is hand-built with React, no template.\n' +
      'Press ⌘K for Spotlight, click the logo in the menu bar, or try the Konami code (↑ ↑ ↓ ↓ ← → ← → B A).\n\n' +
      'Want to build something together? sebastian.kucera@icloud.com',
    'font-weight:bold; font-size:13px;',
    'font-size:12px; color:#6e6e73;'
  )
}
