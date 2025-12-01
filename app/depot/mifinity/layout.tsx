import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Casinos Dépôt MiFinity Sécurisé France | GigaBonus 2025",
  description: "Meilleurs casinos acceptant MiFinity. E-wallet moderne avec transactions instantanées et sécurisées.",
  alternates: {
    canonical: `${siteConfig.url}/depot/mifinity`,
  },
};

export default function DepotMifinityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}