'use client';

import { useState, useMemo, useEffect } from "react";
import { Link } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
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
import { Bitcoin, Shield, Zap, Lock } from "lucide-react";
import { useUserCountry } from "@/hooks/useUserCountry";

export default function TopCasinosCryptoPage() {
  const locale = useLocale();
  const t = useTranslations('GuidePages.topCasinosCrypto');
  const [searchTerm, setSearchTerm] = useState("");
  const [bonusFilter, setBonusFilter] = useState("all");
  const [wagerFilter, setWagerFilter] = useState("all");
  const [displayedCount, setDisplayedCount] = useState(9);

  // Récupérer le pays de l'utilisateur pour filtrer les casinos
  const { countryCode: userCountry } = useUserCountry();

  // Filter out Magical Spin and hidden casinos
  const allCasinos = useMemo(() => {
    return casinos.filter((casino) => casino.name !== "Magical Spin" && !casino.hidden).sort((a, b) => a.rank - b.rank);
  }, []);

  const filteredCasinos = useMemo(() => {
    return allCasinos.filter((casino) => {
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
  }, [allCasinos, searchTerm, bonusFilter, wagerFilter, userCountry]);

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
        "image": "https://gigabonus.win/images/methods/crypto.webp",
        "datePublished": "2025-01-15T10:00:00+01:00",
        "dateModified": new Date().toISOString(),
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
          "ratingValue": "9.5",
          "bestRating": "10"
        },
        "itemReviewed": {
          "@type": "Product",
          "name": t('title'),
          "description": t('seoDescription')
        },
        "reviewBody": t('seoDescription'),
        "datePublished": "2025-01-15"
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
        canonical={getTranslatedCanonical('/top-casinos-crypto', locale)}
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
              <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('intro.p1', { 
                year: '2025',
                casinosCrypto: '<strong class="text-primary">casinos crypto</strong>',
                siteName: '<strong class="text-primary">GigaBonus.win</strong>',
                stake: '<strong class="text-primary">Stake</strong>',
                gamdom: '<strong class="text-primary">Gamdom</strong>',
                roobet: '<strong class="text-primary">Roobet</strong>',
                rainbet: '<strong class="text-primary">Rainbet</strong>',
                betfury: '<strong class="text-primary">Betfury</strong>',
                shuffle: '<strong class="text-primary">Shuffle</strong>',
                moonroll: '<strong class="text-primary">Moonroll</strong>',
                howl: '<strong class="text-primary">Howl.gg</strong>'
              }) }} />
              <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('intro.p2', {
                transactionsInstant: '<strong class="text-primary">transactions instantanées</strong>',
                retraitsUltraRapides: '<strong class="text-primary">retraits ultra-rapides</strong>',
                anonymatTotal: '<strong class="text-primary">anonymat total</strong>',
                bonusCryptoExclusifs: '<strong class="text-primary">bonus crypto exclusifs</strong>'
              }) }} />
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>{t('intro.features.anonymat')}</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>{t('intro.features.retraits')}</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>{t('intro.features.sansKyc')}</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>{t('intro.features.bonus')}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Additional SEO Content */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground">
              <h2 className="text-3xl font-bold mb-4">{t('whyChoose.title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t('whyChoose.intro', {
                casinosCrypto: '<strong class="text-primary">casinos crypto</strong>',
                year: '2025',
                cryptomonnaies: '<strong class="text-primary">cryptomonnaies</strong>'
              }) }} />
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="border border-primary/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary">⚡</span> {t('whyChoose.features.fast.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground">{t('whyChoose.features.fast.description')}</p>
                </div>
                <div className="border border-primary/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary">🔒</span> {t('whyChoose.features.anonymous.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground">{t('whyChoose.features.anonymous.description')}</p>
                </div>
                <div className="border border-primary/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary">💰</span> {t('whyChoose.features.lowFees.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground">{t('whyChoose.features.lowFees.description')}</p>
                </div>
                <div className="border border-primary/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary">🎁</span> {t('whyChoose.features.bonus.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground">{t('whyChoose.features.bonus.description')}</p>
                </div>
                <div className="border border-primary/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary">🌍</span> {t('whyChoose.features.global.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground">{t('whyChoose.features.global.description')}</p>
                </div>
                <div className="border border-primary/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary">🎲</span> {t('whyChoose.features.provablyFair.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground">{t('whyChoose.features.provablyFair.description')}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground">
              <h2 className="text-3xl font-bold mb-4">{t('howToPlay.title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t('howToPlay.intro', {
                casinosEnCryptomonnaies: '<strong class="text-primary">casinos en cryptomonnaies</strong>'
              }) }} />
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-primary font-bold text-xl">1.</span>
                  <div>
                    <strong className="text-foreground">{t('howToPlay.steps.1.title')}</strong>
                    <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('howToPlay.steps.1.description', {
                      metamask: '<strong class="text-primary">Metamask</strong>',
                      trustWallet: '<strong class="text-primary">Trust Wallet</strong>',
                      ledger: '<strong class="text-primary">Ledger</strong>'
                    }) }} />
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold text-xl">2.</span>
                  <div>
                    <strong className="text-foreground">{t('howToPlay.steps.2.title')}</strong>
                    <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('howToPlay.steps.2.description', {
                      binance: '<strong class="text-primary">Binance</strong>',
                      coinbase: '<strong class="text-primary">Coinbase</strong>',
                      kraken: '<strong class="text-primary">Kraken</strong>'
                    }) }} />
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
                    <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('howToPlay.steps.6.description', {
                      verifiezToujours: '<strong class="text-primary">Vérifiez TOUJOURS</strong>'
                    }) }} />
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold text-xl">7.</span>
                  <div>
                    <strong className="text-foreground">{t('howToPlay.steps.7.title')}</strong>
                    <p className="text-muted-foreground">{t('howToPlay.steps.7.description')}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold text-xl">8.</span>
                  <div>
                    <strong className="text-foreground">{t('howToPlay.steps.8.title')}</strong>
                    <p className="text-muted-foreground">{t('howToPlay.steps.8.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground">
              <h2 className="text-3xl font-bold mb-4">{t('cryptocurrencies.title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t('cryptocurrencies.intro', {
                casinosCrypto2025: '<strong class="text-primary">casinos crypto 2025</strong>'
              }) }} />
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{t('cryptocurrencies.coins.btc.title')}</h3>
                  <p className="text-muted-foreground">{t('cryptocurrencies.coins.btc.description')}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{t('cryptocurrencies.coins.eth.title')}</h3>
                  <p className="text-muted-foreground">{t('cryptocurrencies.coins.eth.description')}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{t('cryptocurrencies.coins.ltc.title')}</h3>
                  <p className="text-muted-foreground">{t('cryptocurrencies.coins.ltc.description')}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{t('cryptocurrencies.coins.usdt.title')}</h3>
                  <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('cryptocurrencies.coins.usdt.description', {
                    parfaitPourEviter: '<strong class="text-primary">Parfait pour éviter</strong>'
                  }) }} />
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{t('cryptocurrencies.coins.bch.title')}</h3>
                  <p className="text-muted-foreground">{t('cryptocurrencies.coins.bch.description')}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{t('cryptocurrencies.coins.doge.title')}</h3>
                  <p className="text-muted-foreground">{t('cryptocurrencies.coins.doge.description')}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{t('cryptocurrencies.coins.others.title')}</h3>
                  <p className="text-muted-foreground">{t('cryptocurrencies.coins.others.description')}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground">
              <h2 className="text-3xl font-bold mb-4">{t('security.title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t('security.intro', {
                cryptomonnaies: '<strong class="text-primary">cryptomonnaies</strong>'
              }) }} />
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">{t('security.tips.seed.title')}</strong>
                    <p className="text-sm text-muted-foreground">{t('security.tips.seed.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">{t('security.tips.address.title')}</strong>
                    <p className="text-sm text-muted-foreground">{t('security.tips.address.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">{t('security.tips.network.title')}</strong>
                    <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('security.tips.network.description', {
                      envoyezToujours: '<strong class="text-primary">Envoyez TOUJOURS</strong>'
                    }) }} />
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">{t('security.tips.test.title')}</strong>
                    <p className="text-sm text-muted-foreground">{t('security.tips.test.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">{t('security.tips.wallet.title')}</strong>
                    <p className="text-sm text-muted-foreground">{t('security.tips.wallet.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">{t('security.tips.2fa.title')}</strong>
                    <p className="text-sm text-muted-foreground">{t('security.tips.2fa.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">{t('security.tips.bonus.title')}</strong>
                    <p className="text-sm text-muted-foreground">{t('security.tips.bonus.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pure Crypto Casinos Section */}
          <section className="mb-12 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary dark:text-secondary">
              {t('recommended.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Gamdom */}
              <article className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 relative">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  poster="/images/gamdom.webp" 
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/gamdom.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 p-6 h-64 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <img src="/images/gamdom.webp" alt={`Gamdom ${t('title')}`} width={150} height={64} loading="lazy" className="h-16 w-auto object-contain mb-4" />
                  <a 
                    href="https://gamdom.com/r/picsou777" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    {t('recommended.play')}
                  </a>
                </div>
              </article>

              {/* Stake */}
              <article className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 relative">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  poster="/images/stake.webp" 
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/stake.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 p-6 h-64 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <img src="/images/stake.webp" alt={`Stake ${t('title')}`} width={150} height={64} loading="lazy" className="h-16 w-auto object-contain mb-4" />
                  <a 
                    href="https://stake.com/?c=PICSOU" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    {t('recommended.play')}
                  </a>
                </div>
              </article>

              {/* Roobet */}
              <article className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 relative">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  poster="/images/roobet.webp" 
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/roobet.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 p-6 h-64 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <img src="/images/roobet.webp" alt={`Roobet ${t('title')}`} width={150} height={64} loading="lazy" className="h-16 w-auto object-contain mb-4" />
                  <a 
                    href="https://roobet.com/?ref=j7660024" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    {t('recommended.play')}
                  </a>
                </div>
              </article>

              {/* Rainbet */}
              <article className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 relative">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  poster="/images/rainbet.webp" 
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/rainbet.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 p-6 h-64 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <img src="/images/rainbet.webp" alt={`Rainbet ${t('title')}`} width={150} height={64} loading="lazy" className="h-16 w-auto object-contain mb-4" />
                  <a 
                    href="https://rainbet.com/?r=picsou" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    {t('recommended.play')}
                  </a>
                </div>
              </article>

              {/* Betfury */}
              <article className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 relative">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  poster="/images/betfury.webp" 
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/betfury.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 p-6 h-64 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <img src="/images/betfury.webp" alt={`Betfury ${t('title')}`} width={150} height={64} loading="lazy" className="h-16 w-auto object-contain mb-4" />
                  <a 
                    href="https://betfury.com/?r=PICSOU" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    {t('recommended.play')}
                  </a>
                </div>
              </article>

              {/* Shuffle */}
              <article className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 relative">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  poster="/images/shuffle.webp" 
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/shuffle.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 p-6 h-64 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <img src="/images/shuffle.webp" alt={`Shuffle ${t('title')}`} width={150} height={64} loading="lazy" className="h-16 w-auto object-contain mb-4" />
                  <a 
                    href="https://shuffle.com/?r=ia2Msb2k4h" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    {t('recommended.play')}
                  </a>
                </div>
              </article>

              {/* Moonroll */}
              <article className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 relative">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  poster="/images/moonroll.webp" 
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/moonroll.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 p-6 h-64 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <img src="/images/moonroll.webp" alt={`Moonroll ${t('title')}`} width={150} height={64} loading="lazy" className="h-16 w-auto object-contain mb-4" />
                  <a 
                    href="https://moonroll.io/r/picsou" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    {t('recommended.play')}
                  </a>
                </div>
              </article>

              {/* Howl.gg */}
              <article className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 relative">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  poster="/images/howlgg.webp" 
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/howlgg.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 p-6 h-64 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <img src="/images/howlgg.webp" alt={`Howl.gg ${t('title')}`} width={150} height={64} loading="lazy" className="h-16 w-auto object-contain mb-4" />
                  <a 
                    href="https://howl.gg/r/picsou777" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    {t('recommended.play')}
                  </a>
                </div>
              </article>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-6xl mx-auto overflow-x-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-primary dark:text-secondary">
              {t('ranking.title')}
            </h2>
            <table className="w-full text-left">
              <caption className="sr-only">{t('ranking.caption')}</caption>
              <thead>
                <tr className="border-b border-border text-center">
                  <th scope="col" className="py-3 px-4 text-center">{t('ranking.columns.rank')}</th>
                  <th scope="col" className="py-3 px-4 text-center">{t('ranking.columns.casino')}</th>
                  <th scope="col" className="py-3 px-4 text-center">{t('ranking.columns.action')}</th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                <tr className="border-b border-border/50 text-center">
                  <td className="py-3 px-4 text-center">🥇</td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://gamdom.com/r/picsou777" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <img src="/images/gamdom.webp" alt="Gamdom Casino Crypto" width={100} height={40} loading="lazy" className="h-10 w-auto mx-auto" />
                    </a>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://gamdom.com/r/picsou777" target="_blank" rel="noopener noreferrer"                     className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors inline-block">
                      {t('recommended.activate')}
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-border/50 text-center">
                  <td className="py-3 px-4 text-center">🥈</td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://stake.com/?c=PICSOU" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <img src="/images/stake.webp" alt="Stake Casino Crypto" width={100} height={40} loading="lazy" className="h-10 w-auto mx-auto" />
                    </a>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://stake.com/?c=PICSOU" target="_blank" rel="noopener noreferrer"                     className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors inline-block">
                      {t('recommended.activate')}
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-border/50 text-center">
                  <td className="py-3 px-4 text-center">🥉</td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://roobet.com/?ref=j7660024" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <img src="/images/roobet.webp" alt="Roobet Casino Crypto" width={100} height={40} loading="lazy" className="h-10 w-auto mx-auto" />
                    </a>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://roobet.com/?ref=j7660024" target="_blank" rel="noopener noreferrer"                     className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors inline-block">
                      {t('recommended.activate')}
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-border/50 text-center">
                  <td className="py-3 px-4 text-center">4</td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://rainbet.com/?r=picsou" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <img src="/images/rainbet.webp" alt="RainBet Casino Crypto" width={100} height={40} loading="lazy" className="h-10 w-auto mx-auto" />
                    </a>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://rainbet.com/?r=picsou" target="_blank" rel="noopener noreferrer"                     className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors inline-block">
                      {t('recommended.activate')}
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-border/50 text-center">
                  <td className="py-3 px-4 text-center">5</td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://betfury.com/?r=PICSOU" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <img src="/images/betfury.webp" alt="BetFury Casino Crypto" width={100} height={40} loading="lazy" className="h-10 w-auto mx-auto" />
                    </a>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://betfury.com/?r=PICSOU" target="_blank" rel="noopener noreferrer"                     className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors inline-block">
                      {t('recommended.activate')}
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-border/50 text-center">
                  <td className="py-3 px-4 text-center">6</td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://shuffle.com/?r=ia2Msb2k4h" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <img src="/images/shuffle.webp" alt="Shuffle Casino Crypto" width={100} height={40} loading="lazy" className="h-10 w-auto mx-auto" />
                    </a>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://shuffle.com/?r=ia2Msb2k4h" target="_blank" rel="noopener noreferrer"                     className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors inline-block">
                      {t('recommended.activate')}
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-border/50 text-center">
                  <td className="py-3 px-4 text-center">7</td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://moonroll.io/r/picsou" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <img src="/images/moonroll.webp" alt="MoonRoll Casino Crypto" width={100} height={48} loading="lazy" className="h-12 w-auto mx-auto" />
                    </a>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://moonroll.io/r/picsou" target="_blank" rel="noopener noreferrer"                     className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors inline-block">
                      {t('recommended.activate')}
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-border/50 text-center">
                  <td className="py-3 px-4 text-center">8</td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://howl.gg/r/picsou777" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <img src="/images/howlgg.webp" alt="Howl Casino Crypto" width={100} height={48} loading="lazy" className="h-12 w-auto mx-auto" />
                    </a>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://howl.gg/r/picsou777" target="_blank" rel="noopener noreferrer"                     className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors inline-block">
                      {t('recommended.activate')}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Selection Criteria */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary dark:text-secondary">
              {t('selection.title')}
            </h2>
            <div className="space-y-4 text-foreground">
              <p dangerouslySetInnerHTML={{ __html: t('selection.p1', {
                siteName: '<strong class="text-primary">GigaBonus.win</strong>',
                transactionsInstantanees: '<strong class="text-primary">transactions instantanées</strong>',
                bonusReellementProfitables: '<strong class="text-primary">bonus réellement profitables</strong>',
                confidentialiteUtilisateur: '<strong class="text-primary">confidentialité utilisateur</strong>',
                plateformeSansKyc: '<strong class="text-primary">plateforme sans KYC obligatoire</strong>'
              }) }} />
              <p dangerouslySetInnerHTML={{ __html: t('selection.p2', {
                bitcoin: '<strong class="text-primary">Bitcoin</strong>',
                ethereum: '<strong class="text-primary">Ethereum</strong>',
                usdt: '<strong class="text-primary">USDT</strong>'
              }) }} />
              <p dangerouslySetInnerHTML={{ __html: t('selection.p3', {
                year: '2025'
              }) }} />
            </div>
          </section>

          {/* Additional Info - Other Casinos accepting crypto */}
          <section className="mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-primary dark:text-secondary">
              {t('otherCasinos.title')}
            </h2>
            <p className="text-center text-foreground mb-8">
              {t('otherCasinos.description')}
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
              <span className="text-primary font-semibold">{filteredCasinos.length}</span> {filteredCasinos.length > 1 ? t('results.foundPlural', { count: filteredCasinos.length }) : t('results.found', { count: filteredCasinos.length })}
            </p>
          </div>

          {/* Tabs for Card/Table view */}
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
                    {t('results.none')}
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
                    {t('results.none')}
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* FAQ Section */}
          <section className="mt-16 max-w-4xl mx-auto space-y-8">
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
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('faq.q6.question')}</h3>
                  <p className="text-muted-foreground">{t('faq.q6.answer')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('faq.q7.question')}</h3>
                  <p className="text-muted-foreground">{t('faq.q7.answer')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('faq.q8.question')}</h3>
                  <p className="text-muted-foreground">{t('faq.q8.answer')}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <div className="mt-16">
            <RelatedLinks
              title={t('relatedLinks.title')}
              links={[
              {
                title: t('relatedLinks.links.noKyc.title'),
                description: t('relatedLinks.links.noKyc.description'),
                href: "/casinos-sans-kyc"
              },
              {
                title: t('relatedLinks.links.cashback.title'),
                description: t('relatedLinks.links.cashback.description'),
                href: "/bonus-cashback"
              },
              {
                title: t('relatedLinks.links.cryptoDeposit.title'),
                description: t('relatedLinks.links.cryptoDeposit.description'),
                href: "/depot/crypto"
              },
              {
                title: t('relatedLinks.links.topSlots.title'),
                description: t('relatedLinks.links.topSlots.description'),
                href: "/top-slots-2025"
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
        description={t('seoDescription')}
        topCasinos={[
          { name: "SpinStar", slug: "spinstar", bonus: "700% jusqu'à 10,000€", rating: 9.8 },
          { name: "HunnyPlay", slug: "hunnyplay", bonus: "200% jusqu'à 200€", rating: 9.4 },
          { name: "Kings Chance", slug: "kingschance", bonus: "150% jusqu'à 500€", rating: 9.5 },
          { name: "Lucky Treasure", slug: "luckytreasure", bonus: "200% jusqu'à 2000€", rating: 9.3 },
          { name: "SlotRush", slug: "slotrush", bonus: "100% jusqu'à 500€", rating: 9.2 }
        ]}
      />
      
      <Footer />
    </>
  );
};


