import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/bonus-sans-wager", {
    title: "Bonus Sans Wager Retrait Immédiat | GigaBonus 2025",
    description: "Meilleurs bonus casino sans conditions de mise. Retirez vos gains immédiatement sans wager. Offres exclusives 2025.",
    canonical: "/bonus-sans-wager",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function BonusSansWagerLayout({ children, params }: Props) {
  await params;
  return children;
}
