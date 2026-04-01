import HowItWorksDetail from "@/components/about/HowItWorksDetail";
import TheOpportunity from "@/components/about/BuiltForPhia";
import TeamSection from "@/components/about/TeamSection";
import Footer from "@/components/layout/Footer";

const About = () => (
  <div className="min-h-screen bg-[#FAFAFA] pt-24 pb-12">
    <div className="max-w-[1200px] mx-auto px-6 md:px-12">
      <h1 className="font-sans text-4xl md:text-5xl font-bold text-zinc-900 text-center mb-12">About ListIQ</h1>

      <HowItWorksDetail />

      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-sans text-2xl font-bold text-zinc-900 text-center mb-6">Our Data</h2>
        <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-8 md:p-10">
          <div className="space-y-4 text-zinc-600 leading-relaxed text-base">
            <p>
              ListIQ analyzes over 10,000 real sold listings scraped from Poshmark, eBay, and Depop.
              Our ML models identify patterns in pricing, sell-through rates, and platform-item fit
              across 12 clothing categories.
            </p>
            <p>
              Photo identification is powered by the Claude API, which detects brand, category,
              condition, and color from a single image. Combined with our marketplace data,
              this produces actionable resale intelligence in seconds.
            </p>
          </div>
        </div>
      </section>

      <TheOpportunity />
      <TeamSection />
    </div>
    <Footer />
  </div>
);

export default About;
