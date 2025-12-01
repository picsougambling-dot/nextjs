import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Astuces et Stratégies Casino Gagnantes | GigaBonus 2025",
  description: "Découvrez les meilleures astuces et stratégies pour gagner au casino en ligne. Conseils d'experts, gestion de bankroll et techniques éprouvées.",
  alternates: {
    canonical: `${siteConfig.url}/astuces-casino`,
  },
};

export default function AstucesCasinoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}