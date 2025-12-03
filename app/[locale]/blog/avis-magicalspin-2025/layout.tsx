import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-magicalspin-2025", {
    title: "Avis MagicalSpin Casino 2025 Programme VIP | GigaBonus",
    description: "Avis détaillé MagicalSpin Casino 2025. Programme VIP magique et bonus généreux.",
    canonical: "/blog/avis-magicalspin-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisMagicalspin2025Layout({ children, params }: Props) {
  await params;
  return children;
}
