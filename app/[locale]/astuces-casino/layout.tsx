import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/astuces-casino", {
    title: "Astuces et Stratégies Casino Gagnantes | GigaBonus 2025",
    description: "Découvrez les meilleures astuces et stratégies pour gagner au casino en ligne. Conseils d'experts, gestion de bankroll et techniques éprouvées.",
    canonical: "/astuces-casino",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AstucesCasinoLayout({ children, params }: Props) {
  await params;
  return children;
}
