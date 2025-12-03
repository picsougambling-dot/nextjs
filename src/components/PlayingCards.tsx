'use client';

import { useMemo, useState, useEffect } from 'react';

const PlayingCards = () => {
  const suits = ['♠', '♥', '♦', '♣'];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Utiliser useMemo pour stabiliser les valeurs et éviter les re-renders
  // Ne générer les valeurs aléatoires qu'après le montage côté client
  const cards = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: 12 }, (_, i) => ({
      id: `card-${i}`,
      suit: suits[i % 4],
      color: i % 2 === 0 ? 'text-red-600/5 dark:text-red-400/5' : 'text-foreground/5',
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${15 + Math.random() * 10}s`,
    }));
  }, [mounted]); // Dépendre de mounted pour générer après hydratation

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`absolute top-0 ${card.color} text-6xl font-bold animate-card-fall`}
          style={{
            left: card.left,
            animationDelay: card.delay,
            animationDuration: card.duration,
            transform: 'translateY(-100px)',
          }}
        >
          {card.suit}
        </div>
      ))}
    </div>
  );
};

export default PlayingCards;
