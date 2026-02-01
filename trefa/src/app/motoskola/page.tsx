import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Motoškola",
  description: "Motoškola na motocyklech Yamaha. 4 varianty tréninku pro začátečníky i pokročilé.",
};

const variants = [
  {
    title: "Základní kurz",
    description: "Pro úplné začátečníky. Seznámení s motocyklem, základní manévry na cvičné ploše.",
    price: 3500,
    features: ["2 hodiny na cvičné ploše", "Zapůjčení motocyklu", "Ochranné pomůcky", "Instruktor 1:1"],
  },
  {
    title: "Rozšířený kurz",
    description: "Prohloubení dovedností. Pokročilé manévry a příprava na jízdy v provozu.",
    price: 5500,
    features: ["4 hodiny na cvičné ploše", "Zapůjčení motocyklu", "Ochranné pomůcky", "Instruktor 1:1", "Videozáznam"],
  },
  {
    title: "Kurz bezpečné jízdy",
    description: "Pro řidiče s oprávněním. Nácvik krizových situací a defenzivní jízdy.",
    price: 4500,
    features: ["3 hodiny výcviku", "Krizové brždění", "Vyhýbací manévry", "Jízda v zatáčkách"],
  },
  {
    title: "Individuální trénink",
    description: "Trénink šitý na míru vašim potřebám. Domluvíme obsah i délku.",
    price: 1500,
    features: ["1 hodina výcviku", "Individuální program", "Vlastní nebo zapůjčený motocykl", "Flexibilní termín"],
  },
];

export default function MotoSchoolPage() {
  return (
    <>
      <PageHeader
        title="Motoškola"
        subtitle="Výcvik na motocyklech Yamaha pro začátečníky i pokročilé"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {variants.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-6">
                  <h3 className="text-xl font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted">{v.description}</p>
                  <p className="mt-4 text-3xl font-bold text-accent">
                    {formatPrice(v.price)}
                  </p>
                  <ul className="mt-4 flex-1 space-y-2">
                    {v.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted">
                        <svg className="h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/kontakt"
                    className="mt-6 block rounded-lg bg-accent px-4 py-2.5 text-center font-semibold text-background transition-colors hover:bg-accent-light"
                  >
                    Mám zájem
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
