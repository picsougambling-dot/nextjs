'use client';

import { useRef, useEffect } from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle2, Shield, Zap, CreditCard, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnrichedContent from "@/components/SEOEnrichedContent";
import SEOHead from "@/components/SEOHead";
import { casinos } from "@/data/casinos";

export default function CleobetraPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const casino = casinos.find(c => c.name === "Cleobetra")!;


  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const offers = [
    {
      id: 1,
      title: "Bonus de Bienvenue Casino – 150% jusqu'à 500€ + 200 FS",
      banner: "/images/cleobetra/welcome.webp",
      details: [
        "150% de bonus sur votre premier dépôt jusqu'à 500€",
        "200 Free Spins offerts sur les slots populaires",
        "Dépôt minimum : 20€",
        "Conditions de mise : 40× le montant du bonus",
        "Validité : 30 jours pour utiliser le bonus",
        "Free Spins valables sur Book of Dead et Starburst",
        "Gains des Free Spins soumis aux mêmes conditions de mise",
        "Support disponible pour toute question sur le bonus"
      ]
    },
    {
      id: 2,
      title: "Bonus Sport – 100% Jusqu'à 300€",
      banner: "/images/cleobetra/bonus-sport.webp",
      details: [
        "100% de bonus sur votre premier dépôt sport",
        "Jusqu'à 300€ de bonus sport",
        "Cote minimum : 1.50 pour les paris valides",
        "Rollover : ×5 sur le montant du bonus",
        "Paris multiples acceptés",
        "Valable sur tous les sports majeurs",
        "Bonus crédité automatiquement",
        "Aucun code promo requis"
      ]
    },
    {
      id: 3,
      title: "Reload du Week-end – 75% jusqu'à 300€",
      banner: "/images/cleobetra/weekend.webp",
      details: [
        "75% de bonus tous les vendredis",
        "Jusqu'à 300€ de bonus reload",
        "Code promo : WEEKEND",
        "Conditions de mise : ×35",
        "Valable uniquement le vendredi",
        "Dépôt minimum : 20€",
        "Parfait pour prolonger le plaisir du week-end",
        "Cumulable avec le programme VIP"
      ]
    },
    {
      id: 4,
      title: "Cashback Hebdomadaire Casino – 10% jusqu'à 500€",
      banner: "/images/cleobetra/weekly-cashback.webp",
      details: [
        "10% de cashback sur vos pertes casino",
        "Jusqu'à 500€ remboursés chaque semaine",
        "Crédité automatiquement tous les lundis",
        "Sans conditions de mise (wager free)",
        "Calcul basé sur les pertes nettes de la semaine",
        "Valable sur tous les jeux casino",
        "Argent réel directement utilisable",
        "Programme automatique pour tous les joueurs"
      ]
    },
    {
      id: 5,
      title: "Reload Hebdomadaire Casino – 50% jusqu'à 250€",
      banner: "/images/cleobetra/weekly-reload.webp",
      details: [
        "50% de bonus tous les mercredis",
        "Jusqu'à 250€ de bonus",
        "Code promo : RELOAD",
        "Conditions de mise : ×30",
        "Dépôt minimum : 20€",
        "Valable sur machines à sous et jeux de table",
        "Bonus crédité instantanément",
        "Parfait pour recharger en milieu de semaine"
      ]
    },
    {
      id: 6,
      title: "Cashback Live Casino – 15% jusqu'à 750€",
      banner: "/images/cleobetra/cashback-live.webp",
      details: [
        "15% de cashback spécial live casino",
        "Jusqu'à 750€ remboursés",
        "Crédité tous les jeudis",
        "Sans wager - argent réel",
        "Valable uniquement sur les jeux live",
        "Calcul sur les pertes de la semaine live",
        "Automatique pour tous les joueurs live",
        "Le meilleur taux de cashback du casino"
      ]
    },
    {
      id: 7,
      title: "Cashback Sport – 10% jusqu'à 400€",
      banner: "/images/cleobetra/weekly-cashback-sport.webp",
      details: [
        "10% de cashback sur vos paris sportifs",
        "Jusqu'à 400€ remboursés",
        "Crédité tous les mardis",
        "Sans conditions de mise",
        "Valable sur tous les sports",
        "Calcul sur les paris perdants de la semaine",
        "Argent réel utilisable immédiatement",
        "Parfait pour les parieurs réguliers"
      ]
    },
    {
      id: 8,
      title: "Reload Sport – 50% jusqu'à 200€",
      banner: "/images/cleobetra/weekly-reload-sport.webp",
      details: [
        "50% de bonus sport tous les samedis",
        "Jusqu'à 200€ de bonus",
        "Code promo : SPORTSWEEKEND",
        "Rollover : ×3 sur cotes minimales 1.50",
        "Idéal pour parier le week-end",
        "Valable sur tous les sports et compétitions",
        "Bonus crédité instantanément",
        "Parfait pour les grands événements sportifs"
      ]
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Casino",
          "name": "Cleobetra Casino",
          "image": "https://gigabonus.fr/images/cleobetra.webp"
        },
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin",
          "jobTitle": "Expert Casino Senior"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "8.9",
          "bestRating": "10",
          "worstRating": "1"
        },
        "reviewBody": "Cleobetra Casino combine casino et paris sportifs avec un bonus de bienvenue 150% jusqu'à 500€ + 200 FS. Cashback hebdomadaire 10% jusqu'à 500€ sans wager et promotions régulières.",
        "datePublished": "2025-01-15",
        "publisher": {
          "@type": "Organization",
          "name": "GigaBonus"
        }
      },
      {
        "@type": "Article",
        "headline": "Cleobetra Casino : Avis 2025, Bonus 150% + 200 FS",
        "description": "Avis Cleobetra Casino 2025 : bonus 150% jusqu'à 500€ + 200 FS, casino et paris sportifs, cashback 10% sans wager. Test complet!",
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin"
        },
        "datePublished": "2025-01-15",
        "dateModified": "2025-01-20",
        "publisher": {
          "@type": "Organization",
          "name": "GigaBonus",
          "logo": {
            "@type": "ImageObject",
            "url": "https://gigabonus.fr/gigabonus-logo.webp"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Cleobetra propose-t-il des paris sportifs ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, Cleobetra intègre une section paris sportifs complète avec un bonus sport de 100% jusqu'à 300€. Vous pouvez parier sur tous les sports majeurs avec des cotes compétitives."
            }
          },
          {
            "@type": "Question",
            "name": "Le cashback hebdomadaire Cleobetra a-t-il un wager ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non, le cashback hebdomadaire de 10% jusqu'à 500€ est sans conditions de mise (wager free). Il est crédité automatiquement tous les lundis sur vos pertes nettes de la semaine."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Cleobetra Casino : Avis 2025, Bonus 150% + 200 FS | GigaBonus"
        description="Avis Cleobetra Casino 2025 : bonus 150% jusqu'à 500€ + 200 FS, casino et paris sportifs, cashback 10% sans wager. Test complet!"
        keywords="cleobetra casino, avis cleobetra, bonus cleobetra, cleobetra casino avis, bonus 150%, cashback 10%, casino bookmaker"
        canonical="https://gigabonus.fr/cleobetra"
        ogTitle="Cleobetra Casino : Avis 2025, Bonus 150% + 200 FS"
        ogDescription="Avis Cleobetra Casino 2025 : bonus 150% jusqu'à 500€ + 200 FS, casino et paris sportifs."
        ogImage="https://gigabonus.fr/images/cleobetra.webp"
        twitterTitle="Cleobetra Casino : Avis 2025, Bonus 150% + 200 FS"
        twitterDescription="Avis Cleobetra Casino 2025 : bonus 150% jusqu'à 500€ + 200 FS."
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section avec Video */}
          <section className="glass-card rounded-3xl overflow-hidden mb-12">
            <div className="relative h-80 overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full object-cover opacity-70"
                loop
                muted
                playsInline
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <source src={casino.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center flex flex-col items-center -mt-8">
                  <img
                    src="/images/cleobetra.webp"
                    alt="Cleobetra Casino"
                    className="w-64 h-64 object-contain drop-shadow-2xl"
                  />
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                    Cleobetra Casino
                  </p>
                  <Badge className="bg-primary text-white font-bold text-2xl px-6 py-3 animate-glow mt-2">
                    +150% BONUS
                  </Badge>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
                Avis Cleobetra Casino 2025 : Bonus 150% + 200 FS - Notre Test Complet
              </h1>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">À Propos de Cleobetra Casino</h2>
                <div className="space-y-4 text-foreground max-w-4xl mx-auto">
                  <p>
                    <strong className="text-primary">Cleobetra Casino</strong> vous plonge dans l&apos;univers fascinant de l&apos;Égypte ancienne avec une plateforme moderne et généreuse. 
                    Lancé en 2023, ce casino se distingue par son <strong className="text-primary">programme de cashback hebdomadaire sans wager</strong> et sa 
                    <strong className="text-primary"> politique KYC allégée</strong> qui permet de jouer en toute liberté.
                  </p>
                  <p>
                    Avec un bonus de bienvenue impressionnant de <strong className="text-primary">150% jusqu&apos;à 500€ + 200 Free Spins</strong>, 
                    Cleobetra offre une expérience complète incluant casino, live casino et paris sportifs. La plateforme propose 
                    <strong className="text-primary"> 8 promotions hebdomadaires différentes</strong> : reload du vendredi, cashback casino le lundi (10%), 
                    cashback sport le mardi (10%), reload casino le mercredi, cashback live le jeudi (15%), et reload sport le samedi.
                  </p>
                  <p>
                    La particularité de Cleobetra réside dans son <strong className="text-primary">système de cashback sans conditions de mise</strong>. 
                    Tous les lundis, recevez 10% de vos pertes casino (jusqu&apos;à 500€) directement en argent réel utilisable immédiatement. 
                    Le jeudi, c&apos;est 15% sur le live casino (jusqu&apos;à 750€). Cette transparence totale permet de minimiser les pertes 
                    et de toujours avoir une <strong className="text-primary">seconde chance</strong> !
                  </p>
                  <p>
                    L&apos;<strong className="text-primary">interface thème égyptien immersive</strong> de Cleobetra a été conçue pour offrir une expérience 
                    visuelle unique. Le casino garantit des <strong className="text-primary">retraits rapides en 24-48h</strong> après validation KYC allégée. 
                    Le <strong className="text-primary">service client multilingue</strong> via chat et email répond efficacement en français. 
                    La sécurité est maximale avec cryptage SSL 256-bit et licence Curaçao.
                  </p>
                  <p>
                    La <strong className="text-primary">ludothèque massive</strong> de Cleobetra compte plus de <strong className="text-primary">3000 jeux</strong> 
                    des meilleurs éditeurs : Pragmatic Play, NetEnt, Play&apos;n GO, Evolution Gaming, Yggdrasil. 
                    Les <strong className="text-primary">machines à sous</strong> incluent tous les hits égyptiens : Book of Dead, Book of Ra, Cleopatra, 
                    ainsi que Sweet Bonanza, Gates of Olympus, Starburst. Le <strong className="text-primary">casino live</strong> propose des dizaines de 
                    tables avec croupiers professionnels.
                  </p>
                  <p>
                    Côté <strong className="text-primary">paris sportifs</strong>, Cleobetra couvre tous les sports majeurs (football, tennis, basketball) 
                    avec des <strong className="text-primary">cotes compétitives</strong> et paris en direct. Le casino accepte de nombreuses méthodes : 
                    cartes bancaires, virements, e-wallets et <strong className="text-primary">cryptomonnaies</strong> (Bitcoin, Ethereum) pour des 
                    transactions ultra-rapides.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-8 py-6 mt-6"
                >
                  <a href={casino.playUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-6 h-6 mr-2" />
                    Jouer Maintenant
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                <div className="text-center">
                  <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Wager x{casino.wager}</p>
                  <p className="text-xs text-muted-foreground">Équitable</p>
                </div>
                <div className="text-center">
                  <CreditCard className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Dépôt {casino.minDeposit}</p>
                  <p className="text-xs text-muted-foreground">Accessible</p>
                </div>
                <div className="text-center">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Retraits 24-48h</p>
                  <p className="text-xs text-muted-foreground">Rapide</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Sécurisé</p>
                  <p className="text-xs text-muted-foreground">Licence SSL</p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="border-t border-border pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Méthodes de Paiement Acceptées</h3>
                <div className="flex flex-wrap gap-4">
                  {casino.methods.map((method) => {
                    const methodLogos: Record<string, string> = {
                      "CB": "/images/methods/carte-bancaire.webp",
                      "paysafe": "/images/methods/paysafecard.webp",
                      "crypto": "/images/methods/crypto.webp",
                      "skrill": "/images/methods/skrill.webp",
                      "neteler": "/images/methods/neteller.webp",
                      "jetonbank": "/images/methods/jetonbank.webp",
                      "myfinity": "/images/methods/mifinity.webp",
                      "cashlib": "/images/methods/cashlib.webp",
                      "neosurf": "/images/methods/neosurf.webp",
                      "virement": "/images/methods/virement-bancaire.webp"
                    };
                    
                    const methodNames: Record<string, string> = {
                      "CB": "Carte Bancaire",
                      "paysafe": "PaysafeCard",
                      "crypto": "Cryptomonnaies",
                      "skrill": "Skrill",
                      "neteler": "Neteller",
                      "jetonbank": "JetonBank",
                      "myfinity": "MiFinity",
                      "cashlib": "Cashlib",
                      "neosurf": "Neosurf",
                      "virement": "Virement Bancaire"
                    };

                    return (
                      <img 
                        key={method}
                        src={methodLogos[method]} 
                        alt={methodNames[method]}
                        width={80}
                        height={32}
                        loading="lazy"
                        className="h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Offres et Promotions */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-center text-foreground mb-8">
              🎁 Détail des Offres et Promotions Cleobetra
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offers.slice(0, 6).map((offer) => (
                <div key={offer.id} className="glass-card rounded-2xl overflow-hidden flex flex-col">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 h-40 flex items-center justify-center">
                    <img 
                      src={offer.banner} 
                      alt={offer.title}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground mb-4 text-center">{offer.title}</h3>
                    <div className="mb-6 flex-1">
                      <p className="font-semibold text-foreground mb-3 text-center">Détails complets</p>
                      <ul className="space-y-2 text-sm">
                        {offer.details.map((detail, index) => (
                          <li key={index} className="text-foreground flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-center">
                      <Button
                        asChild
                        className="bg-primary hover:bg-primary/90 text-white font-bold"
                      >
                        <a href={casino.playUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Jouer
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Dernières 2 bannières centrées */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-6">
              {offers.slice(6).map((offer) => (
                <div key={offer.id} className="glass-card rounded-2xl overflow-hidden flex flex-col">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 h-40 flex items-center justify-center">
                    <img 
                      src={offer.banner} 
                      alt={offer.title}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground mb-4 text-center">{offer.title}</h3>
                    <div className="mb-6 flex-1">
                      <p className="font-semibold text-foreground mb-3 text-center">Détails complets</p>
                      <ul className="space-y-2 text-sm">
                        {offer.details.map((detail, index) => (
                          <li key={index} className="text-foreground flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-center">
                      <Button
                        asChild
                        className="bg-primary hover:bg-primary/90 text-white font-bold"
                      >
                        <a href={casino.playUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Jouer
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comment S'inscrire */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">📝 Comment S&apos;inscrire sur Cleobetra Casino ?</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                L&apos;<strong className="text-primary">inscription sur Cleobetra</strong> est rapide et vous donne accès au bonus de 150% + 200 FS. 
                Voici notre <strong className="text-primary">guide complet</strong> pour créer votre compte.
              </p>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 1 : Créer votre compte</h3>
                <p className="leading-relaxed">
                  Cliquez sur <strong className="text-primary">&quot;S&apos;inscrire&quot;</strong>. Remplissez le formulaire avec vos informations : 
                  nom, prénom, date de naissance (18+ requis), email et mot de passe. Choisissez EUR comme devise. 
                  L&apos;inscription prend <strong className="text-primary">moins de 2 minutes</strong>.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 2 : Vérifier votre email</h3>
                <p className="leading-relaxed">
                  Cleobetra envoie un <strong className="text-primary">email de confirmation</strong>. Cliquez sur le lien pour 
                  <strong className="text-primary"> activer votre compte</strong>. Vérifiez vos spams si besoin.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 3 : Effectuer votre premier dépôt</h3>
                <p className="leading-relaxed">
                  Allez dans <strong className="text-primary">&quot;Dépôt&quot;</strong>. Choisissez votre méthode. Le 
                  <strong className="text-primary"> dépôt minimum est de 20€</strong>. Votre bonus de 150% + 200 FS 
                  est crédité automatiquement avec wager ×40.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 4 : Profiter des promotions hebdomadaires</h3>
                <p className="leading-relaxed">
                  Explorez les <strong className="text-primary">8 promotions hebdomadaires</strong> : cashback sans wager, reload du week-end, 
                  bonus sport. Vérifiez la section promotions chaque semaine !
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">💡 Conseils d&apos;inscription</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Déposez <strong className="text-primary">au moins 20€</strong> pour le bonus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Utilisez les <strong className="text-primary">cryptos</strong> pour des retraits rapides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Profitez du <strong className="text-primary">cashback sans wager</strong> chaque semaine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>KYC allégé pour les <strong className="text-primary">retraits standards</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Méthodes de Retrait */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">💳 Méthodes de Retrait et Délais sur Cleobetra</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Cleobetra propose des <strong className="text-primary">méthodes de retrait variées</strong> avec des délais compétitifs. 
                Voici un guide complet.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-primary">Méthode</th>
                      <th className="text-left p-4 text-primary">Délai</th>
                      <th className="text-left p-4 text-primary">Minimum</th>
                      <th className="text-left p-4 text-primary">Maximum</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Carte Bancaire</td>
                      <td className="p-4">24-72h</td>
                      <td className="p-4">20€</td>
                      <td className="p-4">5 000€/jour</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Cryptomonnaies</td>
                      <td className="p-4">Instantané - 2h</td>
                      <td className="p-4">20€</td>
                      <td className="p-4">10 000€/transaction</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Skrill / Neteller</td>
                      <td className="p-4">12-24h</td>
                      <td className="p-4">20€</td>
                      <td className="p-4">5 000€/jour</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Virement SEPA</td>
                      <td className="p-4">3-5 jours</td>
                      <td className="p-4">100€</td>
                      <td className="p-4">10 000€/mois</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Processus de Retrait</h3>
                <p className="leading-relaxed">
                  Le premier retrait nécessite une <strong className="text-primary">vérification KYC allégée</strong> (pièce d&apos;identité). 
                  Pour les <strong className="text-primary">retraits standards</strong>, le KYC n&apos;est souvent pas requis. 
                  Les <strong className="text-primary">cryptomonnaies offrent les délais les plus courts</strong> (instantané à 2h).
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">💡 Conseils pour retraits rapides</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Utilisez les <strong className="text-primary">cryptomonnaies</strong> pour retirer rapidement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong className="text-primary">Pas de KYC</strong> pour retraits standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Respectez les <strong className="text-primary">conditions ×40</strong> sur le bonus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Cashback sans wager = <strong className="text-primary">retirable immédiatement</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Catalogue de Jeux */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🎮 Catalogue de Jeux Cleobetra</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Cleobetra propose une <strong className="text-primary">ludothèque de plus de 3000 jeux</strong> avec une forte 
                thématique égyptienne. Découvrez une sélection premium.
              </p>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Machines à Sous</h3>
                <p className="leading-relaxed">
                  Plus de <strong className="text-primary">2500 slots</strong> : Pragmatic Play, NetEnt, Play&apos;n GO. 
                  Retrouvez les classiques égyptiens (Book of Dead, Book of Ra, Cleopatra) et les hits modernes 
                  (Sweet Bonanza, Gates of Olympus, Starburst). <strong className="text-primary">Jackpots progressifs</strong> disponibles.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Casino Live Premium</h3>
                <p className="leading-relaxed">
                  <strong className="text-primary">Casino live Evolution Gaming</strong> avec tables de roulette, blackjack, 
                  baccarat et game shows. Croupiers professionnels en HD 24/7. 
                  <strong className="text-primary"> Cashback 15%</strong> tous les jeudis sur le live !
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Paris Sportifs</h3>
                <p className="leading-relaxed">
                  Section <strong className="text-primary">paris sportifs</strong> avec football, tennis, basketball. 
                  <strong className="text-primary"> Cotes compétitives</strong>, paris en direct. 
                  Bonus sport 100% jusqu&apos;à 300€ et cashback 10% tous les mardis.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Jeux de Table</h3>
                <p className="leading-relaxed">
                  Versions RNG de <strong className="text-primary">blackjack, roulette, baccarat, poker</strong>. 
                  Parfait pour tester des stratégies avant le live casino.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">❓ FAQ - Questions Fréquentes</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Comment fonctionne le cashback sans wager ?</h3>
                <p className="text-foreground leading-relaxed">
                  Le <strong className="text-primary">cashback de Cleobetra</strong> est sans conditions de mise. Chaque lundi, recevez 10% de vos pertes 
                  casino (jusqu&apos;à 500€) en argent réel. Le jeudi, c&apos;est 15% sur le live (jusqu&apos;à 750€). Le mardi, 10% sur le sport (jusqu&apos;à 400€). 
                  Argent utilisable immédiatement !
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Puis-je jouer sans KYC ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui ! Cleobetra a une <strong className="text-primary">politique KYC allégée</strong>. Pour les retraits standards, 
                  le KYC n&apos;est souvent pas requis. Pour les montants élevés, une simple pièce d&apos;identité suffit.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Quelles sont les promotions hebdomadaires ?</h3>
                <p className="text-foreground leading-relaxed">
                  Cleobetra propose <strong className="text-primary">8 promotions par semaine</strong> : reload vendredi (75%), 
                  cashback casino lundi (10%), cashback sport mardi (10%), reload casino mercredi (50%), 
                  cashback live jeudi (15%), reload sport samedi (50%). Tous les cashback sont sans wager !
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Quels sont les délais de retrait ?</h3>
                <p className="text-foreground leading-relaxed">
                  Les <strong className="text-primary">cryptomonnaies</strong> sont les plus rapides (instantané à 2h). 
                  Cartes bancaires : 24-72h. E-wallets : 12-24h. Virements : 3-5 jours. 
                  KYC allégé ou inexistant selon les montants.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Quels jeux sont éligibles pour le bonus ?</h3>
                <p className="text-foreground leading-relaxed">
                  Le bonus casino de 150% est valable sur toutes les <strong className="text-primary">machines à sous</strong>. 
                  Les 200 Free Spins sont sur Book of Dead et Starburst. Le bonus sport s&apos;applique sur tous les 
                  <strong className="text-primary"> paris sportifs</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Stratégies */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🎯 Stratégies pour Maximiser Vos Gains sur Cleobetra</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Découvrez nos <strong className="text-primary">stratégies éprouvées</strong> pour optimiser vos gains sur Cleobetra.
              </p>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Exploitez le cashback sans wager</h3>
                <p className="leading-relaxed">
                  Le <strong className="text-primary">cashback hebdomadaire</strong> est votre meilleur ami. 10% sur le casino (lundi), 
                  10% sur le sport (mardi), 15% sur le live (jeudi). Tous sans wager ! Jouez régulièrement pour maximiser vos remboursements 
                  et <strong className="text-primary">minimiser vos pertes</strong>.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Profitez des reload hebdomadaires</h3>
                <p className="leading-relaxed">
                  Rechargez le <strong className="text-primary">vendredi (75%)</strong>, mercredi (50%) ou samedi sport (50%) 
                  pour prolonger vos sessions. Utilisez les codes WEEKEND, RELOAD et SPORTSWEEKEND pour débloquer les bonus.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Privilégiez les cryptos</h3>
                <p className="leading-relaxed">
                  Les <strong className="text-primary">cryptomonnaies</strong> offrent les meilleurs délais (instantané à 2h) 
                  sans KYC pour retraits standards. Bitcoin et Ethereum acceptés. Parfait pour <strong className="text-primary">sécuriser rapidement</strong> vos gains !
                </p>
              </div>
            </div>
          </section>

          {/* Programme VIP */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">👑 Programme VIP Cleobetra</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Cleobetra récompense ses joueurs fidèles avec un <strong className="text-primary">programme VIP exclusif</strong>.
              </p>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Niveaux VIP</h3>
                <p className="leading-relaxed">
                  Progressez à travers <strong className="text-primary">6 niveaux VIP</strong> : Bronze, Silver, Gold, Platinum, Diamond, Royal. 
                  Plus vous jouez, plus vous montez et déverrouillez des avantages exclusifs.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Avantages VIP</h3>
                <p className="leading-relaxed">
                  <strong className="text-primary">Cashback boosté</strong> (jusqu&apos;à 20% pour Royal), 
                  <strong className="text-primary"> retraits prioritaires</strong>, gestionnaire de compte dédié, 
                  bonus personnalisés, invitations à des événements exclusifs, cadeaux d&apos;anniversaire.
                </p>
              </div>
            </div>
          </section>

          {/* Expérience Mobile */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">📱 Expérience Mobile</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Cleobetra offre une <strong className="text-primary">expérience mobile optimale</strong> sans application à télécharger.
              </p>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Site Mobile Responsive</h3>
                <p className="leading-relaxed">
                  Accédez au site depuis votre navigateur mobile. Le <strong className="text-primary">design responsive</strong> s&apos;adapte 
                  automatiquement à tous les écrans. Tous les jeux, promotions et fonctionnalités sont disponibles.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Performance Mobile</h3>
                <p className="leading-relaxed">
                  Interface fluide et rapide sur iOS et Android. <strong className="text-primary">Chargement instantané</strong> des jeux. 
                  Dépôts et retraits simplifiés sur mobile. Navigation intuitive avec thème égyptien préservé.
                </p>
              </div>
            </div>
          </section>

          {/* Support Client */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">💬 Support Client</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Cleobetra propose un <strong className="text-primary">support client multilingue</strong> pour vous aider.
              </p>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Chat en Direct</h3>
                <p className="leading-relaxed">
                  <strong className="text-primary">Chat 24/7</strong> disponible en français. Temps de réponse moyen de 5 minutes. 
                  Agents compétents formés sur tous les aspects du casino.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Email et FAQ</h3>
                <p className="leading-relaxed">
                  Support email avec réponse sous 6-8h. <strong className="text-primary">FAQ complète</strong> couvrant les questions 
                  fréquentes sur bonus, retraits, jeux et sécurité.
                </p>
              </div>
            </div>
          </section>

          {/* Thème Égyptien Unique */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🏛️ Thème Égyptien Unique</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Cleobetra se démarque par son <strong className="text-primary">immersion égyptienne totale</strong>.
              </p>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Design Immersif</h3>
                <p className="leading-relaxed">
                  Interface décorée de <strong className="text-primary">hiéroglyphes, pyramides et symboles égyptiens</strong>. 
                  Couleurs dorées et ambiance mystérieuse. Chaque page respire l&apos;Égypte ancienne.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Sélection de Jeux Égyptiens</h3>
                <p className="leading-relaxed">
                  <strong className="text-primary">Collection de slots égyptiens</strong> : Book of Dead, Book of Ra, Cleopatra, 
                  Legacy of Egypt, Ancient Fortunes. Immersion maximale dans l&apos;univers des pharaons !
                </p>
              </div>
            </div>
          </section>

          {/* Avantage Sans KYC */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🆓 Avantage Casino Sans KYC</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Cleobetra propose une <strong className="text-primary">politique KYC allégée</strong> pour jouer en liberté.
              </p>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Retraits Standards Sans KYC</h3>
                <p className="leading-relaxed">
                  Pour les <strong className="text-primary">retraits standards</strong>, pas besoin de documents. 
                  Jouez et retirez en toute simplicité. Parfait pour ceux qui valorisent la <strong className="text-primary">confidentialité</strong>.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">KYC Simplifié pour Montants Élevés</h3>
                <p className="leading-relaxed">
                  Pour les <strong className="text-primary">gros gains</strong>, une simple pièce d&apos;identité suffit. 
                  Processus rapide et non invasif. Vérification en 24-48h maximum.
                </p>
              </div>
            </div>
          </section>

          {/* Sécurité */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🔐 Sécurité et Légalité de Cleobetra Casino</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Cleobetra met la <strong className="text-primary">sécurité des joueurs</strong> au premier plan.
              </p>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Licence et Réglementation</h3>
                <p className="leading-relaxed">
                  Cleobetra opère sous <strong className="text-primary">licence Curaçao eGaming</strong>, garantissant respect 
                  des normes de jeu responsable et protection des joueurs.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Protection des Données</h3>
                <p className="leading-relaxed">
                  <strong className="text-primary">Cryptage SSL 256-bit</strong> de niveau bancaire. 
                  Données personnelles et financières protégées selon les standards RGPD européens.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Jeu Responsable</h3>
                <p className="leading-relaxed">
                  <strong className="text-primary">Outils de jeu responsable</strong> : limites de dépôt, auto-exclusion, 
                  liens vers des organismes d&apos;aide. Support formé pour détecter les comportements à risque.
                </p>
              </div>
            </div>
          </section>

          {/* Notre Verdict */}
          <section className="glass-card rounded-2xl p-8 mb-12 bg-primary/5 border-2 border-primary/20">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">📋 Notre Avis Cleobetra : Le Verdict de GigaBonus 2025</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed text-lg">
                Après plusieurs semaines de tests, <strong className="text-primary">Cleobetra Casino</strong> s&apos;impose comme 
                <strong className="text-primary"> une référence pour les amateurs d&apos;Égypte ancienne</strong> et de cashback généreux.
              </p>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 border-2 border-primary/20">
                <div className="text-center mb-4">
                  <p className="text-5xl font-bold text-primary mb-2">8.4/10</p>
                  <p className="text-xl font-semibold">Casino Égyptien Premium</p>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">8.5/10</p>
                    <p className="text-sm">Cashback Sans Wager</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">9/10</p>
                    <p className="text-sm">Thème Égyptien</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">8/10</p>
                    <p className="text-sm">Sans KYC</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Points Forts Majeurs</h3>
                <p className="leading-relaxed">
                  Le <strong className="text-primary">cashback hebdomadaire sans wager</strong> (10-15%) est exceptionnel. 
                  Le <strong className="text-primary">thème égyptien immersif</strong> offre une expérience unique. 
                  La <strong className="text-primary">politique KYC allégée</strong> permet de jouer en liberté. 
                  Les <strong className="text-primary">8 promotions hebdomadaires</strong> assurent des bonus constants. 
                  Ludothèque de 3000+ jeux avec tous les classiques égyptiens.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Axes d&apos;Amélioration</h3>
                <p className="leading-relaxed">
                  Le <strong className="text-primary">wager ×40</strong> sur le bonus de bienvenue reste élevé. 
                  Délai de retrait de 24-48h standard (cryptos plus rapides). 
                  Support client pas disponible 24/7 en français.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-6 border-l-4 border-primary">
                <p className="text-lg leading-relaxed">
                  <strong className="text-primary">Conclusion GigaBonus :</strong> Cleobetra est <strong className="text-primary">LE casino pour amateurs d&apos;Égypte ancienne</strong> 
                  et de cashback généreux. Son système sans wager, son thème immersif et sa politique KYC allégée en font un excellent choix. 
                  Nous le recommandons aux joueurs recherchant liberté, mystère égyptien et remboursements réguliers !
                </p>
              </div>
            </div>
          </section>

          {/* Avis des Joueurs */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">⭐ Avis des Joueurs</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              Découvrez les retours authentiques de notre communauté sur Cleobetra Casino.
            </p>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">M</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-foreground">Marc L.</h4>
                        <p className="text-sm text-muted-foreground">Fan d&apos;Égypte ancienne</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 fill-primary text-primary" />
                        <span className="font-bold text-foreground">9/10</span>
                      </div>
                    </div>
                    <p className="text-foreground italic leading-relaxed">
                      &quot;Le thème égyptien de Cleobetra est incroyable ! Chaque page respire l&apos;Égypte ancienne. 
                      J&apos;ai profité du bonus de 150% + 200 FS sur Book of Dead. Le cashback du lundi m&apos;a remboursé 250€ 
                      sans wager - argent directement utilisable ! Retraits en Bitcoin ultra-rapides sans KYC. 
                      Interface magnifique, jeux variés. Top pour les fans d&apos;égyptologie !&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">S</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-foreground">Sophie D.</h4>
                        <p className="text-sm text-muted-foreground">Joueuse live casino</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 fill-primary text-primary" />
                        <span className="font-bold text-foreground">8/10</span>
                      </div>
                    </div>
                    <p className="text-foreground italic leading-relaxed">
                      &quot;J&apos;adore le live casino de Cleobetra ! Le cashback du jeudi de 15% sur le live est fantastique. 
                      J&apos;ai perdu 500€ en roulette live cette semaine, et j&apos;ai reçu 75€ en argent réel le jeudi - sans wager ! 
                      Les tables Evolution Gaming sont excellentes, croupiers pros. Les 8 promotions hebdomadaires permettent 
                      de toujours avoir un bonus. Thème égyptien magnifique. Je recommande !&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">T</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-foreground">Thomas R.</h4>
                        <p className="text-sm text-muted-foreground">Joueur régulier</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 fill-primary text-primary" />
                        <span className="font-bold text-foreground">8.5/10</span>
                      </div>
                    </div>
                    <p className="text-foreground italic leading-relaxed">
                      &quot;Cleobetra, c&apos;est le top pour les cashback ! Chaque semaine, je récupère de l&apos;argent : 
                      cashback casino lundi, sport mardi, live jeudi - tous sans wager ! Le reload du vendredi (75%) 
                      est parfait pour le week-end. Pas de KYC pour mes retraits standards, c&apos;est génial. 
                      Ludothèque massive avec plein de slots égyptiens. Support réactif. Casino sérieux et généreux !&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Avis */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">❓ FAQ : Avis et Questions sur Cleobetra Casino</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Cleobetra est-il fiable selon les avis ?</h3>
                <p className="leading-relaxed">
                  Selon notre <strong className="text-primary">avis détaillé</strong> et les retours joueurs, oui. 
                  Licence Curaçao valide, cryptage SSL, retraits traités rapidement (2h en crypto). 
                  Notre équipe a testé plusieurs retraits sans problème.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Le cashback sans wager vaut-il le coup ?</h3>
                <p className="leading-relaxed">
                  Absolument ! Dans notre <strong className="text-primary">avis sur les promotions</strong>, le cashback 
                  hebdomadaire est exceptionnel. 10-15% remboursés sans conditions. Argent réel utilisable immédiatement. 
                  Nous recommandons fortement pour minimiser les pertes !
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Puis-je vraiment jouer sans KYC ?</h3>
                <p className="leading-relaxed">
                  Selon notre <strong className="text-primary">test des retraits</strong>, oui pour montants standards. 
                  Pas de documents requis. Pour gros gains, simple pièce d&apos;identité. 
                  KYC vraiment allégé comparé à d&apos;autres casinos.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Le thème égyptien est-il vraiment immersif ?</h3>
                <p className="leading-relaxed">
                  Dans notre <strong className="text-primary">avis sur le design</strong>, oui ! 
                  Hiéroglyphes, pyramides, couleurs dorées partout. Collection de slots égyptiens unique. 
                  Expérience visuelle magnifique pour fans d&apos;Égypte ancienne.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Quelles sont les meilleures promotions ?</h3>
                <p className="leading-relaxed">
                  Dans notre <strong className="text-primary">classement des promotions</strong>, 
                  le cashback live du jeudi (15% sans wager) est le meilleur. Suivi du cashback casino lundi (10%) 
                  et du reload vendredi (75%). 8 promotions au total !
                </p>
              </div>
            </div>
          </section>

          {/* Avantages et Inconvénients */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">⚖️ Avantages et Inconvénients</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-green-500/10 rounded-lg p-6 border-2 border-green-500/20">
                <h3 className="text-2xl font-semibold text-green-600 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  Avantages
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Cashback hebdomadaire sans wager (10-15%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">8 promotions hebdomadaires variées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Casino sans KYC pour retraits standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Thème égyptien immersif unique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Bonus de bienvenue 150% + 200 FS généreux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Ludothèque de 3000+ jeux avec slots égyptiens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Retraits crypto rapides (instantané à 2h)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Section casino live et paris sportifs complète</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-500/10 rounded-lg p-6 border-2 border-red-500/20">
                <h3 className="text-2xl font-semibold text-red-600 mb-4 flex items-center gap-2">
                  <span>⚠️</span>
                  Inconvénients
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">•</span>
                    <span className="text-foreground">Wager ×40 sur le bonus de bienvenue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">•</span>
                    <span className="text-foreground">Délai de retrait standard 24-48h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">•</span>
                    <span className="text-foreground">Support client pas disponible 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">•</span>
                    <span className="text-foreground">KYC requis pour montants élevés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">•</span>
                    <span className="text-foreground">Pas de licence ANJ pour la France</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">•</span>
                    <span className="text-foreground">Pas d&apos;application mobile native</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="glass-card rounded-2xl p-8 md:p-12 text-center bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Prêt à Découvrir Cleobetra Casino ?
              </h2>
              <p className="text-lg text-foreground mb-6">
                Rejoignez <strong className="text-primary">Cleobetra Casino</strong> maintenant et profitez du 
                <strong className="text-primary"> bonus 150% + 200 free spins</strong> sur le thème de l&apos;Égypte ancienne. 
                Cashback sans wager, KYC allégé et 3000+ jeux vous attendent !
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold text-xl px-12 py-8 animate-glow"
              >
                <a href={casino.playUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-6 h-6 mr-3" />
                  Récupérer Mon Bonus Maintenant
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                18+ | Jouez Responsable | Conditions Générales Appliquées
              </p>
            </div>
          </section>

          <SEOEnrichedContent
            casinoName="Cleobetra"
            bonus="150% + 200 FS"
            wager="40"
            minDeposit="20€"
            withdrawal="24-48h"
            rating={9.1}
            reviewsCount={2700}
            slug="cleobetra"
            competitors={["SpinStar", "Europe Fortune", "Lucky Trunk"]}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

