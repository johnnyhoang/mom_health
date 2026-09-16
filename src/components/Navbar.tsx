import React, { useState } from 'react';
import { 
  BookOpen, 
  Layers, 
  Activity, 
  Stethoscope, 
  Pill, 
  Video, 
  GitBranch, 
  Search, 
  Menu,
  X
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'histology', label: 'Mô Học & Chu Kỳ', icon: Layers },
    { id: 'pathology', label: 'Bệnh Lý & Rủi Ro', icon: Activity },
    { id: 'diagnostics', label: 'Tầm Soát & Chẩn Đoán', icon: Stethoscope },
    { id: 'treatment', label: 'Phác Đồ Điều Trị', icon: Pill },
    { id: 'media', label: 'Atlas Ảnh & Video', icon: Video },
    { id: 'decision', label: 'Cây Quyết Định Lâm Sàng', icon: GitBranch },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white transition-all shadow-md">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Title */}
          <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => setActiveTab('histology')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-teal-500 flex items-center justify-center shadow-lg shadow-rose-900/30">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-rose-300 via-teal-200 to-emerald-300 bg-clip-text text-transparent">
                  ENDOMETRIUM ATLAS
                </span>
                <span className="text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-700/60 hidden sm:inline-block">
                  Evidence-Based 2026
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium leading-none">
                Chuyên Khảo Lâm Sàng & Nghiên Cứu Nội Mạc Tử Cung
              </p>
            </div>
          </div>

          {/* Search Box */}
          <div className="relative flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm bệnh lý, chỉ số TVUS, thụ thể ER/PR, CD138, FIGO..."
                className="w-full bg-slate-800/80 border border-slate-700 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-teal-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Status Badge & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/80 px-2.5 py-1 rounded-full text-[11px] text-teal-300">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              <span>Chuẩn ACOG • FIGO • ESHRE</span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white xl:hidden border border-slate-700"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Search & Sub-nav Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-3 border-t border-slate-800 space-y-2">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm thuật ngữ y khoa..."
                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-left transition-all ${
                      isActive
                        ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-teal-400' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
