import React from 'react';
import { ShieldCheck, HeartPulse } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 border-t border-slate-800 text-xs py-8 font-sans">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-slate-800">
          
          {/* Col 1: Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-teal-600/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
                <HeartPulse className="w-4 h-4" />
              </div>
              <span className="text-white font-bold text-sm tracking-tight">
                HEALTH ATLAS • HỒ SƠ Y KHOA GIA ĐÌNH
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Hệ thống chuyên khảo y khoa thực chứng, tổng hợp các phác đồ và hướng dẫn lâm sàng chuẩn quốc tế (ASCO, NCCN, ACOG, IMI, AAOS, NASS).
            </p>
          </div>

          {/* Col 2: Standard Guidelines */}
          <div className="space-y-1.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Nguồn Dữ Liệu & Hướng Dẫn</h4>
            <ul className="space-y-1 text-xs text-slate-400">
              <li>• ASCO / NCCN Guidelines (2024–2026)</li>
              <li>• International Myopia Institute (IMI 2021–2024)</li>
              <li>• AAOS / AOFAS &amp; NASS Spine Guidelines</li>
              <li>• BV Hùng Vương, BV Từ Dũ, BV ĐHYD, BV Mắt TP.HCM</li>
            </ul>
          </div>

          {/* Col 3: Disclaimer brief */}
          <div className="space-y-1.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>Miễn Trừ Trách Nhiệm Y Khoa</span>
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Thông tin phục vụ nghiên cứu học thuật và tham khảo chuyên môn gia đình, không thay thế cho thăm khám và chỉ định điều trị trực tiếp từ bác sĩ chuyên khoa.
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© 2026 MOM Health Atlas.</span>
          <span className="text-teal-400 font-mono text-[11px]">Evidence-Based Clinical Edition</span>
        </div>

      </div>
    </footer>
  );
};
