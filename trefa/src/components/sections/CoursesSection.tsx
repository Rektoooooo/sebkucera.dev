"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const courses = [
  { date: "Termín od 11. 4.", status: "full" },
  { date: "Termín od 2. 5.", status: "last" },
  { date: "Termín od 23. 5.", status: "open" },
  { date: "Termín od 13. 6.", status: "open" },
];

const statusStyles: Record<string, { bg: string; text: string; label: string }> = {
  full: { bg: "bg-red-50", text: "text-red-500", label: "Obsazeno" },
  last: { bg: "bg-amber-50", text: "text-amber-600", label: "Poslední volná místa" },
  open: { bg: "bg-emerald-50", text: "text-emerald-600", label: "Volné" },
};

const categories = [
  { code: "AM", name: "AM", minAge: "od 15 let", desc: "Fichtly do konstrukční rychlosti 45 km/h a objemu motoru do 50 ccm" },
  { code: "A1", name: "A1", minAge: "od 16 let", desc: "Do 125 ccm" },
  { code: "A2", name: "A2", minAge: "od 18 let", desc: "Do 35 kW" },
  { code: "A", name: "A neomezené", minAge: "od 24 let (ev. 2 roky praxe A2)", desc: "V téhle kategorii můžete jezdit na jakékoliv motorce schválené do provozu… o to větší ale od nás dostanete záhul!" },
  { code: "B", name: "B", minAge: "od 18 let", desc: "Prostě auto, no… volant, pedály a tak" },
  { code: "B96", name: "B96", minAge: "", desc: "Rozšíření sk. B na 4 250 kg" },
  { code: "B+E", name: "B+E", minAge: "od 18 let", desc: "Auto s vlekem (3,5 + 3,5 t) — podmínkou je mít řidičák na sk. B" },
  { code: "VŘO", name: "Vrácení řidičského oprávnění", minAge: "", desc: "Až přijde čas na vrácení řidičáku z čistírny, tak vám s tím pomůžeme… ale už nedělejte lumpárny!" },
];

export default function CoursesSection() {
  return (
    <section id="kurzy" className="bg-surface-alt py-[var(--section-gap)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          tag="Kurzy"
          title="Chci řidičák!"
          subtitle=""
        />

        {/* Intro text */}
        <AnimatedSection>
          <div className="mx-auto mb-14 max-w-3xl space-y-4 text-center text-[15px] leading-relaxed text-muted">
            <p>
              V Čechách má řidičské oprávnění necelých 8 milionů lidí. Rozhodnutím „chci řidičák"
              to všechno začíná! Co pro to musíte udělat? Nejprve si vybrat, kdo vás do světa provozu přivede.
            </p>
            <p>
              My nejsme nejlevnější, nejrychlejší, ani vám nezajistíme protekci u zkoušek. Naším cílem
              je naučit vás perfektně ovládat motorku, auto, náklaďák nebo traktor. Tak, aby pro vás
              závěrečná zkouška byla pouze exhibicí. Budete se těšit na den zkoušky a pochvalu od
              zkušebního komisaře.
            </p>
          </div>
        </AnimatedSection>

        {/* Course dates */}
        <AnimatedSection>
          <div className="mb-14 overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--card-shadow)]">
            <div className="border-b border-border bg-surface-alt/50 px-5 py-3">
              <h3 className="text-sm font-semibold text-heading">Kdy můžete začít?</h3>
            </div>
            <div className="divide-y divide-border-light">
              {courses.map((c, i) => {
                const s = statusStyles[c.status];
                return (
                  <div key={i} className="flex items-center justify-between px-5 py-3.5 transition-colors hover:bg-surface-alt/30">
                    <span className="text-sm font-medium text-heading">{c.date}</span>
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${s.bg} ${s.text}`}>
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="border-t border-border bg-surface-alt/30 px-5 py-4">
              <p className="mb-3 text-sm text-muted">Jdete do toho s námi?</p>
              <a
                href="/trefa/prihlasit"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(2,132,199,0.3)] transition-all hover:bg-accent-dark hover:shadow-[0_4px_20px_rgba(2,132,199,0.4)]"
              >
                Přihlásit se
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* License categories grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.code} delay={i * 0.06}>
              <div className="card-lift group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-[var(--card-shadow)]">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/[0.07] font-[family-name:var(--font-display)] text-lg font-bold text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  {cat.code}
                </div>
                <h3 className="text-base font-semibold text-heading">{cat.name}</h3>
                {cat.minAge && (
                  <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-light">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
                    </svg>
                    {cat.minAge}
                  </div>
                )}
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{cat.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
