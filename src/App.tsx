import { useState, useEffect } from 'react';
import { AnkleFractureArticle } from './components/AnkleFractureArticle';
import { CervicalSpineArticle } from './components/CervicalSpineArticle';
import { BreastCancerArticle } from './components/BreastCancerArticle';
import { BookLayoutArticle } from './components/BookLayoutArticle';
import { ChronicBackPainArticle } from './components/ChronicBackPainArticle';
import { MenstrualCycleTrackerSection } from './components/MenstrualCycleTrackerSection';
import { QAPage } from './components/QAPage';
import { DoctorsDirectoryPage } from './components/DoctorsDirectoryPage';
import { MobileBottomNav } from './components/MobileBottomNav';
import { VideoModal } from './components/VideoModal';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { AudioReaderProvider } from './context/AudioReaderContext';
import { Footer } from './components/Footer';
import type { MediaItem } from './types/medical';
import { HelpCircle, UserCheck, Ribbon, Stethoscope, Bone, Footprints, Activity, Calendar } from 'lucide-react';

export function App() {
  const [currentView, setCurrentView] = useState<'ankle_trauma' | 'cervical_spine' | 'breast_cancer' | 'monograph' | 'chronic_back_pain' | 'qa' | 'doctors' | 'cycle_tracker'>('cycle_tracker');
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

  const handleSwitchView = (view: 'ankle_trauma' | 'cervical_spine' | 'breast_cancer' | 'monograph' | 'chronic_back_pain' | 'qa' | 'doctors' | 'cycle_tracker') => {
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

          {/* Smart Categorized Navigation Header */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full text-xs font-bold py-1">
            {/* 1. Công Cụ Theo Dõi Chu Kỳ (Nổi Bật Nhất) */}
            <button
              onClick={() => handleSwitchView('cycle_tracker')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                currentView === 'cycle_tracker'
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md shadow-rose-500/30 ring-1 ring-rose-400 font-black'
                  : 'text-rose-300 hover:text-white bg-rose-950/40 hover:bg-rose-900/60 border border-rose-900/50'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-rose-300 shrink-0" />
              <span>Nhập Chu Kỳ (43)</span>
            </button>

            {/* 2. 5 Chuyên Khảo Bệnh Học (Group Segmented Tabs) */}
            <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 gap-0.5">
              <button
                onClick={() => handleSwitchView('ankle_trauma')}
                title="Chuyên khảo Mắt Cá Chân"
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer ${
                  currentView === 'ankle_trauma'
                    ? 'bg-rose-500 text-white shadow-sm font-black'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <Footprints className="w-3.5 h-3.5 shrink-0" />
                <span>Mắt Cá</span>
              </button>

              <button
                onClick={() => handleSwitchView('cervical_spine')}
                title="Chuyên khảo Cột Sống Cổ ACDF"
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer ${
                  currentView === 'cervical_spine'
                    ? 'bg-amber-500 text-slate-950 shadow-sm font-black'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <Bone className="w-3.5 h-3.5 shrink-0" />
                <span>Cổ ACDF</span>
              </button>

              <button
                onClick={() => handleSwitchView('chronic_back_pain')}
                title="Chuyên khảo Đau Lưng Kinh Niên"
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer ${
                  currentView === 'chronic_back_pain'
                    ? 'bg-indigo-500 text-white shadow-sm font-black'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <Activity className="w-3.5 h-3.5 shrink-0" />
                <span>Đau Lưng</span>
              </button>

              <button
                onClick={() => handleSwitchView('breast_cancer')}
                title="Chuyên khảo K Vú"
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer ${
                  currentView === 'breast_cancer'
                    ? 'bg-rose-500 text-white shadow-sm font-black'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <Ribbon className="w-3.5 h-3.5 shrink-0" />
                <span>K Vú</span>
              </button>

              <button
                onClick={() => handleSwitchView('monograph')}
                title="Chuyên khảo Phụ Khoa & Tử Cung"
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer ${
                  currentView === 'monograph'
                    ? 'bg-teal-500 text-slate-950 shadow-sm font-black'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <Stethoscope className="w-3.5 h-3.5 shrink-0" />
                <span>Tử Cung</span>
              </button>
            </div>

            {/* 3. Hỏi Đáp Q&A */}
            <button
              onClick={() => handleSwitchView('qa')}
              className={`px-2.5 py-1.5 rounded-xl transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer ${
                currentView === 'qa'
                  ? 'bg-amber-400 text-slate-950 font-black shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 shrink-0 text-amber-400" />
              <span>Q&A (68)</span>
            </button>

            {/* 4. Danh Bạ Bác Sĩ */}
            <button
              onClick={() => handleSwitchView('doctors')}
              className={`px-2.5 py-1.5 rounded-xl transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer ${
                currentView === 'doctors'
                  ? 'bg-purple-500 text-white font-black shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 shrink-0 text-purple-400" />
              <span>Bác Sĩ</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Router */}
      <main className="flex-1 w-full">
        {currentView === 'cycle_tracker' && (
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6">
            <MenstrualCycleTrackerSection />
          </div>
        )}

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
