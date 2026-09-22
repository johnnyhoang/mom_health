import React, { useState } from 'react';
import {
  sexualHealthTopics,
  exerciseTypes,
  exerciseSupplements,
  exerciseResearchData
} from '../data/breastCancerSexualExerciseData';
import type { SexualHealthTopic, ExerciseType, SupplementForExercise } from '../data/breastCancerSexualExerciseData';
import {
  HeartPulse, Dumbbell, FlaskConical, BookOpen,
  ChevronDown, ChevronUp, CheckCircle, AlertTriangle,
  XCircle, ShieldCheck, Info, Sparkles, Zap, Activity
} from 'lucide-react';

const TAB_LABELS = [
  { key: 'sexual', label: '❤️ Quan Hệ Vợ Chồng', icon: HeartPulse },
  { key: 'exercise', label: '🏃 Thể Thao', icon: Activity },
  { key: 'supplement', label: '💊 Bổ Trợ Tập Luyện', icon: FlaskConical },
  { key: 'research', label: '🔬 Bằng Chứng Khoa Học', icon: BookOpen }
] as const;
type TabKey = typeof TAB_LABELS[number]['key'];

// --- Recommendation badge colors ---
const recConfig = {
  encouraged: { label: 'Khuyến khích', cls: 'bg-emerald-900/60 text-emerald-300 border-emerald-700/50' },
  safe_with_precautions: { label: 'An toàn (cần lưu ý)', cls: 'bg-amber-900/60 text-amber-300 border-amber-700/50' },
  needs_doctor: { label: 'Cần hỏi Bác sĩ', cls: 'bg-sky-900/60 text-sky-300 border-sky-700/50' },
  avoid_temporarily: { label: 'Kiêng tạm thời', cls: 'bg-rose-900/60 text-rose-300 border-rose-700/50' }
};

const exerciseRecConfig = {
  strongly_recommended: { label: 'Rất Khuyến Cáo', cls: 'bg-emerald-900/60 text-emerald-300' },
  recommended: { label: 'Khuyến Cáo', cls: 'bg-teal-900/60 text-teal-300' },
  optional: { label: 'Tuỳ Chọn', cls: 'bg-slate-700/60 text-slate-300' },
  with_caution: { label: 'Thận Trọng', cls: 'bg-amber-900/60 text-amber-300' }
};

const supplementSafetyConfig = {
  safe: { label: 'An toàn', icon: CheckCircle, cls: 'text-emerald-400' },
  ask_doctor: { label: 'Hỏi BS', icon: AlertTriangle, cls: 'text-amber-400' },
  avoid: { label: 'NÊN TRÁNH', icon: XCircle, cls: 'text-rose-400' }
};

const categoryIcons: Record<string, string> = {
  impact_on_cancer: '🔬',
  post_treatment_challenges: '⚠️',
  solutions: '💡',
  endometrial_specific: '🫀',
  psychology: '🧠',
  when_to_pause: '⏸️'
};

// --- Sexual Health Tab ---
function SexualHealthTab() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const toggle = (id: string) => setExpanded(p => p === id ? null : id);

  return (
    <div className="space-y-4">
      {/* Disclaimer */}
      <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-start gap-2 text-[11px] text-amber-200/80">
        <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <span>Thông tin dưới đây dựa trên <strong className="text-amber-300">nghiên cứu khoa học peer-reviewed</strong> và hướng dẫn ASCO, NCCN 2023–2024. Không phải thông tin từ quảng cáo.</span>
      </div>

      {/* Cards */}
      <div className="space-y-2">
        {sexualHealthTopics.map((t: SexualHealthTopic) => {
          const rc = recConfig[t.recommendation];
          const isOpen = expanded === t.id;
          return (
            <div key={t.id} className="rounded-xl border border-slate-800 bg-slate-900/80 overflow-hidden">
              <button
                onClick={() => toggle(t.id)}
                className="w-full flex items-start gap-3 p-4 text-left hover:bg-slate-800/40 transition-colors"
              >
                <span className="text-lg shrink-0 mt-0.5">{categoryIcons[t.category] || '📋'}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold ${rc.cls}`}>
                      {rc.label}
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">{t.categoryLabel}</span>
                  </div>
                  <p className="text-sm font-bold text-white leading-snug">{t.title}</p>
                  <p className="text-xs text-slate-400 mt-0.5 line-clamp-2">{t.summary}</p>
                </div>
                {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0 mt-1" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 mt-1" />}
              </button>
              {isOpen && (
                <div className="px-4 pb-4 border-t border-slate-800 space-y-3">
                  <div className="pt-3 space-y-2">
                    {t.detailedContent.map((d, i) => (
                      <p key={i} className="text-xs text-slate-300 leading-relaxed flex items-start gap-1.5">
                        <span className="text-rose-400 font-bold shrink-0 mt-0.5">•</span>
                        <span>{d}</span>
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-start gap-3 pt-1 border-t border-slate-800/60">
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Nguồn nghiên cứu</p>
                      <p className="text-[11px] text-teal-300/80 italic">{t.evidence}</p>
                    </div>
                    <div className="shrink-0 max-w-[220px]">
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Khuyến nghị</p>
                      <p className="text-[11px] text-slate-300">{t.recommendationNote}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- Exercise Tab ---
function ExerciseTab() {
  const [selected, setSelected] = useState<string>('ex_3');
  const active = exerciseTypes.find((e: ExerciseType) => e.id === selected) || exerciseTypes[0];
  const intensityColor: Record<string, string> = {
    low: 'text-emerald-400',
    moderate: 'text-amber-400',
    high: 'text-rose-400'
  };
  const intensityLabel: Record<string, string> = {
    low: 'Nhẹ nhàng',
    moderate: 'Vừa phải',
    high: 'Cao'
  };

  return (
    <div className="space-y-4">
      {/* Exercise Selector */}
      <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
        {exerciseTypes.map((e: ExerciseType) => (
          <button
            key={e.id}
            onClick={() => setSelected(e.id)}
            className={`p-2 rounded-xl text-center text-xs transition-all cursor-pointer flex flex-col items-center gap-1 ${
              selected === e.id
                ? 'bg-rose-500/20 border border-rose-500/50 text-rose-200'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <span className="text-xl">{e.emoji}</span>
            <span className="text-[9px] leading-tight font-bold line-clamp-2">{e.name}</span>
          </button>
        ))}
      </div>

      {/* Active Detail */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{active.emoji}</span>
              <h3 className="text-lg font-black text-white">{active.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 ${intensityColor[active.intensityLevel]}`}>
                Cường độ: {intensityLabel[active.intensityLevel]}
              </span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${exerciseRecConfig[active.recommendation].cls}`}>
                {exerciseRecConfig[active.recommendation].label}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Mục tiêu/tuần</span>
            <span className="text-sm font-bold text-teal-300">{active.weeklyTarget}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-900/30 space-y-1.5">
            <p className="text-[10px] font-bold text-rose-300 uppercase tracking-wider flex items-center gap-1">
              <HeartPulse className="w-3 h-3" /> Lợi ích đặc biệt cho K Vú
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">{active.breastCancerBenefit}</p>
          </div>
          <div className="p-3 rounded-xl bg-violet-950/20 border border-violet-900/30 space-y-1.5">
            <p className="text-[10px] font-bold text-violet-300 uppercase tracking-wider flex items-center gap-1">
              <Activity className="w-3 h-3" /> Lợi ích cho Nội Mạc Tử Cung
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">{active.endometrialBenefit}</p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Lưu ý cẩn thận:</p>
          <ul className="space-y-1">
            {active.precautions.map((p, i) => (
              <li key={i} className="flex items-start gap-1.5 text-xs text-amber-200/80">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
          <p className="text-[10px] font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Mẹo bắt đầu
          </p>
          <p className="text-xs text-slate-300">{active.startingTip}</p>
          <p className="text-[10px] text-slate-500 pt-1 italic">Nguồn: {active.benefitsEvidence}</p>
        </div>
      </div>
    </div>
  );
}

// --- Supplement Tab ---
function SupplementTab() {
  return (
    <div className="space-y-3">
      <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-700/30 flex items-start gap-2 text-xs text-rose-200/80">
        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
        <span>Các sản phẩm <strong className="text-rose-300">DHEA, tinh chất mầm đậu nành cô đặc, testosterone</strong> có thể chuyển hóa thành estrogen — <strong className="text-rose-300">TUYỆT ĐỐI KHÔNG DÙNG</strong> khi có tiền sử K vú HR+.</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {exerciseSupplements.map((s: SupplementForExercise) => {
          const sc = supplementSafetyConfig[s.safeForBreastCancer];
          const SafeIcon = sc.icon;
          const evidenceColor: Record<string, string> = {
            strong: 'text-emerald-400',
            moderate: 'text-amber-400',
            weak: 'text-slate-400',
            none: 'text-rose-400'
          };
          const evidenceLabel: Record<string, string> = {
            strong: 'Bằng chứng mạnh',
            moderate: 'Bằng chứng vừa',
            weak: 'Bằng chứng yếu',
            none: 'Chưa có bằng chứng'
          };
          return (
            <div key={s.id} className={`p-3 rounded-xl border ${s.safeForBreastCancer === 'avoid' ? 'bg-rose-950/30 border-rose-700/50' : 'bg-slate-900/80 border-slate-800'} space-y-2`}>
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-bold text-white leading-snug">{s.name}</p>
                <div className={`flex items-center gap-1 text-[10px] font-bold shrink-0 ${sc.cls}`}>
                  <SafeIcon className="w-3.5 h-3.5" />
                  <span>{sc.label}</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-400">{s.purpose}</p>
              <p className="text-[11px] text-slate-300 leading-snug">{s.note}</p>
              <div className="flex items-center justify-between pt-0.5">
                <span className={`text-[10px] font-mono ${evidenceColor[s.evidence]}`}>{evidenceLabel[s.evidence]}</span>
                <span className="text-[10px] text-slate-500 italic">{s.source}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- Research Tab ---
function ResearchTab() {
  return (
    <div className="space-y-3">
      {exerciseResearchData.map((r) => (
        <div key={r.id} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[10px] font-mono text-slate-500 uppercase">{r.source} • {r.year}</span>
            <span className="text-[10px] text-slate-500 italic">{r.applicableTo}</span>
          </div>
          <h4 className="text-xs font-bold text-white">{r.title}</h4>
          <p className="text-xs text-slate-300 leading-relaxed">{r.finding}</p>
          <div className="flex items-center gap-2 pt-1 bg-rose-950/20 border border-rose-900/30 rounded-lg px-3 py-2">
            <Zap className="w-4 h-4 text-rose-400 shrink-0" />
            <p className="text-xs font-bold text-rose-200">{r.magnitude}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// --- Main Component ---
export const BreastCancerSexualExerciseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('sexual');

  return (
    <section id="bc-chapter-8" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-900">

      {/* Header */}
      <div className="space-y-1.5">
        <div className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
          Chương 8 • Sức Khỏe Toàn Diện
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
          Quan Hệ Vợ Chồng & Thể Thao Sau K Vú — Bằng Chứng Khoa Học
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
          Tổng hợp nghiên cứu từ ASCO, NEJM, JAMA, NCCN về tác động của đời sống tình dục và vận động thể chất đến tiên lượng ung thư vú Luminal A (HR+) và các bệnh lý nội mạc tử cung đi kèm.
        </p>
        <div className="flex flex-wrap items-center gap-2 pt-1 text-[10px] text-slate-500">
          <span className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700">ASCO Survivorship 2023</span>
          <span className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700">NCCN 2024</span>
          <span className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700">Holmes JAMA 2005</span>
          <span className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700">Schmitz NEJM 2009</span>
          <span className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700">Chandwani JNCI 2014</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800 flex-wrap">
        {TAB_LABELS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex-1 min-w-[120px] px-3 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === key
                ? 'bg-rose-500/20 text-rose-200 border border-rose-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'sexual' && <SexualHealthTab />}
        {activeTab === 'exercise' && <ExerciseTab />}
        {activeTab === 'supplement' && <SupplementTab />}
        {activeTab === 'research' && <ResearchTab />}
      </div>

    </section>
  );
};
