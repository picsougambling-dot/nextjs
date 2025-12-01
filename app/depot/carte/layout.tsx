import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dépôts Carte Bancaire pour Casinos | GigaBonus 2025",
  description: "Casinos en ligne acceptant les dépôts par carte bancaire Visa et Mastercard. Dépôts instantanés, sécurisés et sans frais.",
  alternates: {
    canonical: "https://gigabonus.fr/depot/carte",
  },
};

export default function DepotCarteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
