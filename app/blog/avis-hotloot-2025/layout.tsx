import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
export const metadata: Metadata = {
  title: "Avis HotLoot Casino 2025 Bonus Cash Drops | GigaBonus",
  description: "Avis détaillé HotLoot Casino 2025. Cash drops quotidiens et bonus chauds.",
  alternates: { canonical: `${siteConfig.url}/blog/avis-hotloot-2025` },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }