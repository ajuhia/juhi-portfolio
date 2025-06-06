
import React, { useEffect, useRef } from 'react';

const BackgroundCircles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.003;
      
      const circles = container.querySelectorAll('[data-circle]');
      circles.forEach((circle, index) => {
        const element = circle as HTMLElement;
        const speed = 0.2 + (index % 2) * 0.1;
        const amplitude = 8 + (index % 2) * 3;
        
        const translateY = Math.sin(time * speed + index) * amplitude;
        const translateX = Math.cos(time * speed * 0.6 + index) * (amplitude * 0.4);
        
        element.style.transform = `translate(${translateX}px, ${translateY}px)`;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Large circle at top right corner */}
      <div
        data-circle
        className="absolute -top-32 -right-32 w-96 h-96 sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-pink-100/40 via-pink-50/20 to-transparent rounded-full opacity-60"
        style={{ animationDelay: '0s' }}
      />
      
      {/* Large circle at bottom left corner */}
      <div
        data-circle
        className="absolute -bottom-32 -left-32 w-96 h-96 sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-tr from-pink-100/40 via-pink-50/20 to-transparent rounded-full opacity-50"
        style={{ animationDelay: '1s' }}
      />
      
      {/* Additional subtle accent circles for depth */}
      <div
        data-circle
        className="absolute top-1/4 right-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-pink-50/30 to-transparent rounded-full opacity-40 blur-sm"
        style={{ animationDelay: '2s' }}
      />
      
      <div
        data-circle
        className="absolute bottom-1/3 left-1/3 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-pink-100/25 to-transparent rounded-full opacity-35 blur-sm"
        style={{ animationDelay: '3s' }}
      />
    </div>
  );
};

export default BackgroundCircles;
