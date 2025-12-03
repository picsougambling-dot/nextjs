import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-rockstar-2025", {
    title: "Avis Rockstar Casino 2025 Jackpots | GigaBonus",
    description: "Avis détaillé Rockstar Casino 2025. Bonus 300% VIP, jackpots et retraits rapides.",
    canonical: "/blog/avis-rockstar-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisRockstar2025Layout({ children, params }: Props) {
  await params;
  return children;
}
