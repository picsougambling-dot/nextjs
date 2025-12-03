import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/playregal", {
    title: "Avis PlayRegal Casino Bonus Royal | GigaBonus 2025",
    description: "Avis complet PlayRegal Casino 2025. Bonus royal, cashback et retraits rapides.",
    canonical: "/playregal",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function PlayregalLayout({ children, params }: Props) {
  await params;
  return children;
}
