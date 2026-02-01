import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import HighlightCards from "@/components/home/HighlightCards";
import AboutSection from "@/components/sections/AboutSection";
import CoursesSection from "@/components/sections/CoursesSection";
import MotoSection from "@/components/sections/MotoSection";
import FleetSection from "@/components/sections/FleetSection";
import TrainingGroundsSection from "@/components/sections/TrainingGroundsSection";
import NewsSection from "@/components/sections/NewsSection";

import DownloadsSection from "@/components/sections/DownloadsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <HighlightCards />
      <AboutSection />
      <ReviewsSection />
      <div className="section-divider" />
      <CoursesSection />
      <MotoSection />
      <div className="section-divider" />
      <FleetSection />
      <TrainingGroundsSection />
      <div className="section-divider" />
      <NewsSection />
      <div className="section-divider" />
      <DownloadsSection />
      <FAQSection />
      <div className="section-divider" />
      <ContactSection />
      <CTASection />
      <Footer />
    </>
  );
}
