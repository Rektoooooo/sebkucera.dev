import { Suspense, lazy, useEffect, useState } from 'react'
import { LINKS, SPLINE } from '../content'

const SplineScene = lazy(() => import('./SplineScene'))

function useDesktopMotion() {
  const [ok, setOk] = useState(false)
  useEffect(() => {
    const wide = window.matchMedia('(min-width: 768px)')
    const still = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setOk(wide.matches && !still.matches)
    update()
    wide.addEventListener('change', update)
    still.addEventListener('change', update)
    return () => {
      wide.removeEventListener('change', update)
      still.removeEventListener('change', update)
    }
  }, [])
  return ok
}

function FloatingScene() {
  return (
    <div className="relative h-[340px] w-full sm:h-[420px]" aria-hidden="true">
      {/* Arch backdrop */}
      <div className="absolute inset-x-0 bottom-0 top-5 ml-8 rounded-b-3xl rounded-t-[200px] bg-blue-soft" />

      {/* Swift code card */}
      <div
        className="float-anim absolute left-6 top-10 w-[230px] rounded-[14px] bg-white p-4 font-mono text-xs leading-relaxed text-gray-mid shadow-[0_18px_40px_rgba(16,17,20,0.10)] sm:left-16 sm:top-14"
      >
        struct ShadowLift: App {'{'}
        <br />
        &nbsp;&nbsp;var body: some Scene {'{'}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;WindowGroup {'{'} … {'}'}
        <br />
        &nbsp;&nbsp;{'}'}
        <br />
        {'}'}
      </div>

      {/* Habit Owl streak card */}
      <div
        className="float-anim absolute right-2 top-[190px] w-[200px] rounded-[14px] bg-white p-[18px] shadow-[0_18px_40px_rgba(16,17,20,0.10)] sm:right-8 sm:top-[180px]"
        style={{ '--float-delay': '.6s', '--float-dur': '9s' }}
      >
        <div className="mb-2.5 font-mono text-[13px] font-medium text-blue">🦉 Habit Owl</div>
        <div className="mb-[7px] h-2 rounded-full bg-[#EEF1F6]" />
        <div className="h-2 w-[64%] rounded-full bg-yellow" />
      </div>

      {/* Bottom pill */}
      <div
        className="float-anim absolute bottom-6 left-2 rounded-full bg-ink px-[18px] py-3 font-mono text-xs font-medium tracking-[0.06em] text-white sm:left-6"
        style={{ '--float-delay': '1.2s', '--float-dur': '8s' }}
      >
        SHIPPING FROM PRAGUE
      </div>
    </div>
  )
}

export default function Hero({ toast }) {
  const show3d = useDesktopMotion() && !!SPLINE.scene
  const copyEmail = async (e) => {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(LINKS.email)
      toast('Email copied! 📋')
    } catch {
      window.location.href = `mailto:${LINKS.email}`
    }
  }

  return (
    <section className="grid items-center gap-10 px-6 pb-16 pt-10 sm:px-14 sm:pb-20 lg:grid-cols-[1.05fr_.95fr]">
      <div>
        <div className="rise mb-4 flex items-center gap-3.5" style={{ '--rise-delay': '60ms' }}>
          <img
            src="/img/sebastian.jpg"
            alt="Sebastian Kučera"
            className="h-14 w-14 rounded-full object-cover"
          />
          <span className="font-mono text-[19px] text-gray">
            Sebastian Kučera<span className="cursor-blink text-blue">_</span>
          </span>
        </div>

        <h1
          className="rise mb-6 text-[clamp(2.9rem,7vw,5.1rem)] font-bold leading-[1.02] tracking-[-0.04em]"
          style={{ '--rise-delay': '160ms' }}
        >
          iOS &amp; React
          <br />
          developer from <span className="hl-yellow">Prague</span>
        </h1>

        <p
          className="rise mb-8 max-w-[46ch] font-mono text-base leading-[1.75] text-gray"
          style={{ '--rise-delay': '260ms' }}
        >
          A junior developer who’d rather build one thing properly than five things fast. Swift,
          SwiftUI and React — my own apps on the App Store, plus sites for founders and small
          studios.
        </p>

        <div className="rise flex flex-wrap items-center gap-4" style={{ '--rise-delay': '360ms' }}>
          <a
            href="#projects"
            className="inline-block bg-blue px-[30px] py-[19px] font-mono text-sm font-medium tracking-[0.08em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-deep"
          >
            SEE MY WORK
          </a>
          <a
            href={`mailto:${LINKS.email}`}
            onClick={copyEmail}
            title="Click to copy"
            className="u-link font-mono text-sm text-gray"
          >
            {LINKS.email}
          </a>
        </div>
      </div>

      <div className="rise" style={{ '--rise-delay': '300ms' }}>
        {show3d ? (
          /* Aspect-locked so the scene's framing (and the zoom tuned for it)
             is identical at every viewport width — no more edge clipping. */
          <div className="relative w-full aspect-[612/420]">
            <Suspense fallback={<FloatingScene />}>
              <SplineScene />
            </Suspense>
          </div>
        ) : (
          <FloatingScene />
        )}
      </div>
    </section>
  )
}
