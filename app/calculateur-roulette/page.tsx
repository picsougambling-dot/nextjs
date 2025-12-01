'use client';

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOEnrichedGuide from "@/components/SEOEnrichedGuide";
import SEOHead from "@/components/SEOHead";
import { casinos } from "@/data/casinos";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Breadcrumbs from "@/components/Breadcrumbs";

interface BetType {
  id: string;
  name: string;
  numbers: number;
  probability: number;
  payout: number;
  example: string;
}

const betTypes: BetType[] = [
  { id: "plein", name: "Numéro Plein", numbers: 1, probability: 2.70, payout: 35, example: "Un seul numéro (ex: 17)" },
  { id: "cheval", name: "À Cheval", numbers: 2, probability: 5.41, payout: 17, example: "Deux numéros adjacents" },
  { id: "transversale", name: "Transversale", numbers: 3, probability: 8.11, payout: 11, example: "Trois numéros d'une ligne" },
  { id: "carre", name: "Carré", numbers: 4, probability: 10.81, payout: 8, example: "Quatre numéros en carré" },
  { id: "sixain", name: "Sixain", numbers: 6, probability: 16.22, payout: 5, example: "Six numéros de deux lignes" },
  { id: "douzaine", name: "Douzaine", numbers: 12, probability: 32.43, payout: 2, example: "12 numéros (1-12, 13-24, 25-36)" },
  { id: "colonne", name: "Colonne", numbers: 12, probability: 32.43, payout: 2, example: "Une colonne de 12 numéros" },
  { id: "rouge-noir", name: "Rouge/Noir", numbers: 18, probability: 48.65, payout: 1, example: "Tous les rouges ou noirs" },
  { id: "pair-impair", name: "Pair/Impair", numbers: 18, probability: 48.65, payout: 1, example: "Tous les pairs ou impairs" },
  { id: "manque-passe", name: "Manque/Passe", numbers: 18, probability: 48.65, payout: 1, example: "1-18 (Manque) ou 19-36 (Passe)" },
];

export default function CalculateurRoulettePage() {
  const [selectedBet, setSelectedBet] = useState<BetType>(betTypes[0]);
  const [betAmount, setBetAmount] = useState<number>(10);
  const houseEdge = 2.70;

  const calculateExpectedReturn = () => {
    const winAmount = betAmount * selectedBet.payout;
    const probability = selectedBet.probability / 100;
    return (winAmount * probability - betAmount * (1 - probability)).toFixed(2);
  };

  const calculatePotentialWin = () => {
    return (betAmount * (selectedBet.payout + 1)).toFixed(2);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Calculateur Roulette Européenne",
    "description": "Calculez les probabilités et gains potentiels pour tous les types de paris à la roulette européenne (37 numéros).",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    }
  };

  return (
    <>
      <SEOHead
        title="Calculateur Roulette Européenne : Probabilités et Gains | GigaBonus"
        description="Calculez les probabilités et gains potentiels pour tous les types de paris à la roulette européenne (37 numéros). Outil gratuit et précis."
        keywords="calculateur roulette, probabilités roulette, gains roulette, roulette européenne, calculateur paris roulette, odds roulette"
        canonical="https://gigabonus.fr/calculateur-roulette"
        ogTitle="Calculateur Roulette Européenne : Probabilités et Gains"
        ogDescription="Calculez les probabilités et gains potentiels pour tous les types de paris à la roulette européenne. Outil gratuit et précis."
        ogImage="https://gigabonus.fr/og-image.png"
        twitterTitle="Calculateur Roulette Européenne : Probabilités et Gains"
        twitterDescription="Calculez les probabilités et gains potentiels pour tous les types de paris à la roulette européenne."
        schema={schemaData}
      />

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs />
            
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                Calculateur Roulette Européenne
              </h1>
              <p className="text-lg text-muted-foreground">
                Calculez les probabilités et gains potentiels pour tous les types de paris à la roulette européenne (37 numéros).
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              {/* Calculateur */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Configuration du Pari</CardTitle>
                  <CardDescription>Choisissez votre type de pari et votre mise</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="bet-type">Type de Pari</Label>
                    <Select value={selectedBet.id} onValueChange={(value) => {
                      const bet = betTypes.find(b => b.id === value);
                      if (bet) setSelectedBet(bet);
                    }}>
                      <SelectTrigger id="bet-type">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {betTypes.map((bet) => (
                          <SelectItem key={bet.id} value={bet.id}>
                            {bet.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">{selectedBet.example}</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bet-amount">Mise (€)</Label>
                    <Input
                      id="bet-amount"
                      type="number"
                      min="1"
                      value={betAmount}
                      onChange={(e) => setBetAmount(Number(e.target.value) || 1)}
                    />
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Probabilité de gain:</span>
                      <Badge variant="secondary">{selectedBet.probability}%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Cote de paiement:</span>
                      <Badge variant="secondary">{selectedBet.payout}:1</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Gain potentiel:</span>
                      <Badge className="bg-green-500 text-white hover:bg-green-600">{calculatePotentialWin()}€</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Espérance de gain:</span>
                      <Badge variant="destructive">{calculateExpectedReturn()}€</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Informations */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Informations sur le Pari Sélectionné</CardTitle>
                  <CardDescription>{selectedBet.name}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-sm text-muted-foreground">Nombre de Numéros</h3>
                      <p className="text-2xl font-bold">{selectedBet.numbers} / 37</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-sm text-muted-foreground">Avantage Maison</h3>
                      <p className="text-2xl font-bold text-destructive">{houseEdge}%</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold">Explication</h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedBet.example}. À la roulette européenne, vous avez {selectedBet.numbers} chance(s) sur 37 de gagner, 
                      soit une probabilité de {selectedBet.probability}%. En cas de gain, vous recevez {selectedBet.payout} fois votre mise 
                      plus votre mise initiale.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold">Espérance de Gain</h3>
                    <p className="text-sm text-muted-foreground">
                      L'espérance de gain est <span className="font-semibold text-destructive">négative</span> pour tous les paris à la roulette. 
                      Cela signifie qu'en moyenne, vous perdrez {houseEdge}% de votre mise sur le long terme. 
                      L'espérance calculée ({calculateExpectedReturn()}€) représente votre perte moyenne attendue pour cette mise de {betAmount}€.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tableau comparatif */}
            <Card>
              <CardHeader>
                <CardTitle>Tableau Comparatif des Paris</CardTitle>
                <CardDescription>Comparez tous les types de paris disponibles à la roulette européenne</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Type de Pari</TableHead>
                        <TableHead className="text-center">Numéros</TableHead>
                        <TableHead className="text-center">Probabilité</TableHead>
                        <TableHead className="text-center">Cote</TableHead>
                        <TableHead className="text-right">Gain pour 10€</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {betTypes.map((bet) => (
                        <TableRow 
                          key={bet.id}
                          className={bet.id === selectedBet.id ? "bg-primary/5" : ""}
                        >
                          <TableCell className="font-medium">{bet.name}</TableCell>
                          <TableCell className="text-center">{bet.numbers}/37</TableCell>
                          <TableCell className="text-center">{bet.probability}%</TableCell>
                          <TableCell className="text-center">{bet.payout}:1</TableCell>
                          <TableCell className="text-right font-semibold text-green-600">
                            {(10 * (bet.payout + 1)).toFixed(0)}€
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Section pédagogique */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Comprendre la Roulette Européenne</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Pourquoi la roulette européenne ?</h3>
                  <p>
                    La roulette européenne possède 37 numéros (0 à 36), contre 38 pour la roulette américaine (qui a un double zéro). 
                    Cela réduit l'avantage de la maison de 5.26% à 2.70%, rendant la roulette européenne plus favorable au joueur.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">L'avantage de la maison</h3>
                  <p>
                    Le 0 vert est la clé de l'avantage du casino. Tous les paris simples (rouge/noir, pair/impair, etc.) perdent quand 
                    le 0 sort, créant ainsi un avantage mathématique de 2.70% pour le casino sur le long terme.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Conseils pour jouer</h3>
                  <p>
                    Aucune stratégie ne peut surmonter l'avantage de la maison. Les systèmes comme la martingale peuvent fonctionner 
                    à court terme mais sont risqués. Fixez-vous toujours un budget et jouez pour le divertissement, pas pour gagner de l'argent.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <SEOEnrichedGuide 
          guideName="Calculateur Roulette Européenne"
          description="Outil gratuit de calcul des probabilités et gains potentiels pour tous les types de paris à la roulette européenne."
          topCasinos={[
            {
              name: casinos[0].name,
              slug: casinos[0].name.toLowerCase().replace(/\s+/g, '-'),
              bonus: casinos[0].bonusText,
              rating: 9.5
            },
            {
              name: casinos[1].name,
              slug: casinos[1].name.toLowerCase().replace(/\s+/g, '-'),
              bonus: casinos[1].bonusText,
              rating: 9.3
            },
            {
              name: casinos[2].name,
              slug: casinos[2].name.toLowerCase().replace(/\s+/g, '-'),
              bonus: casinos[2].bonusText,
              rating: 9.2
            }
          ]}
        />

        <Footer />
      </div>
    </>
  );
};

