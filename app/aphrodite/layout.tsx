import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis Aphrodite Casino Bonus 500€ VIP | GigaBonus 2025",
  description: "Avis complet Aphrodite Casino 2025. Bonus jusqu'à 500€, programme VIP exclusif et jeux premium.",
  alternates: {
    canonical: `${siteConfig.url}/aphrodite`,
  },
};

export default function AphroditeLayout({ children }: { children: React.ReactNode }) {
  return children;
}