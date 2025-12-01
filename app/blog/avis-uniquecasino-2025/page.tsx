'use client';

import Link from 'next/link';
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

export default function AvisUniqueCasino() {
  const casino = casinos.find(c => c.id === 14);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "OnlineBusiness",
      "name": "Unique Casino",
      "image": "/images/uniquecasino.webp"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Organization",
      "name": "GigaBonus"
    },
    "datePublished": "2025-10-14",
    "reviewBody": "Unique Casino est une référence du marché français avec son bonus exceptionnel de 200% jusqu'à 500€ + 100 free spins. La roue de la chance et le programme VIP premium en font un choix de premier ordre malgré un wager de x50."
  };

  if (!casino) {
    return <div>Casino non trouvé</div>;
  }

  return (
    <>
      <SEOHead
        title="Avis Unique Casino 2025 : Test Complet & Bonus | GigaBonus"
        description="Découvrez notre avis détaillé sur Unique Casino en 2025. Test complet : bonus 200% jusqu'à 500€ + 100 free spins, wager x50, retraits rapides."
        keywords="avis unique casino, unique casino, bonus unique casino, avis unique casino 2025, casino unique"
        canonical="https://gigabonus.win/blog/avis-uniquecasino-2025"
        ogTitle="Avis Unique Casino 2025 : Test Complet & Bonus"
        ogDescription="Découvrez notre avis détaillé sur Unique Casino en 2025. Test complet : bonus 200% jusqu'à 500€ + 100 free spins."
        ogImage="https://gigabonus.win/images/uniquecasino.webp"
        twitterTitle="Avis Unique Casino 2025 : Test Complet & Bonus"
        twitterDescription="Découvrez notre avis détaillé sur Unique Casino en 2025. Test complet : bonus 200% jusqu'à 500€ + 100 free spins."
        schema={jsonLd}
      />
      <Navbar />
      <div className="min-h-screen bg-background pt-28">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumbs />
          
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
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
                Avis Unique Casino 2025 : Test Complet
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <time dateTime="2025-10-14">14 octobre 2025</time>
                <span>•</span>
                <span>Lecture : 9 min</span>
              </div>
            </header>

            <Card className="mb-8 overflow-hidden">
              <img 
                src="/images/uniquecasino.webp" 
                alt="Unique Casino interface et bonus"
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
                      Unique Casino porte bien son nom avec un des meilleurs bonus du marché : 200% jusqu'à 500€ + 100 free spins. Bien établi en France, ce casino offre une expérience premium avec sa roue de la chance quotidienne et son programme VIP généreux. Le wager de x50 est le principal point d'attention.
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                        <Star className="w-5 h-5 fill-primary/50 text-primary/50" />
                      </div>
                      <span className="font-bold text-foreground">4.5/5</span>
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
                    <span className="text-primary font-bold">200% jusqu'à 500€ + 100 FS</span>
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
                Le bonus de 200% d'Unique Casino est exceptionnel. Pour un dépôt de 100€, vous recevez 200€ de bonus, portant votre capital à 300€. Attention au wager de x50 : il faudra miser 15 000€ (300 × 50) avant de pouvoir retirer. Les 100 free spins sont un bonus appréciable.
              </p>

              <Card className="p-6 mb-6 bg-primary/5 border-primary/20">
                <h3 className="text-xl font-bold mb-3 text-foreground">🎡 Roue de la Chance</h3>
                <p className="text-muted-foreground mb-3">
                  La roue de la chance quotidienne d'Unique Casino est devenue emblématique. Chaque jour, tournez la roue pour gagner :
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Free spins (jusqu'à 100)</li>
                  <li>• Bonus en cash</li>
                  <li>• Cashback instantané</li>
                  <li>• Points VIP doublés</li>
                </ul>
              </Card>

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
                      <span>Bonus exceptionnel 200% + 100 FS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Roue de la chance quotidienne</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Programme VIP premium</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Cashback hebdomadaire généreux</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Support francophone de qualité</span>
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
                      <span>Wager élevé à x50</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Limites de retrait mensuelles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Délais KYC parfois longs</span>
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
                Unique Casino accepte toutes les méthodes de paiement populaires en France. Les dépôts sont instantanés, et les retraits sont traités sous 24-48h pour les portefeuilles électroniques et cryptos.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground flex items-center gap-2">
                <Shield className="w-8 h-8 text-primary" />
                Sécurité et Fiabilité
              </h2>

              <p className="mb-4">
                Unique Casino opère sous licence Curaçao et est établi sur le marché français depuis plusieurs années. Le casino utilise le cryptage SSL 256 bits et collabore exclusivement avec des fournisseurs de jeux certifiés. La réputation d'Unique Casino est solide dans la communauté des joueurs français.
              </p>

              <Card className="p-6 mb-6 bg-amber-500/10 border-amber-500/20">
                <h3 className="text-xl font-bold mb-3 text-foreground">⚠️ Jeu Responsable</h3>
                <p className="text-muted-foreground">
                  Unique Casino prend le jeu responsable au sérieux avec des outils complets : limites personnalisables, auto-exclusion, test d'auto-évaluation et liens vers des organisations d'aide. Strictement réservé aux +18 ans.
                </p>
              </Card>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">Conclusion</h2>

              <p className="mb-4">
                <strong>Unique Casino</strong> mérite pleinement sa réputation de référence sur le marché français. Le bonus de 200% + 100 free spins est exceptionnel, même si le wager de x50 demande un effort conséquent. La roue de la chance quotidienne et le programme VIP premium offrent de belles opportunités aux joueurs réguliers.
              </p>

              <p className="mb-6">
                Si vous êtes prêt à relever le défi du wager élevé, Unique Casino vous offrira une expérience de jeu premium avec un support francophone de qualité et des promotions régulières. Un incontournable pour les joueurs français !
              </p>

              <Card className="p-6 text-center">
                <p className="text-xl font-bold mb-4 text-foreground">Rejoignez Unique Casino !</p>
                <Button asChild size="lg" className="text-lg px-8">
                  <a 
                    href="https://ecologyjgn.com/api/v3/offer/317?aff_sub=%7Bclick_id%7D&aff_sub2=%7Bweb_id%7D&aff_sub4=seo&affiliate_id=889&url_id=834&free_1=/registration"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    Jouer sur Unique Casino
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  +18 | Jouer comporte des risques
                </p>
              </Card>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
}
