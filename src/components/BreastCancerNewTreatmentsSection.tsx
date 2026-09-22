import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { newTreatments2022to2026 } from '../data/breastCancerNewTreatments2022Data';
import type { NewTreatment2022 } from '../data/breastCancerNewTreatments2022Data';

const TreatmentCard: React.FC<{
  treatment: NewTreatment2022;
  indexStr: string;
}> = ({ treatment, indexStr }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="py-3.5 px-4 rounded-lg border-l-2 border-slate-700 bg-slate-900/10 space-y-2.5 text-base md:text-sm text-slate-300">
      <div className="flex flex-wrap items-baseline justify-between gap-2 text-xs">
        <h4 className="font-bold text-slate-200 text-sm leading-snug">
          {indexStr}. {treatment.name}
        </h4>
        <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-400">
          <span>{treatment.drugClass}</span>
          <span>•</span>
          <span>FDA {treatment.approvedYear}</span>
        </div>
      </div>

      <p className="leading-relaxed">
        <strong className="text-slate-200 font-medium">Chỉ định: </strong>
        {treatment.indication}
      </p>

      <div className="text-xs text-slate-400 space-y-0.5 pt-0.5">
        <div><strong className="text-slate-300">Thử nghiệm lâm sàng ({treatment.mainTrial}): </strong>{treatment.trialResults}</div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800/40">
        <span className={treatment.availableInVietnam ? 'text-slate-300' : 'text-slate-400'}>
          {treatment.availableInVietnam ? '✓ Có sẵn tại Việt Nam' : '• Chưa có sẵn tại Việt Nam'}
        </span>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
        >
          <span>{expanded ? 'Ẩn chi tiết' : 'Chi tiết tác dụng phụ & Luminal A'}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {expanded && (
        <div className="pt-2.5 border-t border-slate-800/40 space-y-2 text-xs text-slate-300">
          <div>
            <strong className="text-slate-200 block mb-1">Tác dụng phụ thường gặp:</strong>
            <span className="text-slate-400">{treatment.sideEffects.join(', ')}</span>
          </div>

          <div>
            <strong className="text-slate-200">Tình trạng tại Việt Nam: </strong>
            <span className="text-slate-300">{treatment.vietnamNote}</span>
          </div>

          {treatment.luminalARelevance !== 'not-applicable' && (
            <div>
              <strong className="text-slate-200">Liên quan Luminal A: </strong>
              <span className="text-slate-300">{treatment.relevanceNote}</span>
            </div>
          )}
        </div>
      )}
    </article>
  );
};

export const BreastCancerNewTreatmentsSection: React.FC = () => {
  return (
    <section id="bc-chapter-4" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-8 border-t border-slate-900">
      {/* Chapter Title */}
      <div className="space-y-2">
        <div className="text-slate-400 font-mono text-xs font-medium uppercase tracking-wider">
          Chương 4 • Đột Phá Điều Trị 2022–2026
        </div>
        <h2 className="text-lg sm:text-xl md:text-xl font-bold text-slate-100 tracking-tight">
          Kho Thuốc Mới FDA Phê Duyệt 2022–2026 Cho K Vú Nội Tiết
        </h2>
        <p className="text-base md:text-sm text-slate-300 leading-relaxed max-w-3xl">
          Tổng hợp 10 thuốc và liệu pháp mới nhất từ các thử nghiệm lâm sàng quốc tế lớn (NEJM, Lancet, ASCO, NCCN) liên quan đến điều trị K vú thể nội tiết dương tính.
        </p>
      </div>

      {/* 4.1 Continuous List */}
      <div className="space-y-4 pt-2 border-t border-slate-800/40">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-200">
            4.1. Danh mục 10 thuốc & liệu pháp điều trị mới FDA phê duyệt (2022–2026)
          </h3>
          <p className="text-xs text-slate-400">
            Chi tiết về cơ chế, thử nghiệm lâm sàng chính và mức độ phù hợp với K vú thể Luminal A.
          </p>
        </div>

        <div className="space-y-4">
          {newTreatments2022to2026.map((treatment, idx) => (
            <TreatmentCard
              key={treatment.id}
              treatment={treatment}
              indexStr={`4.1.${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

