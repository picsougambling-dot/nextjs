'use client';

import { useState, useMemo } from "react";
import { Link } from '@/i18n/navigation';
import { useLocale, useTranslations, useMessages } from 'next-intl';
import { getTranslatedCanonical } from '@/lib/get-translated-canonical';
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import RelatedLinks from "@/components/RelatedLinks";
import SEOEnrichedGuide from "@/components/SEOEnrichedGuide";
import SEOHead from "@/components/SEOHead";
import { casinos } from "@/data/casinos";
import { Trophy, Gamepad2, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Slot {
  rank: number;
  name: string;
  provider: "Pragmatic Play" | "Hacksaw";
  description: string;
  maxWin: string;
  volatility: string;
  rtp: string;
  banner: string;
  translationKey: string;
  volatilityKey: "elevated" | "veryHigh" | "extreme";
}

const slotsBase: Omit<Slot, 'description' | 'volatility'>[] = [
  {
    rank: 1,
    name: "Gates of Olympus",
    provider: "Pragmatic Play",
    maxWin: "5 000x",
    volatilityKey: "elevated",
    rtp: "96.50%",
    banner: "/images/slots/gatesofolympus.webp",
    translationKey: "gatesOfOlympus"
  },
  {
    rank: 2,
    name: "Chaos Crew II",
    provider: "Hacksaw",
    maxWin: "25 000x",
    volatilityKey: "extreme",
    rtp: "96.30%",
    banner: "/images/slots/chaos-crew-2.webp",
    translationKey: "chaosCrewII"
  },
  {
    rank: 3,
    name: "RIP City",
    provider: "Hacksaw",
    maxWin: "50 000x",
    volatilityKey: "extreme",
    rtp: "96.26%",
    banner: "/images/slots/ripcity.webp",
    translationKey: "ripCity"
  },
  {
    rank: 4,
    name: "Duel at Dawn",
    provider: "Hacksaw",
    maxWin: "20 000x",
    volatilityKey: "veryHigh",
    rtp: "96.29%",
    banner: "/images/slots/duelatdawn.webp",
    translationKey: "duelAtDawn"
  },
  {
    rank: 5,
    name: "2 Wild 2 Die",
    provider: "Hacksaw",
    maxWin: "12 500x",
    volatilityKey: "veryHigh",
    rtp: "96.23%",
    banner: "/images/slots/2wild2die.webp",
    translationKey: "2Wild2Die"
  },
  {
    rank: 6,
    name: "Wanted Dead or a Wild",
    provider: "Hacksaw",
    maxWin: "12 500x",
    volatilityKey: "veryHigh",
    rtp: "96.38%",
    banner: "/images/slots/wanted.webp",
    translationKey: "wantedDeadOrAWild"
  },
  {
    rank: 7,
    name: "Le Pharaoh",
    provider: "Hacksaw",
    maxWin: "10 000x",
    volatilityKey: "elevated",
    rtp: "96.20%",
    banner: "/images/slots/le-pharaoh.webp",
    translationKey: "lePharaoh"
  },
  {
    rank: 8,
    name: "Le Bandit",
    provider: "Hacksaw",
    maxWin: "10 000x",
    volatilityKey: "elevated",
    rtp: "96.22%",
    banner: "/images/slots/le-bandit.webp",
    translationKey: "leBandit"
  },
  {
    rank: 9,
    name: "Sweet Bonanza",
    provider: "Pragmatic Play",
    maxWin: "21 100x",
    volatilityKey: "veryHigh",
    rtp: "96.51%",
    banner: "/images/slots/sweetbonanza.webp",
    translationKey: "sweetBonanza"
  },
  {
    rank: 10,
    name: "Hand of Anubis",
    provider: "Hacksaw",
    maxWin: "10 000x",
    volatilityKey: "veryHigh",
    rtp: "96.26%",
    banner: "/images/slots/hand-of-anubis.webp",
    translationKey: "handOfAnubis"
  }
];

export default function TopSlots2025Page() {
  const locale = useLocale();
  const t = useTranslations('GuidePages.topSlots2025');
  const messages = useMessages();
  const [selectedProvider, setSelectedProvider] = useState<"all" | "Pragmatic Play" | "Hacksaw">("all");

  // Create slots with translated descriptions and volatility
  const slots = useMemo((): Slot[] => {
    return slotsBase.map(slot => ({
      ...slot,
      description: t(`slots.list.${slot.translationKey}.description`),
      volatility: t(`slots.volatility.${slot.volatilityKey}`)
    }));
  }, [t]);

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

  const filteredSlots = selectedProvider === "all" 
    ? slots 
    : slots.filter(slot => slot.provider === selectedProvider);

  const getCasinosForProvider = (provider: "Pragmatic Play" | "Hacksaw") => {
    if (provider === "Hacksaw") {
      return [
        { name: "WinRolla", url: "https://wnrl.fynkelto.com/?mid=309506_1846846", bonus: "300% jusqu'à 12 000€" },
        { name: "RichRoyal", url: "https://rchrl.fynkelto.com/?mid=309506_1846832", bonus: "275% jusqu'à 7500€ + 225 FS" },
        { name: "Mr Pacho", url: "https://mrpc.fynkelto.com/?mid=309506_1832700", bonus: "100% jusqu'à 500€ + 200 FS" },
        { name: "Cleobetra", url: "https://clb.kngpulse.com/?mid=309124_1828652", bonus: "100% jusqu'à 500€ + 200 FS" }
      ];
    } else {
      return [
        { name: "Megawin", url: "https://mwin.fynkelto.com/?mid=309506_1850370", bonus: "225% jusqu'à 7500€ + 225 FS" }
      ];
    }
  };

  

  
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": t('schema.headline'),
        "description": t('schema.description'),
        "image": "https://gigabonus.win/gigabonus-logo.webp",
        "datePublished": "2025-01-15T10:00:00+01:00",
        "dateModified": "2025-11-28T00:51:35.129Z",
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
        canonical={getTranslatedCanonical('/top-slots-2025', locale)}
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
          <header className="mb-16 mt-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex justify-center mb-6">
                <Trophy className="h-16 w-16 text-primary animate-pulse" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight animate-fade-in text-center">
                <span className="text-primary" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.intro.h1') }} />
              </h1>
              
              <div className="glass-card rounded-2xl p-8 space-y-4">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.intro.description') }} />
                <p className="text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.intro.description2') }} />
                <p className="text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.intro.description3') }} />
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">50 000x</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('intro.stats.maxWin')}</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">96.51%</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('intro.stats.highestRTP')}</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">8/10</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('intro.stats.hacksawSlots')}</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">Extrême</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('intro.stats.maxVolatility')}</div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Filter buttons */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <Button
              variant={selectedProvider === "all" ? "default" : "outline"}
              onClick={() => setSelectedProvider("all")}
              className="gap-2"
            >
              <Gamepad2 className="h-4 w-4" />
              {t('filters.allSlots')}
            </Button>
            <Button
              variant={selectedProvider === "Hacksaw" ? "default" : "outline"}
              onClick={() => setSelectedProvider("Hacksaw")}
            >
              {t('filters.hacksawGaming')}
            </Button>
            <Button
              variant={selectedProvider === "Pragmatic Play" ? "default" : "outline"}
              onClick={() => setSelectedProvider("Pragmatic Play")}
            >
              {t('filters.pragmaticPlay')}
            </Button>
          </div>

          {/* Slots ranking */}
          <div className="space-y-6">
            {filteredSlots.map((slot) => (
              <div
                key={slot.rank}
                className="glass-card rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Rank Badge */}
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${
                      slot.rank === 1 
                        ? "bg-gradient-to-br from-yellow-400 to-yellow-600 text-black" 
                        : slot.rank === 2
                        ? "bg-gradient-to-br from-gray-300 to-gray-500 text-black"
                        : slot.rank === 3
                        ? "bg-gradient-to-br from-amber-600 to-amber-800 text-white"
                        : "bg-primary/20 text-primary"
                    }`}>
                      #{slot.rank}
                    </div>
                  </div>

                  {/* Banner Image */}
                  <div className="flex-shrink-0 w-full md:w-64">
                    <img 
                      src={slot.banner} 
                      alt={`${slot.name} - ${t('slots.stats.maxWin')}: ${slot.maxWin}, ${t('slots.stats.rtp')}: ${slot.rtp}`}
                      width={256}
                      height={128}
                      loading="lazy"
                      className="w-full h-32 object-cover rounded-xl"
                    />
                  </div>

                  {/* Slot Info */}
                  <div className="flex-grow space-y-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">{slot.name}</h2>
                      <p className="text-sm text-muted-foreground mb-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          {slot.provider}
                        </span>
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {slot.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 rounded-lg bg-background/50">
                        <div className="text-xs text-muted-foreground mb-1">{t('slots.stats.maxWin')}</div>
                        <div className="text-lg font-bold text-primary">{slot.maxWin}</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-background/50">
                        <div className="text-xs text-muted-foreground mb-1">{t('slots.stats.volatility')}</div>
                        <div className="text-sm font-semibold">{slot.volatility}</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-background/50">
                        <div className="text-xs text-muted-foreground mb-1">{t('slots.stats.rtp')}</div>
                        <div className="text-sm font-semibold">{slot.rtp}</div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="border-t border-border pt-4 mt-4">
                      <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        {t('slots.playAt', { slotName: slot.name })}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {getCasinosForProvider(slot.provider).map((casino) => (
                          <a
                            key={casino.name}
                            href={casino.url}
                            target="_blank"
                            rel="sponsored noopener noreferrer"
                            className="group"
                          >
                            <Button variant="default" className="gap-2 group-hover:scale-105 transition-transform">
                              <Gamepad2 className="h-4 w-4" />
                              {casino.name}
                            </Button>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SEO Content */}
          <section className="mt-16 max-w-4xl mx-auto space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">{t('whyDominate.title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.whyDominate.text') }} />
              <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.whyDominate.hacksawText') }} />
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">{t('hacksawGaming.title')}</h2>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.hacksawGaming.features.hugeWins') }} />
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.hacksawGaming.features.extremeVolatility') }} />
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.hacksawGaming.features.bonusBuy') }} />
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.hacksawGaming.features.competitiveRTP') }} />
                </p>
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm font-semibold mb-3">{t('hacksawGaming.whereToPlay')}</p>
                <div className="flex flex-wrap gap-2">
                  <a href="https://wnrl.fynkelto.com/?mid=309506_1846846" target="_blank" rel="sponsored noopener noreferrer">
                    <Button variant="outline" size="sm">WinRolla - 300% jusqu'à 12 000€</Button>
                  </a>
                  <a href="https://rchrl.fynkelto.com/?mid=309506_1846832" target="_blank" rel="sponsored noopener noreferrer">
                    <Button variant="outline" size="sm">RichRoyal - 275% + 225 FS</Button>
                  </a>
                  <a href="https://mrpc.fynkelto.com/?mid=309506_1832700" target="_blank" rel="sponsored noopener noreferrer">
                    <Button variant="outline" size="sm">Mr Pacho - 100% + 200 FS</Button>
                  </a>
                  <a href="https://clb.kngpulse.com/?mid=309124_1828652" target="_blank" rel="sponsored noopener noreferrer">
                    <Button variant="outline" size="sm">Cleobetra - 100% + 200 FS</Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">{t('pragmaticPlay.title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.pragmaticPlay.text') }} />
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.pragmaticPlay.features.cascadingMultipliers') }} />
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.pragmaticPlay.features.generousFreeSpins') }} />
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.pragmaticPlay.features.optimalRTP') }} />
                </p>
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm font-semibold mb-3">{t('pragmaticPlay.whereToPlay')}</p>
                <div className="flex flex-wrap gap-2">
                  <a href="https://mwin.fynkelto.com/?mid=309506_1850370" target="_blank" rel="sponsored noopener noreferrer">
                    <Button variant="outline" size="sm">Megawin - 225% jusqu'à 7500€ + 225 FS</Button>
                  </a>
                </div>
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
              <h2 className="text-3xl font-bold mb-6">{t('volatility.title')}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.volatility.intro') }} />
                
                <div className="space-y-4 mt-6">
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{t('volatility.mediumHigh.title')}</h3>
                    <p className="mb-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.volatility.mediumHigh.slots').replace(/^([^:]+: )/, '<strong>$1</strong>') }} />
                    <p className="text-sm" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.volatility.mediumHigh.features') }} />
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4 py-2">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{t('volatility.veryHigh.title')}</h3>
                    <p className="mb-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.volatility.veryHigh.slots').replace(/^([^:]+: )/, '<strong>$1</strong>') }} />
                    <p className="text-sm" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.volatility.veryHigh.features') }} />
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4 py-2">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{t('volatility.extreme.title')}</h3>
                    <p className="mb-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.volatility.extreme.slots').replace(/^([^:]+: )/, '<strong>$1</strong>') }} />
                    <p className="text-sm" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.volatility.extreme.features') }} />
                  </div>
                </div>
                
                <p className="leading-relaxed mt-6" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.volatility.recommendation') }} />
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">{t('strategies.title')}</h2>
              <div className="space-y-6">
                <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                  <h3 className="font-semibold text-xl mb-4 text-foreground">{t('strategies.bonusBuy.title')}</h3>
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.strategies.bonusBuy.description') }} />
                    <div className="mt-3">
                      <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.strategies.bonusBuy.example') }} />
                      <div className="ml-4 mt-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.strategies.bonusBuy.exampleList') }} />
                    </div>
                    <p className="mt-3" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.strategies.bonusBuy.warning') }} />
                  </div>
                </div>
                
                <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                  <h3 className="font-semibold text-xl mb-4 text-foreground">{t('strategies.grind.title')}</h3>
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.strategies.grind.description') }} />
                    <div className="mt-3">
                      <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.strategies.grind.config') }} />
                      <div className="ml-4 mt-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.strategies.grind.configList') }} />
                    </div>
                    <p className="mt-3" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.strategies.grind.advantage') }} />
                  </div>
                </div>
                
                <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                  <h3 className="font-semibold text-xl mb-4 text-foreground">{t('strategies.progressive.title')}</h3>
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.strategies.progressive.description') }} />
                    <div className="mt-3">
                      <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.strategies.progressive.plan') }} />
                      <div className="ml-4 mt-2" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.strategies.progressive.planList') }} />
                    </div>
                    <p className="mt-3" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.strategies.progressive.goal') }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">{t('rtp.title')}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.rtp.intro') }} />
                
                <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 space-y-3">
                  <h3 className="font-semibold text-lg text-foreground">{t('rtp.explanation.title')}</h3>
                  <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.rtp.explanation.meaning') }} />
                  <div className="ml-4 text-sm" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.rtp.explanation.list') }} />
                </div>
                
                <div className="mt-6">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">{t('rtp.comparison.title')}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-2 rounded bg-background/50">
                      <span>🥇 Sweet Bonanza</span>
                      <span className="text-primary font-bold">96.51%</span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-background/50">
                      <span>🥈 Gates of Olympus</span>
                      <span className="text-primary font-bold">96.50%</span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-background/50">
                      <span>🥉 Wanted Dead or a Wild</span>
                      <span className="text-primary font-bold">96.38%</span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-background/50">
                      <span>Chaos Crew II</span>
                      <span className="font-bold">96.30%</span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-background/50">
                      <span>Duel at Dawn</span>
                      <span className="font-bold">96.29%</span>
                    </div>
                  </div>
                </div>
                
                <p className="leading-relaxed mt-4" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.topSlots2025.rtp.opinion') }} />
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 bg-primary/5 border-2 border-primary/20">
              <h2 className="text-3xl font-bold mb-4">{t('tips.title')}</h2>
              <ul className="space-y-3 text-muted-foreground">
                {(() => {
                  const keys = 'GuidePages.topSlots2025.tips.list'.split('.');
                  let value: any = messages;
                  for (const k of keys) {
                    if (value && typeof value === 'object' && k in value) {
                      value = value[k];
                    } else {
                      return [];
                    }
                  }
                  const tipsList = Array.isArray(value) ? value : [];
                  return tipsList.map((tip: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary font-bold">→</span>
                      <span dangerouslySetInnerHTML={{ __html: tip }} />
                    </li>
                  ));
                })()}
              </ul>
            </div>
          </section>

          <div className="mt-16">
            <RelatedLinks 
              title={t('relatedLinks.title')}
              links={[
                {
                  title: t('relatedLinks.comparator.title'),
                  description: t('relatedLinks.comparator.description'),
                  href: "/"
                },
                {
                  title: t('relatedLinks.tips.title'),
                  description: t('relatedLinks.tips.description'),
                  href: "/astuces-casino"
                },
                {
                  title: t('relatedLinks.crypto.title'),
                  description: t('relatedLinks.crypto.description'),
                  href: "/top-casinos-crypto"
                },
                {
                  title: t('relatedLinks.noWager.title'),
                  description: t('relatedLinks.noWager.description'),
                  href: "/bonus-sans-wager"
                }
              ]}
            />
          </div>
        </div>
      </div>
      <SEOEnrichedGuide 
        locale={locale}
        guideName={t('seoEnriched.guideName')}
        description={t('seoEnriched.description')}
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
      <Footer />
    </>
  );
};


