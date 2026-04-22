import { useT } from '../hooks/useT.js';

export default function Marquee() {
  const { t } = useT();
  // Duplicate track for seamless loop
  const items = [...t.marquee, ...t.marquee];
  return (
    <div
      className="overflow-hidden border-y border-[var(--line)] bg-[var(--bg)] py-5"
      aria-hidden="true"
    >
      <div
        className="flex gap-[60px] whitespace-nowrap font-serif italic text-[22px] text-[var(--muted)]"
        style={{ animation: 'studio-scroll 40s linear infinite' }}
      >
        <span className="flex items-center gap-[60px]">
          {items.map((word, i) => (
            <span key={i} className="inline-flex items-center gap-[60px]">
              {word}
              <span className="not-italic text-[var(--accent)]">✦</span>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
