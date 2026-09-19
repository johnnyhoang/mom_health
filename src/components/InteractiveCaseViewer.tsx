import React, { useState } from 'react';
import { patientCaseRecords } from '../data/tamoxifenCaseData';
import { 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Maximize2, 
  X, 
  ShieldCheck, 
  Stethoscope
} from 'lucide-react';

export const InteractiveCaseViewer: React.FC = () => {
  const [selectedRecordId, setSelectedRecordId] = useState<string>('gpb-hungvuong-2026');
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const activeRecord = patientCaseRecords.find(r => r.id === selectedRecordId) || patientCaseRecords[0];

  return (
    <div className="w-full space-y-4">
      
      {/* Record Selector Tabs */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-800/80">
        {patientCaseRecords.map((rec) => {
          const isSelected = rec.id === selectedRecordId;
          return (
            <button
              key={rec.id}
              onClick={() => setSelectedRecordId(rec.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                isSelected
                  ? 'bg-teal-500/20 text-teal-300 border border-teal-500/50'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <FileText className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-teal-400' : 'text-slate-500'}`} />
              <span className="truncate">{rec.title} ({rec.date.split(' ')[0]})</span>
            </button>
          );
        })}
      </div>

      {/* Main Case Inspector Layout */}
      <div className="space-y-4">
        
        {/* Document Header Info */}
        <div className="space-y-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] font-mono text-teal-400 font-semibold uppercase tracking-wider">
              {activeRecord.hospital} • {activeRecord.date}
            </span>
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${
              activeRecord.summaryStatus === 'benign' 
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
            }`}>
              {activeRecord.summaryStatus === 'benign' ? <ShieldCheck className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
              <span>{activeRecord.statusBadge}</span>
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
            {activeRecord.headline}
          </h3>
        </div>

        {/* Two-Column View: Document Image + Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          
          {/* Document Preview */}
          <div className="lg:col-span-5 space-y-2">
            <div 
              onClick={() => setZoomedImage(activeRecord.imageSrc)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-slate-950 border border-slate-800 hover:border-teal-500/50 transition-all shadow-sm"
            >
              <img 
                src={activeRecord.imageSrc} 
                alt={activeRecord.title} 
                className="w-full max-h-[320px] object-contain bg-slate-950 p-2 group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-teal-300 font-medium text-xs backdrop-blur-[2px]">
                <Maximize2 className="w-4 h-4" />
                <span>Xem ảnh gốc phóng to</span>
              </div>
            </div>

            {/* Reassurance Banner */}
            {activeRecord.summaryStatus === 'benign' && (
              <div className="p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                  <span>Giải mã an tâm:</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{activeRecord.patientReassurance}</p>
              </div>
            )}
          </div>

          {/* Deep Medical Translation & Explanation - Flat List */}
          <div className="lg:col-span-7 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Stethoscope className="w-3.5 h-3.5 text-teal-400" />
              <span>Chi tiết giải mã từng thuật ngữ chuyên môn:</span>
            </h4>

            <div className="divide-y divide-slate-800/80 rounded-xl bg-slate-900/40 border border-slate-800/80">
              {activeRecord.keyFindings.map((item, idx) => (
                <div key={idx} className="p-3.5 space-y-1.5">
                  <div className="font-bold text-teal-300 text-sm">
                    {idx + 1}. {item.term}
                  </div>

                  <div className="space-y-1 text-xs text-slate-300 leading-relaxed">
                    <p><strong className="text-slate-400">• Bản chất y khoa: </strong>{item.medicalMeaning}</p>
                    <p><strong className="text-amber-300">• Hiểu nôm na: </strong>{item.laymanMeaning}</p>
                    <p><strong className="text-purple-300">• Liên hệ Tamoxifen: </strong>{item.tamoxifenLink}</p>
                    <p><strong className="text-emerald-300">• Hướng xử lý: </strong>{item.actionRequired}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Clinical Verdict */}
            <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl text-xs text-slate-300">
              <strong className="text-slate-200">Đánh giá tổng thể từ chuyên gia: </strong>
              <span>{activeRecord.clinicalVerdict}</span>
            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen Modal Image Zoom */}
      {zoomedImage && (
        <div 
          onClick={() => setZoomedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 cursor-zoom-out"
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center">
            <button 
              onClick={() => setZoomedImage(null)}
              className="absolute -top-10 right-0 text-slate-300 hover:text-white bg-slate-800/80 p-1.5 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={zoomedImage} 
              alt="Zoomed Medical Record" 
              className="max-h-[85vh] w-auto object-contain rounded-xl shadow-2xl border border-slate-700 bg-white"
            />
          </div>
        </div>
      )}

    </div>
  );
};
