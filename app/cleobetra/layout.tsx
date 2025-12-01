import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis CléoBetra Casino Bonus Élite | GigaBonus 2025",
  description: "Avis complet CléoBetra Casino 2025. Bonus élite, thème égyptien et retraits rapides.",
  alternates: { canonical: `${siteConfig.url}/cleobetra` },
};

export default function CleobetraLayout({ children }: { children: React.ReactNode }) {
  return children;
}