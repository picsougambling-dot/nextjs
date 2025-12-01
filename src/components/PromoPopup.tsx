'use client';

import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Copy, Check, Gift } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { promos, PromoData } from "@/data/promos";

const POPUP_INTERVAL = 5 * 60 * 1000; // 5 minutes in milliseconds

export const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePromo, setActivePromo] = useState<PromoData | null>(null);
  const [copiedCodes, setCopiedCodes] = useState<Record<string, boolean>>({});

  const selectRandomPromo = () => {
    const randomIndex = Math.floor(Math.random() * promos.length);
    setActivePromo(promos[randomIndex]);
    setIsOpen(true);
    setCopiedCodes({});
  };

  const copyPromoCode = (code: string, casinoName: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodes(prev => ({ ...prev, [code]: true }));
    toast({
      title: "Code copié !",
      description: `Le code ${code} pour ${casinoName} a été copié dans votre presse-papier.`,
    });
    setTimeout(() => {
      setCopiedCodes(prev => ({ ...prev, [code]: false }));
    }, 2000);
  };

  useEffect(() => {
    // Show popup on initial load after 2 seconds
    const initialTimer = setTimeout(() => {
      selectRandomPromo();
    }, 2000);

    // Show popup every 5 minutes with random casino
    const interval = setInterval(() => {
      selectRandomPromo();
    }, POPUP_INTERVAL);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!activePromo) return null;

  const isMultiCode = activePromo.codes.length > 1;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-xl p-0 overflow-hidden border-primary/20">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-50 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-5 w-5" />
        </Button>
        
        <div className="relative">
          <div className="relative overflow-hidden">
            <img
              src={activePromo.bannerGif}
              alt={`${activePromo.casinoName} Bonus Exclusif`}
              className="w-full h-auto"
            />
          </div>
          
          <div className="p-4 bg-gradient-to-b from-background/95 to-background">
            <div className="flex items-center justify-center gap-2 mb-3">
              <h2 className="text-xl font-bold text-center text-primary">
                {activePromo.title}
              </h2>
            </div>
            
            <div className="space-y-3 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-sm text-muted-foreground">Disponible sur</span>
                <img 
                  src={activePromo.casinoLogo} 
                  alt={`${activePromo.casinoName} Casino`}
                  className="h-14 w-auto object-contain"
                />
              </div>

              {isMultiCode ? (
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground mb-2">
                    Choisissez votre bonus exclusif :
                  </p>
                  {activePromo.codes.map((codeData, index) => (
                    <div 
                      key={codeData.code}
                      className="bg-primary/10 border border-primary/20 rounded-lg p-3 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <Gift className="h-4 w-4 text-primary flex-shrink-0" />
                          <div className="text-left flex-1 min-w-0">
                            <p className="font-semibold text-sm text-foreground">
                              {codeData.description} sur {codeData.slot}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <p className="text-lg font-bold text-primary tracking-wider">
                            {codeData.code}
                          </p>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyPromoCode(codeData.code, activePromo.casinoName)}
                            className="gap-1 h-8"
                          >
                            {copiedCodes[codeData.code] ? (
                              <>
                                <Check className="h-3 w-3" />
                                <span className="text-xs">Copié</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3" />
                                <span className="text-xs">Copier</span>
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <p className="text-lg font-semibold animate-fade-in">
                    {activePromo.codes[0].description}
                  </p>
                  <p className="text-muted-foreground">
                    Sur {activePromo.codes[0].slot}
                  </p>
                  
                  {(activePromo.codes[0].maxWin || activePromo.codes[0].wager) && (
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                      {activePromo.codes[0].maxWin && (
                        <span>Max.win - {activePromo.codes[0].maxWin}</span>
                      )}
                      {activePromo.codes[0].wager && (
                        <span>Wager - {activePromo.codes[0].wager}</span>
                      )}
                    </div>
                  )}
                  
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 animate-scale-in">
                    <p className="text-sm text-muted-foreground mb-3">Code Promo :</p>
                    <div className="flex items-center justify-center gap-3">
                      <p className="text-2xl font-bold text-primary tracking-wider">
                        {activePromo.codes[0].code}
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyPromoCode(activePromo.codes[0].code, activePromo.casinoName)}
                        className="gap-2"
                      >
                        {copiedCodes[activePromo.codes[0].code] ? (
                          <>
                            <Check className="h-4 w-4" />
                            Copié !
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            Copier
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </>
              )}

              <Button
                size="default"
                className="w-full text-base font-bold hover-scale mt-2"
                onClick={() => {
                  window.open(activePromo.playUrl, "_blank", "noopener,noreferrer");
                  setIsOpen(false);
                }}
              >
                Récupérer Mon Bonus sur {activePromo.casinoName}
              </Button>
              
              <p className="text-xs text-muted-foreground mt-2">
                Offre exclusive réservée aux membres GigaBonus
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
