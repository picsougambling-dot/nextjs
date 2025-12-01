import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis Betify Casino Bonus Turbo France | GigaBonus 2025",
  description: "Avis complet Betify Casino 2025. Bonus turbo, paris sportifs intégrés et retraits express.",
  alternates: {
    canonical: `${siteConfig.url}/betify`,
  },
};

export default function BetifyLayout({ children }: { children: React.ReactNode }) {
  return children;
}