'use client';

import { useRef, useEffect } from "react";
import { Link } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle2, Shield, Zap, CreditCard } from "lucide-react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnrichedContent from "@/components/SEOEnrichedContent";
import SEOHead from "@/components/SEOHead";
import { casinos } from "@/data/casinos";

export default function RockstarPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const locale = useLocale();
  const t = useTranslations('CasinoPages.rockstar');
  const casino = casinos.find(c => c.name === "Rockstar")!;


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
      title: "Bonus de Bienvenue - 1er Dépôt 100%",
      banner: "/images/rockstar/welcome.webp",
      details: [
        "100% jusqu'à 1 000€ + 100 Tours Gratuits",
        "Dépôt minimum : 10€",
        "Bonus maximum : 1 000€",
        "Tours gratuits : 100 FS sur Book of Zeus (0,20€ chacun)",
        "Conditions de mise : x40 sur bonus et gains FS",
        "Validité : 7 jours",
        "Jeux éligibles : Casino et Live Casino",
        "Gain maximum : 10× le montant du bonus",
        "Contact : support@rockstarcasino.com, chat 24/7"
      ]
    },
    {
      id: 2,
      title: "Bonus de Bienvenue - 2e Dépôt 100%",
      banner: "/images/rockstar/deposit2.webp",
      details: [
        "100% jusqu'à 1 000€ + 100 Tours Gratuits",
        "Dépôt minimum : 10€",
        "Bonus maximum : 1 000€",
        "Tours gratuits : 100 FS sur Book of Zeus (0,20€ chacun)",
        "Conditions de mise : x40 sur bonus et gains FS",
        "Validité : 7 jours",
        "Jeux éligibles : Casino et Live Casino",
        "Gain maximum : 10× le montant du bonus",
        "Réservé au 2ème dépôt uniquement"
      ]
    },
    {
      id: 3,
      title: "Bonus de Bienvenue - 3e Dépôt 75%",
      banner: "/images/rockstar/deposit3.webp",
      details: [
        "75% jusqu'à 1 500€ + 100 Tours Gratuits",
        "Dépôt minimum : 10€",
        "Bonus maximum : 1 500€",
        "Tours gratuits : 100 FS sur Book of Zeus (0,20€ chacun)",
        "Conditions de mise : x40 sur bonus et gains FS",
        "Validité : 7 jours",
        "Jeux éligibles : Casino et Live Casino",
        "Gain maximum : 10× le montant du bonus",
        "Réservé au 3ème dépôt uniquement"
      ]
    },
    {
      id: 4,
      title: "Bonus de Bienvenue - 4e Dépôt 50%",
      banner: "/images/rockstar/deposit4.webp",
      details: [
        "50% jusqu'à 1 500€ + 100 Tours Gratuits",
        "Dépôt minimum : 10€",
        "Bonus maximum : 1 500€",
        "Tours gratuits : 100 FS sur Book of Zeus (0,20€ chacun)",
        "Conditions de mise : x40 sur bonus et gains FS",
        "Validité : 7 jours",
        "Jeux éligibles : Casino et Live Casino",
        "Gain maximum : 10× le montant du bonus",
        "Réservé au 4ème dépôt uniquement"
      ]
    },
    {
      id: 5,
      title: "Bonus du Lundi - 50% + 100 FS",
      banner: "/images/rockstar/monday.webp",
      details: [
        "50% jusqu'à 100€ + 100 Tours Gratuits",
        "Dépôt minimum : 10€",
        "Bonus maximum : 100€",
        "Tours gratuits : 100 FS sur Curse of the Werewolf Megaways (0,20€)",
        "Conditions de mise : x40 sur montant total (dépôt + bonus)",
        "Mise maximale : 5€",
        "Validité : 7 jours",
        "Période : Lundi uniquement (00h00 - 23h59 UTC)",
        "Réservé au premier dépôt du lundi"
      ]
    },
    {
      id: 6,
      title: "Bonus du Mercredi - 200 FS",
      banner: "/images/rockstar/wednesday.webp",
      details: [
        "200 Tours Gratuits exclusifs",
        "Dépôt minimum : 20€",
        "Tours gratuits : 200 FS sur Book of Cairo",
        "Validité : 7 jours après attribution",
        "Mise maximale : 5€",
        "Retrait maximum : x10 les gains des FS",
        "Période : Mercredi uniquement (00h00 - 23h59 UTC)",
        "Réservé au premier dépôt du mercredi"
      ]
    },
    {
      id: 7,
      title: "Bonus du Vendredi - 100% + 30 FS",
      banner: "/images/rockstar/friday.webp",
      details: [
        "100% jusqu'à 300€ + 30 Tours Gratuits",
        "Dépôt minimum : 10€",
        "Bonus maximum : 300€",
        "Tours gratuits : 30 FS sur Eye of Cleopatra (0,20€)",
        "Conditions de mise : x40 sur montant total (dépôt + bonus)",
        "Mise maximale : 5€",
        "Validité : 7 jours",
        "Période : Vendredi uniquement (00h00 - 23h59 UTC)",
        "Réservé au premier dépôt du vendredi"
      ]
    },
    {
      id: 8,
      title: "Cashback Hebdomadaire - 5%",
      banner: "/images/rockstar/cashback.webp",
      details: [
        "5% de remboursement sur vos pertes nettes",
        "Crédité automatiquement chaque lundi",
        "Calcul : dépôts - retraits - solde actuel",
        "Exigence de mise : x3 dans les 7 jours",
        "Montant maximum retirable : limité au cashback crédité",
        "Jouez librement sur vos jeux préférés",
        "Recevez automatiquement votre cashback le lundi",
        "Contact : support@rockstarcasino.com, chat 24/7"
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
          "name": "Rockstar Casino - Bonus Rock 100% jusqu'à 5000€ + 400 FS",
          "description": "Pack rock progressif 100% jusqu'à 5000€ + 400 Free Spins sur Rockstar Casino - Cashback 5% hebdomadaire - Promotions lundi/mercredi/vendredi - Wager x40 équitable",
          "image": "https://gigabonus.win/images/rockstar.webp",
          "brand": {
            "@type": "Brand",
            "name": "Rockstar Casino"
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
        "reviewBody": "Rockstar Casino apporte l'énergie du rock avec un pack progressif généreux et des promotions hebdomadaires régulières.",
        "datePublished": "2026-01-15",
        "publisher": {
          "@type": "Organization",
          "name": "GigaBonus"
        }
      },
      {
        "@type": "Article",
        "headline": "Rockstar Casino : Avis 2026, Bonus Rock jusqu'à 5000€ + 400 FS",
        "description": "Avis Rockstar Casino 2026 : bonus rock jusqu'à 5000€, cashback 5%, promotions hebdomadaires. Test complet du casino!",
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
            "name": "Comment fonctionne le pack bonus Rockstar ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le pack bonus Rockstar comprend 4 dépôts : 100% jusqu'à 1000€ (1er), 100% jusqu'à 1000€ (2ème), 75% jusqu'à 1500€ (3ème), et 50% jusqu'à 1500€ (4ème), pour un total de 5000€ + 400 FS."
            }
          },
          {
            "@type": "Question",
            "name": "Qu'est-ce que le cashback hebdomadaire Rockstar ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le cashback hebdomadaire de 5% est crédité automatiquement chaque lundi sur vos pertes nettes de la semaine précédente, avec un wager de x3."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical={`https://gigabonus.win/${locale}/rockstar`}
        ogTitle={t('seo.ogTitle')}
        ogDescription={t('seo.ogDescription')}
        ogImage="https://gigabonus.win/images/rockstar.webp"
        twitterTitle={t('seo.twitterTitle')}
        twitterDescription={t('seo.twitterDescription')}
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
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
                    Rockstar
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
                Rockstar Casino : Avis 2026, Bonus Rock jusqu'à 5000€ + 400 FS
              </h1>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">À Propos de Rockstar Casino</h2>
                <div className="space-y-4 text-foreground max-w-4xl mx-auto">
                  <p>
                    <strong className="text-primary">Rockstar Casino</strong> débarque avec l'énergie du rock'n'roll et un pack de bienvenue électrisant pouvant atteindre 
                    <strong className="text-primary"> 5 000€</strong> accompagné de <strong className="text-primary">400 tours gratuits</strong> répartis sur quatre dépôts. 
                    Cette plateforme musicale séduit les joueurs avec son <strong className="text-primary">dépôt minimum ultra-accessible de 10€</strong> et ses promotions hebdomadaires 
                    récurrentes chaque lundi, mercredi et vendredi.
                  </p>
                  <p>
                    La structure du pack de bienvenue (100%, 100%, 75%, 50%) sur quatre dépôts permet une <strong className="text-primary">progression naturelle et équilibrée</strong>. 
                    Les <strong className="text-primary">400 free spins</strong> sur Book of Zeus maintiennent l'engagement sur la durée. Rockstar Casino assure des 
                    <strong className="text-primary"> retraits rapides en 24-48h</strong> avec support crypto pour des transactions quasi instantanées. Le 
                    <strong className="text-primary"> service client disponible 24/7</strong> répond efficacement en français.
                  </p>
                  <p>
                    En matière de <strong className="text-primary">sécurité</strong>, Rockstar utilise un cryptage SSL avancé et possède une licence Curaçao. 
                    Les <strong className="text-primary">conditions de mise de x40</strong> restent équitables avec une validité de 7 jours et un gain maximum de 10x 
                    le montant du bonus. L'interface rock moderne est parfaitement optimisée mobile pour jouer en déplacement.
                  </p>
                  <p>
                    La <strong className="text-primary">ludothèque rock</strong> compte plus de <strong className="text-primary">1800 jeux</strong> des meilleurs éditeurs. 
                    Les machines à sous incluent Book of Zeus, Curse of the Werewolf Megaways, Book of Cairo, Eye of Cleopatra et tous les grands classiques Pragmatic Play. 
                    Le <strong className="text-primary">casino live</strong> propose blackjack, roulette, baccarat avec croupiers professionnels Evolution Gaming.
                  </p>
                  <p>
                    Le <strong className="text-primary">cashback hebdomadaire de 5%</strong> crédité automatiquement chaque lundi avec un wager de seulement x3 offre une 
                    protection appréciable contre les mauvaises semaines. Les promotions récurrentes du lundi (50% + 100 FS), mercredi (200 FS) et vendredi (100% + 30 FS) 
                    créent un calendrier rock prévisible. Rockstar Casino combine accessibilité, générosité et régularité pour une expérience rock complète.
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
              🎁 Détail des Offres et Promotions Rockstar
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
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">📝 Comment S'inscrire sur Rockstar Casino ?</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                L'<strong className="text-primary">inscription sur Rockstar</strong> est simple et rapide, ne prenant que quelques minutes. 
                Voici notre <strong className="text-primary">guide complet</strong> pour créer votre compte et profiter du bonus rock jusqu'à 5000€.
              </p>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 1 : Créer votre compte</h3>
                <p className="leading-relaxed">
                  Cliquez sur le bouton <strong className="text-primary">"S'inscrire"</strong> visible sur la page d'accueil de Rockstar Casino. Remplissez le formulaire avec vos informations : 
                  nom, prénom, date de naissance, email et mot de passe sécurisé. Assurez-vous que toutes les informations sont exactes car elles seront vérifiées. 
                  L'inscription complète prend <strong className="text-primary">moins de 3 minutes</strong>.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 2 : Vérifier votre email</h3>
                <p className="leading-relaxed">
                  Après soumission du formulaire, Rockstar vous enverra un <strong className="text-primary">email de confirmation</strong>. Cliquez sur le lien de vérification 
                  pour <strong className="text-primary">activer votre compte</strong>. Cette étape sécurise votre compte et permet de recevoir les notifications importantes. 
                  Si l'email tarde, vérifiez vos spams.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 3 : Effectuer votre premier dépôt</h3>
                <p className="leading-relaxed">
                  Une fois connecté, accédez à la section <strong className="text-primary">"Dépôt"</strong>. Rockstar accepte cartes bancaires, cryptomonnaies et virements. 
                  Le <strong className="text-primary">dépôt minimum est de seulement 10€</strong>, le plus accessible du marché ! Choisissez votre méthode, entrez le montant et validez. 
                  Les dépôts sont généralement <strong className="text-primary">instantanés</strong>.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 4 : Activer le bonus rock</h3>
                <p className="leading-relaxed">
                  Rendez-vous dans votre profil → section <strong className="text-primary">BONUSES</strong> pour activer votre bonus de bienvenue. Votre bonus de 100% + 100 FS 
                  sera automatiquement crédité. Les conditions incluent un <strong className="text-primary">wager de x40</strong> à compléter en 7 jours avec une 
                  <strong className="text-primary"> mise maximale de 5€ par tour</strong> et un gain maximum de 10x le bonus.
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
                    <span>Vérifiez que vous êtes sur le <strong className="text-primary">site officiel</strong> de Rockstar Casino</span>
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
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">💳 Méthodes de Retrait et Délais sur Rockstar</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Rockstar propose <strong className="text-primary">plusieurs méthodes de retrait rapides</strong> adaptées à tous les profils de joueurs. 
                Voici un guide complet des options disponibles et leurs délais.
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
                      <td className="p-4">24-48h</td>
                      <td className="p-4">20€</td>
                      <td className="p-4">5 000€/jour</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Cryptomonnaies</td>
                      <td className="p-4">Instantané - 1h</td>
                      <td className="p-4">20€</td>
                      <td className="p-4">Illimité</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Virement Bancaire</td>
                      <td className="p-4">3-5 jours</td>
                      <td className="p-4">50€</td>
                      <td className="p-4">10 000€/mois</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Processus de Retrait</h3>
                <p className="leading-relaxed">
                  Le premier retrait nécessite une <strong className="text-primary">vérification KYC</strong> (pièce d'identité + justificatif de domicile). 
                  Une fois validé, les retraits suivants sont <strong className="text-primary">beaucoup plus rapides</strong>. Les cryptomonnaies offrent les délais 
                  les plus courts avec des retraits quasi instantanés.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">💡 Conseils pour retraits rapides</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Complétez la vérification KYC <strong className="text-primary">dès votre inscription</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Utilisez les <strong className="text-primary">cryptomonnaies</strong> pour des retraits quasi instantanés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Respectez les <strong className="text-primary">conditions de mise</strong> avant de retirer un bonus</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Catalogue de Jeux */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🎮 Catalogue de Jeux Rockstar</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Rockstar Casino propose une <strong className="text-primary">ludothèque rock de plus de 1800 jeux</strong> des meilleurs éditeurs mondiaux. 
                Découvrez une sélection variée pour tous les goûts.
              </p>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Machines à Sous</h3>
                <p className="leading-relaxed">
                  Plus de <strong className="text-primary">1200 slots</strong> incluant Book of Zeus, Curse of the Werewolf Megaways, Book of Cairo, Eye of Cleopatra, 
                  Sweet Bonanza, Gates of Olympus, Book of Dead et tous les hits Pragmatic Play, NetEnt, Play'n GO.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Casino Live</h3>
                <p className="leading-relaxed">
                  <strong className="text-primary">Casino live Evolution Gaming</strong> avec blackjack, roulette, baccarat, poker et game shows animés par des croupiers 
                  professionnels. Disponible 24/7 avec des limites adaptées à tous les budgets.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Jeux de Table</h3>
                <p className="leading-relaxed">
                  Versions classiques et modernes de <strong className="text-primary">blackjack, roulette, baccarat et poker</strong>. Profitez de graphismes HD 
                  et d'une jouabilité fluide sur desktop et mobile.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">❓ FAQ - Questions Fréquentes</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Quel est le dépôt minimum sur Rockstar Casino ?</h3>
                <p className="text-foreground leading-relaxed">
                  Le <strong className="text-primary">dépôt minimum est de seulement 10€</strong>, ce qui en fait l'un des casinos les plus accessibles du marché. 
                  Ce montant minimal permet à tous les joueurs de profiter des bonus et promotions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Comment fonctionne le pack de bienvenue ?</h3>
                <p className="text-foreground leading-relaxed">
                  Le pack de bienvenue est réparti sur <strong className="text-primary">4 dépôts</strong> : 1er dépôt 100% jusqu'à 1000€ + 100 FS, 2ème dépôt 100% jusqu'à 1000€ + 100 FS, 
                  3ème dépôt 75% jusqu'à 1500€ + 100 FS, 4ème dépôt 50% jusqu'à 1500€ + 100 FS. Total possible : 5000€ + 400 FS.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Quelles sont les promotions hebdomadaires ?</h3>
                <p className="text-foreground leading-relaxed">
                  Rockstar propose des <strong className="text-primary">bonus récurrents</strong> : lundi 50% + 100 FS, mercredi 200 FS, vendredi 100% + 30 FS. 
                  Plus un <strong className="text-primary">cashback de 5%</strong> crédité automatiquement chaque lundi sur vos pertes de la semaine.
                </p>
              </div>
            </div>
          </section>

          {/* Stratégies pour Maximiser Vos Gains */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🎯 Stratégies pour Maximiser Vos Gains sur Rockstar</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Découvrez nos <strong className="text-primary">stratégies éprouvées</strong> pour optimiser vos chances de gains sur Rockstar Casino.
              </p>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Profitez du calendrier hebdomadaire</h3>
                <p className="leading-relaxed">
                  Planifiez vos <strong className="text-primary">dépôts les lundis, mercredis et vendredis</strong> pour profiter systématiquement des bonus hebdomadaires. 
                  Le lundi offre 50% + 100 FS, le mercredi 200 FS, et le vendredi 100% + 30 FS. Maximisez votre capital en suivant ce rythme rock.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Optimisez le pack de bienvenue sur 4 dépôts</h3>
                <p className="leading-relaxed">
                  Pour <strong className="text-primary">maximiser les 5000€ de bonus</strong>, effectuez 4 dépôts importants : 1000€, 1000€, 2000€, 3000€ pour atteindre le plafond. 
                  Les 400 free spins répartis maintiennent l'engagement et permettent de tester Book of Zeus sans risque.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Utilisez le cashback comme filet de sécurité</h3>
                <p className="leading-relaxed">
                  Le <strong className="text-primary">cashback automatique de 5%</strong> crédité chaque lundi avec wager x3 seulement est excellent. 
                  Jouez normalement toute la semaine, et récupérez automatiquement 5% de vos pertes nettes pour relancer la machine.
                </p>
              </div>
            </div>
          </section>

          {/* Sécurité et Légalité */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🔐 Sécurité et Légalité de Rockstar Casino</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Rockstar Casino met la <strong className="text-primary">sécurité des joueurs</strong> au premier plan avec des technologies de pointe 
                et une réglementation stricte.
              </p>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Licence et Réglementation</h3>
                <p className="leading-relaxed">
                  Rockstar opère sous <strong className="text-primary">licence Curaçao eGaming</strong>, garantissant le respect des normes internationales 
                  de jeu responsable, d'équité et de protection des joueurs. La licence impose des audits réguliers et des contrôles stricts.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Protection des Données</h3>
                <p className="leading-relaxed">
                  Toutes les <strong className="text-primary">transactions sont sécurisées par cryptage SSL 256-bit</strong> de niveau bancaire. 
                  Vos données personnelles et financières sont protégées selon les standards européens RGPD. Aucune information n'est partagée avec des tiers.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Jeu Responsable</h3>
                <p className="leading-relaxed">
                  Rockstar propose des <strong className="text-primary">outils de jeu responsable</strong> : limites de dépôt quotidiennes/hebdomadaires/mensuelles, 
                  auto-exclusion temporaire ou permanente, et liens vers des organismes d'aide. Le support est formé pour détecter les comportements à risque.
                </p>
              </div>
            </div>
          </section>

          {/* Notre Verdict */}
          <section className="glass-card rounded-2xl p-8 mb-12 bg-primary/5 border-2 border-primary/20">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">📋 Notre Avis Rockstar : Le Verdict de GigaBonus 2026</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed text-lg">
                Après plusieurs semaines de tests approfondis, <strong className="text-primary">Rockstar Casino</strong> s'impose comme une plateforme 
                <strong className="text-primary"> rock et accessible</strong> parfaitement adaptée aux joueurs français cherchant régularité et générosité.
              </p>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 border-2 border-primary/20">
                <div className="text-center mb-4">
                  <p className="text-5xl font-bold text-primary mb-2">8.3/10</p>
                  <p className="text-xl font-semibold">Casino Rock Généreux</p>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">9/10</p>
                    <p className="text-sm">Bonus & Promotions</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">8/10</p>
                    <p className="text-sm">Qualité des Jeux</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">8/10</p>
                    <p className="text-sm">Service Client</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Points Forts Majeurs</h3>
                <p className="leading-relaxed">
                  Le <strong className="text-primary">pack de bienvenue jusqu'à 5000€ + 400 FS</strong> réparti sur 4 dépôts avec un dépôt minimum de seulement 10€ 
                  rend Rockstar <strong className="text-primary">ultra-accessible</strong>. Les <strong className="text-primary">promotions hebdomadaires récurrentes</strong> 
                  (lundi, mercredi, vendredi) créent un rythme prévisible que les joueurs fidèles adorent. Le cashback automatique de 5% avec wager x3 seulement est généreux.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Axes d'Amélioration</h3>
                <p className="leading-relaxed">
                  Le <strong className="text-primary">wagering x40 avec validité de 7 jours</strong> peut être difficile à compléter pour les joueurs occasionnels. 
                  La limite de gain maximum de 10x le bonus sur les promotions de bienvenue peut frustrer lors de grosses séries gagnantes. Le catalogue de 1800 jeux, 
                  bien que varié, reste en-dessous des leaders du marché (3000+).
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-6 border-l-4 border-primary">
                <p className="text-lg leading-relaxed">
                  <strong className="text-primary">Conclusion GigaBonus :</strong> Rockstar Casino séduit par son <strong className="text-primary">accessibilité</strong> 
                  (dépôt 10€), sa <strong className="text-primary">générosité</strong> (5000€ de bonus) et ses <strong className="text-primary">promotions régulières</strong>. 
                  Idéal pour les joueurs recherchant un calendrier prévisible et un cashback protecteur. Nous le recommandons aux fans de slots Pragmatic Play et 
                  aux joueurs réguliers qui profiteront pleinement du rythme hebdomadaire !
                </p>
              </div>
            </div>
          </section>

          {/* Avis des Joueurs */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">💬 Avis de Nos Testeurs sur Rockstar</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-center text-foreground mb-8">
                Découvrez les retours d'expérience <strong className="text-primary">authentiques</strong> de notre équipe de testeurs après plusieurs mois de jeu sur Rockstar.
              </p>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    M
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary">Marc D. - Joueur régulier</p>
                    <p className="text-sm text-muted-foreground">Membre depuis 6 mois • Joueur fidèle</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">8.5/10</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "Rockstar est devenu mon <strong className="text-primary">casino régulier grâce au calendrier hebdomadaire prévisible</strong>. Je dépose tous les lundis 
                  pour le 50% + 100 FS, tous les mercredis pour les 200 FS, et tous les vendredis pour le 100% + 30 FS. Cette régularité me permet de planifier mes sessions. 
                  Le <strong className="text-primary">cashback de 5% crédité automatiquement</strong> m'a sauvé plusieurs fois, j'ai récupéré 145€ le mois dernier ! 
                  Les retraits en Bitcoin prennent moins de 2h. Seul bémol : le wager x40 en 7 jours est un peu serré."
                </p>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-secondary">
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    S
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary">Sophie L. - Amatrice de slots</p>
                    <p className="text-sm text-muted-foreground">Membre depuis 4 mois • Joueuse active</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">8/10</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "J'adore <strong className="text-primary">Book of Zeus où tombent tous les free spins</strong> du pack de bienvenue ! Les 400 FS répartis sur 4 dépôts 
                  permettent de bien tester cette machine. J'ai touché 850€ avec les FS du 3ème dépôt. Le <strong className="text-primary">dépôt minimum de 10€ est parfait</strong> 
                  pour les petits budgets comme le mien. Les bonus du mercredi (200 FS) sont géniaux pour découvrir Book of Cairo. Par contre, la limite de gain de 10x le bonus 
                  est dommage, j'ai plafonné à 1000€ alors que j'aurais pu gagner bien plus."
                </p>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    T
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary">Thomas B. - Joueur crypto</p>
                    <p className="text-sm text-muted-foreground">Membre depuis 5 mois • Utilisateur Bitcoin</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">9/10</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "En tant qu'utilisateur exclusif de <strong className="text-primary">Bitcoin, Rockstar est parfait</strong> : dépôts instantanés, retraits en moins de 2h. 
                  J'ai retiré 2400€ en crypto et reçu mes fonds en 1h30 chrono ! Le pack de bienvenue m'a permis de déposer progressivement et profiter des 
                  <strong className="text-primary"> 400 FS sur Book of Zeus</strong>. Les promotions hebdomadaires récurrentes créent un rythme rock que j'adore. 
                  Le support chat répond en 3-4 minutes. Mon seul regret : le catalogue de 1800 jeux pourrait être plus fourni, surtout en exclusivités."
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Avis */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">❓ FAQ : Avis et Questions sur Rockstar Casino</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Rockstar est-il fiable selon les avis ?</h3>
                <p className="leading-relaxed">
                  Selon notre <strong className="text-primary">avis détaillé</strong> et les retours de nombreux joueurs, oui, Rockstar est un casino fiable. 
                  Il possède une licence Curaçao valide, utilise un cryptage SSL avancé et traite les retraits rapidement (24-48h pour cartes, 1-2h pour crypto). 
                  Notre équipe a effectué plusieurs retraits sans aucun problème.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Quel est l'avis sur le pack de bienvenue Rockstar ?</h3>
                <p className="leading-relaxed">
                  Dans notre <strong className="text-primary">avis sur le pack Rockstar</strong>, les 5000€ + 400 FS répartis sur 4 dépôts avec un minimum de 10€ 
                  seulement est excellent pour l'accessibilité. Le wager de x40 est élevé mais la validité de 7 jours et le gain max de 10x le bonus sont cohérents. 
                  Nous recommandons ce pack pour les joueurs réguliers qui profiteront des 4 paliers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Quels sont les délais de retrait sur Rockstar ?</h3>
                <p className="leading-relaxed">
                  Selon notre <strong className="text-primary">test des retraits</strong>, Rockstar traite les demandes en 24 à 48 heures pour les cartes bancaires 
                  après validation KYC. Les <strong className="text-primary">cryptomonnaies offrent des retraits en 1-2h</strong> dans notre expérience. 
                  Le premier retrait nécessite une vérification d'identité, puis les suivants sont beaucoup plus rapides.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Le cashback hebdomadaire de 5% est-il vraiment automatique ?</h3>
                <p className="leading-relaxed">
                  Oui ! Dans notre <strong className="text-primary">test du cashback</strong>, nous avons constaté que Rockstar crédite automatiquement 
                  <strong className="text-primary"> chaque lundi 5% de vos pertes nettes</strong> de la semaine précédente. Le wager de x3 seulement est excellent. 
                  Nous avons reçu notre premier cashback dès la deuxième semaine de jeu sans aucune démarche.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Le support client Rockstar est-il réactif ?</h3>
                <p className="leading-relaxed">
                  Dans notre <strong className="text-primary">avis sur le support client</strong>, Rockstar obtient une bonne note. Le chat en direct est 
                  disponible 24/7 avec des temps de réponse moyens de 3-4 minutes selon nos tests. Les agents parlent français et sont compétents. 
                  L'email répond sous 6-8 heures.
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
                    <span className="text-foreground">Pack de bienvenue généreux jusqu'à 5000€ + 400 FS sur 4 dépôts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Dépôt minimum ultra-accessible de 10€</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Promotions hebdomadaires récurrentes (lundi, mercredi, vendredi)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Cashback automatique de 5% avec wager x3 seulement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Retraits crypto ultra-rapides (1-2h)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Interface rock moderne et intuitive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Support client 24/7 en français</span>
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
                    <span className="text-foreground">Wagering x40 élevé avec validité de 7 jours seulement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">•</span>
                    <span className="text-foreground">Gain maximum de 10x le bonus sur les promotions de bienvenue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">•</span>
                    <span className="text-foreground">Catalogue de 1800 jeux en-dessous des leaders (3000+)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">•</span>
                    <span className="text-foreground">Pas d'application mobile native</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">•</span>
                    <span className="text-foreground">Méthodes de paiement limitées (pas de Skrill/Neteller)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="glass-card rounded-2xl p-8 text-center bg-gradient-to-br from-primary/10 to-secondary/10">
            <h2 className="text-3xl font-bold text-foreground mb-4">Prêt à Rocker sur Rockstar Casino ?</h2>
            <p className="text-lg text-foreground mb-6 max-w-3xl mx-auto">
              <strong className="text-primary">Inscrivez-vous</strong> dès maintenant et profitez d'un <strong className="text-primary">pack rock jusqu'à 5000€ + 400 FS</strong> 
              avec un dépôt minimum de seulement 10€. Rejoignez le casino le plus rock et accessible de 2026 !
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold text-xl px-12 py-6"
            >
              <a href={casino.playUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-6 h-6 mr-2" />
                Jouer Maintenant sur Rockstar
              </a>
            </Button>
          </section>
        </div>
      <SEOEnrichedContent
        casinoName="Rockstar"
        bonus="100% jusqu'à 5000€ + 400 FS"
        wager="40"
        minDeposit="10€"
        withdrawal="24-48h"
        rating={9.0}
        reviewsCount={2250}
        slug="rockstar"
      />
      <Footer />
    </>
  );
};

