import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktujte Autoškolu Trefa. Adresa, telefon, email a kontaktní formulář.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Kontakt"
        subtitle="Neváhejte nás kontaktovat, rádi vám poradíme"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <h2 className="text-2xl font-bold">Kontaktní údaje</h2>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-accent">Adresa</h3>
                  <p className="text-muted">Ukázková 123, 602 00 Brno</p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent">Telefon</h3>
                  <p className="text-muted">+420 123 456 789</p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent">Email</h3>
                  <p className="text-muted">info@autoskolatrefa.cz</p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent">Otevírací doba</h3>
                  <p className="text-muted">Po - Pá: 8:00 - 17:00</p>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 aspect-video overflow-hidden rounded-xl border border-border bg-surface">
                <div className="flex h-full items-center justify-center text-muted">
                  Google Maps
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-2xl font-bold">Napište nám</h2>
              <form className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium">
                    Jméno
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
                    placeholder="Vaše jméno"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
                    placeholder="vas@email.cz"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
                    placeholder="+420"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium">
                    Zpráva
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
                    placeholder="Vaše zpráva..."
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-accent px-6 py-2.5 font-semibold text-background transition-colors hover:bg-accent-light"
                >
                  Odeslat zprávu
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
