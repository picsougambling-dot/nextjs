import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-cazinostars-2025", {
    title: "Avis CasinoStars 2025 Cashback VIP | GigaBonus",
    description: "Avis détaillé CasinoStars 2025. Jackpots, cashback quotidien et programme VIP.",
    canonical: "/blog/avis-cazinostars-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisCazinostars2025Layout({ children, params }: Props) {
  await params;
  return children;
}
