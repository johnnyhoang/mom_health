import { useState, useEffect } from 'react';
import { BookLayoutArticle } from './components/BookLayoutArticle';
import { QAPage } from './components/QAPage';
import { DoctorsDirectoryPage } from './components/DoctorsDirectoryPage';
import { MobileBottomNav } from './components/MobileBottomNav';
import { VideoModal } from './components/VideoModal';
import { Footer } from './components/Footer';
import type { MediaItem } from './types/medical';
import { BookOpen, HelpCircle, UserCheck } from 'lucide-react';

export function App() {
  const [currentView, setCurrentView] = useState<'monograph' | 'qa' | 'doctors'>('monograph');
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);
  const [activeSection, setActiveSection] = useState<string>('chapter-1');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      if (currentView === 'monograph') {
        const chapters = [
          'chapter-1', 
          'chapter-2', 
          'chapter-3', 
          'chapter-4', 
          'chapter-5', 
          'chapter-6', 
          'chapter-7'
        ];
        for (const chId of chapters) {
          const el = document.getElementById(chId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 250 && rect.bottom >= 250) {
              setActiveSection(chId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const handleJumpToSection = (sectionId: string) => {
    if (currentView !== 'monograph') {
      setCurrentView('monograph');
      setTimeout(() => {
        const targetEl = document.getElementById(sectionId);
        if (targetEl) {
          const offset = 60;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = targetEl.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          setActiveSection(sectionId);
        }
      }, 100);
      return;
    }

    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      const offset = 60;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetEl.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const handleSwitchView = (view: 'monograph' | 'qa' | 'doctors') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 transition-all">
        {/* Reading Progress Line */}
        {currentView === 'monograph' && (
          <div 
            className="h-1 bg-gradient-to-r from-rose-500 via-teal-400 to-emerald-400 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        )}
        
        <div className="w-full max-w-4xl mx-auto px-3 sm:px-6 h-14 py-2 flex items-center justify-between gap-2">
          {/* Logo & Brand */}
          <div 
            onClick={() => handleSwitchView('monograph')}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <BookOpen className="w-4 h-4 text-teal-400 shrink-0" />
            <span className="font-extrabold text-xs sm:text-sm tracking-tight text-slate-100 truncate">
              TAMOXIFEN & TỬ CUNG
            </span>
          </div>

          {/* View Mode Toggle Pill (3 Modes) */}
          <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-[11px] sm:text-xs font-bold">
            <button
              onClick={() => handleSwitchView('monograph')}
              className={`px-2 sm:px-3 py-1 rounded-lg transition-all flex items-center gap-1 sm:gap-1.5 ${
                currentView === 'monograph'
                  ? 'bg-teal-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden xs:inline">Chuyên Khảo</span>
            </button>

            <button
              onClick={() => handleSwitchView('qa')}
              className={`px-2 sm:px-3 py-1 rounded-lg transition-all flex items-center gap-1 sm:gap-1.5 ${
                currentView === 'qa'
                  ? 'bg-teal-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 shrink-0" />
              <span>Q&A (16)</span>
            </button>

            <button
              onClick={() => handleSwitchView('doctors')}
              className={`px-2 sm:px-3 py-1 rounded-lg transition-all flex items-center gap-1 sm:gap-1.5 ${
                currentView === 'doctors'
                  ? 'bg-teal-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 shrink-0" />
              <span>Top 10 Bác Sĩ</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content: Monograph or Q&A or Doctors Directory */}
      <main className="flex-1 w-full">
        {currentView === 'monograph' && (
          <BookLayoutArticle
            onOpenVideoModal={(video) => setSelectedVideo(video)}
          />
        )}
        
        {currentView === 'qa' && (
          <QAPage 
            onBackToBook={() => handleSwitchView('monograph')}
          />
        )}

        {currentView === 'doctors' && (
          <DoctorsDirectoryPage
            onBackToBook={() => handleSwitchView('monograph')}
            onOpenQA={() => handleSwitchView('qa')}
          />
        )}
      </main>

      {/* Floating Mobile Bottom Navigation Bar & Drawer */}
      <MobileBottomNav
        activeSection={activeSection}
        currentView={currentView}
        onSwitchView={handleSwitchView}
        onJumpToSection={handleJumpToSection}
      />

      {/* Video Modal Player */}
      <VideoModal
        media={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
