import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Link from "next/link";

const articlesData: Record<string, { title: string; content: string; publishedAt: string }> = {
  "nove-motocykly-yamaha-2026": {
    title: "Nové motocykly Yamaha pro sezónu 2026",
    content: "Do našeho vozového parku jsme zařadili nové motocykly Yamaha MT-125 a YZF-R125 modelového roku 2026. Tyto motocykly nabízejí moderní technologie, vynikající ovladatelnost a jsou ideální pro výcvik začínajících motocyklistů.\n\nNové stroje budou k dispozici od března 2026 ve všech našich kurzech skupiny A1.",
    publishedAt: "2026-01-15",
  },
  "jarni-kurzy-2026": {
    title: "Jarní kurzy 2026 - přihlašování otevřeno",
    content: "Otevíráme přihlašování do jarních kurzů skupiny B a A1. Kapacita je omezená, proto neváhejte a rezervujte si místo co nejdříve.\n\nKurzy skupiny B startují 1. března, kurzy skupiny A1 pak 1. dubna 2026.",
    publishedAt: "2026-01-10",
  },
  "uspesnost-v-testech": {
    title: "95% úspěšnost u závěrečných zkoušek",
    content: "V roce 2025 dosáhli naši žáci rekordní úspěšnosti 95% u závěrečných zkoušek. Tento výsledek je odrazem kvalitní přípravy a individuálního přístupu našich instruktorů.\n\nDěkujeme všem žákům za jejich úsilí a těšíme se na další úspěšný rok.",
    publishedAt: "2025-12-20",
  },
};

export function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = articlesData[slug];
  if (!data) return {};
  return { title: data.title };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articlesData[slug];
  if (!article) notFound();

  return (
    <>
      <PageHeader title={article.title} />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <AnimatedSection>
            <time className="text-sm text-muted">
              {new Date(article.publishedAt).toLocaleDateString("cs-CZ")}
            </time>
            <div className="mt-6 space-y-4 text-muted">
              {article.content.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <Link
              href="/aktuality"
              className="mt-8 inline-flex items-center gap-2 text-accent hover:text-accent-light"
            >
              &larr; Zpět na aktuality
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
