import React, { useState, useEffect } from 'react';
import { 
  BOOK_MODULES, 
  BOOK_MODULE_CATEGORIES
} from '../data/bookModulesData';
import { UserAuthButton } from './UserAuthButton';
import { 
  BookOpen, 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  Sparkles, 
  Layers
} from 'lucide-react';

interface BookSidebarNavProps {
  currentView: string;
  onSwitchView: (view: string) => void;
  scrollProgress: number;
}

export const BookSidebarNav: React.FC<BookSidebarNavProps> = ({
  currentView,
  onSwitchView,
  scrollProgress,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const activeModule = BOOK_MODULES.find(m => m.id === currentView) || BOOK_MODULES[0];
  const ActiveIcon = activeModule.icon;

  // Filter modules by search
  const filteredModules = BOOK_MODULES.filter(m => 
    m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.shortTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close sidebar on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectModule = (id: string) => {
    onSwitchView(id);
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 transition-all shadow-lg">
        {/* Reading Progress Line */}
        <div 
          className="h-1 bg-gradient-to-r from-cyan-500 via-teal-400 to-rose-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 h-14 py-2 flex items-center justify-between gap-3">
          
          {/* Left: Brand Logo & Sidebar Drawer Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-teal-400 border border-slate-800 transition-all cursor-pointer flex items-center gap-2 group"
              title="Mở Tủ Sách & Chuyên Khảo"
            >
              <Menu className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-extrabold text-slate-200 hidden sm:inline">Tủ Sách</span>
            </button>

            <div 
              onClick={() => handleSelectModule('vision_myopia')}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-black text-xs shadow-sm">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <span className="font-extrabold text-xs sm:text-sm tracking-tight text-slate-100 block leading-tight">
                  HEALTH ATLAS
                </span>
                <span className="text-[10px] text-slate-400 font-medium hidden md:block">
                  Thư Viện Chuyên Khảo Y Khoa
                </span>
              </div>
            </div>
          </div>

          {/* Center: Current Active Book Title Dropdown Selector */}
          <div className="relative flex-1 max-w-md hidden md:block">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-teal-500/50 text-slate-200 text-xs font-bold flex items-center justify-between transition-all cursor-pointer shadow-inner"
            >
              <div className="flex items-center gap-2 truncate">
                <div className={`p-1 rounded-md bg-gradient-to-r ${activeModule.accentColor} text-white shrink-0`}>
                  <ActiveIcon className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-400 font-normal">Đang xem:</span>
                <span className="text-cyan-300 font-extrabold truncate">{activeModule.title}</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${dropdownOpen ? 'rotate-180 text-teal-400' : ''}`} />
            </button>

            {/* Quick Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="p-2 border-b border-slate-800 text-[11px] font-bold text-slate-400 flex items-center justify-between">
                  <span>CHỌN TỰA SÁCH CHUYÊN KHẢO</span>
                  <span className="text-teal-400">{BOOK_MODULES.length} Modules</span>
                </div>
                <div className="max-h-80 overflow-y-auto py-1 space-y-1">
                  {BOOK_MODULES.map((mod) => {
                    const Icon = mod.icon;
                    const isSelected = mod.id === currentView;
                    return (
                      <button
                        key={mod.id}
                        onClick={() => handleSelectModule(mod.id)}
                        className={`w-full p-2 rounded-xl text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                          isSelected 
                            ? 'bg-teal-500/20 text-teal-200 border border-teal-500/40' 
                            : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                        }`}
                      >
                        <div className={`p-1.5 rounded-lg bg-slate-800 border border-slate-700 shrink-0 ${isSelected ? 'text-teal-400 border-teal-500/50' : 'text-slate-400'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 truncate">
                          <div className="flex items-center justify-between">
                            <span className="font-bold">{mod.shortTitle}</span>
                            {mod.badge && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800">
                                {mod.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[10px] text-slate-400 truncate">{mod.subtitle}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right: Active Book Quick Badge on Mobile & User Google Auth */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 text-teal-300 text-xs font-bold flex items-center gap-1.5 cursor-pointer max-w-[140px] truncate"
            >
              <ActiveIcon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span className="truncate">{activeModule.shortTitle}</span>
            </button>

            {/* Google OAuth Login Button */}
            <UserAuthButton />
          </div>

        </div>
      </header>

      {/* Backdrop for Slide-over Sidebar Drawer */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        />
      )}

      {/* Slide-over Sidebar Drawer Panel */}
      <aside className={`fixed top-0 left-0 bottom-0 z-50 w-full max-w-sm bg-slate-950 border-r border-slate-800 shadow-2xl transition-transform duration-300 transform flex flex-col ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Sidebar Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-md">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-extrabold text-white text-sm tracking-wide">TỦ SÁCH CHUYÊN KHẢO</h2>
              <p className="text-[11px] text-slate-400">Thư viện y khoa & công cụ lâm sàng</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar inside Sidebar */}
        <div className="p-3 border-b border-slate-850 bg-slate-950">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm tựa sách, chủ đề y khoa..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-teal-500 transition-all"
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

        {/* Categorized Book List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-6">
          {BOOK_MODULE_CATEGORIES.map((cat) => {
            const catModules = filteredModules.filter(m => m.category === cat.id);
            if (catModules.length === 0) return null;

            return (
              <div key={cat.id} className="space-y-2">
                <div className="px-2">
                  <div className="text-[11px] font-black uppercase text-teal-400 tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>{cat.title}</span>
                  </div>
                  <p className="text-[10px] text-slate-500">{cat.description}</p>
                </div>

                <div className="space-y-1.5">
                  {catModules.map((mod) => {
                    const Icon = mod.icon;
                    const isSelected = mod.id === currentView;

                    return (
                      <button
                        key={mod.id}
                        onClick={() => handleSelectModule(mod.id)}
                        className={`w-full p-3 rounded-2xl text-left transition-all flex items-start gap-3 cursor-pointer group border ${
                          isSelected
                            ? 'bg-slate-900 border-teal-500/60 shadow-lg shadow-teal-500/10'
                            : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700'
                        }`}
                      >
                        <div className={`p-2.5 rounded-xl border shrink-0 transition-transform group-hover:scale-105 ${
                          isSelected
                            ? 'bg-gradient-to-br ' + mod.accentColor + ' text-white border-transparent shadow-md'
                            : 'bg-slate-800 text-slate-300 border-slate-700'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className={`text-xs font-extrabold truncate ${isSelected ? 'text-teal-300' : 'text-slate-100 group-hover:text-teal-300'}`}>
                              {mod.shortTitle}
                            </span>
                            {mod.badge && (
                              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap ${
                                isSelected 
                                  ? 'bg-teal-400 text-slate-950 font-black' 
                                  : 'bg-slate-800 text-teal-300 border border-teal-900'
                              }`}>
                                {mod.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400 font-medium leading-tight mt-0.5 line-clamp-2">
                            {mod.subtitle}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-slate-800 bg-slate-900/40 text-[11px] text-slate-500 text-center">
          💡 Thư viện hỗ trợ mở rộng thêm hàng chục tựa sách & chuyên khảo mới dễ dàng.
        </div>
      </aside>
    </>
  );
};
