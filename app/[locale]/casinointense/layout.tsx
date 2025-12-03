import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/casinointense", {
    title: "Avis CasinoIntense Bonus 300% France | GigaBonus 2025",
    description: "Avis complet CasinoIntense 2025. Bonus 300% intense, jeux premium et retraits express.",
    canonical: "/casinointense",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function CasinointenseLayout({ children, params }: Props) {
  await params;
  return children;
}
