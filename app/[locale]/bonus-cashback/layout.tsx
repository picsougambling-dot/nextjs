import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/bonus-cashback", {
    title: "Bonus Cashback Casino Quotidien France | GigaBonus 2025",
    description: "Casinos avec les meilleurs bonus cashback quotidiens et hebdomadaires. Récupérez jusqu'à 25% de vos pertes.",
    canonical: "/bonus-cashback",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function BonusCashbackLayout({ children, params }: Props) {
  await params;
  return children;
}
