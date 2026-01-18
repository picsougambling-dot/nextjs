'use client';

import { useEffect } from "react";
import { Link } from '@/i18n/navigation';
import { useLocale, useTranslations, useMessages } from 'next-intl';
import { getTranslatedCanonical } from '@/lib/get-translated-canonical';
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import RelatedLinks from "@/components/RelatedLinks";
import SEOEnrichedGuide from "@/components/SEOEnrichedGuide";
import SEOHead from "@/components/SEOHead";
import { Lightbulb, TrendingUp, Shield, Target, ExternalLink, AlertTriangle, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AstuceCasinoPage() {
  const locale = useLocale();
  const t = useTranslations('GuidePages.astucesCasino');
  const messages = useMessages();

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
  
  const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": t('seoTitle'),
  "description": t('seoDescription'),
  "image": "https://gigabonus.win/gigabonus-logo.webp",
  "datePublished": "2026-01-15T10:00:00+01:00",
  "dateModified": "2026-11-28T00:51:35.123Z",
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
};

  return (
    <>
      <SEOHead
        locale={locale}
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords={t('seoKeywords')}
        canonical={getTranslatedCanonical('/astuces-casino', locale)}
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
                <Lightbulb className="h-16 w-16 text-primary animate-pulse" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight animate-fade-in text-center">
                <span className="text-primary" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.astucesCasino.intro.h1') }} />
              </h1>
              
              <div className="glass-card rounded-2xl p-8 space-y-4">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.astucesCasino.intro.description') }} />
                <p className="text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.astucesCasino.intro.description2') }} />
                <p className="text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.astucesCasino.intro.description3') }} />
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">99.5%</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('intro.stats.rtpMax')}</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">1-2%</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('intro.stats.betPerRound')}</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">4 Jeux</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('intro.stats.strategiesCount')}</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">Expert</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('intro.stats.expertTips')}</div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Conseils Généraux */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Shield className="h-8 w-8" />
              {t('generalTips.title')}
            </h2>
            <div className="space-y-4 text-foreground">
              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.astucesCasino.generalTips.budget') }} />
              </div>
              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.astucesCasino.generalTips.rules') }} />
              </div>
              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.astucesCasino.generalTips.bonuses') }} />
              </div>
              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.astucesCasino.generalTips.strategy') }} />
              </div>
              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.astucesCasino.generalTips.stop') }} />
              </div>
            </div>
          </section>

          {/* Navigation rapide */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">{t('navigation.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="#blackjack" className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                <span className="text-2xl">🃏</span>
                <span className="font-semibold">{t('navigation.blackjack')}</span>
              </a>
              <a href="#roulette" className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                <span className="text-2xl">🎯</span>
                <span className="font-semibold">{t('navigation.roulette')}</span>
              </a>
              <a href="#slots" className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                <span className="text-2xl">🎰</span>
                <span className="font-semibold">{t('navigation.slots')}</span>
              </a>
              <a href="#dice" className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                <span className="text-2xl">🎲</span>
                <span className="font-semibold">{t('navigation.dice')}</span>
              </a>
            </div>
          </section>

          {/* Avertissement */}
          <div className="glass-card rounded-2xl p-6 mb-12 max-w-5xl mx-auto bg-orange-50 dark:bg-orange-950 border-2 border-orange-700 dark:border-orange-400">
            <p className="text-foreground text-center" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.astucesCasino.warning') }} />
          </div>

          {/* CTA Casinos */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto bg-violet-50 dark:bg-violet-950 border-2 border-violet-700/40 dark:border-violet-400/40">
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">{t('recommendedCasinos.title')}</h2>
            <p className="text-center text-muted-foreground mb-8">
              {t('recommendedCasinos.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="https://spinstartraff.com/glhq4ywps" target="_blank" rel="sponsored noopener noreferrer" className="group">
                <Button variant="default" className="w-full h-auto py-4 flex flex-col gap-2 group-hover:scale-105 transition-transform">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">SpinStar</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                  <span className="text-sm opacity-90">700% jusqu'à 10 000€ + 725 FS</span>
                </Button>
              </a>
              <a href="https://www.kingschanceclick.com/click/43/113/2136/1" target="_blank" rel="sponsored noopener noreferrer" className="group">
                <Button variant="default" className="w-full h-auto py-4 flex flex-col gap-2 group-hover:scale-105 transition-transform">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">Kings Chance</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                  <span className="text-sm opacity-90">150% jusqu'à 500€ + 40 FS</span>
                </Button>
              </a>
              <a href="https://hunnyplay.games/dgxnb9eok" target="_blank" rel="sponsored noopener noreferrer" className="group">
                <Button variant="default" className="w-full h-auto py-4 flex flex-col gap-2 group-hover:scale-105 transition-transform">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">HunnyPlay</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                  <span className="text-sm opacity-90">200% jusqu'à 200€</span>
                </Button>
              </a>
              <a href="https://clb.kngpulse.com/?mid=309124_1828652" target="_blank" rel="sponsored noopener noreferrer" className="group">
                <Button variant="default" className="w-full h-auto py-4 flex flex-col gap-2 group-hover:scale-105 transition-transform">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">Cleobetra</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                  <span className="text-sm opacity-90">100% jusqu'à 500€ + 200 FS</span>
                </Button>
              </a>
            </div>
          </section>

          {/* Blackjack */}
          <article id="blackjack" className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto scroll-mt-32">
            <h2 className="text-3xl font-bold mb-6 text-primary">{t('blackjack.title')}</h2>
            <div className="space-y-4 text-foreground">
              <p>{t('blackjack.intro')}</p>
              <p className="font-semibold text-orange-500">
                {t('blackjack.warning')}
              </p>
              <h3 className="text-2xl font-bold mt-8 mb-4">{t('blackjack.strategyChart.title')}</h3>
              <p>{t('blackjack.strategyChart.description')}</p>
              <img 
                src="/images/tableau-blackjack.webp" 
                alt="Tableau de stratégie de base au Blackjack - Guide complet des actions recommandées" 
                width={800}
                height={600}
                loading="lazy"
                className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mt-6"
              />
              <p className="text-sm italic text-muted-foreground mt-4">
                {t('blackjack.strategyChart.note')}
              </p>
              
              {/* CTA Blackjack */}
              <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-center font-semibold mb-4">{t('blackjack.cta')}</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a href="https://tinkerkov.com/api/v3/offer/321?aff_sub=%7Bclick_id%7D&aff_sub2=%7Bweb_id%7D&aff_sub4=seo&affiliate_id=889&url_id=838&free_1=/registration" target="_blank" rel="sponsored noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      WinMaChance <ExternalLink className="h-3 w-3" />
                    </Button>
                  </a>
                  <a href="https://ecologyjgn.com/api/v3/offer/317?aff_sub=%7Bclick_id%7D&aff_sub2=%7Bweb_id%7D&aff_sub4=seo&affiliate_id=889&url_id=834&free_1=/registration" target="_blank" rel="sponsored noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      Unique Casino <ExternalLink className="h-3 w-3" />
                    </Button>
                  </a>
                  <a href="https://i24slots.kngpulse.com/?mid=309124_1846856" target="_blank" rel="sponsored noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      I24Slots <ExternalLink className="h-3 w-3" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Roulette - Martingale Classique */}
          <article id="roulette" className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto scroll-mt-32">
            <h2 className="text-3xl font-bold mb-6 text-primary">{t('roulette.martingale.title')}</h2>
            <div className="space-y-4 text-foreground">
              <p>{t('roulette.martingale.intro')}</p>
              <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.astucesCasino.roulette.martingale.example') }} />
              <p className="font-semibold text-orange-500">
                {t('roulette.martingale.warning')}
              </p>
              <img 
                src="/images/astuce-roulette1.webp" 
                alt="Astuce Roulette Martingale Classique" 
                className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mt-6"
              />
              <p className="text-sm italic text-muted-foreground mt-4">
                {t('roulette.martingale.note')}
              </p>
              
              {/* CTA Roulette */}
              <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-center font-semibold mb-4">{t('roulette.martingale.cta')}</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a href="https://kadaincsa.com/api/v3/offer/325?aff_sub=%7Bclick_id%7D&aff_sub2=%7Bweb_id%7D&aff_sub4=seo&affiliate_id=889&url_id=842&free_1=/registration" target="_blank" rel="sponsored noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      Vegas Plus <ExternalLink className="h-3 w-3" />
                    </Button>
                  </a>
                  <a href="https://kadaincsa.com/api/v3/offer/310?aff_sub=%7Bclick_id%7D&aff_sub2=%7Bweb_id%7D&aff_sub4=seo&affiliate_id=889&url_id=827&free_1=/registration" target="_blank" rel="sponsored noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      Play Regal <ExternalLink className="h-3 w-3" />
                    </Button>
                  </a>
                  <a href="https://rxcasino.kngpulse.com/?mid=309124_1828666" target="_blank" rel="sponsored noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      RX Casino <ExternalLink className="h-3 w-3" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Roulette - Martingale Inversée */}
          <article className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">{t('roulette.reverseMartingale.title')}</h2>
            <div className="space-y-4 text-foreground">
              <p>{t('roulette.reverseMartingale.intro')}</p>
              <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.astucesCasino.roulette.reverseMartingale.example') }} />
              <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.astucesCasino.roulette.reverseMartingale.tip') }} />
              <img 
                src="/images/astuce-roulette2.webp" 
                alt="Astuce Roulette Martingale Inversée - Stratégie détaillée avec exemples de mises" 
                width={800}
                height={600}
                loading="lazy"
                className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mt-6"
              />
              <p className="text-sm italic text-muted-foreground mt-4">
                {t('roulette.reverseMartingale.note')}
              </p>
              
              {/* CTA Roulette Inversée */}
              <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-center font-semibold mb-4">{t('roulette.reverseMartingale.cta')}</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a href="https://mwin.fynkelto.com/?mid=309506_1850370" target="_blank" rel="sponsored noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      Megawin <ExternalLink className="h-3 w-3" />
                    </Button>
                  </a>
                  <a href="https://luckytreasure.kngpulse.com/?mid=309124_1828648" target="_blank" rel="sponsored noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      Lucky Treasure <ExternalLink className="h-3 w-3" />
                    </Button>
                  </a>
                  <a href="https://europef.kngpulse.com/?mid=309124_1828640" target="_blank" rel="sponsored noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      Europe Fortune <ExternalLink className="h-3 w-3" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Machines à Sous */}
          <article id="slots" className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto scroll-mt-32">
            <h2 className="text-3xl font-bold mb-6 text-primary">{t('slots.title')}</h2>
            <div className="space-y-4 text-foreground">
              <p>{t('slots.intro')}</p>
              <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.astucesCasino.slots.example') }} />
              <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.astucesCasino.slots.tip') }} />
              <img 
                src="/images/astuce-slots1.webp" 
                alt="Astuce Machines à Sous - Méthode des 100 Spins pour optimiser vos gains" 
                width={800}
                height={600}
                loading="lazy"
                className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mt-6"
              />
              <p className="text-sm italic text-muted-foreground mt-4">
                {t('slots.note')}
              </p>
              
              {/* CTA Slots */}
              <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-center font-semibold mb-4">{t('slots.cta')}</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a href="https://spindinasty.kngpulse.com/?mid=309124_1846854" target="_blank" rel="sponsored noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      Spin Dinasty <ExternalLink className="h-3 w-3" />
                    </Button>
                  </a>
                  <a href="https://magicalspin.kngpulse.com/?mid=309124_1828656" target="_blank" rel="sponsored noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      Magical Spin <ExternalLink className="h-3 w-3" />
                    </Button>
                  </a>
                  <a href="https://casinointense.kngpulse.com/?mid=309124_1828646" target="_blank" rel="sponsored noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      Casino Intense <ExternalLink className="h-3 w-3" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Jeux de Dés */}
          <article id="dice" className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto scroll-mt-32">
            <h2 className="text-3xl font-bold mb-6 text-primary">🎲 Astuce Jeux de Dés – Gestion de Bankroll & Mise Progressive</h2>
            <div className="space-y-4 text-foreground">
              <p>
                Pour profiter pleinement des jeux de dés sans risquer trop, fixe-toi un budget clair et mise toujours une petite somme au départ. Augmente ta mise seulement après une victoire, sinon reviens à la mise initiale.
              </p>
              <p>
                <strong>Exemple :</strong> Mise initiale 1 € → si tu gagnes, mise 2 € → si tu gagnes encore, mise 3 € → si tu perds, reviens à 1 €.
              </p>
              <p>
                <strong>Conseil :</strong> Cette méthode t'aide à profiter des séries gagnantes tout en limitant les pertes lors des mauvaises passes.
              </p>
              <img 
                src="/images/astuce-dice.webp" 
                alt="Astuce Jeux de Dés - Gestion de Bankroll et mise progressive" 
                width={800}
                height={600}
                loading="lazy"
                className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mt-6"
              />
              <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.astucesCasino.dice.example') }} />
              <p dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.astucesCasino.dice.tip') }} />
              <p className="text-sm italic text-muted-foreground mt-4">
                {t('dice.note')}
              </p>
              
              {/* CTA Dice */}
              <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-center font-semibold mb-4">{t('dice.cta')}</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a href="https://bonrush.kngpulse.com/?mid=309124_1828642" target="_blank" rel="sponsored noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      BonRush <ExternalLink className="h-3 w-3" />
                    </Button>
                  </a>
                  <a href="https://atlantisslots.kngpulse.com/?mid=309124_1828638" target="_blank" rel="sponsored noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      Atlantis Slots <ExternalLink className="h-3 w-3" />
                    </Button>
                  </a>
                  <a href="https://cazinostars.kngpulse.com/?mid=309124_1828644" target="_blank" rel="sponsored noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      Cazino Stars <ExternalLink className="h-3 w-3" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Erreurs Courantes à Éviter */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <AlertTriangle className="h-8 w-8" />
              {t('errors.title')}
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="text-xl font-bold mb-2 text-foreground">{t('errors.1.title')}</h3>
                <p className="text-muted-foreground">{t('errors.1.text')}</p>
              </div>
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="text-xl font-bold mb-2 text-foreground">{t('errors.2.title')}</h3>
                <p className="text-muted-foreground">{t('errors.2.text')}</p>
              </div>
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="text-xl font-bold mb-2 text-foreground">{t('errors.3.title')}</h3>
                <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.astucesCasino.errors.3.text') }} />
              </div>
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="text-xl font-bold mb-2 text-foreground">{t('errors.4.title')}</h3>
                <p className="text-muted-foreground">{t('errors.4.text')}</p>
              </div>
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="text-xl font-bold mb-2 text-foreground">{t('errors.5.title')}</h3>
                <p className="text-muted-foreground">{t('errors.5.text')}</p>
              </div>
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="text-xl font-bold mb-2 text-foreground">{t('errors.6.title')}</h3>
                <p className="text-muted-foreground">{t('errors.6.text')}</p>
              </div>
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="text-xl font-bold mb-2 text-foreground">{t('errors.7.title')}</h3>
                <p className="text-muted-foreground">{t('errors.7.text')}</p>
              </div>
            </div>
          </section>

          {/* Comparatif des Jeux */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <BarChart3 className="h-8 w-8" />
              {t('comparison.title')}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary/30">
                    <th className="text-left p-4 font-bold">{t('comparison.headers.game')}</th>
                    <th className="text-left p-4 font-bold">{t('comparison.headers.rtp')}</th>
                    <th className="text-left p-4 font-bold">{t('comparison.headers.difficulty')}</th>
                    <th className="text-left p-4 font-bold">{t('comparison.headers.strategyImpact')}</th>
                    <th className="text-left p-4 font-bold">{t('comparison.headers.forWho')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="p-4 font-semibold">{t('comparison.games.blackjack.name')}</td>
                    <td className="p-4">{t('comparison.games.blackjack.rtp')}</td>
                    <td className="p-4">{t('comparison.games.blackjack.difficulty')}</td>
                    <td className="p-4 text-green-500">{t('comparison.games.blackjack.strategyImpact')}</td>
                    <td className="p-4">{t('comparison.games.blackjack.forWho')}</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="p-4 font-semibold">{t('comparison.games.roulette.name')}</td>
                    <td className="p-4">{t('comparison.games.roulette.rtp')}</td>
                    <td className="p-4">{t('comparison.games.roulette.difficulty')}</td>
                    <td className="p-4 text-yellow-500">{t('comparison.games.roulette.strategyImpact')}</td>
                    <td className="p-4">{t('comparison.games.roulette.forWho')}</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="p-4 font-semibold">{t('comparison.games.slots.name')}</td>
                    <td className="p-4">{t('comparison.games.slots.rtp')}</td>
                    <td className="p-4">{t('comparison.games.slots.difficulty')}</td>
                    <td className="p-4 text-red-500">{t('comparison.games.slots.strategyImpact')}</td>
                    <td className="p-4">{t('comparison.games.slots.forWho')}</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="p-4 font-semibold">{t('comparison.games.baccarat.name')}</td>
                    <td className="p-4">{t('comparison.games.baccarat.rtp')}</td>
                    <td className="p-4">{t('comparison.games.baccarat.difficulty')}</td>
                    <td className="p-4 text-yellow-500">{t('comparison.games.baccarat.strategyImpact')}</td>
                    <td className="p-4">{t('comparison.games.baccarat.forWho')}</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="p-4 font-semibold">{t('comparison.games.diceGames.name')}</td>
                    <td className="p-4">{t('comparison.games.diceGames.rtp')}</td>
                    <td className="p-4">{t('comparison.games.diceGames.difficulty')}</td>
                    <td className="p-4 text-green-500">{t('comparison.games.diceGames.strategyImpact')}</td>
                    <td className="p-4">{t('comparison.games.diceGames.forWho')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-6" dangerouslySetInnerHTML={{ __html: getRawTranslation('GuidePages.astucesCasino.comparison.rtpNote') }} />
          </section>

          {/* Psychologie du Joueur */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">🧠 Psychologie du Joueur : Les Pièges Cognitifs à Éviter</h2>
            <p className="text-foreground mb-6">
              Comprendre les biais psychologiques qui influencent vos décisions peut vous faire économiser des milliers d'euros. Voici les pièges les plus courants au casino en ligne :
            </p>
            <div className="space-y-6">
              <div className="p-5 bg-orange-500/10 border-l-4 border-orange-500 rounded-r-lg">
                <h3 className="text-xl font-bold mb-2 text-foreground">🎰 Le Biais du Joueur (Gambler's Fallacy)</h3>
                <p className="text-muted-foreground mb-2">
                  <strong>Le piège :</strong> Croire qu'après une série de pertes, une victoire est "due". Exemple : "Le rouge n'est pas sorti depuis 8 tours, il va forcément tomber maintenant."
                </p>
                <p className="text-foreground">
                  <strong>La réalité :</strong> Chaque tour est indépendant. Les probabilités restent identiques à chaque spin, peu importe l'historique.
                </p>
              </div>

              <div className="p-5 bg-orange-500/10 border-l-4 border-orange-500 rounded-r-lg">
                <h3 className="text-xl font-bold mb-2 text-foreground">💸 L'Effet de Dotation (Endowment Effect)</h3>
                <p className="text-muted-foreground mb-2">
                  <strong>Le piège :</strong> Surévaluer l'argent gagné et continuer à jouer car "ce n'est pas vraiment mon argent, c'est du profit du casino."
                </p>
                <p className="text-foreground">
                  <strong>La solution :</strong> Chaque euro gagné est VOTRE argent. Fixez un objectif de gains et retirez dès qu'il est atteint.
                </p>
              </div>

              <div className="p-5 bg-orange-500/10 border-l-4 border-orange-500 rounded-r-lg">
                <h3 className="text-xl font-bold mb-2 text-foreground">🎯 L'Illusion de Contrôle</h3>
                <p className="text-muted-foreground mb-2">
                  <strong>Le piège :</strong> Croire que vos actions influencent le hasard (souffler sur les dés, cliquer d'une certaine manière sur spin, etc.)
                </p>
                <p className="text-foreground">
                  <strong>La réalité :</strong> Les RNG (générateurs de nombres aléatoires) sont impartiaux. Concentrez-vous sur la stratégie et la gestion de bankroll, pas sur les rituels.
                </p>
              </div>

              <div className="p-5 bg-orange-500/10 border-l-4 border-orange-500 rounded-r-lg">
                <h3 className="text-xl font-bold mb-2 text-foreground">⚡ Le Biais de Confirmation</h3>
                <p className="text-muted-foreground mb-2">
                  <strong>Le piège :</strong> Se souvenir uniquement des victoires et oublier les pertes. "Ma stratégie marche, j'ai gagné 3 fois ce mois-ci !"
                </p>
                <p className="text-foreground">
                  <strong>La solution :</strong> Tenez un journal de jeu détaillé avec TOUTES vos sessions (gains ET pertes) pour voir la réalité de vos performances.
                </p>
              </div>

              <div className="p-5 bg-orange-500/10 border-l-4 border-orange-500 rounded-r-lg">
                <h3 className="text-xl font-bold mb-2 text-foreground">🔥 Le Tilt (Perte de Contrôle Émotionnel)</h3>
                <p className="text-muted-foreground mb-2">
                  <strong>Le piège :</strong> Après une grosse perte, augmenter les mises irrationnellement pour "se refaire" rapidement.
                </p>
                <p className="text-foreground">
                  <strong>La solution :</strong> Appliquez la règle des 3 pertes consécutives : si vous perdez 3 fois d'affilée, faites une pause de 15-30 minutes minimum.
                </p>
              </div>
            </div>
          </section>

          {/* Mythes vs Réalités */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">🔍 Mythes vs Réalités : Démêlons le Vrai du Faux</h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 bg-red-500/10 border-2 border-red-500/30 rounded-lg">
                  <p className="font-bold text-red-500 mb-2">❌ MYTHE</p>
                  <p className="text-foreground">"Les machines à sous ont des cycles prévisibles"</p>
                </div>
                <div className="p-5 bg-green-500/10 border-2 border-green-500/30 rounded-lg">
                  <p className="font-bold text-green-500 mb-2">✅ RÉALITÉ</p>
                  <p className="text-foreground">Les RNG rendent chaque spin totalement aléatoire et indépendant. Aucun cycle ni pattern détectable.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 bg-red-500/10 border-2 border-red-500/30 rounded-lg">
                  <p className="font-bold text-red-500 mb-2">❌ MYTHE</p>
                  <p className="text-foreground">"Jouer avec des mises plus élevées augmente le RTP"</p>
                </div>
                <div className="p-5 bg-green-500/10 border-2 border-green-500/30 rounded-lg">
                  <p className="font-bold text-green-500 mb-2">✅ RÉALITÉ</p>
                  <p className="text-foreground">Le RTP est fixe, qu'importe votre mise. Seule la variance change avec le montant misé.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 bg-red-500/10 border-2 border-red-500/30 rounded-lg">
                  <p className="font-bold text-red-500 mb-2">❌ MYTHE</p>
                  <p className="text-foreground">"Les casinos en ligne truquent les résultats"</p>
                </div>
                <div className="p-5 bg-green-500/10 border-2 border-green-500/30 rounded-lg">
                  <p className="font-bold text-green-500 mb-2">✅ RÉALITÉ</p>
                  <p className="text-foreground">Les casinos licenciés sont régulièrement audités par des organismes indépendants (eCOGRA, iTech Labs). Truquer = perte de licence.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 bg-red-500/10 border-2 border-red-500/30 rounded-lg">
                  <p className="font-bold text-red-500 mb-2">❌ MYTHE</p>
                  <p className="text-foreground">"Compter les cartes fonctionne en ligne au blackjack"</p>
                </div>
                <div className="p-5 bg-green-500/10 border-2 border-green-500/30 rounded-lg">
                  <p className="font-bold text-green-500 mb-2">✅ RÉALITÉ</p>
                  <p className="text-foreground">En ligne, le sabot est mélangé après chaque main, rendant le comptage inutile. La stratégie de base reste votre meilleur atout.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 bg-red-500/10 border-2 border-red-500/30 rounded-lg">
                  <p className="font-bold text-red-500 mb-2">❌ MYTHE</p>
                  <p className="text-foreground">"Jouer la nuit augmente les chances de gagner"</p>
                </div>
                <div className="p-5 bg-green-500/10 border-2 border-green-500/30 rounded-lg">
                  <p className="font-bold text-green-500 mb-2">✅ RÉALITÉ</p>
                  <p className="text-foreground">Les probabilités sont identiques 24h/24. Ce qui compte : votre état d'esprit et votre lucidité (évitez de jouer fatigué).</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 bg-red-500/10 border-2 border-red-500/30 rounded-lg">
                  <p className="font-bold text-red-500 mb-2">❌ MYTHE</p>
                  <p className="text-foreground">"Les nouveaux casinos payent mieux pour attirer des joueurs"</p>
                </div>
                <div className="p-5 bg-green-500/10 border-2 border-green-500/30 rounded-lg">
                  <p className="font-bold text-green-500 mb-2">✅ RÉALITÉ</p>
                  <p className="text-foreground">Les RTP sont définis par les éditeurs de jeux, pas par les casinos. Ce qui diffère : les bonus et promotions offerts.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Erreurs à éviter */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <AlertTriangle className="h-8 w-8" />
              Top 10 Erreurs à Éviter Absolument au Casino
            </h2>
            <p className="text-muted-foreground mb-6">
              Ces erreurs coûtent des milliers d'euros aux joueurs chaque jour. Apprenez à les identifier et les éviter pour protéger votre bankroll.
            </p>
            <div className="space-y-4">
              <div className="p-5 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
                <h3 className="text-xl font-bold mb-2 text-foreground flex items-center gap-2">
                  <span className="text-red-500">1.</span> Jouer sans stratégie définie
                </h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Erreur :</strong> Se lancer sur un jeu sans connaître les règles ni avoir de plan.<br/>
                  <strong className="text-foreground">Solution :</strong> Testez en mode démo, mémorisez la stratégie de base (blackjack) ou choisissez une méthode de mise (roulette) AVANT de jouer en réel.
                </p>
              </div>

              <div className="p-5 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
                <h3 className="text-xl font-bold mb-2 text-foreground flex items-center gap-2">
                  <span className="text-red-500">2.</span> Ne pas profiter des bonus avantageux
                </h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Erreur :</strong> Ignorer les bonus sans wager ou cashback et accepter des bonus x50 wager impossibles à valider.<br/>
                  <strong className="text-foreground">Solution :</strong> Privilégiez les <a href="/bonus-sans-wager" className="text-primary hover:underline">bonus sans wager</a> et <a href="/bonus-cashback" className="text-primary hover:underline">cashback</a> qui vous offrent un vrai avantage.
                </p>
              </div>

              <div className="p-5 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
                <h3 className="text-xl font-bold mb-2 text-foreground flex items-center gap-2">
                  <span className="text-red-500">3.</span> Miser plus de 5% de sa bankroll sur un seul tour
                </h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Erreur :</strong> "Je sens que je vais gagner, je mise 50 € sur ce spin !" (avec un bankroll de 200 €).<br/>
                  <strong className="text-foreground">Solution :</strong> Règle des 1-2% maximum par tour. Avec 200 €, ne misez jamais plus de 2-4 € par tour pour tenir 50-100 tours minimum.
                </p>
              </div>

              <div className="p-5 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
                <h3 className="text-xl font-bold mb-2 text-foreground flex items-center gap-2">
                  <span className="text-red-500">4.</span> Courir après ses pertes (Chase Losses)
                </h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Erreur :</strong> "J'ai perdu 100 €, je vais en déposer 100 autres pour me refaire rapidement."<br/>
                  <strong className="text-foreground">Solution :</strong> Acceptez les pertes, elles font partie du jeu. Si vous atteignez votre stop-loss (-30% de votre bankroll), ARRÊTEZ et revenez un autre jour.
                </p>
              </div>

              <div className="p-5 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
                <h3 className="text-xl font-bold mb-2 text-foreground flex items-center gap-2">
                  <span className="text-red-500">5.</span> Jouer sous influence (alcool, fatigue, émotions)
                </h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Erreur :</strong> Jouer après une journée stressante, en ayant bu, ou à 3h du matin.<br/>
                  <strong className="text-foreground">Solution :</strong> Ne jouez que lucide, reposé et dans un état d'esprit neutre. Vos décisions seront bien meilleures.
                </p>
              </div>

              <div className="p-5 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
                <h3 className="text-xl font-bold mb-2 text-foreground flex items-center gap-2">
                  <span className="text-red-500">6.</span> Ignorer le RTP et choisir les mauvais jeux
                </h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Erreur :</strong> Jouer à la roulette américaine (94.7% RTP) au lieu de l'européenne (97.3% RTP).<br/>
                  <strong className="text-foreground">Solution :</strong> Vérifiez toujours le RTP. Privilégiez blackjack (99.5%), baccarat (98.9%) et slots &gt;96% RTP.
                </p>
              </div>

              <div className="p-5 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
                <h3 className="text-xl font-bold mb-2 text-foreground flex items-center gap-2">
                  <span className="text-red-500">7.</span> Ne pas retirer ses gains
                </h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Erreur :</strong> Gagner 300 € et tout rejouer jusqu'à tout perdre.<br/>
                  <strong className="text-foreground">Solution :</strong> Fixez un objectif de gains (+50%, +100%) et RETIREZ dès que vous l'atteignez. Ne rejouez jamais vos gros gains.
                </p>
              </div>

              <div className="p-5 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
                <h3 className="text-xl font-bold mb-2 text-foreground flex items-center gap-2">
                  <span className="text-red-500">8.</span> Utiliser des "systèmes miracles" vendus en ligne
                </h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Erreur :</strong> Acheter des e-books promettant "100% de gains garantis à la roulette".<br/>
                  <strong className="text-foreground">Solution :</strong> Si ça marchait vraiment, personne ne le vendrait. Les seules vraies stratégies sont gratuites (comme celles de ce guide).
                </p>
              </div>

              <div className="p-5 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
                <h3 className="text-xl font-bold mb-2 text-foreground flex items-center gap-2">
                  <span className="text-red-500">9.</span> Jouer sur des casinos non licenciés
                </h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Erreur :</strong> S'inscrire sur un casino sans licence pour profiter d'un "gros bonus".<br/>
                  <strong className="text-foreground">Solution :</strong> Vérifiez TOUJOURS la licence (Curaçao, MGA, UKGC). Consultez notre <a href="/" className="text-primary hover:underline">comparateur de casinos fiables</a>.
                </p>
              </div>

              <div className="p-5 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
                <h3 className="text-xl font-bold mb-2 text-foreground flex items-center gap-2">
                  <span className="text-red-500">10.</span> Ne pas utiliser les outils de jeu responsable
                </h3>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Erreur :</strong> Ignorer les limites de dépôt, les rappels de temps et l'auto-exclusion.<br/>
                  <strong className="text-foreground">Solution :</strong> Configurez des limites AVANT de jouer : dépôt max/mois, durée max/session, perte max/jour. Ces outils sont là pour vous protéger.
                </p>
              </div>
            </div>
          </section>

          {/* Glossaire */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">📚 Glossaire des Termes du Casino en Ligne</h2>
            <p className="text-muted-foreground mb-6">Maîtrisez le vocabulaire essentiel pour jouer comme un pro !</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-primary/5 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">RTP (Return to Player)</h3>
                <p className="text-sm text-muted-foreground">% théorique reversé aux joueurs sur le long terme. Ex: RTP 96% = 96€ reversés pour 100€ misés (en moyenne).</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">Variance (ou Volatilité)</h3>
                <p className="text-sm text-muted-foreground">Fréquence et taille des gains. Haute variance = gains rares mais gros. Basse variance = gains fréquents mais petits.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">Wager (Exigence de mise)</h3>
                <p className="text-sm text-muted-foreground">Montant à miser avant de retirer un bonus. Wager x30 sur 100€ = miser 3000€ avant retrait.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">House Edge (Avantage Maison)</h3>
                <p className="text-sm text-muted-foreground">Avantage mathématique du casino. Plus il est bas, mieux c'est pour le joueur. Ex: Blackjack = 0.5%, Roulette US = 5.26%.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">Bankroll</h3>
                <p className="text-sm text-muted-foreground">Budget total alloué au jeu. Règle d'or : ne misez jamais plus de 1-2% de votre bankroll par tour.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">RNG (Random Number Generator)</h3>
                <p className="text-sm text-muted-foreground">Générateur de nombres aléatoires garantissant l'équité des résultats en ligne.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">Hit (Blackjack)</h3>
                <p className="text-sm text-muted-foreground">Demander une carte supplémentaire au croupier.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">Stand (Blackjack)</h3>
                <p className="text-sm text-muted-foreground">Garder sa main actuelle sans prendre de carte supplémentaire.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">Split (Blackjack)</h3>
                <p className="text-sm text-muted-foreground">Séparer deux cartes identiques en deux mains distinctes (nécessite une mise supplémentaire).</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">Double Down (Blackjack)</h3>
                <p className="text-sm text-muted-foreground">Doubler sa mise en échange d'une seule carte supplémentaire.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">Free Spins (Tours Gratuits)</h3>
                <p className="text-sm text-muted-foreground">Tours de slots offerts par le casino, souvent avec des conditions de wager.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">Cashback</h3>
                <p className="text-sm text-muted-foreground">Remboursement d'un % de vos pertes sur une période donnée. Ex: 10% cashback sur pertes hebdomadaires.</p>
              </div>
            </div>
          </section>

          {/* Tableau Probabilités */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">📊 Tableau des Probabilités & House Edge par Jeu</h2>
            <p className="text-muted-foreground mb-6">
              Comprendre les probabilités réelles vous aide à choisir les jeux les plus avantageux. Voici un comparatif détaillé :
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary/30">
                    <th className="text-left p-4 font-bold">Jeu / Mise</th>
                    <th className="text-left p-4 font-bold">Probabilité de Gagner</th>
                    <th className="text-left p-4 font-bold">House Edge</th>
                    <th className="text-left p-4 font-bold">Paiement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-primary/5">
                    <td className="p-4 font-semibold">Blackjack (stratégie de base)</td>
                    <td className="p-4">49.1%</td>
                    <td className="p-4 text-green-500">0.5%</td>
                    <td className="p-4">1:1 (3:2 sur Blackjack)</td>
                  </tr>
                  <tr className="hover:bg-primary/5">
                    <td className="p-4 font-semibold">Baccarat (Banker)</td>
                    <td className="p-4">45.8%</td>
                    <td className="p-4 text-green-500">1.06%</td>
                    <td className="p-4">1:1 (commission 5%)</td>
                  </tr>
                  <tr className="hover:bg-primary/5">
                    <td className="p-4 font-semibold">Baccarat (Player)</td>
                    <td className="p-4">44.6%</td>
                    <td className="p-4 text-green-500">1.24%</td>
                    <td className="p-4">1:1</td>
                  </tr>
                  <tr className="hover:bg-primary/5">
                    <td className="p-4 font-semibold">Roulette Européenne (Rouge/Noir)</td>
                    <td className="p-4">48.6%</td>
                    <td className="p-4 text-yellow-500">2.7%</td>
                    <td className="p-4">1:1</td>
                  </tr>
                  <tr className="hover:bg-primary/5">
                    <td className="p-4 font-semibold">Roulette Américaine (Rouge/Noir)</td>
                    <td className="p-4">47.4%</td>
                    <td className="p-4 text-orange-500">5.26%</td>
                    <td className="p-4">1:1</td>
                  </tr>
                  <tr className="hover:bg-primary/5">
                    <td className="p-4 font-semibold">Roulette Européenne (Numéro plein)</td>
                    <td className="p-4">2.7%</td>
                    <td className="p-4 text-yellow-500">2.7%</td>
                    <td className="p-4">35:1</td>
                  </tr>
                  <tr className="hover:bg-primary/5">
                    <td className="p-4 font-semibold">Craps (Pass Line)</td>
                    <td className="p-4">49.3%</td>
                    <td className="p-4 text-green-500">1.41%</td>
                    <td className="p-4">1:1</td>
                  </tr>
                  <tr className="hover:bg-primary/5">
                    <td className="p-4 font-semibold">Slots (moyenne)</td>
                    <td className="p-4">Variable</td>
                    <td className="p-4 text-orange-500">3-8%</td>
                    <td className="p-4">Dépend de la slot</td>
                  </tr>
                  <tr className="hover:bg-primary/5">
                    <td className="p-4 font-semibold">Keno</td>
                    <td className="p-4">25-40%</td>
                    <td className="p-4 text-red-500">25-40%</td>
                    <td className="p-4">Variable</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm text-foreground">
                <strong>💡 Conseil Pro :</strong> Privilégiez les jeux avec un House Edge inférieur à 2% pour maximiser vos chances sur le long terme. 
                Le blackjack et le baccarat sont mathématiquement les meilleurs choix.
              </p>
            </div>
          </section>

          {/* Témoignages */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Users className="h-8 w-8" />
              Ce Que Disent les Joueurs sur Nos Astuces Casino
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">👤</span>
                  <div>
                    <p className="font-bold">Marc L.</p>
                    <p className="text-sm text-muted-foreground">Joueur depuis 3 ans</p>
                  </div>
                </div>
                <p className="text-foreground italic">"La stratégie de base au blackjack a changé ma façon de jouer. Je gagne beaucoup plus régulièrement depuis que je l'applique systématiquement."</p>
                <div className="mt-3 text-primary font-semibold">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">👤</span>
                  <div>
                    <p className="font-bold">Sophie D.</p>
                    <p className="text-sm text-muted-foreground">Joueuse occasionnelle</p>
                  </div>
                </div>
                <p className="text-foreground italic">"La méthode des 100 spins sur les slots m'a permis d'économiser beaucoup d'argent. Je ne m'acharne plus sur des machines froides !"</p>
                <div className="mt-3 text-primary font-semibold">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">👤</span>
                  <div>
                    <p className="font-bold">Thomas R.</p>
                    <p className="text-sm text-muted-foreground">Joueur régulier</p>
                  </div>
                </div>
                <p className="text-foreground italic">"Les conseils de gestion de bankroll ont été un game-changer. Je joue beaucoup plus longtemps avec le même budget maintenant."</p>
                <div className="mt-3 text-primary font-semibold">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">👤</span>
                  <div>
                    <p className="font-bold">Julie M.</p>
                    <p className="text-sm text-muted-foreground">Débutante</p>
                  </div>
                </div>
                <p className="text-foreground italic">"En tant que débutante, ces astuces m'ont aidée à éviter beaucoup d'erreurs. Le comparatif des jeux est super utile pour choisir !"</p>
                <div className="mt-3 text-primary font-semibold">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">❓ FAQ : Questions Fréquentes sur les Astuces Casino</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Existe-t-il vraiment des astuces pour gagner au casino ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Oui et non. Les jeux de casino restent basés sur le hasard, mais certaines stratégies peuvent optimiser vos chances et surtout améliorer votre gestion de bankroll. Par exemple, la stratégie de base au blackjack réduit l'avantage de la maison à moins de 1%. L'essentiel est de jouer intelligemment, pas de chercher un système infaillible.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Quelle est la meilleure stratégie pour gagner à la roulette ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  À la roulette, aucune stratégie ne peut changer les probabilités mathématiques. Cependant, la Martingale classique ou inversée peuvent vous aider à mieux gérer vos mises. Le plus important : jouez sur une roulette européenne (1 zéro) plutôt qu'américaine (2 zéros) pour un RTP de 97.3% au lieu de 94.7%.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Comment gérer efficacement ma bankroll au casino ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  La règle d'or : ne misez jamais plus de 1-2% de votre bankroll totale sur un seul tour. Fixez-vous un budget maximum par session et des limites de gains/pertes. Utilisez les outils de jeu responsable des casinos (limites de dépôt, auto-exclusion temporaire). Et surtout, ne jouez jamais avec de l'argent dont vous avez besoin pour vivre.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Quel jeu de casino a les meilleures chances de gain ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Le blackjack offre le meilleur RTP (jusqu'à 99.5%) quand on applique la stratégie de base. Le baccarat suit de près avec 98.9% de RTP. Les machines à sous ont généralement un RTP plus bas (92-97%) mais offrent des gains potentiels plus importants avec les jackpots progressifs. Consultez notre tableau comparatif ci-dessus pour choisir selon votre profil.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Les bonus casino sont-ils vraiment avantageux ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ça dépend des conditions ! Les <a href="/bonus-sans-wager" className="text-primary hover:underline">bonus sans wager</a> sont excellents car vous pouvez retirer vos gains immédiatement. Les bonus avec wager élevé (x40+) sont souvent des pièges. Privilégiez aussi les <a href="/bonus-cashback" className="text-primary hover:underline">bonus cashback</a> qui vous remboursent une partie de vos pertes sans conditions compliquées.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  La méthode des 100 spins aux machines à sous fonctionne-t-elle vraiment ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Cette méthode ne change pas vos chances de gain, mais elle vous aide à identifier rapidement si une machine paie bien ou non. Sur 100 spins, vous devriez obtenir au moins quelques petits gains ou un bonus. Si la machine reste complètement froide, il vaut mieux en changer plutôt que de s'acharner et perdre plus d'argent.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Faut-il privilégier les casinos sans KYC ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Les <a href="/casinos-sans-kyc" className="text-primary hover:underline">casinos sans KYC</a> offrent l'avantage de retraits instantanés sans vérification d'identité, parfait pour ceux qui privilégient la confidentialité et la rapidité. Cependant, assurez-vous qu'ils possèdent une licence valide (Curaçao, MGA). Les casinos avec KYC sont plus régulés et offrent parfois de meilleures protections.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Comment éviter de devenir accro aux jeux de casino ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Fixez-vous des limites strictes de temps et d'argent avant chaque session. Utilisez systématiquement les outils de jeu responsable (limites de dépôt, rappels de temps). Ne jouez jamais pour récupérer vos pertes. Si vous sentez que le jeu devient problématique, utilisez l'auto-exclusion et contactez une association d'aide comme Joueurs Info Service (09 74 75 13 13).
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Outils & Ressources */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">🛠️ Outils & Ressources pour Joueurs Avertis</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Calculateurs Utiles
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Calculateur de Bankroll :</strong> Déterminez votre mise idéale selon votre budget</li>
                  <li>• <strong>Convertisseur Wager :</strong> Calculez le montant réel à miser pour valider un bonus</li>
                  <li>• <strong>Simulateur Martingale :</strong> Testez différentes progressions sans risque</li>
                  <li>• <strong>Tracker de Sessions :</strong> Suivez vos gains/pertes sur Excel</li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  Jeu Responsable
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Limites de Dépôt :</strong> Configurez un plafond mensuel sur votre compte</li>
                  <li>• <strong>Auto-Exclusion :</strong> Bloquez votre accès si nécessaire</li>
                  <li>• <strong>Test d'Addiction :</strong> Évaluez votre relation au jeu</li>
                  <li>• <strong>Aide :</strong> Joueurs Info Service (09 74 75 13 13)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Liens Connexes */}
          <RelatedLinks
            title="Guides et Bonus Recommandés"
            links={[
              {
                title: "Meilleurs Bonus Sans Wager 2026",
                description: "Retirez vos gains immédiatement avec ces bonus sans conditions de mise",
                href: "/bonus-sans-wager"
              },
              {
                title: "Top Casinos Sans KYC",
                description: "Jouez et retirez sans vérification d'identité sur ces plateformes crypto",
                href: "/casinos-sans-kyc"
              },
              {
                title: "Bonus Cashback : Meilleurs Offres",
                description: "Récupérez jusqu'à 20% de vos pertes chaque semaine automatiquement",
                href: "/bonus-cashback"
              },
              {
                title: "Top 10 Machines à Sous 2026",
                description: "Les slots avec les meilleurs RTP et les plus gros jackpots du moment",
                href: "/top-slots-2026"
              },
              {
                title: "Casinos Crypto Recommandés",
                description: "Jouez avec Bitcoin, Ethereum et autres cryptos sur ces plateformes fiables",
                href: "/top-casinos-crypto"
              }
            ]}
          />

          {/* Conclusion */}
          <div className="glass-card rounded-2xl p-8 mb-12 mt-16 max-w-5xl mx-auto bg-primary/5 border-2 border-primary/20">
            <h2 className="text-2xl font-bold mb-4 text-primary text-center">Conclusion : Jouez Malin, Jouez Responsable</h2>
            <p className="text-center text-foreground text-lg leading-relaxed">
              📝 Ces astuces casino 2026 sont conçues pour améliorer votre expérience de jeu et optimiser votre gestion de bankroll. Rappelez-vous : aucune stratégie ne garantit le gain, mais une approche intelligente et disciplinée fait toute la différence. Exploitez les <a href="/bonus-sans-wager" className="text-primary hover:underline font-semibold">bonus sans wager</a>, pratiquez sur des <a href="/casinos-sans-kyc" className="text-primary hover:underline font-semibold">casinos fiables</a>, et surtout, jouez toujours avec modération. Le casino doit rester un divertissement, pas une source de stress financier.
            </p>
          </div>
        </div>
      </div>
      
      {/* SEO Enriched Guide Content */}
      <SEOEnrichedGuide
        locale={locale}
        guideName={t('title')}
        description={t('seoDescription')}
        topCasinos={[
          { name: "SpinStar", slug: "spinstar", bonus: "700% jusqu'à 10,000€", rating: 9.8 },
          { name: "Kings Chance", slug: "kingschance", bonus: "150% jusqu'à 500€", rating: 9.5 },
          { name: "HunnyPlay", slug: "hunnyplay", bonus: "200% jusqu'à 200€", rating: 9.4 },
          { name: "Lucky Treasure", slug: "luckytreasure", bonus: "200% jusqu'à 2000€", rating: 9.3 },
          { name: "Spin Dynasty", slug: "spindinasty", bonus: "200% jusqu'à 2000€", rating: 9.2 }
        ]}
      />
      
      <Footer />
    </>
  );
};

