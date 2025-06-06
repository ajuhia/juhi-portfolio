
import React, { useEffect, useRef } from 'react';

const BackgroundCircles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.005;
      
      const circles = container.querySelectorAll('[data-circle]');
      circles.forEach((circle, index) => {
        const element = circle as HTMLElement;
        const speed = 0.3 + (index % 3) * 0.2;
        const amplitude = 10 + (index % 2) * 5;
        
        const translateY = Math.sin(time * speed + index) * amplitude;
        const translateX = Math.cos(time * speed * 0.7 + index) * (amplitude * 0.5);
        
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
      {/* Large decorative circles */}
      <div
        data-circle
        className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 border-2 border-maroon-200/20 rounded-full opacity-60"
        style={{ animationDelay: '0s' }}
      />
      <div
        data-circle
        className="absolute top-1/4 right-16 w-24 h-24 sm:w-36 sm:h-36 border border-steel-blue-200/25 rounded-full opacity-50"
        style={{ animationDelay: '1s' }}
      />
      <div
        data-circle
        className="absolute bottom-20 left-1/4 w-40 h-40 sm:w-56 sm:h-56 border-2 border-maroon-300/15 rounded-full opacity-40"
        style={{ animationDelay: '2s' }}
      />
      
      {/* Medium floating circles */}
      <div
        data-circle
        className="absolute top-1/3 left-1/3 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-steel-blue-200/20 to-steel-blue-300/10 rounded-full opacity-70 blur-sm"
        style={{ animationDelay: '0.5s' }}
      />
      <div
        data-circle
        className="absolute bottom-1/3 right-1/3 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-maroon-200/15 to-maroon-300/8 rounded-full opacity-60 blur-sm"
        style={{ animationDelay: '1.5s' }}
      />
      <div
        data-circle
        className="absolute top-2/3 left-1/5 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-steel-blue-300/25 to-transparent rounded-full opacity-50"
        style={{ animationDelay: '2.5s' }}
      />
      
      {/* Small accent circles */}
      <div
        data-circle
        className="absolute top-16 right-1/4 w-8 h-8 sm:w-12 sm:h-12 border border-maroon-400/30 rounded-full opacity-80"
        style={{ animationDelay: '0.8s' }}
      />
      <div
        data-circle
        className="absolute bottom-16 left-2/3 w-6 h-6 sm:w-10 sm:h-10 bg-steel-blue-400/20 rounded-full opacity-70"
        style={{ animationDelay: '1.8s' }}
      />
      <div
        data-circle
        className="absolute top-1/2 right-12 w-14 h-14 sm:w-18 sm:h-18 border-2 border-steel-blue-300/20 rounded-full opacity-45"
        style={{ animationDelay: '3s' }}
      />
      
      {/* Outlined circles with pulse effect */}
      <div
        data-circle
        className="absolute bottom-1/4 right-1/5 w-28 h-28 sm:w-40 sm:h-40 border border-maroon-200/30 rounded-full opacity-30 animate-pulse"
        style={{ animationDelay: '4s', animationDuration: '4s' }}
      />
      <div
        data-circle
        className="absolute top-3/4 left-16 w-22 h-22 sm:w-32 sm:h-32 border border-steel-blue-200/25 rounded-full opacity-35 animate-pulse"
        style={{ animationDelay: '2s', animationDuration: '5s' }}
      />
    </div>
  );
};

export default BackgroundCircles;
