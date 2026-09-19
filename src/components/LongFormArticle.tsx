import React, { useState } from 'react';
import { friendlyDiseases } from '../data/patientFriendlyData';
import { menstrualCyclePhases } from '../data/histologyData';
import { mediaAtlasItems } from '../data/mediaAtlasData';
import { clinicalDecisionTree } from '../data/decisionTreeData';
import { MedicalDisclaimerBanner } from './MedicalDisclaimerBanner';
import { ReferencesSection } from './ReferencesSection';
import { uterineTamoxifenReferences } from '../data/medicalReferencesData';
import type { MediaItem } from '../types/medical';
import { 
  HeartHandshake, 
  Sparkles, 
  Layers, 
  Clock, 
  Activity, 
  AlertTriangle, 
  Stethoscope, 
  Pill, 
  Video, 
  HelpCircle, 
  Search, 
  ShieldAlert, 
  Play, 
  RotateCcw, 
  BookOpen, 
  ChevronRight, 
  Flame, 
  Check
} from 'lucide-react';

interface LongFormArticleProps {
  onOpenVideoModal: (media: MediaItem) => void;
}

export const LongFormArticle: React.FC<LongFormArticleProps> = ({ onOpenVideoModal }) => {
  // Search & Filter States
  const [symptomSearch, setSymptomSearch] = useState<string>('');
  const [selectedDiseaseId, setSelectedDiseaseId] = useState<string>('endometriosis');
  const [selectedCyclePhase, setSelectedCyclePhase] = useState<string>('mid_secretory_woi');
  
  // Interactive Decision Tool States
  const [decisionHistory, setDecisionHistory] = useState<string[]>(['root']);
  const [decisionAnswers, setDecisionAnswers] = useState<string[]>([]);

  // Filtered diseases based on plain text search
  const filteredDiseases = friendlyDiseases.filter((d) => {
    if (!symptomSearch) return true;
    const q = symptomSearch.toLowerCase();
    return (
      d.title.toLowerCase().includes(q) ||
      d.whatIsIt.toLowerCase().includes(q) ||
      d.simpleAnalogy.toLowerCase().includes(q) ||
      d.warningSigns.some(s => s.symptom.toLowerCase().includes(q) || s.explanation.toLowerCase().includes(q))
    );
  });

  const activeDisease = friendlyDiseases.find(d => d.id === selectedDiseaseId) || friendlyDiseases[0];
  const activePhase = menstrualCyclePhases.find(p => p.id === selectedCyclePhase) || menstrualCyclePhases[0];

  // Decision Tool Handler
  const currentDecisionNodeId = decisionHistory[decisionHistory.length - 1];
  const currentDecisionNode = clinicalDecisionTree[currentDecisionNodeId];
  const isDecisionResult = currentDecisionNodeId === 'result';

  let finalDecisionRecommendation: any = null;
  if (isDecisionResult) {
    const parentId = decisionHistory[decisionHistory.length - 2];
    const parentNode = clinicalDecisionTree[parentId];
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

  return (
    <article className="w-full bg-slate-950 text-slate-100 font-sans pb-28">

      {/* Medical Disclaimer Banner */}
      <MedicalDisclaimerBanner
        specialty="Sản Phụ Khoa & Y Học Sinh Sản"
        primaryGuideline="ACOG Practice Bulletin, FIGO Staging, ESHRE Guidelines"
        lastUpdated="Tháng 9/2026"
      />
      
      {/* ========================================================================= */}
      {/* HERO SECTION: Warm, Relatable, Trustworthy Introduction */}
      {/* ========================================================================= */}
      <header className="relative w-full py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-4xl mx-auto space-y-5 text-center sm:text-left">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 text-xs font-semibold shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Cẩm Nang Y Khoa Thực Chứng 2026 • Dành Cho Mọi Phụ Nữ</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Hiểu Trọn Vẹn Về{' '}
            <span className="bg-gradient-to-r from-rose-400 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
              Nội Mạc Tử Cung
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Nội mạc tử cung chính là <strong>"lớp thảm đất phù sa màu mỡ"</strong> lót bên trong lòng tử cung của người phụ nữ. Đây là nơi đón nhận mầm sống thai nhi bám rễ, đồng thời cũng là nơi phát sinh nhiều rắc rối như đau bụng kinh dữ dội, rong kinh, khó thụ thai hay nguy cơ u bướu.
          </p>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4">
            <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl text-center">
              <span className="text-xl sm:text-2xl font-black text-teal-400 block">8 - 12mm</span>
              <span className="text-[11px] text-slate-400 font-medium">Độ dày chuẩn để thụ thai</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl text-center">
              <span className="text-xl sm:text-2xl font-black text-rose-400 block">≤ 4.0mm</span>
              <span className="text-[11px] text-slate-400 font-medium">Độ dày an toàn sau mãn kinh</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl text-center">
              <span className="text-xl sm:text-2xl font-black text-amber-400 block">48 Giờ</span>
              <span className="text-[11px] text-slate-400 font-medium">Cửa sổ vàng đón phôi thai</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl text-center">
              <span className="text-xl sm:text-2xl font-black text-emerald-400 block">&gt; 95%</span>
              <span className="text-xl sm:text-[11px] text-slate-400 font-medium">Khỏi bệnh nếu khám sớm</span>
            </div>
          </div>

          {/* Quick Search For Plain Symptoms */}
          <div className="pt-3">
            <div className="relative max-w-xl">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={symptomSearch}
                onChange={(e) => setSymptomSearch(e.target.value)}
                placeholder="Nhập triệu chứng của bạn (ví dụ: đau bụng kinh, ra máu nâu, hút thai, mỏng niêm mạc)..."
                className="w-full bg-slate-900 border border-teal-500/50 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-lg"
              />
              {symptomSearch && (
                <button
                  onClick={() => setSymptomSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕ Xóa
                </button>
              )}
            </div>
          </div>

        </div>
      </header>


      {/* ========================================================================= */}
      {/* CHƯƠNG 1: Giải Mã "Thảm Đất" Niêm Mạc & Chu Kỳ 28 Ngày */}
      {/* ========================================================================= */}
      <section id="chapter-1" className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 border-b border-slate-800">
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>Chương 1 • Sinh Lý Học Đời Thường</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Giải Mã "Thảm Đất" Niêm Mạc & Hành Trình 28 Ngày
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Trong suốt cuộc đời người phụ nữ, niêm mạc tử cung sẽ tái sinh và thay mới hơn 400 lần. Hãy hình dung buồng tử cung như một căn phòng được lót một tấm thảm gồm 2 tầng riêng biệt:
          </p>
        </div>

        {/* 2 Layers Explanation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3 shadow-md">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-rose-950 text-rose-300 border border-rose-800 text-[11px] font-bold">
                Tầng Trên Cùng (2 - 8mm)
              </span>
              <span className="text-xs text-slate-400 font-mono">Stratum Functionale</span>
            </div>
            <h3 className="font-extrabold text-lg text-rose-200">1. Lớp Đất Mọc & Rụng Hàng Tháng</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Đây là lớp trực tiếp nuôi dưỡng thai nhi. Nó được cấp máu bởi hệ thống <strong>"Động mạch xoắn"</strong> uốn lượn như lò xo. Mỗi tháng, lớp này sẽ dày lên dưới tác động của hormone. Nếu không có thai, động mạch xoắn co thắt lại, lớp đất này hoại tử và tróc ra thành <strong>máu kinh nguyệt</strong>.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3 shadow-md">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-teal-950 text-teal-300 border border-teal-800 text-[11px] font-bold">
                Tầng Gốc Ở Đáy (0.5 - 1.5mm)
              </span>
              <span className="text-xs text-slate-400 font-mono">Stratum Basale</span>
            </div>
            <h3 className="font-extrabold text-lg text-teal-200">2. Lớp Rễ Mầm Sinh Sôi (Không Bao Giờ Rụng)</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Nằm sâu sát lớp cơ, chứa các <strong>Tế bào gốc (Stem cells)</strong> và được nuôi bằng "Động mạch thẳng" luôn ổn định. Lớp này không bao giờ bong ra khi hành kinh mà làm nhiệm vụ "đâm chồi nảy lộc", tái tạo toàn bộ lớp niêm mạc mới toanh sau mỗi lần sạch kinh.
            </p>
          </div>

        </div>

        {/* Warning Note About Basal Damage */}
        <div className="bg-amber-950/70 border border-amber-600/40 p-4 rounded-2xl text-xs sm:text-sm text-amber-200 leading-relaxed flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <strong>Lời khuyên y khoa sống còn: </strong>
            Khi làm các thủ thuật như nạo hút phá thai hoặc bóc u xơ, nếu bác sĩ nạo quá mạnh tay làm trầy rách mất <em>Lớp rễ mầm đáy</em>, tử cung sẽ không thể mọc lại niêm mạc mới nữa, dẫn tới dính buồng tử cung (Hội chứng Asherman) và vô sinh.
          </div>
        </div>

        {/* Interactive 28-Day Timeline Simulator */}
        <div className="bg-slate-900 border border-slate-800 p-5 sm:p-7 rounded-3xl space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div>
              <h3 className="font-bold text-base text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400" />
                Vòng Quay 28 Ngày & "Cửa Sổ Đón Con" (WOI)
              </h3>
              <p className="text-xs text-slate-400">Chọn từng giai đoạn chu kỳ để xem biến đổi của niêm mạc</p>
            </div>
          </div>

          {/* Phase Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {menstrualCyclePhases.map((phase) => {
              const isActive = selectedCyclePhase === phase.id;
              const isWOI = phase.id === 'mid_secretory_woi';
              return (
                <button
                  key={phase.id}
                  onClick={() => setSelectedCyclePhase(phase.id)}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    isActive
                      ? isWOI
                        ? 'bg-rose-900 text-white border-rose-500 shadow-md ring-2 ring-rose-400'
                        : 'bg-teal-900 text-white border-teal-500 shadow-md ring-2 ring-teal-400'
                      : isWOI
                        ? 'bg-slate-950 text-rose-300 border-rose-900 hover:bg-rose-950/40'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  <span className="text-[10px] uppercase font-bold opacity-75 block">{phase.days}</span>
                  <span className="text-xs font-extrabold block mt-0.5 line-clamp-1">{phase.vietnameseName}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Phase Card */}
          <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-lg font-black text-teal-300">{activePhase.vietnameseName}</h4>
              <span className="px-2.5 py-1 rounded-full bg-teal-950 text-teal-300 border border-teal-800 text-xs font-bold">
                Bề dày niêm mạc: {activePhase.endometrialThickness}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1 bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="font-bold text-slate-400 uppercase text-[10px] block">Hình ảnh trên siêu âm TVUS:</span>
                <p className="text-slate-200 leading-relaxed">{activePhase.ultrasoundPattern}</p>
              </div>

              <div className="space-y-1 bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="font-bold text-slate-400 uppercase text-[10px] block">Ý nghĩa cho việc mang thai & IVF:</span>
                <p className="text-slate-200 leading-relaxed">{activePhase.clinicalRelevance}</p>
              </div>
            </div>

            {selectedCyclePhase === 'mid_secretory_woi' && (
              <div className="bg-rose-950/80 border border-rose-700/60 p-4 rounded-xl text-xs text-rose-200 leading-relaxed space-y-1.5">
                <strong className="text-rose-100 block text-sm">✨ Bí mật về "Cửa sổ làm tổ" (Window of Implantation):</strong>
                <p>
                  Trong suốt 1 tháng, niêm mạc tử cung CHỈ MỞ CỬA DUY NHẤT TRONG KHOẢNG 36 - 48 GIỜ (thường rơi vào ngày thứ 20 - 24 của chu kỳ) để phôi thai có thể bám vào. Nếu đưa phôi vào quá sớm hoặc quá muộn, phôi sẽ bị trôi đi mất. Hiện nay, xét nghiệm gen <strong>ERA test</strong> giúp bác sĩ biết chính xác từng giờ mở cửa sổ của riêng bạn để đặt phôi đúng thời điểm vàng.
                </p>
              </div>
            )}
          </div>
        </div>

      </section>


      {/* ========================================================================= */}
      {/* CHƯƠNG 2: 7 Căn Bệnh & Rủi Ro Thường Gặp (Giải Thích Tự Nhiên) */}
      {/* ========================================================================= */}
      <section id="chapter-2" className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 border-b border-slate-800">
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
            <Activity className="w-4 h-4" />
            <span>Chương 2 • Toàn Cảnh Bệnh Học Đời Thường</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            7 Căn Bệnh & Rủi Ro Thường Gặp Ở Niêm Mạc Tử Cung
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Chọn căn bệnh bạn đang quan tâm bên dưới để xem giải thích bình dân, dấu hiệu nhận biết, mức độ nguy hiểm và hướng điều trị tốt nhất hiện nay:
          </p>
        </div>

        {/* Disease Quick Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {filteredDiseases.map((disease) => {
            const isSelected = selectedDiseaseId === disease.id;
            return (
              <button
                key={disease.id}
                onClick={() => setSelectedDiseaseId(disease.id)}
                className={`p-3.5 rounded-2xl text-left border transition-all relative ${
                  isSelected
                    ? 'bg-rose-950 text-white border-rose-600 shadow-xl ring-2 ring-rose-500/50'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-rose-900 text-rose-200' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {disease.badge}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>}
                </div>

                <h3 className="font-extrabold text-sm sm:text-base text-white mt-2 line-clamp-1">
                  {disease.title}
                </h3>
                <p className="text-xs text-rose-300/80 font-medium mt-0.5 line-clamp-1 italic">
                  "{disease.simpleAnalogy}"
                </p>
              </button>
            );
          })}
        </div>

        {/* Master Detailed Card for Selected Disease */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-8 space-y-6 shadow-2xl">
          
          {/* Card Top Title */}
          <div className="border-b border-slate-800 pb-4 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-rose-950 text-rose-300 border border-rose-800 text-xs font-bold font-mono">
                {activeDisease.medicalName}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 text-xs font-medium">
                {activeDisease.badge}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">{activeDisease.title}</h3>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs sm:text-sm text-teal-300 font-medium italic">
              💡 <strong>Minh họa trực quan: </strong> {activeDisease.simpleAnalogy}
            </div>
          </div>

          {/* 1. What is it & Why it happens */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-teal-400" />
              1. Bản Chất Bệnh & Vì Sao Bạn Mắc Phải?
            </h4>
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>{activeDisease.whatIsIt}</p>
              <div className="pt-2 border-t border-slate-850 text-slate-400">
                <strong className="text-slate-200">Nguyên nhân cốt lõi: </strong> {activeDisease.whyItHappens}
              </div>
            </div>
          </div>

          {/* 2. Warning Signs */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2">
              <Flame className="w-4 h-4 text-rose-400" />
              2. Những Dấu Hiệu Cảnh Báo Bạn Cần Đi Khám Ngay
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeDisease.warningSigns.map((w, idx) => (
                <div key={idx} className="bg-slate-950 border border-slate-800 p-3.5 rounded-xl space-y-1">
                  <span className="font-bold text-xs sm:text-sm text-rose-300 block flex items-start gap-1.5">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{w.symptom}</span>
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed pl-3">{w.explanation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Danger Level Alert */}
          <div className="bg-rose-950/70 border border-rose-800 p-4 rounded-2xl text-xs sm:text-sm text-rose-200 space-y-1">
            <strong className="text-rose-100 flex items-center gap-1.5 font-bold uppercase text-xs">
              <ShieldAlert className="w-4 h-4 text-rose-400" />
              Mức độ nguy hiểm nếu để lâu không chữa:
            </strong>
            <p className="leading-relaxed">{activeDisease.dangerText}</p>
          </div>

          {/* 4. How Doctor Checks */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-teal-400" />
              3. Bác Sĩ Sẽ Kiểm Tra Bằng Những Bước Nào?
            </h4>
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
              {activeDisease.howDoctorChecks.map((chk, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-teal-900 text-teal-300 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{chk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Best Treatments */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2">
              <Pill className="w-4 h-4 text-emerald-400" />
              4. Các Cách Điều Trị Tốt Nhất Hiện Nay
            </h4>
            <div className="space-y-2.5">
              {activeDisease.bestTreatments.map((tr, idx) => (
                <div key={idx} className="bg-slate-950 border border-slate-800 p-4 rounded-2xl space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h5 className="font-extrabold text-sm text-emerald-300">{tr.name}</h5>
                    <span className="text-[11px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      Chỉ định: {tr.whoNeedsIt}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{tr.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Fertility & IVF Impact */}
          <div className="bg-teal-950/60 border border-teal-800/80 p-4 sm:p-5 rounded-2xl space-y-2">
            <h5 className="font-bold text-sm text-teal-300 flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-teal-400" />
              Ảnh Hưởng Đến Việc Có Con & Thụ Tinh IVF
            </h5>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {activeDisease.fertilityImpact}
            </p>
          </div>

          {/* 7. Doctor's Golden Advice */}
          <div className="bg-amber-950/50 border border-amber-800/60 p-4 rounded-2xl text-xs sm:text-sm text-amber-200 leading-relaxed flex items-start gap-2.5">
            <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-100 block mb-0.5">Lời Khuyên Vàng Của Bác Sĩ:</strong>
              <span>{activeDisease.doctorAdvice}</span>
            </div>
          </div>

          {/* Watch Surgery Video CTA Button */}
          {activeDisease.videoEmbedId && (
            <div className="pt-2 text-center sm:text-left">
              <button
                onClick={() => {
                  const matchedMedia = mediaAtlasItems.find(m => m.videoEmbedId === activeDisease.videoEmbedId);
                  if (matchedMedia) onOpenVideoModal(matchedMedia);
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-rose-950/80 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Xem Video Bác Sĩ Mổ Nội Soi Điều Trị Bệnh Này Thực Tế</span>
              </button>
            </div>
          )}

        </div>

      </section>


      {/* ========================================================================= */}
      {/* CHƯƠNG 3: Đi Khám Bác Sĩ Sẽ Làm Gì? */}
      {/* ========================================================================= */}
      <section id="chapter-3" className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 border-b border-slate-800">
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="w-4 h-4" />
            <span>Chương 3 • Hướng Dẫn Đi Khám</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Đi Khám Bác Sĩ Sẽ Kiểm Tra Buồng Tử Cung Của Bạn Thế Nào?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Rất nhiều chị em e ngại đi khám vì sợ đau. Dưới đây là giải thích rõ ràng từng phương pháp để bạn hoàn toàn yên tâm chuẩn bị:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                Bước 1 • Không đau
              </span>
              <span className="text-xs text-teal-400 font-bold">Độ chính xác: 90%</span>
            </div>
            <h3 className="font-extrabold text-base text-white">Siêu Âm Đầu Dò Âm Đạo (TVUS)</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Bác sĩ dùng đầu dò nhỏ êm ái đưa nhẹ vào âm đạo để đo độ dày niêm mạc và xem cấu trúc 3 lá. Phụ nữ sau mãn kinh nếu niêm mạc $\leq 4mm$ thì nguy cơ ung thư gần như bằng 0.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800">
                Bước 2 • Tách buồng
              </span>
              <span className="text-xs text-teal-400 font-bold">Độ chính xác: 98%</span>
            </div>
            <h3 className="font-extrabold text-base text-white">Siêu Âm Bơm Nước Muối (SIS)</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Bơm một chút nước muối sinh lý vô khuẩn vào tử cung để làm giãn nhẹ lòng tử cung. Giúp nhìn rõ từng khối polyp nhỏ hoặc u xơ đang trôi lơ lửng mà siêu âm thường hay bỏ sót.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                Lấy mẫu 1 phút • Không gây mê
              </span>
              <span className="text-xs text-teal-400 font-bold">Độ chính xác: 99%</span>
            </div>
            <h3 className="font-extrabold text-base text-white">Sinh Thiết Bằng Ống Hút Pipelle</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Dùng một ống nhựa dẻo mềm siêu nhỏ (nhỏ như que tăm) luồn nhẹ qua cổ tử cung để hút mẫu mô gửi xét nghiệm tế bào. Làm ngay tại phòng khám trong 1 phút, chỉ hơi tức nhẹ như sắp hành kinh.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                Tiêu chuẩn vàng tuyệt đối
              </span>
              <span className="text-xs text-teal-400 font-bold">Độ chính xác: 100%</span>
            </div>
            <h3 className="font-extrabold text-base text-white">Nội Soi Buồng Tử Cung (Hysteroscopy)</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Đưa camera nội soi siêu nét vào lòng tử cung. Bác sĩ nhìn trực tiếp toàn cảnh trên màn hình tivi lớn: vừa chẩn đoán chính xác vừa cắt luôn polyp hoặc gỡ dải dính ngay trong lúc soi (Một bước xong ngay).
            </p>
          </div>

        </div>

      </section>


      {/* ========================================================================= */}
      {/* CHƯƠNG 4: Các Cách Chữa Tốt Nhất Hiện Nay */}
      {/* ========================================================================= */}
      <section id="chapter-4" className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 border-b border-slate-800">
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Pill className="w-4 h-4" />
            <span>Chương 4 • Phác Đồ Điều Trị Hiệu Quả</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Tổng Hợp Các Phương Pháp Điều Trị Hiện Đại Nhất
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Y học hiện đại ưu tiên các giải pháp can thiệp nhẹ nhàng, bảo tồn tử cung và thiên chức làm mẹ:
          </p>
        </div>

        <div className="space-y-4">
          
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2">
            <span className="text-xs font-bold text-teal-400 uppercase">1. Đặt Vòng Nội Tiết Mirena (LNG-IUS)</span>
            <h3 className="font-black text-lg text-white">"Vũ Khí Bí Mật" Trị Rong Kinh & Quá Sản Niêm Mạc</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Chiếc vòng chữ T nhỏ nhắn đặt trong buồng tử cung phóng thích lượng thuốc Progestin siêu nhỏ tại chỗ. Thuốc làm teo mỏng niêm mạc, chữa khỏi quá sản lành tính đến 95% và giảm 90% lượng máu kinh mà không hề gây tăng cân hay mệt mỏi như thuốc uống.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2">
            <span className="text-xs font-bold text-rose-400 uppercase">2. Phẫu Thuật Nội Soi Kéo Lạnh (Cold Scissors)</span>
            <h3 className="font-black text-lg text-white">Gỡ Dính Buồng Tử Cung Không Để Lại Sẹo Mới</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Bác sĩ dùng kéo vi phẫu cơ học để tỉa dải dính mà không dùng dao điện nhiệt. Sau đó bơm gel Hyaluronic Acid chống dính và cho uống thuốc Estrogen liều cao giúp niêm mạc mọc lại mịn màng.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2">
            <span className="text-xs font-bold text-purple-400 uppercase">3. Bơm Huyết Tương Giàu Tiểu Cầu (PRP Tự Thân)</span>
            <h3 className="font-black text-lg text-white">"Đánh Thức" Lớp Đất Niêm Mạc Mỏng Cho Người Làm IVF</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Lấy máu của chính bạn quay ly tâm lọc lấy huyết tương giàu yếu tố tăng trưởng bơm vào lòng tử cung vào ngày 10 và 12 chu kỳ. Giúp tăng độ dày niêm mạc thêm 1.5 - 2.8mm và tăng gấp đôi cơ hội đón con thành công.
            </p>
          </div>

        </div>

      </section>


      {/* ========================================================================= */}
      {/* CHƯƠNG 5: Thư Viện Video Lâm Sàng & Hình Ảnh Trực Quan */}
      {/* ========================================================================= */}
      <section id="chapter-5" className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 border-b border-slate-800">
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider">
            <Video className="w-4 h-4" />
            <span>Chương 5 • Tư Liệu Trực Quan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Video Phẫu Thuật & Thủ Thuật Thực Tế Dành Cho Người Bệnh
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Chạm vào video bất kỳ để xem cận cảnh bác sĩ thao tác trong phòng mổ chuẩn quốc tế (có bình luận giải thích dễ hiểu):
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mediaAtlasItems.filter(m => m.type === 'video').map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenVideoModal(item)}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-500/60 transition-all cursor-pointer group shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${item.videoEmbedId}/hqdefault.jpg`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">{item.category}</span>
                  <h3 className="font-extrabold text-sm text-white line-clamp-2 leading-snug group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">{item.description}</p>
                </div>
              </div>

              <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Nguồn: {item.source.split('/')[0]}</span>
                <span className="text-teal-400 font-bold">Xem video ➔</span>
              </div>
            </div>
          ))}
        </div>

      </section>


      {/* ========================================================================= */}
      {/* CHƯƠNG 6: Tự Kiểm Tra Triệu Chứng Nhanh (Bác Sĩ Tư Vấn Tự Động) */}
      {/* ========================================================================= */}
      <section id="chapter-6" className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Chương 6 • Bác Sĩ Tư Vấn Tự Động</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Tự Kiểm Tra Triệu Chứng Của Bạn (Nhận Lời Khuyên Ngay)
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Trả lời các câu hỏi nhanh bên dưới dựa trên tình trạng của bạn để hệ thống phân loại nguy cơ và hướng dẫn bạn bước xử trí tiếp theo:
          </p>
        </div>

        {/* Interactive Decision Box */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-2xl space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-bold text-teal-400 uppercase">
              {isDecisionResult ? 'Kết Quả Đánh Giá & Lời Khuyên' : `Bước ${decisionHistory.length}: Trả lời câu hỏi`}
            </span>
            <button
              onClick={handleResetDecision}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-white bg-slate-800 px-3 py-1.5 rounded-xl transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Làm Lại</span>
            </button>
          </div>

          {!isDecisionResult && currentDecisionNode && (
            <div className="space-y-5">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-white leading-snug">
                  {currentDecisionNode.question}
                </h3>
                <p className="text-xs text-slate-400 mt-1">{currentDecisionNode.explanation}</p>
              </div>

              <div className="space-y-2.5">
                {currentDecisionNode.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleDecisionOption(opt)}
                    className="w-full text-left p-4 rounded-2xl bg-slate-950 hover:bg-teal-950 border border-slate-800 hover:border-teal-500/60 transition-all flex items-center justify-between group shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-800 text-teal-400 text-xs font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors mt-0.5">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white">
                        {opt.label}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 flex-shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {isDecisionResult && finalDecisionRecommendation && (
            <div className="space-y-5 animate-fade-in">
              
              <div className={`p-4 sm:p-5 rounded-2xl border ${
                finalDecisionRecommendation.riskLevel === 'critical'
                  ? 'bg-rose-950 text-white border-rose-700'
                  : finalDecisionRecommendation.riskLevel === 'high'
                    ? 'bg-amber-950 text-white border-amber-700'
                    : 'bg-teal-950 text-white border-teal-700'
              }`}>
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-80 block">
                  Mức Độ Cần Chú Ý: {finalDecisionRecommendation.riskLevel.toUpperCase()}
                </span>
                <h4 className="text-lg sm:text-xl font-black mt-0.5">
                  {finalDecisionRecommendation.riskTitle}
                </h4>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs sm:text-sm">
                <strong className="text-teal-300 block">Các Xét Nghiệm Bạn Cần Đề Nghị Bác Sĩ Thực Hiện:</strong>
                <ul className="space-y-1.5 text-slate-300">
                  {finalDecisionRecommendation.recommendedInvestigations.map((inv: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span>{inv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-rose-950/70 p-4 rounded-2xl border border-rose-800 text-xs sm:text-sm text-rose-200 space-y-1">
                <strong className="text-rose-100 block">Hành Động Khẩn Cấp Bạn Nên Làm:</strong>
                <ul className="space-y-1">
                  {finalDecisionRecommendation.urgentActions.map((act: string, idx: number) => (
                    <li key={idx}>➔ {act}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 text-center">
                <button
                  onClick={handleResetDecision}
                  className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition-all"
                >
                  Kiểm Tra Lại Cho Triệu Chứng Khác
                </button>
              </div>

            </div>
          )}

        </div>

      </section>

      {/* References Section */}
      <ReferencesSection
        references={uterineTamoxifenReferences}
        diseaseTitle="Nội Mạc Tử Cung & Bệnh Học Phụ Khoa"
      />

    </article>
  );
};
