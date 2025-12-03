import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/machance", {
    title: "Avis WinMaChance Casino VIP Rewards | GigaBonus 2025",
    description: "Avis complet MaChance Casino 2025. Programme VIP rewards, jackpots et bonus exclusifs.",
    canonical: "/machance",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function MachanceLayout({ children, params }: Props) {
  await params;
  return children;
}
