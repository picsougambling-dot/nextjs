import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-luckytreasure-2025", {
    title: "Avis LuckyTreasure 2025 Bonus 200% | GigaBonus",
    description: "Avis détaillé Lucky Treasure Casino 2025. Bonus 200% de bienvenue et jeux de qualité.",
    canonical: "/blog/avis-luckytreasure-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisLuckytreasure2025Layout({ children, params }: Props) {
  await params;
  return children;
}
