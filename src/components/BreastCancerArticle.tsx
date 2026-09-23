import React from 'react';
import { breastCancerSubtypesData } from '../data/breastCancerMolecularData';
import { advancedBreastTherapies } from '../data/breastCancerTreatmentData';
import { breastCancerReferences } from '../data/medicalReferencesData';
import type { MediaItem } from '../types/medical';
import { ReadAloudButton } from './ReadAloudButton';
import { MedicalDisclaimerBanner } from './MedicalDisclaimerBanner';
import { ReferencesSection } from './ReferencesSection';
import { BreastCancerNewTreatmentsSection } from './BreastCancerNewTreatmentsSection';
import { BreastCancerOutcomesSection } from './BreastCancerOutcomesSection';
import { BreastCancerCommunitySection } from './BreastCancerCommunitySection';
import { BreastCancerYear5to10Section } from './BreastCancerYear5to10Section';
import { BreastCancerSexualExerciseSection } from './BreastCancerSexualExerciseSection';
import { BreastCancerOrganComorbiditiesSection } from './BreastCancerOrganComorbiditiesSection';

import { 
  ArrowRight
} from 'lucide-react';

interface BreastCancerArticleProps {
  onOpenVideoModal: (media: MediaItem) => void;
  onSwitchToGynecologyModule: () => void;
}

export const BreastCancerArticle: React.FC<BreastCancerArticleProps> = ({ 
  onSwitchToGynecologyModule
}) => {
  return (
    <article className="w-full bg-slate-950 text-slate-200 font-sans pb-32">

      {/* Medical Disclaimer Banner */}
      <MedicalDisclaimerBanner
        specialty="Ung bướu / Phụ khoa Ung bướu"
        primaryGuideline="NCCN Breast Cancer Guidelines 2024–2025, ASCO 2023, ESMO 2021"
        lastUpdated="Tháng 9/2026"
      />

      {/* ========================================================================= */}
      {/* BOOK COVER & PREFACE: Breast Cancer Monograph */}
      {/* ========================================================================= */}
      <header className="w-full max-w-5xl sm:max-w-6xl mx-auto pt-6 pb-6 px-4 sm:px-6 space-y-4">
        
        {/* Series Badge */}
        <div className="text-rose-400 text-xs font-semibold tracking-wider uppercase font-mono">
          Chuyên Khảo Ung Thư Học Lâm Sàng • Cập Nhật 2024 - 2026
        </div>

        {/* Main Title */}
        <div className="space-y-3">
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
            Ung Thư Vú Thể Nội Tiết: Từ Tamoxifen Đến Các Đột Phá Mới Nhất
          </h1>
          <p className="text-base md:text-sm text-slate-300 leading-relaxed">
            Nghiên cứu chuyên sâu về phân loại phân tử, cơ chế bảo vệ của Tamoxifen qua 5 năm, thử nghiệm kéo dài (EET), toàn cảnh các vũ khí điều trị mới (CDK4/6i, Oral SERD, PROTAC, ADCs) và chăm sóc sức khỏe toàn diện sau điều trị.
          </p>

          {/* Preface Panel */}
          <div className="border-l-2 border-rose-500 pl-4 py-3 bg-slate-900/30 space-y-2.5 rounded-r-xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <ReadAloudButton
                id="bc-hero"
                title="Chuyên Khảo Ung Thư Vú Thể Nội Tiết"
                text="Ung thư vú thể nội tiết: từ Tamoxifen đến các đột phá mới nhất. Nghiên cứu chuyên sâu về phân loại phân tử, cơ chế bảo vệ của Tamoxifen qua năm năm, thử nghiệm kéo dài và toàn cảnh các vũ khí điều trị mới như thuốc ức chế CDK4/6, SERD đường uống, PROTAC và kháng thể liên hợp thuốc ADCs. Hơn bảy mươi phần trăm bệnh nhân ung thư vú thuộc nhóm thụ thể nội tiết dương tính. Bước sang giai đoạn 2024 đến 2026, các liệu pháp nhắm trúng đích thế hệ mới mở ra kỷ nguyên kiểm soát triệt để và nâng cao chất lượng cuộc sống cho người bệnh."
                variant="hero"
                label="Nghe đọc cẩm nang K vú"
                durationEstimate="~15 phút"
              />
              <div className="text-rose-300 font-medium text-xs font-mono">
                ASCO • NCCN 2024/2026 • ESMO • St. Gallen
              </div>
            </div>

            <div className="text-base md:text-sm text-slate-300 leading-relaxed">
              <p>
                Hơn 70% bệnh nhân ung thư vú thuộc nhóm <strong className="text-white font-medium">thụ thể nội tiết dương tính (HR+ / HER2-)</strong>. Sau 5 năm hoàn thành Tamoxifen (2021 – 01/2026), cơ thể tiếp tục được bảo vệ bởi hiệu ứng kế thừa lâu dài. Các đột phá mới 2024–2026 mở ra kỷ nguyên kiểm soát tối ưu và ngăn chặn tái phát muộn.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-y-2 gap-x-4 text-xs text-slate-400">
              <div className="flex items-center gap-3 font-mono">
                <span>Thời gian đọc: ~15 phút</span>
                <span>•</span>
                <span>FDA cập nhật: 09/2024</span>
              </div>

              <button
                onClick={onSwitchToGynecologyModule}
                className="text-xs text-teal-300 hover:text-teal-200 font-medium hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Xem Chuyên Khảo Tử Cung (U Xơ & Tamoxifen)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* CHAPTER 1: MOLECULAR SUBTYPES (ALL 5 SUBTYPES SEQUENTIALLY) */}
      {/* ========================================================================= */}
      <section id="bc-chapter-1" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-8 border-t border-slate-900">
        
        <div className="space-y-2">
          <div className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 1 • Sinh Học Phân Tử
          </div>
          <h2 className="text-lg sm:text-xl md:text-xl font-bold text-white tracking-tight">
            Toàn Cảnh 4 Phân Nhóm Phân Tử K Vú & Vai Trò Thụ Thể Nội Tiết
          </h2>
          <p className="text-base md:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Ung thư vú không phải là một bệnh duy nhất mà gồm 4 phân nhóm sinh học khác nhau, quyết định độ nhạy với Tamoxifen và tiên lượng điều trị. Dưới đây là phân tích chi tiết từng phân nhóm.
          </p>
          <ReadAloudButton
            id="bc-chap-1"
            title="Chương 1: Toàn Cảnh 4 Phân Nhóm Phân Tử K Vú"
            text="Chương 1: Toàn cảnh bốn phân nhóm phân tử ung thư vú và vai trò thụ thể nội tiết. Ung thư vú gồm bốn phân nhóm sinh học: Luminal A, Luminal B HER2 âm tính, Luminal B HER2 dương tính, HER2 làm giàu và Thể bộ ba âm tính. Các chỉ số thụ thể bao gồm ER và PR là ăng ten bắt sóng dinh dưỡng estrogen; HER2 là động cơ tăng áp; và Ki-67 là đồng hồ đo tốc độ phân chia tế bào. Với Luminal A, tế bào tăng sinh chậm, đáp ứng rất tốt với nội tiết như Tamoxifen và có tiên lượng thuận lợi nhất."
            variant="chapter"
            label="Nghe đọc Chương 1"
          />
        </div>

        {/* Layman Analogy for Biomarkers */}
        <div className="py-3.5 px-4 rounded-lg border-l-2 border-rose-500 bg-slate-900/20 text-xs sm:text-sm text-slate-300 space-y-2">
          <strong className="text-rose-300 block text-xs uppercase">
            Giải mã trực quan 3 nhóm chỉ số sinh học:
          </strong>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs pt-1">
            <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
              <strong className="text-teal-300 block mb-1">ER & PR (Ăng-ten Bắt Sóng):</strong>
              <p className="text-slate-300">ER+ nghĩa là tế bào u sống nhờ Estrogen. Dùng Tamoxifen hoặc AI giúp khóa chặt ăng-ten, bỏ đói tế bào ung thư.</p>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
              <strong className="text-rose-300 block mb-1">HER2 (Động Cơ Tăng Áp):</strong>
              <p className="text-slate-300">HER2+ khiến tế bào nhân đôi nhanh hơn nhưng lại có thuốc kháng thể nhắm trúng đích chính xác (Trastuzumab, ADC Enhertu).</p>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
              <strong className="text-amber-300 block mb-1">Ki-67 (Đồng Hồ Tốc Độ):</strong>
              <p className="text-slate-300">&lt; 14-20% là tế bào đi bộ chậm rãi (Luminal A hiền lành); &gt; 20-30% là chạy nước rút cần chặn bằng thuốc CDK4/6 hoặc hóa trị.</p>
            </div>
          </div>
        </div>

        {/* Continuous List of All 5 Subtypes */}
        <div className="space-y-6 pt-2 border-t border-slate-800/40">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-200">
              1.1. Chi tiết 5 phân nhóm sinh học phân tử K vú
            </h3>
            <p className="text-xs text-slate-400">
              Đặc điểm thụ thể, hành vi sinh học, mức độ đáp ứng Tamoxifen và phác đồ chuẩn cho từng thể.
            </p>
          </div>

          <div className="space-y-5">
            {breastCancerSubtypesData.map((st, idx) => (
              <article
                key={st.id}
                className="py-4 px-4 sm:px-5 rounded-lg border-l-2 border-slate-700 bg-slate-900/10 space-y-3 text-base md:text-sm text-slate-300 leading-relaxed"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 text-xs">
                  <div>
                    <span className="font-mono text-slate-400 block text-[11px]">Phân nhóm 1.1.{idx + 1}</span>
                    <h4 className="font-bold text-white text-base">
                      {st.name} <span className="text-xs font-normal text-slate-400 italic">({st.vietnameseName})</span>
                    </h4>
                  </div>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-rose-300 border border-slate-700">
                    Tỷ lệ: {st.prevalence}
                  </span>
                </div>

                {/* Receptor Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2 rounded bg-slate-950 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block font-mono">Thụ Thể ER:</span>
                    <span className="font-bold text-teal-300">{st.receptorProfile.er}</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block font-mono">Thụ Thể PR:</span>
                    <span className="font-bold text-teal-300">{st.receptorProfile.pr}</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block font-mono">Thụ Thể HER2:</span>
                    <span className="font-bold text-rose-300">{st.receptorProfile.her2}</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block font-mono">Chỉ Số Ki-67:</span>
                    <span className="font-bold text-amber-300">{st.receptorProfile.ki67}</span>
                  </div>
                </div>

                <div className="space-y-1.5 pt-1">
                  <p>
                    <strong className="text-slate-200">Hành vi sinh học: </strong>
                    {st.biologicalBehavior} ({st.prognosis})
                  </p>
                  <p>
                    <strong className="text-rose-300">Đáp ứng với Tamoxifen: </strong>
                    {st.tamoxifenResponse}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/40 space-y-1 text-xs">
                  <div>
                    <strong className="text-slate-300">Phác đồ chuẩn: </strong>
                    <span className="text-slate-400">{st.standardTherapy.join('; ')}</span>
                  </div>
                  <div>
                    <strong className="text-rose-300">Đột phá 2024–2026: </strong>
                    <span className="text-slate-300">{st.novelTargetedTherapies2024_2026.join('; ')}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 2: TAMOXIFEN 5-YEAR EVIDENCE & EXTENDED THERAPY */}
      {/* ========================================================================= */}
      <section id="bc-chapter-2" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-8 border-t border-slate-900">
        
        <div className="space-y-2">
          <div className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 2 • Tamoxifen & Chiến Lược Kéo Dài
          </div>
          <h2 className="text-lg sm:text-xl md:text-xl font-bold text-white tracking-tight">
            Giải Mã 5 Năm Tamoxifen & Thử Nghiệm Kéo Dài 10 Năm (ATLAS/aTTom)
          </h2>
          <p className="text-base md:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Tại sao 5 năm là mốc chuẩn vàng? Khi nào nên dừng (như trường hợp của chị) và khi nào cần kéo dài?
          </p>
          <ReadAloudButton
            id="bc-chap-2"
            title="Chương 2: Giải Mã 5 Năm Tamoxifen & Thử Nghiệm Kéo Dài 10 Năm"
            text="Chương 2: Giải mã năm năm Tamoxifen và thử nghiệm kéo dài mười năm ATLAS và aTTom. Việc hoàn thành năm năm Tamoxifen mang lại hiệu ứng kế thừa bảo vệ thêm mười đến mười lăm năm, giảm 47% nguy cơ tái phát và giảm 50% nguy cơ ung thư vú đối bên. Thử nghiệm ATLAS và aTTom chỉ ra rằng kéo dài lên mười năm chỉ tăng thêm lợi ích nhỏ nhưng làm tăng gấp đôi tác dụng phụ lên nội mạc tử cung. Do đó, với trường hợp đã hoàn thành năm năm và có biến chứng phụ khoa như rong kinh hoặc u xơ, việc dừng Tamoxifen là hoàn toàn chính xác và khoa học."
            variant="chapter"
            label="Nghe đọc Chương 2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base md:text-sm text-slate-300 leading-relaxed">
          <article className="py-4 px-4 sm:px-5 rounded-lg border-l-2 border-rose-500 bg-slate-900/10 space-y-2.5">
            <h3 className="font-bold text-white text-base">
              2.1. Lợi ích bảo vệ của 5 năm Tamoxifen
            </h3>
            <p>
              Dữ liệu tổng hợp từ nhóm nghiên cứu EBCTCG theo dõi trên hàng chục nghìn bệnh nhân qua 20 năm khẳng định:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-200">
              <li><strong>Giảm 47% nguy cơ tái phát K vú</strong> trong 5 năm đầu dùng thuốc.</li>
              <li><strong>Hiệu ứng kế thừa kéo dài 10 - 15 năm tiếp theo:</strong> Tỷ lệ tử vong tiếp tục giảm 30% sau khi dừng thuốc.</li>
              <li><strong>Giảm 50% nguy cơ ung thư vú ở bên vú đối diện</strong>.</li>
            </ul>
          </article>

          <article className="py-4 px-4 sm:px-5 rounded-lg border-l-2 border-amber-500 bg-slate-900/10 space-y-2.5">
            <h3 className="font-bold text-white text-base">
              2.2. Thử nghiệm ATLAS & aTTom: Kéo dài 10 năm?
            </h3>
            <div className="space-y-2">
              <p>
                <strong className="text-emerald-400 font-medium">Lợi ích cộng thêm: </strong>
                Giảm thêm 3-4% nguy cơ tái phát muộn, chủ yếu có ý nghĩa ở nhóm có hạch dương tính hoặc u lớn ban đầu.
              </p>
              <p>
                <strong className="text-rose-400 font-medium">Tác dụng phụ tăng: </strong>
                Tăng gấp đôi nguy cơ bệnh lý nội mạc tử cung (tăng sản, polyp, ung thư nội mạc).
              </p>
              <p className="text-teal-300 font-medium pt-1 border-t border-slate-800/60">
                → Dừng Tamoxifen mốc 5 năm (01/2026) khi có biến chứng tử cung là lựa chọn an toàn và tối ưu.
              </p>
            </div>
          </article>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 3: CUTTING-EDGE TARGETED THERAPIES (ALL 7 SEQUENTIALLY) */}
      {/* ========================================================================= */}
      <section id="bc-chapter-3" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-8 border-t border-slate-900">
        
        <div className="space-y-2">
          <div className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 3 • Đột Phá Y Học 2024 - 2026
          </div>
          <h2 className="text-lg sm:text-xl md:text-xl font-bold text-white tracking-tight">
            Kho Vũ Khí Nhắm Trúng Đích Mới Nhất Cho K Vú Thể Nội Tiết
          </h2>
          <p className="text-base md:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Toàn bộ 7 nhóm thuốc tiên tiến nhất thế giới hiện nay được FDA và NCCN phê duyệt cho bệnh nhân ung thư vú thể nội tiết.
          </p>
          <ReadAloudButton
            id="bc-chap-3"
            title="Chương 3: Kho Vũ Khí Nhắm Trúng Đích Mới Nhất"
            text="Chương 3: Kho vũ khí nhắm trúng đích mới nhất cho ung thư vú thể nội tiết. Bao gồm bảy nhóm thuốc đột phá: Thuốc ức chế CDK4/6 như Ribociclib vừa được FDA phê duyệt tháng chín năm 2024; Thuốc ức chế PARP như Olaparib; Kháng thể liên hợp thuốc ADCs như Trastuzumab deruxtecan Enhertu; Thuốc ức chế PI3K và AKT như Capivasertib; Thuốc SERD đường uống như Elacestrant; Liệu pháp giáng hóa PROTAC như Vepdegestrant; và Liệu pháp miễn dịch Pembrolizumab."
            variant="chapter"
            label="Nghe đọc Chương 3"
          />
        </div>

        <div className="space-y-6 pt-2 border-t border-slate-800/40">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-200">
              3.1. Danh mục 7 liệu pháp điều trị nhắm trúng đích thế hệ mới
            </h3>
            <p className="text-xs text-slate-400">
              Chi tiết cơ chế phân tử, cột mốc thử nghiệm lâm sàng, lợi ích vượt trội và tác dụng phụ cần theo dõi.
            </p>
          </div>

          <div className="space-y-5">
            {advancedBreastTherapies.map((ther, idx) => (
              <article
                key={ther.id}
                className="py-4 px-4 sm:px-5 rounded-lg border-l-2 border-slate-700 bg-slate-900/10 space-y-3 text-base md:text-sm text-slate-300 leading-relaxed"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 text-xs">
                  <div>
                    <span className="font-mono text-slate-400 block text-[11px]">Liệu pháp 3.1.{idx + 1} • {ther.drugClass}</span>
                    <h4 className="font-bold text-white text-base">
                      {ther.name}
                    </h4>
                  </div>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-teal-300 border border-slate-700">
                    Biệt dược: {ther.tradeNames}
                  </span>
                </div>

                <p className="text-xs text-teal-300 font-medium">
                  {ther.fdaApprovalStatus}
                </p>

                {ther.laymanAnalogy && (
                  <div className="p-3 rounded bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300 space-y-0.5">
                    <strong className="text-amber-300 block mb-0.5">Minh họa trực quan:</strong>
                    <p className="text-slate-300">{ther.laymanAnalogy}</p>
                  </div>
                )}

                <div className="space-y-1">
                  <strong className="text-slate-200 text-xs uppercase block font-bold">Cơ chế tác động phân tử:</strong>
                  <p>{ther.mechanismOfAction}</p>
                </div>

                <div className="text-xs text-slate-400">
                  <strong className="text-slate-300">Cột mốc thử nghiệm lâm sàng: </strong>
                  {ther.clinicalTrialMilestone}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                  <div className="p-3 rounded bg-emerald-950/20 border border-emerald-900/30 space-y-1">
                    <strong className="text-emerald-300 block font-bold uppercase text-[11px]">Lợi ích điều trị vượt trội:</strong>
                    <ul className="space-y-0.5 text-slate-300">
                      {ther.benefitsAndOutcomes.map((b, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-400 font-bold shrink-0">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded bg-amber-950/20 border border-amber-900/30 space-y-1">
                    <strong className="text-amber-300 block font-bold uppercase text-[11px]">Tác dụng phụ & Theo dõi:</strong>
                    <ul className="space-y-0.5 text-slate-300">
                      {ther.sideEffectsAndManagement.map((s, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-amber-400 font-bold shrink-0">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/40 text-xs text-slate-300">
                  <strong className="text-rose-300">Ý nghĩa thực tiễn: </strong>
                  <span>{ther.relevanceToTamoxifenPatients}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 4: NEW TREATMENTS 2022-2026 */}
      {/* ========================================================================= */}
      <BreastCancerNewTreatmentsSection />

      {/* ========================================================================= */}
      {/* CHAPTER 5: OUTCOMES & STATISTICS */}
      {/* ========================================================================= */}
      <BreastCancerOutcomesSection />

      {/* ========================================================================= */}
      {/* CHAPTER 6: COMMUNITY INSIGHTS */}
      {/* ========================================================================= */}
      <BreastCancerCommunitySection />

      {/* ========================================================================= */}
      {/* CHAPTER 7: YEAR 5-10 GUIDE */}
      {/* ========================================================================= */}
      <BreastCancerYear5to10Section />

      {/* ========================================================================= */}
      {/* CHAPTER 8: SEXUAL HEALTH & EXERCISE */}
      {/* ========================================================================= */}
      <BreastCancerSexualExerciseSection />

      {/* ========================================================================= */}
      {/* CHAPTER 9: ORGAN COMORBIDITIES (GUT, LIVER, STOMACH, DIABETES, OBESITY, GOUT) */}
      {/* ========================================================================= */}
      <BreastCancerOrganComorbiditiesSection />

      {/* References Section — always last */}
      <ReferencesSection
        references={breastCancerReferences}
        diseaseTitle="Ung Thư Vú"
      />

    </article>
  );
};
