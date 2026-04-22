import { useT } from '../hooks/useT.js';
import { Eyebrow } from './Eyebrow.jsx';

function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) {
      return <strong key={i}>{p.slice(2, -2)}</strong>;
    }
    if (p.startsWith('*') && p.endsWith('*')) {
      return <em key={i}>{p.slice(1, -1)}</em>;
    }
    return <span key={i}>{p}</span>;
  });
}

export default function About() {
  const { t } = useT();
  const a = t.about;

  return (
    <section id="omne" className="px-[var(--pad)] py-[clamp(80px,10vw,140px)]">
      {/* Centered, narrower container so the 2-column block sits in the middle of the page */}
      <div className="mx-auto flex max-w-[920px] flex-col items-center gap-[clamp(32px,5vw,56px)] lg:flex-row lg:items-center">
        {/* Photo */}
        <figure className="m-0 w-full max-w-[240px] shrink-0">
          <div className="overflow-hidden rounded-[12px] border border-[var(--line)] bg-[var(--paper)] shadow-[0_20px_40px_-20px_rgba(60,40,20,0.18)]">
            <img
              src={a.photo}
              alt="Sebastian Kučera"
              loading="lazy"
              className="block aspect-[4/5] w-full object-cover"
            />
          </div>
        </figure>

        {/* Text column */}
        <div className="w-full max-w-[60ch]">
          <Eyebrow>{a.eyebrow}</Eyebrow>

          <p className="about-lead">
            {a.paragraphs[0][0]}
            <span className="about-lead__name">{a.paragraphs[0][1]}</span>
            {a.paragraphs[0][2]}
          </p>

          {a.paragraphs.slice(1).map((para, i) => (
            <p key={i} className="about-prose">
              {renderInline(para)}
            </p>
          ))}

          <div className="mt-8 grid grid-cols-1 gap-5 border-t border-[var(--line)] pt-6 sm:grid-cols-3">
            {a.stats.map((s, i) => (
              <div key={i}>
                <div className="font-serif text-[clamp(32px,3.5vw,40px)] leading-none text-[var(--ink)]">
                  {s.num}
                </div>
                <div className="mt-2 text-[13px] leading-[1.5] text-[var(--muted)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
