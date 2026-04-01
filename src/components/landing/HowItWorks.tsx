import { Camera, Sparkles, BarChart3 } from "lucide-react";

const steps = [
  { icon: Camera, title: "Upload a Photo", description: "Snap or upload a photo of the item you want to sell." },
  { icon: Sparkles, title: "AI Identifies Your Item", description: "Our model detects brand, category, condition, and more." },
  { icon: BarChart3, title: "Get Your Sell Report", description: "See pricing, platform fit, and estimated time-to-sale." },
];

const HowItWorks = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 pb-20">
    <h2 className="font-serif text-3xl font-bold text-center mb-12 text-gray-900">How It Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {steps.map((step, i) => (
        <div
          key={step.title}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-4">
            <step.icon size={22} className="text-teal-600" />
          </div>
          <p className="text-xs font-medium text-teal-600 uppercase tracking-wider mb-2">Step {i + 1}</p>
          <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
