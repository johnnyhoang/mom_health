import React, { useState } from 'react';
import { diagnosticModalities } from '../data/diagnosticsData';
import { 
  Stethoscope, 
  CheckCircle2, 
  AlertTriangle, 
  Activity, 
  ShieldAlert
} from 'lucide-react';

export const DiagnosticsSection: React.FC = () => {
  const [selectedModalityId, setSelectedModalityId] = useState<string>('tvus_ieta');

  const currentModality = diagnosticModalities.find((m) => m.id === selectedModalityId) || diagnosticModalities[0];

  return (
    <section className="w-full py-8 bg-slate-50 text-slate-900">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="border-b border-slate-200 pb-5">
          <div className="flex items-center gap-2 text-teal-700 text-xs font-bold uppercase tracking-wider mb-1">
            <Stethoscope className="w-4 h-4" />
            <span>Phân Khu III • Tầm Soát & Chẩn Đoán Toàn Diện</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Hệ Thống Phương Pháp Tầm Soát & Chẩn Đoán Cận Lâm Sàng
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 max-w-4xl">
            Chi tiết các kỹ thuật thăm dò từ không xâm lấn (Siêu âm TVUS tiêu chuẩn IETA, SIS, MRI vùng chậu) đến xâm lấn tối thiểu (Sinh thiết Pipelle ngoại trú, Nội soi buồng tử cung) và xét nghiệm phân tử/hóa mô miễn dịch (CD138, Panel MMR, p53).
          </p>
        </div>

        {/* Modality Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {diagnosticModalities.map((modality) => {
            const isSelected = selectedModalityId === modality.id;
            return (
              <button
                key={modality.id}
                onClick={() => setSelectedModalityId(modality.id)}
                className={`p-4 rounded-xl text-left border transition-all relative ${
                  isSelected
                    ? 'bg-teal-950 text-white border-teal-700 shadow-md ring-2 ring-teal-500/50'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-teal-300 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                    modality.type === 'imaging' 
                      ? isSelected ? 'bg-teal-800 text-teal-200' : 'bg-blue-100 text-blue-800'
                      : modality.type === 'invasive'
                        ? isSelected ? 'bg-rose-900 text-rose-200' : 'bg-rose-100 text-rose-800'
                        : modality.type === 'histopathology'
                          ? isSelected ? 'bg-amber-900 text-amber-200' : 'bg-amber-100 text-amber-800'
                          : isSelected ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'
                  }`}>
                    {modality.type === 'imaging' ? 'Chẩn Đoán Hình Ảnh' : modality.type === 'invasive' ? 'Nội Soi Xâm Lấn' : modality.type === 'histopathology' ? 'Giải Phẫu Bệnh' : 'Dấu Ấn Phân Tử'}
                  </span>
                  <span className={`text-xs font-mono font-semibold ${isSelected ? 'text-teal-300' : 'text-slate-500'}`}>
                    Sens: {modality.sensitivity.split(' ')[0]}%
                  </span>
                </div>
                <h4 className="font-bold text-sm mt-2 line-clamp-1">{modality.vietnameseName}</h4>
                <p className={`text-[11px] font-mono mt-0.5 line-clamp-1 italic ${
                  isSelected ? 'text-teal-200/80' : 'text-slate-500'
                }`}>
                  {modality.name}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Modality Deep-Dive Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 lg:p-8 space-y-6">
          
          {/* Header Info */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">Kỹ Thuật Chẩn Đoán Chuẩn</span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">{currentModality.vietnameseName}</h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">{currentModality.name}</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-teal-50 border border-teal-200 p-2.5 rounded-xl text-center min-w-[110px]">
                <span className="text-[10px] text-teal-700 font-bold block uppercase">Độ Nhạy (Sens)</span>
                <span className="text-sm font-black text-teal-900">{currentModality.sensitivity}</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-center min-w-[110px]">
                <span className="text-[10px] text-slate-600 font-bold block uppercase">Độ Đặc Hiệu (Spec)</span>
                <span className="text-sm font-black text-slate-900">{currentModality.specificity}</span>
              </div>
            </div>
          </div>

          {/* 2-Column: Indications vs Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Left: Indications & Contraindications */}
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  Chỉ Định Lâm Sàng (Indications)
                </h5>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {currentModality.indications.map((ind, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-rose-50/70 border border-rose-200 p-4 rounded-xl space-y-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-rose-900 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-rose-600" />
                  Chống Chỉ Định & Thận Trọng
                </h5>
                <ul className="space-y-1 text-xs text-rose-950">
                  {currentModality.contraindications.map((c, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-rose-500 font-bold">✕</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Procedure Steps */}
            <div className="space-y-4">
              <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800 space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-teal-300 flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-teal-400" />
                  Quy Trình Kỹ Thuật Thao Tác Chuẩn Y Khoa
                </h5>
                <ol className="space-y-2.5 text-xs text-slate-200">
                  {currentModality.procedureSteps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-teal-800 text-teal-200 text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-xs text-slate-700">
                <strong className="text-slate-900 block mb-1">Hình ảnh / Kết quả bình thường chuẩn:</strong>
                <span>{currentModality.keyNormalFindings}</span>
              </div>
            </div>

          </div>

          {/* Abnormal Patterns & Action Guide Table */}
          <div className="space-y-3 pt-4 border-t border-slate-200">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              Bảng Đối Chiếu Hình Thái Bất Thường & Hướng Xử Trí Lâm Sàng
            </h5>

            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
                    <th className="p-3 w-1/3">Hình thái bất thường phát hiện</th>
                    <th className="p-3 w-1/3">Gợi ý bệnh lý (Suggestive Of)</th>
                    <th className="p-3 w-1/3">Hành động lâm sàng tiếp theo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {currentModality.keyAbnormalFindings.map((ab, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900 align-top">{ab.pattern}</td>
                      <td className="p-3 text-rose-800 font-medium bg-rose-50/30 align-top">{ab.suggestiveOf}</td>
                      <td className="p-3 text-teal-800 font-medium bg-teal-50/30 align-top">{ab.clinicalAction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pitfalls & Standard Citation */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-slate-200 text-xs text-slate-500">
            <div>
              <strong>Cạm bẫy & Giới hạn: </strong>
              <span>{currentModality.pitfallsAndLimitations.join(' • ')}</span>
            </div>
            <div className="text-[11px] text-teal-700 font-mono bg-teal-50 px-2.5 py-1 rounded border border-teal-200 flex-shrink-0">
              {currentModality.guidelineStandard}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
