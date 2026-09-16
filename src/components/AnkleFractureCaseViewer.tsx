import React, { useState } from 'react';
import { ankleFractureCaseRecords } from '../data/ankleFractureCaseData';
import { 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Stethoscope,
  Activity,
  Info,
  Lock
} from 'lucide-react';

export const AnkleFractureCaseViewer: React.FC = () => {
  const [selectedRecordId, setSelectedRecordId] = useState<string>('xray-ankle-trauma-2026');

  const activeRecord = ankleFractureCaseRecords.find(r => r.id === selectedRecordId) || ankleFractureCaseRecords[0];

  return (
    <div className="w-full space-y-6 pt-2">
      {/* Privacy Anonymization Notice Banner */}
      <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-2xl flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5 text-emerald-400 font-semibold">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Bảo mật y tế: 100% thông tin cá nhân (Họ tên, Năm sinh, CCCD, Mã BHYT) đã được che và ẩn danh hóa an toàn.</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 font-mono text-[11px] shrink-0">
          <Lock className="w-3 h-3 text-emerald-400" />
          <span>{activeRecord.patientDeidentifiedInfo.anonymousLabel} ({activeRecord.patientDeidentifiedInfo.age} tuổi)</span>
        </div>
      </div>

      {/* Record Selector Tabs */}
      <div className="flex flex-wrap gap-2 pb-3 border-b border-slate-800">
        {ankleFractureCaseRecords.map((rec) => {
          const isSelected = rec.id === selectedRecordId;
          return (
            <button
              key={rec.id}
              onClick={() => setSelectedRecordId(rec.id)}
              className={`text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
              }`}
            >
              <FileText className={`w-4 h-4 shrink-0 ${isSelected ? 'text-rose-400' : 'text-slate-500'}`} />
              <span className="truncate">{rec.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Case Inspector Layout */}
      <div className="space-y-6">
        {/* Document Header Info */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-mono text-rose-400 font-semibold tracking-wide uppercase">
              {activeRecord.facility} • {activeRecord.date}
            </span>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
              activeRecord.summaryStatus === 'critical'
                ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
            }`}>
              <AlertTriangle className="w-3.5 h-3.5" />
              {activeRecord.statusBadge}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {activeRecord.headline}
          </h3>

          <div className="p-3 bg-slate-950/70 border border-slate-800/80 rounded-xl text-xs text-slate-300 flex items-start gap-2">
            <Activity className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-rose-300">Cơ chế chấn thương lâm sàng: </strong>
              <span>{activeRecord.patientDeidentifiedInfo.injuryContext}</span>
            </div>
          </div>
        </div>

        {/* Detailed Findings Analysis */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-rose-400" />
              Phân Tích Chi Tiết Từng Dòng Kết Quả Hình Ảnh Y Khoa
            </h4>
            <span className="text-xs text-slate-400">
              {activeRecord.keyFindings.length} thương tổn giải phẫu
            </span>
          </div>

          <div className="space-y-3.5">
            {activeRecord.keyFindings.map((finding, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 rounded-xl p-4 space-y-3 transition-all"
              >
                {/* Finding Title */}
                <div className="flex items-start gap-2.5">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <h5 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {finding.term}
                  </h5>
                </div>

                {/* 4-Tier Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  {/* Layman Meaning */}
                  <div className="p-3 bg-rose-950/20 border border-rose-800/30 rounded-lg space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400">
                      <Info className="w-3.5 h-3.5" />
                      <span>Hiểu Nôm Na Đời Thường:</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {finding.laymanMeaning}
                    </p>
                  </div>

                  {/* Medical Nature */}
                  <div className="p-3 bg-slate-950/40 border border-slate-800/60 rounded-lg space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400">
                      <Activity className="w-3.5 h-3.5" />
                      <span>Bản Chất Y Học:</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {finding.medicalMeaning}
                    </p>
                  </div>
                </div>

                {/* Clinical Significance & Action */}
                <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row gap-3 text-xs">
                  <div className="flex-1">
                    <span className="font-semibold text-slate-400">Ý nghĩa lâm sàng: </span>
                    <span className="text-slate-200">{finding.clinicalSignificance}</span>
                  </div>
                  <div className="flex-1 bg-rose-500/10 px-2.5 py-1.5 rounded-md border border-rose-500/20">
                    <span className="font-bold text-rose-300">Hành động can thiệp: </span>
                    <span className="text-rose-100">{finding.actionRequired}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Clinical Verdict & Reassurance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-gradient-to-r from-rose-950/40 to-slate-900 border border-rose-500/30 rounded-xl space-y-1.5">
              <div className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Kết Luận Chuyên Môn Chấn Thương Chỉnh Hình</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white leading-relaxed">
                {activeRecord.clinicalVerdict}
              </p>
            </div>

            <div className="p-4 bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/30 rounded-xl space-y-1.5">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Lời Khuyên Trấn An & Tiên Lượng Phục Hồi</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-200 leading-relaxed">
                {activeRecord.patientReassurance}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
