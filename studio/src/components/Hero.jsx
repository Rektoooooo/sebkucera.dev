import { useEffect, useRef } from 'react';
import { useT } from '../hooks/useT.js';
import { useModal } from './ModalContext.jsx';
import { Eyebrow } from './Eyebrow.jsx';

export default function Hero() {
  const { t } = useT();
  const { open } = useModal();
  const h = t.hero;
  const sceneRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const stage = stageRef.current;
    if (!scene || !stage) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const onMove = (e) => {
      const rect = scene.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      tx = Math.max(-0.5, Math.min(0.5, x));
      ty = Math.max(-0.5, Math.min(0.5, y));
    };

    const onLeave = () => {
      tx = 0;
      ty = 0;
    };

    const loop = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      stage.style.transform = `rotateY(${cx * 10}deg) rotateX(${-cy * 8}deg)`;
      raf = requestAnimationFrame(loop);
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !raf) {
          raf = requestAnimationFrame(loop);
        } else if (!entry.isIntersecting && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      });
    });
    io.observe(scene);

    window.addEventListener('mousemove', onMove, { passive: true });
    scene.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      io.disconnect();
      window.removeEventListener('mousemove', onMove);
      scene.removeEventListener('mouseleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="px-[var(--pad)] pt-[clamp(60px,8vw,100px)] pb-[clamp(60px,8vw,100px)]">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid items-center gap-[clamp(32px,5vw,72px)] lg:grid-cols-[1.3fr_1fr]">
          {/* Left — copy */}
          <div>
            <Eyebrow>{h.eyebrow}</Eyebrow>
            <h1 className="font-serif">
              {h.title[0]}
              <em
                className="text-[var(--accent)]"
                style={{
                  fontFamily: '"Instrument Serif", Georgia, serif',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  letterSpacing: '-0.02em',
                }}
              >
                {h.title[1]}
              </em>
            </h1>
            <p
              className="mt-4 max-w-[54ch] text-[clamp(18px,1.6vw,22px)] leading-[1.5] text-[var(--ink-2)]"
            >
              {h.lead}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => open()}
                className="inline-flex items-center gap-2.5 rounded-full bg-[var(--ink)] px-[22px] py-[14px] text-[15px] font-medium text-[var(--bg)] transition-all hover:-translate-y-0.5 hover:bg-[var(--accent)]"
              >
                {h.ctaPrimary}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
              <a
                href="#pripad"
                className="inline-flex items-center gap-2.5 rounded-full border border-[var(--ink)] bg-transparent px-[22px] py-[14px] text-[15px] font-medium text-[var(--ink)] transition-all hover:bg-[var(--ink)] hover:text-[var(--bg)]"
              >
                {h.ctaSecondary}
              </a>
            </div>

            <div className="mt-10 flex items-center gap-[18px] text-[14px] text-[var(--muted)]">
              <div className="flex">
                {h.dots.map((d, i) => (
                  <span
                    key={i}
                    className="-ml-2.5 grid h-8 w-8 place-items-center rounded-full border-2 border-[var(--bg)] font-serif text-[14px] first:ml-0"
                    style={{
                      backgroundColor:
                        i === 0
                          ? 'oklch(0.85 0.06 45)'
                          : i === 1
                          ? 'oklch(0.82 0.04 140)'
                          : i === 2
                          ? 'oklch(0.8 0.05 240)'
                          : 'var(--accent)',
                      color: i === 3 ? 'var(--bg)' : 'var(--ink-2)',
                      borderColor: 'var(--bg)',
                    }}
                  >
                    {d}
                  </span>
                ))}
              </div>
              <span>{h.proof}</span>
            </div>
          </div>

          {/* Right — 3D hero scene */}
          <div className="scene" ref={sceneRef} aria-hidden="true">
            <div className="scene-bg">
              <div className="blob b1" />
              <div className="blob b2" />
              <div className="blob b3" />
              <div className="grid-dots" />
            </div>

            <div className="stage" ref={stageRef}>
              {/* Particles */}
              <div className="particles">
                <i style={{ '--x': '10%', '--d': '14s', '--dl': '0s' }} />
                <i style={{ '--x': '22%', '--d': '18s', '--dl': '2s' }} />
                <i style={{ '--x': '38%', '--d': '16s', '--dl': '5s' }} />
                <i style={{ '--x': '52%', '--d': '20s', '--dl': '1s' }} />
                <i style={{ '--x': '64%', '--d': '15s', '--dl': '3s' }} />
                <i style={{ '--x': '78%', '--d': '19s', '--dl': '7s' }} />
                <i style={{ '--x': '88%', '--d': '17s', '--dl': '4s' }} />
                <i style={{ '--x': '46%', '--d': '22s', '--dl': '9s' }} />
              </div>

              {/* Laptop + browser */}
              <div className="laptop float-a">
                <div className="laptop-shadow" />
                <div className="laptop-lid">
                  <div className="laptop-screen">
                    <div className="bchrome">
                      <div className="btl"><i /><i /><i /></div>
                      <div className="burl">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M7 4V3a2 2 0 10-4 0v1M2.5 4h5v4h-5z" stroke="currentColor" strokeWidth="0.8" />
                        </svg>
                        vasefirma.cz
                      </div>
                      <div className="btabs"><i /><i /></div>
                    </div>
                    <div className="bsite">
                      <div className="bnav">
                        <div className="bnav-logo">Vaše&nbsp;Firma</div>
                        <div className="bnav-links"><span>Služby</span><span>Ceník</span><span>Kontakt</span></div>
                        <div className="bnav-cta">Poptat</div>
                      </div>
                      <div className="bhero">
                        <div className="bhero-copy">
                          <div className="btag">Praha · od&nbsp;2014</div>
                          <div className="btitle">Služba, na&nbsp;kterou se&nbsp;dá spolehnout.</div>
                          <div className="bsub">Poctivá práce, férové ceny a&nbsp;přístup, který vám ušetří starosti i&nbsp;peníze.</div>
                          <div className="bctas">
                            <span className="bbtn bbtn-p">Poptat službu</span>
                            <span className="bbtn bbtn-s">Ceník</span>
                          </div>
                        </div>
                        <div className="bhero-img">
                          <div className="bhi-inner" />
                          <div className="bhi-tag">◆&nbsp;Od&nbsp;1&nbsp;290&nbsp;Kč</div>
                        </div>
                      </div>
                      <div className="bcards">
                        <div className="bcard"><div className="bcicon" /><div className="bctitle">Konzultace</div><div className="bcp">Osobně i&nbsp;online</div></div>
                        <div className="bcard"><div className="bcicon" /><div className="bctitle">Realizace</div><div className="bcp">Na&nbsp;klíč, bez&nbsp;starostí</div></div>
                        <div className="bcard"><div className="bcicon" /><div className="bctitle">Podpora</div><div className="bcp">Když něco potřebujete</div></div>
                      </div>
                    </div>
                    <div className="screen-glare" />
                  </div>
                  <div className="laptop-notch" />
                </div>
                <div className="laptop-base">
                  <div className="laptop-hinge" />
                </div>
              </div>

              {/* Phone */}
              <div className="phone float-b">
                <div className="phone-shadow" />
                <div className="phone-body">
                  <div className="phone-island" />
                  <div className="phone-screen">
                    <div className="pnav">
                      <div className="pnav-logo">Firma</div>
                      <div className="pnav-menu"><i /><i /><i /></div>
                    </div>
                    <div className="ptitle">Služba,<br />na&nbsp;kterou se&nbsp;dá spolehnout.</div>
                    <div className="pimg" />
                    <div className="pcta">Poptat službu →</div>
                    <div className="pcard" />
                    <div className="pcard short" />
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="badge-fx badge-google float-c">
                <div className="bfx-icon">
                  <svg width="14" height="14" viewBox="0 0 18 18">
                    <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 01-1.8 2.72v2.26h2.91c1.7-1.57 2.69-3.88 2.69-6.62z" />
                    <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.95-2.18l-2.9-2.26c-.81.54-1.83.86-3.05.86-2.35 0-4.34-1.58-5.05-3.71H.96v2.33A9 9 0 009 18z" />
                    <path fill="#FBBC05" d="M3.95 10.71A5.41 5.41 0 013.66 9c0-.6.1-1.17.3-1.71V4.96H.95A9 9 0 000 9c0 1.45.35 2.83.96 4.04l2.99-2.33z" />
                    <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.46 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 00.96 4.96l2.99 2.33C4.66 5.16 6.65 3.58 9 3.58z" />
                  </svg>
                </div>
                <div className="bfx-txt">
                  <span className="bfx-lbl">Google</span>
                  <span className="bfx-val"><strong>1. místo</strong> · vaše&nbsp;služba, město</span>
                </div>
              </div>

              <div className="badge-fx badge-perf float-d">
                <div className="bfx-ring">
                  <svg width="36" height="36" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(46,160,67,0.18)" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15" fill="none" stroke="#2ea043" strokeWidth="3" strokeLinecap="round" strokeDasharray="94.2" strokeDashoffset="2.82" transform="rotate(-90 18 18)" />
                  </svg>
                  <span>98</span>
                </div>
                <div className="bfx-txt">
                  <span className="bfx-lbl">Performance</span>
                  <span className="bfx-val">Rychlost &amp;&nbsp;SEO</span>
                </div>
              </div>

              <div className="badge-fx badge-chart float-e">
                <div className="bfx-spark">
                  <svg width="54" height="28" viewBox="0 0 54 28" fill="none">
                    <defs>
                      <linearGradient id="sg" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor="var(--accent)" stopOpacity="0.35" />
                        <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M2 22 L10 18 L18 20 L26 14 L34 15 L42 8 L52 4 L52 26 L2 26 Z" fill="url(#sg)" />
                    <path d="M2 22 L10 18 L18 20 L26 14 L34 15 L42 8 L52 4" stroke="var(--accent)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="bfx-txt">
                  <span className="bfx-lbl">Návštěvnost ↑</span>
                  <span className="bfx-val"><strong>+150 %</strong> za&nbsp;3&nbsp;měsíce</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
