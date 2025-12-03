import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/cazinostars", {
    title: "Avis CasinoStars Jackpots et Cashback | GigaBonus 2025",
    description: "Avis complet CasinoStars 2025. Jackpots progressifs, cashback quotidien et programme VIP.",
    canonical: "/cazinostars",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function CazinostarsLayout({ children, params }: Props) {
  await params;
  return children;
}
