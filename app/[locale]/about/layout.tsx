import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/about", {
    title: "À Propos de GigaBonus : Experts Casinos | GigaBonus 2025",
    description: "Découvrez l'équipe GigaBonus, experts en casinos en ligne depuis 2020. Notre mission : vous guider vers les meilleurs bonus casino.",
    canonical: "/about",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AboutLayout({ children, params }: Props) {
  await params;
  return children;
}
