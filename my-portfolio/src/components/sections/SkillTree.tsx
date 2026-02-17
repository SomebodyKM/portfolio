import GlitchText from '../ui/GlitchText/GlitchText';
import SkillNode from '../ui/SkillNode/SkillNode';

const SkillTree = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 relative bg-cyber-bg overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Main container */}
      <div className="relative z-10 max-w-360 mx-auto animate-fade-in">
        {/* Title */}
        <GlitchText>
          <h2 className="mb-12 text-center text-3xl md:text-5xl font-orbitron font-bold drop-shadow-[0_0_10px_rgba(251,191,36,0.6)] uppercase tracking-wide">
            Skill Tree
          </h2>
        </GlitchText>

        {/* Desktop view */}
        <div className="hidden md:block">
          <div className="relative flex flex-col items-center gap-12 py-8">
            {/* Root node */}
            <div className="relative z-10">
              <SkillNode
                name="Web Development"
                status="unlocked"
                size="large"
                index={0}
              />
            </div>

            {/* Connecting line (Root to L1) */}
            <div className="relative w-full max-w-3xl h-12">
              <div className="absolute top-0 left-1/2 w-0.5 h-1/2 bg-neon-cyan/50 -translate-x-1/2" />

              {/* Horizontal Bar (Connects the 3 branches) */}
              <div className="absolute top-1/2 left-[16.66%] right-[16.66%] h-0.5 bg-linear-to-r from-neon-purple/50 via-neon-cyan/50 to-neon-purple/50" />

              {/* Vertical Droppers to Level 1 Nodes */}
              {/* Left Dropper */}
              <div className="absolute top-1/2 left-[16.66%] w-0.5 h-1/2 bg-neon-purple/50 -translate-x-1/2" />
              {/* Middle Dropper */}
              <div className="absolute top-1/2 left-1/2 w-0.5 h-1/2 bg-neon-cyan/50 -translate-x-1/2" />
              {/* Right Dropper */}
              <div className="absolute top-1/2 right-[16.66%] w-0.5 h-1/2 bg-neon-purple/50 translate-x-1/2" />

              {/* Decor: Circuit Dots at intersections */}
              <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-neon-cyan rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              <div className="absolute top-1/2 left-[16.66%] w-1.5 h-1.5 bg-neon-purple rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute top-1/2 right-[16.66%] w-1.5 h-1.5 bg-neon-purple rounded-full translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Level 1 nodes */}
            <div className="relative grid grid-cols-3 gap-8 w-full max-w-4xl z-10">
              <div className="felx justify-center">
                <SkillNode
                  name="Frontend"
                  status="unlocked"
                  size="medium"
                  index={1}
                />
              </div>
              <div className="felx justify-center">
                <SkillNode
                  name="Backend"
                  status="learning"
                  size="medium"
                  index={2}
                />
              </div>
              <div className="felx justify-center">
                <SkillNode
                  name="DevOps"
                  status="learning"
                  size="medium"
                  index={3}
                />
              </div>
            </div>

            {/* Level 2 nodes */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-8 max-w-5xl">
              <SkillNode name="HTML" status="unlocked" size="small" index={4} />
              <SkillNode name="CSS" status="unlocked" size="small" index={5} />
              <SkillNode
                name="JavaScript"
                status="unlocked"
                size="small"
                index={6}
              />
              <SkillNode
                name="React"
                status="learning"
                size="small"
                index={7}
              />
              <SkillNode
                name="Node.js"
                status="learning"
                size="small"
                index={8}
              />
              <SkillNode
                name="TypeScript"
                status="learning"
                size="small"
                index={9}
              />
            </div>

            {/* Level 3 nodes */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl">
              <SkillNode
                name="Next.js"
                status="learning"
                size="small"
                index={10}
              />
              <SkillNode
                name="GraphQL"
                status="learning"
                size="small"
                index={11}
              />
              <SkillNode
                name="Docker"
                status="locked"
                size="small"
                index={12}
              />
              <SkillNode name="AWS" status="locked" size="small" index={13} />
              <SkillNode
                name="Testing"
                status="learning"
                size="small"
                index={14}
              />
            </div>
          </div>
        </div>

        {/* Mobile view */}
        <div className="md:hidden space-y-6">
          {/* Frontend category */}
          <div className="bg-cyber-surface/40 backdrop-blur-sm border border-neon-cyan/30 rounded-lg p-6 space-y-4">
            <h3 className="font-orbitron font-bold text-neon-cyan mb-4 tracking-wider border-b border-neon-cyan/20 pb-2">
              Frontend Development
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <SkillNode name="HTML" status="unlocked" size="small" />
              <SkillNode name="CSS" status="unlocked" size="small" />
              <SkillNode name="JavaScript" status="unlocked" size="small" />
              <SkillNode name="React" status="learning" size="small" />
              <SkillNode name="Next.js" status="learning" size="small" />
            </div>
          </div>

          {/* Backend category */}
          <div className="bg-cyber-surface/40 backdrop-blur-sm border border-neon-purple/30 rounded-lg p-6 space-y-4">
            <h3 className="font-orbitron font-bold text-neon-purple mb-4 tracking-wider border-b border-neon-purple/20 pb-2">
              Backend Development
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <SkillNode name="Node.js" status="learning" size="small" />
              <SkillNode name="TypeScript" status="learning" size="small" />
              <SkillNode name="GraphQL" status="learning" size="small" />
            </div>
          </div>

          {/* DevOps & Tools category */}
          <div className="bg-cyber-surface/40 backdrop-blur-sm border border-neon-gold/30 rounded-lg p-6 space-y-4">
            <h3 className="font-orbitron font-bold text-neon-gold mb-4 tracking-wider border-b border-neon-gold/20 pb-2">
              DevOps & Tools
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <SkillNode name="Testing" status="learning" size="small" />
              <SkillNode name="Docker" status="locked" size="small" />
              <SkillNode name="AWS" status="locked" size="small" />
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-mono font-semibold tracking-wide">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border-2 border-neon-cyan bg-neon-cyan/20 shadow-[0_0_8px_rgba(34,211,238,0.4)]" />
            <span>Unlocked</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border-2 border-neon-purple bg-neon-purple/20 shadow-[0_0_8px_rgba(168,85,247,0.4)]" />
            <span>Learning</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border-2 border-text-secondary bg-cyber-surface/20" />
            <span>Locked</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillTree;
