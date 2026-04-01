import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const HeroSection = () => (
  <section className="py-24 md:py-32 text-center px-6 md:px-12">
    <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight tracking-tight max-w-4xl mx-auto">
      Should I Sell This?
    </h1>
    <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
      Upload a photo of your clothing item. Get a cross-platform resale intelligence report in seconds.
    </p>
    <Link
      to="/analyze"
      className="mt-10 inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-4 rounded-full text-lg transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02]"
    >
      Analyze My Item
      <ChevronRight size={18} />
    </Link>
  </section>
);

export default HeroSection;
