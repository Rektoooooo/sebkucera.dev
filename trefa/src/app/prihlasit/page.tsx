"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Link from "next/link";
import { useState } from "react";

const categories = [
  {
    age: "15 let",
    code: "AM",
    desc: "Malá motorka, která jede max 45 km/h s motorem do 50 ccm. Nic moc, ale lepší než nechodit pěšky.\nPravidla provozu však musíte umět.\nPatří sem i malá autíčka jako je Aixam!",
  },
  {
    age: "16 let",
    code: "A1",
    desc: "Lehká motorka s motorem do 125 ccm. Největší frajeřina před základní školou!",
  },
  {
    age: "17 let",
    code: "T",
    desc: "Pokud vám škola moc nejde, už v 17ti se můžete stát traktoristou.",
  },
  {
    age: "18 let",
    code: "A2",
    desc: "Motorka do 35kW co vás dobře připraví pro budoucnost, ale musíte fakt jezdit. Výkon motoru se rovná vaší hlavě. Navyplácí se to přeskakovat nebo obcházet.",
  },
  {
    age: "",
    code: "B",
    desc: "prostě auto, no… volant pedály a tak",
  },
  {
    age: "",
    code: "B + E",
    desc: "auto s vlekem (3,5 + 3,5 t)\nPodmínkou je mít hotový řidičák na sk. B",
  },
  {
    age: "21 let",
    code: "C",
    desc: "Náklaďák nad 3,5t.\nPodmínkou je mít hotový řidičák na sk. B",
  },
  {
    age: "",
    code: "C + E",
    desc: "Náklaďák nad 3,5t s vlekem, nebo-li kamion.\nPodmínkou je mít hotový řidičák na sk. C",
  },
  {
    age: "24 let",
    code: "A",
    desc: "Neomezená motorka. Jde to i v 21, pokud 2 roky jezdíte na A2ce.\nPřipravte se, že dostanete záhul, tady končí sranda.",
  },
  {
    age: "",
    code: "D",
    desc: "Autobus. Víc než 8 kaštanů v jedné krabici vyžaduje speciální výcvik.",
  },
];

const wantCategories = ["AM", "A1", "A2", "A", "B", "B96", "BE", "C", "C+E", "D", "D+E", "Vzducholoď"];
const haveCategories = ["AM", "A1", "A2", "A", "B", "B96", "BE", "C", "C+E", "D", "D+E", "PRD"];

export default function PrihlasitPage() {
  const [wantSelected, setWantSelected] = useState<string[]>([]);
  const [haveSelected, setHaveSelected] = useState<string[]>([]);

  const toggleCategory = (
    cat: string,
    selected: string[],
    setSelected: (v: string[]) => void
  ) => {
    setSelected(
      selected.includes(cat)
        ? selected.filter((c) => c !== cat)
        : [...selected, cat]
    );
  };

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <PageHeader
          title="Řidičské oprávnění"
        />

        <div className="py-16">
          <div className="mx-auto max-w-4xl px-4 space-y-20">
            {/* Step 1: License categories */}
            <AnimatedSection>
              <div>
                <h2 className="mb-6 text-lg font-bold text-heading">
                  1. Podle svého věku si najděte skupinu řidičáku, kterou chcete řídit:
                </h2>
                <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--card-shadow)]">
                  <div className="hidden sm:grid sm:grid-cols-[70px_80px_1fr] border-b border-border bg-surface-alt/50 px-5 py-3 text-xs font-semibold text-heading uppercase tracking-wide">
                    <span>Věk</span>
                    <span>Skupina</span>
                    <span>Co to je?</span>
                  </div>
                  <div className="divide-y divide-border-light">
                    {categories.map((cat, i) => (
                      <div key={i} className="grid sm:grid-cols-[70px_80px_1fr] gap-1 sm:gap-0 px-5 py-3.5 transition-colors hover:bg-surface-alt/30">
                        <span className="text-sm font-semibold text-heading">{cat.age}</span>
                        <span className="font-bold text-accent">{cat.code}</span>
                        <span className="text-sm text-muted whitespace-pre-line">{cat.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Step 2: Contact form */}
            <AnimatedSection>
              <div>
                <h2 className="mb-2 text-lg font-bold text-heading">
                  2. Máte vybranou skupinu? Super! Kontaktujte nás pomocí formuláře:
                </h2>
                <h3 className="mb-6 text-2xl font-bold text-heading">První kontakt</h3>
                <form
                  action="https://formspree.io/f/PLACEHOLDER"
                  method="POST"
                  className="space-y-6 rounded-2xl border border-border bg-white p-6 shadow-[var(--card-shadow)]"
                >
                  <div className="grid gap-5 sm:grid-cols-3">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-heading">
                        Jméno a příjmení <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-heading">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-heading">
                        Telefon <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                      />
                    </div>
                  </div>

                  {/* Want categories */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-heading">
                      Chci řidičák skupiny: <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {wantCategories.map((cat) => (
                        <label key={cat} className="flex cursor-pointer items-center gap-3 rounded-lg border border-border px-4 py-2.5 transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent/5 hover:border-accent/50">
                          <input
                            type="checkbox"
                            name="want_category"
                            value={cat}
                            checked={wantSelected.includes(cat)}
                            onChange={() => toggleCategory(cat, wantSelected, setWantSelected)}
                            className="h-4 w-4 rounded border-border text-accent focus:ring-accent"
                          />
                          <span className="text-sm text-heading">{cat}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Have categories */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-heading">
                      Mám řidičák skupiny:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {haveCategories.map((cat) => (
                        <label key={cat} className="flex cursor-pointer items-center gap-3 rounded-lg border border-border px-4 py-2.5 transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent/5 hover:border-accent/50">
                          <input
                            type="checkbox"
                            name="have_category"
                            value={cat}
                            checked={haveSelected.includes(cat)}
                            onChange={() => toggleCategory(cat, haveSelected, setHaveSelected)}
                            className="h-4 w-4 rounded border-border text-accent focus:ring-accent"
                          />
                          <span className="text-sm text-heading">{cat}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-heading">
                      Máte nějaké speciální přání? Pište sem:
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(2,132,199,0.3)] transition-all hover:bg-accent-dark hover:shadow-[0_4px_20px_rgba(2,132,199,0.4)]"
                  >
                    Odeslat
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Step 3: Checklist */}
            <AnimatedSection>
              <div>
                <h2 className="mb-4 text-lg font-bold text-heading">
                  3. Pak vás čeká menší obíhačka:
                </h2>
                <ul className="space-y-3 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-heading" />
                    <span>
                      doběhnout k praktickému lékaři a nechat si vyplnit{" "}
                      <Link href="/ke-stazeni" className="font-medium text-accent underline underline-offset-2 hover:text-accent-dark">
                        tento dokument
                      </Link>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-heading" />
                    <span>
                      vyplnit{" "}
                      <Link href="/ke-stazeni" className="font-medium text-accent underline underline-offset-2 hover:text-accent-dark">
                        následující přihlášku
                      </Link>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-heading" />
                    <span>
                      stavit se u nás na první konzultaci →{" "}
                      <Link href="/kontakt" className="font-medium text-accent underline underline-offset-2 hover:text-accent-dark">
                        kontakty
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Step 4: Payment */}
            <AnimatedSection>
              <div>
                <p className="text-sm leading-relaxed text-muted">
                  <strong className="text-heading">4. Zaplatit!</strong> Protože se naše výuka nekazí ani nestárne, nemáme žádný „blek frajdeje" ani 5+3 zdarma. Radši přidáme nějakou tu hodinu navíc.{" "}
                  <Link href="/cenik" className="font-medium text-accent underline underline-offset-2 hover:text-accent-dark">
                    Mrkněte do ceníku
                  </Link>
                  . Pokud vám to pomohlo, můžeme cenu rozdělit na 2 splátky (půl před výcvikem a půl před zkouškou).
                </p>
              </div>
            </AnimatedSection>

            {/* Motorcycle training info */}
            <AnimatedSection>
              <div>
                <p className="mb-6 text-sm font-bold italic leading-relaxed text-heading">
                  My se hlavně specializujeme se na výuku a výcvik žadatelů o řidičské oprávnění sk.A. Instruktoři jsou aktivní motorkáři, kteří umí o motorkách hodiny a hodiny vyprávět… a i trochu jezdit. Budeme rádi, pokud nám dáte svou důvěru! Tady je pár základních informací, které potřebujete vědět:
                </p>
                <p className="mb-4 text-sm text-muted">
                  Zákonem je stanoveno množství výcviku na minimálně 13 hodin v následující skladbě:
                </p>
                <div className="overflow-x-auto">
                  <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--card-shadow)]">
                    <table className="w-full text-sm">
                      <thead>
                        <tr>
                          <th className="border-b border-r border-border bg-surface-alt/50 px-4 py-3 text-left font-semibold text-heading" />
                          <th colSpan={2} className="border-b border-r border-border bg-surface-alt/80 px-4 py-3 text-center font-semibold text-heading">1. fáze</th>
                          <th className="border-b border-r border-border bg-surface-alt/80 px-4 py-3 text-center font-semibold text-heading">2. fáze</th>
                          <th className="border-b border-r border-border bg-surface-alt/80 px-4 py-3 text-center font-semibold text-heading">3. fáze</th>
                          <th className="border-b border-border bg-accent/10 px-4 py-3 text-center font-bold text-heading">celkem</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border-b border-r border-border px-4 py-3 font-medium text-heading">cvičiště</td>
                          <td colSpan={2} className="border-b border-r border-border px-4 py-3 text-center text-muted">minimální provoz</td>
                          <td className="border-b border-r border-border px-4 py-3 text-center text-muted">střední provoz</td>
                          <td className="border-b border-r border-border px-4 py-3 text-center text-muted">střední provoz</td>
                          <td className="border-b border-border bg-accent/5 px-4 py-3 text-center font-bold text-heading" rowSpan={2}>
                            <span className="text-accent text-lg">13 hodin</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-r border-border px-4 py-3 font-medium text-heading">1 hodina</td>
                          <td colSpan={2} className="border-r border-border px-4 py-3 text-center text-muted">2 hodiny</td>
                          <td className="border-r border-border px-4 py-3 text-center text-muted">5 hodin</td>
                          <td className="border-r border-border px-4 py-3 text-center text-muted">5 hodin</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
                  <p>
                    Věříme, že na tom kluci ve sněmovně mezi gulášem a Becherovkou mákli a minimální časový fond zakotvený v zákoně č. 247/2000 Sb. vyladili k dokonalosti. Nás by ale potěšilo, kdyby jste měli chuť s námi strávit o nějakou tu hodinku více. Zaměřili bychom se na co nejlepší zvládnutí motorky na cvičišti.
                  </p>
                  <p>To zvládnete levou zadní</p>
                </div>
                <div className="mt-8 text-center">
                  <Link
                    href="/cenik"
                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-10 py-3.5 text-base font-bold text-white shadow-[0_2px_12px_rgba(2,132,199,0.3)] transition-all hover:bg-accent-dark hover:shadow-[0_4px_20px_rgba(2,132,199,0.4)]"
                  >
                    ceník
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
