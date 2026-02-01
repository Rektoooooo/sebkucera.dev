import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Ke stažení",
  description: "Dokumenty a formuláře ke stažení z autoškoly Trefa.",
};

const documents = [
  { title: "Přihláška do kurzu skupiny B", fileType: "PDF" },
  { title: "Přihláška do kurzu skupiny A1", fileType: "PDF" },
  { title: "Přihláška do kurzu skupiny AM", fileType: "PDF" },
  { title: "Lékařský posudek - formulář", fileType: "PDF" },
  { title: "Souhlas zákonného zástupce", fileType: "PDF" },
  { title: "Obchodní podmínky", fileType: "PDF" },
];

export default function DownloadsPage() {
  return (
    <>
      <PageHeader
        title="Ke stažení"
        subtitle="Formuláře a dokumenty potřebné pro přihlášení do kurzu"
      />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="space-y-3">
            {documents.map((doc, i) => (
              <AnimatedSection key={doc.title} delay={i * 0.05}>
                <div className="flex items-center justify-between rounded-xl border border-border bg-surface p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 text-xs font-bold text-accent">
                      {doc.fileType}
                    </div>
                    <span className="font-medium">{doc.title}</span>
                  </div>
                  <button className="rounded-lg border border-border px-4 py-1.5 text-sm font-medium text-muted transition-colors hover:bg-surface-light hover:text-foreground">
                    Stáhnout
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
