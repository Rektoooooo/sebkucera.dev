"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { href: "#hero", label: "Domů" },
  { href: "#o-nas", label: "O nás" },
  { href: "#kurzy", label: "Chci řidičák" },
  { href: "#motoskola", label: "Motoškola" },
  { href: "#vozovy-park", label: "Vozový park" },
  { href: "#vyukova-plocha", label: "Výuková plocha" },
  { href: "#aktuality", label: "Aktuality" },
  { href: "/trefa/cenik", label: "Ceník" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isHomepage, setIsHomepage] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const homepage = window.location.pathname === "/" || window.location.pathname === "/trefa" || window.location.pathname === "/trefa/";
    setIsHomepage(homepage);
    if (!homepage) {
      setActiveSection(window.location.pathname);
      setScrolled(true);
    } else {
      setActiveSection("hero");
    }
    const handleScroll = () => {
      setScrolled(homepage ? window.scrollY > 20 : true);
      if (!isHomepage) return;
      const sections = navLinks.filter((l) => l.href.startsWith("#")).map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/")) {
      window.location.href = href;
    } else if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Not on homepage — navigate to homepage with anchor
        window.location.href = "/trefa/" + href;
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-[0_1px_12px_rgba(15,23,42,0.06)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => navigate("#hero")}
          className="flex items-center"
        >
          <Image
            src="/trefa/images/trefa-logo.png"
            alt="Autoškola Trefa"
            width={140}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </button>

        {/* Desktop */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => navigate(link.href)}
              className={`relative rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors ${
                activeSection === (link.href.startsWith("/") ? link.href : link.href.slice(1))
                  ? "text-accent"
                  : scrolled
                    ? "text-muted hover:text-foreground"
                    : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
              {activeSection === (link.href.startsWith("/") ? link.href : link.href.slice(1)) && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`flex h-9 w-9 items-center justify-center rounded-lg lg:hidden ${scrolled ? "text-muted hover:bg-surface-alt" : "text-white/80 hover:text-white"}`}
          aria-label="Menu"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border-light bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-0.5 px-5 py-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => navigate(link.href)}
                  className={`rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                    activeSection === (link.href.startsWith("/") ? link.href : link.href.slice(1))
                      ? "bg-accent/5 text-accent"
                      : "text-muted hover:bg-surface-alt hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
