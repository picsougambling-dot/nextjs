'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
];

export const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState<string>("fr");
  const [isWeglotReady, setIsWeglotReady] = useState(false);

  useEffect(() => {
    // Check if Weglot is loaded
    const checkWeglot = () => {
      if (typeof window !== "undefined" && (window as any).Weglot) {
        setIsWeglotReady(true);
        const lang = (window as any).Weglot.getCurrentLang();
        setCurrentLang(lang);
      } else {
        setTimeout(checkWeglot, 100);
      }
    };
    checkWeglot();

    // Listen to Weglot language changes
    const handleLanguageChange = () => {
      if ((window as any).Weglot) {
        const lang = (window as any).Weglot.getCurrentLang();
        setCurrentLang(lang);
      }
    };

    window.addEventListener("languageChanged", handleLanguageChange);
    return () => window.removeEventListener("languageChanged", handleLanguageChange);
  }, []);

  const switchLanguage = (langCode: string) => {
    if (isWeglotReady && (window as any).Weglot) {
      (window as any).Weglot.switchTo(langCode);
      setCurrentLang(langCode);
      
      // Mark that user manually selected a language (to prevent auto-switch)
      localStorage.setItem("weglot_manual_language", langCode);
      
      // Trigger custom event
      window.dispatchEvent(new Event("languageChanged"));
    }
  };

  const currentLanguage = languages.find((lang) => lang.code === currentLang) || languages[0];

  if (!isWeglotReady) return null;

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
          <span className="absolute -bottom-0.5 -right-0.5 text-xs">
            {currentLanguage.flag}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => switchLanguage(language.code)}
            className={`cursor-pointer ${
              currentLang === language.code ? "bg-primary/10 font-semibold" : ""
            }`}
          >
            <span className="mr-2 text-lg">{language.flag}</span>
            <span>{language.name}</span>
            {currentLang === language.code && (
              <span className="ml-auto text-primary">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
