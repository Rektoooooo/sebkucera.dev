"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";
import { Mortarboard, Speedometer2, CarFront, TelephoneFill } from "react-bootstrap-icons";

const highlights = [
  {
    href: "#kurzy",
    title: "Kurzy",
    description: "Řidičské oprávnění skupiny B, A1, AM. Pravidelné termíny.",
    icon: <Mortarboard className="h-6 w-6" />,
  },
  {
    href: "#motoskola",
    title: "Motoškola",
    description: "Výcvik na motocyklech Yamaha. 4 varianty tréninku.",
    icon: <Speedometer2 className="h-6 w-6" />,
  },
  {
    href: "#vozovy-park",
    title: "Vozový park",
    description: "Moderní automobily a motocykly pro výcvik.",
    icon: <CarFront className="h-6 w-6" />,
  },
  {
    href: "#kontakt",
    title: "Kontakt",
    description: "Rádi vám poradíme s výběrem kurzu.",
    icon: <TelephoneFill className="h-6 w-6" />,
  },
];

export default function HighlightCards() {
  return (
    <section className="relative -mt-16 z-20 pb-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08}>
              <button
                onClick={() => document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: "smooth" })}
                className="card-lift group flex h-full w-full flex-col rounded-2xl border border-border/60 bg-white p-5 text-left shadow-[var(--card-shadow)]"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/[0.07] text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-heading">
                  {item.title}
                </h3>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
