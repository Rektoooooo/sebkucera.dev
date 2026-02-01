"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const contactInfo = [
  { label: "Adresa", value: "Třanovského 622/11, 163 00 Praha 17-Řepy", detail: "", icon: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" },
  { label: "Telefon", value: "+420 123 456 789", detail: "", icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" },
  { label: "Email", value: "info@autoskolatrefa.cz", detail: "", icon: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" },
  { label: "Otevírací doba", value: "Po — Pá: 8:00 — 17:00", detail: "", icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
];

const inputClass = "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-heading placeholder:text-muted-light transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/10";

export default function ContactSection() {
  return (
    <section id="kontakt" className="bg-surface-alt py-[var(--section-gap)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          tag="Kontakt"
          title="Napište nám"
          subtitle="Neváhejte nás kontaktovat, rádi vám poradíme"
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <AnimatedSection>
            <div className="space-y-5">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/[0.07]">
                    <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-light">{c.label}</p>
                    <p className="mt-0.5 text-sm font-medium text-heading">{c.value}</p>
                    {c.detail && <p className="text-xs text-muted">{c.detail}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-8 aspect-[3/2] overflow-hidden rounded-2xl border border-border bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.3!2d14.3116249!3d50.0745318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bbe30b690bbab%3A0x2a0d4d9437ac527e!2sT%C5%99anovsk%C3%A9ho%20622%2F11%2C%20163%2000%20Praha%2017!5e0!3m2!1scs!2scz!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Autoškola Trefa — Třanovského 622/11, 163 00 Praha 17-Řepy"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <form className="rounded-2xl border border-border bg-white p-6 shadow-[var(--card-shadow)]">
              <div className="space-y-4">
                <div>
                  <label htmlFor="c-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-light">Jméno</label>
                  <input type="text" id="c-name" className={inputClass} placeholder="Vaše jméno" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-light">Email</label>
                    <input type="email" id="c-email" className={inputClass} placeholder="vas@email.cz" />
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-light">Telefon</label>
                    <input type="tel" id="c-phone" className={inputClass} placeholder="+420" />
                  </div>
                </div>
                <div>
                  <label htmlFor="c-msg" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-light">Zpráva</label>
                  <textarea id="c-msg" rows={5} className={inputClass} placeholder="Vaše zpráva..." />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-accent py-3 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(2,132,199,0.3)] transition-all hover:bg-accent-dark hover:shadow-[0_4px_20px_rgba(2,132,199,0.4)]"
                >
                  Odeslat zprávu
                </button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
