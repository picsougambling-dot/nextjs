import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/madcasino", {
    title: "Avis MadCasino Bonus 100% + Free Spins | GigaBonus 2025",
    description: "Avis complet MadCasino 2025. Bonus 100% de bienvenue + Free Spins, interface moderne et retraits rapides.",
    canonical: "/madcasino",
    ogImage: "https://gigabonus.win/images/madcasino.webp",
  });
}

export default async function MadcasinoLayout({ children, params }: Props) {
  await params;
  return children;
}
