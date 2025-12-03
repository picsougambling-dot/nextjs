import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/depot/neosurf", {
    title: "Casinos Dépôt Neosurf Sécurisé France | GigaBonus 2025",
    description: "Meilleurs casinos acceptant Neosurf en France. Carte prépayée anonyme, dépôts instantanés sans compte bancaire.",
    canonical: "/depot/neosurf",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function NeosurfLayout({ children, params }: Props) {
  await params;
  return children;
}
