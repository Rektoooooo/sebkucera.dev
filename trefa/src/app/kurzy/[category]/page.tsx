import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Link from "next/link";

const categoryData: Record<string, { name: string; description: string; minAge: number; requirements: string; details: string }> = {
  b: {
    name: "Osobní automobil",
    description: "Řidičské oprávnění skupiny B",
    minAge: 18,
    requirements: "Zdravotní způsobilost, věk min. 18 let",
    details: "Výcvik zahrnuje teoretickou přípravu a praktické jízdy. Celkem minimálně 28 hodin teorie a 28 hodin praktického výcviku.",
  },
  a1: {
    name: "Lehký motocykl",
    description: "Řidičské oprávnění skupiny A1",
    minAge: 16,
    requirements: "Zdravotní způsobilost, věk min. 16 let, souhlas zákonného zástupce",
    details: "Výcvik na motocyklech do 125 ccm a výkonu do 11 kW. Zahrnuje jízdy na cvičné ploše i v provozu.",
  },
  am: {
    name: "Moped",
    description: "Řidičské oprávnění skupiny AM",
    minAge: 15,
    requirements: "Zdravotní způsobilost, věk min. 15 let, souhlas zákonného zástupce",
    details: "Výcvik na mopedech a malých motocyklech do 50 ccm. Krátký kurz vhodný pro nejmladší řidiče.",
  },
};

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const data = categoryData[category];
  if (!data) return {};
  return { title: `Skupina ${category.toUpperCase()} - ${data.name}` };
}

export default async function CategoryDetailPage({ params }: Props) {
  const { category } = await params;
  const data = categoryData[category];
  if (!data) notFound();

  return (
    <>
      <PageHeader
        title={`Skupina ${category.toUpperCase()}`}
        subtitle={data.name}
      />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <AnimatedSection>
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold">O kurzu</h2>
                <p className="mt-2 text-muted">{data.details}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-surface p-4">
                  <p className="text-sm text-muted">Minimální věk</p>
                  <p className="text-2xl font-bold text-accent">{data.minAge} let</p>
                </div>
                <div className="rounded-xl border border-border bg-surface p-4">
                  <p className="text-sm text-muted">Požadavky</p>
                  <p className="mt-1 text-sm">{data.requirements}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/kurzy"
                  className="rounded-lg border border-border px-6 py-2.5 font-medium transition-colors hover:bg-surface-light"
                >
                  Zpět na kurzy
                </Link>
                <Link
                  href="/kontakt"
                  className="rounded-lg bg-accent px-6 py-2.5 font-semibold text-background transition-colors hover:bg-accent-light"
                >
                  Přihlásit se
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
