import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const HeroSection = () => (
  <section className="pt-32 pb-20 md:pt-44 md:pb-28 text-center px-6 md:px-12">
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-tight max-w-3xl mx-auto">
      Should I Sell This?
    </h1>
    <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
      Upload a photo of your clothing item. Get a cross-platform resale intelligence report in seconds.
    </p>
    <Link
      to="/analyze"
      className="mt-10 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-medium hover:opacity-90 transition-opacity"
    >
      Analyze My Item
      <ChevronRight size={18} />
    </Link>
  </section>
);

export default HeroSection;
