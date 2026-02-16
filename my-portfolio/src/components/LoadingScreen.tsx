import { useEffect, useState } from 'react';
import ScanLine from './ui/ScanLine/ScanLine';

type Props = {
  onComplete: () => void;
};

const LoadingScreen = ({ onComplete }: Props) => {
  const [progress, setProgress] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const messages = [
    'INITIALIZING SYSTEM...',
    'LOADING PLAYER PROFILE...',
    'SYNCING SKILL DATA...',
    'ESTABLISHING CONNECTION...',
    'READY TO START',
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsExiting(true);
          setTimeout(onComplete, 500);
          return 100;
        }

        return Math.min(prev + Math.random() * 3, 100);
      });
    }, 40);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => {
        if (prev >= messages.length - 1) {
          clearInterval(messageInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(messageInterval);
  }, []);

  if (isExiting && progress >= 100) return null;

  return (
    <div
      className={`fixed inset-0 z-100 bg-cyber-bg flex items-center justify-center transition-opacity duration-500 ease-in-out ${isExiting ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* ScanLine */}
      <ScanLine color="cyan" duration={3} />

      <div className="relative z-10 max-w-2xl w-full px-6 space-y-8">
        {/* Logo/ Title */}
        <div className="text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-neon-cyan mb-2 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-pulse">
            {'<DEV.QUEST />'}
          </h1>
          <p className="font-mono text-text-secondary textsm tracking-widest">
            PLAYER PROFILE SYSTEM v1.0
          </p>
        </div>

        {/* Terminal messages */}
        <div className="min-h-30 space-y-2 font-mono text-sm">
          {messages.slice(0, currentMessageIndex + 1).map((message, i) => (
            <div
              key={message}
              className="flex items-center gap-2 text-neon-cyan animate-fade-in-right"
            >
              <span
                className={
                  i === currentMessageIndex ? 'animate-pulse' : 'opacity-50'
                }
              >
                ▸
              </span>
              <span className={i !== currentMessageIndex ? 'opacity-70' : ''}>
                {message}
              </span>
              {i === currentMessageIndex && (
                <span className="animate-pulse">_</span>
              )}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="space-y-3">
          <div className="flex justify-between font-mono text-xs text-text-secondary">
            <span className="uppercase">Loading Assets</span>
            <span>{Math.floor(progress)}%</span>
          </div>

          <div className="relative h-2 bg-cyber-surface rounded-full overflow-hidden border border-text-secondary/30">
            {/* Main progress bar */}
            <div
              className="absolute top-0 bottom-0 left-0 bg-linear-to-r from-neon-cyan to-neon-purple transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              <div className="absolute right-0 top-0 bottom-0 w-4 bg-linear-to-r from-transparent to-neon-cyan blur-sm" />
            </div>

            {/* Particles */}
            {progress > 0 && progress < 100 && (
              <div className="absolute top-1/2 -translate-1/2 w-1 h-1 bg-neon-cyan rounded-full shadow-[0_0_10px_cyan]">
                <div className="absolute animate-ping opacity-75 inline-flex h-full w-full rounded-full bg-neon-cyan" />
              </div>
            )}
          </div>
        </div>

        {/* Glitch overly */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05] animate-glitchFlicker"
          style={{
            background:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 211, 238, 0.1) 2px, rgba(34, 211, 238, 0.1) 4px)',
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
