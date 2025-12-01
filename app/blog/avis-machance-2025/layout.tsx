import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
export const metadata: Metadata = {
  title: "Avis WinMaChance 2025 Jackpots & VIP | GigaBonus",
  description: "Avis détaillé MaChance Casino 2025. Jackpots, programme VIP et bonus exclusifs.",
  alternates: { canonical: `${siteConfig.url}/blog/avis-machance-2025` },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }