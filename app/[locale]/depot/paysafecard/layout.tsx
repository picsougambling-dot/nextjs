import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/depot/paysafecard", {
    title: "Casinos Dépôt Paysafecard Sans Frais | GigaBonus 2025",
    description: "Casinos en ligne acceptant Paysafecard. Carte prépayée sécurisée, dépôts sans frais et sans compte bancaire.",
    canonical: "/depot/paysafecard",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function PaysafecardLayout({ children, params }: Props) {
  await params;
  return children;
}
