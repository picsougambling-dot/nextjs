import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-vegasplus-2025", {
    title: "Avis VegasPlus Casino 2025 Jackpots | GigaBonus",
    description: "Avis détaillé VegasPlus Casino 2025. Jackpots progressifs et programme VIP.",
    canonical: "/blog/avis-vegasplus-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisVegasplus2025Layout({ children, params }: Props) {
  await params;
  return children;
}
