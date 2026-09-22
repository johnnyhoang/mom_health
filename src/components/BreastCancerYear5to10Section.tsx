import React, { useState } from 'react';
import {
  CalendarCheck,
  UtensilsCrossed,
  Bike,
  AlertTriangle,
  FlaskConical,
  Scan,
  Stethoscope,
  HeartPulse,
  Leaf,
  CheckCircle2,
  XCircle,
  Clock,
  ThumbsUp,
  Zap,
  Shield,
  Siren,
  Hourglass,
  ClipboardList,
} from 'lucide-react';
import {
  year5to10Checklist,
  nutritionGuidelines,
  lifestyleGuidelines,
  warningSignsYear5to10,
} from '../data/breastCancerYear5to10Data';
import type {
  Year5To10CheckItem,
  NutritionGuideline,
  LifestyleGuideline,
  WarningSigns,
} from '../data/breastCancerYear5to10Data';

type MainTab = 'schedule' | 'nutrition' | 'lifestyle' | 'warnings';

// ─── helpers ───────────────────────────────────────────────────────────────

const typeIcon = (type: Year5To10CheckItem['type']) => {
  switch (type) {
    case 'exam':
      return <Stethoscope className="w-4 h-4" />;
    case 'lab':
      return <FlaskConical className="w-4 h-4" />;
    case 'imaging':
      return <Scan className="w-4 h-4" />;
    case 'lifestyle':
      return <Bike className="w-4 h-4" />;
    case 'nutrition':
      return <UtensilsCrossed className="w-4 h-4" />;
    case 'watchout':
      return <AlertTriangle className="w-4 h-4" />;
    default:
      return <ClipboardList className="w-4 h-4" />;
  }
};

const urgencyConfig = {
  critical: {
    bg: 'bg-rose-950/40',
    border: 'border-rose-700/60',
    badge: 'bg-rose-950 text-rose-300 border-rose-800',
    dot: 'bg-rose-400',
    label: 'Bắt buộc',
    iconColor: 'text-rose-400',
  },
  important: {
    bg: 'bg-amber-950/20',
    border: 'border-amber-800/40',
    badge: 'bg-amber-950 text-amber-300 border-amber-800',
    dot: 'bg-amber-400',
    label: 'Quan trọng',
    iconColor: 'text-amber-400',
  },
  routine: {
    bg: 'bg-slate-900/60',
    border: 'border-slate-800',
    badge: 'bg-slate-800 text-teal-300 border-slate-700',
    dot: 'bg-teal-400',
    label: 'Thường quy',
    iconColor: 'text-teal-400',
  },
};

const nutritionCategoryConfig = {
  encourage: {
    label: 'Nên ăn nhiều',
    bg: 'bg-emerald-950/30',
    border: 'border-emerald-800/50',
    badge: 'bg-emerald-950 text-emerald-300 border-emerald-800',
    icon: <ThumbsUp className="w-4 h-4 text-emerald-400" />,
    textColor: 'text-emerald-300',
  },
  limit: {
    label: 'Hạn chế',
    bg: 'bg-amber-950/20',
    border: 'border-amber-800/40',
    badge: 'bg-amber-950 text-amber-300 border-amber-800',
    icon: <Hourglass className="w-4 h-4 text-amber-400" />,
    textColor: 'text-amber-300',
  },
  avoid: {
    label: 'Tuyệt đối tránh',
    bg: 'bg-rose-950/20',
    border: 'border-rose-800/40',
    badge: 'bg-rose-950 text-rose-300 border-rose-800',
    icon: <XCircle className="w-4 h-4 text-rose-400" />,
    textColor: 'text-rose-300',
  },
  supplement: {
    label: 'Bổ sung có chỉ định',
    bg: 'bg-teal-950/20',
    border: 'border-teal-800/40',
    badge: 'bg-teal-950 text-teal-300 border-teal-800',
    icon: <Leaf className="w-4 h-4 text-teal-400" />,
    textColor: 'text-teal-300',
  },
};

const lifestyleCategoryConfig: Record<LifestyleGuideline['category'], { label: string; icon: React.ReactNode; color: string }> = {
  exercise: { label: 'Vận động', icon: <Bike className="w-4 h-4" />, color: 'text-emerald-400' },
  sleep: { label: 'Giấc ngủ', icon: <Clock className="w-4 h-4" />, color: 'text-blue-400' },
  stress: { label: 'Quản lý stress', icon: <HeartPulse className="w-4 h-4" />, color: 'text-violet-400' },
  environment: { label: 'Môi trường', icon: <Leaf className="w-4 h-4" />, color: 'text-teal-400' },
  sexual_health: { label: 'Sức khỏe tình dục', icon: <Shield className="w-4 h-4" />, color: 'text-pink-400' },
  work: { label: 'Công việc', icon: <ClipboardList className="w-4 h-4" />, color: 'text-amber-400' },
};

const warningUrgencyConfig = {
  go_now: {
    bg: 'bg-rose-950/50',
    border: 'border-rose-600',
    badge: 'bg-rose-600 text-white',
    label: '🚨 Đến cấp cứu / Gặp BS ngay',
    icon: <Siren className="w-5 h-5 text-rose-300" />,
  },
  '24h': {
    bg: 'bg-orange-950/30',
    border: 'border-orange-700/60',
    badge: 'bg-orange-950 text-orange-300 border-orange-800',
    label: '⏰ Liên hệ trong 24 giờ',
    icon: <AlertTriangle className="w-5 h-5 text-orange-400" />,
  },
  next_appointment: {
    bg: 'bg-amber-950/20',
    border: 'border-amber-800/40',
    badge: 'bg-amber-950 text-amber-300 border-amber-800',
    label: '📅 Báo BS lần tái khám tiếp',
    icon: <CalendarCheck className="w-5 h-5 text-amber-400" />,
  },
};

// Group checklist items by category
const groupByCategory = (items: Year5To10CheckItem[]) => {
  const groups: Record<string, Year5To10CheckItem[]> = {};
  items.forEach((item) => {
    if (!groups[item.category]) groups[item.category] = [];
    groups[item.category].push(item);
  });
  return groups;
};

// Group nutrition by category
const groupNutritionByCategory = (items: NutritionGuideline[]) => {
  const groups: Record<NutritionGuideline['category'], NutritionGuideline[]> = {
    encourage: [],
    limit: [],
    avoid: [],
    supplement: [],
  };
  items.forEach((item) => {
    groups[item.category].push(item);
  });
  return groups;
};

// ─── Sub-components ─────────────────────────────────────────────────────────

const ChecklistItem: React.FC<{ item: Year5To10CheckItem }> = ({ item }) => {
  const cfg = urgencyConfig[item.urgency];
  return (
    <div className={`rounded-xl border p-3.5 space-y-2 ${cfg.bg} ${cfg.border}`}>
      <div className="flex items-start justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className={`shrink-0 ${cfg.iconColor}`}>{typeIcon(item.type)}</span>
          <h4 className="font-bold text-white text-xs sm:text-sm leading-snug">{item.title}</h4>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0 flex-wrap">
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${cfg.badge}`}>
            {cfg.label}
          </span>
          {item.luminalASpecific && (
            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-rose-950 text-rose-300 border border-rose-800">
              Luminal A
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
        <Clock className="w-3 h-3 shrink-0" />
        <span className="font-medium">{item.timing}</span>
        <span className="text-slate-600">•</span>
        <span>{item.doctorSpecialty}</span>
      </div>

      <p className="text-xs text-slate-300 leading-relaxed">{item.detail}</p>

      <div className="p-2 rounded-lg bg-slate-950/50 border border-slate-800/60 text-[11px] text-slate-400">
        <Zap className="w-3 h-3 inline text-amber-400 mr-1" />
        {item.whyImportant}
      </div>
    </div>
  );
};

const NutritionItem: React.FC<{ item: NutritionGuideline }> = ({ item }) => {
  const cfg = nutritionCategoryConfig[item.category];
  return (
    <div className={`rounded-xl border p-3.5 space-y-2 ${cfg.bg} ${cfg.border}`}>
      <div className="flex items-start gap-2">
        <span className="shrink-0 mt-0.5">{cfg.icon}</span>
        <div className="space-y-0.5 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className={`font-bold text-sm ${cfg.textColor}`}>{item.food}</h4>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${cfg.badge}`}>
              {cfg.label}
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">{item.reason}</p>
        </div>
      </div>
      <div className="pl-6 space-y-1">
        <div className="p-2 rounded-lg bg-slate-950/50 border border-slate-800/60 text-[11px] text-slate-400">
          <strong className="text-amber-400">Bằng chứng:</strong> {item.evidence}
        </div>
        {item.note && (
          <div className="text-[11px] text-teal-300 italic">→ {item.note}</div>
        )}
      </div>
    </div>
  );
};

const LifestyleItem: React.FC<{ item: LifestyleGuideline }> = ({ item }) => {
  const cfg = lifestyleCategoryConfig[item.category] ?? {
    label: item.category,
    icon: <ClipboardList className="w-4 h-4" />,
    color: 'text-slate-400',
  };
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 space-y-2 hover:border-slate-700 transition-colors">
      <div className="flex items-center gap-2">
        <span className={`shrink-0 ${cfg.color}`}>{cfg.icon}</span>
        <div>
          <span className={`text-[10px] font-bold uppercase ${cfg.color}`}>{cfg.label}</span>
          <h4 className="font-bold text-white text-xs sm:text-sm leading-snug">{item.title}</h4>
        </div>
      </div>
      <p className="text-xs text-slate-300 leading-relaxed">{item.detail}</p>
      <div className="p-2 rounded-lg bg-slate-950/50 border border-slate-800/60 text-[11px] text-slate-400">
        <Zap className="w-3 h-3 inline text-amber-400 mr-1" />
        {item.evidence}
      </div>
    </div>
  );
};

const WarningItem: React.FC<{ item: WarningSigns }> = ({ item }) => {
  const cfg = warningUrgencyConfig[item.urgency];
  return (
    <div className={`rounded-xl border p-4 space-y-2.5 ${cfg.bg} ${cfg.border}`}>
      <div className="flex items-start gap-3">
        <span className="shrink-0 mt-0.5">{cfg.icon}</span>
        <div className="space-y-1 flex-1">
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border inline-block ${cfg.badge}`}>
            {cfg.label}
          </span>
          <p className="font-bold text-white text-xs sm:text-sm leading-snug">{item.sign}</p>
        </div>
      </div>
      <div className="pl-8 space-y-1.5">
        <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-200 space-y-0.5">
          <div className="font-bold text-amber-400 text-[10px] uppercase">Có thể là:</div>
          <p>{item.possibleMeaning}</p>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-950/60 border border-rose-900/30 text-xs text-rose-100 space-y-0.5">
          <div className="font-bold text-rose-400 text-[10px] uppercase flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Hành động cần làm:
          </div>
          <p>{item.action}</p>
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────

export const BreastCancerYear5to10Section: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MainTab>('schedule');

  const tabs: { value: MainTab; label: string; icon: React.ReactNode; count?: number }[] = [
    { value: 'schedule', label: 'Lịch Khám', icon: <CalendarCheck className="w-4 h-4" />, count: year5to10Checklist.length },
    { value: 'nutrition', label: 'Dinh Dưỡng', icon: <UtensilsCrossed className="w-4 h-4" />, count: nutritionGuidelines.length },
    { value: 'lifestyle', label: 'Lối Sống', icon: <Bike className="w-4 h-4" />, count: lifestyleGuidelines.length },
    { value: 'warnings', label: 'Cảnh Báo', icon: <AlertTriangle className="w-4 h-4" />, count: warningSignsYear5to10.length },
  ];

  const checklistGroups = groupByCategory(year5to10Checklist);
  const nutritionGroups = groupNutritionByCategory(nutritionGuidelines);

  return (
    <section
      id="bc-chapter-7"
      className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-900"
    >
      {/* Header */}
      <div className="space-y-1.5">
        <div className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
          <Shield className="w-4 h-4" />
          Chương 7 • Giai Đoạn Năm Thứ 5 – 10
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
          Hướng Dẫn Toàn Diện Cho Giai Đoạn Sau Hoàn Thành Điều Trị (Năm 5–10)
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Sau khi hoàn thành 5 năm Tamoxifen (tháng 1/2026), đây là giai đoạn then chốt để ngăn
          ngừa tái phát muộn. K vú Luminal A có thể tái phát đến năm 15–20 — theo dõi đúng cách là
          chìa khóa sống còn dài hạn.
        </p>
      </div>

      {/* Important highlight */}
      <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-700/50 flex items-start gap-3">
        <Siren className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
        <div className="text-xs text-rose-100 space-y-0.5">
          <div className="font-bold text-rose-300 text-sm">
            Tái phát muộn (Late Relapse) — Đặc trưng của K vú Luminal A
          </div>
          <p>
            Không như các phân nhóm khác, Luminal A có nguy cơ tái phát kéo dài đến{' '}
            <strong>năm 15–20</strong> sau chẩn đoán. EBCTCG 2023 cho thấy nguy cơ tái phát vẫn ở
            mức khoảng <strong>1–2%/năm</strong> ngay cả ở năm 10–15. Đây là lý do việc theo dõi
            dài hạn, không bao giờ được lơ là, dù cảm thấy hoàn toàn khỏe mạnh.
          </p>
        </div>
      </div>

      {/* Tab navigator */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`flex flex-col items-center gap-1.5 p-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              activeTab === tab.value
                ? 'bg-rose-500/20 text-rose-300 border-rose-500/60 shadow-md'
                : 'bg-slate-900/70 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <span className={activeTab === tab.value ? 'text-rose-400' : 'text-slate-500'}>
              {tab.icon}
            </span>
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${
                  activeTab === tab.value ? 'bg-rose-500/30 text-rose-300' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ── Tab: Lịch Khám ─────────────────────────────────────────────── */}
      {activeTab === 'schedule' && (
        <div className="space-y-6">
          {Object.entries(checklistGroups).map(([category, items]) => (
            <div key={category} className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-px flex-1 bg-slate-800" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">
                  {category}
                </span>
                <div className="h-px flex-1 bg-slate-800" />
              </div>
              <div className="space-y-3">
                {items.map((item) => (
                  <ChecklistItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400">
            Lịch khám theo NCCN Breast Cancer V4.2025, ASCO 2023 Follow-up Guideline. Tần suất cụ
            thể có thể điều chỉnh theo chỉ định của bác sĩ điều trị.
          </div>
        </div>
      )}

      {/* ── Tab: Dinh Dưỡng ─────────────────────────────────────────────── */}
      {activeTab === 'nutrition' && (
        <div className="space-y-6">
          {(Object.keys(nutritionCategoryConfig) as NutritionGuideline['category'][]).map((cat) => {
            const items = nutritionGroups[cat];
            if (!items || items.length === 0) return null;
            const cfg = nutritionCategoryConfig[cat];
            return (
              <div key={cat} className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className={cfg.textColor}>{cfg.icon}</span>
                  <h3 className={`text-sm font-bold ${cfg.textColor}`}>{cfg.label}</h3>
                  <div className="h-px flex-1 bg-slate-800" />
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${cfg.badge}`}>
                    {items.length}
                  </span>
                </div>
                <div className="space-y-3">
                  {items.map((item) => (
                    <NutritionItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── Tab: Lối Sống ─────────────────────────────────────────────── */}
      {activeTab === 'lifestyle' && (
        <div className="space-y-4">
          <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-xs text-emerald-100 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong className="text-emerald-300">ASCO 2022 Physical Activity Guidelines:</strong>{' '}
              Lối sống lành mạnh sau điều trị K vú có thể giảm{' '}
              <strong>24–40% nguy cơ tái phát</strong> và cải thiện đáng kể chất lượng cuộc sống.
              Đây là "thuốc" không kê đơn hiệu quả nhất hiện có.
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {lifestyleGuidelines.map((item) => (
              <LifestyleItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      {/* ── Tab: Cảnh Báo ─────────────────────────────────────────────── */}
      {activeTab === 'warnings' && (
        <div className="space-y-4">
          <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-800/50 text-xs text-rose-100 flex items-start gap-2">
            <Siren className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <span>
              Nhận biết sớm các dấu hiệu tái phát giúp điều trị hiệu quả hơn nhiều. Đừng chờ đến
              lịch tái khám nếu có dấu hiệu bất thường — hãy chủ động liên hệ ngay với bác sĩ.
            </span>
          </div>

          {/* go_now */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Siren className="w-4 h-4 text-rose-400" />
              <span className="text-sm font-bold text-rose-300">Liên hệ ngay / Đến cấp cứu</span>
              <div className="h-px flex-1 bg-rose-900/40" />
            </div>
            {warningSignsYear5to10
              .filter((w) => w.urgency === 'go_now')
              .map((w) => (
                <WarningItem key={w.id} item={w} />
              ))}
          </div>

          {/* 24h */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-bold text-orange-300">Trong vòng 24 giờ</span>
              <div className="h-px flex-1 bg-orange-900/30" />
            </div>
            {warningSignsYear5to10
              .filter((w) => w.urgency === '24h')
              .map((w) => (
                <WarningItem key={w.id} item={w} />
              ))}
          </div>

          {/* next appointment */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CalendarCheck className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-bold text-amber-300">Lần tái khám tiếp theo</span>
              <div className="h-px flex-1 bg-amber-900/30" />
            </div>
            {warningSignsYear5to10
              .filter((w) => w.urgency === 'next_appointment')
              .map((w) => (
                <WarningItem key={w.id} item={w} />
              ))}
          </div>
        </div>
      )}
    </section>
  );
};
