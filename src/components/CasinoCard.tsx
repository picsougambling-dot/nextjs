'use client';

import { useState, useEffect } from "react";
import { Casino } from "@/data/casinos";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Info, Trophy, Gamepad2 } from "lucide-react";
import { CasinoDialog } from "./CasinoDialog";
import { showCasinoToast } from "./CasinoToast";
import { GoldParticles } from "./GoldParticles";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { providersList } from "@/data/providers";
import { useTranslations } from "next-intl";

interface CasinoCardProps {
  casino: Casino;
  index?: number;
}

const getWagerColor = (wager: number | null) => {
  if (wager === null) return "bg-green-700";
  if (wager <= 30) return "bg-green-700";
  if (wager <= 35) return "bg-yellow-700";
  if (wager <= 40) return "bg-orange-700";
  return "bg-red-700";
};


const methodLogos: Record<string, string> = {
  CB: "/images/methods/carte-bancaire.webp",
  crypto: "/images/methods/crypto.webp",
  neosurf: "/images/methods/neosurf.webp",
  paysafe: "/images/methods/paysafecard.webp",
  cashlib: "/images/methods/cashlib.webp",
  virement: "/images/methods/virement-bancaire.webp",
  skrill: "/images/methods/skrill.webp",
  neteler: "/images/methods/neteller.webp",
  jetonbank: "/images/methods/jetonbank.webp",
  myfinity: "/images/methods/mifinity.webp"
};

export const CasinoCard = ({ casino, index = 0 }: CasinoCardProps) => {
  const t = useTranslations('CasinoCard');
  
  const getWagerText = (wager: number | null): string => {
    if (wager === null) return t('noWager');
    return `x${wager}`;
  };

  const formatBonusText = (bonusText: string): string => {
    // Extraire les valeurs du texte de bonus
    // Format: "100% jusqu'à 1 000€ + 100 FS" ou "200% jusqu'à 500€"
    const match = bonusText.match(/(\d+)%\s+jusqu'à\s+([\d\s]+)€(?:\s+\+\s+(\d+)\s+FS)?/);
    if (match) {
      const percent = match[1];
      const amount = match[2].replace(/\s/g, '');
      const freeSpins = match[3];
      
      if (freeSpins) {
        return t('bonusText.withFreeSpins', { percent, amount, freeSpins });
      } else {
        return t('bonusText.withoutFreeSpins', { percent, amount });
      }
    }
    // Si le format ne correspond pas, retourner le texte original
    return bonusText;
  };
  
  const getMethodLabel = (method: string): string => {
    const labels: Record<string, string> = {
      CB: t('paymentMethods.cb'),
      crypto: t('paymentMethods.crypto'),
      neosurf: t('paymentMethods.neosurf'),
      paysafe: t('paymentMethods.paysafe'),
      cashlib: t('paymentMethods.cashlib'),
      virement: t('paymentMethods.virement'),
      skrill: t('paymentMethods.skrill'),
      neteler: t('paymentMethods.neteler'),
      jetonbank: t('paymentMethods.jetonbank'),
      myfinity: t('paymentMethods.myfinity')
    };
    return labels[method] || method;
  };

  const getMethodDetails = (method: string): { min: string; max: string; delay: string; fees: string } => {
    const details: Record<string, { min: string; max: string; delay: string; fees: string }> = {
      CB: {
        min: t('paymentDetails.cb.min'),
        max: t('paymentDetails.cb.max'),
        delay: t('paymentDetails.cb.delay'),
        fees: t('paymentDetails.cb.fees')
      },
      crypto: {
        min: t('paymentDetails.crypto.min'),
        max: t('paymentDetails.crypto.max'),
        delay: t('paymentDetails.crypto.delay'),
        fees: t('paymentDetails.crypto.fees')
      },
      neosurf: {
        min: t('paymentDetails.neosurf.min'),
        max: t('paymentDetails.neosurf.max'),
        delay: t('paymentDetails.neosurf.delay'),
        fees: t('paymentDetails.neosurf.fees')
      },
      paysafe: {
        min: t('paymentDetails.paysafe.min'),
        max: t('paymentDetails.paysafe.max'),
        delay: t('paymentDetails.paysafe.delay'),
        fees: t('paymentDetails.paysafe.fees')
      },
      cashlib: {
        min: t('paymentDetails.cashlib.min'),
        max: t('paymentDetails.cashlib.max'),
        delay: t('paymentDetails.cashlib.delay'),
        fees: t('paymentDetails.cashlib.fees')
      },
      virement: {
        min: t('paymentDetails.virement.min'),
        max: t('paymentDetails.virement.max'),
        delay: t('paymentDetails.virement.delay'),
        fees: t('paymentDetails.virement.fees')
      },
      skrill: {
        min: t('paymentDetails.skrill.min'),
        max: t('paymentDetails.skrill.max'),
        delay: t('paymentDetails.skrill.delay'),
        fees: t('paymentDetails.skrill.fees')
      },
      neteler: {
        min: t('paymentDetails.neteler.min'),
        max: t('paymentDetails.neteler.max'),
        delay: t('paymentDetails.neteler.delay'),
        fees: t('paymentDetails.neteler.fees')
      },
      jetonbank: {
        min: t('paymentDetails.jetonbank.min'),
        max: t('paymentDetails.jetonbank.max'),
        delay: t('paymentDetails.jetonbank.delay'),
        fees: t('paymentDetails.jetonbank.fees')
      },
      myfinity: {
        min: t('paymentDetails.myfinity.min'),
        max: t('paymentDetails.myfinity.max'),
        delay: t('paymentDetails.myfinity.delay'),
        fees: t('paymentDetails.myfinity.fees')
      }
    };
    return details[method] || { min: "", max: "", delay: "", fees: "" };
  };
  const [dialogOpen, setDialogOpen] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const [openTooltip, setOpenTooltip] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Détecter si c'est un appareil tactile
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handlePlayClick = () => {
    showCasinoToast(casino.name);
    setShowParticles(true);
  };

  const handleTooltipClick = (id: string) => {
    if (isTouchDevice) {
      setOpenTooltip(openTooltip === id ? null : id);
    }
  };

  // Fermer les tooltips quand on clique ailleurs (seulement sur tactile)
  useEffect(() => {
    if (!isTouchDevice) return;

    const handleClickOutside = () => {
      if (openTooltip) {
        setOpenTooltip(null);
      }
    };

    if (openTooltip) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [openTooltip, isTouchDevice]);

  return (
    <TooltipProvider delayDuration={0} skipDelayDuration={0}>
      <div className="glass-card rounded-2xl overflow-visible group hover:shadow-2xl hover:shadow-primary/40 dark:hover:shadow-[0_0_30px_hsl(var(--glow-primary)/0.6)] animate-fade-in-up h-[480px] transition-all duration-500 border border-border/50 hover:border-primary/50 dark:hover:border-primary/60 hover:scale-[1.03] active:scale-[1.01] relative hover:-translate-y-2" style={{ perspective: '1000px' }}>
        {/* Shine sweep effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden rounded-2xl">
          <div className="absolute top-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine-sweep" />
        </div>
        {/* Corner fold effect on hover */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-bl-3xl" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
      {/* Background Image */}
      <div 
        className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20"
      >
        {casino.backgroundImage && (
          <img
            src={casino.backgroundImage}
            alt={`${casino.name} background`}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
            decoding="async"
            width={400}
            height={192}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Logo - Chargé immédiatement pour le LCP */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-48 md:h-48 group-hover:scale-105 transition-all duration-300">
          <img
            src={casino.logo}
            alt={casino.name}
            className="w-full h-full object-contain drop-shadow-2xl dark:drop-shadow-[0_0_30px_hsl(var(--primary)/0.6)]"
            loading="lazy"
            decoding="async"
            width={192}
            height={192}
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/100x100?text=" + casino.name.substring(0, 2);
            }}
          />
        </div>

        {/* Bonus Badge */}
        <div className="absolute top-4 right-4 flex gap-2">
          {casino.isBookmaker && (
            <Tooltip {...(isTouchDevice ? { open: openTooltip === 'bookmaker', onOpenChange: (open) => !open && setOpenTooltip(null) } : {})}>
              <TooltipTrigger asChild>
                <span className="inline-block" onClick={(e) => { e.stopPropagation(); handleTooltipClick('bookmaker'); }}>
                  <Badge className="bg-primary/90 backdrop-blur-sm text-white font-semibold text-sm px-3 py-1.5 flex items-center gap-1.5 border border-white/10 cursor-help active:scale-95 transition-transform">
                    <Trophy className="w-3.5 h-3.5" />
                  {t('bookmaker')}
                  </Badge>
                </span>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={8} className="max-w-[280px] z-[100]">
                <p className="text-sm font-semibold mb-1">{t('tooltips.bookmaker.title')}</p>
                <p className="text-xs text-muted-foreground">
                  {t('tooltips.bookmaker.description')}
                </p>
              </TooltipContent>
            </Tooltip>
          )}
          <Tooltip {...(isTouchDevice ? { open: openTooltip === 'bonus', onOpenChange: (open) => !open && setOpenTooltip(null) } : {})}>
            <TooltipTrigger asChild>
              <span className="inline-block" onClick={(e) => { e.stopPropagation(); handleTooltipClick('bonus'); }}>
                <Badge className="bg-primary text-primary-foreground font-bold text-lg px-4 py-2 shadow-lg dark:shadow-[0_0_25px_hsl(var(--glow-primary)/0.8)] relative group-hover:animate-pulse cursor-help transition-all duration-300 hover:scale-110 active:scale-95">
                  +{casino.bonusPercent}%
                </Badge>
              </span>
            </TooltipTrigger>
            <TooltipContent side="bottom" sideOffset={8} className="max-w-[260px] z-[100]">
              <p className="text-sm font-semibold mb-1">{t('tooltips.bonus.title')}</p>
              <p className="text-xs text-muted-foreground">
                {t('tooltips.bonus.description', { percent: casino.bonusPercent })}
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-[280px]">
        <div className="flex-none mb-4">
          <h3 className="text-2xl font-bold text-primary mb-2">{casino.name}</h3>
          <p className="text-muted-foreground text-sm">{formatBonusText(casino.bonusText)}</p>
        </div>

        {/* Wager & Payment Methods */}
        <div className="flex-1 flex flex-wrap gap-2 content-start mb-4">
          <Tooltip {...(isTouchDevice ? { open: openTooltip === 'wager', onOpenChange: (open) => !open && setOpenTooltip(null) } : {})}>
            <TooltipTrigger asChild>
              <span className="inline-block" onClick={(e) => { e.stopPropagation(); handleTooltipClick('wager'); }}>
                <Badge className={`${getWagerColor(casino.wager)} text-white font-semibold cursor-help transition-all hover:scale-105 active:scale-95`}>
                  {getWagerText(casino.wager)}
                </Badge>
              </span>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={8} className="max-w-sm z-[100]">
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-semibold text-base">
                  <span className="text-lg">🎯</span>
                  {t('tooltips.wager.title')}
                </div>
                <div className="text-xs space-y-1.5 text-muted-foreground">
                  {casino.wager === null ? (
                    <>
                      <p className="text-green-500 dark:text-green-400 font-medium">{t('tooltips.wager.noWager')}</p>
                      <p>{t('tooltips.wager.noWagerDescription')}</p>
                    </>
                  ) : (
                    <>
                      <p>{t('tooltips.wager.hasWager', { wager: casino.wager })}</p>
                      <div className="mt-2 pt-2 border-t border-border/50">
                        <p className="text-[10px] opacity-70">
                          {t('tooltips.wager.example', { wager: casino.wager, amount: casino.wager * 100 })}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
          
          {/* Providers Badge */}
          {casino.providers && casino.providers.length > 0 && (
            <Tooltip {...(isTouchDevice ? { open: openTooltip === 'providers', onOpenChange: (open) => !open && setOpenTooltip(null) } : {})}>
              <TooltipTrigger asChild>
                <span className="inline-block" onClick={(e) => { e.stopPropagation(); handleTooltipClick('providers'); }}>
                  <Badge className="bg-gradient-to-r from-secondary/80 to-secondary/60 text-secondary-foreground font-semibold cursor-help transition-all hover:scale-105 hover:shadow-lg flex items-center gap-1.5 border border-secondary/30 active:scale-95">
                    <Gamepad2 className="w-3.5 h-3.5" />
                  {casino.providers.length} {t('providers')}
                  </Badge>
                </span>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={8} className="max-w-md z-[100] max-h-[400px] overflow-y-auto scrollbar-thin bg-popover/95 backdrop-blur-lg border border-border shadow-2xl">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-semibold text-base mb-3 sticky top-0 bg-popover pb-2 border-b border-border/50">
                    <Gamepad2 className="w-5 h-5 text-primary" />
                    <span>{t('gameProviders', { count: casino.providers.length })}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {casino.providers.map((provider) => (
                      <div 
                        key={provider} 
                        className="flex items-center gap-2 px-2.5 py-2 rounded-md bg-muted/50 hover:bg-muted transition-colors border border-border/30"
                      >
                        <span className="text-primary text-base">▸</span>
                        <span className="text-foreground font-medium">{providersList[provider] || provider}</span>
                      </div>
                    ))}
                  </div>
                  {casino.providers.some(p => ["pragmatic", "evolution", "netent", "hacksaw", "nolimit", "playngo"].includes(p)) && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3 pt-3 border-t border-border/50">
                      <span className="text-base">⭐</span>
                      <span>{t('tooltips.providers.premium')}</span>
                    </div>
                  )}
                </div>
              </TooltipContent>
            </Tooltip>
          )}
          {casino.methods.map((method) => {
            const details = getMethodDetails(method);
            const tooltipId = `method-${method}`;
            return (
              <Tooltip key={method} {...(isTouchDevice ? { open: openTooltip === tooltipId, onOpenChange: (open) => !open && setOpenTooltip(null) } : {})}>
                <TooltipTrigger asChild>
                  <div 
                    className="h-8 px-3 rounded-md border border-primary/30 bg-background flex items-center justify-center group/method transition-all hover:border-primary hover:bg-primary/5 hover:scale-110 active:scale-95 cursor-help"
                    onClick={(e) => { e.stopPropagation(); handleTooltipClick(tooltipId); }}
                  >
                    <img 
                      src={methodLogos[method]} 
                      alt={getMethodLabel(method)}
                      className="h-5 object-contain grayscale group-hover/method:grayscale-0 transition-all"
                      loading="lazy"
                      decoding="async"
                      width={50}
                      height={20}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={8} className="max-w-xs z-[100]">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 font-semibold text-base">
                      <img
                        src={methodLogos[method]}
                        alt=""
                        className="h-5 w-auto"
                      />
                      {getMethodLabel(method)}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-wider opacity-60">{t('paymentDetails.labels.limits')}</p>
                        <p className="font-medium text-foreground">
                          {details.min} - {details.max}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-wider opacity-60">{t('paymentDetails.labels.delay')}</p>
                        <p className="font-medium text-foreground">
                          {details.delay}
                        </p>
                      </div>
                      <div className="col-span-2 pt-1.5 border-t border-border/50 space-y-1">
                        <p className="text-[10px] uppercase tracking-wider opacity-60">{t('paymentDetails.labels.fees')}</p>
                        <p className="font-medium text-green-500 dark:text-green-400">
                          {details.fees}
                        </p>
                      </div>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 flex-none">
          <Button
            asChild
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 dark:hover:shadow-[0_0_30px_hsl(var(--glow-primary)/0.7)] hover:scale-105 active:scale-95 relative overflow-hidden group/play touch-manipulation"
            onClick={handlePlayClick}
          >
            <a
              href={casino.playUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              aria-label={`Jouer sur ${casino.name}`}
            >
              {/* Ripple effect container */}
              <span className="absolute inset-0 overflow-hidden">
                <span className="absolute inset-0 bg-white/20 rounded-lg scale-0 group-active/play:animate-[ripple_0.6s_ease-out]" />
              </span>
              <ExternalLink className="w-4 h-4 mr-2 relative z-10" />
              <span className="relative z-10">{t('play')}</span>
              <GoldParticles trigger={showParticles} onComplete={() => setShowParticles(false)} />
            </a>
          </Button>
          <Button
            variant="outline"
            className="border-border hover:bg-accent/50 hover:border-primary/40 dark:hover:border-primary/60 dark:hover:shadow-[0_0_15px_hsl(var(--glow-primary)/0.4)] transition-all duration-300 relative overflow-hidden group/button touch-manipulation"
            onClick={() => setDialogOpen(true)}
            aria-label={`Voir les détails du casino ${casino.name}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-200%] group-hover/button:translate-x-[200%] transition-transform duration-700" />
            <Info className="w-4 h-4 mr-2" />
            {t('details')}
          </Button>
        </div>
      </div>
      </div>

      <CasinoDialog 
        casino={casino} 
        open={dialogOpen} 
        onOpenChange={setDialogOpen} 
      />
    </TooltipProvider>
  );
};
