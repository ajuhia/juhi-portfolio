
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

const ParticleSystem: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  const colors = [
    'rgba(162, 60, 60, 0.6)',   // maroon
    'rgba(106, 155, 189, 0.6)', // steel-blue
    'rgba(255, 255, 255, 0.4)', // white
    'rgba(162, 60, 60, 0.3)',   // lighter maroon
    'rgba(106, 155, 189, 0.3)', // lighter steel-blue
  ];

  const createParticle = (canvas: HTMLCanvasElement): Particle => {
    const side = Math.floor(Math.random() * 4);
    let x, y, vx, vy;

    // Spawn particles from edges
    switch (side) {
      case 0: // top
        x = Math.random() * canvas.width;
        y = -10;
        vx = (Math.random() - 0.5) * 0.5;
        vy = Math.random() * 0.3 + 0.1;
        break;
      case 1: // right
        x = canvas.width + 10;
        y = Math.random() * canvas.height;
        vx = -(Math.random() * 0.3 + 0.1);
        vy = (Math.random() - 0.5) * 0.5;
        break;
      case 2: // bottom
        x = Math.random() * canvas.width;
        y = canvas.height + 10;
        vx = (Math.random() - 0.5) * 0.5;
        vy = -(Math.random() * 0.3 + 0.1);
        break;
      default: // left
        x = -10;
        y = Math.random() * canvas.height;
        vx = Math.random() * 0.3 + 0.1;
        vy = (Math.random() - 0.5) * 0.5;
        break;
    }

    const maxLife = 300 + Math.random() * 200;
    return {
      x,
      y,
      vx,
      vy,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: maxLife,
      maxLife,
    };
  };

  const updateParticles = (canvas: HTMLCanvasElement) => {
    particlesRef.current = particlesRef.current.filter(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life--;

      // Fade out over time
      const lifeFactor = particle.life / particle.maxLife;
      particle.opacity = Math.max(0, lifeFactor * 0.7);

      // Remove particles that are out of bounds or dead
      return particle.life > 0 && 
             particle.x > -20 && particle.x < canvas.width + 20 &&
             particle.y > -20 && particle.y < canvas.height + 20;
    });

    // Add new particles
    if (particlesRef.current.length < 30) {
      particlesRef.current.push(createParticle(canvas));
    }
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    particlesRef.current.forEach(particle => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    updateParticles(canvas);
    drawParticles(ctx);

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  useEffect(() => {
    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default ParticleSystem;
