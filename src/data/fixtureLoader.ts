import { AnalysisResult, FixtureMeta } from "@/types/api";

const DEMO_IMAGES: Record<string, string> = {
  "levis-denim-jacket": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400",
  "nike-sneakers": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
  "jordan-sneakers": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400",
  "louis-vuitton-handbag": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
  "coach-crossbody-bag": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400",
  "anthropologie-midi-dress": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
  "harley-davidson-vintage-t-shirt": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
  "levis-leather-jacket": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
  "handm-midi-dress": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400",
  "unknown-blazer": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400",
  "unknown-midi-dress": "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400",
  "zara-denim-jacket": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400",
  "old-navy-denim-jacket": "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400",
  "unknown-denim-jacket": "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=400",
  "coach-handbag": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400",
  "free-people-midi-dress": "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=400",
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
