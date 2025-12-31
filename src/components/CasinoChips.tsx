'use client';

import { useMemo } from 'react';

const CasinoChips = () => {
  // Utiliser useMemo pour stabiliser les valeurs et éviter les re-renders
  const chips = useMemo(() => {
    return [
      { id: 'chip-1', color: 'from-red-600 to-red-800', position: 'top-[15%] left-[8%]', delay: '0s', duration: '8s' },
      { id: 'chip-2', color: 'from-blue-600 to-blue-800', position: 'top-[25%] right-[12%]', delay: '2s', duration: '10s' },
      { id: 'chip-3', color: 'from-green-600 to-green-800', position: 'top-[60%] left-[15%]', delay: '4s', duration: '9s' },
      { id: 'chip-4', color: 'from-purple-600 to-purple-800', position: 'top-[45%] right-[20%]', delay: '1s', duration: '11s' },
      { id: 'chip-5', color: 'from-yellow-600 to-yellow-800', position: 'top-[80%] left-[25%]', delay: '3s', duration: '12s' },
      { id: 'chip-6', color: 'from-pink-600 to-pink-800', position: 'top-[35%] right-[8%]', delay: '5s', duration: '10s' },
      { id: 'chip-7', color: 'from-indigo-600 to-indigo-800', position: 'top-[70%] right-[15%]', delay: '2.5s', duration: '9s' },
      { id: 'chip-8', color: 'from-orange-600 to-orange-800', position: 'top-[20%] left-[18%]', delay: '4.5s', duration: '11s' },
    ];
  }, []); // Tableau vide = calculé une seule fois

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {chips.map((chip) => (
        <div
          key={chip.id}
          className={`absolute w-12 h-12 rounded-full bg-gradient-to-br ${chip.color} opacity-[0.03] dark:opacity-[0.06] ${chip.position} animate-casino-float`}
          style={{
            animationDelay: chip.delay,
            animationDuration: chip.duration,
            boxShadow: '0 0 20px rgba(0,0,0,0.3)',
          }}
        >
          {/* Inner circle pour effet 3D */}
          <div className="absolute inset-2 rounded-full border-2 border-white/20" />
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-2 border-white/30 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CasinoChips;
