import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis CasinoIntense Bonus 300% France | GigaBonus 2025",
  description: "Avis complet CasinoIntense 2025. Bonus 300% intense, jeux premium et retraits express.",
  alternates: { canonical: `${siteConfig.url}/casinointense` },
};

export default function CasinointenseLayout({ children }: { children: React.ReactNode }) {
  return children;
}