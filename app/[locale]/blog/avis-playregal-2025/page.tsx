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

export default function AvisPlayRegal() {
  const locale = useLocale();
  const casino = casinos.find(c => c.id === 10);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "OnlineBusiness",
      "name": "Play Regal Casino",
      "image": "/images/playregal.webp"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.3",
      "bestRating": "5"
    },
    "author": {
      "@type": "Organization",
      "name": "GigaBonus"
    },
    "datePublished": "2025-10-11",
    "reviewBody": "Play Regal est un casino en ligne qui se distingue par son interface élégante et son programme VIP attractif. Avec un bonus de bienvenue de 100% jusqu'à 1000€ et un wager de x30, il offre des conditions compétitives."
  };

  if (!casino) {
    return <div>Casino non trouvé</div>;
  }

  return (
    <>
      <SEOHead
        title="Avis Play Regal 2025 : Test Complet & Bonus | GigaBonus"
        description="Découvrez notre avis détaillé sur Play Regal Casino en 2025. Test complet : bonus 100% jusqu'à 1000€, wager x30, retraits rapides."
        keywords="avis play regal, play regal casino, bonus play regal, avis play regal 2025, casino play regal"
        canonical="https://gigabonus.win/blog/avis-playregal-2025"
        ogTitle="Avis Play Regal 2025 : Test Complet & Bonus"
        ogDescription="Découvrez notre avis détaillé sur Play Regal Casino en 2025. Test complet : bonus 100% jusqu'à 1000€."
        ogImage="https://gigabonus.win/images/playregal.webp"
        twitterTitle="Avis Play Regal 2025 : Test Complet & Bonus"
        twitterDescription="Découvrez notre avis détaillé sur Play Regal Casino en 2025. Test complet : bonus 100% jusqu'à 1000€."
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
                Avis Play Regal Casino 2025 : Test Complet
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <time dateTime="2025-10-11">11 octobre 2025</time>
                <span>•</span>
                <span>Lecture : 8 min</span>
              </div>
            </header>

            <Card className="mb-8 overflow-hidden">
              <img 
                src="/images/playregal.webp" 
                alt="Play Regal Casino interface et bonus"
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
                      Play Regal se positionne comme un casino premium avec une interface soignée et un service client de qualité. Le bonus de bienvenue de 100% jusqu'à 1000€ avec un wager de x30 est particulièrement attractif, offrant des conditions plus avantageuses que beaucoup de concurrents.
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                        <Star className="w-5 h-5 fill-primary/30 text-primary/30" />
                      </div>
                      <span className="font-bold text-foreground">4.3/5</span>
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
                    <span className="text-primary font-bold">100% jusqu'à 1000€</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <span className="font-semibold">Wager</span>
                    <span className="font-bold">x30</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <span className="font-semibold">Dépôt minimum</span>
                    <span className="font-bold">20€</span>
                  </div>
                </div>
              </Card>

              <p className="mb-4">
                Le bonus de bienvenue de Play Regal est l'un des plus généreux du marché avec un wager de seulement x30. Cela signifie que pour un dépôt de 100€, vous recevez 100€ de bonus et devez miser 6000€ (200€ × 30) avant de pouvoir retirer vos gains.
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
                      <span>Wager faible à x30</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Bonus jusqu'à 1000€</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Interface premium et ergonomique</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Programme VIP attractif</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Support client réactif 24/7</span>
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
                      <span>Pas de free spins au premier dépôt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Catalogue de jeux moins fourni</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Conditions VIP élevées</span>
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
                Play Regal accepte une large gamme de méthodes de paiement, incluant les cartes bancaires, les solutions de paiement prépayées (Cashlib, Neosurf), les cryptomonnaies et le virement bancaire. Le dépôt minimum est fixé à 20€ pour toutes les méthodes.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground flex items-center gap-2">
                <Shield className="w-8 h-8 text-primary" />
                Sécurité et Fiabilité
              </h2>

              <p className="mb-4">
                Play Regal opère avec une licence de jeu Curaçao, garantissant un cadre légal pour ses opérations. Le casino utilise le cryptage SSL pour protéger les données des joueurs et les transactions financières. Les jeux sont fournis par des éditeurs reconnus et certifiés pour leur équité.
              </p>

              <Card className="p-6 mb-6 bg-amber-500/10 border-amber-500/20">
                <h3 className="text-xl font-bold mb-3 text-foreground">⚠️ Jeu Responsable</h3>
                <p className="text-muted-foreground">
                  Play Regal propose des outils de jeu responsable incluant des limites de dépôt, d'auto-exclusion et un lien vers des organisations d'aide. Le casino est réservé aux joueurs de 18 ans et plus.
                </p>
              </Card>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">Conclusion</h2>

              <p className="mb-4">
                <strong>Play Regal</strong> est un excellent choix pour les joueurs recherchant un casino élégant avec un bonus généreux et des conditions avantageuses. Le wager de x30 fait partie des plus bas du marché, et le montant maximum de 1000€ permet de vraiment profiter du bonus.
              </p>

              <p className="mb-6">
                Le programme VIP et le support client 24/7 ajoutent une dimension premium à l'expérience. Bien que le catalogue de jeux soit moins fourni que certains concurrents, la qualité est au rendez-vous avec des éditeurs reconnus.
              </p>

              <Card className="p-6 text-center">
                <p className="text-xl font-bold mb-4 text-foreground">Prêt à tenter votre chance ?</p>
                <Button asChild size="lg" className="text-lg px-8">
                  <a 
                    href="https://kadaincsa.com/api/v3/offer/310?aff_sub=%7Bclick_id%7D&aff_sub2=%7Bweb_id%7D&aff_sub4=seo&affiliate_id=889&url_id=827&free_1=/registration"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    Jouer sur Play Regal
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
    </>
  );
}
