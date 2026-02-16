import { HiOutlineCheckCircle, HiOutlineClock } from 'react-icons/hi';
import { FaRegCircle } from 'react-icons/fa';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Card from '../Card/Card';

type Props = {
  title: string;
  difficulty: number;
  status: 'completed' | 'in-progress' | 'planned';
  objectives: string[];
  reward: string;
  description: string;
};

const QuestCard = ({
  title,
  difficulty,
  status,
  objectives,
  reward,
  description,
}: Props) => {
  const statusConfig = {
    completed: {
      color: 'text-cyan-400',
      label: 'COMPLETED',
      icon: HiOutlineCheckCircle,
      glow: 'cyan' as const,
    },
    'in-progress': {
      color: 'text-purple-400',
      label: 'IN PROGRESS',
      icon: HiOutlineClock,
      glow: 'purple' as const,
    },
    planned: {
      color: 'text-amber-400',
      label: 'PLANNED',
      icon: FaRegCircle,
      glow: 'gold' as const,
    },
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <Card glow={config.glow} className="h-full">
      <div className="flex flex-col gap-4 h-full">
        {/* Header */}
        <div className="flex justify-between items-start gap-3">
          <h3 className="text-lg font-semibold">{title}</h3>

          {/* Difficulty */}
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => {
              const starIndex = i + 1;

              if (difficulty >= starIndex) {
                return (
                  <FaStar
                    key={i}
                    size={14}
                    className="amber-400 text-amber-400"
                  />
                );
              }

              return <FaRegStar key={i} size={14} className="text-slate-700" />;
            })}
          </div>
        </div>

        {/* Status */}
        <div className={`flex items-center gap-2 ${config.color}`}>
          <StatusIcon size={16} />
          <span className="text-sm font-mono">{config.label}</span>
        </div>

        {/* Description */}
        {description && <p className="text-sm text-slate-400">{description}</p>}

        {/* Objectives */}
        <div className="flex-1">
          <div className="text-sm font-mono text-slate-300 mb-2">
            OBJECTIVES
          </div>

          <ul className="space-y-1.5">
            {objectives.map((objective, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-slate-400"
              >
                <span className="text-cyan-400 mt-0.5">▹</span>
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Reward */}
        <div className="pt-3 border-t border-slate-700 flex justify-between items-center">
          <span className="text-sm font-mono text-slate-300">REWARD</span>
          <span className="text-sm font-mono text-amber-400">{reward}</span>
        </div>
      </div>
    </Card>
  );
};

export default QuestCard;
