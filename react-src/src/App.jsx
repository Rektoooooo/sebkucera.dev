import ModernNav from './components/ModernNav';
import StarsBackground from './components/StarsBackground';
import GlowCard from './components/GlowCard';
import ScrollReveal from './components/ScrollReveal';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  const navItems = [
    {
      label: "About",
      bgColor: "linear-gradient(to br, rgba(168, 85, 247, 0.4), rgba(99, 102, 241, 0.3))",
      textColor: "#fff",
      links: [
        { label: "My Story", href: "#about", ariaLabel: "About me" },
        { label: "Skills", href: "#skills", ariaLabel: "My skills" }
      ]
    },
    {
      label: "Projects",
      bgColor: "linear-gradient(to br, rgba(139, 92, 246, 0.4), rgba(217, 70, 239, 0.3))",
      textColor: "#fff",
      links: [
        { label: "All Projects", href: "#projects", ariaLabel: "View all projects" },
        { label: "GitHub", href: "https://github.com/Rektoooooo", ariaLabel: "GitHub profile" }
      ]
    },
    {
      label: "Hire Me",
      bgColor: "linear-gradient(to br, rgba(236, 72, 153, 0.4), rgba(168, 85, 247, 0.3))",
      textColor: "#fff",
      links: [
        { label: "Services", href: "#work-with-me", ariaLabel: "View services" },
        { label: "Get in Touch", href: "#work-with-me", ariaLabel: "Contact form" }
      ]
    },
    {
      label: "Contact",
      bgColor: "linear-gradient(to br, rgba(232, 121, 249, 0.4), rgba(236, 72, 153, 0.3))",
      textColor: "#fff",
      links: [
        { label: "Email", href: "mailto:sebastian.kucera@icloud.com", ariaLabel: "Email me" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/sebastian-kucera-31719b1b0/", ariaLabel: "LinkedIn profile" }
      ]
    }
  ];

  return (
    <>
      {/* Animated Stars Background */}
      <StarsBackground />

      {/* Modern Navigation */}
      <ModernNav logo={logo} logoAlt="sebkucera.dev" />

      <div className="relative min-h-screen text-white" style={{ position: 'relative', zIndex: 1 }}>
        <div className="space-y-12 pt-32 pb-16 px-4 md:px-6">
          {/* Hero Section */}
          <section className="mx-auto max-w-6xl px-4 sm:px-6 md:px-12 py-20 sm:py-32 md:py-40 relative min-h-[85vh] flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto relative z-10">
              {/* Badge */}
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-sm text-purple-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                  Swift / React Developer
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-tight">
                Sebastian <span className="bg-gradient-to-r from-purple-200 to-purple-600 bg-clip-text text-transparent">Kučera</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Building modern iOS and web applications with Swift, SwiftUI, and React.
                Currently studying Software Engineering in Prague.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <a href="#projects" className="group relative inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-white/5 backdrop-blur-xl border-2 border-white/10 text-white font-semibold transition-all hover:scale-105 hover:bg-white/10 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/40 overflow-hidden w-full sm:w-auto justify-center">
                  <span className="absolute inset-0 border-2 border-transparent rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></span>
                  <span className="relative">View Projects</span>
                  <svg className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#contact" className="group relative inline-flex items-center px-6 py-3 rounded-2xl border-2 border-white/10 bg-white/5 backdrop-blur-xl text-white font-semibold transition-all hover:scale-105 hover:border-purple-400/50 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/30 w-full sm:w-auto justify-center">
                  <span className="relative">Contact</span>
                </a>
              </div>

              {/* Stats Cards - Ryne.ai Style */}
              <div className="inline-flex flex-col md:flex-row items-center justify-center rounded-2xl bg-black/60 backdrop-blur-xl border-white/10 border-2 w-full md:w-auto" style={{ transform: 'translateZ(0)', willChange: 'transform' }}>
                <div className="px-6 md:px-10 py-4 text-center w-full md:w-auto">
                  <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-200 to-purple-600 bg-clip-text text-transparent">5+ years</div>
                  <div className="text-xs text-purple-200/50 mt-0.5">Experience</div>
                </div>
                <div className="px-6 md:px-10 py-4 text-center w-full md:w-auto">
                  <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-200 to-purple-600 bg-clip-text text-transparent">Swift</div>
                  <div className="text-xs text-purple-200/50 mt-0.5">iOS Dev</div>
                </div>
                <div className="px-6 md:px-10 py-4 text-center w-full md:w-auto">
                  <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-200 to-purple-600 bg-clip-text text-transparent">React</div>
                  <div className="text-xs text-purple-200/50 mt-0.5">Web Dev</div>
                </div>
              </div>
            </div>

            {/* Large Bottom Glow Effect - Multiple layers for intensity */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-purple-600/40 rounded-full blur-[150px] -z-10"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-purple-500/50 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-400/60 rounded-full blur-[80px] -z-10"></div>
          </section>

          {/* About Section */}
          <ScrollReveal>
            <section id="about" className="mx-auto max-w-6xl px-6 md:px-12 py-20 md:py-24 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-transparent blur-3xl -z-10"></div>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">About Me</h2>
                <div className="space-y-6 text-lg md:text-xl leading-relaxed text-zinc-300">
                  <p>
                    Hi, I'm <span className="font-semibold text-white">Sebastian</span> — a student of Software Engineering at Unicorn University and an iOS developer focused on Swift & SwiftUI.
                  </p>
                  <p>
                    I love working on ambitious projects like my fitness app, and I'm always up for learning, collaborating, and shipping clean, thoughtful interfaces.
                  </p>
                  <p>
                    Outside coding I'm into training and staying active. If you're interested in working together, feel free to reach out.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Skills Section */}
          <ScrollReveal>
            <section id="skills" className="mx-auto max-w-6xl px-6 md:px-12 py-20 md:py-24 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-blue-500/5 to-transparent blur-3xl -z-10"></div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center">Skills & Expertise</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <GlowCard className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10" glowColor="#a855f7">
                <h3 className="text-xl font-bold text-white mb-3">Swift / SwiftUI</h3>
                <p className="text-zinc-400 leading-relaxed">Native iOS development with modern declarative UI frameworks and design patterns.</p>
              </GlowCard>
              <GlowCard className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10" glowColor="#c084fc">
                <h3 className="text-xl font-bold text-white mb-3">React</h3>
                <p className="text-zinc-400 leading-relaxed">Building dynamic web applications with component-based architecture and hooks.</p>
              </GlowCard>
              <GlowCard className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10" glowColor="#9333ea">
                <h3 className="text-xl font-bold text-white mb-3">JavaScript / TypeScript</h3>
                <p className="text-zinc-400 leading-relaxed">Modern ES6+ features, async programming, and type-safe development.</p>
              </GlowCard>
              <GlowCard className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10" glowColor="#8b5cf6">
                <h3 className="text-xl font-bold text-white mb-3">Java & SQL</h3>
                <p className="text-zinc-400 leading-relaxed">Object-oriented programming, database design, and backend development.</p>
              </GlowCard>
              <GlowCard className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10" glowColor="#d946ef">
                <h3 className="text-xl font-bold text-white mb-3">AI-Assisted Development</h3>
                <p className="text-zinc-400 leading-relaxed">Leveraging Claude Code, GitHub Copilot, and ChatGPT for enhanced productivity.</p>
              </GlowCard>
              <GlowCard className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10" glowColor="#a78bfa">
                <h3 className="text-xl font-bold text-white mb-3">Code Optimization</h3>
                <p className="text-zinc-400 leading-relaxed">Performance tuning, debugging, and modern development workflows.</p>
              </GlowCard>
            </div>
            </section>
          </ScrollReveal>

          {/* Projects Section - iOS & Web */}
          <ScrollReveal>
            <section id="projects" className="mx-auto max-w-6xl px-6 md:px-12 py-20 md:py-24 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-blue-500/5 to-transparent blur-3xl -z-10"></div>
            <div className="flex items-end justify-between gap-4 mb-12">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Projects</h2>
              <a href="https://github.com/Rektoooooo" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white transition-colors">
                All on GitHub →
              </a>
            </div>

            {/* iOS Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">iOS Apps</h3>
              <div className="projects-grid">
                {/* ShadowLift */}
                <GlowCard glowColor="#a855f7">
                  <div className="project-card">
                    <img src="/images/App icons/ShadowLift logo.png" alt="ShadowLift" className="app-icon" />
                    <div className="project-info">
                      <div className="project-category">Health & Fitness</div>
                      <h3 className="project-title">ShadowLift</h3>
                      <p className="project-description">Track strength progress and optimize your workouts.</p>
                      <div className="project-buttons">
                        <a href="https://shadowlift.app" target="_blank" rel="noopener noreferrer" className="get-button">Website</a>
                        <a href="https://apps.apple.com/us/app/shadowlift/id6743451583" target="_blank" rel="noopener noreferrer" className="get-button get-button-appstore">App Store</a>
                        <a href="https://github.com/Rektoooooo/ShadowLift" target="_blank" rel="noopener noreferrer" className="get-button get-button-github">GitHub</a>
                      </div>
                    </div>
                  </div>
                </GlowCard>

                {/* Habit Owl */}
                <GlowCard glowColor="#a855f7">
                  <div className="project-card">
                    <img src="/images/App icons/HabitOwl logo.png" alt="Habit Owl" className="app-icon" />
                    <div className="project-info">
                      <div className="project-category">Productivity</div>
                      <h3 className="project-title">Habit Owl</h3>
                      <p className="project-description">Build better habits with streak tracking, focus sessions, and Apple Watch support.</p>
                      <div className="project-buttons">
                        <a href="https://apps.apple.com/us/app/myhabitowl/id6757938878" target="_blank" rel="noopener noreferrer" className="get-button get-button-appstore">App Store</a>
                        <a href="https://github.com/Rektoooooo/HabitFlow" target="_blank" rel="noopener noreferrer" className="get-button get-button-github">GitHub</a>
                      </div>
                    </div>
                  </div>
                </GlowCard>

                {/* BattleShips */}
                <GlowCard glowColor="#c084fc">
                  <div className="project-card">
                    <img src="/images/App icons/Battle ships logo.png" alt="BattleShips" className="app-icon" />
                    <div className="project-info">
                      <div className="project-category">Games</div>
                      <h3 className="project-title">BattleShips</h3>
                      <p className="project-description">Classic strategy game with smart AI opponent.</p>
                      <div className="project-buttons">
                        <a href="https://github.com/Rektoooooo/SwiftUIBattleShips" target="_blank" rel="noopener noreferrer" className="get-button get-button-github">GitHub</a>
                      </div>
                    </div>
                  </div>
                </GlowCard>

                {/* Pushly */}
                <GlowCard glowColor="#9333ea">
                  <div className="project-card">
                    <img src="/images/App icons/Pushly logo.png" alt="Pushly" className="app-icon" />
                    <div className="project-info">
                      <div className="project-category">Health & Fitness</div>
                      <h3 className="project-title">Pushly</h3>
                      <p className="project-description">Friendly nudges to help you stay active throughout the day.</p>
                      <div className="project-buttons">
                        <a href="https://github.com/Rektoooooo/Pushly" target="_blank" rel="noopener noreferrer" className="get-button get-button-github">GitHub</a>
                      </div>
                    </div>
                  </div>
                </GlowCard>

                {/* Rick & Morty */}
                <GlowCard glowColor="#8b5cf6">
                  <div className="project-card">
                    <img src="/images/App icons/Rick and morty.jpg" alt="Rick & Morty" className="app-icon" />
                    <div className="project-info">
                      <div className="project-category">Entertainment</div>
                      <h3 className="project-title">Rick & Morty API</h3>
                      <p className="project-description">SwiftUI app and web explorer using the Rick and Morty API.</p>
                      <div className="project-buttons">
                        <a href="https://sebkucera.dev/rick&morty/" target="_blank" rel="noopener noreferrer" className="get-button">Website</a>
                        <a href="https://github.com/Rektoooooo/Rick-Morty" target="_blank" rel="noopener noreferrer" className="get-button get-button-github">GitHub</a>
                      </div>
                    </div>
                  </div>
                </GlowCard>

                {/* MyCarTally */}
                <GlowCard glowColor="#ec4899">
                  <div className="project-card">
                    <img src="/images/App icons/MyCarTally logo.png" alt="MyCarTally" className="app-icon" />
                    <div className="project-info">
                      <div className="project-category">Utilities</div>
                      <h3 className="project-title">MyCarTally</h3>
                      <p className="project-description">A smart car expense tracking app built with SwiftUI.</p>
                      <div className="project-buttons">
                        <a href="https://github.com/Rektoooooo/mycartally-ios" target="_blank" rel="noopener noreferrer" className="get-button get-button-github">GitHub</a>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </div>
            </div>

            {/* Web Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Web Projects</h3>
              <div className="projects-grid">
                {/* ApplyTailor */}
                <GlowCard glowColor="#10b981">
                  <div className="project-card">
                    <img src="/images/App icons/ApplyTailor logo.png" alt="ApplyTailor" className="app-icon" />
                    <div className="project-info">
                      <div className="project-category">AI / Tools</div>
                      <h3 className="project-title">ApplyTailor</h3>
                      <p className="project-description">Land more interviews with AI-tailored applications.</p>
                      <div className="project-buttons">
                        <a href="https://applytailor.com" target="_blank" rel="noopener noreferrer" className="get-button">Website</a>
                        <a href="https://github.com/Rektoooooo/applytailor" target="_blank" rel="noopener noreferrer" className="get-button get-button-github">GitHub</a>
                      </div>
                    </div>
                  </div>
                </GlowCard>

                {/* Real Estate Demo */}
                <GlowCard glowColor="#a78bfa">
                  <div className="project-card">
                    <div className="app-icon bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-4xl">
                      🏠
                    </div>
                    <div className="project-info">
                      <div className="project-category">Web Development</div>
                      <h3 className="project-title">Real Estate Demo</h3>
                      <p className="project-description">Modern real estate website with interactive property listings.</p>
                      <div className="project-buttons">
                        <a href="https://sebkucera.dev/real-estate-demo/" target="_blank" rel="noopener noreferrer" className="get-button">Website</a>
                      </div>
                    </div>
                  </div>
                </GlowCard>

                {/* Restaurant Demo */}
                <GlowCard glowColor="#7c3aed">
                  <div className="project-card">
                    <div className="app-icon bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-4xl">
                      🍽️
                    </div>
                    <div className="project-info">
                      <div className="project-category">Web Development</div>
                      <h3 className="project-title">Restaurant Demo</h3>
                      <p className="project-description">Beautiful restaurant website with menu and reservation system.</p>
                      <div className="project-buttons">
                        <a href="https://sebkucera.dev/restaurant-demo/" target="_blank" rel="noopener noreferrer" className="get-button">Website</a>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </div>
            </div>
            </section>
          </ScrollReveal>

          {/* Work With Me Section */}
          <ScrollReveal>
            <section id="work-with-me" className="mx-auto max-w-6xl px-6 md:px-12 py-24 md:py-32 relative">
              {/* Atmospheric background elements */}
              <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[150px] -z-10"></div>
              <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[150px] -z-10"></div>

              {/* Section header - editorial style */}
              <div className="mb-20 md:mb-28">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-px w-[60px] bg-gradient-to-r from-transparent to-purple-500/50"></div>
                  <span className="text-purple-400 text-sm tracking-[0.2em] uppercase font-medium">Available for hire</span>
                  <div className="h-px w-[60px] bg-gradient-to-l from-transparent to-purple-500/50"></div>
                </div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center pb-2">
                  <span className="block text-white/90">Let's build</span>
                  <span className="block bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-300 bg-clip-text text-transparent pb-1">something great</span>
                </h2>
              </div>

              {/* Services - bold cards */}
              <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-20 md:mb-28 items-stretch">
                {/* iOS Development */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative h-full p-8 md:p-10 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1">
                    <div className="text-[80px] md:text-[100px] font-black leading-none text-white/[0.03] absolute top-4 right-6 select-none">01</div>
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 border border-purple-500/20 flex items-center justify-center mb-8">
                        <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">iOS Development</h3>
                      <p className="text-zinc-400 leading-relaxed">Native apps with Swift & SwiftUI. Pixel-perfect interfaces that feel right at home on Apple devices.</p>
                    </div>
                  </div>
                </div>

                {/* Web Development */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative h-full p-8 md:p-10 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm hover:border-fuchsia-500/30 transition-all duration-500 hover:-translate-y-1">
                    <div className="text-[80px] md:text-[100px] font-black leading-none text-white/[0.03] absolute top-4 right-6 select-none">02</div>
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-pink-500/20 border border-fuchsia-500/20 flex items-center justify-center mb-8">
                        <svg className="w-7 h-7 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Web Development</h3>
                      <p className="text-zinc-400 leading-relaxed">Modern React applications. Fast, responsive, and built with attention to every interaction.</p>
                    </div>
                  </div>
                </div>

                {/* Consulting */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative h-full p-8 md:p-10 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm hover:border-violet-500/30 transition-all duration-500 hover:-translate-y-1">
                    <div className="text-[80px] md:text-[100px] font-black leading-none text-white/[0.03] absolute top-4 right-6 select-none">03</div>
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-500/20 flex items-center justify-center mb-8">
                        <svg className="w-7 h-7 text-violet-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Consulting</h3>
                      <p className="text-zinc-400 leading-relaxed">Architecture guidance, code reviews, and technical strategy for your team's success.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form - refined and focused */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-fuchsia-600/20 to-purple-600/20 rounded-[2rem] blur-2xl"></div>
                  <form
                    action="https://formspree.io/f/xgoaydbn"
                    method="POST"
                    className="relative p-8 md:p-12 rounded-[2rem] border border-white/[0.08] bg-black/40 backdrop-blur-xl"
                  >
                    <div className="text-center mb-10">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">Start a conversation</h3>
                      <p className="text-zinc-500">Tell me about your project and let's create something exceptional.</p>
                    </div>

                    <div className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="group">
                          <label htmlFor="name" className="block text-xs text-zinc-500 uppercase tracking-wider mb-3 group-focus-within:text-purple-400 transition-colors">Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-white/10 text-white text-lg placeholder-zinc-600 focus:outline-none focus:border-purple-500 transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="group">
                          <label htmlFor="email" className="block text-xs text-zinc-500 uppercase tracking-wider mb-3 group-focus-within:text-purple-400 transition-colors">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-white/10 text-white text-lg placeholder-zinc-600 focus:outline-none focus:border-purple-500 transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="group">
                        <label htmlFor="project" className="block text-xs text-zinc-500 uppercase tracking-wider mb-3 group-focus-within:text-purple-400 transition-colors">Project Type</label>
                        <select
                          id="project"
                          name="project"
                          className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-white/10 text-white text-lg focus:outline-none focus:border-purple-500 transition-colors cursor-pointer appearance-none"
                          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: '1.5em' }}
                        >
                          <option value="ios" className="bg-zinc-900">iOS App Development</option>
                          <option value="web" className="bg-zinc-900">Web Development</option>
                          <option value="consulting" className="bg-zinc-900">Consulting</option>
                          <option value="other" className="bg-zinc-900">Other</option>
                        </select>
                      </div>

                      <div className="group">
                        <label htmlFor="message" className="block text-xs text-zinc-500 uppercase tracking-wider mb-3 group-focus-within:text-purple-400 transition-colors">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          required
                          className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-white/10 text-white text-lg placeholder-zinc-600 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                          placeholder="Tell me about your vision..."
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="group relative w-full mt-10 py-4 px-8 rounded-2xl overflow-hidden font-semibold text-lg transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative text-white flex items-center justify-center gap-2">
                        Send Message
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Contact Section */}
          <ScrollReveal>
            <section id="contact" className="mx-auto max-w-6xl px-6 md:px-12 py-20 md:py-24 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-blue-500/5 to-transparent blur-3xl -z-10"></div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center">Let's Connect</h2>
            <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
              <GlowCard glowColor="#a855f7">
                <a href="mailto:sebastian.kucera@icloud.com" className="block p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-zinc-400">sebastian.kucera@icloud.com</p>
                </a>
              </GlowCard>
              <GlowCard glowColor="#9333ea">
                <a href="https://www.linkedin.com/in/sebastian-kucera-31719b1b0/" target="_blank" rel="noopener noreferrer" className="block p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
                  <p className="text-zinc-400">Professional profile</p>
                </a>
              </GlowCard>
              <GlowCard glowColor="#c084fc">
                <a href="https://github.com/Rektoooooo" target="_blank" rel="noopener noreferrer" className="block p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
                  <p className="text-zinc-400">Projects & code</p>
                </a>
              </GlowCard>
              <GlowCard glowColor="#d946ef">
                <a href="https://www.instagram.com/seb.kuc/" target="_blank" rel="noopener noreferrer" className="block p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
                  <p className="text-zinc-400">Personal</p>
                </a>
              </GlowCard>
            </div>
            </section>
          </ScrollReveal>
        </div>

        {/* Footer */}
        <footer className="relative mt-24 border-t border-purple-500/20 backdrop-blur-xl bg-black/40" style={{ position: 'relative', zIndex: 1 }}>
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent blur-2xl -z-10"></div>
          <div className="mx-auto max-w-6xl px-6 md:px-12 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Brand */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent mb-2">
                  sebkucera.dev
                </h3>
                <p className="text-sm text-zinc-400">Building modern apps with Swift & React</p>
              </div>

              {/* Links */}
              <div className="flex items-center gap-6 text-sm">
                <a href="https://www.linkedin.com/in/sebastian-kucera-31719b1b0/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  LinkedIn
                </a>
                <span className="text-purple-500/30">•</span>
                <a href="https://github.com/Rektoooooo" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  GitHub
                </a>
                <span className="text-purple-500/30">•</span>
                <a href="mailto:sebastian.kucera@icloud.com" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  Email
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-zinc-500">
              © 2025 Sebastian Kučera. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
