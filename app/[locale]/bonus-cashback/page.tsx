'use client';

import { useState, useMemo } from "react";
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
import { TrendingDown } from "lucide-react";
import { useUserCountry } from "@/hooks/useUserCountry";

export default function BonusCashbackPage() {
  const locale = useLocale();
  const t = useTranslations('GuidePages.bonusCashback');
  const messages = useMessages();

  // Helper function to get raw HTML from translations
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
  const [searchTerm, setSearchTerm] = useState("");
  const [bonusFilter, setBonusFilter] = useState("all");
  const [wagerFilter, setWagerFilter] = useState("all");
  const [methodFilter, setMethodFilter] = useState("all");

  // Récupérer le pays de l'utilisateur pour filtrer les casinos
  const { countryCode: userCountry } = useUserCountry();

  const cashbackCasinos = useMemo(() => {
    const cashbackCasinoNames = [
      "Mr Pacho",
      "BillyBets",
      "Cleobetra", 
      "RichRoyal",
      "WinRolla",
      "Play Regal",
      "Vegas Plus",
      "WinMaChance",
      "Unique Casino"
    ];
    
    return casinos.filter((casino) => 
      !casino.hidden &&
      cashbackCasinoNames.some(name => 
        casino.name.toLowerCase() === name.toLowerCase()
      )
    ).sort((a, b) => a.rank - b.rank);
  }, []);

  const filteredCasinos = useMemo(() => {
    return cashbackCasinos.filter((casino) => {
      const matchesSearch = casino.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBonus = bonusFilter === "all" || casino.bonusPercent >= parseInt(bonusFilter);
      const matchesWager =
        wagerFilter === "all" ||
        (wagerFilter === "none" && casino.wager === null) ||
        (wagerFilter !== "none" && casino.wager === parseInt(wagerFilter));
      const matchesMethod =
        methodFilter === "all" ||
        casino.methods.some((method) => method.toLowerCase() === methodFilter.toLowerCase());

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
  }, [cashbackCasinos, searchTerm, bonusFilter, wagerFilter, methodFilter, userCountry]);

  return (
    <>
      <SEOHead
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords={t('seoKeywords')}
        canonical={getTranslatedCanonical('/bonus-cashback', locale)}
        ogTitle={t('ogTitle')}
        ogDescription={t('ogDescription')}
        ogImage="https://gigabonus.win/og-image.png"
        twitterTitle={t('twitterTitle')}
        twitterDescription={t('twitterDescription')}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Review",
              "itemReviewed": {
                "@type": "Product",
                "name": t('title')
              },
              "author": {
                "@type": "Person",
                "name": "Alexandre Martin",
                "jobTitle": "Expert Casino Senior",
                "description": "Expert en bonus casino avec 15 ans d'expérience et plus de 500 plateformes testées"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "9.5",
                "bestRating": "10",
                "worstRating": "0"
              },
              "reviewBody": t('schema.reviewBody'),
              "datePublished": "2025-01-15",
              "publisher": {
                "@type": "Organization",
                "name": "GigaBonus"
              }
            },
            {
              "@type": "Article",
              "headline": t('schema.headline'),
              "author": {
                "@type": "Person",
                "name": "Alexandre Martin"
              },
              "datePublished": "2025-01-15",
              "dateModified": "2025-01-15",
              "publisher": {
                "@type": "Organization",
                "name": "GigaBonus",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://gigabonus.win/gigabonus-logo.webp"
                }
              },
              "description": t('schema.description')
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": t('faq.q1.question'),
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t('faq.q1.answer')
                  }
                },
                {
                  "@type": "Question",
                  "name": t('faq.q2.question'),
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t('faq.q2.answer')
                  }
                },
                {
                  "@type": "Question",
                  "name": t('faq.q3.question'),
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t('faq.q3.answer')
                  }
                }
              ]
            }
          ]
        }}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16 mt-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                <span className="text-primary">{t('title')}</span>
              </h1>
              
              <div className="glass-card rounded-2xl p-8 text-left space-y-4">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.intro.p1') }} />
                <p className="text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.intro.p2') }} />
                <p className="text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.intro.p3') }} />
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">5-25%</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('intro.badges.rate')}</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">0-3x</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('intro.badges.wager')}</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">24-72h</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('intro.badges.delay')}</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">Illimité</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('intro.badges.recurrence')}</div>
                  </div>
                </div>
              </div>
            </div>
          </header>

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

          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">{filteredCasinos.length}</span> {filteredCasinos.length === 1 ? t('results.found', { count: filteredCasinos.length }) : t('results.foundPlural', { count: filteredCasinos.length })}
            </p>
          </div>

          <Tabs defaultValue="cards" className="w-full">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCasinos.map((casino) => (
                    <CasinoCard key={casino.id} casino={casino} />
                  ))}
                </div>
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
                <CasinoTable casinos={filteredCasinos} />
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
              <h2 className="text-3xl font-bold mb-6">{t('whatIs.title')}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.whatIs.p1') }} />
                <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.whatIs.p2') }} />
                <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.whatIs.p3') }} />
                <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.whatIs.p4').replace('comparateur de bonus casino', `<a href="/${locale}" class="text-primary underline hover:text-primary/80">comparateur de bonus casino</a>`) }} />
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">{t('types.title')}</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">{t('types.daily.title')}</h3>
                  <p>{t('types.daily.description')}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">{t('types.weekly.title')}</h3>
                  <p>{t('types.weekly.description')}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">{t('types.vip.title')}</h3>
                  <p>{t('types.vip.description')}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">{t('types.live.title')}</h3>
                  <p>{t('types.live.description')}</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">{t('whyChoose.title')}</h2>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.whyChoose.points.limitLosses') }} />
                <p className="flex items-start gap-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.whyChoose.points.flexible') }} />
                <p className="flex items-start gap-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.whyChoose.points.loyalty') }} />
                <p className="flex items-start gap-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.whyChoose.points.realMoney') }} />
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">{t('howItWorks.title')}</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex-shrink-0">1</span>
                  <div>
                    <h3 className="font-semibold mb-1">{t('howItWorks.steps.1.title')}</h3>
                    <p className="text-sm">{t('howItWorks.steps.1.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex-shrink-0">2</span>
                  <div>
                    <h3 className="font-semibold mb-1">{t('howItWorks.steps.2.title')}</h3>
                    <p className="text-sm">{t('howItWorks.steps.2.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex-shrink-0">3</span>
                  <div>
                    <h3 className="font-semibold mb-1">{t('howItWorks.steps.3.title')}</h3>
                    <p className="text-sm">{t('howItWorks.steps.3.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex-shrink-0">4</span>
                  <div>
                    <h3 className="font-semibold mb-1">{t('howItWorks.steps.4.title')}</h3>
                    <p className="text-sm">{t('howItWorks.steps.4.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">{t('example.title')}</h2>
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.example.intro') }} />
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.example.points.gains') }} />
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.example.points.losses') }} />
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.example.points.cashback') }} />
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.example.points.wager') }} />
                  </li>
                </ul>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">{t('faq.title')}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('faq.q1.question')}</h3>
                  <p className="text-muted-foreground">{t('faq.q1.answer')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('faq.q2.question')}</h3>
                  <p className="text-muted-foreground">{t('faq.q2.answer')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('faq.q3.question')}</h3>
                  <p className="text-muted-foreground">{t('faq.q3.answer')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('faq.q4.question')}</h3>
                  <p className="text-muted-foreground">{t('faq.q4.answer')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('faq.q5.question')}</h3>
                  <p className="text-muted-foreground">{t('faq.q5.answer')}</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">{t('comparison.title')}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="p-3 font-semibold">{t('comparison.table.criteria')}</th>
                      <th className="p-3 font-semibold text-primary">{t('comparison.table.cashback')}</th>
                      <th className="p-3 font-semibold">{t('comparison.table.classic')}</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">{t('comparison.table.wager.label')}</td>
                      <td className="p-3 text-primary">{t('comparison.table.wager.cashback')}</td>
                      <td className="p-3">{t('comparison.table.wager.classic')}</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">{t('comparison.table.recurrence.label')}</td>
                      <td className="p-3 text-primary">{t('comparison.table.recurrence.cashback')}</td>
                      <td className="p-3">{t('comparison.table.recurrence.classic')}</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">{t('comparison.table.amount.label')}</td>
                      <td className="p-3 text-primary">{t('comparison.table.amount.cashback')}</td>
                      <td className="p-3">{t('comparison.table.amount.classic')}</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">{t('comparison.table.credit.label')}</td>
                      <td className="p-3 text-primary">{t('comparison.table.credit.cashback')}</td>
                      <td className="p-3">{t('comparison.table.credit.classic')}</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">{t('comparison.table.validity.label')}</td>
                      <td className="p-3 text-primary">{t('comparison.table.validity.cashback')}</td>
                      <td className="p-3">{t('comparison.table.validity.classic')}</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">{t('comparison.table.advantage.label')}</td>
                      <td className="p-3 text-primary">{t('comparison.table.advantage.cashback')}</td>
                      <td className="p-3">{t('comparison.table.advantage.classic')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground mt-4 text-sm" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.comparison.recommendation') }} />
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">{t('calculation.title')}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.calculation.intro') }} />
                
                <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 space-y-4">
                  <h3 className="font-semibold text-lg text-foreground">{t('calculation.formula.title')}</h3>
                  <div className="font-mono text-sm bg-background/50 p-4 rounded border border-border">
                    {t('calculation.formula.formula')}
                  </div>
                  
                  <h4 className="font-semibold text-foreground mt-4">{t('calculation.example1.title')}</h4>
                  <ul className="space-y-2 ml-4">
                    <li dangerouslySetInnerHTML={{ __html: `• ${getRawTranslation('GuidePages.bonusCashback.calculation.example1.points.bet')}` }} />
                    <li dangerouslySetInnerHTML={{ __html: `• ${getRawTranslation('GuidePages.bonusCashback.calculation.example1.points.gains')}` }} />
                    <li dangerouslySetInnerHTML={{ __html: `• ${getRawTranslation('GuidePages.bonusCashback.calculation.example1.points.losses')}` }} />
                    <li dangerouslySetInnerHTML={{ __html: `• ${getRawTranslation('GuidePages.bonusCashback.calculation.example1.points.rate')}` }} />
                    <li dangerouslySetInnerHTML={{ __html: `• ${getRawTranslation('GuidePages.bonusCashback.calculation.example1.points.result')}` }} />
                  </ul>
                  
                  <h4 className="font-semibold text-foreground mt-4">{t('calculation.example2.title')}</h4>
                  <ul className="space-y-2 ml-4">
                    <li dangerouslySetInnerHTML={{ __html: `• ${getRawTranslation('GuidePages.bonusCashback.calculation.example2.points.bet')}` }} />
                    <li dangerouslySetInnerHTML={{ __html: `• ${getRawTranslation('GuidePages.bonusCashback.calculation.example2.points.gains')}` }} />
                    <li dangerouslySetInnerHTML={{ __html: `• ${getRawTranslation('GuidePages.bonusCashback.calculation.example2.points.losses')}` }} />
                    <li dangerouslySetInnerHTML={{ __html: `• ${getRawTranslation('GuidePages.bonusCashback.calculation.example2.points.rate')}` }} />
                    <li dangerouslySetInnerHTML={{ __html: `• ${getRawTranslation('GuidePages.bonusCashback.calculation.example2.points.result')}` }} />
                  </ul>
                </div>
                
                <p className="leading-relaxed">
                  <strong className="text-foreground">{t('calculation.important.title')}</strong>
                </p>
                <ul className="space-y-2 ml-4">
                  <li dangerouslySetInnerHTML={{ __html: `• ${getRawTranslation('GuidePages.bonusCashback.calculation.important.points.net')}` }} />
                  <li dangerouslySetInnerHTML={{ __html: `• ${getRawTranslation('GuidePages.bonusCashback.calculation.important.points.excluded')}` }} />
                  <li dangerouslySetInnerHTML={{ __html: `• ${getRawTranslation('GuidePages.bonusCashback.calculation.important.points.bonus')}` }} />
                  <li dangerouslySetInnerHTML={{ __html: `• ${getRawTranslation('GuidePages.bonusCashback.calculation.important.points.minimum')}` }} />
                  <li dangerouslySetInnerHTML={{ __html: `• ${getRawTranslation('GuidePages.bonusCashback.calculation.important.points.cap')}` }} />
                </ul>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">{t('bestByCategory.title')}</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-xl mb-3 text-foreground">{t('bestByCategory.noWager.title')}</h3>
                  <p className="text-muted-foreground mb-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.bestByCategory.noWager.description') }} />
                  <p className="text-sm text-muted-foreground">
                    {t('bestByCategory.noWager.ideal')}
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-xl mb-3 text-foreground">{t('bestByCategory.vip.title')}</h3>
                  <p className="text-muted-foreground mb-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.bestByCategory.vip.description') }} />
                  <p className="text-sm text-muted-foreground">
                    {t('bestByCategory.vip.ideal')}
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-xl mb-3 text-foreground">{t('bestByCategory.live.title')}</h3>
                  <p className="text-muted-foreground mb-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.bestByCategory.live.description') }} />
                  <p className="text-sm text-muted-foreground">
                    {t('bestByCategory.live.ideal')}
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-xl mb-3 text-foreground">{t('bestByCategory.weekly.title')}</h3>
                  <p className="text-muted-foreground mb-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.bestByCategory.weekly.description') }} />
                  <p className="text-sm text-muted-foreground">
                    {t('bestByCategory.weekly.ideal')}
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-xl mb-3 text-foreground">{t('bestByCategory.sports.title')}</h3>
                  <p className="text-muted-foreground mb-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.bestByCategory.sports.description') }} />
                  <p className="text-sm text-muted-foreground">
                    {t('bestByCategory.sports.ideal')}
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 bg-primary/5 border-2 border-primary/20">
              <h2 className="text-3xl font-bold mb-4">{t('tips.title')}</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.tips.points.noWager') }} />
                <li className="flex items-start gap-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.tips.points.focus') }} />
                <li className="flex items-start gap-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.tips.points.excluded') }} />
                <li className="flex items-start gap-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.tips.points.vip') }} />
                <li className="flex items-start gap-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.tips.points.timing') }} />
                <li className="flex items-start gap-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.tips.points.rakeback') }} />
                <li className="flex items-start gap-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusCashback.tips.points.notifications') }} />
              </ul>
            </div>
          </section>

          {/* Related Links */}
          <div className="mt-12">
            <RelatedLinks
              links={[
                {
                  title: t('relatedLinks.noWager.title'),
                  description: t('relatedLinks.noWager.description'),
                  href: `/${locale}${t('relatedLinks.noWager.href')}`
                },
                {
                  title: t('relatedLinks.noKyc.title'),
                  description: t('relatedLinks.noKyc.description'),
                  href: `/${locale}${t('relatedLinks.noKyc.href')}`
                },
                {
                  title: t('relatedLinks.comparator.title'),
                  description: t('relatedLinks.comparator.description'),
                  href: `/${locale}${t('relatedLinks.comparator.href')}`
                },
                {
                  title: t('relatedLinks.crypto.title'),
                  description: t('relatedLinks.crypto.description'),
                  href: `/${locale}${t('relatedLinks.crypto.href')}`
                }
              ]}
            />
          </div>
        </div>
      </div>
      
      {/* SEO Enriched Guide Content */}
      <SEOEnrichedGuide
        locale={locale}
        guideName={t('title')}
        description={t('schema.description')}
        topCasinos={[
          { name: "Play Regal", slug: "playregal", bonus: "100% jusqu'à 300€", rating: 9.4 },
          { name: "Vegas Plus", slug: "vegasplus", bonus: "200% jusqu'à 500€", rating: 9.3 },
          { name: "Ma Chance", slug: "machance", bonus: "100% jusqu'à 200€", rating: 9.2 },
          { name: "Unique Casino", slug: "uniquecasino", bonus: "200% jusqu'à 500€", rating: 9.1 },
          { name: "Cleobetra", slug: "cleobetra", bonus: "100% jusqu'à 500€", rating: 9.0 }
        ]}
      />
      
      <Footer />
    </>
  );
};

