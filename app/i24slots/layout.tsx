import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis i24Slots Casino Crypto & Slots | GigaBonus 2025",
  description: "Avis complet i24Slots Casino 2025. Casino crypto avec slots premium et retraits rapides.",
  alternates: { canonical: `${siteConfig.url}/i24slots` },
};

export default function I24slotsLayout({ children }: { children: React.ReactNode }) {
  return children;
}