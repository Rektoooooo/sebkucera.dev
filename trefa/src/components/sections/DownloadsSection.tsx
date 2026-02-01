"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const documents = [
  { title: "Přihláška do kurzu skupiny B", type: "PDF" },
  { title: "Přihláška do kurzu skupiny A1", type: "PDF" },
  { title: "Přihláška do kurzu skupiny AM", type: "PDF" },
  { title: "Lékařský posudek — formulář", type: "PDF" },
  { title: "Souhlas zákonného zástupce", type: "PDF" },
  { title: "Obchodní podmínky", type: "PDF" },
];

export default function DownloadsSection() {
  return (
    <section id="ke-stazeni" className="bg-surface-alt py-[var(--section-gap)]">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          tag="Ke stažení"
          title="Dokumenty a formuláře"
          subtitle="Formuláře potřebné pro přihlášení do kurzu"
        />

        <div className="space-y-2.5">
          {documents.map((doc, i) => (
            <AnimatedSection key={doc.title} delay={i * 0.04}>
              <div className="flex items-center justify-between rounded-xl border border-border bg-white px-5 py-3.5 shadow-[var(--card-shadow)] transition-all hover:shadow-[var(--card-shadow-hover)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-[10px] font-bold text-red-500">
                    {doc.type}
                  </span>
                  <span className="text-sm font-medium text-heading">{doc.title}</span>
                </div>
                <button className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/30 hover:text-accent">
                  Stáhnout
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
