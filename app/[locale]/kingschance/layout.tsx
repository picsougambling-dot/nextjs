import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/kingschance", {
    title: "Avis Kings Chance Casino Sans Wager | GigaBonus 2025",
    description: "Avis complet Kings Chance Casino 2025. Bonus sans wager, retraits rapides et catalogue de jeux premium.",
    canonical: "/kingschance",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function KingschanceLayout({ children, params }: Props) {
  await params;
  return children;
}
