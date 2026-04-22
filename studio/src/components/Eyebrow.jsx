export function Eyebrow({ children, className = '' }) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.08em] text-[var(--muted)] mb-5 font-mono ${className}`}
    >
      <span className="inline-block h-px w-7 bg-current" aria-hidden="true" />
      {children}
    </div>
  );
}
