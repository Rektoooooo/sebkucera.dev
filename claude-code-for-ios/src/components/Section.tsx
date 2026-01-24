interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-green-500 font-mono text-sm">$</span>
            <span className="text-blue-500 font-mono text-sm">cd</span>
            <span className="text-text-primary font-mono text-sm">/{id}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary">{title}</h2>
          {subtitle && (
            <p className="mt-2 text-text-muted text-lg">{subtitle}</p>
          )}
        </div>
        <div className="space-y-6">
          {children}
        </div>
      </div>
    </section>
  );
}
