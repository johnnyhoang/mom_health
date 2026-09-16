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
  Activity,
  Info
} from 'lucide-react';

export const CervicalSpineCaseViewer: React.FC = () => {
  const [selectedRecordId, setSelectedRecordId] = useState<string>('mri-cotsongco-cih-2026');
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const activeRecord = cervicalSpineCaseRecords.find(r => r.id === selectedRecordId) || cervicalSpineCaseRecords[0];

  return (
    <div className="w-full space-y-6 pt-2">
      {/* Record Selector Tabs */}
      <div className="flex flex-wrap gap-2 pb-3 border-b border-slate-800">
        {cervicalSpineCaseRecords.map((rec) => {
          const isSelected = rec.id === selectedRecordId;
          return (
            <button
              key={rec.id}
              onClick={() => setSelectedRecordId(rec.id)}
              className={`text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
              }`}
            >
              <FileText className={`w-4 h-4 shrink-0 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
              <span className="truncate">{rec.title} ({rec.date})</span>
            </button>
          );
        })}
      </div>

      {/* Main Case Inspector Layout */}
      <div className="space-y-6">
        {/* Document Header Info */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-mono text-amber-400 font-semibold tracking-wide uppercase">
              {activeRecord.facility} • {activeRecord.date}
            </span>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
              activeRecord.summaryStatus === 'critical'
                ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                : activeRecord.summaryStatus === 'warning'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
            }`}>
              {activeRecord.summaryStatus === 'critical' ? (
                <AlertTriangle className="w-3.5 h-3.5" />
              ) : activeRecord.summaryStatus === 'warning' ? (
                <Activity className="w-3.5 h-3.5" />
              ) : (
                <ShieldCheck className="w-3.5 h-3.5" />
              )}
              {activeRecord.statusBadge}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {activeRecord.headline}
          </h3>
        </div>

        {/* Two-Column Layout: Image Preview + Detailed Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Document Preview with Zoom Trigger */}
          <div className="lg:col-span-4 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 space-y-3">
            <div 
              className="relative group rounded-xl overflow-hidden cursor-pointer bg-slate-950 border border-slate-800"
              onClick={() => setZoomedImage(activeRecord.imageSrc)}
            >
              <img 
                src={activeRecord.imageSrc} 
                alt={activeRecord.title}
                className="w-full h-auto max-h-[360px] object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-sm backdrop-blur-xs">
                <Maximize2 className="w-5 h-5 text-amber-400" />
                <span>Nhấp để phóng to ảnh gốc</span>
              </div>
            </div>
            
            <div className="text-center">
              <span className="text-xs text-slate-400 italic">
                Ảnh chụp hồ sơ bệnh án gốc lưu trữ • Nhấp để xem rõ từng chi tiết
              </span>
            </div>

            {/* Patient Reassurance Card */}
            <div className="p-3.5 bg-emerald-950/30 border border-emerald-800/40 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs uppercase tracking-wide">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Lời Khuyên Trấn An & Định Hướng</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeRecord.patientReassurance}
              </p>
            </div>
          </div>

          {/* Detailed Key Findings & Plain-Vietnamese Explanations */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-amber-400" />
                Phân Tích Chi Tiết Từng Dòng Kết Quả Y Khoa
              </h4>
              <span className="text-xs text-slate-400">
                {activeRecord.keyFindings.length} chỉ số quan trọng
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
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <h5 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {finding.term}
                    </h5>
                  </div>

                  {/* 4-Tier Breakdown */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    {/* Layman Meaning */}
                    <div className="p-3 bg-amber-950/20 border border-amber-800/30 rounded-lg space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
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
                    <div className="flex-1 bg-amber-500/10 px-2.5 py-1.5 rounded-md border border-amber-500/20">
                      <span className="font-bold text-amber-300">Hành động cần làm: </span>
                      <span className="text-amber-100">{finding.actionRequired}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Clinical Verdict */}
            <div className="p-4 bg-gradient-to-r from-amber-950/40 to-slate-900 border border-amber-500/30 rounded-xl space-y-1.5">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Kết Luận Chuyên Môn Của Bác Sĩ</span>
              </div>
              <p className="text-sm font-semibold text-white leading-relaxed">
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
