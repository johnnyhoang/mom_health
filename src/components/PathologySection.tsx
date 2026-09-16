import React, { useState } from 'react';
import { pathologyDiseases } from '../data/pathologyData';
import { 
  Activity, 
  AlertOctagon, 
  CheckCircle2, 
  HeartHandshake, 
  Layers, 
  Microscope, 
  Pill, 
  ShieldAlert, 
  Sparkles, 
  Stethoscope,
  Flame,
  Award
} from 'lucide-react';

interface PathologySectionProps {
  searchQuery?: string;
}

export const PathologySection: React.FC<PathologySectionProps> = ({ searchQuery = '' }) => {
  const [selectedDiseaseId, setSelectedDiseaseId] = useState<string>('endometriosis_adenomyosis');

  const filteredDiseases = pathologyDiseases.filter((d) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      d.name.toLowerCase().includes(q) ||
      d.vietnameseName.toLowerCase().includes(q) ||
      d.pathophysiology.summary.toLowerCase().includes(q) ||
      d.icd10.toLowerCase().includes(q)
    );
  });

  const displayDiseases = filteredDiseases.length > 0 ? filteredDiseases : pathologyDiseases;
  const currentDisease = displayDiseases.find((d) => d.id === selectedDiseaseId) || displayDiseases[0];

  return (
    <section className="w-full py-8 bg-slate-100 text-slate-900">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="border-b border-slate-300 pb-5">
          <div className="flex items-center gap-2 text-rose-700 text-xs font-bold uppercase tracking-wider mb-1">
            <Activity className="w-4 h-4" />
            <span>Phân Khu II • Bệnh Học & Rủi Ro Chuyên Sâu</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Toàn Cảnh 7 Bệnh Lý & Rủi Ro Phức Tạp Của Nội Mạc Tử Cung
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 max-w-4xl">
            Phân tích chuyên sâu dựa trên cơ chế sinh bệnh học phân tử, hệ thống phân loại quốc tế chuẩn hóa (FIGO 2023, WHO 2020, rASRM, Enzian, TCGA), triệu chứng lâm sàng và phác đồ can thiệp đa chuyên khoa.
          </p>
        </div>

        {/* Disease Selection Tabs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {displayDiseases.map((disease) => {
            const isSelected = selectedDiseaseId === disease.id;
            return (
              <button
                key={disease.id}
                onClick={() => setSelectedDiseaseId(disease.id)}
                className={`p-3.5 rounded-xl text-left border transition-all relative ${
                  isSelected
                    ? 'bg-rose-950 text-white border-rose-700 shadow-md ring-2 ring-rose-500/50'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-rose-300 hover:bg-rose-50/30 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-rose-800 text-rose-200' : 'bg-slate-100 text-slate-600'
                  }`}>
                    ICD-10: {disease.icd10.split(' ')[0]}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>}
                </div>
                <h4 className="font-bold text-sm mt-2 line-clamp-1">{disease.vietnameseName}</h4>
                <p className={`text-[11px] font-medium mt-0.5 line-clamp-1 italic ${
                  isSelected ? 'text-rose-200' : 'text-slate-500'
                }`}>
                  {disease.name}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Disease Deep-Dive Master Panel */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 lg:p-8 space-y-8">
          
          {/* Disease Top Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-rose-100 text-rose-800 font-mono text-xs font-bold">
                  {currentDisease.icd10}
                </span>
                <span className="text-xs text-slate-500">
                  Tần suất mắc: {currentDisease.prevalence.split(';')[0]}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                {currentDisease.vietnameseName}
              </h3>
              <p className="text-sm font-semibold text-rose-700 italic mt-0.5">
                {currentDisease.name}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs text-slate-700 max-w-sm">
              <span className="font-bold text-slate-900 block mb-0.5">Dịch tễ & Tần suất:</span>
              <span>{currentDisease.prevalence}</span>
            </div>
          </div>

          {/* Subsection 1: Pathophysiology & Molecular Cascades */}
          <div className="space-y-4">
            <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <Microscope className="w-5 h-5 text-teal-600" />
              1. Cơ Chế Sinh Bệnh Học & Tầng Tín Hiệu Phân Tử
            </h4>
            
            <div className="bg-teal-50/60 border border-teal-100 p-4 rounded-xl text-xs sm:text-sm text-teal-950 leading-relaxed">
              <strong>Tóm lược bệnh sinh: </strong>
              {currentDisease.pathophysiology.summary}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentDisease.pathophysiology.theoriesAndMechanisms.map((theory, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-teal-700 text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <h5 className="font-bold text-xs sm:text-sm text-slate-900">{theory.title}</h5>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed pl-7">
                    {theory.description}
                  </p>
                  {theory.moleculesInvolved && (
                    <div className="pl-7 pt-1 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Dấu ấn gen/protein:</span>
                      {theory.moleculesInvolved.map((m, idx) => (
                        <span key={idx} className="text-[10px] bg-white border border-teal-300 text-teal-800 font-mono px-1.5 py-0.2 rounded">
                          {m}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Risk vs Protective Factors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-rose-50/80 border border-rose-200/80 p-4 rounded-xl">
                <h5 className="text-xs font-bold uppercase tracking-wider text-rose-900 flex items-center gap-1.5 mb-2">
                  <AlertOctagon className="w-4 h-4 text-rose-600" />
                  Yếu Tố Nguy Cơ (Risk Factors)
                </h5>
                <ul className="space-y-1.5 text-xs text-rose-950">
                  {currentDisease.pathophysiology.riskFactors.map((rf, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{rf}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-50/80 border border-emerald-200/80 p-4 rounded-xl">
                <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Yếu Tố Bảo Vệ (Protective Factors)
                </h5>
                <ul className="space-y-1.5 text-xs text-emerald-950">
                  {currentDisease.pathophysiology.protectiveFactors.map((pf, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{pf}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Subsection 2: Classification Matrix */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-600" />
              2. Hệ Thống Phân Loại & Phân Tầng Nguy Cơ Tiên Lượng
            </h4>

            {currentDisease.classificationSystems.map((sys, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-slate-900 text-white px-4 py-2.5 text-xs sm:text-sm font-bold flex items-center justify-between">
                  <span>{sys.name}</span>
                  <span className="text-[11px] text-teal-300 font-normal">Tiêu chuẩn quốc tế chuẩn mực</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
                        <th className="p-3 w-1/4">Phân nhóm / Giai đoạn</th>
                        <th className="p-3 w-1/2">Tiêu chuẩn chẩn đoán / Hình thái</th>
                        <th className="p-3 w-1/4">Tiên lượng / Nguy cơ ác tính</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {sys.details.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-slate-900 align-top">{row.category}</td>
                          <td className="p-3 text-slate-700 leading-relaxed align-top">{row.criteria}</td>
                          <td className="p-3 font-semibold text-rose-800 bg-rose-50/40 align-top">
                            {row.malignancyRiskOrPrognosis}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          {/* Subsection 3: Clinical Symptoms & Complications */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <Flame className="w-5 h-5 text-rose-600" />
              3. Triệu Chứng Lâm Sàng Điển Hình & Biến Chứng
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Triệu Chứng Khởi Phát & Thường Gặp (Primary Symptoms)
                </h5>
                <ul className="space-y-2 text-xs text-slate-700">
                  {currentDisease.clinicalManifestations.primarySymptoms.map((sym, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0"></span>
                      <span className="leading-relaxed">{sym}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 text-[11px] text-slate-500 italic">
                  Tỷ lệ không triệu chứng: {currentDisease.clinicalManifestations.asymptomaticRates}
                </div>
              </div>

              <div className="bg-rose-950 text-white p-4 rounded-xl space-y-2 border border-rose-900 shadow-sm">
                <h5 className="text-xs font-bold uppercase tracking-wider text-rose-300">
                  Biến Chứng Nguy Hiểm Cần Cảnh Giác
                </h5>
                <ul className="space-y-2 text-xs text-rose-100">
                  {currentDisease.clinicalManifestations.complications.map((comp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ShieldAlert className="w-3.5 h-3.5 text-rose-400 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Subsection 4: Diagnostic Workup & Histopathology */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-teal-600" />
              4. Quy Trình Chẩn Đoán Cận Lâm Sàng & Tiêu Chuẩn Vàng
            </h4>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                <h5 className="text-xs font-bold uppercase text-slate-700">Bước 1: Khám & Khảo Sát Ban Đầu</h5>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {currentDisease.diagnosticAlgorithms.firstLine.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-teal-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-teal-900 text-white p-4 rounded-xl space-y-2 border border-teal-700 shadow">
                <h5 className="text-xs font-bold uppercase text-teal-300 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-teal-400" />
                  Tiêu Chuẩn Vàng (Gold Standard)
                </h5>
                <p className="text-xs text-teal-100 leading-relaxed">
                  {currentDisease.diagnosticAlgorithms.goldStandard}
                </p>
                <div className="pt-2 border-t border-teal-800 text-[11px] text-teal-200">
                  <strong>Tiêu chuẩn giải phẫu bệnh:</strong>
                  <ul className="mt-1 space-y-1">
                    {currentDisease.diagnosticAlgorithms.histopathologyCriteria.map((c, i) => (
                      <li key={i}>• {c}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                <h5 className="text-xs font-bold uppercase text-slate-700">Dấu Hiệu Hình Ảnh Đặc Trưng</h5>
                {currentDisease.diagnosticAlgorithms.keyImagingFindings.map((img, i) => (
                  <div key={i} className="text-xs bg-white p-2.5 rounded-lg border border-slate-200 mb-2">
                    <span className="font-bold text-teal-800 block mb-1">{img.modality}:</span>
                    <ul className="space-y-1 text-slate-600">
                      {img.findings.map((f, fIdx) => (
                        <li key={fIdx} className="line-clamp-3">• {f}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Subsection 5: Evidence-Based Management Protocols */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <Pill className="w-5 h-5 text-teal-600" />
              5. Phác Đồ Điều Trị Dựa Trên Y Học Thực Chứng
            </h4>

            {/* Medical Therapy Table */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-teal-950 text-white px-4 py-2 text-xs font-bold">
                Điều Trị Nội Khoa (Medical Therapy)
              </div>
              <div className="divide-y divide-slate-100">
                {currentDisease.evidenceBasedManagement.medicalTherapy.map((med, i) => (
                  <div key={i} className="p-4 hover:bg-slate-50 grid grid-cols-1 md:grid-cols-12 gap-3 text-xs">
                    <div className="md:col-span-3">
                      <span className="font-bold text-slate-900 block">{med.drugClass}</span>
                      <span className="text-teal-700 font-mono text-[11px] block mt-0.5">{med.agent}</span>
                      <span className="inline-block mt-1 text-[10px] bg-teal-50 text-teal-800 border border-teal-200 px-1.5 py-0.2 rounded font-semibold">
                        {med.evidenceLevel}
                      </span>
                    </div>
                    <div className="md:col-span-5 text-slate-700 leading-relaxed">
                      <span className="font-semibold text-slate-800">Cơ chế tác dụng: </span>
                      {med.mechanism}
                    </div>
                    <div className="md:col-span-4 bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-slate-700">
                      <span className="font-semibold text-slate-800 block mb-0.5">Chỉ định chính:</span>
                      {med.indications}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Surgical Intervention */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-slate-900 text-white px-4 py-2 text-xs font-bold">
                Can Thiệp Ngoại Khoa & Bảo Tồn Sinh Sản
              </div>
              <div className="divide-y divide-slate-100">
                {currentDisease.evidenceBasedManagement.surgicalIntervention.map((surg, i) => (
                  <div key={i} className="p-4 hover:bg-slate-50 space-y-2 text-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h6 className="font-bold text-slate-900 text-sm">{surg.procedure}</h6>
                      <span className="text-slate-500 font-mono text-[11px]">{surg.approach}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-slate-700">
                        <strong className="text-slate-900">Chỉ định: </strong>
                        {surg.indications}
                      </div>
                      <div className="bg-rose-50/70 p-2.5 rounded-lg border border-rose-200 text-rose-950">
                        <strong className="text-rose-900">Lưu ý bảo tồn sinh sản: </strong>
                        {surg.fertilityPreservationNotes}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fertility Considerations & Guidelines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-teal-50 border border-teal-200 p-4 rounded-xl space-y-1.5">
                <h5 className="text-xs font-bold uppercase tracking-wider text-teal-900 flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-teal-700" />
                  Chiến Lược Hỗ Trợ Sinh Sản & Thụ Tinh IVF
                </h5>
                <p className="text-xs text-teal-950 leading-relaxed">
                  {currentDisease.evidenceBasedManagement.fertilityConsiderations}
                </p>
              </div>

              <div className="bg-slate-900 text-white p-4 rounded-xl space-y-2 border border-slate-800">
                <h5 className="text-xs font-bold uppercase tracking-wider text-teal-300">
                  Khuyến Cáo Từ Các Hội Chuyên Khoa Quốc Tế
                </h5>
                {currentDisease.evidenceBasedManagement.guidelineRecommendations.map((g, i) => (
                  <div key={i} className="text-xs bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                    <span className="font-bold text-teal-400 block mb-0.5">{g.organization}:</span>
                    <span className="text-slate-200 leading-relaxed italic">"{g.keyGuideline}"</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical Pearls */}
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl space-y-1">
              <h5 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Ngọc Lâm Sàng & Cảnh Báo Thiết Yếu (Clinical Pearls)
              </h5>
              <ul className="space-y-1 text-xs text-amber-950">
                {currentDisease.caseScenariosOrPearls.map((pearl, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-amber-600 font-bold">★</span>
                    <span className="font-medium">{pearl}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
