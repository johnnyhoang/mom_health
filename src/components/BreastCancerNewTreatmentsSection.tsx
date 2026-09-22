import React, { useState } from 'react';
import {
  Sparkles,
  AlertTriangle,
  Filter,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { newTreatments2022to2026 } from '../data/breastCancerNewTreatments2022Data';
import type { NewTreatment2022 } from '../data/breastCancerNewTreatments2022Data';

interface BreastCancerNewTreatmentsSectionProps {
  highlightLuminalA?: boolean;
}

type FilterType = 'all' | 'high' | 'medium';

const relevanceLabelMap: Record<string, string> = {
  high: 'Luminal A: Cao',
  medium: 'Luminal A: Vừa',
  low: 'Luminal A: Thấp',
  'not-applicable': 'Không áp dụng',
};

const relevanceBadgeClass: Record<string, string> = {
  high: 'bg-rose-950/60 text-rose-300 border-rose-800/60',
  medium: 'bg-amber-950/60 text-amber-300 border-amber-800/60',
  low: 'bg-slate-800/60 text-slate-400 border-slate-700/60',
  'not-applicable': 'bg-slate-900/60 text-slate-500 border-slate-800/60',
};

const TreatmentCard: React.FC<{
  treatment: NewTreatment2022;
  highlightLuminalA: boolean;
}> = ({ treatment, highlightLuminalA }) => {
  const [expanded, setExpanded] = useState(false);
  const isHighRelevance =
    treatment.luminalARelevance === 'high' && highlightLuminalA;

  return (
    <article
      className={`py-4 px-4 sm:px-5 rounded-xl border-l-2 transition-all ${
        isHighRelevance
          ? 'border-l-rose-500 bg-slate-900/40 hover:bg-slate-900/60'
          : 'border-l-slate-700 bg-slate-900/20 hover:bg-slate-900/40'
      }`}
    >
      <div className="space-y-3">
        {/* Title + Badges */}
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-base md:text-sm font-bold text-white tracking-tight leading-snug">
            {treatment.name}
          </h3>
          <div className="flex flex-wrap gap-1.5 text-xs">
            <span className="px-2 py-0.5 rounded font-mono bg-slate-800/80 text-teal-300">
              {treatment.drugClass}
            </span>
            <span className="px-2 py-0.5 rounded font-mono bg-slate-800/80 text-slate-300">
              FDA {treatment.approvedYear}
            </span>
            <span
              className={`px-2 py-0.5 rounded font-medium border ${
                relevanceBadgeClass[treatment.luminalARelevance]
              }`}
            >
              {relevanceLabelMap[treatment.luminalARelevance]}
            </span>
          </div>
        </div>

        {/* Indication */}
        <p className="text-base md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-slate-400 font-medium">Chỉ định: </strong>
          {treatment.indication}
        </p>

        {/* Trial Results - Editorial blockquote style */}
        <div className="border-l border-amber-500/40 pl-3 py-1 bg-amber-950/10 space-y-1">
          <div className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{treatment.mainTrial}</span>
          </div>
          <p className="text-base md:text-sm text-slate-200 leading-relaxed">
            {treatment.trialResults}
          </p>
        </div>

        {/* Status in VN */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
          <div className="flex items-center gap-1.5">
            {treatment.availableInVietnam ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            ) : (
              <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            )}
            <span className={treatment.availableInVietnam ? 'text-emerald-300' : 'text-rose-300'}>
              {treatment.availableInVietnam ? 'Có sẵn tại Việt Nam' : 'Chưa có sẵn tại Việt Nam'}
            </span>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
          >
            <span>{expanded ? 'Ẩn lưu ý' : 'Chi tiết & tác dụng phụ'}</span>
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Collapsible details */}
        {expanded && (
          <div className="pt-3 border-t border-slate-800/60 space-y-2.5 text-base md:text-sm text-slate-300">
            <div>
              <p className="text-xs font-bold uppercase text-amber-400 mb-1 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" /> Tác dụng phụ thường gặp
              </p>
              <div className="flex flex-wrap gap-1.5">
                {treatment.sideEffects.map((se, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 rounded bg-slate-800/90 text-amber-200">
                    {se}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-base md:text-sm text-slate-300">
              <strong className="text-teal-400 font-medium">Tại Việt Nam: </strong>
              {treatment.vietnamNote}
            </p>

            {treatment.luminalARelevance !== 'not-applicable' && (
              <p className="text-base md:text-sm text-rose-200/90 bg-rose-950/20 p-2.5 rounded border-l border-rose-500/40">
                <strong className="text-rose-300">Ý nghĩa với Luminal A: </strong>
                {treatment.relevanceNote}
              </p>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export const BreastCancerNewTreatmentsSection: React.FC<BreastCancerNewTreatmentsSectionProps> = ({
  highlightLuminalA = true,
}) => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filtered =
    filter === 'all'
      ? newTreatments2022to2026
      : newTreatments2022to2026.filter((t) => t.luminalARelevance === filter);

  return (
    <section id="bc-chapter-4" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-6 border-t border-slate-900">
      {/* Chapter Title */}
      <div className="space-y-2">
        <div className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
          Chương 4 • Đột Phá Điều Trị 2022–2026
        </div>
        <h2 className="text-lg sm:text-xl md:text-xl font-bold text-white tracking-tight">
          Kho Thuốc Mới FDA Phê Duyệt 2022–2026 Cho K Vú Nội Tiết
        </h2>
        <p className="text-base md:text-sm text-slate-300 leading-relaxed max-w-3xl">
          Tổng hợp 10 thuốc và liệu pháp mới nhất từ các thử nghiệm lâm sàng quốc tế lớn, phân loại theo mức độ liên quan với Luminal A:
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center gap-2 flex-wrap text-xs">
        <div className="flex items-center gap-1 text-slate-400 font-medium">
          <Filter className="w-3.5 h-3.5" />
          <span>Phân loại:</span>
        </div>
        {[
          { value: 'all', label: 'Tất cả (10 thuốc)' },
          { value: 'high', label: 'Luminal A Cao' },
          { value: 'medium', label: 'Luminal A Vừa' },
        ].map((opt) => (
          <button
            key={opt.value}
            onClick={() => setFilter(opt.value as FilterType)}
            className={`px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
              filter === opt.value
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Editorial Content List - Low border CMS style */}
      <div className="space-y-4">
        {filtered.map((treatment) => (
          <TreatmentCard
            key={treatment.id}
            treatment={treatment}
            highlightLuminalA={highlightLuminalA}
          />
        ))}
      </div>
    </section>
  );
};
