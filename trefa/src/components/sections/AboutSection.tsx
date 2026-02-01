"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const team = [
  {
    name: "Zbyněk",
    role: "Instruktor — motocykly",
    photo: "/images/ZbynekProfilePhoto.png",
    funFacts: [
      "že neví, kudy teče řeka STYX, zato přesně ví, kde je APEX",
      "že se ho nesmíte na nic ptát, pokud nemáte alespoň hodinu volného času",
      "že si přilbu nesundavá ani když jde spát (na tu hodinu to už nemá cenu)",
    ],
    contact: "Zkoušet volat mu můžete na: 773 911 119",
  },
  {
    name: "Richard",
    role: "Instruktor — motocykly",
    photo: "/images/richard.png",
    funFacts: [
      "že je kancelářská krysa.",
      "To je ale kec, je spíš myš. Tryskomyš!",
    ],
    contact: "Zkoušet volat mu nemůžete jako poslední možnost: 775 683 566",
  },
  {
    name: "Michal",
    role: "Instruktor — motocykly",
    photo: "/images/michal.png",
    funFacts: [
      "že má stále hlavu v oblacích",
      "že se narodil s řidítky v ruce (podle Moniky to dost bolelo)",
      "že dokud nesundá přilbu, neuhádnete, kolik je mu let",
    ],
    contact: "Holky 15-20 let mohou psát na: +420 727 889 614",
  },
  {
    name: "Martin",
    role: "Instruktor — motocykly",
    photo: "/images/martin.png",
    funFacts: [
      "že je mladý padawan, který chce překonat svého mistra",
      "že si tvrdohlavě kupuje další a další R6",
    ],
    contact: "Zkoušet volat mu můžete na: 776 442 797",
  },
  {
    name: "Eliška",
    role: "Šéf",
    photo: "/images/eliska.png",
    funFacts: [
      "že je vedoucí reklamačního oddělení",
      "že všechny žádosti zamítá",
    ],
    contact: "Pozor na svačiny! Nenechávejte je bez dozoru, nebo se vám o ně postará.\n\nZkoušet volat jí můžete do boudy před autoškolou.",
  },
];

export default function AboutSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="o-nas" className="py-[var(--section-gap)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          tag="O nás"
          title="Profesionální autoškola v Praze"
          subtitle="Nabízíme výcvik pro získání řidičského oprávnění skupiny B, A1 a AM s důrazem na kvalitu a bezpečnost."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <div className="space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                Pro své zákazníky chceme vždy to nejlepší a proto se snažíme vám nabídnout tu
                nejefektivnější formu výuky. Zákon nám konečně umožnil vyrazit se žáky do provozu
                bez druhých řidítek na motocyklu, a tak jsme pro vás odladili úplně novou metodiku.
              </p>
              <p>
                Využili jsme naše zkušenosti nejen z autoškolství, ale i z tréninků motocyklových
                závodníků, které jsme oholili na jádro a znovu sestavili do logického celku. Cílem
                naší školy není připravit vás na zkoušku, ale naučit. Státem stanovená zkouška je
                jen ověření. Opravdové zkoušky vám připraví sám život a tam už nebudete mít možnost
                jít na opravu.
              </p>
              <p>
                Abychom pro vás připravili tu nejlepší koncepci výuky, museli jsme ovládnout všechny
                elementy. Přeměnit benzín na oheň. Přilnavost země okusit na okruhu. S vodou jsme
                se poprali na vrcholu Alp. A nakonec jsme se prolétli vzduchem na motokrosových
                speciálech. Jste i vy připraveni absolvovat cestu poznání?
              </p>
            </div>

          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="aspect-video overflow-hidden rounded-2xl border border-border">
              <iframe
                src="https://www.youtube.com/embed/kZFEBoxPOo8"
                width="100%"
                height="100%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Autoškola Trefa — video"
                className="h-full w-full"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Team — full width */}
        <div className="mt-20">
          <AnimatedSection>
            <h3 className="mb-2 text-center font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-heading sm:text-4xl">
              Náš tým
            </h3>
            <p className="mx-auto mb-10 max-w-md text-center text-sm text-muted">
              Klikněte na člena týmu a zjistěte, co se o něm říká
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {team.map((m, i) => (
              <AnimatedSection key={m.name} delay={i * 0.07}>
                <button
                  onClick={() => setSelected(selected === i ? null : i)}
                  className="group text-center"
                >
                  <div
                    className={`mx-auto mb-3 h-24 w-24 overflow-hidden rounded-full border-[3px] transition-all duration-300 sm:h-28 sm:w-28 ${
                      selected === i
                        ? "border-accent scale-110 shadow-[0_0_24px_rgba(2,132,199,0.3)]"
                        : "border-border hover:border-accent/50 hover:scale-105"
                    }`}
                  >
                    {m.photo ? (
                      <Image
                        src={m.photo}
                        alt={m.name}
                        width={112}
                        height={112}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-accent/10 text-2xl font-bold text-accent">
                        {m.name[0]}
                      </div>
                    )}
                  </div>
                  <p className={`text-sm font-semibold transition-colors ${selected === i ? "text-accent" : "text-heading"}`}>
                    {m.name}
                  </p>
                  <p className="text-xs text-muted-light">{m.role}</p>
                </button>
              </AnimatedSection>
            ))}
          </div>

          {/* Expanded detail */}
          <AnimatePresence mode="wait">
            {selected !== null && (
              <motion.div
                key={selected}
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-6 rounded-2xl border border-border bg-white p-6 shadow-[var(--card-shadow)] sm:flex-row sm:p-8">
                  <div className="mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-full sm:mx-0 sm:h-48 sm:w-48">
                    {team[selected].photo ? (
                      <Image
                        src={team[selected].photo}
                        alt={team[selected].name}
                        width={192}
                        height={192}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-accent/10 text-5xl font-bold text-accent">
                        {team[selected].name[0]}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-2xl font-bold text-heading">{team[selected].name}</h4>
                    <p className="mt-1 text-sm text-muted-light">říká se o {team[selected].name === "Eliška" ? "ní" : "něm"}:</p>
                    <ul className="mt-4 space-y-2">
                      {team[selected].funFacts.map((fact) => (
                        <li key={fact} className="flex items-start gap-2.5 text-[15px] text-muted">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {fact}
                        </li>
                      ))}
                    </ul>
                    {team[selected].contact && (
                      <p className="mt-4 whitespace-pre-line text-sm font-medium text-heading">
                        {team[selected].contact}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
