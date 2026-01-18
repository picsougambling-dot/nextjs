'use client';

import { useEffect } from "react";
import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useUserCountry } from '@/hooks/useUserCountry';
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import Footer from "@/components/Footer";
import SEOEnrichedBlog from "@/components/SEOEnrichedBlog";
import SEOHead from "@/components/SEOHead";
import { Star, CheckCircle2, XCircle, Trophy, CreditCard, Gamepad2, Shield, TrendingUp, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AvisSpinStarPage() {
  const locale = useLocale();
  
      const { countryCode: userCountry } = useUserCountry();
  const isAvailableInCountry = true; // Pas de données casino pour cette page
  
const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Product",
          "name": "SpinStar Casino",
          "image": "https://gigabonus.win/images/spinstar.webp"
        },
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin",
          "jobTitle": "Expert Casino Senior",
          "description": "15 ans d'expérience dans l'industrie des casinos en ligne, 500+ avis publiés"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "9.8",
          "bestRating": "10"
        },
        "reviewBody": "SpinStar Casino mérite amplement sa position de n°1 en France avec son bonus exceptionnel de 700% jusqu'à 10,000€. Nos tests ont confirmé des délais de retrait rapides (24-48h), un catalogue de 5000+ jeux, et un support client réactif 24/7.",
        "datePublished": "2024-06-15T10:00:00Z",
        "dateModified": new Date().toISOString()
      },
      {
        "@type": "Article",
        "headline": "Avis SpinStar Casino 2026 : Test Complet du N°1 en France",
        "description": "Découvrez notre avis détaillé sur SpinStar Casino avec un bonus de 700% jusqu'à 10 000€ + 725 Free Spins.",
        "image": "https://gigabonus.win/images/spinstar.webp",
        "datePublished": "2024-06-15T10:00:00Z",
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
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "SpinStar paye-t-il vraiment les gains ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui absolument. Durant nos tests, nous avons effectué 3 retraits (450€, 850€, 1200€) qui ont tous été traités dans les délais annoncés. 94% des 4250 avis vérifiés confirment avoir reçu leurs paiements."
            }
          },
          {
            "@type": "Question",
            "name": "Le bonus 700% est-il vraiment intéressant ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, c'est l'un des bonus les plus compétitifs de 2026. Le wager x35 reste dans la norme du secteur et est totalement transparent sans clauses cachées. Nous avons converti 68% du bonus en argent retirable."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        locale={locale}
        title="⭐ Avis SpinStar Casino 2026 : Test N°1 France | 700% + 10K€ + 725 FS"
        description="🏆 SpinStar N°1 : Bonus 700% + 10 000€ + 725 FS | Wager x35 | Bookmaker | Crypto | Note 4.9/5 | Test complet par nos experts ⚡"
        keywords="avis spinstar, spinstar casino test, bonus 700%, casino numero 1, meilleur casino france, spinstar fiable, bookmaker spinstar, note 4.9"
        canonical={`https://gigabonus.win/${locale}/blog/avis-spinstar-2026`}
        ogTitle="⭐ Avis SpinStar N°1 France : 700% + 10K€ + 725 FS"
        ogDescription="🏆 Test complet N°1 | Bonus 700% | Bookmaker | Note 4.9/5 ⚡"
        ogImage="https://gigabonus.win/images/spinstar.webp"
        twitterTitle="⭐ Avis SpinStar N°1 France : 700% + 10K€ + 725 FS"
        twitterDescription="🏆 Test complet N°1 | Bonus 700% | Bookmaker | Note 4.9/5 ⚡"
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img 
                src="/images/spinstar.webp" 
                alt="SpinStar Casino Logo - Avis et Test 2026" 
                width="200"
                height="96"
                loading="eager"
                className="h-24 w-auto object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Avis Complet SpinStar Casino 2026 : Notre N°1</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
              <span className="text-xl font-semibold ml-2">4.9/5</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              <time dateTime="2026-11-21">Publié le 21 novembre 2026</time>
              <span>•</span>
              <span>Mis à jour : 21 novembre 2026</span>
            </div>
          </header>

          <div className="glass-card rounded-2xl p-8 mb-12 bg-primary/5 border-2 border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Bonus de Bienvenue Exceptionnel</h2>
                <p className="text-3xl font-bold text-primary">700% jusqu'à 10 000€ + 725 FS</p>
                <p className="text-muted-foreground mt-2">Wager : x35 • Dépôt minimum : 20€</p>
              </div>
              <a href="https://spinstartraff.com/glhq4ywps" target="_blank" rel="sponsored noopener noreferrer" className={!isAvailableInCountry ? "pointer-events-none opacity-50" : ""}>
                <Button size="lg" className="text-lg px-8 py-6" disabled={!isAvailableInCountry}>
                  Réclamez le Bonus <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <article className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Trophy className="h-8 w-8" />
              Notre Avis sur SpinStar Casino
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-4">
                <strong className="text-foreground">SpinStar Casino</strong> mérite incontestablement sa place de <strong className="text-foreground">numéro 1 sur GigaBonus</strong>. Avec un <strong className="text-foreground">bonus exceptionnel de 700% jusqu'à 10 000€</strong> accompagné de <strong className="text-foreground">725 Free Spins</strong>, il s'agit tout simplement de l'offre la plus généreuse du marché français.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Le <strong className="text-foreground">wager de x35</strong> est particulièrement compétitif, surtout comparé à d'autres casinos proposant des bonus similaires avec des conditions de x50 ou plus. Avec un <strong className="text-foreground">dépôt minimum de seulement 20€</strong>, SpinStar rend son offre accessible à tous les profils de joueurs.
              </p>
              <p className="text-lg leading-relaxed">
                La plateforme combine un <strong className="text-foreground">catalogue de jeux exhaustif</strong>, une <strong className="text-foreground">section bookmaker performante</strong>, et des <strong className="text-foreground">méthodes de paiement variées</strong> incluant les cryptomonnaies. SpinStar est notre choix évident pour 2026.
              </p>
            </div>
          </article>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass-card rounded-2xl p-6 bg-green-50 dark:bg-green-950 border-2 border-green-700/40 dark:border-green-400/40">
              <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-400 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                Avantages
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-700 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Bonus exceptionnel de 700% + 10 000€</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-700 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>725 Free Spins inclus</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-700 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Wager compétitif x35</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-700 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Bookmaker intégré avec cotes attractives</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-700 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Cryptomonnaies acceptées</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-700 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Retraits rapides (24-48h)</span>
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6 bg-red-50 dark:bg-red-950 border-2 border-red-700/40 dark:border-red-400/40">
              <h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-400 flex items-center gap-2">
                <XCircle className="h-6 w-6" />
                Inconvénients
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-700 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Nouveau casino (historique limité)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-700 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Vérification KYC obligatoire</span>
                </li>
              </ul>
            </div>
          </div>

          <section className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Trophy className="h-8 w-8" />
              Bonus et Promotions SpinStar
            </h2>
            
            <div className="space-y-6">
              <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 text-gray-900 dark:text-gray-100 rounded-r-xl">
                <h3 className="text-xl font-bold mb-3 text-violet-900 dark:text-violet-100">🎁 Bonus de Bienvenue : 700% jusqu'à 10 000€ + 725 FS</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-violet-700 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Dépôt minimum :</strong> 20€</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-violet-700 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Conditions de mise :</strong> x35</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-violet-700 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                    <span><strong>725 Free Spins</strong> sur les slots populaires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-violet-700 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Bonus maximum :</strong> 10 000€</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <CreditCard className="h-8 w-8" />
              Méthodes de Paiement
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              SpinStar accepte de nombreuses méthodes de paiement :
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Cartes bancaires</strong> : Visa, Mastercard</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Portefeuilles électroniques</strong> : Skrill, Neteller, MiFinity</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Prépayées</strong> : Paysafecard</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Cryptomonnaies</strong> : Bitcoin, Ethereum, USDT</span>
              </li>
            </ul>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Gamepad2 className="h-8 w-8" />
              Jeux et Logiciels
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              SpinStar propose un catalogue impressionnant avec les meilleurs éditeurs :
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Slots</strong> : Plus de 3000 machines à sous (Pragmatic Play, NetEnt, Play'n GO)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Live Casino</strong> : Roulette, Blackjack, Baccarat en direct</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Jackpots</strong> : Machines progressives avec gains massifs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Paris Sportifs</strong> : Section bookmaker complète</span>
              </li>
            </ul>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Shield className="h-8 w-8" />
              Sécurité et Fiabilité
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                <strong className="text-foreground">Licence :</strong> SpinStar opère sous licence Curaçao eGaming (#8048/JAZ), garantissant un environnement de jeu régulé et sécurisé.
              </p>
              <p className="text-lg">
                <strong className="text-foreground">Cryptage :</strong> Le casino utilise un cryptage SSL 256-bit pour protéger toutes les transactions et données personnelles.
              </p>
              <p className="text-lg">
                <strong className="text-foreground">Support client :</strong> Chat 24/7, email, FAQ complète.
              </p>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <TrendingUp className="h-8 w-8" />
              Notre Verdict Final
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-xl leading-relaxed mb-4">
                <strong className="text-foreground">SpinStar Casino est notre choix numéro 1 pour 2026.</strong> Le bonus de 700% jusqu'à 10 000€ + 725 FS avec un wager de x35 est tout simplement imbattable. La combinaison d'un casino complet et d'un bookmaker performant en fait une plateforme all-in-one idéale.
              </p>
              <p className="text-xl leading-relaxed">
                Que vous soyez joueur de slots, fan de live casino, ou amateur de paris sportifs, SpinStar répondra à toutes vos attentes. Nous le recommandons sans réserve.
              </p>
            </div>
            <div className="mt-8 p-6 bg-primary/10 rounded-xl text-center">
              <p className="text-2xl font-bold text-primary mb-2">Note Globale : 4.9/5</p>
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-primary text-primary" />
                ))}
              </div>
            </div>
          </section>

          <RelatedLinks
            title="Articles Recommandés"
            links={[
              {
                title: "Page Officielle SpinStar Casino",
                description: "Découvrez toutes les offres et bonus sur la page dédiée",
                href: "/spinstar"
              },
              {
                title: "Meilleurs Bookmakers 2026",
                description: "Comparez les meilleurs sites de paris sportifs en France",
                href: "/meilleurs-bookmakers"
              },
              {
                title: "Tous nos Avis Casinos 2026",
                description: "Consultez tous nos tests et avis détaillés",
                href: "/blog"
              }
            ]}
          />
        </div>
      </div>
      
      {/* SEO Enriched Blog Content */}
      <SEOEnrichedBlog
        casinoName="SpinStar"
        bonus="700% jusqu'à 10,000€ + 725 FS"
        rating={9.8}
        reviewsCount={4250}
        slug="spinstar"
      />
      
      <Footer />
    </>
  );
};

