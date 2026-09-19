import React, { useState } from 'react';
import { cervicalSpineComorbidities } from '../data/cervicalSpineComorbiditiesData';
import { 
  ShieldCheck, 
  HeartPulse, 
  Bone, 
  Hand, 
  Layers, 
  Stethoscope, 
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const CervicalSpineComorbiditiesSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(cervicalSpineComorbidities[0].id);

  const getComorbidityIcon = (id: string) => {
    switch (id) {
      case 'osteoporosis':
        return <Bone className="w-5 h-5 text-amber-400" />;
      case 'hyperthyroidism':
        return <HeartPulse className="w-5 h-5 text-rose-400" />;
      case 'carpal-tunnel':
        return <Hand className="w-5 h-5 text-cyan-400" />;
      case 'lumbar-herniation':
        return <Layers className="w-5 h-5 text-emerald-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className="w-full space-y-6 pt-2">
      {/* Header Banner */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-amber-950/40 via-slate-900 to-cyan-950/30 border border-amber-500/30 rounded-2xl space-y-2">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Chiến Lược Đa Chuyên Khoa An Toàn Chu Phẫu Tuổi 74</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-white">
          Ma Trận Kiểm Soát 4 Bệnh Lý Đi Kèm & Bảo Vệ Cột Sống Toàn Diện
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Bệnh nhân 74 tuổi phẫu thuật cột sống cổ cần sự phối hợp nhịp nhàng giữa <strong className="text-amber-300">Ngoại Thần Kinh (Lầu 8A)</strong>, <strong className="text-rose-300">Gây Mê Hồi Sức</strong>, <strong className="text-amber-300">Cơ Xương Khớp (PGS.TS Cao Thanh Ngọc)</strong> và <strong className="text-cyan-300">Phục Hồi Chức Năng</strong> để loại trừ 100% rủi ro.
        </p>
      </div>

      {/* Comorbidities Accordion / Cards */}
      <div className="space-y-4">
        {cervicalSpineComorbidities.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <div 
              key={item.id}
              className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                isExpanded 
                  ? 'bg-slate-900/90 border-amber-500/50 shadow-lg shadow-amber-950/20' 
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Header Toggle */}
              <button
                onClick={() => setExpandedId(isExpanded ? '' : item.id)}
                className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 shrink-0 mt-0.5">
                    {getComorbidityIcon(item.id)}
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {item.icd10}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {item.name}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400">
                      <strong className="text-slate-300">Hiện trạng: </strong> {item.currentStatus}
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
                  {/* Plain Language Analogy */}
                  <div className="p-3.5 bg-amber-950/20 border border-amber-800/30 rounded-xl space-y-1.5">
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wide">
                      <Info className="w-4 h-4" />
                      <span>Minh Họa Trực Quan</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                      "{item.laymanExplanation}"
                    </p>
                  </div>

                  {/* Impact on cervical surgery */}
                  <div className="p-3.5 bg-slate-950/60 border border-slate-800 rounded-xl space-y-1">
                    <span className="text-xs font-bold text-rose-400 uppercase tracking-wide flex items-center gap-1.5">
                      <HeartPulse className="w-3.5 h-3.5" />
                      Tác Động Đến Phẫu Thuật Cột Sống Cổ:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.impactOnCervicalSurgery}
                    </p>
                  </div>

                  {/* 3-Stage Safety Protocol */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                    {/* Pre-Op */}
                    <div className="p-3.5 bg-slate-950/40 border border-slate-800/80 rounded-xl space-y-2">
                      <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                        1. Chuẩn Bị Trước Mổ
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {item.preOperativeAction.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                            <span className="text-cyan-400 font-bold shrink-0">•</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Intra-Op */}
                    <div className="p-3.5 bg-slate-950/40 border border-slate-800/80 rounded-xl space-y-2">
                      <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                        2. Bảo Vệ Trong Phòng Mổ
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {item.intraOperativeProtection.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                            <span className="text-amber-400 font-bold shrink-0">•</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Post-Op */}
                    <div className="p-3.5 bg-slate-950/40 border border-slate-800/80 rounded-xl space-y-2">
                      <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        3. Phục Hồi Hậu Phẫu
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {item.postOperativeRehab.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                            <span className="text-emerald-400 font-bold shrink-0">•</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Multi-specialty collaboration footer */}
                  <div className="p-3 bg-slate-950 border border-slate-800/80 rounded-xl flex items-center gap-2 text-xs text-slate-300 font-medium">
                    <Stethoscope className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item.multidisciplinaryDoctors}</span>
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
