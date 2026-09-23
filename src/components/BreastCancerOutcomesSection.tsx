import React from 'react';
import {
  globalOutcomeStats,
  vietnamBreastCancerStats,
} from '../data/breastCancerOutcomesData';

export const BreastCancerOutcomesSection: React.FC = () => {
  return (
    <section id="bc-chapter-5" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-6 border-t border-slate-900">
      {/* Chapter Title */}
      <div className="space-y-2">
        <div className="text-slate-400 font-mono text-xs font-medium uppercase tracking-wider">
          Chương 5 • Thống Kê Kết Quả Điều Trị
        </div>
        <h2 className="text-lg sm:text-xl md:text-xl font-bold text-slate-100 tracking-tight">
          Số Liệu Sống Sót & Hiệu Quả Điều Trị Thực Tế
        </h2>
        <p className="text-base md:text-sm text-slate-300 leading-relaxed max-w-3xl">
          Dữ liệu từ các cơ sở y tế và tổ chức uy tín nhất thế giới và Việt Nam — để người bệnh hiểu đúng về tiên lượng và kết quả điều trị K vú hiện đại.
        </p>
      </div>

      {/* 5.1. Dữ liệu & Thống kê toàn cầu */}
      <div className="space-y-6 pt-4 border-t border-slate-800/40">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-200">
            5.1. Dữ liệu & Thống kê kết quả điều trị toàn cầu (SEER, GLOBOCAN, ACS)
          </h3>
          <p className="text-xs text-slate-400">
            Nguồn từ Hiệp hội Ung thư Hoa Kỳ (ACS 2024), Cơ sở dữ liệu SEER và phân tích tổng hợp EBCTCG.
          </p>
        </div>

        <p className="text-base md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-slate-200">Xu hướng toàn cầu: </strong>
          Tỷ lệ tử vong do ung thư vú đã giảm liên tục 42% nhờ tầm soát nhũ ảnh sớm và các liệu pháp nội tiết, nhắm trúng đích thế hệ mới (ACS 2024).
        </p>

        <div className="space-y-5">
          {globalOutcomeStats.map((stat, idx) => (
            <article
              key={stat.id}
              className="space-y-2 text-base md:text-sm text-slate-300 leading-relaxed pb-5 border-b border-slate-800/40 last:border-b-0"
            >
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs text-slate-400 font-mono">
                <h4 className="font-bold text-white text-base">5.1.{idx + 1}. {stat.title}</h4>
                <span>{stat.year} • {stat.population}</span>
              </div>

              <div className="text-xs text-slate-400 font-mono">Nguồn: {stat.source}</div>

              <div className="space-y-1 pt-0.5">
                {stat.keyFindings.map((finding, i) => (
                  <p key={i} className="leading-relaxed flex items-start gap-2">
                    <span className="text-slate-500 shrink-0">•</span>
                    <span>{finding}</span>
                  </p>
                ))}
              </div>

              <p className="text-xs text-slate-400 pt-0.5">
                <strong className="text-slate-300">Ý nghĩa Luminal A: </strong>
                {stat.relevanceToLuminalA}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* 5.2. Thống kê kết quả điều trị tại Việt Nam */}
      <div className="space-y-6 pt-4 border-t border-slate-800/40">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-200">
            5.2. Thống kê kết quả điều trị tại các bệnh viện Việt Nam
          </h3>
          <p className="text-xs text-slate-400">
            Báo cáo từ Bệnh viện Ung Bướu TP.HCM, Bệnh viện K Hà Nội và Bệnh viện Bạch Mai.
          </p>
        </div>

        <p className="text-base md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-slate-200">Đặc điểm bệnh nhân Việt Nam: </strong>
          60–70% ca K vú tại Việt Nam thuộc nhóm HR+/HER2- (thể nội tiết dương tính) — đáp ứng rất tốt với Tamoxifen và các thuốc ức chế Aromatase.
        </p>

        <div className="space-y-5">
          {vietnamBreastCancerStats.map((stat, idx) => (
            <article
              key={stat.id}
              className="space-y-2 text-base md:text-sm text-slate-300 leading-relaxed pb-5 border-b border-slate-800/40 last:border-b-0"
            >
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs text-slate-400 font-mono">
                <h4 className="font-bold text-white text-base">5.2.{idx + 1}. {stat.title}</h4>
                <span>{stat.year} {stat.hospital ? `• ${stat.hospital}` : ''}</span>
              </div>

              <div className="text-xs text-slate-400 font-mono">Nguồn: {stat.source}</div>

              <div className="space-y-1 pt-0.5">
                {stat.findings.map((finding, i) => (
                  <p key={i} className="leading-relaxed flex items-start gap-2">
                    <span className="text-slate-500 shrink-0">•</span>
                    <span>{finding}</span>
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
