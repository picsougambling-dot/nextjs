import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis MadCasino Bonus 100% + Free Spins | GigaBonus 2025",
  description: "Avis complet MadCasino 2025. Bonus 100% de bienvenue + Free Spins, interface moderne et retraits rapides.",
  alternates: {
    canonical: `${siteConfig.url}/madcasino`,
  },
};

export default function MadcasinoLayout({ children }: { children: React.ReactNode }) {
  return children;
}