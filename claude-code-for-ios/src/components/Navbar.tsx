import { useState, useEffect } from 'react';

const navItems = [
  { id: 'getting-started', label: 'start' },
  { id: 'claude-md', label: 'CLAUDE.md' },
  { id: 'plan-mode', label: 'plan-mode' },
  { id: 'skills', label: 'skills' },
  { id: 'xcode-mcp', label: 'xcode-mcp' },
  { id: 'github-mcp', label: 'github-mcp' },
  { id: 'commands', label: 'commands' },
  { id: 'assets', label: 'assets' },
  { id: 'workflow', label: 'workflow' },
  { id: 'tips', label: 'tips' },
  { id: 'troubleshooting', label: 'faq' },
  { id: 'resources', label: 'resources' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen ? 'bg-bg-primary/95 backdrop-blur-md border-b border-white/5' : 'bg-bg-primary/80 backdrop-blur-sm'
    }`}>
      <div className="w-full px-4 2xl:px-5">
        <div className="flex items-center justify-between 2xl:justify-end h-14">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0 2xl:mr-6">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            <span className="font-mono text-sm text-text-primary whitespace-nowrap">~/</span>
            <span className="font-mono text-sm font-semibold text-text-primary whitespace-nowrap">claude-ios</span>
            <span className="text-orange text-lg">|</span>
          </a>

          {/* Nav items - desktop */}
          <div className="hidden 2xl:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-2.5 py-1.5 rounded-lg border font-mono text-xs transition-all whitespace-nowrap ${
                  activeSection === item.id
                    ? 'border-white/60 bg-white/10'
                    : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                }`}
              >
                <span className="text-green-500">$</span>
                <span className="text-blue-500 ml-1">cd</span>
                <span className="text-text-primary ml-1">/{item.label}</span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="2xl:hidden text-text-muted hover:text-text-primary p-2"
          >
            <i className={`bi ${isMobileMenuOpen ? 'bi-x-lg' : 'bi-list'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="2xl:hidden bg-bg-primary/95 backdrop-blur-md border-b border-white/5">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleMobileNavClick}
                  className={`px-3 py-2 rounded-lg border font-mono text-xs transition-all ${
                    activeSection === item.id
                      ? 'border-white/60 bg-white/10'
                      : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                  }`}
                >
                  <span className="text-green-500">$</span>
                  <span className="text-blue-500 ml-1">cd</span>
                  <span className="text-text-primary ml-1">/{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
