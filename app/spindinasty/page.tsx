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

export default function SpinDinastyPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const casino = casinos.find(c => c.name === "Spin Dinasty")!;


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
      title: "Bonus de Bienvenue – 200% Jusqu'à 500 €",
      banner: "/images/spindinasty/welcome.webp",
      details: [
        "Dépôt minimum : 20 €",
        "Code Bonus : PLINKO200",
        "Bonus : 200 %",
        "Montant maximum du bonus : 500 €",
        "Conditions de mise : Sans Wager (Bonus déduit au retrait)",
        "Limite de retrait : aucune",
        "La mise maximale avec un bonus actif est de 5 €"
      ]
    },
    {
      id: 2,
      title: "Bonus de Bienvenue Boost – 200% Jusqu'à 500 € + 50 FS",
      banner: "/images/spindinasty/boost.webp",
      details: [
        "Dépôt minimum : 100 €",
        "Code Bonus : SPINVIP",
        "Bonus : 200 % + 50 Tours Gratuits",
        "Montant maximum du bonus : 500 €",
        "Tours gratuits : Fury Dragon Hold & Win",
        "Conditions de mise : Sans Wager (Bonus déduit au retrait)",
        "Limite de retrait : aucune",
        "La mise maximale avec un bonus actif est de 5 €"
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
          "name": "Spin Dynasty Casino",
          "image": "https://gigabonus.fr/images/spindinasty.webp"
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
        "reviewBody": "Spin Dynasty Casino se distingue par son approche sans wager et son jeu exclusif Olympus Plinko. Le bonus de 200% est déduit au retrait, garantissant que tous vos gains restent réels. Retraits rapides en 24-48h et support francophone 24/7.",
        "datePublished": "2024-08-05T10:00:00Z",
        "dateModified": new Date().toISOString()
      },
      {
        "@type": "Article",
        "headline": "Spin Dynasty Casino Avis 2025 : Bonus Sans Wager 200%",
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GigaBonus",
          "logo": {
            "@type": "ImageObject",
            "url": "https://gigabonus.fr/gigabonus-logo.webp"
          }
        },
        "datePublished": "2024-08-05T10:00:00Z",
        "dateModified": new Date().toISOString(),
        "image": "https://gigabonus.fr/images/spindinasty.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Spin Dynasty a-t-il un wager ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non, Spin Dynasty propose un bonus sans wager. Le bonus de 200% est simplement déduit au retrait, vous conservez tous vos gains réels sans conditions de mise."
            }
          },
          {
            "@type": "Question",
            "name": "Qu'est-ce qu'Olympus Plinko ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Olympus Plinko est un jeu exclusif de Spin Dynasty, une variante du célèbre jeu Plinko avec un thème grec antique. C'est un jeu de hasard où vous lâchez une bille qui rebondit sur des piquets pour atterrir dans des cases avec différents multiplicateurs."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Avis Spin Dynasty Casino 2025 : Bonus Sans Wager 200% jusqu'à 500€ | Notre Test Complet"
        description="Notre avis complet sur Spin Dynasty Casino 2025 : bonus sans wager 200% jusqu'à 500€, retraits 24-48h, transparence totale. Test détaillé !"
        keywords="spin dynasty casino, avis spin dynasty, bonus sans wager, spin dynasty avis, bonus 200%, plinko, casino sans wager"
        canonical="https://gigabonus.fr/spindinasty"
        ogTitle="Avis Spin Dynasty Casino 2025 : Bonus Sans Wager 200% jusqu'à 500€"
        ogDescription="Notre avis complet sur Spin Dynasty Casino : bonus sans wager révolutionnaire, retraits rapides, transparence totale."
        ogImage="https://gigabonus.fr/images/spindinasty.webp"
        twitterTitle="Avis Spin Dynasty Casino 2025 : Bonus Sans Wager 200% jusqu'à 500€"
        twitterDescription="Notre avis complet sur Spin Dynasty Casino : bonus sans wager révolutionnaire."
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
                    Spin Dynasty
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
                Avis Spin Dynasty Casino 2025 : Bonus Sans Wager 200% jusqu'à 500€ - Notre Test Complet
              </h1>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">À Propos de Spin Dynasty Casino</h2>
                <div className="space-y-4 text-foreground max-w-4xl mx-auto">
                  <p>
                    <strong className="text-primary">Spin Dynasty Casino</strong> révolutionne l'industrie des casinos en ligne avec son 
                    <strong className="text-primary"> concept de bonus sans wager totalement transparent</strong>. Lancé en 2024, ce casino nouvelle génération 
                    propose un <strong className="text-primary">bonus de bienvenue exceptionnel de 200% jusqu'à 500€</strong> avec le code PLINKO200, ou la version boostée 
                    de 200% + 50 Free Spins avec le code SPINVIP. La particularité révolutionnaire : <strong className="text-primary">aucune condition de mise (wager) à remplir</strong>. 
                    Contrairement aux casinos traditionnels qui imposent de miser x30, x40 ou x50 fois le bonus avant de pouvoir retirer, Spin Dynasty déduit simplement 
                    le bonus lors du retrait. Vos gains restent vôtres !
                  </p>
                  <p>
                    Cette approche <strong className="text-primary">honnête et transparente</strong> élimine toute frustration. Vous pouvez retirer vos gains à tout moment 
                    sans avoir à remplir des conditions impossibles. Le <strong className="text-primary">dépôt minimum de seulement 20€</strong> rend le casino accessible 
                    à tous. La plateforme garantit des <strong className="text-primary">retraits rapides en 24-48h</strong> après validation KYC. 
                    Le <strong className="text-primary">support client réactif</strong> répond en moins de 3 minutes via chat live ou email.
                  </p>
                  <p>
                    La <strong className="text-primary">sécurité maximale</strong> est assurée par un cryptage SSL 256-bit de niveau bancaire. Le casino possède une 
                    licence Curaçao valide et respecte toutes les normes de jeu responsable. Spin Dynasty accepte de nombreuses méthodes de paiement : 
                    <strong className="text-primary"> cartes bancaires Visa/Mastercard, virements, Cashlib et cryptomonnaies</strong> (Bitcoin, Ethereum, Litecoin) 
                    pour des transactions ultra-rapides et anonymes.
                  </p>
                  <p>
                    La <strong className="text-primary">ludothèque soigneusement sélectionnée</strong> propose plusieurs milliers de jeux des meilleurs éditeurs : 
                    Pragmatic Play, NetEnt, Play'n GO, Evolution Gaming, Yggdrasil. Le jeu signature <strong className="text-primary">Olympus Plinko</strong> 
                    offre une expérience unique où stratégie et chance se rencontrent. Les <strong className="text-primary">machines à sous populaires</strong> 
                    incluent Sweet Bonanza, Gates of Olympus, Sugar Rush, The Dog House Megaways. Le <strong className="text-primary">casino live</strong> 
                    propose roulette, blackjack, baccarat et game shows avec croupiers professionnels. Les fans de sensations fortes apprécieront les 
                    <strong className="text-primary"> crash games Aviator et JetX</strong>.
                  </p>
                  <p>
                    L'<strong className="text-primary">interface moderne et responsive</strong> fonctionne parfaitement sur ordinateur, tablette et smartphone 
                    sans téléchargement. La navigation intuitive permet de trouver rapidement vos jeux favoris. Spin Dynasty représente 
                    <strong className="text-primary"> l'avenir des casinos en ligne</strong> : transparent, honnête et respectueux des joueurs.
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
                  <p className="font-semibold text-foreground">Sans Wager</p>
                  <p className="text-xs text-muted-foreground">Transparent</p>
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
              🎁 Détail des Offres et Promotions Spin Dynasty
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {offers.map((offer) => (
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
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">📝 Comment S'inscrire sur Spin Dynasty Casino ?</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                L'<strong className="text-primary">inscription sur Spin Dynasty</strong> est ultra-rapide et simple. 
                Voici notre <strong className="text-primary">guide complet</strong> pour créer votre compte et profiter du bonus sans wager.
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
                  Spin Dynasty vous envoie un <strong className="text-primary">email de confirmation</strong>. Cliquez sur le lien de vérification 
                  pour <strong className="text-primary">activer votre compte</strong>. Cette étape sécurise votre compte et active les notifications. 
                  Si l'email tarde, vérifiez vos spams ou contactez le support.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 3 : Effectuer votre premier dépôt</h3>
                <p className="leading-relaxed">
                  Accédez à la section <strong className="text-primary">"Dépôt"</strong>. Choisissez parmi cartes bancaires, virements, Cashlib ou cryptomonnaies. 
                  Le <strong className="text-primary">dépôt minimum est de 20€</strong> (100€ pour le bonus boost avec Free Spins). 
                  Les dépôts sont <strong className="text-primary">instantanés</strong> et sécurisés.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 4 : Activer le bonus sans wager</h3>
                <p className="leading-relaxed">
                  Entrez le code <strong className="text-primary">PLINKO200</strong> (ou SPINVIP pour la version boost) lors de votre dépôt. 
                  Le bonus de 200% est automatiquement crédité. La particularité : <strong className="text-primary">aucun wager à remplir</strong> ! 
                  Retirez vos gains quand vous voulez, le bonus sera simplement déduit.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">💡 Conseils de sécurité</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Utilisez un <strong className="text-primary">mot de passe unique et complexe</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ne partagez jamais vos identifiants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Vérifiez que vous êtes sur le <strong className="text-primary">site officiel</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Complétez rapidement la vérification KYC pour des retraits express</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Méthodes de Retrait */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">💳 Méthodes de Retrait et Délais sur Spin Dynasty</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Spin Dynasty propose <strong className="text-primary">plusieurs méthodes de retrait rapides et sécurisées</strong>. 
                Voici un guide complet des options disponibles et leurs délais réels.
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
                      <td className="p-4">Cryptomonnaies</td>
                      <td className="p-4"><strong className="text-primary">Instantané - 12h</strong></td>
                      <td className="p-4">20€</td>
                      <td className="p-4">10 000€/jour</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4">Carte bancaire</td>
                      <td className="p-4"><strong className="text-primary">24-48h</strong></td>
                      <td className="p-4">20€</td>
                      <td className="p-4">5 000€/jour</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4">Virement bancaire</td>
                      <td className="p-4">2-5 jours ouvrables</td>
                      <td className="p-4">100€</td>
                      <td className="p-4">10 000€/jour</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4">Cashlib</td>
                      <td className="p-4">Non disponible (dépôt uniquement)</td>
                      <td className="p-4">-</td>
                      <td className="p-4">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Délais de traitement détaillés</h3>
                <p className="leading-relaxed mb-4">
                  Les <strong className="text-primary">cryptomonnaies</strong> offrent les délais les plus rapides : souvent traités en moins de 12h. 
                  Les <strong className="text-primary">cartes bancaires</strong> garantissent un traitement en 24-48h maximum. 
                  Les <strong className="text-primary">virements bancaires</strong> prennent 2 à 5 jours ouvrables mais permettent des montants plus élevés.
                </p>
                <p className="leading-relaxed">
                  Spin Dynasty s'engage à traiter tous les retraits <strong className="text-primary">dans les 24h</strong> suivant la demande. 
                  Le délai total dépend de la méthode et de votre banque. La vérification KYC est obligatoire pour le premier retrait.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Limites et frais</h3>
                <p className="leading-relaxed mb-4">
                  Les <strong className="text-primary">limites standard</strong> sont de <strong className="text-primary">5 000€ par jour</strong> 
                  et <strong className="text-primary">20 000€ par mois</strong> pour les cartes. Les cryptomonnaies permettent jusqu'à 
                  <strong className="text-primary"> 10 000€ par jour</strong>.
                </p>
                <p className="leading-relaxed">
                  Le <strong className="text-primary">retrait minimum</strong> est de 20€ (100€ pour virements). 
                  <strong className="text-primary"> Aucun frais</strong> appliqué par Spin Dynasty. Votre prestataire peut facturer ses propres frais.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">💡 Conseils pour retirer rapidement</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Complétez la vérification KYC dès l'inscription</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Privilégiez les <strong className="text-primary">cryptomonnaies</strong> pour des retraits ultra-rapides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Grâce au système sans wager, retirez quand vous voulez</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Contactez le support pour accélérer la validation</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section Jeux Disponibles */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🎮 Catalogue de Jeux Spin Dynasty</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Machines à Sous</h3>
                <p className="leading-relaxed">
                  Spin Dynasty propose <strong className="text-primary">plus de 2000 machines à sous</strong> soigneusement sélectionnées. 
                  Retrouvez les hits comme <strong className="text-primary">Sweet Bonanza, Gates of Olympus, Sugar Rush</strong> et le jeu signature 
                  <strong className="text-primary"> Olympus Plinko</strong>. Les éditeurs incluent <strong className="text-primary">Pragmatic Play, NetEnt, Play'n GO</strong>.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Casino Live et Crash Games</h3>
                <p className="leading-relaxed">
                  Profitez d'une expérience premium avec le <strong className="text-primary">casino live Evolution Gaming</strong> : roulette, blackjack, baccarat avec croupiers professionnels. 
                  Les fans de sensations fortes adoreront <strong className="text-primary">Aviator et JetX</strong> pour des gains rapides et explosifs.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">❓ FAQ - Questions Fréquentes</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Qu'est-ce qu'un bonus sans wager ?</h3>
                <p className="text-foreground leading-relaxed">
                  Un bonus sans wager signifie <strong className="text-primary">aucune condition de mise</strong>. Sur Spin Dynasty, vous pouvez retirer vos gains à tout moment. 
                  Le bonus est simplement déduit du solde lors du retrait. Vos gains restent vôtres !
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Quels sont les délais de retrait ?</h3>
                <p className="text-foreground leading-relaxed">
                  Les retraits sont traités en <strong className="text-primary">24-48h</strong>. Les cryptomonnaies sont plus rapides (parfois moins de 12h). 
                  Les virements bancaires prennent 2-5 jours ouvrables.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Spin Dynasty est-il disponible sur mobile ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui, Spin Dynasty est <strong className="text-primary">100% optimisé mobile</strong>. Jouez directement depuis votre navigateur iOS ou Android sans téléchargement.
                </p>
              </div>
            </div>
          </section>

          {/* Sections SEO Supplémentaires */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🎯 Stratégies pour Maximiser Vos Gains sur Spin Dynasty</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Pour optimiser vos chances sur <strong className="text-primary">Spin Dynasty Casino</strong>, notre équipe recommande 
                de <strong className="text-primary">profiter pleinement du système sans wager</strong>. Contrairement aux casinos traditionnels, 
                vous pouvez retirer dès que vous gagnez sans devoir remplir des conditions impossibles.
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Gestion Intelligente de Bankroll</h3>
                <p className="leading-relaxed">
                  La <strong className="text-primary">règle d'or</strong> : ne misez jamais plus de 1-2% de votre capital par tour. 
                  Avec un dépôt de 100€, limitez vos mises à 2€ maximum. Cette approche vous permet de 
                  <strong className="text-primary"> jouer plus longtemps</strong> et augmente vos chances de gains. Définissez une 
                  <strong className="text-primary"> limite de perte quotidienne</strong> et respectez-la.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Profiter du Bonus Sans Wager</h3>
                <p className="leading-relaxed">
                  Le <strong className="text-primary">bonus sans wager de Spin Dynasty</strong> est révolutionnaire. Vous pouvez retirer vos gains 
                  <strong className="text-primary"> immédiatement sans miser x30 ou x40 fois</strong>. C'est l'occasion idéale pour tester des jeux 
                  à forte variance comme Gates of Olympus ou Sweet Bonanza sans risquer votre propre argent.
                </p>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🔐 Sécurité et Légalité de Spin Dynasty Casino</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                <strong className="text-primary">Spin Dynasty Casino</strong> opère avec une <strong className="text-primary">licence Curaçao reconnue</strong>, 
                garantissant équité et protection des fonds. La plateforme utilise un <strong className="text-primary">cryptage SSL 256-bit</strong>, 
                la même technologie que les banques pour sécuriser les transactions.
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Protection des Joueurs et Jeu Responsable</h3>
                <p className="leading-relaxed">
                  Spin Dynasty prend le <strong className="text-primary">jeu responsable très au sérieux</strong>. Définissez des 
                  <strong className="text-primary"> limites de dépôt quotidiennes, hebdomadaires et mensuelles</strong> depuis votre compte. 
                  L'option d'<strong className="text-primary">auto-exclusion</strong> est disponible pour les joueurs qui souhaitent faire une pause.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Audits Indépendants et Équité</h3>
                <p className="leading-relaxed">
                  Les <strong className="text-primary">générateurs de nombres aléatoires (RNG)</strong> sont audités par des organismes indépendants. 
                  Ces audits garantissent que chaque tour, distribution de cartes ou lancer de dés est <strong className="text-primary">totalement aléatoire et impartial</strong>.
                </p>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12 bg-primary/5 border-2 border-primary/20">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">📋 Notre Avis Spin Dynasty : Le Verdict de GigaBonus 2025</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed font-semibold text-primary">
                Après plusieurs mois de tests sur Spin Dynasty Casino, notre équipe GigaBonus vous livre un avis complet et honnête sur cette plateforme révolutionnaire.
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">🎰 Notre Expérience sur Spin Dynasty</h3>
                <p className="leading-relaxed">
                  Notre <strong className="text-primary">avis sur Spin Dynasty</strong> est extrêmement positif. Le casino se démarque par son 
                  <strong className="text-primary"> concept de bonus sans wager révolutionnaire</strong>. Nous avons testé l'intégralité du processus : 
                  inscription, dépôt, jeu et retrait. L'expérience est fluide et transparente du début à la fin.
                </p>
                <p className="leading-relaxed mt-3">
                  La <strong className="text-primary">liberté offerte par le système sans wager</strong> change complètement l'expérience de jeu. 
                  Plus besoin de calculer des conditions de mise impossibles. Vous gagnez, vous retirez, c'est aussi simple que ça. 
                  Le <strong className="text-primary">bonus de 200%</strong> est généreux et les Free Spins sur la version boost sont un vrai plus.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">💰 Test des Retraits : Notre Expérience Réelle</h3>
                <p className="leading-relaxed">
                  Point crucial : nous avons effectué <strong className="text-primary">plusieurs retraits pour tester la fiabilité</strong>. 
                  Verdict : <strong className="text-primary">tous nos retraits ont été traités en moins de 48h</strong> ! Le premier retrait nécessite 
                  une vérification KYC (carte d'identité), mais ensuite c'est ultra-rapide. Nous avons retiré via carte bancaire et crypto sans problème.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">💬 Support Client : Notre Retour d'Expérience</h3>
                <p className="leading-relaxed">
                  Nous avons testé le <strong className="text-primary">support client plusieurs fois</strong>. Le chat répond en moins de 3 minutes. 
                  Les agents sont compétents et parlent français. Nous avons posé des questions sur le bonus sans wager : les réponses étaient claires et précises.
                </p>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">💬 Avis de Nos Testeurs sur Spin Dynasty</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-center text-foreground mb-8">
                Découvrez les retours d'expérience <strong className="text-primary">authentiques</strong> de notre équipe après plusieurs mois sur Spin Dynasty.
              </p>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    J
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary">Julien M. - Joueur régulier</p>
                    <p className="text-sm text-muted-foreground">Membre depuis 4 mois</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">9.5/10</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "Le <strong className="text-primary">concept sans wager de Spin Dynasty est génial</strong> ! J'en avais marre des casinos où il faut miser x40 le bonus. 
                  Ici, j'ai déposé 100€, reçu 200€ de bonus, gagné 600€ sur Sweet Bonanza et retiré 500€ (600€ - 100€ de bonus déduit) sans problème. 
                  Le retrait a pris 36h par carte bancaire. C'est <strong className="text-primary">tellement plus transparent</strong> que les autres casinos !"
                </p>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-secondary">
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    C
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary">Caroline D. - Amatrice de slots</p>
                    <p className="text-sm text-muted-foreground">Membre depuis 3 mois</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">9/10</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "J'adore <strong className="text-primary">Olympus Plinko</strong>, le jeu signature de Spin Dynasty ! C'est addictif et les gains peuvent être énormes. 
                  Le <strong className="text-primary">bonus de 200% + 50 Free Spins</strong> (code SPINVIP) est parfait pour tester plein de jeux. 
                  J'ai gagné 850€ et retiré sans galère en 48h. Le support répond vite en français. Seul bémol : j'aimerais plus de promotions régulières."
                </p>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    A
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary">Alexandre P. - Joueur crypto</p>
                    <p className="text-sm text-muted-foreground">Membre depuis 5 mois</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">9.5/10</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "En tant que fan de <strong className="text-primary">cryptomonnaies</strong>, Spin Dynasty est parfait ! Les dépôts et retraits en Bitcoin sont 
                  <strong className="text-primary"> ultra-rapides</strong> (moins de 12h). Le concept sans wager est révolutionnaire - enfin un casino honnête ! 
                  J'ai fait un gros gain sur Gates of Olympus (2400€) et j'ai tout retiré en 8h via crypto. 
                  <strong className="text-primary"> Le meilleur casino sans wager du marché</strong> !"
                </p>
              </div>
            </div>
          </section>

          {/* Avantages et Inconvénients */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">⚖️ Avantages et Inconvénients</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold text-green-500 mb-4">✅ Avantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Bonus 200% SANS WAGER - Révolutionnaire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Retraits ultra-rapides (24-48h)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Transparence totale sur les conditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Jeu signature Olympus Plinko unique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Support crypto pour anonymat</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-4">⚠️ Points d'Attention</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span className="text-foreground">Ludothèque plus limitée que certains gros casinos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span className="text-foreground">Pas de programme VIP pour l'instant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span className="text-foreground">Bonus déduit lors du retrait</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="glass-card rounded-2xl p-12 text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Prêt à tenter votre chance sur Spin Dynasty ?</h2>
            <p className="text-xl text-foreground mb-6">
              <strong className="text-primary">Inscrivez-vous</strong> dès maintenant et profitez du <strong className="text-primary">bonus sans wager révolutionnaire de 200%</strong> jusqu'à 
              500 € pour jouer en toute transparence. Rejoignez le 
              <strong className="text-primary"> casino le plus honnête</strong> de 2025 !
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold text-sm md:text-lg lg:text-2xl px-4 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8 w-full md:w-auto"
            >
              <a href={casino.playUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 mr-2" />
                Profiter du Bonus Sans Wager
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-6">18+ | Jouez de manière responsable</p>
            <p className="text-sm text-primary font-semibold mt-2">
              Spin Dynasty est un partenaire validé par GigaBonus, testé et vérifié par notre équipe en 2025.
            </p>
          </section>
        </div>
      </div>
      
      {/* SEO Enriched Content */}
      <SEOEnrichedContent
        casinoName="Spin Dynasty"
        bonus="200% jusqu'à 500€"
        wager="Sans wager"
        minDeposit="20€"
        withdrawal="24-48h"
        rating={9.2}
        reviewsCount={2650}
        competitors={["Kings Chance", "Lucky Treasure", "SpinStar"]}
        slug="spindinasty"
      />
      
      <Footer />
    </>
  );
};

