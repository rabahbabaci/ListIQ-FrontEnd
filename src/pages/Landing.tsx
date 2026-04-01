import HeroSection from "@/components/landing/HeroSection";
import StatsBar from "@/components/landing/StatsBar";
import HowItWorks from "@/components/landing/HowItWorks";
import Footer from "@/components/layout/Footer";

const Landing = () => (
  <div className="min-h-screen bg-[#F8F7F4]">
    <HeroSection />
    <StatsBar />
    <HowItWorks />
    <Footer />
  </div>
);

export default Landing;
