import React from 'react';
import { ReadAloudButton } from './ReadAloudButton';

export const BreastCancerOrganComorbiditiesSection: React.FC = () => {
  return (
    <section id="bc-chapter-9" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-6 border-t border-slate-900">
      
      {/* Chapter Header */}
      <div className="space-y-2">
        <div className="text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
          Chương 9 • Y Học Toàn Thân & Đa Cơ Quan
        </div>
        <h2 className="text-lg sm:text-xl md:text-xl font-bold text-white tracking-tight">
          Tác Động Hai Chiều: Hệ Tiêu Hóa, Gan Mật, Chuyển Hóa (Tiểu Đường, Béo Phì, Gout) & Nguy Cơ Ung Thư Vú
        </h2>
        <p className="text-base md:text-sm text-slate-300 leading-relaxed max-w-3xl">
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

      {/* 9.1. Trục Ruột - Tuyến Vú & Estrobolome */}
      <article className="space-y-3 pt-4 border-t border-slate-800/40 text-base md:text-sm text-slate-300 leading-relaxed">
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
            <h3 className="text-base font-bold text-teal-300">
              9.1. Trục Ruột – Tuyến Vú (Gut-Breast Axis) & Hệ Gen Estrobolome
            </h3>
            <span className="text-[11px] font-mono text-teal-400">
              Cơ chế 2024 - 2026
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Cơ chế tái hấp thu Estrogen tự do qua tuần hoàn gan - ruột khi bị loạn khuẩn chí.
          </p>
        </div>

        <div className="space-y-2">
          <p>
            <strong className="text-white font-medium">1. Cơ chế tuần hoàn gan - ruột & enzyme &beta;-glucuronidase: </strong>
            Sau khi lưu hành trong máu, nồng độ Estrogen dư thừa được Gan liên hợp với Acid Glucuronic để vô hoạt hóa và bài tiết qua dịch mật xuống ruột non và đại tràng để tống xuất ra phân.
          </p>
          <p>
            Hệ vi khuẩn ruột có một nhóm vi sinh mang gen tiết enzyme <strong className="text-teal-300">&beta;-glucuronidase</strong> (gọi là <em>Estrobolome</em>). Khi ruột bị loạn khuẩn (Dysbiosis do dùng kháng sinh, căng thẳng, chế độ ăn nhiều mỡ xấu), enzyme này tăng vọt, phân cắt liên kết glucuronide, biến Estrogen đã vô hiệu thành <strong className="text-rose-300">Estrogen tự do hoạt tính cao</strong>, tái hấp thu qua thành ruột vào dòng máu, kích thích khối u vú thụ thể ER+ phát triển trở lại.
          </p>
          <p>
            <strong className="text-white font-medium">2. Hội chứng rò rỉ ruột (Leaky Gut) & suy giảm Butyrate do thuốc: </strong>
            Tamoxifen và hóa trị làm suy yếu các mối nối biểu mô ruột, cho phép độc tố vi khuẩn (LPS) rò rỉ vào tuần hoàn, kích hoạt phản ứng viêm mạn tính toàn thân. Sự suy giảm các chủng khuẩn có lợi (*Faecalibacterium prausnitzii*, *Bifidobacterium*) làm thiếu hụt Butyrate — axit béo chuỗi ngắn tự nhiên giúp ức chế tạo mạch khối u.
          </p>
        </div>

        <div className="space-y-1 text-xs text-slate-300 pt-1">
          <strong className="text-teal-300 uppercase block font-mono">Giải pháp bảo vệ trục ruột:</strong>
          <ul className="list-disc list-inside space-y-0.5 pl-1 text-slate-400">
            <li><strong className="text-slate-300">Bổ sung chất xơ hòa tan (&ge; 25-30g/ngày):</strong> Từ yến mạch, các loại đậu, rau lá xanh để gắn kết và đào thải Estrogen dư thừa.</li>
            <li><strong className="text-slate-300">Calcium D-Glucarate tự nhiên:</strong> Có trong táo, bông cải xanh, cam bưởi; giúp ức chế enzyme &beta;-glucuronidase.</li>
            <li><strong className="text-slate-300">Sữa chua & men vi sinh đa chủng:</strong> Củng cố hàng rào niêm mạc ruột.</li>
          </ul>
        </div>
      </article>

      {/* 9.2. Gan & Túi Mật */}
      <article className="space-y-3 pt-4 border-t border-slate-800/40 text-base md:text-sm text-slate-300 leading-relaxed">
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
            <h3 className="text-base font-bold text-amber-300">
              9.2. Gan Nhiễm Mỡ (NAFLD/MASLD), Chuyển Hóa Thuốc & Axit Mật Thứ Cấp
            </h3>
            <span className="text-[11px] font-mono text-amber-400">
              Nghiên cứu JCO & Hepatology
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Tác động của Tamoxifen lên chuyển hóa mỡ tại tế bào gan và nguy cơ sỏi túi mật.
          </p>
        </div>

        <div className="space-y-2">
          <p>
            <strong className="text-white font-medium">1. Chuyển hóa Tamoxifen tại Gan & nguy cơ Gan nhiễm mỡ (30 - 43%): </strong>
            Gan là trung tâm chuyển hóa Tamoxifen thành <strong className="text-white">Endoxifen</strong> qua enzym CYP2D6 và CYP3A4. Tuy nhiên, Tamoxifen ức chế quá trình oxy hóa chất béo trong tế bào gan, dẫn đến tình trạng Gan nhiễm mỡ ở 30 - 43% bệnh nhân sau 2–5 năm dùng thuốc. Tình trạng này làm tăng men gan (AST/ALT), kháng insulin và suy giảm chức năng thanh thải độc tố.
          </p>
          <p>
            <strong className="text-white font-medium">2. Sỏi túi mật & độc tính Axit mật thứ cấp (DCA): </strong>
            Thiếu hụt estrogen hoặc ức chế nội tiết làm chậm co bóp túi mật, tăng ứ đọng và bão hòa cholesterol dịch mật, tăng nguy cơ sỏi mật gấp 1.5 - 2 lần. Axit mật nguyên phát khi xuống đại tràng bị vi khuẩn biến đổi thành axit mật thứ cấp (DCA), kích hoạt con đường EGFR/MAPK thúc đẩy tăng sinh tế bào ác tính.
          </p>
        </div>

        <div className="text-xs text-slate-400 pt-1">
          <strong className="text-amber-300 font-mono uppercase">Lịch theo dõi Gan - Mật định kỳ: </strong>
          <span>Xét nghiệm Men gan (AST, ALT, GGT) và siêu âm màu ổ bụng tổng quát mỗi 6 tháng/lần để theo dõi thoái hóa mỡ gan và túi mật.</span>
        </div>
      </article>

      {/* 9.3. Bao Tử & Tương Tác Thuốc PPI */}
      <article className="space-y-3 pt-4 border-t border-slate-800/40 text-base md:text-sm text-slate-300 leading-relaxed">
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
            <h3 className="text-base font-bold text-indigo-300">
              9.3. Dạ Dày, Viêm Niêm Mạc & Cảnh Báo Lạm Dụng Thuốc PPI
            </h3>
            <span className="text-[11px] font-mono text-indigo-400">
              Tương Tác Dược Lý Lâm Sàng
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Tác dụng phụ dạ dày từ thuốc điều trị K vú và tương tác chuyển hóa của thuốc ức chế bơm proton.
          </p>
        </div>

        <div className="space-y-2">
          <p>
            <strong className="text-white font-medium">1. Kích ứng niêm mạc & trào ngược dạ dày (GERD): </strong>
            Tamoxifen, thuốc giảm đau NSAIDs và thuốc nhắm trúng đích CDK4/6 kích ứng lớp nhầy bảo vệ dạ dày, gây ợ chua, buồn nôn. Cần uống thuốc sau bữa ăn no cùng nhiều nước và không nằm ngay trong vòng 30 phút.
          </p>
          <p>
            <strong className="text-white font-medium">2. Tương tác khi lạm dụng thuốc ức chế bơm proton (PPI): </strong>
            Thuốc dạ dày như Omeprazole, Esomeprazole cạnh tranh enzym CYP2C19/CYP2D6 tại gan, làm biến thiên nồng độ Endoxifen trong máu. Ngoài ra, việc giảm axit dạ dày kéo dài làm giảm hấp thu Canxi, Sắt và Vitamin B12, gây nặng thêm tình trạng loãng xương và thiếu máu.
          </p>
        </div>
      </article>

      {/* 9.4. Bệnh Lý Chuyển Hóa Nền: Tiểu Đường, Béo Phì, Gout */}
      <article className="space-y-3 pt-4 border-t border-slate-800/40 text-base md:text-sm text-slate-300 leading-relaxed">
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
            <h3 className="text-base font-bold text-rose-300">
              9.4. Bộ Ba Chuyển Hóa: Tiểu Đường Type 2, Béo Phì Nội Tạng & Gout / Axit Uric
            </h3>
            <span className="text-[11px] font-mono text-rose-400">
              Lancet Oncology & Oxford
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Ba yếu tố chuyển hóa làm tăng nguy cơ tái phát K vú và phác đồ kiểm soát.
          </p>
        </div>

        <div className="space-y-2">
          <p>
            <strong className="text-white font-medium">1. Tiểu đường Type 2 & trục tín hiệu IGF-1 / PI3K / mTOR: </strong>
            Nồng độ Insulin và IGF-1 cao gắn vào thụ thể trên màng tế bào K vú, kích hoạt con đường nội bào <strong className="text-white">PI3K/AKT/mTOR</strong> thúc đẩy tế bào ung thư tăng sinh bất chấp thuốc ức chế nội tiết. Nghiên cứu ASCO cho thấy tiểu đường không kiểm soát làm tăng 40-50% nguy cơ tái phát.
          </p>
          <p>
            <strong className="text-white font-medium">2. Béo phì nội tạng & nhà máy Aromatase ngoại vi: </strong>
            Mô mỡ bụng chứa lượng lớn enzyme <strong className="text-white">Aromatase (CYP19A1)</strong>, liên tục chuyển đổi Androstenedione thành Estrogen tự do trong máu. Mô mỡ phì đại tiết liên tục các cytokine viêm (*IL-6, TNF-&alpha;, Leptin*) kích thích tạo mạch máu nuôi khối u.
          </p>
          <p>
            <strong className="text-white font-medium">3. Gout & phức hợp thể viêm NLRP3 Inflammasome: </strong>
            Tinh thể Urate monosodium kết tinh kích hoạt thể viêm NLRP3 phóng thích IL-1&beta; và IL-18, gây stress oxy hóa nội mô mạch máu và làm tăng tình trạng viêm vi thể mạn tính.
          </p>
        </div>

        <div className="space-y-1 text-xs text-slate-300 pt-1">
          <strong className="text-rose-300 block uppercase font-mono">
            Tam giác vàng kiểm soát chuyển hóa để ngăn ngừa tái phát:
          </strong>
          <ul className="list-disc list-inside space-y-0.5 pl-1 text-slate-400">
            <li><strong className="text-slate-300">Kiểm soát HbA1c &lt; 6.5%:</strong> Cắt giảm đường đơn, ăn nhiều rau trước bữa chính để ổn định đường huyết.</li>
            <li><strong className="text-slate-300">Giữ BMI chuẩn (18.5 - 22.9):</strong> Vận động thể lực 150 phút/tuần để triệt tiêu mô mỡ nội tạng sinh estrogen.</li>
            <li><strong className="text-slate-300">Uống 2 - 2.5 lít nước/ngày:</strong> Giảm ăn thịt đỏ và nội tạng để đào thải acid uric tự nhiên qua thận.</li>
          </ul>
        </div>
      </article>

      {/* References Footer */}
      <div className="text-xs text-slate-400 pt-3 border-t border-slate-800/40">
        <strong className="text-slate-300">Nguồn dữ liệu & Tài liệu tham khảo uy tín: </strong>
        <span className="italic">
          Nature Reviews Microbiology (Gut-Breast Axis & Estrobolome, 2023–2024), Journal of Clinical Oncology (NAFLD in Tamoxifen Patients, JCO 2022), The Lancet Oncology (Metabolic Comorbidities & Breast Cancer Outcomes), Cancer Epidemiology Biomarkers & Prevention (Uric Acid & Inflammasome), và Hướng dẫn Dinh dưỡng - Lâm sàng BV Ung Bướu TP.HCM / BV K Hà Nội (2024–2026).
        </span>
      </div>

    </section>
  );
};
