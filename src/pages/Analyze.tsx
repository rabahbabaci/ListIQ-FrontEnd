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
import { loadFixture, matchFilenameToFixture } from "@/data/fixtureLoader";
import { AnalysisResult, AIDetectedAttributes } from "@/types/api";

const exampleLabels = ["Levi's Denim Jacket", "Coach Handbag", "H&M Midi Dress", "Old Navy Denim Jacket"];
const exampleDemoIds = ["levis-denim-jacket", "coach-handbag", "handm-midi-dress", "old-navy-denim-jacket"];

type Step = "upload" | "confirm" | "loading" | "results";

const Analyze = () => {
  const [step, setStep] = useState<Step>("upload");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [detected, setDetected] = useState<AIDetectedAttributes | null>(null);
  const [uploadWarning, setUploadWarning] = useState<string | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleExampleSelect = async (index: number) => {
    try {
      const fixture = await loadFixture(exampleDemoIds[index]);
      setResult(fixture);
      setDetected({
        category: fixture.item.category,
        color: fixture.item.color,
        condition: fixture.item.condition,
        image_url: fixture.item.image_url,
      });
      setStep("confirm");
    } catch (err) {
      console.error("Failed to load fixture:", err);
    }
  };

  const handleFileSelected = async (file: File) => {
    try {
      const uploadedImageUrl = URL.createObjectURL(file);

      const matchedId = await matchFilenameToFixture(file.name);
      const fixtureId = matchedId ?? exampleDemoIds[0];

      const fixture = await loadFixture(fixtureId);
      fixture.item.image_url = uploadedImageUrl;

      setResult(fixture);
      setDetected({
        category: fixture.item.category,
        color: fixture.item.color,
        condition: fixture.item.condition,
        image_url: uploadedImageUrl,
      });

      setUploadWarning(
        matchedId
          ? null
          : `Couldn't match "${file.name}" to a known item. Showing default analysis.`
      );

      setStep("confirm");
    } catch (err) {
      console.error("Failed to process upload:", err);
      setUploadWarning("Failed to process the uploaded file. Try again.");
    }
  };

  const handleConfirm = () => {
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
    if (detected?.image_url?.startsWith("blob:")) {
      URL.revokeObjectURL(detected.image_url);
    }
    setStep("upload");
    setResult(null);
    setDetected(null);
    setUploadWarning(null);
  };

  const top = result?.recommendations.find((r) => r.rank === 1);

  return (
    <div className="min-h-screen bg-[#F8F7F4] pt-24 pb-12">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {step === "upload" && (
          <>
            <h1 className="font-sans text-4xl md:text-5xl font-bold text-stone-900 text-center mb-3">Analyze Your Item</h1>
            <p className="text-center text-stone-500 text-lg mb-10">Upload a photo or try an example to get started.</p>
            <div className="max-w-2xl mx-auto">
              <PhotoUpload onFileSelected={handleFileSelected} />
              <ExampleItems labels={exampleLabels} onSelect={handleExampleSelect} />
            </div>
          </>
        )}

        {step === "confirm" && detected && (
          <>
            {uploadWarning && (
              <div className="max-w-4xl mx-auto mb-4 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4">
                <p className="text-sm text-amber-800">{uploadWarning}</p>
              </div>
            )}
            <ConfirmDetails
              imageUrl={detected.image_url}
              detected={detected}
              onConfirm={handleConfirm}
              onBack={() => setStep("upload")}
            />
          </>
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
                className="inline-flex items-center gap-2 bg-[#5B4FD6] hover:bg-[#4A3FC2] text-white font-medium px-6 py-3 rounded-full transition-all duration-200"
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
