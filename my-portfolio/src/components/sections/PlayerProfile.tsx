import { LuUser, LuMapPin, LuCalendar, LuShield } from 'react-icons/lu';
import GlitchText from '../ui/GlitchText/GlitchText';
import Card from '../ui/Card/Card';
import Loader from '../ui/Loader/Loader';
import { skills } from '../../data/skills';

const PlayerProfile = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 relative bg-cyber-bg overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Main container */}
      <div className="relative z-10 max-w-360 mx-auto animate-fade-in">
        {/* Title */}
        <GlitchText>
          <h2 className="mb-12 text-center text-3xl md:text-5xl font-orbitron font-bold drop-shadow-[0_0_10px_rgba(168,85,247,0.6)] uppercase tracking-wide">
            Player Profile
          </h2>
        </GlitchText>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Avatar and basic info */}
          <Card
            glow="purple"
            className="h-full bg-cyber-surface/80 backdrop-blur-md"
          >
            <div className="flex flex-col items-center gap-6">
              {/* Avatar */}
              <div className="w-32 h-32 rounded-full border-4 border-neon-purple/50 shadow-[0_0_20px_rgba(168,85,247,0.3)] overflow-hidden">
                <img
                  src="/assets/portfolio-avatar.png"
                  alt="Player Avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-2xl font-orbitron font-bold text-neon-purple tracking-wide">
                  ManYu Kuo
                </h3>
                <div className="inline-block px-3 py-1 bg-neon-purple/20 border border-neon-purple/50 rounded-full">
                  <span className="font-mono text-neon-purple text-xs font-bold tracking-widest uppercase">
                    Full-Stack Warrior
                  </span>
                </div>
              </div>

              {/* Stats list */}
              <div className="w-full space-y-4 text-sm font-mono font-medium">
                <div className="flex items-center gap-3 text-text-secondary border-b border-text-secondary/10 pb-2">
                  <LuShield size={18} className="text-neon-purple" />
                  <span className="tracking-wide">Level 1 Junior Dev</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary border-b border-text-secondary/10 pb-2">
                  <LuMapPin size={18} className="text-neon-purple" />
                  <span className="tracking-wide">
                    Vancouver, British Columbia
                  </span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary border-b border-text-secondary/10 pb-2">
                  <LuCalendar size={18} className="text-neon-purple" />
                  <span className="tracking-wide">Joined 2025</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Story and stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Story card */}
            <Card glow="cyan" className="bg-cyber-surface/80 backdrop-blur-md">
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-neon-cyan/20 pb-2">
                  <LuUser className="text-neon-cyan" size={24} />
                  <h3 className="font-orbitron font-bold text-xl text-neon-cyan tracking-wide">
                    Player Story
                  </h3>
                </div>
                <div className="space-y-4 text-text-secondary font-rajdhani text-lg leading-relaxed">
                  <p>
                    A passionate junior developer on an epic quest to master the
                    art of web development. Armed with curiosity and
                    determination, I venture through the realm of code,
                    conquering bugs and building digital experiences one project
                    at a time.
                  </p>
                  <p>
                    My journey began with HTML and CSS, and has evolved into a
                    full-stack adventure. Each challenge I face levels up my
                    skills, bringing me closer to becoming a legendary
                    developer.
                  </p>
                </div>
              </div>
            </Card>

            {/* Skill stats card */}
            <Card glow="gold" className="bg-cyber-surface/80 backdrop-blur-md">
              <div className="space-y-6">
                <h3 className="font-orbitron font-bold text-xl text-neon-gold tracking-wide border-b border-neon-gold/20 pb-2">
                  Skill Statistics
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="animate-fade-in opacity-0 fill-mode-forwards"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animationFillMode: 'forwards',
                      }}
                    >
                      <Loader
                        label={skill.name}
                        value={skill.value}
                        max={skill.max}
                        color={skill.color}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerProfile;
