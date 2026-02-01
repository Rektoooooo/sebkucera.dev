"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const faqs = [
  { q: "Jak dlouho trvá kurz skupiny B?", a: "Kurz skupiny B trvá přibližně 3 měsíce. Zahrnuje minimálně 28 hodin teorie a 28 hodin praktického výcviku." },
  { q: "Od kolika let mohu začít s výcvikem?", a: "Výcvik skupiny B můžete zahájit od 17,5 let (zkoušku složit od 18 let). Skupinu A1 od 16 let a skupinu AM od 15 let." },
  { q: "Jaké dokumenty potřebuji k přihlášení?", a: "Potřebujete občanský průkaz, lékařský posudek o zdravotní způsobilosti a v případě nezletilých souhlas zákonného zástupce." },
  { q: "Mohu si vybrat instruktora?", a: "Ano, po domluvě je možné si zvolit preferovaného instruktora pro praktický výcvik." },
  { q: "Co když neuspěji u zkoušky?", a: "V případě neúspěchu u zkoušky vás přihlásíme k opravné zkoušce. Pomůžeme s přípravou na další pokus." },
  { q: "Nabízíte kondiční jízdy?", a: "Ano, nabízíme kondiční jízdy pro řidiče, kteří chtějí obnovit nebo zlepšit své řidičské dovednosti." },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <AnimatedSection delay={index * 0.05}>
      <div className="overflow-hidden rounded-xl border border-border bg-white shadow-[var(--card-shadow)]">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between px-5 py-4 text-left"
        >
          <span className="pr-4 text-sm font-semibold text-heading">{q}</span>
          <motion.svg
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="h-4 w-4 shrink-0 text-muted-light"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </motion.svg>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="border-t border-border-light px-5 py-4 text-sm leading-relaxed text-muted">
                {a}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-[var(--section-gap)]">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          tag="FAQ"
          title="Často kladené dotazy"
          subtitle="Odpovědi na nejčastější otázky o výcviku"
        />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
