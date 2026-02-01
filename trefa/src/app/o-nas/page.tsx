import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "O nás",
  description: "Seznamte se s Autoškolou Trefa. Profesionální výuka řízení v Brně od roku 2005.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="O nás"
        subtitle="Profesionální autoškola a motoškola v Brně"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <h2 className="text-2xl font-bold">Autoškola Trefa</h2>
              <div className="mt-4 space-y-4 text-muted">
                <p>
                  Autoškola Trefa působí v Brně a okolí. Nabízíme výcvik pro získání
                  řidičského oprávnění skupiny B (osobní automobily), A1 a AM (motocykly).
                </p>
                <p>
                  Naším cílem je připravit každého žáka na bezpečný a zodpovědný provoz
                  na silnicích. Klademe důraz na individuální přístup a kvalitní výuku.
                </p>
                <p>
                  Disponujeme moderním vozovým parkem a vlastní výukovou plochou pro
                  praktický výcvik na motocyklech.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              {/* YouTube video placeholder */}
              <div className="aspect-video overflow-hidden rounded-xl border border-border bg-surface">
                <div className="flex h-full items-center justify-center text-muted">
                  <p>Video se načítá...</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team section - will be data-driven later */}
      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection>
            <h2 className="mb-10 text-center text-3xl font-bold">Náš tým</h2>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Jan Novák", role: "Instruktor - automobily" },
              { name: "Petr Svoboda", role: "Instruktor - motocykly" },
              { name: "Marie Dvořáková", role: "Administrativa" },
            ].map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-surface-light p-6 text-center">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-border" />
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
