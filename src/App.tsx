import { useState, useEffect } from 'react';
import { BookLayoutArticle } from './components/BookLayoutArticle';
import { MobileBottomNav } from './components/MobileBottomNav';
import { VideoModal } from './components/VideoModal';
import { Footer } from './components/Footer';
import type { MediaItem } from './types/medical';
import { BookOpen } from 'lucide-react';

export function App() {
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

      // Track active chapter across all 7 chapters
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
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      
      {/* Top Sticky Reading Progress Header */}
      <header className="sticky top-0 z-40 w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 transition-all">
        {/* Reading Progress Line */}
        <div 
          className="h-1 bg-gradient-to-r from-rose-500 via-teal-400 to-emerald-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
        
        <div className="w-full max-w-3xl mx-auto px-5 sm:px-6 h-12 flex items-center justify-between">
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <BookOpen className="w-4 h-4 text-teal-400" />
            <span className="font-extrabold text-xs sm:text-sm tracking-tight text-slate-100">
              CHUYÊN KHẢO TAMOXIFEN & NỘI MẠC TỬ CUNG
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <span>Tiến độ: <strong className="text-teal-400">{Math.round(scrollProgress)}%</strong></span>
          </div>
        </div>
      </header>

      {/* Book-Style Long-form Single Stream Article */}
      <main className="flex-1 w-full">
        <BookLayoutArticle
          onOpenVideoModal={(video) => setSelectedVideo(video)}
        />
      </main>

      {/* Floating Mobile Bottom Navigation Bar & Drawer */}
      <MobileBottomNav
        activeSection={activeSection}
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
