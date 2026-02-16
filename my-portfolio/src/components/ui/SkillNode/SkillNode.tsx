import { useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { LuLoaderCircle } from 'react-icons/lu';
import { FiLock } from 'react-icons/fi';

type Props = {
  name: string;
  status: 'unlocked' | 'learning' | 'locked';
  size?: 'small' | 'medium' | 'large';
  index?: number;
};

const SkillNode = ({ name, status, size = 'medium', index = 0 }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const sizeStyles = {
    small: 'w-16 h-16 text-xs',
    medium: 'w-20 h-20 text-sm',
    large: 'w-24 h-24 text-base',
  };

  const statusStyles = {
    unlocked: {
      border: 'border-cyan-400',
      bg: 'bg-cyan-500/20',
      text: 'text-cyan-400',
      glow: 'shadow-[0_0_20px_rgba(34,211,238,0.4)]',
      glowHover: 'shadow-[0_0_30px_rgba(34,211,238,0.7)]',
      icon: FaCheck,
    },
    learning: {
      border: 'border-purple-400',
      bg: 'bg-purple-500/20',
      text: 'text-purple-400',
      glow: 'shadow-[0_0_20px_rgba(168,85,247,0.4)]',
      glowHover: 'shadow-[0_0_30px_rgba(168,85,247,0.7)]',
      icon: LuLoaderCircle,
    },
    locked: {
      border: 'border-slate-600',
      bg: 'bg-slate-800/50',
      text: 'text-slate-500',
      glow: '',
      glowHover: '',
      icon: FiLock,
    },
  };

  const style = statusStyles[status];
  const Icon = style.icon;

  return (
    <div
      className="flex flex-col items-center gap-2 animate-fade-in opacity-0 fill-mode-forwards"
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'forwards',
      }}
    >
      {/* Node */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${sizeStyles[size]} ${style.border} ${style.bg} ${isHovered ? style.glowHover : style.glow} border-2 rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-300 ${status !== 'locked' ? 'hover:scale-110' : ''}`}
      >
        {/* Learning pulse */}
        {status === 'learning' && (
          <div className="absolute inset-0 rounded-full bg-purple-400/50 animate-pulse" />
        )}

        {/* Locked noise */}
        {status === 'locked' && (
          <div className="absolute inset-0 rounded-full opacity-10 noise-texture" />
        )}

        {/* Soft highlight */}
        <div className="absolute inset-0 rounded-full bg-linear-to-br from-white/10 to-transparent" />

        {/* Icon */}
        <Icon
          size={size === 'small' ? 18 : size === 'medium' ? 22 : 26}
          className={`relative z-10 ${status === 'learning' ? 'animate-spin' : ''}`}
        />
      </div>

      {/* Label */}
      <span
        className={`${style.text} font-mono text-center ${size === 'small' ? 'text-xs' : size === 'medium' ? 'text-sm' : 'text-base'}`}
      >
        {name}
      </span>
    </div>
  );
};

export default SkillNode;
