import React, { useState, useEffect } from 'react';
import { Type, Minus, Plus } from 'lucide-react';

export type FontSizeLevel = 'sm' | 'md' | 'lg' | 'xl';

const FONT_SIZES: { id: FontSizeLevel; label: string; scaleLabel: string; px: string }[] = [
  { id: 'sm', label: 'Nhỏ', scaleLabel: '90%', px: '14.5px' },
  { id: 'md', label: 'Chuẩn', scaleLabel: '100%', px: '16px' },
  { id: 'lg', label: 'Lớn', scaleLabel: '115%', px: '18px' },
  { id: 'xl', label: 'Rất Lớn', scaleLabel: '130%', px: '20.5px' },
];

interface FontSizeControlProps {
  variant?: 'compact' | 'full' | 'inline';
  className?: string;
}

export const FontSizeControl: React.FC<FontSizeControlProps> = ({ 
  variant = 'compact',
  className = '' 
}) => {
  const [fontSize, setFontSize] = useState<FontSizeLevel>(() => {
    const saved = localStorage.getItem('app_font_size') as FontSizeLevel;
    return (saved && ['sm', 'md', 'lg', 'xl'].includes(saved)) ? saved : 'md';
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-font-size', fontSize);
    localStorage.setItem('app_font_size', fontSize);
  }, [fontSize]);

  const currentIndex = FONT_SIZES.findIndex(f => f.id === fontSize);

  const handleDecrease = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex > 0) {
      setFontSize(FONT_SIZES[currentIndex - 1].id);
    }
  };

  const handleIncrease = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex < FONT_SIZES.length - 1) {
      setFontSize(FONT_SIZES[currentIndex + 1].id);
    }
  };

  const handleSetSize = (id: FontSizeLevel) => {
    setFontSize(id);
    setIsOpen(false);
  };

  if (variant === 'inline') {
    return (
      <div className={`flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-900 border border-slate-800 ${className}`}>
        <button
          onClick={handleDecrease}
          disabled={currentIndex === 0}
          aria-label="Giảm cỡ chữ"
          className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer transition-colors"
          title="Giảm cỡ chữ (A-)"
        >
          <Minus className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-1 px-1">
          {FONT_SIZES.map((f) => (
            <button
              key={f.id}
              onClick={() => handleSetSize(f.id)}
              className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                fontSize === f.id
                  ? 'bg-teal-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <button
          onClick={handleIncrease}
          disabled={currentIndex === FONT_SIZES.length - 1}
          aria-label="Tăng cỡ chữ"
          className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer transition-colors"
          title="Tăng cỡ chữ (A+)"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5 ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
            <Type className="w-4 h-4 text-teal-400" />
            <span>Cỡ Chữ Bài Đọc ({FONT_SIZES[currentIndex].label} - {FONT_SIZES[currentIndex].scaleLabel})</span>
          </div>
          <span className="text-[10px] font-mono text-teal-400 font-semibold px-2 py-0.5 rounded bg-teal-950/80 border border-teal-800/60">
            {FONT_SIZES[currentIndex].scaleLabel}
          </span>
        </div>

        <div className="grid grid-cols-4 gap-1.5">
          {FONT_SIZES.map((f) => (
            <button
              key={f.id}
              onClick={() => handleSetSize(f.id)}
              className={`py-2 px-1 rounded-xl text-center font-bold text-xs transition-all cursor-pointer border ${
                fontSize === f.id
                  ? 'bg-teal-500 text-slate-950 border-teal-400 shadow-md ring-1 ring-teal-400/40'
                  : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <div className="text-[11px] leading-tight">{f.label}</div>
              <div className="text-[9px] font-mono opacity-80 mt-0.5">{f.scaleLabel}</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Compact variant: Quick Stepper with Dropdown
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <div className="flex items-center rounded-xl bg-slate-900 border border-slate-800 p-0.5 shadow-sm">
        <button
          onClick={handleDecrease}
          disabled={currentIndex === 0}
          aria-label="Giảm cỡ chữ"
          className="p-1.5 rounded-lg text-slate-400 hover:text-teal-300 hover:bg-slate-800 disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-slate-400 cursor-pointer transition-colors"
          title="Giảm cỡ chữ"
        >
          <Minus className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-2 py-1 flex items-center gap-1 text-xs font-bold text-slate-200 hover:text-teal-300 cursor-pointer rounded-lg hover:bg-slate-800/60 transition-colors"
          title="Chọn cỡ chữ bài đọc"
        >
          <Type className="w-3.5 h-3.5 text-teal-400" />
          <span className="text-[11px] font-mono hidden sm:inline">{FONT_SIZES[currentIndex].scaleLabel}</span>
        </button>

        <button
          onClick={handleIncrease}
          disabled={currentIndex === FONT_SIZES.length - 1}
          aria-label="Tăng cỡ chữ"
          className="p-1.5 rounded-lg text-slate-400 hover:text-teal-300 hover:bg-slate-800 disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-slate-400 cursor-pointer transition-colors"
          title="Tăng cỡ chữ"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Quick Dropdown Picker */}
      {isOpen && (
        <>
          <div 
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40" 
          />
          <div className="absolute top-full right-0 mt-2 w-48 bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
            <div className="px-2 py-1.5 border-b border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Type className="w-3.5 h-3.5 text-teal-400" />
              <span>Cỡ Chữ Toàn Hệ Thống</span>
            </div>
            <div className="space-y-1 py-1">
              {FONT_SIZES.map((f) => (
                <button
                  key={f.id}
                  onClick={() => handleSetSize(f.id)}
                  className={`w-full px-2.5 py-1.5 rounded-xl text-left text-xs font-bold flex items-center justify-between transition-all cursor-pointer ${
                    fontSize === f.id
                      ? 'bg-teal-500 text-slate-950 shadow-sm'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <span>{f.label}</span>
                  </span>
                  <span className={`text-[10px] font-mono ${fontSize === f.id ? 'text-slate-950' : 'text-slate-400'}`}>
                    {f.scaleLabel}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
