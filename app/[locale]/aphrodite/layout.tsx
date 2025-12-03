import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/aphrodite", {
    title: "Avis Aphrodite Casino Bonus 500€ VIP | GigaBonus 2025",
    description: "Avis complet Aphrodite Casino 2025. Bonus jusqu'à 500€, programme VIP exclusif et jeux premium.",
    canonical: "/aphrodite",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AphroditeLayout({ children, params }: Props) {
  await params;
  return children;
}
