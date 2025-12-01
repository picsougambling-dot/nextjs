import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis Kingdom Casino 200% + Wager x10 | GigaBonus 2025",
  description: "Avis complet Kingdom Casino 2025. Bonus 200% avec wager x10 seulement, jeux royaux et retraits express.",
  alternates: {
    canonical: `${siteConfig.url}/kingdom`,
  },
};

export default function KingdomLayout({ children }: { children: React.ReactNode }) {
  return children;
}