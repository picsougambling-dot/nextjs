import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";
import { getTranslations } from 'next-intl/server';
import { siteConfig } from '@/config/site';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = siteConfig.locales.includes(locale as any) ? locale : siteConfig.defaultLocale;
  const t = await getTranslations({ locale: validLocale, namespace: 'CasinoPages.7kcasino' });
  
  return generateMultilingualMetadata(locale, "/7kcasino", {
    title: t('seoTitle'),
    description: t('seoDescription'),
    canonical: "/7kcasino",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function SevenKCasinoLayout({ children, params }: Props) {
  await params;
  return children;
}


