'use client';

import { useState, useMemo } from "react";
import { useLocale, useTranslations, useMessages } from 'next-intl';
import { getTranslatedCanonical } from '@/lib/get-translated-canonical';
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
  numbers: number;
  probability: number;
  payout: number;
}

const betTypesBase: BetType[] = [
  { id: "plein", numbers: 1, probability: 2.70, payout: 35 },
  { id: "cheval", numbers: 2, probability: 5.41, payout: 17 },
  { id: "transversale", numbers: 3, probability: 8.11, payout: 11 },
  { id: "carre", numbers: 4, probability: 10.81, payout: 8 },
  { id: "sixain", numbers: 6, probability: 16.22, payout: 5 },
  { id: "douzaine", numbers: 12, probability: 32.43, payout: 2 },
  { id: "colonne", numbers: 12, probability: 32.43, payout: 2 },
  { id: "rougeNoir", numbers: 18, probability: 48.65, payout: 1 },
  { id: "pairImpair", numbers: 18, probability: 48.65, payout: 1 },
  { id: "manquePasse", numbers: 18, probability: 48.65, payout: 1 },
];

export default function CalculateurRoulettePage() {
  const locale = useLocale();
  const t = useTranslations('GuidePages.calculateurRoulette');
  const messages = useMessages();

  // Helper function to get raw HTML from translations
  const getRawTranslation = (key: string): string => {
    try {
      const keys = key.split('.');
      let value: any = messages;
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          console.warn(`Translation key not found: ${key}`);
          return key;
        }
      }
      return typeof value === 'string' ? value : key;
    } catch (error) {
      console.error(`Error getting translation for key ${key}:`, error);
      return key;
    }
  };

  // Create betTypes with translated names and examples
  const betTypes = useMemo(() => {
    return betTypesBase.map(bet => ({
      ...bet,
      name: t(`betTypes.${bet.id}.name`),
      example: t(`betTypes.${bet.id}.example`)
    }));
  }, [t]);

  const [selectedBet, setSelectedBet] = useState(betTypes[0]);
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
    "name": t('schema.name'),
    "description": t('schema.description'),
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
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords={t('seoKeywords')}
        canonical={getTranslatedCanonical('/calculateur-roulette', locale)}
        ogTitle={t('ogTitle')}
        ogDescription={t('ogDescription')}
        ogImage="https://gigabonus.win/og-image.png"
        twitterTitle={t('twitterTitle')}
        twitterDescription={t('twitterDescription')}
        schema={schemaData}
      />

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs />
            
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                {t('title')}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t('intro.description')}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              {/* Calculateur */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>{t('calculator.title')}</CardTitle>
                  <CardDescription>{t('calculator.description')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="bet-type">{t('calculator.betTypeLabel')}</Label>
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
                    <Label htmlFor="bet-amount">{t('calculator.betAmountLabel')}</Label>
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
                      <span className="text-sm font-medium">{t('calculator.probabilityLabel')}</span>
                      <Badge variant="secondary">{selectedBet.probability}%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{t('calculator.payoutLabel')}</span>
                      <Badge variant="secondary">{selectedBet.payout}:1</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{t('calculator.potentialWinLabel')}</span>
                      <Badge className="bg-green-500 text-white hover:bg-green-600">{calculatePotentialWin()}€</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{t('calculator.expectedReturnLabel')}</span>
                      <Badge variant="destructive">{calculateExpectedReturn()}€</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Informations */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>{t('information.title')}</CardTitle>
                  <CardDescription>{selectedBet.name}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-sm text-muted-foreground">{t('information.numbersLabel')}</h3>
                      <p className="text-2xl font-bold">{selectedBet.numbers} / 37</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-sm text-muted-foreground">{t('information.houseEdgeLabel')}</h3>
                      <p className="text-2xl font-bold text-destructive">{houseEdge}%</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold">{t('information.explanationTitle')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedBet.example}. {t('information.explanationText', { 
                        numbers: selectedBet.numbers, 
                        probability: selectedBet.probability, 
                        payout: selectedBet.payout 
                      })}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold">{t('information.expectedReturnTitle')}</h3>
                    <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ 
                      __html: getRawTranslation('GuidePages.calculateurRoulette.information.expectedReturnText')
                        .replace('{houseEdge}', houseEdge.toString())
                        .replace('{expectedReturn}', calculateExpectedReturn())
                        .replace('{betAmount}', betAmount.toString())
                    }} />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tableau comparatif */}
            <Card>
              <CardHeader>
                <CardTitle>{t('comparison.title')}</CardTitle>
                <CardDescription>{t('comparison.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{t('comparison.table.betType')}</TableHead>
                        <TableHead className="text-center">{t('comparison.table.numbers')}</TableHead>
                        <TableHead className="text-center">{t('comparison.table.probability')}</TableHead>
                        <TableHead className="text-center">{t('comparison.table.payout')}</TableHead>
                        <TableHead className="text-right">{t('comparison.table.winFor10')}</TableHead>
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
                <CardTitle>{t('educational.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t('educational.whyEuropean.title')}</h3>
                  <p>
                    {t('educational.whyEuropean.text')}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t('educational.houseEdge.title')}</h3>
                  <p>
                    {t('educational.houseEdge.text')}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t('educational.tips.title')}</h3>
                  <p>
                    {t('educational.tips.text')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <SEOEnrichedGuide 
          locale={locale}
          guideName={t('seoEnriched.guideName')}
          description={t('seoEnriched.description')}
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

