import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
export const metadata: Metadata = {
  title: "Avis Rockstar Casino 2025 Jackpots | GigaBonus",
  description: "Avis détaillé Rockstar Casino 2025. Bonus 300% VIP, jackpots et retraits rapides.",
  alternates: { canonical: `${siteConfig.url}/blog/avis-rockstar-2025` },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }