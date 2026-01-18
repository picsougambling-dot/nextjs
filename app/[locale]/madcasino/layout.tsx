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
  const t = await getTranslations({ locale: validLocale, namespace: 'CasinoPages.madcasino' });
  
  return generateMultilingualMetadata(locale, "/madcasino", {
    title: t('seoTitle'),
    description: t('seoDescription'),
    canonical: "/madcasino",
    ogImage: "https://gigabonus.win/images/madcasino.webp",
  });
}

export default async function MadcasinoLayout({ children, params }: Props) {
  await params;
  return children;
}
