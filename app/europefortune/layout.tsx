import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis EuropeFortune Casino Premium | GigaBonus 2025",
  description: "Avis complet EuropeFortune Casino 2025. Casino premium européen avec bonus généreux.",
  alternates: { canonical: `${siteConfig.url}/europefortune` },
};

export default function EuropefortuneLayout({ children }: { children: React.ReactNode }) {
  return children;
}