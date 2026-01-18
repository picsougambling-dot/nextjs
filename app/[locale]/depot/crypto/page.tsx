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
import { Bitcoin } from "lucide-react";
import { useUserCountry } from "@/hooks/useUserCountry";
import { useTranslations, useMessages, useLocale } from 'next-intl';
import { getTranslatedCanonical } from '@/lib/get-translated-canonical';

export default function DepotCryptoPage() {
  const t = useTranslations('DepotPages.crypto');
  const locale = useLocale();
  const messages = useMessages();
  const [searchTerm, setSearchTerm] = useState("");
  const [bonusFilter, setBonusFilter] = useState("all");
  const [wagerFilter, setWagerFilter] = useState("all");
  const [displayedCount, setDisplayedCount] = useState(9);

  // Récupérer le pays de l'utilisateur pour filtrer les casinos
  const { countryCode: userCountry } = useUserCountry();

  // Helper function pour getRawTranslation
  const getRawTranslation = (key: string) => {
    const keys = key.split('.');
    let value: any = messages;
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === 'string' ? value : '';
  };

  const cryptoCasinos = useMemo(() => {
    return casinos.filter((casino) => !casino.hidden && casino.methods.includes("crypto")).sort((a, b) => a.rank - b.rank);
  }, []);

  const filteredCasinos = useMemo(() => {
    return cryptoCasinos.filter((casino) => {
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
  }, [cryptoCasinos, searchTerm, bonusFilter, wagerFilter, userCountry]);

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
        "image": "https://gigabonus.win/images/methods/crypto.webp",
        "datePublished": "2026-01-15T10:00:00+01:00",
        "dateModified": "2026-11-28T00:51:35.110Z",
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
        "datePublished": "2026-01-15"
      }
    ]
  }), [t]);

  return (
    <>
      <SEOHead
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords={t('seoKeywords')}
        canonical={getTranslatedCanonical('/depot/crypto', locale)}
        ogTitle={t('ogTitle')}
        ogDescription={t('ogDescription')}
        ogImage="https://gigabonus.win/images/methods/crypto.webp"
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
              <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('DepotPages.crypto.intro.p1') }} />
              <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('DepotPages.crypto.intro.p2') }} />
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>{t('advantages.anonymity')}</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>{t('advantages.withdrawals')}</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>{t('advantages.fees')}</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>{t('advantages.noKyc')}</span>
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
              {filteredCasinos.length === 1 ? t('results.found', { count: filteredCasinos.length }) : t('results.foundPlural', { count: filteredCasinos.length })}
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
              <h2 className="text-3xl font-bold mb-4">{t('sections.revolution.title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: getRawTranslation('DepotPages.crypto.sections.revolution.p1') }} />
              <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('DepotPages.crypto.sections.revolution.p2') }} />
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
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">5.</span>
                    <div>
                      <strong className="text-foreground">{t('sections.howTo.step5.title')}</strong>
                      <p>{t('sections.howTo.step5.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">{t('sections.popular.title')}</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{t('sections.popular.btc.title')}</h3>
                  <p>{t('sections.popular.btc.description')}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{t('sections.popular.eth.title')}</h3>
                  <p>{t('sections.popular.eth.description')}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{t('sections.popular.ltc.title')}</h3>
                  <p>{t('sections.popular.ltc.description')}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{t('sections.popular.usdt.title')}</h3>
                  <p>{t('sections.popular.usdt.description')}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{t('sections.popular.bch.title')}</h3>
                  <p>{t('sections.popular.bch.description')}</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">{t('sections.whyChoose.title')}</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-primary/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      {t('sections.whyChoose.anonymity.title')}
                    </h3>
                    <p className="text-sm">{t('sections.whyChoose.anonymity.description')}</p>
                  </div>
                  <div className="border border-primary/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      {t('sections.whyChoose.express.title')}
                    </h3>
                    <p className="text-sm">{t('sections.whyChoose.express.description')}</p>
                  </div>
                  <div className="border border-primary/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      {t('sections.whyChoose.lowFees.title')}
                    </h3>
                    <p className="text-sm">{t('sections.whyChoose.lowFees.description')}</p>
                  </div>
                  <div className="border border-primary/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      {t('sections.whyChoose.bonus.title')}
                    </h3>
                    <p className="text-sm">{t('sections.whyChoose.bonus.description')}</p>
                  </div>
                  <div className="border border-primary/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      {t('sections.whyChoose.global.title')}
                    </h3>
                    <p className="text-sm">{t('sections.whyChoose.global.description')}</p>
                  </div>
                  <div className="border border-primary/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      {t('sections.whyChoose.security.title')}
                    </h3>
                    <p className="text-sm">{t('sections.whyChoose.security.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">{t('sections.security.title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: getRawTranslation('DepotPages.crypto.sections.security.intro') }} />
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">{t('sections.security.tip1.title')}</strong>
                    <p className="text-sm">{t('sections.security.tip1.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">{t('sections.security.tip2.title')}</strong>
                    <p className="text-sm">{t('sections.security.tip2.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">{t('sections.security.tip3.title')}</strong>
                    <p className="text-sm">{t('sections.security.tip3.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">{t('sections.security.tip4.title')}</strong>
                    <p className="text-sm">{t('sections.security.tip4.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">{t('sections.security.tip5.title')}</strong>
                    <p className="text-sm">{t('sections.security.tip5.description')}</p>
                  </div>
                </div>
              </div>
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
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('sections.faq.q6.question')}</h3>
                  <p className="text-muted-foreground">{t('sections.faq.q6.answer')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('sections.faq.q7.question')}</h3>
                  <p className="text-muted-foreground">{t('sections.faq.q7.answer')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('sections.faq.q8.question')}</h3>
                  <p className="text-muted-foreground">{t('sections.faq.q8.answer')}</p>
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
        casinoCount={cryptoCasinos.length}
        translationNamespace="DepotPages.crypto.seoEnrichedContent"
      />
      <Footer />
    </>
  );
};


