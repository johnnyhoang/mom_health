import React, { useState } from 'react';
import { BookOpen, ExternalLink, ChevronDown, ChevronUp, FlaskConical, FileText, GraduationCap } from 'lucide-react';

export interface Reference {
  id: string;
  category: 'guideline' | 'clinical-trial' | 'journal' | 'hospital';
  title: string;
  authors?: string;
  source: string;
  year: string;
  url?: string;
  note?: string;
}

interface ReferencesSectionProps {
  references: Reference[];
  diseaseTitle: string;
}

const categoryConfig = {
  'guideline': {
    label: 'Hướng dẫn Lâm sàng',
    icon: FileText,
    color: 'text-teal-400',
    bg: 'bg-teal-950/20 border-teal-500/30',
    badge: 'bg-teal-950 text-teal-300 border border-teal-800/60'
  },
  'clinical-trial': {
    label: 'Thử nghiệm Lâm sàng',
    icon: FlaskConical,
    color: 'text-violet-400',
    bg: 'bg-violet-950/20 border-violet-500/30',
    badge: 'bg-violet-950 text-violet-300 border border-violet-800/60'
  },
  'journal': {
    label: 'Tạp chí Y khoa Bình duyệt',
    icon: GraduationCap,
    color: 'text-sky-400',
    bg: 'bg-sky-950/20 border-sky-500/30',
    badge: 'bg-sky-950 text-sky-300 border border-sky-800/60'
  },
  'hospital': {
    label: 'Hướng dẫn Bệnh viện Việt Nam',
    icon: BookOpen,
    color: 'text-rose-400',
    bg: 'bg-rose-950/20 border-rose-500/30',
    badge: 'bg-rose-950 text-rose-300 border border-rose-800/60'
  }
};

export const ReferencesSection: React.FC<ReferencesSectionProps> = ({ references, diseaseTitle }) => {
  const [expanded, setExpanded] = useState(false);

  const grouped = (Object.keys(categoryConfig) as Reference['category'][]).map(cat => ({
    cat,
    items: references.filter(r => r.category === cat)
  })).filter(g => g.items.length > 0);

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pb-12 pt-6 font-sans">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 ring-1 ring-slate-800/80 overflow-hidden">

        {/* HTMLWind Header with 3 dots & Trigger Button */}
        <div className="h-12 border-b border-slate-800 px-4 flex items-center justify-between bg-slate-950/80 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-xs font-mono text-slate-400 font-medium">
              Nguồn Tham Khảo Y Khoa Thực Chứng ({references.length} Tài Liệu)
            </span>
          </div>

          <button
            onClick={() => setExpanded(v => !v)}
            className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-teal-400 hover:text-teal-300 hover:bg-slate-800 flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <span>{expanded ? 'Thu gọn' : 'Xem chi tiết'}</span>
            {expanded
              ? <ChevronUp className="w-3.5 h-3.5 shrink-0" />
              : <ChevronDown className="w-3.5 h-3.5 shrink-0" />
            }
          </button>
        </div>

        {/* Sub Header / Overview */}
        <div 
          onClick={() => setExpanded(v => !v)}
          className="p-4 sm:p-5 flex items-center gap-3 cursor-pointer hover:bg-slate-850/40 transition-colors select-none"
        >
          <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm sm:text-base font-bold text-white truncate">
              Danh Mục Y Văn & Hướng Dẫn Điều Trị — {diseaseTitle}
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Tổng hợp từ NCCN, ASCO, ESMO, AAOS, JAMA, NEJM và phác đồ các bệnh viện tuyến đầu Việt Nam
            </p>
          </div>
        </div>

        {/* Expanded Content */}
        {expanded && (
          <div className="border-t border-slate-800 divide-y divide-slate-800">
            {grouped.map(({ cat, items }) => {
              const cfg = categoryConfig[cat];
              const Icon = cfg.icon;
              return (
                <div key={cat} className="p-4 sm:p-5 space-y-3 bg-slate-950/40">
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${cfg.color}`} />
                    <span className={`text-xs font-bold uppercase tracking-wider ${cfg.color}`}>
                      {cfg.label}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${cfg.badge}`}>
                      {items.length} tài liệu
                    </span>
                  </div>
                  <div className="space-y-2">
                    {items.map((ref) => (
                      <div key={ref.id} className={`p-3 rounded-xl border ${cfg.bg} space-y-1`}>
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-xs font-semibold text-slate-200 leading-snug flex-1">
                            {ref.title}
                          </p>
                          <span className="text-[10px] text-slate-500 font-mono shrink-0">{ref.year}</span>
                        </div>
                        {ref.authors && (
                          <p className="text-[10px] text-slate-500 italic">{ref.authors}</p>
                        )}
                        <div className="flex items-center justify-between gap-2 pt-0.5">
                          <span className="text-[10px] text-slate-400 font-mono">{ref.source}</span>
                          {ref.url && (
                            <a
                              href={ref.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center gap-1 text-[10px] ${cfg.color} hover:underline shrink-0`}
                            >
                              <ExternalLink className="w-3 h-3" />
                              Xem nguồn
                            </a>
                          )}
                        </div>
                        {ref.note && (
                          <p className="text-[10px] text-slate-500 border-t border-slate-800 pt-1 mt-1">{ref.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Disclaimer Footer */}
            <div className="p-4 bg-slate-950/80 text-[11px] text-slate-400 leading-relaxed border-t border-slate-800">
              <strong className="text-slate-300">Lưu ý về tính cập nhật: </strong>
              Hướng dẫn y khoa liên tục được cập nhật theo thử nghiệm lâm sàng mới nhất. Nội dung chuyên khảo tổng hợp theo các guidelines chuẩn mực hiện hành.
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
