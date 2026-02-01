"use client";

import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const amenities = [
  "Šatna s toaletami, sprchou a uzamykatelnými skříňkami",
  "Možnost občerstvení",
  "Wi-Fi",
  "Čerpací stanice v dosahu",
  "Parkování přímo v areálu",
];

const facilities = [
  {
    title: "Pergola",
    description: "Nejčastěji se budeme potkávat venku pod pergolou. Což je v Praze taková oáza klidu, kde si řekneme pár slov před výcvikem. Pokud přijdete včas tak i s kafem a cigárkem.",
    image: "/trefa/images/pergola.png",
    small: false,
  },
  {
    title: "Zdravověda",
    description: "Může probíhat i prakticky, pokud se to někomu nepovede. My budeme ale vždy připraveni vás odklidit, abyste nepřekáželi ve výcviku ostatním žákům.",
    image: "/trefa/images/zdravoveda.png",
    small: false,
  },
  {
    title: "Učebna",
    description: "Máme bezva učebnu, kde si můžete pohodlně usednout a poslouchat výklad teorie pravidel provozu… ale protože radši ležíte doma, tak většinou zeje prázdnotou. To nevadí, my už vás známe a víte, že chcete jezdit a ne poslouchat výklad.",
    image: "/trefa/images/ucebna.png",
    small: false,
  },
  {
    title: "Sociální zařízení",
    description: "Jelikož máme sociální cítění, máme pro vás i sociální zařízení. Po výcviku se můžete dát do pucu, pokud dále pokračujete na rande. Co kdyby se to zvrtlo, že?",
    image: "/trefa/images/socialni-zazemi.png",
    small: true,
  },
  {
    title: "Toaletu",
    description: "Máme pro všech 72 pohlaví. Stejnou. Abyste se nehádali, že má někdo lepší. Nevylučujeme nikoho, kdo potřebuje vylučovat.",
    image: "/trefa/images/toaleta.png",
    small: true,
  },
  {
    title: "Žijeme v digitální době",
    description: "Takže jsme věčně zavalení papíry, žádostmi, výkazy a výhružnými dopisy. Budeme rádi, pokud nám i vy přinesete svou žádost.",
    image: "/trefa/images/kancelar.png",
    small: false,
  },
];

export default function TrainingGroundsSection() {
  return (
    <section id="vyukova-plocha" className="py-[var(--section-gap)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          tag="Výuková plocha"
          title="Výuková plocha přímo v Praze"
          subtitle="Nemusíte se trmácet nikam daleko — parkujete přímo u výukové plochy ve střeženém areálu"
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <AnimatedSection>
            <div className="space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                Výukovou plochu pro vás máme přímo v Praze. Nemusíte se trmácet nikam daleko.
                A aby to bylo úplně perfektní, tak parkujete přímo u výukové plochy ve střeženém
                areálu s možností šatny na převléknutí a toalet.
              </p>
              <p className="font-medium text-heading">
                Najdete nás na adrese Třanovského 622/11, Praha 6 (kousek od TRAM Bílá Hora)
                v areálu Státní zkušebny strojů, a.s.
              </p>
              <p>
                Vrátný vám zvedne závoru a budovu vrátnice objedete z druhé strany.
                Sedím z druhé strany vrátnice, doslova za zády vrátného…
              </p>
              <p>
                Jsou tam šipky Autoškola TREFA. Autem jezděte dovnitř, neparkujte venku.
                Kdo přijde pěšky, tak přes vrátnici. Přes plot nelezte, hlídá za ním Eliška!
              </p>
            </div>

            <h4 className="mt-8 mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Zázemí areálu
            </h4>
            <ul className="space-y-2.5">
              {amenities.map((a) => (
                <li key={a} className="flex items-center gap-2.5 text-sm text-muted">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-accent/10">
                    <svg className="h-3 w-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="space-y-4">
              {/* Map */}
              <div className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/trefa/images/vyukova-plocha-mapa.png"
                  alt="Mapa výukové plochy — Třanovského, Praha 6"
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Zigzag facility showcase */}
        <div className="mt-20">
          <AnimatedSection>
            <h3 className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Naše zázemí
            </h3>
            <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted">
              Podívejte se, co vás u nás čeká
            </p>
          </AnimatedSection>

          <div className="space-y-16">
            {facilities.map((f, i) => (
              <AnimatedSection key={f.title} delay={0.1}>
                <div className={`flex flex-col gap-8 lg:flex-row lg:items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className="lg:w-1/2">
                    <div className={`overflow-hidden rounded-2xl border border-border shadow-[var(--card-shadow)] ${f.small ? "max-w-sm mx-auto" : ""}`}>
                      <Image
                        src={f.image}
                        alt={f.title}
                        width={700}
                        height={450}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <h4 className="text-xl font-bold text-heading">{f.title}</h4>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
