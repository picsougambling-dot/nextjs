import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis PlayRegal Casino Bonus Royal | GigaBonus 2025",
  description: "Avis complet PlayRegal Casino 2025. Bonus royal, cashback et retraits rapides.",
  alternates: { canonical: `${siteConfig.url}/playregal` },
};

export default function PlayregalLayout({ children }: { children: React.ReactNode }) {
  return children;
}