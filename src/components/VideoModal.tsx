import React from 'react';
import { X, Play, CheckCircle2, Video } from 'lucide-react';
import type { MediaItem } from '../types/medical';

interface VideoModalProps {
  media: MediaItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ media, onClose }) => {
  if (!media) return null;

  const embedUrl = media.videoEmbedId
    ? `https://www.youtube.com/embed/${media.videoEmbedId}?autoplay=1&rel=0`
    : media.url || media.mediaUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in" onClick={onClose}>
      <div 
        className="bg-slate-900 border border-slate-700 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl text-white flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-600/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-teal-400 tracking-wider">
                {media.category}
              </span>
              <h3 className="font-bold text-sm sm:text-base line-clamp-1">{media.title}</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
          {embedUrl ? (
            <iframe
              className="w-full h-full"
              src={embedUrl}
              title={media.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="text-center p-8 text-slate-400 space-y-2">
              <Play className="w-12 h-12 mx-auto text-teal-500 opacity-80" />
              <p className="text-sm">Video tư liệu lâm sàng chất lượng cao</p>
            </div>
          )}
        </div>

        {/* Clinical Points & Description */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 bg-slate-900">
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Mô tả quy trình y khoa</h4>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-relaxed">
              {media.description}
            </p>
          </div>

          {media.keyAnatomicalOrClinicalPoints && media.keyAnatomicalOrClinicalPoints.length > 0 && (
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <h4 className="text-xs font-bold uppercase text-teal-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                Các Trọng Điểm Kỹ Thuật Cần Quan Sát
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {media.keyAnatomicalOrClinicalPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {media.clinicalNote && (
            <div className="p-3 rounded-lg bg-teal-950/30 border-l-2 border-teal-400 text-xs text-teal-200">
              <strong>Ghi chú chuyên khoa:</strong> {media.clinicalNote}
            </div>
          )}

          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-800">
            <span>Nguồn tư liệu: {media.source}</span>
            <span className="text-teal-400 font-mono">Evidence-Based Clinical Archive</span>
          </div>
        </div>
      </div>
    </div>
  );
};
