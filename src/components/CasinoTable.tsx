'use client';

import { Casino } from "@/data/casinos";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

interface CasinoTableProps {
  casinos: Casino[];
}

const getMedal = (index: number) => {
  if (index === 0) return "🥇";
  if (index === 1) return "🥈";
  if (index === 2) return "🥉";
  return `${index + 1}`;
};

export const CasinoTable = ({ casinos }: CasinoTableProps) => {
  const t = useTranslations('CasinoTable');
  
  const getWagerText = (wager: number | null): string => {
    if (wager === null) return t('noWager');
    return `x${wager}`;
  };

  return (
    <div className="glass-card rounded-3xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">#</th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">{t('headers.casino')}</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">{t('headers.bonus')}</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">{t('headers.minDeposit')}</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">{t('headers.conditions')}</th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">{t('headers.action')}</th>
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
                      {t('play')}
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
