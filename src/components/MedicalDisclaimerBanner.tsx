import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

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
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-2 pb-1 font-sans">
      <div className="rounded-xl border border-amber-500/30 bg-amber-950/20">
        <button
          onClick={() => setExpanded(v => !v)}
          className="w-full flex items-center justify-between p-2.5 sm:px-3.5 text-left hover:bg-amber-950/30 transition-colors cursor-pointer"
          aria-expanded={expanded}
        >
          <div className="flex items-center gap-2 text-xs text-amber-300 font-medium">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Tham khảo y khoa ({specialty}) • {lastUpdated}</span>
          </div>
          <span className="text-[11px] text-amber-400/80 flex items-center gap-1 font-sans">
            {expanded ? 'Thu gọn' : 'Chi tiết'}
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </span>
        </button>

        {expanded && (
          <div className="px-3 pb-3 pt-1 border-t border-amber-500/20 text-xs text-amber-200/80 leading-relaxed space-y-1.5 font-sans">
            <p>• <strong>Nguồn thông tin:</strong> Biên soạn theo {primaryGuideline} và các thử nghiệm lâm sàng bình duyệt.</p>
            <p>• <strong>Khuyến cáo:</strong> Thông tin học thuật không thay thế cho chẩn đoán và chỉ định điều trị trực tiếp từ bác sĩ chuyên khoa.</p>
          </div>
        )}
      </div>
    </div>
  );
};
