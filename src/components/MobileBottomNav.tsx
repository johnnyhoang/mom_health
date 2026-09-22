import React, { useState } from 'react';
import { 
  ListOrdered, 
  HelpCircle, 
  X, 
  ChevronUp, 
  UserCheck,
  Ribbon,
  Stethoscope,
  Bone,
  Footprints,
  Activity,
  Eye
} from 'lucide-react';

interface MobileBottomNavProps {
  onJumpToSection: (sectionId: string) => void;
  activeSection: string;
  currentView?: 'ankle_trauma' | 'cervical_spine' | 'breast_cancer' | 'monograph' | 'chronic_back_pain' | 'vision_myopia' | 'qa' | 'doctors';
  onSwitchView?: (view: 'ankle_trauma' | 'cervical_spine' | 'breast_cancer' | 'monograph' | 'chronic_back_pain' | 'vision_myopia' | 'qa' | 'doctors') => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  onJumpToSection,
  activeSection,
  currentView = 'vision_myopia',
  onSwitchView
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const visionChapters = [
    { id: 'vision-ch-1', title: 'Chương 1: Bản Chất Thật Sự Của Tăng Độ Cận & Trục Nhãn Cầu', desc: 'Sự dài ra trục mắt (Axial Elongation), nghịch lý kính đơn tròng gây Defocus võng mạc ngoại vi' },
    { id: 'vision-ch-2', title: 'Chương 2: Giải Mã Độ Loạn Thị Đi Kèm & Canh Tâm 3D', desc: 'Khúc xạ hình trụ, hiệu chỉnh Cylinder/Axis và yêu cầu lấy tâm đồng tử PD/FH chính xác 0.1mm' },
    { id: 'vision-ch-3', title: 'Chương 3: Nghiên Cứu Y Học & 4 Công Nghệ Tròng Defocus', desc: 'JAMA Ophthalmology & BJO: H.A.L.T (67%), D.I.M.S (60%), C.A.R.E, so sánh Ortho-K & Atropine' },
    { id: 'vision-ch-4', title: 'Chương 4: Top Thương Hiệu Tròng Kính Tại VN (2026)', desc: 'Essilor Stellest, Hoya MiYOSMART, Zeiss MyoCare S, Rodenstock MyCon, Chemi Myo' },
    { id: 'vision-ch-5', title: 'Chương 5: Phác Đồ "Tam Giác Vàng" Cá Thể Hóa Tuổi Dậy Thì', desc: 'Tròng Stellest/MyoCare S + Quy tắc 20-20-20 + Hoạt động ngoài trời >= 2h/ngày + Đo trục nhãn cầu' },
    { id: 'vision-ch-6', title: 'Chương 6: Cẩm Nang Hỏi Đáp & Câu Hỏi Chuẩn Bị Cho Bác Sĩ', desc: 'Giải đáp thắc mắc thường gặp và câu hỏi chuyên sâu mang theo khi đi khám khúc xạ' },
    { id: 'vision-ch-7', title: 'Chương 7: Dinh Dưỡng Nuôi Võng Mạc & Tài Liệu Quốc Tế', desc: 'Lutein, Zeaxanthin, Omega-3 DHA, hướng dẫn IMI 2024 & AAO' }
  ];

  const backPainChapters = [
    { id: 'bp-ch-1', title: 'Chương 1: Giải Mã Hiện Tượng Ngứa Ran & Bệnh Sử Tuổi 25', desc: 'Thuyết cổng kiểm soát, nhánh thần kinh bì lưng sau (Notalgia Paresthetica)' },
    { id: 'bp-ch-2', title: 'Chương 2: Tương Quan Tam Giác: Đau Lưng – Tử Cung – K Vú', desc: 'Đau quy chiếu từ Adenomyosis/U xơ 45mm, Prostaglandin F2a, không di căn xương' },
    { id: 'bp-ch-3', title: 'Chương 3: Chuỗi Động Lực Cột Sống & Bí Mật Kê Gối Khi Ngủ', desc: 'Bù trừ cơ học từ cổ vai gáy & giải mã kê gối ngủ đỡ nhưng không khỏi' },
    { id: 'bp-ch-4', title: 'Chương 4: Lộ Trình Phục Hồi 3 Giai Đoạn & Bộ 3 McGill Big 3', desc: 'Giải phóng màng cân cơ (MFR), củng cố cơ lõi sâu & gác chân lên tường' },
    { id: 'bp-ch-5', title: 'Chương 5: Atlas Video 3D & Mô Phỏng Giải Phẫu', desc: 'Mô phỏng 3D cơ dựng sống, đường đau tử cung & bài tập cột sống' },
    { id: 'bp-ch-6', title: 'Chương 6: Cây Quyết Định Lâm Sàng Cá Thể Hóa', desc: 'Tự đánh giá phân loại cơn đau & câu hỏi chuẩn bị cho Bác sĩ' },
    { id: 'bp-ch-7', title: 'Chương 7: Kỹ Thuật Kê Gối Kép & Dinh Dưỡng Giảm Viêm', desc: 'Gối thắt lưng + gối khoeo chân, Magie Glycinate, B6, Omega-3' }
  ];

  const ankleChapters = [
    { id: 'ankle-ch-1', title: 'Chương 1: Giải Mã Hồ Sơ Chấn Thương X-quang & MRI', desc: 'Gãy 2 mắt cá, lệch mộng chày sên & đứt dây chằng ATFL' },
    { id: 'ankle-ch-2', title: 'Chương 2: Phân Loại Danis-Weber & Tổn Thương Dây Chằng', desc: 'Weber B ngang khớp, toác khớp chày mác Syndesmosis' },
    { id: 'ankle-ch-3', title: 'Chương 3: So Sánh 4 Phác Đồ & Mổ Nẹp Vít ORIF Chuẩn Vàng', desc: 'Nẹp khóa Titanium giải phẫu, dây neo TightRope' },
    { id: 'ankle-ch-4', title: 'Chương 4: Ma Trận An Toàn Tuổi 74 & Phòng Ngừa DVT', desc: 'Thuốc chống đông LMWH, nẹp khóa loãng xương, chống loét gót' },
    { id: 'ankle-ch-5', title: 'Chương 5: Video Atlas 3D Mổ ORIF & Bài Tập Cổ Chân', desc: 'Mô phỏng 3D kết hợp xương & phục hồi chức năng chi dưới' },
    { id: 'ankle-ch-6', title: 'Chương 6: Cây Quyết Định Lâm Sàng & Lộ Trình Tỳ Đè', desc: 'Khuyến nghị cấp cứu chấn thương và các bước tập đi' },
    { id: 'ankle-ch-7', title: 'Chương 7: Cẩm Nang Phục Hồi 4 Giai Đoạn Từ A - Z', desc: 'Thang tỳ đè NWB-PWB-FWB, giày CAM Boot & dinh dưỡng' }
  ];

  const spineChapters = [
    { id: 'spine-ch-1', title: 'Chương 1: Giải Mã 3 Bệnh Án Thực Tế (Cổ, Lưng, ĐHYD)', desc: 'MRI C3/4 5mm & C5/6 3mm chèn ép tủy + L4/5 4mm' },
    { id: 'spine-ch-2', title: 'Chương 2: Bệnh Lý Chèn Ép Tủy Cổ (CSM) & Thiếu Máu Tủy', desc: 'Đường kính ống sống & 3 dấu hiệu cảnh báo đèn đỏ' },
    { id: 'spine-ch-3', title: 'Chương 3: So Sánh 4 Phác Đồ & Mổ ACDF Chuẩn Vàng', desc: 'Mổ lối trước nếp cổ 3cm, không cắt cơ gáy, ngồi dậy sau 24h' },
    { id: 'spine-ch-4', title: 'Chương 4: Ma Trận An Toàn 4 Bệnh Lý Đi Kèm Tuổi 74', desc: 'Loãng xương T-score -2.7, Cường giáp E05, Ống cổ tay G56.0' },
    { id: 'spine-ch-5', title: 'Chương 5: Video Atlas 3D & Bài Tập Phục Hồi Chức Năng', desc: 'Quy trình mổ vi phẫu ACDF 3D & trượt rễ thần kinh' },
    { id: 'spine-ch-6', title: 'Chương 6: Cây Quyết Định Lâm Sàng Cá Thể Hóa', desc: 'Đánh giá mức độ khẩn cấp và câu hỏi cho Bác sĩ Lầu 8A' },
    { id: 'spine-ch-7', title: 'Chương 7: Lộ Trình 6 Tuần Hậu Phẫu & Kỷ Luật Vận Động', desc: 'Đeo nẹp cổ mềm 4-6 tuần, chống loãng xương & chữa lưng L4/5' }
  ];

  const bcChapters = [
    { id: 'bc-chapter-1', title: 'Chương 1: Toàn Cảnh 4 Phân Nhóm Phân Tử K Vú', desc: 'Luminal A, Luminal B, HER2-low, Tam âm & Ki-67' },
    { id: 'bc-chapter-2', title: 'Chương 2: Tamoxifen 5 Năm & Thử Nghiệm 10 Năm (ATLAS)', desc: 'Lợi ích bảo vệ vú và lý do dừng ở 5 năm' },
    { id: 'bc-chapter-3', title: 'Chương 3: Vũ Khí Mới 2024-2026 (CDK4/6i, SERD, ADCs)', desc: 'Ribociclib NATALEE FDA 09/2024, Elacestrant, T-DXd' },
    { id: 'bc-chapter-4', title: 'Chương 4: Đột Phá Điều Trị 2022-2026 (Elacestrant, CDK4/6i BT)', desc: 'Thuốc mới FDA phê duyệt, số liệu trial thực tế, tình trạng VN' },
    { id: 'bc-chapter-5', title: 'Chương 5: Thống Kê Kết Quả Điều Trị 2018-2026', desc: 'Tỷ lệ sống 5 năm, SEER Database, thống kê Việt Nam' },
    { id: 'bc-chapter-6', title: 'Chương 6: Cộng Đồng Bệnh Nhân & Kinh Nghiệm Thực Tế', desc: 'Chia sẻ từ hội nhóm Facebook, kinh nghiệm quản lý tác dụng phụ' },
    { id: 'bc-chapter-7', title: 'Chương 7: Cẩm Nang Năm Thứ 5 Đến Năm Thứ 10', desc: 'Lịch khám, dinh dưỡng, lối sống, dấu hiệu cảnh báo cần biết' },
    { id: 'bc-chapter-8', title: 'Chương 8: Sức Khỏe Tình Dục & Thể Thao Sau K Vú', desc: 'Quan hệ vợ chồng, yoga, chạy bộ, nhảy — bằng chứng khoa học' },
    { id: 'bc-chapter-old4', title: 'Video 3D Liệu Pháp Nhắm Trúng Đích', desc: 'Mô phỏng phân tử CDK4/6i, ADCs Enhertu & Tầm soát kép' },
    { id: 'bc-chapter-old5', title: 'Cây Quyết Định K Vú Cá Thể Hóa', desc: 'Đánh giá chiến lược điều trị và câu hỏi cho Bác sĩ' },
    { id: 'bc-chapter-old6', title: 'Dinh Dưỡng Giảm Viêm & Tầm Soát Trọn Đời', desc: 'Chế độ ăn Địa Trung Hải và lịch tầm soát định kỳ' }
  ];



  const gynChapters = [
    { id: 'chapter-1', title: 'Chương 1: Giải Mã "Nghịch Lý Tamoxifen"', desc: 'Cơ chế SERM: Chặn ở tuyến vú nhưng kích thích ở tử cung' },
    { id: 'chapter-2', title: 'Chương 2: Giải Mã 4 Hồ Sơ Bệnh Án & GPB Thực Tế', desc: 'Soi phiếu Hùng Vương & Tâm Anh: Tăng sản điển hình LÀNH TÍNH' },
    { id: 'chapter-3', title: 'Chương 3: Căn Nguyên Gây Rong Kinh: "Bộ Tứ Tác Động"', desc: 'Tăng sản tuyến, Adenomyosis thành sau, U xơ 45mm & Tuổi 45' },
    { id: 'chapter-4', title: 'Chương 4: So Sánh 4 Hướng Điều Trị & Ma Trận K Vú', desc: 'Mổ nội soi bảo tồn buồng trứng, nội soi buồng tử cung, vòng Mirena' },
    { id: 'chapter-5', title: 'Chương 5: Video Thủ Thuật & Mổ Thực Tế', desc: 'Xem video nội soi buồng tử cung, phẫu thuật nội soi, sinh thiết' },
    { id: 'chapter-6', title: 'Chương 6: Cây Quyết Định Cá Thể Hóa', desc: 'Tự đánh giá theo triệu chứng & nhận câu hỏi chuẩn cho Bác sĩ' },
    { id: 'chapter-7', title: 'Chương 7: Chăm Sóc Sức Khỏe & Tái Khám', desc: 'Dinh dưỡng bổ máu, bảo vệ xương khớp & tầm soát kép định kỳ' }
  ];

  const handleJump = (id: string, targetModule: 'ankle_trauma' | 'cervical_spine' | 'breast_cancer' | 'monograph' | 'chronic_back_pain' | 'vision_myopia') => {
    setIsDrawerOpen(false);
    if (currentView !== targetModule && onSwitchView) {
      onSwitchView(targetModule);
    }
    setTimeout(() => {
      onJumpToSection(id);
    }, 80);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Bottom Nav Bar */}
      <div className="fixed bottom-3 inset-x-0 z-40 px-2 sm:px-6 pointer-events-none flex justify-center">
        <nav className="pointer-events-auto bg-slate-900 border border-slate-800 shadow-xl rounded-xl px-3 py-1.5 flex items-center gap-2 text-white max-w-md w-full justify-between">
          {/* Tủ Sách / Mục Lục Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-all flex-1 cursor-pointer ${
              currentView !== 'qa' && currentView !== 'doctors'
                ? 'bg-teal-500 text-slate-950 font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <ListOrdered className={`w-4 h-4 ${currentView !== 'qa' && currentView !== 'doctors' ? 'text-slate-950' : 'text-teal-400'}`} />
            <span className="text-[10px] font-bold mt-0.5">Tủ Sách</span>
          </button>

          {/* Q&A Button */}
          <button
            onClick={() => {
              if (onSwitchView) onSwitchView('qa');
            }}
            className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-lg transition-colors flex-1 cursor-pointer ${
              currentView === 'qa' 
                ? 'bg-amber-400 text-slate-950 font-bold' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <HelpCircle className={`w-4 h-4 ${currentView === 'qa' ? 'text-slate-950' : 'text-amber-300'}`} />
            <span className="text-[10px] font-bold mt-0.5">Q&A</span>
          </button>

          {/* Doctors Button */}
          <button
            onClick={() => {
              if (onSwitchView) onSwitchView('doctors');
            }}
            className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-lg transition-colors flex-1 cursor-pointer ${
              currentView === 'doctors' 
                ? 'bg-rose-500 text-white font-bold' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <UserCheck className={`w-4 h-4 ${currentView === 'doctors' ? 'text-white' : 'text-rose-400'}`} />
            <span className="text-[10px] font-bold mt-0.5">Bác Sĩ</span>
          </button>
        </nav>
      </div>

      {/* Slide-over Table of Contents Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-sm bg-slate-900 border-l border-slate-800 h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-200">
            {/* Drawer Header */}
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-black text-base">
                <ListOrdered className="w-5 h-5 text-indigo-400" />
                <span>Mục Lục 5 Chuyên Khảo</span>
              </div>
              <button 
                onClick={() => setIsDrawerOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chapters List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {/* Vision Chapters */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 px-2">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Chuyên Khảo Thị Lực Học Đường (7 Chương)</span>
                </div>
                <div className="space-y-1">
                  {visionChapters.map((ch, idx) => {
                    const isActive = activeSection === ch.id;
                    return (
                      <button
                        key={ch.id}
                        onClick={() => handleJump(ch.id, 'vision_myopia')}
                        className={`w-full text-left p-2.5 rounded-xl transition-all group flex items-start gap-2.5 cursor-pointer ${
                          isActive 
                            ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300' 
                            : 'hover:bg-slate-800/80 border border-transparent'
                        }`}
                      >
                        <span className={`flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold shrink-0 mt-0.5 ${
                          isActive ? 'bg-cyan-500 text-slate-950' : 'bg-cyan-500/20 text-cyan-300'
                        }`}>
                          {idx + 1}
                        </span>
                        <div>
                          <div className={`text-xs font-bold transition-colors ${
                            isActive ? 'text-cyan-300' : 'text-slate-200 group-hover:text-cyan-300'
                          }`}>
                            {ch.title}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1">
                            {ch.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Back Pain Chapters */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 px-2">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Chuyên Khảo Đau Lưng Kinh Niên (7 Chương)</span>
                </div>
                <div className="space-y-1">
                  {backPainChapters.map((ch, idx) => {
                    const isActive = activeSection === ch.id;
                    return (
                      <button
                        key={ch.id}
                        onClick={() => handleJump(ch.id, 'chronic_back_pain')}
                        className={`w-full text-left p-2.5 rounded-xl transition-all group flex items-start gap-2.5 cursor-pointer ${
                          isActive 
                            ? 'bg-indigo-500/20 border border-indigo-500/40 text-indigo-300' 
                            : 'hover:bg-slate-800/80 border border-transparent'
                        }`}
                      >
                        <span className={`flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold shrink-0 mt-0.5 ${
                          isActive ? 'bg-indigo-500 text-white' : 'bg-indigo-500/20 text-indigo-300'
                        }`}>
                          {idx + 1}
                        </span>
                        <div>
                          <div className={`text-xs font-bold transition-colors ${
                            isActive ? 'text-indigo-300' : 'text-slate-200 group-hover:text-indigo-300'
                          }`}>
                            {ch.title}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1">
                            {ch.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Ankle Chapters */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 px-2">
                  <Footprints className="w-3.5 h-3.5" />
                  <span>Chuyên Khảo Mắt Cá & Phục Hồi (7 Chương)</span>
                </div>
                <div className="space-y-1">
                  {ankleChapters.map((ch, idx) => {
                    const isActive = activeSection === ch.id;
                    return (
                      <button
                        key={ch.id}
                        onClick={() => handleJump(ch.id, 'ankle_trauma')}
                        className={`w-full text-left p-2.5 rounded-xl transition-all group flex items-start gap-2.5 cursor-pointer ${
                          isActive 
                            ? 'bg-rose-500/20 border border-rose-500/40 text-rose-300' 
                            : 'hover:bg-slate-800/80 border border-transparent'
                        }`}
                      >
                        <span className={`flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold shrink-0 mt-0.5 ${
                          isActive ? 'bg-rose-500 text-white' : 'bg-rose-500/20 text-rose-300'
                        }`}>
                          {idx + 1}
                        </span>
                        <div>
                          <div className={`text-xs font-bold transition-colors ${
                            isActive ? 'text-rose-300' : 'text-slate-200 group-hover:text-rose-300'
                          }`}>
                            {ch.title}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1">
                            {ch.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Spine Chapters */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 px-2">
                  <Bone className="w-3.5 h-3.5" />
                  <span>Chuyên Khảo Cột Sống Cổ (7 Chương)</span>
                </div>
                <div className="space-y-1">
                  {spineChapters.map((ch, idx) => {
                    const isActive = activeSection === ch.id;
                    return (
                      <button
                        key={ch.id}
                        onClick={() => handleJump(ch.id, 'cervical_spine')}
                        className={`w-full text-left p-2.5 rounded-xl transition-all group flex items-start gap-2.5 cursor-pointer ${
                          isActive 
                            ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300' 
                            : 'hover:bg-slate-800/80 border border-transparent'
                        }`}
                      >
                        <span className={`flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold shrink-0 mt-0.5 ${
                          isActive ? 'bg-amber-500 text-slate-950' : 'bg-amber-500/20 text-amber-300'
                        }`}>
                          {idx + 1}
                        </span>
                        <div>
                          <div className={`text-xs font-bold transition-colors ${
                            isActive ? 'text-amber-300' : 'text-slate-200 group-hover:text-amber-300'
                          }`}>
                            {ch.title}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1">
                            {ch.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Breast Cancer Chapters */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 px-2">
                  <Ribbon className="w-3.5 h-3.5" />
                  <span>Chuyên Khảo Ung Thư Vú (6 Chương)</span>
                </div>
                <div className="space-y-1">
                  {bcChapters.map((ch, idx) => {
                    const isActive = activeSection === ch.id;
                    return (
                      <button
                        key={ch.id}
                        onClick={() => handleJump(ch.id, 'breast_cancer')}
                        className={`w-full text-left p-2.5 rounded-xl transition-all group flex items-start gap-2.5 cursor-pointer ${
                          isActive 
                            ? 'bg-rose-500/20 border border-rose-500/40 text-rose-300' 
                            : 'hover:bg-slate-800/80 border border-transparent'
                        }`}
                      >
                        <span className={`flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold shrink-0 mt-0.5 ${
                          isActive ? 'bg-rose-500 text-white' : 'bg-rose-500/20 text-rose-300'
                        }`}>
                          {idx + 1}
                        </span>
                        <div>
                          <div className={`text-xs font-bold transition-colors ${
                            isActive ? 'text-rose-300' : 'text-slate-200 group-hover:text-rose-300'
                          }`}>
                            {ch.title}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1">
                            {ch.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Gynecology Chapters */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400 px-2">
                  <Stethoscope className="w-3.5 h-3.5" />
                  <span>Chuyên Khảo Phụ Khoa & Tamoxifen (7 Chương)</span>
                </div>
                <div className="space-y-1">
                  {gynChapters.map((ch, idx) => {
                    const isActive = activeSection === ch.id;
                    return (
                      <button
                        key={ch.id}
                        onClick={() => handleJump(ch.id, 'monograph')}
                        className={`w-full text-left p-2.5 rounded-xl transition-all group flex items-start gap-2.5 cursor-pointer ${
                          isActive 
                            ? 'bg-teal-500/20 border border-teal-500/40 text-teal-300' 
                            : 'hover:bg-slate-800/80 border border-transparent'
                        }`}
                      >
                        <span className={`flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold shrink-0 mt-0.5 ${
                          isActive ? 'bg-teal-500 text-slate-950' : 'bg-teal-500/20 text-teal-300'
                        }`}>
                          {idx + 1}
                        </span>
                        <div>
                          <div className={`text-xs font-bold transition-colors ${
                            isActive ? 'text-teal-300' : 'text-slate-200 group-hover:text-teal-300'
                          }`}>
                            {ch.title}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1">
                            {ch.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={scrollToTop}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <ChevronUp className="w-4 h-4" />
                <span>Lên Đầu Trang</span>
              </button>
              <button
                onClick={() => {
                  setIsDrawerOpen(false);
                  if (onSwitchView) onSwitchView('qa');
                }}
                className="text-xs text-rose-400 font-bold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Xem Q&A Tổng Hợp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
