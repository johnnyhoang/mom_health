export interface QAItem {
  id: string;
  category: 'case_results' | 'tamoxifen_mechanism' | 'treatment_options' | 'surgery_reassurance' | 'lifestyle_followup';
  categoryLabel: string;
  question: string;
  shortSummary: string;
  detailedAnswer: string[];
  clinicalHighlight?: string;
  doctorQuestionToAsk?: string;
}

export const tamoxifenQADataset: QAItem[] = [
  // =========================================================================
  // NHÓM 1: GIẢI MÃ KẾT QUẢ XÉT NGHIỆM & NỖI LO UNG THƯ
  // =========================================================================
  {
    id: 'qa-1',
    category: 'case_results',
    categoryLabel: 'Giải Mã Bệnh Án',
    question: 'Kết quả giải phẫu bệnh ghi "Tăng sản điển hình khu trú nội mạc tử cung" có phải là ung thư hoặc tiền ung thư không?',
    shortSummary: 'HOÀN TOÀN KHÔNG. Đây là tổn thương lành tính 100%, nguy cơ ung thư cực thấp (< 1-3%).',
    detailedAnswer: [
      'Trong y khoa giải phẫu bệnh, từ "ĐIỂN HÌNH" (Typical hoặc Non-atypical) có nghĩa là các tế bào phát triển nhiều hơn về số lượng nhưng hình thái nhân tế bào hoàn toàn bình thường, không có đột biến, không có nhân quái hay phân chia bất thường.',
      'Tổn thương này đối lập hoàn toàn với "TĂNG SẢN KHÔNG ĐIỂN HÌNH" (Atypical Hyperplasia / EIN - tổn thương tiền ung thư với nguy cơ ác tính 25-40%).',
      'Vì vậy, chị có thể hoàn toàn trút bỏ gánh nặng lo âu: Đây không phải ung thư nội mạc tử cung và tuyệt đối không phải ung thư vú di căn!'
    ],
    clinicalHighlight: 'Giải phẫu bệnh tại BV Hùng Vương (15/09/2026) là tiêu chuẩn vàng khẳng định lòng tử cung của chị không có tế bào ác tính.',
    doctorQuestionToAsk: '"Thưa bác sĩ, kết quả giải phẫu bệnh của tôi là tăng sản điển hình lành tính, vậy tôi có cần làm thêm xét nghiệm sinh thiết nào khác không?"'
  },
  {
    id: 'qa-2',
    category: 'case_results',
    categoryLabel: 'Giải Mã Bệnh Án',
    question: 'Tại sao trong mô tả vi thể ghi "ống tuyến giãn rộng, tạo bọc, lót thượng mô trụ cao"?',
    shortSummary: 'Đây là phản ứng mô học kinh điển và vô hại của thuốc Tamoxifen trên các tuyến niêm mạc tử cung.',
    detailedAnswer: [
      'Tamoxifen có tác động kích thích nhẹ lên thụ thể Estrogen ở tử cung trong suốt 5 năm, làm các tế bào biểu mô tiết dịch nhưng lỗ tuyến bị bít nhẹ tạm thời, khiến các tuyến phình to chứa dịch tạo thành những bọc nhỏ li ti (Cystic dilated glands).',
      'Đây là dấu ấn vi thể đặc trưng được y văn thế giới ghi nhận ở phần lớn phụ nữ dùng Tamoxifen, hoàn toàn lành tính.',
      'Tuy nhiên, vì các nang tuyến này mỏng và ứ dịch, chúng rất dễ vỡ rỉ máu khi có sự co bóp cơ tử cung, góp phần gây ra hiện tượng rong kinh rải rác.'
    ],
    clinicalHighlight: 'Nang tuyến giãn rộng do Tamoxifen là biến đổi cấu trúc cơ học vô hại, không làm biến đổi bản chất tế bào sang ác tính.'
  },
  {
    id: 'qa-3',
    category: 'case_results',
    categoryLabel: 'Giải Mã Bệnh Án',
    question: 'Siêu âm tháng 5/2025 tại Tâm Anh thấy nội mạc dày 15mm, tại sao đến tháng 9/2026 tại Hùng Vương nội mạc lại mỏng?',
    shortSummary: 'Độ dày 15mm trước đây là hiện tượng "dày giả tạo do Tamoxifen", hiện tại đã bong tróc hoặc mỏng sau sinh thiết.',
    detailedAnswer: [
      'Hiện tượng "Dày nội mạc giả tạo do Tamoxifen" (Tamoxifen-induced pseudo-thickening): Sóng siêu âm đo được 15mm không phải do toàn bộ là mô đặc, mà phần lớn là do lớp mô đệm bị phù nề ứ dịch và các nang tuyến phình to.',
      'Sau khi chị ngưng thuốc Tamoxifen (tháng 1/2026), kết hợp các đợt bong tróc rong kinh và thao tác lấy mẫu sinh thiết tại BV Hùng Vương, lớp niêm mạc dày đã được giải phóng, đưa nội mạc trở về trạng thái mỏng an toàn.'
    ],
    clinicalHighlight: 'Nội mạc mỏng ở thời điểm hiện tại là tín hiệu rất tích cực, giúp bác sĩ dễ dàng quan sát buồng tử cung.'
  },
  {
    id: 'qa-4',
    category: 'case_results',
    categoryLabel: 'Giải Mã Bệnh Án',
    question: 'Khối u thành sau 41x45mm và "Lạc tuyến trong cơ tử cung" (Adenomyosis) là gì? Có nguy hiểm không?',
    shortSummary: 'Là khối nhân xơ và mô niêm mạc đi lạc vào cơ tử cung. Lành tính nhưng là thủ phạm chính gây rong kinh và đau bụng.',
    detailedAnswer: [
      'Adenomyosis: Các tế bào niêm mạc tử cung thay vì nằm trong lòng tử cung lại chui sâu và phát triển bên trong lớp cơ thành sau, làm thành sau tử cung dày cộm và có nhiều sọc bóng lưng.',
      'Khối cơ thành sau 41x45mm: Một khối u xơ cơ trơn lành tính kích thước ~4cm (bằng quả trứng gà nhỏ).',
      'Nguy cơ: Cả hai đều là bệnh lý phụ khoa LÀNH TÍNH rất phổ biến ở phụ nữ tuổi 40-45. Tuy nhiên, chúng làm cơ tử cung bị xơ cứng, không thể co bóp siết chặt mạch máu khi hành kinh, gây rong kinh ồ ạt kéo dài.'
    ],
    clinicalHighlight: 'Đây chính là nguyên nhân cơ học cốt lõi khiến chị bị rong kinh nhiều tháng nay chứ không phải do ung thư.'
  },
  {
    id: 'qa-5',
    category: 'case_results',
    categoryLabel: 'Giải Mã Bệnh Án',
    question: 'Nang buồng trứng phải xuất huyết (23x19mm) ghi nhận năm 2025 nay đi đâu rồi?',
    shortSummary: 'Đó là nang hoàng thể sinh lý rụng trứng và đã tự tiêu biến hoàn toàn theo chu kỳ tự nhiên.',
    detailedAnswer: [
      'Khi phụ nữ rụng trứng hàng tháng, nang noãn vỡ ra có thể rỉ một ít máu bên trong tạo thành "nang xuất huyết chức năng".',
      'Nang này hoàn toàn bình thường và sẽ tự hấp thu biến mất sau 1-2 chu kỳ kinh nguyệt.',
      'Bằng chứng rõ ràng: Phiếu siêu âm ngày 09/09/2026 tại BV Hùng Vương ghi nhận cả Buồng trứng Phải và Buồng trứng Trái đều: "KHÔNG U".'
    ]
  },

  // =========================================================================
  // NHÓM 2: CƠ CHẾ NGHỊCH LÝ TAMOXIFEN & VÌ SAO BỊ RONG KINH
  // =========================================================================
  {
    id: 'qa-6',
    category: 'tamoxifen_mechanism',
    categoryLabel: 'Cơ Chế Tamoxifen',
    question: 'Tại sao Tamoxifen là thuốc chữa K vú mà lại gây ra bệnh ở tử cung?',
    shortSummary: 'Do Tamoxifen thuộc nhóm SERM có tính chất "chìa khóa 2 mặt": Chặn ở vú nhưng kích hoạt ở tử cung.',
    detailedAnswer: [
      'Thuốc hoạt động theo cơ chế SERM (Chất điều hòa thụ thể Estrogen chọn lọc):',
      '• Tại mô tuyến vú: Thuốc khóa chặt thụ thể Estrogen để ngăn tế bào K vú phát triển.',
      '• Tại mô nội mạc tử cung: Do các protein đồng hoạt hóa (Co-activators) ở tử cung khác ở vú, thuốc lại có hoạt tính kích thích nhẹ tương tự hormone Estrogen.',
      'Sau 5 năm uống thuốc liên tục, sự kích thích tích lũy này khiến niêm mạc tử cung tăng sản và kích thích khối nhân xơ phát triển.'
    ]
  },
  {
    id: 'qa-7',
    category: 'tamoxifen_mechanism',
    categoryLabel: 'Cơ Chế Tamoxifen',
    question: 'Tại sao tôi uống thuốc 5 năm không sao, vừa ngưng thuốc tháng 01/2026 thì lại bùng phát rong kinh?',
    shortSummary: 'Do sự sụt giảm nội tiết đột ngột sau ngưng thuốc kết hợp rối loạn chu kỳ rụng trứng ở tuổi 45.',
    detailedAnswer: [
      'Khi uống thuốc 5 năm, niêm mạc tử cung ở trạng thái "ổn định cưỡng bức" dưới tác động của phân tử SERM.',
      'Tháng 1/2026 khi ngưng thuốc: Nồng độ SERM giảm dần, trục nội tiết buồng trứng - tử cung tự thiết lập lại.',
      'Ở độ tuổi 45 (giai đoạn tiền mãn kinh): Buồng trứng thường xuyên có các chu kỳ không rụng trứng, dẫn đến thiếu Progesterone đối kháng tự nhiên.',
      'Lớp niêm mạc dày tích tụ qua 5 năm bắt đầu bong tróc rải rác từng mảng, không bong đồng loạt, tạo ra tình trạng rong huyết rỉ rả kéo dài.'
    ]
  },

  // =========================================================================
  // NHÓM 3: 4 PHÁC ĐỒ ĐIỀU TRỊ & PHƯƠNG ÁN AN TOÀN NHẤT
  // =========================================================================
  {
    id: 'qa-8',
    category: 'treatment_options',
    categoryLabel: 'Phác Đồ Điều Trị',
    question: 'Hiện nay có những cách nào để xử lý dứt điểm tình trạng của tôi?',
    shortSummary: 'Có 4 phương án y khoa chính: Phẫu thuật nội soi cắt tử cung bảo tồn buồng trứng, Nội soi buồng tử cung, Vòng Mirena và Theo dõi.',
    detailedAnswer: [
      '1. Phẫu thuật nội soi cắt tử cung toàn phần BẢO TỒN 2 BUỒNG TRỨNG: Giải pháp triệt để 100% triệu chứng, không lo ung thư tử cung, không gây mãn kinh sớm, không dùng thuốc nội tiết.',
      '2. Nội soi buồng tử cung (Hysteroscopy): Đưa camera qua âm đạo cắt gọt mảng tăng sản, bảo tồn tử cung, về trong ngày.',
      '3. Vòng nội tiết Progestin tại chỗ (Mirena - LNG-IUD): Làm teo mỏng niêm mạc tại chỗ, cần bác sĩ ung bướu đồng thuận.',
      '4. Theo dõi định kỳ & Thuốc cầm máu (Tranexamic Acid): Dành cho trường hợp mất máu ít và muốn chờ cơ thể tự ổn định.'
    ]
  },
  {
    id: 'qa-9',
    category: 'treatment_options',
    categoryLabel: 'Phác Đồ Điều Trị',
    question: 'Vì sao "Phẫu thuật nội soi cắt tử cung bảo tồn 2 buồng trứng" được xem là lựa chọn tối ưu lâu dài nhất cho tôi?',
    shortSummary: 'Vì giải quyết trọn vẹn cả 3 vấn đề (Tăng sản niêm mạc + Adenomyosis + U xơ 45mm) trong 1 lần duy nhất mà không ảnh hưởng nội tiết.',
    detailedAnswer: [
      'Chị hiện 45 tuổi và đã hoàn thành kế hoạch sinh con. Tình trạng rong kinh là do phối hợp cả 3 bệnh lý: Tăng sản nội mạc + Lạc tuyến cơ thành sau + Khối u xơ 45mm.',
      'Nếu chỉ nạo sinh thiết hay cắt mảng tăng sản, khối u 45mm và Adenomyosis vẫn còn trong cơ tử cung và có thể tiếp tục gây rong kinh trong tương lai.',
      'Phẫu thuật cắt tử cung giúp dứt điểm 100% rong kinh, xóa bỏ vĩnh viễn nguy cơ ung thư tử cung & cổ tử cung.',
      'ĐẶC BIỆT: Giữ nguyên 2 buồng trứng giúp chị hoàn toàn không bị mãn kinh sớm, cơ thể vẫn giữ nguyên nét trẻ trung và hormone nữ tự nhiên!'
    ]
  },
  {
    id: 'qa-10',
    category: 'treatment_options',
    categoryLabel: 'Phác Đồ Điều Trị',
    question: 'Người có tiền sử K vú có được đặt vòng nội tiết Mirena không?',
    shortSummary: 'Có thể cân nhắc nhưng CẦN BÁC SĨ UNG BƯỚU ĐỒNG THUẬN bằng văn bản.',
    detailedAnswer: [
      'Vòng Mirena giải phóng hormone Levonorgestrel (Progestin) với nồng độ tại buồng tử cung rất cao, nhưng nồng độ ngấm vào máu toàn thân là cực kỳ thấp (< 1/10 so với uống).',
      'Nhiều nghiên cứu quốc tế (ACOG, Cochrane) cho thấy Mirena rất hiệu quả trong điều trị dày niêm mạc do Tamoxifen.',
      'Tuy nhiên, vì chị có tiền sử K vú nhạy cảm nội tiết, mọi liệu pháp chứa Progestin đều cần sự đồng thuận giữa Bác sĩ Phụ khoa và Bác sĩ Ung bướu điều trị K vú.'
    ]
  },

  // =========================================================================
  // NHÓM 4: GIẢI TỎA THẮC MẮC VỀ PHẪU THUẬT CẮT TỬ CUNG BẢO TỒN BUỒNG TRỨNG
  // =========================================================================
  {
    id: 'qa-11',
    category: 'surgery_reassurance',
    categoryLabel: 'Phẫu Thuật Nội Soi',
    question: 'Cắt tử cung bảo tồn 2 buồng trứng có làm tôi bị mãn kinh sớm, bốc hỏa hay già nhanh không?',
    shortSummary: 'HOÀN TOÀN KHÔNG. Buồng trứng mới là nơi sản xuất hormone nữ, tử cung chỉ là "ngôi nhà chứa em bé".',
    detailedAnswer: [
      'Nhiều người thường lầm tưởng cắt tử cung là mất hết nội tiết nữ. Thực tế khoa học:',
      '• BUỒNG TRỨNG mới là cơ quan sản xuất Estrogen và Progesterone duy trì nét nữ tính, làn da, vóc dáng và sinh lý.',
      '• TỬ CUNG chỉ có 2 chức năng: Mang thai và tạo ra kinh nguyệt hàng tháng.',
      'Khi phẫu thuật nội soi bảo tồn 2 buồng trứng: Bác sĩ giữ nguyên vẹn 100% hai buồng trứng và hệ mạch máu nuôi dưỡng. Cơ thể chị tiếp tục tiết hormone bình thường theo đúng nhịp sinh học tự nhiên, hoàn toàn không bị bốc hỏa, không khô rát hay già nhanh!'
    ],
    clinicalHighlight: 'Chị sẽ chỉ không còn kinh nguyệt hàng tháng (chấm dứt nỗi khổ rong kinh), trong khi nội tiết và tâm sinh lý vẫn nguyên vẹn.'
  },
  {
    id: 'qa-12',
    category: 'surgery_reassurance',
    categoryLabel: 'Phẫu Thuật Nội Soi',
    question: 'Mổ nội soi cắt tử cung diễn ra như thế nào? Nằm viện bao lâu và hồi phục có nhanh không?',
    shortSummary: 'Mổ qua 3 lỗ nhỏ 5-10mm ở bụng, nằm viện 1-2 ngày, đi lại nhẹ nhàng sau 24h và hồi phục sau 1-2 tuần.',
    detailedAnswer: [
      'Quy trình mổ nội soi tiên tiến (Laparoscopic Total Hysterectomy):',
      '• Bác sĩ rạch 3 vết siêu nhỏ 5-10mm trên thành bụng để đưa camera và dụng cụ vi phẫu vào bóc tách tử cung nhẹ nhàng.',
      '• Cầm máu bằng dao điện lưỡng cực hiện đại, hầu như không mất máu.',
      '• Tử cung được đưa ra ngoài an toàn qua ngả âm đạo tự nhiên, khâu thẩm mỹ mỏm âm đạo.',
      'Thời gian nằm viện: Chỉ 1 - 2 ngày. Vết mổ nhỏ hầu như không để lại sẹo, ít đau và hồi phục sinh hoạt bình thường rất nhanh.'
    ]
  },
  {
    id: 'qa-13',
    category: 'surgery_reassurance',
    categoryLabel: 'Phẫu Thuật Nội Soi',
    question: 'Sau phẫu thuật cắt tử cung, tôi có phải uống thêm thuốc nội tiết hay hóa trị gì không?',
    shortSummary: 'TUYỆT ĐỐI KHÔNG CẦN. Phẫu thuật là phương pháp cơ học thuần túy, an toàn 100% cho tiền sử K vú.',
    detailedAnswer: [
      'Vì kết quả giải phẫu bệnh là TĂNG SẢN ĐIỂN HÌNH LÀNH TÍNH, phẫu thuật cắt bỏ tử cung là đã giải quyết tận gốc 100% vấn đề.',
      'Chị không cần uống bất kỳ loại thuốc nội tiết nào, không cần hóa trị hay xạ trị.',
      'Điều này cực kỳ lý tưởng cho bệnh nhân sau điều trị K vú vì tránh được hoàn toàn các tương tác thuốc nội tiết phức tạp.'
    ]
  },

  // =========================================================================
  // NHÓM 5: DINH DƯỠNG, BỔ MÁU & LỊCH TẦM SOÁT KÉP
  // =========================================================================
  {
    id: 'qa-14',
    category: 'lifestyle_followup',
    categoryLabel: 'Lối Sống & Tái Khám',
    question: 'Tôi bị rong kinh nhiều tháng làm thế nào để bù máu nhanh mà không bị táo bón hay nóng trong?',
    shortSummary: 'Bổ sung viên sắt hữu cơ (Fe fumarate/bisglycinate) kết hợp Vitamin C và chế độ ăn giàu sắt tự nhiên.',
    detailedAnswer: [
      '1. Chọn viên uống Sắt hữu cơ: Dễ hấp thu và ít gây táo bón hơn sắt vô cơ.',
      '2. Uống cùng Vitamin C: Uống viên sắt kèm nửa ly nước cam tươi hoặc nước ổi giúp tăng hấp thu sắt gấp 3 lần.',
      '3. Thực phẩm tự nhiên: Tăng cường thịt bò nạc, ức gà, lòng đỏ trứng, rau bina (chân vịt), củ dền, mộc nhĩ, nấm hương và mè đen.',
      '4. Lưu ý: Không uống viên sắt cùng lúc với sữa, trà hay cà phê (uống cách xa ít nhất 2 tiếng).'
    ]
  },
  {
    id: 'qa-15',
    category: 'lifestyle_followup',
    categoryLabel: 'Lối Sống & Tái Khám',
    question: 'Người từng bị K vú sau khi dừng Tamoxifen có được uống sữa đậu nành hay thực phẩm chức năng không?',
    shortSummary: 'Đậu nành thực phẩm ăn uống bình thường thì an toàn, nhưng TUYỆT ĐỐI TRÁNH viên uống mầm đậu nành đậm đặc hay sâm tố nữ.',
    detailedAnswer: [
      '• Thực phẩm tự nhiên (Đậu hũ, sữa đậu nành nấu truyền thống): Sử dụng lượng vừa phải trong bữa ăn hàng ngày là an toàn.',
      '• Thực phẩm chức năng bổ sung nội tiết (Viên mầm đậu nành cô đặc, Isoflavone liều cao, Sâm tố nữ, Tinh dầu hoa anh thảo): TUYỆT ĐỐI KHÔNG TỰ Ý SỬ DỤNG vì chúng chứa hàm lượng Phytoestrogen cao có thể kích thích thụ thể Estrogen ở mô vú.',
      'Mọi thực phẩm chức năng muốn dùng đều nên hỏi ý kiến Bác sĩ Ung bướu.'
    ]
  },
  {
    id: 'qa-16',
    category: 'lifestyle_followup',
    categoryLabel: 'Lối Sống & Tái Khám',
    question: 'Lịch khám định kỳ "Tầm Soát Kép" (Vú và Phụ Khoa) tiếp theo của tôi như thế nào?',
    shortSummary: 'Tái khám phụ khoa sau 3 tháng và tái khám tuyến vú định kỳ 6-12 tháng/lần tại BV Ung Bướu.',
    detailedAnswer: [
      '• Lịch khám Phụ khoa: Tái khám siêu âm đầu dò sau 3 tháng để theo dõi tiến triển lớp niêm mạc và khối cơ thành sau.',
      '• Lịch khám Tuyến Vú: Định kỳ mỗi 6 - 12 tháng tại bệnh viện chuyên khoa Ung bướu, thực hiện Siêu âm tuyến vú + Chụp nhũ ảnh (Mammography) hàng năm.',
      'Chỉ cần tuân thủ đúng lịch tái khám kép này, chị hoàn toàn có thể yên tâm tận hưởng cuộc sống khỏe mạnh, an vui!'
    ]
  }
];
