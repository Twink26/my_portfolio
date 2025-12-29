'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
  opacity: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  life: number;
  maxLife: number;
  opacity: number;
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | undefined>(undefined);
  const lastShootingStarTime = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Initialize stars
    const initStars = () => {
      starsRef.current = Array.from({ length: 90 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 2000,
        size: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.8 + 0.2,
      }));
    };

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = Array.from({ length: 30 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        life: Math.random() * 100,
        maxLife: 100 + Math.random() * 100,
      }));
    };

    initStars();
    initParticles();

    // Create a new shooting star from top-left corner
    const createShootingStar = () => {
      const startX = -50;
      const startY = -50;
      const angle = Math.random() * 0.3 + 0.4; // Angle between 0.4 and 0.7 radians (diagonal)
      const speed = 2 + Math.random() * 1.5;
      
      shootingStarsRef.current.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: 30 + Math.random() * 40,
        life: 0,
        maxLife: 200 + Math.random() * 100,
        opacity: 0.8 + Math.random() * 0.2,
      });
    };

    // Mouse move handler for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    // Create particle burst on mouse move
    const createParticleBurst = (x: number, y: number) => {
      for (let i = 0; i < 3; i++) {
        particlesRef.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          life: 0,
          maxLife: 30 + Math.random() * 20,
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.fillStyle = '#0a0a1a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw gradient overlay
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) * 0.8
      );
      gradient.addColorStop(0, 'rgba(3, 5, 61, 0.56)'); // Purple
      gradient.addColorStop(0.5, 'rgba(1, 6, 39, 0.86)'); // Blue
      gradient.addColorStop(1, 'rgba(1, 1, 20, 0.9)'); // Dark
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      starsRef.current.forEach((star) => {
        star.z -= star.speed;
        if (star.z <= 0) {
          star.z = 2000;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }

        const x = (star.x - canvas.width / 2) * (1000 / star.z) + canvas.width / 2;
        const y = (star.y - canvas.height / 2) * (1000 / star.z) + canvas.height / 2;
        const size = (star.size * 1000) / star.z;

        // Parallax effect based on mouse position
        const parallaxX = (mouseRef.current.x - canvas.width / 2) * 0.0001;
        const parallaxY = (mouseRef.current.y - canvas.height / 2) * 0.0001;
        const finalX = x + parallaxX * star.z;
        const finalY = y + parallaxY * star.z;

        if (finalX >= 0 && finalX <= canvas.width && finalY >= 0 && finalY <= canvas.height) {
          ctx.beginPath();
          ctx.arc(finalX, finalY, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(196, 181, 253, ${star.opacity})`; // Lavender
          ctx.fill();

          // Add glow effect for larger stars
          if (size > 1.5) {
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(79, 60, 158, 0.8)';
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      });

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life += 1;

        const alpha = 1 - particle.life / particle.maxLife;
        const size = particle.size * alpha;

        if (alpha > 0 && particle.x >= 0 && particle.x <= canvas.width && particle.y >= 0 && particle.y <= canvas.height) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(139, 92, 246, ${alpha * 0.8})`; // Violet
          ctx.shadowBlur = 5;
          ctx.shadowColor = 'rgba(139, 92, 246, 0.6)';
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        return particle.life < particle.maxLife;
      });

      // Create occasional particle bursts
      if (Math.random() < 0.02) {
        createParticleBurst(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        );
      }

      // Update and draw shooting stars
      shootingStarsRef.current = shootingStarsRef.current.filter((star) => {
        star.x += star.vx;
        star.y += star.vy;
        star.life += 1;

        const progress = star.life / star.maxLife;
        const alpha = star.opacity * (1 - progress);
        const currentLength = star.length * (1 - progress * 0.5);

        if (alpha > 0 && star.x < canvas.width + 100 && star.y < canvas.height + 100) {
          // Draw shooting star with trail
          const gradient = ctx.createLinearGradient(
            star.x - star.vx * currentLength,
            star.y - star.vy * currentLength,
            star.x,
            star.y
          );
          gradient.addColorStop(0, `rgba(196, 181, 253, 0)`);
          gradient.addColorStop(0.3, `rgba(196, 181, 253, ${alpha * 0.3})`);
          gradient.addColorStop(1, `rgba(139, 92, 246, ${alpha})`);

          ctx.beginPath();
          ctx.moveTo(star.x - star.vx * currentLength, star.y - star.vy * currentLength);
          ctx.lineTo(star.x, star.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5;
          ctx.lineCap = 'round';
          ctx.shadowBlur = 8;
          ctx.shadowColor = `rgba(139, 92, 246, ${alpha * 0.6})`;
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Draw bright head
          ctx.beginPath();
          ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(196, 181, 253, ${alpha})`;
          ctx.shadowBlur = 6;
          ctx.shadowColor = `rgba(196, 181, 253, ${alpha * 0.8})`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        return star.life < star.maxLife && star.x < canvas.width + 100 && star.y < canvas.height + 100;
      });

      // Spawn new shooting stars occasionally (not too frequent)
      const now = Date.now();
      if (now - lastShootingStarTime.current > 3000 + Math.random() * 2000) {
        createShootingStar();
        lastShootingStarTime.current = now;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    // Create particle burst on mouse move (throttled)
    let lastBurstTime = 0;
    const handleMouseMoveBurst = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastBurstTime > 100) {
        createParticleBurst(e.clientX, e.clientY);
        lastBurstTime = now;
      }
    };
    window.addEventListener('mousemove', handleMouseMoveBurst);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleMouseMoveBurst);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(180deg,rgb(1, 1, 58) 0%,rgb(2, 15, 60) 50%,rgb(0, 0, 0) 100%)' }}
      />
      
      {/* Grid overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(91, 51, 251, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(81, 47, 216, 0.26) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}