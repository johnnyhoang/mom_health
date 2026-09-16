import React, { useState } from 'react';
import { mediaAtlasItems } from '../data/mediaAtlasData';
import type { MediaItem } from '../types/medical';
import { 
  Video, 
  Image as ImageIcon, 
  Play, 
  ExternalLink, 
  Sparkles
} from 'lucide-react';

interface MediaAtlasSectionProps {
  onSelectVideo: (media: MediaItem) => void;
}

export const MediaAtlasSection: React.FC<MediaAtlasSectionProps> = ({ onSelectVideo }) => {
  const [selectedMediaType, setSelectedMediaType] = useState<string>('all');
  const [activeDiagramLayer, setActiveDiagramLayer] = useState<string>('all');

  const filteredItems = mediaAtlasItems.filter((item) => {
    if (selectedMediaType === 'all') return true;
    return item.type === selectedMediaType;
  });

  return (
    <section className="w-full py-8 bg-slate-900 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="border-b border-slate-800 pb-5">
          <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Video className="w-4 h-4" />
            <span>Phân Khu V • Atlas Hình Ảnh Y Khoa & Video Lâm Sàng</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Thư Viện Ảnh Giải Phẫu, Siêu Âm, Nội Soi & Phẫu Thuật Y Khoa
          </h2>
          <p className="text-sm text-slate-400 mt-1.5 max-w-4xl">
            Tập hợp sơ đồ mô học vi thể tương tác, các dạng hình thái siêu âm IETA kinh điển, hình ảnh nội soi buồng tử cung thực tế và video phẫu thuật/thủ thuật chuẩn y khoa.
          </p>
        </div>

        {/* Interactive Anatomical SVG Diagram Masterpiece */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 lg:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase text-teal-400 tracking-wider">Mô Hình Đồ Họa Y Khoa Tương Tác</span>
              <h3 className="text-xl font-bold text-white mt-0.5">
                Cấu Trúc Vi Thể Các Tầng Lớp Nội Mạc Tử Cung & Mạch Máu Xoắn
              </h3>
            </div>

            {/* Layer Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'Toàn Bộ Cấu Trúc' },
                { id: 'functionale', label: 'Lớp Chức Năng (Stratum Functionale)' },
                { id: 'basale', label: 'Lớp Đáy (Stratum Basale)' },
                { id: 'vascular', label: 'Động Mạch Xoắn vs Thẳng' }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActiveDiagramLayer(btn.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeDiagramLayer === btn.id
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Diagram Canvas */}
          <div className="relative w-full bg-slate-900 rounded-xl p-4 border border-slate-800 overflow-hidden flex flex-col lg:flex-row items-center gap-6">
            
            {/* SVG Visual Graphic */}
            <div className="w-full lg:w-3/5 aspect-[16/9] max-h-[360px] bg-slate-950 rounded-lg p-3 border border-slate-800 flex items-center justify-center relative overflow-hidden select-none">
              <svg viewBox="0 0 700 400" className="w-full h-full">
                <defs>
                  <linearGradient id="lumenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#042f2e" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0f766e" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="compactumGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#be123c" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#9f1239" stopOpacity="0.85" />
                  </linearGradient>
                  <linearGradient id="spongiosumGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#881337" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#4c0519" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="basaleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b0764" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.95" />
                  </linearGradient>
                  <linearGradient id="myometriumGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#0f172a" stopOpacity="1" />
                  </linearGradient>
                </defs>

                {/* Background Regions */}
                {/* Uterine Cavity (Lumen) */}
                <rect x="20" y="20" width="660" height="40" fill="url(#lumenGrad)" rx="6" />
                <text x="350" y="45" fill="#5eead4" fontSize="13" fontWeight="bold" textAnchor="middle">
                  Khoang Lòng Tử Cung (Uterine Cavity / Lumen)
                </text>

                {/* Stratum Functionale - Compactum */}
                <rect 
                  x="20" y="65" width="660" height="70" 
                  fill="url(#compactumGrad)" 
                  rx="4"
                  opacity={activeDiagramLayer === 'basale' ? 0.25 : 1}
                  className="transition-opacity duration-300"
                />
                <text x="35" y="90" fill="#fecdd3" fontSize="12" fontWeight="bold">
                  Stratum Compactum (Lớp Đặc - Biểu mô phủ hình trụ có lông mao & Tế bào màng rụng hóa)
                </text>

                {/* Stratum Functionale - Spongiosum */}
                <rect 
                  x="20" y="140" width="660" height="110" 
                  fill="url(#spongiosumGrad)" 
                  rx="4"
                  opacity={activeDiagramLayer === 'basale' ? 0.25 : 1}
                  className="transition-opacity duration-300"
                />
                <text x="35" y="165" fill="#fda4af" fontSize="12" fontWeight="bold">
                  Stratum Spongiosum (Lớp Xốp - Các tuyến tử cung nở rộng ngoằn ngoèo & Mô đệm phù nề)
                </text>

                {/* Stratum Basale */}
                <rect 
                  x="20" y="255" width="660" height="65" 
                  fill="url(#basaleGrad)" 
                  rx="4"
                  opacity={activeDiagramLayer === 'functionale' ? 0.25 : 1}
                  className="transition-opacity duration-300"
                />
                <text x="35" y="280" fill="#c084fc" fontSize="12" fontWeight="bold">
                  Stratum Basale (Lớp Đáy - Ổ Tế Bào Gốc eSPCs & Đáy Tuyến Sinh Dưỡng)
                </text>

                {/* Junctional Zone & Myometrium */}
                <rect x="20" y="325" width="660" height="55" fill="url(#myometriumGrad)" rx="6" stroke="#334155" />
                <text x="35" y="355" fill="#94a3b8" fontSize="12" fontWeight="bold">
                  Vùng Chuyển Tiếp JZ (Junctional Zone) & Cơ Tử Cung (Myometrium)
                </text>

                {/* Uterine Glands */}
                <path 
                  d="M 120 70 Q 115 130 135 180 T 110 270" 
                  stroke="#fbbf24" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.85"
                />
                <path 
                  d="M 320 70 Q 340 140 300 200 T 330 270" 
                  stroke="#fbbf24" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.85"
                />
                <path 
                  d="M 520 70 Q 500 130 535 190 T 510 270" 
                  stroke="#fbbf24" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.85"
                />

                {/* Spiral Arteries */}
                {(activeDiagramLayer === 'all' || activeDiagramLayer === 'vascular' || activeDiagramLayer === 'functionale') && (
                  <>
                    <path 
                      d="M 220 330 L 220 260 Q 240 230 210 200 T 235 150 T 215 100 T 225 75" 
                      stroke="#ef4444" strokeWidth="4" fill="none" strokeLinecap="round"
                    />
                    <path 
                      d="M 430 330 L 430 260 Q 450 220 420 180 T 445 130 T 425 90 T 435 75" 
                      stroke="#ef4444" strokeWidth="4" fill="none" strokeLinecap="round"
                    />
                  </>
                )}

                {/* Straight Arteries */}
                {(activeDiagramLayer === 'all' || activeDiagramLayer === 'vascular' || activeDiagramLayer === 'basale') && (
                  <>
                    <line x1="170" y1="330" x2="170" y2="260" stroke="#f87171" strokeWidth="3" strokeDasharray="2,2" />
                    <line x1="380" y1="330" x2="380" y2="260" stroke="#f87171" strokeWidth="3" strokeDasharray="2,2" />
                    <line x1="580" y1="330" x2="580" y2="260" stroke="#f87171" strokeWidth="3" strokeDasharray="2,2" />
                  </>
                )}
              </svg>
            </div>

            {/* Anatomical Highlights Sidebar */}
            <div className="w-full lg:w-2/5 space-y-3 text-xs">
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
                <span className="text-rose-400 font-bold uppercase text-[11px] block">
                  🩸 Động Mạch Xoắn (Spiral Arteries)
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Cấp máu độc quyền cho Lớp Chức Năng (Stratum Functionale). Co thắt nhịp nhàng theo chu kỳ Estrogen/Progesterone và hoại tử bong ra trong kỳ hành kinh.
                </p>
              </div>

              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
                <span className="text-purple-400 font-bold uppercase text-[11px] block">
                  🛡 Lớp Đáy & Tế Bào Gốc (Basal Stem Cells)
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Được cấp máu bởi Động mạch thẳng (Straight Arteries). Không bị rụng khi hành kinh; là "nhà máy" sinh sản tế bào mới sau mỗi chu kỳ hoặc sau can thiệp thủ thuật.
                </p>
              </div>

              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
                <span className="text-teal-400 font-bold uppercase text-[11px] block">
                  🔬 Tuyến Tử Cung (Endometrial Glands)
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Bài tiết dịch giàu Glycogen, Lipid và Cytokines (LIF, Integrin) vào khoang tử cung phục vụ nuôi dưỡng và tiếp nhận phôi nang làm tổ.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Media Items Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-teal-400" />
                Bộ Sưu Tập Tư Liệu Lâm Sàng & Phẫu Thuật Y Khoa
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Xem clip phẫu thuật nội soi thực tế, quy trình sinh thiết Pipelle và hình ảnh siêu âm chuẩn
              </p>
            </div>

            {/* Type Filters */}
            <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
              {[
                { id: 'all', label: 'Tất Cả' },
                { id: 'video', label: 'Video Clip Lâm Sàng' },
                { id: 'ultrasound', label: 'Siêu Âm TVUS' },
                { id: 'hysteroscopy', label: 'Nội Soi Buồng' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setSelectedMediaType(btn.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    selectedMediaType === btn.id
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectVideo(item)}
                className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all hover:shadow-xl hover:shadow-teal-950/30 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-slate-900 flex items-center justify-center overflow-hidden">
                    {item.type === 'video' ? (
                      <>
                        <img
                          src={`https://img.youtube.com/vi/${item.videoEmbedId}/hqdefault.jpg`}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-rose-500 transition-all">
                            <Play className="w-5 h-5 fill-white ml-0.5" />
                          </div>
                        </div>
                        <span className="absolute bottom-2.5 right-2.5 bg-black/80 text-teal-300 text-[10px] font-bold px-2 py-0.5 rounded border border-teal-500/30">
                          Video Mổ Chuẩn
                        </span>
                      </>
                    ) : (
                      <div className="p-6 text-center space-y-2">
                        <ImageIcon className="w-10 h-10 mx-auto text-teal-400 opacity-80" />
                        <span className="text-xs text-slate-300 font-mono">Hình ảnh chẩn đoán y khoa</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-teal-400 tracking-wider">
                        {item.category}
                      </span>
                      <h4 className="font-bold text-sm text-white mt-1 group-hover:text-teal-300 transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">Trọng điểm y khoa:</span>
                      <ul className="text-[11px] text-slate-300 space-y-0.5">
                        {item.keyAnatomicalOrClinicalPoints.slice(0, 2).map((pt, i) => (
                          <li key={i} className="line-clamp-1">• {pt}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-5 py-3 border-t border-slate-800/80 bg-slate-900/40 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="truncate max-w-[180px]">{item.source}</span>
                  <span className="text-teal-400 flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform">
                    Xem chi tiết <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
