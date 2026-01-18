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
  const t = await getTranslations({ locale: validLocale, namespace: 'CasinoPages.spinstar' });
  
  return generateMultilingualMetadata(locale, "/spinstar", {
    title: t('seoTitle'),
    description: t('seoDescription'),
    canonical: "/spinstar",
    ogImage: "https://gigabonus.win/images/spinstar.webp",
  });
}

export default async function SpinstarLayout({ children, params }: Props) {
  await params; // Attendre params pour la validation
  return children;
}
