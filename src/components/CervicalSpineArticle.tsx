import React, { useState } from 'react';
import { cervicalSpineTreatmentOptions } from '../data/cervicalSpineTreatmentData';
import { cervicalSpineMediaItems } from '../data/cervicalSpineMediaData';
import { cervicalSpineDecisionTree } from '../data/cervicalSpineDecisionData';
import { CervicalSpineCaseViewer } from './CervicalSpineCaseViewer';
import { CervicalSpineComorbiditiesSection } from './CervicalSpineComorbiditiesSection';
import { ReadAloudButton } from './ReadAloudButton';
import { MedicalDisclaimerBanner } from './MedicalDisclaimerBanner';
import { ReferencesSection } from './ReferencesSection';
import { cervicalSpineReferences } from '../data/medicalReferencesData';
import type { MediaItem } from '../types/medical';
import { 
  Activity, 
  AlertTriangle, 
  ShieldCheck, 
  Play, 
  RotateCcw, 
  ChevronRight, 
  Check, 
  Calendar, 
  ArrowRight,
  Stethoscope,
  Bone,
  Award,
  Zap,
  CheckCircle2,
  Clock,
  Info
} from 'lucide-react';

interface CervicalSpineArticleProps {
  onOpenVideoModal: (media: MediaItem) => void;
  onNavigateToDoctors: () => void;
  onNavigateToQA: () => void;
}

export const CervicalSpineArticle: React.FC<CervicalSpineArticleProps> = ({
  onOpenVideoModal,
  onNavigateToDoctors,
  onNavigateToQA
}) => {
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>('acdf-surgery');

  // Decision Tool States
  const [decisionHistory, setDecisionHistory] = useState<string[]>(['root']);
  const [decisionAnswers, setDecisionAnswers] = useState<string[]>([]);

  // Decision Tree Handler
  const currentDecisionNodeId = decisionHistory[decisionHistory.length - 1];
  const currentDecisionNode = cervicalSpineDecisionTree[currentDecisionNodeId];
  const isDecisionResult = currentDecisionNodeId === 'result';

  let finalDecisionRecommendation: any = null;
  if (isDecisionResult) {
    const parentId = decisionHistory[decisionHistory.length - 2];
    const parentNode = cervicalSpineDecisionTree[parentId];
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

  const activeTreatment = cervicalSpineTreatmentOptions.find(t => t.id === selectedTreatmentId) || cervicalSpineTreatmentOptions[0];

  return (
    <article className="w-full bg-slate-950 text-slate-200 font-sans pb-32">

      {/* Medical Disclaimer Banner */}
      <MedicalDisclaimerBanner
        specialty="Phẫu thuật Cột sống / Thần kinh Ngoại khoa"
        primaryGuideline="NASS Guidelines 2021, AAOS/AOA Cervical Myelopathy 2024"
        lastUpdated="Tháng 9/2026"
      />

      {/* ========================================================================= */}
      {/* BOOK COVER & PREFACE: Cervical Spine Monograph */}
      {/* ========================================================================= */}
      <header className="w-full max-w-5xl sm:max-w-6xl mx-auto pt-6 pb-6 px-4 sm:px-6 space-y-4">
        {/* Series Badge */}
        <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-wider uppercase">
          <Bone className="w-4 h-4" />
          <span>Chuyên Khảo Phẫu Thuật Cột Sống & Thần Kinh • Cập Nhật 2026</span>
        </div>

        {/* Main Title & Unified Header Container */}
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
            Thoát Vị Đĩa Đệm Cột Sống Cổ Chèn Ép Tủy & Phẫu Thuật ACDF
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Nghiên cứu chuyên sâu phân tích 3 bệnh án thực tế (MRI Cột sống cổ CIH, MRI Thắt lưng Saigon Medic, Giấy giới thiệu Lầu 8A BV ĐHYD), giải pháp phẫu thuật vi phẫu ACDF lối trước và ma trận an toàn chu phẫu cho cụ bà 74 tuổi.
          </p>

          {/* Unified Preface & Metadata Panel */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <ReadAloudButton
                id="spine-monograph-full"
                title="Thoát Vị Cột Sống Cổ Chèn Ép Tủy & Phẫu Thuật ACDF"
                text="Chuyên khảo: Thoát vị đĩa đệm cột sống cổ chèn ép tủy và phẫu thuật hàn xương liên thân đốt lối trước ACDF. Phân tích 3 bệnh án thực tế tại bệnh viện CIH, Saigon Medic và bệnh viện Đại học Y Dược thành phố Hồ Chí Minh. Phẫu thuật vi phẫu ACDF giúp giải ép tủy sống khẩn cấp, ngăn chặn nguy cơ yếu liệt tứ chi, kết hợp nẹp khóa góc và thuốc chống đông an toàn cho người cao tuổi."
                variant="hero"
                label="Bấm để nghe đọc chuyên khảo"
                durationEstimate="~15 phút"
              />
              <button 
                onClick={onNavigateToDoctors}
                className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Stethoscope className="w-4 h-4 text-amber-400" />
                <span>Top Bác Sĩ Cột Sống & Thần Kinh</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="pt-2.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-y-2 gap-x-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-amber-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>AANS • NASS • AOSpine • Lầu 8A BV ĐHYD TP.HCM</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>Thời lượng: 15 phút</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>Tháng 06/2026</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* CHAPTER 1: Phân Tích 3 Bệnh Án Thực Tế (Interactive Case Viewer) */}
      {/* ========================================================================= */}
      <section id="spine-ch-1" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-800/80">
        <div className="space-y-1.5">
          <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
            Chương 1
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            Giải Mã 3 Hồ Sơ Bệnh Án Thực Tế & Phân Tầng Cấp Bách
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Soi kỹ từng dòng kết luận từ 3 tài liệu y khoa gốc: <strong className="text-white">MRI Cột Sống Cổ (CIH)</strong>, <strong className="text-white">MRI Thắt Lưng (Saigon Medic)</strong> và <strong className="text-white">Giấy Giới Thiệu Khám Lầu 8A BV ĐHYD</strong> (PGS.TS Cao Thanh Ngọc & ThS.BS Huỳnh Khôi Nguyên).
          </p>
        </div>

        {/* Embedded Interactive Case Viewer */}
        <CervicalSpineCaseViewer />

        {/* Clinical Rationale: Why Neck First, Lumbar Later */}
        <div className="p-4 bg-gradient-to-r from-amber-950/30 to-slate-900 border border-amber-500/40 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Quy Luật Bất Biến: Cứu Tủy Sống Cổ Cấp Bách Hơn Rễ Thần Kinh Thắt Lưng</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Nhiều bệnh nhân thắc mắc: <em>"Tôi đau cả lưng lẫn cổ, tại sao bác sĩ chỉ bảo mổ cổ?"</em>. 
            Câu trả lời nằm ở giải phẫu học: <strong>Cột sống cổ chứa TỦY SỐNG TRUNG ƯƠNG</strong>. Khối thoát vị C3/4 5.0mm đè trực tiếp vào tủy, nếu chần chừ có thể gây thiếu máu tủy vĩnh viễn và liệt tứ chi. 
            Trong khi đó, ở <strong>thắt lưng L4/L5</strong> tủy sống đã kết thúc, chỉ còn rễ thần kinh ngoại biên, hoàn toàn có thể kiểm soát bảo tồn bằng thuốc và tập luyện sau khi đã giải phóng an toàn đốt sống cổ.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 2: Cơ Chế Bệnh Học CSM & Dấu Hiệu Cảnh Báo Sớm */}
      {/* ========================================================================= */}
      <section id="spine-ch-2" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-800/80">
        <div className="space-y-1.5">
          <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
            Chương 2
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            Bệnh Lý Chèn Ép Tủy Cổ (CSM) & Cơ Chế Thiếu Máu Tủy
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Hiểu rõ bản chất vì sao khối thoát vị chỉ 5mm nhưng lại có thể gây hậu quả nghiêm trọng lên vận động của toàn thân.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-2">
            <div className="text-xs font-bold text-rose-400 uppercase tracking-wide flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              Tại Sao Ống Sống Cổ Cực Kỳ Nhạy Cảm?
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Ống sống cổ người cao tuổi vốn đã bị thu hẹp do gai xương thoái hóa. Khi nhân đệm C3/4 thoát vị tới 5.0mm, khoảng dự trữ dịch não tủy bị triệt tiêu hoàn toàn. Tủy sống bị kẹp chặt giữa bờ sau đốt sống và dây chằng vàng, dẫn đến thiếu máu nuôi dưỡng cục bộ.
            </p>
          </div>

          <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-2">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wide flex items-center gap-1.5">
              <Activity className="w-4 h-4" />
              3 Triệu Chứng Cảnh Báo "Đèn Đỏ"
            </div>
            <ul className="text-xs sm:text-sm text-slate-300 space-y-1.5">
              <li className="flex items-start gap-1.5">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Mất khéo léo bàn tay:</strong> Khó cài cúc áo, đánh rơi đũa, viết chữ nguệch ngoạc.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Dáng đi lảo đảo:</strong> Cảm giác chân bước hẫng hụt như đang "đi trên bông gòn".</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Dấu hiệu Lhermitte:</strong> Cúi cổ thấy cảm giác như luồng điện giật chạy dọc cột sống.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 3: So Sánh 4 Phác Đồ Điều Trị & Phẫu Thuật ACDF Chuẩn Vàng */}
      {/* ========================================================================= */}
      <section id="spine-ch-3" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-800/80">
        <div className="space-y-1.5">
          <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
            Chương 3
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            So Sánh Toàn Diện Các Phác Đồ Can Thiệp Cột Sống Cổ
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Phân tích ưu - nhược điểm của 4 lựa chọn y khoa: từ phẫu thuật ACDF chuẩn vàng, phẫu thuật lối sau, tiêm phong bế giảm đau đến vật lý trị liệu.
          </p>
        </div>

        {/* Treatment Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {cervicalSpineTreatmentOptions.map((opt) => {
            const isSelected = opt.id === selectedTreatmentId;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedTreatmentId(opt.id)}
                className={`p-3 rounded-xl text-left transition-all border ${
                  isSelected
                    ? 'bg-amber-500/20 border-amber-500/60 text-white shadow-md'
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <div className="text-xs font-bold truncate">{opt.name.split('(')[0]}</div>
                <div className={`text-[10px] font-semibold mt-1 ${
                  opt.suitabilityScore.includes('Chuẩn Vàng') ? 'text-emerald-400' : 'text-slate-400'
                }`}>
                  {opt.suitabilityScore}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Treatment Detail Card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4">
          {/* Header */}
          <div className="space-y-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                activeTreatment.suitabilityScore.includes('Chuẩn Vàng')
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              }`}>
                {activeTreatment.suitabilityScore}
              </span>
              <span className="text-xs text-slate-400">{activeTreatment.surgicalRecovery}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white pt-1">
              {activeTreatment.name}
            </h3>
            <p className="text-xs sm:text-sm text-amber-400 font-medium">
              {activeTreatment.subtitle}
            </p>
          </div>

          {/* Layman Analogy */}
          <div className="p-3 bg-amber-950/20 border border-amber-800/30 rounded-xl space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wide">
              <Info className="w-3.5 h-3.5" />
              <span>Hình Tượng Đời Thường Dễ Hiểu</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
              "{activeTreatment.laymanAnalogy}"
            </p>
          </div>

          {/* Pros & Cons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl space-y-1.5">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide flex items-center gap-1">
                <Check className="w-4 h-4" />
                Ưu Điểm Vượt Trội
              </div>
              <ul className="text-xs text-slate-300 space-y-1">
                {activeTreatment.pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl space-y-1.5">
              <div className="text-xs font-bold text-rose-400 uppercase tracking-wide flex items-center gap-1">
                <AlertTriangle className="w-4 h-4" />
                Hạn Chế & Lưu Ý
              </div>
              <ul className="text-xs text-slate-300 space-y-1">
                {activeTreatment.cons.map((c, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Elderly Safety Evaluation */}
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1 text-xs">
            <span className="font-bold text-amber-300 uppercase tracking-wide">Đánh Giá An Toàn Người Cao Tuổi (74 Tuổi): </span>
            <span className="text-slate-300 leading-relaxed">{activeTreatment.elderlySafety74yo}</span>
          </div>

          {/* Guideline Recommendation */}
          <div className="p-2.5 bg-emerald-950/20 border border-emerald-800/30 rounded-xl flex items-center gap-2 text-xs text-emerald-300 font-medium">
            <Award className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{activeTreatment.recommendationNote}</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 4: Ma Trận An Toàn 4 Bệnh Lý Đi Kèm Tuổi 74 */}
      {/* ========================================================================= */}
      <section id="spine-ch-4" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-800/80">
        <div className="space-y-1.5">
          <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
            Chương 4
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            Ma Trận An Toàn Chu Phẫu: Kiểm Soát 4 Bệnh Lý Đi Kèm
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Phác đồ phối hợp đa chuyên khoa chuẩn mực giữa <strong className="text-white">Ngoại Thần Kinh</strong>, <strong className="text-white">Gây Mê Hồi Sức</strong>, <strong className="text-white">Cơ Xương Khớp (PGS.TS Cao Thanh Ngọc)</strong> và <strong className="text-white">Nội Tiết</strong>.
          </p>
        </div>

        {/* Embedded Comorbidities Component */}
        <CervicalSpineComorbiditiesSection />
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 5: Video Atlas 3D & Minh Họa Quy Trình Mổ */}
      {/* ========================================================================= */}
      <section id="spine-ch-5" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-800/80">
        <div className="space-y-1.5">
          <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
            Chương 5
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            Thư Viện Video Atlas 3D & Bài Tập Phục Hồi Chức Năng
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Trực quan hóa từng bước mổ vi phẫu ACDF lối trước và video hướng dẫn vận động sau mổ cho người cao tuổi.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cervicalSpineMediaItems.map((item) => (
            <div 
              key={item.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all group flex flex-col justify-between"
            >
              <div 
                className="relative aspect-video bg-slate-950 overflow-hidden cursor-pointer"
                onClick={() => onOpenVideoModal(item)}
              >
                <img 
                  src={item.thumbnailUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-slate-950/80 text-white text-[11px] font-mono">
                  {item.duration}
                </div>
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-amber-500/80 text-slate-950 text-[10px] font-bold uppercase tracking-wider">
                  {item.category}
                </div>
              </div>

              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Nguồn: {item.source}</span>
                  <button 
                    onClick={() => onOpenVideoModal(item)}
                    className="text-amber-400 font-semibold hover:underline flex items-center gap-0.5"
                  >
                    Xem Video
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 6: Cây Quyết Định Lâm Sàng Cá Thể Hóa Cho Bệnh Nhân */}
      {/* ========================================================================= */}
      <section id="spine-ch-6" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-800/80">
        <div className="space-y-1.5">
          <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
            Chương 6
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            Cây Quyết Định Lâm Sàng: Hướng Đi Chuẩn Xác Cho Cụ Bà 74 Tuổi
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Chọn các triệu chứng thực tế của bác/cô để nhận khuyến nghị hành động tối ưu dựa trên hướng dẫn AOSpine và BV ĐHYD.
          </p>
        </div>

        {/* Interactive Decision Box */}
        <div className="p-4 sm:p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-4">
          {!isDecisionResult ? (
            <div className="space-y-3">
              <div className="space-y-1">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                  Bước {decisionHistory.length} / 2
                </span>
                <h3 className="text-base sm:text-lg font-black text-white">
                  {currentDecisionNode.question}
                </h3>
                <p className="text-xs text-slate-400">
                  {currentDecisionNode.explanation}
                </p>
              </div>

              <div className="space-y-2 pt-1">
                {currentDecisionNode.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDecisionOption(option)}
                    className="w-full text-left p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-900/90 transition-all space-y-0.5 group"
                  >
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                      <span>{option.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors shrink-0" />
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {option.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Khuyến Nghị Điều Trị Cá Thể Hóa
                </span>
                <button
                  onClick={handleResetDecision}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Chọn Lại Từ Đầu</span>
                </button>
              </div>

              <div className="space-y-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {finalDecisionRecommendation?.tier}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white pt-1">
                  {finalDecisionRecommendation?.title}
                </h3>
              </div>

              {/* Action Steps */}
              <div className="space-y-1.5 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                  Các Bước Hành Động Cần Thực Hiện Ngay:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {finalDecisionRecommendation?.actionSteps.map((step: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold shrink-0">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Doctor Questions */}
              <div className="space-y-1.5 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wide">
                  Câu Hỏi Nên Hỏi Bác Sĩ Tại Lầu 8A BV ĐHYD:
                </div>
                <ul className="space-y-1 text-xs text-slate-300 italic">
                  {finalDecisionRecommendation?.doctorQuestions.map((q: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 shrink-0">"</span>
                      <span>{q.replace(/"/g, '')}"</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expert Note */}
              <div className="p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl flex items-start gap-2 text-xs text-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">{finalDecisionRecommendation?.expertNote}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 7: Lộ Trình Phục Hồi 6 Tuần & Lời Khuyên Tại Nhà */}
      {/* ========================================================================= */}
      <section id="spine-ch-7" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-800/80">
        <div className="space-y-1.5">
          <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
            Chương 7
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            Lộ Trình 6 Tuần Hậu Phẫu & Kỷ Luật Vận Động Người Cao Tuổi
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Kế hoạch chi tiết từng giai đoạn giúp xương liền vững chắc, giải phóng tê bì bàn tay và bảo vệ cột sống thắt lưng lâu dài.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-xl space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-amber-400 uppercase tracking-wider">
              <span>Giai Đoạn 1: Tuần 1</span>
              <span className="text-slate-400">Ngày 1 - 7</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Ngồi dậy và đi lại nhẹ nhàng sau 24 giờ. Ăn thức ăn mềm, dễ nuốt (cháo, súp). Đeo nẹp cổ mềm liên tục khi ngồi dậy hoặc đi vệ sinh. Giữ vết mổ khô ráo tuyệt đối.
            </p>
          </div>

          <div className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-xl space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-cyan-400 uppercase tracking-wider">
              <span>Giai Đoạn 2: Tuần 2 - 4</span>
              <span className="text-slate-400">Ngày 8 - 28</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Cắt chỉ vết mổ (nếu dùng chỉ không tiêu) sau 7-10 ngày. Đi bộ nhẹ nhàng trong nhà 15-20 phút mỗi sáng. Thực hiện các bài tập trượt dây thần kinh ngón tay. Tiếp tục đeo nẹp cổ khi đi lại, tháo ra khi nằm nghỉ.
            </p>
          </div>

          <div className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-xl space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <span>Giai Đoạn 3: Tuần 5 - 6</span>
              <span className="text-slate-400">Ngày 29 - 42</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tái khám chụp X-quang cột sống cổ kiểm tra vị trí nẹp vít và sự hình thành can xương. Cai nẹp cổ mềm dần dần theo hướng dẫn của bác sĩ. Bắt đầu phác đồ điều trị chống loãng xương dài hạn và tập vật lý trị liệu cột sống thắt lưng L4/L5.
            </p>
          </div>
        </div>

        {/* Navigation CTAs */}
        <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <button
            onClick={onNavigateToQA}
            className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850 transition-all text-left space-y-1 group cursor-pointer"
          >
            <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              Tập Q&A Chi Tiết
            </div>
            <div className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
              <span>Xem 15 Câu Hỏi & Trả Lời Cột Sống Cổ</span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          <button
            onClick={onNavigateToDoctors}
            className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850 transition-all text-left space-y-1 group cursor-pointer"
          >
            <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Danh Mục Chuyên Gia
            </div>
            <div className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
              <span>Top 10 Bác Sĩ Cột Sống & Thần Kinh TP.HCM</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </section>

      {/* References Section */}
      <ReferencesSection
        references={cervicalSpineReferences}
        diseaseTitle="Thoát Vị Đĩa Đệm Cột Sống Cổ"
      />

    </article>
  );
};
