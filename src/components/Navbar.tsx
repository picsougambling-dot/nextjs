'use client';

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
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

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeavy, setShowHeavy] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
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
          <Link href="/" className="flex items-center gap-2 group">
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
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-4 mt-6">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium hover:text-primary">
                      Accueil
                    </Link>
                    
                    <Collapsible>
                      <CollapsibleTrigger className="text-lg font-medium hover:text-primary w-full text-left">
                        Tous nos casinos
                      </CollapsibleTrigger>
                      <CollapsibleContent className="grid grid-cols-3 gap-3 mt-2 p-2">
                        {casinos.filter(casino => {
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
                              href={casinoHref || '#'}
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

                    <Link href="/top-casinos-crypto" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium hover:text-primary">
                      Top Casinos Crypto
                    </Link>

                    <Link href="/casinos-sans-kyc" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium hover:text-primary">
                      Casinos Sans KYC
                    </Link>

                    <Collapsible>
                      <CollapsibleTrigger className="text-lg font-medium hover:text-primary w-full text-left">
                        Par dépôt
                      </CollapsibleTrigger>
                      <CollapsibleContent className="grid grid-cols-2 gap-3 mt-2 p-2">
                        <Link href="/depot/carte" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/10 transition-all duration-200">
                          <img src="/images/methods/carte-bancaire.webp" alt="Carte Bancaire" className="h-8 object-contain" width="50" height="20" />
                        </Link>
                        <Link href="/depot/crypto" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/10 transition-all duration-200">
                          <img src="/images/methods/crypto.webp" alt="Crypto-monnaies" className="h-8 object-contain" width="50" height="20" />
                        </Link>
                        <Link href="/depot/neosurf" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/10 transition-all duration-200">
                          <img src="/images/methods/neosurf.webp" alt="Neosurf" className="h-8 object-contain" width="50" height="20" />
                        </Link>
                        <Link href="/depot/cashlib" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/10 transition-all duration-200">
                          <img src="/images/methods/cashlib.webp" alt="Cashlib" className="h-8 object-contain" width="50" height="20" />
                        </Link>
                        <Link href="/depot/paysafecard" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/10 transition-all duration-200">
                          <img src="/images/methods/paysafecard.webp" alt="Paysafecard" className="h-8 object-contain" width="50" height="20" />
                        </Link>
                        <Link href="/depot/virement" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/10 transition-all duration-200">
                          <img src="/images/methods/virement-bancaire.webp" alt="Virement Bancaire" className="h-8 object-contain" width="50" height="20" />
                        </Link>
                        <Link href="/depot/skrill" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/10 transition-all duration-200">
                          <img src="/images/methods/skrill.webp" alt="Skrill" className="h-8 object-contain" width="50" height="20" />
                        </Link>
                        <Link href="/depot/neteller" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/10 transition-all duration-200">
                          <img src="/images/methods/neteller.webp" alt="Neteller" className="h-8 object-contain" width="50" height="20" />
                        </Link>
                        <Link href="/depot/jetonbank" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/10 transition-all duration-200">
                          <img src="/images/methods/jetonbank.webp" alt="Jeton Bank" className="h-8 object-contain" width="50" height="20" />
                        </Link>
                        <Link href="/depot/mifinity" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center p-2 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/10 transition-all duration-200">
                          <img src="/images/methods/mifinity.webp" alt="MiFinity" className="h-8 object-contain" width="50" height="20" />
                        </Link>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible>
                      <CollapsibleTrigger className="text-lg font-medium hover:text-primary w-full text-left">
                        Bonus
                      </CollapsibleTrigger>
                      <CollapsibleContent className="flex flex-col gap-2 mt-2 pl-4">
                        <Link href="/meilleurs-bookmakers" onClick={() => setMobileMenuOpen(false)} className="text-sm hover:text-primary">Bonus Paris Sportifs</Link>
                        <Link href="/bonus-cashback" onClick={() => setMobileMenuOpen(false)} className="text-sm hover:text-primary">Cashback</Link>
                        <Link href="/bonus-sans-wager" onClick={() => setMobileMenuOpen(false)} className="text-sm hover:text-primary">Bonus Sans Wager</Link>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible>
                      <CollapsibleTrigger className="text-lg font-medium hover:text-primary w-full text-left">
                        Outils & Astuces
                      </CollapsibleTrigger>
                      <CollapsibleContent className="flex flex-col gap-2 mt-2 pl-4">
                        <Link href="/calculateur-roulette" onClick={() => setMobileMenuOpen(false)} className="text-sm hover:text-primary">Calculateur Roulette</Link>
                        <Link href="/calculateur-cotes-sportives" onClick={() => setMobileMenuOpen(false)} className="text-sm hover:text-primary">Calculateur Cotes Sportives</Link>
                        <Link href="/top-slots-2025" onClick={() => setMobileMenuOpen(false)} className="text-sm hover:text-primary">Top Slots 2025</Link>
                        <Link href="/astuces-casino" onClick={() => setMobileMenuOpen(false)} className="text-sm hover:text-primary">Astuces Casino</Link>
                        <Link href="/install" onClick={() => setMobileMenuOpen(false)} className="text-sm hover:text-primary">Installer l'App</Link>
                      </CollapsibleContent>
                    </Collapsible>

                    <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium hover:text-primary">
                      Blog
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
                    <Link href="/" className={navigationMenuTriggerStyle()}>
                      Accueil
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger onMouseEnter={handleTriggerEnter}>Tous nos casinos</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[700px] gap-3 p-4 md:grid-cols-4 bg-background">
                      {casinos.filter(casino => casino.name).map((casino) => (
                        <LogoListItem 
                          key={casino.id}
                          href={`/${casino.name.toLowerCase().replace(/\s+/g, '')}`} 
                          logo={casino.logo}
                          name={casino.name}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/top-casinos-crypto" className={navigationMenuTriggerStyle()}>
                      Top Casinos Crypto
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/casinos-sans-kyc" className={navigationMenuTriggerStyle()}>
                      Casinos Sans KYC
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger onMouseEnter={handleTriggerEnter}>Par dépôt</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-3 bg-background">
                      <PaymentLogoItem href="/depot/carte" logo="/images/methods/carte-bancaire.webp" name="Carte Bancaire" />
                      <PaymentLogoItem href="/depot/crypto" logo="/images/methods/crypto.webp" name="Crypto-monnaies" />
                      <PaymentLogoItem href="/depot/neosurf" logo="/images/methods/neosurf.webp" name="Neosurf" />
                      <PaymentLogoItem href="/depot/cashlib" logo="/images/methods/cashlib.webp" name="Cashlib" />
                      <PaymentLogoItem href="/depot/paysafecard" logo="/images/methods/paysafecard.webp" name="Paysafecard" />
                      <PaymentLogoItem href="/depot/virement" logo="/images/methods/virement-bancaire.webp" name="Virement Bancaire" />
                      <PaymentLogoItem href="/depot/skrill" logo="/images/methods/skrill.webp" name="Skrill" />
                      <PaymentLogoItem href="/depot/neteller" logo="/images/methods/neteller.webp" name="Neteller" />
                      <PaymentLogoItem href="/depot/jetonbank" logo="/images/methods/jetonbank.webp" name="Jeton Bank" />
                      <PaymentLogoItem href="/depot/mifinity" logo="/images/methods/mifinity.webp" name="MiFinity" />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger onMouseEnter={handleTriggerEnter}>Bonus</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-background">
                      <ListItem href="/meilleurs-bookmakers" title="Bonus Paris Sportifs" />
                      <ListItem href="/bonus-cashback" title="Cashback" />
                      <ListItem href="/bonus-sans-wager" title="Bonus Sans Wager" />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger onMouseEnter={handleTriggerEnter}>Outils & Astuces</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-background">
                      <ListItem href="/calculateur-roulette" title="Calculateur Roulette" />
                      <ListItem href="/calculateur-cotes-sportives" title="Calculateur Cotes Sportives" />
                      <ListItem href="/top-slots-2025" title="Top Slots 2025" />
                      <ListItem href="/astuces-casino" title="Astuces Casino" />
                      <ListItem href="/install" title="Installer l'App" />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/blog" className={navigationMenuTriggerStyle()}>
                      Blog
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
  // S'assurer que href est valide
  if (!href || typeof href !== 'string') {
    return null;
  }
  
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || '#'}
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
  const isBillyBets = name === "BillyBets";
  
  // S'assurer que href est valide
  if (!href || typeof href !== 'string') {
    return null;
  }
  
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || '#'}
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
  // S'assurer que href est valide
  if (!href || typeof href !== 'string') {
    return null;
  }
  
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || '#'}
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
