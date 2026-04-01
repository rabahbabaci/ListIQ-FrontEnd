import { useState, useCallback, useRef, useEffect } from "react";
import PhotoUpload from "@/components/analyze/PhotoUpload";
import ExampleItems from "@/components/analyze/ExampleItems";
import ConfirmDetails from "@/components/analyze/ConfirmDetails";
import LoadingSequence from "@/components/analyze/LoadingSequence";
import WorthItVerdictComponent from "@/components/results/WorthItVerdict";
import ItemCard from "@/components/results/ItemCard";
import PlatformRanking from "@/components/results/PlatformRanking";
import PriceTiersComponent from "@/components/results/PriceTiers";
import SellEstimate from "@/components/results/SellEstimate";
import WhyThisPlatform from "@/components/results/WhyThisPlatform";
import Footer from "@/components/layout/Footer";
import { allMockItems } from "@/data/mockData";
import { AnalysisResult, AIDetectedAttributes } from "@/types/api";

const exampleLabels = ["Denim Jacket", "Sneakers", "Handbag", "T-Shirt"];

type Step = "upload" | "confirm" | "loading" | "results";

const Analyze = () => {
  const [step, setStep] = useState<Step>("upload");
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [detected, setDetected] = useState<AIDetectedAttributes | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleExampleSelect = (index: number) => {
    setSelectedIndex(index);
    const item = allMockItems[index].item;
    setDetected({
      category: item.category,
      color: item.color,
      condition: item.condition,
      image_url: item.image_url,
    });
    setStep("confirm");
  };

  const handleFileSelected = (_file: File) => {
    setSelectedIndex(0);
    const item = allMockItems[0].item;
    setDetected({
      category: item.category,
      color: item.color,
      condition: item.condition,
      image_url: item.image_url,
    });
    setStep("confirm");
  };

  const handleConfirm = () => {
    setResult(allMockItems[selectedIndex]);
    setStep("loading");
  };

  const handleLoadingComplete = useCallback(() => {
    setStep("results");
  }, []);

  useEffect(() => {
    if (step === "results" && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [step]);

  const resetFlow = () => {
    setStep("upload");
    setResult(null);
    setDetected(null);
  };

  const top = result?.recommendations.find((r) => r.rank === 1);

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {step === "upload" && (
          <>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground text-center mb-2">Analyze Your Item</h1>
            <p className="text-center text-muted-foreground mb-10">Upload a photo or try an example to get started.</p>
            <div className="max-w-2xl mx-auto">
              <PhotoUpload onFileSelected={handleFileSelected} />
              <ExampleItems labels={exampleLabels} onSelect={handleExampleSelect} />
            </div>
          </>
        )}

        {step === "confirm" && detected && (
          <ConfirmDetails
            imageUrl={detected.image_url}
            detected={detected}
            onConfirm={handleConfirm}
            onBack={() => setStep("upload")}
          />
        )}

        {step === "loading" && <LoadingSequence onComplete={handleLoadingComplete} />}

        {step === "results" && result && top && (
          <div ref={resultsRef} className="max-w-3xl mx-auto space-y-6">
            <WorthItVerdictComponent worthIt={result.worth_it} />
            <ItemCard item={result.item} />
            <PlatformRanking recommendations={result.recommendations} />
            <PriceTiersComponent
              priceTiers={top.price_tiers}
              netProfit={top.net_profit}
              platformFeePct={top.platform_fee_pct}
              estimatedShipping={top.estimated_shipping}
              platform={top.platform}
            />
            <SellEstimate
              estimatedDays={top.estimated_days_to_sale}
              sellProbability={top.sell_probability_30d}
              platform={top.platform}
            />
            <WhyThisPlatform platform={top.platform} reasoning={top.reasoning} />

            <div className="text-center pt-8">
              <button
                onClick={resetFlow}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-medium hover:opacity-90 transition-opacity"
              >
                ← Analyze Another Item
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Analyze;
