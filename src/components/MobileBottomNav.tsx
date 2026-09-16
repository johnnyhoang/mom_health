import React, { useState } from 'react';
import { 
  ListOrdered, 
  HelpCircle, 
  X, 
  ChevronUp, 
  BookOpen, 
  Activity, 
  Sparkles, 
  UserCheck 
} from 'lucide-react';

interface MobileBottomNavProps {
  onJumpToSection: (sectionId: string) => void;
  activeSection: string;
  currentView?: 'monograph' | 'qa' | 'doctors';
  onSwitchView?: (view: 'monograph' | 'qa' | 'doctors') => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  onJumpToSection,
  activeSection,
  currentView = 'monograph',
  onSwitchView
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const chapters = [
    { id: 'chapter-1', title: 'Chương 1: Giải Mã "Nghịch Lý Tamoxifen"', desc: 'Cơ chế SERM: Chặn ở tuyến vú nhưng kích thích ở tử cung' },
    { id: 'chapter-2', title: 'Chương 2: Giải Mã 4 Hồ Sơ Bệnh Án & GPB Thực Tế', desc: 'Soi phiếu Hùng Vương & Tâm Anh: Tăng sản điển hình LÀNH TÍNH' },
    { id: 'chapter-3', title: 'Chương 3: Căn Nguyên Gây Rong Kinh: "Bộ Tứ Tác Động"', desc: 'Tăng sản tuyến, Adenomyosis thành sau, U xơ 45mm & Tuổi 45' },
    { id: 'chapter-4', title: 'Chương 4: So Sánh 4 Hướng Điều Trị An Toàn K Vú', desc: 'Mổ nội soi bảo tồn buồng trứng, nội soi buồng tử cung, vòng Mirena' },
    { id: 'chapter-5', title: 'Chương 5: Video Thủ Thuật & Mổ Thực Tế', desc: 'Xem video nội soi buồng tử cung, phẫu thuật nội soi, sinh thiết' },
    { id: 'chapter-6', title: 'Chương 6: Cây Quyết Định Cá Thể Hóa', desc: 'Tự đánh giá theo triệu chứng & nhận câu hỏi chuẩn cho Bác sĩ' },
    { id: 'chapter-7', title: 'Chương 7: Chăm Sóc Sức Khỏe & Tái Khám', desc: 'Dinh dưỡng bổ máu, bảo vệ xương khớp & tầm soát kép định kỳ' }
  ];

  const handleJump = (id: string) => {
    setIsDrawerOpen(false);
    if (currentView !== 'monograph' && onSwitchView) {
      onSwitchView('monograph');
    }
    onJumpToSection(id);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Bottom Nav Bar (Sticky on all mobile & desktop viewports) */}
      <div className="fixed bottom-3 inset-x-0 z-40 px-2 sm:px-6 pointer-events-none flex justify-center">
        <nav className="pointer-events-auto bg-slate-900/95 backdrop-blur-lg border border-slate-700/80 shadow-2xl rounded-2xl px-2 py-1.5 flex items-center gap-1 text-white max-w-lg w-full justify-between">
          
          {/* Mục Lục Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="flex flex-col items-center justify-center py-1 px-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex-1"
          >
            <ListOrdered className="w-4 h-4 text-teal-400" />
            <span className="text-[10px] font-bold mt-0.5">Mục Lục</span>
          </button>

          {/* Sách / Chuyên Khảo */}
          <button
            onClick={() => {
              if (onSwitchView) onSwitchView('monograph');
              handleJump('chapter-1');
            }}
            className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-colors flex-1 ${
              currentView === 'monograph' 
                ? 'bg-teal-950 text-teal-300 font-bold border border-teal-800' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4 text-teal-400" />
            <span className="text-[10px] font-bold mt-0.5">Sách Đọc</span>
          </button>

          {/* 4 Cách Chữa */}
          <button
            onClick={() => handleJump('chapter-4')}
            className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-colors flex-1 ${
              currentView === 'monograph' && activeSection === 'chapter-4' 
                ? 'bg-emerald-950 text-emerald-300 font-bold border border-emerald-800' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Activity className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] font-bold mt-0.5">4 Phác Đồ</span>
          </button>

          {/* Tập Q&A Button */}
          <button
            onClick={() => {
              if (onSwitchView) {
                onSwitchView('qa');
              }
            }}
            className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-colors flex-1 ${
              currentView === 'qa' 
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <HelpCircle className={`w-4 h-4 ${currentView === 'qa' ? 'text-slate-950' : 'text-amber-400'}`} />
            <span className="text-[10px] font-bold mt-0.5">Q&A (16)</span>
          </button>

          {/* Top 10 Bác Sĩ Button */}
          <button
            onClick={() => {
              if (onSwitchView) {
                onSwitchView('doctors');
              }
            }}
            className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-colors flex-1 ${
              currentView === 'doctors' 
                ? 'bg-teal-500 text-slate-950 font-bold shadow-md' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <UserCheck className={`w-4 h-4 ${currentView === 'doctors' ? 'text-slate-950' : 'text-teal-400'}`} />
            <span className="text-[10px] font-bold mt-0.5">Top Bác Sĩ</span>
          </button>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            title="Lên đầu trang"
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors ml-0.5 hidden sm:flex items-center justify-center"
          >
            <ChevronUp className="w-4 h-4" />
          </button>

        </nav>
      </div>

      {/* Slide-up Table of Contents Drawer Modal */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex flex-col justify-end animate-fade-in"
          onClick={() => setIsDrawerOpen(false)}
        >
          <div 
            className="bg-slate-900 border-t border-slate-700 w-full max-h-[85vh] rounded-t-3xl p-5 overflow-y-auto text-white space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Handle & Header */}
            <div className="w-12 h-1.5 bg-slate-700 rounded-full mx-auto mb-2" />
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-teal-400" />
                <h3 className="font-bold text-base text-white">Mục Lục Toàn Bộ Ứng Dụng</h3>
              </div>
              <button 
                onClick={() => setIsDrawerOpen(false)}
                className="p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Links in Drawer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setIsDrawerOpen(false);
                  if (onSwitchView) onSwitchView('qa');
                }}
                className="w-full p-3 rounded-2xl bg-amber-950/40 border border-amber-500/40 text-left flex items-center justify-between group hover:bg-amber-900/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <HelpCircle className="w-5 h-5 text-amber-400" />
                  <div>
                    <div className="text-xs font-bold text-amber-300">Tập Q&A Hỏi - Đáp (16 Câu)</div>
                    <div className="text-[10px] text-amber-200/80">Tra cứu nhanh câu hỏi đi khám</div>
                  </div>
                </div>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </button>

              <button
                onClick={() => {
                  setIsDrawerOpen(false);
                  if (onSwitchView) onSwitchView('doctors');
                }}
                className="w-full p-3 rounded-2xl bg-teal-950/40 border border-teal-500/40 text-left flex items-center justify-between group hover:bg-teal-900/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <UserCheck className="w-5 h-5 text-teal-400" />
                  <div>
                    <div className="text-xs font-bold text-teal-300">Top 10 Bác Sĩ Phụ Khoa & Ung Bướu</div>
                    <div className="text-[10px] text-teal-200/80">Lịch khám, địa chỉ & SĐT đặt hẹn</div>
                  </div>
                </div>
                <Sparkles className="w-4 h-4 text-teal-400" />
              </button>
            </div>

            {/* Chapter Jump List */}
            <div className="space-y-2 pt-1 border-t border-slate-800">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
                Các Chương Trong Sách Chuyên Khảo:
              </div>
              {chapters.map((chap, idx) => (
                <button
                  key={chap.id}
                  onClick={() => handleJump(chap.id)}
                  className="w-full text-left p-3 rounded-2xl bg-slate-800/80 hover:bg-teal-950/80 border border-slate-700/80 hover:border-teal-500/50 transition-all flex items-start gap-3 group"
                >
                  <span className="w-7 h-7 rounded-xl bg-teal-600/20 border border-teal-500/40 text-teal-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-100 group-hover:text-teal-300 transition-colors">
                      {chap.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                      {chap.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-2 text-center text-xs text-slate-500">
              Chạm vào bất kỳ mục nào để chuyển trang ngay
            </div>
          </div>
        </div>
      )}
    </>
  );
};
