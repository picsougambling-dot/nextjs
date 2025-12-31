'use client';


import { useState, useMemo, useEffect, lazy, Suspense } from "react";
import { Link } from '@/i18n/navigation';
import { useLocale, useTranslations, useMessages } from 'next-intl';
import { getTranslatedCanonical } from '@/lib/get-translated-canonical';
import { casinos } from "@/data/casinos";
import { CasinoCard } from "@/components/CasinoCard";
import { CasinoTable } from "@/components/CasinoTable";
import { FilterBar } from "@/components/FilterBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOEnrichedGuide from "@/components/SEOEnrichedGuide";
import SEOHead from "@/components/SEOHead";
import { Defer } from "@/components/Defer";
import { useUserCountry } from "@/hooks/useUserCountry";

// Lazy load below-the-fold components
const Footer = lazy(() => import("@/components/Footer"));
const RelatedLinks = lazy(() => import("@/components/RelatedLinks"));

export default function MeilleursBookmakersPage() {
  const locale = useLocale();
  const t = useTranslations('GuidePages.meilleursBookmakers');
  const messages = useMessages();

  // Helper function to get raw HTML from translations
  const getRawTranslation = (key: string): string => {
    const keys = key.split('.');
    let value: any = messages;
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    return typeof value === 'string' ? value : key;
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [bonusFilter, setBonusFilter] = useState("all");
  const [wagerFilter, setWagerFilter] = useState("all");
  const [methodFilter, setMethodFilter] = useState("all");

  // Récupérer le pays de l'utilisateur pour filtrer les casinos
  const { countryCode: userCountry } = useUserCountry();

  // Filtrer uniquement les bookmakers
  const bookmakerCasinos = useMemo(() => {
    return casinos.filter(casino => !casino.hidden && casino.isBookmaker === true).sort((a, b) => a.rank - b.rank);
  }, []);

  const getInitialCount = () => {
    if (typeof window === 'undefined') return 5;
    if (window.innerWidth >= 1024) return 9;
    if (window.innerWidth >= 768) return 6;
    return 5;
  };

  const [displayedCount, setDisplayedCount] = useState(getInitialCount());

  

  const filteredCasinos = useMemo(() => {
    return bookmakerCasinos.filter((casino) => {
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

      // Country filter
      const matchesCountry =
        !!userCountry &&
        (
          !casino.availableCountries ||
          casino.availableCountries.length === 0 ||
          casino.availableCountries.includes(userCountry)
        );

      return matchesSearch && matchesBonus && matchesWager && matchesMethod && matchesCountry;
    });
  }, [searchTerm, bonusFilter, wagerFilter, methodFilter, bookmakerCasinos, userCountry]);

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
  }, [searchTerm, bonusFilter, wagerFilter, methodFilter]);

  
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": t('schema.headline'),
        "description": t('schema.description'),
        "image": "https://gigabonus.win/gigabonus-logo.webp",
        "datePublished": "2025-01-15T10:00:00+01:00",
        "dateModified": "2025-11-28T00:51:35.128Z",
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GigaBonus",
          "logo": {
            "@type": "ImageObject",
            "url": "https://gigabonus.win/gigabonus-logo.webp"
          }
        }
      }
    ]
  };

  return (
    <>
      <SEOHead
        locale={locale}
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords={t('seoKeywords')}
        canonical={getTranslatedCanonical('/meilleurs-bookmakers', locale)}
        ogTitle={t('ogTitle')}
        ogDescription={t('ogDescription')}
        ogImage="https://gigabonus.win/gigabonus-logo.webp"
        twitterTitle={t('twitterTitle')}
        twitterDescription={t('twitterDescription')}
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16 mt-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="lcp-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-primary dark:text-gradient" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.meilleursBookmakers.intro.h1') }} />
              </h1>
            </div>
          </header>

          <section aria-labelledby="intro" className="rounded-2xl p-6 md:p-8 mb-12 max-w-4xl mx-auto text-center border border-border bg-card">
            <p id="intro" className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.meilleursBookmakers.intro.description') }} />
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-foreground">
              <li className="flex items-center justify-center gap-2"><span className="text-primary font-semibold">⚽</span><span dangerouslySetInnerHTML={{ __html: t('intro.features.sports') }} /></li>
              <li className="flex items-center justify-center gap-2"><span className="text-primary font-semibold">📊</span><span dangerouslySetInnerHTML={{ __html: t('intro.features.odds') }} /></li>
              <li className="flex items-center justify-center gap-2"><span className="text-primary font-semibold">🎁</span><span dangerouslySetInnerHTML={{ __html: t('intro.features.bonus') }} /></li>
            </ul>
          </section>

          {/* SEO Content - Intro */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-primary dark:text-secondary text-center">
              {t('section1.title')}
            </h2>
            <div className="space-y-4 text-foreground">
              <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.meilleursBookmakers.section1.p1') }} />
              <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.meilleursBookmakers.section1.p2') }} />
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                  {t('section1.hybrid.title')}
                </h3>
                <p className="text-foreground" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.meilleursBookmakers.section1.hybrid.text') }} />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                  {t('section1.bonus.title')}
                </h3>
                <p className="text-foreground" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.meilleursBookmakers.section1.bonus.text') }} />
              </div>
            </div>
          </section>

          {/* Filters */}
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
            />
          </Defer>

          {/* Results count */}
          <div className="mb-6 text-center h-8 flex items-center justify-center">
            <p className="text-muted-foreground" dangerouslySetInnerHTML={{ 
              __html: t('filters.results', { 
                count: filteredCasinos.length.toString(), 
                plural: filteredCasinos.length > 1 ? 's' : '' 
              }) 
            }} />
          </div>

          {/* Tabs for Card/Table view */}
          <Defer when="idle">
            <Tabs defaultValue="cards" className="w-full">
              <TabsList className="glass-card mb-8 p-1 grid w-full max-w-md mx-auto grid-cols-2 h-12">
                <TabsTrigger value="cards" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  {t('filters.viewCards')}
                </TabsTrigger>
                <TabsTrigger value="table" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  {t('filters.viewTable')}
                </TabsTrigger>
              </TabsList>

              {/* Cards View */}
              <TabsContent value="cards" className="mt-0">
                {filteredCasinos.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {displayedCasinos.map((casino) => (
                        <CasinoCard key={casino.id} casino={casino} />
                      ))}
                    </div>
                    {hasMoreCasinos && (
                      <div className="flex justify-center mt-8">
                        <button
                          onClick={loadMore}
                          className="glass-card px-8 py-4 rounded-xl font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
                        >
                          {t('filters.loadMore', { remaining: filteredCasinos.length - displayedCount })}
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="glass-card rounded-2xl p-12 text-center">
                    <p className="text-muted-foreground text-lg">
                      {t('filters.noResults')}
                    </p>
                  </div>
                )}
              </TabsContent>

              {/* Table View */}
              <TabsContent value="table" className="mt-0 min-h-[700px]">
                {filteredCasinos.length > 0 ? (
                  <>
                    <CasinoTable casinos={displayedCasinos} />
                    {hasMoreCasinos && (
                      <div className="flex justify-center mt-8">
                        <button
                          onClick={loadMore}
                          className="glass-card px-8 py-4 rounded-xl font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
                        >
                          {t('filters.loadMore', { remaining: filteredCasinos.length - displayedCount })}
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="glass-card rounded-2xl p-12 text-center">
                    <p className="text-muted-foreground text-lg">
                      {t('filters.noResults')}
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </Defer>

          {/* SEO Content - Guide */}
          <section className="glass-card rounded-2xl p-8 mt-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground text-center">
              {t('guide.title')}
            </h2>
            <div className="space-y-6 text-foreground">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                  {t('guide.odds.title')}
                </h3>
                <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.meilleursBookmakers.guide.odds.text') }} />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                  {t('guide.live.title')}
                </h3>
                <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.meilleursBookmakers.guide.live.text') }} />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                  {t('guide.bonusTypes.title')}
                </h3>
                <p>
                  <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.meilleursBookmakers.guide.bonusTypes.welcome') }} /><br/>
                  <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.meilleursBookmakers.guide.bonusTypes.freebets') }} /><br/>
                  <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.meilleursBookmakers.guide.bonusTypes.cashback') }} /><br/>
                  <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.meilleursBookmakers.guide.bonusTypes.combined') }} />
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                  {t('guide.sports.title')}
                </h3>
                <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.meilleursBookmakers.guide.sports.text') }} />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                  {t('guide.payments.title')}
                </h3>
                <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.meilleursBookmakers.guide.payments.text') }} />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                  {t('guide.safety.title')}
                </h3>
                <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.meilleursBookmakers.guide.safety.text') }} />
              </div>
            </div>
          </section>

          {/* Related Links */}
          <Suspense fallback={<div className="h-64"></div>}>
            <Defer when="idle">
              <div className="mt-16">
                <RelatedLinks
                  title={t('relatedLinks.title')}
                  links={[
                    {
                      title: t('relatedLinks.allCasinos.title'),
                      description: t('relatedLinks.allCasinos.description'),
                      href: "/"
                    },
                    {
                      title: t('relatedLinks.topCrypto.title'),
                      description: t('relatedLinks.topCrypto.description'),
                      href: "/top-casinos-crypto"
                    },
                    {
                      title: t('relatedLinks.cashback.title'),
                      description: t('relatedLinks.cashback.description'),
                      href: "/bonus-cashback"
                    },
                    {
                      title: t('relatedLinks.noWager.title'),
                      description: t('relatedLinks.noWager.description'),
                      href: "/bonus-sans-wager"
                    }
                  ]}
                />
              </div>
            </Defer>
          </Suspense>
        </div>
      </div>
      
      {/* SEO Enriched Guide Content */}
      <SEOEnrichedGuide
        locale={locale}
        guideName={t('seoEnriched.guideName')}
        description={t('seoEnriched.description')}
        topCasinos={[
          { name: "SpinStar", slug: "spinstar", bonus: "700% jusqu'à 10,000€", rating: 9.3 },
          { name: "SlotRush", slug: "slotrush", bonus: "100% jusqu'à 500€", rating: 9.2 },
          { name: "Betify", slug: "betify", bonus: "100% jusqu'à 500€", rating: 9.1 },
          { name: "Cleobetra", slug: "cleobetra", bonus: "100% jusqu'à 500€", rating: 9.0 },
          { name: "Lucky Trunk", slug: "luckytrunk", bonus: "100% jusqu'à 1000€", rating: 8.9 }
        ]}
      />

      <Suspense fallback={<div className="h-64"></div>}>
        <Defer when="idle">
          <Footer />
        </Defer>
      </Suspense>
    </>
  );
};



