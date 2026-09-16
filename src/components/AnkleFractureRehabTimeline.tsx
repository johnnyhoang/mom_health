import React, { useState } from 'react';
import { ankleRehabPhases, ankleNutritionGuidelines, hardwareRemovalGuide } from '../data/ankleFractureRehabData';
import { 
  Activity, 
  CheckCircle2, 
  ShieldCheck, 
  Utensils, 
  Wrench, 
  Clock, 
  Flame, 
  ChevronDown
} from 'lucide-react';

export const AnkleFractureRehabTimeline: React.FC = () => {
  const [selectedPhaseId, setSelectedPhaseId] = useState<string>('phase-0-to-2-weeks');
  const [showNutrition, setShowNutrition] = useState<boolean>(false);
  const [showHardwareGuide, setShowHardwareGuide] = useState<boolean>(false);

  const activePhase = ankleRehabPhases.find(p => p.phaseId === selectedPhaseId) || ankleRehabPhases[0];

  return (
    <div className="w-full space-y-6 pt-2">
      {/* Header Banner */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-cyan-950/30 border border-emerald-500/30 rounded-2xl space-y-2">
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
          <Activity className="w-4 h-4" />
          <span>Cẩm Nang Phục Hồi Chức Năng Cổ Chân Toàn Diện Từ A - Z</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-white">
          Lộ Trình 4 Giai Đoạn Chuẩn Y Khoa: Từ Giường Bệnh Đến Đi Lại Vững Vàng
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Phục hồi chức năng sau mổ gãy mắt cá và đứt dây chằng đòi hỏi sự kiên nhẫn và tuân thủ đúng bậc thang tỳ đè: <strong className="text-rose-300">NWB (0%)</strong> $\rightarrow$ <strong className="text-amber-300">PWB (20-50%)</strong> $\rightarrow$ <strong className="text-emerald-300">FWB (100%)</strong> $\rightarrow$ <strong className="text-cyan-300">Sinh Hoạt Độc Lập</strong>.
        </p>
      </div>

      {/* 4 Phase Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {ankleRehabPhases.map((phase, idx) => {
          const isSelected = phase.phaseId === selectedPhaseId;
          return (
            <button
              key={phase.phaseId}
              onClick={() => setSelectedPhaseId(phase.phaseId)}
              className={`p-3 rounded-xl text-left transition-all border cursor-pointer ${
                isSelected
                  ? 'bg-emerald-500/20 border-emerald-500/60 text-white shadow-md shadow-emerald-950/30'
                  : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400 font-bold">
                <span>Giai Đoạn {idx + 1}</span>
                <Clock className="w-3 h-3" />
              </div>
              <div className="text-xs font-bold text-white mt-1 truncate">
                {phase.timeframe}
              </div>
              <div className="text-[10px] text-slate-400 truncate mt-0.5">
                {phase.weightBearingStatus.split(' ')[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Detailed View */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-5">
        {/* Phase Header */}
        <div className="space-y-2 border-b border-slate-800 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {activePhase.weightBearingStatus}
            </span>
            <span className="text-xs font-mono text-slate-400">
              Dụng cụ cố định: <strong className="text-slate-200">{activePhase.immobilizationDevice}</strong>
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white">
            {activePhase.phaseName}
          </h3>

          <div className="p-3 bg-emerald-950/20 border border-emerald-800/30 rounded-xl text-xs sm:text-sm text-emerald-200 italic">
            "{activePhase.laymanSummary}"
          </div>
        </div>

        {/* Key Goals */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            Mục Tiêu Trọng Tâm Của Giai Đoạn:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {activePhase.keyGoals.map((goal, i) => (
              <div key={i} className="p-2.5 bg-slate-950/60 border border-slate-800 rounded-lg text-xs text-slate-300 flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{goal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Exercises */}
        <div className="space-y-3 pt-2">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
            <Activity className="w-4 h-4" />
            Danh Sách Bài Tập Vật Lý Trị Liệu Hàng Ngày:
          </div>

          <div className="space-y-3">
            {activePhase.dailyExercises.map((ex, i) => (
              <div key={i} className="p-4 bg-slate-950/80 border border-slate-800 hover:border-slate-700 rounded-xl space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <h4 className="text-sm font-bold text-white">
                    {ex.name}
                  </h4>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-semibold">
                    {ex.setsAndReps}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-slate-200">Cách thực hiện: </strong>{ex.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1 text-xs">
                  <div className="p-2 bg-emerald-950/20 border border-emerald-900/40 rounded text-emerald-200">
                    <strong className="text-emerald-400">Mục đích: </strong>{ex.clinicalPurpose}
                  </div>
                  <div className="p-2 bg-rose-950/20 border border-rose-900/40 rounded text-rose-200">
                    <strong className="text-rose-400">Lưu ý an toàn: </strong>{ex.caution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pain & Swelling Control + Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Pain & Swelling */}
          <div className="p-3.5 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2 text-xs">
            <div className="font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5" />
              Kiểm Soát Đau & Sưng Nề:
            </div>
            <ul className="space-y-1.5 text-slate-300">
              {activePhase.painAndSwellingControl.map((p, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Milestones to advance */}
          <div className="p-3.5 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2 text-xs">
            <div className="font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Tiêu Chuẩn Để Chuyển Giai Đoạn:
            </div>
            <ul className="space-y-1.5 text-slate-300">
              {activePhase.milestonesToAdvance.map((m, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Collapsible Sections: Nutrition & Hardware Removal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        {/* Nutrition Accordion */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden">
          <button
            onClick={() => setShowNutrition(!showNutrition)}
            className="w-full p-4 text-left flex items-center justify-between gap-2 cursor-pointer hover:bg-slate-850 transition-colors"
          >
            <div className="flex items-center gap-2.5 text-sm font-bold text-white">
              <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-300">
                <Utensils className="w-4 h-4" />
              </div>
              <span>Dinh Dưỡng Liền Xương & Tái Tạo Dây Chằng</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${showNutrition ? 'rotate-180' : ''}`} />
          </button>

          {showNutrition && (
            <div className="p-4 pt-0 border-t border-slate-800 space-y-3 text-xs text-slate-300">
              {ankleNutritionGuidelines.keyPillars.map((p, i) => (
                <div key={i} className="p-3 bg-slate-950/70 border border-slate-800/80 rounded-xl space-y-1">
                  <div className="font-bold text-emerald-400 text-xs">{p.category}</div>
                  <p><strong className="text-slate-200">Nguồn thực phẩm: </strong>{p.foodSources}</p>
                  <p><strong className="text-slate-200">Liều lượng khuyến nghị: </strong>{p.dosage}</p>
                  <p className="text-slate-400 italic">{p.mechanism}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Hardware Removal Accordion */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden">
          <button
            onClick={() => setShowHardwareGuide(!showHardwareGuide)}
            className="w-full p-4 text-left flex items-center justify-between gap-2 cursor-pointer hover:bg-slate-850 transition-colors"
          >
            <div className="flex items-center gap-2.5 text-sm font-bold text-white">
              <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300">
                <Wrench className="w-4 h-4" />
              </div>
              <span>Cẩm Nang Tháo Nẹp Vít Titanium (Hardware Removal)</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${showHardwareGuide ? 'rotate-180' : ''}`} />
          </button>

          {showHardwareGuide && (
            <div className="p-4 pt-0 border-t border-slate-800 space-y-3 text-xs text-slate-300">
              <div className="p-3 bg-amber-950/20 border border-amber-800/30 rounded-xl text-amber-200">
                <strong>Kết luận cốt lõi: </strong>{hardwareRemovalGuide.shortVerdict}
              </div>

              <div className="space-y-1.5">
                <strong className="text-emerald-400">Trường hợp nên GIỮ LẠI nẹp vít:</strong>
                <ul className="space-y-1 pl-3">
                  {hardwareRemovalGuide.indicationsToKeep.map((item, i) => (
                    <li key={i} className="list-disc leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1.5">
                <strong className="text-rose-400">Trường hợp nên XEM XÉT THÁO nẹp:</strong>
                <ul className="space-y-1 pl-3">
                  {hardwareRemovalGuide.indicationsToRemove.map((item, i) => (
                    <li key={i} className="list-disc leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-2 bg-slate-950 rounded border border-slate-800 text-[11px] text-slate-400">
                <strong className="text-slate-300">Thời điểm tháo nẹp: </strong>{hardwareRemovalGuide.timing}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
