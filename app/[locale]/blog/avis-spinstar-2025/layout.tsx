import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-spinstar-2025", {
    title: "Avis SpinStar Casino 2025 et Bonus 700% | GigaBonus",
    description: "Avis détaillé SpinStar Casino 2025. Bonus 700% jusqu'à 10 000€ + 725 Free Spins analysé par nos experts.",
    canonical: "/blog/avis-spinstar-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisSpinstar2025Layout({ children, params }: Props) {
  await params;
  return children;
}
