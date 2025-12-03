import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-bonrush-2025", {
    title: "Avis BonRush Casino 2025 Retraits Flash | GigaBonus",
    description: "Avis détaillé BonRush Casino 2025. Retraits ultra-rapides en 1h et bonus généreux.",
    canonical: "/blog/avis-bonrush-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisBonrush2025Layout({ children, params }: Props) {
  await params;
  return children;
}
