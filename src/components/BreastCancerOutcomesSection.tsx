import React, { useState } from 'react';
import {
  Globe,
  MapPin,
  TrendingUp,
  ExternalLink,
  BarChart3,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import {
  globalOutcomeStats,
  vietnamBreastCancerStats,
} from '../data/breastCancerOutcomesData';

type TabType = 'world' | 'vietnam';

// Helper: highlight key % numbers in text
const HighlightedText: React.FC<{ text: string }> = ({ text }) => {
  // Bold % numbers like 99%, 42%, 95%
  const parts = text.split(/(\d+(?:\.\d+)?%|\d+(?:\.\d+)?\s*tháng)/g);
  return (
    <>
      {parts.map((part, i) =>
        /\d+(?:\.\d+)?%|\d+(?:\.\d+)?\s*tháng/.test(part) ? (
          <strong key={i} className="text-rose-300 font-bold">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

export const BreastCancerOutcomesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('world');

  return (
    <section
      id="bc-chapter-5"
      className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-900"
    >
      {/* Header */}
      <div className="space-y-1.5">
        <div className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
          Chương 5 • Thống Kê Kết Quả Điều Trị
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
          Số Liệu Sống Sót & Hiệu Quả Điều Trị Thực Tế
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Dữ liệu từ các cơ sở y tế và tổ chức uy tín nhất thế giới và Việt Nam — để người bệnh
          hiểu đúng về tiên lượng và kết quả điều trị K vú hiện đại.
        </p>
      </div>

      {/* Tab switcher */}
      <div className="flex gap-2 p-1 rounded-xl bg-slate-900/80 border border-slate-800 w-fit">
        <button
          onClick={() => setActiveTab('world')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'world'
              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50 shadow'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Globe className="w-3.5 h-3.5" />
          Thế Giới
        </button>
        <button
          onClick={() => setActiveTab('vietnam')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'vietnam'
              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50 shadow'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <MapPin className="w-3.5 h-3.5" />
          Ở Việt Nam
        </button>
      </div>

      {/* World tab */}
      {activeTab === 'world' && (
        <div className="space-y-4">
          {/* Summary hero card */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-950/40 to-slate-900/80 border border-rose-800/40 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6 text-rose-400" />
            </div>
            <div>
              <div className="text-2xl font-black text-rose-300">42%</div>
              <div className="text-xs text-slate-300">
                Tỷ lệ tử vong do K vú đã giảm từ năm 1989 đến nay nhờ phát hiện sớm & điều trị
                nhắm trúng đích (ACS 2024)
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {globalOutcomeStats.map((stat) => (
              <div
                key={stat.id}
                className="rounded-2xl bg-slate-900/70 border border-slate-800 p-4 space-y-3 hover:border-slate-700 transition-colors"
              >
                {/* Header */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[10px] font-mono font-bold text-rose-400 uppercase">
                      {stat.year}
                    </span>
                    <span className="text-[10px] text-slate-500 bg-slate-800 px-2 py-0.5 rounded-full">
                      {stat.population}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-sm leading-snug">{stat.title}</h3>
                  <div className="flex items-center gap-1 text-[10px] text-teal-400">
                    <BarChart3 className="w-3 h-3" />
                    <span>{stat.source}</span>
                    {stat.sourceUrl && (
                      <a
                        href={stat.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-0.5 text-teal-500 hover:text-teal-300 transition-colors"
                      >
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Key findings */}
                <ul className="space-y-1.5">
                  {stat.keyFindings.map((finding, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <HighlightedText text={finding} />
                    </li>
                  ))}
                </ul>

                {/* Luminal A relevance */}
                <div className="p-2 rounded-lg bg-rose-950/20 border-l-2 border-rose-500 text-[11px] text-rose-100">
                  <span className="font-bold text-rose-300">Ý nghĩa Luminal A: </span>
                  {stat.relevanceToLuminalA}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Vietnam tab */}
      {activeTab === 'vietnam' && (
        <div className="space-y-4">
          {/* Summary banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/30 to-slate-900/80 border border-amber-800/40 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <div className="text-sm font-bold text-amber-300">
                60–70% ca K vú tại VN là HR+/HER2-
              </div>
              <div className="text-xs text-slate-300">
                Phân nhóm Luminal A chiếm đa số — tiên lượng tốt nếu phát hiện sớm và tuân thủ nội
                tiết đầy đủ (BVUB TP.HCM 2022-2023)
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vietnamBreastCancerStats.map((stat) => (
              <div
                key={stat.id}
                className="rounded-2xl bg-slate-900/70 border border-slate-800 p-4 space-y-3 hover:border-slate-700 transition-colors"
              >
                {/* Header */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[10px] font-mono font-bold text-amber-400 uppercase">
                      {stat.year}
                    </span>
                    {stat.hospital && (
                      <div className="flex items-center gap-1 text-[10px] text-slate-500 bg-slate-800 px-2 py-0.5 rounded-full">
                        <Building2 className="w-2.5 h-2.5" />
                        <span>{stat.hospital}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-white text-sm leading-snug">{stat.title}</h3>
                  <div className="text-[10px] text-teal-400">{stat.source}</div>
                </div>

                {/* Findings */}
                <ul className="space-y-1.5">
                  {stat.findings.map((finding, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <HighlightedText text={finding} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400">
            Dữ liệu Việt Nam còn hạn chế và đang được cập nhật liên tục. Các số liệu trên đến từ
            báo cáo lâm sàng và nghiên cứu tổng hợp trong nước, phản ánh xu hướng thực tế tại các
            bệnh viện lớn. Bệnh nhân nên trao đổi trực tiếp với bác sĩ điều trị để hiểu kết quả cụ
            thể của mình.
          </div>
        </div>
      )}
    </section>
  );
};
