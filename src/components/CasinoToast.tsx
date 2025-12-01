import { toast } from "@/hooks/use-toast";

export const showCasinoToast = (casinoName: string) => {
  toast({
    title: "🎰 Bonne chance !",
    description: `Profitez de vos bonus sur ${casinoName}`,
    duration: 3000,
  });
};

export const showFilterToast = (count: number) => {
  toast({
    title: "🎲 Filtres appliqués",
    description: `${count} casino${count > 1 ? 's' : ''} correspond${count > 1 ? 'ent' : ''} à vos critères`,
    duration: 2000,
  });
};
