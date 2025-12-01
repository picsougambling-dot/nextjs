import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis WinMaChance Casino VIP Rewards | GigaBonus 2025",
  description: "Avis complet MaChance Casino 2025. Programme VIP rewards, jackpots et bonus exclusifs.",
  alternates: { canonical: `${siteConfig.url}/machance` },
};

export default function MachanceLayout({ children }: { children: React.ReactNode }) {
  return children;
}