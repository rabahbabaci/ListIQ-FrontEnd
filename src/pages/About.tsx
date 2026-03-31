import HowItWorksDetail from "@/components/about/HowItWorksDetail";
import BuiltForPhia from "@/components/about/BuiltForPhia";
import TeamSection from "@/components/about/TeamSection";
import Footer from "@/components/layout/Footer";

const About = () => (
  <div className="min-h-screen bg-background pt-24 pb-12">
    <div className="max-w-[1200px] mx-auto px-6 md:px-12">
      <h1 className="text-4xl md:text-5xl font-serif text-foreground text-center mb-12">About ListIQ</h1>

      <HowItWorksDetail />

      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-serif text-foreground text-center mb-6">Our Data</h2>
        <div className="bg-card rounded-xl border border-border shadow-sm p-8">
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            ListIQ analyzes over 10,000 real sold listings scraped from Poshmark, eBay, and Depop.
            Our ML models identify patterns in pricing, sell-through rates, and platform-item fit
            across 12 clothing categories.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Photo identification is powered by the Claude API, which detects brand, category,
            condition, and color from a single image. Combined with our marketplace data,
            this produces actionable resale intelligence in seconds.
          </p>
        </div>
      </section>

      <BuiltForPhia />
      <TeamSection />
    </div>
    <Footer />
  </div>
);

export default About;
