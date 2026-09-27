import React, { useState } from 'react';
import { ankleFractureCaseRecords } from '../data/ankleFractureCaseData';
import { 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Stethoscope
} from 'lucide-react';

export const AnkleFractureCaseViewer: React.FC = () => {
  const [selectedRecordId, setSelectedRecordId] = useState<string>('xray-ankle-trauma-2026');

  const activeRecord = ankleFractureCaseRecords.find(r => r.id === selectedRecordId) || ankleFractureCaseRecords[0];

  return (
    <div className="w-full rounded-2xl border border-slate-800 bg-slate-900/60 ring-1 ring-slate-800/80 overflow-hidden">
      
      {/* HTMLWind Preview Header Bar */}
      <div className="h-12 border-b border-slate-800 px-4 flex items-center justify-between bg-slate-950/80 backdrop-blur-sm">
        {/* Left: Window Dots & Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono text-slate-400 font-medium hidden sm:inline">
            Hồ Sơ X-Quang & MRI • BV Chấn Thương Chỉnh Hình TP.HCM
          </span>
        </div>

        {/* Right: Record Selector Pills */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
          {ankleFractureCaseRecords.map((rec) => {
            const isSelected = rec.id === selectedRecordId;
            return (
              <button
                key={rec.id}
                onClick={() => setSelectedRecordId(rec.id)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-rose-500 text-white font-bold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <FileText className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                <span className="truncate">{rec.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Case Inspector Layout */}
      <div className="p-4 sm:p-5 space-y-4">
        {/* Document Header Info */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
          <div>
            <div className="text-[11px] font-mono text-rose-400 font-semibold uppercase tracking-wider">
              {activeRecord.facility} • {activeRecord.date}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
              {activeRecord.headline}
            </h3>
          </div>
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
            activeRecord.summaryStatus === 'critical'
              ? 'bg-red-500/20 text-red-300 border border-red-500/30'
              : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
          }`}>
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>{activeRecord.statusBadge}</span>
          </span>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
          <strong className="text-rose-400 font-medium">Cơ chế chấn thương: </strong>
          <span>{activeRecord.patientDeidentifiedInfo.injuryContext}</span>
        </div>

        {/* Detailed Findings Analysis - Flat List */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Stethoscope className="w-3.5 h-3.5 text-rose-400" />
              <span>Phân Tích Chi Tiết Từng Dòng Kết Quả GPB & Hình Ảnh</span>
            </h4>
            <span className="text-[11px] text-slate-400 font-mono">
              {activeRecord.keyFindings.length} thương tổn
            </span>
          </div>

          <div className="divide-y divide-slate-800/80 rounded-xl bg-slate-950/60 border border-slate-800">
            {activeRecord.keyFindings.map((finding, idx) => (
              <div key={idx} className="p-3 sm:p-3.5 space-y-1.5 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h5 className="text-xs sm:text-sm font-bold text-white">
                    {finding.term}
                  </h5>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs pl-6">
                  <p className="text-slate-300">
                    <strong className="text-rose-400">Hiểu nôm na: </strong>
                    {finding.laymanMeaning}
                  </p>
                  <p className="text-slate-300">
                    <strong className="text-cyan-400">Bản chất: </strong>
                    {finding.medicalMeaning}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 text-xs pt-1 pl-6 text-slate-400">
                  <span><strong>Ý nghĩa: </strong>{finding.clinicalSignificance}</span>
                  <span className="text-rose-300 font-semibold bg-rose-950/40 px-2 py-0.5 rounded border border-rose-900/40">
                    {finding.actionRequired}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Clinical Verdict & Reassurance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 bg-rose-950/30 border border-rose-800/40 rounded-xl text-xs space-y-1">
              <div className="font-bold text-rose-300 flex items-center gap-1.5 uppercase">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
                <span>Kết Luận Chuyên Môn</span>
              </div>
              <p className="text-slate-200 leading-relaxed font-medium">
                {activeRecord.clinicalVerdict}
              </p>
            </div>

            <div className="p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl text-xs space-y-1">
              <div className="font-bold text-emerald-300 flex items-center gap-1.5 uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Lời Khuyên & Tiên Lượng</span>
              </div>
              <p className="text-slate-200 leading-relaxed font-medium">
                {activeRecord.patientReassurance}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
