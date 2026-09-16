import React, { useState, useMemo } from 'react';
import { topDoctorsList } from '../data/doctorsData';
import { topSpineDoctorsList } from '../data/spineDoctorsData';
import { topOrthoDoctorsList } from '../data/orthopedicDoctorsData';
import { 
  UserCheck, 
  Search, 
  MapPin, 
  Phone, 
  Calendar, 
  Award, 
  Stethoscope, 
  Building2, 
  BookOpen, 
  ShieldCheck, 
  HelpCircle,
  Bone,
  Ribbon,
  Footprints,
  Sparkles
} from 'lucide-react';

interface DoctorsDirectoryPageProps {
  onBackToBook: () => void;
  onOpenQA: () => void;
  defaultTopic?: 'ankle' | 'spine' | 'gynecology';
}

export const DoctorsDirectoryPage: React.FC<DoctorsDirectoryPageProps> = ({ 
  onBackToBook, 
  onOpenQA,
  defaultTopic = 'ankle'
}) => {
  const [activeTopic, setActiveTopic] = useState<'ankle' | 'spine' | 'gynecology'>(defaultTopic);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedHospital, setSelectedHospital] = useState<string>('all');

  const orthoHospitals = [
    { id: 'all', label: 'Tất Cả (10 BS Chấn Thương Chỉnh Hình)' },
    { id: 'BV Chấn Thương Chỉnh Hình', label: 'BV Chấn Thương Chỉnh Hình' },
    { id: 'BV Đại Học Y Dược', label: 'BV Đại Học Y Dược' },
    { id: 'BV Chợ Rẫy', label: 'BV Chợ Rẫy' },
    { id: 'BV Quân Y 175', label: 'BV Quân Y 175' },
    { id: 'BVĐK Tâm Anh', label: 'BVĐK Tâm Anh' }
  ];

  const spineHospitals = [
    { id: 'all', label: 'Tất Cả (10 Bác Sĩ Cột Sống)' },
    { id: 'BV Đại Học Y Dược', label: 'BV Đại Học Y Dược (Lầu 8A)' },
    { id: 'BV Chợ Rẫy', label: 'BV Chợ Rẫy' },
    { id: 'BV Chấn Thương Chỉnh Hình', label: 'BV Chấn Thương Chỉnh Hình' },
    { id: 'BV Quân Y 175', label: 'BV Quân Y 175' },
    { id: 'BVĐK Tâm Anh', label: 'BVĐK Tâm Anh' }
  ];

  const gynHospitals = [
    { id: 'all', label: 'Tất Cả (10 Bác Sĩ Phụ Khoa)' },
    { id: 'BV Hùng Vương', label: 'BV Hùng Vương' },
    { id: 'BV Từ Dũ', label: 'BV Từ Dũ' },
    { id: 'BV Đại Học Y Dược', label: 'BV Đại Học Y Dược' },
    { id: 'BVĐK Tâm Anh', label: 'BVĐK Tâm Anh' },
    { id: 'BV Ung Bướu TP.HCM', label: 'BV Ung Bướu' }
  ];

  // Filter Ortho Doctors
  const filteredOrthoDoctors = useMemo(() => {
    return topOrthoDoctorsList.filter((doc) => {
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

  // Filter Spine Doctors
  const filteredSpineDoctors = useMemo(() => {
    return topSpineDoctorsList.filter((doc) => {
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

  // Filter Gyn Doctors
  const filteredGynDoctors = useMemo(() => {
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

  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 pb-32">
      {/* Top Banner */}
      <div className="w-full max-w-4xl mx-auto pt-8 pb-6 px-4 sm:px-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-rose-400">
            <UserCheck className="w-4 h-4" />
            <span>Danh Bạ Chuyên Gia Y Khoa Hàng Đầu TP.HCM (30 Bác Sĩ)</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenQA}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5 text-rose-400" />
              <span>Xem Q&A</span>
            </button>
            <button
              onClick={onBackToBook}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>Xem Sách</span>
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Top Bác Sĩ & Chuyên Gia Phẫu Thuật Đầu Ngành
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Danh bạ các Phó Giáo sư, Tiến sĩ, Bác sĩ Chuyên khoa II giàu kinh nghiệm tại các bệnh viện tuyến cuối hàng đầu TP.HCM, kèm thông tin nơi khám và lịch khám chi tiết.
          </p>
        </div>

        {/* 3 Specialty Switcher Pills */}
        <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-2xl">
          <button
            onClick={() => {
              setActiveTopic('ankle');
              setSelectedHospital('all');
              setSearchQuery('');
            }}
            className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTopic === 'ankle'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Footprints className="w-4 h-4" />
            <span className="truncate">Chấn Thương CTCH (10)</span>
          </button>

          <button
            onClick={() => {
              setActiveTopic('spine');
              setSelectedHospital('all');
              setSearchQuery('');
            }}
            className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTopic === 'spine'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bone className="w-4 h-4" />
            <span className="truncate">Cột Sống Cổ (10)</span>
          </button>

          <button
            onClick={() => {
              setActiveTopic('gynecology');
              setSelectedHospital('all');
              setSearchQuery('');
            }}
            className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTopic === 'gynecology'
                ? 'bg-purple-500 text-white shadow-md shadow-purple-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Ribbon className="w-4 h-4" />
            <span className="truncate">Sản Phụ Khoa (10)</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              activeTopic === 'ankle' 
                ? "Tìm theo tên bác sĩ chấn thương chỉnh hình (Đỗ Phước Hùng, Thiên Khanh, Ánh Thao...), bệnh viện..." 
                : activeTopic === 'spine' 
                ? "Tìm theo tên bác sĩ cột sống (Nguyễn Phong, Minh Anh, Cao Thanh Ngọc...)..." 
                : "Tìm theo tên bác sĩ phụ khoa, bệnh viện..."
            }
            className="w-full pl-11 pr-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-rose-500 transition-colors"
          />
        </div>

        {/* Hospital Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 text-xs">
          {(activeTopic === 'ankle' ? orthoHospitals : activeTopic === 'spine' ? spineHospitals : gynHospitals).map((h) => (
            <button
              key={h.id}
              onClick={() => setSelectedHospital(h.id)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all cursor-pointer ${
                selectedHospital === h.id
                  ? activeTopic === 'ankle'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50'
                    : activeTopic === 'spine'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                    : 'bg-purple-500/20 text-purple-300 border border-purple-500/50'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {h.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main List of Doctor Profiles */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        {activeTopic === 'ankle' ? (
          // ==================== ORTHO DOCTORS LIST ====================
          filteredOrthoDoctors.length > 0 ? (
            filteredOrthoDoctors.map((doc) => (
              <div 
                key={doc.id}
                className="bg-slate-900/80 border border-slate-800 hover:border-rose-500/40 rounded-2xl p-5 sm:p-6 space-y-4 transition-all shadow-lg"
              >
                {/* Doctor Title & Highlight Badge */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-slate-800 pb-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                        {doc.academicTitle}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-white">
                        {doc.name}
                      </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                      {doc.currentRole}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-800 text-rose-300 border border-slate-700">
                      {doc.experienceYears}+ Năm Kinh Nghiệm
                    </span>
                  </div>
                </div>

                {/* Highlight Badge */}
                <div className="p-2.5 bg-rose-950/30 border border-rose-800/40 rounded-xl flex items-center gap-2 text-xs font-bold text-rose-300">
                  <Award className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{doc.highlightBadge}</span>
                </div>

                {/* Specialties & Clinical Strengths */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Specialties */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-cyan-400 uppercase tracking-wide flex items-center gap-1.5">
                      <Stethoscope className="w-3.5 h-3.5" />
                      Lĩnh Vực Chuyên Sâu:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {doc.coreSpecialties.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                          <span className="text-cyan-400 font-bold shrink-0">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Strengths */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Thế Mạnh Lâm Sàng:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {doc.clinicalStrengths.map((c, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                          <span className="text-emerald-400 font-bold shrink-0">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Patient Relevance Callout */}
                <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl text-xs space-y-1">
                  <span className="font-bold text-rose-400 uppercase tracking-wide">Định Hướng Cho Ca Gãy Mắt Cá Cụ Loan (74 Tuổi): </span>
                  <p className="text-slate-300 leading-relaxed">{doc.relevanceForAnklePatient}</p>
                </div>

                {/* Practice Locations */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    Địa Điểm & Lịch Khám Bệnh:
                  </div>

                  {doc.practiceLocations.map((loc, idx) => (
                    <div key={idx} className="p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl space-y-1.5 text-xs">
                      <div className="flex flex-wrap items-center justify-between gap-1 font-bold text-white">
                        <span>{loc.hospitalName} - {loc.departmentOrClinic}</span>
                        {loc.bookingPhone && (
                          <div className="flex items-center gap-1 text-rose-300">
                            <Phone className="w-3 h-3" />
                            <span>{loc.bookingPhone}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-start gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                        <span>{loc.address}</span>
                      </div>
                      <div className="flex items-start gap-1.5 text-rose-200/90 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                        <span>{loc.scheduleNote}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Consultation Tips */}
                <div className="p-3 bg-cyan-950/20 border border-cyan-800/30 rounded-xl flex items-start gap-2 text-xs text-cyan-200">
                  <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed"><strong className="text-cyan-300">Kinh Nghiệm Đi Khám: </strong>{doc.consultationTips}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center text-slate-500 bg-slate-900/30 border border-slate-800 rounded-2xl space-y-2">
              <UserCheck className="w-8 h-8 mx-auto text-slate-600" />
              <p>Không tìm thấy bác sĩ phù hợp với tiêu chí tìm kiếm.</p>
            </div>
          )
        ) : activeTopic === 'spine' ? (
          // ==================== SPINE DOCTORS LIST ====================
          filteredSpineDoctors.length > 0 ? (
            filteredSpineDoctors.map((doc) => (
              <div 
                key={doc.id}
                className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 sm:p-6 space-y-4 transition-all shadow-lg"
              >
                {/* Doctor Title & Highlight Badge */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-slate-800 pb-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {doc.academicTitle}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-white">
                        {doc.name}
                      </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                      {doc.currentRole}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-800 text-amber-300 border border-slate-700">
                      {doc.experienceYears}+ Năm Kinh Nghiệm
                    </span>
                  </div>
                </div>

                {/* Highlight Badge */}
                <div className="p-2.5 bg-amber-950/30 border border-amber-800/40 rounded-xl flex items-center gap-2 text-xs font-bold text-amber-300">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{doc.highlightBadge}</span>
                </div>

                {/* Specialties & Clinical Strengths */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Specialties */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-cyan-400 uppercase tracking-wide flex items-center gap-1.5">
                      <Stethoscope className="w-3.5 h-3.5" />
                      Lĩnh Vực Chuyên Sâu:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {doc.coreSpecialties.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                          <span className="text-cyan-400 font-bold shrink-0">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Strengths */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Thế Mạnh Lâm Sàng:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {doc.clinicalStrengths.map((c, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                          <span className="text-emerald-400 font-bold shrink-0">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Patient Relevance Callout */}
                <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl text-xs space-y-1">
                  <span className="font-bold text-amber-400 uppercase tracking-wide">Định Hướng Cho Ca Bệnh Cụ Loan (74 Tuổi): </span>
                  <p className="text-slate-300 leading-relaxed">{doc.relevanceForSpinePatient}</p>
                </div>

                {/* Practice Locations */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    Địa Điểm & Lịch Khám Bệnh:
                  </div>

                  {doc.practiceLocations.map((loc, idx) => (
                    <div key={idx} className="p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl space-y-1.5 text-xs">
                      <div className="flex flex-wrap items-center justify-between gap-1 font-bold text-white">
                        <span>{loc.hospitalName} - {loc.departmentOrClinic}</span>
                        {loc.bookingPhone && (
                          <div className="flex items-center gap-1 text-amber-300">
                            <Phone className="w-3 h-3" />
                            <span>{loc.bookingPhone}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-start gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                        <span>{loc.address}</span>
                      </div>
                      <div className="flex items-start gap-1.5 text-amber-200/90 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{loc.scheduleNote}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Consultation Tips */}
                <div className="p-3 bg-cyan-950/20 border border-cyan-800/30 rounded-xl flex items-start gap-2 text-xs text-cyan-200">
                  <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed"><strong className="text-cyan-300">Kinh Nghiệm Đi Khám: </strong>{doc.consultationTips}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center text-slate-500 bg-slate-900/30 border border-slate-800 rounded-2xl space-y-2">
              <UserCheck className="w-8 h-8 mx-auto text-slate-600" />
              <p>Không tìm thấy bác sĩ phù hợp với tiêu chí tìm kiếm.</p>
            </div>
          )
        ) : (
          // ==================== GYNECOLOGY DOCTORS LIST ====================
          filteredGynDoctors.length > 0 ? (
            filteredGynDoctors.map((doc) => (
              <div 
                key={doc.id}
                className="bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 rounded-2xl p-5 sm:p-6 space-y-4 transition-all shadow-lg"
              >
                {/* Doctor Title & Highlight Badge */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-slate-800 pb-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {doc.academicTitle}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-white">
                        {doc.name}
                      </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                      {doc.currentRole}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-800 text-purple-300 border border-slate-700">
                      {doc.experienceYears}+ Năm Kinh Nghiệm
                    </span>
                  </div>
                </div>

                {/* Highlight Badge */}
                <div className="p-2.5 bg-purple-950/30 border border-purple-800/40 rounded-xl flex items-center gap-2 text-xs font-bold text-purple-300">
                  <Award className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{doc.highlightBadge}</span>
                </div>

                {/* Specialties & Clinical Strengths */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Specialties */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-cyan-400 uppercase tracking-wide flex items-center gap-1.5">
                      <Stethoscope className="w-3.5 h-3.5" />
                      Lĩnh Vực Chuyên Sâu:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {doc.coreSpecialties.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                          <span className="text-cyan-400 font-bold shrink-0">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Strengths */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Thế Mạnh Lâm Sàng:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {doc.clinicalStrengths.map((c, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                          <span className="text-emerald-400 font-bold shrink-0">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Patient Relevance Callout */}
                <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl text-xs space-y-1">
                  <span className="font-bold text-purple-400 uppercase tracking-wide">Định Hướng Cho Bệnh Nhân Dùng Tamoxifen 5 Năm: </span>
                  <p className="text-slate-300 leading-relaxed">{doc.relevanceForTamoxifenPatient}</p>
                </div>

                {/* Practice Locations */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    Địa Điểm & Lịch Khám Bệnh:
                  </div>

                  {doc.practiceLocations.map((loc, idx) => (
                    <div key={idx} className="p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl space-y-1.5 text-xs">
                      <div className="flex flex-wrap items-center justify-between gap-1 font-bold text-white">
                        <span>{loc.hospitalName} - {loc.departmentOrClinic}</span>
                        {loc.bookingPhone && (
                          <div className="flex items-center gap-1 text-purple-300">
                            <Phone className="w-3 h-3" />
                            <span>{loc.bookingPhone}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-start gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                        <span>{loc.address}</span>
                      </div>
                      <div className="flex items-start gap-1.5 text-purple-200/90 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>{loc.scheduleNote}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Consultation Tips */}
                <div className="p-3 bg-cyan-950/20 border border-cyan-800/30 rounded-xl flex items-start gap-2 text-xs text-cyan-200">
                  <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed"><strong className="text-cyan-300">Kinh Nghiệm Đi Khám: </strong>{doc.consultationTips}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center text-slate-500 bg-slate-900/30 border border-slate-800 rounded-2xl space-y-2">
              <UserCheck className="w-8 h-8 mx-auto text-slate-600" />
              <p>Không tìm thấy bác sĩ phù hợp với tiêu chí tìm kiếm.</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};
