import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Dépôts Cashlib Rapides pour Casinos | GigaBonus 2025",
  description: "Casinos acceptant Cashlib en France. Carte prépayée disponible en tabac, dépôts instantanés et anonymes.",
  alternates: {
    canonical: `${siteConfig.url}/depot/cashlib`,
  },
};

export default function DepotCashlibLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}