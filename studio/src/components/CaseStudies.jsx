import { useEffect, useState } from 'react';
import { useT } from '../hooks/useT.js';
import { Eyebrow } from './Eyebrow.jsx';

function SlideshowFigure({ frame, isBefore, idx, onSelect }) {
  const count = frame.shots.length;

  return (
    <figure
      className="group relative overflow-hidden rounded-[18px] border border-[var(--line)] bg-white"
      style={{
        boxShadow: '0 30px 60px -30px rgba(60,40,20,0.15)',
        transform: isBefore ? 'rotate(-0.5deg)' : 'rotate(0.4deg)',
        isolation: 'isolate',
        WebkitMaskImage: '-webkit-radial-gradient(white, black)',
      }}
    >
      <span
        className={`pointer-events-none absolute left-5 top-5 z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] backdrop-blur-md ${
          isBefore
            ? 'bg-[var(--ink)]/85 text-[var(--bg)]'
            : 'bg-white/95 text-[var(--ink)] ring-1 ring-[var(--ink)]/10'
        }`}
      >
        {!isBefore && (
          <svg viewBox="0 0 12 12" width="9" height="9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent)]">
            <path d="M2.5 6l2.5 2.5L9.5 3.5" />
          </svg>
        )}
        {frame.label}
      </span>

      <div className="relative aspect-[5/3.3] overflow-hidden rounded-t-[17px] bg-[var(--bg-2)]">
        {frame.shots.map((shot, i) => (
          <img
            key={shot.src}
            src={shot.src}
            alt={shot.caption}
            loading={i === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-[800ms] ${
              i === idx ? 'opacity-100' : 'opacity-0'
            } ${isBefore ? 'saturate-[0.9]' : ''} ${i === idx ? 'group-hover:scale-[1.02]' : ''}`}
            style={{ transitionProperty: 'opacity, transform' }}
          />
        ))}

        {/* Indicator dots (only when multiple shots) */}
        {count > 1 && (
          <div className="absolute bottom-3 right-3 z-10 flex gap-1.5">
            {frame.shots.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onSelect(i)}
                aria-label={`Přepnout na\u00a0snímek ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx
                    ? `w-5 ${isBefore ? 'bg-white' : 'bg-white'}`
                    : `w-1.5 ${isBefore ? 'bg-white/40 hover:bg-white/70' : 'bg-white/50 hover:bg-white/80'}`
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <figcaption className="flex items-center justify-between gap-3 border-t border-[var(--line)] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)]">
        <span>{frame.shots[idx].caption}</span>
      </figcaption>
    </figure>
  );
}

export default function CaseStudies() {
  const { t } = useT();
  const c = t.caseStudy;

  // Shared slide index across the Před/Po pair so they stay synced
  const shotCount = Math.min(c.before.shots.length, c.after.shots.length);
  const [slideIdx, setSlideIdx] = useState(0);
  useEffect(() => {
    if (shotCount <= 1) return;
    const id = setInterval(() => setSlideIdx((i) => (i + 1) % shotCount), 5000);
    return () => clearInterval(id);
  }, [shotCount]);

  return (
    <section
      id="pripad"
      className="bg-[var(--bg-2)] px-[var(--pad)] py-[clamp(72px,10vw,140px)]"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="grid items-start gap-[clamp(32px,5vw,72px)] lg:grid-cols-[1fr_1.1fr]">
          {/* Story */}
          <div>
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2>{c.title}</h2>
            <p className="mb-8 max-w-[54ch] text-[clamp(18px,1.6vw,22px)] leading-[1.5] text-[var(--ink-2)]">
              {c.lead}
            </p>

            {c.steps.map((step) => (
              <div
                key={step.label}
                className="case-step flex flex-col gap-3 border-b border-[var(--line)] py-6 sm:grid sm:gap-5 sm:grid-cols-[5rem_1fr]"
              >
                <div className="pt-0 sm:pt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)]">
                  {step.label}
                </div>
                <div>
                  <h4 className="mb-1.5 font-serif text-[24px]">{step.title}</h4>
                  <p className="m-0 text-[15.5px] text-[var(--ink-2)]">{step.body}</p>
                </div>
              </div>
            ))}

            <div className="case-step flex flex-col gap-3 py-6 sm:grid sm:gap-5 sm:grid-cols-[5rem_1fr]">
              <div className="pt-0 sm:pt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)]">
                {c.resultLabel}
              </div>
              <div>
                <h4 className="mb-3 font-serif text-[24px] text-[var(--accent)]">{c.resultTitle}</h4>
                <div className="mt-2 grid grid-cols-3 gap-3">
                  {c.results.map((r, i) => (
                    <div
                      key={i}
                      className="rounded-[10px] border border-[var(--line)] bg-[var(--bg)] px-3.5 py-3"
                    >
                      <div className="font-serif text-[28px] leading-none text-[var(--ink)]">
                        {r.num}
                      </div>
                      <div className="mt-1 text-[12px] text-[var(--muted)]">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Before / After slideshow pair */}
          <div>
            <div className="space-y-4">
              <SlideshowFigure frame={c.before} isBefore={true} idx={slideIdx} onSelect={setSlideIdx} />
              <SlideshowFigure frame={c.after} isBefore={false} idx={slideIdx} onSelect={setSlideIdx} />

              <div className="flex items-center justify-between border-t border-[var(--line)] pt-4 font-mono text-[13px]">
                <span className="text-[var(--muted)]">{c.visualLabel}</span>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--accent)] no-underline hover:underline"
                >
                  {c.link}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
