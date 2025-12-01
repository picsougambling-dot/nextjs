import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Casinos Dépôt Neteller Instantané | GigaBonus 2025",
  description: "Casinos en ligne acceptant Neteller. E-wallet fiable avec dépôts instantanés et retraits rapides en 24h.",
  alternates: {
    canonical: `${siteConfig.url}/depot/neteller`,
  },
};

export default function DepotNetellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}