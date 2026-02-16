import Footer from '../components/Footer';
import Header from '../components/Header';
import LoadingScreen from '../components/LoadingScreen';
import PageTransition from '../components/ui/PageTransition/PageTransition';
import ToastContextProvider from '../context/toast/ToastContextProvider';

type Props = {
  children: React.ReactNode;
  currentSection: string;
  onNavigate: (section: string) => void;
  isLoading: boolean;
  onLoadingComplete: () => void;
  isTransitioning: boolean;
};

function PageLayout({
  children,
  currentSection,
  onNavigate,
  isLoading,
  onLoadingComplete,
  isTransitioning,
}: Props) {
  return (
    <ToastContextProvider>
      <div className="min-h-screen bg-cyber-bg text-text-primary selection:bg-neon-cyan/30 selection:text-neon-cyan overflow-x-hidden relative">
        <div className="fixed inset-0 pointer-events-none noise-texture opacity-5 z-0" />
        <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none z-0" />

        {isLoading ? (
          <LoadingScreen onComplete={onLoadingComplete} />
        ) : (
          <>
            <PageTransition isTransitioning={isTransitioning} />
            <Header currentSection={currentSection} onNavigate={onNavigate} />

            <main className="relative z-10 pt-16 flex flex-col min-h-screen">
              {children}
            </main>

            <Footer />
          </>
        )}
      </div>
    </ToastContextProvider>
  );
}

export default PageLayout;
