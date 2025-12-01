'use client';

import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Search, Dices, RotateCcw, Check, ChevronsUpDown } from "lucide-react";
import { CounterAnimation } from "./CounterAnimation";
import { useEffect, useState } from "react";
import { showFilterToast } from "./CasinoToast";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";
import { providersList } from "@/data/providers";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  bonusFilter: string;
  onBonusChange: (value: string) => void;
  wagerFilter: string;
  onWagerChange: (value: string) => void;
  methodFilter?: string;
  onMethodChange?: (value: string) => void;
  bookmakerFilter?: string;
  onBookmakerChange?: (value: string) => void;
  providerFilter?: string;
  onProviderChange?: (value: string) => void;
  filteredCount?: number;
}

export const FilterBar = ({
  searchTerm,
  onSearchChange,
  bonusFilter,
  onBonusChange,
  wagerFilter,
  onWagerChange,
  methodFilter,
  onMethodChange,
  bookmakerFilter,
  onBookmakerChange,
  providerFilter,
  onProviderChange,
  filteredCount = 0,
}: FilterBarProps) => {
  const [prevCount, setPrevCount] = useState(filteredCount);
  const [isFocused, setIsFocused] = useState(false);
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    if (filteredCount !== prevCount && prevCount !== 0) {
      showFilterToast(filteredCount);
    }
    setPrevCount(filteredCount);
  }, [filteredCount]);

  const hasActiveFilters = searchTerm !== "" || bonusFilter !== "all" || wagerFilter !== "all" || 
    (methodFilter && methodFilter !== "all") || (bookmakerFilter && bookmakerFilter !== "all") ||
    (providerFilter && providerFilter !== "all");

  const handleReset = () => {
    onSearchChange("");
    onBonusChange("all");
    onWagerChange("all");
    if (onMethodChange) onMethodChange("all");
    if (onBookmakerChange) onBookmakerChange("all");
    if (onProviderChange) onProviderChange("all");
  };

  const showMethodFilter = methodFilter !== undefined && onMethodChange !== undefined;
  const showBookmakerFilter = bookmakerFilter !== undefined && onBookmakerChange !== undefined;
  const showProviderFilter = providerFilter !== undefined && onProviderChange !== undefined;
  
  const filterCount = 3 + (showMethodFilter ? 1 : 0) + (showBookmakerFilter ? 1 : 0) + (showProviderFilter ? 1 : 0);
  const gridCols = filterCount === 6 ? 'lg:grid-cols-6' : filterCount === 5 ? 'lg:grid-cols-5' : filterCount === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3';
  
  return (
    <div className="glass-card rounded-2xl p-4 sm:p-6 mb-8 space-y-4">
      {/* Results Counter */}
      {filteredCount > 0 && (
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pb-2 border-b border-border/50">
          <Dices className="w-4 h-4 text-primary animate-dice-roll" />
          <span>
            <CounterAnimation end={filteredCount} duration={800} /> casino{filteredCount > 1 ? 's' : ''} trouvé{filteredCount > 1 ? 's' : ''}
          </span>
        </div>
      )}
      
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 ${gridCols}`}>
        {/* Search */}
        <div className="relative group">
          {isFocused ? (
            <Dices className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary w-4 h-4 animate-dice-roll" />
          ) : (
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 group-hover:text-primary transition-colors" />
          )}
          <Input
            type="text"
            placeholder="Rechercher un casino..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="pl-10 bg-background/50 border-border focus:border-primary transition-all"
          />
        </div>

        {/* Bonus Filter */}
        <Select value={bonusFilter} onValueChange={onBonusChange}>
          <SelectTrigger className="bg-background/50 border-border focus:border-primary h-10" aria-label="Filtre bonus">
            <SelectValue placeholder="Filtre bonus" />
          </SelectTrigger>
          <SelectContent className="max-h-[250px] sm:max-h-[300px]">
            <SelectItem value="all">Tous les bonus</SelectItem>
            <SelectItem value="100">≥ 100%</SelectItem>
            <SelectItem value="200">≥ 200%</SelectItem>
            <SelectItem value="300">≥ 300%</SelectItem>
            <SelectItem value="400">≥ 400%</SelectItem>
            <SelectItem value="500">≥ 500%</SelectItem>
          </SelectContent>
        </Select>

        {/* Wager Filter */}
        <Select value={wagerFilter} onValueChange={onWagerChange}>
          <SelectTrigger className="bg-background/50 border-border focus:border-primary h-10" aria-label="Filtre wager">
            <SelectValue placeholder="Filtre wager" />
          </SelectTrigger>
          <SelectContent className="max-h-[250px] sm:max-h-[300px]">
            <SelectItem value="all">Tous les wagers</SelectItem>
            <SelectItem value="none">Sans wager</SelectItem>
            <SelectItem value="10">x10</SelectItem>
            <SelectItem value="20">x20</SelectItem>
            <SelectItem value="25">x25</SelectItem>
            <SelectItem value="30">x30</SelectItem>
            <SelectItem value="35">x35</SelectItem>
            <SelectItem value="40">x40</SelectItem>
            <SelectItem value="50">x50</SelectItem>
          </SelectContent>
        </Select>

        {/* Payment Method Filter */}
        {showMethodFilter && methodFilter && onMethodChange && (
          <Select value={methodFilter} onValueChange={onMethodChange}>
            <SelectTrigger className="bg-background/50 border-border focus:border-primary h-10" aria-label="Méthode de paiement">
              <SelectValue placeholder="Méthode de paiement" />
            </SelectTrigger>
            <SelectContent className="max-h-[250px] sm:max-h-[300px]">
              <SelectItem value="all">Toutes les méthodes</SelectItem>
              <SelectItem value="CB">CB</SelectItem>
              <SelectItem value="crypto">Crypto</SelectItem>
              <SelectItem value="cashlib">Cashlib</SelectItem>
              <SelectItem value="neosurf">Neosurf</SelectItem>
              <SelectItem value="paysafe">PaysafeCard</SelectItem>
              <SelectItem value="virement">Virement</SelectItem>
              <SelectItem value="skrill">Skrill</SelectItem>
              <SelectItem value="neteler">Neteler</SelectItem>
              <SelectItem value="jetonbank">JetonBank</SelectItem>
              <SelectItem value="myfinity">MiFinity</SelectItem>
            </SelectContent>
          </Select>
        )}

        {/* Bookmaker Filter */}
        {showBookmakerFilter && bookmakerFilter && onBookmakerChange && (
          <Select value={bookmakerFilter} onValueChange={onBookmakerChange}>
            <SelectTrigger className="bg-background/50 border-border focus:border-primary h-10" aria-label="Type de casino">
              <SelectValue placeholder="Type de casino" />
            </SelectTrigger>
            <SelectContent className="max-h-[250px] sm:max-h-[300px]">
              <SelectItem value="all">Tous les casinos</SelectItem>
              <SelectItem value="bookmaker">Casino + Bookmaker</SelectItem>
              <SelectItem value="casino-only">Casino uniquement</SelectItem>
            </SelectContent>
          </Select>
        )}

        {/* Provider Filter */}
        {showProviderFilter && providerFilter && onProviderChange && (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between bg-background/50 border-border hover:bg-background/70 hover:border-primary focus:border-primary transition-all h-10 text-sm"
              >
                <span className="truncate">
                  {providerFilter !== "all"
                    ? providersList[providerFilter]
                    : "Fournisseur"}
                </span>
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent 
              className="w-[var(--radix-popover-trigger-width)] max-w-[calc(100vw-2rem)] sm:w-[320px] p-0 border border-border bg-background/95 backdrop-blur-lg shadow-xl z-50 animate-in fade-in-0 zoom-in-95" 
              align="center"
              sideOffset={8}
            >
              <Command className="rounded-lg border-none">
                <CommandInput 
                  placeholder="Rechercher..." 
                  className="border-b border-border/50 h-10 text-sm"
                />
                <CommandList className="max-h-[250px] sm:max-h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-muted/20">
                  <CommandEmpty className="py-6 text-center text-sm text-muted-foreground">
                    Aucun fournisseur trouvé.
                  </CommandEmpty>
                  <CommandGroup className="p-2">
                    <CommandItem
                      value="all"
                      onSelect={() => {
                        onProviderChange("all");
                        setOpen(false);
                      }}
                      className="cursor-pointer"
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4 text-primary transition-opacity",
                          providerFilter === "all" ? "opacity-100" : "opacity-0"
                        )}
                      />
                      <span className="font-medium text-sm">Tous les fournisseurs</span>
                    </CommandItem>
                    {Object.entries(providersList).map(([key, value]) => (
                      <CommandItem
                        key={key}
                        value={value}
                        onSelect={() => {
                          onProviderChange(key);
                          setOpen(false);
                        }}
                        className="cursor-pointer text-sm"
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4 text-primary transition-opacity",
                            providerFilter === key ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {value}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        )}
      </div>

      {/* Reset Button */}
      {hasActiveFilters && (
        <div className="flex justify-center pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 group text-xs sm:text-sm"
          >
            <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
            <span className="hidden sm:inline">Réinitialiser les filtres</span>
            <span className="inline sm:hidden">Réinitialiser</span>
          </Button>
        </div>
      )}
    </div>
  );
};
