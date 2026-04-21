import { AnalysisResult, FixtureMeta } from "@/types/api";

const DEMO_IMAGES: Record<string, string> = {
  "levis-denim-jacket": "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&auto=format",
  "zara-denim-jacket": "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=600&auto=format",
  "old-navy-denim-jacket": "https://images.unsplash.com/photo-1542060748-10c28b62716f?w=600&auto=format",
  "unknown-denim-jacket": "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&auto=format",

  "nike-sneakers": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format",
  "jordan-sneakers": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format",

  "louis-vuitton-handbag": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format",
  "coach-handbag": "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&auto=format",
  "coach-crossbody-bag": "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&auto=format",

  "anthropologie-midi-dress": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format",
  "handm-midi-dress": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format",
  "unknown-midi-dress": "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&auto=format",
  "free-people-midi-dress": "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=600&auto=format",

  "harley-davidson-vintage-t-shirt": "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&auto=format",

  "levis-leather-jacket": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format",

  "unknown-blazer": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format",
};

export async function loadFixtureIndex(): Promise<FixtureMeta[]> {
  const res = await fetch("/fixtures/index.json");
  if (!res.ok) throw new Error(`Failed to load fixture index: ${res.status}`);
  return res.json();
}

export async function loadFixture(demoItemId: string): Promise<AnalysisResult> {
  const res = await fetch(`/fixtures/${demoItemId}.json`);
  if (!res.ok) throw new Error(`Failed to load fixture ${demoItemId}: ${res.status}`);
  const result = (await res.json()) as AnalysisResult;

  if (!result.item.image_url && DEMO_IMAGES[demoItemId]) {
    result.item.image_url = DEMO_IMAGES[demoItemId];
  }

  return result;
}
