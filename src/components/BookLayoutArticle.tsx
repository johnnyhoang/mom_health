import React from 'react';
import { InteractiveCaseViewer } from './InteractiveCaseViewer';
import { BreastCancerSafetySection } from './BreastCancerSafetySection';
import { ReadAloudButton } from './ReadAloudButton';
import { MedicalDisclaimerBanner } from './MedicalDisclaimerBanner';
import { ReferencesSection } from './ReferencesSection';
import { uterineTamoxifenReferences } from '../data/medicalReferencesData';
import { tamoxifenTreatmentOptions, tamoxifenMechanisms } from '../data/tamoxifenTreatmentData';
import { tamoxifenMediaItems } from '../data/tamoxifenMediaData';
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
  BookOpen, 
  Check,
  ShieldAlert,
  Calendar,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Pill,
  Bookmark
} from 'lucide-react';

interface BookLayoutArticleProps {
  onOpenVideoModal: (media: MediaItem) => void;
}

export const BookLayoutArticle: React.FC<BookLayoutArticleProps> = ({ onOpenVideoModal }) => {
  return (
    <article className="w-full bg-slate-950 text-slate-200 font-sans pb-32">

      {/* Medical Disclaimer Banner */}
      <MedicalDisclaimerBanner
        specialty="Sản Phụ Khoa & Ung Bướu Phụ Khoa"
        primaryGuideline="ACOG Practice Bulletin No. 232, NCCN Uterine Neoplasms, ASCO EET Guidelines, RCOG Green-top Guideline No. 67"
        lastUpdated="Tháng 9/2026"
      />
      
      {/* ========================================================================= */}
      {/* BOOK COVER & PREFACE: Monograph for Post-Tamoxifen Patient */}
      {/* ========================================================================= */}
      <header className="w-full max-w-5xl sm:max-w-6xl mx-auto pt-6 pb-6 px-4 sm:px-6 space-y-4">
        
        {/* Book Series Label */}
        <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold tracking-wider uppercase">
          <BookOpen className="w-4 h-4" />
          <span>Sách Chuyên Khảo Y Khoa Cá Thể Hóa • Dạng Đọc Liền Mạch Toàn Bộ</span>
        </div>

        {/* Book Main Title & Unified Header Container */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
            Bảo Vệ Nội Mạc Tử Cung & Giải Mã Toàn Diện Sau 5 Năm Tamoxifen (K Vú)
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Sách chuyên khảo đa chiều: Giải mã cơ chế "Nghịch lý Tamoxifen", đối chiếu sâu 4 bệnh lý phụ khoa, nghiên cứu khoa học thực chứng về khả năng tự khỏi và diễn tiến theo thời gian, cùng 4 phác đồ tối ưu bảo vệ tuyến vú.
          </p>

          {/* Unified Preface & Status Panel */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <ReadAloudButton
                id="monograph-full"
                title="Bảo Vệ Nội Mạc Tử Cung Sau 5 Năm Tamoxifen"
                text="Bảo vệ nội mạc tử cung sau 5 năm Tamoxifen. Sách chuyên khảo giải mã toàn diện hồ sơ bệnh án, cơ chế nghịch lý Tamoxifen, phân tích khoa học thực chứng về khả năng tự khỏi và nguy cơ theo thời gian, so sánh tăng sản điển hình với u xơ và lạc tuyến cơ tử cung, cùng 4 phác đồ điều trị an toàn tuyệt đối cho người có tiền sử ung thư vú."
                variant="hero"
                label="Bấm để nghe đọc toàn bộ sách"
                durationEstimate="~18 phút"
              />
              <div className="flex items-center gap-1.5 text-teal-300 font-medium text-xs">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>ACOG • ASCO • NCCN • RCOG • FIGO</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-emerald-100 text-xs sm:text-sm leading-relaxed space-y-1">
              <span className="font-bold flex items-center gap-1.5 text-emerald-300 text-xs sm:text-sm">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thông điệp cốt lõi từ Bác sĩ chuyên khoa:</span>
              </span>
              <p>
                Kết quả Giải Phẫu Bệnh tại BV Hùng Vương (15/09/2026) xác nhận <strong>"TĂNG SẢN ĐIỂN HÌNH KHU TRÚ"</strong> (Without Atypia) – Đây là thương tổn <strong>HOÀN TOÀN LÀNH TÍNH</strong> (nguy cơ ung thư &lt; 1-3%), <strong>KHÔNG PHẢI</strong> K vú di căn và <strong>KHÔNG PHẢI</strong> ung thư tử cung. Các nghiên cứu quốc tế chỉ ra có tới <strong>74% khả năng tự thoái lui</strong> nếu không còn kích thích nội tiết.
              </p>
            </div>

            {/* Quick Chapter Navigation Bar (TOC) */}
            <div className="pt-2 border-t border-slate-800/80 space-y-2">
              <div className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5 text-teal-400" />
                <span>Mục lục 9 chương chuyên khảo (Đọc liền mạch từ trên xuống dưới):</span>
              </div>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {[
                  { href: '#chapter-1', label: '1. Nghịch Lý Tamoxifen' },
                  { href: '#chapter-2', label: '2. Giải Mã Hồ Sơ GPB' },
                  { href: '#chapter-3', label: '3. So Sánh 4 Bệnh Lý Tử Cung' },
                  { href: '#chapter-4', label: '4. Bộ Tứ Gây Rong Kinh' },
                  { href: '#chapter-5', label: '5. Nghiên Cứu Tự Khỏi & Nguy Cơ' },
                  { href: '#chapter-6', label: '6. Toàn Bộ 4 Phác Đồ Điều Trị' },
                  { href: '#chapter-7', label: '7. Ma Trận An Toàn K Vú' },
                  { href: '#chapter-8', label: '8. Lộ Trình & Câu Hỏi Bác Sĩ' },
                  { href: '#chapter-9', label: '9. Dinh Dưỡng & Tầm Soát Kép' },
                ].map((toc, idx) => (
                  <a
                    key={idx}
                    href={toc.href}
                    className="px-2.5 py-1 rounded-lg bg-slate-950 hover:bg-teal-950 text-slate-300 hover:text-teal-300 border border-slate-800 transition-colors"
                  >
                    {toc.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* CHAPTER 1: THE TAMOXIFEN PARADOX (SERM MECHANISM) */}
      {/* ========================================================================= */}
      <section id="chapter-1" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
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
      {/* CHAPTER 2: CASE RECORD & HISTOPATHOLOGY DECODER */}
      {/* ========================================================================= */}
      <section id="chapter-2" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
              Chương 2 • Phân Tích Thực Tế
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Giải Mã Trực Tiếp 4 Hồ Sơ Bệnh Án & Kết Quả Giải Phẫu Bệnh
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Phân tích cặn kẽ từng dòng chữ, thuật ngữ trong phiếu kết quả sinh thiết Pipelle ngày 15/09/2026 tại BV Hùng Vương.
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

        {/* Comparison Table: Typical vs Atypical */}
        <div className="pt-4 space-y-2.5">
          <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-teal-400" />
            <span>Bảng So Sánh Y Học: "Tăng Sản Điển Hình" vs "Tăng Sản Không Điển Hình"</span>
          </h3>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
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
                  <td className="p-2.5 sm:p-3 text-emerald-300 font-medium">Nhân tế bào bình thường, đồng đều, không đột biến dị sản</td>
                  <td className="p-2.5 sm:p-3 text-rose-300">Nhân quái dị, đa hình thái, mất phân cực</td>
                </tr>
                <tr>
                  <td className="p-2.5 sm:p-3 font-semibold text-slate-400">Nguy cơ ác tính (Ung thư)</td>
                  <td className="p-2.5 sm:p-3 text-emerald-300 font-bold">&lt; 1% đến 3% (Cực kỳ thấp - Lành tính)</td>
                  <td className="p-2.5 sm:p-3 text-rose-300 font-bold">25% đến 40% (Tổn thương tiền ung thư)</td>
                </tr>
                <tr>
                  <td className="p-2.5 sm:p-3 font-semibold text-slate-400">Ảnh hưởng từ Tamoxifen</td>
                  <td className="p-2.5 sm:p-3 text-slate-300">Dấu ấn mô học kinh điển vô hại (tuyến giãn nang dạng Swiss cheese)</td>
                  <td className="p-2.5 sm:p-3 text-slate-300">Hiếm gặp hơn, cần xử lý phẫu thuật triệt để</td>
                </tr>
                <tr>
                  <td className="p-2.5 sm:p-3 font-semibold text-slate-400">Hướng điều trị y khoa</td>
                  <td className="p-2.5 sm:p-3 text-slate-300 font-medium">Uống Orgametril ngắn hạn, nội soi buồng tử cung hoặc phẫu thuật bảo tồn buồng trứng</td>
                  <td className="p-2.5 sm:p-3 text-rose-200 font-medium">Bắt buộc phẫu thuật cắt tử cung toàn phần</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 3 (NEW): DEEP COMPARISON OF 4 UTERINE PATHOLOGIES */}
      {/* ========================================================================= */}
      <section id="chapter-3" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
              Chương 3 • So Sánh Bệnh Lý Toàn Diện
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Đại Phẫu So Sánh 4 Bệnh Lý Tử Cung: Tăng Sản Điển Hình vs U Xơ vs Lạc Tuyến Cơ vs Polyp
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Giải mã sự khác biệt về vị trí giải phẫu, cơ chế bệnh sinh, mức độ nguy hiểm và tương quan với tiền sử K vú của chị.
            </p>
          </div>
          <ReadAloudButton
            id="chapter-3-audio"
            title="Chương 3: So Sánh 4 Bệnh Lý Tử Cung"
            text="Chương 3: Đại phẫu so sánh 4 bệnh lý tử cung thường gặp. Tăng sản nội mạc điển hình nằm ở lớp lót trong cùng. U xơ tử cung 45mm nằm trong lớp cơ. Lạc tuyến cơ tử cung Adenomyosis là niêm mạc đi lạc vào cơ. Polyp buồng tử cung là khối u nhô có cuống. Cả bốn bệnh lý đều là lành tính và có hướng xử trí rõ ràng."
            variant="chapter"
          />
        </div>

        {/* 4 Pathology Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* 1. Tăng Sản Điển Hình */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-teal-500/40 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800 font-bold">
                1. BỆNH CỦA CHỊ THÚY NGA
              </span>
              <span className="text-xs text-emerald-400 font-bold">Lành tính 100%</span>
            </div>
            <h3 className="text-base font-black text-white">Tăng Sản Nội Mạc Tử Cung Điển Hình (Hyperplasia Without Atypia)</h3>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li><strong className="text-slate-200">Vị trí:</strong> Lớp niêm mạc (lớp lót trong cùng của buồng tử cung).</li>
              <li><strong className="text-slate-200">Bản chất:</strong> Các tuyến nội mạc tăng sinh về số lượng do kích thích estrogen/Tamoxifen, nhưng tế bào hoàn toàn bình thường (không đột biến).</li>
              <li><strong className="text-slate-200">Triệu chứng:</strong> Ra máu rỉ rả, rong kinh, đốm nâu sau kỳ kinh.</li>
              <li><strong className="text-slate-200">Nguy cơ ác tính:</strong> Rất thấp (&lt; 1-3%), 74% có khả năng tự thoái lui.</li>
              <li><strong className="text-slate-200">Xử trí:</strong> Orgametril 15 ngày, nội soi buồng tử cung bóc tách hoặc theo dõi.</li>
            </ul>
          </div>

          {/* 2. U Xơ Tử Cung */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 font-bold">
                2. KHỐI THÀNH SAU 45mm
              </span>
              <span className="text-xs text-emerald-400 font-bold">Lành tính (&gt; 99.9%)</span>
            </div>
            <h3 className="text-base font-black text-white">U Xơ Tử Cung (Uterine Fibroids / Leiomyoma)</h3>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li><strong className="text-slate-200">Vị trí:</strong> Lớp cơ tử cung (thành sau tử cung của chị kích thước 41x45mm).</li>
              <li><strong className="text-slate-200">Bản chất:</strong> Khối u cơ trơn lành tính phát triển dưới tác động của nội tiết tố nữ qua nhiều năm.</li>
              <li><strong className="text-slate-200">Triệu chứng:</strong> Cường kinh (ra nhiều máu cục), nặng bụng dưới, chèn ép lưng.</li>
              <li><strong className="text-slate-200">Nguy cơ ác tính:</strong> Cực kỳ hiếm (&lt; 0.1% hóa sarcom cơ trơn).</li>
              <li><strong className="text-slate-200">Xử trí:</strong> Theo dõi nếu không triệu chứng, phẫu thuật bóc u xơ hoặc cắt tử cung nếu gây rong huyết nặng.</li>
            </ul>
          </div>

          {/* 3. Lạc Tuyến Cơ Tử Cung (Adenomyosis) */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800 font-bold">
                3. ĐỒNG MẮC THÀNH SAU
              </span>
              <span className="text-xs text-emerald-400 font-bold">Lành tính 100%</span>
            </div>
            <h3 className="text-base font-black text-white">Lạc Tuyến Cơ Tử Cung (Adenomyosis)</h3>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li><strong className="text-slate-200">Vị trí:</strong> Mô niêm mạc đi lạc và cắm sâu vào bên trong lớp cơ tử cung.</li>
              <li><strong className="text-slate-200">Bản chất:</strong> Mỗi chu kỳ, mô lạc này cũng chảy máu vào trong cơ, gây viêm xơ hóa cơ tử cung và làm tử cung to hình cầu.</li>
              <li><strong className="text-slate-200">Triệu chứng:</strong> Đau bụng kinh dữ dội (thống kinh), tử cung không co bóp cầm máu được $\rightarrow$ rong kinh kéo dài.</li>
              <li><strong className="text-slate-200">Nguy cơ ác tính:</strong> Hoàn toàn không phải ung thư (0%).</li>
              <li><strong className="text-slate-200">Xử trí:</strong> Thuốc giảm đau, đặt vòng Mirena hoặc phẫu thuật cắt tử cung.</li>
            </ul>
          </div>

          {/* 4. Polyp Buồng Tử Cung */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800 font-bold">
                4. PHỔ BIẾN Ở NGƯỜI DÙNG TAMOXIFEN
              </span>
              <span className="text-xs text-emerald-400 font-bold">Lành tính 97-98%</span>
            </div>
            <h3 className="text-base font-black text-white">Polyp Lòng Tử Cung (Endometrial Polyp)</h3>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li><strong className="text-slate-200">Vị trí:</strong> Khối u nhô có cuống mạch máu nằm lơ lửng trong khoang buồng tử cung.</li>
              <li><strong className="text-slate-200">Bản chất:</strong> Sự phì đại khu trú của mô tuyến và mô đệm niêm mạc (rất hay gặp sau 5 năm Tamoxifen: 30-40%).</li>
              <li><strong className="text-slate-200">Triệu chứng:</strong> Ra máu giữa chu kỳ, ra máu sau quan hệ, đốm cam.</li>
              <li><strong className="text-slate-200">Nguy cơ ác tính:</strong> Thấp (khoảng 1.5 - 3% ở phụ nữ tiền mãn kinh).</li>
              <li><strong className="text-slate-200">Xử trí:</strong> Nội soi buồng tử cung cắt cuống polyp nhẹ nhàng trong 15 phút.</li>
            </ul>
          </div>

        </div>

        {/* Master Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-slate-300 font-bold border-b border-slate-800">
              <tr>
                <th className="p-2.5">Tiêu Chí So Sánh</th>
                <th className="p-2.5 text-teal-300 bg-teal-950/30">Tăng Sản Điển Hình (Của Chị)</th>
                <th className="p-2.5 text-amber-300">U Xơ Tử Cung 45mm</th>
                <th className="p-2.5 text-rose-300">Adenomyosis</th>
                <th className="p-2.5 text-purple-300">Polyp Buồng Tử Cung</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 bg-slate-950 text-slate-300">
              <tr>
                <td className="p-2.5 font-bold text-slate-400">Tầng giải phẫu</td>
                <td className="p-2.5 text-teal-200 font-medium">Niêm mạc (lớp trong)</td>
                <td className="p-2.5">Thành cơ tử cung</td>
                <td className="p-2.5">Mô niêm mạc lạc trong cơ</td>
                <td className="p-2.5">Khối nhô trong lòng tử cung</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-slate-400">Cơ chế gây ra máu</td>
                <td className="p-2.5 text-teal-200">Bong tróc niêm mạc không đều</td>
                <td className="p-2.5">Tăng diện tích bề mặt + ứ máu</td>
                <td className="p-2.5">Cơ tử cung mất khả năng siết co bóp</td>
                <td className="p-2.5">Vỡ vi mạch cuống polyp</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-slate-400">Nguy cơ ung thư</td>
                <td className="p-2.5 text-emerald-300 font-bold">&lt; 1 - 3% (Lành tính)</td>
                <td className="p-2.5 text-emerald-300 font-bold">&lt; 0.1%</td>
                <td className="p-2.5 text-emerald-300 font-bold">0% (Không ung thư)</td>
                <td className="p-2.5 text-emerald-300 font-bold">1.5 - 3%</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-slate-400">Ảnh hưởng K Vú</td>
                <td className="p-2.5 text-emerald-300 font-bold">0% (Hoàn toàn không)</td>
                <td className="p-2.5 text-emerald-300 font-bold">0%</td>
                <td className="p-2.5 text-emerald-300 font-bold">0%</td>
                <td className="p-2.5 text-emerald-300 font-bold">0%</td>
              </tr>
            </tbody>
          </table>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 4: ROOT CAUSE OF CHRONIC MENORRHAGIA */}
      {/* ========================================================================= */}
      <section id="chapter-4" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
              Chương 4 • Căn Nguyên Bệnh Lý
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Đi Tìm Thủ Phạm Gây Rong Kinh Kéo Dài: "Bộ Tứ Tác Động"
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Rong kinh nhiều tháng qua không đơn thuần chỉ do một yếu tố duy nhất, mà là sự cộng hưởng của 4 yếu tố cùng lúc:
            </p>
          </div>
          <ReadAloudButton
            id="chapter-4-audio"
            title="Chương 4: Căn Nguyên Gây Rong Kinh"
            text="Chương 4: Đi tìm thủ phạm gây rong kinh kéo dài. Bộ tứ tác động bao gồm: Một là mảng tăng sản tuyến do Tamoxifen. Hai là Lạc tuyến trong cơ tử cung Adenomyosis làm cơ không co bóp cầm máu được. Ba là khối u cơ thành sau 45 mi-li-mét. Bốn là giai đoạn tiền mãn kinh ở độ tuổi 45."
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
      {/* CHAPTER 5 (NEW): SCIENTIFIC EVIDENCE - UNTREATED HYPERPLASIA & RISK OVER TIME */}
      {/* ========================================================================= */}
      <section id="chapter-5" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
              Chương 5 • Bằng Chứng Khoa Học Thực Chứng
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Nếu Chỉ Theo Dõi Không Điều Trị: Khả Năng Tự Khỏi & Nguy Cơ Theo Thời Gian
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Đối chiếu nghiên cứu thực nghiệm quốc tế trên bệnh nhân không điều trị (Kurman 1985, RCOG, ACOG, Cochrane).
            </p>
          </div>
          <ReadAloudButton
            id="chapter-5-audio"
            title="Chương 5: Khả Năng Tự Khỏi & Nguy Cơ Theo Thời Gian"
            text="Chương 5: Bằng chứng khoa học thực chứng. Nếu chỉ theo dõi không điều trị, khả năng tự khỏi và nguy cơ theo thời gian như thế nào? Nghiên cứu kinh điển của Kurman theo dõi 170 bệnh nhân không điều trị chứng minh có 74% trường hợp tự thoái lui hoàn toàn, chỉ 1.6% tiến triển ác tính sau hơn 13 năm. Tuy nhiên, việc điều trị bằng Orgametril ngắn hạn giúp rút ngắn thời gian thoái lui xuống chỉ còn 2 đến 4 tuần và ngăn ngừa thiếu máu."
            variant="chapter"
          />
        </div>

        {/* Core Scientific Evidence Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-teal-500/40 space-y-4">
          
          <div className="flex items-center gap-2 font-bold text-teal-300 text-sm sm:text-base border-b border-slate-800 pb-2.5">
            <BarChart3 className="w-5 h-5 text-teal-400" />
            <span>Nghiên Cứu Kinh Điển Của Kurman et al. (Cancer 1985) Trên 170 Bệnh Nhân Không Điều Trị:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-center space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">74%</div>
              <div className="text-xs font-bold text-emerald-200">Tự Thoái Lui Hoàn Toàn</div>
              <p className="text-[11px] text-slate-300">Niêm mạc tự mỏng lại về bình thường mà không cần bất kỳ can thiệp nào.</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-slate-300">19%</div>
              <div className="text-xs font-bold text-slate-200">Tồn Tại Lành Tính</div>
              <p className="text-[11px] text-slate-400">Tiếp tục tồn tại ở dạng tăng sản điển hình lành tính qua nhiều năm không đổi.</p>
            </div>

            <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-900/40 text-center space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-rose-400">1.6%</div>
              <div className="text-xs font-bold text-rose-200">Tiến Triển Ác Tính</div>
              <p className="text-[11px] text-slate-300">Tỷ lệ cực kỳ thấp sau hơn 13.4 năm theo dõi liên tục.</p>
            </div>
          </div>

          <div className="text-xs text-slate-300 space-y-2 pt-1 leading-relaxed">
            <p>
              📘 <strong>Kết luận từ RCOG Green-top Guideline No. 67 (Hiệp Hội Sản Phụ Khoa Hoàng Gia Anh):</strong> Với tăng sản nội mạc tử cung điển hình (Without Atypia), cơ chế tự thoái lui tự nhiên (Spontaneous Regression) xảy ra rất cao (70% - 80%) sau khi nguyên nhân kích thích (như ngưng Tamoxifen, hoặc chu kỳ rụng trứng trở lại) được loại bỏ.
            </p>
          </div>
        </div>

        {/* Risk Over Time Timeline Matrix */}
        <div className="space-y-3">
          <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-teal-400" />
            <span>Ma Trận Nguy Cơ Theo Từng Mốc Thời Gian Nếu Chỉ Theo Dõi Thuần Túy:</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
              <div className="font-bold text-teal-300 flex items-center justify-between">
                <span>3 – 6 Tháng Đầu</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">Cực kỳ an toàn</span>
              </div>
              <ul className="space-y-1 text-slate-300 text-[11px]">
                <li>• Nguy cơ ác tính hóa: <strong>0%</strong> (tế bào nhân bình thường).</li>
                <li>• Khả năng tự thoái lui: <strong>30% – 50%</strong>.</li>
                <li>• <em>Rủi ro thực tế:</em> Tiếp tục ra máu rỉ rả gây mệt mỏi nếu có u xơ 45mm.</li>
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
              <div className="font-bold text-teal-300 flex items-center justify-between">
                <span>1 – 2 Năm</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">Thoái lui cao</span>
              </div>
              <ul className="space-y-1 text-slate-300 text-[11px]">
                <li>• Nguy cơ ác tính hóa: <strong>&lt; 0.5%</strong>.</li>
                <li>• Khả năng tự thoái lui: <strong>70% – 80%</strong> (khi estrogen buồng trứng giảm dần).</li>
                <li>• <em>Rủi ro thực tế:</em> Thiếu máu mạn tính nếu rong kinh không được cắt đứt.</li>
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
              <div className="font-bold text-amber-300 flex items-center justify-between">
                <span>5 – 10 Năm</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">Cần theo dõi</span>
              </div>
              <ul className="space-y-1 text-slate-300 text-[11px]">
                <li>• Nguy cơ tích lũy đột biến: <strong>1% – 3%</strong> (nếu bỏ mặc hoàn toàn trong môi trường estrogen cao).</li>
                <li>• Nếu đã mãn kinh: Niêm mạc tự teo mỏng vĩnh viễn (&lt; 4mm).</li>
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
              <div className="font-bold text-slate-300 flex items-center justify-between">
                <span>15 – 20 Năm</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">Tích lũy tối đa</span>
              </div>
              <ul className="space-y-1 text-slate-300 text-[11px]">
                <li>• Nguy cơ tích lũy tối đa: <strong>&lt; 5%</strong> (theo nghiên cứu dài hạn của Cochrane & RCOG).</li>
                <li>• Xử lý sớm giúp đưa nguy cơ về <strong>0%</strong> vĩnh viễn.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Why Treatment with Orgametril 15 days is Smart */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-teal-500/30 space-y-2.5 text-xs sm:text-sm text-slate-300">
          <div className="font-bold text-teal-300 flex items-center gap-2 text-sm sm:text-base">
            <Pill className="w-4 h-4 text-teal-400" />
            <span>Vì sao Bác sĩ Thu Huyền cho uống Orgametril 15 ngày (ngày 18/09/2026) thay vì chỉ theo dõi thụ động?</span>
          </div>
          <p>
            Như dữ liệu khoa học ở trên chứng minh: <strong>Bản thân mảng tăng sản điển hình có tới 74% khả năng tự khỏi</strong>. Tuy nhiên, nếu chỉ ngồi chờ tự khỏi, chị Nga sẽ phải chịu đựng tình trạng ra máu dầm dề nhiều tháng tiếp theo do sự cản trở của <strong>khối u xơ 45mm và ổ Adenomyosis</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-xs">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <strong className="text-emerald-400 block">✓ Lợi ích của Orgametril 15 ngày:</strong>
              <p>Chủ động ép mỏng niêm mạc nhanh chóng trong 2 tuần (tỷ lệ thoái lui tăng lên &gt; 90%), cầm máu ngay lập tức để cơ thể không bị mất máu thêm.</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <strong className="text-teal-400 block">✓ Cột mốc kiểm chứng ngày 16/10/2026:</strong>
              <p>Siêu âm lại để đo trực tiếp độ dày niêm mạc. Nếu niêm mạc đã mỏng mịn (&le; 4-5mm) thì coi như mục tiêu điều trị nội khoa đã hoàn thành xuất sắc!</p>
            </div>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 6: ALL 4 TREATMENT STRATEGIES (FULLY EXPANDED & CONTINUOUS) */}
      {/* ========================================================================= */}
      <section id="chapter-6" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="space-y-1">
          <div className="text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 6 • Phác Đồ Điều Trị Toàn Diện
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Chi Tiết Toàn Bộ 4 Phác Đồ Điều Trị Tối Ưu Cho Người Tiền Sử K Vú
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Dưới đây là toàn bộ 4 phương án y khoa được mở phẳng chi tiết từ góc độ Sản Phụ Khoa và Ung Bướu, giúp chị đọc liền mạch không cần bấm chọn:
          </p>
        </div>

        {/* Continuous Stream of All 4 Treatments */}
        <div className="space-y-6">
          {tamoxifenTreatmentOptions.map((opt, idx) => (
            <div 
              key={opt.id}
              className={`p-4 sm:p-6 rounded-2xl border space-y-4 transition-all ${
                opt.id === 'laparoscopic-hysterectomy'
                  ? 'bg-slate-900/95 border-teal-500/50 shadow-xl ring-1 ring-teal-500/20'
                  : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="space-y-0.5">
                  <span className="text-xs font-mono text-teal-400 font-bold uppercase tracking-wider">
                    Phác Đồ {idx + 1} / 4
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white">
                    {opt.name}
                  </h3>
                  <p className="text-xs text-slate-400 italic">
                    {opt.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                    opt.id === 'laparoscopic-hysterectomy'
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                      : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}>
                    {opt.suitabilityScore}
                  </span>
                </div>
              </div>

              {/* Layman Analogy */}
              {opt.laymanAnalogy && (
                <div className="p-3 rounded-xl bg-slate-950/90 border-l-2 border-teal-400 text-xs text-slate-300 space-y-1">
                  <span className="font-bold text-teal-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Minh họa trực quan:</span>
                  </span>
                  <p className="text-slate-200">{opt.laymanAnalogy}</p>
                </div>
              )}

              {/* Mechanism */}
              <div className="space-y-1 text-xs sm:text-sm">
                <h4 className="font-bold uppercase text-slate-400 flex items-center gap-1.5 text-xs">
                  <Activity className="w-3.5 h-3.5 text-teal-400" />
                  <span>Cơ chế thực hiện:</span>
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {opt.mechanism}
                </p>
              </div>

              {/* Pros & Cons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="space-y-1.5 p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
                  <div className="font-bold text-xs uppercase text-emerald-400 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Ưu điểm vượt trội:</span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {opt.pros.map((p, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold shrink-0">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1.5 p-3.5 rounded-xl bg-amber-950/20 border border-amber-900/30">
                  <div className="font-bold text-xs uppercase text-amber-400 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                    <span>Điểm cần lưu ý & Cân nhắc:</span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {opt.cons.map((c, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-400 font-bold shrink-0">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Breast Cancer Safety */}
              <div className="p-3 rounded-xl bg-teal-950/30 border-l-2 border-teal-400 text-xs sm:text-sm space-y-1">
                <span className="font-bold text-teal-300 flex items-center gap-1.5 text-xs">
                  <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Độ an toàn đối với tiền sử Ung Thư Vú:</span>
                </span>
                <p className="text-slate-200">{opt.breastCancerSafety}</p>
              </div>

              {/* Recommendation Note */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div><strong className="text-slate-200">Hồi phục:</strong> {opt.surgicalRecovery}</div>
                <div><strong className="text-teal-400">Khuyến nghị:</strong> {opt.recommendationNote}</div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 7: ONCOLOGY SAFETY CROSS-TALK MATRIX */}
      {/* ========================================================================= */}
      <section id="chapter-7" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="space-y-1">
          <span className="text-xs font-mono text-rose-400 uppercase font-bold tracking-wider">
            Chương 7 • Dược Lâm Sàng Ung Bướu (ASCO / NCCN)
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-rose-400" />
            <span>Ma Trận Đánh Giá Nguy Cơ Ảnh Hưởng Ngược Lên Ung Thư Vú</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Mọi giải pháp điều trị phụ khoa, thuốc cầm máu hay thực phẩm bổ sung đều được đối chiếu chặt chẽ với nguy cơ tái phát K vú theo các thử nghiệm lâm sàng quốc tế:
          </p>
        </div>

        <BreastCancerSafetySection />

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 8: PERSONALIZED ROADMAP & DOCTOR QUESTIONS (FULLY OPEN & CONTINUOUS) */}
      {/* ========================================================================= */}
      <section id="chapter-8" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="space-y-1">
          <div className="text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 8 • Lộ Trình Hành Động Cá Thể Hóa
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Bản Đồ Lộ Trình Hành Động & Danh Sách Câu Hỏi Vàng Cho Bác Sĩ
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Dưới đây là 2 kịch bản hướng đi cụ thể tùy theo nguyện vọng của chị và danh sách câu hỏi chuẩn bị sẵn khi gặp Bác sĩ điều trị:
          </p>
        </div>

        {/* 2 Scenarios Stream */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Scenario 1: Triệt để 100% */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-teal-500/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                LỰA CHỌN ƯU TIÊN SỐ 1
              </span>
              <span className="text-xs text-teal-400 font-mono font-bold">DỨT ĐIỂM 100%</span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-white">
              Phẫu Thuật Nội Soi Cắt Tử Cung (Bảo Tồn 2 Buồng Trứng)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Phù hợp khi chị đã sinh đủ con, muốn dứt điểm hoàn toàn tình trạng rong kinh, giải quyết luôn khối u xơ 45mm và xóa bỏ vĩnh viễn 100% nỗi lo ung thư tử cung.
            </p>
            <div className="space-y-1.5 pt-1 text-xs">
              <strong className="text-teal-300 block">Các bước hành động:</strong>
              <ul className="space-y-1 text-slate-300">
                <li className="flex items-start gap-1.5"><span className="text-teal-400 font-bold">✓</span> Khám tư vấn tại Khoa Phụ Ngoại (BV Hùng Vương / BV Từ Dũ / ĐHYD).</li>
                <li className="flex items-start gap-1.5"><span className="text-teal-400 font-bold">✓</span> Yêu cầu giữ lại 2 buồng trứng để duy trì nội tiết tố tự nhiên, không bị lão hóa sớm.</li>
                <li className="flex items-start gap-1.5"><span className="text-teal-400 font-bold">✓</span> Mổ nội soi ít xâm lấn, nằm viện 2-3 ngày, hồi phục sau 2 tuần.</li>
              </ul>
            </div>
          </div>

          {/* Scenario 2: Bảo tồn & Uống thuốc */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-slate-800 text-slate-300 border border-slate-700">
                HƯỚNG BẢO TỒN NỘI KHOA
              </span>
              <span className="text-xs text-amber-400 font-mono font-bold">THEO DÕI ĐỊNH KỲ</span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-white">
              Uống Orgametril 15 Ngày + Tái Khám Siêu Âm Ngày 16/10/2026
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Phù hợp khi chị muốn điều trị bảo tồn nhẹ nhàng không phẫu thuật ngay, đánh giá đáp ứng làm mỏng niêm mạc của thuốc theo chỉ định BS Thu Huyền.
            </p>
            <div className="space-y-1.5 pt-1 text-xs">
              <strong className="text-amber-300 block">Các bước hành động:</strong>
              <ul className="space-y-1 text-slate-300">
                <li className="flex items-start gap-1.5"><span className="text-amber-400 font-bold">✓</span> Uống đúng liều Orgametril 5mg (2 viên/ngày) + Canxi + Sắt trong 15 ngày.</li>
                <li className="flex items-start gap-1.5"><span className="text-amber-400 font-bold">✓</span> Đi siêu âm lại đúng hẹn ngày 16/10/2026 để đo độ mỏng niêm mạc.</li>
                <li className="flex items-start gap-1.5"><span className="text-amber-400 font-bold">✓</span> Nếu niêm mạc mỏng tốt (&le; 5mm) $\rightarrow$ Tiếp tục theo dõi 3-6 tháng/lần.</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Ready-to-Use Questions for Doctor */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-amber-500/30 space-y-3">
          <div className="flex items-center gap-2 font-bold text-amber-300 text-sm sm:text-base">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Danh Sách 4 Câu Hỏi Chuẩn Bị Sẵn Cho Bác Sĩ Phụ Khoa & Ung Bướu:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 italic space-y-1">
              <span className="font-bold text-amber-300 not-italic block">1. Về kết quả sinh thiết GPB:</span>
              "Thưa bác sĩ, kết quả GPB của tôi là Tăng sản điển hình khu trú (without atypia) lành tính 100%, vậy tôi có thể yên tâm về mặt ung bướu chưa?"
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 italic space-y-1">
              <span className="font-bold text-amber-300 not-italic block">2. Về tương tác thuốc K vú:</span>
              "Tôi đang uống Orgametril 15 ngày theo đơn BS Phụ khoa, đợt thuốc ngắn hạn này có hoàn toàn an toàn cho tuyến vú của tôi không?"
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 italic space-y-1">
              <span className="font-bold text-amber-300 not-italic block">3. Về khối u xơ 45mm và Adenomyosis:</span>
              "Khối u xơ 45mm và ổ Adenomyosis có phải là lý do khiến tôi bị rong kinh dai dẳng không, và hướng xử lý lâu dài là gì?"
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 italic space-y-1">
              <span className="font-bold text-amber-300 not-italic block">4. Về phẫu thuật nội soi bảo tồn buồng trứng:</span>
              "Nếu tôi chọn phẫu thuật nội soi cắt tử cung giữ lại 2 buồng trứng thì sau phẫu thuật sức khỏe và nội tiết của tôi sẽ như thế nào?"
            </div>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 9: CLINICAL MEDIA ATLAS & VIDEO SURGERY */}
      {/* ========================================================================= */}
      <section id="chapter-9" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="space-y-1">
          <div className="text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 9 • Atlas Video Lâm Sàng
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
      {/* CHAPTER 10: LIFESTYLE, RECOVERY & FOLLOW-UP SCHEDULE */}
      {/* ========================================================================= */}
      <section id="chapter-10" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-5 border-t border-slate-900">
        
        <div className="space-y-1">
          <div className="text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
            Chương 10 • Lối Sống & Lịch Tầm Soát Kép
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Chăm Sóc Toàn Diện, Dinh Dưỡng Bù Máu & Lịch Tầm Soát Vàng
          </h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h3 className="font-bold text-teal-300 text-sm sm:text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>1. Chế độ dinh dưỡng phục hồi máu & bảo vệ xương khớp</span>
            </h3>
            <p>
              Sau 5 năm Tamoxifen và đợt rong kinh tháng 8-9/2026, cơ thể cần được bổ sung dinh dưỡng có chọn lọc:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-300">
              <li><strong>Bù đắp sắt hữu cơ & Hemoglobin:</strong> Uống thuốc sắt (Hem) đều đặn theo đơn BS Thu Huyền, tăng cường thịt bò nạc, ức gà, lòng đỏ trứng, rau bina (chân vịt), củ dền, mộc nhĩ và hạt bí. Uống kèm nước cam hoặc ổi tươi (Vitamin C) để tăng hấp thu sắt gấp 3 lần.</li>
              <li><strong>Bảo vệ mật độ xương:</strong> Uống Canxi theo đơn, kết hợp sữa chua không đường, cá nhỏ ăn cả xương, mè đen và tắm nắng nhẹ.</li>
              <li><strong>Tránh thực phẩm kích thích nội tiết bừa bãi:</strong> Tuyệt đối không tự ý uống các loại viên uống mầm đậu nành đậm đặc hay sâm tố nữ bổ sung estrogen khi chưa có ý kiến của Bác sĩ Ung bướu.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h3 className="font-bold text-teal-300 text-sm sm:text-base flex items-center gap-2">
              <Calendar className="w-4 h-4 text-teal-400" />
              <span>2. Lịch trình theo dõi "Tầm Soát Kép" (Vú & Phụ Khoa)</span>
            </h3>
            <div className="space-y-2 pt-1">
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="font-bold text-teal-400 shrink-0 text-xs bg-teal-950/60 px-2 py-0.5 rounded">Tái Khám 16/10/2026:</span>
                <span>Siêu âm đầu dò phụ khoa đo lại bề dày nội mạc tử cung sau đợt uống Orgametril 15 ngày tại phòng khám BS Thu Huyền.</span>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="font-bold text-rose-400 shrink-0 text-xs bg-rose-950/60 px-2 py-0.5 rounded">Tuyến Vú:</span>
                <span>Khám định kỳ 6 - 12 tháng/lần tại BV Ung Bướu: Siêu âm tuyến vú + Chụp nhũ ảnh (Mammography) hàng năm.</span>
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
