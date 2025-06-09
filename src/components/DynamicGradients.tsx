
import React, { useEffect, useRef } from 'react';

const DynamicGradients: React.FC = () => {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = gradientRef.current;
    if (!element) return;

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      
      // Create shifting hue values for warm brown tones
      const hue1 = (30 + Math.sin(time) * 15) % 360; // warm browns
      const hue2 = (35 + Math.cos(time * 1.2) * 20) % 360; // beiges
      const hue3 = (25 + Math.sin(time * 0.8) * 10) % 360; // earth tones
      
      // Create pulsing opacity
      const opacity1 = 0.1 + Math.sin(time) * 0.05;
      const opacity2 = 0.08 + Math.cos(time * 1.2) * 0.04;
      const opacity3 = 0.06 + Math.sin(time * 0.8) * 0.03;

      // Apply dynamic gradients with warm brown theme
      element.style.background = `
        radial-gradient(circle at 20% 30%, hsla(${hue1}, 60%, 70%, ${opacity1}) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, hsla(${hue2}, 55%, 65%, ${opacity2}) 0%, transparent 50%),
        radial-gradient(circle at 40% 90%, hsla(${hue3}, 50%, 60%, ${opacity3}) 0%, transparent 50%),
        linear-gradient(135deg, rgba(139, 105, 20, 0.03) 0%, rgba(160, 132, 92, 0.03) 100%)
      `;

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
      ref={gradientRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        mixBlendMode: 'multiply',
        transition: 'background 0.1s ease-out',
      }}
    />
  );
};

export default DynamicGradients;
