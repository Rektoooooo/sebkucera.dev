"use client";

import { useRef, useState, useEffect } from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const reviews = [
  {
    name: "L. P.",
    rating: 5,
    text: "Perfektní autoškola, kterou mohu jen doporučit. Úžasný přístup instruktorů — motorkářů, kteří to dělají srdcem. Kvalitní motorky, skvělé zázemí a praktický výcvik na jedničku.",
  },
  {
    name: "I. N.",
    rating: 5,
    text: "Naprosto super atmosféra bez stresů a s přátelskou atmosférou. Nové krásné stroje a profesionální přístup bez skrytých poplatků.",
  },
  {
    name: "F. P.",
    rating: 5,
    text: "Asi první \u201Eškola\u201C, kam jsem chodil fakt rád a přitom jsem se toho spoustu naučil. Fajn parta, krásný motorky, lidský přístup.",
  },
  {
    name: "S. S.",
    rating: 5,
    text: "Precizní výcvik a profesionalita instruktorů na úplně jiné úrovni, než jsem zažil jinde. Doporučuji každému, kdo to myslí s motorkama vážně.",
  },
  {
    name: "M. F.",
    rating: 5,
    text: "Ze začátečníka udělali sebevědomého jezdce. Trpělivý přístup, skvělá metodika a hlavně — naučí vás jezdit, ne jen projít zkouškou.",
  },
  {
    name: "P. Q.",
    rating: 5,
    text: "Profesionální přístup, kvalitní vybavení a příjemná atmosféra. Tady se člověk cítí v dobrých rukou od první hodiny.",
  },
  {
    name: "M. H.",
    rating: 5,
    text: "Výborná komunikace, skvělé prostředí a instruktoři, kteří opravdu vědí, co dělají. Nejlepší volba v Praze.",
  },
  {
    name: "A. J.",
    rating: 5,
    text: "Bezpečný a personalizovaný přístup. Každá hodina měla smysl a cítil jsem, že se opravdu zlepšuji.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.75;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="recenze" className="py-[var(--section-gap)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          tag="Recenze"
          title="Co o nás říkají naši absolventi"
          subtitle="4,9 z 5 hvězdiček na Google — 65 recenzí"
        />

        <AnimatedSection>
          {/* Google rating summary */}
          <div className="mx-auto mb-10 flex items-center justify-center gap-3">
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-heading">4,9</span>
              <Stars count={5} />
              <span className="text-sm text-muted">(65 recenzí)</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Scrollable review cards */}
        <div className="relative">
          {/* Fade edges */}
          <div
            className={`pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-r from-[var(--background)] to-transparent transition-opacity ${canScrollLeft ? "opacity-100" : "opacity-0"}`}
          />
          <div
            className={`pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-l from-[var(--background)] to-transparent transition-opacity ${canScrollRight ? "opacity-100" : "opacity-0"}`}
          />

          {/* Arrow buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border bg-white p-2 shadow-md transition-colors hover:bg-surface-alt"
              aria-label="Předchozí recenze"
            >
              <svg className="h-4 w-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border bg-white p-2 shadow-md transition-colors hover:bg-surface-alt"
              aria-label="Další recenze"
            >
              <svg className="h-4 w-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((r) => (
              <AnimatedSection key={r.name} delay={0.05}>
                <div className="flex h-[260px] w-[320px] shrink-0 flex-col rounded-2xl border border-border bg-white p-6 shadow-[var(--card-shadow)]">
                  <Stars count={r.rating} />
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                      {r.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-heading">{r.name}</p>
                      <p className="text-xs text-muted-light">Google recenze</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* CTA card */}
            <AnimatedSection delay={0.1}>
              <a
                href="https://www.google.com/maps/place/Auto%C5%A1kola+Trefa/@50.0744624,14.3114842,17z/data=!3m1!4b1!4m6!3m5!1s0x470bbe30b4066183:0xfac8d91515ac2408!8m2!3d50.074459!4d14.3140591!16s%2Fg%2F11hzv5jqlb?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[260px] w-[320px] shrink-0 flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-accent/30 bg-accent/5 p-6 text-center transition-colors hover:border-accent/50 hover:bg-accent/10"
              >
                <svg className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <p className="text-sm font-semibold text-heading">Přečíst všech 65 recenzí</p>
                <p className="text-xs text-muted">na Google Maps</p>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
