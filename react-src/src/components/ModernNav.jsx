import { useState, useEffect, useRef } from 'react';

const NAV_ITEMS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Hire Me', href: '#work-with-me', id: 'work-with-me' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function ModernNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const listRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  // Track scroll for compact pill state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-30% 0% -55% 0%', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Sliding indicator pill
  useEffect(() => {
    const list = listRef.current;
    if (!list || !active) {
      setIndicator((i) => ({ ...i, opacity: 0 }));
      return;
    }
    const activeEl = list.querySelector(`[data-id="${active}"]`);
    if (!activeEl) {
      setIndicator((i) => ({ ...i, opacity: 0 }));
      return;
    }
    const listRect = list.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();
    setIndicator({
      left: activeRect.left - listRect.left,
      width: activeRect.width,
      opacity: 1,
    });
  }, [active, scrolled]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-3 py-3"
      style={{ transform: 'translateZ(0)', willChange: 'transform' }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Desktop pill */}
        <div className="hidden md:flex items-center justify-center px-3">
          <div
            className={`flex items-center gap-4 rounded-full border backdrop-blur-xl transition-all duration-500 ease-out ${
              scrolled
                ? 'border-purple-500/25 bg-black/70 px-2.5 py-1.5 shadow-[0_8px_32px_rgba(168,85,247,0.18)]'
                : 'border-white/10 bg-black/40 px-3 py-2'
            }`}
          >
            {/* Brand */}
            <a
              href="#"
              className="flex items-center gap-2 pl-2 pr-1 text-sm font-semibold"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-400" />
              </span>
              <span className="bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
                sebkucera.dev
              </span>
            </a>

            {/* Links with sliding active indicator */}
            <div ref={listRef} className="relative flex items-center">
              <span
                className="absolute top-0 bottom-0 rounded-full bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 ring-1 ring-purple-400/30 shadow-[0_0_16px_rgba(168,85,247,0.3)] transition-all duration-300 ease-out"
                style={{
                  left: indicator.left,
                  width: indicator.width,
                  opacity: indicator.opacity,
                }}
                aria-hidden="true"
              />
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  data-id={item.id}
                  className={`relative z-10 rounded-full px-3.5 py-1.5 text-sm transition-colors duration-200 ${
                    active === item.id
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://github.com/Rektoooooo"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full border border-purple-400/40 bg-gradient-to-r from-purple-600 to-fuchsia-600 px-3.5 py-1.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all hover:shadow-[0_0_28px_rgba(168,85,247,0.5)]"
            >
              GitHub
              <svg
                className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 9L9 3M9 3H4.5M9 3V7.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <div className="flex max-w-full items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-xl">
            <a href="#" className="flex items-center gap-2 truncate text-xs font-semibold">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-purple-400" />
              </span>
              <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                sebkucera.dev
              </span>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 flex-shrink-0 p-1 text-white"
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div className="mt-3 rounded-2xl border border-white/10 bg-black/60 px-2 py-2 backdrop-blur-xl">
              <div className="flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm transition-colors ${
                      active === item.id
                        ? 'bg-purple-500/15 text-white ring-1 ring-purple-400/30'
                        : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="https://github.com/Rektoooooo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-4 py-3 text-sm font-semibold text-white"
                >
                  GitHub →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
