import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-spindinasty-2025", {
    title: "Avis SpinDinasty Casino 2025 Free Spins | GigaBonus",
    description: "Avis détaillé SpinDinasty Casino 2025. Free spins généreux et programme VIP.",
    canonical: "/blog/avis-spindinasty-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisSpindinasty2025Layout({ children, params }: Props) {
  await params;
  return children;
}
