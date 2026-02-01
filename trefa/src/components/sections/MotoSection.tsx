"use client";

import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { formatPrice } from "@/lib/utils";

const variants = [
  {
    title: "Základní kurz",
    desc: "Pro úplné začátečníky. Seznámení s motocyklem, základní manévry.",
    price: 3500,
    features: ["2 hodiny na cvičné ploše", "Zapůjčení motocyklu", "Ochranné pomůcky", "Instruktor 1:1"],
    accent: false,
  },
  {
    title: "Rozšířený kurz",
    desc: "Pokročilé manévry a příprava na jízdy v provozu.",
    price: 5500,
    features: ["4 hodiny na cvičné ploše", "Zapůjčení motocyklu", "Ochranné pomůcky", "Instruktor 1:1", "Videozáznam"],
    accent: true,
  },
  {
    title: "Bezpečná jízda",
    desc: "Pro řidiče s oprávněním. Krizové situace a defenzivní jízda.",
    price: 4500,
    features: ["3 hodiny výcviku", "Krizové brždění", "Vyhýbací manévry", "Jízda v zatáčkách"],
    accent: false,
  },
  {
    title: "Individuální",
    desc: "Trénink šitý na míru vašim potřebám.",
    price: 1500,
    features: ["1 hodina výcviku", "Individuální program", "Vlastní/zapůjčený motocykl", "Flexibilní termín"],
    accent: false,
  },
];

export default function MotoSection() {
  return (
    <section id="motoskola" className="py-[var(--section-gap)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          tag="Motoškola"
          title="Výcvik na motocyklech Yamaha"
          subtitle="4 varianty tréninku pro začátečníky i pokročilé jezdce"
        />

        {/* Hero image for moto section */}
        <AnimatedSection>
          <div className="mb-12 overflow-hidden rounded-2xl">
            <Image
              src="/trefa/images/vozovy-park.png"
              alt="Motocykly Yamaha Autoškola Trefa"
              width={1200}
              height={500}
              className="h-64 w-full object-cover md:h-80"
            />
          </div>
        </AnimatedSection>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {variants.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.08}>
              <div
                className={`card-lift flex h-full flex-col rounded-2xl border p-5 shadow-[var(--card-shadow)] ${
                  v.accent
                    ? "border-accent/30 bg-gradient-to-b from-accent/[0.04] to-white ring-1 ring-accent/10"
                    : "border-border bg-white"
                }`}
              >
                {v.accent && (
                  <span className="mb-3 self-start rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                    Oblíbený
                  </span>
                )}
                <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-heading">
                  {v.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{v.desc}</p>
                <div className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold text-accent">
                  {formatPrice(v.price)}
                </div>
                <ul className="mt-4 flex-1 space-y-2">
                  {v.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
                  className={`mt-5 w-full rounded-xl py-2.5 text-sm font-semibold transition-all ${
                    v.accent
                      ? "bg-accent text-white shadow-[0_2px_12px_rgba(2,132,199,0.3)] hover:bg-accent-dark"
                      : "border border-border bg-surface-alt text-heading hover:border-accent/30"
                  }`}
                >
                  Mám zájem
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
