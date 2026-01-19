import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Widgets from '@/components/Widgets';
import SocialProof from '@/components/SocialProof';
import Pricing from '@/components/Pricing';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Aurora animated background */}
      <div className="aurora-bg" />


      <Navbar />
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <Features />
        <Widgets />
        <SocialProof />
        <Pricing />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
