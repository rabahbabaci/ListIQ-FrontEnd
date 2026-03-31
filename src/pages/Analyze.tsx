import { useState, useCallback } from "react";
import PhotoUpload from "@/components/analyze/PhotoUpload";
import ExampleItems from "@/components/analyze/ExampleItems";
import LoadingSequence from "@/components/analyze/LoadingSequence";
import ItemCard from "@/components/results/ItemCard";
import PlatformRanking from "@/components/results/PlatformRanking";
import PriceTiersComponent from "@/components/results/PriceTiers";
import SellEstimate from "@/components/results/SellEstimate";
import WhyThisPlatform from "@/components/results/WhyThisPlatform";
import Footer from "@/components/layout/Footer";
import { allMockItems } from "@/data/mockData";
import { AnalysisResult } from "@/types/api";

const exampleLabels = ["Denim Jacket", "Sneakers", "Handbag"];

const Analyze = () => {
  const [state, setState] = useState<"idle" | "loading" | "results">("idle");
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const startAnalysis = useCallback((data: AnalysisResult) => {
    setState("loading");
    setResult(data);
  }, []);

  const handleExampleSelect = (index: number) => {
    startAnalysis(allMockItems[index]);
  };

  const handleFileSelected = (_file: File) => {
    // For now, use the first mock item when a photo is uploaded
    startAnalysis(allMockItems[0]);
  };

  const handleLoadingComplete = useCallback(() => {
    setState("results");
  }, []);

  const top = result?.recommendations.find((r) => r.rank === 1);

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-2">Analyze Your Item</h1>
        <p className="text-center text-muted-foreground mb-10">Upload a photo or try an example to get started.</p>

        {state === "idle" && (
          <>
            <div className="max-w-2xl mx-auto">
              <PhotoUpload onFileSelected={handleFileSelected} />
              <ExampleItems labels={exampleLabels} onSelect={handleExampleSelect} />
            </div>
          </>
        )}

        {state === "loading" && <LoadingSequence onComplete={handleLoadingComplete} />}

        {state === "results" && result && top && (
          <div className="max-w-3xl mx-auto space-y-6">
            <ItemCard item={result.item} />
            <PlatformRanking recommendations={result.recommendations} />
            <PriceTiersComponent priceTiers={top.price_tiers} platform={top.platform} />
            <SellEstimate
              estimatedDays={top.estimated_days_to_sale}
              sellProbability={top.sell_probability_30d}
              platform={top.platform}
            />
            <WhyThisPlatform platform={top.platform} reasoning={top.reasoning} />

            <div className="text-center pt-6">
              <button
                onClick={() => {
                  setState("idle");
                  setResult(null);
                }}
                className="text-sm font-medium text-primary hover:underline"
              >
                ← Analyze another item
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
