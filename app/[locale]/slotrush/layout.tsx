import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/slotrush", {
    title: "Avis SlotRush Casino Bonus Turbo | GigaBonus 2025",
    description: "Avis complet SlotRush Casino 2025. Bonus turbo, slots premium et retraits express.",
    canonical: "/slotrush",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function SlotrushLayout({ children, params }: Props) {
  await params;
  return children;
}
