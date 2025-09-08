import React from 'react';

interface AnimatedAvatarProps {
  className?: string;
}

export const AnimatedAvatar: React.FC<AnimatedAvatarProps> = ({ className = '' }) => {
  // Cool, friendly robot SVG inspired by the attached image
  return (
    <div className={`relative ${className}`} aria-label="Chatbot robot animation">
      <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
        {/* Floating shadow */}
        <ellipse cx="40" cy="74" rx="16" ry="4" fill="#b3e0fa" />
        {/* Robot body group with float animation */}
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 -4; 0 0" dur="2s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 -4; 0 0" dur="2s" repeatCount="indefinite" />
          {/* Main body */}
          <ellipse cx="40" cy="44" rx="18" ry="16" fill="#fff" stroke="#38bdf8" strokeWidth="2" />
          {/* Chest panel */}
          <ellipse cx="40" cy="54" rx="8" ry="5" fill="#38bdf8" stroke="#1d4ed8" strokeWidth="1.5" />
          {/* Left arm */}
          <ellipse cx="22" cy="48" rx="5" ry="10" fill="#fff" stroke="#38bdf8" strokeWidth="2" transform="rotate(-25 22 48)" />
          {/* Right arm */}
          <ellipse cx="58" cy="48" rx="5" ry="10" fill="#fff" stroke="#38bdf8" strokeWidth="2" transform="rotate(25 58 48)" />
          {/* Head */}
          <ellipse cx="40" cy="28" rx="16" ry="14" fill="#fff" stroke="#1d4ed8" strokeWidth="2" />
          {/* Face screen */}
          <ellipse cx="40" cy="28" rx="13" ry="11" fill="#1e293b" />
          {/* Eyes (smiling) */}
          <path d="M34 30 Q36 28 38 30" stroke="#38bdf8" strokeWidth="2" fill="none" />
          <path d="M42 30 Q44 28 46 30" stroke="#38bdf8" strokeWidth="2" fill="none" />
          {/* Smile */}
          <path d="M36 34 Q40 36 44 34" stroke="#38bdf8" strokeWidth="2" fill="none" />
          {/* Antenna base */}
          <rect x="38" y="12" width="4" height="8" rx="2" fill="#38bdf8">
            <animate attributeName="y" values="12;8;12" dur="2s" repeatCount="indefinite" />
          </rect>
          {/* Antenna tip */}
          <ellipse cx="40" cy="10" rx="2" ry="2" fill="#38bdf8">
            <animate attributeName="cy" values="10;6;10" dur="2s" repeatCount="indefinite" />
          </ellipse>
          {/* Left ear */}
          <rect x="18" y="18" width="4" height="10" rx="2" fill="#38bdf8" />
          {/* Right ear */}
          <rect x="58" y="18" width="4" height="10" rx="2" fill="#38bdf8" />
        </g>
      </svg>
    </div>
  );
};


