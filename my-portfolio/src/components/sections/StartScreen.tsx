import { useMemo } from 'react';
import Card from '../ui/Card/Card';
import GlitchText from '../ui/GlitchText/GlitchText';
import Loader from '../ui/Loader/Loader';
import Button from '../ui/Button/Button';
import { calculateTotalXP, completedProjectCount } from '../../data/quests';
import { totalSkillsCount } from '../../data/skills';

type Props = {
  onNavigate: (section: string) => void;
};

const StartScreen = ({ onNavigate }: Props) => {
  const currentXP = calculateTotalXP();
  const totalProjects = completedProjectCount;
  const totalSkills = totalSkillsCount;

  const maxXP = Math.ceil((currentXP + 1) / 1000) * 1000;

  const particles = useMemo(
    () =>
      Array.from({ length: 20 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 4}s`,
      })),
    []
  );

  return (
    <section className="flex items-center justify-center p-4 md:p-8 relative overflow-hidden bg-cyber-bg">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full animate-particle"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-360 ">
        <div className="flex flex-col items-center gap-8 animate-fade-in">
          {/* Title */}
          <h1 className="text-center text-4xl md:text-6xl font-orbitron font-bold tracking-wider uppercase drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-glow-pulse">
            Player Profile
          </h1>

          {/* Profile card */}
          <Card
            glow="cyan"
            className="w-full max-w-md bg-cyber-surface/80 backdrop-blur-md"
          >
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="inline-block px-4 py-1 bg-neon-cyan/20 border border-neon-cyan/50 rounded-full">
                  <GlitchText>
                    <span className="font-mono font-semibold text-neon-cyan text-sm tracking-wider uppercase">
                      Level {Math.floor(currentXP / 1000) + 1} - Junior
                      Developer
                    </span>
                  </GlitchText>
                </div>

                <GlitchText>
                  <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-text-primary tracking-wide drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] uppercase">
                    ManYu Kuo
                  </h2>
                </GlitchText>

                <p className="text-text-secondary font-mono font-medium text-sm tracking-widest uppercase">
                  Class: Full-Stack Warrior
                </p>
              </div>

              <div className="space-y-3">
                <Loader
                  label="EXPERIENCE"
                  value={currentXP}
                  max={maxXP}
                  color="cyan"
                />

                <div className="flex justify-between text-xs font-mono text-neon-cyan/70 px-1">
                  <span>{currentXP} XP</span>
                  <span className="uppercase">Next Level: {maxXP} XP</span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="text-center p-3 bg-cyber-surface/50 rounded border border-text-secondary/30 transition hover:border-neon-purple">
                    <div className="font-mono font-medium text-xs text-text-secondary uppercase">
                      Completed Quests
                    </div>
                    <div className="font-mono text-xl text-neon-purple">
                      {totalProjects}
                    </div>
                  </div>

                  <div className="text-center p-3 bg-cyber-surface/50 rounded border border-text-secondary/30 transition hover:border-neon-gold">
                    <div className="font-mono font-medium text-xs text-text-secondary uppercase">
                      Skills
                    </div>
                    <div className="font-mono text-xl text-neon-gold">
                      {totalSkills}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Menu Buttons */}
          <div className="w-full max-w-md grid grid-cols-1 md:grid-cols-2 gap-3 font-rajdhani font-semibold tracking-wide">
            <Button
              variant="cyan"
              fullWidth
              onClick={() => onNavigate('profile')}
            >
              Load Profile
            </Button>

            <Button
              variant="purple"
              fullWidth
              onClick={() => onNavigate('skills')}
            >
              Skill Tree
            </Button>

            <Button
              variant="gold"
              fullWidth
              onClick={() => onNavigate('quests')}
            >
              Quest Log
            </Button>

            <Button
              variant="cyan"
              fullWidth
              onClick={() => onNavigate('achievements')}
            >
              Achievements
            </Button>

            <Button
              variant="purple"
              fullWidth
              className="md:col-span-2"
              onClick={() => onNavigate('contact')}
            >
              Contact Guild
            </Button>
          </div>

          {/* Hint */}
          <div className="text-center font-mono font-medium text-sm text-text-secondary animate-fade-pulse">
            ▸ PRESS ANY MENU BUTTON TO START ◂
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartScreen;
