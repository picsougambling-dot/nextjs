export const siteConfig = {
  name: "GigaBonus",
  url: "https://gigabonus.win",
  locales: ['en', 'fr', 'de', 'es', 'ru', 'it', 'br', 'pt', 'nl', 'lv', 'fi'] as const,
  defaultLocale: 'en' as const,
} as const;

export type Locale = typeof siteConfig.locales[number];

