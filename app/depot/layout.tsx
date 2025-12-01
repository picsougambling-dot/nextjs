import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Guide Méthodes de Dépôt Casino 2025 | GigaBonus",
  description: "Découvrez toutes les méthodes de dépôt disponibles dans les casinos en ligne : carte bancaire, crypto, e-wallets, cartes prépayées. Guide complet avec avantages et délais.",
  alternates: {
    canonical: `${siteConfig.url}/depot`,
  },
};

export default function DepotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}