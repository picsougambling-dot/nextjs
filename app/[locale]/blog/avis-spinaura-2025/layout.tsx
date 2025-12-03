import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-spinaura-2025", {
    title: "Avis SpinAura Casino 2025 Bonus 200% | GigaBonus",
    description: "Avis détaillé SpinAura Casino 2025. Bonus 200%, jackpots crypto et retraits Bitcoin.",
    canonical: "/blog/avis-spinaura-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisSpinaura2025Layout({ children, params }: Props) {
  await params;
  return children;
}
