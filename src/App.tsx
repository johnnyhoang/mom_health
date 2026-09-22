import { useState, useEffect } from 'react';
import { AnkleFractureArticle } from './components/AnkleFractureArticle';
import { CervicalSpineArticle } from './components/CervicalSpineArticle';
import { BreastCancerArticle } from './components/BreastCancerArticle';
import { BookLayoutArticle } from './components/BookLayoutArticle';
import { ChronicBackPainArticle } from './components/ChronicBackPainArticle';
import { VisionMyopiaArticle } from './components/VisionMyopiaArticle';
import { QAPage } from './components/QAPage';
import { DoctorsDirectoryPage } from './components/DoctorsDirectoryPage';
import { MobileBottomNav } from './components/MobileBottomNav';
import { VideoModal } from './components/VideoModal';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { AudioReaderProvider } from './context/AudioReaderContext';
import { AuthProvider } from './context/AuthContext';
import { BookSidebarNav } from './components/BookSidebarNav';
import { Footer } from './components/Footer';
import type { MediaItem } from './types/medical';

type ViewType = 'ankle_trauma' | 'cervical_spine' | 'breast_cancer' | 'monograph' | 'chronic_back_pain' | 'vision_myopia' | 'qa' | 'doctors';

const VALID_VIEWS: ViewType[] = [
  'ankle_trauma', 'cervical_spine', 'breast_cancer', 'monograph', 'chronic_back_pain', 'vision_myopia', 'qa', 'doctors'
];

function getInitialView(): ViewType {
  const urlParams = new URLSearchParams(window.location.search);
  const viewParam = urlParams.get('view') as ViewType;
  if (viewParam && VALID_VIEWS.includes(viewParam)) {
    return viewParam;
  }
  const savedView = localStorage.getItem('app_current_view') as ViewType;
  if (savedView && VALID_VIEWS.includes(savedView)) {
    return savedView;
  }
  return 'vision_myopia';
}

function getInitialSection(view: ViewType): string {
  const hash = window.location.hash.replace('#', '');
  if (hash) return hash;
  return localStorage.getItem('app_active_section_' + view) || 'vision-ch-1';
}

export function App() {
  const [currentView, setCurrentView] = useState<ViewType>(getInitialView);
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);
  const [activeSection, setActiveSection] = useState<string>(() => getInitialSection(getInitialView()));
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Restore scroll position to active section on initial mount or view change
  useEffect(() => {
    const hashSection = window.location.hash.replace('#', '');
    const savedSection = hashSection || localStorage.getItem('app_active_section_' + currentView);
    if (savedSection) {
      const timer = setTimeout(() => {
        const targetEl = document.getElementById(savedSection);
        if (targetEl) {
          const offset = 60;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = targetEl.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          setActiveSection(savedSection);
        }
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [currentView]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      let detectedSection = '';
      if (currentView === 'vision_myopia') {
        const visionChapters = ['vision-ch-1', 'vision-ch-2', 'vision-ch-3', 'vision-ch-4', 'vision-ch-5', 'vision-ch-6', 'vision-ch-7'];
        for (const chId of visionChapters) {
          const el = document.getElementById(chId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 250 && rect.bottom >= 250) {
              detectedSection = chId;
              break;
            }
          }
        }
      } else if (currentView === 'ankle_trauma') {
        const ankleChapters = ['ankle-ch-1', 'ankle-ch-2', 'ankle-ch-3', 'ankle-ch-4', 'ankle-ch-5', 'ankle-ch-6', 'ankle-ch-7'];
        for (const chId of ankleChapters) {
          const el = document.getElementById(chId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 250 && rect.bottom >= 250) {
              detectedSection = chId;
              break;
            }
          }
        }
      } else if (currentView === 'cervical_spine') {
        const spineChapters = ['spine-ch-1', 'spine-ch-2', 'spine-ch-3', 'spine-ch-4', 'spine-ch-5', 'spine-ch-6', 'spine-ch-7'];
        for (const chId of spineChapters) {
          const el = document.getElementById(chId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 250 && rect.bottom >= 250) {
              detectedSection = chId;
              break;
            }
          }
        }
      } else if (currentView === 'monograph') {
        const chapters = ['chapter-1', 'chapter-2', 'chapter-3', 'chapter-4', 'chapter-5', 'chapter-6', 'chapter-7'];
        for (const chId of chapters) {
          const el = document.getElementById(chId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 250 && rect.bottom >= 250) {
              detectedSection = chId;
              break;
            }
          }
        }
      } else if (currentView === 'breast_cancer') {
        const bcChapters = [
          'bc-chapter-1', 'bc-chapter-2', 'bc-chapter-3', 'bc-chapter-4',
          'bc-chapter-5', 'bc-chapter-6', 'bc-chapter-7', 'bc-chapter-8'
        ];
        for (const chId of bcChapters) {
          const el = document.getElementById(chId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 250 && rect.bottom >= 250) {
              detectedSection = chId;
              break;
            }
          }
        }
      } else if (currentView === 'chronic_back_pain') {
        const bpChapters = ['bp-ch-1', 'bp-ch-2', 'bp-ch-3', 'bp-ch-4', 'bp-ch-5', 'bp-ch-6', 'bp-ch-7'];
        for (const chId of bpChapters) {
          const el = document.getElementById(chId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 250 && rect.bottom >= 250) {
              detectedSection = chId;
              break;
            }
          }
        }
      }

      if (detectedSection) {
        setActiveSection(detectedSection);
        localStorage.setItem('app_active_section_' + currentView, detectedSection);
        window.history.replaceState(null, '', '?view=' + currentView + '#' + detectedSection);
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
      localStorage.setItem('app_active_section_' + currentView, sectionId);
      window.history.replaceState(null, '', '?view=' + currentView + '#' + sectionId);
    }
  };

  const handleSwitchView = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('app_current_view', view);

    const savedSection = localStorage.getItem('app_active_section_' + view) || '';
    const newUrl = '?view=' + view + (savedSection ? '#' + savedSection : '');
    window.history.replaceState(null, '', newUrl);

    if (savedSection) {
      setTimeout(() => {
        handleJumpToSection(savedSection);
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };


  return (
    <AuthProvider>
      <AudioReaderProvider>
      <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">

          {/* Top Scalable Book Navigation Header & Sidebar */}
          <BookSidebarNav
            currentView={currentView}
            onSwitchView={(v) => handleSwitchView(v as ViewType)}
            scrollProgress={scrollProgress}
          />

      {/* Main Content Router */}
      <main className="flex-1 w-full">
        {currentView === 'vision_myopia' && (
          <VisionMyopiaArticle
            onOpenVideoModal={(video) => setSelectedVideo(video)}
            onNavigateToDoctors={() => handleSwitchView('doctors')}
            onNavigateToQA={() => handleSwitchView('qa')}
          />
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
            onBackToBook={() => handleSwitchView('vision_myopia')}
            defaultTopic="vision"
          />
        )}

        {currentView === 'doctors' && (
          <DoctorsDirectoryPage
            onBackToBook={() => handleSwitchView('vision_myopia')}
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
</AuthProvider>
  );
}


export default App;

