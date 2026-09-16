import React, { useState } from 'react';
import { histologyLayers, menstrualCyclePhases } from '../data/histologyData';
import { 
  Layers, 
  Clock, 
  Zap, 
  Activity, 
  CheckCircle2, 
  Info, 
  ShieldAlert
} from 'lucide-react';

export const HistologySection: React.FC = () => {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(0);
  const [selectedPhaseId, setSelectedPhaseId] = useState<string>('mid_secretory_woi');

  const currentLayer = histologyLayers[selectedLayerIndex];
  const currentPhase = menstrualCyclePhases.find((p) => p.id === selectedPhaseId) || menstrualCyclePhases[0];

  return (
    <section className="w-full py-8 bg-slate-50 text-slate-900">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="border-b border-slate-200 pb-5">
          <div className="flex items-center gap-2 text-teal-700 text-xs font-bold uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4" />
            <span>Phân Khu I • Giải Phẫu Học & Sinh Lý Động Học</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Mô Học Vi Thể & Động Học Chu Kỳ Nội Mạc Tử Cung
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 max-w-4xl">
            Nội mạc tử cung là một trong những mô năng động nhất trong cơ thể người, trải qua hơn 400 chu kỳ phân chia tế bào, biệt hóa, hoại tử bong tróc và tái sinh hoàn toàn trong suốt cuộc đời sinh sản của người phụ nữ dưới sự điều phối của trục Hạ đồi - Tuyến yên - Buồng trứng.
          </p>
        </div>

        {/* Part 1: Interactive Histological Layers Explorer */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-600"></span>
              Cấu Trúc Phân Tầng Vi Thể & Hệ Mạch Máu Cấp Nuôi
            </h3>
            <span className="text-xs text-slate-500 italic hidden sm:inline-block">
              Nhấp vào từng tầng để xem chi tiết sinh học phân tử & ý nghĩa lâm sàng
            </span>
          </div>

          {/* Layer Selector Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {histologyLayers.map((layer, index) => {
              const isSelected = selectedLayerIndex === index;
              return (
                <button
                  key={layer.name}
                  onClick={() => setSelectedLayerIndex(index)}
                  className={`text-left p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-teal-900 text-white border-teal-700 shadow-md ring-2 ring-teal-500/50'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-teal-300 hover:bg-slate-50/80 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      isSelected ? 'bg-teal-800 text-teal-200' : 'bg-slate-100 text-slate-600'
                    }`}>
                      Tầng {index + 1}
                    </span>
                    <span className={`text-xs ${isSelected ? 'text-teal-300' : 'text-slate-400'}`}>
                      {layer.depth.split('(')[0]}
                    </span>
                  </div>
                  <h4 className="font-bold text-base mt-2">{layer.vietnameseName}</h4>
                  <p className={`text-xs mt-1 font-mono italic ${isSelected ? 'text-teal-200/80' : 'text-slate-500'}`}>
                    {layer.name}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Detailed Layer Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 lg:p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">Chi Tiết Tầng Mô Học</span>
                <h4 className="text-xl font-extrabold text-slate-900">{currentLayer.name} ({currentLayer.vietnameseName})</h4>
                <p className="text-xs text-slate-500 mt-0.5">{currentLayer.depth}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Left Column: Cellular & Vascular */}
              <div className="space-y-4">
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-2">
                    <Layers className="w-3.5 h-3.5 text-teal-600" />
                    Thành Phần Tế Bào & Biểu Mô Tuyến
                  </h5>
                  <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                    {currentLayer.cellularComposition.map((cell, i) => (
                      <li key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>{cell}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-rose-50/70 border border-rose-100 p-4 rounded-xl">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5 mb-1.5">
                    <Activity className="w-3.5 h-3.5 text-rose-600" />
                    Hệ Thống Mạch Máu Cấp Máu (Vascular Supply)
                  </h5>
                  <p className="text-xs text-rose-950 leading-relaxed">
                    {currentLayer.vascularSupply}
                  </p>
                </div>
              </div>

              {/* Right Column: Hormonal response & Clinical Significance */}
              <div className="space-y-4">
                <div className="bg-amber-50/70 border border-amber-100 p-4 rounded-xl">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5 mb-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-600" />
                    Đáp Ứng Nội Tiết Hormone Chu Kỳ
                  </h5>
                  <p className="text-xs text-amber-950 leading-relaxed">
                    {currentLayer.hormonalResponse}
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800 shadow-md">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-teal-300 flex items-center gap-1.5 mb-2">
                    <ShieldAlert className="w-4 h-4 text-teal-400" />
                    Ý Nghĩa Bệnh Học & Can Thiệp Lâm Sàng
                  </h5>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {currentLayer.clinicalSignificance}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Part 2: Menstrual Cycle Timeline */}
        <div className="space-y-6 pt-6 border-t border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-rose-700 text-xs font-bold uppercase tracking-wider mb-1">
              <Clock className="w-4 h-4" />
              <span>Động Học Nội Tiết & Siêu Âm</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              Chu Kỳ Biến Đổi Nội Mạc & "Cửa Sổ Làm Tổ" (Window of Implantation - WOI)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Chọn từng giai đoạn chu kỳ để quan sát sự chuyển hóa mô bệnh học, hình ảnh siêu âm tương ứng và tầng tín hiệu phân tử.
            </p>
          </div>

          {/* Timeline Phase Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {menstrualCyclePhases.map((phase) => {
              const isActive = selectedPhaseId === phase.id;
              const isWOI = phase.id === 'mid_secretory_woi';
              return (
                <button
                  key={phase.id}
                  onClick={() => setSelectedPhaseId(phase.id)}
                  className={`p-3 rounded-xl text-left border transition-all relative ${
                    isActive
                      ? isWOI 
                        ? 'bg-rose-900 text-white border-rose-600 ring-2 ring-rose-400 shadow-md'
                        : 'bg-slate-900 text-white border-slate-700 ring-2 ring-teal-500 shadow-md'
                      : isWOI
                        ? 'bg-rose-50 text-rose-900 border-rose-200 hover:bg-rose-100/70'
                        : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {isWOI && (
                    <span className="absolute -top-2 right-2 bg-rose-600 text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded-full uppercase shadow">
                      WOI Phôi
                    </span>
                  )}
                  <div className="text-[10px] font-bold uppercase tracking-wider opacity-75">
                    {phase.days.split(' ')[0]} {phase.days.split(' ')[1]}
                  </div>
                  <div className="font-bold text-xs mt-1 line-clamp-2">{phase.vietnameseName}</div>
                  <div className={`text-[10px] font-mono mt-1 ${isActive ? 'text-teal-300' : 'text-slate-500'}`}>
                    ET: {phase.endometrialThickness.split(' ')[0]} mm
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Phase Information Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">{currentPhase.name}</span>
                <h4 className="text-2xl font-black text-slate-900 mt-0.5">{currentPhase.vietnameseName}</h4>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 font-semibold text-slate-700">
                    ⏱ Thời gian: {currentPhase.days}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-teal-50 font-semibold text-teal-800 border border-teal-200">
                    📏 Bề dày niêm mạc (ET): {currentPhase.endometrialThickness}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-rose-50 font-semibold text-rose-800 border border-rose-200">
                    🧪 Hormone thống trị: {currentPhase.dominantHormone}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Histological Hallmark */}
              <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-teal-600" />
                  Đặc Điểm Mô Bệnh Học Vi Thể
                </h5>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {currentPhase.histologicalFeatures.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ultrasound Findings & Molecular */}
              <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-3">
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5 mb-1.5">
                    <Activity className="w-3.5 h-3.5 text-rose-600" />
                    Hình Thái Siêu Âm Phụ Khoa (TVUS)
                  </h5>
                  <p className="text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/70 font-medium">
                    {currentPhase.ultrasoundPattern}
                  </p>
                </div>

                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5 mb-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-600" />
                    Tầng Tín Hiệu & Dấu Ấn Phân Tử
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {currentPhase.molecularSignaling.map((mol, i) => (
                      <span key={i} className="text-[11px] bg-amber-50 text-amber-900 border border-amber-200/80 px-2 py-0.5 rounded font-mono">
                        {mol}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Clinical Relevance in IVF */}
              <div className="bg-teal-950 text-white p-5 rounded-xl border border-teal-800 flex flex-col justify-between">
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-teal-300 flex items-center gap-1.5 mb-2">
                    <Info className="w-4 h-4 text-teal-400" />
                    Ứng Dụng Lâm Sàng & Thụ Tinh IVF
                  </h5>
                  <p className="text-xs text-teal-100 leading-relaxed">
                    {currentPhase.clinicalRelevance}
                  </p>
                </div>

                {currentPhase.id === 'mid_secretory_woi' && (
                  <div className="mt-4 pt-3 border-t border-teal-800/80 text-[11px] text-teal-200 bg-teal-900/60 p-2.5 rounded-lg">
                    💡 <strong>Test ERA (Endometrial Receptivity Analysis):</strong> Phân tích 248 gen biểu hiện trong niêm mạc để định lượng chính xác giờ mở cửa sổ làm tổ cho phôi (Early receptive, Receptive, Post-receptive).
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
