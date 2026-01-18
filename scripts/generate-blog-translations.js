import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Liste des langues supportées
const languages = ['en', 'de', 'es', 'it', 'pt', 'nl', 'fi', 'ru', 'lv', 'br'];

// Traductions de base pour chaque langue
const translations = {
  en: {
    seo: {
      title: "7 Essential Tips for Taking Advantage of No Wager Bonus 2026 | GigaBonus",
      description: "Complete 2026 guide to maximize your winnings with no wager bonuses. Learn how to identify real offers, choose secure casinos, and manage your bonuses responsibly.",
      keywords: "no wager bonus, no wager casino, free spins no conditions, no deposit bonus, casino 2026",
      ogTitle: "7 Essential Tips for Taking Advantage of No Wager Bonus 2026",
      ogDescription: "Complete 2026 guide to maximize your winnings with no wager bonuses."
    },
    header: {
      category: "Guide & Tips",
      date: "January 4, 2026 • 15 min read",
      title: "7 Essential Tips for Taking Advantage of <span class=\"text-primary\">No Wager Bonus</span> 2026",
      description: "Over 80% of players prefer winnings without wagering requirements. This complete guide will help you spot real advantages, secure your withdrawals, and maximize your winnings on licensed casinos."
    },
    image: {
      alt: "A man reviews different bonus offers proposed by online casinos"
    },
    toc: {
      title: "📋 Table of Contents",
      items: {
        comprendre: "1. Understand the principle of no wager bonus",
        identifier: "2. How to identify a real no wager bonus",
        conditions: "3. Analyze withdrawal conditions in 2026",
        casinos: "4. Choose licensed and secure casinos",
        filtres: "5. Use advanced filters to compare offers",
        freespins: "6. Maximize your winnings with no wager free spins",
        gestion: "7. Adopt responsible bonus management"
      }
    },
    summary: {
      title: "⚡ Quick Summary",
      points: {
        verify: {
          title: "Check the conditions",
          description: "Each bonus may have slight differences"
        },
        reliable: {
          title: "Reliable casinos",
          description: "Official license and good security practices"
        },
        filters: {
          title: "Advanced filters",
          description: "Sort offers according to your personal criteria"
        },
        responsible: {
          title: "Responsible management",
          description: "Strict budget and clear betting limits"
        }
      }
    },
    sections: {
      comprendre: {
        title: "1. Understand the principle of no wager bonus",
        content: {
          p1: "The <strong class=\"text-foreground\">no wager bonus</strong> represents an exceptional opportunity in the world of online casinos. Unlike traditional bonuses, this unique offer allows you to <strong class=\"text-primary\">withdraw winnings immediately</strong> without having to fulfill tedious wagering requirements.",
          p2: "A no wager bonus specifically means that winnings obtained through free spins or a bonus are immediately convertible to real money, without obligation to replay a certain number of times. This transparency gives players a significant advantage.",
          p3: "To understand this principle well, imagine receiving 20 free spins with no conditions: the generated winnings will be directly available in your account, without complex calculations or restrictions.",
          tip: "<strong class=\"text-primary\">💡 Pro tip:</strong> Always check the specific conditions of each no wager bonus, as even if the principle is simple, each casino may have slight differences."
        }
      },
      identifier: {
        title: "2. How to identify a real no wager bonus",
        content: {
          p1: "Identifying a genuine <strong class=\"text-foreground\">no wager bonus</strong> requires vigilance and careful reading of the conditions proposed by online casinos. A genuinely no wager bonus stands out for its transparency and total absence of complex replay conditions.",
          p2: "Don't be trapped by ambiguous formulations. A no wager bonus must be <strong class=\"text-primary\">100% transparent</strong>. If conditions seem complex, be wary and look for another offer."
        },
        checklist: {
          title: "Essential points to check:",
          items: [
            "Total absence of wagering conditions",
            "Immediately withdrawable winnings",
            "Clearly defined eligible games",
            "Precise maximum winning amount"
          ]
        }
      },
      cta: {
        title: "🎰 Top 3 Casinos with No Wager Bonus",
        subtitle: "Our verified recommendations for 2026",
        playNow: "Play Now",
        seeReview: "See Full Review →"
      },
      conditions: {
        title: "3. Analyze withdrawal conditions in 2026",
        content: {
          p1: "Withdrawal conditions in online casinos have become increasingly sophisticated in 2026. Understanding these conditions is essential to maximize your winnings and avoid any unpleasant surprises.",
          p2: "Consider comparing conditions between different casinos. The most modern platforms in 2026 offer <a href=\"/bonus-sans-wager\" class=\"text-primary hover:underline\">fast withdrawals and simplified processes</a>."
        },
        checklist: {
          title: "Key elements to examine:",
          items: [
            "<strong class=\"text-foreground\">Processing times</strong>: Each casino has its own validation and payment times",
            "<strong class=\"text-foreground\">Payment methods</strong>: Check available options and their potential fees",
            "<strong class=\"text-foreground\">Withdrawal limits</strong>: Some casinos impose daily or monthly caps",
            "<strong class=\"text-foreground\">Required documents</strong>: Anticipate necessary justifications to validate a withdrawal"
          ]
        }
      },
      casinos: {
        title: "4. Choose licensed and secure casinos",
        content: {
          p1: "Choosing a secure and legally licensed online casino is essential to protect your winnings. In 2026, security and legality are more important than ever.",
          p2: "<a href=\"/casinos-sans-kyc\" class=\"text-primary hover:underline\">KYC-free casinos</a> represent an interesting option for players concerned about their anonymity, while maintaining a high level of security."
        },
        checklist: {
          title: "Fundamental criteria:",
          items: [
            "<strong class=\"text-foreground\">Official license</strong>: Check for authorization issued by a recognized body (MGA, UKGC)",
            "<strong class=\"text-foreground\">Security protocols</strong>: SSL encryption and personal data protection",
            "<strong class=\"text-foreground\">Financial transparency</strong>: Varied and secure payment methods",
            "<strong class=\"text-foreground\">Reputation</strong>: Reviews and casino history"
          ]
        }
      },
      finalCTA: {
        title: "🎁 Ready to take advantage of the best no wager bonuses?",
        description: "Stop wasting time deciphering opaque conditions. Discover our selection of casinos with no wagering requirement bonuses, tested and approved by our team.",
        buttons: {
          seeAll: "See All No Wager Bonuses",
          compare: "Compare All Casinos"
        }
      },
      related: {
        title: "📚 Related Articles",
        articles: {
          bonusWager: {
            title: "No Wager Bonus 2026",
            description: "Complete offers guide"
          },
          astuces: {
            title: "Casino Tips",
            description: "Winning strategies"
          },
          cashback: {
            title: "Cashback Bonus",
            description: "Recover your losses"
          }
        }
      }
    }
  },
  de: {
    seo: {
      title: "7 unentbehrliche Tipps für die Nutzung von No-Wager-Bonus 2026 | GigaBonus",
      description: "Vollständiger 2026-Leitfaden zur Maximierung Ihrer Gewinne mit No-Wager-Boni. Erfahren Sie, wie man echte Angebote identifiziert, sichere Casinos wählt und Boni verantwortungsvoll verwaltet.",
      keywords: "No-Wager-Bonus, No-Wager-Casino, Free Spins ohne Bedingungen, Bonus ohne Einzahlung, Casino 2026",
      ogTitle: "7 unentbehrliche Tipps für die Nutzung von No-Wager-Bonus 2026",
      ogDescription: "Vollständiger 2026-Leitfaden zur Maximierung Ihrer Gewinne mit No-Wager-Boni."
    },
    header: {
      category: "Leitfaden & Tipps",
      date: "4. Januar 2026 • 15 Min. Lesezeit",
      title: "7 unentbehrliche Tipps für die Nutzung von <span class=\"text-primary\">No-Wager-Bonus</span> 2026",
      description: "Über 80% der französischsprachigen Spieler bevorzugen Gewinne ohne Umsatzbedingungen. Dieser vollständige Leitfaden hilft Ihnen, echte Vorteile zu erkennen, Abhebungen zu sichern und Ihre Gewinne auf lizenzierten Casinos zu maximieren."
    },
    image: {
      alt: "Ein Mann prüft verschiedene Bonusangebote von Online-Casinos"
    },
    toc: {
      title: "📋 Inhaltsverzeichnis",
      items: {
        comprendre: "1. Das Prinzip des No-Wager-Bonus verstehen",
        identifier: "2. Echten No-Wager-Bonus identifizieren",
        conditions: "3. Abhebungsbedingungen 2026 analysieren",
        casinos: "4. Lizenzierte und sichere Casinos wählen",
        filtres: "5. Erweiterte Filter zum Vergleich von Angeboten nutzen",
        freespins: "6. Gewinne mit No-Wager-Free Spins maximieren",
        gestion: "7. Verantwortungsvolle Bonusverwaltung übernehmen"
      }
    },
    summary: {
      title: "⚡ Schnelle Zusammenfassung",
      points: {
        verify: {
          title: "Bedingungen überprüfen",
          description: "Jeder Bonus kann leichte Unterschiede aufweisen"
        },
        reliable: {
          title: "Zuverlässige Casinos",
          description: "Offizielle Lizenz und gute Sicherheitspraktiken"
        },
        filters: {
          title: "Erweiterte Filter",
          description: "Angebote nach persönlichen Kriterien sortieren"
        },
        responsible: {
          title: "Verantwortungsvolle Verwaltung",
          description: "Strenge Budgets und klare Einsatzgrenzen"
        }
      }
    },
    sections: {
      comprendre: {
        title: "1. Das Prinzip des No-Wager-Bonus verstehen",
        content: {
          p1: "Der <strong class=\"text-foreground\">No-Wager-Bonus</strong> stellt eine außergewöhnliche Möglichkeit in der Welt der Online-Casinos dar. Im Gegensatz zu traditionellen Boni ermöglicht dieses einzigartige Angebot, Gewinne <strong class=\"text-primary\">sofort abzuheben</strong>, ohne mühsame Umsatzbedingungen erfüllen zu müssen.",
          p2: "Ein No-Wager-Bonus bedeutet konkret, dass Gewinne aus Free Spins oder einem Bonus sofort in echtes Geld umwandelbar sind, ohne die Verpflichtung, einen bestimmten Betrag erneut zu setzen. Diese Transparenz bietet Spielern einen signifikanten Vorteil.",
          p3: "Um dieses Prinzip gut zu verstehen, stellen Sie sich vor, 20 Free Spins ohne Bedingungen zu erhalten: Die generierten Gewinne sind direkt auf Ihrem Konto verfügbar, ohne komplexe Berechnungen oder Einschränkungen.",
          tip: "<strong class=\"text-primary\">💡 Profi-Tipp:</strong> Überprüfen Sie immer die spezifischen Bedingungen jedes No-Wager-Bonus, da auch wenn das Prinzip einfach ist, jedes Casino leichte Unterschiede haben kann."
        }
      },
      identifier: {
        title: "2. Echten No-Wager-Bonus identifizieren",
        content: {
          p1: "Die Identifizierung eines echten <strong class=\"text-foreground\">No-Wager-Bonus</strong> erfordert Wachsamkeit und sorgfältiges Lesen der von Online-Casinos vorgeschlagenen Bedingungen. Ein echt no-wager Bonus zeichnet sich durch Transparenz und das völlige Fehlen komplexer Umsatzbedingungen aus.",
          p2: "Lassen Sie sich nicht durch mehrdeutige Formulierungen täuschen. Ein No-Wager-Bonus muss <strong class=\"text-primary\">100% transparent</strong> sein. Wenn die Bedingungen komplex erscheinen, seien Sie vorsichtig und suchen Sie nach einem anderen Angebot."
        },
        checklist: {
          title: "Wesentliche Punkte zu überprüfen:",
          items: [
            "Völliges Fehlen von Umsatzbedingungen",
            "Sofort abhebbare Gewinne",
            "Klar definierte berechtigte Spiele",
            "Präziser maximaler Gewinnbetrag"
          ]
        }
      },
      cta: {
        title: "🎰 Top 3 Casinos mit No-Wager-Bonus",
        subtitle: "Unsere überprüften Empfehlungen für 2026",
        playNow: "Jetzt Spielen",
        seeReview: "Vollständige Bewertung →"
      },
      finalCTA: {
        title: "🎁 Bereit, die besten No-Wager-Boni zu nutzen?",
        description: "Hören Sie auf, Zeit mit der Entschlüsselung undurchsichtiger Bedingungen zu verschwenden. Entdecken Sie unsere Auswahl von Casinos mit No-Wager-Boni, getestet und von unserem Team genehmigt.",
        buttons: {
          seeAll: "Alle No-Wager-Boni anzeigen",
          compare: "Alle Casinos vergleichen"
        }
      },
      related: {
        title: "📚 Verwandte Artikel",
        articles: {
          bonusWager: {
            title: "No-Wager-Bonus 2026",
            description: "Vollständiger Angebotsleitfaden"
          },
          astuces: {
            title: "Casino-Tipps",
            description: "Gewinnstrategien"
          },
          cashback: {
            title: "Cashback-Bonus",
            description: "Verlieren Sie Ihre Verluste zurück"
          }
        }
      }
    }
  },
  es: {
    seo: {
      title: "7 consejos esenciales para aprovechar un bono sin wager 2026 | GigaBonus",
      description: "Guía completa 2026 para maximizar sus ganancias con bonos sin wager. Aprenda a identificar ofertas reales, elegir casinos seguros y gestionar sus bonos de manera responsable.",
      keywords: "bono sin wager, casino sin wager, free spins sin condiciones, bono sin depósito, casino 2026",
      ogTitle: "7 consejos esenciales para aprovechar un bono sin wager 2026",
      ogDescription: "Guía completa 2026 para maximizar sus ganancias con bonos sin wager."
    },
    header: {
      category: "Guía y Consejos",
      date: "4 de enero de 2026 • 15 min de lectura",
      title: "7 consejos esenciales para aprovechar un <span class=\"text-primary\">bono sin wager</span> 2026",
      description: "Más del 80% de los jugadores francófonos prefieren ganancias sin condiciones de apuesta. Esta guía completa le ayudará a detectar ventajas reales, asegurar sus retiros y maximizar sus ganancias en casinos licenciados."
    },
    image: {
      alt: "Un hombre revisa las diferentes ofertas de bonos propuestas por los casinos en línea"
    },
    toc: {
      title: "📋 Tabla de Contenidos",
      items: {
        comprendre: "1. Entender el principio del bono sin wager",
        identifier: "2. Cómo identificar un bono sin apuesta real",
        conditions: "3. Analizar las condiciones de retiro en 2026",
        casinos: "4. Elegir casinos licenciados y seguros",
        filtres: "5. Usar filtros avanzados para comparar ofertas",
        freespins: "6. Maximizar ganancias con free spins sin wager",
        gestion: "7. Adoptar gestión responsable de bono"
      }
    },
    summary: {
      title: "⚡ Resumen Rápido",
      points: {
        verify: {
          title: "Verifique las condiciones",
          description: "Cada bono puede tener ligeras diferencias"
        },
        reliable: {
          title: "Casinos confiables",
          description: "Licencia oficial y buenas prácticas de seguridad"
        },
        filters: {
          title: "Filtros avanzados",
          description: "Ordene ofertas según sus criterios personales"
        },
        responsible: {
          title: "Gestión responsable",
          description: "Presupuesto estricto y límites de apuesta claros"
        }
      }
    },
    sections: {
      comprendre: {
        title: "1. Entender el principio del bono sin wager",
        content: {
          p1: "El <strong class=\"text-foreground\">bono sin wager</strong> representa una oportunidad excepcional en el mundo de los casinos en línea. A diferencia de los bonos tradicionales, esta oferta única permite <strong class=\"text-primary\">retirar ganancias inmediatamente</strong> sin tener que cumplir condiciones de apuesta tediosas.",
          p2: "Un bono sin wager significa específicamente que las ganancias obtenidas a través de free spins o un bono son inmediatamente convertibles en dinero real, sin obligación de volver a apostar un cierto número de veces. Esta transparencia ofrece a los jugadores una ventaja significativa.",
          p3: "Para entender bien este principio, imagine recibir 20 free spins sin condiciones: las ganancias generadas estarán directamente disponibles en su cuenta, sin cálculos complejos o restricciones.",
          tip: "<strong class=\"text-primary\">💡 Consejo profesional:</strong> Verifique siempre las condiciones específicas de cada bono sin wager, ya que incluso si el principio es simple, cada casino puede tener ligeras diferencias."
        }
      },
      identifier: {
        title: "2. Cómo identificar un bono sin apuesta real",
        content: {
          p1: "Identificar un <strong class=\"text-foreground\">bono sin apuesta real</strong> requiere vigilancia y lectura cuidadosa de las condiciones propuestas por los casinos en línea. Un bono genuinamente sin apuesta se distingue por su transparencia y ausencia total de condiciones complejas de repetición.",
          p2: "No deje que lo engañen formulaciones ambiguas. Un bono sin apuesta debe ser <strong class=\"text-primary\">100% transparente</strong>. Si las condiciones parecen complejas, desconfíe y busque otra oferta."
        },
        checklist: {
          title: "Puntos esenciales para verificar:",
          items: [
            "Ausencia total de condiciones de apuesta",
            "Ganancias inmediatamente retirables",
            "Juegos elegibles claramente definidos",
            "Cantidad máxima de ganancias precisa"
          ]
        }
      },
      cta: {
        title: "🎰 Top 3 Casinos con Bono Sin Wager",
        subtitle: "Nuestras recomendaciones verificadas para 2026",
        playNow: "Jugar Ahora",
        seeReview: "Ver Reseña Completa →"
      },
      finalCTA: {
        title: "🎁 ¿Listo para aprovechar los mejores bonos sin wager?",
        description: "Deje de perder tiempo descifrando condiciones opacas. Descubra nuestra selección de casinos con bonos sin condiciones de apuesta, probados y aprobados por nuestro equipo.",
        buttons: {
          seeAll: "Ver Todos los Bonos Sin Wager",
          compare: "Comparar Todos los Casinos"
        }
      },
      related: {
        title: "📚 Artículos Relacionados",
        articles: {
          bonusWager: {
            title: "Bono Sin Wager 2026",
            description: "Guía completa de ofertas"
          },
          astuces: {
            title: "Consejos de Casino",
            description: "Estrategias ganadoras"
          },
          cashback: {
            title: "Bono Cashback",
            description: "Recupere sus pérdidas"
          }
        }
      }
    }
  }
};

// Fonction pour générer les traductions
function generateTranslations() {
  const baseDir = join(__dirname, '..', 'messages');
  
  languages.forEach(lang => {
    const translation = translations[lang];
    if (!translation) {
      console.log(`No translation found for ${lang}`);
      return;
    }
    
    const filePath = join(baseDir, `${lang}.json`);
    const existingContent = JSON.parse(readFileSync(filePath, 'utf8'));
    
    // Ajouter les traductions de l'article
    existingContent.Blog7AstucesBonusSansWager2026 = translation;
    
    writeFileSync(filePath, JSON.stringify(existingContent, null, 2), 'utf8');
    console.log(`Generated translations for ${lang}`);
  });
}

generateTranslations();
