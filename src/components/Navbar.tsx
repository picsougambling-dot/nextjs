'use client';

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { casinos } from "@/data/casinos";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcherNextIntl } from "@/components/LanguageSwitcherNextIntl";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { siteConfig } from "@/config/site";
import { useUserCountry } from "@/hooks/useUserCountry";

const Navbar = () => {
  const pathname = usePathname(); // Pathname complet avec locale (ex: "/de/madcasino")
  const fallbackLocale = useLocale(); // Fallback si pas de locale dans l'URL
  const t = useTranslations('Navigation'); // Traductions de la navbar
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeavy, setShowHeavy] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  
  // Récupérer le pays de l'utilisateur pour filtrer les casinos
  const { countryCode: userCountry } = useUserCountry();
  
  // Filtrer les casinos par pays
  const filteredCasinos = useMemo(() => {
    return casinos.filter((casino) => {
      if (!casino.name) return false;
      
      // Country filter - Afficher le casino si :
      // - Pas de pays détecté (affichage de tous les casinos)
      // - Le casino n'a pas de restriction de pays (availableCountries non défini ou vide)
      // - Le casino est disponible dans le pays de l'utilisateur
      const matchesCountry =
        !userCountry ||
        !casino.availableCountries ||
        casino.availableCountries.length === 0 ||
        casino.availableCountries.includes(userCountry);
      
      return matchesCountry;
    });
  }, [userCountry]);
  
  // Extraire la locale depuis l'URL (plus fiable que useLocale() qui peut être en retard)
  const pathSegments = pathname.split('/').filter(Boolean);
  const locale = (pathSegments.length > 0 && siteConfig.locales.includes(pathSegments[0] as any))
    ? pathSegments[0]
    : fallbackLocale;
  
  // Construire l'URL avec la locale actuelle
  // S'assurer de ne pas dupliquer la locale si elle est déjà présente
  const getLocalizedHref = (href: string) => {
    // Nettoyer le href : enlever la locale si elle est présente
    let cleanHref = href;
    const { locales } = siteConfig;
    locales.forEach((loc) => {
      if (cleanHref.startsWith(`/${loc}/`) || cleanHref === `/${loc}`) {
        cleanHref = cleanHref.replace(`/${loc}`, '') || '/';
      }
    });
    // S'assurer que href commence par /
    if (!cleanHref.startsWith('/')) {
      cleanHref = `/${cleanHref}`;
    }
    // Retourner l'URL avec la locale actuelle (depuis l'URL)
    return `/${locale}${cleanHref === '/' ? '' : cleanHref}`;
  };
  const handleTriggerEnter = useCallback((e: any) => {
    const root = menuRef.current;
    if (!root) return;
    const rootRect = root.getBoundingClientRect();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const center = rect.left + rect.width / 2 - rootRect.left;
    root.style.setProperty("--menu-center", `${center}px`);
  }, []);

  useEffect(() => {
    const run = () => setShowHeavy(true);
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      (window as any).requestIdleCallback(run, { timeout: 1500 });
    } else {
      setTimeout(run, 0);
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card-overlay border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href={getLocalizedHref("/")} className="flex items-center gap-2 group">
            <Image 
              src="/gigabonus-logo.webp" 
              alt="GigaBonus Logo" 
              className="h-20 sm:h-24 lg:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              width={120}
              height={120}
              priority
              sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 112px"
            />
          </Link>

          <div className="flex items-center gap-2">
            <LanguageSwitcherNextIntl />
            <ThemeToggle />
            
            {/* Mobile Menu */}
            {showHeavy ? (
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon" aria-label="Menu de navigation" className="touch-manipulation">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>{t('menu')}</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-4 mt-6">
                    <Link href={getLocalizedHref("/")} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium hover:text-primary">
                      {t('home')}
                    </Link>
                    
                    <Collapsible>
                      <CollapsibleTrigger className="text-lg font-medium hover:text-primary w-full text-left">
                        {t('allCasinos')}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="grid grid-cols-3 gap-3 mt-2 p-2">
                        {filteredCasinos.filter(casino => {
                          if (!casino.name) return false;
                          // Liste des casinos qui ont des pages dédiées (basée sur le sitemap)
                          const casinosWithPages = [
                            'spinstar', 'kingschance', 'hunnyplay', 'luckytrunk', 'megawin', 
                            'europefortune', 'cleobetra', 'spindinasty', 'i24slots', 'magicalspin', 
                            'playregal', 'vegasplus', 'winmachance', 'uniquecasino', 'cazinostars', 
                            'atlantisslots', 'casinointense', 'luckytreasure', 'bonrush', 'betify', 
                            'rockstar', 'slotrush', 'spinaura', 'hotloot', 'roibets', 'aphrodite',
                            'madcasino', 'kingdom', 'machance'
                          ];
                          const casinoSlug = casino.name.toLowerCase().replace(/\s+/g, '');
                          return casinosWithPages.includes(casinoSlug);
                        }).map((casino) => {
                          const isBillyBets = casino.name === "BillyBets";
                          const casinoHref = `/${casino.name.toLowerCase().replace(/\s+/g, '')}`;
                          return (
                            <Link 
                              key={casino.id}
                              href={getLocalizedHref(casinoHref) || '#'}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/10 transition-all duration-200"
                            >
                              <img 
                                src={casino.logo} 
                                alt={casino.name}
                                className={`max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 ${
                                  isBillyBets ? "h-14" : "h-12"
                                }`}
                                onError={(e) => {
                                  e.currentTarget.src = "https://via.placeholder.com/64x64?text=" + casino.name.substring(0, 2);
                                }}
                              />
                            </Link>
                          );
                        })}
                      </CollapsibleContent>
                    </Collapsible>

                    <Link href={getLocalizedHref("/top-casinos-crypto")} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium hover:text-primary">
                      {t('topCryptoCasinos')}
                    </Link>

                    <Link href={getLocalizedHref("/casinos-sans-kyc")} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium hover:text-primary">
                      {t('casinosNoKYC')}
                    </Link>

                    <Collapsible>
                      <CollapsibleTrigger className="text-lg font-medium hover:text-primary w-full text-left">
                        {t('byDeposit')}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="grid grid-cols-2 gap-3 mt-2 p-2">
                        <Link href={getLocalizedHref("/depot/carte")} onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/10 transition-all duration-200">
                          <img src="/images/methods/carte-bancaire.webp" alt="Carte Bancaire" className="h-8 object-contain" width="50" height="20" />
                        </Link>
                        <Link href={getLocalizedHref("/depot/crypto")} onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/10 transition-all duration-200">
                          <img src="/images/methods/crypto.webp" alt="Crypto-monnaies" className="h-8 object-contain" width="50" height="20" />
                        </Link>
                        <Link href={getLocalizedHref("/depot/neosurf")} onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/10 transition-all duration-200">
                          <img src="/images/methods/neosurf.webp" alt="Neosurf" className="h-8 object-contain" width="50" height="20" />
                        </Link>
                        <Link href={getLocalizedHref("/depot/cashlib")} onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/10 transition-all duration-200">
                          <img src="/images/methods/cashlib.webp" alt="Cashlib" className="h-8 object-contain" width="50" height="20" />
                        </Link>
                        <Link href={getLocalizedHref("/depot/paysafecard")} onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/10 transition-all duration-200">
                          <img src="/images/methods/paysafecard.webp" alt="Paysafecard" className="h-8 object-contain" width="50" height="20" />
                        </Link>
                        <Link href={getLocalizedHref("/depot/virement")} onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/10 transition-all duration-200">
                          <img src="/images/methods/virement-bancaire.webp" alt="Virement Bancaire" className="h-8 object-contain" width="50" height="20" />
                        </Link>
                        <Link href={getLocalizedHref("/depot/skrill")} onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/10 transition-all duration-200">
                          <img src="/images/methods/skrill.webp" alt="Skrill" className="h-8 object-contain" width="50" height="20" />
                        </Link>
                        <Link href={getLocalizedHref("/depot/neteller")} onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/10 transition-all duration-200">
                          <img src="/images/methods/neteller.webp" alt="Neteller" className="h-8 object-contain" width="50" height="20" />
                        </Link>
                        <Link href={getLocalizedHref("/depot/jetonbank")} onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/10 transition-all duration-200">
                          <img src="/images/methods/jetonbank.webp" alt="Jeton Bank" className="h-8 object-contain" width="50" height="20" />
                        </Link>
                        <Link href={getLocalizedHref("/depot/mifinity")} onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/10 transition-all duration-200">
                          <img src="/images/methods/mifinity.webp" alt="MiFinity" className="h-8 object-contain" width="50" height="20" />
                        </Link>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible>
                      <CollapsibleTrigger className="text-lg font-medium hover:text-primary w-full text-left">
                        {t('bonus')}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="flex flex-col gap-2 mt-2 pl-4">
                        <Link href={getLocalizedHref("/meilleurs-bookmakers")} onClick={() => setMobileMenuOpen(false)} className="text-sm hover:text-primary">{t('bonusSportsBetting')}</Link>
                        <Link href={getLocalizedHref("/bonus-cashback")} onClick={() => setMobileMenuOpen(false)} className="text-sm hover:text-primary">{t('cashback')}</Link>
                        <Link href={getLocalizedHref("/bonus-sans-wager")} onClick={() => setMobileMenuOpen(false)} className="text-sm hover:text-primary">{t('bonusNoWager')}</Link>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible>
                      <CollapsibleTrigger className="text-lg font-medium hover:text-primary w-full text-left">
                        {t('toolsTips')}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="flex flex-col gap-2 mt-2 pl-4">
                        <Link href={getLocalizedHref("/calculateur-roulette")} onClick={() => setMobileMenuOpen(false)} className="text-sm hover:text-primary">{t('rouletteCalculator')}</Link>
                        <Link href={getLocalizedHref("/calculateur-cotes-sportives")} onClick={() => setMobileMenuOpen(false)} className="text-sm hover:text-primary">{t('oddsCalculator')}</Link>
                        <Link href={getLocalizedHref("/top-slots-2025")} onClick={() => setMobileMenuOpen(false)} className="text-sm hover:text-primary">{t('topSlots2025')}</Link>
                        <Link href={getLocalizedHref("/astuces-casino")} onClick={() => setMobileMenuOpen(false)} className="text-sm hover:text-primary">{t('casinoTips')}</Link>
                        <Link href={getLocalizedHref("/install")} onClick={() => setMobileMenuOpen(false)} className="text-sm hover:text-primary">{t('installApp')}</Link>
                      </CollapsibleContent>
                    </Collapsible>

                    <Link href={getLocalizedHref("/blog")} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium hover:text-primary">
                      {t('blog')}
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            ) : (
              <Button variant="ghost" size="icon" className="lg:hidden" disabled aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            )}

            {/* Desktop Menu */}
            {showHeavy && (
              <NavigationMenu ref={menuRef} className="hidden lg:flex">
                <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href={getLocalizedHref("/")} className={navigationMenuTriggerStyle()}>
                      {t('home')}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger onMouseEnter={handleTriggerEnter}>{t('allCasinos')}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[700px] gap-3 p-4 md:grid-cols-4 bg-background">
                      {filteredCasinos.map((casino) => (
                        <LogoListItem 
                          key={casino.id}
                          href={getLocalizedHref(`/${casino.name.toLowerCase().replace(/\s+/g, '')}`)} 
                          logo={casino.logo}
                          name={casino.name}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href={getLocalizedHref("/top-casinos-crypto")} className={navigationMenuTriggerStyle()}>
                      {t('topCryptoCasinos')}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href={getLocalizedHref("/casinos-sans-kyc")} className={navigationMenuTriggerStyle()}>
                      {t('casinosNoKYC')}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger onMouseEnter={handleTriggerEnter}>{t('byDeposit')}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-3 bg-background">
                      <PaymentLogoItem href={getLocalizedHref("/depot/carte")} logo="/images/methods/carte-bancaire.webp" name={t('paymentMethods.bankCard')} />
                      <PaymentLogoItem href={getLocalizedHref("/depot/crypto")} logo="/images/methods/crypto.webp" name={t('paymentMethods.crypto')} />
                      <PaymentLogoItem href={getLocalizedHref("/depot/neosurf")} logo="/images/methods/neosurf.webp" name={t('paymentMethods.neosurf')} />
                      <PaymentLogoItem href={getLocalizedHref("/depot/cashlib")} logo="/images/methods/cashlib.webp" name={t('paymentMethods.cashlib')} />
                      <PaymentLogoItem href={getLocalizedHref("/depot/paysafecard")} logo="/images/methods/paysafecard.webp" name={t('paymentMethods.paysafecard')} />
                      <PaymentLogoItem href={getLocalizedHref("/depot/virement")} logo="/images/methods/virement-bancaire.webp" name={t('paymentMethods.bankTransfer')} />
                      <PaymentLogoItem href={getLocalizedHref("/depot/skrill")} logo="/images/methods/skrill.webp" name={t('paymentMethods.skrill')} />
                      <PaymentLogoItem href={getLocalizedHref("/depot/neteller")} logo="/images/methods/neteller.webp" name={t('paymentMethods.neteller')} />
                      <PaymentLogoItem href={getLocalizedHref("/depot/jetonbank")} logo="/images/methods/jetonbank.webp" name={t('paymentMethods.jetonbank')} />
                      <PaymentLogoItem href={getLocalizedHref("/depot/mifinity")} logo="/images/methods/mifinity.webp" name={t('paymentMethods.mifinity')} />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger onMouseEnter={handleTriggerEnter}>{t('bonus')}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-background">
                      <ListItem href={getLocalizedHref("/meilleurs-bookmakers")} title={t('bonusSportsBetting')} />
                      <ListItem href={getLocalizedHref("/bonus-cashback")} title={t('cashback')} />
                      <ListItem href={getLocalizedHref("/bonus-sans-wager")} title={t('bonusNoWager')} />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger onMouseEnter={handleTriggerEnter}>{t('toolsTips')}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-background">
                      <ListItem href={getLocalizedHref("/calculateur-roulette")} title={t('rouletteCalculator')} />
                      <ListItem href={getLocalizedHref("/calculateur-cotes-sportives")} title={t('oddsCalculator')} />
                      <ListItem href={getLocalizedHref("/top-slots-2025")} title={t('topSlots2025')} />
                      <ListItem href={getLocalizedHref("/astuces-casino")} title={t('casinoTips')} />
                      <ListItem href={getLocalizedHref("/install")} title={t('installApp')} />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href={getLocalizedHref("/blog")} className={navigationMenuTriggerStyle()}>
                      {t('blog')}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const ListItem = ({ href, title }: { href: string; title: string }) => {
  const pathname = usePathname(); // Pathname complet avec locale (ex: "/de/madcasino")
  const fallbackLocale = useLocale(); // Fallback si pas de locale dans l'URL
  
  // Extraire la locale depuis l'URL (plus fiable que useLocale() qui peut être en retard)
  const pathSegments = pathname.split('/').filter(Boolean);
  const locale = (pathSegments.length > 0 && siteConfig.locales.includes(pathSegments[0] as any))
    ? pathSegments[0]
    : fallbackLocale;
  
  // S'assurer que href est valide
  if (!href || typeof href !== 'string') {
    return null;
  }
  
  // Nettoyer le href : enlever la locale si elle est présente
  let cleanHref = href;
  const { locales } = siteConfig;
  locales.forEach((loc) => {
    if (cleanHref.startsWith(`/${loc}/`) || cleanHref === `/${loc}`) {
      cleanHref = cleanHref.replace(`/${loc}`, '') || '/';
    }
  });
  if (!cleanHref.startsWith('/')) {
    cleanHref = `/${cleanHref}`;
  }
  const localizedHref = `/${locale}${cleanHref === '/' ? '' : cleanHref}`;
  
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={localizedHref || '#'}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary border border-transparent hover:border-primary/20"
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

const LogoListItem = ({ href, logo, name }: { href: string; logo: string; name: string }) => {
  const pathname = usePathname();
  // Extraire la locale depuis l'URL
  const pathSegments = pathname.split('/').filter(Boolean);
  const locale = (pathSegments.length > 0 && siteConfig.locales.includes(pathSegments[0] as any))
    ? pathSegments[0]
    : useLocale();
  const isBillyBets = name === "BillyBets";
  
  // S'assurer que href est valide
  if (!href || typeof href !== 'string') {
    return null;
  }
  
  // Nettoyer le href : enlever la locale si elle est présente
  let cleanHref = href;
  siteConfig.locales.forEach((loc) => {
    if (cleanHref.startsWith(`/${loc}/`) || cleanHref === `/${loc}`) {
      cleanHref = cleanHref.replace(`/${loc}`, '') || '/';
    }
  });
  if (!cleanHref.startsWith('/')) {
    cleanHref = `/${cleanHref}`;
  }
  const localizedHref = `/${locale}${cleanHref === '/' ? '' : cleanHref}`;
  
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={localizedHref || '#'}
          className={cn(
            "flex items-center justify-center select-none rounded-lg p-3 no-underline outline-none transition-all duration-200 hover:bg-primary/10 focus:bg-primary/10 border border-transparent hover:border-primary/20",
            isBillyBets ? "h-20" : "h-16"
          )}
        >
          <img 
            src={logo} 
            alt={name}
            className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/64x64?text=" + name.substring(0, 2);
            }}
          />
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

const PaymentLogoItem = ({ href, logo, name }: { href: string; logo: string; name: string }) => {
  const pathname = usePathname();
  // Extraire la locale depuis l'URL
  const pathSegments = pathname.split('/').filter(Boolean);
  const locale = (pathSegments.length > 0 && siteConfig.locales.includes(pathSegments[0] as any))
    ? pathSegments[0]
    : useLocale();
  
  // S'assurer que href est valide
  if (!href || typeof href !== 'string') {
    return null;
  }
  
  // Nettoyer le href : enlever la locale si elle est présente
  let cleanHref = href;
  const { locales } = siteConfig;
  locales.forEach((loc) => {
    if (cleanHref.startsWith(`/${loc}/`) || cleanHref === `/${loc}`) {
      cleanHref = cleanHref.replace(`/${loc}`, '') || '/';
    }
  });
  if (!cleanHref.startsWith('/')) {
    cleanHref = `/${cleanHref}`;
  }
  const localizedHref = `/${locale}${cleanHref === '/' ? '' : cleanHref}`;
  
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={localizedHref || '#'}
          className="flex items-center justify-center select-none rounded-lg p-3 h-16 no-underline outline-none transition-all duration-200 hover:bg-primary/10 focus:bg-primary/10 border border-transparent hover:border-primary/20"
        >
          <img 
            src={logo} 
            alt={name}
            className="max-w-full max-h-full object-contain transition-all duration-300"
            width="80"
            height="32"
          />
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default Navbar;
