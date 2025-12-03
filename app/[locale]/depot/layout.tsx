import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/depot", {
    title: "Guide Méthodes de Dépôt Casino 2025 | GigaBonus",
    description: "Découvrez toutes les méthodes de dépôt disponibles dans les casinos en ligne : carte bancaire, crypto, e-wallets, cartes prépayées. Guide complet avec avantages et délais.",
    canonical: "/depot",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function DepotLayout({ children, params }: Props) {
  await params;
  return children;
}
