import { useT } from '../hooks/useT.js';
import { useModal } from './ModalContext.jsx';
import { Eyebrow } from './Eyebrow.jsx';

const icons = [
  (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 17L10 3L17 17M6 13H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L12.5 7L18 8L14 12L15 17.5L10 14.8L5 17.5L6 12L2 8L7.5 7L10 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 10C3 6.13 6.13 3 10 3C13.87 3 17 6.13 17 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M10 6V10L12.5 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14 14L17 17M17 17V14M17 17H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
];

export default function SEO() {
  const { t } = useT();
  const { open } = useModal();
  const s = t.seo;

  return (
    <section id="seo" className="px-[var(--pad)] py-[clamp(72px,10vw,140px)]">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-10">
          <div>
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <h2>
              {s.titleLead} <em className="text-[var(--accent)]">{s.titleEm}</em>
            </h2>
          </div>
          <p className="max-w-[44ch] text-[clamp(18px,1.6vw,22px)] leading-[1.5] text-[var(--ink-2)]">
            {s.lead}
          </p>
        </div>

        <div className="grid items-start gap-[clamp(32px,4vw,56px)] lg:grid-cols-2">
          {/* Benefits */}
          <div>
            <h3 className="mb-6 border-b border-[var(--line)] pb-4 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--muted)]">
              {s.leftTitle}
            </h3>
            <div className="grid gap-1.5">
              {s.benefits.map((b, i) => (
                <div
                  key={i}
                  className="grid items-start gap-[18px] border-b border-[var(--line)] py-5 last:border-b-0"
                  style={{ gridTemplateColumns: '42px 1fr' }}
                >
                  <div className="grid h-[42px] w-[42px] place-items-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                    {icons[i]}
                  </div>
                  <div>
                    <h4 className="mb-1 font-serif text-[22px] font-medium leading-[1.2]">
                      {b.title}
                    </h4>
                    <p className="m-0 text-[15px] leading-[1.5] text-[var(--ink-2)]">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist */}
          <div>
            <h3 className="mb-6 border-b border-[var(--line)] pb-4 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--muted)]">
              {s.rightTitle}
            </h3>
            <ul className="list-none p-0">
              {s.checklist.map((item, i) => (
                <li
                  key={i}
                  className="grid items-start gap-3.5 border-b border-dashed border-[var(--line)] py-3.5 text-[15.5px] leading-[1.45] text-[var(--ink-2)] last:border-b-0"
                  style={{ gridTemplateColumns: '20px 1fr' }}
                >
                  <span className="mt-[2px] grid h-5 w-5 place-items-center rounded-full bg-[var(--ink)] text-[10px] font-bold text-[var(--bg)]">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Seznam callout */}
        <div
          className="mt-[clamp(56px,7vw,80px)] grid items-center gap-[clamp(24px,4vw,48px)] rounded-[calc(var(--radius)*1.4)] bg-[var(--ink)] p-[clamp(32px,5vw,56px)] text-[var(--bg)] md:grid-cols-[auto_1fr]"
        >
          <div
            className="font-serif italic text-[clamp(90px,14vw,160px)] leading-[0.9] text-[var(--accent)]"
          >
            {s.seznam.big}
          </div>
          <div>
            <p className="m-0 mb-2.5 font-serif text-[clamp(22px,2.2vw,28px)] leading-[1.3] text-[var(--bg)]">
              {s.seznam.textLead}
              <strong className="font-normal text-[var(--accent)]">{s.seznam.textBrand}</strong>
              {s.seznam.textTail}
            </p>
            <small
              className="font-mono text-[11px] uppercase tracking-[0.08em]"
              style={{ color: 'color-mix(in srgb, var(--bg) 55%, transparent)' }}
            >
              {s.seznam.caption}
            </small>
          </div>
        </div>

        {/* Proof cards */}
        <div className="mt-[clamp(56px,7vw,80px)] grid gap-4 md:grid-cols-2">
          {s.proof.map((p, i) => (
            <div key={i} className="rounded-[var(--radius)] border border-[var(--line)] bg-[var(--bg-2)] p-7">
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)]">
                {p.label}
              </div>
              <div className="mb-2 font-serif text-[clamp(32px,4vw,44px)] leading-none">
                <em className="font-normal text-[var(--accent)]">{p.big}</em>
                {p.suffix}
              </div>
              <div className="text-[14px] leading-[1.5] text-[var(--ink-2)]">{p.desc}</div>
            </div>
          ))}
        </div>

        {/* Mini FAQ */}
        <div className="mt-[clamp(56px,7vw,80px)] grid gap-4 md:grid-cols-3">
          {s.miniFaq.map((q, i) => (
            <div key={i} className="rounded-[var(--radius)] border border-[var(--line)] bg-[var(--bg)] p-6">
              <h4 className="m-0 mb-2.5 font-serif text-[20px] font-medium leading-[1.25]">
                <span className="mr-2 italic font-normal text-[var(--muted)]">Q.</span>
                {q.q}
              </h4>
              <p className="m-0 text-[14.5px] leading-[1.55] text-[var(--ink-2)]">{q.a}</p>
            </div>
          ))}
        </div>

        {/* Final SEO CTA */}
        <div className="mt-[clamp(56px,7vw,80px)] border-t border-[var(--line)] pt-[clamp(40px,5vw,64px)] text-center">
          <h3 className="mx-auto mb-5 max-w-[26ch] font-serif text-[clamp(26px,3vw,34px)] font-normal leading-[1.2]">
            {s.ctaLead} <em className="text-[var(--accent)]">{s.ctaEm}</em>
          </h3>
          <button
            type="button"
            onClick={() => open('SEO audit')}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-[22px] py-[14px] text-[15px] font-medium text-[var(--bg)] transition-all hover:-translate-y-0.5 hover:bg-[var(--accent)]"
          >
            {s.ctaBtn} <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
