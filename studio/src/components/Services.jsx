import { useEffect, useRef, useState } from 'react';
import { useT } from '../hooks/useT.js';
import { useModal } from './ModalContext.jsx';
import { Eyebrow } from './Eyebrow.jsx';

function Toggle({ active, onToggle, labelWeb, labelApps }) {
  const listRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const btn = list.querySelector(`[data-key="${active}"]`);
    if (!btn) return;
    setIndicator({
      left: btn.offsetLeft,
      width: btn.offsetWidth,
      ready: true,
    });
  }, [active]);

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label="Přepnout mezi weby a aplikacemi"
      className="relative inline-flex items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--bg)] p-1 text-[12px] font-medium"
    >
      <span
        aria-hidden="true"
        className="absolute top-1 bottom-1 rounded-full bg-[var(--ink)] transition-all duration-[350ms] ease-[cubic-bezier(.4,.1,.2,1)]"
        style={{
          left: indicator.left,
          width: indicator.width,
          opacity: indicator.ready ? 1 : 0,
        }}
      />
      {[
        { key: 'web', label: labelWeb },
        { key: 'apps', label: labelApps },
      ].map(({ key, label }) => {
        const on = active === key;
        return (
          <button
            key={key}
            data-key={key}
            type="button"
            role="tab"
            aria-selected={on}
            onClick={() => onToggle(key)}
            className={`relative z-10 rounded-full px-4 py-2 transition-colors duration-200 ${
              on ? 'text-[var(--bg)]' : 'text-[var(--ink-2)] hover:text-[var(--ink)]'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

function PackageCards({ cards, onOpen }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card, i) => {
        const isFeatured = card.variant === 'featured';
        const base = isFeatured
          ? 'relative flex flex-col rounded-[var(--radius)] border border-[var(--ink)] bg-[var(--ink)] text-[var(--bg)] px-7 pt-8 pb-7'
          : 'relative flex flex-col rounded-[var(--radius)] border border-[var(--line)] bg-[var(--bg)] px-7 pt-8 pb-7 transition-colors hover:border-[var(--ink-2)]';

        return (
          <article
            key={card.packageKey}
            className={`svc-card-enter ${base}`}
            style={{ animationDelay: `${i * 90}ms` }}
          >
            {isFeatured && card.ribbon && (
              <span className="absolute -top-3 left-7 rounded-full bg-[var(--accent)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
                {card.ribbon}
              </span>
            )}
            <h3
              className="mb-1.5 font-serif"
              style={{ color: isFeatured ? 'var(--bg)' : 'var(--ink)' }}
            >
              {card.name}
            </h3>
            <div
              className="mb-5 border-b pb-5 font-mono text-[11px] uppercase tracking-[0.04em]"
              style={{
                color: isFeatured
                  ? 'color-mix(in srgb, var(--bg) 55%, transparent)'
                  : 'var(--muted)',
                borderColor: isFeatured
                  ? 'color-mix(in srgb, var(--bg) 18%, transparent)'
                  : 'var(--line)',
              }}
            >
              {card.audience}
            </div>
            <div className="mb-6 flex items-baseline gap-2">
              <span
                className="text-[13px]"
                style={{
                  color: isFeatured
                    ? 'color-mix(in srgb, var(--bg) 60%, transparent)'
                    : 'var(--muted)',
                }}
              >
                {card.priceFrom}
              </span>
              <span
                className="font-serif text-[42px] leading-none"
                style={{ color: isFeatured ? 'var(--bg)' : 'var(--ink)' }}
              >
                {card.priceNum}
              </span>
              <span
                className="text-[13px]"
                style={{
                  color: isFeatured
                    ? 'color-mix(in srgb, var(--bg) 60%, transparent)'
                    : 'var(--muted)',
                }}
              >
                {card.priceUnit}
              </span>
            </div>

            <ul className="mb-7 flex-1 list-none p-0">
              {card.bullets.map((b, i) => (
                <li
                  key={i}
                  className="relative border-b border-dashed py-2.5 pl-7 text-[14.5px] leading-[1.45] last:border-b-0"
                  style={{
                    color: isFeatured
                      ? 'color-mix(in srgb, var(--bg) 80%, transparent)'
                      : 'var(--ink-2)',
                    borderColor: isFeatured
                      ? 'color-mix(in srgb, var(--bg) 15%, transparent)'
                      : 'var(--line)',
                  }}
                >
                  <span
                    className="absolute left-0 top-4 h-[2px] w-3.5"
                    style={{ backgroundColor: 'var(--accent)' }}
                  />
                  {b}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => onOpen(card.packageKey)}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-[22px] py-[14px] text-[15px] font-medium transition-all ${
                isFeatured
                  ? 'bg-[var(--accent)] text-white hover:bg-[var(--bg)] hover:text-[var(--ink)]'
                  : 'border border-[var(--ink)] bg-transparent text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)]'
              }`}
            >
              {card.cta} <span>→</span>
            </button>
          </article>
        );
      })}
    </div>
  );
}

export default function Services() {
  const { t } = useT();
  const { open } = useModal();
  const s = t.services;
  const [mode, setMode] = useState('web'); // 'web' | 'apps'

  const showingApps = mode === 'apps';

  return (
    <section id="sluzby" className="px-[var(--pad)] py-[clamp(72px,10vw,140px)]">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-14 flex flex-col items-center text-center">
          <Eyebrow className="mx-auto">{showingApps ? s.appsEyebrow : s.eyebrow}</Eyebrow>
          <h2 className="mx-auto max-w-[22ch]">{showingApps ? s.appsTitle : s.title}</h2>
          <p className="mx-auto mt-5 max-w-[56ch] text-[clamp(18px,1.6vw,22px)] leading-[1.5] text-[var(--ink-2)]">
            {showingApps ? s.appsLead : s.lead}
          </p>
          <div className="mt-8">
            <Toggle
              active={mode}
              onToggle={setMode}
              labelWeb={s.toggleWeb}
              labelApps={s.toggleApps}
            />
          </div>
        </div>

        <PackageCards key={mode} cards={showingApps ? s.iosCards : s.cards} onOpen={open} />
      </div>
    </section>
  );
}
