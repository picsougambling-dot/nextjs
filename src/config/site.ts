export const siteConfig = {
  name: "GigaBonus",
  url: "https://gigabonus.win",
  locales: ['fr', 'en', 'de', 'es', 'ru', 'it', 'br', 'pt'] as const,
  defaultLocale: 'fr' as const,
} as const;

export type Locale = typeof siteConfig.locales[number];

