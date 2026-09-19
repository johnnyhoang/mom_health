import React, { useState } from 'react';
import { ankleSafetyMatrix } from '../data/ankleFractureSafetyData';
import { 
  ShieldCheck, 
  HeartPulse, 
  Bone, 
  Flame, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Info,
  Award
} from 'lucide-react';

export const AnkleFractureSafetySection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(ankleSafetyMatrix[0].id);

  const getSafetyIcon = (id: string) => {
    switch (id) {
      case 'dvt-pulmonary-embolism':
        return <HeartPulse className="w-5 h-5 text-rose-400" />;
      case 'osteoporosis-hardware-safety':
        return <Bone className="w-5 h-5 text-amber-400" />;
      case 'heel-pressure-ulcer':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'sudeck-crps-prevention':
        return <Flame className="w-5 h-5 text-purple-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className="w-full space-y-6 pt-2">
      {/* Header Banner */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-rose-950/40 via-slate-900 to-amber-950/30 border border-rose-500/30 rounded-2xl space-y-2">
        <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Ma Trận Kiểm Soát Rủi Ro & Bảo Vệ Chu Phẫu Tuổi 74</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-white">
          Kiểm Soát 4 Nguy Cơ Sống Còn: Từ Cục Máu Đông DVT Đến Loãng Xương Nặng
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Phẫu thuật gãy mắt cá ở người cao tuổi có kèm <strong className="text-amber-300">loãng xương T-score -2.7</strong> và <strong className="text-rose-300">cường giáp</strong> cần tuân thủ nghiêm ngặt phác đồ phòng chống huyết khối tĩnh mạch sâu, chống lún ốc vít và chống loét tỳ đè gót chân.
        </p>
      </div>

      {/* Safety Items Accordion */}
      <div className="space-y-4">
        {ankleSafetyMatrix.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <div 
              key={item.id}
              className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                isExpanded 
                  ? 'bg-slate-900/90 border-rose-500/50 shadow-lg shadow-rose-950/20' 
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Header Toggle Button */}
              <button
                onClick={() => setExpandedId(isExpanded ? '' : item.id)}
                className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 shrink-0 mt-0.5">
                    {getSafetyIcon(item.id)}
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded border ${
                        item.threatLevel === 'Rất Quan Trọng' 
                          ? 'bg-rose-500/20 text-rose-300 border-rose-500/40' 
                          : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      }`}>
                        {item.threatLevel}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {item.name}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400">
                      {item.riskCategory}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 p-1.5 rounded-lg bg-slate-800/80 text-slate-400">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>

              {/* Collapsible Content */}
              {isExpanded && (
                <div className="p-4 sm:p-5 pt-0 border-t border-slate-800/80 space-y-4">
                  {/* Layman Analogy */}
                  <div className="p-3.5 bg-rose-950/20 border border-rose-800/30 rounded-xl space-y-1.5">
                    <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wide">
                      <Info className="w-4 h-4" />
                      <span>Minh Họa Trực Quan</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                      "{item.laymanExplanation}"
                    </p>
                  </div>

                  {/* Clinical Mechanism */}
                  <div className="p-3.5 bg-slate-950/60 border border-slate-800 rounded-xl space-y-1">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wide flex items-center gap-1.5">
                      <HeartPulse className="w-3.5 h-3.5" />
                      Bản Chất Cơ Chế Y Học:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.clinicalMechanism}
                    </p>
                  </div>

                  {/* Prevention Protocol & Warning Signs */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Prevention Protocol */}
                    <div className="md:col-span-7 p-3.5 bg-slate-950/40 border border-slate-800/80 rounded-xl space-y-2">
                      <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        Phác Đồ Phòng Ngừa Bắt Buộc:
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {item.preventionProtocol.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                            <span className="text-emerald-400 font-bold shrink-0">•</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Warning Signs */}
                    <div className="md:col-span-5 p-3.5 bg-slate-950/40 border border-slate-800/80 rounded-xl space-y-2">
                      <div className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4" />
                        Dấu Hiệu Cảnh Báo Nguy Hiểm:
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {item.warningSigns.map((sign, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                            <span className="text-rose-400 font-bold shrink-0">•</span>
                            <span>{sign}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Specialist Guideline Footer */}
                  <div className="p-3 bg-slate-950 border border-slate-800/80 rounded-xl flex items-center gap-2 text-xs text-slate-400">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item.specialistGuideline}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
