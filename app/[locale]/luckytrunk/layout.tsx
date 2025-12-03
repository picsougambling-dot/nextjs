import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/luckytrunk", {
    title: "Avis LuckyTrunk Casino 300% + Free Spins | GigaBonus 2025",
    description: "Avis complet LuckyTrunk Casino 2025. Bonus 300% + Free Spins, interface moderne et retraits rapides.",
    canonical: "/luckytrunk",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function LuckytrunkLayout({ children, params }: Props) {
  await params;
  return children;
}
