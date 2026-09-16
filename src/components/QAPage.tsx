import React, { useState, useMemo } from 'react';
import { tamoxifenQADataset } from '../data/tamoxifenQAData';
import { cervicalSpineQAList } from '../data/cervicalSpineQAData';
import { ankleFractureQAList } from '../data/ankleFractureQAData';
import { chronicBackPainQAItems } from '../data/chronicBackPainQAData';
import { ReadAloudButton } from './ReadAloudButton';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Copy, 
  Check, 
  Bone, 
  Ribbon, 
  ShieldCheck, 
  Award,
  Footprints,
  Activity,
  Tag
} from 'lucide-react';

interface QAPageProps {
  onBackToBook: () => void;
  defaultTopic?: 'ankle' | 'spine' | 'gynecology' | 'back_pain';
}

export const QAPage: React.FC<QAPageProps> = ({ onBackToBook, defaultTopic = 'ankle' }) => {
  const [activeTopic, setActiveTopic] = useState<'ankle' | 'spine' | 'gynecology' | 'back_pain'>(defaultTopic);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedAnkleCategory, setSelectedAnkleCategory] = useState<string>('all');
  const [selectedSpineCategory, setSelectedSpineCategory] = useState<string>('all');
  const [selectedGynCategory, setSelectedGynCategory] = useState<string>('all');
  const [selectedBackPainCategory, setSelectedBackPainCategory] = useState<string>('all');
  
  const [expandedBackPainIds, setExpandedBackPainIds] = useState<Record<string, boolean>>({
    'bp-qa-01': true,
    'bp-qa-02': true,
    'bp-qa-04': true,
    'bp-qa-06': true,
    'bp-qa-08': true
  });
  
  const [expandedAnkleIds, setExpandedAnkleIds] = useState<Record<string, boolean>>({
    'qa-ankle-surgery-necessity': true,
    'qa-ankle-delay-swelling': true,
    'qa-ankle-nwb-duration': true,
    'qa-ankle-osteoporosis-74': true
  });

  const [expandedSpineIds, setExpandedSpineIds] = useState<Record<string, boolean>>({
    'qa-csm-danger': true,
    'qa-neck-vs-lumbar': true,
    'qa-acdf-procedure': true,
    'qa-age-74-safety': true
  });

  const [expandedGynIds, setExpandedGynIds] = useState<Record<string, boolean>>({
    'qa-1': true,
    'qa-8': true,
    'qa-11': true
  });

  const [copiedId, setCopiedId] = useState<string | null>(null);

  const ankleCategories = [
    { id: 'all', label: 'Tất Cả (12 Câu Hỏi)' },
    { id: 'Bản Chất Gãy Xương & Dây Chằng', label: 'Bản Chất & Dây Chằng' },
    { id: 'Phẫu Thuật Nẹp Vít ORIF', label: 'Phẫu Thuật ORIF' },
    { id: 'Lộ Trình Phục Hồi & Tỳ Đè', label: 'Lộ Trình & Tỳ Đè' },
    { id: 'An Toàn Tuổi 74 & Bệnh Nền', label: 'Tuổi 74 & Bệnh Nền' },
    { id: 'Dinh Dưỡng & Tháo Nẹp Vít', label: 'Dinh Dưỡng & Tháo Nẹp' }
  ];

  const spineCategories = [
    { id: 'all', label: 'Tất Cả (15 Câu Hỏi)' },
    { id: 'Bản Chất Bệnh & Tủy Sống', label: 'Bản Chất & Tủy Sống' },
    { id: 'Phẫu Thuật ACDF Lối Trước', label: 'Phẫu Thuật ACDF' },
    { id: 'Tuổi 74 & 4 Bệnh Nền', label: 'Tuổi 74 & Bệnh Nền' },
    { id: 'Hồi Phục & Chăm Sóc Lâu Dài', label: 'Hồi Phục & Chăm Sóc' },
    { id: 'Chi Phí & Quy Trình Khám BV ĐHYD', label: 'Chi Phí & Khám ĐHYD' }
  ];

  const gynCategories = [
    { id: 'all', label: 'Tất Cả (26 Câu Hỏi)' },
    { id: 'case_results', label: 'Giải Mã Bệnh Án' },
    { id: 'tamoxifen_mechanism', label: 'Cơ Chế Tamoxifen' },
    { id: 'treatment_options', label: '4 Phác Đồ Điều Trị' },
    { id: 'surgery_reassurance', label: 'Phẫu Thuật Nội Soi' },
    { id: 'lifestyle_followup', label: 'Lối Sống & Tái Khám' }
  ];

  const backPainCategories = [
    { id: 'all', label: 'Tất Cả (15 Câu Hỏi)' },
    { id: 'Cơ Chế & Triệu Chứng', label: 'Cơ Chế & Ngứa Ran' },
    { id: 'Tương Quan Tử Cung & K Vú', label: 'Tương Quan Tử Cung & K Vú' },
    { id: 'Tư Thế & Giấc Ngủ', label: 'Tư Thế & Kê Gối Ngủ' },
    { id: 'Phục Hồi & Điều Trị', label: 'Phục Hồi & Dinh Dưỡng' }
  ];

  // Filter Back Pain QA
  const filteredBackPainQA = useMemo(() => {
    return chronicBackPainQAItems.filter((item) => {
      const matchCat = selectedBackPainCategory === 'all' || item.category === selectedBackPainCategory;
      if (!matchCat) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.question.toLowerCase().includes(q) ||
        item.shortAnswer.toLowerCase().includes(q) ||
        item.detailedAnswer.toLowerCase().includes(q) ||
        item.tags.some(t => t.toLowerCase().includes(q)) ||
        item.clinicalPearls.some(p => p.toLowerCase().includes(q))
      );
    });
  }, [selectedBackPainCategory, searchQuery]);

  // Filter Ankle QA
  const filteredAnkleQA = useMemo(() => {
    return ankleFractureQAList.filter((item) => {
      const matchCat = selectedAnkleCategory === 'all' || item.category === selectedAnkleCategory;
      if (!matchCat) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.question.toLowerCase().includes(q) ||
        item.shortAnswer.toLowerCase().includes(q) ||
        item.detailedAnswer.some(a => a.toLowerCase().includes(q)) ||
        item.patientTips.toLowerCase().includes(q)
      );
    });
  }, [selectedAnkleCategory, searchQuery]);

  // Filter Spine QA
  const filteredSpineQA = useMemo(() => {
    return cervicalSpineQAList.filter((item) => {
      const matchCat = selectedSpineCategory === 'all' || item.category === selectedSpineCategory;
      if (!matchCat) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.question.toLowerCase().includes(q) ||
        item.shortAnswer.toLowerCase().includes(q) ||
        item.detailedAnswer.some(a => a.toLowerCase().includes(q)) ||
        item.patientTips.toLowerCase().includes(q)
      );
    });
  }, [selectedSpineCategory, searchQuery]);

  // Filter Gyn QA
  const filteredGynQA = useMemo(() => {
    return tamoxifenQADataset.filter((item) => {
      const matchCat = selectedGynCategory === 'all' || item.category === selectedGynCategory;
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
  }, [selectedGynCategory, searchQuery]);

  const toggleBackPainExpand = (id: string) => {
    setExpandedBackPainIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleAnkleExpand = (id: string) => {
    setExpandedAnkleIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSpineExpand = (id: string) => {
    setExpandedSpineIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleGynExpand = (id: string) => {
    setExpandedGynIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 pb-32">
      {/* Header Banner */}
      <div className="w-full max-w-4xl mx-auto pt-8 pb-6 px-4 sm:px-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
            <HelpCircle className="w-4 h-4" />
            <span>Tập Q&A Chuyên Gia Y Khoa Toàn Diện (68 Câu Hỏi)</span>
          </div>
          <button
            onClick={onBackToBook}
            className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            <span>Xem Sách Chuyên Khảo</span>
          </button>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Giải Đáp Toàn Bộ Thắc Mắc Cho Bệnh Nhân & Gia Đình
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Hệ thống câu hỏi và câu trả lời được biên soạn theo chuẩn Y học thực chứng, ngôn ngữ mộc mạc, phân tích cặn kẽ từng chi tiết để gia đình hoàn toàn an tâm.
          </p>
        </div>

        {/* 4 Topic Switcher Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-2xl">
          <button
            onClick={() => {
              setActiveTopic('ankle');
              setSearchQuery('');
            }}
            className={`py-2 px-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTopic === 'ankle'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Footprints className="w-4 h-4 shrink-0" />
            <span className="truncate">Mắt Cá (12)</span>
          </button>

          <button
            onClick={() => {
              setActiveTopic('spine');
              setSearchQuery('');
            }}
            className={`py-2 px-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTopic === 'spine'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bone className="w-4 h-4 shrink-0" />
            <span className="truncate">Cổ ACDF (15)</span>
          </button>

          <button
            onClick={() => {
              setActiveTopic('gynecology');
              setSearchQuery('');
            }}
            className={`py-2 px-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTopic === 'gynecology'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Ribbon className="w-4 h-4 shrink-0" />
            <span className="truncate">Tử Cung (26)</span>
          </button>

          <button
            onClick={() => {
              setActiveTopic('back_pain');
              setSearchQuery('');
            }}
            className={`py-2 px-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTopic === 'back_pain'
                ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-4 h-4 shrink-0" />
            <span className="truncate">Đau Lưng (15)</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              activeTopic === 'ankle' 
                ? "Tìm kiếm về nẹp vít mắt cá, đứt dây chằng ATFL, giày CAM boot, loãng xương, tiêm chống đông DVT..."
                : activeTopic === 'spine' 
                ? "Tìm kiếm về mổ ACDF, chèn ép tủy, loãng xương, tê tay, BV ĐHYD..." 
                : activeTopic === 'gynecology'
                ? "Tìm kiếm về u xơ, rong kinh, sinh thiết Hùng Vương, phẫu thuật nội soi..."
                : "Tìm kiếm về ngứa ran khi đấm lưng, đau tăng trước kỳ kinh, kê gối ngủ, di căn xương, bài tập McGill..."
            }
            className="w-full pl-11 pr-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-indigo-500 transition-colors"
          />
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 text-xs">
          {activeTopic === 'ankle' ? (
            ankleCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedAnkleCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all cursor-pointer ${
                  selectedAnkleCategory === cat.id
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))
          ) : activeTopic === 'spine' ? (
            spineCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedSpineCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all cursor-pointer ${
                  selectedSpineCategory === cat.id
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))
          ) : activeTopic === 'gynecology' ? (
            gynCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedGynCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all cursor-pointer ${
                  selectedGynCategory === cat.id
                    ? 'bg-teal-500/20 text-teal-300 border border-teal-500/50'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))
          ) : (
            backPainCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedBackPainCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all cursor-pointer ${
                  selectedBackPainCategory === cat.id
                    ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/50'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Main Q&A Content Area */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
        {activeTopic === 'ankle' ? (
          // ==================== ANKLE QA LIST ====================
          filteredAnkleQA.length > 0 ? (
            filteredAnkleQA.map((item, idx) => {
              const isExpanded = expandedAnkleIds[item.id] || false;
              return (
                <div
                  key={item.id}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isExpanded 
                      ? 'bg-slate-900/90 border-rose-500/40 shadow-lg' 
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleAnkleExpand(item.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="space-y-1">
                        <span className="text-[11px] font-mono text-rose-400/90 uppercase font-semibold">
                          {item.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                          {item.question}
                        </h3>
                        {!isExpanded && (
                          <p className="text-xs text-slate-400 line-clamp-2 pt-1">
                            {item.shortAnswer}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="shrink-0 p-1 rounded-lg bg-slate-800/80 text-slate-400">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-4 sm:p-5 pt-0 border-t border-slate-800 space-y-4">
                      {/* Short summary callout */}
                      <div className="p-3.5 bg-rose-950/30 border border-rose-800/40 rounded-xl space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <div className="text-xs font-bold text-rose-300 uppercase tracking-wide">
                            Tóm Tắt Nhanh (Dễ Nhớ):
                          </div>
                          <ReadAloudButton
                            id={`qa-ankle-${item.id}`}
                            title={item.question}
                            text={`${item.question}. ${item.shortAnswer}. Phân tích chi tiết: ${item.detailedAnswer.join(' ')}. ${item.patientTips ? `Lời khuyên: ${item.patientTips}` : ''}`}
                            variant="card"
                            label="Nghe trả lời"
                          />
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                          {item.shortAnswer}
                        </p>
                      </div>

                      {/* Detailed Bullet Points */}
                      <div className="space-y-2">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          Phân Tích Chi Tiết Chuẩn Y Khoa:
                        </div>
                        <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {item.detailedAnswer.map((p, i) => (
                            <p key={i} className="pl-3 border-l-2 border-slate-700">
                              {p}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Patient Advice */}
                      {item.patientTips && (
                        <div className="p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl flex items-start gap-2 text-xs text-emerald-200">
                          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <p className="leading-relaxed"><strong className="text-emerald-300">Lời Khuyên Cho Gia Đình: </strong>{item.patientTips}</p>
                        </div>
                      )}

                      {/* Guideline / Evidence citation */}
                      {item.guidelineEvidence && (
                        <div className="text-[11px] text-slate-500 italic flex items-center gap-1.5 pt-1">
                          <Award className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                          <span>{item.guidelineEvidence}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-12 text-center text-slate-500 bg-slate-900/30 border border-slate-800 rounded-2xl space-y-2">
              <HelpCircle className="w-8 h-8 mx-auto text-slate-600" />
              <p>Không tìm thấy câu hỏi phù hợp với từ khóa "{searchQuery}"</p>
            </div>
          )
        ) : activeTopic === 'spine' ? (
          // ==================== SPINE QA LIST ====================
          filteredSpineQA.length > 0 ? (
            filteredSpineQA.map((item, idx) => {
              const isExpanded = expandedSpineIds[item.id] || false;
              return (
                <div
                  key={item.id}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isExpanded 
                      ? 'bg-slate-900/90 border-amber-500/40 shadow-lg' 
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleSpineExpand(item.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="space-y-1">
                        <span className="text-[11px] font-mono text-amber-400/90 uppercase font-semibold">
                          {item.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                          {item.question}
                        </h3>
                        {!isExpanded && (
                          <p className="text-xs text-slate-400 line-clamp-2 pt-1">
                            {item.shortAnswer}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="shrink-0 p-1 rounded-lg bg-slate-800/80 text-slate-400">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-4 sm:p-5 pt-0 border-t border-slate-800 space-y-4">
                      {/* Short summary callout */}
                      <div className="p-3.5 bg-amber-950/30 border border-amber-800/40 rounded-xl space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <div className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                            Tóm Tắt Nhanh (Dễ Nhớ):
                          </div>
                          <ReadAloudButton
                            id={`qa-spine-${item.id}`}
                            title={item.question}
                            text={`${item.question}. ${item.shortAnswer}. Phân tích chi tiết: ${item.detailedAnswer.join(' ')}. ${item.patientTips ? `Lời khuyên: ${item.patientTips}` : ''}`}
                            variant="card"
                            label="Nghe trả lời"
                          />
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                          {item.shortAnswer}
                        </p>
                      </div>

                      {/* Detailed Bullet Points */}
                      <div className="space-y-2">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          Phân Tích Chi Tiết Chuẩn Y Khoa:
                        </div>
                        <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {item.detailedAnswer.map((p, i) => (
                            <p key={i} className="pl-3 border-l-2 border-slate-700">
                              {p}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Patient Advice */}
                      {item.patientTips && (
                        <div className="p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl flex items-start gap-2 text-xs text-emerald-200">
                          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <p className="leading-relaxed"><strong className="text-emerald-300">Lời Khuyên Cho Gia Đình: </strong>{item.patientTips}</p>
                        </div>
                      )}

                      {/* Guideline / Evidence citation */}
                      {item.guidelineEvidence && (
                        <div className="text-[11px] text-slate-500 italic flex items-center gap-1.5 pt-1">
                          <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{item.guidelineEvidence}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-12 text-center text-slate-500 bg-slate-900/30 border border-slate-800 rounded-2xl space-y-2">
              <HelpCircle className="w-8 h-8 mx-auto text-slate-600" />
              <p>Không tìm thấy câu hỏi phù hợp với từ khóa "{searchQuery}"</p>
            </div>
          )
        ) : activeTopic === 'gynecology' ? (
          // ==================== GYNECOLOGY QA LIST ====================
          filteredGynQA.length > 0 ? (
            filteredGynQA.map((item, idx) => {
              const isExpanded = expandedGynIds[item.id] || false;
              return (
                <div
                  key={item.id}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isExpanded 
                      ? 'bg-slate-900/90 border-teal-500/40 shadow-lg' 
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleGynExpand(item.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="space-y-1">
                        <span className="text-[11px] font-mono text-teal-400/90 uppercase font-semibold">
                          {item.categoryLabel}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                          {item.question}
                        </h3>
                        {!isExpanded && (
                          <p className="text-xs text-slate-400 line-clamp-2 pt-1">
                            {item.shortSummary}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="shrink-0 p-1 rounded-lg bg-slate-800/80 text-slate-400">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-4 sm:p-5 pt-0 border-t border-slate-800 space-y-4">
                      {/* Short summary callout */}
                      <div className="p-3.5 bg-teal-950/30 border border-teal-800/40 rounded-xl space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <div className="text-xs font-bold text-teal-300 uppercase tracking-wide">
                            Tóm Tắt Nhanh (Dễ Hiểu):
                          </div>
                          <ReadAloudButton
                            id={`qa-gyn-${item.id}`}
                            title={item.question}
                            text={`${item.question}. ${item.shortSummary}. Phân tích chi tiết: ${item.detailedAnswer.join(' ')}. ${item.clinicalHighlight ? `Điểm nhấn lâm sàng: ${item.clinicalHighlight}` : ''}`}
                            variant="card"
                            label="Nghe trả lời"
                          />
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                          {item.shortSummary}
                        </p>
                      </div>

                      {/* Detailed Bullet Points */}
                      <div className="space-y-2">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          Phân Tích Chi Tiết:
                        </div>
                        <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {item.detailedAnswer.map((p, i) => (
                            <p key={i} className="pl-3 border-l-2 border-slate-700">
                              {p}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Clinical Highlight */}
                      {item.clinicalHighlight && (
                        <div className="p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl flex items-start gap-2 text-xs text-emerald-200">
                          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <p className="leading-relaxed"><strong className="text-emerald-300">Điểm Nhấn Lâm Sàng: </strong>{item.clinicalHighlight}</p>
                        </div>
                      )}

                      {/* Doctor Question to ask */}
                      {item.doctorQuestionToAsk && (
                        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between gap-3">
                          <div className="text-xs text-slate-300 italic">
                            <span className="text-teal-400 font-bold not-italic">Câu hỏi nên mang đi hỏi Bác sĩ: </span>
                            {item.doctorQuestionToAsk}
                          </div>
                          <button
                            onClick={() => handleCopyText(item.id, item.doctorQuestionToAsk!)}
                            className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-teal-300 transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                          >
                            {copiedId === item.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                            <span>{copiedId === item.id ? 'Đã sao chép' : 'Sao chép'}</span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-12 text-center text-slate-500 bg-slate-900/30 border border-slate-800 rounded-2xl space-y-2">
              <HelpCircle className="w-8 h-8 mx-auto text-slate-600" />
              <p>Không tìm thấy câu hỏi phù hợp với từ khóa "{searchQuery}"</p>
            </div>
          )
        ) : (
          // ==================== BACK PAIN QA LIST ====================
          filteredBackPainQA.length > 0 ? (
            filteredBackPainQA.map((item, idx) => {
              const isExpanded = expandedBackPainIds[item.id] || false;
              return (
                <div
                  key={item.id}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isExpanded 
                      ? 'bg-slate-900/90 border-indigo-500/40 shadow-lg' 
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleBackPainExpand(item.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="space-y-1">
                        <span className="text-[11px] font-mono text-indigo-400/90 uppercase font-semibold">
                          {item.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                          {item.question}
                        </h3>
                        {!isExpanded && (
                          <p className="text-xs text-slate-400 line-clamp-2 pt-1">
                            {item.shortAnswer}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="shrink-0 p-1 rounded-lg bg-slate-800/80 text-slate-400">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-4 sm:p-5 pt-0 border-t border-slate-800 space-y-4">
                      {/* Short summary callout */}
                      <div className="p-3.5 bg-indigo-950/30 border border-indigo-800/40 rounded-xl space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <div className="text-xs font-bold text-indigo-300 uppercase tracking-wide">
                            Tóm Tắt Nhanh (Dễ Hiểu):
                          </div>
                          <ReadAloudButton
                            id={`qa-bp-${item.id}`}
                            title={item.question}
                            text={`${item.question}. ${item.shortAnswer}. Phân tích chi tiết: ${item.detailedAnswer}. Lời khuyên lâm sàng: ${item.clinicalPearls.join(' ')}`}
                            variant="card"
                            label="Nghe trả lời"
                          />
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                          {item.shortAnswer}
                        </p>
                      </div>

                      {/* Detailed Answer */}
                      <div className="space-y-2">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          Phân Tích Chi Tiết:
                        </div>
                        <div className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                          {item.detailedAnswer}
                        </div>
                      </div>

                      {/* Clinical Pearls */}
                      {item.clinicalPearls.length > 0 && (
                        <div className="p-3.5 bg-emerald-950/30 border border-emerald-800/40 rounded-xl space-y-1.5 text-xs text-emerald-200">
                          <div className="font-bold text-emerald-300 flex items-center gap-1.5 uppercase">
                            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>Lời Khuyên Cốt Lõi Từ Chuyên Gia:</span>
                          </div>
                          <ul className="space-y-1 pl-2">
                            {item.clinicalPearls.map((pearl, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="text-emerald-400 font-bold shrink-0">•</span>
                                <span>{pearl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        <Tag className="w-3.5 h-3.5 text-slate-500" />
                        {item.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-12 text-center text-slate-500 bg-slate-900/30 border border-slate-800 rounded-2xl space-y-2">
              <HelpCircle className="w-8 h-8 mx-auto text-slate-600" />
              <p>Không tìm thấy câu hỏi phù hợp với từ khóa "{searchQuery}"</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};
