import React from 'react';
import { useAudioReader } from '../context/AudioReaderContext';
import { Volume2, Pause, Headphones } from 'lucide-react';

interface ReadAloudButtonProps {
  id: string;
  title: string;
  text: string;
  variant?: 'hero' | 'chapter' | 'card' | 'compact' | 'badge';
  label?: string;
  durationEstimate?: string;
  className?: string;
}

export const ReadAloudButton: React.FC<ReadAloudButtonProps> = ({
  id,
  title,
  text,
  variant = 'compact',
  label,
  durationEstimate,
  className = ''
}) => {
  const { currentId, isPlaying, isPaused, speak, pause, resume } = useAudioReader();

  const isCurrentSection = currentId === id;
  const isSectionPlaying = isCurrentSection && isPlaying;
  const isSectionPaused = isCurrentSection && isPaused;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSectionPlaying) {
      pause();
    } else if (isSectionPaused) {
      resume();
    } else {
      speak(id, title, text);
    }
  };

  if (variant === 'hero') {
    return (
      <button
        onClick={handleClick}
        className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2.5 shadow-lg ${
          isSectionPlaying
            ? 'bg-amber-500 text-slate-950 ring-2 ring-amber-400/80 animate-pulse'
            : isSectionPaused
            ? 'bg-teal-600 text-white'
            : 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 hover:from-teal-400 hover:to-emerald-400'
        } ${className}`}
        title={isSectionPlaying ? 'Tạm dừng đọc' : 'Bấm để nghe đọc toàn bộ chuyên khảo'}
      >
        {isSectionPlaying ? (
          <Pause className="w-4 h-4 fill-slate-950" />
        ) : (
          <Headphones className="w-4 h-4" />
        )}
        <span>
          {label || (isSectionPlaying ? 'Đang đọc...' : isSectionPaused ? 'Tiếp tục nghe' : 'Bấm để nghe đọc chuyên khảo')}
        </span>
        {durationEstimate && (
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-950/20 font-mono font-normal">
            {durationEstimate}
          </span>
        )}
      </button>
    );
  }

  if (variant === 'chapter') {
    return (
      <button
        onClick={handleClick}
        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 border ${
          isSectionPlaying
            ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-md ring-1 ring-amber-500/40'
            : isSectionPaused
            ? 'bg-teal-950 border-teal-500 text-teal-300'
            : 'bg-slate-900/80 hover:bg-slate-850 border-slate-800 text-teal-300 hover:text-white'
        } ${className}`}
        title={isSectionPlaying ? 'Tạm dừng đọc' : 'Nghe đọc chương này'}
      >
        {isSectionPlaying ? (
          <Pause className="w-3.5 h-3.5 text-amber-400" />
        ) : (
          <Volume2 className="w-3.5 h-3.5 text-teal-400" />
        )}
        <span>
          {label || (isSectionPlaying ? 'Tạm dừng' : isSectionPaused ? 'Tiếp tục' : 'Nghe chương')}
        </span>
      </button>
    );
  }

  if (variant === 'card') {
    return (
      <button
        onClick={handleClick}
        className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all flex items-center gap-1 border ${
          isSectionPlaying
            ? 'bg-amber-950/80 border-amber-500 text-amber-300'
            : isSectionPaused
            ? 'bg-teal-950 border-teal-500 text-teal-300'
            : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
        } ${className}`}
        title={isSectionPlaying ? 'Tạm dừng' : 'Nghe đọc nội dung này'}
      >
        {isSectionPlaying ? (
          <Pause className="w-3 h-3 text-amber-400" />
        ) : (
          <Volume2 className="w-3 h-3 text-teal-400" />
        )}
        <span>
          {label || (isSectionPlaying ? 'Đang đọc' : 'Nghe đọc')}
        </span>
      </button>
    );
  }

  // Compact variant (default icon button)
  return (
    <button
      onClick={handleClick}
      className={`p-1.5 rounded-lg transition-all border ${
        isSectionPlaying
          ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm'
          : isSectionPaused
          ? 'bg-teal-950 border-teal-500 text-teal-300'
          : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-teal-300 hover:bg-slate-800'
      } ${className}`}
      title={isSectionPlaying ? 'Tạm dừng đọc' : label || 'Nghe đọc'}
    >
      {isSectionPlaying ? (
        <Pause className="w-3.5 h-3.5 text-amber-400" />
      ) : (
        <Volume2 className="w-3.5 h-3.5 text-teal-400" />
      )}
    </button>
  );
};
