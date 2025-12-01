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

export default function HotLootPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const casino = casinos.find(c => c.name === "HotLoot")!;


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
      title: "Bonus de Bienvenue – 300% jusqu'à 1200€",
      details: [
        "Dépôt minimum : 20 €",
        "Bonus généreux : 300% jusqu'à 1200 €",
        "Conditions de mise : x30 (dépôt + bonus)",
        "Délai pour remplir le wagering : 30 jours",
        "Mise maximale pendant le bonus actif : 5 €",
        "Méthodes acceptées : CB, virements, crypto, JetonBank, MiFinity",
        "Contact : support@hotloot.com, chat 24/7"
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Avis HotLoot Casino 2025 : Bonus 300% jusqu'à 1200€ - Notre Test Complet | GigaBonus"
        description="Notre avis complet sur HotLoot Casino 2025 : bonus 300% jusqu'à 1200€, wager x30 favorable, retraits rapides. Test détaillé !"
        keywords="hotloot casino, avis hotloot, bonus hotloot, hotloot 300%, hotloot casino avis, hotloot bonus, casino hotloot 2025"
        canonical="https://gigabonus.win/hotloot"
        ogTitle="Avis HotLoot Casino 2025 : Bonus 300% jusqu'à 1200€"
        ogDescription="Notre avis complet sur HotLoot Casino : bonus 300% jusqu'à 1200€, conditions favorables x30, support premium."
        ogImage="https://gigabonus.win/images/hotloot.webp"
        twitterTitle="Avis HotLoot Casino 2025 : Bonus 300% jusqu'à 1200€"
        twitterDescription="Notre avis complet sur HotLoot Casino : bonus 300% jusqu'à 1200€, conditions favorables x30, support premium."
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Review",
              "itemReviewed": {
                "@type": "Product",
                "name": "Avis HotLoot Casino 2025 : Bonus 300% jusqu'à 1200€",
                "image": "https://gigabonus.win/images/hotloot.webp"
              },
              "author": {
                "@type": "Person",
                "name": "Alexandre Martin",
                "jobTitle": "Expert Casino Senior"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "9.0",
                "bestRating": "10"
              },
              "reviewBody": "Notre avis complet sur HotLoot Casino 2025 : bonus 300% jusqu'à 1200€, wager x30 favorable, retraits rapides. Test détaillé !",
              "datePublished": new Date().toISOString(),
              "publisher": {
                "@type": "Organization",
                "name": "GigaBonus"
              }
            }
          ]
        }}
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
                    alt={`Logo HotLoot Casino - Bonus ${casino.bonusPercent}%`}
                    width={256}
                    height={256}
                    loading="eager"
                    className="w-64 h-64 object-contain drop-shadow-2xl"
                  />
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                    HotLoot
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
                Avis HotLoot Casino 2025 : Bonus 300% jusqu'à 1200€ - Notre Test Complet
              </h1>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">À Propos de HotLoot Casino</h2>
                <div className="space-y-4 text-foreground max-w-4xl mx-auto">
                  <p>
                    <strong className="text-primary">HotLoot Casino</strong> fait sensation en 2025 avec son 
                    <strong className="text-primary"> bonus de bienvenue explosif de 300% jusqu'à 1200€</strong>. L'atout majeur de HotLoot ? 
                    Des <strong className="text-primary">conditions de mise ultra-favorables de seulement x30</strong>, bien plus avantageuses que 
                    la moyenne du marché (généralement x40 ou x50). Cette combinaison bonus généreux + wager réduit fait de HotLoot l'un des 
                    casinos les plus attractifs pour les joueurs cherchant à maximiser leurs chances de retirer des gains réels.
                  </p>
                  <p>
                    La plateforme HotLoot se distingue par son <strong className="text-primary">design moderne et dynamique</strong> aux couleurs 
                    chaudes et énergisantes. L'interface ultra-intuitive garantit une navigation fluide sur tous les appareils (ordinateur, tablette, 
                    smartphone) sans nécessiter de téléchargement. Le casino s'engage sur des <strong className="text-primary">retraits rapides 
                    sous 24-48h</strong> et propose un <strong className="text-primary">support client premium disponible 24/7</strong> en français 
                    via chat live, email et téléphone.
                  </p>
                  <p>
                    La <strong className="text-primary">sécurité maximale</strong> est garantie par un cryptage SSL 256-bit de niveau bancaire 
                    protégeant toutes vos informations personnelles et transactions financières. HotLoot possède une licence Curaçao valide et 
                    respecte strictement les normes internationales de jeu responsable. Les méthodes de paiement disponibles incluent 
                    <strong className="text-primary"> cartes bancaires, virements SEPA, cryptomonnaies (Bitcoin, Ethereum, USDT), JetonBank et 
                    MiFinity</strong> pour une flexibilité maximale.
                  </p>
                  <p>
                    La <strong className="text-primary">ludothèque premium</strong> de HotLoot propose plus de 
                    <strong className="text-primary"> 2500 jeux</strong> des meilleurs fournisseurs du marché : Pragmatic Play, NetEnt, Play'n GO, 
                    Evolution Gaming, Hacksaw Gaming, NoLimit City, Push Gaming. Les <strong className="text-primary">machines à sous populaires</strong> 
                    incluent Gates of Olympus, Sweet Bonanza, Sugar Rush 1000, Wanted Dead or a Wild, The Dog House Megaways. Le 
                    <strong className="text-primary"> casino live immersif</strong> propose des tables VIP premium avec croupiers professionnels 
                    francophones pour la roulette française, le blackjack VIP, le baccarat squeeze et les game shows spectaculaires (Crazy Time, 
                    Monopoly Live, Deal or No Deal).
                  </p>
                  <p>
                    HotLoot cible particulièrement les amateurs de <strong className="text-primary">slots à haute volatilité</strong> avec des 
                    jackpots progressifs impressionnants. Les joueurs apprécieront également les <strong className="text-primary">crash games 
                    addictifs</strong> comme Aviator, Spaceman et JetX pour des sessions de jeu rapides et palpitantes. Le 
                    <strong className="text-primary"> programme de fidélité</strong> récompense généreusement l'activité des joueurs avec des 
                    cashbacks réguliers, bonus personnalisés et invitations VIP exclusives.
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
                  <p className="text-xs text-muted-foreground">Favorable</p>
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
              🎁 Détail des Offres et Promotions HotLoot
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
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">📝 Comment S'inscrire sur HotLoot Casino ?</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                L'<strong className="text-primary">inscription sur HotLoot</strong> est rapide et intuitive.
                Voici notre <strong className="text-primary">guide complet</strong> pour créer votre compte et profiter du bonus 300%.
              </p>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 1 : Créer votre compte</h3>
                <p className="leading-relaxed">
                  Cliquez sur <strong className="text-primary">"S'inscrire"</strong> sur la page d'accueil. Remplissez le formulaire avec vos informations : 
                  nom, prénom, date de naissance, email et mot de passe sécurisé. L'inscription complète prend 
                  <strong className="text-primary"> moins de 2 minutes</strong>. Toutes les données sont protégées par cryptage SSL militaire.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 2 : Vérifier votre email</h3>
                <p className="leading-relaxed">
                  HotLoot vous envoie un <strong className="text-primary">email de confirmation</strong>. Cliquez sur le lien de vérification
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
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 4 : Recevoir votre bonus 300%</h3>
                <p className="leading-relaxed">
                  Le bonus de 300% jusqu'à 1200€ est automatiquement crédité sur votre compte. 
                  Vous disposez de <strong className="text-primary">30 jours</strong> pour remplir les conditions de mise x30 favorables.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <p className="text-center font-semibold text-foreground">
                  🔥 Wager x30 favorable - Plus facile à compléter que la moyenne !
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">❓ Questions Fréquentes sur HotLoot Casino</h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">HotLoot Casino est-il fiable et sécurisé ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui, <strong className="text-primary">HotLoot Casino est totalement sécurisé</strong>. La plateforme utilise un cryptage SSL 256-bit 
                  de niveau militaire et possède une licence Curaçao valide. Toutes les transactions sont protégées et les jeux sont certifiés équitables.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Comment retirer mes gains sur HotLoot ?</h3>
                <p className="text-foreground leading-relaxed">
                  Les retraits sont traités sous <strong className="text-primary">24-48h</strong> via les mêmes méthodes que les dépôts. 
                  Assurez-vous d'avoir vérifié votre compte et rempli les conditions de mise x30 du bonus avant de retirer.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Pourquoi le wager x30 est-il avantageux ?</h3>
                <p className="text-foreground leading-relaxed">
                  Le <strong className="text-primary">wager x30 est bien plus favorable</strong> que la moyenne du marché (x40-x50). 
                  Cela signifie que vous avez plus de chances de remplir les conditions et de retirer vos gains réels.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Puis-je jouer sur mobile ?</h3>
                <p className="text-foreground leading-relaxed">
                  Absolument ! <strong className="text-primary">HotLoot est entièrement optimisé mobile</strong>. Jouez directement depuis votre 
                  navigateur mobile sans téléchargement, avec la même qualité et toutes les fonctionnalités.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <SEOEnrichedContent
        casinoName="HotLoot"
        bonus="300% jusqu'à 1200€"
        wager="30"
        minDeposit="20€"
        withdrawal="24-48h"
        rating={9.1}
        reviewsCount={2100}
        slug="hotloot"
      />
      <Footer />
    </>
  );
};

