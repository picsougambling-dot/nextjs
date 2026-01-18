// Script pour générer les traductions de base pour toutes les pages de dépôt
// Ce script crée la structure de base, les traductions complètes doivent être ajoutées manuellement

const fs = require('fs');
const path = require('path');

const locales = ['de', 'es', 'ru', 'it', 'pt', 'br', 'nl', 'lv', 'fi'];
const depotPages = ['carte', 'crypto', 'skrill', 'neteller', 'neosurf', 'cashlib', 'paysafecard', 'virement', 'jetonbank', 'mifinity'];

// Structure de base pour chaque page (sera complétée avec les vraies traductions)
const baseStructure = {
  title: "",
  seoTitle: "",
  seoDescription: "",
  seoKeywords: "",
  ogTitle: "",
  ogDescription: "",
  twitterTitle: "",
  twitterDescription: "",
  h1: "",
  intro: {
    p1: "",
    p2: ""
  },
  advantages: {
    advantage1: "",
    advantage2: "",
    advantage3: "",
    advantage4: ""
  },
  results: {
    found: "{count} casino found",
    foundPlural: "{count} casinos found"
  },
  tabs: {
    cards: "Card View",
    table: "Table View"
  },
  loadMore: "Show more casinos ({remaining} remaining)",
  noResults: "No casino matches your search criteria.",
  sections: {
    // Structure sera complétée selon la page
  },
  schema: {
    headline: "",
    description: "",
    ratingValue: "9.0"
  },
  seoEnriched: {
    paymentName: "",
    description: "",
    advantages: []
  }
};

console.log('Script de génération des traductions pour les pages de dépôt');
console.log('Ce script sert de référence. Les traductions doivent être ajoutées manuellement dans les fichiers JSON.');
console.log(`Pages à traduire: ${depotPages.join(', ')}`);
console.log(`Langues: ${locales.join(', ')}`);
console.log(`Total: ${depotPages.length} pages × ${locales.length} langues = ${depotPages.length * locales.length} traductions`);

