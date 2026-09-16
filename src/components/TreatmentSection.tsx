import React, { useState } from 'react';
import { clinicalTreatmentProtocols } from '../data/treatmentData';
import { 
  Pill, 
  Scissors, 
  HeartHandshake, 
  Clock, 
  AlertCircle, 
  BookOpen
} from 'lucide-react';

export const TreatmentSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProtocols = clinicalTreatmentProtocols.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <section className="w-full py-8 bg-slate-100 text-slate-900">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="border-b border-slate-300 pb-5">
          <div className="flex items-center gap-2 text-teal-700 text-xs font-bold uppercase tracking-wider mb-1">
            <Pill className="w-4 h-4" />
            <span>Phân Khu IV • Phác Đồ Lâm Sàng Y Học Thực Chứng</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Phác Đồ Điều Trị & Quản Lý Cá Thể Hóa Toàn Diện
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 max-w-4xl">
            Các hướng dẫn điều trị chuẩn quốc tế cho tăng sinh nội mạc tử cung, viêm mạn tính CD138, phẫu thuật gỡ dính Asherman và tối ưu hóa niêm mạc mỏng trong thụ tinh trong ống nghiệm (IVF).
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'Tất Cả Phác Đồ', icon: BookOpen },
            { id: 'medical', label: 'Nội Khoa Progestin & Kháng Sinh', icon: Pill },
            { id: 'surgical', label: 'Phẫu Thuật Nội Soi Tái Tạo', icon: Scissors },
            { id: 'fertility_preservation', label: 'Tối Ưu Niêm Mạc & IVF (PRP)', icon: HeartHandshake },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-teal-900 text-white shadow-md ring-2 ring-teal-500/50'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-teal-300' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Protocols List */}
        <div className="space-y-6">
          {filteredProtocols.map((proto, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 lg:p-8 space-y-6"
            >
              {/* Protocol Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full ${
                      proto.category === 'medical'
                        ? 'bg-blue-100 text-blue-800 border border-blue-200'
                        : proto.category === 'surgical'
                          ? 'bg-rose-100 text-rose-800 border border-rose-200'
                          : 'bg-teal-100 text-teal-800 border border-teal-200'
                    }`}>
                      {proto.category === 'medical' ? 'Phác đồ Nội khoa' : proto.category === 'surgical' ? 'Quy trình Ngoại khoa' : 'Phác đồ Hỗ trợ Sinh sản'}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Chỉ định: {proto.targetConditions.join(' • ')}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                    {proto.title}
                  </h3>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-xl text-xs text-emerald-900 font-medium max-w-sm">
                  <strong className="text-emerald-950 block">Hiệu quả điều trị:</strong>
                  <span>{proto.successRatesAndOutcomes}</span>
                </div>
              </div>

              {/* Protocol Steps / Phases Timeline */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-teal-600" />
                  Các Giai Đoạn Thực Hiện Phác Đồ Chi Tiết
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {proto.protocolDetails.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 flex flex-col justify-between space-y-3"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">
                            Bước {sIdx + 1}
                          </span>
                        </div>
                        <h5 className="font-bold text-xs text-slate-900 mt-2">{step.phase}</h5>
                        <p className="text-xs text-slate-700 font-semibold mt-1">{step.action}</p>
                        <div className="text-[11px] text-slate-600 bg-white p-2 rounded-lg border border-slate-200 mt-2 leading-relaxed">
                          {step.dosageOrTechnique}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-200 text-[10px] text-slate-500">
                        <strong>Theo dõi: </strong> {step.monitoring}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Side Effects & References Footer */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-rose-50/70 border border-rose-200 p-4 rounded-xl text-xs text-rose-950 space-y-1.5">
                  <h5 className="font-bold uppercase tracking-wider text-rose-900 flex items-center gap-1.5 text-[11px]">
                    <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                    Tác Dụng Không Mong Muốn & Rủi Ro Cần Theo Dõi
                  </h5>
                  <ul className="space-y-1">
                    {proto.sideEffectsAndRisks.map((se, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-rose-500 font-bold">•</span>
                        <span>{se}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl text-xs space-y-1.5 border border-slate-800">
                  <h5 className="font-bold uppercase tracking-wider text-teal-300 flex items-center gap-1.5 text-[11px]">
                    <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                    Tài Liệu Tham Khảo & Hướng Dẫn Quốc Tế
                  </h5>
                  <ul className="space-y-1 text-slate-300">
                    {proto.keyReferences.map((ref, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-teal-400">📖</span>
                        <span>{ref}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
