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
  XCircle,
  Clock,
  ThumbsUp,
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

const typeIcon = (type: Year5To10CheckItem['type']) => {
  switch (type) {
    case 'exam': return <Stethoscope className="w-4 h-4" />;
    case 'lab': return <FlaskConical className="w-4 h-4" />;
    case 'imaging': return <Scan className="w-4 h-4" />;
    case 'lifestyle': return <Bike className="w-4 h-4" />;
    case 'nutrition': return <UtensilsCrossed className="w-4 h-4" />;
    case 'watchout': return <AlertTriangle className="w-4 h-4" />;
    default: return <ClipboardList className="w-4 h-4" />;
  }
};

const urgencyConfig = {
  critical: { border: 'border-l-rose-500', badge: 'bg-rose-950/60 text-rose-300 border-rose-800/60', label: 'Bắt buộc', iconColor: 'text-rose-400' },
  important: { border: 'border-l-amber-500', badge: 'bg-amber-950/60 text-amber-300 border-amber-800/60', label: 'Quan trọng', iconColor: 'text-amber-400' },
  routine: { border: 'border-l-teal-500', badge: 'bg-slate-800/60 text-teal-300 border-slate-700/60', label: 'Thường quy', iconColor: 'text-teal-400' },
};

const nutritionCategoryConfig = {
  encourage: { label: 'Nên ăn nhiều', badge: 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60', icon: <ThumbsUp className="w-4 h-4 text-emerald-400" />, textColor: 'text-emerald-300' },
  limit: { label: 'Hạn chế', badge: 'bg-amber-950/60 text-amber-300 border-amber-800/60', icon: <Hourglass className="w-4 h-4 text-amber-400" />, textColor: 'text-amber-300' },
  avoid: { label: 'Tuyệt đối tránh', badge: 'bg-rose-950/60 text-rose-300 border-rose-800/60', icon: <XCircle className="w-4 h-4 text-rose-400" />, textColor: 'text-rose-300' },
  supplement: { label: 'Bổ sung có chỉ định', badge: 'bg-teal-950/60 text-teal-300 border-teal-800/60', icon: <Leaf className="w-4 h-4 text-teal-400" />, textColor: 'text-teal-300' },
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
  go_now: { border: 'border-l-rose-500', badge: 'bg-rose-600 text-white', label: '🚨 Khẩn cấp / Đến gặp BS ngay', icon: <Siren className="w-5 h-5 text-rose-400" /> },
  '24h': { border: 'border-l-orange-500', badge: 'bg-orange-950/60 text-orange-300 border-orange-800/60', label: '⏰ Liên hệ trong 24h', icon: <AlertTriangle className="w-5 h-5 text-orange-400" /> },
  next_appointment: { border: 'border-l-amber-500', badge: 'bg-amber-950/60 text-amber-300 border-amber-800/60', label: '📅 Lần tái khám tiếp', icon: <CalendarCheck className="w-5 h-5 text-amber-400" /> },
};

const groupByCategory = (items: Year5To10CheckItem[]) => {
  const groups: Record<string, Year5To10CheckItem[]> = {};
  items.forEach((item) => {
    if (!groups[item.category]) groups[item.category] = [];
    groups[item.category].push(item);
  });
  return groups;
};

const groupNutritionByCategory = (items: NutritionGuideline[]) => {
  const groups: Record<NutritionGuideline['category'], NutritionGuideline[]> = {
    encourage: [], limit: [], avoid: [], supplement: [],
  };
  items.forEach((item) => { groups[item.category].push(item); });
  return groups;
};

const ChecklistItem: React.FC<{ item: Year5To10CheckItem }> = ({ item }) => {
  const cfg = urgencyConfig[item.urgency];
  return (
    <article className={`py-4 px-4 sm:px-5 rounded-xl border-l-2 ${cfg.border} bg-slate-900/20 hover:bg-slate-900/40 transition-colors space-y-2.5`}>
      <div className="flex items-start justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className={`shrink-0 ${cfg.iconColor}`}>{typeIcon(item.type)}</span>
          <h4 className="text-base md:text-sm font-bold text-white leading-snug">{item.title}</h4>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <span className={`px-2 py-0.5 rounded font-medium border ${cfg.badge}`}>{cfg.label}</span>
          {item.luminalASpecific && (
            <span className="px-2 py-0.5 rounded font-medium bg-rose-950/80 text-rose-300 border border-rose-800">
              Luminal A
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
        <Clock className="w-3.5 h-3.5 shrink-0" />
        <span>{item.timing}</span>
        <span>•</span>
        <span>{item.doctorSpecialty}</span>
      </div>

      <p className="text-base md:text-sm text-slate-300 leading-relaxed">{item.detail}</p>

      <p className="text-base md:text-sm text-amber-200/90 pt-1 border-t border-slate-800/60">
        <strong className="text-amber-400">Vì sao quan trọng: </strong>
        {item.whyImportant}
      </p>
    </article>
  );
};

const NutritionItem: React.FC<{ item: NutritionGuideline }> = ({ item }) => {
  const cfg = nutritionCategoryConfig[item.category];
  return (
    <article className="py-4 px-4 sm:px-5 rounded-xl border-l-2 border-l-slate-700 bg-slate-900/20 hover:bg-slate-900/40 transition-colors space-y-2">
      <div className="flex items-center gap-2 justify-between flex-wrap text-xs">
        <div className="flex items-center gap-1.5">
          {cfg.icon}
          <h4 className={`text-base md:text-sm font-bold ${cfg.textColor}`}>{item.food}</h4>
        </div>
        <span className={`px-2 py-0.5 rounded font-medium border ${cfg.badge}`}>{cfg.label}</span>
      </div>
      <p className="text-base md:text-sm text-slate-300 leading-relaxed">{item.reason}</p>
      <div className="text-xs text-slate-400 pt-1 border-t border-slate-800/60">
        <strong className="text-amber-400">Bằng chứng: </strong>{item.evidence}
        {item.note && <span className="text-teal-300 block pt-0.5">→ {item.note}</span>}
      </div>
    </article>
  );
};

const LifestyleItem: React.FC<{ item: LifestyleGuideline }> = ({ item }) => {
  const cfg = lifestyleCategoryConfig[item.category] ?? { label: item.category, icon: <ClipboardList className="w-4 h-4" />, color: 'text-slate-400' };
  return (
    <article className="py-4 px-4 sm:px-5 rounded-xl border-l-2 border-l-slate-700 bg-slate-900/20 hover:bg-slate-900/40 transition-colors space-y-2">
      <div className="flex items-center gap-2 text-xs">
        <span className={cfg.color}>{cfg.icon}</span>
        <span className={`font-bold uppercase ${cfg.color}`}>{cfg.label}</span>
      </div>
      <h4 className="text-base md:text-sm font-bold text-white leading-snug">{item.title}</h4>
      <p className="text-base md:text-sm text-slate-300 leading-relaxed">{item.detail}</p>
      <p className="text-xs text-amber-300/90 pt-1 border-t border-slate-800/60">
        <strong>Bằng chứng ASCO: </strong>{item.evidence}
      </p>
    </article>
  );
};

const WarningItem: React.FC<{ item: WarningSigns }> = ({ item }) => {
  const cfg = warningUrgencyConfig[item.urgency];
  return (
    <article className={`py-4 px-4 sm:px-5 rounded-xl border-l-2 ${cfg.border} bg-slate-900/30 space-y-2.5`}>
      <div className="flex items-center gap-2 justify-between flex-wrap text-xs">
        <span className={`px-2 py-0.5 rounded font-bold ${cfg.badge}`}>{cfg.label}</span>
      </div>
      <h4 className="text-base md:text-sm font-bold text-white leading-snug">{item.sign}</h4>
      <p className="text-base md:text-sm text-amber-200/90">
        <strong className="text-amber-400">Có thể là: </strong>{item.possibleMeaning}
      </p>
      <p className="text-base md:text-sm text-rose-200/90 pt-1 border-t border-slate-800/60">
        <strong className="text-rose-400">Hành động cần làm: </strong>{item.action}
      </p>
    </article>
  );
};

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
    <section id="bc-chapter-7" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-6 border-t border-slate-900">
      {/* Header */}
      <div className="space-y-2">
        <div className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
          <Shield className="w-4 h-4" />
          Chương 7 • Giai Đoạn Năm Thứ 5 – 10
        </div>
        <h2 className="text-lg sm:text-xl md:text-xl font-bold text-white tracking-tight">
          Hướng Dẫn Toàn Diện Cho Giai Đoạn Sau Hoàn Thành Điều Trị (Năm 5–10)
        </h2>
        <p className="text-base md:text-sm text-slate-300 leading-relaxed max-w-3xl">
          Sau khi hoàn thành 5 năm Tamoxifen (tháng 1/2026), đây là giai đoạn then chốt để theo dõi và ngăn ngừa tái phát muộn.
        </p>
      </div>

      {/* Highlighting Late Relapse Concept */}
      <div className="border-l-2 border-rose-500 pl-4 py-2 bg-rose-950/10 space-y-1">
        <div className="flex items-center gap-2 text-rose-300 font-bold text-sm">
          <Siren className="w-4 h-4 text-rose-400 shrink-0" />
          <span>Đặc điểm tái phát muộn (Late Relapse) của Luminal A</span>
        </div>
        <p className="text-base md:text-sm text-slate-300 leading-relaxed">
          Nghiên cứu EBCTCG 2023 cho thấy K vú thể Luminal A (HR+) có tỷ lệ tái phát duy trì khoảng 1–2%/năm kéo dài đến năm 15–20. Việc duy trì khám định kỳ là lá chắn bảo vệ an toàn nhất.
        </p>
      </div>

      {/* Tab Navigator */}
      <div className="flex gap-2 flex-wrap text-xs">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
              activeTab === tab.value
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span className="text-[10px] opacity-70">({tab.count})</span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'schedule' && (
        <div className="space-y-6">
          {Object.entries(checklistGroups).map(([category, items]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800 pb-1">
                {category}
              </h3>
              <div className="space-y-3">
                {items.map((item) => <ChecklistItem key={item.id} item={item} />)}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'nutrition' && (
        <div className="space-y-6">
          {(Object.keys(nutritionCategoryConfig) as NutritionGuideline['category'][]).map((cat) => {
            const items = nutritionGroups[cat];
            if (!items || items.length === 0) return null;
            const cfg = nutritionCategoryConfig[cat];
            return (
              <div key={cat} className="space-y-3">
                <h3 className={`text-xs font-bold uppercase tracking-wider border-b border-slate-800 pb-1 ${cfg.textColor}`}>
                  {cfg.label}
                </h3>
                <div className="space-y-3">
                  {items.map((item) => <NutritionItem key={item.id} item={item} />)}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {activeTab === 'lifestyle' && (
        <div className="space-y-4">
          <div className="space-y-3">
            {lifestyleGuidelines.map((item) => <LifestyleItem key={item.id} item={item} />)}
          </div>
        </div>
      )}

      {activeTab === 'warnings' && (
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-rose-400 uppercase tracking-wider border-b border-rose-900/40 pb-1">
              🚨 Liên hệ ngay / Cấp cứu
            </h3>
            {warningSignsYear5to10.filter((w) => w.urgency === 'go_now').map((w) => <WarningItem key={w.id} item={w} />)}
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold text-orange-400 uppercase tracking-wider border-b border-orange-900/40 pb-1">
              ⏰ Trong vòng 24 giờ
            </h3>
            {warningSignsYear5to10.filter((w) => w.urgency === '24h').map((w) => <WarningItem key={w.id} item={w} />)}
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider border-b border-amber-900/40 pb-1">
              📅 Lần tái khám tiếp theo
            </h3>
            {warningSignsYear5to10.filter((w) => w.urgency === 'next_appointment').map((w) => <WarningItem key={w.id} item={w} />)}
          </div>
        </div>
      )}
    </section>
  );
};
