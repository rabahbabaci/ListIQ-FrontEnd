# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ListIQ is a React SPA that helps users determine the best resale platform (Depop, Poshmark, eBay) for their items. Users upload a photo, the app analyzes the item, and returns platform recommendations with pricing tiers, sell probability, and reasoning. Currently uses mock data — API integration is pending.

## Commands

- `npm run dev` — Start dev server on port 8080
- `npm run build` — Production build (TypeScript compile + Vite bundle)
- `npm run lint` — ESLint check
- `npm run test` — Run Vitest tests once
- `npm run test:watch` — Run Vitest in watch mode
- `npx playwright test` — Run E2E tests

## Architecture

**Stack:** React 18, TypeScript, Vite (SWC), Tailwind CSS, React Router v6

**Routing** (`src/App.tsx`): `/` Landing, `/analyze` Analyze (main feature), `/intelligence` Dashboard, `/about` About

**Global providers** wrap the app: QueryClientProvider (React Query), TooltipProvider, Toaster (Sonner).

**Analyze page state machine** (`src/pages/Analyze.tsx`): Three states — `idle` → `loading` → `results`. PhotoUpload or ExampleItems triggers loading, LoadingSequence runs a 3-step animation, then results render via ItemCard, PlatformRanking, PriceTiers, SellEstimate, WhyThisPlatform.

**Type definitions** in `src/types/api.ts`: `ItemData`, `PlatformRecommendation`, `AnalysisResult`. These define the contract for the future API.

**Mock data** in `src/data/mockData.ts` stands in for real API responses.

## Conventions

- **Path alias:** `@/` maps to `src/` (configured in vite.config.ts and tsconfig)
- **Component style:** Functional components with TypeScript interfaces for props, default exports
- **Styling:** Tailwind utility classes only — no CSS-in-JS or component stylesheets. Theme colors defined as HSL CSS variables in `src/index.css`
- **Icons:** Lucide React, imported per-icon
- **UI primitives:** shadcn/ui components live in `src/components/ui/` — add new ones via shadcn CLI, don't hand-write
- **Feature folders:** Components grouped by feature under `src/components/` (landing/, analyze/, results/, intelligence/, about/, layout/)
- **Platform colors:** Depop = red/orange, Poshmark = purple, eBay = blue — use the corresponding CSS variables (`--depop`, `--poshmark`, `--ebay`)
- **Fonts:** DM Serif Display for headings, DM Sans for body text
- **TypeScript config is lenient:** strict mode and noImplicitAny are off
