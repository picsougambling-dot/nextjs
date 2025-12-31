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
import { BadgeCheck } from "lucide-react";
import { useUserCountry } from "@/hooks/useUserCountry";

export default function BonusSansWagerPage() {
  const locale = useLocale();
  const t = useTranslations('GuidePages.bonusSansWager');
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

  const sansWagerCasinos = useMemo(() => {
    const sansWagerCasinoNames = [
      "Aphrodite",
      "MadCasino",
      "Lucky Treasure",
      "Spin Dinasty",
      "Kings Chance"
    ];
    
    return casinos.filter((casino) => 
      !casino.hidden &&
      sansWagerCasinoNames.some(name => 
        casino.name.toLowerCase() === name.toLowerCase()
      )
    ).sort((a, b) => a.rank - b.rank);
  }, []);

  const filteredCasinos = useMemo(() => {
    return sansWagerCasinos.filter((casino) => {
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
  }, [sansWagerCasinos, searchTerm, bonusFilter, wagerFilter, methodFilter, userCountry]);

  return (
    <>
      
      <SEOHead
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords={t('seoKeywords')}
        canonical={getTranslatedCanonical('/bonus-sans-wager', locale)}
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
                "jobTitle": t('seoSchema.author.jobTitle'),
                "description": t('seoSchema.author.description')
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "9.7",
                "bestRating": "10",
                "worstRating": "0"
              },
              "reviewBody": t('seoSchema.reviewBody'),
              "datePublished": "2025-01-15",
              "publisher": {
                "@type": "Organization",
                "name": "GigaBonus"
              }
            },
            {
              "@type": "Article",
              "headline": t('seoSchema.articleHeadline'),
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
              "description": t('seoDescription')
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": t('seoSchema.faq.q1.question'),
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t('seoSchema.faq.q1.answer')
                  }
                },
                {
                  "@type": "Question",
                  "name": t('seoSchema.faq.q2.question'),
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t('seoSchema.faq.q2.answer')
                  }
                },
                {
                  "@type": "Question",
                  "name": t('seoSchema.faq.q3.question'),
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t('seoSchema.faq.q3.answer')
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
          <header className="mb-16 mt-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight animate-fade-in text-center">
                <span className="text-primary">{t('title')}</span>
              </h1>
              
              <div className="glass-card rounded-2xl p-8 space-y-4">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.intro.p1').replace('{year}', '2025') }} />
                <p className="text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.intro.p2') }} />
                <p className="text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.intro.p3') }} />
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">0x</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('intro.badges.wager')}</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('intro.badges.gains')}</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">{t('intro.badges.withdrawal')}</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('intro.badges.withdrawal')}</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">3%</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('intro.badges.percentage')}</div>
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
              <span className="text-primary font-semibold">{filteredCasinos.length}</span>{" "}
              {filteredCasinos.length > 1 ? t('results.foundPlural', { count: filteredCasinos.length }) : t('results.found', { count: filteredCasinos.length })}
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
                <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.whatIs.p1') }} />
                <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.whatIs.p2') }} />
                <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.whatIs.p3') }} />
                <p dangerouslySetInnerHTML={{ 
                  __html: getRawTranslation('GuidePages.bonusSansWager.whatIs.p4')
                    .replace('comparateur de casinos en ligne', `<Link href="/${locale}" class="text-primary underline hover:text-primary/80">comparateur de casinos en ligne</Link>`)
                    .replace('meilleurs cashbacks hebdomadaires', `<Link href="/${locale}/bonus-cashback" class="text-primary underline hover:text-primary/80">meilleurs cashbacks hebdomadaires</Link>`)
                }} />
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">{t('types.title')}</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">{t('types.welcome.title')}</h3>
                  <p className="text-muted-foreground">{t('types.welcome.description')}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">{t('types.freespins.title')}</h3>
                  <p className="text-muted-foreground">{t('types.freespins.description')}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">{t('types.cashback.title')}</h3>
                  <p className="text-muted-foreground">{t('types.cashback.description')}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">{t('types.vip.title')}</h3>
                  <p className="text-muted-foreground">{t('types.vip.description')}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">{t('types.events.title')}</h3>
                  <p className="text-muted-foreground">{t('types.events.description')}</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">{t('whyRare.title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ 
                __html: getRawTranslation('GuidePages.bonusSansWager.whyRare.p1')
                  .replace('page d\'accueil', `<Link href="/${locale}" class="text-primary underline hover:text-primary/80">page d'accueil</Link>`)
              }} />
              <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.whyRare.p2') }} />
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">{t('advantages.title')}</h2>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-2" dangerouslySetInnerHTML={{ __html: `<span class="text-primary font-bold">✓</span><span>${getRawTranslation('GuidePages.bonusSansWager.advantages.points.freedom')}</span>` }} />
                <p className="flex items-start gap-2" dangerouslySetInnerHTML={{ __html: `<span class="text-primary font-bold">✓</span><span>${getRawTranslation('GuidePages.bonusSansWager.advantages.points.transparency')}</span>` }} />
                <p className="flex items-start gap-2" dangerouslySetInnerHTML={{ __html: `<span class="text-primary font-bold">✓</span><span>${getRawTranslation('GuidePages.bonusSansWager.advantages.points.nostress')}</span>` }} />
                <p className="flex items-start gap-2" dangerouslySetInnerHTML={{ __html: `<span class="text-primary font-bold">✓</span><span>${getRawTranslation('GuidePages.bonusSansWager.advantages.points.realGains')}</span>` }} />
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
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">{t('comparison.title')}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 font-semibold">{t('comparison.table.criteria')}</th>
                      <th className="text-left p-3 font-semibold text-orange-500">{t('comparison.table.classic')}</th>
                      <th className="text-left p-3 font-semibold text-green-500">{t('comparison.table.noWager')}</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="p-3 font-medium">{t('comparison.table.amount.label')}</td>
                      <td className="p-3">{t('comparison.table.amount.classic')}</td>
                      <td className="p-3">{t('comparison.table.amount.noWager')}</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3 font-medium">{t('comparison.table.wager.label')}</td>
                      <td className="p-3">{t('comparison.table.wager.classic')}</td>
                      <td className="p-3 text-green-500 font-bold">{t('comparison.table.wager.noWager')}</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3 font-medium">{t('comparison.table.withdrawal.label')}</td>
                      <td className="p-3">{t('comparison.table.withdrawal.classic')}</td>
                      <td className="p-3 text-green-500 font-bold">{t('comparison.table.withdrawal.noWager')}</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3 font-medium">{t('comparison.table.freedom.label')}</td>
                      <td className="p-3">{t('comparison.table.freedom.classic')}</td>
                      <td className="p-3">{t('comparison.table.freedom.noWager')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                {t('comparison.example')}
              </p>
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
              <h2 className="text-3xl font-bold mb-6">{t('howToRecognize.title')}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.howToRecognize.intro') }} />
                
                <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 space-y-4">
                  <h3 className="font-semibold text-lg text-foreground">{t('howToRecognize.criteria.title')}</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.howToRecognize.criteria.points.explicit') }} />
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.howToRecognize.criteria.points.realMoney') }} />
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.howToRecognize.criteria.points.immediate') }} />
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.howToRecognize.criteria.points.noHidden') }} />
                    </li>
                  </ul>
                  
                  <h3 className="font-semibold text-lg text-foreground mt-6">{t('howToRecognize.traps.title')}</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>{t('howToRecognize.traps.points.hiddenWager')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>{t('howToRecognize.traps.points.limitedGames')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>{t('howToRecognize.traps.points.lowLimit')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span>{t('howToRecognize.traps.points.depositRequirement')}</span>
                    </li>
                  </ul>
                </div>
                
                <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.howToRecognize.recommendation') }} />
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">{t('bestByUsage.title')}</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-xl mb-3 text-foreground">{t('bestByUsage.welcome.title')}</h3>
                  <p className="text-muted-foreground mb-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.bestByUsage.welcome.description') }} />
                  <p className="text-sm text-muted-foreground">
                    {t('bestByUsage.welcome.ideal')}
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-xl mb-3 text-foreground">{t('bestByUsage.cashback.title')}</h3>
                  <p className="text-muted-foreground mb-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.bestByUsage.cashback.description') }} />
                  <p className="text-sm text-muted-foreground">
                    {t('bestByUsage.cashback.ideal')}
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-xl mb-3 text-foreground">{t('bestByUsage.freespins.title')}</h3>
                  <p className="text-muted-foreground mb-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.bestByUsage.freespins.description') }} />
                  <p className="text-sm text-muted-foreground">
                    {t('bestByUsage.freespins.ideal')}
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-xl mb-3 text-foreground">{t('bestByUsage.vip.title')}</h3>
                  <p className="text-muted-foreground mb-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.bestByUsage.vip.description') }} />
                  <p className="text-sm text-muted-foreground">
                    {t('bestByUsage.vip.ideal')}
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-xl mb-3 text-foreground">{t('bestByUsage.fastWithdrawals.title')}</h3>
                  <p className="text-muted-foreground mb-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.bestByUsage.fastWithdrawals.description') }} />
                  <p className="text-sm text-muted-foreground">
                    {t('bestByUsage.fastWithdrawals.ideal')}
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 bg-primary/5 border-2 border-primary/20">
              <h2 className="text-3xl font-bold mb-4">{t('expertStrategy.title')}</h2>
              <div className="space-y-3 text-muted-foreground">
                <p className="leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.expertStrategy.intro') }} />
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.expertStrategy.points.combine') }} />
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.expertStrategy.points.highVolatility') }} />
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.expertStrategy.points.withdraw') }} />
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.expertStrategy.points.crypto') }} />
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.expertStrategy.points.vip') }} />
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.expertStrategy.points.compare') }} />
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansWager.expertStrategy.points.promotions') }} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-16">
            <RelatedLinks 
              title={t('relatedLinks.title')}
              links={[
                {
                  title: t('relatedLinks.cashback.title'),
                  description: t('relatedLinks.cashback.description'),
                  href: `/${locale}${t('relatedLinks.cashback.href')}`
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
                },
                {
                  title: t('relatedLinks.slots.title'),
                  description: t('relatedLinks.slots.description'),
                  href: `/${locale}${t('relatedLinks.slots.href')}`
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
        description={t('schema.reviewBody')}
        topCasinos={[
          { name: "Aphrodite", slug: "aphrodite", bonus: "100% jusqu'à 500€", rating: 9.8 },
          { name: "MadCasino", slug: "madcasino", bonus: "100% jusqu'à 500€", rating: 9.8 },
          { name: "Lucky Treasure", slug: "luckytreasure", bonus: "200% jusqu'à 2000€", rating: 9.7 },
          { name: "Kings Chance", slug: "kingschance", bonus: "150% jusqu'à 500€", rating: 9.5 },
          { name: "Spin Dynasty", slug: "spindinasty", bonus: "200% jusqu'à 2000€", rating: 9.4 }
        ]}
      />
      
      <Footer />
    </>
  );
};

