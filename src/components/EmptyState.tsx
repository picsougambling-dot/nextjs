import { RotateCcw, Dices } from "lucide-react";
import { Button } from "./ui/button";

interface EmptyStateProps {
  onReset?: () => void;
}

export const EmptyState = ({ onReset }: EmptyStateProps) => {
  return (
    <div className="glass-card rounded-2xl p-12 text-center animate-fade-in">
      {/* Animated SVG Illustration */}
      <div className="mb-8 relative">
        <div className="inline-block relative">
          {/* Animated Dice */}
          <Dices 
            className="w-24 h-24 mx-auto text-primary/30 animate-dice-roll" 
            strokeWidth={1.5}
          />
          {/* Glow effect */}
          <div className="absolute inset-0 blur-xl bg-primary/20 animate-pulse" />
        </div>
      </div>

      {/* Message */}
      <h3 className="text-2xl font-bold text-foreground mb-3">
        Aucun casino trouvé
      </h3>
      <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
        Nous n'avons pas trouvé de casino correspondant à vos critères. 
        Essayez de réduire vos filtres pour voir plus d'offres.
      </p>

      {/* Smart Suggestions */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
            💡 Essayez "Tous les bonus"
          </span>
          <span className="text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
            💡 Retirez le filtre wager
          </span>
          <span className="text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
            💡 Acceptez plus de méthodes de paiement
          </span>
        </div>

        {/* Reset Button */}
        {onReset && (
          <Button
            onClick={onReset}
            className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base group"
          >
            <RotateCcw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
            Réinitialiser tous les filtres
          </Button>
        )}
      </div>
    </div>
  );
};