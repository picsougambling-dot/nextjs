import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog", {
    title: "Actualités Blog Casino France & Guides | GigaBonus 2025",
    description: "Blog casino avec actualités, guides et avis détaillés sur les casinos en ligne. Restez informé des dernières offres et tendances.",
    canonical: "/blog",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function BlogLayout({ children, params }: Props) {
  await params;
  return children;
}
