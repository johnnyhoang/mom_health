import React, { useState } from 'react';
import {
  FlaskConical,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
  Sparkles,
  AlertTriangle,
  Filter,
} from 'lucide-react';
import { newTreatments2022to2026 } from '../data/breastCancerNewTreatments2022Data';
import type { NewTreatment2022 } from '../data/breastCancerNewTreatments2022Data';

interface BreastCancerNewTreatmentsSectionProps {
  highlightLuminalA?: boolean;
}

type FilterType = 'all' | 'high' | 'medium';

const relevanceLabelMap: Record<string, string> = {
  high: 'Cao',
  medium: 'Vừa',
  low: 'Thấp',
  'not-applicable': 'Không áp dụng',
};

const relevanceBadgeClass: Record<string, string> = {
  high: 'bg-rose-950 text-rose-300 border-rose-800',
  medium: 'bg-amber-950 text-amber-300 border-amber-800',
  low: 'bg-slate-800 text-slate-400 border-slate-700',
  'not-applicable': 'bg-slate-900 text-slate-500 border-slate-800',
};

const TreatmentCard: React.FC<{
  treatment: NewTreatment2022;
  highlightLuminalA: boolean;
}> = ({ treatment, highlightLuminalA }) => {
  const [expanded, setExpanded] = useState(false);
  const isHighRelevance =
    treatment.luminalARelevance === 'high' &&
    highlightLuminalA;

  return (
    <div
      className={`rounded-2xl border transition-all ${
        isHighRelevance
          ? 'bg-rose-950/20 border-rose-700/50 shadow-rose-950/30 shadow-md'
          : 'bg-slate-900/70 border-slate-800'
      }`}
    >
      {/* Card Header */}
      <div className="p-4 space-y-2.5">
        {/* Name + badges */}
        <div className="flex flex-wrap items-start gap-2 justify-between">
          <div className="space-y-1 flex-1 min-w-0">
            <h3 className="font-black text-white text-sm sm:text-base leading-tight">
              {treatment.name}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-slate-800 text-teal-300 border border-slate-700">
                {treatment.drugClass}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-slate-800 text-slate-300 border border-slate-700">
                FDA {treatment.approvedYear}
              </span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${
                  relevanceBadgeClass[treatment.luminalARelevance]
                }`}
              >
                Luminal A: {relevanceLabelMap[treatment.luminalARelevance]}
              </span>
            </div>
          </div>
        </div>

        {/* Indication */}
        <div className="text-xs text-slate-300 leading-relaxed">
          <span className="font-bold text-slate-400">Chỉ định: </span>
          {treatment.luminalARelevance === 'high' && highlightLuminalA ? (
            <span className="text-rose-200 font-medium">{treatment.indication}</span>
          ) : (
            <span>{treatment.indication}</span>
          )}
        </div>

        {/* Trial results */}
        <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-0.5">
          <div className="text-[10px] font-bold uppercase text-amber-400 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" />
            {treatment.mainTrial}
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">{treatment.trialResults}</p>
        </div>

        {/* Vietnam availability */}
        <div className="flex items-center gap-2 text-xs">
          {treatment.availableInVietnam ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          ) : (
            <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
          )}
          <span
            className={
              treatment.availableInVietnam ? 'text-emerald-300' : 'text-rose-300'
            }
          >
            {treatment.availableInVietnam
              ? 'Có sẵn tại Việt Nam'
              : 'Chưa có sẵn tại Việt Nam'}
          </span>
        </div>

        {/* Collapse toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
        >
          {expanded ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
          {expanded ? 'Ẩn chi tiết' : 'Xem chi tiết (Tác dụng phụ & Lưu ý)'}
        </button>
      </div>

      {/* Collapsible content */}
      {expanded && (
        <div className="px-4 pb-4 space-y-2.5 border-t border-slate-800/60 pt-3">
          {/* Side effects */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-amber-400 mb-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              Tác dụng phụ thường gặp
            </div>
            <div className="flex flex-wrap gap-1.5">
              {treatment.sideEffects.map((se, i) => (
                <span
                  key={i}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-amber-950/40 text-amber-200 border border-amber-900/50"
                >
                  {se}
                </span>
              ))}
            </div>
          </div>

          {/* Vietnam note */}
          <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
            <span className="font-bold text-teal-400">Tại Việt Nam: </span>
            {treatment.vietnamNote}
          </div>

          {/* Relevance note */}
          {treatment.luminalARelevance !== 'not-applicable' && (
            <div className="p-2.5 rounded-xl bg-rose-950/20 border-l-2 border-rose-400 text-xs text-rose-100">
              <span className="font-bold text-rose-300">Ý nghĩa với Luminal A: </span>
              {treatment.relevanceNote}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const BreastCancerNewTreatmentsSection: React.FC<BreastCancerNewTreatmentsSectionProps> = ({
  highlightLuminalA = true,
}) => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filtered =
    filter === 'all'
      ? newTreatments2022to2026
      : newTreatments2022to2026.filter(
          (t) => t.luminalARelevance === filter
        );

  const filterOptions: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'Tất cả thuốc' },
    { value: 'high', label: 'Luminal A Cao' },
    { value: 'medium', label: 'Luminal A Vừa' },
  ];

  return (
    <section
      id="bc-chapter-4"
      className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-900"
    >
      {/* Section header */}
      <div className="space-y-1.5">
        <div className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
          Chương 4 • Đột Phá Điều Trị 2022–2026
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
          Kho Thuốc Mới FDA Phê Duyệt 2022–2026 Cho K Vú Nội Tiết
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Tổng hợp 10 thuốc và liệu pháp mới nhất từ các thử nghiệm lâm sàng quốc tế lớn, phân loại theo mức độ liên quan với Luminal A. Giúp bệnh nhân hiểu rõ bức tranh toàn cảnh khi bệnh tiến triển hoặc cần chuyển phác đồ.
        </p>
      </div>

      {/* Filter bar */}
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Filter className="w-3.5 h-3.5" />
          <span className="font-bold">Lọc:</span>
        </div>
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setFilter(opt.value)}
            className={`px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer ${
              filter === opt.value
                ? 'bg-rose-500/20 text-rose-300 border-rose-500/60'
                : 'bg-slate-900 text-slate-400 border-slate-700 hover:border-slate-500 hover:text-slate-200'
            }`}
          >
            {opt.label}
          </button>
        ))}
        <span className="text-xs text-slate-500 ml-1">
          ({filtered.length} thuốc)
        </span>
      </div>

      {/* Highlight banner for Luminal A */}
      {highlightLuminalA && (
        <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-800/40 text-xs text-rose-100 flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <span>
            <strong className="text-rose-300">Lưu ý quan trọng:</strong> Các thuốc có nhãn{' '}
            <span className="font-bold text-rose-300">Luminal A: Cao</span> đặc biệt liên quan đến
            phân nhóm ER+/HER2- như trường hợp của chị — có thể cần dùng nếu bệnh tiến triển sang
            giai đoạn muộn trong tương lai.
          </span>
        </div>
      )}

      {/* Treatment cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((treatment) => (
          <TreatmentCard
            key={treatment.id}
            treatment={treatment}
            highlightLuminalA={highlightLuminalA}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-10 text-slate-500 text-sm">
          Không có thuốc nào phù hợp với bộ lọc này.
        </div>
      )}

      {/* Footer note */}
      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <span>
          Thông tin trên chỉ mang tính giáo dục. Chỉ định cụ thể phải được bác sĩ ung bướu chuyên
          khoa quyết định dựa trên hồ sơ bệnh án và xét nghiệm sinh học phân tử của từng bệnh nhân.
        </span>
      </div>
    </section>
  );
};
