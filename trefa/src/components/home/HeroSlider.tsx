"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    heading: "Vaše cesta k řidičáku\nzačíná zde",
    subheading: "Profesionální výuka s vysokou úspěšností v Praze",
    image: "/images/hero-1.png",
  },
  {
    heading: "Motoškola na\nmotocyklech Yamaha",
    subheading: "Kurzy pro začátečníky i pokročilé jezdce",
    image: "/images/hero-2.png",
  },
  {
    heading: "Moderní vozový park\npro váš výcvik",
    subheading: "Učíme na nejnovějších vozidlech s nejlepší výbavou",
    image: "/images/hero-3.png",
  },
  {
    heading: "Špičkové motocykly\npro váš zážitek",
    subheading: "Jezdíme na nejnovějších modelech Yamaha",
    image: "/images/hero-4.png",
  },
  {
    heading: "Trefa Autoškola\nvaše správná volba",
    subheading: "Naše motorky poznáte na první pohled",
    image: "/images/hero-5.png",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-[92vh] overflow-hidden">
      {/* Background images with ken burns effect */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={`bg-${current}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.2, ease: "easeInOut" }, scale: { duration: 6, ease: "easeOut" } }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].image}
              alt="Autoškola Trefa"
              fill
              className="object-cover"
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark overlay — subtle enough to see the image, strong enough for text */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content — pushed to bottom-left */}
      <div className="relative z-10 flex min-h-[92vh] items-center">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="h-0.5 w-10 bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Autoškola & Motoškola Praha
                </span>
              </div>

              <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white whitespace-pre-line drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
                {slides[current].heading}
              </h1>

              <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/75">
                {slides[current].subheading}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => document.getElementById("kurzy")?.scrollIntoView({ behavior: "smooth" })}
                  className="group inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-[0_2px_16px_rgba(2,132,199,0.3)] transition-all hover:bg-accent-dark hover:shadow-[0_4px_24px_rgba(2,132,199,0.4)]"
                >
                  Chci řidičák
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
                <a
                  href="tel:+420773911119"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/20"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  Zavolat nám
                </a>
              </div>

              {/* Stats strip */}
              <div className="mt-10 flex flex-wrap gap-8 border-t border-white/15 pt-6">
                {[
                  { value: "95%", label: "úspěšnost" },
                  { value: "500+", label: "absolventů" },
                  { value: "15+", label: "let zkušeností" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/50">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="mt-8 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === current ? "w-10 bg-accent" : "w-4 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
