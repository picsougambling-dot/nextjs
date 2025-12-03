import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/top-casinos-crypto", {
    title: "Meilleurs Casinos Crypto Bitcoin France | GigaBonus 2025",
    description: "Top des casinos crypto acceptant Bitcoin, Ethereum et USDT. Bonus exclusifs, retraits rapides et anonymat garanti.",
    canonical: "/top-casinos-crypto",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function TopCasinosCryptoLayout({ children, params }: Props) {
  await params;
  return children;
}
