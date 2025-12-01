import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis RoiBets Casino Crypto Bonus 200% | GigaBonus 2025",
  description: "Avis complet RoiBets Casino 2025. Casino crypto avec bonus 200% et retraits Bitcoin rapides.",
  alternates: { canonical: `${siteConfig.url}/roibets` },
};

export default function RoibetsLayout({ children }: { children: React.ReactNode }) {
  return children;
}