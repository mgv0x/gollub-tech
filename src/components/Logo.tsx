import React from 'react';

export default function Logo({ size = 'medium', className = '' }) {
  const heights = {
    small: 28,
    medium: 36,
    large: 48,
  };

  const currentHeight = heights[size] || heights.medium;

  return (
    <div className={`flex items-center gap-3 ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
      {/* Gollub Symbol SVG */}
      <svg
        height={currentHeight}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: `${currentHeight}px`, width: 'auto', display: 'block' }}
        aria-label="GOLLUB mark"
      >
        <defs>
          <linearGradient id="gollub-grad" gradientUnits="userSpaceOnUse" x1="12.8" y1="12.8" x2="72.32" y2="87.2">
            <stop offset="0%" stopColor="#C084FC" />
            <stop offset="100%" stopColor="#5B21B6" />
          </linearGradient>
        </defs>

        {/* Arco principal do 'G' estilizado */}
        <path
          d="M 83.435,66.308 A 37.2,37.2 0 1,1 83.435,33.692"
          fill="none"
          stroke="url(#gollub-grad)"
          strokeWidth="14.8"
          strokeLinecap="round"
        />

        {/* Traço horizontal da barra transversal */}
        <line
          x1="58.184"
          y1="50"
          x2="83.435"
          y2="50"
          stroke="url(#gollub-grad)"
          strokeWidth="14.8"
          strokeLinecap="round"
        />
      </svg>

      {/* Wordmark GOLLUB */}
      <span
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: `${currentHeight * 0.65}px`,
          letterSpacing: '0.18em',
          color: '#FFFFFF',
          lineHeight: 1,
          textTransform: 'uppercase'
        }}
      >
        GOLLUB
      </span>
    </div>
  );
}
