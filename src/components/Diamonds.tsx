'use client';

import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import diamondWebp from '@/assets/diamond.webp';

const Diamonds = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Utiliser useMemo pour stabiliser les valeurs et éviter les re-renders
  // Ne générer les valeurs aléatoires qu'après le montage côté client
  const diamonds = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: 8 }, (_, i) => ({
      id: `diamond-${i}`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 12}s`,
      duration: `${18 + Math.random() * 12}s`,
      // Même logique de couleur que PlayingCards : rouge pour les pairs (i % 2 === 0), normal pour les impairs
      isRed: i % 2 === 0,
    }));
  }, [mounted]); // Dépendre de mounted pour générer après hydratation

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {diamonds.map((diamond) => (
        <div
          key={diamond.id}
          className="absolute top-0 animate-card-fall"
          style={{
            left: diamond.left,
            animationDelay: diamond.delay,
            animationDuration: diamond.duration,
            transform: 'translateY(-100px)',
          }}
        >
          <Image 
            src={diamondWebp}
            alt="" 
            width={128}
            height={128}
            className="w-16 h-16 object-contain"
            style={{
              opacity: '0.05',
              filter: diamond.isRed 
                ? 'brightness(0) saturate(100%) invert(27%) sepia(100%) saturate(5000%) hue-rotate(340deg) brightness(1.2)' 
                : 'brightness(0)',
            }}
            loading="lazy"
            quality={75}
            sizes="64px"
          />
        </div>
      ))}
    </div>
  );
};

export default Diamonds;
