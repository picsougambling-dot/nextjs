import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/bonrush", {
    title: "Avis BonRush Casino Retraits 1h | GigaBonus 2025",
    description: "Avis complet BonRush Casino 2025. Retraits ultra-rapides en 1h, bonus généreux et interface moderne.",
    canonical: "/bonrush",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function BonrushLayout({ children, params }: Props) {
  await params;
  return children;
}
