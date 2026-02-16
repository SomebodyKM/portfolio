import { useState } from 'react';
import { LuX, LuMenu } from 'react-icons/lu';

type Props = {
  currentSection: string;
  onNavigate: (section: string) => void;
};

const Header = ({ currentSection, onNavigate }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Start' },
    { id: 'profile', label: 'Profile' },
    { id: 'skills', label: 'Skills' },
    { id: 'quests', label: 'Quests' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-surface/90 backdrop-blur-md border-b border-neon-cyan/30 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
      <div className="max-w-360 mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNavigate('home')}
            className="font-mono font-bold text-lg tracking-wider hover:text-neon-cyan transition-all drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
          >
            {'<DEV.QUEST />'}
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-4 py-2 rounded font-mono font-semibold text-sm uppercase tracking-wide transition-all duration-300 border ${currentSection === item.id ? 'text-neon-cyan bg-neon-cyan/10 border-neon-cyan/50 shadow-[0_0_10px_rgba(34,211,238,0.2)]' : 'text-text-secondary border-transparent hover:text-neon-cyan hover:bg-neon-cyan/5 hover:border-neon-cyan/30'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-neon-cyan hover:bg-neon-cyan/10 rounded transition-colors"
          >
            {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}

      <div
        className={`md:hidden absolute top-16 left-0 w-full
          border-b border-neon-cyan/30 bg-cyber-surface/95 backdrop-blur-md
          transition-all duration-300 ease-in-out origin-top
          ${
            isOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`w-full text-left px-4 py-3 rounded font-mono font-semibold text-sm uppercase tracking-wider transition-all duration-300 border ${currentSection === item.id ? 'text-neon-cyan bg-neon-cyan/10 border-neon-cyan/50' : 'text-text-secondary border-transparent hover:text-neon-cyan hover:bg-neon-cyan/5 hover:border-neon-cyan/30'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
