import React from 'react';
import { newTreatments2022to2026 } from '../data/breastCancerNewTreatments2022Data';
import type { NewTreatment2022 } from '../data/breastCancerNewTreatments2022Data';

const TreatmentCard: React.FC<{
  treatment: NewTreatment2022;
  indexStr: string;
}> = ({ treatment, indexStr }) => {
  return (
    <article className="space-y-2 text-base md:text-sm text-slate-300 leading-relaxed pb-5 border-b border-slate-800/40 last:border-b-0">
      <div className="flex flex-wrap items-baseline justify-between gap-2 text-xs">
        <h4 className="font-bold text-white text-base">
          {indexStr}. {treatment.name}
        </h4>
        <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-400">
          <span>{treatment.drugClass}</span>
          <span>•</span>
          <span>FDA {treatment.approvedYear}</span>
        </div>
      </div>

      <p>
        <strong className="text-slate-200">Chỉ định: </strong>
        {treatment.indication}
      </p>

      <div className="text-xs text-slate-400">
        <strong className="text-slate-300">Thử nghiệm lâm sàng ({treatment.mainTrial}): </strong>
        {treatment.trialResults}
      </div>

      <div className="space-y-1 text-xs text-slate-400 pt-0.5">
        <div>
          <strong className="text-slate-300">Tác dụng phụ thường gặp: </strong>
          <span>{treatment.sideEffects.join(', ')}</span>
        </div>

        <div>
          <strong className="text-slate-300">Tình trạng tại Việt Nam: </strong>
          <span className={treatment.availableInVietnam ? 'text-teal-300 font-medium' : 'text-slate-300'}>
            {treatment.vietnamNote}
          </span>
        </div>

        {treatment.luminalARelevance !== 'not-applicable' && (
          <div>
            <strong className="text-slate-300">Liên quan Luminal A: </strong>
            <span className="text-slate-300">{treatment.relevanceNote}</span>
          </div>
        )}
      </div>
    </article>
  );
};

export const BreastCancerNewTreatmentsSection: React.FC = () => {
  return (
    <section id="bc-chapter-4" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-6 border-t border-slate-900">
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
      <div className="space-y-6 pt-4 border-t border-slate-800/40">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-200">
            4.1. Danh mục 10 thuốc & liệu pháp điều trị mới FDA phê duyệt (2022–2026)
          </h3>
          <p className="text-xs text-slate-400">
            Chi tiết về cơ chế, thử nghiệm lâm sàng chính và mức độ phù hợp với K vú thể Luminal A.
          </p>
        </div>

        <div className="space-y-5">
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
