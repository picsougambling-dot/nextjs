import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-cleobetra-2025", {
    title: "Avis CléoBetra Casino 2025 Bonus Elite | GigaBonus",
    description: "Avis détaillé CléoBetra Casino 2025. Bonus élite, thème égyptien et retraits rapides.",
    canonical: "/blog/avis-cleobetra-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisCleobetra2025Layout({ children, params }: Props) {
  await params;
  return children;
}
