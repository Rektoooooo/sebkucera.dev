import { useEffect, useState } from 'react';
import { useT } from '../hooks/useT.js';
import { useModal } from './ModalContext.jsx';

export default function Nav() {
  const { t } = useT();
  const { open } = useModal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#sluzby', label: t.nav.sluzby },
    { href: '#seo', label: t.nav.seo },
    { href: '#pripad', label: t.nav.pripad },
    { href: '#omne', label: t.nav.omne },
    { href: '#proces', label: t.nav.proces },
    { href: '#faq', label: t.nav.faq },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled ? 'border-b border-[var(--line)]' : 'border-b border-transparent'
      }`}
      style={{
        backgroundColor: 'color-mix(in srgb, var(--bg) 82%, transparent)',
        backdropFilter: 'saturate(140%) blur(12px)',
        WebkitBackdropFilter: 'saturate(140%) blur(12px)',
      }}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-[var(--pad)] py-[14px]">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-[-0.01em] no-underline text-[var(--ink)]">
          <span
            className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[var(--ink)] text-[var(--bg)] font-serif italic text-lg"
          >
            {t.brandMark}
          </span>
          <span className="hidden whitespace-nowrap sm:inline">{t.brand}</span>
        </a>

        <div className="hidden gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] text-[var(--ink-2)] no-underline hover:text-[var(--ink)]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => open()}
          className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[var(--ink)] px-3.5 py-1.5 text-[13px] font-medium text-[var(--bg)] transition-all hover:bg-[var(--accent)] sm:px-4 sm:py-2 sm:text-[14px]"
        >
          <span className="sm:hidden">Konzultace</span>
          <span className="hidden sm:inline">{t.nav.cta}</span>
        </button>
      </div>
    </nav>
  );
}
