'use client';

import { useRef } from "react";
import { Casino } from "@/data/casinos";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, CreditCard, DollarSign, Percent, TrendingDown } from "lucide-react";

interface CasinoDialogProps {
  casino: Casino;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getWagerColor = (wager: number | null) => {
  if (wager === null) return "bg-green-600";
  if (wager <= 30) return "bg-green-600";
  if (wager <= 35) return "bg-yellow-600";
  if (wager <= 40) return "bg-orange-700";
  return "bg-red-600";
};

const getWagerText = (wager: number | null) => {
  if (wager === null) return "Sans wager";
  return `x${wager}`;
};

const methodLabels: Record<string, string> = {
  CB: "Carte Bancaire",
  crypto: "Cryptomonnaie",
  neosurf: "Neosurf",
  paysafe: "PaysafeCard",
  cashlib: "Cashlib",
  virement: "Virement Bancaire",
  skrill: "Skrill",
  neteler: "Neteller",
  jetonbank: "JetonBank",
  myfinity: "MiFinity"
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

export const CasinoDialog = ({ casino, open, onOpenChange }: CasinoDialogProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      requestAnimationFrame(() => {
        videoRef.current?.play();
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      requestAnimationFrame(() => {
        videoRef.current?.pause();
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-primary/20 overflow-y-auto fixed inset-0 sm:inset-auto left-0 top-0 translate-x-0 translate-y-0 m-0 w-screen h-[100dvh] max-w-none rounded-none sm:left-1/2 sm:top-1/2 sm:translate-x-[-50%] sm:translate-y-[-50%] sm:w-full sm:max-w-2xl sm:h-auto sm:max-h-[90vh] sm:rounded-lg">
        <DialogHeader>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4 pt-4">
            <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
              <img
                src={casino.logo}
                alt={`Logo ${casino.name} Casino - Bonus ${casino.bonusPercent}%`}
                width={128}
                height={128}
                loading="lazy"
                className="w-full h-full object-contain drop-shadow-lg"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/100x100?text=" + casino.name.substring(0, 2);
                }}
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <DialogTitle className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                {casino.name}
              </DialogTitle>
              <DialogDescription className="text-sm sm:text-base">
                Découvrez tous les détails de cette offre exceptionnelle : bonus de {casino.bonusPercent}%, conditions de mise, dépôt minimum et moyens de paiement acceptés.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Video Preview */}
        {casino.video && (
          <div 
            className="relative rounded-2xl overflow-hidden mb-6 shadow-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <video
              ref={videoRef}
              className="w-full h-48 sm:h-64 object-cover"
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src={casino.video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
          {/* Bonus */}
          <div className="glass-card p-3 sm:p-4 rounded-xl border border-primary/20">
            <div className="flex items-center gap-2 mb-3">
              <Percent className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <h3 className="font-semibold text-sm sm:text-base text-foreground">Bonus d'inscription</h3>
            </div>
            <div className="space-y-2">
              <Badge className="bg-primary text-primary-foreground font-bold text-base sm:text-lg px-3 sm:px-4 py-1.5 sm:py-2">
                +{casino.bonusPercent}%
              </Badge>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">{casino.bonusText}</p>
            </div>
          </div>

          {/* Wager */}
          <div className="glass-card p-3 sm:p-4 rounded-xl border border-primary/20">
            <div className="flex items-center gap-2 mb-3">
              <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <h3 className="font-semibold text-sm sm:text-base text-foreground">Conditions de mise</h3>
            </div>
            <div className="space-y-2">
              <Badge className={`${getWagerColor(casino.wager)} text-white font-semibold text-base sm:text-lg px-3 sm:px-4 py-1.5 sm:py-2`}>
                {getWagerText(casino.wager)}
              </Badge>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                {casino.wager === null 
                  ? "Aucune condition de mise requise !" 
                  : `Il faut miser ${casino.wager} fois le montant du bonus`}
              </p>
            </div>
          </div>

          {/* Dépôt minimum */}
          <div className="glass-card p-3 sm:p-4 rounded-xl border border-primary/20">
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <h3 className="font-semibold text-sm sm:text-base text-foreground">Dépôt minimum</h3>
            </div>
            <div className="space-y-2">
              <p className="text-xl sm:text-2xl font-bold text-primary">{casino.minDeposit}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Montant minimum pour profiter de l'offre
              </p>
            </div>
          </div>

          {/* Méthodes de paiement */}
          <div className="glass-card p-3 sm:p-4 rounded-xl border border-primary/20">
            <div className="flex items-center gap-2 mb-3">
              <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <h3 className="font-semibold text-sm sm:text-base text-foreground">Paiements acceptés</h3>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {casino.methods.map((method) => (
                <div 
                  key={method}
                  className="relative group"
                >
                  <img
                    src={methodLogos[method]}
                    alt={methodLabels[method] || method}
                    className="h-6 sm:h-8 w-auto object-contain hover:scale-110 transition-transform"
                    title={methodLabels[method] || method}
                    width="50"
                    height="20"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info supplémentaire */}
        <div className="glass-card p-3 sm:p-4 rounded-xl border border-primary/20 mb-6">
          <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2">À savoir</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
            <li>• Offre réservée aux nouveaux joueurs</li>
            <li>• Conditions générales applicables</li>
            <li>• Jouez de manière responsable - 18+ uniquement</li>
            <li>• Les gains issus des tours gratuits peuvent être soumis à des conditions</li>
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3">
          <Button
            asChild
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg py-4 sm:py-6 animate-glow"
          >
            <a
              href={casino.playUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              aria-label={`Profiter de l'offre de ${casino.name}`}
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Profiter de cette offre
            </a>
          </Button>
          
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-primary/30 hover:bg-primary/10 font-semibold text-base sm:text-lg py-4 sm:py-6"
          >
            {(() => {
              // Liste des casinos qui ont des pages dédiées (basée sur le sitemap)
              const casinosWithPages = [
                'spinstar', 'kingschance', 'hunnyplay', 'luckytrunk', 'megawin', 
                'europefortune', 'cleobetra', 'spindinasty', 'i24slots', 'magicalspin', 
                'playregal', 'vegasplus', 'winmachance', 'uniquecasino', 'cazinostars', 
                'atlantisslots', 'casinointense', 'luckytreasure', 'bonrush', 'betify', 
                'rockstar', 'slotrush', 'spinaura', 'hotloot', 'roibets', 'aphrodite',
                'madcasino', 'kingdom', 'machance'
              ];
              const casinoSlug = casino.name.toLowerCase().replace(/\s+/g, '');
              const hasPage = casinosWithPages.includes(casinoSlug);
              // Si le casino n'a pas de page, rediriger vers un casino similaire (bookmaker vers meilleurs-bookmakers, sinon SpinStar)
              const fallbackHref = casino.isBookmaker ? '/meilleurs-bookmakers' : '/spinstar';
              const href = hasPage ? `/${casinoSlug}` : fallbackHref;
              return <a href={href}>Voir les autres offres</a>;
            })()}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
