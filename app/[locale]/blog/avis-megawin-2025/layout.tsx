import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-megawin-2025", {
    title: "Avis MegaWin Casino 2025 Bonus VIP | GigaBonus",
    description: "Avis détaillé MegaWin Casino 2025. Bonus highroller, gros gains et programme VIP.",
    canonical: "/blog/avis-megawin-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisMegawin2025Layout({ children, params }: Props) {
  await params;
  return children;
}
