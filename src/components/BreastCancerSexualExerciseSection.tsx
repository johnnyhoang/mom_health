import React from 'react';
import {
  sexualHealthTopics,
  exerciseTypes,
  exerciseSupplements,
  exerciseResearchData
} from '../data/breastCancerSexualExerciseData';
import type { SexualHealthTopic, ExerciseType, SupplementForExercise } from '../data/breastCancerSexualExerciseData';

export const BreastCancerSexualExerciseSection: React.FC = () => {
  return (
    <section id="bc-chapter-8" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-6 border-t border-slate-900">
      {/* Chapter Title */}
      <div className="space-y-2">
        <div className="text-slate-400 font-mono text-xs font-medium uppercase tracking-wider">
          Chương 8 • Sức Khỏe Tình Dục & Vận Động
        </div>
        <h2 className="text-lg sm:text-xl md:text-xl font-bold text-slate-100 tracking-tight">
          Quan Hệ Vợ Chồng & Thể Thao Sau Điều Trị K Vú — Bằng Chứng Y Khoa
        </h2>
        <p className="text-base md:text-sm text-slate-300 leading-relaxed max-w-3xl">
          Tổng hợp bằng chứng từ các hướng dẫn ASCO, NCCN, NEJM và JAMA về tác động của đời sống tình dục và vận động thể chất đến bệnh K vú Luminal A và nội mạc tử cung.
        </p>
      </div>

      {/* 8.1. Quan hệ vợ chồng & Sức khỏe tình dục */}
      <div className="space-y-6 pt-4 border-t border-slate-800/40">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-200">
            8.1. Quan hệ vợ chồng & Sức khỏe tình dục
          </h3>
          <p className="text-xs text-slate-400">
            Cơ sở sinh lý, tâm lý và khuyến cáo an toàn từ hướng dẫn ASCO Survivorship Guidelines 2023.
          </p>
        </div>

        <div className="space-y-5">
          {sexualHealthTopics.map((topic: SexualHealthTopic, idx: number) => (
            <article
              key={topic.id}
              className="space-y-2 text-base md:text-sm text-slate-300 leading-relaxed pb-5 border-b border-slate-800/40 last:border-b-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 text-xs">
                <h4 className="font-bold text-white text-base">
                  8.1.{idx + 1}. {topic.title}
                </h4>
                <span className="text-slate-400 text-[11px] font-mono">
                  {topic.categoryLabel}
                </span>
              </div>

              <p>{topic.summary}</p>

              <div className="space-y-1 pt-0.5 text-slate-300">
                {topic.detailedContent.map((detail, i) => (
                  <p key={i} className="leading-relaxed flex items-start gap-2">
                    <span className="text-slate-500 shrink-0">•</span>
                    <span>{detail}</span>
                  </p>
                ))}
              </div>

              <div className="pt-1 text-xs text-slate-400 flex flex-wrap justify-between gap-2">
                <span className="italic">Nguồn: {topic.evidence}</span>
                <span className="text-teal-300 font-medium">{topic.recommendationNote}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 8.2. Hướng dẫn vận động thể thao & Các bộ môn */}
      <div className="space-y-6 pt-4 border-t border-slate-800/40">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-200">
            8.2. Hướng dẫn vận động thể thao & Các bộ môn phù hợp
          </h3>
          <p className="text-xs text-slate-400">
            Đánh giá 7 hình thức thể thao theo khuyến cáo của ASCO 2022 Physical Activity Guidelines.
          </p>
        </div>

        <div className="space-y-5">
          {exerciseTypes.map((ex: ExerciseType, idx: number) => (
            <article
              key={ex.id}
              className="space-y-2 text-base md:text-sm text-slate-300 leading-relaxed pb-5 border-b border-slate-800/40 last:border-b-0"
            >
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
                <h4 className="font-bold text-white text-base">
                  8.2.{idx + 1}. {ex.name}
                </h4>
                <span className="text-slate-400 font-mono">
                  Mục tiêu: {ex.weeklyTarget}
                </span>
              </div>

              <p>
                <strong className="text-slate-200 font-medium">Đối với K vú: </strong>
                {ex.breastCancerBenefit}
              </p>

              <p>
                <strong className="text-slate-200 font-medium">Đối với nội mạc tử cung: </strong>
                {ex.endometrialBenefit}
              </p>

              <div className="text-xs text-slate-400 space-y-0.5 pt-0.5">
                <div>
                  <strong className="text-slate-300">Lưu ý an toàn: </strong>
                  {ex.precautions.join(' • ')}
                </div>
                <div>
                  <strong className="text-slate-300">Bắt đầu: </strong>
                  {ex.startingTip} ({ex.benefitsEvidence})
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 8.3. Thực phẩm bổ sung & Lưu ý an toàn khi tập */}
      <div className="space-y-6 pt-4 border-t border-slate-800/40">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-200">
            8.3. Thực phẩm bổ sung & Lưu ý an toàn khi tập luyện
          </h3>
          <p className="text-xs text-slate-400">
            Phân loại an toàn đối với bệnh nhân K vú thể nội tiết dương tính (HR+).
          </p>
        </div>

        <p className="text-base md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-rose-300">Lưu ý an toàn: </strong>
          Tránh các sản phẩm bổ sung chứa DHEA, testosterone hoặc mầm đậu nành cô đặc liều cao do khả năng chuyển hóa thành estrogen nội sinh.
        </p>

        <div className="space-y-4">
          {exerciseSupplements.map((sup: SupplementForExercise, idx: number) => (
            <article
              key={sup.id}
              className="space-y-1 text-base md:text-sm text-slate-300 leading-relaxed pb-4 border-b border-slate-800/40 last:border-b-0"
            >
              <div className="flex items-center justify-between gap-2 text-xs">
                <h4 className="font-bold text-white text-base">
                  8.3.{idx + 1}. {sup.name}
                </h4>
                <span className={`font-mono text-xs font-semibold ${
                  sup.safeForBreastCancer === 'safe' ? 'text-teal-300' : sup.safeForBreastCancer === 'ask_doctor' ? 'text-amber-300' : 'text-rose-400'
                }`}>
                  {sup.safeForBreastCancer === 'safe' ? '✓ An toàn' : sup.safeForBreastCancer === 'ask_doctor' ? '• Hỏi Bác sĩ' : '✕ Tránh dùng'}
                </span>
              </div>
              <p>{sup.note}</p>
              <div className="text-xs text-slate-500 italic font-mono">{sup.source}</div>
            </article>
          ))}
        </div>
      </div>

      {/* 8.4. Bằng chứng nghiên cứu lâm sàng */}
      <div className="space-y-6 pt-4 border-t border-slate-800/40">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-200">
            8.4. Bằng chứng nghiên cứu lâm sàng quốc tế
          </h3>
          <p className="text-xs text-slate-400">
            Dữ liệu từ các nghiên cứu Holmes (JAMA 2005), Schmitz (NEJM 2009), Chandwani (JNCI 2014)...
          </p>
        </div>

        <div className="space-y-5">
          {exerciseResearchData.map((res, idx: number) => (
            <article
              key={res.id}
              className="space-y-1.5 text-base md:text-sm text-slate-300 leading-relaxed pb-5 border-b border-slate-800/40 last:border-b-0"
            >
              <div className="flex items-center justify-between gap-2 text-xs text-slate-400 font-mono">
                <span>8.4.{idx + 1}. {res.source} ({res.year})</span>
                <span className="text-slate-400">{res.applicableTo}</span>
              </div>
              <h4 className="font-bold text-white text-base">{res.title}</h4>
              <p>{res.finding}</p>
              <p className="text-xs font-medium text-teal-300">
                Kết quả định lượng: {res.magnitude}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
