'use client';

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
}

interface GoldParticlesProps {
  trigger: boolean;
  onComplete?: () => void;
}

export const GoldParticles = ({ trigger, onComplete }: GoldParticlesProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!trigger) return;

    // Generate 8 particles in a burst pattern
    const newParticles = Array.from({ length: 8 }, (_, i) => {
      const angle = (i * 45 * Math.PI) / 180; // 360/8 = 45 degrees apart
      const distance = 40;
      return {
        id: Date.now() + i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      };
    });

    setParticles(newParticles);

    // Clean up particles after animation
    const timeout = setTimeout(() => {
      setParticles([]);
      onComplete?.();
    }, 600);

    return () => clearTimeout(timeout);
  }, [trigger, onComplete]);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 shadow-lg shadow-yellow-500/50"
          style={{
            animation: "gold-particle 600ms ease-out forwards",
            "--particle-x": `${particle.x}px`,
            "--particle-y": `${particle.y}px`,
          } as React.CSSProperties}
        />
      ))}
      <style>{`
        @keyframes gold-particle {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          50% {
            transform: translate(calc(-50% + var(--particle-x)), calc(-50% + var(--particle-y))) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% + var(--particle-x)), calc(-50% + var(--particle-y) - 20px)) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
