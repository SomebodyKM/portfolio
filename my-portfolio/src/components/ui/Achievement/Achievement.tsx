import {
  LuTrophy,
  LuAward,
  LuTarget,
  LuZap,
  LuCode,
  LuRocket,
} from 'react-icons/lu';
import Card from '../Card/Card';

type Props = {
  title: string;
  description: string;
  icon?: 'trophy' | 'award' | 'target' | 'zap' | 'code' | 'rocket';
  unlocked?: boolean;
};

const Achievement = ({
  title,
  description,
  icon = 'trophy',
  unlocked = true,
}: Props) => {
  const icons = {
    trophy: LuTrophy,
    award: LuAward,
    target: LuTarget,
    zap: LuZap,
    code: LuCode,
    rocket: LuRocket,
  };

  const IconComponent = icons[icon];

  return (
    <Card
      glow={unlocked ? 'gold' : 'none'}
      className={`relative overflow-hidden transition-all duration-300 ${unlocked ? 'bg-linear-to-br from-amber-500/20 to-purple-500/20' : 'opacity-50'}`}
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent rounded-lg pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center gap-3">
        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center ${unlocked ? 'bg-linear-to-br from-amber-400 to-purple-500 shadow-[0_0_20px_rgba(251,191,36,0.4)]' : 'bg-slate-800'}`}
        >
          <IconComponent
            size={32}
            className={unlocked ? 'text-white' : 'text-slate-600'}
          />
        </div>

        {/* Text */}
        <div>
          <h3
            className={`text-sm font-semibold mb-1 ${unlocked ? 'text-amber-400' : 'text-slate-500'}`}
          >
            {title}
          </h3>

          <p
            className={`text-xs ${unlocked ? 'text-slate-300' : 'text-slate-600'}`}
          >
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Achievement;
