import { useEffect, useRef, useState } from 'react';

export const useLazyVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px', // Charge 200px avant d'être visible
        threshold: 0.01
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { videoRef, isVisible };
};
