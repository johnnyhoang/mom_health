import React, { useState } from 'react';
import { 
  symptomAnalysesData, 
  diseaseCorrelationTriad, 
  differentiateDiagnosisTable, 
  spineRehabProtocolsData,
  chronicBackPainCaseSummary
} from '../data/chronicBackPainData';
import { chronicBackPainMediaItems } from '../data/chronicBackPainMediaData';
import { chronicBackPainDecisionTree } from '../data/chronicBackPainDecisionData';
import { chronicBackPainReferences } from '../data/medicalReferencesData';
import type { MediaItem } from '../types/medical';
import { ReadAloudButton } from './ReadAloudButton';
import { MedicalDisclaimerBanner } from './MedicalDisclaimerBanner';
import { ReferencesSection } from './ReferencesSection';
import { 
  Activity, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  RotateCcw, 
  ChevronRight, 
  Calendar, 
  ArrowRight,
  Zap,
  Play,
  HelpCircle,
  Stethoscope,
  Ribbon,
  Bone,
  HeartPulse,
  Info,
  Layers,
  Bed,
  CheckCircle2
} from 'lucide-react';

interface ChronicBackPainArticleProps {
  onOpenVideoModal: (media: MediaItem) => void;
  onSwitchToGynecologyModule: () => void;
  onSwitchToBreastCancerModule: () => void;
  onSwitchToCervicalSpineModule: () => void;
}

export const ChronicBackPainArticle: React.FC<ChronicBackPainArticleProps> = ({
  onOpenVideoModal,
  onSwitchToGynecologyModule,
  onSwitchToBreastCancerModule,
  onSwitchToCervicalSpineModule
}) => {
  const [selectedProtocolPhase, setSelectedProtocolPhase] = useState<number>(0);
  
  // Decision Tool States
  const [decisionHistory, setDecisionHistory] = useState<string[]>(['root']);
  const [decisionAnswers, setDecisionAnswers] = useState<string[]>([]);

  // Decision Tree Handler
  const currentDecisionNodeId = decisionHistory[decisionHistory.length - 1];
  const currentDecisionNode = chronicBackPainDecisionTree[currentDecisionNodeId];
  const isDecisionResult = currentDecisionNodeId === 'result';

  let finalDecisionRecommendation: any = null;
  if (isDecisionResult) {
    const parentId = decisionHistory[decisionHistory.length - 2];
    const parentNode = chronicBackPainDecisionTree[parentId];
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

  const activeProtocol = spineRehabProtocolsData[selectedProtocolPhase] || spineRehabProtocolsData[0];

  return (
    <article className="w-full bg-slate-950 text-slate-200 font-sans pb-32">
      
      {/* Medical Disclaimer Banner */}
      <MedicalDisclaimerBanner
        specialty="Thần Kinh Cột Sống & Phục Hồi Chức Năng"
        primaryGuideline="WHO Low Back Pain Guidelines 2023, ACP Clinical Guideline, NASS"
        lastUpdated="Tháng 9/2026"
      />

      {/* ========================================================================= */}
      {/* MONOGRAPH HEADER & CASE PROFILE */}
      {/* ========================================================================= */}
      <header className="w-full max-w-5xl sm:max-w-6xl mx-auto pt-6 pb-6 px-4 sm:px-6 space-y-4">
        
        {/* Series Badge */}
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
          <Activity className="w-4 h-4" />
          <span>Chuyên Khảo Thần Kinh Cột Sống & Cơ Sinh Học • Cập Nhật 2026</span>
        </div>

        {/* Main Title & Unified Header Container */}
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
            Đau Lưng Kinh Niên & Hội Chứng Thần Kinh Cân Cơ: Từ Hiện Tượng Ngứa Ran Đến Tương Quan Tử Cung - K Vú
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Nghiên cứu chuyên sâu về bệnh sử từ năm 25 tuổi, giải mã nghịch lý đấm lưng đỡ nhưng ngứa ran (Notalgia Paresthetica), cơ chế đau bùng phát trước kỳ kinh (Adenomyosis/U xơ 45mm), bí mật kê gối khi ngủ và phác đồ phục hồi đa mô thức.
          </p>

          {/* Unified Preface & Case Profile Panel */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <ReadAloudButton
                id="back-pain-hero"
                title="Chuyên Khảo Đau Lưng Kinh Niên & Hội Chứng Thần Kinh Cân Cơ"
                text="Chuyên khảo đau lưng kinh niên và hội chứng thần kinh cân cơ: từ hiện tượng ngứa ran đến tương quan tử cung và ung thư vú. Nghiên cứu chuyên sâu giải mã bệnh sử từ năm 25 tuổi, nghịch lý đấm lưng đỡ nhưng ngứa ran do kích thích nhánh thần kinh bì lưng sau Notalgia Paresthetica, cơ chế đau bùng phát trước chu kỳ kinh do đau quy chiếu từ lạc tuyến cơ tử cung và u xơ 45mm thành sau, cơ chế kê gối khi ngủ và khẳng định an tâm 100% không phải di căn xương."
                variant="hero"
                label="Bấm để nghe đọc cẩm nang Đau Lưng"
                durationEstimate="~14 phút"
              />
              <div className="flex items-center gap-1.5 text-indigo-300 font-medium text-xs">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span>NASS • AAPM&R • IMS • ACOG</span>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-indigo-300 font-bold text-sm">
                <HeartPulse className="w-4 h-4 text-indigo-400" />
                <span>Tóm Tắt Bệnh Cảnh & Tương Quan Lâm Sàng:</span>
              </div>
              <p className="leading-relaxed">
                Khởi phát từ <strong>{chronicBackPainCaseSummary.onsetAge}</strong> tại <strong>{chronicBackPainCaseSummary.currentLocation}</strong>. Phản ứng xoa bóp: <em>{chronicBackPainCaseSummary.massagingResponse}</em>. Tương quan tiền kinh: <em>{chronicBackPainCaseSummary.premenstrualCorrelation}</em>.
              </p>
            </div>

            <div className="pt-2.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-y-2 gap-x-4 text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>Thời lượng: ~14 phút</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>Cập nhật 2026</span>
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={onSwitchToGynecologyModule}
                  className="text-xs text-teal-300 hover:text-teal-200 font-medium hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Stethoscope className="w-3.5 h-3.5" />
                  <span>Tử Cung</span>
                </button>
                <span>•</span>
                <button
                  onClick={onSwitchToBreastCancerModule}
                  className="text-xs text-rose-300 hover:text-rose-200 font-medium hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Ribbon className="w-3.5 h-3.5" />
                  <span>K Vú</span>
                </button>
                <span>•</span>
                <button
                  onClick={onSwitchToCervicalSpineModule}
                  className="text-xs text-amber-300 hover:text-amber-200 font-medium hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Bone className="w-3.5 h-3.5" />
                  <span>Cổ ACDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* CHAPTER 1: SYMPTOMS DEEP-DIVE & NOTALGIA PARESTHETICA */}
      {/* ========================================================================= */}
      <section id="bp-ch-1" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="space-y-1.5">
          <div className="text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 1 • Sinh Lý Thần Kinh & Cân Cơ
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            Giải Mã Hiện Tượng "Đấm Lưng Thì Đỡ Nhưng Bị NGỨA RAN" & Bệnh Sử Tuổi 25
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Tại sao một động tác đấm bóp cơ học lại vừa làm giảm đau cơ vừa kích thích cảm giác ngứa râm ran dưới da?
          </p>
          <ReadAloudButton
            id="bp-ch-1-audio"
            title="Chương 1: Giải Mã Hiện Tượng Ngứa Ran Khi Đấm Lưng & Bệnh Sử Tuổi 25"
            text="Chương 1: Giải mã hiện tượng đấm lưng thì đỡ nhưng bị ngứa ran và bệnh sử từ năm 25 tuổi. Theo thuyết Cổng kiểm soát của Melzack và Wall, khi đấm bóp, các thụ thể áp lực cơ học sợi A-beta ức chế tín hiệu đau cơ sâu ở sừng sau tủy sống giúp người bệnh thấy dễ chịu tức thời. Tuy nhiên, các nhánh thần kinh bì lưng sau đi xuyên qua lớp cơ dựng sống bị co thắt xơ hóa mãn tính, chịu tác động rung động cơ học sẽ phóng điện tạo cảm giác ngứa ran thần kinh Notalgia Paresthetica. Khởi phát từ tuổi 25 khẳng định 100% bản chất cơ học lành tính lâu năm."
            variant="chapter"
            label="Nghe đọc Chương 1"
          />
        </div>

        {/* 4 Deep-Dive Symptom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {symptomAnalysesData.map((item) => (
            <div key={item.id} className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 shrink-0"></span>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-300 space-y-0.5">
                  <strong className="text-indigo-300 block">Biểu hiện thực tế:</strong>
                  <p className="italic">{item.patientManifestation}</p>
                </div>

                <div className="space-y-1 text-xs text-slate-300">
                  <strong className="text-slate-200 block uppercase font-bold text-[11px]">Cơ chế y học chuyên sâu:</strong>
                  <p className="text-slate-300">{item.medicalMechanism}</p>
                  <p className="text-slate-400 pt-0.5">{item.clinicalSignificance}</p>
                </div>
              </div>

              {/* Layman Analogy */}
              <div className="p-2.5 rounded-xl bg-indigo-950/30 border-l-2 border-indigo-400 text-xs space-y-0.5">
                <span className="font-bold text-indigo-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Hình tượng đời thường dễ hiểu:</span>
                </span>
                <p className="text-slate-200">{item.laymanExplanation}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 2: MULTI-DISCIPLINARY TRIAD CORRELATION */}
      {/* ========================================================================= */}
      <section id="bp-ch-2" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="space-y-1.5">
          <div className="text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 2 • Tương Quan Đa Chuyên Khoa
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            Tương Quan Tam Giác: Đau Lưng Kinh Niên – Lạc Tuyến Tử Cung (Adenomyosis/U Xơ) – K Vú
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Lý giải nguyên nhân cơn đau thắt lưng bùng phát dữ dội trước kỳ kinh và khẳng định an tâm 100% không phải di căn xương:
          </p>
          <ReadAloudButton
            id="bp-ch-2-audio"
            title="Chương 2: Tương Quan Tam Giác Đau Lưng, Tử Cung và K Vú"
            text="Chương 2: Tương quan tam giác giữa đau lưng kinh niên, lạc tuyến tử cung Adenomyosis, u xơ 45mm và ung thư vú. Trong pha hoàng thể trễ trước kỳ kinh, nồng độ Prostaglandin F2a bùng phát làm tử cung co bóp mạnh, truyền xung động đau qua dây chằng tử cung cùng dội ngược lên đám rối thần kinh thắt lưng cùng tạo thành đau quy chiếu dữ dội. Bệnh khởi phát từ năm 25 tuổi, giảm khi kê gối và đấm bóp khẳng định tuyệt đối không phải di căn xương của ung thư vú."
            variant="chapter"
            label="Nghe đọc Chương 2"
          />
        </div>

        {/* 3 Triad Correlations Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {diseaseCorrelationTriad.map((corr) => (
            <div key={corr.id} className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-1.5 border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono text-indigo-400 font-bold uppercase">
                    {corr.system}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full font-bold bg-indigo-950 text-indigo-300 border border-indigo-800">
                    {corr.relatedCondition}
                  </span>
                </div>

                <div className="space-y-1 text-xs text-slate-300">
                  <strong className="text-slate-200 block uppercase font-bold text-[11px]">Cơ chế tác động liên hoàn:</strong>
                  <p className="leading-relaxed">{corr.correlationMechanism}</p>
                </div>

                <div className="p-2.5 rounded-xl bg-rose-950/20 border border-rose-900/30 text-xs space-y-0.5">
                  <strong className="text-rose-300 block">Tác động trước chu kỳ kinh:</strong>
                  <p className="text-rose-100">{corr.premenstrualImpact}</p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-900/30 text-xs space-y-0.5">
                <strong className="text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Kết luận điều trị & Thông điệp an tâm:</span>
                </strong>
                <p className="text-emerald-100">{corr.reassuranceNote}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Differentiate Diagnosis Table: Bone Metastasis vs Benign Myofascial Pain */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-teal-400" />
            <h3 className="text-sm sm:text-base font-bold text-white">
              Bảng Đối Chiếu Lâm Sàng: Đau Cân Cơ Lành Tính vs Lo Sợ Di Căn Xương K Vú
            </h3>
          </div>
          <p className="text-xs text-slate-400">
            Giúp bệnh nhân và gia đình hoàn toàn trút bỏ sự lo lắng về nguy cơ di căn xương:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-900/90 text-slate-300 border-b border-slate-800 font-bold">
                  <th className="p-2.5 sm:p-3">Đặc Điểm Phân Biệt</th>
                  <th className="p-2.5 sm:p-3 text-teal-300 bg-teal-950/20">Trường Hợp Của Chị (Đau Cân Cơ & Quy Chiếu)</th>
                  <th className="p-2.5 sm:p-3 text-rose-300 bg-rose-950/20">Đau Do Di Căn Xương (Ung Thư)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {differentiateDiagnosisTable.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-2.5 font-semibold text-slate-200 align-top">{row.feature}</td>
                    <td className="p-2.5 text-slate-200 bg-teal-950/10 align-top">{row.patientCondition}</td>
                    <td className="p-2.5 text-slate-400 bg-rose-950/10 align-top">{row.boneMetastasisCancer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 3: SPINAL KINETIC CHAIN & SLEEP MECHANICS */}
      {/* ========================================================================= */}
      <section id="bp-ch-3" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="space-y-1.5">
          <div className="text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 3 • Chuỗi Động Lực Trục Cột Sống
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            Từ Cổ Vai Gáy Đến Thắt Lưng: Giải Mã Bí Mật Kê Gối Khi Ngủ
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Tại sao kê gối vào lưng ngủ thấy đỡ rõ rệt nhưng sáng dậy đi lại mãi không khỏi?
          </p>
          <ReadAloudButton
            id="bp-ch-3-audio"
            title="Chương 3: Chuỗi Động Lực Trục Cột Sống & Bí Mật Kê Gối Khi Ngủ"
            text="Chương 3: Từ cổ vai gáy đến thắt lưng và giải mã bí mật kê gối khi ngủ. Cột sống là một chuỗi động lực liên hoàn. Tiền sử đau mỏi cổ vai gáy làm đầu nhô về trước, buộc cơ lưng ngực và thắt lưng phải gồng căng gấp ba lần để kéo giữ thân người. Khi kê gối dưới thắt lưng khi ngủ, gối lấp đầy khoảng hở tự nhiên, nâng đỡ độ ưỡn sinh lý giúp cơ lưng thư giãn và giải tải đĩa đệm. Tuy nhiên gối chỉ là giảm tải cơ học tạm thời khi nằm; muốn khỏi dứt điểm cần tập các bài tập cơ lõi sâu và giải quyết kích thích đau từ tử cung."
            variant="chapter"
            label="Nghe đọc Chương 3"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <h3 className="font-bold text-amber-300 text-sm flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>1. Cơ chế bù trừ cơ học từ Cổ vai gáy dội xuống Thắt lưng</span>
            </h3>
            <p className="text-xs text-slate-300">
              Đầu người nặng trung bình 4.5 – 5.5 kg. Khi đoạn cột sống cổ bị đau mỏi, thoái hóa hoặc từng phẫu thuật ACDF, cơ thể sẽ có phản xạ bù trừ: đầu hơi nhô ra trước (Forward Head). Để giữ cơ thể không bị đổ về trước, toàn bộ các dải cơ dựng sống chạy dọc từ đốt sống ngực xuống thắt lưng (Iliocostalis, Longissimus, Spinalis) buộc phải gồng căng liên tục gấp 2–3 lần bình thường.
            </p>
            <p className="text-xs text-slate-300">
              Sự quá tải bù trừ cơ học kéo dài từ tuổi 25 đã hình thành các dải xơ cứng (Taut bands) dọc hai bên cột sống, khiến cơn đau lan tỏa dọc sống lưng và xuống thắt lưng.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <h3 className="font-bold text-indigo-300 text-sm flex items-center gap-2">
              <Bed className="w-4 h-4 text-indigo-400" />
              <span>2. Tại sao kê gối ngủ thấy đỡ nhưng mãi không khỏi?</span>
            </h3>
            <div className="grid grid-cols-1 gap-2 pt-1">
              <div className="p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-900/30 space-y-0.5">
                <span className="font-bold text-emerald-400 text-xs uppercase block">Tác dụng khi kê gối (Giảm tải cơ học):</span>
                <p className="text-xs text-slate-300">Lấp đầy hõm thắt lưng tự nhiên, nâng đỡ độ ưỡn sinh lý (Lumbar Lordosis), giúp cơ dựng sống và cơ vuông thắt lưng hoàn toàn được thả lỏng khi nằm ngửa.</p>
              </div>

              <div className="p-2.5 rounded-xl bg-rose-950/20 border border-rose-900/30 space-y-0.5">
                <span className="font-bold text-rose-400 text-xs uppercase block">Lý do "Mãi không khỏi dứt điểm":</span>
                <p className="text-xs text-slate-300">Gối chỉ là biện pháp thụ động khi nằm. Khi thức dậy đi lại, trọng lực cơ thể tác động trở lại và nguồn kích thích đau quy chiếu từ tử cung (Adenomyosis/U xơ) lại tiếp tục kích hoạt vòng xoắn đau mỏi.</p>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 4: 3-PHASE REHABILITATION & MCGILL BIG 3 EXERCISES */}
      {/* ========================================================================= */}
      <section id="bp-ch-4" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="space-y-1.5">
          <div className="text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 4 • Phác Đồ Phục Hồi Toàn Diện
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            Lộ Trình Phục Hồi 3 Giai Đoạn & Bộ 3 Bài Tập Chuẩn Y Khoa (McGill Big 3)
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Giải pháp không xâm lấn kết hợp giải phóng màng cân cơ, củng cố cơ lõi sâu và kiểm soát đau tiền kinh:
          </p>
          <ReadAloudButton
            id="bp-ch-4-audio"
            title="Chương 4: Lộ Trình Phục Hồi 3 Giai Đoạn và Bài Tập McGill Big 3"
            text="Chương 4: Lộ trình phục hồi ba giai đoạn và bộ ba bài tập chuẩn y khoa McGill Big 3. Giai đoạn một tập trung giải phóng màng cân cơ Myofascial Release dọc rãnh sống lưng, chườm ấm thảo dược và thực hiện tư thế Mèo Bò Cat-Camel. Giai đoạn hai củng cố nhóm cơ lõi sâu bảo vệ cột sống bằng bài tập Chim Chó Bird-Dog và Cây cầu Glute Bridge. Giai đoạn ba kiểm soát đau chu kỳ trước kỳ kinh bằng tư thế Gác chân lên tường Legs-Up-The-Wall và kỹ thuật gối ngủ kép chuẩn y khoa."
            variant="chapter"
            label="Nghe đọc Chương 4"
          />
        </div>

        {/* Phase Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {spineRehabProtocolsData.map((prot, idx) => {
            const isSelected = idx === selectedProtocolPhase;
            return (
              <button
                key={idx}
                onClick={() => setSelectedProtocolPhase(idx)}
                className={`p-3 rounded-xl text-left text-xs font-bold transition-all flex flex-col justify-between gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-500/20 text-indigo-200 border border-indigo-500/60 shadow-md'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span className="line-clamp-1">{prot.phase}: {prot.timeframe}</span>
                <span className="text-[10px] text-slate-400 line-clamp-1 font-normal">{prot.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Phase Detailed Sheet */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <div className="space-y-1 border-b border-slate-800 pb-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono text-indigo-400 uppercase font-bold tracking-wider">
                {activeProtocol.phase} • {activeProtocol.timeframe}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-white">
              {activeProtocol.title}
            </h3>
            <p className="text-xs sm:text-sm text-teal-300 font-medium">
              ★ Mục tiêu chính: {activeProtocol.primaryGoal}
            </p>
          </div>

          {/* Interventions List */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase text-slate-400 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-indigo-400" />
              <span>Các can thiệp trị liệu trọng tâm:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {activeProtocol.interventions.map((item, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-start gap-2">
                  <span className="text-indigo-400 font-bold shrink-0">✓</span>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Home Exercises */}
          <div className="space-y-2.5 pt-1">
            <h4 className="text-xs font-bold uppercase text-amber-400 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Bài tập tự thực hiện tại nhà:</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {activeProtocol.homeExercises.map((ex, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <strong className="text-xs sm:text-sm text-indigo-200">{ex.name}</strong>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 font-mono">
                      {ex.repsAndFrequency}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300"><strong className="text-slate-400">Tác dụng:</strong> {ex.purpose}</p>
                  <p className="text-xs text-slate-300"><strong className="text-slate-400">Cách tập:</strong> {ex.howToPerform}</p>
                  <p className="text-xs text-amber-300/90 italic"><strong className="text-amber-400">Lưu ý:</strong> {ex.precautions}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ergonomic & Lifestyle Advice */}
          <div className="p-3 rounded-xl bg-slate-950/90 border-l-2 border-teal-400 text-xs text-slate-300 space-y-1">
            <strong className="text-teal-300 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Lời khuyên công thái học & Thói quen sinh hoạt:</span>
            </strong>
            <ul className="space-y-0.5 text-slate-200 pl-2">
              {activeProtocol.ergonomicAdvice.map((adv, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-teal-400 font-bold shrink-0">•</span>
                  <span>{adv}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 5: CLINICAL MEDIA ATLAS & 3D ANIMATIONS */}
      {/* ========================================================================= */}
      <section id="bp-ch-5" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="space-y-1.5">
          <div className="text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 5 • Atlas Video 3D & Mô Phỏng Giải Phẫu
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            Video 3D Giải Phẫu Thần Kinh Bì, Đường Đau Tử Cung & Bài Tập Cột Sống
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Xem trực quan các mô phỏng cơ sinh học và hướng dẫn trị liệu phục hồi chuẩn xác:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {chronicBackPainMediaItems.map((media) => (
            <div 
              key={media.id}
              onClick={() => onOpenVideoModal(media)}
              className="group cursor-pointer rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all overflow-hidden flex flex-col justify-between"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img 
                  src={media.thumbnailUrl} 
                  alt={media.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-slate-950/80 backdrop-blur-sm text-slate-200 text-[10px] font-mono px-2 py-0.5 rounded">
                  {media.duration}
                </div>
              </div>

              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-white text-sm group-hover:text-indigo-300 transition-colors line-clamp-2">
                    {media.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {media.description}
                  </p>
                </div>

                <div className="text-[11px] text-indigo-400/90 font-medium pt-2 border-t border-slate-800 flex items-center justify-between">
                  <span>{media.source}</span>
                  <span className="flex items-center gap-1">Xem video <ArrowRight className="w-3 h-3" /></span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 6: PERSONALIZED DECISION TOOL */}
      {/* ========================================================================= */}
      <section id="bp-ch-6" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="space-y-1.5">
          <div className="text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 6 • Cây Quyết Định Lâm Sàng
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            Tự Đánh Giá Phân Loại Đau Lưng & Nhận Phác Đồ Cá Thể Hóa
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Trả lời nhanh 2 câu hỏi để nhận khuyến nghị y khoa kết hợp giữa Cơ xương khớp và Phụ khoa:
          </p>
        </div>

        {/* Interactive Decision Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          
          {!isDecisionResult && currentDecisionNode && (
            <div className="space-y-3.5">
              <div className="space-y-1">
                <span className="text-xs font-mono text-indigo-400 font-bold uppercase">
                  Bước {decisionHistory.length} / 2
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {currentDecisionNode.question}
                </h3>
                <p className="text-xs text-slate-400">
                  {currentDecisionNode.explanation}
                </p>
              </div>

              <div className="space-y-2">
                {currentDecisionNode.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleDecisionOption(opt)}
                    className="w-full p-3.5 rounded-xl text-left bg-slate-950 border border-slate-800 hover:border-indigo-500/60 hover:bg-slate-900/80 transition-all text-xs sm:text-sm group flex items-start justify-between gap-3 cursor-pointer"
                  >
                    <div className="space-y-0.5">
                      <div className="font-bold text-slate-200 group-hover:text-indigo-300 transition-colors">
                        {opt.label}
                      </div>
                      <div className="text-xs text-slate-400">
                        {opt.description}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 shrink-0 mt-1 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {isDecisionResult && finalDecisionRecommendation && (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-indigo-950 text-indigo-300 border border-indigo-800">
                  {finalDecisionRecommendation.tier}
                </span>
                <h3 className="text-base sm:text-lg font-black text-white">
                  {finalDecisionRecommendation.title}
                </h3>
                <p className="text-xs text-slate-300">
                  {finalDecisionRecommendation.summary}
                </p>
              </div>

              {/* Action Steps */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase text-indigo-400 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Các bước hành động trọng tâm:</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {finalDecisionRecommendation.actionSteps.map((step: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 p-2 rounded-lg bg-slate-950 border border-slate-800/80">
                      <span className="text-indigo-400 font-bold shrink-0">✓</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Questions for Doctor */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase text-amber-400 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Câu hỏi chuẩn bị sẵn khi gặp Bác sĩ:</span>
                </h4>
                <div className="space-y-1.5">
                  {finalDecisionRecommendation.doctorQuestions.map((q: string, i: number) => (
                    <div key={i} className="p-2.5 rounded-lg bg-amber-950/20 border-l-2 border-amber-400 text-xs text-amber-100 italic">
                      {q}
                    </div>
                  ))}
                </div>
              </div>

              {/* Evidence */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                <strong className="text-teal-300">Bằng chứng y học thực chứng: </strong>
                {finalDecisionRecommendation.evidenceBasis}
              </div>

              <button
                onClick={handleResetDecision}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Thực hiện lại đánh giá</span>
              </button>
            </div>
          )}

        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 7: SLEEP ERGONOMICS & ANTI-INFLAMMATORY NUTRITION */}
      {/* ========================================================================= */}
      <section id="bp-ch-7" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="space-y-1.5">
          <div className="text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 7 • Công Thái Học & Dinh Dưỡng
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
            Kỹ Thuật Kê Gối Kép Khi Ngủ & Dinh Dưỡng Giảm Viêm Tiền Kinh
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Tối ưu hóa môi trường nghỉ ngơi ban đêm và bổ sung vi chất giúp giãn cơ, dịu thần kinh:
          </p>
          <ReadAloudButton
            id="bp-ch-7-audio"
            title="Chương 7: Kỹ Thuật Kê Gối Kép Khi Ngủ & Dinh Dưỡng Giảm Viêm"
            text="Chương 7: Kỹ thuật kê gối kép khi ngủ và dinh dưỡng giảm viêm tiền kinh nguyệt. Khi nằm ngửa nên dùng một gối mỏng ba đến năm xăng ti mét dưới thắt lưng kết hợp một gối ôm dưới khoeo chân. Khi nằm nghiêng nên kẹp một gối mềm giữa hai đầu gối. Về dinh dưỡng, bổ sung Magie Glycinate 300 đến 400 miligam mỗi ngày, Vitamin B6 và Omega-3 giúp giảm tổng hợp Prostaglandin gây viêm và co thắt tử cung."
            variant="chapter"
            label="Nghe đọc Chương 7"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h3 className="font-bold text-indigo-300 text-sm flex items-center gap-2">
              <Bed className="w-4 h-4 text-indigo-400" />
              <span>1. Kỹ thuật Kê Gối Kép chuẩn Y Khoa khi ngủ</span>
            </h3>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-300 text-xs">
              <li><strong>Tư thế nằm ngửa:</strong> Đặt 1 gối cao su non mỏng (3–5cm) dưới hõm thắt lưng để nâng đỡ độ ưỡn sinh lý + Đặt 1 gối ôm vừa dưới khoeo chân (gập gối 15-20 độ) để giải phóng sức căng cơ thắt lưng chậu.</li>
              <li><strong>Tư thế nằm nghiêng:</strong> Co nhẹ chân và kẹp 1 chiếc gối mềm vừa vặn giữa 2 đầu gối để giữ khung chậu và cột sống thắt lưng luôn thẳng trục.</li>
              <li><strong>Tránh nằm sấp:</strong> Tư thế nằm sấp làm tăng độ ưỡn thắt lưng quá mức và gây vẹo cổ gáy.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h3 className="font-bold text-teal-300 text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>2. Bộ ba vi chất giảm viêm & giãn cơ</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-0.5">
                <span className="font-bold text-indigo-400 text-xs block">Magie Glycinate</span>
                <span className="text-[10px] text-teal-300 font-mono">300 – 400 mg/ngày</span>
                <p className="text-[11px] text-slate-400">Thư giãn cơ trơn tử cung, chống co thắt cơ dựng sống và cải thiện giấc ngủ.</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-0.5">
                <span className="font-bold text-teal-400 text-xs block">Vitamin B6 + B-Complex</span>
                <span className="text-[10px] text-teal-300 font-mono">50 mg/ngày</span>
                <p className="text-[11px] text-slate-400">Ổn định dẫn truyền thần kinh bì lưng và hỗ trợ cân bằng nội tiết.</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-0.5">
                <span className="font-bold text-amber-400 text-xs block">Omega-3 EPA/DHA</span>
                <span className="text-[10px] text-teal-300 font-mono">1000 – 2000 mg/ngày</span>
                <p className="text-[11px] text-slate-400">Ức chế tổng hợp Prostaglandin F2a gây đau tiền kinh nguyệt.</p>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* References Section */}
      <ReferencesSection
        references={chronicBackPainReferences}
        diseaseTitle="Đau Lưng Kinh Niên & Hội Chứng Thần Kinh Cân Cơ"
      />

    </article>
  );
};
