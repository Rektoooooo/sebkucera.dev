import { useState } from 'react';
import AnimatedBorderButton from './AnimatedBorderButton';

export default function ModernNav({ logo, logoAlt = 'Logo' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 py-3" style={{ transform: 'translateZ(0)', willChange: 'transform' }}>
      <div className="max-w-7xl mx-auto">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center px-3">
          <div className="flex items-center gap-8 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl">
            <a href="#" className="font-semibold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
              sebkucera.dev
            </a>

            <div className="flex items-center gap-6 text-sm">
              <a href="#about" className="text-zinc-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#skills" className="text-zinc-400 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-zinc-400 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>

            <AnimatedBorderButton href="https://github.com/Rektoooooo">
              GitHub
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </AnimatedBorderButton>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <div className="flex items-center justify-between px-3 py-2 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl max-w-full">
            <a href="#" className="font-semibold text-xs bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 bg-clip-text text-transparent truncate">
              sebkucera.dev
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-1 flex-shrink-0 ml-2"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mt-3 px-4 py-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
              <div className="flex flex-col gap-4">
                <a
                  href="#about"
                  className="text-zinc-400 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="text-zinc-400 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="text-zinc-400 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-zinc-400 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <a
                  href="https://github.com/Rektoooooo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-6 py-3 bg-white text-black rounded-2xl font-medium hover:bg-zinc-200 transition-all text-center"
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
