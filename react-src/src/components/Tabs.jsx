import { useRef, useState, useEffect } from 'react';

export default function Tabs({ items, value, onChange, ariaLabel = 'Filter' }) {
  const listRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const active = list.querySelector(`[data-value="${value}"]`);
    if (!active) return;
    const listRect = list.getBoundingClientRect();
    const activeRect = active.getBoundingClientRect();
    setIndicator({ left: activeRect.left - listRect.left, width: activeRect.width });
  }, [value, items]);

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label={ariaLabel}
      className="relative inline-flex items-center gap-1 rounded-full border border-purple-500/20 bg-purple-500/[0.04] p-1 backdrop-blur-xl"
    >
      <span
        className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-purple-500/25 to-fuchsia-500/25 ring-1 ring-purple-400/40 shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all duration-300 ease-out"
        style={{ left: indicator.left, width: indicator.width }}
        aria-hidden="true"
      />
      {items.map((item) => {
        const active = value === item;
        return (
          <button
            key={item}
            type="button"
            role="tab"
            data-value={item}
            aria-selected={active}
            onClick={() => onChange(item)}
            className={`relative z-10 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-200 ${
              active ? 'text-white' : 'text-zinc-400 hover:text-white'
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
