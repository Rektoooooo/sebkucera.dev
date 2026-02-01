import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingSection from "@/components/sections/PricingSection";

export const metadata: Metadata = {
  title: "Ceník | Autoškola Trefa",
  description: "Kompletní ceník kurzů autoškoly a motoškoly Trefa v Praze.",
};

export default function CenikPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <PricingSection />
      </div>
      <Footer />
    </>
  );
}
