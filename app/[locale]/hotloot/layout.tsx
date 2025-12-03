import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/hotloot", {
    title: "Avis HotLoot Casino Bonus Cash Drops | GigaBonus 2025",
    description: "Avis complet HotLoot Casino 2025. Cash drops quotidiens, bonus chauds et retraits rapides.",
    canonical: "/hotloot",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function HotlootLayout({ children, params }: Props) {
  await params;
  return children;
}
