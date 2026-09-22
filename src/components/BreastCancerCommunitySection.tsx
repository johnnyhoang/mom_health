import React from 'react';
import {
  AlertTriangle,
  Globe,
  Video,
  MessageCircle,
  Share2,
} from 'lucide-react';
import {
  communityInsights,
  vietnamBreastCancerGroups,
} from '../data/breastCancerCommunityData';

const platformIcon = (platform: string) => {
  switch (platform) {
    case 'facebook': return <Share2 className="w-3.5 h-3.5 text-slate-400" />;
    case 'youtube': return <Video className="w-3.5 h-3.5 text-slate-400" />;
    case 'zalo': return <MessageCircle className="w-3.5 h-3.5 text-slate-400" />;
    default: return <Globe className="w-3.5 h-3.5 text-slate-400" />;
  }
};

export const BreastCancerCommunitySection: React.FC = () => {
  return (
    <section id="bc-chapter-6" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-8 border-t border-slate-900">
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

      {/* Editorial Disclaimer Banner */}
      <div className="py-3 px-4 rounded-lg border-l-2 border-slate-700 bg-slate-900/20 text-base md:text-sm text-slate-300 leading-relaxed space-y-1">
        <div className="flex items-center gap-2 text-slate-200 font-bold text-sm">
          <AlertTriangle className="w-4 h-4 text-slate-400 shrink-0" />
          <span>Lưu ý quan trọng về thông tin cộng đồng</span>
        </div>
        <p className="text-slate-300">
          Các chia sẻ dưới đây xuất phát từ kinh nghiệm cá nhân người bệnh. Luôn hỏi ý kiến bác sĩ ung bướu trước khi áp dụng bất kỳ mẹo hay thực phẩm bổ sung nào.
        </p>
      </div>

      {/* 6.1. Kinh nghiệm thực tiễn từ cộng đồng */}
      <div className="space-y-4 pt-2 border-t border-slate-800/40">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-200">
            6.1. Kinh nghiệm thực tiễn & Xử lý tác dụng phụ từ cộng đồng
          </h3>
          <p className="text-xs text-slate-400">
            Tổng hợp chia sẻ kinh nghiệm thực tế cùng phân tích, đánh giá từ chuyên gia y tế.
          </p>
        </div>

        <div className="space-y-4">
          {communityInsights.map((insight, idx) => (
            <article
              key={insight.id}
              className="py-3.5 px-4 rounded-lg border-l-2 border-slate-700 bg-slate-900/10 space-y-2.5 text-base md:text-sm text-slate-300"
            >
              <div className="flex flex-wrap gap-2 items-center justify-between text-xs text-slate-400 font-mono">
                <span>6.1.{idx + 1}. {insight.categoryLabel}</span>
                <span className="text-[11px]">{insight.source}</span>
              </div>

              <p className="text-slate-200 leading-relaxed italic border-l border-slate-700 pl-3 py-0.5">
                "{insight.insight}"
              </p>

              <div className="text-xs text-slate-300 pt-1 border-t border-slate-800/40">
                <strong className="text-slate-200 font-medium">Nhận định Y khoa: </strong>
                <span>{insight.medicalNote}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 6.2. Các hội nhóm & Tổ chức hỗ trợ */}
      <div className="space-y-4 pt-4 border-t border-slate-800/40">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-200">
            6.2. Các hội nhóm & Tổ chức hỗ trợ K vú tại Việt Nam
          </h3>
          <p className="text-xs text-slate-400">
            Danh sách các cộng đồng đồng bệnh và tổ chức hỗ trợ chính thức.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {vietnamBreastCancerGroups.map((group, idx) => (
            <article
              key={group.id}
              className="py-3 px-3.5 rounded-lg border-l-2 border-slate-700 bg-slate-900/10 space-y-1.5 text-base md:text-sm text-slate-300"
            >
              <div className="flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span>{platformIcon(group.platform)}</span>
                  <h4 className="font-bold text-slate-200">
                    6.2.{idx + 1}. {group.name}
                  </h4>
                </div>
                {group.verified && (
                  <span className="text-[10px] text-slate-400 font-mono">Xác minh</span>
                )}
              </div>
              <p className="leading-relaxed text-xs text-slate-300">{group.description}</p>
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

