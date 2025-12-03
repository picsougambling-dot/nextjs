import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/megawin", {
    title: "Avis MegaWin Casino Bonus Highroller | GigaBonus 2025",
    description: "Avis complet MegaWin Casino 2025. Bonus highroller, gros gains et programme VIP.",
    canonical: "/megawin",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function MegawinLayout({ children, params }: Props) {
  await params;
  return children;
}
