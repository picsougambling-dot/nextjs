'use client';

import { useState, useMemo, useEffect, lazy, Suspense } from "react";
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { casinos } from "@/data/casinos";
import { CasinoCard } from "@/components/CasinoCard";
import { CasinoTable } from "@/components/CasinoTable";
import { FilterBar } from "@/components/FilterBar";
import { EmptyState } from "@/components/EmptyState";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Defer } from "@/components/Defer";
import { PromoPopup } from "@/components/PromoPopup";
import SEOEnrichedGuide from "@/components/SEOEnrichedGuide";
import { CounterAnimation } from "@/components/CounterAnimation";
import SEOHead from "@/components/SEOHead";

// Lazy load below-the-fold components
const Footer = lazy(() => import("@/components/Footer"));
const RelatedLinks = lazy(() => import("@/components/RelatedLinks"));

export default function IndexPage() {
  const t = useTranslations('HomePage');
  const tSEO = useTranslations('SEO.home');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  
  // Debug: vérifier que les traductions sont chargées
  console.log('Hero title:', t('hero.title'));
  console.log('Stats casinos:', t('hero.stats.casinos'));
  console.log('Locale:', locale);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [bonusFilter, setBonusFilter] = useState("all");
  const [wagerFilter, setWagerFilter] = useState("all");
  const [methodFilter, setMethodFilter] = useState("all");
  const [bookmakerFilter, setBookmakerFilter] = useState("all");
  const [providerFilter, setProviderFilter] = useState("all");

  const getInitialCount = () => {
    if (typeof window === 'undefined') return 5;
    if (window.innerWidth >= 1024) return 9;
    if (window.innerWidth >= 768) return 6;
    return 5; // mobile: 5 cartes max au chargement
  };

  const [displayedCount, setDisplayedCount] = useState(getInitialCount());

  const filteredCasinos = useMemo(() => {
    return casinos
      .filter((casino) => {
        // Search filter
        const matchesSearch = casino.name.toLowerCase().includes(searchTerm.toLowerCase());

        // Bonus filter
        const matchesBonus =
          bonusFilter === "all" || casino.bonusPercent >= parseInt(bonusFilter);

        // Wager filter
        const matchesWager =
          wagerFilter === "all" ||
          (wagerFilter === "none" && casino.wager === null) ||
          (wagerFilter !== "none" && casino.wager === parseInt(wagerFilter));

        // Payment method filter
        const matchesMethod =
          methodFilter === "all" || casino.methods.includes(methodFilter);

        // Bookmaker filter
        const matchesBookmaker =
          bookmakerFilter === "all" ||
          (bookmakerFilter === "bookmaker" && casino.isBookmaker === true) ||
          (bookmakerFilter === "casino-only" && !casino.isBookmaker);

        // Provider filter
        const matchesProvider =
          providerFilter === "all" || casino.providers?.includes(providerFilter);

        return matchesSearch && matchesBonus && matchesWager && matchesMethod && matchesBookmaker && matchesProvider;
      })
      .sort((a, b) => a.rank - b.rank); // Tri par rang
  }, [searchTerm, bonusFilter, wagerFilter, methodFilter, bookmakerFilter, providerFilter]);

  const displayedCasinos = useMemo(() => {
    return filteredCasinos.slice(0, displayedCount);
  }, [filteredCasinos, displayedCount]);

  const hasMoreCasinos = filteredCasinos.length > displayedCount;

  const loadMore = () => {
    setDisplayedCount(prev => prev + 6);
  };

  // Reset displayed count when filters change
  useEffect(() => {
    setDisplayedCount(getInitialCount());
  }, [searchTerm, bonusFilter, wagerFilter, methodFilter, bookmakerFilter]);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "WebApplication",
          "name": "Comparateur Casino GigaBonus"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 9.8,
          "bestRating": 10,
          "reviewCount": 4500
        },
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin",
          "jobTitle": "Expert Casino Senior",
          "description": "15 ans d'expérience, 500+ casinos testés"
        },
        "reviewBody": "Comparateur #1 des bonus casino 2025 avec filtres avancés par wager, méthodes de paiement et pourcentage de bonus.",
        "datePublished": "2025-11-20",
        "dateModified": "2025-11-20"
      },
      {
        "@type": "Article",
        "headline": "Comparateur de Bonus de Casinos en Ligne 2025",
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GigaBonus",
          "url": "https://gigabonus.win"
        },
        "datePublished": "2025-11-20",
        "dateModified": "2025-11-20"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Comment utiliser le comparateur GigaBonus ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Utilisez les filtres pour sélectionner vos critères (pourcentage bonus, wager, méthodes de paiement). Comparez instantanément les offres en vue cartes ou tableau. Cliquez sur 'Jouer' pour profiter du bonus."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title={tSEO('title')}
        description={tSEO('description')}
        keywords={tSEO('keywords')}
        canonical="https://gigabonus.win/"
        ogTitle={tSEO('ogTitle')}
        ogDescription={tSEO('ogDescription')}
        ogImage="https://gigabonus.win/og-image.png"
        twitterTitle={tSEO('twitterTitle')}
        twitterDescription={tSEO('twitterDescription')}
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <PromoPopup />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
        {/* H1 optimisé pour LCP + Hero Stats */}
        <header className="text-center mb-16 mt-8 relative">
          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <h1 className="lcp-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent group">
              {t('hero.title')}
              {/* Subtle golden particles on hover */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <span className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/60 rounded-full blur-sm animate-float" />
                <span className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/60 rounded-full blur-sm animate-float" style={{ animationDelay: '0.3s' }} />
                <span className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-accent/60 rounded-full blur-sm animate-float" style={{ animationDelay: '0.6s' }} />
              </span>
            </h1>
            
            {/* Stats Counter with animated icons */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-foreground/80">
              <div className="flex items-center gap-2 group/stat">
                <span className="text-2xl group-hover/stat:animate-bounce-mini transition-transform">🎰</span>
                <span className="text-base md:text-lg font-medium"><CounterAnimation end={32} duration={1500} /> {t('hero.stats.casinos')}</span>
              </div>
              <div className="flex items-center gap-2 group/stat">
                <span className="text-2xl group-hover/stat:animate-bounce-mini transition-transform" style={{ animationDelay: '0.1s' }}>💰</span>
                <span className="text-base md:text-lg font-medium"><CounterAnimation end={50} duration={1800} suffix="M€+" /> {t('hero.stats.bonus')}</span>
              </div>
              <div className="flex items-center gap-2 group/stat">
                <span className="text-2xl group-hover/stat:animate-bounce-mini transition-transform" style={{ animationDelay: '0.2s' }}>👥</span>
                <span className="text-base md:text-lg font-medium"><CounterAnimation end={2500} duration={2000} suffix="+" /> {t('hero.stats.players')}</span>
              </div>
            </div>

          </div>
        </header>

        <section aria-labelledby="intro" className="rounded-2xl p-6 md:p-8 mb-12 max-w-4xl mx-auto text-center border border-border bg-card cv-auto">
          <p id="intro" className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t('intro.description')}
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-foreground">
            <li className="flex items-center justify-center gap-2"><span className="text-primary font-semibold">✓</span>{t('intro.features.instant')}</li>
            <li className="flex items-center justify-center gap-2"><span className="text-primary font-semibold">✓</span>{t('intro.features.verified')}</li>
            <li className="flex items-center justify-center gap-2"><span className="text-primary font-semibold">✓</span>{t('intro.features.advanced')}</li>
          </ul>
        </section>

        {/* SEO Content - Intro */}
        <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary dark:text-secondary">
            {t('bestBonus.title')}
          </h2>
          <div className="space-y-4 text-foreground">
            <p>
              {t('bestBonus.intro1')}
            </p>
            <p>
              {t('bestBonus.intro2')}
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                {t('bestBonus.topBonus.title')}
              </h3>
              <p className="text-foreground">
                {t('bestBonus.topBonus.description')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                {t('bestBonus.smartFilters.title')}
              </h3>
              <p className="text-foreground">
                {t('bestBonus.smartFilters.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <div id="casinos">
        <Defer when="idle">
        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          bonusFilter={bonusFilter}
          onBonusChange={setBonusFilter}
          wagerFilter={wagerFilter}
          onWagerChange={setWagerFilter}
          methodFilter={methodFilter}
              onMethodChange={setMethodFilter}
              bookmakerFilter={bookmakerFilter}
              onBookmakerChange={setBookmakerFilter}
              providerFilter={providerFilter}
              onProviderChange={setProviderFilter}
              filteredCount={filteredCasinos.length}
            />
        </Defer>
        </div>

        {/* Tabs for Card/Table view */}
        <Defer when="idle">
          <Tabs defaultValue="cards" className="w-full">
            <TabsList className="glass-card mb-8 p-1 grid w-full max-w-md mx-auto grid-cols-2 h-12 relative">
              <TabsTrigger 
                value="cards" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300 data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20"
              >
                {t('tabs.cards')}
              </TabsTrigger>
              <TabsTrigger 
                value="table" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300 data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20"
              >
                {t('tabs.table')}
              </TabsTrigger>
            </TabsList>

            {/* Cards View */}
            <TabsContent value="cards" className="mt-0 animate-fade-in-up" style={{ perspective: '1000px' }}>
              {filteredCasinos.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedCasinos.map((casino, index) => (
                      <div 
                        key={casino.id} 
                        className="animate-card-deal"
                        style={{ 
                          animationDelay: `${index * 0.05}s`,
                          opacity: 0,
                          animationFillMode: 'forwards'
                        }}
                      >
                        <CasinoCard casino={casino} index={index} />
                      </div>
                    ))}
                  </div>
                  {hasMoreCasinos && (
                    <div className="flex justify-center mt-8">
                      <button
                        onClick={loadMore}
                        className="glass-card px-8 py-4 rounded-xl font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-95 border border-border hover:border-primary"
                      >
                        {t('buttons.loadMore')} 🎰 ({filteredCasinos.length - displayedCount} {t('buttons.remaining')})
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <EmptyState onReset={() => {
                  setSearchTerm("");
                  setBonusFilter("all");
                  setWagerFilter("all");
                  setMethodFilter("all");
                  setBookmakerFilter("all");
                }} />
              )}
            </TabsContent>

            {/* Table View */}
            <TabsContent value="table" className="mt-0 min-h-[700px] animate-fade-in-up" style={{ perspective: '1000px' }}>
              {filteredCasinos.length > 0 ? (
                <>
                  <CasinoTable casinos={displayedCasinos} />
                  {hasMoreCasinos && (
                    <div className="flex justify-center mt-8">
                      <button
                        onClick={loadMore}
                        className="glass-card px-8 py-4 rounded-xl font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
                      >
                        {t('buttons.loadMore')} 🎰 ({filteredCasinos.length - displayedCount} {t('buttons.remaining')})
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <EmptyState onReset={() => {
                  setSearchTerm("");
                  setBonusFilter("all");
                  setWagerFilter("all");
                  setMethodFilter("all");
                  setBookmakerFilter("all");
                }} />
              )}
            </TabsContent>
          </Tabs>
        </Defer>

        {/* SEO Content - Bottom */}
        <section className="glass-card rounded-2xl p-8 mt-16 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            {t('guide.title')}
          </h2>
          <div className="space-y-6 text-foreground">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                {t('guide.understandBonus.title')}
              </h3>
              <p>
                {t.rich('guide.understandBonus.p1', {
                  offers: (chunks) => <strong className="text-primary">{chunks}</strong>,
                  range: (chunks) => <strong className="text-primary">{chunks}</strong>,
                  freeSpins: (chunks) => <strong className="text-primary">{chunks}</strong>,
                })}
              </p>
              <p className="mt-2">
                {t.rich('guide.understandBonus.p2', {
                  exampleBonus: (chunks) => <strong className="text-primary">{chunks}</strong>,
                  totalBalance: (chunks) => <strong className="text-primary">{chunks}</strong>,
                })}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                {t('guide.wageringConditions.title')}
              </h3>
              <p>
                {t.rich('guide.wageringConditions.p1', {
                  times: (chunks) => <strong className="text-primary">{chunks}</strong>,
                  withdraw: (chunks) => <strong className="text-primary">{chunks}</strong>,
                  exampleWager: (chunks) => <strong className="text-primary">{chunks}</strong>,
                  totalAmount: (chunks) => <strong className="text-primary">{chunks}</strong>,
                  noWagerBonus: (chunks) => <strong className="text-primary">{chunks}</strong>,
                })}
              </p>
              <p className="mt-2">
                {t.rich('guide.wageringConditions.p2', {
                  advice: (chunks) => <strong className="text-primary">{chunks}</strong>,
                  recommendedWager: (chunks) => <strong className="text-primary">{chunks}</strong>,
                  bestValue: (chunks) => <strong className="text-primary">{chunks}</strong>,
                })}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                {t('guide.paymentMethods.title')}
              </h3>
              <p>
                {t.rich('guide.paymentMethods.p1', {
                  preferredMethods: (chunks) => <strong className="text-primary">{chunks}</strong>,
                  depositByCard: (chunks) => <Link href={`/${locale}/depot/carte`} className="text-primary underline hover:text-primary/80">{chunks}</Link>,
                  cryptocurrencies: (chunks) => <Link href={`/${locale}/depot/crypto`} className="text-primary underline hover:text-primary/80">{chunks}</Link>,
                  cashlib: (chunks) => <Link href={`/${locale}/depot/cashlib`} className="text-primary underline hover:text-primary/80">{chunks}</Link>,
                  neosurf: (chunks) => <Link href={`/${locale}/depot/neosurf`} className="text-primary underline hover:text-primary/80">{chunks}</Link>,
                  paysafecard: (chunks) => <Link href={`/${locale}/depot/paysafecard`} className="text-primary underline hover:text-primary/80">{chunks}</Link>,
                  minDeposit: (chunks) => <strong className="text-primary">{chunks}</strong>,
                })}
              </p>
              <p className="mt-2">
                {t.rich('guide.paymentMethods.p2', {
                  cryptoCasinos: (chunks) => <Link href={`/${locale}/top-casinos-crypto`} className="text-primary underline hover:text-primary/80">{chunks}</Link>,
                  fastAnonymousTransactions: (chunks) => <strong className="text-primary">{chunks}</strong>,
                  prepaidCards: (chunks) => <strong className="text-primary">{chunks}</strong>,
                })}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                {t('guide.securityReliability.title')}
              </h3>
              <p>
                {t.rich('guide.securityReliability.p1', {
                  brand: (chunks) => <strong className="text-primary">{chunks}</strong>,
                  reliabilityReputation: (chunks) => <strong className="text-primary">{chunks}</strong>,
                  fairGames: (chunks) => <strong className="text-primary">{chunks}</strong>,
                  secureTransactions: (chunks) => <strong className="text-primary">{chunks}</strong>,
                  responsiveSupport: (chunks) => <strong className="text-primary">{chunks}</strong>,
                  playResponsibly: (chunks) => <strong className="text-primary">{chunks}</strong>,
                })}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                {t('guide.bonusTypes.title')}
              </h3>
              <p>
                {t.rich('guide.bonusTypes.welcomeBonus', {
                  welcomeBonusTitle: (chunks) => <strong className="text-primary">{chunks}</strong>,
                })}<br/>
                {t.rich('guide.bonusTypes.freeSpins', {
                  freeSpinsTitle: (chunks) => <strong className="text-primary">{chunks}</strong>,
                })}<br/>
                {t.rich('guide.bonusTypes.noDepositBonus', {
                  noDepositBonusTitle: (chunks) => <strong className="text-primary">{chunks}</strong>,
                })}<br/>
                {t.rich('guide.bonusTypes.reloadBonus', {
                  reloadBonusTitle: (chunks) => <strong className="text-primary">{chunks}</strong>,
                })}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                {t('guide.faq.title')}
              </h3>
              <div className="space-y-4 mt-4">
                <div>
                  <p className="font-semibold text-primary">{t('guide.faq.q1.question')}</p>
                  <p className="mt-1">{t.rich('guide.faq.q1.answer', {
                    wageringConditions: (chunks) => <strong className="text-primary">{chunks}</strong>,
                  })}</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">{t('guide.faq.q2.question')}</p>
                  <p className="mt-1">{t.rich('guide.faq.q2.answer', {
                    wageringConditions: (chunks) => <strong className="text-primary">{chunks}</strong>,
                  })}</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">{t('guide.faq.q3.question')}</p>
                  <p className="mt-1">{t.rich('guide.faq.q3.answer', {
                    cryptoCasinos: (chunks) => <strong className="text-primary">{chunks}</strong>,
                    verifiedSecure: (chunks) => <strong className="text-primary">{chunks}</strong>,
                  })}</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">{t('guide.faq.q4.question')}</p>
                  <p className="mt-1">{t.rich('guide.faq.q4.answer', {
                    minDeposit: (chunks) => <strong className="text-primary">{chunks}</strong>,
                  })}</p>
                </div>
              </div>

              {/* Derniers avis casinos – maillage discret */}
              <div className="mt-6 text-xs text-muted-foreground flex flex-wrap justify-center gap-x-3 gap-y-1">
                <span className="font-semibold text-primary">{t('guide.latestReviews')}</span>
                <Link href={`/${locale}/blog/avis-playregal-2025`} className="hover:text-primary transition-colors">PlayRegal</Link>
                <span>·</span>
                <Link href={`/${locale}/blog/avis-magicalspin-2025`} className="hover:text-primary transition-colors">MagicalSpin</Link>
                <span>·</span>
                <Link href={`/${locale}/blog/avis-vegasplus-2025`} className="hover:text-primary transition-colors">VegasPlus</Link>
                <span>·</span>
                <Link href={`/${locale}/blog/avis-uniquecasino-2025`} className="hover:text-primary transition-colors">UniqueCasino</Link>
                <span>·</span>
                <Link href={`/${locale}/blog/avis-cazinostars-2025`} className="hover:text-primary transition-colors">CazinoStars</Link>
                <span>·</span>
                <Link href={`/${locale}/blog/avis-atlantisslots-2025`} className="hover:text-primary transition-colors">AtlantisSlots</Link>
                <span>·</span>
                <Link href={`/${locale}/blog/avis-casinointense-2025`} className="hover:text-primary transition-colors">CasinoIntense</Link>
                <span>·</span>
                <Link href={`/${locale}/blog/avis-bonrush-2025`} className="hover:text-primary transition-colors">BonRush</Link>
                <span>·</span>
                <Link href={`/${locale}/blog/avis-betify-2025`} className="hover:text-primary transition-colors">Betify</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section Sécurité et Licences */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-6">{t('securitySection.title')}</h2>
          <div className="space-y-6 text-foreground">
            <p className="leading-relaxed text-center max-w-3xl mx-auto">
              {t.rich('securitySection.intro', {
                brand: (chunks) => <strong className="text-primary">{chunks}</strong>,
                securityStandards: (chunks) => <strong className="text-primary">{chunks}</strong>,
              })}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('securitySection.ssl.title')}</h3>
                <p className="text-sm">{t('securitySection.ssl.description')}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('securitySection.licenses.title')}</h3>
                <p className="text-sm">{t('securitySection.licenses.description')}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎲</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('securitySection.fairGames.title')}</h3>
                <p className="text-sm">{t('securitySection.fairGames.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Comment Choisir */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-6">{t('howToUseSection.title')}</h2>
          <div className="space-y-6 text-foreground">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
              <div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('howToUseSection.step1.title')}</h3>
                <p className="leading-relaxed">
                  {t.rich('howToUseSection.step1.description', {
                    bonusPercent: (chunks) => <strong>{chunks}</strong>,
                    wageringConditions: (chunks) => <strong>{chunks}</strong>,
                    paymentMethods: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
              <div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('howToUseSection.step2.title')}</h3>
                <p className="leading-relaxed">
                  {t.rich('howToUseSection.step2.description', {
                    cardsView: (chunks) => <strong>{chunks}</strong>,
                    tableView: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
              <div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('howToUseSection.step3.title')}</h3>
                <p className="leading-relaxed">
                  {t.rich('howToUseSection.step3.description', {
                    playButton: (chunks) => <strong>"{chunks}"</strong>,
                    welcomeBonus: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Types de Jeux */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-6">{t('gameTypesSection.title')}</h2>
          <div className="space-y-6 text-foreground">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="p-6 border border-border rounded-xl hover:border-primary transition-colors">
                <div className="text-4xl mb-3">🎰</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('gameTypesSection.slots.title')}</h3>
                <p className="text-sm">{t('gameTypesSection.slots.description')}</p>
              </div>
              <div className="p-6 border border-border rounded-xl hover:border-primary transition-colors">
                <div className="text-4xl mb-3">🎥</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('gameTypesSection.liveCasino.title')}</h3>
                <p className="text-sm">{t('gameTypesSection.liveCasino.description')}</p>
              </div>
              <div className="p-6 border border-border rounded-xl hover:border-primary transition-colors">
                <div className="text-4xl mb-3">🃏</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('gameTypesSection.tableGames.title')}</h3>
                <p className="text-sm">{t('gameTypesSection.tableGames.description')}</p>
              </div>
              <div className="p-6 border border-border rounded-xl hover:border-primary transition-colors">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('gameTypesSection.jackpots.title')}</h3>
                <p className="text-sm">{t('gameTypesSection.jackpots.description')}</p>
              </div>
              <div className="p-6 border border-border rounded-xl hover:border-primary transition-colors">
                <div className="text-4xl mb-3">🎲</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('gameTypesSection.miniGames.title')}</h3>
                <p className="text-sm">{t('gameTypesSection.miniGames.description')}</p>
              </div>
              <div className="p-6 border border-border rounded-xl hover:border-primary transition-colors">
                <div className="text-4xl mb-3">⚽</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('gameTypesSection.sportsBetting.title')}</h3>
                <p className="text-sm">{t('gameTypesSection.sportsBetting.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Avantages Casino en Ligne */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-6">{t('whyPlayOnline.title')}</h2>
          <div className="space-y-6 text-foreground">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🏠</span>
                  <div>
                    <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('whyPlayOnline.comfort.title')}</h3>
                    <p className="text-sm leading-relaxed">{t('whyPlayOnline.comfort.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🎁</span>
                  <div>
                    <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('whyPlayOnline.bonuses.title')}</h3>
                    <p className="text-sm leading-relaxed">{t('whyPlayOnline.bonuses.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🎮</span>
                  <div>
                    <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('whyPlayOnline.variety.title')}</h3>
                    <p className="text-sm leading-relaxed">{t('whyPlayOnline.variety.description')}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">💳</span>
                  <div>
                    <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('whyPlayOnline.payments.title')}</h3>
                    <p className="text-sm leading-relaxed">{t('whyPlayOnline.payments.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🔒</span>
                  <div>
                    <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('whyPlayOnline.security.title')}</h3>
                    <p className="text-sm leading-relaxed">{t('whyPlayOnline.security.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">📱</span>
                  <div>
                    <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('whyPlayOnline.mobile.title')}</h3>
                    <p className="text-sm leading-relaxed">{t('whyPlayOnline.mobile.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Tendances 2025 */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-6">{t('trends2025.title')}</h2>
          <div className="space-y-6 text-foreground">
            <p className="leading-relaxed text-center max-w-3xl mx-auto">{t('trends2025.intro')}</p>
            <div className="space-y-4 mt-8">
              <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 rounded-r-xl">
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('trends2025.crypto.title')}</h3>
                <p className="text-sm leading-relaxed">{t('trends2025.crypto.description')}</p>
              </div>
              <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 rounded-r-xl">
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('trends2025.noWager.title')}</h3>
                <p className="text-sm leading-relaxed">{t('trends2025.noWager.description')}</p>
              </div>
              <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 rounded-r-xl">
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('trends2025.noKYC.title')}</h3>
                <p className="text-sm leading-relaxed">{t('trends2025.noKYC.description')}</p>
              </div>
              <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 rounded-r-xl">
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('trends2025.gamification.title')}</h3>
                <p className="text-sm leading-relaxed">{t('trends2025.gamification.description')}</p>
              </div>
              <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 rounded-r-xl">
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('trends2025.cashback.title')}</h3>
                <p className="text-sm leading-relaxed">{t('trends2025.cashback.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Conseils Experts */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-6">{t('expertTips.title')}</h2>
          <div className="space-y-6 text-foreground">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-primary/5 rounded-xl">
                <h3 className="font-semibold text-lg text-primary mb-3 flex items-center gap-2">{t('expertTips.readTerms.title')}</h3>
                <p className="text-sm leading-relaxed">{t('expertTips.readTerms.description')}</p>
              </div>
              <div className="p-6 bg-primary/5 rounded-xl">
                <h3 className="font-semibold text-lg text-primary mb-3 flex items-center gap-2">{t('expertTips.chooseGames.title')}</h3>
                <p className="text-sm leading-relaxed">{t('expertTips.chooseGames.description')}</p>
              </div>
              <div className="p-6 bg-primary/5 rounded-xl">
                <h3 className="font-semibold text-lg text-primary mb-3 flex items-center gap-2">{t('expertTips.manageBankroll.title')}</h3>
                <p className="text-sm leading-relaxed">{t('expertTips.manageBankroll.description')}</p>
              </div>
              <div className="p-6 bg-primary/5 rounded-xl">
                <h3 className="font-semibold text-lg text-primary mb-3 flex items-center gap-2">{t('expertTips.usePromotions.title')}</h3>
                <p className="text-sm leading-relaxed">{t('expertTips.usePromotions.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Pourquoi GigaBonus */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-6">{t('whyChooseUs.title')}</h2>
          <div className="space-y-6 text-foreground">
            <p className="leading-relaxed text-center max-w-3xl mx-auto text-lg">{t('whyChooseUs.intro')}</p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('whyChooseUs.exhaustive.title')}</h3>
                <p className="text-sm">{t('whyChooseUs.exhaustive.description')}</p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('whyChooseUs.objective.title')}</h3>
                <p className="text-sm">{t('whyChooseUs.objective.description')}</p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('whyChooseUs.filters.title')}</h3>
                <p className="text-sm">{t('whyChooseUs.filters.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Témoignages */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-6">{t('testimonials.title')}</h2>
          <div className="space-y-6">
            <p className="text-center text-foreground max-w-3xl mx-auto mb-8">{t('testimonials.intro')}</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                <p className="text-sm italic text-foreground mb-4">"{t('testimonials.user1.quote')}"</p>
                <p className="text-sm font-semibold text-primary">— {t('testimonials.user1.author')}</p>
              </div>
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                <p className="text-sm italic text-foreground mb-4">"{t('testimonials.user2.quote')}"</p>
                <p className="text-sm font-semibold text-primary">— {t('testimonials.user2.author')}</p>
              </div>
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                <p className="text-sm italic text-foreground mb-4">"{t('testimonials.user3.quote')}"</p>
                <p className="text-sm font-semibold text-primary">— {t('testimonials.user3.author')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Statistiques */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">{t('stats.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">{t('stats.casinos.value')}</div>
              <p className="text-sm text-foreground">{t('stats.casinos.label')}</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">{t('stats.bonus.value')}</div>
              <p className="text-sm text-foreground">{t('stats.bonus.label')}</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">{t('stats.players.value')}</div>
              <p className="text-sm text-foreground">{t('stats.players.label')}</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">{t('stats.updates.value')}</div>
              <p className="text-sm text-foreground">{t('stats.updates.label')}</p>
            </div>
          </div>
        </section>

        {/* Section Jeu Responsable Détaillée */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-6">{t('responsibleGaming.title')}</h2>
          <div className="space-y-6 text-foreground">
            <p className="leading-relaxed text-center max-w-3xl mx-auto">{t('responsibleGaming.intro')}</p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 border border-primary/30 rounded-xl">
                <h3 className="font-semibold text-lg text-primary mb-3">{t('responsibleGaming.healthyTips.title')}</h3>
                <ul className="space-y-2 text-sm">
                  <li>• {t('responsibleGaming.healthyTips.tip1')}</li>
                  <li>• {t('responsibleGaming.healthyTips.tip2')}</li>
                  <li>• {t('responsibleGaming.healthyTips.tip3')}</li>
                  <li>• {t('responsibleGaming.healthyTips.tip4')}</li>
                  <li>• {t('responsibleGaming.healthyTips.tip5')}</li>
                </ul>
              </div>
              <div className="p-6 border border-primary/30 rounded-xl">
                <h3 className="font-semibold text-lg text-primary mb-3">{t('responsibleGaming.resources.title')}</h3>
                <p className="text-sm mb-3">{t('responsibleGaming.resources.intro')}</p>
                <ul className="space-y-2 text-sm">
                  <li>• {t('responsibleGaming.resources.resource1')}</li>
                  <li>• {t('responsibleGaming.resources.resource2')}</li>
                  <li>• {t('responsibleGaming.resources.resource3')}</li>
                  <li>• {t('responsibleGaming.resources.resource4')}</li>
                </ul>
              </div>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 mt-6">
              <p className="text-center text-sm font-semibold">{t('responsibleGaming.warning')}</p>
            </div>
          </div>
        </section>

        {/* Section FAQ Enrichie pour Featured Snippets */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">{t('faqCasino.title')}</h2>
          <div className="space-y-6 text-foreground">
            <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 rounded-r-xl">
              <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('faqCasino.q1.question')}</h3>
              <p className="text-sm leading-relaxed">{t('faqCasino.q1.answer')}</p>
            </div>
            <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 rounded-r-xl">
              <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('faqCasino.q2.question')}</h3>
              <p className="text-sm leading-relaxed">{t('faqCasino.q2.answer')}</p>
            </div>
            <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 rounded-r-xl">
              <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('faqCasino.q3.question')}</h3>
              <p className="text-sm leading-relaxed">{t('faqCasino.q3.answer')}</p>
            </div>
            <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 rounded-r-xl">
              <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('faqCasino.q4.question')}</h3>
              <p className="text-sm leading-relaxed">{t('faqCasino.q4.answer')}</p>
            </div>
            <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 rounded-r-xl">
              <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('faqCasino.q5.question')}</h3>
              <p className="text-sm leading-relaxed">{t('faqCasino.q5.answer')}</p>
            </div>
            <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 rounded-r-xl">
              <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">{t('faqCasino.q6.question')}</h3>
              <p className="text-sm leading-relaxed">{t('faqCasino.q6.answer')}</p>
            </div>
          </div>
        </section>

        {/* Casino Partners Showcase - Déplacé en bas */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary dark:text-gradient">
            {t('partnerCasinos.title')}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
            {casinos.slice(0, 7).map((casino) => (
              <a
                key={casino.id}
                href={casino.playUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer ${
                  casino.name === "BillyBets" ? "w-[90px] h-[90px]" : "w-20 h-20"
                }`}
              >
                <img
                  src={casino.logo}
                  alt={casino.name}
                  className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/64x64?text=" + casino.name.substring(0, 2);
                  }}
                />
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🔒</span>
              <div>
                <p className="font-semibold text-primary">{t('partnerCasinos.securePayments.title')}</p>
                <p className="text-xs">{t('partnerCasinos.securePayments.subtitle')}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">⚡</span>
              <div>
                <p className="font-semibold text-primary">{t('partnerCasinos.fastWithdrawals.title')}</p>
                <p className="text-xs">{t('partnerCasinos.fastWithdrawals.subtitle')}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🎮</span>
              <div>
                <p className="font-semibold text-primary">{t('partnerCasinos.manyGames.title')}</p>
                <p className="text-xs">{t('partnerCasinos.manyGames.subtitle')}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">💬</span>
              <div>
                <p className="font-semibold text-primary">{t('partnerCasinos.support.title')}</p>
                <p className="text-xs">{t('partnerCasinos.support.subtitle')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links Section */}
        <Defer when="idle">
          <Suspense fallback={<div className="h-40" />}>
            <div className="mt-12">
              <RelatedLinks
                title={t('popularGuides.title')}
                links={[
                  {
                    title: t('popularGuides.noWagerBonus.title'),
                    description: t('popularGuides.noWagerBonus.description'),
                    href: "/bonus-sans-wager"
                  },
                  {
                    title: t('popularGuides.cashbackBonus.title'),
                    description: t('popularGuides.cashbackBonus.description'),
                    href: "/bonus-cashback"
                  },
                  {
                    title: t('popularGuides.noKycCasinos.title'),
                    description: t('popularGuides.noKycCasinos.description'),
                    href: "/casinos-sans-kyc"
                  },
                  {
                    title: t('popularGuides.cryptoCasinos.title'),
                    description: t('popularGuides.cryptoCasinos.description'),
                    href: "/top-casinos-crypto"
                  },
                  {
                    title: t('popularGuides.topSlots.title'),
                    description: t('popularGuides.topSlots.description'),
                    href: "/top-slots-2025"
                  },
                  {
                    title: t('popularGuides.casinoTips.title'),
                    description: t('popularGuides.casinoTips.description'),
                    href: "/astuces-casino"
                  }
                ]}
               />
            </div>
          </Suspense>
        </Defer>
        </div>
      </div>
      
      <SEOEnrichedGuide 
        locale={locale}
        topCasinos={[
          {
            name: casinos[0].name,
            slug: casinos[0].name.toLowerCase().replace(/\s+/g, '-'),
            bonus: casinos[0].bonusText,
            rating: 9.8
          },
          {
            name: casinos[1].name,
            slug: casinos[1].name.toLowerCase().replace(/\s+/g, '-'),
            bonus: casinos[1].bonusText,
            rating: 9.5
          },
          {
            name: casinos[2].name,
            slug: casinos[2].name.toLowerCase().replace(/\s+/g, '-'),
            bonus: casinos[2].bonusText,
            rating: 9.3
          }
        ]}
      />
      
      <Defer when="idle">
        <Suspense fallback={<div className="h-96" />}>
          <Footer />
        </Suspense>
      </Defer>
    </>
  );
};

