import React from 'react';

interface FloatingParticlesProps {
  variant?: 'hero' | 'peach' | 'subtle';
  className?: string;
}

export const FloatingParticles: React.FC<FloatingParticlesProps> = ({ variant = 'hero', className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {variant === 'hero' && (
        <>
          {/* Top-left orange dot cluster */}
          <div className="absolute top-12 left-10 w-2.5 h-2.5 rounded-full bg-[#FF6633]/60 animate-float-slow" />
          <div className="absolute top-20 left-16 w-1.5 h-1.5 rounded-full bg-[#FFA366]/70 animate-float-reverse" />
          <div className="absolute top-28 left-8 w-2 h-2 rounded-full bg-[#FF8C5A]/50 animate-float-slow" />

          {/* Plus mark near hero title */}
          <div className="absolute top-16 left-1/4 text-[#FFB088] text-sm font-bold opacity-60 animate-float-slow">
            +
          </div>

          {/* Top right floating sparkles & dots */}
          <div className="absolute top-14 right-1/4 w-2 h-2 rounded-full bg-[#FF6633]/50 animate-float-reverse" />
          <div className="absolute top-36 right-16 w-3 h-3 rounded-full bg-[#FFA366]/40 animate-float-slow" />
          <div className="absolute top-44 right-24 w-1.5 h-1.5 rounded-full bg-[#FF5522]/60 animate-float-reverse" />
          <div className="absolute top-24 right-32 text-[#FF9E66] text-xs font-bold opacity-70 animate-float-slow">
            ✦
          </div>

          {/* Bottom right dots cluster */}
          <div className="absolute bottom-16 right-20 w-3 h-3 rounded-full bg-[#FF6633]/60 animate-float-slow" />
          <div className="absolute bottom-8 right-28 w-2 h-2 rounded-full bg-[#FFAB7D]/50 animate-float-reverse" />
          <div className="absolute bottom-24 right-12 w-1.5 h-1.5 rounded-full bg-[#FF5522]/60 animate-float-slow" />
        </>
      )}

      {variant === 'peach' && (
        <>
          <div className="absolute top-10 left-12 w-2 h-2 rounded-full bg-[#FF6633]/40 animate-float-slow" />
          <div className="absolute bottom-12 left-24 w-2.5 h-2.5 rounded-full bg-[#FFA366]/50 animate-float-reverse" />
          <div className="absolute top-16 right-16 w-2 h-2 rounded-full bg-[#FF6633]/40 animate-float-slow" />
          <div className="absolute bottom-20 right-20 w-3 h-3 rounded-full bg-[#FF5522]/35 animate-float-reverse" />
          <div className="absolute top-1/2 right-12 text-[#FF9E66] text-xs opacity-50 font-bold">
            +
          </div>
        </>
      )}

      {variant === 'subtle' && (
        <>
          <div className="absolute top-8 left-16 w-2 h-2 rounded-full bg-[#FF6633]/30 animate-float-slow" />
          <div className="absolute bottom-10 right-16 w-2 h-2 rounded-full bg-[#FFA366]/40 animate-float-reverse" />
        </>
      )}
    </div>
  );
};
