import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-i24slots-2025", {
    title: "Avis i24Slots Casino 2025 Crypto Slots | GigaBonus",
    description: "Avis détaillé i24Slots Casino 2025. Casino crypto avec slots premium.",
    canonical: "/blog/avis-i24slots-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisI24slots2025Layout({ children, params }: Props) {
  await params;
  return children;
}
