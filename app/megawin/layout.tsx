import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis MegaWin Casino Bonus Highroller | GigaBonus 2025",
  description: "Avis complet MegaWin Casino 2025. Bonus highroller, gros gains et programme VIP.",
  alternates: { canonical: `${siteConfig.url}/megawin` },
};

export default function MegawinLayout({ children }: { children: React.ReactNode }) {
  return children;
}