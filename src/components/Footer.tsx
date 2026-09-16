import React from 'react';
import { ShieldCheck, HeartPulse } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 border-t border-slate-800 text-xs py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800/80">
          
          {/* Col 1: About */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-600/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
                <HeartPulse className="w-4 h-4" />
              </div>
              <span className="text-white font-bold text-base tracking-tight">
                K VÚ & TỬ CUNG ATLAS • CHUYÊN KHẢO Y KHOA THỰC CHỨNG
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-lg">
              Hệ thống chuyên khảo y khoa cá thể hóa cho bệnh nhân sau 5 năm Tamoxifen (K Vú). Tổng hợp và chuẩn hóa theo các hướng dẫn lâm sàng cập nhật nhất từ Hiệp hội Ung thư Lâm sàng Hoa Kỳ (ASCO 2024/2026), Mạng lưới Ung thư Quốc gia Hoa Kỳ (NCCN 2024/2026), Hiệp hội Ung thư Châu Âu (ESMO), Hội Sản Phụ Khoa Hoa Kỳ (ACOG) và Liên đoàn Sản Phụ Khoa Quốc tế (FIGO).
            </p>
          </div>

          {/* Col 2: Standard Guidelines */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Hướng Dẫn & Nguồn Uy Tín</h4>
            <ul className="space-y-1.5 text-[11px] text-slate-400">
              <li>• ASCO / NCCN Breast Cancer Guidelines (2024–2026)</li>
              <li>• FDA Drug Approvals (Ribociclib NATALEE 09/2024)</li>
              <li>• ESMO Clinical Practice Guidelines</li>
              <li>• ACOG Practice Bulletin (AUB/PMB & Tamoxifen)</li>
              <li>• BV Hùng Vương, BV Từ Dũ, BV Ung Bướu TP.HCM</li>
            </ul>
          </div>

          {/* Col 3: Principles */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Nguyên Tắc Y Khoa</h4>
            <ul className="space-y-1.5 text-[11px] text-slate-400">
              <li>✓ 100% Y học Thực chứng (Evidence-Based)</li>
              <li>✓ Không giả lập, Không phán đoán chủ quan</li>
              <li>✓ Cá thể hóa điều trị theo từng bệnh nhân</li>
              <li>✓ Phối hợp đa chuyên khoa Sản - Phụ - Ung bướu - IVF</li>
            </ul>
          </div>

        </div>

        {/* Medical Disclaimer Banner */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-[11px] text-slate-400 leading-relaxed">
          <strong className="text-teal-400 block mb-1 uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            Tuyên Bố Miễn Trừ Trách Nhiệm Y Khoa (Medical Disclaimer)
          </strong>
          Nội dung trên trang web này được biên soạn cho mục đích nghiên cứu học thuật, tham khảo chuyên môn y khoa và giáo dục sức khỏe sinh sản dựa trên y học thực chứng. Thông tin không thay thế cho việc chẩn đoán, khám trực tiếp và chỉ định điều trị của Bác sĩ chuyên khoa Phụ sản hoặc Ung bướu Phụ khoa. Khi có bất kỳ dấu hiệu ra máu bất thường hoặc đau vùng chậu, bệnh nhân cần đến ngay các cơ sở y tế uy tín để được thăm khám.
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 pt-2">
          <span>© 2026 Endometrium Clinical Atlas. Toàn quyền nghiên cứu y học được bảo lưu.</span>
          <span className="text-teal-400 font-mono">Full-width Clinical Monograph Edition</span>
        </div>

      </div>
    </footer>
  );
};
