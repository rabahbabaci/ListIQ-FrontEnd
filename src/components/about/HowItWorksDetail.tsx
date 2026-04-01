import { Camera, Sparkles, BarChart3 } from "lucide-react";

const steps = [
  { icon: Camera, title: "Upload", description: "Take or upload a photo of your clothing item." },
  { icon: Sparkles, title: "Identify", description: "AI detects the brand, category, condition, and color." },
  { icon: BarChart3, title: "Report", description: "Get pricing, platform rankings, and sell-through estimates." },
];

const HowItWorksDetail = () => (
  <section className="mb-16">
    <h2 className="font-sans text-2xl md:text-3xl font-bold text-stone-900 text-center mb-10">How ListIQ Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {steps.map((step, i) => (
        <div key={step.title} className="bg-white rounded-2xl border border-stone-200 shadow-sm p-8 text-center">
          <div className="w-12 h-12 rounded-full bg-[#EDEAFC] flex items-center justify-center mx-auto mb-4">
            <step.icon size={22} className="text-[#5B4FD6]" />
          </div>
          <p className="text-xs font-medium text-[#5B4FD6] uppercase tracking-wider mb-1">Step {i + 1}</p>
          <h3 className="font-sans text-lg font-bold text-stone-900 mb-2">{step.title}</h3>
          <p className="text-sm text-stone-500 leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorksDetail;
