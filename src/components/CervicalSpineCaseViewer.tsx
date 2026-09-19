import React, { useState } from 'react';
import { cervicalSpineCaseRecords } from '../data/cervicalSpineCaseData';
import { 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Maximize2, 
  X, 
  ShieldCheck, 
  Stethoscope,
  Activity
} from 'lucide-react';

export const CervicalSpineCaseViewer: React.FC = () => {
  const [selectedRecordId, setSelectedRecordId] = useState<string>('mri-cotsongco-cih-2026');
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const activeRecord = cervicalSpineCaseRecords.find(r => r.id === selectedRecordId) || cervicalSpineCaseRecords[0];

  return (
    <div className="w-full space-y-4">
      {/* Record Selector Tabs */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-800/80">
        {cervicalSpineCaseRecords.map((rec) => {
          const isSelected = rec.id === selectedRecordId;
          return (
            <button
              key={rec.id}
              onClick={() => setSelectedRecordId(rec.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                isSelected
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <FileText className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
              <span className="truncate">{rec.title} ({rec.date})</span>
            </button>
          );
        })}
      </div>

      {/* Main Case Inspector Layout */}
      <div className="space-y-4">
        {/* Document Header Info */}
        <div className="space-y-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] font-mono text-amber-400 font-semibold uppercase tracking-wider">
              {activeRecord.facility} • {activeRecord.date}
            </span>
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${
              activeRecord.summaryStatus === 'critical'
                ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                : activeRecord.summaryStatus === 'warning'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
            }`}>
              {activeRecord.summaryStatus === 'critical' ? (
                <AlertTriangle className="w-3 h-3" />
              ) : activeRecord.summaryStatus === 'warning' ? (
                <Activity className="w-3 h-3" />
              ) : (
                <ShieldCheck className="w-3 h-3" />
              )}
              <span>{activeRecord.statusBadge}</span>
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
            {activeRecord.headline}
          </h3>
        </div>

        {/* Two-Column Layout: Image Preview + Detailed Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          {/* Document Preview */}
          <div className="lg:col-span-4 bg-slate-900/40 border border-slate-800/80 rounded-xl p-3 space-y-2.5">
            <div 
              className="relative group rounded-lg overflow-hidden cursor-pointer bg-slate-950 border border-slate-800"
              onClick={() => setZoomedImage(activeRecord.imageSrc)}
            >
              <img 
                src={activeRecord.imageSrc} 
                alt={activeRecord.title}
                className="w-full h-auto max-h-[300px] object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs backdrop-blur-xs">
                <Maximize2 className="w-4 h-4 text-amber-400" />
                <span>Xem ảnh gốc phóng to</span>
              </div>
            </div>

            {/* Patient Reassurance Card */}
            <div className="p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-lg text-xs space-y-1">
              <div className="font-bold text-emerald-300 flex items-center gap-1.5 uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Lời Khuyên Bác Sĩ</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {activeRecord.patientReassurance}
              </p>
            </div>
          </div>

          {/* Detailed Key Findings - Flat List */}
          <div className="lg:col-span-8 space-y-2.5">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5 text-amber-400" />
                <span>Phân Tích Chi Tiết Từng Dòng Kết Quả Y Khoa</span>
              </h4>
              <span className="text-[11px] text-slate-400">
                {activeRecord.keyFindings.length} chỉ số
              </span>
            </div>

            <div className="divide-y divide-slate-800/80 rounded-xl bg-slate-900/40 border border-slate-800/80">
              {activeRecord.keyFindings.map((finding, idx) => (
                <div key={idx} className="p-3.5 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h5 className="text-sm font-bold text-white">
                      {finding.term}
                    </h5>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs pl-7">
                    <p className="text-slate-300">
                      <strong className="text-amber-400">Hiểu nôm na: </strong>
                      {finding.laymanMeaning}
                    </p>
                    <p className="text-slate-300">
                      <strong className="text-cyan-400">Bản chất: </strong>
                      {finding.medicalMeaning}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs pt-1 pl-7 text-slate-400">
                    <span><strong>Ý nghĩa: </strong>{finding.clinicalSignificance}</span>
                    <span className="text-amber-300 font-semibold bg-amber-950/40 px-2 py-0.5 rounded border border-amber-900/40">
                      {finding.actionRequired}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Clinical Verdict */}
            <div className="p-3 bg-amber-950/30 border border-amber-800/40 rounded-xl text-xs space-y-1">
              <div className="font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Kết Luận Chuyên Môn</span>
              </div>
              <p className="font-medium text-slate-200 leading-relaxed">
                {activeRecord.clinicalVerdict}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal for Fullscreen Zoom */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="overflow-auto max-h-[85vh] p-2">
              <img 
                src={zoomedImage} 
                alt="Bệnh án gốc phóng to" 
                className="max-w-full h-auto object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
