import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-europefortune-2025", {
    title: "Avis EuropeFortune Casino 2025 VIP | GigaBonus",
    description: "Avis détaillé EuropeFortune Casino 2025. Casino premium européen avec bonus généreux.",
    canonical: "/blog/avis-europefortune-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisEuropefortune2025Layout({ children, params }: Props) {
  await params;
  return children;
}
