'use client';

import { useState, useEffect } from 'react';
import CasinoChips from './CasinoChips';
import PlayingCards from './PlayingCards';
import Diamonds from './Diamonds';

const DecorativeShapes = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Ne rendre les composants décoratifs qu'après l'hydratation pour éviter les erreurs d'hydratation
  if (!mounted) return null;

  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Subtle gradient orbs */}
        <div 
          className="absolute top-40 right-20 w-96 h-96 rounded-full opacity-5 animate-float"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
            animationDelay: '0s',
            animationDuration: '12s',
            filter: 'blur(80px)',
          }}
        />
        <div 
          className="absolute bottom-40 left-20 w-80 h-80 rounded-full opacity-5 animate-float"
          style={{
            background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)',
            animationDelay: '6s',
            animationDuration: '15s',
            filter: 'blur(80px)',
          }}
        />

        {/* Animated dice in corners */}
        <div className="absolute top-8 right-8 w-8 h-8 opacity-[0.08] animate-dice-roll">
          <div className="w-full h-full bg-primary/30 rounded-md transform rotate-45" />
        </div>
        <div className="absolute top-8 left-8 w-6 h-6 opacity-[0.08] animate-dice-roll" style={{ animationDelay: '1.5s' }}>
          <div className="w-full h-full bg-accent/30 rounded-md transform rotate-45" />
        </div>
      </div>

      <CasinoChips />
      <PlayingCards />
      <Diamonds />
    </>
  );
};

export default DecorativeShapes;