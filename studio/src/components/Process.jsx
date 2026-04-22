import { useT } from '../hooks/useT.js';

export default function Process() {
  const { t } = useT();
  const p = t.process;

  return (
    <section
      id="proces"
      className="bg-[var(--ink)] px-[var(--pad)] py-[clamp(72px,10vw,140px)] text-[var(--bg)]"
    >
      <div className="mx-auto max-w-[1180px]">
        <div
          className="mb-5 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.08em]"
          style={{ color: 'color-mix(in srgb, var(--bg) 60%, transparent)' }}
        >
          <span
            className="inline-block h-px w-7"
            style={{ backgroundColor: 'color-mix(in srgb, var(--bg) 60%, transparent)' }}
            aria-hidden="true"
          />
          {p.eyebrow}
        </div>
        <h2 className="text-[var(--bg)]">{p.title}</h2>
        <p
          className="max-w-[54ch] text-[clamp(18px,1.6vw,22px)] leading-[1.5]"
          style={{ color: 'color-mix(in srgb, var(--bg) 75%, transparent)' }}
        >
          {p.lead}
        </p>

        <div
          className="mt-14 grid gap-0 border-t md:grid-cols-2 lg:grid-cols-4"
          style={{ borderColor: 'color-mix(in srgb, var(--bg) 15%, transparent)' }}
        >
          {p.steps.map((s, i) => (
            <div
              key={s.num}
              className="relative px-6 py-8 lg:px-6 lg:first:pl-0"
              style={{
                borderRight:
                  i < p.steps.length - 1
                    ? '1px solid color-mix(in srgb, var(--bg) 15%, transparent)'
                    : 'none',
              }}
            >
              <div className="mb-4 font-serif italic text-[56px] leading-none text-[var(--accent)]">
                {s.num}
              </div>
              <h3 className="mb-2 font-serif text-[24px] text-[var(--bg)]">{s.title}</h3>
              <p
                className="m-0 text-[15px]"
                style={{ color: 'color-mix(in srgb, var(--bg) 70%, transparent)' }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
