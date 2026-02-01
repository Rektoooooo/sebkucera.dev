import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Kurzy",
  description: "Přehled kurzů a termínů autoškoly. Řidičské oprávnění skupiny B, A1, AM.",
};

const categories = [
  { code: "B", name: "Osobní automobil", minAge: 18, description: "Řízení osobních automobilů do 3 500 kg." },
  { code: "A1", name: "Lehký motocykl", minAge: 16, description: "Motocykly do 125 ccm a 11 kW." },
  { code: "AM", name: "Moped", minAge: 15, description: "Mopedy a malé motocykly do 50 ccm." },
];

const upcomingCourses = [
  { id: "1", category: "B", startDate: "2026-03-01", status: "open" as const, note: "" },
  { id: "2", category: "B", startDate: "2026-04-15", status: "planned" as const, note: "" },
  { id: "3", category: "A1", startDate: "2026-04-01", status: "open" as const, note: "Jarní kurz" },
  { id: "4", category: "AM", startDate: "2026-05-01", status: "planned" as const, note: "" },
];

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        title="Kurzy"
        subtitle="Přehled kurzů a termínů pro získání řidičského oprávnění"
      />

      {/* Course dates table */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection>
            <h2 className="mb-6 text-2xl font-bold">Termíny kurzů</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border bg-surface">
                  <tr>
                    <th className="px-4 py-3 font-medium text-muted">Skupina</th>
                    <th className="px-4 py-3 font-medium text-muted">Zahájení</th>
                    <th className="px-4 py-3 font-medium text-muted">Stav</th>
                    <th className="px-4 py-3 font-medium text-muted">Poznámka</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {upcomingCourses.map((c) => (
                    <tr key={c.id} className="hover:bg-surface-light">
                      <td className="px-4 py-3 font-semibold text-accent">{c.category}</td>
                      <td className="px-4 py-3">
                        {new Date(c.startDate).toLocaleDateString("cs-CZ")}
                      </td>
                      <td className="px-4 py-3">
                        <Badge status={c.status} />
                      </td>
                      <td className="px-4 py-3 text-muted">{c.note || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* License categories */}
      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection>
            <h2 className="mb-8 text-center text-2xl font-bold">Skupiny řidičského oprávnění</h2>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.code} delay={i * 0.1}>
                <Link
                  href={`/kurzy/${cat.code.toLowerCase()}`}
                  className="group block rounded-xl border border-border bg-surface-light p-6 transition-all hover:border-accent/50"
                >
                  <div className="mb-2 text-3xl font-bold text-accent">{cat.code}</div>
                  <h3 className="text-lg font-semibold group-hover:text-accent">{cat.name}</h3>
                  <p className="mt-2 text-sm text-muted">{cat.description}</p>
                  <p className="mt-3 text-xs text-muted">Min. věk: {cat.minAge} let</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
