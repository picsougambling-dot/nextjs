import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/depot/cashlib", {
    title: "Dépôts Cashlib Rapides pour Casinos | GigaBonus 2025",
    description: "Casinos acceptant Cashlib en France. Carte prépayée disponible en tabac, dépôts instantanés et anonymes.",
    canonical: "/depot/cashlib",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function CashlibLayout({ children, params }: Props) {
  await params;
  return children;
}
