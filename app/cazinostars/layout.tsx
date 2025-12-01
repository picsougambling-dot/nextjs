import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis CasinoStars Jackpots et Cashback | GigaBonus 2025",
  description: "Avis complet CasinoStars 2025. Jackpots progressifs, cashback quotidien et programme VIP.",
  alternates: { canonical: `${siteConfig.url}/cazinostars` },
};

export default function CazinostarsLayout({ children }: { children: React.ReactNode }) {
  return children;
}