import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis LuckyTrunk Casino 300% + Free Spins | GigaBonus 2025",
  description: "Avis complet LuckyTrunk Casino 2025. Bonus 300% + Free Spins, interface moderne et retraits rapides.",
  alternates: { canonical: `${siteConfig.url}/luckytrunk` },
};

export default function LuckytrunkLayout({ children }: { children: React.ReactNode }) {
  return children;
}