import React from 'react';
import { 
  Microscope, 
  FileText, 
  ArrowRight, 
  HeartPulse,
  Award
} from 'lucide-react';

interface HeroSectionProps {
  onNavigateTab: (tab: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigateTab }) => {
  return (
    <div className="relative w-full overflow-hidden bg-slate-950 text-white border-b border-slate-800">
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(13,148,136,0.25),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Medical Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/30 text-teal-300 text-xs font-semibold mb-6 shadow-inner">
            <Award className="w-4 h-4 text-teal-400" />
            <span>Chuyên khảo Nghiên cứu Y học Cổ điển & Phân tử – Cập nhật Hướng dẫn Quốc tế 2026</span>
          </div>

          {/* Main Title & Subtitle */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Nghiên Cứu Chuyên Sâu Toàn Diện Về{' '}
                <span className="bg-gradient-to-r from-rose-400 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                  Nội Mạc Tử Cung
                </span>
              </h1>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                Khảo cứu chi tiết từ cấp độ mô học vi thể, động học chu kỳ kinh nguyệt, biến đổi phân tử gen đến toàn cảnh 7 nhóm bệnh lý phức tạp (Lạc nội mạc tử cung, Tăng sinh EIN, Polyp, Ung thư biểu mô FIGO 2023, Viêm mạn tính CD138, Asherman, Niêm mạc mỏng). Hệ thống tầm soát, phác đồ điều trị và dữ liệu hình ảnh/video lâm sàng thực tế 100% y chứng.
              </p>

              {/* Quick Action Navigation Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => onNavigateTab('pathology')}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-rose-950/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <HeartPulse className="w-4 h-4" />
                  <span>Khám Phá 7 Nhóm Bệnh Lý & Rủi Ro</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigateTab('decision')}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-teal-500/40 text-teal-300 text-xs sm:text-sm font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Microscope className="w-4 h-4 text-teal-400" />
                  <span>Cây Quyết Định Lâm Sàng AUB</span>
                </button>

                <button
                  onClick={() => onNavigateTab('media')}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 text-xs sm:text-sm font-medium transition-all"
                >
                  <FileText className="w-4 h-4 text-slate-400" />
                  <span>Atlas Ảnh & Video Mổ</span>
                </button>
              </div>
            </div>

            {/* Quick Evidence Metrics Cards */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl backdrop-blur-sm">
                <div className="text-xs text-slate-400 font-medium">Độ dày cắt sau mãn kinh</div>
                <div className="text-2xl font-bold text-teal-400 mt-1">≤ 4.0 mm</div>
                <div className="text-[11px] text-slate-400 mt-0.5">ACOG Cut-off loại trừ K</div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl backdrop-blur-sm">
                <div className="text-xs text-slate-400 font-medium">Nguy cơ K trong EIN/AEH</div>
                <div className="text-2xl font-bold text-rose-400 mt-1">25 - 43%</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Đồng tồn ung thư xâm lấn</div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl backdrop-blur-sm">
                <div className="text-xs text-slate-400 font-medium">Viêm mạn CD138 trong RIF</div>
                <div className="text-2xl font-bold text-amber-400 mt-1">30 - 60%</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Thất bại làm tổ IVF</div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl backdrop-blur-sm">
                <div className="text-xs text-slate-400 font-medium">Ngưỡng niêm mạc chuẩn IVF</div>
                <div className="text-2xl font-bold text-emerald-400 mt-1">≥ 8 - 12mm</div>
                <div className="text-[11px] text-slate-400 mt-0.5">3 lá + Tưới máu Zone 3/4</div>
              </div>
            </div>

          </div>

          {/* Guidelines Source Ticker */}
          <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-300">Đồng thuận y khoa chuẩn:</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">FIGO 2023</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">ACOG Practice Bulletins</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">ESHRE Endometriosis 2022</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">NCCN 2024</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">IETA Consensus</span>
            </div>
            <div className="text-[11px] text-teal-400/90 italic">
              "100% Dữ liệu Y học Thực chứng • Không giả lập • Không suy đoán"
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
