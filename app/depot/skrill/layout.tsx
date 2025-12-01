import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Casinos Dépôt Skrill Retraits 24h | GigaBonus 2025",
  description: "Meilleurs casinos acceptant Skrill. E-wallet populaire avec dépôts instantanés et retraits en 24h.",
  alternates: {
    canonical: `${siteConfig.url}/depot/skrill`,
  },
};

export default function DepotSkrillLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}