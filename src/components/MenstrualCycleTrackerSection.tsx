import React, { useState, useEffect, useRef } from 'react';
import { 
  menstrualCycleLogs as initialDailyLogs, 
  cyclePhaseAnalyses, 
  symptomDecoders,
  historicalCyclesData as initialHistoricalCycles,
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
  History,
  Plus,
  Edit3,
  Trash2,
  Download,
  Upload,
  RotateCcw,
  Save,
  Search
} from 'lucide-react';

const STORAGE_KEY_CYCLES = 'mom_health_menstrual_cycles_v2';
const STORAGE_KEY_LOGS = 'mom_health_daily_logs_v2';

export const MenstrualCycleTrackerSection: React.FC = () => {
  // Main view mode: 'recent_log' (Daily logs), 'longitudinal_history' (43 cycles list)
  const [mainViewMode, setMainViewMode] = useState<'recent_log' | 'longitudinal_history'>('recent_log');

  // Persistence State: Cycles & Daily Logs
  const [cycles, setCycles] = useState<HistoricalCycle[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CYCLES);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // ignore
    }
    return initialHistoricalCycles;
  });

  const [dailyLogs, setDailyLogs] = useState<DailyCycleLog[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LOGS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // ignore
    }
    return initialDailyLogs;
  });

  // Sync to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_CYCLES, JSON.stringify(cycles));
    } catch (e) {
      console.error('Failed to save cycles to localStorage', e);
    }
  }, [cycles]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_LOGS, JSON.stringify(dailyLogs));
    } catch (e) {
      console.error('Failed to save logs to localStorage', e);
    }
  }, [dailyLogs]);

  // Recent Log States
  const [activeFilter, setActiveFilter] = useState<'all' | 'milestones' | 'menstrual' | 'ovulatory' | 'secretory'>('all');
  const [selectedLog, setSelectedLog] = useState<DailyCycleLog | null>(dailyLogs[0] || null);
  const [expandedDecoder, setExpandedDecoder] = useState<number | null>(0);
  const [activePhaseTab, setActivePhaseTab] = useState<string>('secretory-phase');
  const [logSearchQuery, setLogSearchQuery] = useState<string>('');

  // Longitudinal History States
  const [historyYearFilter, setHistoryYearFilter] = useState<number | 'all'>('all');
  const [selectedHistoricalCycle, setSelectedHistoricalCycle] = useState<HistoricalCycle | null>(cycles[0] || null);
  const [cycleSearchQuery, setCycleSearchQuery] = useState<string>('');
  const [activeImageModal, setActiveImageModal] = useState<string | null>(null);

  // Modals States
  const [isCycleModalOpen, setIsCycleModalOpen] = useState<boolean>(false);
  const [editingCycle, setEditingCycle] = useState<HistoricalCycle | null>(null);

  const [isLogModalOpen, setIsLogModalOpen] = useState<boolean>(false);
  const [editingLog, setEditingLog] = useState<DailyCycleLog | null>(null);

  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showNotification = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  // Real-time Dynamic Statistics from Current Cycles
  const dynamicStats = React.useMemo(() => {
    const total = cycles.length;
    if (total === 0) {
      return {
        totalTrackedCycles: 0,
        averageCycleLength: 0,
        averagePeriodDuration: 0,
        longCyclePercentage: 0,
        minYear: 2022,
        maxYear: 2026
      };
    }
    const sumCycleLength = cycles.reduce((acc, c) => acc + (c.cycleLengthDays || 0), 0);
    const sumPeriod = cycles.reduce((acc, c) => acc + (c.periodDurationDays || 0), 0);
    const regularCount = cycles.filter(c => (c.cycleLengthDays >= 28 && c.cycleLengthDays <= 42)).length;
    const years = cycles.map(c => c.year).filter(y => Boolean(y));
    const minYear = years.length > 0 ? Math.min(...years) : 2022;
    const maxYear = years.length > 0 ? Math.max(...years) : 2026;

    return {
      totalTrackedCycles: total,
      averageCycleLength: Number((sumCycleLength / total).toFixed(1)),
      averagePeriodDuration: Number((sumPeriod / total).toFixed(1)),
      longCyclePercentage: Math.round((regularCount / total) * 100),
      minYear,
      maxYear
    };
  }, [cycles]);

  // Filtered Logs
  const filteredRecentLogs = dailyLogs.filter(log => {
    if (logSearchQuery.trim()) {
      const q = logSearchQuery.toLowerCase();
      const match = log.date.toLowerCase().includes(q) ||
                    log.summary.toLowerCase().includes(q) ||
                    log.symptoms.some(s => s.toLowerCase().includes(q)) ||
                    log.clinicalInterpretation.toLowerCase().includes(q);
      if (!match) return false;
    }
    if (activeFilter === 'milestones') return log.isKeyMilestone;
    if (activeFilter === 'menstrual') return log.phase === 'menstrual';
    if (activeFilter === 'ovulatory') return log.phase === 'ovulatory';
    if (activeFilter === 'secretory') return log.phase === 'secretory';
    return true;
  });

  // Filtered Cycles
  const filteredHistoricalCycles = cycles.filter(c => {
    if (historyYearFilter !== 'all' && c.year !== historyYearFilter) return false;
    if (cycleSearchQuery.trim()) {
      const q = cycleSearchQuery.toLowerCase();
      const match = c.dateRangeDisplay.toLowerCase().includes(q) ||
                    c.clinicalNote.toLowerCase().includes(q) ||
                    c.cycleTypeLabel.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  // Unique Years from current cycles
  const availableYears = React.useMemo(() => {
    const ySet = new Set<number>();
    cycles.forEach(c => { if (c.year) ySet.add(c.year); });
    return Array.from(ySet).sort((a, b) => b - a);
  }, [cycles]);

  // Export Data JSON
  const handleExportData = () => {
    const exportObj = {
      version: '2.0',
      exportDate: new Date().toISOString(),
      patientName: 'NGUYỄN THỊ THÚY NGA',
      patientBirthYear: 1981,
      stats: dynamicStats,
      cycles: cycles,
      dailyLogs: dailyLogs
    };
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportObj, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `mom_health_menstrual_data_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showNotification('Đã xuất toàn bộ dữ liệu 43 chu kỳ & nhật ký thành file JSON an toàn!', 'success');
  };

  // Import Data JSON
  const handleImportFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        const parsed = JSON.parse(content);
        if (parsed && Array.isArray(parsed.cycles)) {
          setCycles(parsed.cycles);
          if (Array.isArray(parsed.dailyLogs)) {
            setDailyLogs(parsed.dailyLogs);
          }
          showNotification(`Nhập thành công ${parsed.cycles.length} chu kỳ và ${parsed.dailyLogs?.length || 0} nhật ký!`, 'success');
        } else if (Array.isArray(parsed)) {
          setCycles(parsed);
          showNotification(`Đã nhập thành công ${parsed.length} chu kỳ!`, 'success');
        } else {
          showNotification('File không đúng cấu trúc dữ liệu theo dõi chu kỳ!', 'error');
        }
      } catch (err) {
        console.error('Import error', err);
        showNotification('Lỗi khi đọc file JSON!', 'error');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // Reset to Default Pre-imported
  const handleResetToDefault = () => {
    if (window.confirm('Bạn có chắc chắn muốn khôi phục toàn bộ dữ liệu gốc (43 chu kỳ chuẩn 2022-2026 & nhật ký tháng 8-9/2026)? Mọi chỉnh sửa tự tạo sẽ được đặt lại.')) {
      setCycles(initialHistoricalCycles);
      setDailyLogs(initialDailyLogs);
      setSelectedHistoricalCycle(initialHistoricalCycles[0]);
      setSelectedLog(initialDailyLogs[0]);
      localStorage.removeItem(STORAGE_KEY_CYCLES);
      localStorage.removeItem(STORAGE_KEY_LOGS);
      showNotification('Đã khôi phục dữ liệu y khoa gốc thành công!', 'info');
    }
  };

  // Cycle Modal Handlers
  const handleOpenAddCycle = () => {
    setEditingCycle({
      id: `cycle-${Date.now()}`,
      startDate: new Date().toLocaleDateString('vi-VN'),
      endDate: '',
      dateRangeDisplay: '',
      year: new Date().getFullYear(),
      cycleLengthDays: 35,
      periodDurationDays: 5,
      cycleType: 'normal_long',
      cycleTypeLabel: 'Chu kỳ dài sinh lý (35 ngày)',
      clinicalNote: ''
    });
    setIsCycleModalOpen(true);
  };

  const handleOpenEditCycle = (cycle: HistoricalCycle, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setEditingCycle({ ...cycle });
    setIsCycleModalOpen(true);
  };

  const handleDeleteCycle = (cycleId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (window.confirm('Bạn có chắc chắn muốn xóa chu kỳ này khỏi danh sách theo dõi?')) {
      const updated = cycles.filter(c => c.id !== cycleId);
      setCycles(updated);
      if (selectedHistoricalCycle?.id === cycleId) {
        setSelectedHistoricalCycle(updated[0] || null);
      }
      showNotification('Đã xóa chu kỳ thành công!', 'info');
    }
  };

  const handleSaveCycle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCycle) return;

    const displayRange = editingCycle.dateRangeDisplay.trim() || 
      `${editingCycle.startDate} – ${editingCycle.endDate || 'Hiện tại'}`;

    const cycleToSave: HistoricalCycle = {
      ...editingCycle,
      dateRangeDisplay: displayRange,
      year: editingCycle.year || new Date().getFullYear()
    };

    const existsIndex = cycles.findIndex(c => c.id === cycleToSave.id);
    let updated: HistoricalCycle[];
    if (existsIndex >= 0) {
      updated = [...cycles];
      updated[existsIndex] = cycleToSave;
      showNotification('Đã cập nhật thông tin chu kỳ!', 'success');
    } else {
      updated = [cycleToSave, ...cycles];
      showNotification('Đã thêm chu kỳ mới thành công!', 'success');
    }
    setCycles(updated);
    setSelectedHistoricalCycle(cycleToSave);
    setIsCycleModalOpen(false);
    setEditingCycle(null);
  };

  // Daily Log Modal Handlers
  const handleOpenAddLog = () => {
    setEditingLog({
      date: new Date().toLocaleDateString('vi-VN'),
      dayOfWeek: 'Hôm nay',
      cycleDayText: 'Ngày chu kỳ mới',
      cycleDayNumber: 1,
      phase: 'menstrual',
      phaseLabel: 'Pha Hành Kinh',
      summary: '',
      symptoms: [],
      dischargeType: 'none',
      dischargeLabel: 'Sạch / Không ra dịch',
      painLevel: 'none',
      painDescription: '',
      eventNote: '',
      clinicalInterpretation: 'Ghi nhận sinh lý bình thường.',
      isKeyMilestone: false
    });
    setIsLogModalOpen(true);
  };

  const handleOpenEditLog = (log: DailyCycleLog, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setEditingLog({ ...log });
    setIsLogModalOpen(true);
  };

  const handleDeleteLog = (logDate: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (window.confirm(`Bạn có chắc muốn xóa nhật ký ngày ${logDate}?`)) {
      const updated = dailyLogs.filter(l => l.date !== logDate);
      setDailyLogs(updated);
      if (selectedLog?.date === logDate) {
        setSelectedLog(updated[0] || null);
      }
      showNotification('Đã xóa nhật ký ngày thành công!', 'info');
    }
  };

  const handleSaveLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingLog) return;

    const existsIndex = dailyLogs.findIndex(l => l.date === editingLog.date);
    let updated: DailyCycleLog[];
    if (existsIndex >= 0) {
      updated = [...dailyLogs];
      updated[existsIndex] = editingLog;
      showNotification('Đã cập nhật nhật ký ngày!', 'success');
    } else {
      updated = [editingLog, ...dailyLogs];
      showNotification('Đã thêm nhật ký ngày mới!', 'success');
    }
    setDailyLogs(updated);
    setSelectedLog(editingLog);
    setIsLogModalOpen(false);
    setEditingLog(null);
  };

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
        return <span className="text-emerald-400 text-xs font-medium">Không đau</span>;
      case 'mild':
        return <span className="text-amber-400 text-xs font-medium">Đau nhẹ</span>;
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
    <div className="w-full space-y-6 my-8 font-sans">
      
      {/* Toast Notification */}
      {notification && (
        <div className={`fixed top-16 right-4 z-50 p-4 rounded-xl shadow-2xl border flex items-center gap-3 animate-in slide-in-from-top-4 duration-200 ${
          notification.type === 'success' ? 'bg-emerald-950 border-emerald-500 text-emerald-100' :
          notification.type === 'error' ? 'bg-rose-950 border-rose-500 text-rose-100' :
          'bg-slate-900 border-teal-500 text-teal-100'
        }`}>
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{notification.message}</span>
          <button onClick={() => setNotification(null)} className="p-1 hover:bg-slate-800 rounded cursor-pointer">
            <X className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      )}

      {/* Hidden File Input for JSON Import */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleImportFileChange} 
        accept=".json" 
        className="hidden" 
      />

      {/* Section Header & Global Action Toolbar */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950/50 border border-teal-500/30 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-4 h-4 text-teal-400" />
            <span>Công Cụ Theo Dõi Chu Kỳ & Nhật Ký Triệu Chứng (2022 Đến Nay)</span>
          </div>

          {/* Action Buttons: Import, Export, Reset */}
          <div className="flex items-center gap-1.5 text-xs">
            <button
              onClick={handleExportData}
              title="Tải về file sao lưu JSON của toàn bộ chu kỳ & nhật ký"
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-teal-400" />
              <span className="hidden sm:inline">Xuất Dữ Liệu</span>
            </button>
            <button
              onClick={() => fileInputRef.current?.click()}
              title="Nhập file sao lưu JSON trước đó"
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Nhập JSON</span>
            </button>
            <button
              onClick={handleResetToDefault}
              title="Khôi phục về dữ liệu 43 chu kỳ gốc"
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-rose-950 text-slate-400 hover:text-rose-300 border border-slate-700 transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          Bộ Công Cụ Tương Tác Theo Dõi Chu Kỳ Kinh & Quản Lý Triệu Chứng Sinh Lý
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Đã tích hợp sẵn toàn bộ <strong>{dynamicStats.totalTrackedCycles} chu kỳ thực tế từ năm {dynamicStats.minYear} đến {dynamicStats.maxYear}</strong> cùng nhật ký biến thiên triệu chứng. Bệnh nhân có thể tra cứu, xem đối chiếu hình thái mô học, tự do <strong>thêm mới, chỉnh sửa</strong> hoặc <strong>sao lưu</strong> dữ liệu mọi lúc.
        </p>
      </div>

      {/* Main View Mode Selector (2 Tabs + Add Buttons) */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-1.5 bg-slate-900/90 rounded-xl border border-slate-800">
        <div className="flex items-center gap-1 flex-1 min-w-[280px]">
          <button
            onClick={() => setMainViewMode('recent_log')}
            className={`flex-1 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              mainViewMode === 'recent_log'
                ? 'bg-teal-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
            }`}
          >
            <CalendarDays className="w-4 h-4" />
            <span>Nhật Ký Từng Ngày (08–09/2026) ({dailyLogs.length})</span>
          </button>

          <button
            onClick={() => setMainViewMode('longitudinal_history')}
            className={`flex-1 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              mainViewMode === 'longitudinal_history'
                ? 'bg-teal-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
            }`}
          >
            <History className="w-4 h-4" />
            <span>Toàn Bộ {cycles.length} Chu Kỳ</span>
          </button>
        </div>

        {/* Quick Add Button dependent on active tab */}
        <div className="flex items-center gap-1.5">
          {mainViewMode === 'recent_log' ? (
            <button
              onClick={handleOpenAddLog}
              className="px-3 py-2 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/50 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 text-teal-400" />
              <span>Ghi Nhật Ký Ngày Mới</span>
            </button>
          ) : (
            <button
              onClick={handleOpenAddCycle}
              className="px-3 py-2 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/50 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 text-teal-400" />
              <span>Thêm Chu Kỳ Mới</span>
            </button>
          )}
        </div>
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
                    className={`p-3 rounded-xl text-left transition-all flex flex-col justify-between gap-1 text-xs cursor-pointer ${
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
                <span>Nhật Ký Triệu Chứng Chi Tiết Từng Ngày ({filteredRecentLogs.length} ngày):</span>
              </div>

              {/* Filters & Search */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
                  <input
                    type="text"
                    placeholder="Tìm triệu chứng, ngày..."
                    value={logSearchQuery}
                    onChange={(e) => setLogSearchQuery(e.target.value)}
                    className="pl-8 pr-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 w-36 sm:w-44"
                  />
                  {logSearchQuery && (
                    <button onClick={() => setLogSearchQuery('')} className="absolute right-2 top-1.5 text-slate-400 hover:text-white cursor-pointer">
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>

                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    activeFilter === 'all' 
                      ? 'bg-teal-500 text-slate-950 font-bold' 
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  Tất Cả ({dailyLogs.length})
                </button>
                <button
                  onClick={() => setActiveFilter('milestones')}
                  className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                    activeFilter === 'milestones' 
                      ? 'bg-amber-500 text-slate-950 font-bold' 
                      : 'bg-slate-900 text-amber-300/80 hover:text-amber-200 border border-slate-800'
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  Cột Mốc
                </button>
                <button
                  onClick={() => setActiveFilter('secretory')}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    activeFilter === 'secretory' 
                      ? 'bg-teal-500 text-slate-950 font-bold' 
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  Sau Pipelle (09-15/09)
                </button>
                <button
                  onClick={() => setActiveFilter('ovulatory')}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    activeFilter === 'ovulatory' 
                      ? 'bg-teal-500 text-slate-950 font-bold' 
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  Rụng Trứng & Cam
                </button>
                <button
                  onClick={() => setActiveFilter('menstrual')}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    activeFilter === 'menstrual' 
                      ? 'bg-teal-500 text-slate-950 font-bold' 
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  Hành Kinh (24-30/08)
                </button>
              </div>
            </div>

            {/* Timeline Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              
              {/* Scrollable Days List */}
              <div className="lg:col-span-5 max-h-[480px] overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {filteredRecentLogs.map((log, idx) => {
                  const isSelected = selectedLog?.date === log.date;
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedLog(log)}
                      className={`p-3 rounded-xl cursor-pointer transition-all border text-xs space-y-1.5 group relative ${
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
                        <div className="flex items-center gap-1">
                          {getDischargeBadge(log.dischargeType, log.dischargeLabel)}
                          <button
                            onClick={(e) => handleOpenEditLog(log, e)}
                            title="Chỉnh sửa ngày này"
                            className="p-1 rounded text-slate-400 hover:text-teal-300 hover:bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          >
                            <Edit3 className="w-3 h-3" />
                          </button>
                          <button
                            onClick={(e) => handleDeleteLog(log.date, e)}
                            title="Xóa ngày này"
                            className="p-1 rounded text-slate-400 hover:text-rose-400 hover:bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
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
                        <div className="flex items-center gap-2">
                          {getDischargeBadge(selectedLog.dischargeType, selectedLog.dischargeLabel)}
                          <button
                            onClick={() => handleOpenEditLog(selectedLog)}
                            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-300 border border-slate-700 text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>Sửa</span>
                          </button>
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
                    Chọn một ngày trong danh sách hoặc bấm "Ghi Nhật Ký Ngày Mới" để thêm
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
                      className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-slate-850/80 transition-all cursor-pointer"
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
      {/* TAB 2: LONGITUDINAL HISTORY (43 CYCLES - EDITABLE) */}
      {/* ========================================================================= */}
      {mainViewMode === 'longitudinal_history' && (
        <div className="space-y-8">
          
          {/* Dynamic Real-Time Statistical Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                <BarChart3 className="w-3.5 h-3.5 text-teal-400" />
                Chu Kỳ Theo Dõi
              </span>
              <div className="text-2xl font-black text-teal-300">{dynamicStats.totalTrackedCycles} chu kỳ</div>
              <span className="text-[10px] text-slate-400">Năm {dynamicStats.minYear} – {dynamicStats.maxYear}</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                Độ Dài Trung Bình
              </span>
              <div className="text-2xl font-black text-amber-300">{dynamicStats.averageCycleLength} ngày</div>
              <span className="text-[10px] text-amber-200/80">Chu kỳ dài sinh lý (30 - 42d)</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                <Droplets className="w-3.5 h-3.5 text-rose-400" />
                Số Ngày Hành Kinh
              </span>
              <div className="text-2xl font-black text-rose-300">{dynamicStats.averagePeriodDuration} ngày</div>
              <span className="text-[10px] text-emerald-300 font-medium">Cực kỳ ổn định</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Tính Ổn Định
              </span>
              <div className="text-2xl font-black text-emerald-300">{dynamicStats.longCyclePercentage}%</div>
              <span className="text-[10px] text-slate-400">Chu kỳ trong chuẩn 28-42 ngày</span>
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
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-opacity flex items-center justify-center">
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

          {/* Historical Cycles List & Interactive Visualizer with CRUD */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-200">
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>Danh Sách Chu Kỳ Kinh Nguyệt ({filteredHistoricalCycles.length} chu kỳ):</span>
              </div>

              {/* Year Filter & Search */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
                  <input
                    type="text"
                    placeholder="Tìm ngày, ghi chú..."
                    value={cycleSearchQuery}
                    onChange={(e) => setCycleSearchQuery(e.target.value)}
                    className="pl-8 pr-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 w-36 sm:w-44"
                  />
                  {cycleSearchQuery && (
                    <button onClick={() => setCycleSearchQuery('')} className="absolute right-2 top-1.5 text-slate-400 hover:text-white cursor-pointer">
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>

                <button
                  onClick={() => setHistoryYearFilter('all')}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    historyYearFilter === 'all' 
                      ? 'bg-teal-500 text-slate-950 font-bold' 
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  Tất Cả ({cycles.length})
                </button>
                {availableYears.map(year => (
                  <button
                    key={year}
                    onClick={() => setHistoryYearFilter(year)}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      historyYearFilter === year 
                        ? 'bg-teal-500 text-slate-950 font-bold' 
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {year} ({cycles.filter(c => c.year === year).length})
                  </button>
                ))}
              </div>
            </div>

            {/* Cycles Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredHistoricalCycles.map((cycle) => {
                const isSelected = selectedHistoricalCycle?.id === cycle.id;
                return (
                  <div
                    key={cycle.id}
                    onClick={() => setSelectedHistoricalCycle(cycle)}
                    className={`p-4 rounded-xl cursor-pointer transition-all border text-xs space-y-2.5 group relative ${
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
                      <div className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-teal-950 text-teal-300 border border-teal-800/50">
                          {cycle.cycleLengthDays} ngày
                        </span>
                        <button
                          onClick={(e) => handleOpenEditCycle(cycle, e)}
                          title="Chỉnh sửa chu kỳ này"
                          className="p-1 rounded text-slate-400 hover:text-teal-300 hover:bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={(e) => handleDeleteCycle(cycle.id, e)}
                          title="Xóa chu kỳ này"
                          className="p-1 rounded text-slate-400 hover:text-rose-400 hover:bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Visual Cycle Representation */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 overflow-hidden py-1">
                        {Array.from({ length: Math.min(cycle.periodDurationDays, 6) }).map((_, i) => (
                          <div key={`p-${i}`} className="h-3 w-2 rounded-full bg-rose-500 shrink-0" title={`Ngày hành kinh ${i+1}`} />
                        ))}
                        {Array.from({ length: Math.max(0, Math.floor((cycle.cycleLengthDays - 19) / 2)) }).map((_, i) => (
                          <div key={`g-${i}`} className="h-3 w-2 rounded-full bg-slate-700 shrink-0" />
                        ))}
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div key={`o-${i}`} className="h-3 w-2 rounded-full bg-purple-500 shrink-0" title="Cửa sổ rụng trứng & hoàng thể" />
                        ))}
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

      {/* ========================================================================= */}
      {/* MODAL: ADD / EDIT CYCLE */}
      {/* ========================================================================= */}
      {isCycleModalOpen && editingCycle && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-black text-white text-base flex items-center gap-2">
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>{cycles.some(c => c.id === editingCycle.id) ? 'Chỉnh Sửa Chu Kỳ Kinh' : 'Thêm Chu Kỳ Kinh Mới'}</span>
              </h3>
              <button onClick={() => setIsCycleModalOpen(false)} className="p-1 text-slate-400 hover:text-white cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveCycle} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Khoảng thời gian hiển thị:</label>
                  <input
                    type="text"
                    required
                    placeholder="VD: 24/08/2026 – 28/09/2026"
                    value={editingCycle.dateRangeDisplay}
                    onChange={(e) => setEditingCycle({ ...editingCycle, dateRangeDisplay: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Năm theo dõi:</label>
                  <input
                    type="number"
                    required
                    min={2020}
                    max={2030}
                    value={editingCycle.year}
                    onChange={(e) => setEditingCycle({ ...editingCycle, year: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Độ dài chu kỳ (ngày):</label>
                  <input
                    type="number"
                    required
                    min={10}
                    max={90}
                    value={editingCycle.cycleLengthDays}
                    onChange={(e) => setEditingCycle({ ...editingCycle, cycleLengthDays: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Số ngày hành kinh (ngày):</label>
                  <input
                    type="number"
                    required
                    min={1}
                    max={20}
                    value={editingCycle.periodDurationDays}
                    onChange={(e) => setEditingCycle({ ...editingCycle, periodDurationDays: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-medium">Phân loại chu kỳ:</label>
                <select
                  value={editingCycle.cycleType}
                  onChange={(e) => {
                    const val = e.target.value as HistoricalCycle['cycleType'];
                    const labelMap = {
                      'standard': `Chu kỳ chuẩn (${editingCycle.cycleLengthDays} ngày)`,
                      'normal_long': `Chu kỳ dài sinh lý (${editingCycle.cycleLengthDays} ngày)`,
                      'delayed_long': `Chu kỳ thưa (${editingCycle.cycleLengthDays} ngày)`,
                      'short_breakthrough': `Chu kỳ ngắn không phóng noãn (${editingCycle.cycleLengthDays} ngày)`
                    };
                    setEditingCycle({ 
                      ...editingCycle, 
                      cycleType: val,
                      cycleTypeLabel: labelMap[val] || 'Chu kỳ bình thường'
                    });
                  }}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500"
                >
                  <option value="normal_long">Chu kỳ dài sinh lý (30 - 42 ngày)</option>
                  <option value="standard">Chu kỳ chuẩn (26 - 30 ngày)</option>
                  <option value="delayed_long">Chu kỳ thưa / trễ (&gt; 43 ngày)</option>
                  <option value="short_breakthrough">Chu kỳ ngắn / không phóng noãn (&lt; 25 ngày)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-medium">Ghi chú lâm sàng / Diễn biến:</label>
                <textarea
                  rows={3}
                  value={editingCycle.clinicalNote}
                  onChange={(e) => setEditingCycle({ ...editingCycle, clinicalNote: e.target.value })}
                  placeholder="Ghi nhận triệu chứng, mức độ máu kinh, can thiệp y tế..."
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsCycleModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 cursor-pointer"
                >
                  Hủy Bỏ
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-teal-500 text-slate-950 font-bold hover:bg-teal-400 flex items-center gap-1.5 cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Lưu Chu Kỳ</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: ADD / EDIT DAILY LOG */}
      {/* ========================================================================= */}
      {isLogModalOpen && editingLog && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 space-y-4 shadow-2xl animate-in zoom-in-95 duration-200 custom-scrollbar">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-black text-white text-base flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400" />
                <span>{dailyLogs.some(l => l.date === editingLog.date) ? 'Chỉnh Sửa Nhật Ký Ngày' : 'Ghi Nhật Ký Ngày Mới'}</span>
              </h3>
              <button onClick={() => setIsLogModalOpen(false)} className="p-1 text-slate-400 hover:text-white cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveLog} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Ngày ghi nhận (DD/MM/YYYY):</label>
                  <input
                    type="text"
                    required
                    placeholder="VD: 16/09/2026"
                    value={editingLog.date}
                    onChange={(e) => setEditingLog({ ...editingLog, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Thứ trong tuần:</label>
                  <input
                    type="text"
                    placeholder="VD: Thứ Tư (Wednesday)"
                    value={editingLog.dayOfWeek}
                    onChange={(e) => setEditingLog({ ...editingLog, dayOfWeek: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Vị trí ngày trong chu kỳ:</label>
                  <input
                    type="text"
                    placeholder="VD: Ngày 24 chu kỳ (Pha hoàng thể)"
                    value={editingLog.cycleDayText}
                    onChange={(e) => setEditingLog({ ...editingLog, cycleDayText: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Pha chu kỳ:</label>
                  <select
                    value={editingLog.phase}
                    onChange={(e) => {
                      const val = e.target.value as DailyCycleLog['phase'];
                      const map = {
                        'menstrual': 'Pha Hành Kinh',
                        'proliferative': 'Pha Tăng Sinh',
                        'ovulatory': 'Pha Rụng Trứng',
                        'secretory': 'Pha Phân Tiết (Hoàng Thể)',
                        'prior_cycle': 'Chu Kỳ Trước'
                      };
                      setEditingLog({ ...editingLog, phase: val, phaseLabel: map[val] });
                    }}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500"
                  >
                    <option value="menstrual">Pha Hành Kinh</option>
                    <option value="proliferative">Pha Tăng Sinh</option>
                    <option value="ovulatory">Pha Rụng Trứng</option>
                    <option value="secretory">Pha Phân Tiết (Hoàng Thể)</option>
                    <option value="prior_cycle">Chu Kỳ Trước</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Dạng xuất huyết / Dịch tiết:</label>
                  <select
                    value={editingLog.dischargeType}
                    onChange={(e) => {
                      const val = e.target.value as DailyCycleLog['dischargeType'];
                      const labels = {
                        'none': 'Không ra (Sạch)',
                        'orange_spotting': 'Đốm cam / Huyết trắng cam',
                        'fresh_blood': 'Máu đỏ tươi',
                        'brown_blood': 'Máu nâu sẫm',
                        'post_procedure_bleeding': 'Chảy máu sau thủ thuật',
                        'normal': 'Bình thường'
                      };
                      setEditingLog({ ...editingLog, dischargeType: val, dischargeLabel: labels[val] || 'Bình thường' });
                    }}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500"
                  >
                    <option value="none">Sạch hoàn toàn / Không ra</option>
                    <option value="orange_spotting">Đốm cam / Huyết trắng cam nhạt</option>
                    <option value="fresh_blood">Máu đỏ tươi (Hành kinh / Ra máu)</option>
                    <option value="brown_blood">Máu nâu sẫm / Cuối kỳ</option>
                    <option value="post_procedure_bleeding">Chảy máu sau sinh thiết / thủ thuật</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Mức độ đau bụng / lưng:</label>
                  <select
                    value={editingLog.painLevel}
                    onChange={(e) => setEditingLog({ ...editingLog, painLevel: e.target.value as DailyCycleLog['painLevel'] })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500"
                  >
                    <option value="none">Không đau (Êm)</option>
                    <option value="mild">Đau nhẹ (Âm ỉ)</option>
                    <option value="moderate">Đau vừa (Mỏi lưng/đau bụng)</option>
                    <option value="severe">Đau quặn nhiều</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-medium">Tóm tắt diễn biến trong ngày:</label>
                <textarea
                  rows={2}
                  required
                  value={editingLog.summary}
                  onChange={(e) => setEditingLog({ ...editingLog, summary: e.target.value })}
                  placeholder="VD: Cả ngày sạch không ra cam, tối hơi mỏi lưng nhẹ, người khỏe..."
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-medium">Các triệu chứng chi tiết (cách nhau dấu phẩy):</label>
                <input
                  type="text"
                  placeholder="VD: Đau ngực PMS, Đau lưng, Dính ít cam daily"
                  value={editingLog.symptoms.join(', ')}
                  onChange={(e) => setEditingLog({ 
                    ...editingLog, 
                    symptoms: e.target.value.split(',').map(s => s.trim()).filter(Boolean) 
                  })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-medium">Sự kiện đặc biệt / Cột mốc (nếu có):</label>
                <input
                  type="text"
                  placeholder="VD: Làm sinh thiết Pipelle BV Hùng Vương, Nhận kết quả GPB..."
                  value={editingLog.eventNote || ''}
                  onChange={(e) => setEditingLog({ 
                    ...editingLog, 
                    eventNote: e.target.value,
                    isKeyMilestone: Boolean(e.target.value.trim())
                  })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-medium">Phân tích cơ chế y khoa:</label>
                <textarea
                  rows={2}
                  value={editingLog.clinicalInterpretation}
                  onChange={(e) => setEditingLog({ ...editingLog, clinicalInterpretation: e.target.value })}
                  placeholder="Giải thích cơ chế sinh lý hoặc tác động..."
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsLogModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 cursor-pointer"
                >
                  Hủy Bỏ
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-teal-500 text-slate-950 font-bold hover:bg-teal-400 flex items-center gap-1.5 cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Lưu Nhật Ký</span>
                </button>
              </div>
            </form>
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
              className="absolute -top-12 right-0 p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors cursor-pointer"
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
