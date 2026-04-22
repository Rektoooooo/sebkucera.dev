import { useT } from '../hooks/useT.js';
import { useModal } from './ModalContext.jsx';

export default function FinalCTA() {
  const { t } = useT();
  const { open } = useModal();
  const f = t.final;

  return (
    <section className="final-cta">
      {/* Subtle dot grid under everything */}
      <div className="final-cta__grid" aria-hidden="true" />

      {/* Giant ghosted "15" behind the title */}
      <div className="final-cta__ghost" aria-hidden="true">
        {f.ghost}
      </div>

      {/* Top + bottom hairline rules for editorial framing */}
      <div className="final-cta__rule final-cta__rule--top" aria-hidden="true" />
      <div className="final-cta__rule final-cta__rule--bottom" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1180px] px-[var(--pad)] py-[clamp(80px,11vw,160px)] text-center">
        {/* Eyebrow */}
        <div className="final-cta__eyebrow">
          <span className="final-cta__rule-inline" aria-hidden="true" />
          {f.eyebrow}
          <span className="final-cta__rule-inline" aria-hidden="true" />
        </div>

        {/* Title */}
        <h2 className="final-cta__title">{f.title}</h2>

        {/* Ornament */}
        <div className="final-cta__ornament" aria-hidden="true">
          <span />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1L8.5 5.5L13 7L8.5 8.5L7 13L5.5 8.5L1 7L5.5 5.5L7 1Z" stroke="currentColor" strokeWidth="1" />
          </svg>
          <span />
        </div>

        {/* Lead */}
        <p className="final-cta__lead">{f.lead}</p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => open()}
            className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--ink)] px-6 py-[15px] text-[15px] font-medium text-[var(--bg)] transition-all hover:-translate-y-0.5 hover:bg-[var(--bg)] hover:text-[var(--ink)]"
          >
            {f.ctaPrimary}
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </button>
          <a
            href={`tel:${f.tel}`}
            className="inline-flex flex-col items-center leading-[1.15] rounded-full border px-6 py-[11px] text-[15px] font-medium text-[var(--bg)] transition-all hover:border-[var(--bg)] hover:bg-[var(--bg)] hover:text-[var(--ink)]"
            style={{
              borderColor: 'color-mix(in srgb, var(--bg) 50%, transparent)',
            }}
          >
            <span>{f.ctaSecondary}</span>
            <span className="mt-0.5 font-mono text-[10px] tracking-[0.12em] opacity-80">
              {f.telDisplay}
            </span>
          </a>
        </div>

        {/* Trust row */}
        <ul className="final-cta__trust">
          {f.trust.map((t, i) => (
            <li key={i} className="final-cta__trust-item">
              <span className="final-cta__check" aria-hidden="true">
                <svg viewBox="0 0 12 12" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 6l2.5 2.5L9.5 3.5" />
                </svg>
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
