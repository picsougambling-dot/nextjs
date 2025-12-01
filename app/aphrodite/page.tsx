'use client';

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle2, Shield, Zap, CreditCard, Trophy, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnrichedContent from "@/components/SEOEnrichedContent";
import SEOHead from "@/components/SEOHead";
import { casinos } from "@/data/casinos";

export default function AphroditePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const casino = casinos.find(c => c.name === "Aphrodite")!;

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
      title: `Bonus de Bienvenue – ${casino.bonusText}`,
      details: [
        `Dépôt minimum : ${casino.minDeposit}`,
        `Bonus : ${casino.bonusText}`,
        casino.wager === null ? "Conditions de mise : Sans wager" : `Conditions de mise : x${casino.wager} (dépôt + bonus)`,
        "Délai pour remplir le wagering : 30 jours",
        "Mise maximale pendant le bonus : 5 €"
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
          "name": "Aphrodite Casino",
          "image": "https://gigabonus.win/images/aphrodite.webp"
        },
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin",
          "jobTitle": "Expert Casino Senior"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": casino.rating.toString(),
          "bestRating": "10"
        },
        "reviewBody": `Aphrodite Casino propose un bonus de ${casino.bonusText} avec ${casino.wager === null ? 'sans conditions de mise' : `wager x${casino.wager}`}. Plateforme complète avec bookmaker intégré et catalogue de jeux varié.`,
        "datePublished": new Date().toISOString()
      }
    ]
  };

  return (
    <>
      <SEOHead
        title={`Avis Aphrodite Casino 2025 : Bonus ${casino.bonusText} | Notre Test Complet`}
        description={`Notre avis complet sur Aphrodite Casino 2025 : bonus ${casino.bonusText}, ${casino.wager === null ? 'sans wager' : `wager x${casino.wager}`}, bookmaker intégré, retraits rapides. Test détaillé !`}
        keywords="casino en ligne, bonus casino, jeux casino, bookmaker, paris sportifs, casino fiable, retraits rapides"
        canonical="https://gigabonus.win/aphrodite"
        ogTitle={`Avis Aphrodite Casino 2025 : Bonus ${casino.bonusText}`}
        ogDescription={`Notre avis complet sur Aphrodite Casino : bonus ${casino.bonusText}, bookmaker, retraits rapides.`}
        ogImage="https://gigabonus.win/images/aphrodite.webp"
        twitterTitle={`Avis Aphrodite Casino 2025 : Bonus ${casino.bonusText}`}
        twitterDescription={`Notre avis complet sur Aphrodite Casino : bonus ${casino.bonusText}, bookmaker, retraits rapides.`}
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
                    alt={casino.name}
                    className="w-64 h-64 object-contain drop-shadow-2xl"
                  />
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                    {casino.name}
                  </p>
                  <Badge className="bg-primary text-white font-bold text-2xl px-6 py-3 animate-glow mt-2">
                    +{casino.bonusPercent}% BONUS
                  </Badge>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
                Avis {casino.name} Casino 2025 : Bonus {casino.bonusText} - Notre Test Complet
              </h1>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">À Propos de {casino.name} Casino</h2>
                <div className="space-y-4 text-foreground max-w-4xl mx-auto">
                  <p>
                    <strong className="text-primary">{casino.name} Casino</strong> se distingue par son 
                    <strong className="text-primary"> bonus de {casino.bonusText}</strong> {casino.wager === null ? 'sans conditions de mise' : `avec un wager de x${casino.wager}`}. 
                    Cette plateforme combine un <strong className="text-primary">casino en ligne complet</strong> avec une 
                    <strong className="text-primary"> section bookmaker intégrée</strong> pour les amateurs de paris sportifs.
                  </p>
                  <p>
                    Avec un <strong className="text-primary">dépôt minimum de {casino.minDeposit}</strong>, 
                    {casino.name} offre une accessibilité remarquable. Le casino propose un 
                    <strong className="text-primary"> catalogue de jeux varié</strong> avec les meilleurs éditeurs du marché. 
                    Les méthodes de paiement incluent <strong className="text-primary">cartes bancaires, cryptomonnaies et virements</strong>.
                  </p>
                  <p>
                    La <strong className="text-primary">sécurité maximale</strong> est garantie par un cryptage SSL 256-bit. 
                    {casino.name} opère sous licence Curaçao et respecte toutes les normes de jeu responsable. 
                    Le casino accepte de nombreuses méthodes de paiement pour des transactions sécurisées.
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
                  <p className="font-semibold text-foreground">
                    {casino.wager === null ? "Sans wager" : `Wager x${casino.wager}`}
                  </p>
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
                  <p className="text-xs text-muted-foreground">Rapides</p>
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
                      "crypto": "/images/methods/crypto.webp",
                      "virement": "/images/methods/virement-bancaire.webp",
                    };
                    
                    const methodNames: Record<string, string> = {
                      "CB": "Carte Bancaire",
                      "crypto": "Cryptomonnaies",
                      "virement": "Virement Bancaire",
                    };

                    return (
                      <img 
                        key={method}
                        src={methodLogos[method]} 
                        alt={methodNames[method]}
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
              🎁 Détail des Offres et Promotions {casino.name}
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

          {/* Notre Verdict */}
          <section className="glass-card rounded-2xl p-8 mb-12 bg-gradient-to-br from-primary/10 to-secondary/10">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">⭐ Notre Verdict Final sur {casino.name} Casino</h2>
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-primary/20 border-2 border-primary rounded-2xl px-8 py-4">
                <span className="text-6xl font-bold text-primary">{casino.rating}</span>
                <span className="text-2xl text-foreground">/10</span>
              </div>
              <p className="text-xl font-semibold text-primary mt-4">Casino Recommandé par GigaBonus</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-500 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  Points Forts
                </h3>
                <ul className="space-y-2">
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Bonus {casino.bonusText}</span>
                  </li>
                  {casino.wager === null && (
                    <li className="text-foreground flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span>Sans conditions de mise</span>
                    </li>
                  )}
                  {casino.isBookmaker && (
                    <li className="text-foreground flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span>Bookmaker intégré</span>
                    </li>
                  )}
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Dépôt minimum accessible : {casino.minDeposit}</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Retraits rapides 24-48h</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-500 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 flex items-center justify-center">⚠️</span>
                  Points à Améliorer
                </h3>
                <ul className="space-y-2">
                  <li className="text-foreground flex items-start gap-2">
                    <span className="w-4 h-4 flex items-center justify-center text-orange-500 flex-shrink-0 mt-1">•</span>
                    <span>Pas de licence française (Curaçao uniquement)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="text-center glass-card rounded-2xl p-12 bg-gradient-to-br from-primary/20 to-secondary/20">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Prêt à Découvrir {casino.name} Casino ?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Profitez du bonus {casino.bonusText} sur {casino.name} Casino
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-12 py-6"
            >
              <a href={casino.playUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-6 h-6 mr-2" />
                Jouer sur {casino.name} Maintenant
              </a>
            </Button>
          </section>
        </div>
      </div>
      
      {/* SEO Enriched Content */}
      <SEOEnrichedContent
        casinoName={casino.name}
        bonus={casino.bonusText}
        wager={casino.wager === null ? "0" : casino.wager.toString()}
        minDeposit={casino.minDeposit}
        withdrawal="24-48h"
        rating={casino.rating}
        reviewsCount={1500}
        competitors={["Kings Chance", "Lucky Treasure", "Spin Dynasty"]}
        slug="aphrodite"
      />
      
      <Footer />
    </>
  );
}

