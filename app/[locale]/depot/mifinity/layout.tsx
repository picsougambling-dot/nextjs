import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/depot/mifinity", {
    title: "Casinos Dépôt MiFinity Sécurisé France | GigaBonus 2025",
    description: "Meilleurs casinos acceptant MiFinity. E-wallet moderne avec transactions instantanées et sécurisées.",
    canonical: "/depot/mifinity",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function MifinityLayout({ children, params }: Props) {
  await params;
  return children;
}
