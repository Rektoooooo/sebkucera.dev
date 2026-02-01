"use client";

import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const articles = [
  {
    title: "Nové motocykly Yamaha pro sezónu 2026",
    excerpt: "Do našeho vozového parku jsme zařadili nové motocykly Yamaha MT-125 a YZF-R125.",
    date: "2026-01-15",
    image: "/trefa/images/vozovy-park.png",
  },
  {
    title: "Zázemí pro studenty — nová pergola",
    excerpt: "Pro naše studenty jsme vybudovali novou odpočinkovou zónu s pergolou.",
    date: "2026-01-10",
    image: "/trefa/images/pergola.png",
  },
  {
    title: "Jak probíhá výuka v naší autoškole",
    excerpt: "Podívejte se, jak vypadá teoretická i praktická výuka u nás v autoškole.",
    date: "2025-12-20",
    image: "/trefa/images/ucebna2.png",
  },
];

export default function NewsSection() {
  return (
    <section id="aktuality" className="bg-surface-alt py-[var(--section-gap)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          tag="Aktuality"
          title="Novinky z autoškoly"
          subtitle="Informace o kurzech, událostech a novinkách"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 0.1}>
              <div className="card-lift flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--card-shadow)]">
                <div className="aspect-[16/9] overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    width={600}
                    height={340}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <time className="text-xs font-medium text-muted-light">
                    {new Date(a.date).toLocaleDateString("cs-CZ")}
                  </time>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-base font-semibold text-heading">
                    {a.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{a.excerpt}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
