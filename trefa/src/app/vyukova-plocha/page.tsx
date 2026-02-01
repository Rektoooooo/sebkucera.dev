import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Výuková plocha",
  description: "Výuková plocha autoškoly Trefa v Brně. Vlastní cvičný areál pro bezpečný výcvik.",
};

export default function TrainingGroundsPage() {
  return (
    <>
      <PageHeader
        title="Výuková plocha"
        subtitle="Vlastní cvičný areál pro bezpečný a pohodlný výcvik"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <h2 className="text-2xl font-bold">O naší výukové ploše</h2>
              <div className="mt-4 space-y-4 text-muted">
                <p>
                  Disponujeme vlastní cvičnou plochou, kde probíhá praktický výcvik
                  na motocyklech. Plocha je vybavena překážkami pro nácvik všech
                  povinných manévrů.
                </p>
                <p>
                  Areál je snadno dostupný a nabízí dostatek prostoru pro bezpečný
                  a komfortní výcvik.
                </p>
              </div>

              <h3 className="mt-8 text-lg font-semibold">Vybavení areálu</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Asfaltový povrch",
                  "Kužely a překážky pro manévry",
                  "Zázemí pro studenty",
                  "Parkování zdarma",
                  "WC a občerstvení",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted">
                    <svg className="h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              {/* Gallery placeholder */}
              <div className="grid gap-4">
                <div className="aspect-video rounded-xl border border-border bg-surface" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-video rounded-xl border border-border bg-surface" />
                  <div className="aspect-video rounded-xl border border-border bg-surface" />
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-6 aspect-video rounded-xl border border-border bg-surface">
                <div className="flex h-full items-center justify-center text-muted">
                  Google Maps
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
