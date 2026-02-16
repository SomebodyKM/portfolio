import { useEffect, useState } from 'react';

type Props = {
  label: string;
  value: number;
  max?: number;
  color?: 'cyan' | 'purple' | 'gold';
  showPercentage?: boolean;
  showScanLine?: boolean;
  glitchOnAppear?: boolean;
};

const Loader = ({
  label,
  value,
  max = 100,
  color = 'cyan',
  showPercentage = true,
  showScanLine = true,
  glitchOnAppear = true,
}: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const percentage = Math.min((value / max) * 100, 100);

  const colorStyles = {
    cyan: {
      bg: 'bg-cyan-500',
      glow: 'shadow-[0_0_10px_rgba(34,211,238,0.5)]',
      glowHover: 'shadow-[0_0_20px_rgba(34,211,238,0.8)]',
      flicker: 'bg-cyan-400/20',
    },
    purple: {
      bg: 'bg-purple-500',
      glow: 'shadow-[0_0_10px_rgba(168,85,247,0.5)]',
      glowHover: 'shadow-[0_0_20px_rgba(168,85,247,0.8)]',
      flicker: 'bg-purple-400/20',
    },
    gold: {
      bg: 'bg-amber-500',
      glow: 'shadow-[0_0_10px_rgba(251,191,36,0.5)]',
      glowHover: 'shadow-[0_0_20px_rgba(251,191,36,0.8)]',
      flicker: 'bg-amber-400/20',
    },
  };

  return (
    <div
      className={`space-y-2 ${glitchOnAppear && mounted ? 'animate-glitchIn' : ''}`}
    >
      <div className="flex justify-between items-center">
        <span className="font-mono text-sm text-slate-300">{label}</span>
        {showPercentage && (
          <span className="font-mono text-sm text-slate-400">
            {value}/{max}
          </span>
        )}
      </div>

      <div
        className="relative h-3 rounded-b-full overflow-hidden border border-slate-700 bg-slate-800/80"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {glitchOnAppear && mounted && (
          <div
            className={`absolute inset-0 ${colorStyles[color].flicker} animate-glitchFlicker pointer-events-none`}
          />
        )}

        <div
          className={`h-full transition-all duration-1000 ease-out ${colorStyles[color].bg} ${isHovered ? colorStyles[color].glowHover : colorStyles[color].glow}`}
          style={{
            width: mounted ? `${percentage}%` : '0%',
          }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          <div
            className={`absolute right-0 top-0 bottom-0 w-2 ${colorStyles[color].bg} blur-sm opacity-70`}
          />
        </div>

        {showScanLine && (
          <div className="absolute inset-0 animate-scanline pointer-events-none" />
        )}
      </div>
    </div>
  );
};

export default Loader;
