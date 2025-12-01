import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Astuces et Stratégies Casino Gagnantes | GigaBonus 2025",
  description: "Découvrez les meilleures astuces et stratégies pour gagner au casino en ligne. Conseils d'experts, gestion de bankroll et techniques éprouvées.",
  alternates: {
    canonical: "https://gigabonus.fr/astuces-casino",
  },
};

export default function AstucesCasinoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
