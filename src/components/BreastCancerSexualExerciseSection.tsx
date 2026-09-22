import React, { useState } from 'react';
import {
  sexualHealthTopics,
  exerciseTypes,
  exerciseSupplements,
  exerciseResearchData
} from '../data/breastCancerSexualExerciseData';
import type { SexualHealthTopic, ExerciseType, SupplementForExercise } from '../data/breastCancerSexualExerciseData';
import {
  ChevronDown, ChevronUp, CheckCircle, AlertTriangle,
  XCircle, ShieldCheck
} from 'lucide-react';


const TAB_LABELS = [
  { key: 'sexual', label: '❤️ Quan Hệ Vợ Chồng' },
  { key: 'exercise', label: '🏃 Thể Thao' },
  { key: 'supplement', label: '💊 Bổ Trợ Tập Luyện' },
  { key: 'research', label: '🔬 Bằng Chứng Khoa Học' }
] as const;
type TabKey = typeof TAB_LABELS[number]['key'];

const recConfig = {
  encouraged: { label: 'Khuyến khích', cls: 'bg-emerald-950/60 text-emerald-300 border-emerald-700/60' },
  safe_with_precautions: { label: 'An toàn (cần lưu ý)', cls: 'bg-amber-950/60 text-amber-300 border-amber-700/60' },
  needs_doctor: { label: 'Cần hỏi Bác sĩ', cls: 'bg-sky-950/60 text-sky-300 border-sky-700/60' },
  avoid_temporarily: { label: 'Kiêng tạm thời', cls: 'bg-rose-950/60 text-rose-300 border-rose-700/60' }
};

const exerciseRecConfig = {
  strongly_recommended: { label: 'Rất Khuyến Cáo', cls: 'bg-emerald-950/60 text-emerald-300 border-emerald-700/60' },
  recommended: { label: 'Khuyến Cáo', cls: 'bg-teal-950/60 text-teal-300 border-teal-700/60' },
  optional: { label: 'Tuỳ Chọn', cls: 'bg-slate-800/60 text-slate-300 border-slate-700/60' },
  with_caution: { label: 'Thận Trọng', cls: 'bg-amber-950/60 text-amber-300 border-amber-700/60' }
};

const supplementSafetyConfig = {
  safe: { label: 'An toàn', icon: CheckCircle, cls: 'text-emerald-400' },
  ask_doctor: { label: 'Hỏi BS', icon: AlertTriangle, cls: 'text-amber-400' },
  avoid: { label: 'NÊN TRÁNH', icon: XCircle, cls: 'text-rose-400' }
};

function SexualHealthTab() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const toggle = (id: string) => setExpanded(p => p === id ? null : id);

  return (
    <div className="space-y-4">
      <div className="border-l-2 border-amber-500 pl-4 py-2 bg-amber-950/10 space-y-1 text-base md:text-sm text-slate-300">
        <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
          <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Nguồn y khoa uy tín</span>
        </div>
        <p className="leading-relaxed">
          Nghiên cứu peer-reviewed từ ASCO Survivorship Guidelines 2023, NCCN 2024, và các tạp chí y khoa quốc tế JAMA Oncology, NEJM.
        </p>
      </div>

      <div className="space-y-3">
        {sexualHealthTopics.map((t: SexualHealthTopic) => {
          const rc = recConfig[t.recommendation];
          const isOpen = expanded === t.id;
          return (
            <article key={t.id} className="py-4 px-4 sm:px-5 rounded-xl border-l-2 border-l-slate-700 bg-slate-900/20 hover:bg-slate-900/40 transition-colors space-y-2">
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <div className="space-y-0.5 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className={`px-2 py-0.5 rounded font-medium border ${rc.cls}`}>{rc.label}</span>
                    <span className="text-slate-400 font-mono uppercase">{t.categoryLabel}</span>
                  </div>
                  <h3 className="text-base md:text-sm font-bold text-white tracking-tight leading-snug">{t.title}</h3>
                </div>
                <button onClick={() => toggle(t.id)} className="text-xs text-slate-400 hover:text-slate-200 cursor-pointer shrink-0">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              <p className="text-base md:text-sm text-slate-300 leading-relaxed">{t.summary}</p>

              {isOpen && (
                <div className="pt-3 border-t border-slate-800/60 space-y-2 text-base md:text-sm text-slate-300">
                  {t.detailedContent.map((d, i) => (
                    <p key={i} className="leading-relaxed flex items-start gap-1.5">
                      <span className="text-rose-400 font-bold shrink-0">•</span>
                      <span>{d}</span>
                    </p>
                  ))}
                  <div className="pt-2 text-xs text-slate-400 border-t border-slate-800/40 flex flex-wrap justify-between gap-2">
                    <span className="text-teal-300 italic">Nguồn: {t.evidence}</span>
                    <span className="text-amber-200/90">{t.recommendationNote}</span>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}

function ExerciseTab() {
  const [selected, setSelected] = useState<string>('ex_3');
  const active = exerciseTypes.find((e: ExerciseType) => e.id === selected) || exerciseTypes[0];

  return (
    <div className="space-y-4">
      {/* Exercise Selector */}
      <div className="flex flex-wrap gap-1.5 text-xs">
        {exerciseTypes.map((e: ExerciseType) => (
          <button
            key={e.id}
            onClick={() => setSelected(e.id)}
            className={`px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
              selected === e.id
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <span>{e.emoji}</span>
            <span>{e.name}</span>
          </button>
        ))}
      </div>

      {/* Active Detail Article */}
      <article className="py-4 px-4 sm:px-5 rounded-xl border-l-2 border-l-rose-500 bg-slate-900/30 space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{active.emoji}</span>
            <h3 className="text-base md:text-sm font-bold text-white">{active.name}</h3>
          </div>
          <span className={`text-xs px-2.5 py-0.5 rounded font-medium border ${exerciseRecConfig[active.recommendation].cls}`}>
            {exerciseRecConfig[active.recommendation].label} ({active.weeklyTarget})
          </span>
        </div>

        <div className="space-y-2 text-base md:text-sm text-slate-300">
          <p className="border-l-2 border-rose-500/40 pl-3 py-0.5">
            <strong className="text-rose-300">Lợi ích ung thư vú: </strong>
            {active.breastCancerBenefit}
          </p>
          <p className="border-l-2 border-violet-500/40 pl-3 py-0.5">
            <strong className="text-violet-300">Lợi ích nội mạc tử cung: </strong>
            {active.endometrialBenefit}
          </p>
        </div>

        <div className="text-xs text-amber-200/90 space-y-1 pt-2 border-t border-slate-800/60">
          <strong className="text-amber-400">Lưu ý cẩn thận: </strong>
          {active.precautions.join(' • ')}
        </div>

        <div className="text-xs text-teal-300 pt-1">
          <strong className="text-teal-400">Mẹo bắt đầu: </strong>{active.startingTip} ({active.benefitsEvidence})
        </div>
      </article>
    </div>
  );
}

function SupplementTab() {
  return (
    <div className="space-y-4">
      <div className="border-l-2 border-rose-500 pl-4 py-2 bg-rose-950/10 text-base md:text-sm text-rose-200/90">
        <strong className="text-rose-300">Cảnh báo: </strong>
        Các sản phẩm <strong>DHEA, mầm đậu nành cô đặc liều cao, testosterone</strong> có thể chuyển hóa thành estrogen — <strong>TUYỆT ĐỐI NÊN TRÁNH</strong> khi có tiền sử K vú HR+.
      </div>

      <div className="space-y-3">
        {exerciseSupplements.map((s: SupplementForExercise) => {
          const sc = supplementSafetyConfig[s.safeForBreastCancer];
          const SafeIcon = sc.icon;
          return (
            <article key={s.id} className="py-3 px-4 rounded-xl border-l-2 border-l-slate-700 bg-slate-900/20 space-y-1.5 text-base md:text-sm">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h4 className="font-bold text-white">{s.name}</h4>
                <div className={`flex items-center gap-1 text-xs font-medium ${sc.cls}`}>
                  <SafeIcon className="w-3.5 h-3.5" />
                  <span>{sc.label}</span>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">{s.note}</p>
              <div className="text-xs text-slate-500 italic">{s.source}</div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function ResearchTab() {
  return (
    <div className="space-y-3">
      {exerciseResearchData.map((r) => (
        <article key={r.id} className="py-4 px-4 sm:px-5 rounded-xl border-l-2 border-l-slate-700 bg-slate-900/20 space-y-2 text-base md:text-sm">
          <div className="flex justify-between items-center text-xs text-slate-400 font-mono">
            <span>{r.source} ({r.year})</span>
            <span>{r.applicableTo}</span>
          </div>
          <h4 className="font-bold text-white">{r.title}</h4>
          <p className="text-slate-300 leading-relaxed">{r.finding}</p>
          <p className="text-xs font-bold text-rose-300 bg-rose-950/30 p-2 rounded border-l border-rose-500/40">
            ⚡ Kết quả: {r.magnitude}
          </p>
        </article>
      ))}
    </div>
  );
}

export const BreastCancerSexualExerciseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('sexual');

  return (
    <section id="bc-chapter-8" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-6 border-t border-slate-900">
      {/* Header */}
      <div className="space-y-2">
        <div className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
          Chương 8 • Sức Khỏe Toàn Diện
        </div>
        <h2 className="text-lg sm:text-xl md:text-xl font-bold text-white tracking-tight">
          Quan Hệ Vợ Chồng & Thể Thao Sau K Vú — Bằng Chứng Khoa Học
        </h2>
        <p className="text-base md:text-sm text-slate-300 leading-relaxed max-w-3xl">
          Tổng hợp nghiên cứu từ ASCO, NEJM, JAMA, NCCN về tác động của sinh hoạt tình dục và vận động thể chất đến bệnh K vú Luminal A và nội mạc tử cung.
        </p>
      </div>

      {/* Tabs Switcher */}
      <div className="flex gap-2 flex-wrap text-xs">
        {TAB_LABELS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
              activeTab === key
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'sexual' && <SexualHealthTab />}
      {activeTab === 'exercise' && <ExerciseTab />}
      {activeTab === 'supplement' && <SupplementTab />}
      {activeTab === 'research' && <ResearchTab />}
    </section>
  );
};
