import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installer GigaBonus App Desktop Sécurisée | GigaBonus 2025",
  description: "Installez l'application GigaBonus sur votre ordinateur ou mobile. Accès rapide aux meilleurs bonus casino.",
  alternates: {
    canonical: "https://gigabonus.fr/install",
  },
};

export default function InstallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
