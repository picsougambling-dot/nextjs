import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis BonRush Casino Retraits 1h | GigaBonus 2025",
  description: "Avis complet BonRush Casino 2025. Retraits ultra-rapides en 1h, bonus généreux et interface moderne.",
  alternates: { canonical: `${siteConfig.url}/bonrush` },
};

export default function BonrushLayout({ children }: { children: React.ReactNode }) {
  return children;
}