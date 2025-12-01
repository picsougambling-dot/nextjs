import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis SlotRush Casino Bonus Turbo | GigaBonus 2025",
  description: "Avis complet SlotRush Casino 2025. Bonus turbo, slots premium et retraits express.",
  alternates: { canonical: `${siteConfig.url}/slotrush` },
};

export default function SlotrushLayout({ children }: { children: React.ReactNode }) {
  return children;
}