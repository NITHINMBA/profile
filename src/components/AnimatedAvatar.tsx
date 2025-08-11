import React from 'react';

interface AnimatedAvatarProps {
  className?: string;
}

export const AnimatedAvatar: React.FC<AnimatedAvatarProps> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`} aria-label="Animated avatar">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <g className="animate-spin" style={{ transformOrigin: '100px 100px', animationDuration: '18s' }}>
          <circle cx="100" cy="100" r="86" fill="none" stroke="#1d4ed8" strokeWidth="1.5" opacity="0.25" />
          <circle cx="100" cy="100" r="72" fill="none" stroke="#1d4ed8" strokeWidth="1.5" opacity="0.2" />
        </g>
        <g className="animate-spin" style={{ transformOrigin: '100px 100px', animationDuration: '12s' }}>
          <polygon points="100,22 118,88 186,88 130,128 150,192 100,152 50,192 70,128 14,88 82,88" fill="none" stroke="#1d4ed8" strokeWidth="1.25" opacity="0.3" />
        </g>
        <g className="animate-spin" style={{ transformOrigin: '100px 100px', animationDuration: '24s' }}>
          <path d="M100 30 C140 30, 170 60, 170 100 C170 140, 140 170, 100 170 C60 170, 30 140, 30 100 C30 60, 60 30, 100 30 Z" fill="none" stroke="#1d4ed8" strokeWidth="1" opacity="0.25" />
        </g>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="44" fontWeight="700" fill="#1d4ed8" letterSpacing="1">
          NM
        </text>
      </svg>
    </div>
  );
};


