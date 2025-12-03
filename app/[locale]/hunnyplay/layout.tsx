import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/hunnyplay", {
    title: "Avis HunnyPlay Casino Crypto & Slots | GigaBonus 2025",
    description: "Avis complet HunnyPlay Casino 2025. Casino crypto avec bonus généreux, slots populaires et retraits Bitcoin rapides.",
    canonical: "/hunnyplay",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function HunnyplayLayout({ children, params }: Props) {
  await params;
  return children;
}
