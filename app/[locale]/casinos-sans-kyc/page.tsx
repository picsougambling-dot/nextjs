'use client';


import { useState, useMemo, useEffect } from "react";
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
import Footer from "@/components/Footer";
import RelatedLinks from "@/components/RelatedLinks";
import SEOEnrichedGuide from "@/components/SEOEnrichedGuide";
import SEOHead from "@/components/SEOHead";
import { Shield, Zap, Lock, CheckCircle } from "lucide-react";
import { useUserCountry } from "@/hooks/useUserCountry";

export default function CasinosSansKYCPage() {
  const locale = useLocale();
  const t = useTranslations('GuidePages.casinosSansKyc');
  const messages = useMessages();
  const [searchTerm, setSearchTerm] = useState("");
  const [bonusFilter, setBonusFilter] = useState("all");
  const [wagerFilter, setWagerFilter] = useState("all");
  const [displayedCount, setDisplayedCount] = useState(9);

  const getRawTranslation = (key: string): string => {
    try {
      const keys = key.split('.');
      let value: any = messages;
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          console.warn(`Translation key not found: ${key}`);
          return key;
        }
      }
      return typeof value === 'string' ? value : key;
    } catch (error) {
      console.error(`Error getting translation for key ${key}:`, error);
      return key;
    }
  };

  // Récupérer le pays de l'utilisateur pour filtrer les casinos
  const { countryCode: userCountry } = useUserCountry();

  // Filter specific casinos for Sans KYC (MrPacho, WinRolla, Cleobetra, RichRoyal, Megawin, Europe Fortune)
  const sansKYCCasinos = useMemo(() => {
    const kycCasinoNames = ["Mr Pacho", "BillyBets", "WinRolla", "Cleobetra", "RichRoyal", "Megawin", "Europe Fortune"];
    return casinos.filter((casino) => !casino.hidden && kycCasinoNames.includes(casino.name)).sort((a, b) => a.rank - b.rank);
  }, []);

  const filteredCasinos = useMemo(() => {
    return sansKYCCasinos.filter((casino) => {
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
  }, [sansKYCCasinos, searchTerm, bonusFilter, wagerFilter, userCountry]);

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

  
  const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": t('seoTitle'),
      "description": t('seoDescription'),
      "image": "https://gigabonus.win/gigabonus-logo.webp",
      "datePublished": "2026-01-15T10:00:00+01:00",
      "dateModified": "2026-11-28T00:51:35.126Z",
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
        "ratingValue": "9.3",
        "bestRating": "10"
      },
      "itemReviewed": {
        "@type": "Product",
        "name": t('title')
      },
      "datePublished": "2026-01-15"
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
        canonical={getTranslatedCanonical('/casinos-sans-kyc', locale)}
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
          {/* Header */}
          <header className="text-center mb-16 mt-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                <span className="text-primary dark:text-gradient">{t('title')}</span>
              </h1>
            
            </div>
          </header>

          {/* SEO Intro Section */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground text-center">
              <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.casinosSansKyc.intro.paragraph1') }} />
              <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.casinosSansKyc.intro.paragraph2') }} />
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>{t('intro.badges.noDocuments')}</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>{t('intro.badges.fastWithdrawals')}</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>{t('intro.badges.anonymous')}</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>{t('intro.badges.quickSignup')}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Additional SEO Content */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground">
              <h2 className="text-3xl font-bold mb-4">{t('whatIs.title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.casinosSansKyc.whatIs.paragraph1') }} />
              <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.casinosSansKyc.whatIs.paragraph2') }} />
              <div className="space-y-3 ml-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">{t('whatIs.points.signup.title')}</strong>
                    <p className="text-sm text-muted-foreground">{t('whatIs.points.signup.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">{t('whatIs.points.deposit.title')}</strong>
                    <p className="text-sm text-muted-foreground">{t('whatIs.points.deposit.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">{t('whatIs.points.withdraw.title')}</strong>
                    <p className="text-sm text-muted-foreground">{t('whatIs.points.withdraw.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">{t('whatIs.points.anonymous.title')}</strong>
                    <p className="text-sm text-muted-foreground">{t('whatIs.points.anonymous.description')}</p>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.casinosSansKyc.whatIs.important') }} />
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground">
              <h2 className="text-3xl font-bold mb-4">{t('howToPlay.title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.casinosSansKyc.howToPlay.intro') }} />
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-primary font-bold text-xl">1.</span>
                  <div>
                    <strong className="text-foreground">{t('howToPlay.steps.1.title')}</strong>
                    <p className="text-muted-foreground">{t('howToPlay.steps.1.description')}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold text-xl">2.</span>
                  <div>
                    <strong className="text-foreground">{t('howToPlay.steps.2.title')}</strong>
                    <p className="text-muted-foreground">{t('howToPlay.steps.2.description')}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold text-xl">3.</span>
                  <div>
                    <strong className="text-foreground">{t('howToPlay.steps.3.title')}</strong>
                    <p className="text-muted-foreground">{t('howToPlay.steps.3.description')}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold text-xl">4.</span>
                  <div>
                    <strong className="text-foreground">{t('howToPlay.steps.4.title')}</strong>
                    <p className="text-muted-foreground">{t('howToPlay.steps.4.description')}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold text-xl">5.</span>
                  <div>
                    <strong className="text-foreground">{t('howToPlay.steps.5.title')}</strong>
                    <p className="text-muted-foreground">{t('howToPlay.steps.5.description')}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold text-xl">6.</span>
                  <div>
                    <strong className="text-foreground">{t('howToPlay.steps.6.title')}</strong>
                    <p className="text-muted-foreground">{t('howToPlay.steps.6.description')}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold text-xl">7.</span>
                  <div>
                    <strong className="text-foreground">{t('howToPlay.steps.7.title')}</strong>
                    <p className="text-muted-foreground">{t('howToPlay.steps.7.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground">
              <h2 className="text-3xl font-bold mb-4">{t('prosCons.title')}</h2>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="border border-green-500/30 rounded-lg p-4 bg-green-500/5">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-green-500">✓</span> {t('prosCons.pros.title')}
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">•</strong> {t('prosCons.pros.points.fastSignup')}</p>
                    <p><strong className="text-foreground">•</strong> {t('prosCons.pros.points.anonymity')}</p>
                    <p><strong className="text-foreground">•</strong> {t('prosCons.pros.points.fastWithdrawals')}</p>
                    <p><strong className="text-foreground">•</strong> {t('prosCons.pros.points.noPaperwork')}</p>
                    <p><strong className="text-foreground">•</strong> {t('prosCons.pros.points.globalAccess')}</p>
                    <p><strong className="text-foreground">•</strong> {t('prosCons.pros.points.lessRejection')}</p>
                  </div>
                </div>
                <div className="border border-orange-500/30 rounded-lg p-4 bg-orange-500/5">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-orange-500">⚠</span> {t('prosCons.cons.title')}
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">•</strong> {t('prosCons.cons.points.withdrawalLimits')}</p>
                    <p><strong className="text-foreground">•</strong> {t('prosCons.cons.points.limitedMethods')}</p>
                    <p><strong className="text-foreground">•</strong> {t('prosCons.cons.points.offshoreLicenses')}</p>
                    <p><strong className="text-foreground">•</strong> {t('prosCons.cons.points.kycPossible')}</p>
                    <p><strong className="text-foreground">•</strong> {t('prosCons.cons.points.limitedSupport')}</p>
                    <p><strong className="text-foreground">•</strong> {t('prosCons.cons.points.lessProtection')}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground">
              <h2 className="text-3xl font-bold mb-4">{t('paymentMethods.title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.casinosSansKyc.paymentMethods.intro') }} />
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{t('paymentMethods.crypto.title')}</h3>
                  <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.casinosSansKyc.paymentMethods.crypto.description') }} />
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{t('paymentMethods.ewallets.title')}</h3>
                  <p className="text-muted-foreground">{t('paymentMethods.ewallets.description')}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{t('paymentMethods.vouchers.title')}</h3>
                  <p className="text-muted-foreground">{t('paymentMethods.vouchers.description')}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{t('paymentMethods.cards.title')}</h3>
                  <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.casinosSansKyc.paymentMethods.cards.description') }} />
                </div>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground">
              <h2 className="text-3xl font-bold mb-4">{t('security.title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.casinosSansKyc.security.intro') }} />
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="text-foreground">{t('security.tips.license.title')}</strong>
                    <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.casinosSansKyc.security.tips.license.description') }} />
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="text-foreground">{t('security.tips.reputation.title')}</strong>
                    <p className="text-sm text-muted-foreground">{t('security.tips.reputation.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="text-foreground">{t('security.tips.withdrawalTerms.title')}</strong>
                    <p className="text-sm text-muted-foreground">{t('security.tips.withdrawalTerms.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="text-foreground">{t('security.tips.testSmall.title')}</strong>
                    <p className="text-sm text-muted-foreground">{t('security.tips.testSmall.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong className="text-foreground">{t('security.tips.use2FA.title')}</strong>
                    <p className="text-sm text-muted-foreground">{t('security.tips.use2FA.description')}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.casinosSansKyc.security.warning') }} />
              </div>
            </div>
          </section>

          {/* Comparison Section with Filters - Moved to top */}
          <section className="mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-primary">
              {t('filters.title')}
            </h2>
            <p className="text-center text-foreground mb-8">
              {t('filters.description')}
            </p>
          </section>

          {/* Filters */}
          <FilterBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            bonusFilter={bonusFilter}
            onBonusChange={setBonusFilter}
            wagerFilter={wagerFilter}
            onWagerChange={setWagerFilter}
          />

          {/* Results count */}
          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              {filteredCasinos.length === 1 
                ? t('results.found', { count: filteredCasinos.length.toString() })
                : t('results.foundPlural', { count: filteredCasinos.length.toString() })}
            </p>
          </div>

          {/* Tabs for Card/Table view */}
          <Tabs defaultValue="table" className="w-full mb-12">
            <TabsList className="glass-card mb-8 p-1 grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="cards" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {t('tabs.cards')}
              </TabsTrigger>
              <TabsTrigger value="table" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
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
                        {t('loadMore', { remaining: (filteredCasinos.length - displayedCount).toString() })}
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
                        {t('loadMore', { remaining: (filteredCasinos.length - displayedCount).toString() })}
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

          {/* Additional SEO Sections */}

          {/* FAQ Section */}
          <section className="mt-16 mb-12 max-w-4xl mx-auto space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">{t('faq.title')}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('faq.questions.whatIs.question')}</h3>
                  <p className="text-muted-foreground">{t('faq.questions.whatIs.answer')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('faq.questions.legal.question')}</h3>
                  <p className="text-muted-foreground">{t('faq.questions.legal.answer')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('faq.questions.withdrawWithoutKyc.question')}</h3>
                  <p className="text-muted-foreground">{t('faq.questions.withdrawWithoutKyc.answer')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('faq.questions.payments.question')}</h3>
                  <p className="text-muted-foreground">{t('faq.questions.payments.answer')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('faq.questions.bonuses.question')}</h3>
                  <p className="text-muted-foreground">{t('faq.questions.bonuses.answer')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('faq.questions.limits.question')}</h3>
                  <p className="text-muted-foreground">{t('faq.questions.limits.answer')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('faq.questions.safe.question')}</h3>
                  <p className="text-muted-foreground">{t('faq.questions.safe.answer')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('faq.questions.withdrawalTime.question')}</h3>
                  <p className="text-muted-foreground">{t('faq.questions.withdrawalTime.answer')}</p>
                </div>
              </div>
            </div>
          </section>

          <RelatedLinks
            title={t('relatedLinks.title')}
            links={[
              {
                title: t('relatedLinks.links.cryptoCasinos.title'),
                description: t('relatedLinks.links.cryptoCasinos.description'),
                href: t('relatedLinks.links.cryptoCasinos.href')
              },
              {
                title: t('relatedLinks.links.cashback.title'),
                description: t('relatedLinks.links.cashback.description'),
                href: t('relatedLinks.links.cashback.href')
              },
              {
                title: t('relatedLinks.links.cryptoDeposit.title'),
                description: t('relatedLinks.links.cryptoDeposit.description'),
                href: t('relatedLinks.links.cryptoDeposit.href')
              },
              {
                title: t('relatedLinks.links.comparator.title'),
                description: t('relatedLinks.links.comparator.description'),
                href: t('relatedLinks.links.comparator.href')
              }
            ]}
          />
        </div>
      </div>
      
      {/* SEO Enriched Guide Content */}
      <SEOEnrichedGuide
        locale={locale}
        guideName={t('title')}
        description={t('seoDescription')}
        topCasinos={[
          { name: "Megawin", slug: "megawin", bonus: "200% jusqu'à 2000€", rating: 9.4 },
          { name: "Europe Fortune", slug: "europefortune", bonus: "100% jusqu'à 500€", rating: 9.3 },
          { name: "Cleobetra", slug: "cleobetra", bonus: "100% jusqu'à 500€", rating: 9.2 },
          { name: "HotLoot", slug: "hotloot", bonus: "100% jusqu'à 1000€", rating: 9.1 },
          { name: "SlotRush", slug: "slotrush", bonus: "100% jusqu'à 500€", rating: 9.0 }
        ]}
      />
      
      <Footer />
    </>
  );
};



