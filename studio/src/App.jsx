import { useState } from 'react';
import { ModalProvider } from './components/ModalContext.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Problems from './components/Problems.jsx';
import Services from './components/Services.jsx';
import SEO from './components/SEO.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import About from './components/About.jsx';
import Process from './components/Process.jsx';
import FAQ from './components/FAQ.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import ConsultModal from './components/ConsultModal.jsx';
import PrivacyModal from './components/PrivacyModal.jsx';

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  return (
    <ModalProvider>
      <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <Problems />
          <SEO />
          <CaseStudies />
          <Services />
          <About />
          <Process />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer onPrivacy={() => setPrivacyOpen(true)} />
        <ConsultModal />
        <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      </div>
    </ModalProvider>
  );
}
