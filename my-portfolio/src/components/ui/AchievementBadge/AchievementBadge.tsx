import {
  LuTrophy,
  LuAward,
  LuTarget,
  LuZap,
  LuCode,
  LuRocket,
} from 'react-icons/lu';
import { FiLock } from 'react-icons/fi';

interface AchievementBadgeProps {
  title: string;
  description: string;
  icon: 'trophy' | 'code' | 'target' | 'zap' | 'award' | 'rocket';
  unlocked: boolean;
}

export default function AchievementBadge({
  title,
  description,
  icon,
  unlocked,
}: AchievementBadgeProps) {
  const icons = {
    trophy: LuTrophy,
    code: LuCode,
    target: LuTarget,
    zap: LuZap,
    award: LuAward,
    rocket: LuRocket,
  };

  const IconComponent = icons[icon];

  return (
    <div
      className={`
        relative p-4 rounded-lg border-2 group
        transition-all duration-300 cursor-pointer overflow-hidden
        ${
          unlocked
            ? 'bg-linear-to-br from-neon-gold/20 to-neon-purple/20 border-neon-gold/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:scale-105'
            : 'bg-cyber-surface/50 border-text-secondary/30'
        }
      `}
    >
      {/* Shimmer effect */}
      {unlocked && (
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
      )}

      {/* Glitch effect */}
      {unlocked && (
        <>
          <div className="absolute inset-0 bg-neon-cyan/10 rounded-lg opacity-0 group-hover:animate-glitchFlicker pointer-events-none" />
          <div
            className="absolute inset-0 bg-neon-purple/10 rounded-lg opacity-0 group-hover:animate-glitchFlicker pointer-events-none"
            style={{ animationDelay: '0.1s' }}
          />
        </>
      )}

      <div className="relative z-10 flex flex-col items-center gap-3 text-center">
        {/* Icon Container */}
        <div
          className={`
            w-16 h-16 rounded-full border-2 flex items-center justify-center relative
            transition-transform duration-500 ease-out
            ${
              unlocked
                ? 'border-neon-gold bg-neon-gold/20 shadow-[0_0_20px_rgba(251,191,36,0.4)] group-hover:scale-110 group-hover:rotate-3'
                : 'border-text-secondary/50 bg-cyber-surface/80'
            }
          `}
        >
          {/* Pulsing effect for unlocked */}
          {unlocked && (
            <div className="absolute inset-0 rounded-full bg-neon-gold/30 animate-pulse" />
          )}

          {/* Static noise for locked */}
          {!unlocked && (
            <div className="absolute inset-0 opacity-20 noise-texture rounded-full" />
          )}

          <IconComponent
            className={`relative transition-colors duration-300 ${unlocked ? 'z-10 text-neon-gold' : 'text-text-secondary z-0'}`}
            size={32}
          />
        </div>

        {/* Title */}
        <h4
          className={`font-mono font-bold tracking-wide ${unlocked ? 'text-neon-gold' : 'text-text-secondary'}`}
        >
          {title}
        </h4>

        {/* Description */}
        <p
          className={`text-xs font-rajdhani ${unlocked ? 'text-text-primary' : 'text-text-secondary'}`}
        >
          {description}
        </p>

        {/* Locked overlay */}
        {!unlocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-cyber-surface/60 rounded-lg backdrop-blur-sm border border-text-secondary/10">
            <div className="flex flex-col items-center gap-1">
              <FiLock className="text-text-secondary" size={20} />
              <div className="text-text-secondary font-mono text-xs tracking-widest">
                LOCKED
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
