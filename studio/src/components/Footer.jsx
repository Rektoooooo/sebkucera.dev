import { useT } from '../hooks/useT.js';

export default function Footer({ onPrivacy }) {
  const { t } = useT();
  const f = t.footer;

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg)] px-[var(--pad)] py-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <a href="#top" className="mb-3 flex items-center gap-2.5 font-semibold no-underline text-[var(--ink)]">
              <span
                className="grid h-7 w-7 place-items-center rounded-lg bg-[var(--ink)] text-[var(--bg)] font-serif italic text-lg"
              >
                {t.brandMark}
              </span>
              <span>{t.brand}</span>
            </a>
            <p className="mt-2 max-w-[36ch] text-[14.5px] text-[var(--muted)]">{f.tagline}</p>
          </div>

          <div>
            <h4 className="mb-3.5 font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-[var(--muted)]">
              {f.navTitle}
            </h4>
            <ul className="list-none p-0 text-[14.5px]">
              {f.navLinks.map((l) => (
                <li key={l.href} className="py-1 text-[var(--ink-2)]">
                  <a href={l.href} className="no-underline text-[var(--ink-2)] hover:text-[var(--ink)]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3.5 font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-[var(--muted)]">
              {f.contactTitle}
            </h4>
            <ul className="list-none p-0 text-[14.5px]">
              <li className="py-1">
                <a href={`mailto:${f.email}`} className="no-underline text-[var(--ink-2)] hover:text-[var(--ink)]">
                  {f.email}
                </a>
              </li>
              <li className="py-1">
                <a href="tel:+420608949472" className="no-underline text-[var(--ink-2)] hover:text-[var(--ink)]">
                  {f.phone}
                </a>
              </li>
              <li className="py-1 text-[var(--ink-2)]">{f.city}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-[13px] text-[var(--muted)] sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {f.legalLines.map((line, i) => (
              <span key={i}>{line}</span>
            ))}
            {onPrivacy && (
              <button
                type="button"
                onClick={onPrivacy}
                className="underline decoration-[var(--line)] underline-offset-4 transition-colors hover:text-[var(--ink)] hover:decoration-[var(--accent)]"
              >
                {f.privacyLink}
              </button>
            )}
          </div>
          <span className="shrink-0 whitespace-nowrap">
            {f.made.split('◆')[0]}
            <span className="text-[var(--accent)]">◆</span>
            {f.made.split('◆')[1]}
          </span>
        </div>
      </div>
    </footer>
  );
}
