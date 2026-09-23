import React, { useRef, useState, useEffect, useCallback } from 'react';

interface LiquidMetalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'white' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const LiquidMetalButton: React.FC<LiquidMetalButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  icon,
  onClick,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const mousePos = useRef({ x: 0.5, y: 0.5 });
  const animFrame = useRef<number | null>(null);
  const time = useRef(0);
  const ripples = useRef<{ x: number; y: number; age: number; maxAge: number }[]>([]);

  // Size styling
  const sizeClasses = {
    sm: 'px-4 py-1.5 text-xs font-semibold rounded-full',
    md: 'px-6 py-2.5 text-sm font-semibold rounded-full',
    lg: 'px-8 py-3.5 text-base font-bold rounded-full',
  }[size];

  // Base colors
  const textClasses = {
    primary: 'text-white shadow-sm',
    secondary: 'text-[#FF5522] border border-[#FF6633]/30 hover:border-[#FF5522]',
    white: 'text-[#2A2F35] shadow-md border border-slate-100 hover:text-[#FF5522]',
    outline: 'text-[#FF5522] border-2 border-[#FF6633]',
  }[variant];

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    mousePos.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Add shockwave ripple
    ripples.current.push({ x, y, age: 0, maxAge: 45 });
    
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 200);

    if (onClick) {
      onClick(e);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let active = true;

    const render = () => {
      if (!active) return;
      time.current += isHovered ? 0.045 : 0.015;

      const w = canvas.width;
      const h = canvas.height;
      if (w === 0 || h === 0) {
        animFrame.current = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, w, h);

      // Create base metallic gradient
      const mx = mousePos.current.x * w;
      const my = mousePos.current.y * h;

      if (variant === 'primary') {
        // Vibrant Liquid Molten Copper / Orange Chrome
        const grad = ctx.createRadialGradient(
          isHovered ? mx : w * 0.5,
          isHovered ? my : h * 0.3,
          4,
          w * 0.5,
          h * 0.5,
          w * 0.8
        );

        const shimmer = Math.sin(time.current) * 0.15;
        grad.addColorStop(0, '#FFA877');
        grad.addColorStop(0.35 + shimmer, '#FF6633');
        grad.addColorStop(0.7, '#FF4500');
        grad.addColorStop(1, '#D93800');

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        // Liquid metal flowing ribbons/waves
        ctx.save();
        ctx.globalCompositeOperation = 'overlay';
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          const wavePhase = time.current * 1.5 + (i * Math.PI) / 2;
          const amp = (isHovered ? 12 : 6) + Math.sin(time.current + i) * 3;
          
          ctx.moveTo(0, h * 0.5);
          for (let x = 0; x <= w; x += 8) {
            const distToMouse = isHovered ? Math.hypot(x - mx, h * 0.5 - my) / (w * 0.5) : 1;
            const mouseInfluence = isHovered ? Math.max(0, 1 - distToMouse) * 10 : 0;
            const y = h * 0.5 + Math.sin(x * 0.04 + wavePhase) * amp + mouseInfluence;
            ctx.lineTo(x, y);
          }
          ctx.lineTo(w, h);
          ctx.lineTo(0, h);
          ctx.closePath();

          const waveGrad = ctx.createLinearGradient(0, 0, w, 0);
          waveGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
          waveGrad.addColorStop(0.5, 'rgba(255, 220, 180, 0.1)');
          waveGrad.addColorStop(1, 'rgba(255, 255, 255, 0.4)');
          ctx.fillStyle = waveGrad;
          ctx.fill();
        }
        ctx.restore();

        // Top specular metallic glint
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        const specularGrad = ctx.createLinearGradient(0, 0, 0, h);
        specularGrad.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
        specularGrad.addColorStop(0.4, 'rgba(255, 255, 255, 0.05)');
        specularGrad.addColorStop(1, 'rgba(0, 0, 0, 0.25)');
        ctx.fillStyle = specularGrad;
        ctx.fillRect(0, 0, w, h);
        ctx.restore();

      } else if (variant === 'white') {
        // Pearlescent Liquid Mercury / White Metallic
        const grad = ctx.createRadialGradient(
          isHovered ? mx : w * 0.5,
          isHovered ? my : h * 0.3,
          2,
          w * 0.5,
          h * 0.5,
          w * 0.7
        );
        grad.addColorStop(0, '#FFFFFF');
        grad.addColorStop(0.5, '#FFF7F2');
        grad.addColorStop(0.85, '#FFE9DF');
        grad.addColorStop(1, '#FED8C8');

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        // Fluid pearlescent highlights
        if (isHovered) {
          ctx.save();
          ctx.globalCompositeOperation = 'overlay';
          ctx.beginPath();
          ctx.arc(mx, my, 40, 0, Math.PI * 2);
          const gloss = ctx.createRadialGradient(mx, my, 0, mx, my, 40);
          gloss.addColorStop(0, 'rgba(255, 102, 51, 0.35)');
          gloss.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.fillStyle = gloss;
          ctx.fill();
          ctx.restore();
        }
      } else {
        // Outline / Secondary: Liquid silver with warm orange tinting
        ctx.fillStyle = isHovered ? 'rgba(255, 242, 236, 0.85)' : 'rgba(255, 255, 255, 0.4)';
        ctx.fillRect(0, 0, w, h);

        if (isHovered) {
          ctx.save();
          ctx.globalCompositeOperation = 'multiply';
          const rad = ctx.createRadialGradient(mx, my, 0, mx, my, w * 0.7);
          rad.addColorStop(0, 'rgba(255, 102, 51, 0.25)');
          rad.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.fillStyle = rad;
          ctx.fillRect(0, 0, w, h);
          ctx.restore();
        }
      }

      // Render click shockwaves (ripples)
      for (let i = ripples.current.length - 1; i >= 0; i--) {
        const rip = ripples.current[i];
        rip.age++;
        const progress = rip.age / rip.maxAge;
        const radius = progress * Math.max(w, h) * 1.2;
        const alpha = Math.max(0, 1 - progress);

        ctx.save();
        ctx.beginPath();
        ctx.arc(rip.x * w, rip.y * h, radius, 0, Math.PI * 2);
        ctx.lineWidth = 4 * (1 - progress);
        ctx.strokeStyle = variant === 'primary' 
          ? `rgba(255, 255, 255, ${alpha * 0.85})` 
          : `rgba(255, 102, 51, ${alpha * 0.7})`;
        ctx.stroke();
        ctx.restore();

        if (rip.age >= rip.maxAge) {
          ripples.current.splice(i, 1);
        }
      }

      animFrame.current = requestAnimationFrame(render);
    };

    animFrame.current = requestAnimationFrame(render);

    return () => {
      active = false;
      if (animFrame.current) {
        cancelAnimationFrame(animFrame.current);
      }
    };
  }, [isHovered, variant]);

  // Adjust canvas pixel resolution on resize
  useEffect(() => {
    const handleResize = () => {
      if (!buttonRef.current || !canvasRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvasRef.current.width = rect.width * dpr;
      canvasRef.current.height = rect.height * dpr;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <button
      ref={buttonRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      className={`relative group overflow-hidden inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 transform select-none whitespace-nowrap active:scale-[0.97] ${
        isPressed ? 'scale-95' : ''
      } ${
        isHovered
          ? 'shadow-[0_12px_28px_-6px_rgba(255,102,51,0.45)] -translate-y-0.5'
          : 'shadow-[0_4px_12px_-2px_rgba(255,102,51,0.22)]'
      } ${sizeClasses} ${textClasses} ${className}`}
      {...props}
    >
      {/* Liquid Metal Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none rounded-[inherit]"
      />

      {/* Fluid Metallic Sheen Reflection Overlay */}
      <span
        className={`absolute inset-0 w-full h-full rounded-[inherit] pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        } bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out`}
      />

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2 tracking-tight transition-transform duration-200 group-active:scale-95 font-medium">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
    </button>
  );
};
