import { useEffect, useState } from "react";
import { Scan, Sparkles, CheckCircle2, Check } from "lucide-react";

interface AnalyzingPhotoProps {
  imageUrl: string;
  onComplete: () => void;
}

const steps = [
  { icon: Scan, text: "Scanning image..." },
  { icon: Sparkles, text: "Detecting category and attributes..." },
  { icon: CheckCircle2, text: "Preparing confirmation..." },
];

const STEP_MS = 1000;
const TOTAL_MS = STEP_MS * steps.length;

const AnalyzingPhoto = ({ imageUrl, onComplete }: AnalyzingPhotoProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setProgress(100));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (currentStep < steps.length - 1) {
      const timer = setTimeout(() => setCurrentStep((s) => s + 1), STEP_MS);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(onComplete, STEP_MS);
    return () => clearTimeout(timer);
  }, [currentStep, onComplete]);

  return (
    <div className="max-w-xl mx-auto animate-fade-in">
      <div className="rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-sm">
        <img
          src={imageUrl}
          alt="Analyzing"
          className="w-full max-h-[300px] object-cover"
        />

        <div className="p-6 md:p-8">
          <div className="space-y-3">
            {steps.map((step, i) => {
              const StepIcon = step.icon;
              const isActive = i === currentStep;
              const isDone = i < currentStep;

              return (
                <div
                  key={step.text}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isActive
                      ? "opacity-100"
                      : isDone
                      ? "opacity-60"
                      : "opacity-30"
                  }`}
                >
                  {isDone ? (
                    <Check size={18} className="text-[#5B4FD6]" />
                  ) : (
                    <StepIcon
                      size={18}
                      className={isActive ? "text-[#5B4FD6] animate-pulse" : "text-stone-400"}
                    />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      isActive ? "text-stone-900" : "text-stone-500"
                    }`}
                  >
                    {step.text}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-6 h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#5B4FD6] rounded-full"
              style={{
                width: `${progress}%`,
                transition: `width ${TOTAL_MS}ms linear`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyzingPhoto;
