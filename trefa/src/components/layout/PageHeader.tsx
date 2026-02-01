import AnimatedSection from "@/components/shared/AnimatedSection";

interface Props {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <section className="border-b border-border bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4">
        <AnimatedSection>
          <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
          {subtitle && <p className="mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>}
        </AnimatedSection>
      </div>
    </section>
  );
}
