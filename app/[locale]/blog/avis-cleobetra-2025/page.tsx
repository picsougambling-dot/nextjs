'use client';


import { useEffect } from "react";
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import Footer from "@/components/Footer";
import SEOEnrichedBlog from "@/components/SEOEnrichedBlog";
import SEOHead from "@/components/SEOHead";
import { Star, CheckCircle2, XCircle, Trophy, CreditCard, Gamepad2, Shield, TrendingUp, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AvisCleobetraPage() {
  const locale = useLocale();
  
  
  
  const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Review",
      "itemReviewed": {
        "@type": "Casino",
        "name": "Avis Cleobetra 2025",
        "image": "https://gigabonus.win/images/cleobetra.webp"
      },
      "author": {
        "@type": "Person",
        "name": "Alexandre Martin",
        "jobTitle": "Expert Casino Senior"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "9.1",
        "bestRating": "10",
        "worstRating": "1"
      },
      "reviewBody": "Cleobetra combine thème égyptien immersif et 8 promotions hebdomadaires généreuses. Le cashback sans wager de 15% sur le live casino est exceptionnel. Bookmaker intégré et 3000+ jeux.",
      "datePublished": "2025-01-15",
      "publisher": {
        "@type": "Organization",
        "name": "GigaBonus"
      }
    },
    {
      "@type": "Article",
      "headline": "🎰 Avis Cleobetra 2025 : Test Complet + Bonus 100% jusqu'à 500€ + 200 FS | GigaBonus",
      "description": "⭐ Avis complet Cleobetra 2025 : bonus 100% + 200 FS, programme hebdomadaire avec 7 promotions, casino + sport. Test détaillé par nos experts.",
      "image": "https://gigabonus.win/images/cleobetra.webp",
      "datePublished": "2025-01-15T10:00:00+01:00",
      "dateModified": "2025-11-28T00:45:35.346Z",
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
        title="🎰 Avis Cleobetra 2025 : Test Complet + Bonus 100% jusqu'à 500€ + 200 FS | GigaBonus"
        description="⭐ Avis complet Cleobetra 2025 : bonus 100% + 200 FS, programme hebdomadaire avec 7 promotions, casino + sport. Test détaillé par nos experts."
        keywords="avis cleobetra, cleobetra casino, bonus cleobetra, cleobetra 2025, test cleobetra, cleobetra fiable, avis casino cleobetra, promotions hebdomadaires"
        canonical="https://gigabonus.win/blog/avis-cleobetra-2025"
        ogTitle="🎰 Avis Cleobetra 2025 : Test Complet + Bonus 100% + 200 FS"
        ogDescription="⭐ Notre test détaillé de Cleobetra : bonus 100% + 200 FS, programme hebdomadaire exceptionnel. Avis d'experts avec avantages et inconvénients."
        ogImage="https://gigabonus.win/images/cleobetra.webp"
        twitterTitle="🎰 Avis Cleobetra 2025 : Test Complet + Bonus 100% + 200 FS"
        twitterDescription="⭐ Notre test détaillé de Cleobetra : bonus 100% + 200 FS, programme hebdomadaire exceptionnel. Avis d'experts avec avantages et inconvénients."
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img 
                src="/images/cleobetra.webp" 
                alt="Cleobetra Casino Logo - Avis et Test Complet 2025 avec bonus 100% jusqu'à 500€ + 200 FS" 
                width="200"
                height="96"
                loading="eager"
                className="h-24 w-auto object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Avis Complet Cleobetra 2025</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-6 w-6 ${i < 4 ? 'fill-primary text-primary' : 'text-gray-300'}`} />
              ))}
              <span className="text-xl font-semibold ml-2">4.6/5</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              <time dateTime="2025-09-28">Publié le 28 septembre 2025</time>
              <span>•</span>
              <span>Mis à jour : 28 septembre 2025</span>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez notre avis détaillé sur Cleobetra, le casino au thème égyptien avec un programme hebdomadaire exceptionnel de 7 promotions différentes.
            </p>
          </header>

          {/* CTA Principal */}
          <div className="glass-card rounded-2xl p-8 mb-12 bg-primary/5 border-2 border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Bonus de Bienvenue Exclusif</h2>
                <p className="text-3xl font-bold text-primary">100% jusqu'à 500€ + 200 FS</p>
                <p className="text-muted-foreground mt-2">Wager : x35 • Dépôt minimum : 20€</p>
              </div>
              <a href="https://clb.kngpulse.com/?mid=309124_1828652" target="_blank" rel="sponsored noopener noreferrer">
                <Button size="lg" className="text-lg px-8 py-6">
                  Réclamez le Bonus <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Introduction */}
          <article className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Trophy className="h-8 w-8" />
              Notre Avis sur Cleobetra Casino
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-4">
                <strong className="text-foreground">Cleobetra</strong> se distingue par son <strong className="text-foreground">thème égyptien immersif</strong> et son <strong className="text-foreground">programme hebdomadaire exceptionnel</strong> comprenant 7 promotions différentes. Lancé en 2024, ce casino en ligne combine <strong className="text-foreground">jeux de casino classiques et paris sportifs</strong> dans une interface élégante.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Le <strong className="text-foreground">bonus de bienvenue de 100% jusqu'à 500€</strong> s'accompagne de <strong className="text-foreground">200 Free Spins</strong>, avec des conditions de mise modérées de x35. Mais c'est surtout le <strong className="text-foreground">programme hebdomadaire</strong> qui séduit : reload lundi, cashback mercredi, weekend boost samedi, et bien d'autres promotions quotidiennes.
              </p>
              <p className="text-lg leading-relaxed">
                Disponible sur <strong className="text-foreground">mobile et desktop</strong>, Cleobetra propose plus de <strong className="text-foreground">3000 jeux</strong> de fournisseurs réputés, des <strong className="text-foreground">retraits rapides en 24-48h</strong>, et un <strong className="text-foreground">support client multilingue</strong>. Un choix solide pour les joueurs recherchant un casino avec des promotions régulières.
              </p>
            </div>
          </article>

          {/* Avantages et Inconvénients */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass-card rounded-2xl p-6 bg-green-50 dark:bg-green-950 border-2 border-green-700/40 dark:border-green-400/40">
              <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-400 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                Avantages
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-700 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Programme hebdomadaire de 7 promotions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-700 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Bonus de bienvenue + 200 Free Spins</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-700 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Casino + Paris sportifs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-700 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Retraits rapides (24-48h)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-700 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Interface thématique immersive</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-700 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Support client réactif</span>
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
                  <span>Bonus limité à 500€</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-700 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Conditions de wager x35</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-700 dark:text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Vérification KYC obligatoire</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bonus Section */}
          <section className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Trophy className="h-8 w-8" />
              Bonus et Promotions Cleobetra
            </h2>
            
            <div className="space-y-6">
              <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 text-gray-900 dark:text-gray-100 rounded-r-xl">
                <h3 className="text-xl font-bold mb-3 text-violet-900 dark:text-violet-100">🎁 Bonus de Bienvenue : 100% jusqu'à 500€ + 200 FS</h3>
                <p className="mb-4">
                  Le pack de bienvenue de Cleobetra offre un <strong>bonus de 100% sur votre premier dépôt jusqu'à 500€</strong>, accompagné de <strong>200 Free Spins</strong> à utiliser sur les machines à sous populaires.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-violet-700 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Dépôt minimum :</strong> 20€</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-violet-700 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Conditions de mise :</strong> x35 (bonus + dépôt)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-violet-700 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Délai d'utilisation :</strong> 30 jours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-violet-700 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Jeux éligibles :</strong> Slots (100%), Live Casino (10%)</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 text-gray-900 dark:text-gray-100 rounded-r-xl">
                <h3 className="text-xl font-bold mb-3 text-violet-900 dark:text-violet-100">📅 Programme Hebdomadaire Complet</h3>
                <p className="mb-4">
                  Cleobetra se distingue par son <strong>programme hebdomadaire exceptionnel</strong> avec 7 promotions différentes :
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="h-5 w-5 text-violet-700 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Lundi :</strong> Reload Bonus 50% jusqu'à 300€</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="h-5 w-5 text-violet-700 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Mardi :</strong> 25 Free Spins sur dépôt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="h-5 w-5 text-violet-700 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Mercredi :</strong> Cashback 10% jusqu'à 200€</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="h-5 w-5 text-violet-700 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Jeudi :</strong> Bonus Sport 30% jusqu'à 150€</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="h-5 w-5 text-violet-700 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Vendredi :</strong> Live Casino Boost 20%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="h-5 w-5 text-violet-700 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Samedi :</strong> Weekend Reload 75% jusqu'à 500€</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="h-5 w-5 text-violet-700 dark:text-violet-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Dimanche :</strong> Cashback Live 15%</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Jeux Section */}
          <section className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Gamepad2 className="h-8 w-8" />
              Catalogue de Jeux Cleobetra
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold mb-4 text-violet-900 dark:text-violet-100 flex items-center gap-2">
                  🎰 Machines à Sous
                </h3>
                <p className="text-muted-foreground mb-3">
                  Plus de <strong className="text-foreground">2000 machines à sous</strong> : Pragmatic Play, NetEnt, Microgaming, Play'n GO, Yggdrasil.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Book of Dead</li>
                  <li>• Starburst</li>
                  <li>• Gonzo's Quest</li>
                  <li>• Reactoonz</li>
                </ul>
              </div>

              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold mb-4 text-violet-900 dark:text-violet-100 flex items-center gap-2">
                  🎲 Casino Live
                </h3>
                <p className="text-muted-foreground mb-3">
                  <strong className="text-foreground">Tables en direct</strong> avec croupiers professionnels.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Evolution Gaming</li>
                  <li>• Pragmatic Play Live</li>
                  <li>• Roulette, Blackjack, Baccarat</li>
                  <li>• Game Shows (Monopoly, Dream Catcher)</li>
                </ul>
              </div>

              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold mb-4 text-violet-900 dark:text-violet-100 flex items-center gap-2">
                  ⚽ Paris Sportifs
                </h3>
                <p className="text-muted-foreground mb-3">
                  <strong className="text-foreground">Section sport complète</strong> avec paris pré-match et live.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Football, Tennis, Basketball</li>
                  <li>• E-sports</li>
                  <li>• Cotes compétitives</li>
                  <li>• Cash Out disponible</li>
                </ul>
              </div>

              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold mb-4 text-violet-900 dark:text-violet-100 flex items-center gap-2">
                  🃏 Jeux de Table
                </h3>
                <p className="text-muted-foreground mb-3">
                  <strong className="text-foreground">Jeux classiques</strong> en version RNG.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Blackjack (multiples variantes)</li>
                  <li>• Roulette (européenne, française)</li>
                  <li>• Baccarat</li>
                  <li>• Video Poker</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Méthodes de Paiement */}
          <section className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <CreditCard className="h-8 w-8" />
              Méthodes de Paiement
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-3 text-violet-900 dark:text-violet-100">💳 Dépôts</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Cartes bancaires</strong> - Instantané</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Cryptomonnaies</strong> - Instantané</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>E-wallets</strong> (Skrill, Neteller, MiFinity) - Instantané</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Paysafecard</strong> - Instantané</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>JetonBank</strong> - Instantané</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong className="text-foreground">Dépôt minimum :</strong> 20€
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-3 text-violet-900 dark:text-violet-100">💰 Retraits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Cryptomonnaies</strong> - 24h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>E-wallets</strong> - 24-48h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Cartes bancaires</strong> - 3-5 jours</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong className="text-foreground">Retrait minimum :</strong> 20€
                </p>
                <div className="bg-orange-100 dark:bg-orange-950 border-2 border-orange-700 dark:border-orange-400 rounded-xl p-4 mt-4">
                  <p className="text-sm">
                    <strong>⚠️ Important :</strong> Vérification KYC requise avant le premier retrait.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sécurité */}
          <section className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Shield className="h-8 w-8" />
              Sécurité et Licence
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-4">
                <strong className="text-foreground">Cleobetra</strong> opère sous une <strong className="text-foreground">licence Curaçao eGaming</strong>, garantissant un environnement de jeu réglementé. Le casino utilise le <strong className="text-foreground">cryptage SSL 256 bits</strong> pour protéger toutes les transactions et données personnelles.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/20 text-center">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-bold text-foreground mb-1">Licence Curaçao</h3>
                  <p className="text-sm">Casino réglementé</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/20 text-center">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-bold text-foreground mb-1">Cryptage SSL</h3>
                  <p className="text-sm">Paiements sécurisés</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/20 text-center">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-bold text-foreground mb-1">Jeu Responsable</h3>
                  <p className="text-sm">Outils de protection</p>
                </div>
              </div>
            </div>
          </section>

          {/* Verdict Final */}
          <section className="glass-card rounded-2xl p-8 mb-8 bg-primary/5 border-2 border-primary/20">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Star className="h-8 w-8" />
              Notre Verdict Final
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                <strong className="text-foreground">Cleobetra</strong> se positionne comme un <strong className="text-foreground">casino polyvalent et généreux</strong> grâce à son <strong className="text-foreground">programme hebdomadaire exceptionnel de 7 promotions</strong>. Le thème égyptien bien exécuté et l'interface intuitive rendent l'expérience de jeu agréable et immersive.
              </p>
              
              <div className="flex items-center justify-center gap-2 mt-8 mb-4">
                <span className="text-2xl font-bold">Note finale :</span>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-8 w-8 ${i < 4 ? 'fill-primary text-primary' : 'text-gray-300'}`} />
                ))}
                <span className="text-3xl font-bold text-primary ml-2">4.6/5</span>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <div className="glass-card rounded-2xl p-8 mb-8 bg-primary/5 border-2 border-primary/20 text-center">
            <h2 className="text-2xl font-bold mb-4">Prêt à rejoindre Cleobetra ?</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Profitez du bonus de bienvenue de 100% jusqu'à 500€ + 200 Free Spins
            </p>
            <a href="https://clb.kngpulse.com/?mid=309124_1828652" target="_blank" rel="sponsored noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-6">
                Réclamez Votre Bonus Maintenant <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

          <SEOEnrichedBlog
            casinoName="Cleobetra"
            bonus="150% + 200 FS"
            rating={9.1}
            reviewsCount={2700}
            slug="cleobetra"
          />

          <RelatedLinks 
            links={[
              { href: `/${locale}/blog`, title: "Retour au Blog", description: "Découvrez tous nos avis et guides casino" },
              { href: `/${locale}`, title: "Tous les Casinos", description: "Comparez les meilleurs casinos en ligne" },
              { href: `/${locale}/bonus-cashback`, title: "Bonus Cashback", description: "Récupérez vos pertes chaque semaine" }
            ]}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};



