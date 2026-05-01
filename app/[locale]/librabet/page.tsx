'use client';

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from 'next-intl';
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle2, Shield, Zap, CreditCard, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnrichedContent from "@/components/SEOEnrichedContent";
import SEOHead from "@/components/SEOHead";
import { casinos } from "@/data/casinos";

export default function LibraBetPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const tCommon = useTranslations('Common');
  const locale = useLocale();
  const t = useTranslations('CasinoPages.librabet');
  const casino = casinos.find(c => c.name === "LibraBet")!;

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
      title: "Bonus de Bienvenue – 100% jusqu'à 500€ + 200 Free Spins",
      details: [
        "Dépôt minimum : 20 €",
        "Bonus : 100% jusqu'à 500 €",
        "Free Spins : 200 FS offerts",
        "Conditions de mise : x35 (dépôt + bonus)",
        "Délai pour remplir le wagering : 30 jours",
        "Mise maximale pendant le bonus : 5 €",
        "Bookmaker intégré disponible"
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
          "name": "LibraBet Casino",
          "image": "https://gigabonus.win/images/librabet.webp"
        },
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin",
          "jobTitle": "Expert Casino Senior",
          "description": "15 ans d'expérience, 500+ casinos testés"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "8.5",
          "bestRating": "10"
        },
        "reviewBody": "LibraBet Casino offre un bonus généreux de 100% jusqu'à 500€ avec 200 free spins. Le casino propose également un bookmaker intégré et une large sélection de fournisseurs de jeux. Wager x35 et méthodes de paiement variées incluant Neosurf.",
        "datePublished": "2026-01-10T10:00:00Z",
        "dateModified": new Date().toISOString()
      },
      {
        "@type": "Article",
        "headline": "LibraBet Casino Avis 2026 : Bonus 100% + 200 FS",
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
        "datePublished": "2026-01-10T10:00:00Z",
        "dateModified": new Date().toISOString(),
        "image": "https://gigabonus.win/images/librabet.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quel est le bonus de bienvenue de LibraBet ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "LibraBet offre un bonus de 100% jusqu'à 500€ plus 200 free spins pour votre premier dépôt. Le wager est de x35."
            }
          },
          {
            "@type": "Question",
            "name": "LibraBet a-t-il un bookmaker ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, LibraBet propose un bookmaker intégré pour les paris sportifs en plus des jeux de casino."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Avis LibraBet Casino 2026 : Bonus 100% jusqu'à 500€ + 200 FS | Notre Test Complet"
        description="Notre avis complet sur LibraBet Casino 2026 : bonus 100% jusqu'à 500€ + 200 free spins, bookmaker intégré, wager x35. Test détaillé !"
        keywords="librabet casino, avis librabet, bonus casino, bookmaker, free spins, librabet avis"
        canonical="https://gigabonus.win/librabet"
        ogTitle="Avis LibraBet Casino 2026 : Bonus 100% + 200 FS"
        ogDescription="Notre avis complet sur LibraBet Casino : bonus 100% jusqu'à 500€, 200 free spins, bookmaker intégré."
        ogImage="https://gigabonus.win/images/librabet.webp"
        twitterTitle="Avis LibraBet Casino 2026 : Bonus 100% + 200 FS"
        twitterDescription="Notre avis complet sur LibraBet Casino : bonus généreux, free spins, bookmaker."
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section avec Video */}
          <section className="glass-card rounded-3xl overflow-hidden mb-12">
            <div className="relative h-80 overflow-hidden">
              {casino.video && (
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
              )}
              {!casino.video && casino.backgroundImage && (
                <img
                  src={casino.backgroundImage}
                  alt={casino.name}
                  className="w-full h-full object-cover opacity-70"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center flex flex-col items-center -mt-8">
                  <img
                    src={casino.logo}
                    alt={casino.name}
                    className="w-64 h-64 object-contain drop-shadow-2xl"
                  />
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                    LibraBet
                  </p>
                  <Badge className="bg-primary text-white font-bold text-2xl px-6 py-3 animate-glow mt-2">
                    +{casino.bonusPercent}% BONUS + 200 FS
                  </Badge>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              {/* H1 SEO Optimisé */}
              <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
                Avis LibraBet Casino 2026 : Bonus 100% jusqu'à 500€ + 200 Free Spins - Casino & Bookmaker Complet - Notre Test
              </h1>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">À Propos de LibraBet Casino</h2>
                <div className="space-y-4 text-foreground max-w-4xl mx-auto">
                  <p>
                    <strong className="text-primary">LibraBet Casino</strong> se distingue par son <strong className="text-primary">bonus de bienvenue généreux</strong> de 100% jusqu'à 500€ accompagné de <strong className="text-primary">200 free spins</strong>. 
                    Avec un <strong className="text-primary">wager de x35</strong>, LibraBet offre des conditions équilibrées pour les joueurs français. 
                    Le casino propose également un <strong className="text-primary">bookmaker intégré</strong>, permettant de combiner jeux de casino et paris sportifs sur une seule plateforme.
                  </p>
                  <p>
                    L'<strong className="text-primary">interface moderne et intuitive</strong> de LibraBet facilite la navigation entre les différents types de jeux. 
                    La plateforme est entièrement responsive et fonctionne parfaitement sur tous les appareils (desktop, tablette, mobile). 
                    Le design épuré met en avant les jeux et les promotions, offrant une expérience utilisateur agréable.
                  </p>
                  <p>
                    La <strong className="text-primary">sécurité</strong> est garantie par un cryptage SSL de niveau bancaire. 
                    LibraBet opère sous licence et respecte toutes les normes de jeu responsable. Le dépôt minimum de 20€ rend le casino
                    accessible à tous les profils de joueurs. Le <strong className="text-primary">support client</strong> est disponible 
                    pour répondre à toutes vos questions.
                  </p>
                  <p>
                    La <strong className="text-primary">ludothèque impressionnante</strong> compte plus de 5000 jeux des meilleurs éditeurs : 
                    Play'n GO, NetEnt, Evolution Gaming, Pragmatic Play, Hacksaw Gaming, NoLimit City, Yggdrasil, et bien d'autres. 
                    Les <strong className="text-primary">machines à sous populaires</strong> incluent les titres les plus récents et les classiques intemporels. 
                    Le <strong className="text-primary">casino live</strong> propose une expérience immersive avec des croupiers professionnels pour la roulette, 
                    le blackjack, le baccarat et d'autres jeux de table.
                  </p>
                  <p>
                    Le <strong className="text-primary">bookmaker intégré</strong> permet de parier sur les événements sportifs majeurs : 
                    football, tennis, basketball, et bien d'autres sports. Les cotes sont compétitives et les marchés variés. 
                    LibraBet combine ainsi le meilleur des deux mondes : casino et paris sportifs sur une seule plateforme.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-8 py-6 mt-6"
                >
                  <a href={casino.playUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-6 h-6 mr-2" />
                    {tCommon('playNow')}
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
                  <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">200 Free Spins</p>
                  <p className="text-xs text-muted-foreground">Bonus inclus</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Sécurisé</p>
                  <p className="text-xs text-muted-foreground">Licence SSL</p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="border-t border-border pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{tCommon('sections.paymentMethods')}</h3>
                <div className="flex flex-wrap gap-4">
                  {casino.methods.map((method) => {
                    const methodLogos: Record<string, string> = {
                      "CB": "/images/methods/carte-bancaire.webp",
                      "virement": "/images/methods/virement-bancaire.webp",
                      "paysafe": "/images/methods/paysafecard.webp",
                      "skrill": "/images/methods/skrill.webp",
                      "neteler": "/images/methods/neteller.webp",
                      "neosurf": "/images/methods/neosurf.webp",
                    };
                    
                    const methodNames: Record<string, string> = {
                      "CB": "Carte Bancaire",
                      "virement": "Virement Bancaire",
                      "paysafe": "PaysafeCard",
                      "skrill": "Skrill",
                      "neteler": "Neteller",
                      "neosurf": "Neosurf",
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
              🎁 {tCommon('sections.offersAndPromotions')} LibraBet
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
                          {tCommon('playNow')}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* {tCommon('sections.howToRegister')} */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">📝 {tCommon('sections.howToRegister')} sur LibraBet Casino ?</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                L'<strong className="text-primary">inscription sur LibraBet</strong> est simple et rapide. 
                Voici notre <strong className="text-primary">guide complet</strong> pour créer votre compte et profiter du bonus 100% + 200 FS.
              </p>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 1 : Créer votre compte</h3>
                <p className="leading-relaxed">
                  Cliquez sur <strong className="text-primary">"S'inscrire"</strong> sur la page d'accueil. Remplissez le formulaire avec vos informations : 
                  email, mot de passe sécurisé, et devise préférée. L'inscription prend <strong className="text-primary">moins de 2 minutes</strong>.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 2 : Vérifier votre email</h3>
                <p className="leading-relaxed">
                  LibraBet vous envoie un <strong className="text-primary">email de confirmation</strong>. Cliquez sur le lien pour activer votre compte. 
                  Cette étape sécurise votre compte et active les notifications des promotions.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 3 : Effectuer votre premier dépôt</h3>
                <p className="leading-relaxed">
                  Accédez à la section <strong className="text-primary">"Dépôt"</strong>. Sélectionnez votre méthode de paiement préférée 
                  (carte bancaire, Paysafecard, Skrill, Neteller, Neosurf, ou virement). Le <strong className="text-primary">dépôt minimum est de 20€</strong>. 
                  Votre compte est crédité rapidement selon la méthode choisie.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 4 : Recevoir votre bonus 100% + 200 FS</h3>
                <p className="leading-relaxed">
                  Le bonus de 100% jusqu'à 500€ et les 200 free spins sont automatiquement crédités sur votre compte. Vous disposez de 
                  <strong className="text-primary"> 30 jours</strong> pour remplir les conditions de mise x35. Profitez de votre bonus et explorez la ludothèque !
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <p className="text-center font-semibold text-foreground">
                  🎰 Bonus Activé - 200 Free Spins Disponibles !
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Complète */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">❓ Questions Fréquentes sur LibraBet Casino</h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Quel est le bonus de bienvenue de LibraBet ?</h3>
                <p className="text-foreground leading-relaxed">
                  LibraBet offre un <strong className="text-primary">bonus de 100% jusqu'à 500€</strong> plus <strong className="text-primary">200 free spins</strong> 
                  pour votre premier dépôt. Le wager est de x35, ce qui est une condition équitable dans l'industrie.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">LibraBet a-t-il un bookmaker ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui, LibraBet propose un <strong className="text-primary">bookmaker intégré</strong> pour les paris sportifs. 
                  Vous pouvez parier sur le football, le tennis, le basketball et bien d'autres sports directement depuis la même plateforme que les jeux de casino.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Quelles méthodes de paiement sont acceptées ?</h3>
                <p className="text-foreground leading-relaxed">
                  LibraBet accepte les <strong className="text-primary">cartes bancaires</strong>, <strong className="text-primary">Paysafecard</strong>, 
                  <strong className="text-primary"> Skrill</strong>, <strong className="text-primary">Neteller</strong>, <strong className="text-primary">Neosurf</strong>, et les <strong className="text-primary">virements bancaires</strong>. 
                  Le dépôt minimum est de 20€.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Quels fournisseurs de jeux sont disponibles ?</h3>
                <p className="text-foreground leading-relaxed">
                  LibraBet propose plus de <strong className="text-primary">70 fournisseurs</strong> incluant Play'n GO, NetEnt, Evolution Gaming, 
                  Pragmatic Play, Hacksaw Gaming, NoLimit City, Yggdrasil, et bien d'autres. La ludothèque compte plus de 5000 jeux.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">LibraBet est-il disponible en France ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui, LibraBet est <strong className="text-primary">disponible pour les joueurs français</strong>. 
                  Le casino accepte les joueurs résidant en France et propose un support en français.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="text-center glass-card rounded-2xl p-12 bg-gradient-to-br from-primary/20 to-secondary/20">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Rejoignez LibraBet Casino</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Profitez du bonus de 100% jusqu'à 500€ + 200 free spins et du bookmaker intégré
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-12 py-6"
            >
              <a href={casino.playUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-6 h-6 mr-2" />
                Jouer sur LibraBet Maintenant
              </a>
            </Button>
          </section>
        </div>
      </div>
      
      {/* SEO Enriched Content */}
      <SEOEnrichedContent
        casinoName="LibraBet"
        bonus="100% jusqu'à 500€ + 200 FS"
        wager="35"
        minDeposit="20€"
        withdrawal="48h"
        rating={8.5}
        reviewsCount={2500}
        competitors={["OnlySpins", "HunnyPlay", "Kings Chance"]}
        slug="librabet"
      />
      
      <Footer />
    </>
  );
}

