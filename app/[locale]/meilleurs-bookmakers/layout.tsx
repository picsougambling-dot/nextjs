import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/meilleurs-bookmakers", {
    title: "Classement Meilleurs Bookmakers 2025 | GigaBonus",
    description: "Top des meilleurs bookmakers et sites de paris sportifs 2025. Bonus exclusifs, cotes compétitives et paris en direct.",
    canonical: "/meilleurs-bookmakers",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function MeilleursBookmakersLayout({ children, params }: Props) {
  await params;
  return children;
}
