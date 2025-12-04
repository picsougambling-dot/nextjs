'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { siteConfig } from '@/config/site';

interface Language {
  code: string;
  name: string;
  flagImage: string;
}

const languages: Language[] = [
  { code: "fr", name: "Français", flagImage: "https://flagcdn.com/w40/fr.webp" },
  { code: "en", name: "English", flagImage: "https://flagcdn.com/w40/gb.webp" },
  { code: "de", name: "Deutsch", flagImage: "https://flagcdn.com/w40/de.webp" },
  { code: "es", name: "Español", flagImage: "https://flagcdn.com/w40/es.webp" },
  { code: "ru", name: "Русский", flagImage: "https://flagcdn.com/w40/ru.webp" },
  { code: "it", name: "Italiano", flagImage: "https://flagcdn.com/w40/it.webp" },
  { code: "br", name: "Português (BR)", flagImage: "https://flagcdn.com/w40/br.webp" },
  { code: "pt", name: "Português (PT)", flagImage: "https://flagcdn.com/w40/pt.webp" },
  { code: "nl", name: "Nederlands", flagImage: "https://flagcdn.com/w40/nl.webp" },
  { code: "lv", name: "Latviešu", flagImage: "https://flagcdn.com/w40/lv.webp" },
  { code: "fi", name: "Suomi", flagImage: "https://flagcdn.com/w40/fi.webp" },
];

export const LanguageSwitcherNextIntl = () => {
  const router = useRouter();
  const pathname = usePathname(); // Pathname complet avec locale (ex: "/fr/madcasino")
  const fallbackLocale = useLocale(); // Fallback si pas de locale dans l'URL
  
  // Extraire la locale depuis l'URL (plus fiable que useLocale() qui peut être en retard)
  const pathSegments = pathname.split('/').filter(Boolean);
  const locale = (pathSegments.length > 0 && siteConfig.locales.includes(pathSegments[0] as any))
    ? pathSegments[0]
    : fallbackLocale;

  const switchLanguage = (newLocale: string) => {
    // Extraire le path sans la locale
    const currentPathSegments = pathname.split('/').filter(Boolean);
    // Si le premier segment est une locale, le remplacer, sinon l'ajouter
    if (currentPathSegments.length > 0 && siteConfig.locales.includes(currentPathSegments[0] as any)) {
      currentPathSegments[0] = newLocale;
    } else {
      currentPathSegments.unshift(newLocale);
    }
    const newPath = '/' + currentPathSegments.join('/');
    router.push(newPath);
    router.refresh(); // Rafraîchir pour charger les nouvelles traductions
  };

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="relative"
          aria-label="Changer de langue"
        >
          <Globe className="h-5 w-5" />
          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-sm overflow-hidden border border-border">
            <Image 
              src={currentLanguage.flagImage} 
              alt={currentLanguage.name}
              width={16}
              height={16}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-auto">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => switchLanguage(language.code)}
            className={`cursor-pointer flex items-center justify-center p-2 ${
              locale === language.code ? "bg-primary/10 font-semibold" : ""
            }`}
            title={language.name}
          >
            <Image 
              src={language.flagImage} 
              alt={language.name}
              width={24}
              height={18}
              className="w-6 h-auto object-cover rounded-sm"
              unoptimized
            />
            {locale === language.code && (
              <span className="ml-1 text-primary text-xs">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

