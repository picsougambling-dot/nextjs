import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-luckytrunk-2025", {
    title: "Avis LuckyTrunk Casino 2025 Bonus VIP | GigaBonus",
    description: "Avis détaillé LuckyTrunk Casino 2025. Bonus VIP, interface moderne et retraits rapides.",
    canonical: "/blog/avis-luckytrunk-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisLuckytrunk2025Layout({ children, params }: Props) {
  await params;
  return children;
}
