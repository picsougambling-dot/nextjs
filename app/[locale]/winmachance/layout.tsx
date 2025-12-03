import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/winmachance", {
    title: "Avis WinMaChance Casino Bonus 150% | GigaBonus 2025",
    description: "Avis complet WinMaChance Casino 2025. Bonus 150% de bienvenue, jeux variés et retraits sécurisés.",
    canonical: "/winmachance",
    ogImage: "https://gigabonus.win/images/winmachance.webp",
  });
}

export default async function WinmachanceLayout({ children, params }: Props) {
  await params;
  return children;
}
