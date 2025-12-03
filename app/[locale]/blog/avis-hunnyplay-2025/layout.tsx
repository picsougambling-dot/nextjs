import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-hunnyplay-2025", {
    title: "Avis HunnyPlay Casino 2025 Crypto Slots | GigaBonus",
    description: "Avis détaillé HunnyPlay Casino 2025. Casino crypto avec slots premium et retraits Bitcoin rapides.",
    canonical: "/blog/avis-hunnyplay-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisHunnyplay2025Layout({ children, params }: Props) {
  await params;
  return children;
}
