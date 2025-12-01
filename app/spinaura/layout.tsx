import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis SpinAura Casino Jackpots Crypto | GigaBonus 2025",
  description: "Avis complet SpinAura Casino 2025. Jackpots crypto, bonus généreux et retraits Bitcoin.",
  alternates: { canonical: `${siteConfig.url}/spinaura` },
};

export default function SpinauraLayout({ children }: { children: React.ReactNode }) {
  return children;
}