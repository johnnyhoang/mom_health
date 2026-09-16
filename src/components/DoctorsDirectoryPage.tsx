import React, { useState, useMemo } from 'react';
import { topDoctorsList } from '../data/doctorsData';
import { 
  UserCheck, 
  Search, 
  MapPin, 
  Phone, 
  Calendar, 
  Award, 
  Stethoscope, 
  Copy, 
  Check, 
  Building2, 
  BookOpen, 
  ShieldCheck, 
  HelpCircle,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  FileText
} from 'lucide-react';

interface DoctorsDirectoryPageProps {
  onBackToBook: () => void;
  onOpenQA: () => void;
}

export const DoctorsDirectoryPage: React.FC<DoctorsDirectoryPageProps> = ({ 
  onBackToBook, 
  onOpenQA 
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedHospital, setSelectedHospital] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const hospitals = [
    { id: 'all', label: 'Tất Cả (10 Bác Sĩ)' },
    { id: 'BV Hùng Vương', label: 'BV Hùng Vương' },
    { id: 'BV Từ Dũ', label: 'BV Từ Dũ' },
    { id: 'BV Đại Học Y Dược', label: 'BV Đại Học Y Dược' },
    { id: 'BVĐK Tâm Anh', label: 'BVĐK Tâm Anh' },
    { id: 'BV Ung Bướu TP.HCM', label: 'BV Ung Bướu' }
  ];

  const filteredDoctors = useMemo(() => {
    return topDoctorsList.filter((doc) => {
      const matchHospital = selectedHospital === 'all' || doc.hospitalCategory === selectedHospital;
      if (!matchHospital) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        doc.name.toLowerCase().includes(q) ||
        doc.academicTitle.toLowerCase().includes(q) ||
        doc.currentRole.toLowerCase().includes(q) ||
        doc.workplace.toLowerCase().includes(q) ||
        doc.coreSpecialties.some(s => s.toLowerCase().includes(q)) ||
        doc.clinicalStrengths.some(c => c.toLowerCase().includes(q))
      );
    });
  }, [selectedHospital, searchQuery]);

  const handleCopyDoctorInfo = (doc: typeof topDoctorsList[0]) => {
    const locs = doc.practiceLocations.map(l => 
      `• ${l.hospitalName} - ${l.departmentOrClinic}\n  Địa chỉ: ${l.address}\n  Lịch khám: ${l.scheduleNote}${l.bookingPhone ? `\n  SĐT đặt hẹn: ${l.bookingPhone}` : ''}`
    ).join('\n\n');

    const text = `THÔNG TIN BÁC SĨ CHUYÊN GIA:\n${doc.academicTitle} ${doc.name}\n${doc.currentRole}\nKinh nghiệm: ${doc.experienceYears} năm\n\nNƠI KHÁM & ĐẶT LỊCH:\n${locs}\n\nLỜI KHUYÊN KHI ĐI KHÁM:\n${doc.consultationTips}`;

    navigator.clipboard.writeText(text);
    setCopiedId(doc.id);
    setTimeout(() => setCopiedId(null), 3000);
  };

  return (
    <div className="w-full bg-slate-950 text-slate-200 font-sans pb-32">
      
      {/* Header Banner */}
      <header className="w-full max-w-3xl mx-auto pt-10 pb-6 px-5 sm:px-6 space-y-6">
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold tracking-wider uppercase">
            <UserCheck className="w-4 h-4" />
            <span>Danh Bạ Chuyên Gia Y Khoa Hàng Đầu TP.HCM</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onBackToBook}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 hover:text-teal-300 bg-teal-950/60 border border-teal-800/80 px-3 py-1.5 rounded-xl transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Đọc Sách</span>
            </button>

            <button
              onClick={onOpenQA}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200 bg-amber-950/60 border border-amber-800/80 px-3 py-1.5 rounded-xl transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Tập Q&A</span>
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Top 10 Bác Sĩ Chuyên Sâu Phụ Khoa & Ung Bướu Tại TP.HCM
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Danh sách các Phó Giáo sư, Tiến sĩ, Bác sĩ Chuyên khoa II đầu ngành tại BV Từ Dũ, BV Hùng Vương, BV Đại Học Y Dược, BV Tâm Anh & BV Ung Bướu – có chuyên môn sâu về phẫu thuật bảo tồn buồng trứng, u xơ, lạc tuyến cơ tử cung và theo dõi nội mạc sau K vú.
          </p>
        </div>

        {/* Preparation Guide Alert */}
        <div className="p-4 sm:p-5 rounded-2xl bg-teal-950/30 border-l-4 border-teal-400 text-xs sm:text-sm text-slate-200 space-y-2">
          <div className="font-bold text-teal-300 flex items-center gap-2 text-sm">
            <FileText className="w-4 h-4 text-teal-400 shrink-0" />
            <span>Sổ tay chuẩn bị hồ sơ trước khi đến gặp Bác sĩ chuyên gia:</span>
          </div>
          <ul className="space-y-1.5 text-slate-300 pl-1">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
              <span><strong>Phiếu GPB BV Hùng Vương (15/09/2026):</strong> Kết luận "Tăng sản điển hình khu trú" (bằng chứng vàng xác nhận lành tính).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
              <span><strong>Các phiếu Siêu âm:</strong> Phiếu Tâm Anh 2025 (nội mạc 15mm, Adenomyosis) & Hùng Vương 2026 (u xơ 41x45mm).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
              <span><strong>Hồ sơ K vú:</strong> Tóm tắt phác đồ điều trị K vú và xác nhận đã hoàn thành 5 năm Tamoxifen (tháng 01/2026).</span>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="relative w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo tên bác sĩ, bệnh viện, chuyên môn (Nội soi, Bảo tồn, U xơ, Ung bướu...)"
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-teal-500 transition-colors shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              Xóa
            </button>
          )}
        </div>

        {/* Hospital Filters */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {hospitals.map((h) => {
            const isSelected = selectedHospital === h.id;
            return (
              <button
                key={h.id}
                onClick={() => setSelectedHospital(h.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-teal-500 text-slate-950 font-bold shadow-md shadow-teal-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {h.label}
              </button>
            );
          })}
        </div>

        <div className="text-xs text-slate-400 pt-1">
          Hiển thị: <strong className="text-teal-400">{filteredDoctors.length}</strong> chuyên gia y khoa hàng đầu
        </div>

      </header>

      {/* Main Doctors List */}
      <main className="w-full max-w-3xl mx-auto px-5 sm:px-6 space-y-6">
        
        {filteredDoctors.length === 0 ? (
          <div className="text-center py-16 space-y-3 bg-slate-900/40 rounded-2xl border border-slate-800 p-8">
            <UserCheck className="w-10 h-10 text-slate-600 mx-auto" />
            <p className="text-slate-400 text-sm">Không tìm thấy bác sĩ phù hợp với từ khóa "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedHospital('all'); }}
              className="text-xs text-teal-400 hover:underline font-semibold"
            >
              Xem tất cả 10 bác sĩ
            </button>
          </div>
        ) : (
          filteredDoctors.map((doc, idx) => {
            const isCopied = copiedId === doc.id;
            return (
              <div
                key={doc.id}
                className="rounded-2xl bg-slate-900/90 border border-slate-800/90 hover:border-teal-500/50 transition-all p-5 sm:p-6 space-y-5 shadow-sm"
              >
                {/* Doctor Header: Academic Title, Name, Role & Years */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-800 pb-4">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold text-teal-400 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800/60">
                        {doc.academicTitle}
                      </span>
                      <span className="text-xs text-slate-400">
                        • {doc.experienceYears} năm kinh nghiệm
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                        {doc.hospitalCategory}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {idx + 1}. {doc.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                      {doc.currentRole}
                    </p>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopyDoctorInfo(doc)}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-xl transition-colors shrink-0 self-start"
                    title="Sao chép toàn bộ thông tin lịch khám"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-teal-400" />}
                    <span>{isCopied ? 'Đã sao chép!' : 'Sao chép thông tin'}</span>
                  </button>
                </div>

                {/* Highlight Badge */}
                <div className="p-3 rounded-xl bg-teal-950/30 border-l-2 border-teal-400 text-xs sm:text-sm text-teal-200 font-medium flex items-center gap-2">
                  <Award className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>{doc.highlightBadge}</span>
                </div>

                {/* Core Specialties Pills */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Stethoscope className="w-3.5 h-3.5 text-teal-400" />
                    <span>Lĩnh vực chuyên môn mũi nhọn:</span>
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {doc.coreSpecialties.map((spec, sIdx) => (
                      <span 
                        key={sIdx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-950 text-slate-200 border border-slate-800"
                      >
                        ✓ {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Clinical Strengths */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Thế mạnh lâm sàng & Uy tín thực tiễn:</span>
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 pl-1">
                    {doc.clinicalStrengths.map((str, strIdx) => (
                      <li key={strIdx} className="flex items-start gap-2">
                        <span className="text-teal-400 font-bold shrink-0">•</span>
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Relevance for Post-Tamoxifen Case */}
                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-900/30 text-xs sm:text-sm text-emerald-200 space-y-1">
                  <strong className="text-emerald-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Điểm phù hợp riêng cho trường hợp của chị (Tamoxifen 5 năm + Rong kinh):
                  </strong>
                  <p className="text-slate-300">{doc.relevanceForTamoxifenPatient}</p>
                </div>

                {/* Practice Locations & Booking Info */}
                <div className="space-y-3 pt-1 border-t border-slate-800">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-teal-400" />
                    <span>Địa điểm khám bệnh & Hướng dẫn đặt lịch:</span>
                  </h3>

                  <div className="space-y-2.5">
                    {doc.practiceLocations.map((loc, lIdx) => (
                      <div key={lIdx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1.5 text-xs sm:text-sm">
                        <div className="font-bold text-white flex items-center justify-between gap-2">
                          <span>{loc.hospitalName} ({loc.departmentOrClinic})</span>
                          {loc.bookingPhone && (
                            <a 
                              href={`tel:${loc.bookingPhone.replace(/\s+/g, '')}`}
                              className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 font-mono text-xs bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800/50"
                            >
                              <Phone className="w-3 h-3" />
                              <span>{loc.bookingPhone}</span>
                            </a>
                          )}
                        </div>

                        <div className="flex items-start gap-1.5 text-slate-400 text-xs">
                          <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                          <span>{loc.address}</span>
                        </div>

                        <div className="flex items-start gap-1.5 text-slate-300 text-xs">
                          <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{loc.scheduleNote}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Consultation Tips */}
                  <div className="text-[11px] text-slate-400 italic bg-slate-900/60 p-2.5 rounded-lg">
                    💡 <strong className="text-slate-300 not-italic">Lời khuyên khi khám: </strong>{doc.consultationTips}
                  </div>
                </div>

              </div>
            );
          })
        )}

        {/* Bottom Consultation Summary */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-950/40 to-slate-900 border border-teal-800/40 text-center space-y-3 mt-8">
          <HeartHandshake className="w-8 h-8 text-teal-400 mx-auto" />
          <h3 className="font-bold text-base text-white">Lời Khuyên Y Khoa Cho Chị & Gia Đình</h3>
          <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
            Cả 10 chuyên gia trên đều là những bậc thầy giàu kinh nghiệm và y đức tại TP.HCM. Chị có thể chọn bác sĩ tại bệnh viện thuận tiện nhất với khu vực sinh sống của mình (Tân Phú / Quận 5 / Quận 1 / Tân Bình) để tái khám và có kế hoạch điều trị dứt điểm an toàn nhất.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onBackToBook}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-teal-500/20"
            >
              <BookOpen className="w-4 h-4" />
              <span>Đọc Lại Sách Chuyên Khảo</span>
            </button>
            <button
              onClick={onOpenQA}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
            >
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>Xem Tập Q&A (16 Câu)</span>
            </button>
          </div>
        </div>

      </main>

    </div>
  );
};
