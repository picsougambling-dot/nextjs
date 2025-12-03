import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/spinaura", {
    title: "Avis SpinAura Casino Jackpots Crypto | GigaBonus 2025",
    description: "Avis complet SpinAura Casino 2025. Jackpots crypto, bonus généreux et retraits Bitcoin.",
    canonical: "/spinaura",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function SpinauraLayout({ children, params }: Props) {
  await params;
  return children;
}
