import { useT } from '../hooks/useT.js';
import { useModal } from './ModalContext.jsx';
import { Eyebrow } from './Eyebrow.jsx';

function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) {
      return <strong key={i}>{p.slice(2, -2)}</strong>;
    }
    return <span key={i}>{p}</span>;
  });
}

export default function FAQ() {
  const { t } = useT();
  const { open } = useModal();
  const f = t.faq;

  return (
    <section id="faq" className="px-[var(--pad)] py-[clamp(72px,10vw,140px)]">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid items-start gap-[clamp(32px,5vw,72px)] lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Eyebrow>{f.eyebrow}</Eyebrow>
            <h2>{f.title}</h2>
            <p className="max-w-[54ch] text-[clamp(18px,1.6vw,22px)] leading-[1.5] text-[var(--ink-2)]">
              {f.lead}
            </p>
            <button
              type="button"
              onClick={() => open()}
              className="mt-3 inline-flex items-center gap-2.5 rounded-full border border-[var(--ink)] bg-transparent px-[22px] py-[14px] text-[15px] font-medium text-[var(--ink)] transition-all hover:bg-[var(--ink)] hover:text-[var(--bg)]"
            >
              {f.cta} <span>→</span>
            </button>
          </div>

          <div className="border-t border-[var(--line)]">
            {f.items.map((item, i) => (
              <details
                key={i}
                className="group border-b border-[var(--line)] py-6"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-[22px] tracking-[-0.01em] text-[var(--ink)] transition-colors hover:text-[var(--accent)] [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <span
                    className="relative mt-1 grid h-6 w-6 flex-shrink-0 place-items-center transition-transform duration-[250ms] group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <span className="absolute h-px w-4 bg-[var(--ink-2)]" />
                    <span className="absolute h-4 w-px bg-[var(--ink-2)]" />
                  </span>
                </summary>
                <p className="faq-prose mt-3.5 max-w-[64ch] text-[16px] leading-[1.6] text-[var(--ink-2)]">
                  {renderInline(item.a)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
