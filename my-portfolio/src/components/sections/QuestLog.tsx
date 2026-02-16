import { useState } from 'react';
import GlitchText from '../ui/GlitchText/GlitchText';
import QuestCard from '../ui/QuestCard/QuestCard';
import { quests } from '../../data/quests';

const QuestLog = () => {
  const [filter, setFilter] = useState<
    'all' | 'completed' | 'in-progress' | 'planned'
  >('all');

  const filteredQuests =
    filter === 'all' ? quests : quests.filter((q) => q.status === filter);

  const listKey = filter;

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 relative bg-cyber-bg overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Main container */}
      <div className="relative z-10 max-w-360 mx-auto animate-fade-in">
        {/* Title */}
        <GlitchText>
          <h2 className="text-center text-3xl md:text-5xl font-orbitron font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.6)] uppercase tracking-wide mb-4">
            Quest Log
          </h2>
        </GlitchText>

        <div className="text-center mb-12">
          <p className="text-text-secondary font-mono font-medium text-sm md:text-base tracking-widest uppercase">
            Track your completed and ongoing projects
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(['all', 'completed', 'in-progress', 'planned'] as const).map(
            (status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-6 py-2 rounded border font-mono text-sm font-bold tracking-wider uppercase transition-all duration-300 ${filter === status ? 'bg-neon-cyan/20 border-neon-cyan text-neon-cyan shadow-[0_0_15px_rgba(34,211,238,0.3)]' : 'bg-cyber-surface/50 border-text-secondary/30 text-text-secondary hover:border-neon-cyan/50 hover:text-neon-cyan'}`}
              >
                {status.replace('-', '')}
              </button>
            )
          )}
        </div>

        {/* Quest cards grid */}
        <div
          key={listKey}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredQuests.map((q, i) => (
            <div
              key={q.title}
              className="animate-fade-in opacity-0 fill-mode-forwards"
              style={{
                animationDelay: `${i * 100}ms`,
                animationFillMode: 'forwards',
              }}
            >
              <QuestCard {...q} />
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredQuests.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <p className="text-text-secondary font-mono text-lg">
              No quests found in this category
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuestLog;
