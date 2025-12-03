import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/uniquecasino", {
    title: "Avis UniqueCasino Bonus VIP | GigaBonus 2025",
    description: "Avis complet UniqueCasino 2025. Bonus VIP, retraits rapides et jeux exclusifs.",
    canonical: "/uniquecasino",
    ogImage: "https://gigabonus.win/images/uniquecasino.webp",
  });
}

export default async function UniquecasinoLayout({ children, params }: Props) {
  await params; // Attendre params pour la validation
  return children;
}

