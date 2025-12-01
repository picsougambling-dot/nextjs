import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Casinos Sans KYC Inscription Rapide | GigaBonus 2025",
  description: "Casinos en ligne sans vérification d'identité KYC. Inscription rapide, dépôts anonymes et retraits express.",
  alternates: {
    canonical: `${siteConfig.url}/casinos-sans-kyc`,
  },
};

export default function CasinosSansKycLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}