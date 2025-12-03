import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/top-slots-2025", {
    title: "Top Machines à Sous Jackpot France 2025 | GigaBonus",
    description: "Classement des meilleures machines à sous 2025 avec les plus gros jackpots. Slots populaires, RTP élevés et bonus exclusifs.",
    canonical: "/top-slots-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function TopSlots2025Layout({ children, params }: Props) {
  await params;
  return children;
}
