import React, { useState } from 'react';
import { ReadAloudButton } from './ReadAloudButton';
import { MedicalDisclaimerBanner } from './MedicalDisclaimerBanner';
import { 
  minhAnhVisionProfile, 
  myopiaControlLensesList, 
  myopiaInterventionsComparison, 
  singleVsDefocusComparison,
  decisionTreeMatrix,
  visionScientificReferences,
  visionQAItems,
  deepScientificInsights
} from '../data/visionMyopiaData';
import type { MediaItem } from '../types/medical';
import { 
  BookOpen, 
  Sparkles, 
  Check, 
  Clock, 
  ShieldCheck, 
  Award, 
  Laptop, 
  Sun, 
  HelpCircle,
  Stethoscope,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Scale,
  GitFork,
  CheckCircle2,
  AlertCircle,
  Printer,
  FileText
} from 'lucide-react';

interface VisionMyopiaArticleProps {
  onOpenVideoModal?: (media: MediaItem) => void;
  onNavigateToDoctors?: () => void;
  onNavigateToQA?: () => void;
}

export const VisionMyopiaArticle: React.FC<VisionMyopiaArticleProps> = ({
  onNavigateToDoctors,
  onNavigateToQA
}) => {
  const [selectedLensId, setSelectedLensId] = useState<string>('essilor-stellest');
  const [expandedQAId, setExpandedQAId] = useState<string | null>('qa-vision-1');
  const [outdoorHours, setOutdoorHours] = useState<number>(1);
  const [screenHours, setScreenHours] = useState<number>(5);

  const activeLens = myopiaControlLensesList.find(l => l.id === selectedLensId) || myopiaControlLensesList[0];

  // Simple flat risk index calculator
  const calculateProgressionRisk = () => {
    let score = 50; // base risk
    if (screenHours > 4) score += 25;
    if (outdoorHours < 1.5) score += 20;
    if (outdoorHours >= 2) score -= 15;
    return Math.min(Math.max(score, 20), 95);
  };

  const riskPercent = calculateProgressionRisk();

  return (
    <article className="w-full bg-slate-950 text-slate-200 font-serif leading-relaxed pb-32">
      
      {/* Medical Disclaimer Banner */}
      <MedicalDisclaimerBanner
        specialty="Nhãn Khoa Nhi & Khúc Xạ Nhãn Khoa (Pediatric Ophthalmology)"
        primaryGuideline="International Myopia Institute (IMI 2021-2024), AAO Preferred Practice Pattern"
        lastUpdated="Tháng 09/2026"
      />

      {/* ========================================================================= */}
      {/* MONOGRAPH COVER & EDITORIAL HEADER (FLAT BOOK STYLE) */}
      {/* ========================================================================= */}
      <header className="w-full max-w-4xl mx-auto pt-8 pb-10 px-4 sm:px-6 space-y-6">
        
        {/* Book Series Label */}
        <div className="flex items-center gap-2 text-cyan-400 font-sans text-xs font-semibold tracking-widest uppercase">
          <BookOpen className="w-4 h-4" />
          <span>Chuyên Khảo Nhãn Khoa Nhi • Cá Thể Hóa • Tháng 09/2026</span>
        </div>

        {/* Book Main Title */}
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight font-sans">
            Kiểm Soát Cận Thị & Loạn Thị Tiến Triển Tuổi Dậy Thì
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed italic border-l-2 border-cyan-500/60 pl-4 py-1">
            Giải mã cơ chế sinh lý trục nhãn cầu, so sánh kính cận thường với kính kiểm soát độ cận, phân tích các nghiên cứu quốc tế về tròng kính Defocus và hướng dẫn lựa chọn cho học sinh 14 tuổi (sinh ngày 19/01/2012).
          </p>
        </div>

        {/* Flat Audio & Clinical Header Status */}
        <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 font-sans text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <ReadAloudButton
              id="vision-monograph-full"
              title="Cẩm nang Kiểm Soát Cận Thị và Loạn Thị Tiến Triển"
              text="Chuyên khảo nhãn khoa nhi: Kiểm soát cận thị và loạn thị tiến triển tuổi dậy thì. Phân tích cơ chế trục nhãn cầu, so sánh kính cận thường với tròng kính Defocus thế hệ mới từ Essilor, Hoya, Zeiss và lộ trình bảo vệ mắt cho học sinh 14 tuổi, sinh ngày 19 tháng 1 năm 2012."
              variant="hero"
              label="Nghe đọc toàn bộ chuyên khảo"
              durationEstimate="~16 phút"
            />
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Thời lượng: ~16 phút</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>IMI • AAO • JAMA Ophthalmology</span>
            </span>
          </div>
        </div>

        {/* Flat Patient Profile Summary & Hospital Record Card */}
        <div className="pt-4 border-t border-slate-900 font-sans space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-2">
            <div className="text-xs uppercase tracking-wider font-bold text-cyan-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Hồ Sơ Khúc Xạ • Bệnh Nhi Hoàng Ngọc Minh Anh</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => window.print()}
                className="px-2.5 py-1 bg-cyan-950 hover:bg-cyan-900 text-cyan-200 text-[11px] font-bold rounded border border-cyan-700/60 flex items-center gap-1 cursor-pointer transition-colors"
                title="In trang hiện tại"
              >
                <Printer className="w-3.5 h-3.5 text-cyan-400" />
                <span>In Nhanh</span>
              </button>

              <a
                href="/Hoang_Ngoc_Minh_Anh_Phieu_KTV.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 bg-emerald-950 hover:bg-emerald-900 text-emerald-200 text-[11px] font-bold rounded border border-emerald-700/60 flex items-center gap-1 cursor-pointer transition-colors"
                title="Mở phiếu nhỏ cho KTV / Bác sĩ"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>Phiếu KTV (Giấy Nhỏ)</span>
              </a>

              <a
                href="/Hoang_Ngoc_Minh_Anh_Ho_So_Khuc_Xa.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-slate-200 text-[11px] font-bold rounded border border-slate-700 flex items-center gap-1 cursor-pointer transition-colors"
                title="Mở file HTML A4 để in"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>Hồ Sơ A4</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-xs text-slate-300">
            <div><strong className="text-slate-100">Bệnh nhân:</strong> {minhAnhVisionProfile.name} ({minhAnhVisionProfile.gender})</div>
            <div><strong className="text-slate-100">Ngày sinh:</strong> {minhAnhVisionProfile.birthDate} ({minhAnhVisionProfile.age} tuổi)</div>
            <div><strong className="text-slate-100">Địa chỉ:</strong> {minhAnhVisionProfile.address}</div>
            <div><strong className="text-slate-100">Tình trạng:</strong> {minhAnhVisionProfile.currentStatus}</div>
          </div>

          {/* Exam Timeline Table */}
          <div className="pt-2 space-y-2">
            <div className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>Lịch Sử Khám Khúc Xạ</span>
            </div>

            <div className="overflow-x-auto border border-slate-800/80 rounded-xl bg-slate-900/40">
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="bg-slate-900/80 text-cyan-400 font-mono uppercase border-b border-slate-800">
                    <th className="py-2.5 px-3">Thời Gian & Cơ Sở</th>
                    <th className="py-2.5 px-3">Mắt Phải (MP)</th>
                    <th className="py-2.5 px-3">Mắt Trái (MT)</th>
                    <th className="py-2.5 px-3">PD</th>
                    <th className="py-2.5 px-3">Ghi Chú Tròng Kính & Tiến Triển</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {minhAnhVisionProfile.examHistory.map((m, idx) => (
                    <tr key={m.id} className={idx === 2 ? "bg-cyan-950/20" : "bg-slate-950/40"}>
                      <td className="py-3 px-3">
                        <div className="font-bold text-white">{m.date}</div>
                        <div className="text-[11px] text-cyan-300">{m.facility}</div>
                        <div className="text-[10px] text-slate-400">({m.patientAge} tuổi)</div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-bold text-slate-100">{m.rightEye.sphere}</div>
                        {m.rightEye.cylinder && <div className="text-[11px] text-amber-300">Cyl: {m.rightEye.cylinder} {m.rightEye.axis ? `x ${m.rightEye.axis}` : ''}</div>}
                        <div className="text-[10px] text-slate-400">TL: {m.rightEye.uncorrectedVA ? `Không kính ${m.rightEye.uncorrectedVA} -> ` : ''}Có kính {m.rightEye.correctedVA || '10/10'}</div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-bold text-slate-100">{m.leftEye.sphere}</div>
                        {m.leftEye.cylinder && <div className="text-[11px] text-amber-300">Cyl: {m.leftEye.cylinder} {m.leftEye.axis ? `x ${m.leftEye.axis}` : ''}</div>}
                        <div className="text-[10px] text-slate-400">TL: {m.leftEye.uncorrectedVA ? `Không kính ${m.leftEye.uncorrectedVA} -> ` : ''}Có kính {m.leftEye.correctedVA || '10/10'}</div>
                      </td>
                      <td className="py-3 px-3 font-mono font-bold text-emerald-400">
                        {m.pd}mm
                      </td>
                      <td className="py-3 px-3 text-[11px] leading-relaxed">
                        <div className="text-slate-200">{m.progressionNote}</div>
                        {m.lensTypeFitted && <div className="text-cyan-300 font-medium">Tròng: {m.lensTypeFitted}</div>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-r-xl text-xs space-y-1 text-slate-300">
            <div className="font-bold text-cyan-400 uppercase tracking-wider">
              Tóm Tắt Diễn Tiến Khúc Xạ:
            </div>
            <p className="leading-relaxed text-slate-300">
              {minhAnhVisionProfile.progressionSummary.rightEyeSphereChange}. {minhAnhVisionProfile.progressionSummary.leftEyeSphereChange}. {minhAnhVisionProfile.progressionSummary.annualProgressionRate}
            </p>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* CHAPTER 1: PATHOPHYSIOLOGY OF AXIAL ELONGATION */}
      {/* ========================================================================= */}
      <section id="vision-ch-1" className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-6 space-y-6 border-t border-slate-800/80">
        
        <div className="flex items-start justify-between gap-4 font-sans">
          <div className="space-y-1">
            <div className="text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest">
              Chương 1 • Sinh Lý Học Nhãn Cầu
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Bản Chất Thật Sự Của Việc Tăng Độ Cận Ở Trẻ Em
            </h2>
          </div>
          <ReadAloudButton
            id="vision-ch-1-audio"
            title="Chương 1: Bản chất của tăng độ cận và trục nhãn cầu"
            text="Chương 1: Bản chất thật sự của việc tăng độ cận ở trẻ em. Tăng độ cận thực chất là sự dài ra về mặt cấu trúc giải phẫu của trục nhãn cầu. Cứ mỗi 1 milimet trục mắt dài thêm, độ cận sẽ tăng từ 2.5 đến 3 Diop. Kính đơn tròng truyền thống tạo ra hiện tượng Defocus ngoại vi ra sau võng mạc, vô tình gửi tín hiệu kích thích nhãn cầu tiếp tục dài ra."
            variant="chapter"
          />
        </div>

        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            Rất nhiều phụ huynh nghĩ rằng độ cận tăng đơn thuần là do mắt bị "yếu đi" hay cơ mắt mệt mỏi. Tuy nhiên, theo các nghiên cứu giải phẫu của <strong className="text-cyan-300">Hội Khúc Xạ Nhãn Khoa Quốc Tế (IMI)</strong>, tăng độ cận ở lứa tuổi học đường (đặc biệt từ 11 đến 18 tuổi) thực chất là <strong className="text-white">sự dài ra vĩnh viễn về mặt cơ học của trục nhãn cầu (Axial Length - AL)</strong>.
          </p>

          <p>
            Ở mắt bình thường (chính thị), trục nhãn cầu dài khoảng <strong>23.5mm – 24.0mm</strong>. Khi trục nhãn cầu phát triển dài thêm dù chỉ <strong>1 milimét (1mm)</strong>, độ cận của mắt sẽ tăng thêm khoảng <strong>2.50D đến 3.00 Diop</strong>. Trục mắt một khi đã dài ra thì không thể tự co ngắn lại.
          </p>

          {/* Book Styled Concept Section: The Paradox of Single Vision Lenses */}
          <div className="my-6 pl-4 border-l-2 border-cyan-500/70 space-y-2 font-sans text-sm">
            <div className="font-bold text-cyan-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Nghịch Lý Kính Cận Đơn Tròng Truyền Thống: "Peripheral Hyperopic Defocus"</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Kính cận thông thường (Single Vision) được thiết kế để đưa chùm sáng trung tâm hội tụ chuẩn xác lên hố hoàng điểm giúp mắt nhìn rõ 10/10. Tuy nhiên, do võng mạc của con người có hình vòm cong, các tia sáng đi qua vùng rìa mép của tròng kính thông thường sẽ bị khúc xạ và hội tụ <em>ra phía sau võng mạc ngoại vi</em> (hiện tượng viễn thị hóa vùng rìa).
            </p>
            <p className="text-slate-300 leading-relaxed">
              Bộ não và các tế bào biểu mô sắc tố võng mạc nhận tín hiệu quang học này và lầm tưởng rằng mắt chưa đủ chiều dài để bắt trọn hình ảnh. Tế bào sẽ tiết ra các chất điều hòa sinh học thúc đẩy củng mạc (vỏ bọc nhãn cầu) tiếp tục giãn dài ra phía sau — khiến mắt càng đeo kính thường, độ cận càng tăng nhanh.
            </p>
          </div>

          <p>
            Đối với học sinh, việc bắt đầu bị cận từ năm 11 tuổi (đúng vào mốc tiền dậy thì) cộng với cường độ tiếp xúc màn hình máy tính, điện thoại nhiều khiến áp lực điều tiết lên cơ thể mi tăng cao, tạo môi trường thuận lợi để trục mắt dài ra nhanh chóng nếu không có rào chắn quang học chuyên dụng can thiệp.
          </p>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 2: ASTIGMATISM & OPTICAL FITTING */}
      {/* ========================================================================= */}
      <section id="vision-ch-2" className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-6 space-y-6 border-t border-slate-800/80">
        
        <div className="flex items-start justify-between gap-4 font-sans">
          <div className="space-y-1">
            <div className="text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest">
              Chương 2 • Loạn Thị & Khúc Xạ Học
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Giải Mã Độ Loạn Thị Đi Kèm & Yêu Cầu Canh Tâm Quang Học
            </h2>
          </div>
          <ReadAloudButton
            id="vision-ch-2-audio"
            title="Chương 2: Loạn thị đi kèm và kỹ thuật canh tâm quang học"
            text="Chương 2: Giải mã độ loạn thị đi kèm và yêu cầu canh tâm quang học. Loạn thị xảy ra khi giác mạc có độ cong không đồng đều giống như hình quả bóng bầu dục. Tròng kính kiểm soát cận thị hiện đại hỗ trợ đầy đủ độ loạn lên tới âm 4 Diop. Việc đo khoảng cách đồng tử và chiều cao tâm kính là yếu tố then chốt để đảm bảo hiệu quả điều trị."
            variant="chapter"
          />
        </div>

        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            Hồ sơ khúc xạ ghi nhận tình trạng <strong className="text-white">cận thị có kèm độ loạn (Compound Myopic Astigmatism)</strong>. Nhiều bậc phụ huynh thường lo lắng liệu tròng kính công nghệ mới có thể vừa hãm tăng độ cận vừa xử lý được độ loạn hay không.
          </p>

          <p>
            <strong>Bản chất của độ loạn thị:</strong> Nếu như giác mạc bình thường tròn đều như một quả bóng đá (khúc xạ ánh sáng đồng nhất ở mọi kinh tuyến), thì mắt loạn thị có bề mặt giác mạc cong theo hình quả bóng bầu dục (kinh tuyến dọc và kinh tuyến ngang có độ cong khác nhau). Hậu quả là ánh sáng đi vào mắt bị tách thành 2 đường tiêu cự khác nhau, gây ra hiện tượng nhìn hình bị nhòe viền, bóng ma (ghosting) và rất nhanh mỏi mắt khi học tập.
          </p>

          <div className="my-4 pl-4 border-l-2 border-emerald-500/70 space-y-1.5 font-sans text-sm">
            <div className="font-bold text-emerald-300 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Khẳng Định Lâm Sàng: Tròng Defocus Xử Lý Hoàn Toàn Độ Loạn</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Các dòng tròng kính kiểm soát cận thị hàng đầu thế giới (Essilor Stellest, Zeiss MyoCare, Hoya MiYOSMART) đều được sản xuất dưới dạng đặt riêng (Rx Prescription) với dải công suất hỗ trợ độ loạn (Cylinder) lên tới <strong>-4.00D</strong> và xoay chỉnh trục loạn (Axis) chính xác từng 1 độ từ 0 đến 180 độ.
            </p>
          </div>

          <p>
            <strong>Nguyên tắc "Bất di bất dịch" khi cắt kính cho học sinh:</strong> Do tròng kính Defocus có vùng nhìn rõ trung tâm từ 7mm – 9.4mm được bao bọc bởi hàng trăm vi thấu kính phân đoạn, vị trí tâm quang học của tròng kính bắt buộc phải trùng khớp tuyệt đối với tâm đồng tử của mắt. Gia đình cần yêu cầu nơi đo khám:
          </p>

          <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300 font-sans text-sm">
            <li>Đo khoảng cách hai đồng tử (Pupillary Distance - PD) riêng biệt từng mắt (Monocular PD).</li>
            <li>Đo chiều cao tâm đồng tử trên chính gọng kính đã đeo cân chỉnh (Fitting Height - FH).</li>
            <li>Khoảng cách từ đỉnh giác mạc đến mặt sau tròng kính (Vertex Distance) duy trì chuẩn 12mm.</li>
          </ul>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 3: COMPARISON & DECISION MATRIX (SINGLE VISION VS DEFOCUS LENSES) */}
      {/* ========================================================================= */}
      <section id="vision-ch-3" className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-6 space-y-6 border-t border-slate-800/80">
        
        <div className="flex items-start justify-between gap-4 font-sans">
          <div className="space-y-1">
            <div className="text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-cyan-400" />
              <span>Chương 3 • So Sánh & Cây Quyết Định Lâm Sàng</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              So Sánh Ưu Khuyết Điểm: Kính Cận Đơn Tròng Thường vs. Kính Kiểm Soát Độ Cận
            </h2>
          </div>
          <ReadAloudButton
            id="vision-ch-3-audio"
            title="Chương 3: So sánh ưu khuyết và cây quyết định lựa chọn tròng kính"
            text="Chương 3: So sánh ưu khuyết điểm và tiêu chí quyết định giữa cắt kính cận bình thường và kính kiểm soát độ cận. Kính đơn tròng thông thường chỉ giúp nhìn rõ tức thời nhưng tạo Defocus viễn thị ngoại vi kích thích nhãn cầu tiếp tục dài ra, độ cận tăng liên tục. Kính kiểm soát độ cận công nghệ Defocus tạo phanh sinh học kìm hãm 60 đến 67% độ tăng cận, bảo vệ trục mắt vĩnh viễn và dự phòng thoái hóa võng mạc."
            variant="chapter"
          />
        </div>

        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            Khi được chẩn đoán cận thị tiến triển ở lứa tuổi học đường, câu hỏi lớn nhất của đa số phụ huynh là: <strong className="text-white">"Nên cắt kính cận bình thường hay đầu tư tròng kính kiểm soát độ cận công nghệ mới?"</strong>. Việc so sánh đối chiếu đa chiều giúp gia đình đưa ra quyết định y khoa sáng suốt nhất.
          </p>

          {/* Detailed Multi-Dimensional Comparison Table */}
          <div className="pt-2 font-sans space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Bảng Đối Chiếu Đa Chiều: Kính Cận Thường vs Kính Kiểm Soát Độ Cận (Defocus)</span>
            </h3>

            <div className="overflow-x-auto border border-slate-800 rounded-xl bg-slate-900/40">
              <table className="w-full text-left text-xs sm:text-sm font-sans">
                <thead>
                  <tr className="bg-slate-900 text-cyan-400 font-mono uppercase border-b border-slate-800">
                    <th className="py-3 px-3 min-w-[130px]">Tiêu Chí So Sánh</th>
                    <th className="py-3 px-3 text-slate-300 min-w-[200px]">Kính Cận Thường (Single Vision)</th>
                    <th className="py-3 px-3 text-cyan-200 bg-cyan-950/30 border-l border-cyan-800/40 min-w-[220px]">Kính Kiểm Soát Độ Cận (Defocus)</th>
                    <th className="py-3 px-3 text-emerald-400 min-w-[200px]">Tác Động Lâm Sàng</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {singleVsDefocusComparison.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950/40" : "bg-slate-900/20"}>
                      <td className="py-3 px-3 font-bold text-slate-100">{item.criteria}</td>
                      <td className="py-3 px-3 text-slate-400 leading-relaxed">{item.singleVisionLens}</td>
                      <td className="py-3 px-3 text-cyan-100 bg-cyan-950/20 border-l border-cyan-900/40 font-medium leading-relaxed">
                        {item.myopiaControlLens}
                      </td>
                      <td className="py-3 px-3 text-xs leading-relaxed text-slate-300">
                        {item.clinicalImpact}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Decision Tree / Clinical Recommendation Matrix */}
          <div className="pt-6 font-sans space-y-4">
            <div className="border-b border-slate-900 pb-2 flex items-center gap-2">
              <GitFork className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base sm:text-lg font-bold text-white">
                Cây Quyết Định Lâm Sàng: Khi Nào Nên Chọn Loại Nào?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {decisionTreeMatrix.map((opt, idx) => (
                <div 
                  key={idx}
                  className={`p-5 rounded-2xl border space-y-3 flex flex-col justify-between ${
                    idx === 0 
                      ? 'bg-cyan-950/30 border-cyan-500/50 shadow-lg shadow-cyan-950/40' 
                      : 'bg-slate-900/40 border-slate-800'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold font-mono border ${opt.badgeColor}`}>
                        {opt.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-black text-white leading-snug">
                      {opt.recommendation}
                    </h4>

                    <div className="text-xs text-slate-300">
                      <strong className="text-slate-100">Đối tượng mục tiêu: </strong>
                      {opt.targetGroup}
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs">
                      <div className="font-bold text-cyan-300 uppercase">Tiêu chí nhận biết then chốt:</div>
                      <ul className="space-y-1 text-slate-300">
                        {opt.keyCriteria.map((c, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950/80 border border-slate-800/80 rounded-xl text-xs text-cyan-200 mt-2">
                    <strong className="text-white">Lý do y khoa: </strong>
                    {opt.rationale}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-amber-950/20 border-l-2 border-amber-500 text-amber-200 text-xs sm:text-sm font-sans space-y-1 rounded-r-xl">
            <div className="font-bold text-amber-400 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" />
              <span>Kết Luận Lâm Sàng Dành Cho Học Sinh 14 Tuổi (Sinh 19/01/2012)</span>
            </div>
            <p className="leading-relaxed">
              Với hồ sơ phát hiện cận từ 11 tuổi, cận tăng liên tục kèm độ loạn thị và tần suất nhìn màn hình nhiều, <strong className="text-white">việc chỉ cắt kính cận bình thường là một sai lầm phổ biến</strong> khiến trục nhãn cầu tiếp tục dài ra vĩnh viễn. Quyết định chuyển sang <strong className="text-cyan-300">tròng kính kiểm soát độ cận (Essilor Stellest hoặc Zeiss MyoCare S)</strong> là khoản đầu tư y khoa thiết yếu để bảo vệ cấu trúc mắt trước khi kết thúc giai đoạn dậy thì.
            </p>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 4: SCIENTIFIC RESEARCH & DEFOCUS TECHNOLOGIES */}
      {/* ========================================================================= */}
      <section id="vision-ch-4" className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-6 space-y-6 border-t border-slate-800/80">
        
        <div className="flex items-start justify-between gap-4 font-sans">
          <div className="space-y-1">
            <div className="text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest">
              Chương 4 • Y Học Thực Chứng
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Phân Tích Các Nghiên Cứu Khoa Học & Công Nghệ Tròng Kính Defocus
            </h2>
          </div>
          <ReadAloudButton
            id="vision-ch-4-audio"
            title="Chương 4: Nghiên cứu khoa học và công nghệ tròng kính Defocus"
            text="Chương 4: Phân tích các nghiên cứu khoa học và công nghệ tròng kính Defocus. Công nghệ H.A.L.T của Essilor Stellest với 1021 vi thấu kính phi cầu giúp giảm 67% tiến triển độ cận trên JAMA Ophthalmology. Công nghệ D.I.M.S của Hoya MiYOSMART với nghiên cứu 6 năm khẳng định giảm 60% dài trục mắt. Công nghệ C.A.R.E của Carl Zeiss tối ưu hóa cho lứa tuổi trên 10 tuổi."
            variant="chapter"
          />
        </div>

        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            Trong 5 năm trở lại đây (2020 – 2026), ngành nhãn khoa thế giới đã chứng kiến cuộc cách mạng mang tên <strong className="text-cyan-300">Myopia Control Defocus Spectacle Lenses</strong>. Thay vì chỉ đơn thuần giúp trẻ nhìn rõ, các nhà khoa học đã ứng dụng công nghệ vi quang học để tạo ra tín hiệu <em>"Myopic Defocus"</em> (hội tụ trước võng mạc ngoại vi) nhằm gửi tín hiệu phanh sinh học ức chế củng mạc kéo dài.
          </p>

          {/* Detailed 4 Core Technologies Flat Editorial */}
          <div className="space-y-6 pt-2 font-sans">
            
            {/* Tech 1: H.A.L.T (Essilor Stellest) */}
            <div className="border-b border-slate-900 pb-5 space-y-2">
              <div className="flex items-center justify-between text-xs text-cyan-400 font-mono font-bold uppercase">
                <span>1. Công Nghệ H.A.L.T (Highly Aspherical Lenslet Target) • Essilor Stellest (Pháp)</span>
                <span className="text-emerald-400">Hiệu quả: Giảm 67% độ cận</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Cấu Trúc Vi Thấu Kính Phi Cầu 11 Vòng Đồng Tâm (1.021 Vi Thấu Kính)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Được công bố trên tạp chí y khoa số 1 thế giới <strong>JAMA Ophthalmology</strong> từ nghiên cứu thử nghiệm lâm sàng ngẫu nhiên có đối chứng (RCT) tại Đại học Y Ôn Châu. Cấu trúc 1.021 vi thấu kính phi cầu xếp trên 11 vòng đồng tâm tạo ra một "khối thể tích ánh sáng Defocus" uốn lượn khớp hoàn hảo với độ cong võng mạc. Khi trẻ đeo kính đủ từ 12 tiếng mỗi ngày, hiệu quả kìm hãm cận thị đạt 67% và kiểm soát trục nhãn cầu tới 60%.
              </p>
            </div>

            {/* Tech 2: D.I.M.S (Hoya MiYOSMART) */}
            <div className="border-b border-slate-900 pb-5 space-y-2">
              <div className="flex items-center justify-between text-xs text-amber-400 font-mono font-bold uppercase">
                <span>2. Công Nghệ D.I.M.S (Defocus Incorporated Multiple Segments) • Hoya MiYOSMART (Nhật)</span>
                <span className="text-emerald-400">Hiệu quả: Giảm 59-60% độ cận (Dữ liệu 6 năm)</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                396 Vi Thấu Kính Đa Điểm Dạng Tổ Ong Bao Quanh Vùng Nhìn Trung Tâm 9.4mm
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Phát minh bởi Đại học Bách Khoa Hồng Kông (PolyU) và Hoya Vision Care, công bố trên <strong>British Journal of Ophthalmology (BJO)</strong>. Điểm mạnh vượt trội của MiYOSMART là có dữ liệu theo dõi lâm sàng dài hạn nhất hiện nay (6 năm liên tục), chứng minh khả năng kiểm soát trục mắt ổn định mà không xảy ra hiện tượng "dội ngược" tăng vọt khi ngưng dùng. Phôi kính Polycarbonate EyeShield chống va đập tiêu chuẩn cao.
              </p>
            </div>

            {/* Tech 3: C.A.R.E (Zeiss MyoCare) */}
            <div className="border-b border-slate-900 pb-5 space-y-2">
              <div className="flex items-center justify-between text-xs text-indigo-400 font-mono font-bold uppercase">
                <span>3. Công Nghệ C.A.R.E (Cylindrical Annular Refractive Elements) • Carl Zeiss (Đức)</span>
                <span className="text-emerald-400">Hiệu quả: Giảm 63-68% độ cận</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Vòng Khúc Xạ Vi Hình Trụ Đồng Tâm Xen Kẽ Theo Độ Tuổi (MyoCare S)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Công nghệ từ hãng Carl Zeiss (Đức). Thay vì dùng các chấm vi thấu kính tròn, Zeiss dùng các dải vòng nhẫn khúc xạ vi hình trụ xen kẽ giúp tối ưu hóa quang sai và giảm độ nhòe ngoại vi khi mắt liếc qua lại. Zeiss chia sản phẩm thành 2 dòng: MyoCare (trẻ &lt; 10 tuổi) và <strong>MyoCare S</strong> (trẻ từ 10-18 tuổi — thiết kế tối ưu riêng cho mật độ điều tiết của học sinh trung học).
              </p>
            </div>

            {/* Tech 4: Freeform Radial Defocus (Rodenstock MyCon) */}
            <div className="pb-2 space-y-2">
              <div className="flex items-center justify-between text-xs text-rose-400 font-mono font-bold uppercase">
                <span>4. Công Nghệ Freeform Aspheric Defocus • Rodenstock MyCon (Đức)</span>
                <span className="text-slate-400">Hiệu quả: Giảm 40-50% độ cận</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Kiểm Soát Vùng Rìa Thái Dương & Mũi Theo Giải Phẫu Nhãn Cầu
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Tập trung tạo độ giảm công suất ở hai bên sườn thái dương và sống mũi, bề mặt tròng kính hoàn toàn trong suốt thẩm mỹ như kính thường, phù hợp cho học sinh cận nhẹ đến vừa.
              </p>
            </div>

          </div>

          {/* Deep International Research Insights (Molecular & Photobiological) */}
          <div className="pt-6 space-y-4 font-sans">
            <div className="border-b border-slate-900 pb-2">
              <div className="text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest">
                Đột Phá Nghiên Cứu Quốc Tế & Cơ Chế Phân Tử (Molecular & Photobiology)
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                5 Bằng Chứng Y Học Thực Chứng Định Hình Phác Đồ Điều Trị Hiện Đại
              </h3>
            </div>

            <div className="space-y-4">
              {deepScientificInsights.map((insight, idx) => (
                <div key={insight.id} className="p-4 bg-slate-900/40 border border-slate-800/80 rounded-xl space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase">
                      <span>Trụ Cột Nghiên Cứu 0{idx + 1}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-300 font-sans">{insight.authoritativeSource}</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-800/50">
                      {insight.keyMetric}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {insight.topic}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <strong className="text-cyan-200">Cơ chế sinh học: </strong>
                    {insight.coreMechanism}
                  </p>

                  <div className="text-xs text-slate-400 pt-1 border-t border-slate-800/60 flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold shrink-0">Ý nghĩa lâm sàng:</span>
                    <span>{insight.clinicalSignificance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flat Scientific Comparison Matrix */}
          <div className="pt-6 space-y-3 font-sans">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>Đối Chiếu 4 Phương Pháp Kiểm Soát Cận Thị Hiện Nay</span>
            </h3>
            
            {/* Mobile View: Consolidated 2-Column Responsive Layout (< sm) */}
            <div className="block sm:hidden border-t border-b border-slate-800 py-2">
              <div className="space-y-3">
                {myopiaInterventionsComparison.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`p-3 rounded-xl border text-sm space-y-2 ${
                      idx === 0 
                        ? 'bg-cyan-950/30 border-cyan-500/40 text-cyan-100' 
                        : 'bg-slate-900/50 border-slate-800 text-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 border-b border-slate-800/80 pb-1.5">
                      <div>
                        <div className="font-bold text-white text-sm">{item.vietnameseName}</div>
                        <div className="text-xs text-slate-400 font-mono">{item.method}</div>
                      </div>
                      <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/50 shrink-0">
                        {item.costVND}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-1.5 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400 font-medium shrink-0">Hiệu quả:</span>
                        <span className="font-semibold text-emerald-400">{item.efficacy}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-medium">Độ an toàn: </span>
                        <span className="text-slate-200">{item.safetyProfile}</span>
                      </div>
                      <div className="pt-1 text-slate-300 text-xs leading-relaxed border-t border-slate-800/40">
                        <strong className="text-cyan-300">Đánh giá: </strong>{item.suitabilityForMinhAnh}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop / Tablet View: Full 5-Column Table (>= sm) */}
            <div className="hidden sm:block overflow-x-auto border-t border-b border-slate-800 py-2">
              <table className="w-full text-left text-xs sm:text-sm font-sans">
                <thead>
                  <tr className="text-cyan-400 font-mono uppercase border-b border-slate-800/80">
                    <th className="py-2.5 pr-3">Phương Pháp</th>
                    <th className="py-2.5 px-3">Hiệu Quả Kiểm Soát</th>
                    <th className="py-2.5 px-3">Độ An Toàn</th>
                    <th className="py-2.5 px-3">Chi Phí Ước Tính</th>
                    <th className="py-2.5 pl-3">Đánh Giá Phù Hợp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-900 text-slate-300">
                  {myopiaInterventionsComparison.map((item, idx) => (
                    <tr key={idx} className={idx === 0 ? "bg-cyan-950/20 text-cyan-100" : ""}>
                      <td className="py-3 pr-3 font-bold text-slate-100">{item.vietnameseName}</td>
                      <td className="py-3 px-3 font-semibold text-emerald-400">{item.efficacy}</td>
                      <td className="py-3 px-3">{item.safetyProfile}</td>
                      <td className="py-3 px-3 font-mono text-cyan-300">{item.costVND}</td>
                      <td className="py-3 pl-3 text-xs leading-relaxed">{item.suitabilityForMinhAnh}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 5: TOP BRANDS IN VIETNAM MARKET (FLAT SELECTOR) */}
      {/* ========================================================================= */}
      <section id="vision-ch-5" className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-6 space-y-6 border-t border-slate-800/80">
        
        <div className="flex items-start justify-between gap-4 font-sans">
          <div className="space-y-1">
            <div className="text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest">
              Chương 5 • Khảo Sát Thị Trường Việt Nam
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Top Thương Hiệu Tròng Kính Kiểm Soát Cận Thị Tại Việt Nam (2026)
            </h2>
          </div>
          <ReadAloudButton
            id="vision-ch-5-audio"
            title="Chương 5: Top thương hiệu tròng kính kiểm soát cận thị tại Việt Nam"
            text="Chương 5: Top thương hiệu tròng kính kiểm soát cận thị tại Việt Nam. Đứng đầu là Essilor Stellest của Pháp với công nghệ HALT giá từ 3 triệu 9 đến 4 triệu 9. Hoya MiYOSMART của Nhật Bản với công nghệ DIMS giá từ 4 triệu 5 đến 5 triệu 5. Carl Zeiss MyoCare của Đức giá từ 3 triệu 8 đến 5 triệu 2."
            variant="chapter"
          />
        </div>

        {/* Minimalist Flat Brand Tabs */}
        <div className="flex flex-wrap gap-2 font-sans text-xs">
          {myopiaControlLensesList.map((lens) => {
            const isSelected = lens.id === selectedLensId;
            return (
              <button
                key={lens.id}
                onClick={() => setSelectedLensId(lens.id)}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950'
                    : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
                }`}
              >
                {lens.name} ({lens.origin.split(' ')[0]})
              </button>
            );
          })}
        </div>

        {/* Flat Detailed Brand Monograph View */}
        <div className="font-sans space-y-5 pt-2">
          <div className="space-y-1 border-b border-slate-900 pb-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                {activeLens.origin} • {activeLens.technologyCode}
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400">
                Giá: {activeLens.priceRangeVND}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              {activeLens.name} ({activeLens.brand})
            </h3>
            <p className="text-xs text-slate-400">
              {activeLens.technologyFull}
            </p>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-slate-300">
            <div>
              <strong className="text-slate-100">Cơ chế quang học: </strong>
              <span>{activeLens.mechanism}</span>
            </div>

            <div>
              <strong className="text-slate-100">Bằng chứng nghiên cứu lâm sàng: </strong>
              <span>{activeLens.clinicalStudy.institution} ({activeLens.clinicalStudy.journal}). Kết quả: <strong className="text-emerald-300">{activeLens.clinicalStudy.efficacyRate}</strong>, {activeLens.clinicalStudy.axialLengthControl}. {activeLens.clinicalStudy.keyFinding}</span>
            </div>

            <div>
              <strong className="text-slate-100">Khả năng hỗ trợ độ cận & loạn (Rx Range): </strong>
              <span>Độ cận: {activeLens.rxRange.sphere} | Độ loạn: <strong className="text-cyan-300">{activeLens.rxRange.cylinder}</strong></span>
            </div>

            <div>
              <strong className="text-slate-100">Tính năng lọc ánh sáng xanh & bảo vệ màn hình: </strong>
              <span>{activeLens.blueFilterFeature}</span>
            </div>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 border-l-2 border-emerald-500/60 pl-3">
                <div className="font-bold text-xs uppercase text-emerald-400">Ưu điểm nổi bật:</div>
                <ul className="space-y-0.5 text-xs text-slate-300">
                  {activeLens.pros.map((p, i) => (
                    <li key={i}>• {p}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1 border-l-2 border-amber-500/60 pl-3">
                <div className="font-bold text-xs uppercase text-amber-400">Điểm cần lưu ý:</div>
                <ul className="space-y-0.5 text-xs text-slate-300">
                  {activeLens.cons.map((c, i) => (
                    <li key={i}>• {c}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-3 bg-cyan-950/20 border-l-2 border-cyan-400 text-xs text-cyan-200">
              <strong>Đánh giá mức độ phù hợp: </strong>{activeLens.bestFitFor}
            </div>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 6: TAILORED ACTION PLAN FOR ADOLESCENTS */}
      {/* ========================================================================= */}
      <section id="vision-ch-6" className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-6 space-y-6 border-t border-slate-800/80">
        
        <div className="flex items-start justify-between gap-4 font-sans">
          <div className="space-y-1">
            <div className="text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest">
              Chương 6 • Lộ Trình Can Thiệp Phối Hợp
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Phác Đồ Hỗ Trợ Kiểm Soát Cận Thị Tuổi Dậy Thì
            </h2>
          </div>
          <ReadAloudButton
            id="vision-ch-6-audio"
            title="Chương 6: Phác đồ kiểm soát cận thị cho học sinh 14 tuổi"
            text="Chương 6: Phác đồ kiểm soát cận thị toàn diện dành cho học sinh 14 tuổi. Một là trang bị tròng kính Defocus Essilor Stellest hoặc Zeiss MyoCare S có lọc ánh sáng xanh và cắt đúng trục loạn. Hai là thiết lập kỷ luật công thái học 20-20-20 khi dùng điện thoại và máy tính. Ba là duy trì thời gian hoạt động ngoài trời ban ngày tối thiểu 90 đến 120 phút mỗi ngày."
            variant="chapter"
          />
        </div>

        <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
          <p>
            Dựa trên các thông số cá thể hóa của học sinh 14 tuổi (cận tăng liên tục từ 11 tuổi, có loạn thị, thời gian học tập và giải trí với thiết bị điện tử cao), phác đồ can thiệp tối ưu nhất bao gồm 3 trụ cột không thể tách rời:
          </p>

          {/* Pillar 1 */}
          <div className="border-l-2 border-cyan-500 pl-4 py-1 space-y-1.5">
            <div className="text-xs font-mono font-bold text-cyan-400 uppercase">Trụ Cột 1: Can Thiệp Quang Học Công Nghệ Defocus</div>
            <h3 className="text-base font-bold text-white">Trang Bị Tròng Kính Essilor Stellest hoặc Zeiss MyoCare S (Có Lọc Ánh Sáng Xanh)</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Khuyến nghị số 1 là lựa chọn <strong>Essilor Stellest</strong> (váng Crizal Rock) hoặc <strong>Zeiss MyoCare S</strong> (váng BlueGuard). Tròng kính cần được đặt sản xuất đúng theo độ cận và độ loạn (Cyl & Axis) của từng mắt, có tính năng lọc ánh sáng xanh để bảo vệ đáy mắt khi em làm việc trên máy tính. Em cần duy trì thói quen đeo kính liên tục <strong>từ 12 giờ trở lên mỗi ngày</strong>.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="border-l-2 border-amber-500 pl-4 py-1 space-y-1.5">
            <div className="text-xs font-mono font-bold text-amber-400 uppercase">Trụ Cột 2: Kỷ Luật Công Thái Học Khi Dùng Màn Hình Số</div>
            <h3 className="text-base font-bold text-white">Quy Tắc 20-20-20 & Khoảng Cách Nhìn Chuẩn</h3>
            <ul className="space-y-1 text-xs sm:text-sm text-slate-300">
              <li>• <strong>Quy tắc 20-20-20:</strong> Cứ 20 phút nhìn màn hình, em tạm dừng 20 giây và phóng tầm mắt nhìn xa một vật thể cách 6 mét (20 feet) qua cửa sổ để cơ thể mi xả co thắt.</li>
              <li>• <strong>Khoảng cách thiết bị:</strong> Giữ điện thoại cách mắt &gt;= 35 - 40cm (không để sát mặt hoặc nằm xem); màn hình máy tính cách mắt 50 - 60cm, đặt thấp hơn tầm mắt 15 độ.</li>
              <li>• <strong>Ánh sáng phòng học:</strong> Bật đủ đèn trần kết hợp đèn bàn chống cận, tuyệt đối không dùng điện thoại trong bóng tối tắt đèn.</li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="border-l-2 border-emerald-500 pl-4 py-1 space-y-1.5">
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase">Trụ Cột 3: Nạp Ánh Sáng Tự Nhiên (Outdoor Daylight) & Đo Trục Mắt</div>
            <h3 className="text-base font-bold text-white">Hoạt Động Ngoài Trời &gt;= 90 - 120 Phút/Ngày & Đo Sinh Trắc Học Định Kỳ</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Ánh sáng tự nhiên ngoài trời (10.000 – 100.000 lux) là liều thuốc sinh học tự nhiên kích thích tế bào Amacrine tiết <strong>Dopamine võng mạc</strong> kìm hãm dài trục mắt. Khuyến khích học sinh tận dụng giờ ra chơi, đi bộ, tập thể thao ngoài trời ít nhất 1.5 – 2 tiếng mỗi ngày. Định kỳ <strong>mỗi 3 - 6 tháng</strong>, đưa em đến bệnh viện mắt chuyên khoa để <em>đo độ dài trục nhãn cầu (Axial Length)</em> bằng máy IOL Master để kiểm tra hiệu quả hãm tăng độ.
            </p>
          </div>
        </div>

        {/* Flat Interactive Lifestyle & Risk Modeler */}
        <div className="pt-4 border-t border-slate-900 font-sans space-y-4">
          <div className="text-xs uppercase font-bold text-cyan-400 tracking-wider">
            Công Cụ Mô Phỏng Nguy Cơ Tiến Triển Cận Thị (Flat Calculator)
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1.5">
              <label className="text-slate-300 flex items-center justify-between">
                <span className="flex items-center gap-1.5"><Laptop className="w-3.5 h-3.5 text-cyan-400" /> Thời gian dùng màn hình / nhìn gần mỗi ngày:</span>
                <span className="font-bold text-white">{screenHours} giờ/ngày</span>
              </label>
              <input
                type="range"
                min="1"
                max="10"
                step="0.5"
                value={screenHours}
                onChange={(e) => setScreenHours(parseFloat(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-slate-300 flex items-center justify-between">
                <span className="flex items-center gap-1.5"><Sun className="w-3.5 h-3.5 text-amber-400" /> Thời gian hoạt động ngoài trời ban ngày:</span>
                <span className="font-bold text-white">{outdoorHours} giờ/ngày</span>
              </label>
              <input
                type="range"
                min="0"
                max="4"
                step="0.5"
                value={outdoorHours}
                onChange={(e) => setOutdoorHours(parseFloat(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>
          </div>

          <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg flex flex-wrap items-center justify-between gap-2 text-xs">
            <div>
              <span className="text-slate-400">Chỉ số nguy cơ dài trục mắt nếu đeo kính thường: </span>
              <span className={`font-bold ${riskPercent > 60 ? 'text-rose-400' : 'text-amber-400'}`}>{riskPercent}% (Rất Cao)</span>
            </div>
            <div className="text-emerald-400 font-bold">
              ✓ Giảm xuống còn &lt; 20% khi đeo kính Defocus (Stellest / MyoCare) đủ 12h/ngày
            </div>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 7: FAQS & CLINICAL QUESTIONS FOR THE DOCTOR */}
      {/* ========================================================================= */}
      <section id="vision-ch-7" className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-6 space-y-6 border-t border-slate-800/80">
        
        <div className="flex items-start justify-between gap-4 font-sans">
          <div className="space-y-1">
            <div className="text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest">
              Chương 7 • Cẩm Nang Hỏi Đáp Lâm Sàng
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Những Câu Hỏi Trọng Tâm Dành Cho Phụ Huynh & Bác Sĩ
            </h2>
          </div>
          <ReadAloudButton
            id="vision-ch-7-audio"
            title="Chương 7: Hỏi đáp lâm sàng và câu hỏi dành cho bác sĩ"
            text="Chương 7: Những câu hỏi trọng tâm dành cho phụ huynh và bác sĩ. Hướng dẫn giải đáp thắc mắc về độ loạn thị, thích nghi với tròng kính mới và danh sách câu hỏi cần mang đi khi khám tại các bệnh viện mắt chuyên khoa."
            variant="chapter"
          />
        </div>

        {/* Flat Minimalist QA Accordion */}
        <div className="space-y-3 font-sans">
          {visionQAItems.map((qa, idx) => {
            const isExpanded = expandedQAId === qa.id;
            return (
              <div 
                key={qa.id}
                className="border-b border-slate-900 pb-3 space-y-2"
              >
                <button
                  onClick={() => setExpandedQAId(isExpanded ? null : qa.id)}
                  className="w-full text-left flex items-start justify-between gap-3 text-xs sm:text-sm font-bold text-slate-100 hover:text-cyan-300 transition-colors cursor-pointer py-1"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-cyan-400 font-mono">0{idx + 1}.</span>
                    <span>{qa.question}</span>
                  </span>
                  <span className="text-slate-500 shrink-0">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isExpanded && (
                  <div className="space-y-2 text-xs sm:text-sm text-slate-300 pl-6 leading-relaxed">
                    <p className="font-medium text-cyan-200">{qa.shortSummary}</p>
                    <ul className="space-y-1 text-slate-300 text-xs">
                      {qa.detailedPoints.map((pt, i) => (
                        <li key={i}>• {pt}</li>
                      ))}
                    </ul>
                    <div className="text-[11px] text-emerald-400 italic pt-1">
                      {qa.clinicalHighlight}
                    </div>
                    {qa.doctorQuestionToAsk && (
                      <div className="p-2.5 bg-slate-900/80 border-l-2 border-cyan-400 text-slate-200 text-xs mt-2">
                        <strong className="text-cyan-300">Câu hỏi nên mang đi hỏi Bác Sĩ: </strong>
                        <em>"{qa.doctorQuestionToAsk}"</em>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Directory Navigation Buttons */}
        <div className="pt-4 flex flex-wrap items-center gap-3 font-sans text-xs">
          {onNavigateToDoctors && (
            <button
              onClick={onNavigateToDoctors}
              className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-lg flex items-center gap-1.5 cursor-pointer font-bold"
            >
              <Stethoscope className="w-4 h-4 text-cyan-400" />
              <span>Xem Danh Bạ Bệnh Viện Mắt & Trung Tâm Khúc Xạ Đầu Ngành</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          {onNavigateToQA && (
            <button
              onClick={onNavigateToQA}
              className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-lg flex items-center gap-1.5 cursor-pointer font-bold"
            >
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>Xem Toàn Bộ Tập Hỏi Đáp Y Khoa Tổng Hợp</span>
            </button>
          )}
        </div>

      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 8: NUTRITION & SCIENTIFIC REFERENCES */}
      {/* ========================================================================= */}
      <section id="vision-ch-8" className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-6 space-y-6 border-t border-slate-800/80 font-sans">
        
        <div className="space-y-1">
          <div className="text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest">
            Chương 8 • Dinh Dưỡng & Thư Mục Tài Liệu
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Dinh Dưỡng Nuôi Dưỡng Võng Mạc & Tài Liệu Y Khoa Quốc Tế
          </h2>
        </div>

        {/* Nutrition Tips */}
        <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Bên cạnh can thiệp quang học và ánh sáng tự nhiên, chế độ dinh dưỡng đóng vai trò bảo vệ các tế bào cảm thụ quang của hố hoàng điểm:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
            <div className="p-3 bg-slate-900/40 border border-slate-900 rounded-lg space-y-1">
              <div className="font-bold text-cyan-300">Lutein & Zeaxanthin</div>
              <p className="text-slate-400">Rau bina (chân vịt), cải xoăn, lòng đỏ trứng gà giúp tạo màng lọc tự nhiên bảo vệ hoàng điểm trước ánh sáng xanh.</p>
            </div>
            <div className="p-3 bg-slate-900/40 border border-slate-900 rounded-lg space-y-1">
              <div className="font-bold text-cyan-300">Omega-3 (DHA & EPA)</div>
              <p className="text-slate-400">Cá hồi, cá thu, hạt chia giúp chống khô mắt khi nhìn màn hình máy tính nhiều và nuôi dưỡng màng tế bào võng mạc.</p>
            </div>
            <div className="p-3 bg-slate-900/40 border border-slate-900 rounded-lg space-y-1">
              <div className="font-bold text-cyan-300">Vitamin A, C, E & Kẽm</div>
              <p className="text-slate-400">Cà rốt, ớt chuông, quả mọng, hạt bí ngô tham gia quá trình tái tạo sắc tố Rhodopsin giúp mắt nhìn rõ trong bóng tối.</p>
            </div>
          </div>
        </div>

        {/* References List */}
        <div className="pt-4 space-y-3">
          <div className="text-xs uppercase font-bold text-slate-400">
            Tài Liệu Tham Khảo Quốc Tế (International References)
          </div>
          <div className="space-y-2.5 text-xs text-slate-400">
            {visionScientificReferences.map((ref, idx) => (
              <div key={idx} className="border-l border-slate-800 pl-3 space-y-0.5">
                <div className="text-slate-300 font-medium">
                  [{idx + 1}] {ref.authors} ({ref.year}). <em>"{ref.title}"</em>. <span className="text-cyan-400">{ref.journal}</span>.
                </div>
                <div className="text-[11px] text-slate-400">
                  {ref.keyTakeaway} • <span className="font-mono text-slate-500">{ref.pmidOrDoi}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    </article>
  );
};
