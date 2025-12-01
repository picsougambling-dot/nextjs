import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Casinos Dépôt Jeton Bank Multi-Devises | GigaBonus 2025",
  description: "Meilleurs casinos acceptant Jeton Bank. E-wallet international multi-devises avec transactions rapides.",
  alternates: {
    canonical: `${siteConfig.url}/depot/jetonbank`,
  },
};

export default function DepotJetonbankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}