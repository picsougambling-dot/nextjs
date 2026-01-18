'use client';

import { useMemo, useState } from "react";
import { Link } from '@/i18n/navigation';
import { useLocale, useMessages, useTranslations } from 'next-intl';
import { getTranslatedCanonical } from '@/lib/get-translated-canonical';
import { casinos, type Casino } from "@/data/casinos";
import { promos, type PromoData } from "@/data/promos";
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
import { Button } from "@/components/ui/button";
import { Gift, Copy, Check, Sparkles, Shield, Zap } from "lucide-react";
import { useUserCountry } from "@/hooks/useUserCountry";
import { toast } from "@/hooks/use-toast";

type PromoEntry = {
  promo: PromoData;
  casino: Casino;
};

const normalizeName = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]/g, '');

export default function BonusSansDepotPage() {
  const locale = useLocale();
  const t = useTranslations('GuidePages.bonusSansDepot');
  const promoT = useTranslations('PromoPopup');
  const messages = useMessages();
  const { countryCode: userCountry } = useUserCountry();

  const [searchTerm, setSearchTerm] = useState("");
  const [bonusFilter, setBonusFilter] = useState("all");
  const [wagerFilter, setWagerFilter] = useState("all");
  const [methodFilter, setMethodFilter] = useState("all");
  const [copiedCodes, setCopiedCodes] = useState<Record<string, boolean>>({});

  const getRawTranslation = (key: string): string => {
    const keys = key.split('.');
    let value: any = messages;
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === 'string' ? value : key;
  };

  const promoEntries = useMemo(() => {
    const casinoMap = new Map<string, Casino>();
    casinos.forEach((casino) => {
      casinoMap.set(normalizeName(casino.name), casino);
    });

    return promos
      .map((promo) => {
        const casino = casinoMap.get(normalizeName(promo.casinoName));
        if (!casino || casino.hidden) return null;
        return { promo, casino };
      })
      .filter((entry): entry is PromoEntry => entry !== null)
      .sort((a, b) => a.casino.rank - b.casino.rank);
  }, []);

  const filteredEntries = useMemo(() => {
    return promoEntries.filter(({ casino, promo }) => {
      const matchesSearch =
        casino.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        promo.codes.some((code) =>
          code.code.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesBonus =
        bonusFilter === "all" || casino.bonusPercent >= parseInt(bonusFilter);

      const matchesWager =
        wagerFilter === "all" ||
        (wagerFilter === "none" && casino.wager === null) ||
        (wagerFilter !== "none" && casino.wager === parseInt(wagerFilter));

      const matchesMethod =
        methodFilter === "all" ||
        casino.methods.some(
          (method) => method.toLowerCase() === methodFilter.toLowerCase()
        );

      const matchesCountry =
        !!userCountry &&
        (
          !casino.availableCountries ||
          casino.availableCountries.length === 0 ||
          casino.availableCountries.includes(userCountry)
        );

      return (
        matchesSearch &&
        matchesBonus &&
        matchesWager &&
        matchesMethod &&
        matchesCountry
      );
    });
  }, [promoEntries, searchTerm, bonusFilter, wagerFilter, methodFilter, userCountry]);

  const handleCopy = (code: string, casinoName: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodes((prev) => ({ ...prev, [code]: true }));
    toast({
      title: promoT('toast.copied'),
      description: promoT('toast.description', { code, casinoName }),
    });
    setTimeout(() => {
      setCopiedCodes((prev) => ({ ...prev, [code]: false }));
    }, 2000);
  };

  const promoTopCasinos = filteredEntries.slice(0, 5).map(({ casino }) => ({
    name: casino.name,
    slug: casino.name.toLowerCase().replace(/[^a-z0-9]/g, ''),
    bonus: casino.bonusText,
    rating: casino.rating,
  }));

  return (
    <>
      <SEOHead
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords={t('seoKeywords')}
        canonical={getTranslatedCanonical('/bonus-sans-depot', locale)}
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
                "jobTitle": "Expert Casino Senior"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "9.8",
                "bestRating": "10",
                "worstRating": "0"
              },
              "reviewBody": t('schema.reviewBody'),
              "datePublished": "2026-01-15",
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
              "datePublished": "2026-01-15",
              "dateModified": "2026-01-15",
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary">{t('title')}</span>
              </h1>
              <div className="glass-card rounded-2xl p-8 text-left space-y-4">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansDepot.intro.p1') }} />
                <p className="text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansDepot.intro.p2') }} />
                <p className="text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansDepot.intro.p3') }} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('intro.badges.bonus')}</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">0x</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('intro.badges.wager')}</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">Instant</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('intro.badges.delivery')}</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">11+</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('intro.badges.countries')}</div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="glass-card rounded-2xl p-8 mb-12 bg-primary/5 border border-primary/20">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <Sparkles className="h-5 w-5" />
                  <span className="font-semibold text-sm uppercase tracking-wide">{t('promoCodes.badgeNoDeposit')}</span>
                </div>
                <h2 className="text-3xl font-bold">{t('promoCodes.title')}</h2>
                <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansDepot.promoCodes.description') }} />
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary">
                    <Gift className="h-4 w-4" />
                    {t('promoCodes.badgeExclusive')}
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted">
                    <Shield className="h-4 w-4" />
                    {t('promoCodes.badgeSecure')}
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted">
                    <Zap className="h-4 w-4" />
                    {t('promoCodes.badgeInstant')}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                {promoEntries.slice(0, 4).map(({ promo }) => (
                  <div key={promo.id} className="rounded-xl border border-primary/30 bg-background/80 p-4 text-center">
                    <img src={promo.casinoLogo} alt={promo.casinoName} className="h-12 w-auto mx-auto mb-3 object-contain" />
                    <p className="text-sm font-semibold text-foreground">{promo.casinoName}</p>
                    <p className="text-xs text-muted-foreground">{promo.codes.length} codes</p>
                  </div>
                ))}
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
            methodFilter={methodFilter}
            onMethodChange={setMethodFilter}
          />

          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">{filteredEntries.length}</span>{" "}
              {filteredEntries.length === 1
                ? t('results.found', { count: filteredEntries.length })
                : t('results.foundPlural', { count: filteredEntries.length })}
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
              {filteredEntries.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEntries.map(({ casino, promo }) => (
                    <div key={casino.id} className="space-y-4">
                      <CasinoCard casino={casino} />
                      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 space-y-4">
                        <div className="flex items-center gap-2">
                          <Gift className="h-5 w-5 text-primary" />
                          <h3 className="text-lg font-semibold">{t('promoCodes.title')}</h3>
                        </div>
                        <div className="space-y-3">
                          {promo.codes.map((codeData) => (
                            <div key={codeData.code} className="rounded-xl bg-background/60 border border-border p-3 space-y-2">
                              <div className="flex items-center justify-between gap-2 flex-wrap">
                                <p className="font-semibold text-sm text-foreground">
                                  {codeData.description}
                                </p>
                                <div className="flex items-center gap-2">
                                  <span className="font-mono text-primary text-lg tracking-wide">
                                    {codeData.code}
                                  </span>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="gap-1 h-8"
                                    onClick={() => handleCopy(codeData.code, promo.casinoName)}
                                  >
                                    {copiedCodes[codeData.code] ? (
                                      <>
                                        <Check className="h-3 w-3" />
                                        {t('promoCodes.copied')}
                                      </>
                                    ) : (
                                      <>
                                        <Copy className="h-3 w-3" />
                                        {t('promoCodes.copy')}
                                      </>
                                    )}
                                  </Button>
                                </div>
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {promoT('onSlot', { slot: codeData.slot })}
                              </p>
                              {(codeData.maxWin || codeData.wager) && (
                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                  {codeData.maxWin && (
                                    <span>{promoT('maxWin', { amount: codeData.maxWin })}</span>
                                  )}
                                  {codeData.wager && (
                                    <span>{promoT('wager', { amount: codeData.wager })}</span>
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        <Button
                          size="lg"
                          className="w-full"
                          onClick={() => window.open(promo.playUrl, "_blank", "noopener,noreferrer")}
                        >
                          {promoT('ctaButton', { casinoName: promo.casinoName })}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="glass-card rounded-2xl p-12 text-center">
                  <p className="text-muted-foreground text-lg">{t('noResults')}</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="table" className="mt-0">
              {filteredEntries.length > 0 ? (
                <CasinoTable casinos={filteredEntries.map(({ casino }) => casino)} />
              ) : (
                <div className="glass-card rounded-2xl p-12 text-center">
                  <p className="text-muted-foreground text-lg">{t('noResults')}</p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          <section className="mt-16 max-w-4xl mx-auto space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">{t('whatIs.title')}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansDepot.whatIs.p1') }} />
                <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansDepot.whatIs.p2') }} />
                <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansDepot.whatIs.p3') }} />
                <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansDepot.whatIs.p4') }} />
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">{t('advantages.title')}</h2>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansDepot.advantages.points.realMoney') }} />
                <p className="flex items-start gap-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansDepot.advantages.points.testCasinos') }} />
                <p className="flex items-start gap-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansDepot.advantages.points.vip') }} />
                <p className="flex items-start gap-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.bonusSansDepot.advantages.points.safety') }} />
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">{t('howToClaim.title')}</h2>
              <div className="space-y-4 text-muted-foreground">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex-shrink-0">
                      {step}
                    </span>
                    <div>
                      <h3 className="font-semibold mb-1">{t(`howToClaim.steps.${step}.title` as const)}</h3>
                      <p className="text-sm">{t(`howToClaim.steps.${step}.description` as const)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">{t('faq.title')}</h2>
              <div className="space-y-6">
                {[1, 2, 3].map((index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-lg mb-2">{t(`faq.q${index}.question` as const)}</h3>
                    <p className="text-muted-foreground">{t(`faq.q${index}.answer` as const)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section supplémentaire avec liens vers casinos et blog */}
            <div className="glass-card rounded-2xl p-8 bg-gradient-to-r from-primary/5 to-accent/5">
              <h2 className="text-3xl font-bold mb-6 text-foreground">🎰 Casinos recommandés avec bonus sans dépôt</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Link href={`/${locale}/spindinasty`} className="block p-4 border rounded-lg hover:border-primary transition-colors bg-card">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-5 h-5 text-purple-500" />
                    <span className="font-semibold">SpinDinasty</span>
                  </div>
                  <p className="text-sm text-muted-foreground">20€ offerts sans dépôt</p>
                </Link>
                
                <Link href={`/${locale}/kingschance`} className="block p-4 border rounded-lg hover:border-primary transition-colors bg-card">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-5 h-5 text-purple-500" />
                    <span className="font-semibold">Kings Chance</span>
                  </div>
                  <p className="text-sm text-muted-foreground">50 tours gratuits gratuits</p>
                </Link>
                
                <Link href={`/${locale}/spinaura`} className="block p-4 border rounded-lg hover:border-primary transition-colors bg-card">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-5 h-5 text-purple-500" />
                    <span className="font-semibold">SpinAura</span>
                  </div>
                  <p className="text-sm text-muted-foreground">15€ bonus sans wager</p>
                </Link>
                
                <Link href={`/${locale}/hunnyplay`} className="block p-4 border rounded-lg hover:border-primary transition-colors bg-card">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-5 h-5 text-purple-500" />
                    <span className="font-semibold">HunnyPlay</span>
                  </div>
                  <p className="text-sm text-muted-foreground">100 tours gratuits sans dépôt</p>
                </Link>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">📚 Guide complet sur les bonus casino</h3>
                <p className="text-muted-foreground mb-4">
                  Découvrez notre guide complet pour comprendre tous les types de bonus casino, les conditions de mise, et comment choisir les meilleures offres.
                </p>
                <Link href={`/${locale}/blog/guide-bonus-casino-2026`}>
                  <Button className="w-full sm:w-auto">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Lire le guide complet 2026
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <div className="mt-12">
            <RelatedLinks
              links={[
                {
                  title: t('relatedLinks.noWager.title'),
                  description: t('relatedLinks.noWager.description'),
                  href: `/${locale}${t('relatedLinks.noWager.href')}`
                },
                {
                  title: t('relatedLinks.cashback.title'),
                  description: t('relatedLinks.cashback.description'),
                  href: `/${locale}${t('relatedLinks.cashback.href')}`
                },
                {
                  title: t('relatedLinks.crypto.title'),
                  description: t('relatedLinks.crypto.description'),
                  href: `/${locale}${t('relatedLinks.crypto.href')}`
                },
                {
                  title: t('relatedLinks.blog.title'),
                  description: t('relatedLinks.blog.description'),
                  href: `/${locale}${t('relatedLinks.blog.href')}`
                }
              ]}
            />
          </div>
        </div>
      </div>

      <SEOEnrichedGuide
        locale={locale}
        guideName={t('title')}
        description={t('schema.description')}
        topCasinos={
          promoTopCasinos.length > 0
            ? promoTopCasinos
            : [
                { name: "Kings Chance", slug: "kingschance", bonus: "150% + 40 FS", rating: 9.4 },
                { name: "Lucky Treasure", slug: "luckytreasure", bonus: "25 FS sans dépôt", rating: 9.3 },
                { name: "Spin Dinasty", slug: "spindinasty", bonus: "25 FS sans dépôt", rating: 9.2 },
                { name: "HunnyPlay", slug: "hunnyplay", bonus: "150 FS gratuits", rating: 9.1 },
                { name: "SpinAura", slug: "spinaura", bonus: "40 FS exclusifs", rating: 9.0 }
              ]
        }
      />

      <Footer />
    </>
  );
}
