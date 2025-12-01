import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis Kings Chance Casino Sans Wager | GigaBonus 2025",
  description: "Avis complet Kings Chance Casino 2025. Bonus sans wager, retraits rapides et catalogue de jeux premium.",
  alternates: {
    canonical: `${siteConfig.url}/kingschance`,
  },
};

export default function KingschanceLayout({ children }: { children: React.ReactNode }) {
  return children;
}