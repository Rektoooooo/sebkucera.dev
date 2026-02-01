"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

interface PriceRow {
  name: string;
  desc: string;
  price: string;
  highlight?: boolean;
}

interface PriceGroup {
  title: string;
  note?: string;
  rows: PriceRow[];
  footnote?: string;
}

const groups: PriceGroup[] = [
  {
    title: "Motocykl",
    rows: [
      { name: "AM", desc: "+ bonus 7 hod tréninku navíc. Od 15 let, vosička, co sviští 45 km/h, do kopce spíš 30.", price: "35 800 Kč" },
      { name: "A1", desc: "+ bonus 7 hod tréninku navíc. Od 16 let, vosa, která na benzínce zajistí větší prestiž než AM, hlavně pokud ji vybavíte laďákem z Wishe", price: "35 800 Kč" },
      { name: "A2", desc: "+ bonus 5 hod tréninku navíc. Od 18 let, sem patří seškrcené superbajky, které mají v papírech do 35 kW", price: "35 800 Kč" },
      { name: "A", desc: "+ bonus 3 hod tréninku navíc. Od 24 let, královská kategorie, kde je jediný limit rozpočet na benzín", price: "35 800 Kč" },
      { name: "A2 z A1", desc: "+ bonus 8 hod tréninku navíc. Máš 2 roky praxe na A1. Cena zahrnuje pochvalu a domácí limonádu.", price: "17 800 Kč" },
      { name: "A z A2", desc: "+ bonus 8 hod tréninku navíc. Máš 2 roky praxe na A2. Cena zahrnuje 2 pochvaly a dobrou kávu.", price: "17 800 Kč" },
      { name: "A❤", desc: "Jsi srdcař a umíš jezdit? Máš zkušenosti z endura, motocrossu nebo silničních závodů a potřebuješ jen legalizovat nebo naučit provoz? Přijď! 13 hod. tréninku na moto.", price: "24 800 Kč", highlight: true },
      { name: "❤ Progress program", desc: "Speciální program, tohle je už moto-magie, krucifix s sebou (info při konzultaci), jízda na okruhu (1. den) + pokročilé techniky", price: "17 800 Kč", highlight: true },
    ],
    footnote: "Rozšíření: Pouze zkouška z jízdy, test z pravidel provozu nepíšete! Cena navíc zahrnuje 6 hod. jízd – kombinace na uzavřeném polygonu a v provozu, teorii, rozbor tvojí jízdy na motorce. Hlavně musíš umět jezdit. Podmínkou je 2 roky praxe na nižší kategorii.",
  },
  {
    title: "Pokud to nezvádneš v základním kurzu",
    rows: [
      { name: "Doplňující / kondiční jízda", desc: "1 hod. tréninku na moto, dle tvého požadavku – polygon, provoz nebo třeba hobbybiking.", price: "1 800 Kč" },
      { name: "Balíček „tak určitěéé“", desc: "3 hod. tréninku na moto, žádné flákání, ale spousta ježdění bez zbytečných keců.", price: "4 800 Kč" },
      { name: "Balíček „tak dobře“", desc: "6 hod. tréninku na moto, dostatečně pomalá inhalace dovedností pro pečlivější žáky, kteří potřebují více rozjímat.", price: "9 200 Kč" },
    ],
  },
  {
    title: "Osobní auto",
    rows: [
      { name: "B", desc: "Výcvik 2–3 měsíce, obsahuje 2 tréninky v noci… abys poznal bubáky a klekánice + 1 trénink v dešti… máme rosničku a křišťálovou kouli, víme přesně kdy prší.", price: "31 800 Kč" },
      { name: "B „rychle za volant“", desc: "Výcvik 4 týdny… za rychlost se platí i cajtům na radaru, příplatek.", price: "+8 000 Kč" },
      { name: "B automat!", desc: "Výcvik 2–3 měsíce, tenhle kurz zvládneš i s nohou z okna, k řízení ti stačí jedna (v zimě pozor na omrzliny), příplatek.", price: "+5 000 Kč" },
      { name: "B – kondiční jízda (do 17h)", desc: "1 hod. – jakýkoliv trénink v autě, dle tvého požadavku – neboj, máme tam druhý pedály. Všední dny do 17 hodin.", price: "900 Kč" },
      { name: "B – kondiční jízda (po 17h)", desc: "1 hod. – jakýkoliv trénink v autě, dle tvého požadavku – neboj, máme tam druhý pedály. Všední dny po 17 hodině.", price: "1 000 Kč" },
      { name: "Skútr balíček k Béčku", desc: "K autu máš automaticky řidičák na skútra A1 automat. Pokud se to nechceš učit sám v provozu, tak tě na to připravíme. 4 hod. tréninku + 2 hod. teorie + jízda zručnosti.", price: "8 800 Kč" },
    ],
    footnote: "Doporučujeme dělat řidičák na podzim a zimu – špatné počasí, brzo tma, prší, sníh, námraza, hnus a klouže to. Nejlepší je mlha.",
  },
  {
    title: "Kombo",
    note: "A2 + B není žádná rovnice, neboj! Ale když budeš chtít řidičák na auto i motorku sfouknout najednou, tak to lze.",
    rows: [
      { name: "A + B", desc: "Tohle kombo není drahý, navíc ti dáme 6 hod. tréninku, ať víc jezdíš. Grétě ani muk!", price: "58 800 Kč", highlight: true },
      { name: "A2 + B", desc: "Tohle kombo není drahý, navíc ti dáme 5 hod. tréninku, ať víc jezdíš. Gumy neřeš.", price: "58 800 Kč", highlight: true },
    ],
  },
  {
    title: "Vlek za osobní auto",
    rows: [
      { name: "B+E", desc: "Auto + vlek, souprava do 7 t", price: "11 800 Kč" },
      { name: "B+E (pro naše žáky sk. A)", desc: "Pro naše žáky, kteří dělají současně sk. A", price: "8 500 Kč" },
      { name: "B96", desc: "Doplňovací zkouška auto s vlekem do 4,25 t. Pouze zkouška z jízdy, cena zahrnuje 2 hod. jízd, krátkou teorii a konzultaci.", price: "6 800 Kč" },
      { name: "Doplňující jízda B+E", desc: "1 hod. tréninku B+E, dle tvého požadavku.", price: "1 200 Kč" },
    ],
  },
  {
    title: "Velké věci",
    note: "Tady už jde do tuhého: velikost vozidla je přímo úměrná ceně.",
    rows: [
      { name: "C", desc: "Nad 3,5 t, nutné pro popeláře", price: "25 800 Kč" },
      { name: "C+E", desc: "Podmínka je mít sk. C. To je ta nad tím.", price: "15 800 Kč" },
      { name: "D z C", desc: "Ze začátku jezdíme bez cestujících, ale musíš mít noty na náklaďák (sk. C), víš?", price: "25 800 Kč" },
      { name: "D", desc: "Autobus není velkej osobák. Pokud nemáš sk. C, tak si připrav truhlu peněz…", price: "42 800 Kč" },
      { name: "T", desc: "Traktůrek, pohodička, vyhlídkové jízdy po okolí.", price: "14 800 Kč" },
      { name: "Doplňující jízda C/D/E", desc: "1 hod. tréninku C, D, E, dle tvého požadavku.", price: "1 800 Kč" },
    ],
  },
  {
    title: "Závěrečné zkoušky / opravky jízd",
    rows: [
      { name: "1. zkouška (všechny skupiny)", desc: "V ceně je i úsměv komisaře nebo učitele + poplatek úřadu ČR", price: "700 + 1 000 Kč" },
      { name: "Opravná zkouška z pravidel", desc: "Test na PC – musíš se učit na otázky včas, uličníku + poplatek úřadu ČR", price: "100 + 1 000 Kč" },
      { name: "Opravná zkouška z jízdy moto", desc: "Opravná zkouška z jízdy (motocykly AM–A) + poplatek úřadu ČR", price: "400 + 1 000 Kč" },
      { name: "Opravná zkouška z jízdy auto", desc: "Opravná zkouška z jízdy (vozidla B, B+E, B96) + poplatek úřadu ČR", price: "400 + 1 000 Kč" },
      { name: "Opravná zkouška ostatní sk.", desc: "Opravná zkouška z jízdy (vozidla C, C+E, D) + poplatek úřadu ČR", price: "400 + 1 000 Kč" },
      { name: "Opravná zkouška z konstrukce", desc: "Opravná zkouška z konstrukce vozidla (C, C+E, D) + poplatek úřadu ČR", price: "200 + 500 Kč" },
      { name: "Neomluvený prostoj", desc: "Čekáme a ty nikde – omluva 24 hodin předem.", price: "1 000 Kč" },
      { name: "Po 3. neúspěšném testu", desc: "Musíme spolu zopakovat celou teorii, abys byl lepší šofér.", price: "6 800 Kč" },
      { name: "Po 3. neúspěšné jízdě", desc: "Musíme spolu zopakovat všechny jízdy, v ceně elixír života…", price: "19 800 Kč" },
    ],
  },
  {
    title: "Storno / převody / přezkoušení",
    rows: [
      { name: "Rozvod", desc: "Storno poplatek (pokud nám to nefunguje. Promiň, to je život...) + řádné vyúčtování nákladů.", price: "5 000 Kč" },
      { name: "B – převod z jiné autoškoly", desc: "Přestup z jiné autoškoly – každý jsme jiný, hlavně to nevzdávej. (Po přestupu k nám si tě proklepneme, dostaneš 2 hodiny tréninku jako bonus.)", price: "5 000 Kč" },
      { name: "Vracečkář single", desc: "Přezkoušení pro vrácení řidičáku (sk. B).", price: "10 000 Kč" },
      { name: "Vracečkář / kombo", desc: "Každá další skupina (sk. A, C, D, E), příplatek za každou jednotlivou skupinu.", price: "6 000 Kč" },
      { name: "Cizinci – Happy people", desc: "Přezkoušení pro výměnu řidičáku (cizinci v ČR) – nebojte se zlozvyů za volantem, pomůžeme.", price: "10 000 Kč" },
    ],
  },
  {
    title: "Školení řidičů – profesní způsobilost",
    rows: [
      { name: "Pravidelné roční školení (7 hod.)", desc: "Není tak dlouhý, každý rok povinnost.", price: "1 500 Kč" },
      { name: "Rozšiřující školení (45 hod.)", desc: "Trochu se nasedíš, ale odejdeš s větším rozsahem profesáku.", price: "10 500 Kč" },
      { name: "Vstupní školení (35 hod.)", desc: "Ušetříš, když se vejdeš do podmínek zákona.", price: "7 500 Kč" },
      { name: "Vstupní školení (140 hod.)", desc: "Místo zadku bude mozol a uši jako rys, aspoň držet pitný režim…", price: "29 000 Kč" },
      { name: "Vstupní školení (280 hod.)", desc: "Sado/maso nebo maso/sado, prostě masakr…", price: "55 000 Kč" },
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="cenik" className="bg-surface-alt py-[var(--section-gap)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          tag="Ceník"
          title="Ceník"
          subtitle=""
        />

        <div className="space-y-10">
          {groups.map((group) => (
            <AnimatedSection key={group.title} delay={0.05}>
              <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--card-shadow)]">
                <div className="border-b border-border bg-accent/[0.04] px-5 py-3.5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-heading">{group.title}</h3>
                  {group.note && <p className="mt-1 text-sm text-muted">{group.note}</p>}
                </div>
                <div className="divide-y divide-border-light">
                  {group.rows.map((row, ri) => (
                    <div
                      key={ri}
                      className={`flex flex-col gap-2 px-5 py-4 transition-colors hover:bg-surface-alt/30 sm:flex-row sm:items-start sm:gap-4 ${row.highlight ? "bg-accent/[0.03]" : ""}`}
                    >
                      <div className="min-w-0 flex-1">
                        <span className="font-semibold text-heading">{row.name}</span>
                        <p className="mt-0.5 text-sm leading-relaxed text-muted">{row.desc}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <span className="whitespace-nowrap font-[family-name:var(--font-display)] text-lg font-bold text-accent">
                          {row.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                {group.footnote && (
                  <div className="border-t border-border bg-surface-alt/30 px-5 py-3">
                    <p className="text-xs leading-relaxed text-muted-light">{group.footnote}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-10 rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
            <h4 className="mb-2 text-sm font-semibold text-heading">Poznámky</h4>
            <ul className="space-y-1.5 text-xs leading-relaxed text-muted-light">
              <li>Ceny jsou platné od 1. 1. 2025. Uvedené ceny jsou včetně 21% DPH.</li>
              <li>Výcvikovou a výukovou hodinou v zákoně je myšlen časový úsek 45 min. – jako ve škole, pak zvoní zvonek.</li>
              <li>Žáci mohou v jeden den jezdit dle zákona maximálně 2 × 45 min., proto trvá trénink zpravidla 90 min. / ke konci výcviku lze navýšit na 4 × 45 min.</li>
              <li>Ceny nezahrnují poplatek úřadu ČR za 1. závěrečnou zk. (700 Kč) ani příslušné poplatky za opravné zkoušky (100/200/400 Kč).</li>
              <li>Garance ceny kurzu je max. 12 měsíců v příslušném kalendářním roce.</li>
              <li>Forma úhrady: hotově, platební kartou, bankovním převodem (umíme i QR).</li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
