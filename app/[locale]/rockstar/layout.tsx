import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/rockstar", {
    title: "Avis Rockstar Casino Bonus 300% VIP | GigaBonus 2025",
    description: "Avis complet Rockstar Casino 2025. Bonus 300% de bienvenue, programme VIP rock et retraits rapides.",
    canonical: "/rockstar",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function RockstarLayout({ children, params }: Props) {
  await params;
  return children;
}
