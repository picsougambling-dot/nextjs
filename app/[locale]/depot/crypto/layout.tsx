import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/depot/crypto", {
    title: "Dépôts Crypto Bitcoin pour Casinos | GigaBonus 2025",
    description: "Meilleurs casinos crypto acceptant Bitcoin, Ethereum et USDT. Dépôts anonymes, retraits rapides en 24h.",
    canonical: "/depot/crypto",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function CryptoLayout({ children, params }: Props) {
  await params;
  return children;
}
