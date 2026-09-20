import React, { useState } from 'react';
import { InteractiveCaseViewer } from './InteractiveCaseViewer';
import { BreastCancerSafetySection } from './BreastCancerSafetySection';
import { MenstrualCycleTrackerSection } from './MenstrualCycleTrackerSection';
import { ReadAloudButton } from './ReadAloudButton';
import { MedicalDisclaimerBanner } from './MedicalDisclaimerBanner';
import { ReferencesSection } from './ReferencesSection';
import { uterineTamoxifenReferences } from '../data/medicalReferencesData';
import { tamoxifenTreatmentOptions, tamoxifenMechanisms } from '../data/tamoxifenTreatmentData';
import { tamoxifenMediaItems } from '../data/tamoxifenMediaData';
import { tamoxifenClinicalDecisionTree } from '../data/tamoxifenDecisionData';
import type { MediaItem } from '../types/medical';
import { 
  HeartHandshake, 
  Sparkles, 
  Clock, 
  Activity, 
  AlertTriangle, 
  AlertCircle,
  HelpCircle, 
  ShieldCheck, 
  Play, 
  RotateCcw, 
  BookOpen, 
  ChevronRight, 
  Check,
  ShieldAlert,
  Calendar,
  ArrowRight
} from 'lucide-react';

interface BookLayoutArticleProps {
  onOpenVideoModal: (media: MediaItem) => void;
}

export const BookLayoutArticle: React.FC<BookLayoutArticleProps> = ({ onOpenVideoModal }) => {
  // Decision Tool States
  const [decisionHistory, setDecisionHistory] = useState<string[]>(['root']);
  const [decisionAnswers, setDecisionAnswers] = useState<string[]>([]);
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>('laparoscopic-hysterectomy');

  // Decision Tool Handler
  const currentDecisionNodeId = decisionHistory[decisionHistory.length - 1];
  const currentDecisionNode = tamoxifenClinicalDecisionTree[currentDecisionNodeId];
  const isDecisionResult = currentDecisionNodeId === 'result';

  let finalDecisionRecommendation: any = null;
  if (isDecisionResult) {
    const parentId = decisionHistory[decisionHistory.length - 2];
    const parentNode = tamoxifenClinicalDecisionTree[parentId];
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

  const activeTreatment = tamoxifenTreatmentOptions.find(t => t.id === selectedTreatmentId) || tamoxifenTreatmentOptions[0];

  return (
    <article className="w-full bg-slate-950 text-slate-200 font-sans pb-32">

      {/* Medical Disclaimer Banner */}
      <MedicalDisclaimerBanner
        specialty="Sản Phụ Khoa & Ung Bướu Phụ Khoa"
        primaryGuideline="ACOG Practice Bulletin No. 232, NCCN Uterine Neoplasms, ASCO EET Guidelines"
        lastUpdated="Tháng 9/2026"
      />
      
      {/* ========================================================================= */}
      {/* BOOK COVER & PREFACE: Monograph for Post-Tamoxifen Patient */}
      {/* ========================================================================= */}
      <header className="w-full max-w-5xl sm:max-w-6xl mx-auto pt-6 pb-6 px-4 sm:px-6 space-y-4">
        
        {/* Book Series Label */}
        <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold tracking-wider uppercase">
          <BookOpen className="w-4 h-4" />
          <span>Chuyên Khảo Y Khoa Cá Thể Hóa • Tháng 09/2026</span>
        </div>

        {/* Book Main Title & Unified Header Container */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
            Bảo Vệ Nội Mạc Tử Cung Sau 5 Năm Tamoxifen (K Vú)
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Cẩm nang giải mã toàn diện hồ sơ bệnh án, cơ chế "Nghịch lý Tamoxifen", căn nguyên gây rong kinh & 4 phác đồ tối ưu hóa sức khỏe cho phụ nữ sau điều trị ung thư vú.
          </p>

          {/* Unified Preface & Status Panel */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <ReadAloudButton
                id="monograph-full"
                title="Bảo Vệ Nội Mạc Tử Cung Sau 5 Năm Tamoxifen"
                text="Bảo vệ nội mạc tử cung sau 5 năm Tamoxifen. Cẩm nang giải mã toàn diện hồ sơ bệnh án, cơ chế nghịch lý Tamoxifen, căn nguyên gây rong kinh và 4 phác đồ điều trị tối ưu. Kết quả giải phẫu bệnh tại bệnh viện Hùng Vương ngày 15 tháng 9 năm 2026 kết luận tăng sản điển hình khu trú, đây là thương tổn hoàn toàn lành tính, nguy cơ ung thư dưới một phần trăm, tuyệt đối không phải ung thư vú di căn và không phải ung thư nội mạc tử cung."
                variant="hero"
                label="Bấm để nghe đọc cẩm nang"
                durationEstimate="~12 phút"
              />
              <div className="flex items-center gap-1.5 text-teal-300 font-medium text-xs">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>ACOG • ASCO • NCCN • FIGO</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-emerald-100 text-xs sm:text-sm leading-relaxed space-y-1">
              <span className="font-bold flex items-center gap-1.5 text-emerald-300 text-xs sm:text-sm">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thông điệp quan trọng nhất từ Bác sĩ:</span>
              </span>
              <p>
                Kết quả Giải Phẫu Bệnh tại BV Hùng Vương (15/09/2026) kết luận <strong>"TĂNG SẢN ĐIỂN HÌNH KHU TRÚ"</strong> – Thương tổn <strong>HOÀN TOÀN LÀNH TÍNH</strong> (nguy cơ ung thư &lt; 1%), tuyệt đối <strong>KHÔNG PHẢI</strong> ung thư vú di căn và <strong>KHÔNG PHẢI</strong> ung thư nội mạc tử cung.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>Thời lượng: ~12 phút</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>Hồ sơ y khoa: Tháng 09/2026</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* CHAPTER 1: THE TAMOXIFEN PARADOX (SERM MECHANISM) */}
      {/* ========================================================================= */}
      <section id="chapter-1" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
              Chương 1 • Nền Tảng Y Học
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Giải Mã "Nghịch Lý Tamoxifen": Tại Sao Chặn Ở Vú Lại Tác Động Tử Cung?
            </h2>
          </div>
          <ReadAloudButton
            id="chapter-1-audio"
            title="Chương 1: Nghịch Lý Tamoxifen"
            text="Chương 1: Giải mã Nghịch lý Tamoxifen. Tại sao chặn ở vú lại tác động đến tử cung? Tamoxifen thuộc nhóm SERM, chất điều hòa thụ thể estrogen chọn lọc. Tại mô tuyến vú, thuốc khóa chặt ổ khóa ngăn tế bào ung thư phát triển. Tại lòng tử cung, thuốc lại kích thích nhẹ gây phù nề niêm mạc và giãn các ống tuyến."
            variant="chapter"
          />
        </div>

        {/* Storytelling & Scientific Mechanism */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          <p>
            Để hiểu tại sao sau 5 năm uống thuốc lại xuất hiện dày niêm mạc và rong kinh, chúng ta cần tìm hiểu bản chất của phân tử Tamoxifen – một loại thuốc thuộc nhóm <strong className="text-teal-300">SERM (Selective Estrogen Receptor Modulator - Chất điều hòa thụ thể Estrogen chọn lọc)</strong>.
          </p>

          {/* Simple Everyday Analogy */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border-l-2 border-teal-500 text-slate-200 text-xs sm:text-sm space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-teal-300">
              <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Cơ chế trực quan: "Chiếc chìa khóa 2 mặt"</span>
            </div>
            <p>
              Hãy hình dung thụ thể Estrogen như những ổ khóa trên tế bào. Tamoxifen là chiếc chìa khóa đặc biệt:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-1 text-slate-300">
              <li><strong className="text-rose-300">Tại mô tuyến vú:</strong> Thuốc cắm vào ổ khóa và <em>KHÓA CHẶT</em> lại, ngăn không cho Estrogen tiếp cận nuôi tế bào K vú (tác dụng đối kháng - Antagonist).</li>
              <li><strong className="text-amber-300">Tại lòng tử cung và xương:</strong> Khi cắm vào ổ khóa, thuốc lại vô tình <em>VẶN MỞ HÉ CỬA</em>, tạo ra tác động kích thích nhẹ tương tự Estrogen (tác dụng chủ vận một phần - Partial Agonist).</li>
            </ul>
          </div>

          {/* Detailed Q&A Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            {tamoxifenMechanisms.map((mech, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-1">
                <h3 className="font-bold text-teal-300 text-xs sm:text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-teal-950 text-teal-400 text-xs flex items-center justify-center font-mono shrink-0">
                    {idx + 1}
                  </span>
                  {mech.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed pl-7">
                  {mech.content}
                </p>
              </div>
            ))}
          </div>

          {/* The Stop Effect in Jan 2026 vs Sep 2026 Paradox */}
          <div className="pt-2 space-y-2.5">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-400" />
              <span>Nghịch Lý Y Khoa: Vì sao ngưng Tamoxifen từ tháng 1, đúng ra triệu chứng phải giảm dần, đằng này đến tháng 9 mới bất thường và ngày càng tăng?</span>
            </h3>
            
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5 text-xs sm:text-sm text-slate-300">
              <p>
                Đây là thắc mắc rất phổ biến và hoàn toàn dễ hiểu của chị: <em>Nếu Tamoxifen là tác nhân kích thích tử cung, thì khi dừng thuốc từ tháng 01/2026, lẽ ra tử cung phải hồi phục và các triệu chứng phải giảm dần; tại sao đến tận tháng 9/2026 (sau 8-9 tháng) tình trạng bất thường lại rộ lên và ngày càng tăng?</em>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                  <div className="font-bold text-teal-300 text-xs flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-teal-950 text-teal-400 flex items-center justify-center text-[10px] font-mono">1</span>
                    <span>Hiện Tượng "Bung Ức Chế"</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Suốt 5 năm, Tamoxifen chiếm giữ thụ thể Estrogen ở trạng thái "bình ổn cưỡng bức". Khi ngưng thuốc tháng 1/2026, thụ thể được giải phóng hoàn toàn, nhạy cảm hơn trước hormone nội sinh.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                  <div className="font-bold text-amber-300 text-xs flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-amber-950 text-amber-400 flex items-center justify-center text-[10px] font-mono">2</span>
                    <span>Độ Trễ Tích Tụ (Lag Phase: 6-9 tháng)</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Ở tuổi 45, buồng trứng có chu kỳ không phóng noãn (tiết Estrogen dồi dào nhưng thiếu Progesterone đối kháng). Niêm mạc âm thầm dày lên qua 8 tháng tích tụ, đến tháng 8-9 mới vượt ngưỡng vi mạch và vỡ rỉ máu ồ ạt.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                  <div className="font-bold text-rose-300 text-xs flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-rose-950 text-rose-400 flex items-center justify-center text-[10px] font-mono">3</span>
                    <span>U Xơ 45mm & Adenomyosis</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Khi lớp niêm mạc bong tróc rải rác, khối nhân xơ 45mm và ổ Adenomyosis làm thành cơ tử cung xơ cứng, không thể co bóp siết mạch máu để tự cầm máu, khiến máu ra dai dẳng và tăng dần vào tháng 9.
                  </p>
                </div>
              </div>

              <p className="text-emerald-300 text-xs font-medium pt-0.5">
                ✓ <strong>Khẳng định từ chuyên gia:</strong> Sự xuất hiện triệu chứng vào tháng 9/2026 là quy luật diễn tiến tự nhiên của độ trễ mô học và nội tiết tiền mãn kinh, khẳng định 100% không phải do ung thư tái phát.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 2: INTERACTIVE CASE RECORD INSPECTOR */}
      {/* ========================================================================= */}
      <section id="chapter-2" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
              Chương 2 • Phân Tích Thực Tế
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Giải Mã Trực Tiếp 4 Hồ Sơ Bệnh Án & Kết Quả Giải Phẫu Bệnh
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Dưới đây là công cụ phân tích tương tác trực quan giải thích cặn kẽ từng dòng chữ, thuật ngữ trong phiếu kết quả của chị.
            </p>
          </div>
          <ReadAloudButton
            id="chapter-2-audio"
            title="Chương 2: Giải Mã Hồ Sơ Bệnh Án & GPB"
            text="Chương 2: Giải mã trực tiếp 4 hồ sơ bệnh án và kết quả giải phẫu bệnh. Kết quả giải phẫu bệnh tại bệnh viện Hùng Vương ngày 15 tháng 9 năm 2026 xác nhận tăng sản điển hình khu trú nội mạc tử cung, hoàn toàn lành tính. Thủ thuật Pipelle được thực hiện vào ngày 17 của chu kỳ khi niêm mạc dày sinh lý tối đa."
            variant="chapter"
          />
        </div>

        {/* Interactive Case Viewer Component */}
        <InteractiveCaseViewer />

        {/* Deep Dive: Typical vs Atypical Hyperplasia Comparison Table */}
        <div className="pt-4 space-y-2.5">
          <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-teal-400" />
            <span>Bảng So Sánh Y Học: "Tăng Sản Điển Hình" vs "Tăng Sản Không Điển Hình"</span>
          </h3>
          <p className="text-xs text-slate-300">
            Nhiều bệnh nhân khi đọc chữ "Tăng sản" thường lo sợ đây là ung thư. Bảng đối chiếu dưới đây theo chuẩn Tổ chức Y tế Thế giới (WHO) sẽ giúp chị nhìn rõ sự khác biệt tuyệt đối:
          </p>

          {/* Mobile View: Consolidated 2-Column Responsive Layout (< sm) */}
          <div className="block sm:hidden rounded-xl border border-slate-800 bg-slate-950 p-3 space-y-3">
            {[
              {
                feature: 'Hình thái nhân tế bào',
                typical: 'Nhân tế bào bình thường, đồng đều, không dị dạng',
                atypical: 'Nhân quái dị, đa hình thái, mất phân cực'
              },
              {
                feature: 'Nguy cơ ác tính (Ung thư)',
                typical: '< 1% đến 3% (Cực kỳ thấp - Lành tính)',
                atypical: '25% đến 40% (Tổn thương tiền ung thư)'
              },
              {
                feature: 'Ảnh hưởng từ Tamoxifen',
                typical: 'Dấu ấn mô học kinh điển vô hại (tuyến giãn nang)',
                atypical: 'Hiếm gặp hơn, cần xử lý phẫu thuật triệt để'
              },
              {
                feature: 'Hướng điều trị y khoa',
                typical: 'Xử lý cầm máu cơ học, nội soi hoặc phẫu thuật bảo tồn buồng trứng',
                atypical: 'Bắt buộc phẫu thuật cắt tử cung toàn phần'
              }
            ].map((row, idx) => (
              <div key={idx} className="border-b border-slate-800/80 pb-3 last:border-b-0 last:pb-0 space-y-1.5 text-xs sm:text-sm">
                <div className="font-bold text-white uppercase tracking-wide text-xs">
                  {idx + 1}. {row.feature}
                </div>
                <div className="p-2 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-emerald-200">
                  <div className="text-[11px] font-bold uppercase text-emerald-400">✓ CỦA CHỊ: Tăng Sản Điển Hình:</div>
                  <div className="font-medium text-xs mt-0.5">{row.typical}</div>
                </div>
                <div className="p-2 rounded-lg bg-rose-950/20 border border-rose-900/30 text-rose-300">
                  <div className="text-[11px] font-bold uppercase text-rose-400">⚠ Tăng Sản Không Điển Hình (Atypical):</div>
                  <div className="text-xs mt-0.5">{row.atypical}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop / Tablet View: Full 3-Column Table (>= sm) */}
          <div className="hidden sm:block overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900/90 text-slate-300 font-bold border-b border-slate-800">
                <tr>
                  <th className="p-2.5 sm:p-3">Đặc Điểm So Sánh</th>
                  <th className="p-2.5 sm:p-3 text-emerald-400 bg-emerald-950/20">KẾT QUẢ CỦA CHỊ: Tăng Sản Điển Hình (Typical / Non-atypical)</th>
                  <th className="p-2.5 sm:p-3 text-rose-400 bg-rose-950/20">Tăng Sản Không Điển Hình (Atypical / EIN)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-950">
                <tr>
                  <td className="p-2.5 sm:p-3 font-semibold text-slate-400">Hình thái nhân tế bào</td>
                  <td className="p-2.5 sm:p-3 text-emerald-300 font-medium">Nhân tế bào bình thường, đồng đều, không dị dạng</td>
                  <td className="p-2.5 sm:p-3 text-rose-300">Nhân quái dị, đa hình thái, mất phân cực</td>
                </tr>
                <tr>
                  <td className="p-2.5 sm:p-3 font-semibold text-slate-400">Nguy cơ ác tính (Ung thư)</td>
                  <td className="p-2.5 sm:p-3 text-emerald-300 font-bold">&lt; 1% đến 3% (Cực kỳ thấp - Lành tính)</td>
                  <td className="p-2.5 sm:p-3 text-rose-300 font-bold">25% đến 40% (Tổn thương tiền ung thư)</td>
                </tr>
                <tr>
                  <td className="p-2.5 sm:p-3 font-semibold text-slate-400">Ảnh hưởng từ Tamoxifen</td>
                  <td className="p-2.5 sm:p-3 text-slate-300">Dấu ấn mô học kinh điển vô hại (tuyến giãn nang)</td>
                  <td className="p-2.5 sm:p-3 text-slate-300">Hiếm gặp hơn, cần xử lý phẫu thuật triệt để</td>
                </tr>
                <tr>
                  <td className="p-2.5 sm:p-3 font-semibold text-slate-400">Hướng điều trị y khoa</td>
                  <td className="p-2.5 sm:p-3 text-slate-300 font-medium">Xử lý cầm máu cơ học, nội soi hoặc phẫu thuật bảo tồn buồng trứng</td>
                  <td className="p-2.5 sm:p-3 text-rose-200">Bắt buộc phẫu thuật cắt tử cung toàn phần</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Real-World Pathology Correlation Note from BV Tu Du */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-teal-500/30 space-y-2 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2 font-bold text-teal-300 text-xs sm:text-sm">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Đối chiếu thực tế lâm sàng (Phiếu GPB BV Từ Dũ): "TĂNG SẢN ĐIỂN HÌNH = WITHOUT ATYPIA"</span>
            </div>
            <p className="text-xs">
              Phiếu Giải phẫu bệnh thực tế tại các bệnh viện đầu ngành như <strong>BV Từ Dũ</strong> in rõ ràng: <strong className="text-white font-mono bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">TĂNG SẢN ĐIỂN HÌNH NỘI MẠC TỬ CUNG (HYPERPLASIA WITHOUT ATYPIA) KHU TRÚ</strong>. Đây là minh chứng vàng khẳng định 100% kết quả tại BV Hùng Vương của chị thuộc nhóm tổn thương hoàn toàn lành tính.
            </p>
            <div className="p-2.5 rounded-lg bg-amber-950/20 border-l-2 border-amber-400 text-amber-200 text-xs space-y-1">
              <strong className="text-amber-300">Về cảnh báo "Nếu không điều trị có nguy cơ tiến triển thành ung thư":</strong>
              <p>
                Cảnh báo này của bác sĩ dành cho những trường hợp <em>bỏ mặc tổn thương nhiều năm không can thiệp</em>, khiến tế bào dưới tác động của Estrogen không đối kháng kéo dài có thể tích lũy đột biến (1-3%). Việc chị đã <strong>sinh thiết phát hiện sớm và chủ động có kế hoạch xử lý</strong> (đặc biệt là phẫu thuật nội soi cắt tử cung bảo tồn buồng trứng) sẽ <strong>chặn đứng 100% nguy cơ này, xóa bỏ vĩnh viễn nỗi lo ung thư tử cung!</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Deep Dive: Menstrual Cycle Tracker & Clinical Correlation Section */}
        <MenstrualCycleTrackerSection />

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 3: ROOT CAUSE OF CHRONIC MENORRHAGIA */}
      {/* ========================================================================= */}
      <section id="chapter-3" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
              Chương 3 • Căn Nguyên Bệnh Lý
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Đi Tìm Thủ Phạm Gây Rong Kinh Kéo Dài: "Bộ Tứ Tác Động"
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Rong kinh nhiều tháng qua không đơn thuần chỉ do một yếu tố duy nhất, mà là sự cộng hưởng của 4 yếu tố cùng lúc:
            </p>
          </div>
          <ReadAloudButton
            id="chapter-3-audio"
            title="Chương 3: Căn Nguyên Gây Rong Kinh"
            text="Chương 3: Đi tìm thủ phạm gây rong kinh kéo dài. Bộ tứ tác động bao gồm: Một là mảng tăng sản tuyến do Tamoxifen. Hai là Lạc tuyến trong cơ tử cung Adenomyosis làm cơ không co bóp cầm máu được. Ba là khối u cơ thành sau 45 mi-li-mét. Bốn là giai đoạn tiền mãn kinh ở độ tuổi 45."
            variant="chapter"
          />
        </div>

        {/* 4 Contributing Factors Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-teal-300 text-xs sm:text-sm">
              <span className="w-5 h-5 rounded-full bg-teal-950 text-teal-400 flex items-center justify-center text-xs font-mono shrink-0">1</span>
              <span>Mảng Tăng Sản Tuyến Do Tamoxifen</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Các ống tuyến phình to dạng bọc và mạng lưới mao mạch dưới niêm mạc rất mỏng manh, khi lớp niêm mạc bong tróc không hoàn toàn sẽ liên tục rỉ máu ra ngoài.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-rose-300 text-xs sm:text-sm">
              <span className="w-5 h-5 rounded-full bg-rose-950 text-rose-400 flex items-center justify-center text-xs font-mono shrink-0">2</span>
              <span>Lạc Tuyến Cơ (Adenomyosis)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mô niêm mạc xâm lấn vào thành sau làm cơ tử cung dày cộm. Lớp cơ này bị xơ hóa nên <strong>không thể co bóp siết chặt các mạch máu</strong> để tự cầm máu.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-amber-300 text-xs sm:text-sm">
              <span className="w-5 h-5 rounded-full bg-amber-950 text-amber-400 flex items-center justify-center text-xs font-mono shrink-0">3</span>
              <span>U Xơ Thành Sau 41x45mm</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Khối nhân xơ kích thước 4cm ở thành sau làm tăng đáng kể diện tích bề mặt lòng tử cung và gây ứ trệ tuần hoàn tĩnh mạch, khiến lượng máu kinh chảy ra nhiều hơn.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-purple-300 text-xs sm:text-sm">
              <span className="w-5 h-5 rounded-full bg-purple-950 text-purple-400 flex items-center justify-center text-xs font-mono shrink-0">4</span>
              <span>Độ Tuổi 45 (Tiền Mãn Kinh)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Ở tuổi 45, buồng trứng có những chu kỳ không rụng trứng. Cơ thể có Estrogen nhưng lại thiếu hụt Progesterone để làm bong niêm mạc đồng loạt.
            </p>
          </div>

        </div>

        {/* Clinical Impact: Why Action is Needed */}
        <div className="p-3.5 rounded-xl bg-slate-900/90 border-l-2 border-rose-500 text-slate-300 text-xs sm:text-sm space-y-1.5">
          <div className="font-bold text-rose-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>Tại sao cần giải quyết dứt điểm tình trạng rong kinh này?</span>
          </div>
          <p>
            Mặc dù kết quả giải phẫu bệnh là <strong>LÀNH TÍNH</strong>, nhưng nếu để rong kinh kéo dài từ tháng này qua tháng khác, chị sẽ bị <strong>thiếu máu mạn tính</strong>. Thiếu máu làm suy giảm tế bào hồng cầu, gây hoa mắt, chóng mặt, tim đập nhanh khi leo cầu thang, rụng tóc và làm cơ thể suy kiệt sau 5 năm đã trải qua điều trị ung thư. Do đó, việc chủ động can thiệp cầm máu là vô cùng cần thiết!
          </p>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 4: COMPREHENSIVE 4 TREATMENT STRATEGIES */}
      {/* ========================================================================= */}
      <section id="chapter-4" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="space-y-1">
          <div className="text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 4 • Phác Đồ Điều Trị
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            So Sánh 4 Hướng Điều Trị Tối Ưu Cho Bệnh Nhân Tiền Sử K Vú
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Nguyên tắc cốt lõi: <em>Bảo vệ an toàn tuyệt đối cho tuyến vú, dứt điểm triệu chứng mất máu và nâng cao chất lượng cuộc sống.</em>
          </p>
        </div>

        {/* Treatment Option Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {tamoxifenTreatmentOptions.map((opt) => {
            const isSelected = opt.id === selectedTreatmentId;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedTreatmentId(opt.id)}
                className={`p-2.5 sm:p-3 rounded-xl text-left text-xs font-bold transition-all flex flex-col justify-between gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-teal-500/20 text-teal-200 border border-teal-500/50 shadow-md'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-slate-800'
                }`}
              >
                <span className="line-clamp-2">{opt.name.split('-')[0]}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full w-fit ${
                  opt.id === 'laparoscopic-hysterectomy'
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                    : 'bg-slate-800 text-slate-300'
                }`}>
                  {opt.suitabilityScore}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Treatment Card Detail */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          
          <div className="space-y-1 border-b border-slate-800 pb-3">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-mono text-teal-400 uppercase font-bold tracking-wider">
                Chi Tiết Phác Đồ Lựa Chọn
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-teal-950 text-teal-300 border border-teal-800">
                {activeTreatment.suitabilityScore}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-white">
              {activeTreatment.name}
            </h3>
            <p className="text-xs text-slate-400 italic">
              {activeTreatment.subtitle}
            </p>
          </div>

          {/* Layman Analogy */}
          {activeTreatment.laymanAnalogy && (
            <div className="p-3 rounded-xl bg-slate-950/90 border-l-2 border-teal-400 text-xs text-slate-300 space-y-1">
              <span className="font-bold text-teal-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Minh họa trực quan:</span>
              </span>
              <p className="text-slate-200">{activeTreatment.laymanAnalogy}</p>
            </div>
          )}

          {/* Mechanism */}
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase text-slate-400 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-teal-400" />
              <span>Cơ chế thực hiện:</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeTreatment.mechanism}
            </p>
          </div>

          {/* Pros & Cons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="space-y-1.5 p-3 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
              <div className="font-bold text-xs uppercase text-emerald-400 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Ưu điểm vượt trội:</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-300">
                {activeTreatment.pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold shrink-0">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-1.5 p-3 rounded-xl bg-amber-950/20 border border-amber-900/30">
              <div className="font-bold text-xs uppercase text-amber-400 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>Điểm cần lưu ý & Cân nhắc:</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-300">
                {activeTreatment.cons.map((c, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold shrink-0">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Safety for Breast Cancer */}
          <div className="p-3 rounded-xl bg-teal-950/30 border-l-2 border-teal-400 text-xs sm:text-sm space-y-1">
            <span className="font-bold text-teal-300 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Độ an toàn đối với tiền sử Ung Thư Vú:</span>
            </span>
            <p className="text-slate-200">{activeTreatment.breastCancerSafety}</p>
          </div>

          {/* Recovery & Clinical Recommendation */}
          <div className="text-xs text-slate-300 space-y-1 bg-slate-950/80 p-3 rounded-xl border border-slate-800">
            <div><strong className="text-slate-200">Hồi phục & Nằm viện:</strong> {activeTreatment.surgicalRecovery}</div>
            <div className="pt-0.5"><strong className="text-teal-400">Khuyến nghị chuyên gia:</strong> {activeTreatment.recommendationNote}</div>
          </div>

        </div>

        {/* Dedicated Oncology Safety & Recurrence Cross-Talk Matrix */}
        <div className="pt-4 space-y-2.5">
          <div className="space-y-1">
            <span className="text-xs font-mono text-rose-400 uppercase font-bold tracking-wider">
              Đánh Giá Dược Lâm Sàng Ung Bướu (ASCO / NCCN)
            </span>
            <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-400" />
              <span>Ma Trận Đánh Giá Nguy Cơ Ảnh Hưởng Ngược Lên Ung Thư Vú</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mọi giải pháp điều trị phụ khoa, thuốc cầm máu hay thực phẩm bổ sung đều được đối chiếu chặt chẽ với nguy cơ tái phát K vú theo các thử nghiệm lâm sàng quốc tế:
            </p>
          </div>

          <BreastCancerSafetySection />
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 5: CLINICAL MEDIA ATLAS & VIDEO SURGERY */}
      {/* ========================================================================= */}
      <section id="chapter-5" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="space-y-1">
          <div className="text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 5 • Atlas Video Lâm Sàng
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Video Thủ Thuật & Mô Phỏng Phẫu Thuật Thực Tế
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Xem trực quan các kỹ thuật can thiệp thực tế chuẩn quốc tế giúp chị hoàn toàn an tâm và hình dung rõ ràng các bước thực hiện.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {tamoxifenMediaItems.map((media) => (
            <div 
              key={media.id}
              onClick={() => onOpenVideoModal(media)}
              className="group cursor-pointer rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-500/50 transition-all overflow-hidden flex flex-col justify-between"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img 
                  src={media.thumbnailUrl} 
                  alt={media.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-teal-500/90 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-slate-950/80 backdrop-blur-sm text-slate-200 text-[10px] font-mono px-2 py-0.5 rounded">
                  {media.duration}
                </div>
              </div>

              <div className="p-3.5 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-white text-xs sm:text-sm group-hover:text-teal-300 transition-colors line-clamp-2">
                    {media.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {media.description}
                  </p>
                </div>

                <div className="text-[11px] text-teal-400/90 font-medium pt-2 border-t border-slate-800 flex items-center justify-between">
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
      <section id="chapter-6" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="space-y-1">
          <div className="text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 6 • Cây Quyết Định Cá Thể Hóa
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Tự Đánh Giá & Chọn Hướng Đi Phù Hợp Nhất Cho Chị
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Trả lời nhanh 2 câu hỏi để nhận phác đồ khuyến nghị y khoa cá thể hóa và danh sách câu hỏi cần trao đổi với Bác sĩ:
          </p>
        </div>

        {/* Interactive Decision Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          
          {!isDecisionResult && currentDecisionNode && (
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono text-teal-400 font-bold uppercase">
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
                    className="w-full p-3.5 rounded-xl text-left bg-slate-950 border border-slate-800 hover:border-teal-500/60 hover:bg-slate-900/80 transition-all text-xs sm:text-sm group flex items-start justify-between gap-3 cursor-pointer"
                  >
                    <div className="space-y-0.5">
                      <div className="font-bold text-slate-200 group-hover:text-teal-300 transition-colors">
                        {opt.label}
                      </div>
                      <div className="text-xs text-slate-400">
                        {opt.description}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-teal-400 shrink-0 mt-1 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {isDecisionResult && finalDecisionRecommendation && (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-teal-950 text-teal-300 border border-teal-800">
                  {finalDecisionRecommendation.tier}
                </span>
                <h3 className="text-base sm:text-lg font-black text-white">
                  {finalDecisionRecommendation.title}
                </h3>
              </div>

              {/* Action Steps */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase text-slate-400 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-teal-400" />
                  <span>Các bước hành động cụ thể:</span>
                </h4>
                <ul className="space-y-1 text-xs text-slate-300">
                  {finalDecisionRecommendation.actionSteps.map((step: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 p-2 rounded-lg bg-slate-950 border border-slate-800/80">
                      <span className="text-teal-400 font-bold shrink-0">✓</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Questions for the Doctor */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase text-amber-400 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Câu hỏi chuẩn bị sẵn khi gặp Bác sĩ điều trị:</span>
                </h4>
                <div className="space-y-1.5">
                  {finalDecisionRecommendation.doctorQuestions.map((q: string, i: number) => (
                    <div key={i} className="p-2.5 rounded-lg bg-amber-950/20 border-l-2 border-amber-400 text-xs text-amber-100 italic">
                      {q}
                    </div>
                  ))}
                </div>
              </div>

              {/* Oncology Safety Note */}
              <div className="p-3 rounded-xl bg-teal-950/40 border-l-2 border-teal-400 text-xs text-teal-200">
                <strong className="text-teal-300">Lưu ý chuyên khoa Ung Bướu: </strong>
                {finalDecisionRecommendation.oncologyNote}
              </div>

              <button
                onClick={handleResetDecision}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Thực hiện lại đánh giá</span>
              </button>
            </div>
          )}

        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 7: LIFESTYLE, RECOVERY & FOLLOW-UP SCHEDULE */}
      {/* ========================================================================= */}
      <section id="chapter-7" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="space-y-1">
          <div className="text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 7 • Lối Sống & Tái Khám
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Chăm Sóc Toàn Diện Sau 5 Năm Tamoxifen & Lịch Tái Khám Vàng
          </h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h3 className="font-bold text-teal-300 text-sm sm:text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>1. Chế độ dinh dưỡng phục hồi máu & bảo vệ xương khớp</span>
            </h3>
            <p>
              Sau 5 năm Tamoxifen và nhiều tháng rong kinh, cơ thể cần được bổ sung dinh dưỡng có chọn lọc:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-300">
              <li><strong>Bù đắp sắt hữu cơ:</strong> Tăng cường thịt bò nạc, ức gà, lòng đỏ trứng, rau bina (chân vịt), củ dền, mộc nhĩ và hạt bí. Uống kèm nước cam hoặc ổi tươi (Vitamin C) để tăng hấp thu sắt gấp 3 lần.</li>
              <li><strong>Bảo vệ mật độ xương:</strong> Bổ sung Canxi hữu cơ (từ sữa chua không đường, cá nhỏ ăn cả xương, mè đen) kết hợp Vitamin D3 + K2.</li>
              <li><strong>Tránh thực phẩm kích thích nội tiết bừa bãi:</strong> Không tự ý uống các loại viên uống mầm đậu nành đậm đặc hay sâm tố nữ bổ sung estrogen khi chưa có ý kiến của Bác sĩ Ung bướu.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h3 className="font-bold text-teal-300 text-sm sm:text-base flex items-center gap-2">
              <Calendar className="w-4 h-4 text-teal-400" />
              <span>2. Lịch trình theo dõi "Tầm Soát Kép" (Vú & Phụ Khoa)</span>
            </h3>
            <div className="space-y-2 pt-1">
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="font-bold text-rose-400 shrink-0 text-xs bg-rose-950/60 px-2 py-0.5 rounded">Tuyến Vú:</span>
                <span>Khám định kỳ 6 - 12 tháng/lần tại BV Ung Bướu: Siêu âm tuyến vú + Chụp nhũ ảnh (Mammography) hàng năm.</span>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="font-bold text-teal-400 shrink-0 text-xs bg-teal-950/60 px-2 py-0.5 rounded">Phụ Khoa:</span>
                <span>Tái khám siêu âm đầu dò phụ khoa sau 3 tháng để theo dõi tiến triển khối u xơ 45mm và niêm mạc lòng tử cung.</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/30 border-l-2 border-emerald-400 text-slate-200 space-y-2">
            <div className="font-bold text-emerald-300 text-sm flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-emerald-400" />
              <span>Lời chúc từ Đội ngũ Y tế:</span>
            </div>
            <p>
              Chị đã đi qua một hành trình 5 năm vô cùng xuất sắc và kiên cường. Những biến đổi ở tử cung hiện tại là phản ứng phụ thường gặp của thuốc và hoàn toàn trong tầm kiểm soát y khoa. Chúc chị luôn giữ vững tinh thần lạc quan, sức khỏe dồi dào và có những quyết định sáng suốt nhất cùng bác sĩ điều trị!
            </p>
          </div>

        </div>

      </section>

      {/* References Section */}
      <ReferencesSection
        references={uterineTamoxifenReferences}
        diseaseTitle="Bảo Vệ Nội Mạc Tử Cung Sau Tamoxifen"
      />

    </article>
  );
};
