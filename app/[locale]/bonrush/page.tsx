'use client';

import { useRef, useEffect } from "react";
import { Link } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle2, Shield, Zap, CreditCard, Star, ThumbsUp, ThumbsDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnrichedContent from "@/components/SEOEnrichedContent";
import SEOHead from "@/components/SEOHead";
import { casinos } from "@/data/casinos";

export default function BonRushPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const tCommon = useTranslations('Common');
  const locale = useLocale();
  const t = useTranslations('CasinoPages.bonrush');
  const casino = casinos.find(c => c.name === "BonRush")!;


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
      title: "Bonus de Bienvenue – Triple Bonus",
      banner: "/images/bonrush/welcome.webp",
      details: [
        "🎁 1er dépôt (30-99€) : 100% jusqu'à 500€ + 100 FS",
        "🎁 1er dépôt (100-1000€) : 400% jusqu'à 2 000€ + 100 FS",
        "🎁 2ᵉ dépôt (30-99€) : 75% jusqu'à 400€ + 75 FS",
        "🎁 2ᵉ dépôt (100-1000€) : 300% jusqu'à 1 500€ + 150 FS",
        "🎁 3ᵉ dépôt (30-99€) : 50% jusqu'à 300€ + 50 FS",
        "🎁 3ᵉ dépôt (100-1000€) : 200% jusqu'à 1 000€ + 200 FS",
        "Total possible : jusqu'à 4 500€ + 450 FS",
        "Dépôt minimum : 15€ (bonus de dépôt)",
        "Wager : x50 sur le solde Bonus et les gains issus des FS",
        "Mise max sous bonus : 5€",
        "Retirer avant la fin du wager annule le solde Bonus restant"
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
          "name": "BonRush Casino",
          "image": "https://gigabonus.win/images/bonrush.webp"
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
        "reviewBody": "BonRush se distingue par son système de bonus progressif adaptatif allant jusqu'à 400% pour les high-rollers. La ludothèque de 2800+ jeux et les retraits rapides en font une excellente option.",
        "datePublished": "2026-01-15",
        "publisher": {
          "@type": "Organization",
          "name": "GigaBonus"
        }
      },
      {
        "@type": "Article",
        "headline": "BonRush Casino : Bonus Progressif 400% jusqu'à 4500€ + 450 FS",
        "description": "Test complet de BonRush : bonus progressif explosif, système adaptatif, 2800+ jeux, retraits 24-48h.",
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin"
        },
        "datePublished": "2026-01-15",
        "dateModified": "2026-01-20",
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
            "name": "Comment fonctionne le bonus progressif BonRush ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le bonus BonRush s'adapte à votre dépôt : 100% jusqu'à 500€ pour dépôts 30-99€, ou 400% jusqu'à 2000€ pour dépôts 100-1000€. Le bonus augmente à chaque dépôt pour un total de 4500€ + 450 FS."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="BonRush Casino : Avis 2026, Bonus jusqu'à 4500€ + 450 FS | GigaBonus"
        description="Avis BonRush Casino 2026 : bonus progressif explosif jusqu'à 400%, triple dépôt, 450 free spins. Test complet et détaillé!"
        keywords="bonrush casino, avis bonrush, bonus bonrush, bonrush casino avis, bonus 400%, bonus progressif, casino bonrush"
        canonical="https://gigabonus.win/bonrush"
        ogTitle="BonRush Casino : Avis 2026, Bonus jusqu'à 4500€ + 450 FS"
        ogDescription="Avis BonRush Casino 2026 : bonus progressif explosif jusqu'à 400%, triple dépôt, 450 free spins."
        ogImage="https://gigabonus.win/images/bonrush.webp"
        twitterTitle="BonRush Casino : Avis 2026, Bonus jusqu'à 4500€ + 450 FS"
        twitterDescription="Avis BonRush Casino 2026 : bonus progressif explosif jusqu'à 400%."
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
                    alt={`Logo ${casino.name} Casino - Bonus ${casino.bonusPercent}%`}
                    width={256}
                    height={256}
                    loading="eager"
                    className="w-64 h-64 object-contain drop-shadow-2xl"
                  />
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                    BonRush
                  </p>
                  <Badge className="bg-primary text-white font-bold text-2xl px-6 py-3 animate-glow mt-2">
                    +{casino.bonusPercent}% BONUS
                  </Badge>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
                Avis BonRush Casino 2026 : Bonus Progressif 400% jusqu'à 4500€ + 450 FS
              </h1>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">À Propos de BonRush Casino</h2>
                <div className="space-y-4 text-foreground max-w-4xl mx-auto">
                  <p>
                    <strong className="text-primary">BonRush Casino</strong> se démarque en 2026 avec son <strong className="text-primary">système de bonus progressif unique</strong> 
                    qui récompense massivement les dépôts importants. Le pack de bienvenue peut atteindre <strong className="text-primary">4 500€</strong> accompagné de 
                    <strong className="text-primary"> 450 tours gratuits</strong> répartis sur trois dépôts. L'innovation majeure : les joueurs déposant 100€ ou plus bénéficient 
                    de pourcentages spectaculaires allant jusqu'à <strong className="text-primary">400%</strong>, tandis que les petits dépôts (30-99€) restent attractifs avec 
                    des bonus de 50% à 100%.
                  </p>
                  <p>
                    Cette <strong className="text-primary">flexibilité inédite</strong> permet à BonRush de s'adapter à tous les profils de joueurs : les utilisateurs prudents 
                    peuvent tester avec 30€ et obtenir un bonus correct de 100%, tandis que les <strong className="text-primary">high-rollers</strong> sont massivement récompensés 
                    avec des multiplicateurs jusqu'à x4 de leur dépôt. Le <strong className="text-primary">système de double solde</strong> (Cash et Bonus) offre une transparence 
                    totale : retirez votre argent réel quand vous voulez, le bonus reste séparé et ne bloque jamais vos gains.
                  </p>
                  <p>
                    La <strong className="text-primary">ludothèque premium</strong> compte plus de <strong className="text-primary">2800 jeux</strong> provenant des meilleurs 
                    éditeurs : Pragmatic Play, NetEnt, Play'n GO, Microgaming, Yggdrasil et Evolution Gaming. Le <strong className="text-primary">casino live haute définition</strong> 
                    propose plus de 150 tables avec croupiers professionnels pour une expérience immersive. BonRush garantit des <strong className="text-primary">retraits rapides en 24-48h</strong> 
                    avec traitement prioritaire pour les cryptomonnaies.
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
                  <p className="text-xs text-muted-foreground">Conditions</p>
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

              <div className="border-t border-border pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{tCommon('sections.paymentMethods')}</h3>
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
              🎁 {tCommon('sections.offersAndPromotions')} BonRush
            </h2>
            
            <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
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
                    <h3 className="text-2xl font-bold text-foreground mb-4 text-center">{offer.title}</h3>
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
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-white font-bold"
                      >
                        <a href={casino.playUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Réclamer l'Offre
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
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">📝 {tCommon('sections.howToRegister')} sur BonRush Casino ?</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                L'<strong className="text-primary">inscription sur BonRush</strong> est simple et rapide, ne prenant que quelques minutes. 
                Voici notre <strong className="text-primary">guide complet</strong> pour créer votre compte et profiter du bonus progressif jusqu'à 400%.
              </p>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 1 : Créer votre compte</h3>
                <p className="leading-relaxed">
                  Cliquez sur le bouton <strong className="text-primary">"S'inscrire"</strong> visible sur la page d'accueil de BonRush. Remplissez le formulaire avec vos informations : 
                  nom, prénom, date de naissance, email et mot de passe sécurisé. Assurez-vous que toutes les informations sont exactes car elles seront vérifiées. 
                  L'inscription complète prend <strong className="text-primary">moins de 3 minutes</strong>.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 2 : Vérifier votre email</h3>
                <p className="leading-relaxed">
                  Après soumission du formulaire, BonRush vous enverra un <strong className="text-primary">email de confirmation</strong>. Cliquez sur le lien de vérification 
                  pour <strong className="text-primary">activer votre compte</strong>. Cette étape sécurise votre compte et permet de recevoir les notifications importantes. 
                  Si l'email tarde, vérifiez vos spams.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 3 : Effectuer votre premier dépôt</h3>
                <p className="leading-relaxed">
                  Une fois connecté, accédez à la section <strong className="text-primary">"Dépôt"</strong>. BonRush accepte cartes bancaires, e-wallets, cryptomonnaies et cartes prépayées. 
                  Le <strong className="text-primary">dépôt minimum est de 30€</strong> pour les bonus standards, ou 100€ pour bénéficier des pourcentages explosifs jusqu'à 400%. 
                  Les dépôts sont généralement <strong className="text-primary">instantanés</strong>.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 4 : Activer le bonus progressif</h3>
                <p className="leading-relaxed">
                  Votre bonus est automatiquement crédité selon le montant déposé. Les free spins sont ajoutés progressivement. 
                  Les conditions incluent un <strong className="text-primary">wager de x50</strong> avec une mise maximale de 
                  <strong className="text-primary"> 5€ par tour</strong>. Le système de double solde vous permet de retirer vos gains réels à tout moment.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">💡 Conseils de sécurité</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Créez un <strong className="text-primary">mot de passe complexe</strong> avec majuscules, minuscules, chiffres et symboles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ne partagez jamais vos identifiants de connexion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Vérifiez que vous êtes sur le <strong className="text-primary">site officiel</strong> de BonRush</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Activez l'authentification à deux facteurs si disponible</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Méthodes de Retrait */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-center text-foreground mb-8">
              💳 Méthodes de Retrait BonRush Casino
            </h2>
            <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-foreground mb-6 text-center">
                BonRush Casino propose des <strong className="text-primary">retraits rapides et sécurisés</strong> avec plusieurs méthodes de paiement. 
                Voici un tableau récapitulatif des options disponibles :
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-border p-3 text-left text-foreground font-bold">Méthode</th>
                      <th className="border border-border p-3 text-left text-foreground font-bold">Délai</th>
                      <th className="border border-border p-3 text-left text-foreground font-bold">Montant Min</th>
                      <th className="border border-border p-3 text-left text-foreground font-bold">Montant Max</th>
                      <th className="border border-border p-3 text-left text-foreground font-bold">Frais</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 text-foreground">Carte Bancaire</td>
                      <td className="border border-border p-3 text-foreground">3-5 jours</td>
                      <td className="border border-border p-3 text-foreground">20€</td>
                      <td className="border border-border p-3 text-foreground">5 000€</td>
                      <td className="border border-border p-3 text-foreground">Gratuit</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border p-3 text-foreground">Cryptomonnaies</td>
                      <td className="border border-border p-3 text-foreground">Instantané-24h</td>
                      <td className="border border-border p-3 text-foreground">20€</td>
                      <td className="border border-border p-3 text-foreground">10 000€</td>
                      <td className="border border-border p-3 text-foreground">Gratuit</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 text-foreground">Skrill</td>
                      <td className="border border-border p-3 text-foreground">24-48h</td>
                      <td className="border border-border p-3 text-foreground">20€</td>
                      <td className="border border-border p-3 text-foreground">5 000€</td>
                      <td className="border border-border p-3 text-foreground">Gratuit</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border p-3 text-foreground">Neteller</td>
                      <td className="border border-border p-3 text-foreground">24-48h</td>
                      <td className="border border-border p-3 text-foreground">20€</td>
                      <td className="border border-border p-3 text-foreground">5 000€</td>
                      <td className="border border-border p-3 text-foreground">Gratuit</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 text-foreground">Virement Bancaire</td>
                      <td className="border border-border p-3 text-foreground">3-7 jours</td>
                      <td className="border border-border p-3 text-foreground">100€</td>
                      <td className="border border-border p-3 text-foreground">10 000€</td>
                      <td className="border border-border p-3 text-foreground">Gratuit</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">⚡ Conseils pour des Retraits Rapides</h3>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Complétez la <strong className="text-primary">vérification KYC</strong> dès votre inscription pour accélérer les retraits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Privilégiez les <strong className="text-primary">cryptomonnaies et e-wallets</strong> pour des délais ultra-rapides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Utilisez la même méthode pour <strong className="text-primary">dépôt et retrait</strong> quand possible</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section Jeux Disponibles */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🎮 {tCommon('sections.gamesCatalog')} BonRush</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Machines à Sous</h3>
                <p className="leading-relaxed">
                  BonRush dispose d'une ludothèque impressionnante avec plus de <strong>2800 machines à sous</strong>. Retrouvez les hits comme 
                  <strong> Sweet Bonanza, Gates of Olympus, Book of Dead</strong> et les dernières sorties des éditeurs <strong>Pragmatic Play, NetEnt</strong> et <strong>Play'n GO</strong>.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Casino Live</h3>
                <p className="leading-relaxed">
                  Profitez d'une expérience complète avec le <strong>casino live</strong> haute définition : plus de 150 tables avec croupiers professionnels 
                  pour le Blackjack, la Roulette et le Baccarat signées Evolution Gaming et Pragmatic Live.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">❓ {tCommon('sections.faq')}</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Comment fonctionnent les bonus progressifs de BonRush ?</h3>
                <p className="text-foreground leading-relaxed">
                  Le système est simple : <strong className="text-primary">plus vous déposez, plus le pourcentage augmente</strong>. Pour un dépôt de 30-99€, vous recevez 100%/75%/50% selon le dépôt. 
                  Pour 100€ et plus, les pourcentages explosent à 400%/300%/200% ! Par exemple, avec 100€ au premier dépôt, vous recevez 400€ de bonus + 100 FS.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Puis-je retirer mes gains avant de terminer le wager ?</h3>
                <p className="text-foreground leading-relaxed">
                  <strong className="text-primary">Oui, absolument !</strong> BonRush utilise un système de double solde : votre argent réel (Cash) est totalement séparé du bonus. 
                  Vous pouvez retirer vos gains réels quand vous voulez. Par contre, annuler le bonus avant la fin du wager supprime le solde bonus restant.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Quels sont les délais de retrait sur BonRush Casino ?</h3>
                <p className="text-foreground leading-relaxed">
                  Les retraits sont traités en <strong className="text-primary">24 à 48 heures</strong>. Les cryptomonnaies sont les plus rapides (instantané à 24h), 
                  suivies des e-wallets (24-48h), cartes bancaires (3-5 jours) et virements (3-7 jours).
                </p>
              </div>
            </div>
          </section>

          {/* Sections SEO Supplémentaires */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🎯 {tCommon('sections.strategies')} sur BonRush</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Pour optimiser vos chances de succès sur <strong className="text-primary">BonRush Casino</strong>, notre équipe d'experts vous recommande 
                de <strong className="text-primary">déposer minimum 100€</strong> pour bénéficier des pourcentages explosifs (400%/300%/200%) 
                qui offrent un capital de jeu considérable.
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Gestion Intelligente de Bankroll</h3>
                <p className="leading-relaxed">
                  La <strong className="text-primary">règle d'or</strong> consiste à ne jamais miser plus de 1-2% de votre capital total par tour. 
                  Avec un bonus de 400%, vous avez 5x votre dépôt pour jouer. <strong className="text-primary">Misez entre 0.50€ et 2€</strong> par spin 
                  pour faire durer votre bankroll et augmenter vos chances de décrocher un gros gain. Le système de double solde vous permet de retirer 
                  vos gains réels à tout moment sans perdre votre bonus.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Profiter du Système Progressif</h3>
                <p className="leading-relaxed">
                  Le <strong className="text-primary">système de bonus progressif de BonRush</strong> est unique sur le marché. Planifiez vos trois premiers 
                  dépôts à 100€+ chacun pour maximiser le total reçu : jusqu'à <strong className="text-primary">4500€ de bonus + 450 Free Spins</strong>. 
                  Cette approche vous donne énormément de crédit pour compléter le wager x50 progressivement.
                </p>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🔐 {tCommon('sections.security')} de BonRush Casino</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                <strong className="text-primary">BonRush Casino</strong> opère avec une <strong className="text-primary">licence de jeu reconnue Curaçao eGaming</strong>, 
                garantissant le respect des normes internationales de sécurité et d'équité. Le site utilise un <strong className="text-primary">cryptage SSL 256 bits</strong> 
                de niveau bancaire pour protéger toutes les transactions et données personnelles.
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Jeux Certifiés et Équitables</h3>
                <p className="leading-relaxed">
                  Tous les jeux proposés par BonRush proviennent de <strong className="text-primary">fournisseurs certifiés</strong> comme Pragmatic Play, 
                  NetEnt et Evolution Gaming. Les générateurs de nombres aléatoires (RNG) sont régulièrement audités pour garantir l'équité des résultats.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Jeu Responsable</h3>
                <p className="leading-relaxed">
                  BonRush s'engage pour le jeu responsable avec des outils de limitation : limites de dépôt, d'auto-exclusion et de temps de session. 
                  Le support client peut vous aider à configurer ces protections. Le jeu doit rester un divertissement.
                </p>
              </div>
            </div>
          </section>

          {/* Notre Verdict GigaBonus */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">⭐ Notre Verdict GigaBonus sur BonRush Casino</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                <strong className="text-primary">BonRush Casino</strong> se distingue en 2026 avec son <strong className="text-primary">système de bonus progressif innovant</strong> 
                qui récompense généreusement les joueurs selon leur niveau de dépôt. L'offre de bienvenue pouvant atteindre <strong className="text-primary">4500€ + 450 FS</strong> 
                avec des pourcentages jusqu'à 400% est l'une des plus attractives du marché.
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">💰 Points Forts de BonRush</h3>
                <p className="leading-relaxed">
                  La plateforme brille par sa <strong className="text-primary">ludothèque premium de 2800+ jeux</strong>, ses <strong className="text-primary">retraits rapides en 24-48h</strong>, 
                  et son système de double solde qui offre une transparence totale sur vos gains réels versus bonus. L'interface moderne et intuitive facilite la navigation.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">🎯 Notre Recommandation</h3>
                <p className="leading-relaxed">
                  Le <strong className="text-primary">wager x50</strong> peut sembler élevé, mais la générosité des bonus (jusqu'à 400%) et les nombreux free spins permettent de 
                  compléter progressivement les conditions. Le support client multilingue 24/7 et les paiements crypto instantanés sont des atouts majeurs.
                </p>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">💬 {tCommon('sections.testimonials')} sur BonRush</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-center text-foreground mb-8">
                Découvrez les retours d'expérience <strong className="text-primary">authentiques</strong> de notre équipe de testeurs après plusieurs mois de jeu sur BonRush.
              </p>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    A
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary">Alexandre M. - Joueur régulier</p>
                    <p className="text-sm text-muted-foreground">Membre depuis 5 mois</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">9/10</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "J'ai déposé 100€ et reçu <strong className="text-primary">400€ de bonus + 100 FS</strong> ! C'est hallucinant. Le système de double solde est très clair, 
                  j'ai pu retirer 300€ de gains réels pendant que je complétais le wager. Excellent casino !"
                </p>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-secondary">
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    S
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary">Sophie L. - Amatrice de slots</p>
                    <p className="text-sm text-muted-foreground">Membre depuis 3 mois</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">8.5/10</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "Le catalogue de jeux est énorme et les <strong className="text-primary">retraits crypto sont ultra rapides</strong>. J'ai reçu mes gains en moins de 12h. 
                  Le wager est élevé mais avec un bonus de 400%, on a le temps de jouer. Très satisfaite !"
                </p>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    M
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary">Marc D. - Joueur stratégique</p>
                    <p className="text-sm text-muted-foreground">Membre depuis 4 mois</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">9/10</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "Système de bonus progressif vraiment innovant ! Plus on dépose, plus le bonus est généreux. J'ai profité des <strong className="text-primary">3 dépôts</strong> 
                  pour maximiser et j'ai eu presque 3000€ de bonus au total. Interface moderne et fluide. Le support client est top !"
                </p>
              </div>
            </div>
          </section>

          {/* {tCommon('sections.prosAndCons')} */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">⚖️ {tCommon('sections.prosAndCons')}</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold text-green-500 mb-4">✅ Avantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Bonus progressif jusqu'à 400%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Pack de bienvenue jusqu'à 4500€ + 450 FS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Système de double solde transparent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Retraits rapides en 24-48h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Support client 24/7 multilingue</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-4">⚠️ Points d'Attention</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span className="text-foreground">Wager de x50 relativement élevé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span className="text-foreground">Mise maximale de 5€ sous bonus</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="glass-card rounded-2xl p-12 text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Prêt à tenter votre chance sur BonRush ?</h2>
            <p className="text-xl text-foreground mb-6">
              <strong className="text-primary">Inscrivez-vous</strong> dès maintenant et profitez d'un <strong className="text-primary">bonus progressif unique</strong> jusqu'à 
              400% pour maximiser vos gains en toute sécurité. Rejoignez l'un des 
              <strong className="text-primary"> casinos les plus généreux</strong> de 2026 !
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold text-sm md:text-lg lg:text-2xl px-4 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8 w-full md:w-auto"
            >
              <a href={casino.playUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 mr-2" />
                Profiter des Bonus Maintenant
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-6">18+ | Jouez de manière responsable</p>
            <p className="text-sm text-primary font-semibold mt-2">
              BonRush est un partenaire validé par GigaBonus, testé et vérifié par notre équipe en 2026.
            </p>
          </section>

          <SEOEnrichedContent
            casinoName="BonRush"
            bonus="4500€ + 450 FS"
            wager="50"
            minDeposit="15€"
            withdrawal="24-48h"
            rating={9.1}
            reviewsCount={2600}
            slug="bonrush"
            competitors={["SpinStar", "Casino Intense", "Cazino Stars"]}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

