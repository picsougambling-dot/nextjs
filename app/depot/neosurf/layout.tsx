import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Casinos Dépôt Neosurf Sécurisé France | GigaBonus 2025",
  description: "Meilleurs casinos acceptant Neosurf en France. Carte prépayée anonyme, dépôts instantanés sans compte bancaire.",
  alternates: {
    canonical: `${siteConfig.url}/depot/neosurf`,
  },
};

export default function DepotNeosurfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}