
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
      
      // Create shifting hue values
      const hue1 = (time * 30) % 360;
      const hue2 = (time * 20 + 120) % 360;
      const hue3 = (time * 15 + 240) % 360;
      
      // Create pulsing opacity
      const opacity1 = 0.1 + Math.sin(time) * 0.05;
      const opacity2 = 0.08 + Math.cos(time * 1.2) * 0.04;
      const opacity3 = 0.06 + Math.sin(time * 0.8) * 0.03;

      // Apply dynamic gradients
      element.style.background = `
        radial-gradient(circle at 20% 30%, hsla(${hue1}, 60%, 70%, ${opacity1}) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, hsla(${hue2}, 55%, 65%, ${opacity2}) 0%, transparent 50%),
        radial-gradient(circle at 40% 90%, hsla(${hue3}, 50%, 60%, ${opacity3}) 0%, transparent 50%),
        linear-gradient(135deg, rgba(162, 60, 60, 0.03) 0%, rgba(106, 155, 189, 0.03) 100%)
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
