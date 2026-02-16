type Props = {
  color?: 'cyan' | 'purple' | 'gold';
  duration?: number;
};

const ScanLine = ({ color = 'cyan', duration = 2 }: Props) => {
  const colorMap = {
    cyan: 'rgba(34, 211, 238, 0.4)',
    purple: 'rgba(168, 85, 247, 0.4)',
    gold: 'rgba(251, 191, 36, 0.4)',
  };

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 5 }}
    >
      <div
        className="absolute left-0 right-0 h-0.5 scanline"
        style={{
          background: `linear-gradient(
          90deg,
          transparent 0%,
          ${colorMap[color]} 50%,
          transparent 100%
        )`,
          boxShadow: `0 0 10px ${colorMap[color]}`,
          animationDuration: `${duration}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      />
    </div>
  );
};

export default ScanLine;
