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
import { AuthProvider, useAuth } from './context/AuthContext';
import { BookSidebarNav } from './components/BookSidebarNav';
import { Footer } from './components/Footer';
import type { MediaItem } from './types/medical';
import { Activity, Loader2 } from 'lucide-react';
import { UserAuthButton } from './components/UserAuthButton';

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
  if (hash && !hash.includes('access_token') && !hash.includes('refresh_token') && !hash.includes('error') && !hash.includes('type=')) return hash;
  return localStorage.getItem('app_active_section_' + view) || 'vision-ch-1';
}

function AppMain() {
  const { user, loading } = useAuth();
  const [currentView, setCurrentView] = useState<ViewType>(getInitialView);
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);
  const [activeSection, setActiveSection] = useState<string>(() => getInitialSection(getInitialView()));
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Restore scroll position to active section on initial mount or view change
  useEffect(() => {
    if (!user) return;
    const hashSection = window.location.hash.replace('#', '');
    const isAuthHash = hashSection.includes('access_token') || hashSection.includes('refresh_token') || hashSection.includes('error') || hashSection.includes('type=');
    const savedSection = (!isAuthHash && hashSection) || localStorage.getItem('app_active_section_' + currentView);
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
  }, [currentView, user]);

  useEffect(() => {
    if (!user) return;
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
  }, [currentView, user]);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-teal-400" />
          <p className="text-xs font-semibold text-slate-400">Đang nạp hệ thống Y khoa...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-6 relative overflow-hidden text-slate-100">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl relative z-10 text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
            <Activity className="w-8 h-8 text-slate-950" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              MOM Health Platform
            </h1>
            <p className="text-xs text-slate-400 leading-relaxed">
              Y học Lâm sàng &amp; Nền tảng Chăm sóc Sức khỏe Chuyên sâu. Vui lòng đăng nhập tài khoản Google để truy cập hệ thống bài viết, phác đồ điều trị và nhật ký y khoa.
            </p>
          </div>

          <div className="pt-2 flex justify-center">
            <UserAuthButton />
          </div>
        </div>
      </div>
    );
  }

  return (
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
  );
}

export function App() {
  return (
    <AuthProvider>
      <AppMain />
    </AuthProvider>
  );
}

export default App;
