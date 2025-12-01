import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Top Machines à Sous Jackpot France 2025 | GigaBonus",
  description: "Classement des meilleures machines à sous 2025 avec les plus gros jackpots. Slots populaires, RTP élevés et bonus exclusifs.",
  alternates: {
    canonical: `${siteConfig.url}/top-slots-2025`,
  },
};

export default function TopSlots2025Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}