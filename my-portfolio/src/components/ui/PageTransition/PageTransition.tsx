import React, { useEffect, useState } from 'react';

type Props = {
  isTransitioning: boolean;
};

const PageTransition = ({ isTransitioning }: Props) => {
  const [renderState, setRenderState] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    if (isTransitioning) {
      setRenderState(1);
    } else if (renderState === 1) {
      setRenderState(2);

      const timer = setTimeout(() => {
        setRenderState(0);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, renderState]);

  if (renderState === 0) return null;

  const wipeClass =
    renderState === 1 ? 'animate-glitch-wipe-in' : 'animate-glitch-wipe-out';

  return (
    <div className="fixed inset-0 z-90 pointer-events-none">
      {/* Glitch wipe */}
      <div className={`absolute inset-0 origin-left ${wipeClass}`}>
        <div className="w-full h-full bg-linear-to-r from-cyan-500/20 via-purple-500/20 to-transparent" />
      </div>

      {/* Scan lines */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="fixed left-0 right-0 h-0.5 bg-cyan-400 z-90 animate-scan-line opacity-0"
          style={
            {
              '--start-top': `${i * 20}%`,
              animationDelay: `${i * 0.05}s`,
              boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)',
            } as React.CSSProperties
          }
        />
      ))}

      {/* Distortion overlay */}
      <div
        className="fixed inset-0 z-90 animate-distortion opacity-0"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 211, 238, 0.1) 2px, rgba(34, 211, 238, 0.1) 4px)',
        }}
      />
    </div>
  );
};

export default PageTransition;
