'use client';

import { useState, useEffect } from "react";
import { useLocale, useTranslations } from 'next-intl';
import { getTranslatedCanonical } from '@/lib/get-translated-canonical';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOEnrichedGuide from "@/components/SEOEnrichedGuide";
import SEOHead from "@/components/SEOHead";
import { casinos } from "@/data/casinos";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Breadcrumbs from "@/components/Breadcrumbs";
import { AlertCircle, TrendingUp, Calendar, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Sport {
  key: string;
  title: string;
  active: boolean;
}

interface Bookmaker {
  key: string;
  title: string;
}

interface Odds {
  h2h?: number[];
  spreads?: any;
  totals?: any;
}

interface Match {
  id: string;
  sport_key: string;
  sport_title: string;
  commence_time: string;
  home_team: string;
  away_team: string;
  bookmakers: {
    key: string;
    title: string;
    markets: {
      key: string;
      outcomes: {
        name: string;
        price: number;
      }[];
    }[];
  }[];
}

const API_KEY = process.env.NEXT_PUBLIC_THE_ODDS_API_KEY || "5c70cff0e24e21872cecb3a0d0ffbf88";
const API_BASE = "https://api.the-odds-api.com/v4";

export default function CalculateurCotesSportivesPage() {
  const locale = useLocale();
  const t = useTranslations('GuidePages.calculateurCotesSportives');
  const [sports, setSports] = useState<Sport[]>([]);
  const [selectedSport, setSelectedSport] = useState<string>("");
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [selectedBets, setSelectedBets] = useState<{ matchId: string; outcome: string; odds: number }[]>([]);
  const [betAmount, setBetAmount] = useState<number>(10);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  // Charger les sports disponibles
  useEffect(() => {
    const fetchSports = async () => {
      try {
        const response = await fetch(`${API_BASE}/sports/?apiKey=${API_KEY}`);
        if (!response.ok) throw new Error("Erreur lors du chargement des sports");
        const data = await response.json();
        const activeSports = data.filter((sport: Sport) => sport.active);
        setSports(activeSports);
        if (activeSports.length > 0) {
          setSelectedSport(activeSports[0].key);
        }
      } catch (err) {
        setError(t('errors.loadingSports'));
        console.error(err);
      }
    };
    fetchSports();
  }, []);

  // Charger les matchs du sport sélectionné
  const fetchMatches = async () => {
    if (!selectedSport) return;
    
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `${API_BASE}/sports/${selectedSport}/odds/?apiKey=${API_KEY}&regions=eu&markets=h2h&oddsFormat=decimal`
      );
      
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error(t('errors.invalidApiKey'));
        } else if (response.status === 429) {
          throw new Error(t('errors.rateLimit'));
        }
        throw new Error(t('errors.loadingOdds'));
      }
      
      const data = await response.json();
      setMatches(data);
      setLastUpdate(new Date());
    } catch (err: any) {
      setError(err.message || t('errors.connectionError'));
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedSport) {
      fetchMatches();
    }
  }, [selectedSport]);

  // Calculer les cotes combinées
  const calculateCombinedOdds = () => {
    if (selectedBets.length === 0) return 1;
    return selectedBets.reduce((acc, bet) => acc * bet.odds, 1);
  };

  const calculatePotentialWin = () => {
    return (betAmount * calculateCombinedOdds()).toFixed(2);
  };

  const calculateProfit = () => {
    return (betAmount * calculateCombinedOdds() - betAmount).toFixed(2);
  };

  // Ajouter ou retirer un pari
  const toggleBet = (matchId: string, outcome: string, odds: number) => {
    setSelectedBets(prev => {
      const existing = prev.find(b => b.matchId === matchId);
      if (existing) {
        return prev.filter(b => b.matchId !== matchId);
      }
      return [...prev, { matchId, outcome, odds }];
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale === 'fr' ? 'fr-FR' : locale === 'en' ? 'en-GB' : locale === 'de' ? 'de-DE' : locale === 'es' ? 'es-ES' : locale === 'it' ? 'it-IT' : locale === 'pt' ? 'pt-PT' : locale === 'nl' ? 'nl-NL' : locale === 'ru' ? 'ru-RU' : locale === 'lv' ? 'lv-LV' : locale === 'fi' ? 'fi-FI' : 'fr-FR', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const getBestOdds = (match: Match) => {
    const allOdds: { [key: string]: { odds: number; bookmaker: string }[] } = {};
    
    match.bookmakers.forEach(bookmaker => {
      const h2hMarket = bookmaker.markets.find(m => m.key === 'h2h');
      if (h2hMarket) {
        h2hMarket.outcomes.forEach(outcome => {
          if (!allOdds[outcome.name]) {
            allOdds[outcome.name] = [];
          }
          allOdds[outcome.name].push({
            odds: outcome.price,
            bookmaker: bookmaker.title
          });
        });
      }
    });

    const best: { [key: string]: { odds: number; bookmaker: string } } = {};
    Object.keys(allOdds).forEach(team => {
      const sorted = allOdds[team].sort((a, b) => b.odds - a.odds);
      best[team] = sorted[0];
    });

    return best;
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
        canonical={getTranslatedCanonical('/calculateur-cotes-sportives', locale)}
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

            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Sidebar - Calculateur */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>{t('calculator.title')}</CardTitle>
                    <CardDescription>
                      {selectedBets.length === 0 
                        ? t('calculator.description.empty')
                        : t('calculator.description.selected', { count: selectedBets.length.toString() })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {selectedBets.length > 0 ? (
                      <>
                        <div className="space-y-2">
                          {selectedBets.map((bet, index) => {
                            const match = matches.find(m => m.id === bet.matchId);
                            return (
                              <div key={bet.matchId} className="flex justify-between items-start text-sm p-2 bg-muted rounded">
                                <div className="flex-1">
                                  <p className="font-medium text-xs text-muted-foreground">{t('calculator.betLabel', { index: (index + 1).toString() })}</p>
                                  <p className="font-semibold">{bet.outcome}</p>
                                </div>
                                <Badge variant="secondary">{bet.odds.toFixed(2)}</Badge>
                              </div>
                            );
                          })}
                        </div>

                        <div className="space-y-2 pt-4 border-t">
                          <Label htmlFor="bet-amount">{t('calculator.stakeLabel')}</Label>
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
                            <span className="text-sm font-medium">{t('calculator.combinedOddsLabel')}</span>
                            <Badge variant="secondary">{calculateCombinedOdds().toFixed(2)}</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{t('calculator.potentialWinLabel')}</span>
                            <Badge className="bg-green-500 text-white hover:bg-green-600">
                              {calculatePotentialWin()}€
                            </Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{t('calculator.netProfitLabel')}</span>
                            <Badge className="bg-blue-500 text-white hover:bg-blue-600">
                              +{calculateProfit()}€
                            </Badge>
                          </div>
                        </div>

                        <Button 
                          variant="outline" 
                          className="w-full"
                          onClick={() => setSelectedBets([])}
                        >
                          {t('calculator.clearAll')}
                        </Button>
                      </>
                    ) : (
                      <p className="text-sm text-muted-foreground text-center py-4">
                        {t('calculator.emptyState')}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Contenu principal - Matchs */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <CardTitle>{t('matches.title')}</CardTitle>
                        <CardDescription>
                          {t('matches.lastUpdate', { time: lastUpdate.toLocaleTimeString(locale === 'fr' ? 'fr-FR' : locale === 'en' ? 'en-GB' : locale === 'de' ? 'de-DE' : locale === 'es' ? 'es-ES' : locale === 'it' ? 'it-IT' : locale === 'pt' ? 'pt-PT' : locale === 'nl' ? 'nl-NL' : locale === 'ru' ? 'ru-RU' : locale === 'lv' ? 'lv-LV' : locale === 'fi' ? 'fi-FI' : 'fr-FR') })}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={fetchMatches}
                          disabled={loading}
                        >
                          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-6">
                      <Label htmlFor="sport-select">{t('matches.sportLabel')}</Label>
                      <Select value={selectedSport} onValueChange={setSelectedSport}>
                        <SelectTrigger id="sport-select">
                          <SelectValue placeholder={t('matches.sportPlaceholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          {sports.map((sport) => (
                            <SelectItem key={sport.key} value={sport.key}>
                              {sport.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      {loading ? (
                        Array.from({ length: 3 }).map((_, i) => (
                          <Skeleton key={i} className="h-32 w-full" />
                        ))
                      ) : matches.length === 0 ? (
                        <p className="text-center text-muted-foreground py-8">
                          {t('matches.noMatches')}
                        </p>
                      ) : (
                        matches.map((match) => {
                          const bestOdds = getBestOdds(match);
                          return (
                            <Card key={match.id} className="overflow-hidden">
                              <CardHeader className="pb-3">
                                <div className="flex items-start justify-between">
                                  <div className="space-y-1">
                                    <Badge variant="outline" className="mb-2">
                                      {match.sport_title}
                                    </Badge>
                                    <CardTitle className="text-lg">
                                      {match.home_team} {t('matches.vs')} {match.away_team}
                                    </CardTitle>
                                  </div>
                                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <Calendar className="h-4 w-4" />
                                    {formatDate(match.commence_time)}
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent>
                                <div className="grid grid-cols-3 gap-2">
                                  {Object.entries(bestOdds).map(([team, data]) => {
                                    const isSelected = selectedBets.some(b => b.matchId === match.id && b.outcome === team);
                                    return (
                                      <Button
                                        key={team}
                                        variant={isSelected ? "default" : "outline"}
                                        className="flex flex-col h-auto py-3"
                                        onClick={() => toggleBet(match.id, team, data.odds)}
                                      >
                                        <span className="text-xs font-normal mb-1">{team}</span>
                                        <span className="text-lg font-bold">{data.odds.toFixed(2)}</span>
                                        <span className="text-xs text-muted-foreground mt-1">
                                          {data.bookmaker}
                                        </span>
                                      </Button>
                                    );
                                  })}
                                </div>
                              </CardContent>
                            </Card>
                          );
                        })
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Section pédagogique */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      {t('educational.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{t('educational.format.title')}</h3>
                      <p>
                        {t('educational.format.text')}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{t('educational.combined.title')}</h3>
                      <p>
                        {t('educational.combined.text')}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{t('educational.comparison.title')}</h3>
                      <p>
                        {t('educational.comparison.text')}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>

        <SEOEnrichedGuide 
          locale={locale}
          guideName={t('seoEnriched.guideName')}
          description={t('seoEnriched.description')}
          topCasinos={[
            {
              name: casinos.find(c => c.id === 1)?.name || "SpinStar",
              slug: "spinstar",
              bonus: "700% jusqu'à 10 000€",
              rating: 9.8
            },
            {
              name: casinos.find(c => c.id === 5)?.name || "SlotRush",
              slug: "slotrush",
              bonus: "350% + 200 FS",
              rating: 9.3
            },
            {
              name: casinos.find(c => c.id === 7)?.name || "RoiBets",
              slug: "roibets",
              bonus: "200% jusqu'à 1500€",
              rating: 9.2
            }
          ]}
        />

        <Footer />
      </div>
    </>
  );
};

