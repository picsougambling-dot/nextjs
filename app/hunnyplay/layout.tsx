import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis HunnyPlay Casino Crypto & Slots | GigaBonus 2025",
  description: "Avis complet HunnyPlay Casino 2025. Casino crypto avec bonus généreux, slots populaires et retraits Bitcoin rapides.",
  alternates: {
    canonical: `${siteConfig.url}/hunnyplay`,
  },
};

export default function HunnyplayLayout({ children }: { children: React.ReactNode }) {
  return children;
}