import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis MagicalSpin Casino Bonus VIP | GigaBonus 2025",
  description: "Avis complet MagicalSpin Casino 2025. Programme VIP magique, bonus généreux et jeux premium.",
  alternates: { canonical: `${siteConfig.url}/magicalspin` },
};

export default function MagicalspinLayout({ children }: { children: React.ReactNode }) {
  return children;
}