'use client';

import { useRef, useEffect } from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle2, Shield, Zap, CreditCard, Trophy, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnrichedContent from "@/components/SEOEnrichedContent";
import SEOHead from "@/components/SEOHead";
import { casinos } from "@/data/casinos";

export default function SpinStarPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const casino = casinos.find(c => c.name === "SpinStar")!;


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
      title: "Bonus de Bienvenue – 700% Jusqu'à 10 000 € + 725 FS",
      details: [
        "Dépôt minimum : 20 €",
        "Bonus colossal : 700% jusqu'à 10 000 €",
        "Free Spins : 725 tours gratuits",
        "Conditions de mise : x35 (dépôt + bonus)",
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
          "name": "SpinStar Casino",
          "image": "https://gigabonus.win/images/spinstar.webp"
        },
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin",
          "jobTitle": "Expert Casino Senior",
          "description": "15 ans d'expérience dans l'industrie des casinos en ligne, 500+ casinos testés"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "9.8",
          "bestRating": "10"
        },
        "reviewBody": "SpinStar Casino se positionne comme notre choix n°1 en 2025 avec son bonus exceptionnel de 700% jusqu'à 10,000€ + 725 Free Spins. La plateforme excelle dans tous les domaines: catalogue de 5000+ jeux, bookmaker intégré, retraits crypto en 18-24h, et un programme VIP généreux.",
        "datePublished": "2024-06-15T10:00:00Z",
        "dateModified": new Date().toISOString()
      },
      {
        "@type": "Article",
        "headline": "SpinStar Casino Avis 2025 : Bonus 700% + 10,000€",
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
        "datePublished": "2024-06-15T10:00:00Z",
        "dateModified": new Date().toISOString(),
        "image": "https://gigabonus.win/images/spinstar.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "SpinStar Casino est-il fiable ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, SpinStar Casino est 100% fiable. La plateforme opère sous licence Curaçao valide (365/JAZ) et fait l'objet d'audits réguliers par des organismes indépendants. Le casino utilise un cryptage SSL 256 bits pour sécuriser toutes les transactions."
            }
          },
          {
            "@type": "Question",
            "name": "Comment débloquer le bonus 700% sur SpinStar ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pour débloquer le bonus de 700% jusqu'à 10,000€, effectuez un dépôt minimum de 20€ et activez l'offre dans la section Promotions. Vous devez ensuite miser 35 fois le montant (dépôt + bonus) sur les jeux éligibles dans les 30 jours."
            }
          },
          {
            "@type": "Question",
            "name": "Quels sont les délais de retrait sur SpinStar ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Les délais de retrait sur SpinStar sont: e-wallets (Skrill, Neteller) 24-48h, crypto-monnaies (Bitcoin, Ethereum) 18-24h, cartes bancaires 2-4 jours, virements SEPA 3-5 jours. Le premier retrait nécessite une vérification KYC de 24-48h."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Avis SpinStar Casino 2025 : Bonus 700% jusqu'à 10 000€ + 725 FS | Notre Test Complet N°1"
        description="Notre avis complet sur SpinStar Casino 2025 : bonus massif 700% jusqu'à 10 000€ + 725 FS, bookmaker intégré, retraits 24h. Test détaillé !"
        keywords="spinstar casino, avis spinstar, bonus spinstar, spinstar 700%, spinstar casino avis, spinstar bonus, casino spinstar 2025"
        canonical="https://gigabonus.win/spinstar"
        ogTitle="Avis SpinStar Casino 2025 : Bonus 700% + 10 000€ + 725 FS"
        ogDescription="Notre avis complet sur SpinStar Casino : bonus exceptionnel 700%, bookmaker, crypto, retraits rapides."
        ogImage="https://gigabonus.win/images/spinstar.webp"
        twitterTitle="Avis SpinStar Casino 2025 : Bonus 700% + 10 000€ + 725 FS"
        twitterDescription="Notre avis complet sur SpinStar Casino : bonus exceptionnel 700%, bookmaker, crypto, retraits rapides."
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
                    SpinStar
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
                Avis SpinStar Casino 2025 : Bonus 700% jusqu'à 10 000€ + 725 Free Spins - Notre Test Complet du Casino N°1
              </h1>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">À Propos de SpinStar Casino</h2>
                <div className="space-y-4 text-foreground max-w-4xl mx-auto">
                  <p>
                    <strong className="text-primary">SpinStar Casino</strong> s'impose comme notre <strong className="text-primary">choix numéro 1 en 2025</strong> avec son
                    <strong className="text-primary"> bonus exceptionnel de 700% jusqu'à 10 000€ + 725 Free Spins</strong>. Cette offre de bienvenue est tout simplement 
                    la plus généreuse du marché français des casinos en ligne. Le casino combine une <strong className="text-primary">interface moderne et fluide</strong>, 
                    un <strong className="text-primary">catalogue de jeux exhaustif</strong> avec plus de 5000 titres, et une <strong className="text-primary">section bookmaker complète</strong> 
                    pour les amateurs de paris sportifs.
                  </p>
                  <p>
                    Avec un <strong className="text-primary">wager de x35</strong> particulièrement compétitif et un <strong className="text-primary">dépôt minimum de seulement 20€</strong>, 
                    SpinStar se distingue par son accessibilité. Le casino propose 725 Free Spins offerts dès le premier dépôt, permettant aux joueurs de 
                    découvrir les meilleures machines à sous du marché sans risque. Les conditions de mise de x35 sont parmi les plus équitables du marché, 
                    loin des x50 ou x60 pratiqués par certains concurrents.
                  </p>
                  <p>
                    La <strong className="text-primary">sécurité maximale</strong> est garantie par un cryptage SSL 256-bit de niveau bancaire militaire. 
                    SpinStar opère sous licence Curaçao et respecte scrupuleusement toutes les normes de jeu responsable. Le casino accepte de nombreuses 
                    méthodes de paiement : <strong className="text-primary">cartes bancaires Visa/Mastercard, cryptomonnaies</strong> (Bitcoin, Ethereum, USDT), 
                    Paysafecard, Skrill, Neteller et MiFinity pour des transactions ultra-rapides et sécurisées.
                  </p>
                  <p>
                    La <strong className="text-primary">ludothèque premium</strong> réunit plusieurs milliers de jeux des meilleurs éditeurs du marché : 
                    Pragmatic Play, NetEnt, Play'n GO, Evolution Gaming, Yggdrasil, Hacksaw Gaming, NoLimit City. Les <strong className="text-primary">machines 
                    à sous populaires</strong> incluent Sweet Bonanza, Gates of Olympus, Sugar Rush 1000, The Dog House Megaways, Wanted Dead or a Wild. 
                    Le <strong className="text-primary">casino live immersif</strong> propose roulette française, blackjack VIP, baccarat squeeze et game shows 
                    spectaculaires avec croupiers professionnels francophones. Les amateurs de sensations fortes adoreront les 
                    <strong className="text-primary"> crash games Aviator, Spaceman et JetX</strong>.
                  </p>
                  <p>
                    L'<strong className="text-primary">interface luxueuse et intuitive</strong> fonctionne parfaitement sur tous les supports (ordinateur, 
                    tablette, smartphone) sans téléchargement. La navigation fluide et la recherche avancée permettent de trouver instantanément vos jeux préférés. 
                    Le <strong className="text-primary">support client multilingue</strong> est disponible 24/7 via chat live et email pour une assistance rapide. 
                    SpinStar représente <strong className="text-primary">l'excellence du casino en ligne moderne</strong> : généreux, performant et respectueux de ses joueurs.
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
                      "paysafe": "/images/methods/paysafecard.webp",
                      "skrill": "/images/methods/skrill.webp",
                      "neteler": "/images/methods/neteller.webp",
                      "myfinity": "/images/methods/mifinity.webp",
                    };
                    
                    const methodNames: Record<string, string> = {
                      "CB": "Carte Bancaire",
                      "crypto": "Cryptomonnaies",
                      "paysafe": "Paysafecard",
                      "skrill": "Skrill",
                      "neteler": "Neteller",
                      "myfinity": "MiFinity",
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
              🎁 Détail des Offres et Promotions SpinStar
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
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">📝 Comment S'inscrire sur SpinStar Casino ?</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                L'<strong className="text-primary">inscription sur SpinStar</strong> est rapide et intuitive.
                Voici notre <strong className="text-primary">guide complet</strong> pour créer votre compte et profiter du bonus 700%.
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
                  SpinStar vous envoie un <strong className="text-primary">email de confirmation</strong>. Cliquez sur le lien de vérification
                  pour <strong className="text-primary">activer votre compte</strong>. Cette étape sécurise votre compte et active les notifications 
                  des promotions exclusives. Si l'email tarde, vérifiez vos spams ou contactez le support 24/7.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 3 : Effectuer votre premier dépôt</h3>
                <p className="leading-relaxed">
                  Accédez à la section <strong className="text-primary">"Dépôt"</strong>. Choisissez parmi cartes bancaires, cryptomonnaies, Paysafecard, 
                  Skrill, Neteller ou MiFinity. Le <strong className="text-primary">dépôt minimum est de 20€</strong> pour débloquer le bonus de bienvenue. 
                  Les dépôts sont <strong className="text-primary">instantanés</strong> et ultra-sécurisés.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 4 : Activer le bonus 700% + 725 FS</h3>
                <p className="leading-relaxed">
                  Le bonus de 700% jusqu'à 10 000€ + 725 Free Spins est automatiquement crédité. 
                  Vous disposez de <strong className="text-primary">30 jours</strong> pour remplir les conditions de mise x35.
                  Les Free Spins sont utilisables sur les slots les plus populaires du casino.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <p className="text-center font-semibold text-foreground">
                  🎰 Conseils de Sécurité : Activez l'authentification à deux facteurs, ne partagez jamais vos identifiants, 
                  et fixez-vous des limites de dépôt pour jouer responsable.
                </p>
              </div>
            </div>
          </section>

          {/* Méthodes de Retrait */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">💰 Méthodes de Retrait sur SpinStar Casino</h2>
            
            <div className="overflow-x-auto max-w-4xl mx-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-border p-3 text-left text-foreground">Méthode</th>
                    <th className="border border-border p-3 text-left text-foreground">Délai</th>
                    <th className="border border-border p-3 text-left text-foreground">Minimum</th>
                    <th className="border border-border p-3 text-left text-foreground">Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 text-foreground">Cryptomonnaies</td>
                    <td className="border border-border p-3 text-foreground">2-6 heures</td>
                    <td className="border border-border p-3 text-foreground">20 €</td>
                    <td className="border border-border p-3 text-foreground">10 000 €</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground">Cartes Bancaires</td>
                    <td className="border border-border p-3 text-foreground">24-48 heures</td>
                    <td className="border border-border p-3 text-foreground">20 €</td>
                    <td className="border border-border p-3 text-foreground">5 000 €</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground">Skrill / Neteller</td>
                    <td className="border border-border p-3 text-foreground">12-24 heures</td>
                    <td className="border border-border p-3 text-foreground">20 €</td>
                    <td className="border border-border p-3 text-foreground">7 500 €</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground">Virement Bancaire</td>
                    <td className="border border-border p-3 text-foreground">3-5 jours</td>
                    <td className="border border-border p-3 text-foreground">100 €</td>
                    <td className="border border-border p-3 text-foreground">20 000 €</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Délais de Traitement Détaillés</h3>
                <p className="text-foreground leading-relaxed mb-3">
                  SpinStar traite les demandes de retrait <strong className="text-primary">sous 24h en moyenne</strong>. Les cryptomonnaies offrent 
                  les délais les plus rapides (2-6h), idéales pour les joueurs pressés. Les portefeuilles électroniques (Skrill, Neteller) suivent 
                  avec 12-24h. Les cartes bancaires prennent 24-48h et les virements 3-5 jours ouvrés.
                </p>
                <p className="text-foreground leading-relaxed">
                  <strong className="text-primary">Conseil Pro :</strong> Validez votre compte dès l'inscription (KYC) pour accélérer vos futurs retraits. 
                  Les premiers retraits nécessitent une vérification d'identité (carte d'identité, justificatif de domicile).
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <p className="text-center font-semibold text-foreground mb-2">
                  💡 Notre Conseil pour Maximiser Vos Retraits
                </p>
                <p className="text-center text-foreground">
                  Utilisez les cryptomonnaies pour les retraits les plus rapides et sans frais. Regroupez vos retraits pour éviter 
                  les multiples transactions. Privilégiez les retraits en semaine pour un traitement plus rapide.
                </p>
              </div>
            </div>
          </section>

          {/* Catalogue de Jeux */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">🎮 Catalogue de Jeux SpinStar Casino</h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-6">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Trophy className="w-6 h-6" />
                  Machines à Sous Premium
                </h3>
                <ul className="space-y-2">
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Sweet Bonanza</strong> (Pragmatic Play) - RTP 96.51%</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Gates of Olympus</strong> (Pragmatic Play) - RTP 96.50%</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Sugar Rush 1000</strong> (Pragmatic Play) - RTP 96.50%</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>The Dog House Megaways</strong> (Pragmatic Play) - RTP 96.55%</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Wanted Dead or a Wild</strong> (Hacksaw Gaming) - RTP 96.38%</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Star className="w-6 h-6" />
                  Casino Live Immersif
                </h3>
                <ul className="space-y-2">
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Roulette Française Live</strong> (Evolution Gaming)</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Blackjack VIP</strong> (Evolution Gaming)</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Baccarat Squeeze</strong> (Evolution Gaming)</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Crazy Time</strong> (Evolution Gaming)</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Monopoly Live</strong> (Evolution Gaming)</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Crash Games Sensations
                </h3>
                <ul className="space-y-2">
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Aviator</strong> - Crash game le plus populaire</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Spaceman</strong> - Gains jusqu'à x5000</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>JetX</strong> - Multiplicateurs explosifs</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Jeux de Table Classiques
                </h3>
                <ul className="space-y-2">
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Poker</strong> - Toutes variantes disponibles</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Blackjack</strong> - Plusieurs tables et limites</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Roulette</strong> - Européenne, française, américaine</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 max-w-4xl mx-auto">
              <p className="text-center font-semibold text-foreground mb-2">
                🆕 Nouveautés Régulières
              </p>
              <p className="text-center text-foreground">
                SpinStar ajoute chaque semaine de nouveaux jeux des meilleurs éditeurs. Consultez la section "Nouveautés" 
                pour découvrir les dernières machines à sous et jeux live avant tout le monde !
              </p>
            </div>
          </section>

          {/* Section Bookmaker */}
          <section className="glass-card rounded-2xl p-8 mb-12 bg-gradient-to-br from-primary/10 to-secondary/10">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">⚽ Section Bookmaker SpinStar</h2>
            
            <p className="text-lg text-foreground text-center mb-6 max-w-3xl mx-auto">
              SpinStar propose une <strong className="text-primary">section bookmaker complète</strong> avec des 
              <strong className="text-primary"> cotes compétitives</strong> sur tous les sports majeurs. Pariez sur football, tennis, 
              basketball, esports et plus de 30 sports différents avec des paris pré-match et live.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
              <div className="glass-card rounded-xl p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-xl font-bold text-foreground mb-2">Cotes Élevées</h3>
                <p className="text-muted-foreground">
                  Parmi les meilleures cotes du marché français. Marge réduite pour maximiser vos gains potentiels.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-xl font-bold text-foreground mb-2">Paris Live</h3>
                <p className="text-muted-foreground">
                  Pariez en direct sur des milliers d'événements chaque jour. Cotes actualisées en temps réel.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-xl font-bold text-foreground mb-2">Cashout Disponible</h3>
                <p className="text-muted-foreground">
                  Sécurisez vos gains avant la fin du match. Cashout partiel ou total disponible sur la plupart des paris.
                </p>
              </div>
            </div>

            <div className="bg-background/50 rounded-xl p-6 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-primary mb-3 text-center">Sports Disponibles</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Football</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Tennis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Basketball</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Esports</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Rugby</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>MMA / UFC</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Formule 1</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Et 25+ sports</span>
                </div>
              </div>
            </div>
          </section>

          {/* Stratégies pour Maximiser les Gains */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">💡 Stratégies pour Maximiser Vos Gains</h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Optimiser le Bonus 700%</h3>
                <ul className="space-y-2">
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Déposez le maximum pour obtenir 10 000€ de bonus</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Utilisez les 725 FS sur les slots à fort RTP</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Respectez la mise maximale de 5€ pendant le bonus</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Complétez le wager x35 dans les 30 jours</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Sélection Jeux Fort RTP</h3>
                <ul className="space-y-2">
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Blood Suckers</strong> - RTP 98%</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Mega Joker</strong> - RTP 99%</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>1429 Uncharted Seas</strong> - RTP 98.6%</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Privilégiez les jeux RTP {'>'} 96%</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Gestion du Bankroll</h3>
                <ul className="space-y-2">
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Ne misez jamais plus de 5% de votre bankroll</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Fixez des limites de gains et de pertes</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Prenez des pauses régulières</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Ne jouez jamais pour récupérer vos pertes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 max-w-4xl mx-auto">
              <p className="text-center font-semibold text-foreground mb-3">
                🎯 Stratégie Complète Exemple
              </p>
              <p className="text-foreground leading-relaxed">
                Déposez 1 429€ pour obtenir les 10 000€ de bonus maximum. Utilisez d'abord les 725 Free Spins sur Sweet Bonanza (RTP 96.51%). 
                Ensuite, jouez sur des slots à fort RTP comme Blood Suckers avec des mises de 1-2€ maximum. Alternez entre slots et jeux de table 
                pour varier les plaisirs. Avec une gestion rigoureuse, vous pouvez transformer le bonus en gains réels sous 2-3 semaines.
              </p>
            </div>
          </section>

          {/* Sécurité et Légalité */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">🔒 Sécurité et Légalité SpinStar Casino</h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-6">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Sécurité Technique
                </h3>
                <ul className="space-y-2">
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Cryptage SSL 256-bit</strong> - Protection bancaire militaire</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Serveurs sécurisés</strong> - Infrastructure redondante</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Authentification 2FA</strong> - Double vérification disponible</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Stockage sécurisé</strong> - Données cryptées et protégées</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  Licence et Régulation
                </h3>
                <ul className="space-y-2">
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Licence Curaçao</strong> - Autorisation légale officielle</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Audits réguliers</strong> - Contrôles trimestriels par iTech Labs</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>RNG certifié</strong> - Générateur aléatoire vérifié</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Conformité RGPD</strong> - Protection données personnelles</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Jeu Responsable</h3>
                <ul className="space-y-2">
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Limites de dépôt</strong> - Configurables quotidiennement, hebdomadairement, mensuellement</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Auto-exclusion</strong> - Temporaire (1-6 mois) ou permanente disponible</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Test d'addiction</strong> - Questionnaire d'auto-évaluation gratuit</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Liens d'aide</strong> - Partenariats avec Joueurs Info Service et GamCare</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <p className="text-center font-semibold text-foreground mb-2">
                  ✅ Notre Verdict Sécurité
                </p>
                <p className="text-center text-foreground">
                  SpinStar Casino respecte les standards de sécurité les plus élevés du marché. Avec sa licence Curaçao, son cryptage SSL 256-bit, 
                  et ses audits réguliers, le casino garantit la protection de vos données et la transparence de vos gains. Les outils de jeu 
                  responsable sont facilement accessibles pour protéger les joueurs vulnérables.
                </p>
              </div>
            </div>
          </section>

          {/* Notre Verdict */}
          <section className="glass-card rounded-2xl p-8 mb-12 bg-gradient-to-br from-primary/10 to-secondary/10">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">⭐ Notre Verdict Final sur SpinStar Casino</h2>
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-primary/20 border-2 border-primary rounded-2xl px-8 py-4">
                <span className="text-6xl font-bold text-primary">9.5</span>
                <span className="text-2xl text-foreground">/10</span>
              </div>
              <p className="text-xl font-semibold text-primary mt-4">Excellent Casino - Fortement Recommandé par GigaBonus</p>
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
                    <span>Bonus exceptionnel 700% jusqu'à 10 000€ + 725 FS</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Wager x35 très compétitif</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Bookmaker intégré avec cotes élevées</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Plus de 5000 jeux premium</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Cryptomonnaies acceptées</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Retraits rapides 24-48h</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Interface moderne et intuitive</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Support client 24/7 réactif</span>
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
                  <li className="text-foreground flex items-start gap-2">
                    <span className="w-4 h-4 flex items-center justify-center text-orange-500 flex-shrink-0 mt-1">•</span>
                    <span>Limite de mise 5€ pendant le bonus peut être restrictive</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <span className="w-4 h-4 flex items-center justify-center text-orange-500 flex-shrink-0 mt-1">•</span>
                    <span>Délai de 30 jours pour wager peut être court pour gros bonus</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-background/50 rounded-xl p-8 max-w-4xl mx-auto space-y-4">
              <h3 className="text-2xl font-bold text-primary text-center mb-4">Conclusion Finale</h3>
              
              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">SpinStar Casino</strong> mérite amplement sa place de <strong className="text-primary">numéro 1 en 2025</strong>. 
                Son bonus de 700% jusqu'à 10 000€ + 725 Free Spins est tout simplement imbattable. Combiné à un wager x35 équitable, une ludothèque 
                colossale de 5000+ jeux, et une section bookmaker performante, SpinStar offre une expérience complète et généreuse.
              </p>

              <p className="text-foreground leading-relaxed">
                La plateforme excelle dans tous les domaines : <strong className="text-primary">sécurité maximale</strong> (SSL 256-bit, licence Curaçao), 
                <strong className="text-primary"> diversité des paiements</strong> (cryptos, cartes, e-wallets), et <strong className="text-primary">retraits rapides</strong> 
                sous 24-48h. L'interface moderne et fluide rend la navigation agréable, que vous soyez sur desktop ou mobile.
              </p>

              <p className="text-foreground leading-relaxed">
                Les quelques points à améliorer (absence de licence ANJ, limite de mise pendant le bonus) ne ternissent pas l'excellence globale du casino. 
                Pour les joueurs français recherchant <strong className="text-primary">le meilleur bonus du marché</strong> avec une plateforme fiable et complète, 
                <strong className="text-primary"> SpinStar est le choix évident</strong>.
              </p>

              <p className="text-center text-xl font-bold text-primary mt-6">
                🏆 Notre Recommandation : SpinStar Casino est le meilleur casino en ligne en 2025 pour les joueurs français !
              </p>
            </div>

            <div className="text-center mt-8">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-12 py-6"
              >
                <a href={casino.playUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-6 h-6 mr-2" />
                  Rejoindre SpinStar Casino
                </a>
              </Button>
            </div>
          </section>

          {/* Avis de Nos Testeurs */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">👥 Avis de Nos Testeurs GigaBonus</h2>
            
            <div className="space-y-6 max-w-5xl mx-auto">
              <div className="glass-card rounded-xl p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                    JM
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-foreground">Jean-Marc, 34 ans</h3>
                    <span className="text-sm text-muted-foreground">Testeur depuis 5 ans</span>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed">
                    "J'ai testé des dizaines de casinos en ligne, mais SpinStar se démarque vraiment avec son bonus de 700%. 
                    J'ai déposé 1500€ et j'ai reçu 10 500€ sur mon compte bonus. Les 725 Free Spins m'ont permis de découvrir 
                    plein de slots sans risque. Le wager x35 est honnête, j'ai pu retirer mes gains après 3 semaines de jeu régulier. 
                    La section bookmaker est un vrai plus, les cotes sont excellentes sur le foot. Support client réactif en français. 
                    Mon nouveau casino préféré !"
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                    SD
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-foreground">Sophie D., 28 ans</h3>
                    <span className="text-sm text-muted-foreground">Testeuse depuis 3 ans</span>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed">
                    "Interface magnifique et super fluide ! J'adore l'ambiance moderne de SpinStar. Le bonus de bienvenue est énorme, 
                    j'ai pu jouer pendant des semaines avec. La ludothèque est impressionnante, plus de 5000 jeux, je trouve toujours 
                    ma machine à sous préférée (Sweet Bonanza). Les retraits en crypto sont ultra-rapides, j'ai reçu mes gains en 4h. 
                    Le casino live est top avec de vraies croupières françaises. Petit bémol : la limite de mise à 5€ pendant le bonus, 
                    mais c'est compréhensible. Sinon, casino au top que je recommande à 100% !"
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                    AL
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-foreground">Alexandre L., 42 ans</h3>
                    <span className="text-sm text-muted-foreground">Testeur depuis 7 ans</span>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed">
                    "En tant que high-roller, j'ai déposé le maximum pour profiter des 10 000€ de bonus. SpinStar est un des rares 
                    casinos à proposer des bonus aussi élevés avec des conditions raisonnables (x35). La sécurité est au rendez-vous, 
                    SSL 256-bit et licence Curaçao. J'apprécie particulièrement la section bookmaker pour diversifier mes paris. 
                    Les limites de table sur le casino live sont suffisamment élevées pour moi. Retrait de 8 000€ traité en 36h sur 
                    mon compte crypto. Service VIP disponible pour les gros joueurs. SpinStar combine générosité et professionnalisme, 
                    exactement ce que je recherche."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Étendue */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">❓ Questions Fréquentes sur SpinStar Casino</h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">SpinStar Casino est-il fiable et sécurisé ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui, <strong className="text-primary">SpinStar est totalement fiable</strong>. Le casino opère sous licence Curaçao et utilise un 
                  cryptage SSL 256-bit de niveau bancaire militaire. Toutes les transactions sont protégées et les jeux sont certifiés équitables 
                  par des audits indépendants. Le casino respecte les normes de jeu responsable et propose des outils d'auto-exclusion.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Comment obtenir le bonus de 700% jusqu'à 10 000€ ?</h3>
                <p className="text-foreground leading-relaxed">
                  Pour obtenir le bonus maximum, inscrivez-vous sur SpinStar et effectuez un dépôt de 1 429€. Le bonus de 10 000€ + 725 Free Spins 
                  sera automatiquement crédité sur votre compte. Le dépôt minimum pour activer l'offre est de 20€. Pensez à respecter les conditions 
                  de mise x35 et la limite de mise de 5€ pendant le bonus actif.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Quels sont les délais de retrait sur SpinStar ?</h3>
                <p className="text-foreground leading-relaxed">
                  Les délais varient selon la méthode : <strong className="text-primary">cryptomonnaies 2-6h</strong>, cartes bancaires 24-48h, 
                  Skrill/Neteller 12-24h, virements bancaires 3-5 jours. Le casino traite les demandes de retrait sous 24h en moyenne. 
                  Pour accélérer vos retraits, validez votre compte (KYC) dès l'inscription. Les cryptos offrent les délais les plus rapides.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Puis-je parier sur le sport avec SpinStar ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui ! SpinStar propose une <strong className="text-primary">section bookmaker complète</strong> avec des paris sur plus de 30 sports : 
                  football, tennis, basketball, esports, rugby, MMA, Formule 1, etc. Le casino offre des cotes compétitives, des paris live en temps réel, 
                  et un système de cashout pour sécuriser vos gains avant la fin des matchs.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Le bonus de 700% est-il vraiment légitime ?</h3>
                <p className="text-foreground leading-relaxed">
                  Absolument ! Il s'agit d'un <strong className="text-primary">bonus de bienvenue officiel</strong> avec des conditions transparentes. 
                  Le wager de x35 signifie que vous devez miser 35 fois le montant du bonus + dépôt avant de pouvoir retirer. C'est un wager standard 
                  et équitable dans l'industrie. Tous les termes et conditions sont clairement détaillés sur le site de SpinStar.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Quels jeux sont disponibles sur SpinStar Casino ?</h3>
                <p className="text-foreground leading-relaxed">
                  SpinStar propose plus de <strong className="text-primary">5000 jeux</strong> : machines à sous (Sweet Bonanza, Gates of Olympus, 
                  Sugar Rush 1000), casino live (roulette, blackjack, baccarat), crash games (Aviator, Spaceman, JetX), jeux de table (poker, 
                  roulette européenne), et game shows (Crazy Time, Monopoly Live). Les éditeurs incluent Pragmatic Play, NetEnt, Evolution Gaming, 
                  Hacksaw Gaming, NoLimit City.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">SpinStar accepte-t-il les cryptomonnaies ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui, SpinStar accepte les <strong className="text-primary">cryptomonnaies principales</strong> : Bitcoin (BTC), Ethereum (ETH), 
                  Litecoin (LTC), Tether (USDT), et d'autres altcoins. Les dépôts en crypto sont instantanés et anonymes. Les retraits en crypto 
                  sont les plus rapides du casino (2-6 heures en moyenne). Aucun frais n'est appliqué sur les transactions crypto.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Puis-je jouer sur mobile avec SpinStar ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui, SpinStar est <strong className="text-primary">100% compatible mobile</strong>. Le casino fonctionne parfaitement sur tous 
                  les smartphones et tablettes (iOS, Android) via votre navigateur. Aucun téléchargement n'est nécessaire. L'interface mobile est 
                  optimisée pour offrir la même expérience fluide que sur desktop avec tous les jeux, bonus, et fonctionnalités disponibles.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="text-center glass-card rounded-2xl p-12 bg-gradient-to-br from-primary/20 to-secondary/20">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Prêt à Découvrir le Meilleur Casino en Ligne ?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Profitez du bonus exceptionnel de 700% jusqu'à 10 000€ + 725 Free Spins sur SpinStar Casino
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-12 py-6"
            >
              <a href={casino.playUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-6 h-6 mr-2" />
                Jouer sur SpinStar Maintenant
              </a>
            </Button>
          </section>
        </div>
      </div>
      
      {/* SEO Enriched Content */}
      <SEOEnrichedContent
        casinoName="SpinStar"
        bonus="700% jusqu'à 10,000€ + 725 FS"
        wager="35"
        minDeposit="20€"
        withdrawal="24-48h"
        rating={9.8}
        reviewsCount={4250}
        competitors={["Kings Chance", "Lucky Treasure", "Spin Dynasty"]}
        slug="spinstar"
      />
      
      <Footer />
    </>
  );
};

