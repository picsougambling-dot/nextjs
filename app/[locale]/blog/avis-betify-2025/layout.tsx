import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-betify-2025", {
    title: "Avis Betify Casino 2025 Bonus Rush | GigaBonus",
    description: "Avis détaillé Betify Casino 2025. Bonus turbo, paris sportifs intégrés et retraits express.",
    canonical: "/blog/avis-betify-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisBetify2025Layout({ children, params }: Props) {
  await params;
  return children;
}
