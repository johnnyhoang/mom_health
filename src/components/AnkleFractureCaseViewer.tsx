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
    <div className="w-full space-y-4">
      {/* Record Selector Tabs */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-800/80">
        {ankleFractureCaseRecords.map((rec) => {
          const isSelected = rec.id === selectedRecordId;
          return (
            <button
              key={rec.id}
              onClick={() => setSelectedRecordId(rec.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                isSelected
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <FileText className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-rose-400' : 'text-slate-500'}`} />
              <span className="truncate">{rec.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Case Inspector Layout */}
      <div className="space-y-4">
        {/* Document Header Info */}
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] font-mono text-rose-400 font-semibold uppercase tracking-wider">
              {activeRecord.facility} • {activeRecord.date}
            </span>
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${
              activeRecord.summaryStatus === 'critical'
                ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
            }`}>
              <AlertTriangle className="w-3 h-3" />
              <span>{activeRecord.statusBadge}</span>
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
            {activeRecord.headline}
          </h3>

          <p className="text-xs text-slate-300">
            <strong className="text-rose-400">Cơ chế chấn thương: </strong>
            <span>{activeRecord.patientDeidentifiedInfo.injuryContext}</span>
          </p>
        </div>

        {/* Detailed Findings Analysis - Flat List */}
        <div className="space-y-2">
          <div className="flex items-center justify-between pt-1">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Stethoscope className="w-3.5 h-3.5 text-rose-400" />
              <span>Phân Tích Chi Tiết Từng Dòng Kết Quả GPB & Hình Ảnh</span>
            </h4>
            <span className="text-[11px] text-slate-400">
              {activeRecord.keyFindings.length} thương tổn
            </span>
          </div>

          <div className="divide-y divide-slate-800/80 rounded-xl bg-slate-900/40 border border-slate-800/80">
            {activeRecord.keyFindings.map((finding, idx) => (
              <div key={idx} className="p-3.5 sm:p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h5 className="text-sm font-bold text-white">
                    {finding.term}
                  </h5>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs pl-7">
                  <p className="text-slate-300">
                    <strong className="text-rose-400">Hiểu nôm na: </strong>
                    {finding.laymanMeaning}
                  </p>
                  <p className="text-slate-300">
                    <strong className="text-cyan-400">Bản chất: </strong>
                    {finding.medicalMeaning}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 text-xs pt-1 pl-7 text-slate-400">
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
