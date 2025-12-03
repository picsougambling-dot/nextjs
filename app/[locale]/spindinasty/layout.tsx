import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/spindinasty", {
    title: "Avis SpinDinasty Casino Free Spins | GigaBonus 2025",
    description: "Avis complet SpinDinasty Casino 2025. Free spins généreux, jeux de qualité et programme VIP.",
    canonical: "/spindinasty",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function SpindinastyLayout({ children, params }: Props) {
  await params;
  return children;
}
