import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Vozový park",
  description: "Moderní automobily a motocykly pro výcvik v autoškole Trefa.",
};

const vehicles = [
  { name: "Škoda Fabia", type: "car" as const, specs: "1.0 TSI, manuální převodovka" },
  { name: "Škoda Octavia", type: "car" as const, specs: "1.5 TSI, automatická převodovka" },
  { name: "Yamaha MT-125", type: "motorcycle" as const, specs: "125 ccm, 11 kW" },
  { name: "Yamaha YZF-R125", type: "motorcycle" as const, specs: "125 ccm, 11 kW" },
  { name: "Yamaha NMAX 125", type: "motorcycle" as const, specs: "125 ccm, skútr" },
];

export default function FleetPage() {
  return (
    <>
      <PageHeader
        title="Vozový park"
        subtitle="Učíme na moderních a spolehlivých vozidlech"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          {/* Cars */}
          <AnimatedSection>
            <h2 className="mb-6 text-2xl font-bold">Automobily</h2>
          </AnimatedSection>
          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles
              .filter((v) => v.type === "car")
              .map((v, i) => (
                <AnimatedSection key={v.name} delay={i * 0.1}>
                  <div className="rounded-xl border border-border bg-surface p-6">
                    <div className="mb-4 aspect-video rounded-lg bg-surface-light" />
                    <h3 className="font-semibold">{v.name}</h3>
                    <p className="text-sm text-muted">{v.specs}</p>
                  </div>
                </AnimatedSection>
              ))}
          </div>

          {/* Motorcycles */}
          <AnimatedSection>
            <h2 className="mb-6 text-2xl font-bold">Motocykly</h2>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles
              .filter((v) => v.type === "motorcycle")
              .map((v, i) => (
                <AnimatedSection key={v.name} delay={i * 0.1}>
                  <div className="rounded-xl border border-border bg-surface p-6">
                    <div className="mb-4 aspect-video rounded-lg bg-surface-light" />
                    <h3 className="font-semibold">{v.name}</h3>
                    <p className="text-sm text-muted">{v.specs}</p>
                  </div>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
