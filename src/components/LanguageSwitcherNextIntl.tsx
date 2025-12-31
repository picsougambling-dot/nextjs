'use client';

import { useLocale } from 'next-intl';
import { startTransition, useState } from 'react';
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
import { usePathname, useRouter } from '@/i18n/navigation';

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
  const pathname = usePathname(); // Pathname localisé (sans locale, ex: "/astuces-casino")
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  const switchLanguage = (newLocale: string) => {
    // Éviter de changer vers la même locale
    if (newLocale === locale) return;
    
    // Fermer le dropdown immédiatement
    setOpen(false);
    
    // Attendre que l'animation de fermeture se termine (150ms)
    setTimeout(() => {
      startTransition(() => {
        try {
          // Utiliser la méthode recommandée par next-intl
          // router.push/replace avec { locale } gère automatiquement la traduction du pathname
          router.replace(pathname, { locale: newLocale });
        } catch (error) {
          // En cas d'erreur, forcer un rechargement complet de la page
          console.error('Error switching language:', error);
          // Utiliser directement le pathname - next-intl gérera la traduction côté serveur
          window.location.href = `/${newLocale}${pathname}`;
        }
      });
    }, 150);
  };

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
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

