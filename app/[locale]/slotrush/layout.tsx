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
  const t = await getTranslations({ locale: validLocale, namespace: 'CasinoPages.slotrush' });
  
  return generateMultilingualMetadata(locale, "/slotrush", {
    title: t('seoTitle'),
    description: t('seoDescription'),
    canonical: "/slotrush",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function SlotrushLayout({ children, params }: Props) {
  await params;
  return children;
}
