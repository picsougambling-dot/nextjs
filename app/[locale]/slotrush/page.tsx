'use client';

import { useRef, useEffect } from "react";
import { Link } from '@/i18n/navigation';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle2, Shield, Zap, CreditCard } from "lucide-react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnrichedContent from "@/components/SEOEnrichedContent";
import SEOHead from "@/components/SEOHead";
import { casinos } from "@/data/casinos";

export default function SlotRushPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const casino = casinos.find(c => c.name === "SlotRush")!;


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
      title: "Bonus de Bienvenue – 350% jusqu'à 4000€ + 200 FS",
      details: [
        "Dépôt minimum : 20 €",
        "Bonus : 350% jusqu'à 4000 €",
        "200 Free Spins offerts",
        "Conditions de mise : x40 (dépôt + bonus)",
        "Délai pour remplir le wagering : 30 jours",
        "Mise maximale pendant le bonus actif : 5 €",
        "Paris sportifs disponibles",
        "Contact : support@slotrush.com, chat 24/7"
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
          "name": "SlotRush Casino",
          "image": "https://gigabonus.win/images/slotrush.webp"
        },
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin",
          "jobTitle": "Expert Casino Senior",
          "description": "15 ans d'expérience, 500+ casinos testés"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "9.2",
          "bestRating": "10"
        },
        "reviewBody": "SlotRush Casino combine casino en ligne et bookmaker dans une plateforme tout-en-un. Bonus 350% jusqu'à 4000€ + 200 FS, wager x40 raisonnable, et délais de retrait rapides (24h). Catalogue de 5000+ jeux et paris sportifs sur 40+ disciplines.",
        "datePublished": "2024-09-12T10:00:00Z",
        "dateModified": new Date().toISOString()
      },
      {
        "@type": "Article",
        "headline": "SlotRush Casino Avis 2026",
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
        },
        "datePublished": "2024-09-12T10:00:00Z",
        "dateModified": new Date().toISOString(),
        "image": "https://gigabonus.win/images/slotrush.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "SlotRush propose-t-il des paris sportifs ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, SlotRush intègre un bookmaker complet avec paris sportifs sur plus de 40 disciplines: football, tennis, basketball, esports, etc. Les paris sont disponibles en pré-match et en direct avec des cotes compétitives. Vous pouvez utiliser votre solde casino pour parier sur le sport."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Avis SlotRush Casino 2026 : Bonus 350% jusqu'à 4000€ + 200 FS | Notre Test Complet"
        description="Notre avis complet sur SlotRush Casino 2026 : bonus 350% jusqu'à 4000€ + 200 Free Spins, paris sportifs disponibles, retraits rapides. Test détaillé !"
        keywords="slotrush casino, avis slotrush, bonus slotrush, slotrush casino avis, bonus 350%, bookmaker casino, paris sportifs"
        canonical="https://gigabonus.win/slotrush"
        ogTitle="Avis SlotRush Casino 2026 : Bonus 350% jusqu'à 4000€ + 200 FS"
        ogDescription="Notre avis complet sur SlotRush Casino après plusieurs mois de test : bonus 350% jusqu'à 4000€, paris sportifs, retraits rapides."
        ogImage="https://gigabonus.win/images/slotrush.webp"
        twitterTitle="Avis SlotRush Casino 2026 : Bonus 350% jusqu'à 4000€ + 200 FS"
        twitterDescription="Notre avis complet sur SlotRush Casino : bonus 350% jusqu'à 4000€, paris sportifs, retraits rapides."
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
                    alt={`Logo SlotRush Casino - Bonus ${casino.bonusPercent}%`}
                    width={256}
                    height={256}
                    loading="eager"
                    className="w-64 h-64 object-contain drop-shadow-2xl"
                  />
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                    SlotRush
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
                Avis SlotRush Casino 2026 : Bonus 350% jusqu'à 4000€ + 200 FS - Notre Test Complet
              </h1>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">À Propos de SlotRush Casino</h2>
                <div className="space-y-4 text-foreground max-w-4xl mx-auto">
                  <p>
                    <strong className="text-primary">SlotRush Casino</strong> débarque en force en 2026 avec un 
                    <strong className="text-primary"> bonus de bienvenue explosif de 350% jusqu'à 4000€</strong> accompagné de 
                    <strong className="text-primary"> 200 tours gratuits</strong>. Cette offre exceptionnelle place SlotRush parmi 
                    les casinos les plus généreux du marché français. La plateforme combine habilement casino en ligne et 
                    <strong className="text-primary"> paris sportifs</strong>, offrant une expérience de jeu complète aux amateurs 
                    de machines à sous comme aux passionnés de sport.
                  </p>
                  <p>
                    L'interface moderne et dynamique de SlotRush a été pensée pour offrir une 
                    <strong className="text-primary"> navigation ultra-fluide</strong> sur tous les supports (ordinateur, tablette, smartphone). 
                    Le casino s'engage à traiter les <strong className="text-primary">retraits rapidement sous 24-48h</strong>, avec un 
                    service client réactif disponible <strong className="text-primary">24/7 en français</strong> via chat live et email.
                  </p>
                  <p>
                    La <strong className="text-primary">sécurité</strong> est une priorité absolue pour SlotRush qui utilise un cryptage 
                    SSL 256-bit de niveau militaire pour protéger toutes les transactions et données personnelles. Le casino détient une 
                    licence Curaçao valide et respecte strictement les normes internationales de jeu responsable. Les méthodes de paiement 
                    acceptées incluent <strong className="text-primary">cartes bancaires, virements et cryptomonnaies</strong> pour des 
                    transactions rapides et sécurisées.
                  </p>
                  <p>
                    La <strong className="text-primary">ludothèque impressionnante</strong> compte plus de 
                    <strong className="text-primary"> 2500 jeux</strong> des meilleurs éditeurs mondiaux : Pragmatic Play, NetEnt, 
                    Play'n GO, Evolution Gaming, Hacksaw Gaming, NoLimit City. Les <strong className="text-primary">slots populaires</strong> 
                    incluent Sweet Bonanza, Gates of Olympus, Sugar Rush, The Dog House Megaways, et des centaines de titres avec jackpots 
                    progressifs. Le <strong className="text-primary">casino live HD</strong> propose une immersion totale avec croupiers 
                    professionnels pour la roulette, le blackjack, le baccarat et les game shows excitants.
                  </p>
                  <p>
                    La section <strong className="text-primary">paris sportifs</strong> complète parfaitement l'offre casino avec des 
                    cotes compétitives sur tous les sports majeurs : football, tennis, basketball, et bien plus. Les amateurs de sensations 
                    fortes apprécieront également les <strong className="text-primary">crash games populaires</strong> comme Aviator, 
                    Spaceman et JetX pour des gains instantanés.
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
              🎁 Détail des Offres et Promotions SlotRush
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
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">📝 Comment S'inscrire sur SlotRush Casino ?</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                L'<strong className="text-primary">inscription sur SlotRush</strong> est rapide et intuitive.
                Voici notre <strong className="text-primary">guide complet</strong> pour créer votre compte et profiter du bonus 350%.
              </p>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 1 : Créer votre compte</h3>
                <p className="leading-relaxed">
                  Cliquez sur <strong className="text-primary">"S'inscrire"</strong> sur la page d'accueil. Remplissez le formulaire avec vos informations : 
                  nom, prénom, date de naissance, email et mot de passe sécurisé. L'inscription complète prend 
                  <strong className="text-primary"> moins de 2 minutes</strong>. Toutes les données sont protégées par cryptage SSL.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 2 : Vérifier votre email</h3>
                <p className="leading-relaxed">
                  SlotRush vous envoie un <strong className="text-primary">email de confirmation</strong>. Cliquez sur le lien de vérification
                  pour <strong className="text-primary">activer votre compte</strong>. Cette étape sécurise votre compte et active les notifications 
                  des promotions exclusives.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 3 : Effectuer votre premier dépôt</h3>
                <p className="leading-relaxed">
                  Accédez à la section <strong className="text-primary">"Dépôt"</strong>. Choisissez parmi cartes bancaires, virements ou cryptomonnaies. 
                  Le <strong className="text-primary">dépôt minimum est de 20€</strong> pour débloquer le bonus de bienvenue. 
                  Les dépôts sont <strong className="text-primary">instantanés</strong> et ultra-sécurisés.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 4 : Recevoir votre bonus 350%</h3>
                <p className="leading-relaxed">
                  Le bonus de 350% jusqu'à 4000€ + 200 FS est automatiquement crédité sur votre compte. 
                  Vous disposez de <strong className="text-primary">30 jours</strong> pour remplir les conditions de mise x40.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <p className="text-center font-semibold text-foreground">
                  🎮 Bonus activé automatiquement - Commencez à jouer immédiatement !
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">❓ Questions Fréquentes sur SlotRush Casino</h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">SlotRush Casino est-il fiable et sécurisé ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui, <strong className="text-primary">SlotRush Casino est totalement sécurisé</strong>. La plateforme utilise un cryptage SSL 256-bit 
                  de niveau militaire et possède une licence Curaçao valide. Toutes les transactions sont protégées et les jeux sont certifiés équitables.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Comment retirer mes gains sur SlotRush ?</h3>
                <p className="text-foreground leading-relaxed">
                  Les retraits sont traités sous <strong className="text-primary">24-48h</strong> via les mêmes méthodes que les dépôts 
                  (cartes, virements, cryptos). Assurez-vous d'avoir vérifié votre compte et rempli les conditions de mise du bonus avant de retirer.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Puis-je jouer sur mobile ?</h3>
                <p className="text-foreground leading-relaxed">
                  Absolument ! <strong className="text-primary">SlotRush est entièrement optimisé mobile</strong>. Jouez directement depuis votre 
                  navigateur mobile sans téléchargement, avec la même qualité et toutes les fonctionnalités du site desktop.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Le bonus 350% est-il vraiment sans arnaque ?</h3>
                <p className="text-foreground leading-relaxed">
                  Le bonus est <strong className="text-primary">100% légit</strong> avec des conditions claires : wager x40, mise max 5€ pendant le bonus, 
                  30 jours pour compléter. Aucune surprise, tout est transparent dans les termes et conditions.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      {/* SEO Enriched Content */}
      <SEOEnrichedContent
        casinoName="SlotRush"
        bonus="100% jusqu'à 500€ + 200 FS"
        wager="40"
        minDeposit="20€"
        withdrawal="24h"
        rating={9.2}
        reviewsCount={2850}
        competitors={["SpinStar", "Kings Chance", "Lucky Treasure"]}
        slug="slotrush"
      />
      
      <Footer />
    </>
  );
};

