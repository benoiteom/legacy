import React from 'react';

const GradientSVG = ({ id, startColor, endColor, rotation = 45 }: { id: string, startColor: string, endColor: string, rotation?: number }) => {
  return (
    <svg style={{ height: 0, width: 0 }}>
      <defs>
        <linearGradient id={id} gradientTransform={`rotate(${rotation})`}>
          <stop offset="0%" stopColor={startColor} />
          <stop offset="100%" stopColor={endColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradientSVG;
