"use client";

import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const vehicles = [
  // Cars
  { name: "Honda Civic Tourer", type: "car", specs: "Osobní automobil", image: "/trefa/images/13-Honda-Civic-Tourer.jpg" },
  { name: "Renault Trafic", type: "car", specs: "Doprovodné vozidlo motoškoly", image: "/trefa/images/12-Renault-Trafic.jpg" },
  { name: "Přívěs Vezeko", type: "car", specs: "Přeprava motocyklů", image: "/trefa/images/14-Trailer-Vezeko.jpg" },
  // Motorcycles
  { name: "Yamaha MT-125", type: "motorcycle", specs: "125 ccm — kategorie A1", image: "/trefa/images/04-Yamaha-MT-125.jpg" },
  { name: "Yamaha XSR 125 (černá)", type: "motorcycle", specs: "125 ccm — kategorie A1", image: "/trefa/images/03-Yamaha-XSR-125-Black.jpg" },
  { name: "Yamaha XSR 125 (žlutá)", type: "motorcycle", specs: "125 ccm — kategorie A1", image: "/trefa/images/02-Yamaha-XSR-125-Yellow.jpg" },
  { name: "Yamaha MT-03", type: "motorcycle", specs: "321 ccm — kategorie A2", image: "/trefa/images/09-Yamaha-MT-03.jpg" },
  { name: "Yamaha MT-07 (šedá)", type: "motorcycle", specs: "689 ccm — kategorie A", image: "/trefa/images/06-Yamaha-MT-07-Gray.jpg" },
  { name: "Yamaha MT-07 (černá)", type: "motorcycle", specs: "689 ccm — kategorie A", image: "/trefa/images/08-Yamaha-MT-07-Black.jpg" },
  { name: "Yamaha MT-07 (cyan)", type: "motorcycle", specs: "689 ccm — kategorie A", image: "/trefa/images/05-Yamaha-MT-07-Cyan.jpg" },
  { name: "Yamaha MT-07 Y-AMT", type: "motorcycle", specs: "689 ccm — automat, kategorie A", image: "/trefa/images/07-Yamaha-MT-07-Y-AMT-Automat.jpg" },
  { name: "Yamaha MT-09", type: "motorcycle", specs: "890 ccm — kategorie A", image: "/trefa/images/10-Yamaha-MT-09.jpg" },
  { name: "Yamaha MT-09 SP", type: "motorcycle", specs: "890 ccm — kategorie A", image: "/trefa/images/11-Yamaha-MT-09SP.jpg" },
  { name: "Yamaha NMAX 125", type: "motorcycle", specs: "125 ccm — skútr, kategorie A1/AM", image: "/trefa/images/yamaha-nmax.jpg" },
];

export default function FleetSection() {
  const cars = vehicles.filter((v) => v.type === "car");
  const motos = vehicles.filter((v) => v.type === "motorcycle");

  const VehicleCard = ({ v, i }: { v: typeof vehicles[0]; i: number }) => (
    <AnimatedSection delay={i * 0.06}>
      <div className="card-lift overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--card-shadow)]">
        <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-surface-alt to-border-light">
          <Image src={v.image} alt={v.name} width={500} height={375} className="h-full w-full object-cover" />
        </div>
        <div className="p-4">
          <h4 className="font-semibold text-heading">{v.name}</h4>
          <p className="mt-0.5 text-sm text-muted">{v.specs}</p>
        </div>
      </div>
    </AnimatedSection>
  );

  return (
    <section id="vozovy-park" className="bg-surface-alt py-[var(--section-gap)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          tag="Vozový park"
          title="Moderní vozidla pro výcvik"
          subtitle="Učíme na spolehlivých a bezpečných vozidlech"
        />

        <AnimatedSection>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Automobily & doprovodná vozidla</h3>
        </AnimatedSection>
        <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((v, i) => <VehicleCard key={v.name} v={v} i={i} />)}
        </div>

        <AnimatedSection>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Motocykly</h3>
        </AnimatedSection>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {motos.map((v, i) => <VehicleCard key={v.name} v={v} i={i} />)}
        </div>
      </div>
    </section>
  );
}
