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
  Facebook,
  Globe,
  Youtube,
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
  all: {
    label: 'Tất cả',
    icon: <Users className="w-3.5 h-3.5" />,
    color: 'text-slate-300',
  },
  side_effect_management: {
    label: 'Tác dụng phụ',
    icon: <Activity className="w-3.5 h-3.5" />,
    color: 'text-rose-300',
  },
  lifestyle_tips: {
    label: 'Lối sống',
    icon: <Dumbbell className="w-3.5 h-3.5" />,
    color: 'text-teal-300',
  },
  treatment_experience: {
    label: 'Điều trị',
    icon: <Heart className="w-3.5 h-3.5" />,
    color: 'text-pink-300',
  },
  mental_health: {
    label: 'Tinh thần',
    icon: <Brain className="w-3.5 h-3.5" />,
    color: 'text-violet-300',
  },
  nutrition: {
    label: 'Dinh dưỡng',
    icon: <UtensilsCrossed className="w-3.5 h-3.5" />,
    color: 'text-amber-300',
  },
  monitoring: {
    label: 'Theo dõi',
    icon: <Eye className="w-3.5 h-3.5" />,
    color: 'text-blue-300',
  },
};

const consensusBadge = (consensus: CommunityInsight['communityConsensus']) => {
  const map = {
    strong: 'bg-emerald-950/50 text-emerald-300 border-emerald-700',
    moderate: 'bg-amber-950/50 text-amber-300 border-amber-700',
    mixed: 'bg-orange-950/50 text-orange-300 border-orange-700',
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
    confirmed: {
      cls: 'bg-emerald-950/50 text-emerald-300 border-emerald-700',
      label: '✓ Y khoa xác nhận',
      icon: <CheckCircle2 className="w-3 h-3" />,
    },
    plausible: {
      cls: 'bg-teal-950/50 text-teal-300 border-teal-700',
      label: '~ Có cơ sở khoa học',
      icon: <Info className="w-3 h-3" />,
    },
    'needs-doctor': {
      cls: 'bg-amber-950/50 text-amber-300 border-amber-700',
      label: '⚠ Cần hỏi bác sĩ',
      icon: <HelpCircle className="w-3 h-3" />,
    },
    'not-recommended': {
      cls: 'bg-rose-950/50 text-rose-300 border-rose-800',
      label: '✗ Không khuyến cáo',
      icon: <XCircle className="w-3 h-3" />,
    },
  };
  return map[validation];
};

const platformIcon = (platform: string) => {
  switch (platform) {
    case 'facebook':
      return <Facebook className="w-4 h-4 text-blue-400" />;
    case 'youtube':
      return <Youtube className="w-4 h-4 text-red-400" />;
    case 'zalo':
      return <MessageCircle className="w-4 h-4 text-teal-400" />;
    default:
      return <Globe className="w-4 h-4 text-slate-400" />;
  }
};

export const BreastCancerCommunitySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const filtered =
    activeCategory === 'all'
      ? communityInsights
      : communityInsights.filter((ci) => ci.category === activeCategory);

  return (
    <section
      id="bc-chapter-6"
      className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-900"
    >
      {/* Header */}
      <div className="space-y-1.5">
        <div className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
          Chương 6 • Tiếng Nói Cộng Đồng Bệnh Nhân
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
          Kinh Nghiệm Thực Tiễn Từ Cộng Đồng Bệnh Nhân K Vú Việt Nam
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Tổng hợp những chia sẻ phổ biến nhất trong cộng đồng bệnh nhân K vú tại Việt Nam, kèm
          theo đánh giá y khoa để người bệnh phân biệt đúng — sai.
        </p>
      </div>

      {/* Community disclaimer banner */}
      <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-700/50 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-100 space-y-0.5">
          <div className="font-bold text-amber-300 text-sm">
            ⚠ Lưu ý quan trọng về thông tin cộng đồng
          </div>
          <p>
            Các thông tin dưới đây được chia sẻ từ{' '}
            <strong>kinh nghiệm cá nhân trong cộng đồng bệnh nhân</strong>, không phải hướng dẫn y
            tế chính thức. Mỗi trường hợp có đặc điểm bệnh khác nhau.{' '}
            <strong>Luôn hỏi bác sĩ ung bướu của bạn trước khi áp dụng bất kỳ phương pháp
            nào.</strong>
          </p>
        </div>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {(Object.keys(categoryConfig) as CategoryFilter[]).map((cat) => {
          const cfg = categoryConfig[cat];
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold border transition-all cursor-pointer ${
                isActive
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/60'
                  : 'bg-slate-900 text-slate-400 border-slate-700 hover:border-slate-500 hover:text-slate-200'
              }`}
            >
              <span className={isActive ? 'text-rose-400' : cfg.color}>{cfg.icon}</span>
              {cfg.label}
            </button>
          );
        })}
        <span className="text-xs text-slate-500 self-center ml-1">({filtered.length})</span>
      </div>

      {/* Insight cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((insight) => {
          const con = consensusBadge(insight.communityConsensus);
          const val = validationBadge(insight.medicalValidation);
          const catCfg = categoryConfig[insight.category];

          return (
            <div
              key={insight.id}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-4 space-y-3 hover:border-slate-700 transition-colors"
            >
              {/* Category + badges */}
              <div className="flex flex-wrap gap-1.5 items-center">
                <span
                  className={`flex items-center gap-1 text-[10px] font-bold ${catCfg.color} bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-700`}
                >
                  {catCfg.icon}
                  {insight.categoryLabel}
                </span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${con.cls}`}
                >
                  {con.label}
                </span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold border flex items-center gap-1 ${val.cls}`}
                >
                  {val.icon}
                  {val.label}
                </span>
              </div>

              {/* Insight text */}
              <p className="text-xs text-slate-200 leading-relaxed italic">
                "{insight.insight}"
              </p>

              {/* Source */}
              <div className="text-[10px] text-slate-500">Nguồn: {insight.source}</div>

              {/* Medical note */}
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-0.5">
                <div className="font-bold text-teal-400 text-[10px] uppercase flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Nhận định Y khoa
                </div>
                <p>{insight.medicalNote}</p>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-10 text-slate-500 text-sm">
          Không có chia sẻ nào trong danh mục này.
        </div>
      )}

      {/* Community groups */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm font-bold text-white">
          <Users className="w-4 h-4 text-rose-400" />
          Các nhóm cộng đồng & tổ chức hỗ trợ K vú tại Việt Nam
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {vietnamBreastCancerGroups.map((group) => (
            <div
              key={group.id}
              className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                {platformIcon(group.platform)}
              </div>
              <div className="space-y-0.5 flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-xs text-white leading-snug">
                    {group.name}
                  </span>
                  {group.verified && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold">
                      ✓ Xác minh
                    </span>
                  )}
                </div>
                <div className="text-[10px] text-slate-400">{group.type}</div>
                <p className="text-[11px] text-slate-300 leading-relaxed">{group.description}</p>
                {group.memberCount && (
                  <div className="text-[10px] text-teal-400">
                    Thành viên: {group.memberCount}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
