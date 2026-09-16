import { useState, useEffect } from 'react';
import { BookLayoutArticle } from './components/BookLayoutArticle';
import { BreastCancerArticle } from './components/BreastCancerArticle';
import { QAPage } from './components/QAPage';
import { DoctorsDirectoryPage } from './components/DoctorsDirectoryPage';
import { MobileBottomNav } from './components/MobileBottomNav';
import { VideoModal } from './components/VideoModal';
import { Footer } from './components/Footer';
import type { MediaItem } from './types/medical';
import { HelpCircle, UserCheck, Ribbon, Stethoscope } from 'lucide-react';

export function App() {
  const [currentView, setCurrentView] = useState<'breast_cancer' | 'monograph' | 'qa' | 'doctors'>('breast_cancer');
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);
  const [activeSection, setActiveSection] = useState<string>('bc-chapter-1');
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
      } else if (currentView === 'breast_cancer') {
        const bcChapters = [
          'bc-chapter-1',
          'bc-chapter-2',
          'bc-chapter-3',
          'bc-chapter-4',
          'bc-chapter-5',
          'bc-chapter-6'
        ];
        for (const chId of bcChapters) {
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

  const handleSwitchView = (view: 'breast_cancer' | 'monograph' | 'qa' | 'doctors') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-rose-500 selection:text-white">
      
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 transition-all">
        {/* Reading Progress Line */}
        {(currentView === 'monograph' || currentView === 'breast_cancer') && (
          <div 
            className="h-1 bg-gradient-to-r from-rose-500 via-teal-400 to-emerald-400 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        )}
        
        <div className="w-full max-w-5xl mx-auto px-3 sm:px-6 h-14 py-2 flex items-center justify-between gap-2">
          {/* Logo & Brand */}
          <div 
            onClick={() => handleSwitchView('breast_cancer')}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <Ribbon className="w-4 h-4 text-rose-400 shrink-0" />
            <span className="font-extrabold text-xs sm:text-sm tracking-tight text-slate-100 truncate">
              K VÚ & TAMOXIFEN ATLAS
            </span>
          </div>

          {/* View Mode Toggle Pill (4 Navigation Tabs) */}
          <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-[11px] sm:text-xs font-bold overflow-x-auto">
            <button
              onClick={() => handleSwitchView('breast_cancer')}
              className={`px-2.5 sm:px-3 py-1 rounded-lg transition-all flex items-center gap-1 sm:gap-1.5 whitespace-nowrap ${
                currentView === 'breast_cancer'
                  ? 'bg-rose-500 text-white shadow-sm shadow-rose-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Ribbon className="w-3.5 h-3.5 shrink-0" />
              <span>K Vú & Thuốc Mới</span>
            </button>

            <button
              onClick={() => handleSwitchView('monograph')}
              className={`px-2.5 sm:px-3 py-1 rounded-lg transition-all flex items-center gap-1 sm:gap-1.5 whitespace-nowrap ${
                currentView === 'monograph'
                  ? 'bg-teal-500 text-slate-950 shadow-sm shadow-teal-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5 shrink-0" />
              <span>Tử Cung & Tamoxifen</span>
            </button>

            <button
              onClick={() => handleSwitchView('qa')}
              className={`px-2 sm:px-3 py-1 rounded-lg transition-all flex items-center gap-1 sm:gap-1.5 whitespace-nowrap ${
                currentView === 'qa'
                  ? 'bg-amber-500 text-slate-950 shadow-sm shadow-amber-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 shrink-0" />
              <span>Tập Q&A (26)</span>
            </button>

            <button
              onClick={() => handleSwitchView('doctors')}
              className={`px-2 sm:px-3 py-1 rounded-lg transition-all flex items-center gap-1 sm:gap-1.5 whitespace-nowrap ${
                currentView === 'doctors'
                  ? 'bg-purple-500 text-white shadow-sm shadow-purple-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 shrink-0" />
              <span>Top 10 Bác Sĩ</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Router */}
      <main className="flex-1 w-full">
        {currentView === 'breast_cancer' && (
          <BreastCancerArticle
            onOpenVideoModal={(video) => setSelectedVideo(video)}
            onSwitchToGynecologyModule={() => handleSwitchView('monograph')}
          />
        )}

        {currentView === 'monograph' && (
          <BookLayoutArticle
            onOpenVideoModal={(video) => setSelectedVideo(video)}
          />
        )}
        
        {currentView === 'qa' && (
          <QAPage 
            onBackToBook={() => handleSwitchView('breast_cancer')}
          />
        )}

        {currentView === 'doctors' && (
          <DoctorsDirectoryPage
            onBackToBook={() => handleSwitchView('breast_cancer')}
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
