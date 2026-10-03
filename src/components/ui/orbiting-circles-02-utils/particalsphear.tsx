import React from 'react';

// Mock component since ParticleSphereAnimation code was not provided
export default function ParticleSphereAnimation() {
  return (
    <div className="w-full h-full rounded-full border border-border/50 bg-background/5 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      <div className="w-1/2 h-1/2 rounded-full border border-primary/30 animate-spin" style={{ animationDuration: '10s' }}></div>
      <div className="absolute w-1/4 h-1/4 rounded-full border border-primary/50 animate-reverse-spin" style={{ animationDuration: '5s' }}></div>
    </div>
  );
}
