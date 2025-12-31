'use client';

import Image from "next/image";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <Image 
        src="/gigabonus-logo.webp" 
        alt="GigaBonus" 
        width={140}
        height={140}
        className="w-[140px] h-auto"
        style={{ 
          willChange: 'transform',
          animation: 'breathing 3s ease-in-out infinite'
        }}
        priority
      />
    </div>
  );
};

export default PageLoader;
