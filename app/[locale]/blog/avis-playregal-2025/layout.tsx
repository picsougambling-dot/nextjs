import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/blog/avis-playregal-2025", {
    title: "Avis PlayRegal Casino 2025 Cashback | GigaBonus",
    description: "Avis détaillé PlayRegal Casino 2025. Bonus royal, cashback et retraits rapides.",
    canonical: "/blog/avis-playregal-2025",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisPlayregal2025Layout({ children, params }: Props) {
  await params;
  return children;
}
