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
    bg: 'bg-teal-950/30 border-teal-500/30',
    badge: 'bg-teal-900/60 text-teal-300'
  },
  'clinical-trial': {
    label: 'Thử nghiệm Lâm sàng',
    icon: FlaskConical,
    color: 'text-violet-400',
    bg: 'bg-violet-950/30 border-violet-500/30',
    badge: 'bg-violet-900/60 text-violet-300'
  },
  'journal': {
    label: 'Tạp chí Y khoa Bình duyệt',
    icon: GraduationCap,
    color: 'text-sky-400',
    bg: 'bg-sky-950/30 border-sky-500/30',
    badge: 'bg-sky-900/60 text-sky-300'
  },
  'hospital': {
    label: 'Hướng dẫn Bệnh viện Việt Nam',
    icon: BookOpen,
    color: 'text-rose-400',
    bg: 'bg-rose-950/30 border-rose-500/30',
    badge: 'bg-rose-900/60 text-rose-300'
  }
};

export const ReferencesSection: React.FC<ReferencesSectionProps> = ({ references, diseaseTitle }) => {
  const [expanded, setExpanded] = useState(false);

  const grouped = (Object.keys(categoryConfig) as Reference['category'][]).map(cat => ({
    cat,
    items: references.filter(r => r.category === cat)
  })).filter(g => g.items.length > 0);

  return (
    <section className="w-full max-w-3xl mx-auto px-5 sm:px-6 pb-10 pt-4">
      <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 overflow-hidden">

        {/* Header */}
        <button
          onClick={() => setExpanded(v => !v)}
          className="w-full flex items-center gap-3 p-5 text-left hover:bg-slate-800/40 transition-colors"
          aria-expanded={expanded}
        >
          <BookOpen className="w-5 h-5 text-teal-400 shrink-0" />
          <div className="flex-1">
            <span className="text-sm font-bold text-white">
              Nguồn Tham Khảo Y Khoa — {diseaseTitle}
            </span>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {references.length} tài liệu từ Guidelines quốc tế, Thử nghiệm lâm sàng & Tạp chí bình duyệt
            </p>
          </div>
          <span className="text-xs text-teal-400 font-mono shrink-0 mr-1">
            {expanded ? 'Thu gọn' : 'Xem tất cả'}
          </span>
          {expanded
            ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
            : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
          }
        </button>

        {/* Nội dung */}
        {expanded && (
          <div className="border-t border-slate-700/50 divide-y divide-slate-800/60">
            {grouped.map(({ cat, items }) => {
              const cfg = categoryConfig[cat];
              const Icon = cfg.icon;
              return (
                <div key={cat} className="p-5 space-y-3">
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
                          <span className="text-[10px] text-slate-400">{ref.source}</span>
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
                          <p className="text-[10px] text-slate-500 border-t border-slate-700/40 pt-1 mt-1">{ref.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Ghi chú cuối */}
            <div className="p-4 bg-slate-950/50 text-[10px] text-slate-500 leading-relaxed">
              <strong className="text-slate-400">Lưu ý về tính cập nhật:</strong> Hướng dẫn y khoa thay đổi thường xuyên theo bằng chứng mới. 
              Nội dung được tổng hợp theo phiên bản Guidelines mới nhất có sẵn tại thời điểm xuất bản. 
              Bệnh nhân và người nhà <strong className="text-slate-300">luôn nên hỏi ý kiến bác sĩ chuyên khoa</strong> để áp dụng vào trường hợp cụ thể.
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
