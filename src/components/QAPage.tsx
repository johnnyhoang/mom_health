import React, { useState, useMemo } from 'react';
import { tamoxifenQADataset } from '../data/tamoxifenQAData';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Sparkles, 
  Copy, 
  Check, 
  Stethoscope, 
  HeartHandshake
} from 'lucide-react';

interface QAPageProps {
  onBackToBook: () => void;
}

export const QAPage: React.FC<QAPageProps> = ({ onBackToBook }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'qa-1': true,
    'qa-8': true,
    'qa-11': true
  });
  const [copiedDoctorQuestions, setCopiedDoctorQuestions] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'Tất Cả Câu Hỏi' },
    { id: 'case_results', label: 'Giải Mã Bệnh Án' },
    { id: 'tamoxifen_mechanism', label: 'Cơ Chế Tamoxifen' },
    { id: 'treatment_options', label: '4 Phác Đồ Điều Trị' },
    { id: 'surgery_reassurance', label: 'Phẫu Thuật Nội Soi' },
    { id: 'lifestyle_followup', label: 'Lối Sống & Tái Khám' }
  ];

  // Filter Q&A Items
  const filteredQA = useMemo(() => {
    return tamoxifenQADataset.filter((item) => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      if (!matchCat) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.question.toLowerCase().includes(q) ||
        item.shortSummary.toLowerCase().includes(q) ||
        item.detailedAnswer.some(a => a.toLowerCase().includes(q)) ||
        (item.clinicalHighlight && item.clinicalHighlight.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleExpandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    tamoxifenQADataset.forEach(item => {
      allExpanded[item.id] = true;
    });
    setExpandedIds(allExpanded);
  };

  const handleCollapseAll = () => {
    setExpandedIds({});
  };

  const handleCopyQuestions = () => {
    const questionsToAsk = tamoxifenQADataset
      .filter(item => item.doctorQuestionToAsk)
      .map((item, idx) => `${idx + 1}. ${item.doctorQuestionToAsk}`)
      .join('\n\n');

    navigator.clipboard.writeText(
      `DANH SÁCH CÂU HỎI KHI GẶP BÁC SĨ ĐIỀU TRỊ:\n\n${questionsToAsk}`
    );
    setCopiedDoctorQuestions(true);
    setTimeout(() => setCopiedDoctorQuestions(false), 3000);
  };

  return (
    <div className="w-full bg-slate-950 text-slate-200 font-sans pb-32">
      
      {/* Header Banner */}
      <header className="w-full max-w-3xl mx-auto pt-10 pb-6 px-5 sm:px-6 space-y-6">
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold tracking-wider uppercase">
            <HelpCircle className="w-4 h-4" />
            <span>Tập Hỏi - Đáp Y Khoa Chuyên Biệt</span>
          </div>

          <button
            onClick={onBackToBook}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 hover:text-teal-300 bg-teal-950/60 border border-teal-800/80 px-3 py-1.5 rounded-xl transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Đọc Sách Chuyên Khảo</span>
          </button>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Tập Q&A Tổng Kết: Toàn Bộ Thắc Mắc Sau 5 Năm Tamoxifen
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Tổng hợp và giải đáp cặn kẽ {tamoxifenQADataset.length} câu hỏi quan trọng nhất từ chẩn đoán giải phẫu bệnh, nguyên nhân rong kinh, bảo vệ tuyến vú đến các phác đồ điều trị tối ưu.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm nhanh: Lành tính, U xơ, Cắt tử cung, Mãn kinh, Bổ máu, Mirena, Đậu nành, Quan hệ vợ chồng..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-teal-500 transition-colors shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              Xóa
            </button>
          )}
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-teal-500 text-slate-950 font-bold shadow-md shadow-teal-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Utility Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pt-2 border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-3">
            <span>Hiển thị: <strong className="text-teal-400">{filteredQA.length}</strong> / {tamoxifenQADataset.length} câu hỏi</span>
            <span className="text-slate-600">|</span>
            <button onClick={handleExpandAll} className="hover:text-teal-300 underline underline-offset-2">Mở tất cả</button>
            <button onClick={handleCollapseAll} className="hover:text-teal-300 underline underline-offset-2">Thu gọn</button>
          </div>

          <button
            onClick={handleCopyQuestions}
            className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl transition-colors"
          >
            {copiedDoctorQuestions ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-teal-400" />}
            <span>{copiedDoctorQuestions ? 'Đã sao chép câu hỏi!' : 'Sao chép câu hỏi đi khám'}</span>
          </button>
        </div>

      </header>

      {/* Main Q&A Accordion List */}
      <main className="w-full max-w-3xl mx-auto px-5 sm:px-6 space-y-4">
        
        {filteredQA.length === 0 ? (
          <div className="text-center py-16 space-y-3 bg-slate-900/40 rounded-2xl border border-slate-800 p-8">
            <HelpCircle className="w-10 h-10 text-slate-600 mx-auto" />
            <p className="text-slate-400 text-sm">Không tìm thấy câu hỏi phù hợp với từ khóa "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="text-xs text-teal-400 hover:underline font-semibold"
            >
              Xem tất cả {tamoxifenQADataset.length} câu hỏi
            </button>
          </div>
        ) : (
          filteredQA.map((item, idx) => {
            const isExpanded = !!expandedIds[item.id];
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 transition-all overflow-hidden shadow-sm"
              >
                {/* Question Trigger Header */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 group select-none"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-teal-400">
                        {item.categoryLabel} • Câu {idx + 1}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-teal-300 transition-colors leading-snug">
                      {item.question}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-1">
                      👉 {item.shortSummary}
                    </p>
                  </div>

                  <div className="w-8 h-8 rounded-xl bg-slate-800 text-slate-400 group-hover:text-white flex items-center justify-center shrink-0 mt-1 transition-colors">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Answer Content */}
                {isExpanded && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 space-y-4 border-t border-slate-800/60 bg-slate-950/40 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    
                    {/* Key Takeaway Summary Box */}
                    <div className="p-3.5 rounded-xl bg-teal-950/30 border-l-2 border-teal-400 text-slate-200">
                      <strong className="text-teal-300 font-bold block mb-1">Tóm tắt cốt lõi:</strong>
                      <span>{item.shortSummary}</span>
                    </div>

                    {/* Bullet Points Answer */}
                    <div className="space-y-2 pt-1">
                      {item.detailedAnswer.map((para, pIdx) => (
                        <p key={pIdx} className="leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Clinical Highlight */}
                    {item.clinicalHighlight && (
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-200">Điểm nhấn lâm sàng: </strong>
                          <span>{item.clinicalHighlight}</span>
                        </div>
                      </div>
                    )}

                    {/* Doctor Question to Ask */}
                    {item.doctorQuestionToAsk && (
                      <div className="p-3 rounded-xl bg-amber-950/20 border-l-2 border-amber-400 text-xs text-amber-100 italic space-y-1">
                        <div className="font-bold text-amber-300 flex items-center gap-1.5 not-italic">
                          <Stethoscope className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>Gợi ý câu hỏi khi gặp Bác sĩ điều trị:</span>
                        </div>
                        <p>{item.doctorQuestionToAsk}</p>
                      </div>
                    )}

                  </div>
                )}
              </div>
            );
          })
        )}

        {/* Bottom Reassurance Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-950/40 to-slate-900 border border-teal-800/40 text-center space-y-3 mt-8">
          <HeartHandshake className="w-8 h-8 text-teal-400 mx-auto" />
          <h3 className="font-bold text-base text-white">Chị Có Thắc Mắc Nào Khác Chưa Được Giải Đáp?</h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
            Chị có thể bấm đọc lại toàn bộ chuyên khảo y khoa để xem video mô phỏng phẫu thuật, tra cứu bảng giải mã xét nghiệm hoặc sử dụng cây quyết định lâm sàng cá thể hóa.
          </p>
          <button
            onClick={onBackToBook}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-teal-500/20"
          >
            <BookOpen className="w-4 h-4" />
            <span>Quay Lại Đọc Sách Chuyên Khảo</span>
          </button>
        </div>

      </main>

    </div>
  );
};
