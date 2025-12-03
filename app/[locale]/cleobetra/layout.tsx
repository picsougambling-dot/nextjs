import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/cleobetra", {
    title: "Avis CléoBetra Casino Bonus Élite | GigaBonus 2025",
    description: "Avis complet CléoBetra Casino 2025. Bonus élite, thème égyptien et retraits rapides.",
    canonical: "/cleobetra",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function CleobetraLayout({ children, params }: Props) {
  await params;
  return children;
}
