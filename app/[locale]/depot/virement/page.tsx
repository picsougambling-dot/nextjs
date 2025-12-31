'use client';


import { useState, useMemo, useEffect } from "react";
import { casinos } from "@/data/casinos";
import { CasinoCard } from "@/components/CasinoCard";
import { CasinoTable } from "@/components/CasinoTable";
import { FilterBar } from "@/components/FilterBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnrichedPayment from '@/components/SEOEnrichedPayment';
import SEOHead from '@/components/SEOHead';
import { Building2 } from "lucide-react";
import { useUserCountry } from "@/hooks/useUserCountry";
import { useTranslations, useMessages, useLocale } from 'next-intl';
import { getTranslatedCanonical } from '@/lib/get-translated-canonical';

export default function DepotVirementPage() {
  const t = useTranslations('DepotPages.virement');
  const locale = useLocale();
  const messages = useMessages();

  // Helper function pour getRawTranslation
  const getRawTranslation = (key: string) => {
    const keys = key.split('.');
    let value: any = messages;
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === 'string' ? value : '';
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [bonusFilter, setBonusFilter] = useState("all");
  const [wagerFilter, setWagerFilter] = useState("all");
  const [displayedCount, setDisplayedCount] = useState(9);

  // Récupérer le pays de l'utilisateur pour filtrer les casinos
  const { countryCode: userCountry } = useUserCountry();

  const virementCasinos = useMemo(() => {
    return casinos.filter((casino) => !casino.hidden && casino.methods.includes("virement")).sort((a, b) => a.rank - b.rank);
  }, []);

  const filteredCasinos = useMemo(() => {
    return virementCasinos.filter((casino) => {
      const matchesSearch = casino.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBonus = bonusFilter === "all" || casino.bonusPercent >= parseInt(bonusFilter);
      const matchesWager =
        wagerFilter === "all" ||
        (wagerFilter === "none" && casino.wager === null) ||
        (wagerFilter !== "none" && casino.wager === parseInt(wagerFilter));

      // Country filter
      const matchesCountry =
        !!userCountry &&
        (
          !casino.availableCountries ||
          casino.availableCountries.length === 0 ||
          casino.availableCountries.includes(userCountry)
        );

      return matchesSearch && matchesBonus && matchesWager && matchesCountry;
    });
  }, [virementCasinos, searchTerm, bonusFilter, wagerFilter, userCountry]);

  const displayedCasinos = useMemo(() => {
    return filteredCasinos.slice(0, displayedCount);
  }, [filteredCasinos, displayedCount]);

  const hasMoreCasinos = filteredCasinos.length > displayedCount;

  const loadMore = () => {
    setDisplayedCount(prev => prev + 6);
  };

  useEffect(() => {
    setDisplayedCount(9);
  }, [searchTerm, bonusFilter, wagerFilter]);

  
  const schemaData = useMemo(() => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": t('schema.headline'),
        "description": t('schema.description'),
        "image": "https://gigabonus.win/images/methods/virement-bancaire.webp",
        "datePublished": "2025-01-15T10:00:00+01:00",
        "dateModified": "2025-11-28T00:51:35.121Z",
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
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin",
          "jobTitle": "Expert Casino Senior"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": t('schema.ratingValue'),
          "bestRating": "10"
        },
        "itemReviewed": {
          "@type": "Product",
          "name": t('schema.headline')
        },
        "datePublished": "2025-01-15"
      }
    ]
  }), [t]);

  return (
    <>
      <SEOHead
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords={t('seoKeywords')}
        canonical={getTranslatedCanonical('/depot/virement', locale)}
        ogTitle={t('ogTitle')}
        ogDescription={t('ogDescription')}
        ogImage="https://gigabonus.win/images/methods/virement-bancaire.webp"
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                <span className="text-primary dark:text-gradient">{t('h1')}</span>
              </h1>
            
            </div>
          </header>

          {/* SEO Intro Section */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground text-center">
              <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('DepotPages.virement.intro.p1') }} />
              <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('DepotPages.virement.intro.p2') }} />
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>{t('advantages.maxSecurity')}</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>{t('advantages.largeAmounts')}</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>{t('advantages.fullTraceability')}</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>{t('advantages.noFees')}</span>
                </div>
              </div>
            </div>
          </section>

          <FilterBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            bonusFilter={bonusFilter}
            onBonusChange={setBonusFilter}
            wagerFilter={wagerFilter}
            onWagerChange={setWagerFilter}
          />

          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">{filteredCasinos.length}</span>{' '}
              {t('results.found', { count: filteredCasinos.length })}
            </p>
          </div>

          <Tabs defaultValue="cards" className="w-full">
            <TabsList className="glass-card mb-8 p-1 grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="cards" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                {t('tabs.cards')}
              </TabsTrigger>
              <TabsTrigger value="table" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                {t('tabs.table')}
              </TabsTrigger>
            </TabsList>

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
                        {t('loadMore', { remaining: filteredCasinos.length - displayedCount })}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="glass-card rounded-2xl p-12 text-center">
                  <p className="text-muted-foreground text-lg">
                    {t('noResults')}
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="table" className="mt-0">
              {filteredCasinos.length > 0 ? (
                <>
                  <CasinoTable casinos={displayedCasinos} />
                  {hasMoreCasinos && (
                    <div className="flex justify-center mt-8">
                      <button
                        onClick={loadMore}
                        className="glass-card px-8 py-4 rounded-xl font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
                      >
                        {t('loadMore', { remaining: filteredCasinos.length - displayedCount })}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="glass-card rounded-2xl p-12 text-center">
                  <p className="text-muted-foreground text-lg">
                    {t('noResults')}
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          <section className="mt-16 max-w-4xl mx-auto space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">{t('sections.whatIs.title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: getRawTranslation('DepotPages.virement.sections.whatIs.p1') }} />
              <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('DepotPages.virement.sections.whatIs.p2') }} />
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">{t('sections.howTo.title')}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="font-semibold text-foreground mb-3">{t('sections.howTo.subtitle')}</p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">1.</span>
                    <div>
                      <strong className="text-foreground">{t('sections.howTo.step1.title')}</strong>
                      <p>{t('sections.howTo.step1.description')}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">2.</span>
                    <div>
                      <strong className="text-foreground">{t('sections.howTo.step2.title')}</strong>
                      <p>{t('sections.howTo.step2.description')}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">3.</span>
                    <div>
                      <strong className="text-foreground">{t('sections.howTo.step3.title')}</strong>
                      <p>{t('sections.howTo.step3.description')}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">4.</span>
                    <div>
                      <strong className="text-foreground">{t('sections.howTo.step4.title')}</strong>
                      <p>{t('sections.howTo.step4.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">{t('sections.sepaVsInternational.title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: getRawTranslation('DepotPages.virement.sections.sepaVsInternational.p1') }} />
              <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('DepotPages.virement.sections.sepaVsInternational.p2') }} />
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">{t('sections.faq.title')}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('sections.faq.q1.question')}</h3>
                  <p className="text-muted-foreground">{t('sections.faq.q1.answer')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('sections.faq.q2.question')}</h3>
                  <p className="text-muted-foreground">{t('sections.faq.q2.answer')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('sections.faq.q3.question')}</h3>
                  <p className="text-muted-foreground">{t('sections.faq.q3.answer')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('sections.faq.q4.question')}</h3>
                  <p className="text-muted-foreground">{t('sections.faq.q4.answer')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('sections.faq.q5.question')}</h3>
                  <p className="text-muted-foreground">{t('sections.faq.q5.answer')}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <SEOEnrichedPayment
        paymentName={t('seoEnriched.paymentName')}
        description={t('seoEnriched.description')}
        advantages={t.raw('seoEnriched.advantages') as string[]}
        casinoCount={virementCasinos.length}
        translationNamespace="DepotPages.virement.seoEnrichedContent"
      />
      <Footer />
    </>
  );
};


