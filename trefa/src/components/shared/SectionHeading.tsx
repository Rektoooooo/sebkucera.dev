import AnimatedSection from "./AnimatedSection";

interface Props {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ tag, title, subtitle, align = "center" }: Props) {
  return (
    <AnimatedSection className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      {tag && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {tag}
        </span>
      )}
      <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-heading md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
