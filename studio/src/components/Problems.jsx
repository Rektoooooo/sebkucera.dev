import { useT } from '../hooks/useT.js';
import { Eyebrow } from './Eyebrow.jsx';

export default function Problems() {
  const { t } = useT();
  const p = t.problems;

  return (
    <section
      id="problemy"
      className="bg-[var(--bg-2)] px-[var(--pad)] py-[clamp(72px,10vw,140px)]"
    >
      <div className="mx-auto max-w-[1180px]">
        <Eyebrow>{p.eyebrow}</Eyebrow>
        <h2>{p.title}</h2>
        <p className="max-w-[54ch] text-[clamp(18px,1.6vw,22px)] leading-[1.5] text-[var(--ink-2)]">
          {p.lead}
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {p.cards.map((card) => (
            <div
              key={card.num}
              className="flex h-full flex-col gap-3 rounded-[var(--radius)] border border-[var(--line)] bg-[var(--bg)] p-8 transition-all hover:-translate-y-[3px] hover:border-[var(--ink-2)]"
            >
              <div className="font-serif text-[42px] italic leading-none text-[var(--ink-2)] opacity-40">
                {card.num}
              </div>
              <h3 className="mb-1">{card.title}</h3>
              <p className="text-[16px] text-[var(--ink-2)]">{card.problem}</p>
              <div className="mt-auto border-t border-dashed border-[var(--line)] pt-4 text-[14px] text-[var(--ink-2)]">
                <b className="font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--accent)]">
                  {p.solutionLabel}
                </b>{' '}
                {card.solution}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
