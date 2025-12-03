import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/calculateur-roulette", {
    title: "Calculateur Probabilité Roulette Casino | GigaBonus 2025",
    description: "Calculateur de probabilités roulette gratuit. Analysez vos chances de gains sur tous les types de paris à la roulette.",
    canonical: "/calculateur-roulette",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function CalculateurRouletteLayout({ children, params }: Props) {
  await params;
  return children;
}
