import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const HeroSection = () => (
  <section className="py-24 md:py-32 text-center px-6 md:px-12">
    <h1 className="font-serif text-5xl md:text-7xl font-bold text-stone-900 leading-tight tracking-tight max-w-4xl mx-auto">
      Should I Sell This?
    </h1>
    <p className="mt-6 text-lg text-stone-500 max-w-xl mx-auto leading-relaxed">
      Upload a photo of your clothing item. Get a cross-platform resale intelligence report in seconds.
    </p>
    <Link
      to="/analyze"
      className="mt-10 inline-flex items-center gap-2 bg-[#5B4FD6] hover:bg-[#4A3FC2] text-white font-medium px-8 py-4 rounded-full text-base transition-all duration-200 shadow-sm hover:shadow-md"
    >
      Analyze My Item
      <ChevronRight size={18} />
    </Link>
  </section>
);

export default HeroSection;
