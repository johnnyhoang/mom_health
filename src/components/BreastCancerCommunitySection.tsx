import React from 'react';
import {
  communityInsights,
  vietnamBreastCancerGroups,
} from '../data/breastCancerCommunityData';

export const BreastCancerCommunitySection: React.FC = () => {
  return (
    <section id="bc-chapter-6" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-6 border-t border-slate-900">
      {/* Header */}
      <div className="space-y-2">
        <div className="text-slate-400 font-mono text-xs font-medium uppercase tracking-wider">
          Chương 6 • Tiếng Nói Cộng Đồng Bệnh Nhân
        </div>
        <h2 className="text-lg sm:text-xl md:text-xl font-bold text-slate-100 tracking-tight">
          Kinh Nghiệm Thực Tiễn Từ Cộng Đồng Bệnh Nhân K Vú Việt Nam
        </h2>
        <p className="text-base md:text-sm text-slate-300 leading-relaxed max-w-3xl">
          Tổng hợp những chia sẻ phổ biến nhất trong cộng đồng bệnh nhân K vú tại Việt Nam, kèm theo nhận định y khoa để người bệnh hiểu đúng và tránh tin đồn thất thiệt.
        </p>
      </div>

      {/* Editorial Disclaimer */}
      <p className="text-xs text-slate-400 italic">
        * Lưu ý quan trọng: Các chia sẻ dưới đây xuất phát từ trải nghiệm cá nhân của người bệnh. Luôn tham vấn bác sĩ điều trị trước khi áp dụng bất kỳ mẹo chăm sóc hay thực phẩm bổ sung nào.
      </p>

      {/* 6.1. Kinh nghiệm thực tiễn từ cộng đồng */}
      <div className="space-y-6 pt-4 border-t border-slate-800/40">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-200">
            6.1. Kinh nghiệm thực tiễn & Xử lý tác dụng phụ từ cộng đồng
          </h3>
          <p className="text-xs text-slate-400">
            Tổng hợp chia sẻ kinh nghiệm thực tế cùng phân tích, đánh giá từ chuyên gia y tế.
          </p>
        </div>

        <div className="space-y-5">
          {communityInsights.map((insight, idx) => (
            <article
              key={insight.id}
              className="space-y-2 text-base md:text-sm text-slate-300 leading-relaxed pb-5 border-b border-slate-800/40 last:border-b-0"
            >
              <div className="flex flex-wrap gap-2 items-center justify-between text-xs text-slate-400 font-mono">
                <h4 className="font-bold text-white text-base">6.1.{idx + 1}. {insight.categoryLabel}</h4>
                <span className="text-[11px]">{insight.source}</span>
              </div>

              <p className="text-slate-200 italic pl-3 border-l-2 border-slate-700 py-0.5">
                "{insight.insight}"
              </p>

              <div className="text-xs text-slate-300 pt-0.5">
                <strong className="text-teal-300 font-medium">Nhận định Y khoa: </strong>
                <span>{insight.medicalNote}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 6.2. Các hội nhóm & Tổ chức hỗ trợ */}
      <div className="space-y-6 pt-4 border-t border-slate-800/40">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-200">
            6.2. Các hội nhóm & Tổ chức hỗ trợ K vú tại Việt Nam
          </h3>
          <p className="text-xs text-slate-400">
            Danh sách các cộng đồng đồng bệnh và tổ chức hỗ trợ chính thức.
          </p>
        </div>

        <div className="space-y-4">
          {vietnamBreastCancerGroups.map((group, idx) => (
            <article
              key={group.id}
              className="space-y-1 text-base md:text-sm text-slate-300 leading-relaxed pb-4 border-b border-slate-800/40 last:border-b-0"
            >
              <div className="flex items-center justify-between gap-2 text-xs">
                <h4 className="font-bold text-white text-base">
                  6.2.{idx + 1}. {group.name}
                </h4>
                {group.verified && (
                  <span className="text-[10px] text-slate-400 font-mono">Xác minh chính thức</span>
                )}
              </div>
              <p className="text-xs text-slate-300">{group.description}</p>
              {group.memberCount && (
                <div className="text-[11px] text-slate-400 font-mono">Quy mô: {group.memberCount}</div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
