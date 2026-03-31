import { useEffect, useState } from "react";
import { Sparkles, Search, FileText } from "lucide-react";

const steps = [
  { icon: Search, text: "Identifying your item..." },
  { icon: Sparkles, text: "Analyzing 3 platforms..." },
  { icon: FileText, text: "Building your report..." },
];

interface LoadingSequenceProps {
  onComplete: () => void;
}

const LoadingSequence = ({ onComplete }: LoadingSequenceProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < steps.length - 1) {
      const timer = setTimeout(() => setCurrentStep((s) => s + 1), 1200);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(onComplete, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, onComplete]);

  return (
    <div className="py-16 text-center">
      <div className="space-y-4">
        {steps.map((step, i) => {
          const StepIcon = step.icon;
          const isActive = i === currentStep;
          const isDone = i < currentStep;

          return (
            <div
              key={step.text}
              className={`flex items-center justify-center gap-3 transition-all duration-500 ${
                isActive
                  ? "opacity-100 scale-100"
                  : isDone
                  ? "opacity-40 scale-95"
                  : "opacity-20 scale-95"
              }`}
            >
              <StepIcon size={18} className={isActive ? "text-primary animate-pulse" : "text-muted-foreground"} />
              <span className={`text-sm font-medium ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                {step.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LoadingSequence;
