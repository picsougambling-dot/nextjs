import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/kingdom", {
    title: "Avis Kingdom Casino 200% + Wager x10 | GigaBonus 2025",
    description: "Avis complet Kingdom Casino 2025. Bonus 200% avec wager x10 seulement, jeux royaux et retraits express.",
    canonical: "/kingdom",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function KingdomLayout({ children, params }: Props) {
  await params;
  return children;
}
