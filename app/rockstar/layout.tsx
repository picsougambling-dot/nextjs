import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis Rockstar Casino Bonus 300% VIP | GigaBonus 2025",
  description: "Avis complet Rockstar Casino 2025. Bonus 300% de bienvenue, programme VIP rock et retraits rapides.",
  alternates: {
    canonical: `${siteConfig.url}/rockstar`,
  },
};

export default function RockstarLayout({ children }: { children: React.ReactNode }) {
  return children;
}