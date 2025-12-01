import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos de GigaBonus : Experts Casinos | GigaBonus 2025",
  description: "Découvrez l'équipe GigaBonus, experts en casinos en ligne depuis 2020. Notre mission : vous guider vers les meilleurs bonus casino.",
  alternates: {
    canonical: "https://gigabonus.fr/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
