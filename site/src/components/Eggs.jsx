import { useCallback, useEffect, useRef, useState } from 'react'

/* ---------- Toast ---------- */

export function Toast({ message }) {
  if (!message) return null
  return (
    <div
      role="status"
      className="toast-in fixed bottom-8 left-1/2 z-[95] -translate-x-1/2 rounded-full bg-ink px-5 py-3 shadow-[0_12px_32px_rgba(20,20,20,0.25)]"
    >
      <span className="text-sm font-semibold text-white">{message}</span>
    </div>
  )
}

export function useToast() {
  const [message, setMessage] = useState(null)
  const timer = useRef(null)
  const toast = useCallback((msg, ms = 3200) => {
    setMessage(msg)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setMessage(null), ms)
  }, [])
  useEffect(() => () => clearTimeout(timer.current), [])
  return { message, toast }
}

/* ---------- Confetti (Konami party mode) ---------- */

const CONFETTI_COLORS = ['#1D4ED8', '#FFE14D', '#101114', '#E6EEFF', '#ffffff', '#8A909C']

export function Confetti({ burstId }) {
  if (!burstId) return null
  const pieces = Array.from({ length: 90 }, (_, i) => {
    const left = (i * 137.5) % 100 // golden-angle spread, no Math.random needed
    const size = 6 + ((i * 7) % 8)
    const dur = 2.4 + ((i * 13) % 18) / 10
    const delay = ((i * 29) % 12) / 10
    const color = CONFETTI_COLORS[i % CONFETTI_COLORS.length]
    const round = i % 3 === 0
    return (
      <span
        key={`${burstId}-${i}`}
        className="confetti-piece"
        style={{
          left: `${left}vw`,
          width: size,
          height: round ? size : size * 0.45,
          borderRadius: round ? '50%' : '1px',
          background: color,
          '--c-dur': `${dur}s`,
          '--c-delay': `${delay}s`,
        }}
      />
    )
  })
  return <div aria-hidden="true">{pieces}</div>
}

/* ---------- Owl peek (footer easter egg) ---------- */

export function OwlPeek() {
  const [state, setState] = useState('hidden') // hidden | peeking | talking
  const anchor = useRef(null)

  useEffect(() => {
    if (state !== 'hidden') return undefined
    const el = document.getElementById('site-footer')
    if (!el) return undefined
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setState((s) => (s === 'hidden' ? 'peeking' : s)), 1200)
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [state])

  if (state === 'hidden') return null

  return (
    <div ref={anchor} className="fixed bottom-0 right-6 z-[85] sm:right-14">
      {state === 'talking' && (
        <div className="absolute -top-16 right-0 w-max rounded-2xl rounded-br-sm bg-white px-4 py-2.5 shadow-[0_12px_32px_rgba(20,20,20,0.16)]">
          <p className="text-sm font-medium">
            hoo!{' '}
            <a
              href="https://apps.apple.com/us/app/myhabitowl/id6757938878"
              target="_blank"
              rel="noopener noreferrer"
              className="u-link font-semibold text-blue"
            >
              go build a habit
            </a>
          </p>
        </div>
      )}
      <button
        type="button"
        aria-label="A small owl is peeking at you"
        onClick={() => setState((s) => (s === 'talking' ? 'peeking' : 'talking'))}
        className="owl-peek block cursor-pointer transition-transform hover:-translate-y-1"
      >
        <img
          src="/img/habitowl-icon.png"
          alt=""
          className="h-16 w-16 rounded-t-2xl shadow-[0_-8px_24px_rgba(20,20,20,0.15)]"
        />
      </button>
    </div>
  )
}

/* ---------- Console greeting ---------- */

export function printConsoleArt() {
  /* eslint-disable no-console */
  console.log(
    '%c\n   ███  █   █\n  █     █  █\n  ███   ███      sebkucera.dev\n     █  █  █\n  ███   █   █\n',
    'color:#1D4ED8; font-family:monospace; font-size:12px; line-height:1.2;'
  )
  console.log(
    '%cHey, fellow developer 👋\n' +
      '%cPoking around? Good taste. This site is hand-built with React + Tailwind — no template.\n' +
      'Try the Konami code (↑ ↑ ↓ ↓ ← → ← → B A) on the page for a small reward.\n\n' +
      'Want to build something together? sebastian.kucera@icloud.com',
    'font-weight:bold; font-size:13px; color:#1a1814;',
    'font-size:12px; color:#57524a;'
  )
}
