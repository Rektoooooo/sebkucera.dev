import ModernNav from './components/ModernNav';
import StarsBackground from './components/StarsBackground';
import ScrollReveal from './components/ScrollReveal';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import WorkWithMeSection from './components/WorkWithMeSection';
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
      <ModernNav />

      <div className="relative min-h-screen text-white" style={{ position: 'relative', zIndex: 1 }}>
        <div className="space-y-12 pt-32 pb-16 px-4 md:px-6">
          {/* Hero Section */}
          <HeroSection />

          {/* About Section */}
          <ScrollReveal>
            <AboutSection />
          </ScrollReveal>

          {/* Skills Section */}
          <ScrollReveal>
            <SkillsSection />
          </ScrollReveal>

          {/* Projects Section — editorial "Archive" */}
          <ScrollReveal>
            <ProjectsSection />
          </ScrollReveal>

{/* Work With Me Section */}
          <ScrollReveal>
            <WorkWithMeSection />
          </ScrollReveal>

          {/* Contact Section */}
          <ScrollReveal>
            <ContactSection />
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
