import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Actualités Blog Casino France & Guides | GigaBonus 2025",
  description: "Blog casino avec actualités, guides et avis détaillés sur les casinos en ligne. Restez informé des dernières offres et tendances.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}