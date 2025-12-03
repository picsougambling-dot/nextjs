import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-kingschance-2025", {
    title: "Avis Kings Chance 2025 Sans Wager | GigaBonus",
    description: "Avis détaillé Kings Chance Casino 2025. Bonus sans wager et retraits rapides.",
    canonical: "/blog/avis-kingschance-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisKingschance2025Layout({ children, params }: Props) {
  await params;
  return children;
}
