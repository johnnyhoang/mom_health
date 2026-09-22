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

const HighlightedText: React.FC<{ text: string }> = ({ text }) => {
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
    <section id="bc-chapter-5" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-6 border-t border-slate-900">
      {/* Chapter Title */}
      <div className="space-y-2">
        <div className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
          Chương 5 • Thống Kê Kết Quả Điều Trị
        </div>
        <h2 className="text-lg sm:text-xl md:text-xl font-bold text-white tracking-tight">
          Số Liệu Sống Sót & Hiệu Quả Điều Trị Thực Tế
        </h2>
        <p className="text-base md:text-sm text-slate-300 leading-relaxed max-w-3xl">
          Dữ liệu từ các cơ sở y tế và tổ chức uy tín nhất thế giới và Việt Nam — để người bệnh hiểu đúng về tiên lượng và kết quả điều trị K vú hiện đại.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-2 text-xs">
        <button
          onClick={() => setActiveTab('world')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
            activeTab === 'world'
              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50'
              : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <Globe className="w-3.5 h-3.5" />
          <span>Thế Giới</span>
        </button>
        <button
          onClick={() => setActiveTab('vietnam')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
            activeTab === 'vietnam'
              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50'
              : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>Ở Việt Nam</span>
        </button>
      </div>

      {/* World Tab */}
      {activeTab === 'world' && (
        <div className="space-y-5">
          {/* Top highlight quote */}
          <div className="border-l-2 border-rose-500 pl-4 py-2 bg-rose-950/10 space-y-1">
            <div className="flex items-center gap-2 text-rose-300 font-bold text-lg">
              <TrendingUp className="w-4 h-4 text-rose-400" />
              <span>Giảm 42% tỷ lệ tử vong do K vú từ năm 1989</span>
            </div>
            <p className="text-base md:text-sm text-slate-300 leading-relaxed">
              Theo Hiệp hội Ung thư Hoa Kỳ (ACS 2024), tỷ lệ tử vong do ung thư vú đã giảm liên tục 42% nhờ tầm soát nhũ ảnh sớm và các liệu pháp nội tiết, nhắm trúng đích thế hệ mới.
            </p>
          </div>

          {/* Editorial Articles List */}
          <div className="space-y-4">
            {globalOutcomeStats.map((stat) => (
              <article
                key={stat.id}
                className="py-4 px-4 sm:px-5 rounded-xl border-l-2 border-l-slate-700 bg-slate-900/20 hover:bg-slate-900/40 transition-colors space-y-2.5"
              >
                <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
                  <span className="font-mono font-bold text-rose-400 uppercase">{stat.year}</span>
                  <span className="text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded font-mono">
                    {stat.population}
                  </span>
                </div>

                <h3 className="text-base md:text-sm font-bold text-white tracking-tight">{stat.title}</h3>

                <div className="flex items-center gap-1.5 text-xs text-teal-300">
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>{stat.source}</span>
                  {stat.sourceUrl && (
                    <a
                      href={stat.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-200 ml-1"
                    >
                      <ExternalLink className="w-3 h-3 inline" />
                    </a>
                  )}
                </div>

                <ul className="space-y-1.5 text-base md:text-sm text-slate-200 leading-relaxed pt-1">
                  {stat.keyFindings.map((finding, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><HighlightedText text={finding} /></span>
                    </li>
                  ))}
                </ul>

                <p className="text-base md:text-sm text-rose-200/90 pt-1 border-t border-slate-800/60">
                  <strong className="text-rose-300">Ý nghĩa Luminal A: </strong>
                  {stat.relevanceToLuminalA}
                </p>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Vietnam Tab */}
      {activeTab === 'vietnam' && (
        <div className="space-y-5">
          <div className="border-l-2 border-amber-500 pl-4 py-2 bg-amber-950/10 space-y-1">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-base">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>60–70% ca K vú tại Việt Nam thuộc nhóm HR+/HER2-</span>
            </div>
            <p className="text-base md:text-sm text-slate-300 leading-relaxed">
              Báo cáo từ Bệnh viện Ung Bướu TP.HCM và Bệnh viện K ghi nhận phần lớn bệnh nhân Việt Nam thuộc nhóm thể nội tiết dương tính — đáp ứng rất tốt với liệu pháp nội tiết bổ trợ Tamoxifen và AI.
            </p>
          </div>

          <div className="space-y-4">
            {vietnamBreastCancerStats.map((stat) => (
              <article
                key={stat.id}
                className="py-4 px-4 sm:px-5 rounded-xl border-l-2 border-l-slate-700 bg-slate-900/20 hover:bg-slate-900/40 transition-colors space-y-2.5"
              >
                <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
                  <span className="font-mono font-bold text-amber-400 uppercase">{stat.year}</span>
                  {stat.hospital && (
                    <div className="flex items-center gap-1 text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded font-mono">
                      <Building2 className="w-3 h-3" />
                      <span>{stat.hospital}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-base md:text-sm font-bold text-white tracking-tight">{stat.title}</h3>
                <div className="text-xs text-teal-300">{stat.source}</div>

                <ul className="space-y-1.5 text-base md:text-sm text-slate-200 leading-relaxed pt-1">
                  {stat.findings.map((finding, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><HighlightedText text={finding} /></span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
