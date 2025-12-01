import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis Lucky Treasure Casino 200% Bonus | GigaBonus 2025",
  description: "Avis complet Lucky Treasure Casino 2025. Bonus 200% de bienvenue, jeux de qualité et retraits sécurisés.",
  alternates: {
    canonical: `${siteConfig.url}/luckytreasure`,
  },
};

export default function LuckytreasureLayout({ children }: { children: React.ReactNode }) {
  return children;
}