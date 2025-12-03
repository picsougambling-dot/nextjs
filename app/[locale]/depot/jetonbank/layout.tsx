import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/depot/jetonbank", {
    title: "Casinos Dépôt Jeton Bank Multi-Devises | GigaBonus 2025",
    description: "Meilleurs casinos acceptant Jeton Bank. E-wallet international multi-devises avec transactions rapides.",
    canonical: "/depot/jetonbank",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function JetonbankLayout({ children, params }: Props) {
  await params;
  return children;
}
