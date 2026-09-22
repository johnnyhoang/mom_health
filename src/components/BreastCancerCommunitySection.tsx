import React, { useState } from 'react';
import {
  Users,
  AlertTriangle,
  Heart,
  UtensilsCrossed,
  Dumbbell,
  Brain,
  Activity,
  Eye,
  Share2,
  Globe,
  Video,
  MessageCircle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Info,
} from 'lucide-react';
import {
  communityInsights,
  vietnamBreastCancerGroups,
} from '../data/breastCancerCommunityData';
import type { CommunityInsight } from '../data/breastCancerCommunityData';

type CategoryFilter =
  | 'all'
  | 'side_effect_management'
  | 'lifestyle_tips'
  | 'treatment_experience'
  | 'mental_health'
  | 'nutrition'
  | 'monitoring';

const categoryConfig: Record<
  string,
  { label: string; icon: React.ReactNode; color: string }
> = {
  all: { label: 'Tất cả', icon: <Users className="w-3.5 h-3.5" />, color: 'text-slate-300' },
  side_effect_management: { label: 'Tác dụng phụ', icon: <Activity className="w-3.5 h-3.5" />, color: 'text-rose-300' },
  lifestyle_tips: { label: 'Lối sống', icon: <Dumbbell className="w-3.5 h-3.5" />, color: 'text-teal-300' },
  treatment_experience: { label: 'Điều trị', icon: <Heart className="w-3.5 h-3.5" />, color: 'text-pink-300' },
  mental_health: { label: 'Tinh thần', icon: <Brain className="w-3.5 h-3.5" />, color: 'text-violet-300' },
  nutrition: { label: 'Dinh dưỡng', icon: <UtensilsCrossed className="w-3.5 h-3.5" />, color: 'text-amber-300' },
  monitoring: { label: 'Theo dõi', icon: <Eye className="w-3.5 h-3.5" />, color: 'text-blue-300' },
};


const consensusBadge = (consensus: CommunityInsight['communityConsensus']) => {
  const map = {
    strong: 'bg-emerald-950/60 text-emerald-300 border-emerald-700/60',
    moderate: 'bg-amber-950/60 text-amber-300 border-amber-700/60',
    mixed: 'bg-orange-950/60 text-orange-300 border-orange-700/60',
  };
  const labelMap = {
    strong: 'Đồng thuận cao',
    moderate: 'Đồng thuận vừa',
    mixed: 'Ý kiến trái chiều',
  };
  return { cls: map[consensus], label: labelMap[consensus] };
};

const validationBadge = (validation: CommunityInsight['medicalValidation']) => {
  const map = {
    confirmed: { cls: 'bg-emerald-950/60 text-emerald-300 border-emerald-700/60', label: '✓ Y khoa xác nhận', icon: <CheckCircle2 className="w-3 h-3" /> },
    plausible: { cls: 'bg-teal-950/60 text-teal-300 border-teal-700/60', label: '~ Có cơ sở khoa học', icon: <Info className="w-3 h-3" /> },
    'needs-doctor': { cls: 'bg-amber-950/60 text-amber-300 border-amber-700/60', label: '⚠ Cần hỏi bác sĩ', icon: <HelpCircle className="w-3 h-3" /> },
    'not-recommended': { cls: 'bg-rose-950/60 text-rose-300 border-rose-800/60', label: '✗ Không khuyến cáo', icon: <XCircle className="w-3 h-3" /> },
  };
  return map[validation];
};

const platformIcon = (platform: string) => {
  switch (platform) {
    case 'facebook': return <Share2 className="w-4 h-4 text-blue-400" />;
    case 'youtube': return <Video className="w-4 h-4 text-red-400" />;
    case 'zalo': return <MessageCircle className="w-4 h-4 text-teal-400" />;
    default: return <Globe className="w-4 h-4 text-slate-400" />;
  }
};


export const BreastCancerCommunitySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const filtered =
    activeCategory === 'all'
      ? communityInsights
      : communityInsights.filter((ci) => ci.category === activeCategory);

  return (
    <section id="bc-chapter-6" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-6 border-t border-slate-900">
      {/* Header */}
      <div className="space-y-2">
        <div className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
          Chương 6 • Tiếng Nói Cộng Đồng Bệnh Nhân
        </div>
        <h2 className="text-lg sm:text-xl md:text-xl font-bold text-white tracking-tight">
          Kinh Nghiệm Thực Tiễn Từ Cộng Đồng Bệnh Nhân K Vú Việt Nam
        </h2>
        <p className="text-base md:text-sm text-slate-300 leading-relaxed max-w-3xl">
          Tổng hợp những chia sẻ phổ biến nhất trong cộng đồng bệnh nhân K vú tại Việt Nam, kèm theo nhận định y khoa để người bệnh hiểu đúng và tránh tin đồn thất thiệt.
        </p>
      </div>

      {/* Editorial Disclaimer Banner */}
      <div className="border-l-2 border-amber-500 pl-4 py-2 bg-amber-950/10 space-y-1">
        <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Lưu ý quan trọng về thông tin cộng đồng</span>
        </div>
        <p className="text-base md:text-sm text-slate-300 leading-relaxed">
          Các chia sẻ dưới đây xuất phát từ kinh nghiệm cá nhân người bệnh. Luôn hỏi ý kiến bác sĩ ung bướu trước khi áp dụng bất kỳ mẹo hay thực phẩm bổ sung nào.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 text-xs">
        {(Object.keys(categoryConfig) as CategoryFilter[]).map((cat) => {
          const cfg = categoryConfig[cat];
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
                isActive
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              <span className={isActive ? 'text-rose-400' : cfg.color}>{cfg.icon}</span>
              <span>{cfg.label}</span>
            </button>
          );
        })}
      </div>

      {/* Insights List - CMS Editorial Article Style */}
      <div className="space-y-4">
        {filtered.map((insight) => {
          const con = consensusBadge(insight.communityConsensus);
          const val = validationBadge(insight.medicalValidation);
          const catCfg = categoryConfig[insight.category];

          return (
            <article
              key={insight.id}
              className="py-4 px-4 sm:px-5 rounded-xl border-l-2 border-l-slate-700 bg-slate-900/20 hover:bg-slate-900/40 transition-colors space-y-2.5"
            >
              <div className="flex flex-wrap gap-1.5 items-center text-xs">
                <span className={`flex items-center gap-1 font-medium ${catCfg.color} bg-slate-800/80 px-2 py-0.5 rounded`}>
                  {catCfg.icon}
                  {insight.categoryLabel}
                </span>
                <span className={`px-2 py-0.5 rounded font-medium border ${con.cls}`}>
                  {con.label}
                </span>
                <span className={`px-2 py-0.5 rounded font-medium border flex items-center gap-1 ${val.cls}`}>
                  {val.icon}
                  {val.label}
                </span>
              </div>

              <p className="text-base md:text-sm text-slate-200 leading-relaxed italic border-l-2 border-slate-700/60 pl-3">
                "{insight.insight}"
              </p>

              <div className="text-xs text-teal-400/90 font-medium">
                <strong className="text-teal-300">Nhận định Y khoa: </strong>
                <span className="text-slate-300 font-normal">{insight.medicalNote}</span>
              </div>

              <div className="text-xs text-slate-500">Nguồn: {insight.source}</div>
            </article>
          );
        })}
      </div>

      {/* Community Groups */}
      <div className="space-y-3 pt-4 border-t border-slate-900">
        <div className="flex items-center gap-2 text-base md:text-sm font-bold text-white">
          <Users className="w-4 h-4 text-rose-400" />
          <span>Hội nhóm & Tổ chức hỗ trợ K vú uy tín tại Việt Nam</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {vietnamBreastCancerGroups.map((group) => (
            <div
              key={group.id}
              className="p-3.5 rounded-xl border-l-2 border-l-slate-700 bg-slate-900/30 flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center shrink-0">
                {platformIcon(group.platform)}
              </div>
              <div className="space-y-1 flex-1 min-w-0 text-base md:text-sm">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-white leading-snug">{group.name}</span>
                  {group.verified && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800 font-medium">
                      ✓ Được xác minh
                    </span>
                  )}
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">{group.description}</p>
                {group.memberCount && (
                  <div className="text-xs text-teal-300">Số lượng: {group.memberCount}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
