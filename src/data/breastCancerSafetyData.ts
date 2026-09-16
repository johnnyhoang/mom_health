export interface BreastCancerSafetyItem {
  id: string;
  treatmentName: string;
  category: 'surgical' | 'procedural' | 'hormonal_local' | 'hormonal_systemic' | 'non_hormonal_med' | 'supplements_diet';
  categoryLabel: string;
  safetyRating: 'An Toàn Tuyệt Đối (Zero Risk)' | 'An Toàn Cao (Có Bằng Chứng)' | 'Cần Hội Chẩn & Thận Trọng' | 'CHỐNG CHỈ ĐỊNH (Nguy Cơ Cao)';
  ratingColor: 'emerald' | 'teal' | 'amber' | 'rose';
  systemicHormoneImpact: string;
  breastRecurrenceRisk: string;
  clinicalEvidenceSummary: string;
  guidelineStance: {
    asco_nccn: string;
    acog_figo: string;
  };
  keyPrecautions: string[];
}

export const breastCancerSafetyMatrix: BreastCancerSafetyItem[] = [
  // =========================================================================
  // 1. PHẪU THUẬT & THỦ THUẬT CƠ HỌC
  // =========================================================================
  {
    id: 'safety-lap-hysterectomy',
    treatmentName: 'Phẫu Thuật Nội Soi Cắt Tử Cung Toàn Phần - BẢO TỒN 2 BUỒNG TRỨNG',
    category: 'surgical',
    categoryLabel: 'Phẫu Thuật Ngoại Khoa',
    safetyRating: 'An Toàn Tuyệt Đối (Zero Risk)',
    ratingColor: 'emerald',
    systemicHormoneImpact: 'KHÔNG LÀM THAY ĐỔI NỒNG ĐỘ HORMONE: Hai buồng trứng được giữ nguyên tiếp tục tiết Estrogen/Progesterone tự nhiên theo nhịp sinh học sẵn có của cơ thể tuổi 45, hoàn toàn không bổ sung bất kỳ hormone ngoại sinh nào.',
    breastRecurrenceRisk: '0% TĂNG NGUY CƠ TÁI PHÁT K VÚ: Phẫu thuật là can thiệp cơ học thuần túy loại bỏ mô đích bệnh lý (tử cung, u xơ, adenomyosis, niêm mạc tăng sản), hoàn toàn không tác động lên thụ thể estrogen/progesterone ở tuyến vú.',
    clinicalEvidenceSummary: 'Theo dõi hàng chục nghìn phụ nữ sau điều trị ung thư vú được phẫu thuật cắt tử cung lành tính cho thấy tỷ lệ sống không bệnh (Disease-Free Survival - DFS) và tỷ lệ sống toàn bộ (Overall Survival - OS) hoàn toàn tương đương với nhóm không phẫu thuật.',
    guidelineStance: {
      asco_nccn: 'ASCO/NCCN khẳng định phẫu thuật phụ khoa lành tính không làm ảnh hưởng đến tiên lượng ung thư vú và là phương án an toàn nhất để tránh phải dùng thêm các thuốc nội tiết phụ khoa kéo dài.',
      acog_figo: 'ACOG khuyến nghị phẫu thuật cắt tử cung bảo tồn buồng trứng là giải pháp điều trị triệt để u xơ/adenomyosis kết hợp rong kinh cho bệnh nhân có tiền sử K vú.'
    },
    keyPrecautions: [
      'BẢO TỒN 2 BUỒNG TRỨNG: Ở tuổi 45 sau 5 năm Tamoxifen, không cần thiết phải cắt buồng trứng nếu buồng trứng hoàn toàn bình thường (không mang đột biến gen BRCA1/2).',
      'TUYỆT ĐỐI KHÔNG DÙNG LIỆU PHÁP HORMONE THAY THẾ (HRT): Sau phẫu thuật, dù có bất kỳ triệu chứng gì cũng không được dùng thuốc bổ sung Estrogen.'
    ]
  },
  {
    id: 'safety-hysteroscopy-resection',
    treatmentName: 'Nội Soi Buồng Tử Cung Can Thiệp & Cắt Gọt Mảng Tăng Sản (Hysteroscopy)',
    category: 'procedural',
    categoryLabel: 'Thủ Thuật Xâm Lấn Tối Thiểu',
    safetyRating: 'An Toàn Tuyệt Đối (Zero Risk)',
    ratingColor: 'emerald',
    systemicHormoneImpact: 'KHÔNG TÁC ĐỘNG NỘI TIẾT: Sử dụng camera siêu nhỏ và dao điện lưỡng cực bóc tách tại chỗ qua ngả âm đạo.',
    breastRecurrenceRisk: '0% NGUY CƠ TÁI PHÁT K VÚ: Hoàn toàn không đưa hóa chất hay hormone vào tuần hoàn máu.',
    clinicalEvidenceSummary: 'Thủ thuật an toàn 100% đối với tuyến vú, vừa giải quyết mẫu mô để làm giải phẫu bệnh chính xác, vừa cầm máu tức thời.',
    guidelineStance: {
      asco_nccn: 'Phương pháp tiêu chuẩn vàng để chẩn đoán tổn thương niêm mạc tử cung ở bệnh nhân đang hoặc sau dùng Tamoxifen.',
      acog_figo: 'Khuyến cáo thực hiện nội soi buồng tử cung chẩn đoán khi có xuất huyết tử cung bất thường sau Tamoxifen.'
    },
    keyPrecautions: [
      'Chỉ lấy đi mảng tăng sản trong lòng tử cung, không giải quyết được khối nhân xơ 45mm và ổ Adenomyosis sâu trong cơ, do đó cần theo dõi nguy cơ rong kinh tái phát.'
    ]
  },

  // =========================================================================
  // 2. CÁC LIỆU PHÁP NỘI TIẾT TẠI CHỖ & TOÀN THÂN
  // =========================================================================
  {
    id: 'safety-mirena-iud',
    treatmentName: 'Vòng Nội Tiết Giải Phóng Progestin Tại Chỗ (Mirena - LNG-IUD 52mg)',
    category: 'hormonal_local',
    categoryLabel: 'Nội Tiết Tại Chỗ',
    safetyRating: 'Cần Hội Chẩn & Thận Trọng',
    ratingColor: 'amber',
    systemicHormoneImpact: 'NỒNG ĐỘ TOÀN THÂN CỰC THẤP NHƯNG CÓ HẤP THU: Nồng độ Levonorgestrel trong buồng tử cung gấp 1000 lần trong máu. Nồng độ trong huyết tương chỉ khoảng 0.1 - 0.2 ng/mL (bằng 1/10 đến 1/20 so với thuốc uống).',
    breastRecurrenceRisk: 'TRANH LUẬN Y KHOA (Tranh cãi nhẹ về nguy cơ): Một số nghiên cứu đoàn hệ lớn tại Bắc Âu (Soini et al., Trinh et al.) ghi nhận nguy cơ K vú tăng rất nhẹ (HR ~ 1.1 - 1.2) ở phụ nữ bình thường dùng LNG-IUD. Đối với bệnh nhân ĐÃ TỪNG BỊ K VÚ nhạy cảm thụ thể nội tiết (ER+), dữ liệu còn hạn chế và cần thận trọng tối đa.',
    clinicalEvidenceSummary: 'Thử nghiệm lâm sàng của Hội Sản Phụ Khoa Hoàng Gia Anh (RCOG) và nhiều nghiên cứu cho thấy Mirena bảo vệ niêm mạc tử cung rất tốt khỏi tác dụng phụ của Tamoxifen. Tuy nhiên, khi bệnh nhân ĐÃ DỪNG TAMOXIFEN (tháng 1/2026), việc đặt thêm progestin ngoại sinh cần được cân nhắc kỹ giữa lợi ích cầm máu và tiền sử K vú.',
    guidelineStance: {
      asco_nccn: 'ASCO/NCCN khuyến cáo chống chỉ định tương đối các liệu pháp chứa Progestin cho bệnh nhân có tiền sử K vú trừ khi không còn lựa chọn nào khác và có sự đồng thuận của Bác sĩ Ung bướu.',
      acog_figo: 'ACOG xem xét Mirena như một giải pháp bảo tồn tử cung nhưng nhấn mạnh phải thảo luận kỹ lưỡng với bác sĩ điều trị ung thư vú.'
    },
    keyPrecautions: [
      'BẮT BUỘC có ý kiến bằng văn bản của Bác sĩ chuyên khoa Ung Bướu điều trị K vú.',
      'Khối u xơ 45mm ở thành sau có thể làm biến dạng buồng tử cung, tăng nguy cơ tuột hoặc lệch vòng.'
    ]
  },
  {
    id: 'safety-oral-progestins',
    treatmentName: 'Thuốc Nội Tiết Progestin Uống Toàn Thân (Dydrogesterone, Medroxyprogesterone, Norethisterone)',
    category: 'hormonal_systemic',
    categoryLabel: 'Nội Tiết Toàn Thân',
    safetyRating: 'CHỐNG CHỈ ĐỊNH (Nguy Cơ Cao)',
    ratingColor: 'rose',
    systemicHormoneImpact: 'NỒNG ĐỘ HORMONE TOÀN THÂN CAO: Thuốc ngấm trực tiếp vào hệ tuần hoàn, gắn kết với thụ thể Progesterone (PR) trên toàn cơ thể bao gồm cả các tế bào tuyến vú.',
    breastRecurrenceRisk: 'LÀM TĂNG NGUY CƠ TÁI PHÁT K VÚ: Progestin toàn thân liều cao có thể kích hoạt các tế bào vi thể K vú còn tiềm ẩn phân chia phát triển.',
    clinicalEvidenceSummary: 'Các thử nghiệm WHI và thử nghiệm Million Women Study đã chứng minh rõ ràng việc sử dụng progestin đường uống toàn thân làm tăng đáng kể nguy cơ bệnh lý tuyến vú.',
    guidelineStance: {
      asco_nccn: 'CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI cho bệnh nhân có tiền sử ung thư vú thụ thể nội tiết dương tính (ER+/PR+).',
      acog_figo: 'Không khuyến cáo dùng progestin đường uống kéo dài để điều trị rong kinh trên bệnh nhân đã từng điều trị K vú.'
    },
    keyPrecautions: [
      'KHÔNG tự ý mua các loại thuốc điều hòa kinh nguyệt, thuốc tránh thai khẩn cấp hay thuốc nội tiết uống tại nhà thuốc.'
    ]
  },
  {
    id: 'safety-hrt-estrogen',
    treatmentName: 'Liệu Pháp Hormone Thay Thế Chứa Estrogen (HRT - Viên uống/Gel bôi/Miếng dán Estrogen)',
    category: 'hormonal_systemic',
    categoryLabel: 'Liệu Pháp Hormone Thay Thế',
    safetyRating: 'CHỐNG CHỈ ĐỊNH (Nguy Cơ Cao)',
    ratingColor: 'rose',
    systemicHormoneImpact: 'CUNG CẤP ESTROGEN NGOẠI SINH: Làm tăng trực tiếp nồng độ Estrogen tự do trong máu.',
    breastRecurrenceRisk: 'NGUY CƠ TÁI PHÁT K VÚ CỰC CAO: Thử nghiệm HABITS (Hormonal Replacement Therapy after Breast Cancer) đã phải dừng sớm vì nhóm dùng HRT có tỷ lệ tái phát ung thư vú cao gấp 2.4 lần so với nhóm chứng.',
    clinicalEvidenceSummary: 'Estrogen ngoại sinh là yếu tố nguy cơ số 1 kích hoạt tế bào ung thư vú tái phát.',
    guidelineStance: {
      asco_nccn: 'CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI VĨNH VIỄN cho mọi bệnh nhân có tiền sử K vú.',
      acog_figo: 'Tuyệt đối không sử dụng Estrogen toàn thân cho phụ nữ sau điều trị ung thư vú.'
    },
    keyPrecautions: [
      'Dù có triệu chứng tiền mãn kinh (bốc hỏa, đổ mồ hôi đêm) cũng TUYỆT ĐỐI KHÔNG DÙNG Estrogen.',
      'Sử dụng các biện pháp không hormone để kiểm soát triệu chứng nếu cần.'
    ]
  },

  // =========================================================================
  // 3. THUỐC KHÔNG NỘI TIẾT & CẦM MÁU CƠ HỌC
  // =========================================================================
  {
    id: 'safety-tranexamic-acid',
    treatmentName: 'Thuốc Cầm Máu Tranexamic Acid (Transamin / Cyklokapron)',
    category: 'non_hormonal_med',
    categoryLabel: 'Thuốc Cầm Máu Không Nội Tiết',
    safetyRating: 'An Toàn Cao (Có Bằng Chứng)',
    ratingColor: 'teal',
    systemicHormoneImpact: 'HOÀN TOÀN KHÔNG CHỨA HORMONE: Hoạt động bằng cơ chế ức chế phân hủy Fibrin (ngăn enzym Plasmin làm tan cục máu đông tại niêm mạc tử cung).',
    breastRecurrenceRisk: '0% ẢNH HƯỞNG ĐẾN TÁI PHÁT K VÚ: Không tương tác với thụ thể nội tiết vú.',
    clinicalEvidenceSummary: 'Là thuốc cầm máu đầu tay được ACOG và WHO phê duyệt điều trị rong kinh cấp hoặc mạn tính, giúp giảm 40 - 50% lượng máu mất trong những ngày hành kinh nhiều.',
    guidelineStance: {
      asco_nccn: 'Được chấp thuận sử dụng an toàn cho bệnh nhân ung thư khi có chỉ định cầm máu ngắn hạn.',
      acog_figo: 'Lựa chọn không nội tiết hàng đầu cho bệnh nhân có chống chỉ định với hormone.'
    },
    keyPrecautions: [
      'CÂN NHẮC NGUY CƠ HUYẾT KHỐI: Vì bệnh nhân đã dùng Tamoxifen 5 năm (Tamoxifen có nguy cơ tăng nhẹ huyết khối tĩnh mạch sâu - DVT), chỉ nên dùng Tranexamic Acid trong những ngày ra máu nhiều (3-5 ngày), không dùng kéo dài liên tục nếu có tiền sử tắc mạch.'
    ]
  },

  // =========================================================================
  // 4. THỰC PHẨM CHỨC NĂNG & THẢO DƯỢC
  // =========================================================================
  {
    id: 'safety-soy-isoflavones',
    treatmentName: 'Viên Uống Mầm Đậu Nành Cô Đặc / Isoflavone Liều Cao & Sâm Tố Nữ (Pueraria Mirifica)',
    category: 'supplements_diet',
    categoryLabel: 'Thực Phẩm Bổ Sung & Thảo Dược',
    safetyRating: 'CHỐNG CHỈ ĐỊNH (Nguy Cơ Cao)',
    ratingColor: 'rose',
    systemicHormoneImpact: 'CHỨA HÀM LƯỢNG PHYTOESTROGEN CỰC CAO: Các phân tử Isoflavone/Genistein cô đặc trong viên uống có cấu trúc tương tự Estrogen và có khả năng gắn kết kích thích thụ thể ER-alpha ở mô vú.',
    breastRecurrenceRisk: 'TIỀM ẨN NGUY CƠ KÍCH THÍCH TẾ BÀO K VÚ TÁI PHÁT: Mặc dù đậu nành trong thực phẩm tự nhiên (đậu phụ, nước tương) ăn lượng vừa phải là an toàn, nhưng VIÊN UỐNG CÔ ĐẶC LIỀU CAO có thể kích thích tế bào u tuyến vú.',
    clinicalEvidenceSummary: 'Hiệp hội Ung thư Hoa Kỳ (ACS) và Viện Nghiên cứu Ung thư Quốc tế (AICR) khuyến cáo bệnh nhân sau K vú không nên dùng viên uống bổ sung Isoflavone cô đặc.',
    guidelineStance: {
      asco_nccn: 'Khuyến cáo bệnh nhân ung thư vú tránh xa các sản phẩm thực phẩm chức năng bổ sung nội tiết tố nữ thực vật liều cao.',
      acog_figo: 'Không khuyến nghị dùng Phytoestrogen cô đặc để điều trị các triệu chứng phụ khoa sau ung thư vú.'
    },
    keyPrecautions: [
      'Ăn đậu phụ, uống sữa đậu nành nấu truyền thống 1-2 lần/tuần là HOÀN TOÀN AN TOÀN.',
      'TUYỆT ĐỐI TRÁNH: Các loại viên uống "tăng size vòng 1", "bổ sung nội tiết tố nữ", "tinh dầu hoa anh thảo liều cao", "viên mầm đậu nành collagen".'
    ]
  }
];
