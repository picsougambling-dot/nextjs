import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-roibets-2025", {
    title: "Avis RoiBets Casino 2025 Crypto Bonus | GigaBonus",
    description: "Avis détaillé RoiBets Casino 2025. Casino crypto avec bonus 200% et retraits Bitcoin.",
    canonical: "/blog/avis-roibets-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisRoibets2025Layout({ children, params }: Props) {
  await params;
  return children;
}
