'use client';

import { Link } from '@/i18n/navigation';
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Facebook, Youtube, Star } from "lucide-react";
import { casinos } from "@/data/casinos";
import { useUserCountry } from "@/hooks/useUserCountry";
import { useMemo } from "react";

const Footer = () => {
  const t = useTranslations('Footer');
  const locale = useLocale();
  const { countryCode: userCountry } = useUserCountry();
  
  // Filtrer les casinos par pays disponible
  const footerCasinos = useMemo(() => {
    const casinoNames = ["SpinStar", "Kings Chance", "HunnyPlay", "Lucky Treasure"];
    return casinos
      .filter((casino) => {
        if (!casinoNames.includes(casino.name)) return false;
        // Filtrer par pays disponible
        return !userCountry ||
          !casino.availableCountries ||
          casino.availableCountries.length === 0 ||
          casino.availableCountries.includes(userCountry);
      })
      .sort((a, b) => {
        // Garder l'ordre original basé sur casinoNames
        return casinoNames.indexOf(a.name) - casinoNames.indexOf(b.name);
      });
  }, [userCountry]);
  
  // Filtrer les avis récents par pays disponible
  const footerReviews = useMemo(() => {
    const reviewCasinos = [
      { name: "RoiBets", path: "/blog/avis-roibets-2025", translationKey: "roibets" },
      { name: "Rockstar", path: "/blog/avis-rockstar-2025", translationKey: "rockstar" },
      { name: "i24Slots", path: "/blog/avis-i24slots-2025", translationKey: "i24slots" },
      { name: "EuropeFortune", path: "/blog/avis-europefortune-2025", translationKey: "europefortune" }
    ];
    
    return reviewCasinos.filter((review) => {
      const casino = casinos.find(c => c.name === review.name);
      if (!casino) return true; // Garder si casino non trouvé
      // Filtrer par pays disponible
      return !userCountry ||
        !casino.availableCountries ||
        casino.availableCountries.length === 0 ||
        casino.availableCountries.includes(userCountry);
    });
  }, [userCountry]);
  return (
    <footer className="glass-card border-t border-border mt-8 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6">
          {/* Logo & Description */}
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center mb-2">
              <Image 
                src="/gigabonus-logo.webp" 
                alt="GigaBonus Logo" 
                className="h-12 sm:h-14 w-auto object-contain"
                width={96}
                height={96}
              />
            </Link>
            <p className="text-xs text-muted-foreground hidden lg:block">
              {t('description')}
            </p>
          </div>

          {/* Casinos Populaires */}
          <div>
            <h3 className="font-semibold text-sm mb-2 text-primary">{t('sections.casinos')}</h3>
            <ul className="space-y-1">
              {footerCasinos.map((casino) => {
                const casinoSlug = casino.name.toLowerCase().replace(/\s+/g, '').replace(/\./g, '');
                return (
                  <li key={casino.id}>
                    <Link href={`/${casinoSlug}`} className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">
                      {casino.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Guides & Bonus */}
          <div>
            <h3 className="font-semibold text-sm mb-2 text-primary">{t('sections.guides')}</h3>
            <ul className="space-y-1">
              <li><Link href="/bonus-cashback" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">{t('links.guides.cashback')}</Link></li>
              <li><Link href="/top-casinos-crypto" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">{t('links.guides.casinosCrypto')}</Link></li>
              <li><Link href="/meilleurs-bookmakers" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">{t('links.guides.bookmakers')}</Link></li>
              <li><Link href="/top-slots-2025" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">{t('links.guides.topSlots')}</Link></li>
            </ul>
          </div>

          {/* Outils Pratiques */}
          <div>
            <h3 className="font-semibold text-sm mb-2 text-primary">{t('sections.tools')}</h3>
            <ul className="space-y-1">
              <li><Link href="/calculateur-roulette" className="text-xs text-muted-foreground hover:text-primary transition-colors">{t('links.tools.calcRoulette')}</Link></li>
              <li><Link href="/calculateur-cotes-sportives" className="text-xs text-muted-foreground hover:text-primary transition-colors">{t('links.tools.calcOdds')}</Link></li>
              <li><Link href="/astuces-casino" className="text-xs text-muted-foreground hover:text-primary transition-colors">{t('links.tools.tips')}</Link></li>
              <li><Link href="/install" className="text-xs text-muted-foreground hover:text-primary transition-colors">{t('links.tools.installApp')}</Link></li>
            </ul>
          </div>

          {/* Méthodes de Paiement */}
          <div>
            <h3 className="font-semibold text-sm mb-2 text-primary">{t('sections.payments')}</h3>
            <ul className="space-y-1">
              <li><Link href="/depot/carte" className="text-xs text-muted-foreground hover:text-primary transition-colors">{t('links.payments.card')}</Link></li>
              <li><Link href="/depot/crypto" className="text-xs text-muted-foreground hover:text-primary transition-colors">{t('links.payments.crypto')}</Link></li>
              <li><Link href="/depot/neosurf" className="text-xs text-muted-foreground hover:text-primary transition-colors">{t('links.payments.neosurf')}</Link></li>
              <li><Link href="/depot/skrill" className="text-xs text-muted-foreground hover:text-primary transition-colors">{t('links.payments.skrill')}</Link></li>
            </ul>
          </div>

          {/* Plus */}
          <div>
            <h3 className="font-semibold text-sm mb-2 text-primary">{t('sections.more')}</h3>
            <ul className="space-y-1">
              <li><Link href="/winmachance" className="text-xs text-muted-foreground hover:text-primary transition-colors">{t('links.more.winmachance')}</Link></li>
              <li><Link href="/betify" className="text-xs text-muted-foreground hover:text-primary transition-colors">{t('links.more.betify')}</Link></li>
              <li><Link href="/uniquecasino" className="text-xs text-muted-foreground hover:text-primary transition-colors">{t('links.more.uniquecasino')}</Link></li>
              <li><Link href="/blog" className="text-xs text-muted-foreground hover:text-primary transition-colors">{t('links.more.blog')}</Link></li>
            </ul>
          </div>

          {/* Avis Récents */}
          <div>
            <h3 className="font-semibold text-sm mb-2 text-primary">{t('sections.recentReviews')}</h3>
            <ul className="space-y-1">
              {footerReviews.map((review) => (
                <li key={review.path}>
                  <Link href={review.path} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    {t(`links.reviews.${review.translationKey}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-4 pt-3">
          {/* Social & Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-3">
            <a 
              href="https://fr.trustpilot.com/review/gigabonus.win" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors duration-200 touch-manipulation active:opacity-70"
            >
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              <span className="hidden sm:inline">Trustpilot</span>
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61578579597076" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors duration-200 touch-manipulation active:opacity-70"
              aria-label="Facebook GigaBonus"
            >
              <Facebook className="w-4 h-4" />
              <span className="hidden sm:inline">Facebook</span>
            </a>
            <a 
              href="https://www.youtube.com/@GigaBonusFr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors duration-200 touch-manipulation active:opacity-70"
              aria-label="YouTube GigaBonus"
            >
              <Youtube className="w-4 h-4" />
              <span className="hidden sm:inline">YouTube</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} GigaBonus.win | <Link href="/about" className="hover:text-primary transition-colors">{t('about')}</Link> | {t('responsibleGaming')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
