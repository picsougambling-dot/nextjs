'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2, XCircle, TrendingUp, Shield, Gift, Wallet, Star } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import SEOEnrichedBlog from '@/components/SEOEnrichedBlog';
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { casinos } from '@/data/casinos';

export default function AvisVegasPlus() {
  const locale = useLocale();
  const casino = casinos.find(c => c.id === 11);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "OnlineBusiness",
          "name": "Vegas Plus Casino",
          "image": "/images/vegasplus.webp"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.1",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin",
          "jobTitle": "Expert Casino Senior",
          "description": "Expert en casinos en ligne avec 15 ans d'expérience et plus de 500 casinos testés"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GigaBonus",
          "url": "https://www.gigabonus.com"
        },
        "datePublished": "2025-10-12",
        "dateModified": "2025-10-12",
        "reviewBody": "Vegas Plus Casino propose une expérience inspirée de Las Vegas avec un bonus de 125% jusqu'à 750€ + 100 free spins. L'ambiance Vegas et le catalogue de slots sont particulièrement attractifs malgré un wager élevé de x50."
      },
      {
        "@type": "Article",
        "headline": "Avis Vegas Plus Casino 2025 : Test Complet",
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin",
          "jobTitle": "Expert Casino Senior"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GigaBonus",
          "url": "https://www.gigabonus.com"
        },
        "datePublished": "2025-10-12",
        "dateModified": "2025-10-12",
        "image": "/images/vegasplus.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quel est le bonus de bienvenue de Vegas Plus ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vegas Plus offre un bonus de 125% jusqu'à 750€ + 100 free spins sur le premier dépôt avec un wager de x50."
            }
          },
          {
            "@type": "Question",
            "name": "Vegas Plus est-il fiable ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, Vegas Plus opère sous licence Curaçao et utilise le cryptage SSL pour sécuriser les transactions."
            }
          }
        ]
      }
    ]
  };

  if (!casino) {
    return <div>Casino non trouvé</div>;
  }

  return (
    <>
      <SEOHead
        title="Avis Vegas Plus 2025 : Test Complet & Bonus | GigaBonus"
        description="Découvrez notre avis détaillé sur Vegas Plus Casino en 2025. Test complet : bonus 125% jusqu'à 750€ + 100 free spins, wager x50, retraits rapides."
        keywords="avis vegas plus, vegas plus casino, bonus vegas plus, avis vegas plus 2025, casino vegas plus"
        canonical="https://gigabonus.win/blog/avis-vegasplus-2025"
        ogTitle="Avis Vegas Plus 2025 : Test Complet & Bonus"
        ogDescription="Découvrez notre avis détaillé sur Vegas Plus Casino en 2025. Test complet : bonus 125% jusqu'à 750€ + 100 free spins."
        ogImage="https://gigabonus.win/images/vegasplus.webp"
        twitterTitle="Avis Vegas Plus 2025 : Test Complet & Bonus"
        twitterDescription="Découvrez notre avis détaillé sur Vegas Plus Casino en 2025. Test complet : bonus 125% jusqu'à 750€ + 100 free spins."
        schema={jsonLd}
      />
      <Navbar />
      <div className="min-h-screen bg-background pt-28">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumbs />
          
          <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>

          <article>
            <header className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="default">Avis Casino</Badge>
                <Badge variant="outline">2025</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Avis Vegas Plus Casino 2025 : Test Complet
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <time dateTime="2025-10-12">12 octobre 2025</time>
                <span>•</span>
                <span>Lecture : 8 min</span>
              </div>
            </header>

            <Card className="mb-8 overflow-hidden">
              <img 
                src="/images/vegasplus.webp" 
                alt="Vegas Plus Casino interface et bonus"
                className="w-full h-auto"
              />
            </Card>

            <div className="prose prose-lg max-w-none">
              <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
                <div className="flex items-start gap-4">
                  <Star className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3 text-foreground">Notre Verdict</h2>
                    <p className="text-muted-foreground mb-4">
                      Vegas Plus réussit à capturer l'esprit de Las Vegas avec son design coloré et son ambiance festive. Le bonus de 125% jusqu'à 750€ + 100 free spins est généreux, mais le wager de x50 demande un effort conséquent. Idéal pour les amateurs de slots à la recherche d'une expérience Vegas authentique.
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                        <Star className="w-5 h-5 fill-primary/20 text-primary/20" />
                      </div>
                      <span className="font-bold text-foreground">4.1/5</span>
                    </div>
                  </div>
                </div>
              </Card>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground flex items-center gap-2">
                <Gift className="w-8 h-8 text-primary" />
                Bonus et Promotions
              </h2>
              
              <Card className="p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Bonus de Bienvenue</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <span className="font-semibold">Montant</span>
                    <span className="text-primary font-bold">125% jusqu'à 750€ + 100 FS</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <span className="font-semibold">Wager</span>
                    <span className="font-bold">x50</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <span className="font-semibold">Dépôt minimum</span>
                    <span className="font-bold">20€</span>
                  </div>
                </div>
              </Card>

              <p className="mb-4">
                Le package de bienvenue combine argent bonus et free spins pour une offre complète. Attention toutefois au wager de x50 qui est élevé : pour un dépôt de 100€, vous devez miser 11 250€ ((100 + 125) × 50) pour débloquer vos gains.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground flex items-center gap-2">
                <TrendingUp className="w-8 h-8 text-primary" />
                Points Forts et Faibles
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="p-6 border-green-500/20 bg-green-500/5">
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    Points Forts
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>100 free spins inclus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Ambiance Vegas authentique</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Large choix de slots</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Programme VIP généreux</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Cashback hebdomadaire</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 border-red-500/20 bg-red-500/5">
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <XCircle className="w-6 h-6 text-red-500" />
                    Points Faibles
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Wager très élevé à x50</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Délais de retrait parfois longs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Section live casino limitée</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground flex items-center gap-2">
                <Wallet className="w-8 h-8 text-primary" />
                Méthodes de Paiement
              </h2>

              <Card className="p-6 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                    <img src="/images/methods/carte-bancaire.webp" alt="Carte Bancaire" className="w-8 h-8" />
                    <span className="text-sm font-medium">CB</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                    <img src="/images/methods/cashlib.webp" alt="Cashlib" className="w-8 h-8" />
                    <span className="text-sm font-medium">Cashlib</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                    <img src="/images/methods/neosurf.webp" alt="Neosurf" className="w-8 h-8" />
                    <span className="text-sm font-medium">Neosurf</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                    <img src="/images/methods/virement-bancaire.webp" alt="Virement" className="w-8 h-8" />
                    <span className="text-sm font-medium">Virement</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                    <img src="/images/methods/crypto.webp" alt="Crypto" className="w-8 h-8" />
                    <span className="text-sm font-medium">Crypto</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                    <img src="/images/methods/jetonbank.webp" alt="JetonBank" className="w-8 h-8" />
                    <span className="text-sm font-medium">JetonBank</span>
                  </div>
                </div>
              </Card>

              <p className="mb-6">
                Vegas Plus accepte toutes les méthodes de paiement populaires avec un dépôt minimum accessible de 20€. Les cryptomonnaies sont également acceptées pour ceux qui préfèrent l'anonymat et les transactions rapides.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground flex items-center gap-2">
                <Shield className="w-8 h-8 text-primary" />
                Sécurité et Fiabilité
              </h2>

              <p className="mb-4">
                Vegas Plus opère sous licence Curaçao et utilise le cryptage SSL 256 bits pour sécuriser toutes les transactions. Le casino collabore avec des fournisseurs de jeux certifiés et audités régulièrement pour garantir l'équité des jeux.
              </p>

              <Card className="p-6 mb-6 bg-amber-500/10 border-amber-500/20">
                <h3 className="text-xl font-bold mb-3 text-foreground">⚠️ Jeu Responsable</h3>
                <p className="text-muted-foreground">
                  Des limites de dépôt personnalisables et des options d'auto-exclusion sont disponibles. Le casino encourage le jeu responsable et fournit des liens vers des organisations d'aide. Réservé aux +18 ans.
                </p>
              </Card>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">Conclusion</h2>

              <p className="mb-4">
                <strong>Vegas Plus</strong> est une destination de choix pour les fans de slots qui apprécient l'ambiance festive de Las Vegas. Le bonus de bienvenue avec 100 free spins est attractif, mais le wager de x50 nécessite une mise de départ conséquente.
              </p>

              <p className="mb-6">
                Le programme VIP et le cashback hebdomadaire offrent de belles opportunités pour les joueurs réguliers. Si vous êtes prêt à relever le défi du wager élevé, Vegas Plus vous offrira une expérience de jeu colorée et divertissante.
              </p>

              <Card className="p-6 text-center">
                <p className="text-xl font-bold mb-4 text-foreground">Prêt pour Vegas ?</p>
                <Button asChild size="lg" className="text-lg px-8">
                  <a 
                    href="https://kadaincsa.com/api/v3/offer/325?aff_sub=%7Bclick_id%7D&aff_sub2=%7Bweb_id%7D&aff_sub4=seo&affiliate_id=889&url_id=842&free_1=/registration"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    Jouer sur Vegas Plus
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  +18 | Jouer comporte des risques
                </p>
              </Card>
            </div>
          </article>

          <SEOEnrichedBlog 
            casinoName="Vegas Plus"
            bonus={casino?.bonusText || "125% jusqu'à 750€ + 100 FS"}
            rating={4.1}
            reviewsCount={2100}
            slug="vegasplus"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
