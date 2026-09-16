import React from 'react';
import { useAudioReader } from '../context/AudioReaderContext';
import { 
  Play, 
  Pause, 
  Volume2, 
  X, 
  Gauge
} from 'lucide-react';

export const AudioPlayerBar: React.FC = () => {
  const { 
    isPlaying, 
    isPaused, 
    currentTitle, 
    currentId, 
    progress, 
    rate, 
    pause, 
    resume, 
    stop, 
    setRate 
  } = useAudioReader();

  if (!currentId) return null;

  const cycleRate = () => {
    if (rate === 1.0) setRate(1.25);
    else if (rate === 1.25) setRate(1.5);
    else if (rate === 1.5) setRate(0.8);
    else setRate(1.0);
  };

  return (
    <div className="fixed bottom-16 sm:bottom-6 left-3 right-3 sm:left-auto sm:right-6 sm:w-96 z-40 animate-in slide-in-from-bottom-5 duration-300">
      <div className="relative overflow-hidden rounded-2xl bg-slate-900/95 backdrop-blur-md border border-teal-500/50 shadow-2xl shadow-teal-950/50 p-3.5 space-y-2.5">
        
        {/* Top Progress Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800">
          <div 
            className="h-full bg-gradient-to-r from-teal-400 to-emerald-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Content & Controls Row */}
        <div className="flex items-center justify-between gap-3 pt-0.5">
          
          {/* Animated Equalizer / Speaker Icon */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className={`p-2 rounded-xl shrink-0 transition-colors ${
              isPlaying ? 'bg-teal-500/20 text-teal-300' : 'bg-slate-800 text-slate-400'
            }`}>
              <Volume2 className={`w-4 h-4 ${isPlaying ? 'animate-pulse' : ''}`} />
            </div>

            {/* Title & Reading indicator */}
            <div className="min-w-0 space-y-0.5">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">
                  {isPlaying ? 'Đang đọc giọng nói' : isPaused ? 'Tạm dừng đọc' : 'Hoàn thành'}
                </span>
                <span className="text-[10px] text-slate-500">• {progress}%</span>
              </div>
              <p className="text-xs font-bold text-white truncate max-w-[190px] sm:max-w-[210px]">
                {currentTitle}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1 shrink-0">
            
            {/* Speed Toggle */}
            <button
              onClick={cycleRate}
              className="px-2 py-1 rounded-lg bg-slate-800 text-[11px] font-bold text-slate-300 hover:text-white hover:bg-slate-750 transition-colors flex items-center gap-0.5"
              title="Tốc độ đọc"
            >
              <Gauge className="w-3 h-3 text-teal-400" />
              <span>{rate}x</span>
            </button>

            {/* Play / Pause */}
            <button
              onClick={isPlaying ? pause : resume}
              className="p-2 rounded-xl bg-teal-500 text-slate-950 font-bold hover:bg-teal-400 transition-colors shadow-md"
              title={isPlaying ? 'Tạm dừng' : 'Tiếp tục đọc'}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-slate-950" />
              ) : (
                <Play className="w-4 h-4 fill-slate-950 ml-0.5" />
              )}
            </button>

            {/* Stop */}
            <button
              onClick={stop}
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
              title="Dừng và đóng"
            >
              <X className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};
