import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/betify", {
    title: "Avis Betify Casino Bonus Turbo France | GigaBonus 2025",
    description: "Avis complet Betify Casino 2025. Bonus turbo, paris sportifs intégrés et retraits express.",
    canonical: "/betify",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function BetifyLayout({ children, params }: Props) {
  await params;
  return children;
}
