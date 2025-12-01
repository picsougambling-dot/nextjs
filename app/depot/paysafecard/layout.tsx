import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Casinos Dépôt Paysafecard Sans Frais | GigaBonus 2025",
  description: "Casinos en ligne acceptant Paysafecard. Carte prépayée sécurisée, dépôts sans frais et sans compte bancaire.",
  alternates: {
    canonical: `${siteConfig.url}/depot/paysafecard`,
  },
};

export default function DepotPaysafecardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}