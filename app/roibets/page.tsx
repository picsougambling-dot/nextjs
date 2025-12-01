'use client';

import { useRef, useEffect } from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle2, Shield, Zap, CreditCard } from "lucide-react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnrichedContent from "@/components/SEOEnrichedContent";
import SEOHead from "@/components/SEOHead";
import { casinos } from "@/data/casinos";

export default function RoiBetsPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const casino = casinos.find(c => c.name === "RoiBets")!;


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
      title: "Bonus de Bienvenue – 200% jusqu'à 1500€",
      details: [
        "Dépôt minimum : 20 €",
        "Bonus royal : 200% jusqu'à 1500 €",
        "Conditions de mise : x40 (dépôt + bonus)",
        "Délai pour remplir le wagering : 30 jours",
        "Mise maximale pendant le bonus actif : 5 €",
        "Méthodes acceptées : CB, virements, crypto, JetonBank, MiFinity",
        "Contact : support@roibets.com, chat 24/7"
      ]
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Product",
          "name": "RoiBets Casino - Bonus 200% jusqu'à 1500€",
          "description": "Bonus royal de bienvenue jusqu'à 1500€ sur RoiBets Casino - Casino + Paris Sportifs - Ludothèque premium 2800 jeux - Wager x40",
          "image": "https://gigabonus.win/images/roibets.webp",
          "brand": {
            "@type": "Brand",
            "name": "RoiBets"
          }
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "9.0",
          "bestRating": "10",
          "worstRating": "1"
        },
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin",
          "jobTitle": "Expert Casino Senior",
          "description": "Expert casino avec 15 ans d'expérience et plus de 500 casinos testés"
        },
        "reviewBody": "RoiBets Casino combine casino et paris sportifs avec un bonus royal de 200% jusqu'à 1500€. Ludothèque impressionnante de 2800 jeux.",
        "datePublished": "2025-01-15",
        "publisher": {
          "@type": "Organization",
          "name": "GigaBonus"
        }
      },
      {
        "@type": "Article",
        "headline": "Avis RoiBets Casino 2025 : Bonus 200% jusqu'à 1500€ - Notre Test Complet",
        "description": "Notre avis complet sur RoiBets Casino 2025 : bonus 200% jusqu'à 1500€, ludothèque premium, retraits rapides. Test détaillé !",
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
            "url": "https://gigabonus.win/gigabonus-logo.webp"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "RoiBets propose-t-il des paris sportifs ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, RoiBets intègre une section paris sportifs complète avec cotes compétitives sur football, tennis, basketball et autres sports majeurs."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Avis RoiBets Casino 2025 : Bonus 200% jusqu'à 1500€ | Notre Test Complet"
        description="Notre avis complet sur RoiBets Casino 2025 : bonus 200% jusqu'à 1500€, ludothèque premium, retraits rapides. Test détaillé !"
        keywords="roibets casino, avis roibets, bonus roibets, roibets casino avis, bonus 200%, casino bookmaker, paris sportifs"
        canonical="https://gigabonus.win/roibets"
        ogTitle="Avis RoiBets Casino 2025 : Bonus 200% jusqu'à 1500€"
        ogDescription="Notre avis complet sur RoiBets Casino : bonus royal 200% jusqu'à 1500€, jeux premium, support 24/7."
        ogImage="https://gigabonus.win/images/roibets.webp"
        twitterTitle="Avis RoiBets Casino 2025 : Bonus 200% jusqu'à 1500€"
        twitterDescription="Notre avis complet sur RoiBets Casino : bonus royal 200% jusqu'à 1500€."
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
                    src={casino.logo}
                    alt={`Logo RoiBets Casino - Bonus ${casino.bonusPercent}%`}
                    width={256}
                    height={256}
                    loading="eager"
                    className="w-64 h-64 object-contain drop-shadow-2xl"
                  />
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                    RoiBets
                  </p>
                  <Badge className="bg-primary text-white font-bold text-2xl px-6 py-3 animate-glow mt-2">
                    +{casino.bonusPercent}% BONUS
                  </Badge>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              {/* H1 SEO Optimisé */}
              <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
                Avis RoiBets Casino 2025 : Bonus 200% jusqu'à 1500€ - Notre Test Complet
              </h1>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">À Propos de RoiBets Casino</h2>
                <div className="space-y-4 text-foreground max-w-4xl mx-auto">
                  <p>
                    <strong className="text-primary">RoiBets Casino</strong> s'impose comme un acteur royal du jeu en ligne en 2025 avec son 
                    <strong className="text-primary"> bonus de bienvenue généreux de 200% jusqu'à 1500€</strong>. Cette offre solide combine 
                    un pourcentage attractif avec un plafond confortable pour les joueurs moyens et High Rollers. RoiBets se positionne comme 
                    une plateforme complète offrant à la fois une vaste sélection de jeux de casino et un espace dédié aux paris sportifs pour 
                    une expérience de jeu 360°.
                  </p>
                  <p>
                    La plateforme RoiBets arbore un <strong className="text-primary">design royal élégant</strong> mêlant modernité et sophistication. 
                    L'interface utilisateur intuitive garantit une navigation fluide sur tous les appareils (ordinateur, tablette, smartphone) sans 
                    nécessiter de téléchargement. Le casino s'engage sur des <strong className="text-primary">retraits rapides sous 24-48h</strong> 
                    et propose un <strong className="text-primary">service client premium 24/7</strong> en français via chat live, email et 
                    assistance téléphonique.
                  </p>
                  <p>
                    La <strong className="text-primary">sécurité de niveau royal</strong> est assurée par un cryptage SSL 256-bit de grade militaire 
                    protégeant l'ensemble de vos données personnelles et transactions financières. RoiBets détient une licence Curaçao en règle et 
                    respecte scrupuleusement les standards internationaux de jeu responsable. Les joueurs peuvent effectuer leurs transactions via 
                    <strong className="text-primary"> cartes bancaires Visa/Mastercard, virements bancaires SEPA, cryptomonnaies (Bitcoin, Ethereum, 
                    Litecoin, USDT), JetonBank et MiFinity</strong> pour une flexibilité maximale.
                  </p>
                  <p>
                    La <strong className="text-primary">ludothèque royale</strong> de RoiBets impressionne avec plus de 
                    <strong className="text-primary"> 2800 jeux</strong> provenant des meilleurs fournisseurs mondiaux : Pragmatic Play, NetEnt, 
                    Play'n GO, Evolution Gaming, Hacksaw Gaming, NoLimit City, Push Gaming, Yggdrasil. Les <strong className="text-primary">machines 
                    à sous populaires</strong> incluent Gates of Olympus, Sweet Bonanza, Sugar Rush, The Dog House Megaways, Wanted Dead or a Wild, 
                    Book of Dead. Le <strong className="text-primary">casino live premium</strong> propose des tables VIP exclusives avec croupiers 
                    professionnels francophones pour la roulette française, le blackjack premium, le baccarat squeeze, le poker et les game shows 
                    spectaculaires (Crazy Time, Monopoly Live, Dream Catcher, Deal or No Deal).
                  </p>
                  <p>
                    RoiBets complète son offre casino avec une <strong className="text-primary">section paris sportifs complète</strong> proposant 
                    des cotes compétitives sur tous les sports majeurs : football, tennis, basketball, formule 1, MMA, esports. Les joueurs apprécieront 
                    également les <strong className="text-primary">crash games addictifs</strong> comme Aviator, Spaceman et JetX. Le 
                    <strong className="text-primary"> programme VIP royal</strong> récompense les joueurs fidèles avec cashback hebdomadaire, 
                    bonus personnalisés, gestionnaire de compte dédié, limites de retrait élevées et invitations à des événements exclusifs.
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
                  <p className="text-xs text-muted-foreground">Standard</p>
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
              🎁 Détail des Offres et Promotions RoiBets
            </h2>
            
            <div className="grid grid-cols-1 max-w-3xl mx-auto">
              {offers.map((offer) => (
                <div key={offer.id} className="glass-card rounded-2xl overflow-hidden flex flex-col">
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-foreground mb-6 text-center">{offer.title}</h3>
                    <div className="mb-6 flex-1">
                      <p className="font-semibold text-foreground mb-4 text-center">Détails complets</p>
                      <ul className="space-y-3">
                        {offer.details.map((detail, index) => (
                          <li key={index} className="text-foreground flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-center">
                      <Button
                        asChild
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-white font-bold"
                      >
                        <a href={casino.playUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Jouer Maintenant
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
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">📝 Comment S'inscrire sur RoiBets Casino ?</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                L'<strong className="text-primary">inscription sur RoiBets</strong> est rapide et intuitive.
                Voici notre <strong className="text-primary">guide royal</strong> pour créer votre compte et profiter du bonus 200%.
              </p>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 1 : Créer votre compte royal</h3>
                <p className="leading-relaxed">
                  Cliquez sur <strong className="text-primary">"S'inscrire"</strong> sur la page d'accueil. Remplissez le formulaire avec vos informations : 
                  nom, prénom, date de naissance, email et mot de passe sécurisé. L'inscription complète prend 
                  <strong className="text-primary"> moins de 2 minutes</strong>. Toutes les données sont protégées par cryptage SSL militaire.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 2 : Vérifier votre email</h3>
                <p className="leading-relaxed">
                  RoiBets vous envoie un <strong className="text-primary">email de confirmation royal</strong>. Cliquez sur le lien de vérification
                  pour <strong className="text-primary">activer votre compte</strong>. Cette étape sécurise votre compte et active les notifications 
                  des promotions exclusives.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 3 : Effectuer votre premier dépôt</h3>
                <p className="leading-relaxed">
                  Accédez à la section <strong className="text-primary">"Dépôt"</strong>. Choisissez parmi cartes bancaires, virements, cryptomonnaies, 
                  JetonBank ou MiFinity. Le <strong className="text-primary">dépôt minimum est de 20€</strong> pour débloquer le bonus de bienvenue. 
                  Les dépôts sont <strong className="text-primary">instantanés</strong> et ultra-sécurisés.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 4 : Recevoir votre bonus royal 200%</h3>
                <p className="leading-relaxed">
                  Le bonus de 200% jusqu'à 1500€ est automatiquement crédité sur votre compte. 
                  Vous disposez de <strong className="text-primary">30 jours</strong> pour remplir les conditions de mise x40.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <p className="text-center font-semibold text-foreground">
                  👑 Traitement royal garanti - Casino + Paris Sportifs disponibles !
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">❓ Questions Fréquentes sur RoiBets Casino</h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">RoiBets Casino est-il fiable et sécurisé ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui, <strong className="text-primary">RoiBets Casino est totalement sécurisé</strong>. La plateforme utilise un cryptage SSL 256-bit 
                  de niveau militaire et possède une licence Curaçao valide. Toutes les transactions sont protégées et les jeux sont certifiés équitables.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Comment retirer mes gains sur RoiBets ?</h3>
                <p className="text-foreground leading-relaxed">
                  Les retraits sont traités sous <strong className="text-primary">24-48h</strong> via les mêmes méthodes que les dépôts. 
                  Assurez-vous d'avoir vérifié votre compte et rempli les conditions de mise du bonus avant de retirer.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Puis-je parier sur le sport sur RoiBets ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui ! <strong className="text-primary">RoiBets propose casino ET paris sportifs</strong>. Vous pouvez parier sur tous les sports 
                  majeurs avec des cotes compétitives : football, tennis, basketball, esports et bien plus.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Puis-je jouer sur mobile ?</h3>
                <p className="text-foreground leading-relaxed">
                  Absolument ! <strong className="text-primary">RoiBets est entièrement optimisé mobile</strong>. Jouez directement depuis votre 
                  navigateur mobile sans téléchargement, avec la même qualité et toutes les fonctionnalités.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <SEOEnrichedContent
        casinoName="RoiBets"
        bonus="200% jusqu'à 1500€"
        wager="40"
        minDeposit="20€"
        withdrawal="24-48h"
        rating={9.0}
        reviewsCount={1950}
        slug="roibets"
      />
      <Footer />
    </>
  );
};

