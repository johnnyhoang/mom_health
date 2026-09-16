import React, { useState } from 'react';
import { clinicalDecisionTree } from '../data/decisionTreeData';
import { 
  GitBranch, 
  RotateCcw, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldAlert, 
  Stethoscope, 
  ArrowRight,
  Info
} from 'lucide-react';

export const DecisionToolSection: React.FC = () => {
  const [history, setHistory] = useState<string[]>(['root']);
  const [selectedPathLabels, setSelectedPathLabels] = useState<string[]>([]);

  const currentNodeId = history[history.length - 1];
  const currentNode = clinicalDecisionTree[currentNodeId];

  const handleSelectOption = (option: { label: string; nextStepId?: string; recommendation?: any }) => {
    setSelectedPathLabels([...selectedPathLabels, option.label]);
    if (option.nextStepId) {
      setHistory([...history, option.nextStepId]);
    } else if (option.recommendation) {
      setHistory([...history, 'result']);
    }
  };

  const handleReset = () => {
    setHistory(['root']);
    setSelectedPathLabels([]);
  };

  const isResult = currentNodeId === 'result';
  let finalRecommendation: any = null;
  if (isResult) {
    const parentNodeId = history[history.length - 2];
    const parentNode = clinicalDecisionTree[parentNodeId];
    const lastChoiceLabel = selectedPathLabels[selectedPathLabels.length - 1];
    const matchedOption = parentNode?.options.find((opt) => opt.label === lastChoiceLabel);
    finalRecommendation = matchedOption?.recommendation;
  }

  return (
    <section className="w-full py-8 bg-slate-50 text-slate-900">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="border-b border-slate-200 pb-5 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-teal-700 text-xs font-bold uppercase tracking-wider mb-1">
            <GitBranch className="w-4 h-4" />
            <span>Phân Khu VI • Hỗ Trợ Quyết Định Lâm Sàng (Clinical Decision Support)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Thuật Toán Tầm Soát & Xử Trí Theo Hướng Dẫn Y Khoa Quốc Tế
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            Hệ thống phân tầng nguy cơ và chỉ định cận lâm sàng tự động dựa trên độ tuổi, tình trạng ra máu âm đạo bất thường (AUB/PMB) và độ dày niêm mạc trên siêu âm (ACOG Bulletin #128, FIGO 2023, ESHRE).
          </p>
        </div>

        {/* Interactive Stepper Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
          
          {/* Card Top Progress Bar */}
          <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center">
                {history.length}
              </span>
              <span className="text-xs font-semibold text-teal-200">
                {isResult ? 'Kết Quả Khuyến Cáo Lâm Sàng' : 'Bước Đánh Giá Lâm Sàng'}
              </span>
            </div>

            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Bắt Đầu Lại</span>
            </button>
          </div>

          {/* Breadcrumb Trail of selections */}
          {selectedPathLabels.length > 0 && (
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex flex-wrap items-center gap-2 text-xs">
              <span className="font-bold text-slate-500 uppercase text-[10px]">Lộ trình đã chọn:</span>
              {selectedPathLabels.map((lbl, idx) => (
                <span key={idx} className="flex items-center gap-1.5 bg-white border border-slate-200 px-2 py-1 rounded text-slate-700 shadow-sm">
                  <span className="text-teal-600 font-bold">#{idx + 1}</span>
                  <span className="max-w-xs truncate">{lbl}</span>
                </span>
              ))}
            </div>
          )}

          {/* Main Content Area */}
          <div className="p-6 sm:p-8 space-y-6">
            {!isResult && currentNode && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                    {currentNode.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1.5 flex items-start gap-1.5">
                    <Info className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>{currentNode.explanation}</span>
                  </p>
                </div>

                {/* Options List */}
                <div className="space-y-3 pt-2">
                  {currentNode.options.map((option, optIdx) => (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(option)}
                      className="w-full text-left p-4 sm:p-5 rounded-xl border border-slate-200 hover:border-teal-500 hover:bg-teal-50/40 transition-all flex items-center justify-between group shadow-sm hover:shadow"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-teal-600 group-hover:text-white text-slate-600 text-xs font-bold flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-teal-950 transition-colors">
                          {option.label}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Final Recommendation Result Panel */}
            {isResult && finalRecommendation && (
              <div className="space-y-6 animate-fade-in">
                
                {/* Risk Banner */}
                <div className={`p-5 rounded-xl border ${
                  finalRecommendation.riskLevel === 'critical'
                    ? 'bg-rose-900 text-white border-rose-700'
                    : finalRecommendation.riskLevel === 'high'
                      ? 'bg-amber-900 text-white border-amber-700'
                      : finalRecommendation.riskLevel === 'moderate'
                        ? 'bg-teal-900 text-white border-teal-700'
                        : 'bg-emerald-900 text-white border-emerald-700'
                }`}>
                  <div className="flex items-center gap-2">
                    {finalRecommendation.riskLevel === 'critical' || finalRecommendation.riskLevel === 'high' ? (
                      <ShieldAlert className="w-5 h-5 text-rose-300" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                    )}
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Phân Tầng Nguy Cơ Lâm Sàng: {finalRecommendation.riskLevel.toUpperCase()}
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black mt-1">
                    {finalRecommendation.riskTitle}
                  </h4>
                </div>

                {/* Evidence Guideline Standard */}
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 block mb-1">Căn cứ Hướng dẫn Quốc tế (Evidence Guideline):</strong>
                  <span>{finalRecommendation.evidenceGuideline}</span>
                </div>

                {/* Recommended Investigations */}
                <div className="space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                    <Stethoscope className="w-4 h-4 text-teal-600" />
                    Chỉ Định Cận Lâm Sàng Khuyến Cáo (Recommended Workup)
                  </h5>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {finalRecommendation.recommendedInvestigations.map((inv: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>{inv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Urgent Actions */}
                <div className="bg-rose-50 border border-rose-200 p-4 rounded-xl space-y-1.5">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-rose-900 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    Hành Động Khẩn Cấp Cần Tiến Hành (Immediate Clinical Action)
                  </h5>
                  <ul className="space-y-1 text-xs sm:text-sm text-rose-950 font-semibold">
                    {finalRecommendation.urgentActions.map((act: string, i: number) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-rose-600 font-bold">➔</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Restart Button */}
                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-700 text-white text-xs font-bold shadow-md transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Thực Hiện Đánh Giá Cho Bệnh Nhân Khác</span>
                  </button>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
