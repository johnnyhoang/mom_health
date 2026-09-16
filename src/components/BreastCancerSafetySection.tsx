import React, { useState } from 'react';
import { breastCancerSafetyMatrix } from '../data/breastCancerSafetyData';
import { 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  Activity, 
  XCircle, 
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const BreastCancerSafetySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('safety-lap-hysterectomy');

  const categories = [
    { id: 'all', label: 'Tất Cả (7 Phương Pháp)' },
    { id: 'surgical', label: 'Phẫu Thuật & Thủ Thuật' },
    { id: 'hormonal_local', label: 'Nội Tiết Tại Chỗ' },
    { id: 'hormonal_systemic', label: 'Nội Tiết Toàn Thân' },
    { id: 'non_hormonal_med', label: 'Thuốc Không Hormone' },
    { id: 'supplements_diet', label: 'Thực Phẩm & Thảo Dược' }
  ];

  const filteredItems = breastCancerSafetyMatrix.filter(item => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'surgical') return item.category === 'surgical' || item.category === 'procedural';
    return item.category === selectedCategory;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section className="w-full space-y-6 pt-4">
      
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-1.5 pb-2 border-b border-slate-800">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                isSelected
                  ? 'bg-rose-500 text-white font-bold shadow-md shadow-rose-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Safety Matrix Cards */}
      <div className="space-y-4">
        {filteredItems.map((item) => {
          const isExpanded = expandedId === item.id;
          
          let badgeBg = 'bg-emerald-950/80 text-emerald-300 border-emerald-800/80';
          let borderHighlight = 'border-slate-800 hover:border-emerald-500/50';
          let icon = <ShieldCheck className="w-4 h-4 text-emerald-400" />;

          if (item.ratingColor === 'teal') {
            badgeBg = 'bg-teal-950/80 text-teal-300 border-teal-800/80';
            borderHighlight = 'border-slate-800 hover:border-teal-500/50';
            icon = <ShieldCheck className="w-4 h-4 text-teal-400" />;
          } else if (item.ratingColor === 'amber') {
            badgeBg = 'bg-amber-950/80 text-amber-300 border-amber-800/80';
            borderHighlight = 'border-slate-800 hover:border-amber-500/50';
            icon = <AlertTriangle className="w-4 h-4 text-amber-400" />;
          } else if (item.ratingColor === 'rose') {
            badgeBg = 'bg-rose-950/80 text-rose-300 border-rose-800/80';
            borderHighlight = 'border-rose-900/60 hover:border-rose-500/60';
            icon = <XCircle className="w-4 h-4 text-rose-400" />;
          }

          return (
            <div
              key={item.id}
              className={`rounded-2xl bg-slate-900/90 border transition-all overflow-hidden shadow-sm ${borderHighlight}`}
            >
              {/* Card Header Trigger */}
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 group select-none"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${badgeBg}`}>
                      {icon}
                      <span>{item.safetyRating}</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-rose-300 transition-colors leading-snug">
                    {item.treatmentName}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    <strong className="text-slate-400">Ảnh hưởng K vú:</strong> {item.breastRecurrenceRisk}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-xl bg-slate-800 text-slate-400 group-hover:text-white flex items-center justify-center shrink-0 mt-1 transition-colors">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {/* Expanded Deep Clinical Evaluation */}
              {isExpanded && (
                <div className="px-4 sm:px-5 pb-5 pt-2 space-y-4 border-t border-slate-800/80 bg-slate-950/50 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  
                  {/* Systemic Hormone Impact */}
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                    <div className="font-bold text-teal-300 flex items-center gap-1.5 text-xs uppercase">
                      <Activity className="w-3.5 h-3.5 text-teal-400" />
                      <span>1. Tác động đến Nồng độ Hormone Toàn Thân:</span>
                    </div>
                    <p className="text-slate-200">{item.systemicHormoneImpact}</p>
                  </div>

                  {/* Breast Cancer Recurrence Risk */}
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                    <div className="font-bold text-rose-300 flex items-center gap-1.5 text-xs uppercase">
                      <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                      <span>2. Đánh giá Nguy cơ Tái phát Ung Thư Vú (ASCO/NCCN):</span>
                    </div>
                    <p className="text-slate-200">{item.breastRecurrenceRisk}</p>
                    <p className="text-xs text-slate-400 italic pt-1">{item.clinicalEvidenceSummary}</p>
                  </div>

                  {/* Official Guideline Stances (ASCO/NCCN vs ACOG/FIGO) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                      <span className="font-bold text-slate-400 text-xs uppercase block text-teal-400">
                        Quan điểm ASCO / NCCN (Ung Bướu):
                      </span>
                      <p className="text-xs text-slate-300">{item.guidelineStance.asco_nccn}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                      <span className="font-bold text-slate-400 text-xs uppercase block text-emerald-400">
                        Quan điểm ACOG / FIGO (Phụ Sản):
                      </span>
                      <p className="text-xs text-slate-300">{item.guidelineStance.acog_figo}</p>
                    </div>
                  </div>

                  {/* Key Precautions & Clinical Pearls */}
                  <div className="p-3.5 rounded-xl bg-amber-950/20 border-l-2 border-amber-400 space-y-1.5 text-xs">
                    <div className="font-bold text-amber-300 flex items-center gap-1.5 text-xs uppercase">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                      <span>Lưu ý sống còn dành riêng cho bệnh nhân sau 5 năm Tamoxifen:</span>
                    </div>
                    <ul className="space-y-1 text-slate-300 pl-1">
                      {item.keyPrecautions.map((prec, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <span className="text-amber-400 font-bold shrink-0">•</span>
                          <span>{prec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
};
