import AchievementBadge from '../ui/AchievementBadge/AchievementBadge';
import GlitchText from '../ui/GlitchText/GlitchText';

const Achievements = () => {
  const achievements = [
    {
      title: 'First Steps',
      description: 'Completed your first project',
      icon: 'trophy' as const,
      unlocked: true,
    },
    {
      title: 'Code Warrior',
      description: 'Wrote 10,000+ lines of code',
      icon: 'code' as const,
      unlocked: true,
    },
    {
      title: 'Bug Slayer',
      description: 'Fixed 100 bugs',
      icon: 'target' as const,
      unlocked: true,
    },
    {
      title: 'Speed Runner',
      description: 'Completed a project in under a week',
      icon: 'zap' as const,
      unlocked: true,
    },
    {
      title: 'Team Player',
      description: 'Collaborated on 5 group projects',
      icon: 'award' as const,
      unlocked: true,
    },
    {
      title: 'Launch Master',
      description: 'Deployed 3 projects to production',
      icon: 'rocket' as const,
      unlocked: false,
    },
    {
      title: 'Full Stack Hero',
      description: 'Master both frontend and backend',
      icon: 'trophy' as const,
      unlocked: false,
    },
    {
      title: 'Open Source',
      description: 'Contribute to 10 open source projects',
      icon: 'code' as const,
      unlocked: false,
    },
    {
      title: 'Perfectionist',
      description: 'Achieve 100% test coverage',
      icon: 'target' as const,
      unlocked: false,
    },
    {
      title: 'Senior Dev',
      description: 'Reach level 5',
      icon: 'award' as const,
      unlocked: false,
    },
  ];

  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 relative bg-cyber-bg overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Main container */}
      <div className="relative z-10 max-w-360 mx-auto animate-fade-in">
        {/* Title */}
        <GlitchText>
          <h2 className="mb-12 text-center text-3xl md:text-5xl font-orbitron font-bold drop-shadow-[0_0_10px_rgba(168,85,247,0.6)] uppercase tracking-wide">
            Achievements
          </h2>
        </GlitchText>

        {/* Progress bar */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block px-6 py-3 bg-linear-to-r from-neon-gold/20 to-neon-purple/20 border border-neon-gold/50 rounded-lg shadow-[0_0_15px_rgba(251,191,36,0.2)]">
            <span className="font-mono font-bold text-neon-gold tracking-widest text-lg">
              {unlockedCount} / {achievements.length} UNLOCKED
            </span>
          </div>
        </div>

        {/* Aachievement grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {achievements.map((a, i) => (
            <div
              key={a.title}
              className="animate-fade-in opacity-0 fill-mode-forwards"
              style={{
                animationDelay: `${i * 50}ms`,
                animationFillMode: 'forwards',
              }}
            >
              <AchievementBadge {...a} />
            </div>
          ))}
        </div>

        {/* Info text */}
        <div
          className="mt-16 text-center animate-fade-in"
          style={{
            animationDelay: '500ms',
            animationFillMode: 'forwards',
          }}
        >
          <p className="text-text-secondary font-mono text-sm tracking-wider">
            COMPLETE QUESTS AND LEVEL UP TO UNLOCK MORE ACHIEVEMENTS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
