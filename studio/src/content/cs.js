export const cs = {
  brand: 'Sebastian Kučera',
  brandMark: 's',

  nav: {
    sluzby: 'Služby',
    seo: 'SEO',
    pripad: 'Případová studie',
    omne: 'O mně',
    proces: 'Proces',
    faq: 'FAQ',
    cta: 'Konzultace zdarma',
  },

  hero: {
    eyebrow: 'Freelance vývojář · Praha a okolí',
    title: ['Weby, které vám ', 'přivedou zákazníky'],
    lead: 'Stavím weby pro malé firmy a živnostníky. Nic nafouknutého, nic složitého. Jenom to, co vám reálně přivede klienty.',
    ctaPrimary: 'Nezávazná konzultace zdarma',
    ctaSecondary: 'Podívejte se na moji práci',
    proof: 'Spolupracuji s firmami po celém Česku · Odpovídám do 24 hodin',
    dots: ['A', 'T', 'K', '+'],
    card: {
      badge: 'Jaro 2025',
      tag: 'Případová studie · Praha 17',
      quote: 'Nový web nám přivedl třikrát víc studentů. Lidi nás teď najdou v Googlu na prvním místě. Přesně to jsme potřebovali.',
      authorName: 'Zbyněk Trefa',
      authorRole: 'Majitel · Autoškola Trefa',
      authorMark: 'ZT',
      stats: [
        { num: '+3×', label: 'poptávek' },
        { num: '#1', label: 'v Googlu' },
        { num: '2 týd', label: 'na realizaci' },
      ],
      urlLabel: 'autoskolatrefa.cz ↗',
      urlHref: 'https://autoskolatrefa.cz',
    },
  },

  marquee: [
    'Autoškoly', 'Řemeslníci', 'Zubaři', 'Kavárny', 'Fotografové',
    'Právníci', 'Menší firmy',
  ],

  problems: {
    eyebrow: 'Poznáváte se?',
    title: 'Tohle nejčastěji řešíme',
    lead: 'Tři typické problémy, které brzdí malé firmy online. A jak je řeším.',
    cards: [
      {
        num: '01',
        title: 'Vaše stránka je zastaralá',
        problem: 'Vypadá, jako by byla z roku 2010. Zákazník na ni kouká a říká si: „Fungujou vůbec ještě?"',
        solution: 'Web, který na první pohled vypadá důvěryhodně. Přehledně napsaný, slušné fotky, srozumitelný text.',
      },
      {
        num: '02',
        title: 'Neobjevíte se v Googlu',
        problem: 'Když si lidé vyhledají „autoškola Řepy", najdou konkurenci. Vás ne. A to znamená každý týden ztracené klienty.',
        solution: 'Správně nastavený web, lokální SEO a poctivý obsah. Žádná magie. Jenom práce, která se dlouhodobě vyplatí.',
      },
      {
        num: '03',
        title: 'Klienti vás nenajdou na mobilu',
        problem: '80 % lidí otevře váš web na telefonu. Pokud se nezobrazí správně, jdou jinam. Během 3 vteřin.',
        solution: 'Web, který se hezky zobrazí na mobilu, tabletu i počítači. Vždycky.',
      },
    ],
    solutionLabel: 'Řešení:',
  },

  services: {
    eyebrow: 'Balíčky',
    title: 'Tři varianty, nulový zmatek',
    lead: 'Jasný rozsah, jasná cena, žádné překvapení na faktuře. Cokoliv není jasné, rád vysvětlím po telefonu.',
    toggleWeb: 'Weby',
    toggleApps: 'iOS aplikace',
    appsEyebrow: 'Balíčky · iOS',
    appsTitle: 'Tři balíčky pro vaši iOS aplikaci',
    appsLead: 'Chcete vlastní aplikaci v App Storu? Stavím nativní iOS aplikace ve SwiftUI. Tři připravené rozsahy. Zbytek doladíme na konzultaci.',
    iosCards: [
      {
        name: 'Jednoduchá aplikace',
        audience: 'MVP pro ověření nápadu',
        priceFrom: 'od',
        priceNum: '80 000',
        priceUnit: 'Kč',
        bullets: [
          'Nativní aplikace ve SwiftUI',
          '4 až 6 obrazovek s jasnou navigací',
          'Lokální úložiště dat a základní formuláře',
          'Testování přes TestFlight a submit do App Storu',
          'Nasazení a krátké zaškolení, jak věci spravovat',
        ],
        cta: 'Vybrat balíček',
        variant: 'default',
        packageKey: 'Jednoduchá iOS aplikace',
      },
      {
        name: 'Profesionální aplikace',
        audience: 'Pro firmy, které to myslí vážně',
        priceFrom: 'od',
        priceNum: '180 000',
        priceUnit: 'Kč',
        bullets: [
          'Všechno ze základního balíčku, a navíc:',
          'Vlastní backend nebo napojení na váš stávající systém',
          'Push notifikace, přihlášení, platby v aplikaci',
          'Apple Watch nebo widgety, když dávají smysl',
          'Tři měsíce podpory po spuštění v ceně',
        ],
        cta: 'Vybrat balíček',
        variant: 'featured',
        ribbon: 'Nejoblíbenější',
        packageKey: 'Profesionální iOS aplikace',
      },
      {
        name: 'Rozsáhlý projekt',
        audience: 'Komplexní systémy na míru',
        priceFrom: 'od',
        priceNum: '350 000',
        priceUnit: 'Kč',
        bullets: [
          'Placené odběry a StoreKit 2',
          'Napojení na ERP, CRM nebo vlastní backend',
          'Role, oprávnění a pokročilá datová logika',
          'Dvoutýdenní sprinty s průběžnými dodávkami',
          'Dlouhodobá podpora a rozvoj po spuštění',
        ],
        cta: 'Domluvit projekt',
        variant: 'default',
        packageKey: 'Rozsáhlý iOS projekt',
      },
    ],
    cards: [
      {
        name: 'Základní web',
        audience: 'Pro živnostníky a mikrofirmy',
        priceFrom: 'od',
        priceNum: '25 000',
        priceUnit: 'Kč',
        bullets: [
          'Přehledný web: úvod, služby, kontakt, reference',
          'Pěkně se zobrazí na mobilu, tabletu i počítači',
          'Základní nastavení pro Google (lokální SEO)',
          'Formulář pro poptávky a propojení na Google Maps',
          'Spuštění a zaškolení, abyste si uměli drobnosti měnit sami',
        ],
        cta: 'Vybrat balíček',
        variant: 'default',
        packageKey: 'Základní web',
      },
      {
        name: 'SEO balíček',
        audience: 'Kontinuální péče o viditelnost',
        priceFrom: 'od',
        priceNum: '5 000',
        priceUnit: 'Kč/měs',
        bullets: [
          'Měsíční SEO audit a úpravy na webu',
          'Správa Google Business Profile a Firmy.cz',
          'Tvorba blogových článků pro SEO (2 měsíčně)',
          'Sledování pozic na klíčová slova',
          'Report každý měsíc e-mailem',
        ],
        cta: 'Vybrat balíček',
        variant: 'featured',
        ribbon: 'Nejoblíbenější',
        packageKey: 'SEO balíček',
      },
      {
        name: 'Kompletní péče',
        audience: 'Měsíční servis · bez starostí',
        priceFrom: 'od',
        priceNum: '2 500',
        priceUnit: 'Kč/měs',
        bullets: [
          'Hosting, doména a bezpečnostní certifikát v ceně',
          'Pravidelné aktualizace a zálohy. Spíte klidně.',
          'Drobné změny textů, fotek a cen kdykoliv',
          'Sledování výkonu a reporty jednou měsíčně',
          'Osobní podpora, kdykoliv něco potřebujete',
        ],
        cta: 'Vybrat balíček',
        variant: 'default',
        packageKey: 'Kompletní péče',
      },
    ],
  },

  seo: {
    eyebrow: 'SEO · Viditelnost v Googlu a Seznamu',
    titleLead: 'Bez SEO vás Google neukáže.',
    titleEm: 'Řeším to za vás.',
    lead: 'Krásný web je k ničemu, když ho nikdo nenajde. Postarám se, aby vaši zákazníci našli vás. Ne konkurenci.',
    leftTitle: 'Co dělá SEO pro váš byznys',
    rightTitle: 'Co konkrétně dělám',
    benefits: [
      {
        title: 'Více návštěvníků zdarma',
        description: 'Lidé vás najdou přes Google a Seznam bez toho, abyste platili za reklamu.',
      },
      {
        title: 'Klienti, kteří skutečně hledají',
        description: 'Oslovíte jen lidi, kteří vaše služby aktivně hledají. Žádní náhodní procházející.',
      },
      {
        title: 'Důvěryhodnost',
        description: 'První pozice na Googlu znamená pro většinu lidí kvalita. Tak to prostě funguje.',
      },
      {
        title: 'Dlouhodobý efekt',
        description: 'Jednou nastavené SEO vám přináší klienty měsíce a roky dopředu.',
      },
    ],
    checklist: [
      'Analýza klíčových slov, která vaši zákazníci opravdu hledají',
      'Optimalizace pro Google i Seznam.cz (v Česku stále důležitý)',
      'Google Business Profile a Firmy.cz, abyste se zobrazovali na mapě',
      'Lokální SEO, aby vás zákazníci z vašeho okolí našli první',
      'Rychlost webu (Google penalizuje pomalé stránky)',
      'Technické SEO: sitemap, structured data, přesměrování',
      'Optimalizace textů a nadpisů tak, aby se líbily Googlu i lidem',
      'Měsíční reporting, abyste viděli, jak si váš web stojí',
    ],
    seznam: {
      big: '1/5',
      textLead: 'V Česku se na ',
      textBrand: 'Seznam.cz',
      textTail: ' hledá přibližně každý pátý dotaz. Většina agentur na něj zapomíná. Já ne.',
      caption: 'Seznam.cz · Podíl na českém vyhledávání',
    },
    proof: [
      {
        label: 'Autoškola Trefa · výsledky',
        big: '+150 %',
        suffix: ' návštěvnosti',
        desc: 'Nárůst organické návštěvnosti za 3 měsíce od nasazení SEO.',
      },
      {
        label: 'Klíčové slovo „autoškola Řepy"',
        big: '2. str. → 1. místo',
        suffix: '',
        desc: 'Ze spodu druhé stránky Googlu na první pozici ve vyhledávání.',
      },
    ],
    miniFaq: [
      {
        q: 'Za jak dlouho uvidím výsledky?',
        a: 'První zlepšení obvykle za 2 až 3 měsíce. Výrazné výsledky za 6 měsíců. SEO je maraton, ne sprint. Ale vyplatí se.',
      },
      {
        q: 'Je SEO jistota?',
        a: 'Upřímně: 1. místo nikdo zaručit nemůže. Google to nikomu negarantuje. Můžu ale zaručit, že udělám všechno, co je v mých silách, a vy uvidíte jasný pokrok.',
      },
      {
        q: 'Co když přestanu platit?',
        a: 'Výsledky zůstanou. Postupně ale bez údržby klesnou. Není to jako reklama. Neplatíte za kliknutí, platíte za to, že se posunujete výš.',
      },
    ],
    ctaLead: 'Chcete zjistit, jak na tom váš web aktuálně je?',
    ctaEm: 'Udělám vám SEO audit zdarma.',
    ctaBtn: 'Chci bezplatný SEO audit',
  },

  caseStudy: {
    eyebrow: 'Případová studie · 2025',
    title: 'Jak jsem pomohl Autoškole Trefa',
    lead: 'Malá autoškola s velkými ambicemi. Jenže starý web ji brzdil.',
    steps: [
      {
        label: 'Problém',
        title: 'Zákazníci chodili ke konkurenci',
        body: 'Starý web vypadal nedůvěryhodně, na mobilu byl nečitelný a v Googlu ho nikdo nenašel. Majitel dostával telefonáty, ale zdaleka ne tolik, kolik potřeboval.',
      },
      {
        label: 'Řešení',
        title: 'Nový web a lokální SEO pro Prahu 17',
        body: 'Postavil jsem nový web s jasnou strukturou cen, balíčků (od skútrů po motorky nad 125 cm³ i osobáky) a online přihlašováním do kurzů. Všechno bezchybně funguje na mobilu. Web jsme optimalizovali pro lokální vyhledávání v Praze 17 a okolí, takže vyskočí první, když si lidé v Řepech nebo Praze 6 hledají autoškolu.',
      },
    ],
    resultLabel: 'Výsledek',
    resultTitle: 'Plné termíny, spokojený majitel',
    results: [
      { num: '+3×', label: 'poptávek měsíčně' },
      { num: '#1', label: 'v Googlu pro okres' },
      { num: '2 týd', label: 'celá realizace' },
    ],
    visualLabel: 'Živá ukázka',
    link: 'autoskolatrefa.cz ↗',
    href: 'https://autoskolatrefa.cz',
    before: {
      label: 'Před',
      shots: [
        {
          src: '/studio/images/case-trefa-before-1.png',
          caption: 'Starý web · přehled kurzů',
        },
        {
          src: '/studio/images/case-trefa-before-2.png',
          caption: 'Starý web · úvodní stránka',
        },
      ],
    },
    after: {
      label: 'Po',
      shots: [
        {
          src: '/studio/images/case-trefa-after-1.png',
          caption: 'Nový web · přehled kurzů a online přihlášení',
        },
        {
          src: '/studio/images/case-trefa-after-2.png',
          caption: 'Nový web · úvodní stránka',
        },
      ],
    },
  },

  about: {
    eyebrow: 'O mně',
    paragraphs: [
      ['Ahoj, jsem ', 'Sebastian Kučera.', ' Weby dělám od čtrnácti. Vážně.'],
      'Dneska mi je o pár let víc, za sebou mám 5+ let profesionální praxe a každý den pracuji jako konzultant v **RSM Technology**, kde pomáhám velkým firmám s IT projekty. Ve volném čase a přes vlastní firmu **IC SERVIS s.r.o.** stavím weby pro menší klienty. Pro ty, kteří by se u korporátních agentur ztratili.',
      'Beru si k srdci, že dobrý web dnes znamená víc než hezký design. Záleží mi na tom, aby byl *rychlý, dohledatelný a jednoduchý*. Aby vám šetřil čas, ne ho kradl. Můj táta dělá v oboru už desítky let, takže to, co neumím já, vymyslíme doma u večeře spolu.',
    ],
    stats: [
      { num: '10+', label: 'let zkušeností s webem' },
      { num: '20+', label: 'dokončených projektů' },
      { num: '100 %', label: 'transparentní fakturace přes IC SERVIS' },
    ],
    photo: '/studio/images/sebastian-portrait.jpg',
  },

  process: {
    eyebrow: 'Jak to celé probíhá',
    title: 'Od prvního hovoru po spuštění',
    lead: 'Jednoduchý proces ve čtyřech krocích. Žádné překvapení, žádné tajnůstkářství.',
    steps: [
      {
        num: '1',
        title: 'Nezávazná konzultace',
        body: 'Pobavíme se 15 minut o tom, co potřebujete. Telefonicky nebo přes video. Zdarma, bez závazků.',
      },
      {
        num: '2',
        title: 'Návrh a cenová nabídka',
        body: 'Do 3 dnů dostanete konkrétní plán, přesnou cenu a časový odhad. Černé na bílém.',
      },
      {
        num: '3',
        title: 'Realizace',
        body: 'Web hotový obvykle do 2 až 4 týdnů. Průběžně vám ukazuji, co jsem udělal. Vy říkáte, co změnit.',
      },
      {
        num: '4',
        title: 'Podpora',
        body: 'Po spuštění jsem tu dál. Přidat stránku, opravit text, poradit se? Stačí napsat.',
      },
    ],
  },

  faq: {
    eyebrow: 'Časté dotazy',
    title: 'Otázky, které mi lidé kladou nejčastěji',
    lead: 'Neodpovídám tu na vaši? Zavolejte mi. Na cokoliv přijde řeč, rád pomůžu.',
    cta: 'Zeptat se osobně',
    items: [
      {
        q: 'Kolik mě to celé bude stát?',
        a: 'Záleží na rozsahu. Základní web začíná na 25 000 Kč. SEO balíček a Kompletní péče jsou měsíční paušály od 5 000 Kč, resp. 2 500 Kč. Po patnáctiminutovém hovoru dokážu říct přesnou cenu. Fixní. Bez skrytých poplatků. Fakturuji přes IC SERVIS s.r.o., takže všechno v pořádku i účetně.',
      },
      {
        q: 'Jak dlouho bude web trvat?',
        a: 'Běžný web stihnu do 2 až 4 týdnů od schválení návrhu. Pokud spěcháte (například na sezónu nebo událost), domluvíme se i na zrychleném termínu. Nejdelší zdržení bývá obvykle na straně klienta. Než sežene fotky a texty.',
      },
      {
        q: 'Komu bude web patřit?',
        a: 'Vám. Vždycky. Doménu registruji na vaše jméno, přístupy vám předám, zdrojové soubory máte. Kdybychom se někdy rozloučili, web vám zůstane a můžete s ním pracovat kdekoliv dál.',
      },
      {
        q: 'Musím si sám vymyslet texty a fotky?',
        a: 'Nemusíte. Umím vám pomoct s obojím. Buď napíšu texty na míru, nebo doporučím fotografa. Pokud si chcete texty psát sami, pošlu vám šablonu, abyste věděli, co kam patří.',
      },
      {
        q: 'A co když budu chtít něco změnit po spuštění?',
        a: 'Přesně na to je balíček **Kompletní péče**. Drobné úpravy v ceně měsíčního paušálu. Pokud péči mít nechcete, účtuji jednorázově podle času. Cokoliv do 30 minut dělám zpravidla zdarma.',
      },
      {
        q: 'Jak to celé funguje po právní stránce?',
        a: 'Podnikám legálně přes **IC SERVIS s.r.o.** (IČO 25658417, DIČ CZ25658417, zapsané v OR od roku 1998). Na faktuře najdete IČO, DIČ i sídlo, máme řádnou smlouvu a GDPR v pořádku. Můžete si mě bez problémů dát do účetnictví jako jakéhokoliv jiného dodavatele.',
      },
    ],
  },

  final: {
    eyebrow: 'Pojďme začít',
    title: 'Pobavíme se 15 minut?',
    lead: 'Bez závazků, bez technického žargonu. Řekneme si, co potřebujete, a já vám na rovinu povím, jak můžu pomoct. Nebo jestli nemůžu.',
    ctaPrimary: 'Rezervovat konzultaci',
    ctaSecondary: 'Zavolat rovnou',
    tel: '+420608949472',
    telDisplay: '+420 608 949 472',
    ghost: '15',
    trust: [
      'Odpovídám do 24 hodin',
      'Zdarma a bez závazků',
      'Praha a okolí',
    ],
  },

  footer: {
    tagline: 'Freelance vývojář webů pro malé firmy a živnostníky. Kralupy nad Vltavou, Praha a okolí.',
    navTitle: 'Navigace',
    navLinks: [
      { label: 'Služby', href: '#sluzby' },
      { label: 'Případová studie', href: '#pripad' },
      { label: 'O mně', href: '#omne' },
      { label: 'FAQ', href: '#faq' },
    ],
    contactTitle: 'Kontakt',
    email: 'sebastian.kucera@icloud.com',
    phone: '+420 608 949 472',
    city: 'Kralupy nad Vltavou',
    legalLines: [
      '© 2026 IC SERVIS s.r.o.',
      'IČO 25658417 · DIČ CZ25658417',
      'Okružní 759, 25168 Sulice · od 1998',
    ],
    made: 'Vyrobeno s ◆ v Česku',
    privacyLink: 'Ochrana osobních údajů',
  },

  privacy: {
    title: 'Ochrana osobních údajů',
    updated: 'Aktualizováno 22. dubna 2026',
    intro: 'Tento web provozuje IC SERVIS s.r.o., IČO 25658417, se sídlem Okružní 759, 25168 Sulice. Ochrana vašich osobních údajů je pro mě důležitá. Níže najdete přehled toho, co o vás sbírám, proč to dělám a jaká máte práva.',
    sections: [
      {
        heading: 'Správce údajů',
        body: 'Správcem osobních údajů je **IC SERVIS s.r.o.**, IČO 25658417, DIČ CZ25658417, se sídlem Okružní 759, 25168 Sulice, Česká republika. Kontakt: sebastian.kucera@icloud.com, +420 608 949 472.',
      },
      {
        heading: 'Jaké údaje sbírám',
        body: 'Pokud mi napíšete přes kontaktní formulář na tomto webu, zpracovávám vaše **jméno**, **e-mail nebo telefon** a **obsah zprávy**. Další údaje sbírám jen tehdy, když mi je sami pošlete v rámci běžné komunikace.',
      },
      {
        heading: 'K čemu je používám',
        body: 'Údaje slouží výhradně k tomu, abych vám odpověděl na poptávku a případně s vámi domluvil spolupráci. Neposílám marketingové e-maily, nepředávám údaje třetím stranám pro jejich reklamu a nepoužívám údaje k profilování.',
      },
      {
        heading: 'Jak dlouho je uchovávám',
        body: 'Pokud z vaší poptávky nevznikne spolupráce, data smažu do **3 měsíců**. Pokud spolupráce vznikne, uchovávám údaje po dobu trvání smluvního vztahu a následně 3 roky kvůli účetním a zákonným povinnostem.',
      },
      {
        heading: 'Komu je předávám',
        body: 'Kontaktní formulář zpracovává služba **Formspree** (Formspree Inc., USA), která mi zprávy přeposílá na e-mail. Dále mohu údaje zpracovat v běžných kancelářských nástrojích (e-mail, kalendář, fakturační software). Vše v rámci EU nebo se standardními smluvními doložkami.',
      },
      {
        heading: 'Cookies',
        body: 'Tento web **nepoužívá žádné reklamní ani analytické cookies**. Jediné údaje, které ukládáme lokálně v prohlížeči, jsou technické (například preference jazyka, pokud jsou dostupné).',
      },
      {
        heading: 'Vaše práva',
        body: 'Podle GDPR máte právo na **přístup** ke svým údajům, **opravu**, **vymazání**, **omezení zpracování**, **přenositelnost** a právo **podat stížnost** u Úřadu pro ochranu osobních údajů (uoou.cz). Stačí mi napsat na sebastian.kucera@icloud.com a vaši žádost vyřídím do 30 dnů.',
      },
    ],
    close: 'Zavřít',
  },

  modal: {
    title: 'Nezávazná konzultace',
    sub: 'Ozvu se vám do 24 hodin a domluvíme si 15 minut, co se vám bude hodit.',
    fields: {
      name: 'Vaše jméno',
      namePlaceholder: 'Jan Novák',
      contact: 'E-mail nebo telefon',
      contactPlaceholder: 'jan@novak.cz / +420…',
      topic: 'Co zhruba řešíte?',
      topicOptions: [
        'Nový web od nuly',
        'Redesign stávajícího webu',
        'SEO / audit zdarma',
        'Péče o existující web',
        'Zatím nevím, poradíme spolu',
      ],
      message: 'Krátce o vašem podnikání (nepovinné)',
      messagePlaceholder: 'Jsem autoškola v Kralupech, potřebuju…',
    },
    submit: 'Odeslat a domluvit si hovor',
    successTitle: 'Máme to!',
    successBody: 'Ozvu se vám do 24 hodin na kontakt, který jste zadali.',
    close: 'Zavřít',
  },
};
