import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/europefortune", {
    title: "Avis EuropeFortune Casino Premium | GigaBonus 2025",
    description: "Avis complet EuropeFortune Casino 2025. Casino premium européen avec bonus généreux.",
    canonical: "/europefortune",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function EuropefortuneLayout({ children, params }: Props) {
  await params;
  return children;
}
