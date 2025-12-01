import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis VegasPlus Casino Jackpots VIP | GigaBonus 2025",
  description: "Avis complet VegasPlus Casino 2025. Jackpots progressifs, programme VIP et bonus généreux.",
  alternates: { canonical: `${siteConfig.url}/vegasplus` },
};

export default function VegasplusLayout({ children }: { children: React.ReactNode }) {
  return children;
}