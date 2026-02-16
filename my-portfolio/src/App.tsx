import { useEffect, useState } from 'react';
import PageLayout from './layouts/PageLayout';

import StartScreen from './components/sections/StartScreen';
import PlayerProfile from './components/sections/PlayerProfile';
import SkillTree from './components/sections/SkillTree';
import QuestLog from './components/sections/QuestLog';
import Achievements from './components/sections/Achievements';
import ContactGuild from './components/sections/ContactGuild';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (section: string) => {
    if (section === currentSection) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentSection(section);

      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }

      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    }, 300);
  };

  useEffect(() => {
    if (isLoading) return;

    const sections = document.querySelectorAll('div[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -20% 0px' }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isLoading]);

  return (
    <PageLayout
      currentSection={currentSection}
      onNavigate={handleNavigate}
      isLoading={isLoading}
      onLoadingComplete={() => setIsLoading(false)}
      isTransitioning={isTransitioning}
    >
      <div id="home" className="scroll-mt-24">
        <StartScreen onNavigate={handleNavigate} />
      </div>

      <div id="profile">
        <PlayerProfile />
      </div>

      <div id="skills">
        <SkillTree />
      </div>

      <div id="quests">
        <QuestLog />
      </div>

      <div id="achievements">
        <Achievements />
      </div>

      <div id="contact">
        <ContactGuild />
      </div>
    </PageLayout>
  );
};

export default App;
