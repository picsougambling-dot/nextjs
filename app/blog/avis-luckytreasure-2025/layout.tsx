import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
export const metadata: Metadata = {
  title: "Avis LuckyTreasure 2025 Bonus 200% | GigaBonus",
  description: "Avis détaillé Lucky Treasure Casino 2025. Bonus 200% de bienvenue et jeux de qualité.",
  alternates: { canonical: `${siteConfig.url}/blog/avis-luckytreasure-2025` },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }