import React, { useState } from 'react';
import { breastCancerSubtypesData } from '../data/breastCancerMolecularData';
import { advancedBreastTherapies } from '../data/breastCancerTreatmentData';
import { breastCancerMediaItems } from '../data/breastCancerMediaData';
import { breastCancerClinicalDecisionTree } from '../data/breastCancerDecisionData';
import type { MediaItem } from '../types/medical';
import { ReadAloudButton } from './ReadAloudButton';
import { 
  Ribbon, 
  Sparkles, 
  Clock, 
  Activity, 
  AlertTriangle, 
  HelpCircle, 
  ShieldCheck, 
  Play, 
  RotateCcw, 
  ChevronRight, 
  Check, 
  Calendar, 
  ArrowRight,
  Dna,
  Zap,
  Award
} from 'lucide-react';

interface BreastCancerArticleProps {
  onOpenVideoModal: (media: MediaItem) => void;
  onSwitchToGynecologyModule: () => void;
}

export const BreastCancerArticle: React.FC<BreastCancerArticleProps> = ({ 
  onOpenVideoModal,
  onSwitchToGynecologyModule
}) => {
  const [selectedSubtypeId, setSelectedSubtypeId] = useState<string>('luminal-a');
  const [selectedTherapyId, setSelectedTherapyId] = useState<string>('therapy-ribociclib');
  
  // Decision Tool States
  const [decisionHistory, setDecisionHistory] = useState<string[]>(['root']);
  const [decisionAnswers, setDecisionAnswers] = useState<string[]>([]);

  // Decision Tree Handler
  const currentDecisionNodeId = decisionHistory[decisionHistory.length - 1];
  const currentDecisionNode = breastCancerClinicalDecisionTree[currentDecisionNodeId];
  const isDecisionResult = currentDecisionNodeId === 'result';

  let finalDecisionRecommendation: any = null;
  if (isDecisionResult) {
    const parentId = decisionHistory[decisionHistory.length - 2];
    const parentNode = breastCancerClinicalDecisionTree[parentId];
    const lastLabel = decisionAnswers[decisionAnswers.length - 1];
    const matched = parentNode?.options.find(opt => opt.label === lastLabel);
    finalDecisionRecommendation = matched?.recommendation;
  }

  const handleDecisionOption = (option: { label: string; nextStepId?: string; recommendation?: any }) => {
    setDecisionAnswers([...decisionAnswers, option.label]);
    if (option.nextStepId) {
      setDecisionHistory([...decisionHistory, option.nextStepId]);
    } else if (option.recommendation) {
      setDecisionHistory([...decisionHistory, 'result']);
    }
  };

  const handleResetDecision = () => {
    setDecisionHistory(['root']);
    setDecisionAnswers([]);
  };

  const activeSubtype = breastCancerSubtypesData.find(s => s.id === selectedSubtypeId) || breastCancerSubtypesData[0];
  const activeTherapy = advancedBreastTherapies.find(t => t.id === selectedTherapyId) || advancedBreastTherapies[0];

  return (
    <article className="w-full bg-slate-950 text-slate-200 font-sans pb-32">
      
      {/* ========================================================================= */}
      {/* BOOK COVER & PREFACE: Breast Cancer Monograph */}
      {/* ========================================================================= */}
      <header className="w-full max-w-3xl mx-auto pt-10 pb-8 px-5 sm:px-6 space-y-6">
        
        {/* Series Badge */}
        <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold tracking-wider uppercase">
          <Ribbon className="w-4 h-4" />
          <span>Chuyên Khảo Ung Thư Học Lâm Sàng • Cập Nhật 2024 - 2026</span>
        </div>

        {/* Main Title */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Ung Thư Vú Thể Nội Tiết: Từ Tamoxifen Đến Các Đột Phá Mới Nhất
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Nghiên cứu chuyên sâu về phân loại phân tử, cơ chế bảo vệ của Tamoxifen qua 5 năm, thử nghiệm kéo dài (EET) và toàn cảnh các vũ khí điều trị mới (CDK4/6i, Oral SERD, PROTAC, ADCs).
          </p>

          {/* Read Aloud Full Monograph */}
          <div className="pt-2">
            <ReadAloudButton
              id="bc-hero"
              title="Chuyên Khảo Ung Thư Vú Thể Nội Tiết"
              text="Ung thư vú thể nội tiết: từ Tamoxifen đến các đột phá mới nhất. Nghiên cứu chuyên sâu về phân loại phân tử, cơ chế bảo vệ của Tamoxifen qua năm năm, thử nghiệm kéo dài và toàn cảnh các vũ khí điều trị mới như thuốc ức chế CDK4/6, SERD đường uống, PROTAC và kháng thể liên hợp thuốc ADCs. Hơn bảy mươi phần trăm bệnh nhân ung thư vú thuộc nhóm thụ thể nội tiết dương tính. Bước sang giai đoạn 2024 đến 2026, các liệu pháp nhắm trúng đích thế hệ mới mở ra kỷ nguyên kiểm soát triệt để và nâng cao chất lượng cuộc sống cho người bệnh."
              variant="hero"
              label="Bấm để nghe đọc cẩm nang K vú"
              durationEstimate="~15 phút"
            />
          </div>
        </div>

        {/* Evidence & Guidelines Meta Banner */}
        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-b border-slate-800/80 pb-6">
          <div className="flex items-center gap-1.5 text-rose-300 font-medium">
            <ShieldCheck className="w-4 h-4 text-rose-400" />
            <span>Y Học Thực Chứng: ASCO • NCCN 2024/2026 • ESMO • St. Gallen</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>Thời lượng đọc: ~15 phút</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>Cập nhật phê duyệt FDA mới nhất (09/2024)</span>
          </div>
        </div>

        {/* Clinical Preface */}
        <div className="pt-2 text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
          <p>
            Hơn 70% bệnh nhân ung thư vú thuộc nhóm <strong>thụ thể nội tiết dương tính (HR+ / HER2-)</strong>. Trong suốt 4 thập kỷ qua, <strong>Tamoxifen</strong> là "viên gạch nền tảng" vĩ đại cứu sống hàng triệu phụ nữ trên toàn thế giới nhờ khả năng khóa chặt con đường nuôi dưỡng khối u của hormone Estrogen.
          </p>
          <p>
            Tuy nhiên, y học ung thư không dừng lại ở đó. Bước sang giai đoạn <strong>2024 – 2026</strong>, sự bùng nổ của các liệu pháp nhắm trúng đích thế hệ mới – đặc biệt là <strong>thuốc ức chế CDK4/6 (Ribociclib vừa được FDA phê duyệt 09/2024 cho giai đoạn sớm)</strong>, <strong>thuốc phân hủy thụ thể SERD đường uống (Elacestrant)</strong>, và <strong>kháng thể liên hợp thuốc ADCs (T-DXd / Enhertu)</strong> – đã mở ra một kỷ nguyên hoàn toàn mới: <em>kiểm soát triệt để, ngăn chặn tái phát muộn và nâng cao tối đa chất lượng cuộc sống cho người bệnh</em>.
          </p>

          <div className="p-4 rounded-xl bg-rose-950/40 border-l-4 border-rose-400 text-rose-100 text-sm space-y-1.5">
            <span className="font-bold flex items-center gap-1.5 text-rose-300">
              <Sparkles className="w-4 h-4 text-rose-400 shrink-0" />
              Chuyển tiếp giữa 2 chuyên khảo liên kết:
            </span>
            <p>
              Nếu chị đang gặp các triệu chứng phụ khoa sau 5 năm dùng Tamoxifen (như rong kinh, dày niêm mạc, u xơ tử cung), chị có thể bấm chuyển sang xem chuyên khảo chuyên sâu về tử cung bất kỳ lúc nào:
            </p>
            <button
              onClick={onSwitchToGynecologyModule}
              className="mt-2 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors shadow-sm"
            >
              <span>Xem Chuyên Khảo: Xử Trí Biến Chứng Tử Cung Sau 5 Năm Tamoxifen</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </header>

      {/* ========================================================================= */}
      {/* CHAPTER 1: MOLECULAR SUBTYPES (4 SUBTYPES & BIOMARKERS) */}
      {/* ========================================================================= */}
      <section id="bc-chapter-1" className="w-full max-w-3xl mx-auto py-10 px-5 sm:px-6 space-y-8 border-t border-slate-900">
        
        <div className="space-y-2">
          <div className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 1 • Sinh Học Phân Tử
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Toàn Cảnh 4 Phân Nhóm Phân Tử K Vú & Vai Trò Thụ Thể Nội Tiết
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Ung thư vú không phải là một bệnh duy nhất mà gồm 4 phân nhóm sinh học khác nhau, quyết định độ nhạy với Tamoxifen và tiên lượng điều trị:
          </p>
          <ReadAloudButton
            id="bc-chap-1"
            title="Chương 1: Toàn Cảnh 4 Phân Nhóm Phân Tử K Vú"
            text="Chương 1: Toàn cảnh bốn phân nhóm phân tử ung thư vú và vai trò thụ thể nội tiết. Ung thư vú gồm bốn phân nhóm sinh học: Luminal A, Luminal B HER2 âm tính, Luminal B HER2 dương tính, HER2 làm giàu và Thể bộ ba âm tính. Các chỉ số thụ thể bao gồm ER và PR là ăng ten bắt sóng dinh dưỡng estrogen; HER2 là động cơ tăng áp; và Ki-67 là đồng hồ đo tốc độ phân chia tế bào. Với Luminal A, tế bào tăng sinh chậm, đáp ứng rất tốt với nội tiết như Tamoxifen và có tiên lượng thuận lợi nhất."
            variant="chapter"
            label="Nghe đọc Chương 1"
          />
        </div>

        {/* Subtype Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {breastCancerSubtypesData.map((st) => {
            const isSelected = st.id === selectedSubtypeId;
            return (
              <button
                key={st.id}
                onClick={() => setSelectedSubtypeId(st.id)}
                className={`p-2.5 sm:p-3 rounded-xl text-left text-xs font-bold transition-all flex flex-col justify-between gap-1.5 ${
                  isSelected
                    ? 'bg-rose-500/20 text-rose-200 border border-rose-500/60 shadow-md'
                    : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span className="line-clamp-1">{st.name.split('(')[0]}</span>
                <span className="text-[10px] text-slate-500 line-clamp-1">{st.prevalence}</span>
              </button>
            );
          })}
        </div>

        {/* Active Subtype Deep-Dive Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
          
          <div className="space-y-1.5 border-b border-slate-800 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono text-rose-400 uppercase font-bold tracking-wider">
                Chi Tiết Phân Nhóm Phân Tử
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-rose-950 text-rose-300 border border-rose-800">
                Tỷ lệ: {activeSubtype.prevalence}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              {activeSubtype.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 italic">
              {activeSubtype.vietnameseName}
            </p>
          </div>

          {/* Receptor Profile Table */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase text-slate-400 flex items-center gap-1.5">
              <Dna className="w-3.5 h-3.5 text-rose-400" />
              <span>Đặc điểm các thụ thể sinh học (IHC / Hóa Mô Miễn Dịch):</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                <span className="text-slate-500 text-[10px] font-bold block">Thụ Thể Estrogen (ER)</span>
                <span className="font-bold text-teal-300">{activeSubtype.receptorProfile.er}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                <span className="text-slate-500 text-[10px] font-bold block">Thụ Thể Progesterone (PR)</span>
                <span className="font-bold text-teal-300">{activeSubtype.receptorProfile.pr}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                <span className="text-slate-500 text-[10px] font-bold block">Thụ Thể HER2</span>
                <span className="font-bold text-rose-300">{activeSubtype.receptorProfile.her2}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                <span className="text-slate-500 text-[10px] font-bold block">Chỉ Số Phân Chia Ki-67</span>
                <span className="font-bold text-amber-300">{activeSubtype.receptorProfile.ki67}</span>
              </div>
            </div>

            {/* Layman Analogy for Biomarkers */}
            <div className="p-3.5 rounded-xl bg-slate-950/90 border-l-2 border-rose-400 text-xs space-y-1.5 text-slate-300">
              <span className="font-bold text-rose-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Hình tượng đời thường giúp giải mã 4 chỉ số:</span>
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
                <li className="p-2 rounded-lg bg-slate-900 border border-slate-800/80">
                  <strong className="text-teal-300">ER & PR (Ăng-ten bắt sóng dinh dưỡng):</strong> ER+ nghĩa là tế bào u sống nhờ Estrogen. Dùng Tamoxifen/AI giống như "khóa chặt ăng-ten", bỏ đói tế bào u khiến chúng tự teo chết.
                </li>
                <li className="p-2 rounded-lg bg-slate-900 border border-slate-800/80">
                  <strong className="text-rose-300">HER2 (Bàn đạp ga / Động cơ tăng áp):</strong> HER2+ là tế bào chạy nhanh hơn nhưng lại có "tên lửa dẫn đường" (Trastuzumab, ADC Enhertu) bắn trúng đích chính xác.
                </li>
                <li className="p-2 rounded-lg bg-slate-900 border border-slate-800/80 sm:col-span-2">
                  <strong className="text-amber-300">Ki-67 (Đồng hồ đo tốc độ sinh sôi):</strong> &lt; 14-20% là tế bào "đi bộ chậm rãi" (Luminal A hiền lành, ít tái phát); &gt; 20-30% là tế bào "chạy nước rút" cần chặn bằng thuốc ức chế chu kỳ CDK4/6 (Ribociclib/Abemaciclib) hoặc hóa trị.
                </li>
              </ul>
            </div>
          </div>

          {/* Biological Behavior & Tamoxifen Response */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="space-y-1.5 p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              <strong className="text-slate-200 block text-xs uppercase font-bold">Hành vi sinh học & Tiên lượng:</strong>
              <p className="text-slate-300">{activeSubtype.biologicalBehavior}</p>
              <p className="text-slate-400 italic pt-1">{activeSubtype.prognosis}</p>
            </div>

            <div className="space-y-1.5 p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/30 text-xs">
              <strong className="text-rose-300 block text-xs uppercase font-bold">Mức độ đáp ứng với Tamoxifen:</strong>
              <p className="text-rose-100">{activeSubtype.tamoxifenResponse}</p>
            </div>
          </div>

          {/* Standard Therapy & Novel Breakthroughs */}
          <div className="space-y-3 pt-1 border-t border-slate-800">
            <div className="space-y-1.5">
              <strong className="text-slate-300 text-xs uppercase font-bold flex items-center gap-1.5">
                <Check className="w-4 h-4 text-teal-400" />
                <span>Phác đồ điều trị chuẩn mực hiện hành:</span>
              </strong>
              <ul className="space-y-1 text-xs text-slate-300 pl-2">
                {activeSubtype.standardTherapy.map((std, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-teal-400 font-bold shrink-0">•</span>
                    <span>{std}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-1.5 p-3 rounded-xl bg-gradient-to-r from-rose-950/30 to-slate-950 border border-rose-900/30">
              <strong className="text-rose-300 text-xs uppercase font-bold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-rose-400" />
                <span>Đột phá điều trị nhắm trúng đích mới nhất (2024 - 2026):</span>
              </strong>
              <ul className="space-y-1 text-xs text-rose-100 pl-2">
                {activeSubtype.novelTargetedTherapies2024_2026.map((nov, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-rose-400 font-bold shrink-0">⚡</span>
                    <span>{nov}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 2: TAMOXIFEN 5-YEAR EVIDENCE & EXTENDED ENDOCRINE THERAPY (EET) */}
      {/* ========================================================================= */}
      <section id="bc-chapter-2" className="w-full max-w-3xl mx-auto py-10 px-5 sm:px-6 space-y-8 border-t border-slate-900">
        
        <div className="space-y-2">
          <div className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 2 • Tamoxifen & Chiến Lược Kéo Dài
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Giải Mã 5 Năm Tamoxifen & Thử Nghiệm Kéo Dài 10 Năm (ATLAS/aTTom)
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
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

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <h3 className="font-bold text-rose-300 text-sm sm:text-base flex items-center gap-2">
              <Award className="w-4 h-4 text-rose-400" />
              <span>1. Lợi ích bảo vệ to lớn của 5 năm Tamoxifen (2021 – 01/2026)</span>
            </h3>
            <p>
              Dữ liệu tổng hợp từ nhóm nghiên cứu <strong>EBCTCG (Early Breast Cancer Trialists' Collaborative Group)</strong> theo dõi trên hàng chục nghìn bệnh nhân qua 20 năm khẳng định:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-200">
              <li><strong>Giảm 47% nguy cơ tái phát K vú</strong> trong 5 năm đầu dùng thuốc.</li>
              <li><strong>"Hiệu ứng kế thừa" (Carryover Effect) kéo dài 10 - 15 năm tiếp theo</strong>: Ngay cả sau khi đã ngừng thuốc tại mốc 5 năm, tỷ lệ tử vong do ung thư vú vẫn tiếp tục giảm 30% so với nhóm không dùng thuốc.</li>
              <li><strong>Giảm 50% nguy cơ mắc ung thư vú ở bên vú đối diện</strong>.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <h3 className="font-bold text-amber-300 text-sm sm:text-base flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>2. Thử nghiệm ATLAS & aTTom: Có nên kéo dài từ 5 năm lên 10 năm không?</span>
            </h3>
            <p>
              Hai thử nghiệm lâm sàng quy mô lớn nhất thế giới <strong>ATLAS</strong> (20.000 bệnh nhân) và <strong>aTTom</strong> (7.000 bệnh nhân) đã so sánh việc dùng Tamoxifen 5 năm so với 10 năm:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-900/30 space-y-1">
                <span className="font-bold text-emerald-400 text-xs uppercase block">Lợi ích cộng thêm khi dùng 10 năm:</span>
                <p className="text-xs text-slate-300">Giảm thêm khoảng 3 - 4% nguy cơ tái phát muộn sau năm thứ 10. Chủ yếu có ý nghĩa ở nhóm có hạch nách dương tính hoặc u ban đầu kích thước lớn.</p>
              </div>

              <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-900/30 space-y-1">
                <span className="font-bold text-rose-400 text-xs uppercase block">Tác dụng phụ gia tăng khi kéo dài 10 năm:</span>
                <p className="text-xs text-slate-300">Tăng gấp đôi nguy cơ bệnh lý nội mạc tử cung (tăng sản, polyp, ung thư nội mạc) và tăng nguy cơ huyết khối tĩnh mạch sâu (DVT).</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
              <strong className="text-teal-300">Kết luận cho trường hợp của chị: </strong>
              Vì chị đã hoàn thành trọn vẹn 5 năm và hiện tại đang có biến chứng phụ khoa (rong kinh nhiều tháng, mảng tăng sản nội mạc, khối u xơ 45mm và Adenomyosis), việc <strong>DỪNG TAMOXIFEN TẠI MỐC 5 NĂM (THÁNG 1/2026)</strong> là hoàn toàn đúng đắn, an toàn và tối ưu nhất để cơ thể phục hồi!
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 3: CUTTING-EDGE TARGETED THERAPIES (2024 - 2026) */}
      {/* ========================================================================= */}
      <section id="bc-chapter-3" className="w-full max-w-3xl mx-auto py-10 px-5 sm:px-6 space-y-8 border-t border-slate-900">
        
        <div className="space-y-2">
          <div className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 3 • Đột Phá Y Học 2024 - 2026
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Kho Vũ Khí Nhắm Trúng Đích Mới Nhất Cho K Vú Thể Nội Tiết
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Khám phá 7 nhóm thuốc tiên tiến nhất thế giới hiện nay được FDA và NCCN phê duyệt:
          </p>
          <ReadAloudButton
            id="bc-chap-3"
            title="Chương 3: Kho Vũ Khí Nhắm Trúng Đích Mới Nhất"
            text="Chương 3: Kho vũ khí nhắm trúng đích mới nhất cho ung thư vú thể nội tiết. Bao gồm bảy nhóm thuốc đột phá: Thuốc ức chế CDK4/6 như Ribociclib vừa được FDA phê duyệt tháng chín năm 2024; Thuốc ức chế PARP như Olaparib; Kháng thể liên hợp thuốc ADCs như Trastuzumab deruxtecan Enhertu; Thuốc ức chế PI3K và AKT như Capivasertib; Thuốc SERD đường uống như Elacestrant; Liệu pháp giáng hóa PROTAC như Vepdegestrant; và Liệu pháp miễn dịch Pembrolizumab."
            variant="chapter"
            label="Nghe đọc Chương 3"
          />
        </div>

        {/* Therapy Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {advancedBreastTherapies.map((ther) => {
            const isSelected = ther.id === selectedTherapyId;
            return (
              <button
                key={ther.id}
                onClick={() => setSelectedTherapyId(ther.id)}
                className={`p-3 rounded-xl text-left text-xs font-bold transition-all flex flex-col justify-between gap-1.5 ${
                  isSelected
                    ? 'bg-rose-500/20 text-rose-200 border border-rose-500/60 shadow-md'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span className="line-clamp-2">{ther.name.split('(')[0]}</span>
                <span className="text-[10px] text-slate-500 line-clamp-1">{ther.drugClass.split('(')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Therapy Detailed Sheet */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
          
          <div className="space-y-1.5 border-b border-slate-800 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono text-rose-400 uppercase font-bold tracking-wider">
                {activeTherapy.drugClass}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-rose-950 text-rose-300 border border-rose-800">
                Tên Biệt Dược: {activeTherapy.tradeNames}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              {activeTherapy.name}
            </h3>
            <p className="text-xs sm:text-sm text-teal-300 font-medium">
              ★ {activeTherapy.fdaApprovalStatus}
            </p>
          </div>

          {/* Layman Analogy for Therapy */}
          {activeTherapy.laymanAnalogy && (
            <div className="p-3.5 rounded-xl bg-slate-950/90 border-l-2 border-amber-400 text-xs text-slate-300 space-y-1">
              <span className="font-bold text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Hình tượng đời thường dễ hiểu:</span>
              </span>
              <p className="text-slate-200">{activeTherapy.laymanAnalogy}</p>
            </div>
          )}

          {/* Mechanism of Action */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-bold uppercase text-slate-400 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-rose-400" />
              <span>Cơ chế tác động phân tử:</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeTherapy.mechanismOfAction}
            </p>
          </div>

          {/* Clinical Trial Milestone */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
            <span className="text-xs font-bold uppercase text-amber-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Cột mốc thử nghiệm lâm sàng quốc tế:</span>
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {activeTherapy.clinicalTrialMilestone}
            </p>
          </div>

          {/* Benefits & Side Effects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="space-y-2 p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
              <div className="font-bold text-xs uppercase text-emerald-400 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Lợi ích điều trị vượt trội:</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {activeTherapy.benefitsAndOutcomes.map((b, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold shrink-0">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 p-3.5 rounded-xl bg-amber-950/20 border border-amber-900/30">
              <div className="font-bold text-xs uppercase text-amber-400 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Tác dụng phụ & Cách theo dõi:</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {activeTherapy.sideEffectsAndManagement.map((s, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold shrink-0">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Relevance to Post-Tamoxifen Patient */}
          <div className="p-3.5 rounded-xl bg-rose-950/30 border-l-2 border-rose-400 text-xs sm:text-sm space-y-1">
            <strong className="text-rose-300 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-rose-400 shrink-0" />
              <span>Ý nghĩa thực tiễn đối với trường hợp của chị:</span>
            </strong>
            <p className="text-slate-200">{activeTherapy.relevanceToTamoxifenPatients}</p>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 4: CLINICAL MEDIA ATLAS & 3D ANIMATIONS */}
      {/* ========================================================================= */}
      <section id="bc-chapter-4" className="w-full max-w-3xl mx-auto py-10 px-5 sm:px-6 space-y-8 border-t border-slate-900">
        
        <div className="space-y-2">
          <div className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 4 • Atlas Video Lâm Sàng K Vú
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Video Đồ Họa 3D & Mô Phỏng Liệu Pháp Nhắm Trúng Đích
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Xem trực quan cách các phân tử thuốc mới khóa tế bào u và quy trình tầm soát kép hiện đại:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {breastCancerMediaItems.map((media) => (
            <div 
              key={media.id}
              onClick={() => onOpenVideoModal(media)}
              className="group cursor-pointer rounded-2xl bg-slate-900 border border-slate-800 hover:border-rose-500/50 transition-all overflow-hidden flex flex-col justify-between"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img 
                  src={media.thumbnailUrl} 
                  alt={media.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-rose-500/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-slate-950/80 backdrop-blur-sm text-slate-200 text-[10px] font-mono px-2 py-0.5 rounded">
                  {media.duration}
                </div>
              </div>

              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-white text-sm group-hover:text-rose-300 transition-colors line-clamp-2">
                    {media.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {media.description}
                  </p>
                </div>

                <div className="text-[11px] text-rose-400/90 font-medium pt-2 border-t border-slate-800 flex items-center justify-between">
                  <span>{media.source}</span>
                  <span className="flex items-center gap-1">Xem video <ArrowRight className="w-3 h-3" /></span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 5: PERSONALIZED ONCOLOGY DECISION TOOL */}
      {/* ========================================================================= */}
      <section id="bc-chapter-5" className="w-full max-w-3xl mx-auto py-10 px-5 sm:px-6 space-y-8 border-t border-slate-900">
        
        <div className="space-y-2">
          <div className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 5 • Cây Quyết Định Lâm Sàng
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Tự Đánh Giá Chiến Lược Điều Trị Nội Tiết K Vú Của Chị
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Trả lời nhanh 2 câu hỏi để nhận khuyến nghị y khoa chuẩn ASCO/NCCN về việc dừng hay kéo dài nội tiết:
          </p>
        </div>

        {/* Interactive Decision Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
          
          {!isDecisionResult && currentDecisionNode && (
            <div className="space-y-5">
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-rose-400 font-bold uppercase">
                  Bước {decisionHistory.length} / 2
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {currentDecisionNode.question}
                </h3>
                <p className="text-xs text-slate-400">
                  {currentDecisionNode.explanation}
                </p>
              </div>

              <div className="space-y-2.5">
                {currentDecisionNode.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleDecisionOption(opt)}
                    className="w-full p-4 rounded-xl text-left bg-slate-950 border border-slate-800 hover:border-rose-500/60 hover:bg-slate-900/80 transition-all text-xs sm:text-sm group flex items-start justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="font-bold text-slate-200 group-hover:text-rose-300 transition-colors">
                        {opt.label}
                      </div>
                      <div className="text-xs text-slate-400">
                        {opt.description}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-rose-400 shrink-0 mt-1 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {isDecisionResult && finalDecisionRecommendation && (
            <div className="space-y-5">
              <div className="space-y-2">
                <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-rose-950 text-rose-300 border border-rose-800">
                  {finalDecisionRecommendation.tier}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  {finalDecisionRecommendation.title}
                </h3>
              </div>

              {/* Action Steps */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase text-slate-400 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-rose-400" />
                  <span>Các bước hành động khuyến nghị:</span>
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  {finalDecisionRecommendation.actionSteps.map((step: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
                      <span className="text-rose-400 font-bold shrink-0">✓</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Questions for Doctor */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase text-amber-400 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Câu hỏi chuẩn bị sẵn khi gặp Bác sĩ Ung bướu:</span>
                </h4>
                <div className="space-y-2">
                  {finalDecisionRecommendation.doctorQuestions.map((q: string, i: number) => (
                    <div key={i} className="p-3 rounded-lg bg-amber-950/20 border-l-2 border-amber-400 text-xs sm:text-sm text-amber-100 italic">
                      {q}
                    </div>
                  ))}
                </div>
              </div>

              {/* Oncology Evidence */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300">
                <strong className="text-teal-300">Bằng chứng y học thực chứng: </strong>
                {finalDecisionRecommendation.oncologyEvidence}
              </div>

              <button
                onClick={handleResetDecision}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Thực hiện lại đánh giá</span>
              </button>
            </div>
          )}

        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 6: LIFELONG SURVEILLANCE & ANTI-INFLAMMATORY LIFESTYLE */}
      {/* ========================================================================= */}
      <section id="bc-chapter-6" className="w-full max-w-3xl mx-auto py-10 px-5 sm:px-6 space-y-8 border-t border-slate-900">
        
        <div className="space-y-2">
          <div className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 6 • Theo Dõi & Lối Sống
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Chế Độ Dinh Dưỡng Giảm Viêm & Quy Trình Tầm Soát Kép Trọn Đời
          </h2>
          <ReadAloudButton
            id="bc-chap-6"
            title="Chương 6: Dinh Dưỡng Giảm Viêm & Tầm Soát Kép Trọn Đời"
            text="Chương 6: Chế độ dinh dưỡng giảm viêm và quy trình tầm soát kép trọn đời. Duy trì cân nặng hợp lý là chìa khóa vì mô mỡ chuyển đổi hormone estrogen qua men Aromatase. Khuyến nghị áp dụng chế độ ăn Địa Trung Hải giàu Omega 3, dầu ô liu và rau xanh quả mọng; tập thể dục 150 phút mỗi tuần; khám lâm sàng định kỳ sáu đến mười hai tháng và chụp nhũ ảnh kết hợp siêu âm Doppler vú mỗi mười hai tháng một lần."
            variant="chapter"
            label="Nghe đọc Chương 6"
          />
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h3 className="font-bold text-rose-300 text-sm sm:text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-400" />
              <span>1. Chế độ ăn giảm viêm & kiểm soát cân nặng (BMI)</span>
            </h3>
            <p>
              Mô mỡ là nơi diễn ra quá trình sản xuất Estrogen ngoại vi (thông qua men Aromatase). Do đó, duy trì cân nặng lý tưởng là "liệu pháp chống ung thư tự nhiên" hiệu quả nhất:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-300">
              <li><strong>Chế độ ăn Địa Trung Hải (Mediterranean Diet):</strong> Giàu dầu ô-liu nguyên chất, cá béo (cá hồi, cá thu giàu Omega-3), rau xanh đậm, quả mọng (việt quất, dâu tây) giàu polyphenol chống oxy hóa.</li>
              <li><strong>Tập thể dục đều đặn:</strong> 150 phút mỗi tuần (đi bộ nhanh, bơi lội, yoga hoặc đạp xe) giúp giảm 20-30% nguy cơ tái phát K vú.</li>
              <li><strong>Hạn chế tối đa:</strong> Đường tinh luyện, nước ngọt có gas, thịt chế biến sẵn và rượu bia.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h3 className="font-bold text-teal-300 text-sm sm:text-base flex items-center gap-2">
              <Calendar className="w-4 h-4 text-teal-400" />
              <span>2. Lịch tầm soát định kỳ chuẩn ASCO & NCCN</span>
            </h3>
            <div className="space-y-2 pt-1">
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                <span className="font-bold text-rose-400 text-xs">Khám Lâm Sàng Tuyến Vú & Hạch:</span>
                <p className="text-xs text-slate-300">Mỗi 6 - 12 tháng/lần bởi Bác sĩ chuyên khoa Ung Bướu.</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                <span className="font-bold text-teal-400 text-xs">Chụp Nhũ Ảnh (Mammography) & Siêu Âm Doppler Tuyến Vú:</span>
                <p className="text-xs text-slate-300">Định kỳ 12 tháng/lần để theo dõi cả bên vú điều trị và bên vú đối diện.</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                <span className="font-bold text-amber-400 text-xs">Siêu Âm Đầu Dò Phụ Khoa:</span>
                <p className="text-xs text-slate-300">Định kỳ theo dõi tiến triển buồng tử cung sau 5 năm Tamoxifen.</p>
              </div>
            </div>
          </div>

        </div>

      </section>

    </article>
  );
};
