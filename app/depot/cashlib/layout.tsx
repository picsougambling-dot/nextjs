import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dépôts Cashlib Rapides pour Casinos | GigaBonus 2025",
  description: "Casinos acceptant Cashlib en France. Carte prépayée disponible en tabac, dépôts instantanés et anonymes.",
  alternates: {
    canonical: "https://gigabonus.fr/depot/cashlib",
  },
};

export default function DepotCashlibLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
