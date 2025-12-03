import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/vegasplus", {
    title: "Avis VegasPlus Casino Jackpots VIP | GigaBonus 2025",
    description: "Avis complet VegasPlus Casino 2025. Jackpots progressifs, programme VIP et bonus généreux.",
    canonical: "/vegasplus",
    ogImage: "https://gigabonus.win/images/vegasplus.webp",
  });
}

export default async function VegasplusLayout({ children, params }: Props) {
  await params;
  return children;
}
