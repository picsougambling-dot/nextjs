import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis HotLoot Casino Bonus Cash Drops | GigaBonus 2025",
  description: "Avis complet HotLoot Casino 2025. Cash drops quotidiens, bonus chauds et retraits rapides.",
  alternates: { canonical: `${siteConfig.url}/hotloot` },
};

export default function HotlootLayout({ children }: { children: React.ReactNode }) {
  return children;
}