import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/luckytreasure", {
    title: "Avis Lucky Treasure Casino 200% Bonus | GigaBonus 2025",
    description: "Avis complet Lucky Treasure Casino 2025. Bonus 200% de bienvenue, jeux de qualité et retraits sécurisés.",
    canonical: "/luckytreasure",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function LuckytreasureLayout({ children, params }: Props) {
  await params;
  return children;
}
