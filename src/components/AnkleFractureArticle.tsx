import React, { useState } from 'react';
import { ankleFractureTreatmentOptions } from '../data/ankleFractureTreatmentData';
import { ankleFractureMediaItems } from '../data/ankleFractureMediaData';
import { ankleFractureDecisionTree } from '../data/ankleFractureDecisionData';
import { AnkleFractureCaseViewer } from './AnkleFractureCaseViewer';
import { AnkleFractureRehabTimeline } from './AnkleFractureRehabTimeline';
import { AnkleFractureSafetySection } from './AnkleFractureSafetySection';
import { ReadAloudButton } from './ReadAloudButton';
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
  Award,
  Zap,
  CheckCircle2,
  Clock,
  Info,
  Footprints,
  Lock
} from 'lucide-react';

interface AnkleFractureArticleProps {
  onOpenVideoModal: (media: MediaItem) => void;
  onNavigateToDoctors: () => void;
  onNavigateToQA: () => void;
}

export const AnkleFractureArticle: React.FC<AnkleFractureArticleProps> = ({
  onOpenVideoModal,
  onNavigateToDoctors,
  onNavigateToQA
}) => {
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>('orif-ankle-surgery');

  // Decision Tool States
  const [decisionHistory, setDecisionHistory] = useState<string[]>(['root']);
  const [decisionAnswers, setDecisionAnswers] = useState<string[]>([]);

  // Decision Tree Handler
  const currentDecisionNodeId = decisionHistory[decisionHistory.length - 1];
  const currentDecisionNode = ankleFractureDecisionTree[currentDecisionNodeId];
  const isDecisionResult = currentDecisionNodeId === 'result';

  let finalDecisionRecommendation: any = null;
  if (isDecisionResult) {
    const parentId = decisionHistory[decisionHistory.length - 2];
    const parentNode = ankleFractureDecisionTree[parentId];
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

  const activeTreatment = ankleFractureTreatmentOptions.find(t => t.id === selectedTreatmentId) || ankleFractureTreatmentOptions[0];

  return (
    <article className="w-full bg-slate-950 text-slate-200 font-sans pb-32">
      {/* ========================================================================= */}
      {/* BOOK COVER & PREFACE: Ankle Trauma & Rehabilitation Monograph */}
      {/* ========================================================================= */}
      <header className="w-full max-w-3xl mx-auto pt-10 pb-8 px-5 sm:px-6 space-y-6">
        {/* Series Badge */}
        <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold tracking-wider uppercase">
          <Footprints className="w-4 h-4" />
          <span>Chuyên Khảo Chấn Thương Chỉnh Hình & Phục Hồi Chức Năng • Cập Nhật 2026</span>
        </div>

        {/* Main Title */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Té Ngã Gãy Mắt Cá Chân, Đứt Dây Chằng & Phục Hồi Toàn Diện Từ A - Z
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Cẩm nang y khoa thực chứng giải mã chấn thương gãy 2 mắt cá (Bimalleolar), đứt phức hợp dây chằng ATFL và toác khớp chày mác; kỹ thuật phẫu thuật nẹp vít Titanium (ORIF), ma trận chống huyết khối DVT và cẩm nang phục hồi 4 giai đoạn chi tiết cho người cao tuổi.
          </p>

          {/* Read Aloud Full Article Button */}
          <div className="pt-2">
            <ReadAloudButton
              id="ankle-monograph-full"
              title="Té Ngã Gãy Mắt Cá Chân & Phục Hồi Toàn Diện"
              text="Chuyên khảo: Té ngã gãy mắt cá chân, đứt dây chằng và phục hồi toàn diện từ A đến Z. Cẩm nang giải mã chấn thương gãy hai mắt cá, đứt dây chằng mác sên trước ATFL và toác khớp chày mác. Phẫu thuật kết hợp xương nẹp vít ORIF là chuẩn vàng giúp phục hồi giải phẫu vững chắc. Lộ trình phục hồi 4 giai đoạn cùng giày bảo hộ CAM Boot giúp người bệnh tự tin đi lại bình thường."
              variant="hero"
              label="Bấm để nghe đọc chuyên khảo"
              durationEstimate="~18 phút"
            />
          </div>
        </div>

        {/* Privacy Shield Banner */}
        <div className="p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl flex items-center justify-between gap-3 text-xs text-emerald-200">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Toàn bộ thông tin định danh và hồ sơ y khoa đã được bảo mật & ẩn danh hóa 100%.</span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 font-bold">Bệnh nhân P.T.X.L (74 tuổi)</span>
        </div>

        {/* Guidelines Meta Banner */}
        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-b border-slate-800/80 pb-6">
          <div className="flex items-center gap-1.5 text-rose-300 font-medium">
            <ShieldCheck className="w-4 h-4 text-rose-400" />
            <span>Tiêu chuẩn AO Trauma • AAOS • AOFAS • BV CTCH TP.HCM</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>Thời lượng đọc: 18 phút</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>Chuyên đề: Tháng 09/2026</span>
          </div>
        </div>

        {/* Quick Medical Team Callout */}
        <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-300 font-bold text-sm">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Chuyên Khoa Chấn Thương Chỉnh Hình & Chi Dưới</div>
              <div className="text-xs text-slate-400">BV Chấn Thương Chỉnh Hình TP.HCM • BV Đại Học Y Dược TP.HCM</div>
            </div>
          </div>
          <button 
            onClick={onNavigateToDoctors}
            className="px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold transition-all flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>Top Bác Sĩ</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* CHAPTER 1: Phân Tích Hồ Sơ Chấn Thương Mắt Cá & X-Quang / MRI */}
      {/* ========================================================================= */}
      <section id="ankle-ch-1" className="w-full max-w-3xl mx-auto py-8 px-5 sm:px-6 space-y-6 border-t border-slate-800/80">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
            Chương 1
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Giải Mã Hồ Sơ Chấn Thương Cổ Chân & Cơ Chế Té Ngã
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Phân tích chi tiết từng thương tổn trên phim <strong className="text-white">X-quang khớp cổ chân</strong> (Gãy 2 mắt cá, lệch trục mộng chày sên) và phim <strong className="text-white">MRI khớp cổ chân</strong> (Đứt hoàn toàn dây chằng ATFL, toác khớp chày mác Syndesmosis).
          </p>
        </div>

        {/* Embedded Interactive Ankle Case Viewer */}
        <AnkleFractureCaseViewer />

        {/* Clinical Note: Why Anatomical Reduction is Crucial */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-rose-950/30 to-slate-900 border border-rose-500/40 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-rose-300 font-bold text-sm">
            <Zap className="w-4 h-4 text-rose-400" />
            <span>Quy Luật Bất Biến Của Khớp Cổ Chân: Lệch 1mm Giảm 40% Diện Tích Chịu Lực</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Khớp cổ chân là khớp chịu toàn bộ trọng lượng cơ thể với diện tích bề mặt rất nhỏ (chỉ khoảng 3.5 - 4.5 $cm^2$). Các nghiên cứu kinh điển của Ramsey & Hamilton chứng minh rằng: <strong>Chỉ cần xương sên bị trượt lệch sang bên 1mm</strong>, diện tích tiếp xúc giữa xương chày và xương sên sẽ giảm tới <strong>42%</strong>, làm tăng áp lực tải trọng cục bộ lên gấp đôi và dẫn đến thoái hóa sụn khớp không thể hồi phục. Do đó, phẫu thuật nẹp vít nắn chỉnh khít khao giải phẫu là bắt buộc.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 2: Phân Loại Gãy Xương Mắt Cá & Đứt Dây Chằng */}
      {/* ========================================================================= */}
      <section id="ankle-ch-2" className="w-full max-w-3xl mx-auto py-8 px-5 sm:px-6 space-y-6 border-t border-slate-800/80">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
            Chương 2
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Phân Loại Danis-Weber & Bản Chất Đứt Dây Chằng
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Hiểu rõ vị trí đường gãy và mức độ tổn thương của hệ thống dây chằng giữ vững cổ chân.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-2.5">
            <div className="text-xs font-bold text-rose-400 uppercase tracking-wide flex items-center gap-1.5">
              <Activity className="w-4 h-4" />
              Phân Loại Gãy Xương Mác (Danis-Weber)
            </div>
            <ul className="text-xs text-slate-300 space-y-2">
              <li className="p-2 bg-slate-950/60 rounded-lg">
                <strong className="text-emerald-400">Weber A (Dưới khớp): </strong>Gãy mỏm xương mác dưới mức khe khớp, khớp chày mác nguyên vẹn, thường điều trị bó bột.
              </li>
              <li className="p-2 bg-slate-950/60 rounded-lg border border-rose-500/30">
                <strong className="text-rose-400">Weber B (Ngang mức khớp - Ca của cụ Loan): </strong>Đường gãy chéo xoắn ngang mức khe khớp sên cẳng chân, tổn thương 50% khớp chày mác và rách dây chằng ATFL $\rightarrow$ Cần phẫu thuật nẹp vít.
              </li>
              <li className="p-2 bg-slate-950/60 rounded-lg">
                <strong className="text-amber-400">Weber C (Trên khớp): </strong>Gãy thân xương mác cao, toác toàn bộ màng gian cốt chày mác $\rightarrow$ Phẫu thuật nẹp vít + siết khớp chày mác.
              </li>
            </ul>
          </div>

          <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-2.5">
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-wide flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Hệ Thống Dây Chằng Khớp Cổ Chân
            </div>
            <ul className="text-xs text-slate-300 space-y-2">
              <li className="p-2 bg-slate-950/60 rounded-lg">
                <strong className="text-rose-300">Dây chằng ATFL (Mác sên trước): </strong>Dây chằng giữ bờ ngoài, khi bị đứt làm lỏng khớp xoay trong. Cần khâu phục hồi hoặc gia cố bằng chỉ sinh học.
              </li>
              <li className="p-2 bg-slate-950/60 rounded-lg">
                <strong className="text-amber-300">Dây chằng CFL (Mác gót): </strong>Giữ vững gót chân khi nghiêng trong. Rách bán phần sẽ tự lành sẹo khi mang giày CAM boot.
              </li>
              <li className="p-2 bg-slate-950/60 rounded-lg">
                <strong className="text-cyan-300">Khớp nối chày - mác (Syndesmosis): </strong>Giữ 2 xương cẳng chân khép sát nhau. Khi bị toác cần siết bằng dây neo TightRope hoặc vít định vị.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 3: So Sánh 4 Phác Đồ Điều Trị & Phẫu Thuật ORIF Chuẩn Vàng */}
      {/* ========================================================================= */}
      <section id="ankle-ch-3" className="w-full max-w-3xl mx-auto py-8 px-5 sm:px-6 space-y-6 border-t border-slate-800/80">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
            Chương 3
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            So Sánh Toàn Diện Các Phác Đồ Can Thiệp Gãy Mắt Cá
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Phân tích ưu - nhược điểm của 4 phương án: Phẫu thuật nẹp vít ORIF chuẩn vàng, Bó bột bảo tồn, Nội soi hỗ trợ và Phục hồi chức năng đa tầng.
          </p>
        </div>

        {/* Treatment Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {ankleFractureTreatmentOptions.map((opt) => {
            const isSelected = opt.id === selectedTreatmentId;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedTreatmentId(opt.id)}
                className={`p-3 rounded-xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-rose-500/20 border-rose-500/60 text-white shadow-md'
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
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-5">
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
            <h3 className="text-xl sm:text-2xl font-black text-white pt-1">
              {activeTreatment.name}
            </h3>
            <p className="text-xs sm:text-sm text-rose-400 font-medium">
              {activeTreatment.subtitle}
            </p>
          </div>

          {/* Layman Analogy */}
          <div className="p-3.5 bg-rose-950/20 border border-rose-800/30 rounded-xl space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400 uppercase tracking-wide">
              <Info className="w-3.5 h-3.5" />
              <span>Hình Tượng Đời Thường Dễ Hiểu</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
              "{activeTreatment.laymanAnalogy}"
            </p>
          </div>

          {/* Pros & Cons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide flex items-center gap-1">
                <Check className="w-4 h-4" />
                Ưu Điểm Vượt Trội
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5">
                {activeTreatment.pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2">
              <div className="text-xs font-bold text-rose-400 uppercase tracking-wide flex items-center gap-1">
                <AlertTriangle className="w-4 h-4" />
                Hạn Chế & Lưu Ý
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5">
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
          <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl space-y-1 text-xs">
            <span className="font-bold text-amber-300 uppercase tracking-wide">Đánh Giá An Toàn Người Cao Tuổi (74 Tuổi): </span>
            <span className="text-slate-300 leading-relaxed">{activeTreatment.elderlySafety74yo}</span>
          </div>

          {/* Guideline Recommendation */}
          <div className="p-3 bg-emerald-950/20 border border-emerald-800/30 rounded-xl flex items-center gap-2 text-xs text-emerald-300 font-medium">
            <Award className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{activeTreatment.recommendationNote}</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 4: Ma Trận An Toàn Chu Phẫu Tuổi 74 & Phòng Ngừa DVT */}
      {/* ========================================================================= */}
      <section id="ankle-ch-4" className="w-full max-w-3xl mx-auto py-8 px-5 sm:px-6 space-y-6 border-t border-slate-800/80">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
            Chương 4
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Ma Trận An Toàn Chu Phẫu: Phòng Chống Cục Máu Đông DVT & Loãng Xương
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Phác đồ bảo vệ toàn diện kiểm soát <strong className="text-white">Huyết khối tĩnh mạch sâu (DVT)</strong>, <strong className="text-white">Nẹp khóa trên nền loãng xương T-score -2.7</strong>, <strong className="text-white">Chống loét tỳ đè gót chân</strong> và <strong className="text-white">Phòng ngừa hội chứng đau Sudeck (CRPS)</strong>.
          </p>
        </div>

        {/* Embedded Safety Section Component */}
        <AnkleFractureSafetySection />
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 5: Video Atlas 3D & Minh Họa Mổ ORIF */}
      {/* ========================================================================= */}
      <section id="ankle-ch-5" className="w-full max-w-3xl mx-auto py-8 px-5 sm:px-6 space-y-6 border-t border-slate-800/80">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
            Chương 5
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Thư Viện Video Atlas 3D & Bài Tập Phục Hồi Khớp Cổ Chân
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Trực quan hóa quy trình mổ kết hợp xương nẹp vít ORIF, cơ chế đứt dây chằng và video thực hành bài tập phục hồi chức năng chi dưới.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ankleFractureMediaItems.map((item) => (
            <div 
              key={item.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-rose-500/40 transition-all group flex flex-col justify-between"
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
                  <div className="w-12 h-12 rounded-full bg-rose-500/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-slate-950/80 text-white text-[11px] font-mono">
                  {item.duration}
                </div>
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-rose-500/80 text-white text-[10px] font-bold uppercase tracking-wider">
                  {item.category}
                </div>
              </div>

              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-rose-300 transition-colors line-clamp-2">
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
                    className="text-rose-400 font-semibold hover:underline flex items-center gap-0.5 cursor-pointer"
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
      {/* CHAPTER 6: Cây Quyết Định Lâm Sàng: Từ Chấn Thương Đến Tỳ Đè */}
      {/* ========================================================================= */}
      <section id="ankle-ch-6" className="w-full max-w-3xl mx-auto py-8 px-5 sm:px-6 space-y-6 border-t border-slate-800/80">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
            Chương 6
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Cây Quyết Định Lâm Sàng: Hướng Đi Chuẩn Xác Cho Từng Giai Đoạn
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Chọn tình trạng thực tế của chân (Mới té sưng nề / Đang dưỡng thương tại nhà) để nhận khuyến nghị hành động tối ưu.
          </p>
        </div>

        {/* Interactive Decision Box */}
        <div className="p-5 sm:p-6 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-5">
          {!isDecisionResult ? (
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono text-rose-400 font-bold uppercase">
                  Bước {decisionHistory.length} / 2
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  {currentDecisionNode.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  {currentDecisionNode.explanation}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {currentDecisionNode.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDecisionOption(option)}
                    className="w-full text-left p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-rose-500/50 hover:bg-slate-900/90 transition-all space-y-1 group cursor-pointer"
                  >
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-rose-300 transition-colors flex items-center justify-between">
                      <span>{option.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-rose-400 transition-colors shrink-0" />
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {option.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Khuyến Nghị Điều Trị & Phục Hồi Cá Thể Hóa
                </span>
                <button
                  onClick={handleResetDecision}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Chọn Lại Từ Đầu</span>
                </button>
              </div>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  {finalDecisionRecommendation?.tier}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white pt-1">
                  {finalDecisionRecommendation?.title}
                </h3>
              </div>

              {/* Action Steps */}
              <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-rose-400 uppercase tracking-wide">
                  Các Bước Hành Động Cần Thực Hiện:
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {finalDecisionRecommendation?.actionSteps.map((step: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold shrink-0">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Doctor Questions */}
              <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wide">
                  Câu Hỏi Nên Hỏi Bác Sĩ Chấn Thương Chỉnh Hình:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300 italic">
                  {finalDecisionRecommendation?.doctorQuestions.map((q: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 shrink-0">"</span>
                      <span>{q.replace(/"/g, '')}"</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expert Note */}
              <div className="p-3.5 bg-emerald-950/30 border border-emerald-800/40 rounded-xl flex items-start gap-2.5 text-xs text-emerald-200">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">{finalDecisionRecommendation?.expertNote}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 7: Cẩm Nang Phục Hồi Chức Năng 4 Giai Đoạn Từ A - Z */}
      {/* ========================================================================= */}
      <section id="ankle-ch-7" className="w-full max-w-3xl mx-auto py-8 px-5 sm:px-6 space-y-6 border-t border-slate-800/80">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
            Chương 7
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Tất Tần Tật Lộ Trình Phục Hồi Chức Năng, Dinh Dưỡng & Tháo Nẹp Vít
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Kế hoạch chi tiết từng ngày qua 4 giai đoạn phục hồi: Thang đo tỳ đè (NWB $\rightarrow$ PWB $\rightarrow$ FWB), bài tập chống teo cơ, dinh dưỡng liền can xương và cẩm nang quản lý nẹp vít Titanium.
          </p>
        </div>

        {/* Embedded Complete Rehab Timeline Component */}
        <AnkleFractureRehabTimeline />

        {/* Navigation CTAs */}
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={onNavigateToQA}
            className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-rose-500/50 hover:bg-slate-850 transition-all text-left space-y-1 group cursor-pointer"
          >
            <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
              Tập Q&A Chi Tiết
            </div>
            <div className="text-sm sm:text-base font-bold text-white group-hover:text-rose-300 transition-colors flex items-center justify-between">
              <span>Xem 12 Câu Hỏi & Trả Lời Mắt Cá Chân</span>
              <ArrowRight className="w-4 h-4 text-rose-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          <button
            onClick={onNavigateToDoctors}
            className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-850 transition-all text-left space-y-1 group cursor-pointer"
          >
            <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Danh Mục Chuyên Gia
            </div>
            <div className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
              <span>Top 10 Bác Sĩ Chấn Thương Chỉnh Hình TP.HCM</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </section>
    </article>
  );
};
