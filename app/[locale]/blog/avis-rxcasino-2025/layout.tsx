import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-rxcasino-2025", {
    title: "Avis RXCasino 2025 Retraits 24h | GigaBonus",
    description: "Avis détaillé RXCasino 2025. Retraits en 24h, bonus généreux et interface moderne.",
    canonical: "/blog/avis-rxcasino-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisRxcasino2025Layout({ children, params }: Props) {
  await params;
  return children;
}
