import { Casino } from "@/data/casinos";

/**
 * Filtre les casinos cachés (hidden: true)
 * Utilisé pour masquer temporairement des casinos (ex: plus de budget, retour prévu)
 */
export function filterHiddenCasinos(casinos: Casino[]): Casino[] {
  return casinos.filter((casino) => !casino.hidden);
}

/**
 * Filtre les casinos selon le pays de l'utilisateur
 * Affiche un casino si :
 * - Un pays est détecté ET
 * - (Le casino n'a pas de restriction de pays OU le casino est disponible dans le pays de l'utilisateur)
 * 
 * @param casinos - Liste des casinos à filtrer
 * @param userCountryCode - Code pays ISO 2 lettres de l'utilisateur (ex: 'FR', 'DE', 'US')
 * @returns Liste des casinos disponibles pour le pays de l'utilisateur
 */
export function filterCasinosByCountry(
  casinos: Casino[],
  userCountryCode: string | null
): Casino[] {
  if (!userCountryCode) {
    // Si aucun pays n'est détecté, ne pas afficher de casinos
    return [];
  }

  return casinos.filter((casino) => {
    // Afficher le casino si :
    // - Le casino n'a pas de restriction de pays (availableCountries non défini ou vide)
    // - OU le casino est disponible dans le pays de l'utilisateur
    return (
      !casino.availableCountries ||
      casino.availableCountries.length === 0 ||
      casino.availableCountries.includes(userCountryCode)
    );
  });
}/**
 * Combine plusieurs filtres pour les casinos
 * Filtre par pays, masque les casinos cachés, etc.
 * 
 * @param casinos - Liste des casinos à filtrer
 * @param userCountryCode - Code pays ISO 2 lettres de l'utilisateur
 * @returns Liste des casinos filtrés
 */
export function filterCasinos(
  casinos: Casino[],
  userCountryCode: string | null
): Casino[] {
  let filtered = filterHiddenCasinos(casinos);
  filtered = filterCasinosByCountry(filtered, userCountryCode);
  return filtered;
}
