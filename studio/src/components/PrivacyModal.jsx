import { useEffect } from 'react';
import { useT } from '../hooks/useT.js';

function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) {
      return <strong key={i}>{p.slice(2, -2)}</strong>;
    }
    return <span key={i}>{p}</span>;
  });
}

export default function PrivacyModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  const { t } = useT();
  const p = t.privacy;
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4 py-8 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-title"
        className="relative flex max-h-full w-full max-w-[720px] flex-col overflow-hidden rounded-[20px] border border-[var(--line)] bg-[var(--bg)]"
        style={{ boxShadow: '0 40px 80px -20px rgba(0,0,0,0.4)' }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={p.close}
          className="absolute right-3.5 top-3.5 z-10 grid h-9 w-9 place-items-center rounded-full border-none bg-[var(--bg)]/80 text-[var(--muted)] backdrop-blur hover:bg-[var(--bg-2)] hover:text-[var(--ink)]"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <div className="overflow-y-auto px-6 py-8 md:px-10 md:py-10">
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
            {p.updated}
          </div>
          <h3 id="privacy-title" className="mb-6 font-serif text-[clamp(26px,3vw,34px)] leading-[1.15]">
            {p.title}
          </h3>

          <p className="mb-8 text-[15.5px] leading-[1.65] text-[var(--ink-2)]">
            {p.intro}
          </p>

          <div className="space-y-6">
            {p.sections.map((s) => (
              <section key={s.heading}>
                <h4 className="mb-2 font-serif text-[20px] font-medium leading-tight text-[var(--ink)]">
                  {s.heading}
                </h4>
                <p className="text-[15px] leading-[1.7] text-[var(--ink-2)]">
                  {renderInline(s.body)}
                </p>
              </section>
            ))}
          </div>
        </div>

        <div className="border-t border-[var(--line)] bg-[var(--bg)] px-6 py-4 text-right md:px-10">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-2.5 text-[14px] font-medium text-[var(--bg)] transition-colors hover:bg-[var(--accent)]"
          >
            {p.close}
          </button>
        </div>
      </div>
    </div>
  );
}
