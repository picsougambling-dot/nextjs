import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/casinos-sans-kyc", {
    title: "Casinos Sans KYC Inscription Rapide | GigaBonus 2025",
    description: "Casinos en ligne sans vérification d'identité KYC. Inscription rapide, dépôts anonymes et retraits express.",
    canonical: "/casinos-sans-kyc",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function CasinosSansKycLayout({ children, params }: Props) {
  await params;
  return children;
}
