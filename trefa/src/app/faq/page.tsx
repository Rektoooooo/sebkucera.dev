"use client";

import PageHeader from "@/components/layout/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { useState } from "react";

const faqs = [
  {
    question: "Jak dlouho trvá kurz skupiny B?",
    answer: "Kurz skupiny B trvá přibližně 3 měsíce. Zahrnuje minimálně 28 hodin teorie a 28 hodin praktického výcviku.",
  },
  {
    question: "Od kolika let mohu začít s výcvikem?",
    answer: "Výcvik skupiny B můžete zahájit od 17,5 let (zkoušku složit od 18 let). Skupinu A1 od 16 let a skupinu AM od 15 let.",
  },
  {
    question: "Jaké dokumenty potřebuji k přihlášení?",
    answer: "Potřebujete občanský průkaz, lékařský posudek o zdravotní způsobilosti a v případě nezletilých souhlas zákonného zástupce.",
  },
  {
    question: "Mohu si vybrat instruktora?",
    answer: "Ano, po domluvě je možné si zvolit preferovaného instruktora pro praktický výcvik.",
  },
  {
    question: "Co když neuspěji u zkoušky?",
    answer: "V případě neúspěchu u zkoušky vás přihlásíme k opravné zkoušce. Pomůžeme vám s přípravou na další pokus.",
  },
  {
    question: "Nabízíte kondiční jízdy?",
    answer: "Ano, nabízíme kondiční jízdy pro řidiče, kteří chtějí obnovit nebo zlepšit své řidičské dovednosti.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-surface">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-4 text-left font-medium"
      >
        {question}
        <svg
          className={`h-5 w-5 shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="border-t border-border px-4 py-3 text-sm text-muted">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <PageHeader
        title="Často kladené dotazy"
        subtitle="Odpovědi na nejčastější otázky"
      />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
