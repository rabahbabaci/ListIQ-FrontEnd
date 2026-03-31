import { Camera, Sparkles, BarChart3 } from "lucide-react";

const steps = [
  { icon: Camera, title: "Upload a Photo", description: "Snap or upload a photo of the item you want to sell." },
  { icon: Sparkles, title: "AI Identifies Your Item", description: "Our model detects brand, category, condition, and more." },
  { icon: BarChart3, title: "Get Your Sell Report", description: "See pricing, platform fit, and estimated time-to-sale." },
];

const HowItWorks = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 pb-20">
    <h2 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-10">How It Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {steps.map((step, i) => (
        <div
          key={step.title}
          className="bg-card rounded-xl border border-border shadow-sm p-8 text-center"
        >
          <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-5">
            <step.icon size={22} className="text-primary" />
          </div>
          <p className="text-xs font-medium text-muted-foreground mb-2">Step {i + 1}</p>
          <h3 className="text-lg font-serif text-foreground mb-2">{step.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
