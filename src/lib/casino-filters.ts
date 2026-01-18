import { Casino } from "@/data/casinos";

/**
 * Filtre les casinos cachés (hidden: true)
 * Utilisé pour masquer temporairement des casinos (ex: plus de budget, retour prévu)
 */
export function filterHiddenCasinos(casinos: Casino[]): Casino[] {
  return casinos.filter((casino) => !casino.hidden);
}

