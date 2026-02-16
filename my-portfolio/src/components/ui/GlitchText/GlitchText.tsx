import { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  trigger?: boolean;
};

const GlitchText = ({ children, className = '', trigger = true }: Props) => {
  const [isGlitching, setIsGlitching] = useState<boolean>(false);

  useEffect(() => {
    if (!trigger) return;

    setIsGlitching(true);
    const timer = setTimeout(() => setIsGlitching(false), 400);

    return () => clearTimeout(timer);
  }, [trigger]);

  return (
    <span
      className={`relative inline-block ${className} ${isGlitching ? 'glitch-active' : ''}`}
    >
      <span className="relative z-10">{children}</span>

      {isGlitching && (
        <span className="absolute inset-0 text-cyan-400 pointer-events-none glitch-cyan">
          {children}
        </span>
      )}

      {isGlitching && (
        <span className="absolute inset-0 text-fuchsia-400 pointer-events-none glitch-magenta">
          {children}
        </span>
      )}

      {isGlitching && (
        <>
          <span className="glitch-scanline top-[30%]" />
          <span className="glitch-scanline top-[70%]" />
        </>
      )}
    </span>
  );
};

export default GlitchText;
