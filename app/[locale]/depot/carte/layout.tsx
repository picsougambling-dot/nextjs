import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/depot/carte", {
    title: "Dépôts Carte Bancaire pour Casinos | GigaBonus 2025",
    description: "Casinos en ligne acceptant les dépôts par carte bancaire Visa et Mastercard. Dépôts instantanés, sécurisés et sans frais.",
    canonical: "/depot/carte",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function CarteLayout({ children, params }: Props) {
  await params;
  return children;
}
