import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

interface MedicalDisclaimerBannerProps {
  specialty: string;
  primaryGuideline: string;
  lastUpdated: string;
}

export const MedicalDisclaimerBanner: React.FC<MedicalDisclaimerBannerProps> = ({
  specialty,
  primaryGuideline,
  lastUpdated
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto px-5 sm:px-6 pb-2 pt-1">
      <div className="rounded-2xl border border-amber-500/40 bg-amber-950/30 overflow-hidden">

        <button
          onClick={() => setExpanded(v => !v)}
          className="w-full flex items-start gap-3 p-4 text-left hover:bg-amber-950/20 transition-colors"
          aria-expanded={expanded}
        >
          <ShieldCheck className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                ⚠️ Tuyên Bố Miễn Trừ Trách Nhiệm Y Khoa
              </span>
              {expanded
                ? <ChevronUp className="w-4 h-4 text-amber-400 shrink-0" />
                : <ChevronDown className="w-4 h-4 text-amber-400 shrink-0" />
              }
            </div>
            <p className="text-[11px] text-amber-200/70 mt-0.5 leading-relaxed">
              Nội dung mang tính <strong className="text-amber-300">tham khảo học thuật</strong>, không thay thế chẩn đoán và chỉ định điều trị của Bác sĩ chuyên khoa <strong className="text-amber-300">{specialty}</strong>.
            </p>
          </div>
        </button>

        {expanded && (
          <div className="px-4 pb-4 space-y-3 border-t border-amber-500/20">
            <div className="pt-3 space-y-2 text-[11px] text-amber-100/60 leading-relaxed">
              <p>
                <strong className="text-amber-300">1. Mục đích:</strong> Trang web này được xây dựng cho mục đích <em>giáo dục sức khỏe, tham khảo học thuật và hỗ trợ bệnh nhân hiểu rõ bệnh lý</em> — không phải công cụ chẩn đoán lâm sàng.
              </p>
              <p>
                <strong className="text-amber-300">2. Nguồn gốc thông tin:</strong> Toàn bộ nội dung được tổng hợp và chuẩn hóa theo <strong className="text-amber-200">{primaryGuideline}</strong>, các thử nghiệm lâm sàng được công bố trên tạp chí y khoa bình duyệt (peer-reviewed) và hướng dẫn lâm sàng quốc tế. <em>Không có thông tin từ quảng cáo, thực phẩm chức năng hay phỏng đoán chủ quan của AI.</em>
              </p>
              <p>
                <strong className="text-amber-300">3. Giới hạn:</strong> Y học luôn cập nhật. Cập nhật nội dung lần cuối: <strong className="text-amber-200">{lastUpdated}</strong>. Các hướng dẫn điều trị mới hơn có thể đã được ban hành. Luôn tham khảo bác sĩ trực tiếp để có phác đồ phù hợp cá nhân.
              </p>
              <p>
                <strong className="text-amber-300">4. Khẩn cấp:</strong> Nếu bạn có triệu chứng bất thường cấp tính, hãy đến cơ sở y tế ngay — <em>đừng chỉ đọc tài liệu.</em>
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-amber-400/70">
              <ExternalLink className="w-3 h-3" />
              <span>Xem nguồn tham khảo chi tiết ở cuối bài viết này.</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
