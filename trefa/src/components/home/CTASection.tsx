"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent via-accent-dark to-blue-800 py-20">
      {/* Decorative circles */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/[0.05]" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/[0.03]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 text-center lg:px-8">
        <AnimatedSection>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
            Připraveni na řidičák?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            Přihlaste se do dalšího kurzu nebo nás kontaktujte pro více informací.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => document.getElementById("kurzy")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-accent shadow-lg transition-all hover:shadow-xl"
            >
              Přihlásit se do kurzu
            </button>
            <button
              onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-xl border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Kontaktovat nás
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
