import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Aktuality",
  description: "Novinky a aktuality z autoškoly Trefa.",
};

const articles = [
  {
    slug: "nove-motocykly-yamaha-2026",
    title: "Nové motocykly Yamaha pro sezónu 2026",
    excerpt: "Do našeho vozového parku jsme zařadili nové motocykly Yamaha MT-125 a YZF-R125.",
    publishedAt: "2026-01-15",
  },
  {
    slug: "jarni-kurzy-2026",
    title: "Jarní kurzy 2026 - přihlašování otevřeno",
    excerpt: "Otevíráme přihlašování do jarních kurzů skupiny B a A1. Neváhejte a rezervujte si místo.",
    publishedAt: "2026-01-10",
  },
  {
    slug: "uspesnost-v-testech",
    title: "95% úspěšnost u závěrečných zkoušek",
    excerpt: "V roce 2025 dosáhli naši žáci rekordní úspěšnosti u závěrečných zkoušek.",
    publishedAt: "2025-12-20",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHeader
        title="Aktuality"
        subtitle="Novinky a informace z naší autoškoly"
      />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="space-y-6">
            {articles.map((article, i) => (
              <AnimatedSection key={article.slug} delay={i * 0.1}>
                <Link
                  href={`/aktuality/${article.slug}`}
                  className="group block rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent/50"
                >
                  <time className="text-xs text-muted">
                    {new Date(article.publishedAt).toLocaleDateString("cs-CZ")}
                  </time>
                  <h2 className="mt-1 text-xl font-semibold group-hover:text-accent">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{article.excerpt}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
