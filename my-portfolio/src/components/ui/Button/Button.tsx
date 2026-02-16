import { useState } from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'cyan' | 'purple' | 'gold';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  glow?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button = ({
  children,
  onClick,
  variant = 'cyan',
  disabled = false,
  className = '',
  fullWidth = false,
  glow = true,
  type = 'button',
}: Props) => {
  const [isClicking, SetIsClicking] = useState<boolean>(false);

  const handleClick = () => {
    if (disabled) return;

    SetIsClicking(true);
    setTimeout(() => SetIsClicking(false), 250);

    if (onClick) onClick();
  };

  const variantStyles = {
    cyan: {
      base: 'border-cyan-400 text-cyan-400',
      hover:
        'hover:bg-cyan-400/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]',
      glow: 'rgba(34, 211, 238, 0.4)',
    },
    purple: {
      base: 'border-purple-400 text-purple-400',
      hover:
        'hover:bg-purple-400/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]',
      glow: 'rgba(168, 85, 247, 0.4)',
    },
    gold: {
      base: 'border-amber-400 text-amber-400',
      hover:
        'hover:bg-amber-400/10 hover:shadow-[0_0_30px_rgba(251,191,36,0.6)]',
      glow: 'rgba(251, 191, 36, 0.4)',
    },
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      type={type}
      className={`group relative overflow-hidden
      px-6 py-3 border-2 rounded-lg
      font-semibold uppercase tracking-wider
      transition-all duration-300
      active:scale-[0.98]
      disabled:opacity-40 disabled:cursor-not-allowed
      ${variantStyles[variant].base}
      ${variantStyles[variant].hover}
      ${fullWidth ? 'w-full' : ''}
      ${className}`}
    >
      {glow && (
        <span
          className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
          style={{
            background: `linear-gradient(
          90deg,
          transparent,
          ${variantStyles[variant].glow},
          transparent
        )`,
            animation: 'borderSweep 1.2s linear infinite',
          }}
        />
      )}

      {isClicking && (
        <>
          <span className="absolute inset-0 bg-white/20 animate-clickFlash" />
          <span
            className="absolute inset-0 animate-clickFlash"
            style={{ backgroundColor: variantStyles[variant].glow }}
          />
        </>
      )}
      <span
        className="
          pointer-events-none absolute inset-0
          bg-linear-to-r from-transparent via-white/10 to-transparent
          -translate-x-full group-hover:animate-shimmer
        "
      />
      <span className="relative z-10 font-mono">{children}</span>
    </button>
  );
};

export default Button;
