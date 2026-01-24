import { useState, useEffect, useRef } from 'react';

const navCategories = [
  {
    label: 'setup',
    items: [
      { id: 'getting-started', label: 'start' },
      { id: 'claude-md', label: 'CLAUDE.md' },
    ]
  },
  {
    label: 'tools',
    items: [
      { id: 'plan-mode', label: 'plan-mode' },
      { id: 'skills', label: 'skills' },
      { id: 'commands', label: 'commands' },
      { id: 'hooks', label: 'hooks' },
    ]
  },
  {
    label: 'mcp',
    items: [
      { id: 'xcode-mcp', label: 'xcode-mcp' },
      { id: 'github-mcp', label: 'github-mcp' },
    ]
  },
  {
    label: 'appstore',
    items: [
      { id: 'app-preparation', label: 'preparation' },
      { id: 'app-upload', label: 'upload' },
      { id: 'app-review', label: 'review' },
    ]
  },
  {
    label: 'guide',
    items: [
      { id: 'assets', label: 'assets' },
      { id: 'workflow', label: 'workflow' },
      { id: 'tips', label: 'tips' },
    ]
  },
  {
    label: 'help',
    items: [
      { id: 'troubleshooting', label: 'faq' },
      { id: 'resources', label: 'resources' },
    ]
  },
];

// Flatten for mobile menu and scroll detection
const navItems = navCategories.flatMap(cat => cat.items);

// All searchable items with comprehensive keywords
const searchableItems = [
  { id: 'getting-started', label: 'Getting Started', keywords: 'install setup npm node authenticate cli terminal xcode macos sonoma git prerequisites requirements verification version' },
  { id: 'claude-md', label: 'CLAUDE.md', keywords: 'context memory project configuration mvvm observable architecture build commands data model swiftdata workflow requirements briefing' },
  { id: 'plan-mode', label: 'Plan Mode', keywords: 'planning architecture design strategy plan.md implementation phases refactoring decisions approval multi-file complex features' },
  { id: 'skills', label: 'Skills', keywords: 'ios-developer swiftui-views swiftui-layout swiftui-navigation swiftui-animations swift-architecture swift-data-persistence swift-networking swift-concurrency ios-testing ios-debugging ios-cloudkit ios-healthkit ios-storekit ios-mapkit ios-authentication ios-notifications ios-accessibility ios-localization ios-app-lifecycle ios-app-store ios-app-planner ios-release-manager swift-code-reviewer swift-optimizer skill-writer apple-intelligence download specialized expertise hub routing' },
  { id: 'commands', label: 'Commands', keywords: 'slash commit review-pr custom swiftui-component test-viewmodel swiftdata-model api-service localize arguments markdown terminal restart exit' },
  { id: 'hooks', label: 'Hooks', keywords: 'automation swiftlint pretooluse posttooluse settings.json protect secrets xcconfig api keys googleservice exit code block allow scripts shell bash' },
  { id: 'xcode-mcp', label: 'Xcode MCP', keywords: 'build test compile xcodebuild server smithery mcp xcode_build xcode_test xcode_clean xcode_schemes simulator deriveddata errors automatic verification' },
  { id: 'github-mcp', label: 'GitHub MCP', keywords: 'pull request issues repository pr token pat personal access branch push commit create labels milestones workflow api' },
  { id: 'app-preparation', label: 'App Preparation', keywords: 'appstore bundle id signing certificates provisioning profiles icons 1024x1024 launch screen info.plist privacy description capabilities entitlements version build number metadata screenshots' },
  { id: 'app-upload', label: 'App Upload', keywords: 'archive distribute testflight upload submit organizer validate transporter altool processing internal external testers beta' },
  { id: 'app-review', label: 'App Review', keywords: 'rejection guidelines apple review submission safety performance business design legal privacy crashes bugs broken links metadata expedited appeal' },
  { id: 'assets', label: 'Assets', keywords: 'icons screenshots images dall-e chatgpt prompts app icon 1024 onboarding empty states illustrations figma device frames marketing' },
  { id: 'workflow', label: 'Workflow', keywords: 'process phases development steps setup planning architecture features testing polish release swiftdata observable api' },
  { id: 'tips', label: 'Tips', keywords: 'best practices advice recommendations commit frequently device testing edge cases preview providers permissions version control review' },
  { id: 'troubleshooting', label: 'FAQ', keywords: 'problems issues errors help fix mcp not connecting build errors token skills not loading context simulator swiftdata migration deprecated preview provider' },
  { id: 'resources', label: 'Resources', keywords: 'documentation links apple developer smithery human interface guidelines app store review swift.org mcp specification' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Filter search results
  const searchResults = searchQuery.length > 0
    ? searchableItems.filter(item =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keywords.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle search result click
  const handleSearchClick = (id: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

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
      <div className="w-full px-4">
        <div className="flex items-center justify-center h-14">
          {/* Logo + Nav categories - desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="flex items-center gap-2 flex-shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              <span className="font-mono text-sm text-text-primary whitespace-nowrap">~/</span>
              <span className="font-mono text-sm font-semibold text-text-primary whitespace-nowrap">claude-ios</span>
              <span className="text-orange text-lg">|</span>
            </a>

            {/* Nav categories */}
            <div className="flex items-center gap-2">
            {navCategories.map((category) => {
              const isActiveCategory = category.items.some(item => item.id === activeSection);
              return (
                <div key={category.label} className="relative group">
                  {/* Category button */}
                  <button
                    className={`px-3 py-1.5 rounded-lg border font-mono text-xs transition-all whitespace-nowrap ${
                      isActiveCategory
                        ? 'border-white/60 bg-white/10'
                        : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                    }`}
                  >
                    <span className="text-green-500">$</span>
                    <span className="text-blue-500 ml-1">ls</span>
                    <span className="text-text-primary ml-1">/{category.label}</span>
                    <i className="bi bi-chevron-down ml-1 text-text-muted text-[10px]"></i>
                  </button>

                  {/* Dropdown */}
                  <div className="absolute top-full left-0 mt-1 py-2 bg-bg-primary/95 backdrop-blur-md border border-white/10 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[160px] shadow-xl">
                    {category.items.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block px-3 py-2 font-mono text-xs transition-all ${
                          activeSection === item.id
                            ? 'bg-white/10 text-text-primary'
                            : 'text-text-muted hover:bg-white/5 hover:text-text-primary'
                        }`}
                      >
                        <span className="text-green-500">$</span>
                        <span className="text-blue-500 ml-1">cd</span>
                        <span className="ml-1">/{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
            </div>

            {/* Search */}
            <div ref={searchRef} className="relative">
              <div className="flex items-center">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-text-muted hover:text-text-primary transition-colors"
                >
                  <i className="bi bi-search text-sm"></i>
                </button>
                {isSearchOpen && (
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    autoFocus
                    className="w-40 px-3 py-1.5 bg-bg-terminal border border-white/20 rounded-lg font-mono text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-orange/50"
                  />
                )}
              </div>

              {/* Search Results Dropdown */}
              {isSearchOpen && searchResults.length > 0 && (
                <div className="absolute top-full right-0 mt-1 py-2 bg-bg-primary/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl min-w-[200px] max-h-[300px] overflow-y-auto">
                  {searchResults.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSearchClick(item.id)}
                      className="w-full text-left px-3 py-2 font-mono text-xs text-text-muted hover:bg-white/5 hover:text-text-primary transition-all"
                    >
                      <span className="text-green-500">$</span>
                      <span className="text-blue-500 ml-1">cd</span>
                      <span className="ml-1">/{item.label.toLowerCase()}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* No results */}
              {isSearchOpen && searchQuery.length > 0 && searchResults.length === 0 && (
                <div className="absolute top-full right-0 mt-1 py-3 px-4 bg-bg-primary/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl min-w-[200px]">
                  <p className="text-text-muted text-xs font-mono">No results found</p>
                </div>
              )}
            </div>
          </div>

          {/* Mobile: Logo + menu button */}
          <div className="md:hidden flex items-center justify-between w-full">
            <a href="#" className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              <span className="font-mono text-sm text-text-primary whitespace-nowrap">~/</span>
              <span className="font-mono text-sm font-semibold text-text-primary whitespace-nowrap">claude-ios</span>
              <span className="text-orange text-lg">|</span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-muted hover:text-text-primary p-2"
            >
              <i className={`bi ${isMobileMenuOpen ? 'bi-x-lg' : 'bi-list'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-bg-primary/95 backdrop-blur-md border-b border-white/5">
          <div className="px-4 py-4">
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-sm"></i>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search sections..."
                  className="w-full pl-9 pr-3 py-2 bg-bg-terminal border border-white/20 rounded-lg font-mono text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-orange/50"
                />
              </div>
              {/* Mobile Search Results */}
              {searchQuery.length > 0 && searchResults.length > 0 && (
                <div className="mt-2 py-2 bg-bg-terminal border border-white/10 rounded-lg">
                  {searchResults.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        handleSearchClick(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 font-mono text-xs text-text-muted hover:bg-white/5 hover:text-text-primary transition-all"
                    >
                      <span className="text-green-500">$</span>
                      <span className="text-blue-500 ml-1">cd</span>
                      <span className="ml-1">/{item.label.toLowerCase()}</span>
                    </button>
                  ))}
                </div>
              )}
              {searchQuery.length > 0 && searchResults.length === 0 && (
                <div className="mt-2 py-2 px-3 bg-bg-terminal border border-white/10 rounded-lg">
                  <p className="text-text-muted text-xs font-mono">No results found</p>
                </div>
              )}
            </div>

            <div className="space-y-4">
              {navCategories.map((category) => (
                <div key={category.label}>
                  <div className="text-text-muted font-mono text-xs mb-2 flex items-center gap-2">
                    <span className="text-green-500">$</span>
                    <span className="text-blue-500">ls</span>
                    <span>/{category.label}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {category.items.map((item) => (
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
                        <span className="text-text-primary">/{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
