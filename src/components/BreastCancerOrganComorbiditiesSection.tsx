import React, { useState } from 'react';
import { ReadAloudButton } from './ReadAloudButton';
import { 
  Activity, 
  AlertTriangle, 
  ShieldAlert, 
  ShieldCheck, 
  Sparkles, 
  Dna, 
  Apple, 
  Flame, 
  Layers,
  HeartPulse,
  Scale,
  FileText,
  CheckCircle2
} from 'lucide-react';

export const BreastCancerOrganComorbiditiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gut' | 'liver_gall' | 'stomach' | 'metabolic'>('gut');

  return (
    <section id="bc-chapter-9" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-6 border-t border-slate-900">
      
      {/* Chapter Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
          <Activity className="w-4 h-4 text-rose-400" />
          <span>Chương 9 • Y Học Toàn Thân & Đa Cơ Quan</span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
          Tác Động Hai Chiều: Hệ Tiêu Hóa, Gan Mật, Chuyển Hóa (Tiểu Đường, Béo Phì, Gout) & Nguy Cơ Ung Thư Vú
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Ung thư vú không tồn tại biệt lập. Các cơ quan tiêu hóa (ruột, gan, mật, dạ dày) và các bệnh chuyển hóa nền tương tác mật thiết với tế bào u và thuốc điều trị, quyết định nồng độ estrogen nội sinh và nguy cơ tái phát muộn.
        </p>

        <ReadAloudButton
          id="bc-chap-9"
          title="Chương 9: Tác Động Đa Cơ Quan, Tiêu Hóa và Bệnh Chuyển Hóa Đối Với Ung Thư Vú"
          text="Chương 9: Tác động hai chiều giữa hệ tiêu hóa, gan mật, chuyển hóa như tiểu đường, béo phì, gout và nguy cơ ung thư vú. Ngoài tử cung, các cơ quan tiêu hóa đóng vai trò then chốt. Trục ruột - tuyến vú và hệ vi sinh Estrobolome có thể giải phóng estrogen tái hấp thu vào máu nếu bị loạn khuẩn. Gan là nơi chuyển hóa thuốc và dễ bị gan nhiễm mỡ do Tamoxifen. Túi mật và axit mật thứ cấp ảnh hưởng đến tình trạng viêm. Bên cạnh đó, bệnh tiểu đường type 2 làm tăng trục tín hiệu insulin và IGF-1 thúc đẩy tế bào ung thư nhân đôi. Mô mỡ ở người béo phì sản xuất estrogen ngoại vi qua men aromatase và tiết cytokine viêm mạn tính. Nồng độ acid uric cao kích hoạt phức hợp thể viêm NLRP3 làm tăng stress oxy hóa."
          variant="chapter"
          label="Nghe đọc Chương 9"
        />
      </div>

      {/* Navigation Tabs for 4 Systems */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
        <button
          onClick={() => setActiveTab('gut')}
          className={`p-3 rounded-xl text-left text-xs font-bold transition-all flex flex-col justify-between gap-1 cursor-pointer border ${
            activeTab === 'gut'
              ? 'bg-teal-500/20 text-teal-200 border-teal-500/60 shadow-md'
              : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-1.5 text-teal-400">
            <Layers className="w-4 h-4" />
            <span>1. Trục Ruột - Tuyến Vú</span>
          </div>
          <span className="text-[10px] text-slate-400 font-normal">Hệ Gen Estrobolome & Tái hấp thu Estrogen</span>
        </button>

        <button
          onClick={() => setActiveTab('liver_gall')}
          className={`p-3 rounded-xl text-left text-xs font-bold transition-all flex flex-col justify-between gap-1 cursor-pointer border ${
            activeTab === 'liver_gall'
              ? 'bg-amber-500/20 text-amber-200 border-amber-500/60 shadow-md'
              : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-1.5 text-amber-400">
            <Flame className="w-4 h-4" />
            <span>2. Gan & Túi Mật</span>
          </div>
          <span className="text-[10px] text-slate-400 font-normal">Gan nhiễm mỡ NAFLD & Axit mật thứ cấp</span>
        </button>

        <button
          onClick={() => setActiveTab('stomach')}
          className={`p-3 rounded-xl text-left text-xs font-bold transition-all flex flex-col justify-between gap-1 cursor-pointer border ${
            activeTab === 'stomach'
              ? 'bg-indigo-500/20 text-indigo-200 border-indigo-500/60 shadow-md'
              : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-1.5 text-indigo-400">
            <Apple className="w-4 h-4" />
            <span>3. Bao Tử & Hấp Thu</span>
          </div>
          <span className="text-[10px] text-slate-400 font-normal">Tương tác thuốc PPI, niêm mạc & vi chất</span>
        </button>

        <button
          onClick={() => setActiveTab('metabolic')}
          className={`p-3 rounded-xl text-left text-xs font-bold transition-all flex flex-col justify-between gap-1 cursor-pointer border ${
            activeTab === 'metabolic'
              ? 'bg-rose-500/20 text-rose-200 border-rose-500/60 shadow-md'
              : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-1.5 text-rose-400">
            <HeartPulse className="w-4 h-4" />
            <span>4. Tiểu Đường, Béo Phì, Gout</span>
          </div>
          <span className="text-[10px] text-slate-400 font-normal">Trục IGF-1, Aromatase mỡ & Thể viêm NLRP3</span>
        </button>
      </div>

      {/* Tab Content 1: Gut-Breast Axis & Estrobolome */}
      {activeTab === 'gut' && (
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 animate-in fade-in duration-200">
          <div className="border-b border-slate-800 pb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono text-teal-400 font-bold uppercase tracking-wider">
                Trục Sinh Học Ruột - Tuyến Vú (Gut-Breast Axis)
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Hệ Vi Sinh Estrobolome & Nguy Cơ Tái Hấp Thu Estrogen Vào Máu
              </h3>
            </div>
            <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-teal-950 text-teal-300 border border-teal-800">
              Cơ chế Độc quyền 2024 - 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
              <strong className="text-teal-300 font-bold flex items-center gap-1.5 text-xs uppercase">
                <Dna className="w-4 h-4 text-teal-400" />
                <span>1. Cơ chế "Tuần Hoàn Gan - Ruột" Của Estrogen:</span>
              </strong>
              <p className="leading-relaxed">
                Sau khi hoạt động, nồng độ Estrogen dư thừa được <strong className="text-slate-100">Gan liên hợp với Acid Glucuronic</strong> (Glucuronidation) để vô hoạt hóa và đào thải qua dịch mật xuống ruột non và đại tràng để tống xuất ra phân.
              </p>
              <div className="p-3 rounded-lg bg-teal-950/30 border-l-2 border-teal-400 text-xs space-y-1">
                <strong className="text-teal-200 block">Hiện tượng "Tái Kích Hoạt Estrogen" do Loạn Khuẩn:</strong>
                <p className="text-slate-300">
                  Tập hợp vi khuẩn ruột mang gen tiết enzyme <strong className="text-teal-300">&beta;-glucuronidase</strong> (gọi là <em>Estrobolome</em>). Khi hệ khuẩn ruột bị mất cân bằng (Dysbiosis), enzyme này tăng vọt, bẻ gãy liên kết glucuronide, biến Estrogen đã vô hiệu trở lại thành <strong className="text-rose-300">Estrogen tự do hoạt tính cao</strong>, tái hấp thu qua thành ruột vào tĩnh mạch cửa về tuần hoàn máu, làm tăng kích thích tế bào K vú thể ER+.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
              <strong className="text-rose-300 font-bold flex items-center gap-1.5 text-xs uppercase">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>2. Tác Động Của Tamoxifen & Hóa Trị Lên Niêm Mạc Ruột:</span>
              </strong>
              <ul className="space-y-2 text-xs leading-relaxed">
                <li className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <strong className="text-slate-100 block mb-0.5">• Hội chứng rò rỉ ruột (Leaky Gut Syndrome):</strong>
                  Thuốc nội tiết và hóa trị làm tổn thương các mối nối tế bào biểu mô ruột (Tight Junctions: Claudin, Occludin), cho phép độc tố vi khuẩn (LPS - Lipopolysaccharide) rò rỉ vào dòng máu, kích hoạt thụ thể TLR4 gây phản ứng viêm mạn tính toàn thân.
                </li>
                <li className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <strong className="text-slate-100 block mb-0.5">• Suy giảm Axit béo chuỗi ngắn (SCFA):</strong>
                  Mất cân bằng vi khuẩn có lợi (*Faecalibacterium*, *Bifidobacterium*) làm giảm Butyrate — chất tự nhiên giúp ức chế HDAC, kháng tạo mạch và bảo vệ tế bào lành.
                </li>
              </ul>
            </div>
          </div>

          {/* Practical Gut Protection Strategy */}
          <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-900/40 space-y-2">
            <strong className="text-teal-300 text-xs uppercase font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Khuyến nghị can thiệp bảo vệ trục ruột dành riêng cho bệnh nhân sau điều trị K vú:</span>
            </strong>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <strong className="text-teal-300 block mb-1">Tăng Chất Xơ Hòa Tan:</strong>
                <p className="text-slate-300">Bổ sung &ge; 25-30g chất xơ/ngày từ yến mạch, các loại đậu, rau lá xanh đậm để gắn kết Estrogen tự do trong lòng ruột và đào thải nhanh.</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <strong className="text-teal-300 block mb-1">Hợp chất Calcium D-Glucarate:</strong>
                <p className="text-slate-300">Có tự nhiên trong táo, bông cải xanh, cam quýt; giúp ức chế trực tiếp enzyme &beta;-glucuronidase, ngăn cản tái hấp thu Estrogen.</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <strong className="text-teal-300 block mb-1">Thực phẩm Lên Men Tự Nhiên:</strong>
                <p className="text-slate-300">Sữa chua không đường, men vi sinh đa chủng (Lactobacillus, Bifidobacterium) giúp củng cố hàng rào niêm mạc ruột.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content 2: Liver, Gallbladder & Bile Acids */}
      {activeTab === 'liver_gall' && (
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 animate-in fade-in duration-200">
          <div className="border-b border-slate-800 pb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                Hệ Thống Gan - Túi Mật - Dịch Mật
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Gan Nhiễm Mỡ (NAFLD/MASLD), Chuyển Hóa Thuốc & Độc Tính Của Axit Mật Thứ Cấp
              </h3>
            </div>
            <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-amber-950 text-amber-300 border border-amber-800">
              Nghiên cứu JCO & Hepatology
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
            {/* Liver Impact */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
              <strong className="text-amber-300 font-bold flex items-center gap-1.5 text-xs uppercase">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>1. Tác Động Của Tamoxifen & AIs Lên Gan:</span>
              </strong>
              <p className="leading-relaxed">
                Gan là trung tâm chuyển hóa Tamoxifen thành <strong className="text-slate-100">Endoxifen</strong> (hoạt chất có ái lực mạnh gấp 100 lần) qua enzym gan <strong className="text-teal-300">CYP2D6 & CYP3A4</strong>.
              </p>
              <div className="p-3 rounded-lg bg-amber-950/20 border-l-2 border-amber-400 text-xs space-y-1">
                <strong className="text-amber-200 block">Tỷ lệ Gan Nhiễm Mỡ lên tới 30 - 43%:</strong>
                <p className="text-slate-300">
                  Tamoxifen làm ức chế quá trình beta-oxy hóa acid béo trong ty thể tế bào gan, dẫn đến tích tụ chất béo trung tính. Tình trạng gan nhiễm mỡ kéo dài làm tăng men gan (AST/ALT/GGT), thúc đẩy đề kháng insulin và suy giảm hiệu quả chuyển hóa thuốc.
                </p>
              </div>
            </div>

            {/* Gallbladder & Secondary Bile Acids */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
              <strong className="text-rose-300 font-bold flex items-center gap-1.5 text-xs uppercase">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                <span>2. Túi Mật, Sỏi Mật & Axit Mật Thứ Cấp (DCA):</span>
              </strong>
              <ul className="space-y-2 text-xs leading-relaxed">
                <li className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <strong className="text-slate-100 block mb-0.5">• Nguy cơ Sỏi Túi Mật (Cholelithiasis):</strong>
                  Sự thay đổi nồng độ nội tiết do Tamoxifen/AIs làm giảm khả năng co bóp túi mật, tăng ứ trệ dịch mật và tăng độ bão hòa cholesterol trong mật, làm tăng nguy cơ sỏi túi mật gấp 1.5 - 2 lần.
                </li>
                <li className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <strong className="text-slate-100 block mb-0.5">• Độc tính Acid Deoxycholic (DCA):</strong>
                  Axit mật nguyên phát khi xuống đại tràng bị vi khuẩn 7alpha-dehydroxylase biến đổi thành axit mật thứ cấp DCA. Nồng độ DCA cao trong máu kích hoạt thụ thể EGFR/MAPK, làm tăng sinh tế bào ác tính và tăng nguy cơ xâm lấn.
                </li>
              </ul>
            </div>
          </div>

          {/* Action Plan */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1.5">
            <strong className="text-amber-300 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Quy trình theo dõi Gan - Mật định kỳ sau 5 năm Tamoxifen:</span>
            </strong>
            <p className="text-slate-300">
              Kiểm tra định kỳ 6 tháng/lần: <strong className="text-slate-100">Men gan (AST, ALT, GGT), Bilirubin, Siêu âm màu ổ bụng tổng quát</strong> (đánh giá mức độ thoái hóa mỡ gan và túi mật). Bổ sung Choline, Silymarin (Kế sữa chuẩn hóa) và hoạt động thể chất giúp giải phóng mỡ đọng tại tế bào gan.
            </p>
          </div>
        </div>
      )}

      {/* Tab Content 3: Stomach & Nutrient Absorption */}
      {activeTab === 'stomach' && (
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 animate-in fade-in duration-200">
          <div className="border-b border-slate-800 pb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider">
                Dạ Dày, Tiêu Hóa Trên & Hấp Thu Vi Chất
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Viêm Loét Niêm Mạc, Trào Ngược Dạ Dày (GERD) & Nguy Cơ Từ Việc Lạm Dụng Thuốc PPI
              </h3>
            </div>
            <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-indigo-950 text-indigo-300 border border-indigo-800">
              Cảnh Báo Tương Tác Dược Lý
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
              <strong className="text-indigo-300 font-bold flex items-center gap-1.5 text-xs uppercase">
                <Apple className="w-4 h-4 text-indigo-400" />
                <span>1. Tác Động Trực Tiếp Lên Niêm Mạc Dạ Dày:</span>
              </strong>
              <p className="leading-relaxed">
                Tamoxifen, thuốc giảm đau chống viêm (NSAIDs) và các thuốc đích mới (như ức chế CDK4/6 Ribociclib, Abemaciclib) kích ứng trực tiếp lớp chất nhầy bảo vệ dạ dày, dẫn đến viêm dạ dày trợt, ợ chua, buồn nôn và trào ngược GERD.
              </p>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1">
                <strong className="text-slate-200 block">Lưu ý khi dùng thuốc uống:</strong>
                <p className="text-slate-300">Luôn uống thuốc sau bữa ăn chính hoặc cùng với nhiều nước, không nằm ngay trong vòng 30 phút sau khi uống.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
              <strong className="text-rose-300 font-bold flex items-center gap-1.5 text-xs uppercase">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>2. Tương Tác Khi Lạm Dụng Thuốc Ức Chế Bơm Proton (PPI):</span>
              </strong>
              <ul className="space-y-2 text-xs leading-relaxed">
                <li className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <strong className="text-rose-300 block mb-0.5">• Cạnh tranh enzym gan CYP2C19 & CYP2D6:</strong>
                  Các thuốc như Omeprazole, Esomeprazole có thể cạnh tranh chuyển hóa với Tamoxifen tại gan, làm biến thiên nồng độ hoạt chất Endoxifen trong máu.
                </li>
                <li className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <strong className="text-amber-300 block mb-0.5">• Suy giảm hấp thu Canxi, Magie, B12:</strong>
                  Khi axit dạ dày bị ức chế quá mức, cơ thể không thể hòa tan Canxi Carbonate và sắt hữu cơ, làm tăng nặng tình trạng loãng xương và thiếu máu do rong kinh.
                </li>
              </ul>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-indigo-950/20 border border-indigo-900/40 text-xs">
            <strong className="text-indigo-300 font-bold">Giải pháp an toàn cho dạ dày: </strong>
            <span className="text-slate-300">Thay vì dùng PPI kéo dài hàng tháng, ưu tiên kiểm soát bằng chế độ ăn chia nhỏ bữa, dùng nghệ nano (Curcumin phospholipid), gel bảo vệ niêm mạc (Mucoprotective agents) hoặc thuốc kháng thụ thể H2 (Famotidine) khi có chỉ định bác sĩ.</span>
          </div>
        </div>
      )}

      {/* Tab Content 4: Diabetes, Obesity, Gout */}
      {activeTab === 'metabolic' && (
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 animate-in fade-in duration-200">
          <div className="border-b border-slate-800 pb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono text-rose-400 font-bold uppercase tracking-wider">
                Bệnh Lý Chuyển Hóa Nền
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Bộ Ba Nguy Hiểm: Tiểu Đường Type 2, Béo Phì Nội Tạng & Gout / Tăng Acid Uric
              </h3>
            </div>
            <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-rose-950 text-rose-300 border border-rose-800">
              Bằng Chứng Lancet Oncology & Oxford
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs leading-relaxed">
            {/* Diabetes */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-rose-400 font-bold uppercase text-xs">
                <HeartPulse className="w-4 h-4" />
                <span>Tiểu Đường & Kháng Insulin</span>
              </div>
              <p className="text-slate-300">
                <strong className="text-rose-300">Trục Tín Hiệu Insulin / IGF-1:</strong> Nồng độ Insulin cao gắn vào thụ thể IGF-1R trên tế bào K vú, kích hoạt con đường nội bào <strong className="text-white">PI3K/AKT/mTOR</strong> thúc đẩy tế bào ung thư nhân bản nhanh chóng và kháng thuốc.
              </p>
              <div className="p-2 rounded-lg bg-slate-900 text-[11px] text-slate-400 border border-slate-800/80">
                <em>Nghiên cứu ASCO:</em> Bệnh nhân K vú kèm đái tháo đường kiểm soát kém có nguy cơ tái phát cao hơn 40-50%.
              </div>
            </div>

            {/* Obesity */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold uppercase text-xs">
                <Scale className="w-4 h-4" />
                <span>Béo Phì & Mỡ Nội Tạng</span>
              </div>
              <p className="text-slate-300">
                <strong className="text-amber-300">Nhà Máy Aromatase Ngoại Vi:</strong> Mô mỡ bụng chứa lượng lớn enzyme Aromatase (CYP19A1), liên tục biến đổi hormone vỏ thượng thận thành Estrogen tự do trong máu.
              </p>
              <div className="p-2 rounded-lg bg-slate-900 text-[11px] text-slate-400 border border-slate-800/80">
                Mô mỡ tiết liên tục các cytokine tiền viêm (<strong className="text-white">IL-6, TNF-alpha, Leptin</strong>) kích thích tạo mạch máu khối u (Angiogenesis).
              </div>
            </div>

            {/* Gout & Uric Acid */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-indigo-400 font-bold uppercase text-xs">
                <Flame className="w-4 h-4" />
                <span>Gout & Tăng Acid Uric Máu</span>
              </div>
              <p className="text-slate-300">
                <strong className="text-indigo-300">Kích Hoạt Thể Viêm NLRP3:</strong> Tinh thể muối Urate kích hoạt phức hợp thể viêm NLRP3 Inflammasome giải phóng IL-1beta và IL-18, gây stress oxy hóa nội mô và rối loạn vi tuần hoàn.
              </p>
              <div className="p-2 rounded-lg bg-slate-900 text-[11px] text-slate-400 border border-slate-800/80">
                Acid uric máu cao phản ánh hội chứng chuyển hóa và tình trạng viêm mạn tính toàn thân.
              </div>
            </div>
          </div>

          {/* Golden Rules for Metabolic Control */}
          <div className="p-4 rounded-xl bg-rose-950/20 border-l-2 border-rose-400 text-xs space-y-2">
            <strong className="text-rose-300 flex items-center gap-1.5 text-xs uppercase font-bold">
              <Sparkles className="w-4 h-4 text-rose-400" />
              <span>Tam giác vàng kiểm soát chuyển hóa để ngăn ngừa tái phát K vú:</span>
            </strong>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-slate-300">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="font-bold text-teal-300 block mb-0.5">1. Kiểm Soát Chỉ Số HbA1c &lt; 6.5%:</span>
                <span>Hạn chế đường hấp thu nhanh, tinh bột tinh chế; ưu tiên ngũ cốc nguyên cám và ăn nhiều rau trước bữa ăn để tránh tăng đường huyết đột ngột.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="font-bold text-amber-300 block mb-0.5">2. Duy Trì Vòng Eo Chuẩn (BMI 18.5 - 22.9):</span>
                <span>Tập thể dục nhịp điệu (đi bộ nhanh, bơi lội, đạp xe) tối thiểu 150 phút/tuần giúp đốt cháy mỡ nội tạng và triệt tiêu enzyme Aromatase.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="font-bold text-indigo-300 block mb-0.5">3. Uống Đủ Nước & Giảm Đạm Đỏ:</span>
                <span>Uống 2 - 2.5 lít nước/ngày, hạn chế thịt đỏ (bò, cừu), bia rượu và nội tạng động vật để đào thải acid uric tự nhiên qua thận.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Summary Reference Note */}
      <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-400">
        <FileText className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-slate-300">Nguồn dữ liệu & Tài liệu tham khảo uy tín: </strong>
          <span className="italic">
            Nature Reviews Microbiology (Gut-Breast Axis & Estrobolome, 2023–2024), Journal of Clinical Oncology (NAFLD in Tamoxifen Patients, JCO 2022), The Lancet Oncology (Metabolic Comorbidities & Breast Cancer Outcomes), Cancer Epidemiology Biomarkers & Prevention (Uric Acid & Inflammasome), và Hướng dẫn Dinh dưỡng - Lâm sàng BV Ung Bướu TP.HCM / BV K Hà Nội (2024–2026).
          </span>
        </div>
      </div>

    </section>
  );
};
