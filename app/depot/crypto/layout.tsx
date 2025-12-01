import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Dépôts Crypto Bitcoin pour Casinos | GigaBonus 2025",
  description: "Meilleurs casinos crypto acceptant Bitcoin, Ethereum et USDT. Dépôts anonymes, retraits rapides en 24h.",
  alternates: {
    canonical: `${siteConfig.url}/depot/crypto`,
  },
};

export default function DepotCryptoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}