import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-hotloot-2025", {
    title: "Avis HotLoot Casino 2025 Bonus Cash Drops | GigaBonus",
    description: "Avis détaillé HotLoot Casino 2025. Cash drops quotidiens et bonus chauds.",
    canonical: "/blog/avis-hotloot-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisHotloot2025Layout({ children, params }: Props) {
  await params;
  return children;
}
