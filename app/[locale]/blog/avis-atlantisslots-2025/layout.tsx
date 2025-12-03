import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-atlantisslots-2025", {
    title: "Avis AtlantisSlots 2025 Bonus Jackpots | GigaBonus",
    description: "Avis détaillé AtlantisSlots Casino 2025. Bonus cash, thème Atlantis et retraits rapides.",
    canonical: "/blog/avis-atlantisslots-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisAtlantisslots2025Layout({ children, params }: Props) {
  await params;
  return children;
}
