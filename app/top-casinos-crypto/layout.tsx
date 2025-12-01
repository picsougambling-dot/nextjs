import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meilleurs Casinos Crypto Bitcoin France | GigaBonus 2025",
  description: "Top des casinos crypto acceptant Bitcoin, Ethereum et USDT. Bonus exclusifs, retraits rapides et anonymat garanti.",
  alternates: {
    canonical: "https://gigabonus.fr/top-casinos-crypto",
  },
};

export default function TopCasinosCryptoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
