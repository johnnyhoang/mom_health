import { useState, useEffect } from 'react';
import { AnkleFractureArticle } from './components/AnkleFractureArticle';
import { CervicalSpineArticle } from './components/CervicalSpineArticle';
import { BreastCancerArticle } from './components/BreastCancerArticle';
import { BookLayoutArticle } from './components/BookLayoutArticle';
import { ChronicBackPainArticle } from './components/ChronicBackPainArticle';
import { QAPage } from './components/QAPage';
import { DoctorsDirectoryPage } from './components/DoctorsDirectoryPage';
import { MobileBottomNav } from './components/MobileBottomNav';
import { VideoModal } from './components/VideoModal';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { AudioReaderProvider } from './context/AudioReaderContext';
import { Footer } from './components/Footer';
import type { MediaItem } from './types/medical';
import { HelpCircle, UserCheck, Ribbon, Stethoscope, Bone, Footprints, Activity } from 'lucide-react';

export function App() {
  const [currentView, setCurrentView] = useState<'ankle_trauma' | 'cervical_spine' | 'breast_cancer' | 'monograph' | 'chronic_back_pain' | 'qa' | 'doctors'>('ankle_trauma');
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);
  const [activeSection, setActiveSection] = useState<string>('ankle-ch-1');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      if (currentView === 'ankle_trauma') {
        const ankleChapters = [
          'ankle-ch-1', 
          'ankle-ch-2', 
          'ankle-ch-3', 
          'ankle-ch-4', 
          'ankle-ch-5', 
          'ankle-ch-6', 
          'ankle-ch-7'
        ];
        for (const chId of ankleChapters) {
          const el = document.getElementById(chId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 250 && rect.bottom >= 250) {
              setActiveSection(chId);
              break;
            }
          }
        }
      } else if (currentView === 'cervical_spine') {
        const spineChapters = [
          'spine-ch-1', 
          'spine-ch-2', 
          'spine-ch-3', 
          'spine-ch-4', 
          'spine-ch-5', 
          'spine-ch-6', 
          'spine-ch-7'
        ];
        for (const chId of spineChapters) {
          const el = document.getElementById(chId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 250 && rect.bottom >= 250) {
              setActiveSection(chId);
              break;
            }
          }
        }
      } else if (currentView === 'monograph') {
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
      } else if (currentView === 'chronic_back_pain') {
        const bpChapters = [
          'bp-ch-1',
          'bp-ch-2',
          'bp-ch-3',
          'bp-ch-4',
          'bp-ch-5',
          'bp-ch-6',
          'bp-ch-7'
        ];
        for (const chId of bpChapters) {
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

  const handleSwitchView = (view: 'ankle_trauma' | 'cervical_spine' | 'breast_cancer' | 'monograph' | 'chronic_back_pain' | 'qa' | 'doctors') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AudioReaderProvider>
      <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-rose-500 selection:text-white">
        {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 transition-all">
        {/* Reading Progress Line */}
        {(currentView === 'ankle_trauma' || currentView === 'cervical_spine' || currentView === 'monograph' || currentView === 'breast_cancer' || currentView === 'chronic_back_pain') && (
          <div 
            className="h-1 bg-gradient-to-r from-rose-500 via-amber-500 to-teal-400 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        )}
        
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 h-14 py-2 flex items-center justify-between gap-2">
          {/* Logo & Brand */}
          <div 
            onClick={() => handleSwitchView('ankle_trauma')}
            className="flex items-center gap-2 cursor-pointer select-none shrink-0"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center text-white font-black text-xs shadow-sm">
              <Footprints className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-xs sm:text-sm tracking-tight text-slate-100 hidden md:inline">
              MOM HEALTH ATLAS
            </span>
          </div>

          {/* View Mode Toggle Pill (7 Navigation Tabs) */}
          <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-[11px] sm:text-xs font-bold overflow-x-auto max-w-full">
            {/* Mắt Cá Chân */}
            <button
              onClick={() => handleSwitchView('ankle_trauma')}
              className={`px-2.5 sm:px-3 py-1 rounded-lg transition-all flex items-center gap-1 sm:gap-1.5 whitespace-nowrap cursor-pointer ${
                currentView === 'ankle_trauma'
                  ? 'bg-rose-500 text-white shadow-sm shadow-rose-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Footprints className="w-3.5 h-3.5 shrink-0" />
              <span>Mắt Cá</span>
            </button>

            {/* Cột Sống Cổ */}
            <button
              onClick={() => handleSwitchView('cervical_spine')}
              className={`px-2.5 sm:px-3 py-1 rounded-lg transition-all flex items-center gap-1 sm:gap-1.5 whitespace-nowrap cursor-pointer ${
                currentView === 'cervical_spine'
                  ? 'bg-amber-500 text-slate-950 shadow-sm shadow-amber-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Bone className="w-3.5 h-3.5 shrink-0" />
              <span>Cổ ACDF</span>
            </button>

            {/* Đau Lưng Kinh Niên (MỚI) */}
            <button
              onClick={() => handleSwitchView('chronic_back_pain')}
              className={`px-2.5 sm:px-3 py-1 rounded-lg transition-all flex items-center gap-1 sm:gap-1.5 whitespace-nowrap cursor-pointer ${
                currentView === 'chronic_back_pain'
                  ? 'bg-indigo-500 text-white shadow-sm shadow-indigo-500/30 ring-1 ring-indigo-400'
                  : 'text-indigo-400 hover:text-indigo-200 bg-indigo-950/30'
              }`}
            >
              <Activity className="w-3.5 h-3.5 shrink-0" />
              <span>Đau Lưng (Mới)</span>
            </button>

            {/* K Vú */}
            <button
              onClick={() => handleSwitchView('breast_cancer')}
              className={`px-2.5 sm:px-3 py-1 rounded-lg transition-all flex items-center gap-1 sm:gap-1.5 whitespace-nowrap cursor-pointer ${
                currentView === 'breast_cancer'
                  ? 'bg-rose-500 text-white shadow-sm shadow-rose-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Ribbon className="w-3.5 h-3.5 shrink-0" />
              <span>K Vú</span>
            </button>

            {/* Tử Cung */}
            <button
              onClick={() => handleSwitchView('monograph')}
              className={`px-2.5 sm:px-3 py-1 rounded-lg transition-all flex items-center gap-1 sm:gap-1.5 whitespace-nowrap cursor-pointer ${
                currentView === 'monograph'
                  ? 'bg-teal-500 text-slate-950 shadow-sm shadow-teal-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5 shrink-0" />
              <span>Tử Cung</span>
            </button>

            {/* Q&A */}
            <button
              onClick={() => handleSwitchView('qa')}
              className={`px-2 sm:px-3 py-1 rounded-lg transition-all flex items-center gap-1 sm:gap-1.5 whitespace-nowrap cursor-pointer ${
                currentView === 'qa'
                  ? 'bg-amber-400 text-slate-950 shadow-sm shadow-amber-400/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 shrink-0" />
              <span>Tập Q&A (68)</span>
            </button>

            {/* Bác Sĩ */}
            <button
              onClick={() => handleSwitchView('doctors')}
              className={`px-2 sm:px-3 py-1 rounded-lg transition-all flex items-center gap-1 sm:gap-1.5 whitespace-nowrap cursor-pointer ${
                currentView === 'doctors'
                  ? 'bg-purple-500 text-white shadow-sm shadow-purple-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 shrink-0" />
              <span>Top 30 Bác Sĩ</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Router */}
      <main className="flex-1 w-full">
        {currentView === 'ankle_trauma' && (
          <AnkleFractureArticle
            onOpenVideoModal={(video) => setSelectedVideo(video)}
            onNavigateToDoctors={() => handleSwitchView('doctors')}
            onNavigateToQA={() => handleSwitchView('qa')}
          />
        )}

        {currentView === 'cervical_spine' && (
          <CervicalSpineArticle
            onOpenVideoModal={(video) => setSelectedVideo(video)}
            onNavigateToDoctors={() => handleSwitchView('doctors')}
            onNavigateToQA={() => handleSwitchView('qa')}
          />
        )}

        {currentView === 'chronic_back_pain' && (
          <ChronicBackPainArticle
            onOpenVideoModal={(video) => setSelectedVideo(video)}
            onSwitchToGynecologyModule={() => handleSwitchView('monograph')}
            onSwitchToBreastCancerModule={() => handleSwitchView('breast_cancer')}
            onSwitchToCervicalSpineModule={() => handleSwitchView('cervical_spine')}
          />
        )}

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
            onBackToBook={() => handleSwitchView('chronic_back_pain')}
            defaultTopic="back_pain"
          />
        )}

        {currentView === 'doctors' && (
          <DoctorsDirectoryPage
            onBackToBook={() => handleSwitchView('ankle_trauma')}
            onOpenQA={() => handleSwitchView('qa')}
            defaultTopic="ankle"
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

      {/* Global Audio Speech Reader Player Bar */}
      <AudioPlayerBar />

      {/* Video Modal Player */}
      <VideoModal
        media={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      {/* Footer */}
      <Footer />
    </div>
  </AudioReaderProvider>
  );
}

export default App;
