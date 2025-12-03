import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/magicalspin", {
    title: "Avis MagicalSpin Casino Bonus VIP | GigaBonus 2025",
    description: "Avis complet MagicalSpin Casino 2025. Programme VIP magique, bonus généreux et jeux premium.",
    canonical: "/magicalspin",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function MagicalspinLayout({ children, params }: Props) {
  await params;
  return children;
}
