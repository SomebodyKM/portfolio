type Props = {
  children: React.ReactNode;
  glow?: 'cyan' | 'purple' | 'gold' | 'none';
  className?: string;
};

const Card = ({ children, glow = 'cyan', className = '' }: Props) => {
  const glowStyles = {
    cyan: 'border-cyan-500/30 box-glow-cyan',
    purple: 'border-purple-500/30 box-glow-purple',
    gold: 'border-amber-500/30 box-glow-gold',
    none: 'border-slate-700',
  };

  return (
    <div
      className={`relative rounded-lg border bg-slate-900/60 backdrop-blur-sm p-6 text-slate-100 ${glowStyles[glow]} ${className}`}
    >
      <div className="absolute inset-0 rounded-lg bg-linear-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Card;
