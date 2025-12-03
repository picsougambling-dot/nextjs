import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-machance-2025", {
    title: "Avis WinMaChance 2025 Jackpots & VIP | GigaBonus",
    description: "Avis détaillé MaChance Casino 2025. Jackpots, programme VIP et bonus exclusifs.",
    canonical: "/blog/avis-machance-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisMachance2025Layout({ children, params }: Props) {
  await params;
  return children;
}
