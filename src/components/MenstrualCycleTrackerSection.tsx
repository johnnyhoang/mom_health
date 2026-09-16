import React, { useState } from 'react';
import { 
  menstrualCycleLogs, 
  cyclePhaseAnalyses, 
  symptomDecoders,
  historicalCyclesData,
  historicalCycleStatistics,
  historicalCycleClinicalInsights
} from '../data/menstrualCycleLogData';
import type { DailyCycleLog, HistoricalCycle } from '../data/menstrualCycleLogData';
import {
  Calendar,
  Activity,
  CheckCircle2,
  Clock,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Layers,
  HelpCircle,
  Droplets,
  Microscope,
  Info,
  TrendingUp,
  BarChart3,
  CalendarDays,
  Image as ImageIcon,
  ZoomIn,
  X,
  History
} from 'lucide-react';

export const MenstrualCycleTrackerSection: React.FC = () => {
  // Main view mode: 'recent_log' (08-09/2026) or 'longitudinal_history' (2022-2024)
  const [mainViewMode, setMainViewMode] = useState<'recent_log' | 'longitudinal_history'>('recent_log');

  // Recent Log States
  const [activeFilter, setActiveFilter] = useState<'all' | 'milestones' | 'menstrual' | 'ovulatory' | 'secretory'>('all');
  const [selectedLog, setSelectedLog] = useState<DailyCycleLog | null>(menstrualCycleLogs[0]);
  const [expandedDecoder, setExpandedDecoder] = useState<number | null>(0);
  const [activePhaseTab, setActivePhaseTab] = useState<string>('secretory-phase');

  // Longitudinal History States
  const [historyYearFilter, setHistoryYearFilter] = useState<number | 'all'>('all');
  const [selectedHistoricalCycle, setSelectedHistoricalCycle] = useState<HistoricalCycle | null>(historicalCyclesData[0]);
  const [activeImageModal, setActiveImageModal] = useState<string | null>(null);

  const filteredRecentLogs = menstrualCycleLogs.filter(log => {
    if (activeFilter === 'milestones') return log.isKeyMilestone;
    if (activeFilter === 'menstrual') return log.phase === 'menstrual';
    if (activeFilter === 'ovulatory') return log.phase === 'ovulatory';
    if (activeFilter === 'secretory') return log.phase === 'secretory';
    return true;
  });

  const filteredHistoricalCycles = historicalCyclesData.filter(c => {
    if (historyYearFilter === 'all') return true;
    return c.year === historyYearFilter;
  });

  const getDischargeBadge = (type: DailyCycleLog['dischargeType'], label: string) => {
    switch (type) {
      case 'none':
        return <span className="px-2 py-0.5 rounded-full text-[11px] bg-emerald-950/80 text-emerald-300 border border-emerald-800/50">{label}</span>;
      case 'orange_spotting':
        return <span className="px-2 py-0.5 rounded-full text-[11px] bg-amber-950/80 text-amber-300 border border-amber-800/50 flex items-center gap-1"><Droplets className="w-3 h-3 text-amber-400" />{label}</span>;
      case 'fresh_blood':
        return <span className="px-2 py-0.5 rounded-full text-[11px] bg-rose-950/80 text-rose-300 border border-rose-800/50">{label}</span>;
      case 'brown_blood':
        return <span className="px-2 py-0.5 rounded-full text-[11px] bg-amber-900/60 text-amber-200 border border-amber-700/50">{label}</span>;
      case 'post_procedure_bleeding':
        return <span className="px-2 py-0.5 rounded-full text-[11px] bg-purple-950/80 text-purple-300 border border-purple-800/50 font-bold">{label}</span>;
      default:
        return <span className="px-2 py-0.5 rounded-full text-[11px] bg-slate-800 text-slate-300">{label}</span>;
    }
  };

  const getPainBadge = (level: DailyCycleLog['painLevel']) => {
    switch (level) {
      case 'none':
        return <span className="text-emerald-400 text-xs">Không đau</span>;
      case 'mild':
        return <span className="text-amber-400 text-xs">Đau nhẹ</span>;
      case 'moderate':
        return <span className="text-orange-400 text-xs font-semibold">Đau vừa</span>;
      case 'severe':
        return <span className="text-rose-400 text-xs font-bold">Đau quặn (Do thủ thuật)</span>;
    }
  };

  const appScreenshots = [
    {
      title: 'Nhật ký Năm 2026 (27 - 43 ngày • Hậu Tamoxifen)',
      src: '/records/cycle_history_2026.jpg',
      period: '03/2026 – 08/2026',
      desc: '6 chu kỳ gần nhất: Chu kỳ 27-33 ngày, chu kỳ hiện tại bắt đầu 24/08 (đang ở ngày 23/24).'
    },
    {
      title: 'Nhật ký Cuối 2025 – Đầu 2026 (30 - 43 ngày)',
      src: '/records/cycle_history_2025_late_2026_early.jpg',
      period: '09/2025 – 03/2026',
      desc: 'Thời điểm ngưng Tamoxifen (01/2026): Chu kỳ 30 ngày, 1 chu kỳ thưa 43 ngày sau ngưng thuốc 1 tháng.'
    },
    {
      title: 'Nhật ký Giữa Năm 2025 (31 - 40 ngày)',
      src: '/records/cycle_history_2025_mid.jpg',
      period: '02/2025 – 09/2025',
      desc: 'Năm thứ 5 Tamoxifen: Chu kỳ 31-40 ngày, hành kinh chuẩn 5 ngày.'
    },
    {
      title: 'Nhật ký Cuối 2024 – Đầu 2025 (17 - 41 ngày)',
      src: '/records/cycle_history_2024_late_2025_early.jpg',
      period: '07/2024 – 02/2025',
      desc: 'Cuối năm thứ 4 Tamoxifen: Dao động 34-41 ngày, 1 chu kỳ ngắn 17 ngày không phóng noãn.'
    },
    {
      title: 'Nhật ký Đầu & Giữa Năm 2024 (31 - 50 ngày)',
      src: '/records/cycle_history_2024.jpg',
      period: '01/2024 – 07/2024',
      desc: 'Theo dõi 6 chu kỳ năm 2024: Chu kỳ 31-39 ngày, 1 chu kỳ trễ 50 ngày, hành kinh chuẩn 5 ngày.'
    },
    {
      title: 'Nhật ký Cuối Năm 2023 (19 - 43 ngày)',
      src: '/records/cycle_history_2023_late.jpg',
      period: '07/2023 – 01/2024',
      desc: 'Theo dõi 6 chu kỳ cuối 2023: Chu kỳ 30-37 ngày, cá biệt 1 chu kỳ 19 ngày và 43 ngày.'
    },
    {
      title: 'Nhật ký Giữa Năm 2023 (36 - 41 ngày)',
      src: '/records/cycle_history_2023_mid.jpg',
      period: '12/2022 – 08/2023',
      desc: 'Theo dõi 6 chu kỳ đều đặn: Dao động 36-41 ngày, hành kinh đều 5 ngày.'
    },
    {
      title: 'Nhật ký Năm 2022 (36 - 42 ngày)',
      src: '/records/cycle_history_2022.jpg',
      period: '06/2022 – 12/2022',
      desc: 'Khởi đầu theo dõi: Chu kỳ dài sinh lý 36-42 ngày cực kỳ ổn định trong thời gian uống Tamoxifen.'
    }
  ];

  return (
    <div className="w-full space-y-8 my-8 font-sans">
      
      {/* Section Header */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950/50 border border-teal-500/30 space-y-3">
        <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
          <Calendar className="w-4 h-4 text-teal-400" />
          <span>Theo Dõi Chu Kỳ Sinh Lý Thực Tế • 2022 Đến Nay (51 Tháng)</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          Đối Chiếu Chu Kỳ Kinh Nguyệt: Tránh Phân Tích Nhầm Dày Niêm Mạc Bệnh Lý
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Phát hiện lâm sàng then chốt: Dữ liệu theo dõi dài hạn liên tục 43 chu kỳ (2022 – 2026) và nhật ký gần nhất (08 – 09/2026) chứng minh bệnh nhân có cơ địa <strong>"Chu kỳ dài sinh lý (30 – 40 ngày)"</strong>. Thời điểm sinh thiết Pipelle (<strong>09/09/2026 - Ngày 17 chu kỳ</strong>) rơi đúng vào cửa sổ rụng trứng và bước vào <strong>Pha phân tiết hoàng thể</strong>, khi niêm mạc đạt độ dày tự nhiên 10-16mm.
        </p>
      </div>

      {/* Main View Mode Selector (2 Tabs) */}
      <div className="flex p-1 bg-slate-900/90 rounded-xl border border-slate-800 gap-1">
        <button
          onClick={() => setMainViewMode('recent_log')}
          className={`flex-1 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            mainViewMode === 'recent_log'
              ? 'bg-teal-500 text-slate-950 shadow-md'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
          }`}
        >
          <CalendarDays className="w-4 h-4" />
          <span>Nhật Ký Chi Tiết Gần Nhất (08 – 09/2026)</span>
        </button>

        <button
          onClick={() => setMainViewMode('longitudinal_history')}
          className={`flex-1 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            mainViewMode === 'longitudinal_history'
              ? 'bg-teal-500 text-slate-950 shadow-md'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
          }`}
        >
          <History className="w-4 h-4" />
          <span>Lịch Sử Dài Hạn (2022 – 2026 • 43 Chu Kỳ)</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: RECENT DETAILED LOGS (08 - 09/2026) */}
      {/* ========================================================================= */}
      {mainViewMode === 'recent_log' && (
        <div className="space-y-8">
          
          {/* Crucial Clinical Insight Box */}
          <div className="p-4 sm:p-5 rounded-xl bg-teal-950/40 border-l-4 border-teal-400 text-teal-100 space-y-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2 font-bold text-teal-300 text-sm">
              <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
              <span>Thông Điệp Chẩn Đoán Cốt Lõi Từ Bác Sĩ Chuyên Khoa:</span>
            </div>
            <div className="space-y-2 leading-relaxed text-slate-200">
              <p>
                • <strong>Vì sao nội mạc dày và tuyến giãn bọc?</strong> Ngày 17 chu kỳ (sau rụng trứng ~3 ngày), hormone Progesterone làm nội mạc dày lên gấp 3 lần bình thường, các tuyến cuộn xoắn và chứa đầy chất nhầy. Kết hợp với tác động tích tụ 5 năm Tamoxifen, hình ảnh vi thể tại BV Hùng Vương (15/09) mô tả <em>"tuyến giãn rộng, lót biểu mô trụ cao"</em> là <strong>hoàn toàn phù hợp với sinh lý pha phân tiết bình thường</strong>, tuyệt đối <strong>không phải ung thư</strong>.
              </p>
              <p>
                • <strong>Đau vú 2 bên ngày 15/09:</strong> Ngày 23 chu kỳ (pha hoàng thể muộn), nồng độ Progesterone đạt đỉnh gây ứ dịch mô tuyến vú (Hội chứng tiền kinh nguyệt - PMS Mastalgia). Đây là sinh lý nội tiết buồng trứng, hoàn toàn không phải K vú tái phát!
              </p>
            </div>
          </div>

          {/* Phase Deep-Dive Tabs */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-200">
              <Layers className="w-4 h-4 text-teal-400" />
              <span>Phân Tích 4 Pha Chu Kỳ & Tương Tác Tamoxifen:</span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {cyclePhaseAnalyses.map(phase => {
                const isSelected = activePhaseTab === phase.id;
                return (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhaseTab(phase.id)}
                    className={`p-3 rounded-xl text-left transition-all flex flex-col justify-between gap-1 text-xs ${
                      isSelected 
                        ? 'bg-teal-500/20 text-teal-200 border border-teal-500/60 shadow-lg' 
                        : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-slate-800'
                    }`}
                  >
                    <span className="font-bold line-clamp-1">{phase.title.split('.')[1]}</span>
                    <span className="text-[10px] text-slate-400">{phase.cycleDays.split('(')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Phase Card */}
            {(() => {
              const phase = cyclePhaseAnalyses.find(p => p.id === activePhaseTab) || cyclePhaseAnalyses[3];
              return (
                <div className="p-4 sm:p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3 text-xs sm:text-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <h4 className="font-bold text-teal-300 text-sm sm:text-base flex items-center gap-2">
                      <Activity className="w-4 h-4 text-teal-400" />
                      {phase.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">{phase.timeRange}</span>
                      <span className="px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800/50">{phase.cycleDays}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300">
                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-850 space-y-1">
                      <span className="text-slate-400 text-[11px] font-bold uppercase tracking-wider block">Trạng Thái Sinh Lý & Độ Dày Niêm Mạc</span>
                      <p className="leading-relaxed">{phase.physiologicState}</p>
                      <p className="text-teal-300 pt-1 font-medium">Độ dày niêm mạc: <strong>{phase.endometrialThickness}</strong></p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-850 space-y-1">
                      <span className="text-slate-400 text-[11px] font-bold uppercase tracking-wider block">Tương Tác Tamoxifen & Triệu Chứng Của Chị</span>
                      <p className="leading-relaxed">{phase.tamoxifenInteraction}</p>
                      <p className="text-amber-200/90 pt-1 text-xs">Đối chiếu nhật ký: {phase.patientCorrelation}</p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-emerald-200 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Kết luận y khoa:</strong> {phase.safetyVerdict}</span>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Interactive Timeline & Daily Log Explorer */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-200">
                <Clock className="w-4 h-4 text-teal-400" />
                <span>Nhật Ký Triệu Chứng Chi Tiết Từng Ngày (45 Ngày):</span>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    activeFilter === 'all' 
                      ? 'bg-teal-500 text-slate-950 font-bold' 
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  Tất Cả ({menstrualCycleLogs.length})
                </button>
                <button
                  onClick={() => setActiveFilter('milestones')}
                  className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                    activeFilter === 'milestones' 
                      ? 'bg-amber-500 text-slate-950 font-bold' 
                      : 'bg-slate-900 text-amber-300/80 hover:text-amber-200 border border-slate-800'
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  Cột Mốc Chính
                </button>
                <button
                  onClick={() => setActiveFilter('secretory')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    activeFilter === 'secretory' 
                      ? 'bg-teal-500 text-slate-950 font-bold' 
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  Sau Pipelle (09-15/09)
                </button>
                <button
                  onClick={() => setActiveFilter('ovulatory')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    activeFilter === 'ovulatory' 
                      ? 'bg-teal-500 text-slate-950 font-bold' 
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  Rụng Trứng & Dịch Cam
                </button>
                <button
                  onClick={() => setActiveFilter('menstrual')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    activeFilter === 'menstrual' 
                      ? 'bg-teal-500 text-slate-950 font-bold' 
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  Pha Hành Kinh (24-30/08)
                </button>
              </div>
            </div>

            {/* Timeline Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              
              {/* Scrollable Days List */}
              <div className="lg:col-span-5 max-h-[460px] overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {filteredRecentLogs.map((log, idx) => {
                  const isSelected = selectedLog?.date === log.date;
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedLog(log)}
                      className={`p-3 rounded-xl cursor-pointer transition-all border text-xs space-y-1.5 ${
                        isSelected
                          ? 'bg-teal-950/40 border-teal-500 shadow-md ring-1 ring-teal-500/40'
                          : log.isKeyMilestone
                          ? 'bg-slate-900/90 border-amber-500/40 hover:bg-slate-850'
                          : 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-850'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 font-bold text-white">
                          <span>{log.date}</span>
                          <span className="text-[10px] text-slate-400 font-normal">({log.dayOfWeek.split(' ')[0]})</span>
                        </div>
                        {getDischargeBadge(log.dischargeType, log.dischargeLabel)}
                      </div>

                      <div className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                        {log.summary}
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800/60">
                        <span className="text-teal-300/90">{log.cycleDayText.split('(')[0]}</span>
                        <span>{getPainBadge(log.painLevel)}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Detailed Selected Day Card */}
              <div className="lg:col-span-7">
                {selectedLog ? (
                  <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4 text-xs sm:text-sm h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      
                      {/* Top Day Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-black text-white">{selectedLog.date}</span>
                            <span className="text-xs text-slate-400">({selectedLog.dayOfWeek})</span>
                          </div>
                          <span className="text-xs text-teal-400 font-medium">{selectedLog.cycleDayText}</span>
                        </div>
                        <div>
                          {getDischargeBadge(selectedLog.dischargeType, selectedLog.dischargeLabel)}
                        </div>
                      </div>

                      {/* Milestone Banner if any */}
                      {selectedLog.eventNote && (
                        <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-600/50 text-amber-200 text-xs flex items-start gap-2">
                          <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold block">SỰ KIỆN QUAN TRỌNG:</span>
                            <span>{selectedLog.eventNote}</span>
                          </div>
                        </div>
                      )}

                      {/* Summary */}
                      <div className="space-y-1.5">
                        <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block">Ghi Nhận Triệu Chứng Thực Tế:</span>
                        <p className="text-slate-200 bg-slate-950 p-3 rounded-lg border border-slate-850 leading-relaxed">
                          {selectedLog.summary}
                        </p>
                      </div>

                      {/* Symptoms Tags */}
                      <div className="space-y-1">
                        <span className="text-slate-400 text-[11px] font-medium block">Triệu chứng chi tiết:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedLog.symptoms.map((s, i) => (
                            <span key={i} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-xs border border-slate-700">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Pain Description */}
                      {selectedLog.painDescription && (
                        <div className="p-2.5 rounded bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                          <span className="text-slate-400">Mức độ đau / Cảm giác:</span>
                          <span className="text-amber-300 font-medium">{selectedLog.painDescription}</span>
                        </div>
                      )}
                    </div>

                    {/* Clinical Interpretation Footer */}
                    <div className="p-3.5 rounded-xl bg-teal-950/30 border border-teal-800/40 space-y-1 mt-4">
                      <span className="text-teal-300 font-bold text-xs flex items-center gap-1.5">
                        <Microscope className="w-3.5 h-3.5 text-teal-400" />
                        Phân Tích Cơ Chế Y Khoa & Ý Nghĩa Lâm Sàng:
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {selectedLog.clinicalInterpretation}
                      </p>
                    </div>

                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center p-8 rounded-xl bg-slate-900/40 border border-slate-800 text-slate-500 text-xs">
                    Chọn một ngày trong danh sách để xem phân tích y khoa chi tiết
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Symptom Decoder Accordion */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <HelpCircle className="w-4 h-4 text-teal-400" />
              <span>Giải Mã 3 Hiện Tượng Lâm Sàng Thường Gây Hoang Mang:</span>
            </div>

            <div className="space-y-2">
              {symptomDecoders.map((item, idx) => {
                const isExpanded = expandedDecoder === idx;
                return (
                  <div 
                    key={idx}
                    className="rounded-xl bg-slate-900/70 border border-slate-800 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setExpandedDecoder(isExpanded ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-slate-850/80 transition-all"
                    >
                      <span className="font-bold text-slate-200 text-xs sm:text-sm flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-teal-950 text-teal-400 text-xs flex items-center justify-center font-mono">
                          {idx + 1}
                        </span>
                        {item.symptom}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-teal-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="p-4 pt-0 space-y-3 text-xs sm:text-sm text-slate-300 border-t border-slate-800/50">
                        <div className="p-3 rounded-lg bg-slate-950/70 space-y-1">
                          <span className="text-teal-300 font-bold block">1. Nôm na đời thường:</span>
                          <p className="leading-relaxed">{item.laymanExplanation}</p>
                        </div>

                        <div className="space-y-1">
                          <span className="text-slate-400 font-bold text-xs uppercase tracking-wider block">2. Cơ chế sinh học & Hóa học:</span>
                          <p className="leading-relaxed">{item.scientificMechanism}</p>
                        </div>

                        <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-emerald-200 space-y-1">
                          <span className="font-bold flex items-center gap-1.5 text-emerald-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            Vì sao chắc chắn không phải ung thư?
                          </span>
                          <p className="leading-relaxed">{item.whyNotCancer}</p>
                        </div>

                        <div className="p-2.5 rounded-lg bg-slate-800/50 text-slate-300 text-xs flex items-center gap-2">
                          <Info className="w-4 h-4 text-teal-400 shrink-0" />
                          <span><strong>Lời khuyên chăm sóc:</strong> {item.actionGuidance}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: LONGITUDINAL HISTORY (2022 - 2024 • 21 CYCLES) */}
      {/* ========================================================================= */}
      {mainViewMode === 'longitudinal_history' && (
        <div className="space-y-8">
          
          {/* Statistical Highlights (4 Cards) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                <BarChart3 className="w-3.5 h-3.5 text-teal-400" />
                Chu Kỳ Theo Dõi
              </span>
              <div className="text-2xl font-black text-teal-300">{historicalCycleStatistics.totalTrackedCycles} chu kỳ</div>
              <span className="text-[10px] text-slate-400">{historicalCycleStatistics.trackingDurationYears}</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                Độ Dài Trung Bình
              </span>
              <div className="text-2xl font-black text-amber-300">{historicalCycleStatistics.averageCycleLength} ngày</div>
              <span className="text-[10px] text-amber-200/80">Chu kỳ dài sinh lý (35 - 40d)</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                <Droplets className="w-3.5 h-3.5 text-rose-400" />
                Số Ngày Hành Kinh
              </span>
              <div className="text-2xl font-black text-rose-300">{historicalCycleStatistics.averagePeriodDuration} ngày</div>
              <span className="text-[10px] text-emerald-300 font-medium">100% cực kỳ ổn định</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Tính Ổn Định
              </span>
              <div className="text-2xl font-black text-emerald-300">{historicalCycleStatistics.longCyclePercentage}%</div>
              <span className="text-[10px] text-slate-400">Chu kỳ trong chuẩn 34-42 ngày</span>
            </div>
          </div>

          {/* Clinical Insights from Long-term History */}
          <div className="p-5 rounded-xl bg-slate-900/90 border border-teal-500/30 space-y-4">
            <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <Microscope className="w-4 h-4 text-teal-400" />
              <span>Ý Nghĩa Y Khoa Cốt Lõi Của Chu Kỳ 35 – 40 Ngày Dài Hạn:</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
              {historicalCycleClinicalInsights.map((insight, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-teal-300 text-xs block">{insight.title}</span>
                  <p className="text-slate-300 text-xs leading-relaxed">{insight.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* App Screenshots Gallery */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-200">
                <ImageIcon className="w-4 h-4 text-teal-400" />
                <span>Hình Ảnh Đối Chiếu Từ Nhật Ký Ứng Dụng Theo Dõi:</span>
              </div>
              <span className="text-xs text-slate-400">Nhấn vào ảnh để phóng to</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {appScreenshots.map((shot, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImageModal(shot.src)}
                  className="group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-teal-500/60 cursor-pointer transition-all space-y-2 p-2"
                >
                  <div className="aspect-[9/16] w-full rounded-lg overflow-hidden bg-slate-950 relative">
                    <img
                      src={shot.src}
                      alt={shot.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="p-2 rounded-full bg-teal-500 text-slate-950 shadow-lg">
                        <ZoomIn className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  <div className="px-1 pb-1 space-y-0.5">
                    <span className="font-bold text-white text-[11px] line-clamp-1 group-hover:text-teal-300 transition-colors">
                      {shot.title}
                    </span>
                    <span className="text-[10px] text-teal-400 block font-mono">{shot.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Historical Cycles List & Interactive Visualizer */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-200">
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>Danh Sách 43 Chu Kỳ Kinh Nguyệt (2022 – 2026):</span>
              </div>

              {/* Year Filter */}
              <div className="flex flex-wrap items-center gap-1 text-xs">
                <button
                  onClick={() => setHistoryYearFilter('all')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    historyYearFilter === 'all' 
                      ? 'bg-teal-500 text-slate-950 font-bold' 
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  Tất Cả ({historicalCyclesData.length})
                </button>
                <button
                  onClick={() => setHistoryYearFilter(2026)}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    historyYearFilter === 2026 
                      ? 'bg-teal-500 text-slate-950 font-bold' 
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  2026 (8)
                </button>
                <button
                  onClick={() => setHistoryYearFilter(2025)}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    historyYearFilter === 2025 
                      ? 'bg-teal-500 text-slate-950 font-bold' 
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  2025 (9)
                </button>
                <button
                  onClick={() => setHistoryYearFilter(2024)}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    historyYearFilter === 2024 
                      ? 'bg-teal-500 text-slate-950 font-bold' 
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  2024 (10)
                </button>
                <button
                  onClick={() => setHistoryYearFilter(2023)}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    historyYearFilter === 2023 
                      ? 'bg-teal-500 text-slate-950 font-bold' 
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  2023 (11)
                </button>
                <button
                  onClick={() => setHistoryYearFilter(2022)}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    historyYearFilter === 2022 
                      ? 'bg-teal-500 text-slate-950 font-bold' 
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  2022 (5)
                </button>
              </div>
            </div>

            {/* Cycles List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredHistoricalCycles.map((cycle) => {
                const isSelected = selectedHistoricalCycle?.id === cycle.id;
                return (
                  <div
                    key={cycle.id}
                    onClick={() => setSelectedHistoricalCycle(cycle)}
                    className={`p-4 rounded-xl cursor-pointer transition-all border text-xs space-y-2.5 ${
                      isSelected
                        ? 'bg-teal-950/40 border-teal-500 shadow-md ring-1 ring-teal-500/40'
                        : 'bg-slate-900/60 border-slate-800 hover:bg-slate-850'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">{cycle.dateRangeDisplay}</span>
                        <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 font-mono">
                          {cycle.year}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-teal-950 text-teal-300 border border-teal-800/50">
                        {cycle.cycleLengthDays} ngày
                      </span>
                    </div>

                    {/* Visual Cycle Representation (App-like pills) */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 overflow-hidden py-1">
                        {/* Red pills: Period days (5 days) */}
                        {Array.from({ length: Math.min(cycle.periodDurationDays, 6) }).map((_, i) => (
                          <div key={`p-${i}`} className="h-3 w-2 rounded-full bg-rose-500 shrink-0" title={`Ngày hành kinh ${i+1}`} />
                        ))}
                        {/* Gray pills: Proliferative days */}
                        {Array.from({ length: Math.max(0, Math.floor((cycle.cycleLengthDays - 19) / 2)) }).map((_, i) => (
                          <div key={`g-${i}`} className="h-3 w-2 rounded-full bg-slate-700 shrink-0" />
                        ))}
                        {/* Purple pills: Ovulatory/Luteal fertile window (6-7 days) */}
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div key={`o-${i}`} className="h-3 w-2 rounded-full bg-purple-500 shrink-0" title="Cửa sổ rụng trứng & hoàng thể" />
                        ))}
                        {/* Gray pills: Late luteal */}
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div key={`l-${i}`} className="h-3 w-2 rounded-full bg-slate-600 shrink-0" />
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                        <span className="text-rose-300 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
                          Hành kinh: {cycle.periodDurationDays} ngày
                        </span>
                        <span className="text-purple-300 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-purple-500 inline-block" />
                          Rụng trứng & Hoàng thể
                        </span>
                        <span className="text-slate-400 font-mono">
                          {cycle.cycleTypeLabel.split('(')[0]}
                        </span>
                      </div>
                    </div>

                    {/* Clinical Note */}
                    <p className="text-[11px] text-slate-300 leading-relaxed border-t border-slate-800/60 pt-1.5">
                      {cycle.clinicalNote}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* Image Zoom Modal */}
      {activeImageModal && (
        <div 
          onClick={() => setActiveImageModal(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div className="relative max-w-lg w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setActiveImageModal(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeImageModal}
              alt="Chi tiết chu kỳ kinh nguyệt"
              className="max-h-[85vh] w-auto rounded-xl shadow-2xl border border-slate-700 object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

    </div>
  );
};
