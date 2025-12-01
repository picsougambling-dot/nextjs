import { Casino } from "@/data/casinos";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

interface CasinoTableProps {
  casinos: Casino[];
}

const getWagerText = (wager: number | null) => {
  if (wager === null) return "Sans wager ✓";
  return `x${wager}`;
};

const getMedal = (index: number) => {
  if (index === 0) return "🥇";
  if (index === 1) return "🥈";
  if (index === 2) return "🥉";
  return `${index + 1}`;
};

export const CasinoTable = ({ casinos }: CasinoTableProps) => {
  return (
    <div className="glass-card rounded-3xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">#</th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Casino</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Bonus</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Dépôt min</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Conditions</th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Action</th>
            </tr>
          </thead>
          <tbody>
            {casinos.map((casino, index) => (
              <tr
                key={casino.id}
                className="border-b border-border/50 hover:bg-white/5 transition-colors"
              >
                <td className="px-6 py-4 text-lg font-bold text-foreground">
                  {getMedal(index)}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center">
                    <div className="w-32 h-32">
                      <img
                        src={casino.logo}
                        alt={`Logo ${casino.name} Casino`}
                        width={128}
                        height={128}
                        loading="lazy"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/128x128?text=" + casino.name.substring(0, 2);
                        }}
                      />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    <div className="text-primary font-bold">+{casino.bonusPercent}%</div>
                    <div className="text-xs text-muted-foreground">{casino.bonusText}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-foreground">{casino.minDeposit}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      casino.wager === null
                        ? "bg-green-600/20 text-green-400"
                        : casino.wager <= 35
                        ? "bg-yellow-600/20 text-yellow-400"
                        : "bg-orange-500/20 text-orange-400"
                    }`}
                  >
                    {getWagerText(casino.wager)}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    <a
                      href={casino.playUrl}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Jouer
                    </a>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
