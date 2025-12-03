import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/roibets", {
    title: "Avis RoiBets Casino Crypto Bonus 200% | GigaBonus 2025",
    description: "Avis complet RoiBets Casino 2025. Casino crypto avec bonus 200% et retraits Bitcoin rapides.",
    canonical: "/roibets",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function RoibetsLayout({ children, params }: Props) {
  await params;
  return children;
}
