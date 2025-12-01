import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Calculateur Probabilité Roulette Casino | GigaBonus 2025",
  description: "Calculateur de probabilités roulette gratuit. Analysez vos chances de gains sur tous les types de paris à la roulette.",
  alternates: {
    canonical: `${siteConfig.url}/calculateur-roulette`,
  },
};

export default function CalculateurRouletteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}