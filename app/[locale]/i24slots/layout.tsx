import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/i24slots", {
    title: "Avis i24Slots Casino Crypto & Slots | GigaBonus 2025",
    description: "Avis complet i24Slots Casino 2025. Casino crypto avec slots premium et retraits rapides.",
    canonical: "/i24slots",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function I24slotsLayout({ children, params }: Props) {
  await params;
  return children;
}
