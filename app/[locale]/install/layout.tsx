import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/install", {
    title: "Installer GigaBonus App Desktop Sécurisée | GigaBonus 2025",
    description: "Installez l'application GigaBonus sur votre ordinateur ou mobile. Accès rapide aux meilleurs bonus casino.",
    canonical: "/install",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function InstallLayout({ children, params }: Props) {
  await params;
  return children;
}
