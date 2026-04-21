import React, { useRef } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard3D({ children, className = '' }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    
    const rotateX = ((y - midY) / midY) * -12;
    const rotateY = ((x - midX) / midX) * 12;

    cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    cardRef.current.style.boxShadow = '0 10px 30px -10px rgba(255, 215, 0, 0.4)';
    cardRef.current.style.borderColor = '#FFD700';
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
    cardRef.current.style.boxShadow = 'none';
    cardRef.current.style.borderColor = 'rgba(255, 215, 0, 0.2)';
  };

  return (
    <div className={`perspective-1000 w-full ${className}`}>
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="card-3d-inner w-full h-full bg-[#111111] rounded-2xl border border-[rgba(255,215,0,0.2)] p-6 md:p-8 flex flex-col will-change-transform"
      >
        {children}
      </div>
    </div>
  );
}
