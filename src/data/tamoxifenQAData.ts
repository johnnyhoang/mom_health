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
    question: 'Vì sao tôi đã ngừng Tamoxifen từ tháng 1/2026, đúng ra triệu chứng tử cung phải giảm dần, đằng này đến tháng 9 mới bất thường và ngày càng tăng?',
    shortSummary: 'Do 3 cơ chế y khoa: Hiện tượng "bung ức chế" Estrogen nội sinh không đối kháng, độ trễ tích tụ mô học 6-9 tháng (Lag Phase) và sự mất kiểm soát của khối U xơ 45mm + Adenomyosis.',
    detailedAnswer: [
      '1. Hiện tượng "Bung ức chế" sau khi hết thuốc Tamoxifen: Trong suốt 5 năm, phân tử Tamoxifen liên tục gắn vào thụ thể Estrogen ở tử cung, tạo ra một trạng thái "bình ổn cưỡng bức". Khi ngưng thuốc từ tháng 1/2026, Tamoxifen đào thải hết và giải phóng hoàn toàn các thụ thể.',
      '2. Buồng trứng tuổi 45 tiết "Estrogen không đối kháng" (Unopposed Estrogen): Ở độ tuổi tiền mãn kinh, buồng trứng có nhiều chu kỳ không rụng trứng (Anovulatory cycles). Buồng trứng vẫn sản xuất lượng Estrogen dồi dào kích thích niêm mạc, nhưng lại hoàn toàn THIẾU HỤT Progesterone (do không có hoàng thể) để kìm hãm hay làm bong niêm mạc theo chu kỳ.',
      '3. Độ trễ tích tụ mô học (Endometrial Build-up Lag Phase: 6 - 9 tháng): Quá trình tăng sản không xảy ra ngay lập tức. Dưới tác động của Estrogen nội sinh không đối kháng kéo dài liên tục từ tháng 2 đến tháng 8, lớp niêm mạc âm thầm dày lên từng ngày. Đến tháng 8 - 9/2026 (sau 8 tháng tích tụ), niêm mạc dày vượt quá khả năng nuôi dưỡng của mạng lưới vi mạch máu, dẫn đến hiện tượng hoại tử bong tróc nham nhở từng mảng (breakthrough bleeding), gây rong kinh kéo dài và các đốm huyết bất thường.',
      '4. Khối U xơ 45mm và Adenomyosis thành sau bộc lộ triệu chứng: Khi niêm mạc bắt đầu bong tróc rỉ máu, khối u xơ 45mm và ổ Adenomyosis làm thành cơ tử cung bị xơ cứng, không thể co bóp siết chặt các mạch máu để tự cầm máu. Điều này khiến lượng máu ra ngày càng nhiều hơn và các triệu chứng đau tức bụng, rong kinh ngày càng tăng dần vào tháng 9.'
    ],
    clinicalHighlight: 'Triệu chứng bùng phát vào tháng 9/2026 là quy luật diễn tiến tự nhiên của pha tích tụ mô học (Lag phase) kết hợp Estrogen không đối kháng ở tuổi tiền mãn kinh, hoàn toàn không phải do ung thư tái phát.',
    doctorQuestionToAsk: '"Thưa bác sĩ, có phải việc ngưng Tamoxifen tháng 1/2026 đã giải phóng thụ thể estrogen, kết hợp với chu kỳ không phóng noãn tuổi 45 đã tạo ra độ trễ 8 tháng tích tụ niêm mạc gây rong kinh rộ lên vào tháng 9 không?"'
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
  },

  // =========================================================================
  // NHÓM 6: CÂN NHẮC ẢNH HƯỞNG NGƯỢC LÊN UNG THƯ VÚ & DƯỢC LÂM SÀNG
  // =========================================================================
  {
    id: 'qa-17',
    category: 'treatment_options',
    categoryLabel: 'Cân Nhắc K Vú',
    question: 'Những loại thuốc phụ khoa nào TUYỆT ĐỐI CHỐNG CHỈ ĐỊNH (Cấm dùng) cho bệnh nhân có tiền sử K vú?',
    shortSummary: 'Tuyệt đối cấm dùng: Liệu pháp hormone thay thế Estrogen (HRT), Thuốc tránh thai kết hợp, Progestin uống toàn thân liều cao & Viên mầm đậu nành đậm đặc.',
    detailedAnswer: [
      '1. Liệu pháp Hormone Thay Thế (HRT) chứa Estrogen: Thử nghiệm lâm sàng HABITS đã chứng minh Estrogen ngoại sinh làm tăng nguy cơ tái phát K vú lên 2.4 lần.',
      '2. Thuốc Progestin uống toàn thân (Dydrogesterone, Medroxyprogesterone): Làm tăng nguy cơ kích hoạt thụ thể PR ở mô vú.',
      '3. Thuốc tránh thai phối hợp (hàng ngày hoặc khẩn cấp): Chứa cả estrogen và progestin liều cao.',
      '4. Các loại thực phẩm chức năng kích thích nội tiết (Sâm tố nữ, Mầm đậu nành cô đặc, Tinh dầu hoa anh thảo liều cao): Tiềm ẩn phytoestrogen kích thích mô vú.',
      'Nguyên tắc vàng: Mọi giải pháp điều trị phụ khoa cho chị nên ưu tiên PHƯƠNG PHÁP CƠ HỌC / PHẪU THUẬT NỘI SOI hoặc THUỐC KHÔNG HORMONE để giữ an toàn tuyệt đối 100% cho tuyến vú.'
    ],
    clinicalHighlight: 'Đây là lý do Phẫu thuật nội soi cắt tử cung bảo tồn buồng trứng vượt trội hơn hẳn các biện pháp điều trị nội tiết kéo dài.'
  },
  {
    id: 'qa-18',
    category: 'surgery_reassurance',
    categoryLabel: 'Cân Nhắc K Vú',
    question: 'Nếu mổ cắt tử cung BẢO TỒN 2 BUỒNG TRỨNG, buồng trứng vẫn tiết hormone có làm tăng nguy cơ tái phát K vú không?',
    shortSummary: 'KHÔNG LÀM TĂNG NGUY CƠ TÁI PHÁT K VÚ. Nồng độ hormone tự nhiên của cơ thể ở tuổi 45 là sinh lý bình thường sau 5 năm Tamoxifen.',
    detailedAnswer: [
      'Chị đã hoàn thành 5 năm điều trị Tamoxifen (2021 - 01/2026). Theo phác đồ chuẩn quốc tế của ASCO và NCCN, 5 năm Tamoxifen đã hoàn thành xuất sắc sứ mệnh bảo vệ và giảm thiểu tối đa nguy cơ tái phát K vú.',
      'Sau 5 năm, cơ thể bước vào giai đoạn theo dõi tự nhiên. Ở độ tuổi 45, buồng trứng đang trong quá trình chuyển tiếp tiền mãn kinh sinh lý bình thường.',
      'Việc giữ lại 2 buồng trứng chỉ duy trì lượng hormone nội sinh tự nhiên để bảo vệ tim mạch, xương khớp và não bộ của người phụ nữ, hoàn toàn KHÔNG đưa thêm bất kỳ hormone nhân tạo nào vào cơ thể.',
      'Hàng loạt nghiên cứu theo dõi dài hạn khẳng định: Phụ nữ sau 5 năm Tamoxifen được phẫu thuật phụ khoa bảo tồn buồng trứng có tỷ lệ sống không bệnh (DFS) hoàn toàn tương đương nhóm không phẫu thuật.'
    ],
    clinicalHighlight: 'Không cần thiết phải cắt bỏ 2 buồng trứng lành tính trừ khi bệnh nhân có mang đột biến gen di truyền BRCA1/BRCA2.'
  },
  {
    id: 'qa-19',
    category: 'treatment_options',
    categoryLabel: 'Cân Nhắc K Vú',
    question: 'Tại sao Bác sĩ Ung bướu thường rất đắn đo khi Bác sĩ Phụ khoa đề xuất đặt vòng nội tiết Mirena (LNG-IUD)?',
    shortSummary: 'Do tranh cãi về lượng vi liều Progestin hấp thu vào máu có thể tác động lên thụ thể PR của tế bào K vú nhạy cảm nội tiết.',
    detailedAnswer: [
      'Góc nhìn của Bác sĩ Phụ khoa: Vòng Mirena là giải pháp tuyệt vời tại chỗ, nồng độ Levonorgestrel trong buồng tử cung cực cao giúp làm teo mỏng niêm mạc và cầm máu rong kinh 90-95% mà không cần phẫu thuật.',
      'Góc nhìn thận trọng của Bác sĩ Ung bướu: Mặc dù nồng độ thuốc ngấm vào máu rất thấp (khoảng 0.1 - 0.2 ng/mL), nhưng trên bệnh nhân có khối u vú nhạy cảm nội tiết (ER+/PR+), mọi nguồn Progestin ngoại sinh liên tục trong 5 năm đều có nguy cơ tiềm ẩn vi thể.',
      'Đặc biệt, vì chị ĐÃ DỪNG TAMOXIFEN (tháng 1/2026), không còn thuốc Tamoxifen ở mô vú để che chắn, nên việc đưa thêm Progestin vào cơ thể cần phải được Bác sĩ Ung bướu cân nhắc cực kỳ cẩn trọng.'
    ],
    doctorQuestionToAsk: '"Thưa bác sĩ Ung bướu, với thể K vú trước đây của tôi (ER/PR status), tôi có đủ điều kiện an toàn để đặt vòng nội tiết Mirena cầm máu tử cung không?"'
  },
  {
    id: 'qa-20',
    category: 'treatment_options',
    categoryLabel: 'Cân Nhắc K Vú',
    question: 'Thuốc cầm máu Tranexamic Acid (Transamin) có tương tác xấu gì sau 5 năm uống Tamoxifen không?',
    shortSummary: 'Thuốc không chứa hormone nên 100% an toàn với tuyến vú, nhưng cần lưu ý thời gian dùng ngắn ngày để tránh nguy cơ huyết khối.',
    detailedAnswer: [
      '1. Về mặt Tuyến Vú: Tranexamic Acid là chất ức chế enzym tiêu sợi huyết (Plasminogen), hoàn toàn không phải hormone nên 0% nguy cơ tái phát ung thư vú.',
      '2. Về mặt Mạch Máu: Tamoxifen trong 5 năm qua có thể làm tăng nhẹ tính đông máu. Vì vậy, Tranexamic Acid chỉ nên uống trong những ngày ra máu nhiều nhất (khoảng 3 - 5 ngày mỗi chu kỳ) theo đúng liều lượng bác sĩ kê đơn, không tự ý uống kéo dài liên tục hàng tháng trời nếu có tiền sử viêm tắc tĩnh mạch.'
    ]
  },
  {
    id: 'qa-21',
    category: 'lifestyle_followup',
    categoryLabel: 'Cân Nhắc K Vú',
    question: 'Hiệu ứng giảm dần của Tamoxifen trên tử cung thường kéo dài trong bao lâu?',
    shortSummary: 'Thuốc đào thải khỏi máu sau 4-6 tuần, nhưng quá trình thoái triển mô học của niêm mạc tử cung cần từ 6 đến 12 tháng (trung bình 9-12 tháng).',
    detailedAnswer: [
      '1. Về mặt nồng độ thuốc trong máu (Dược động học): Phân tử Tamoxifen và chất chuyển hóa Endoxifen có thời gian bán thải từ 7-14 ngày. Cơ thể mất khoảng 4 đến 6 tuần (kể từ tháng 1/2026) để đào thải 100% hoạt chất ra khỏi hệ tuần hoàn.',
      '2. Về mặt biến đổi cấu trúc mô học tử cung (Dược lực học): Các tổn thương tích lũy qua 5 năm (giãn nang tuyến, phù nề mô đệm, dày niêm mạc) không thể biến mất ngay sau khi hết thuốc, mà cần từ 6 ĐẾN 12 THÁNG để thoái triển dần.',
      '3. Vì sao có "hiệu ứng giảm dần" nhưng vẫn bị xuất huyết sau 9 tháng: Đúng là tác động kích thích của Tamoxifen đã giảm dần, nhưng ở tháng thứ 8-9, lớp niêm mạc dày tích tụ chưa kịp thoái triển hết lại gặp phải tình trạng "Estrogen nội sinh không đối kháng" của buồng trứng tuổi tiền mãn kinh và khối U xơ 45mm, dẫn đến hiện tượng bong tróc rỉ máu nham nhở.'
    ],
    clinicalHighlight: 'Mốc 9 tháng (tháng 9/2026) chính là điểm giao thoa giữa giai đoạn cuối của sự thoái triển Tamoxifen (6-12 tháng) và sự tái kích hoạt của nội tiết buồng trứng tự nhiên.'
  },
  {
    id: 'qa-22',
    category: 'surgery_reassurance',
    categoryLabel: 'Phẫu Thuật Nội Soi',
    question: 'Quan hệ vợ chồng sau phẫu thuật cắt tử cung bảo tồn 2 buồng trứng có bị ảnh hưởng hay đau đớn không?',
    shortSummary: 'HOÀN TOÀN KHÔNG ẢNH HƯỞNG TIÊU CỰC. Ngược lại, đời sống vợ chồng còn thoải mái hơn vì không còn bị rong kinh hay đau tức bụng.',
    detailedAnswer: [
      '1. Về mặt giải phẫu: Bác sĩ chỉ cắt thân tử cung và khâu kín mỏm âm đạo lại ở phía trong cùng. Chiều dài ống âm đạo vẫn được giữ nguyên vẹn 100%.',
      '2. Về mặt cảm giác & cực khoái: Cảm giác thăng hoa của phụ nữ do các dây thần kinh ở âm vật (Clitoris) và 1/3 ngoài âm đạo chi phối, hoàn toàn không nằm ở tử cung.',
      '3. Về mặt bôi trơn: Hai buồng trứng được giữ nguyên nên tiếp tục tiết Estrogen tự nhiên, đảm bảo độ ẩm mượt mà sinh lý, không gây khô rát.',
      '4. Thời gian kiêng cữ: Chỉ cần kiêng quan hệ 6 - 8 tuần sau mổ để vết khâu mỏm âm đạo lành hẳn. Sau đó sinh hoạt vợ chồng diễn ra hoàn toàn bình thường và thăng hoa hơn vì không còn nỗi ám ảnh rong kinh.'
    ],
    clinicalHighlight: 'Hơn 90% phụ nữ sau phẫu thuật cắt tử cung bảo tồn buồng trứng chia sẻ chất lượng đời sống vợ chồng tốt hơn rõ rệt.'
  },
  {
    id: 'qa-23',
    category: 'lifestyle_followup',
    categoryLabel: 'Lối Sống & Tái Khám',
    question: 'Khi nào bệnh nhân sau 5 năm Tamoxifen cần chụp Cộng hưởng từ (MRI Tuyến Vú) thay vì chỉ Siêu âm và Nhũ ảnh?',
    shortSummary: 'MRI Tuyến Vú có độ nhạy cao nhất (> 90%), được chỉ định khi mô vú quá đặc (Dense Breast), nghi ngờ tái phát hoặc có đột biến gen BRCA.',
    detailedAnswer: [
      '• Bộ đôi tiêu chuẩn hàng năm: Siêu âm Doppler màu tuyến vú + Chụp nhũ ảnh kỹ thuật số (Mammography) là đủ cho hầu hết phụ nữ theo dõi sau 5 năm Tamoxifen.',
      '• Khi nào bác sĩ chỉ định thêm MRI Vú cản từ (Dynamic Contrast-Enhanced MRI):',
      '  1. Bệnh nhân có mô tuyến vú quá dày đặc (Type C hoặc Type D trên nhũ ảnh làm che khuất tổn thương nhỏ).',
      '  2. Có tổn thương nghi ngờ trên siêu âm/nhũ ảnh nhưng chưa thể khẳng định chắc chắn.',
      '  3. Bệnh nhân có mang đột biến gen di truyền BRCA1 hoặc BRCA2 (thuộc nhóm nguy cơ cao).'
    ],
    doctorQuestionToAsk: '"Thưa bác sĩ, mô tuyến vú của tôi trên kết quả nhũ ảnh thuộc loại nào (đặc hay mỡ)? Tôi có cần chụp thêm MRI tuyến vú không?"'
  },
  {
    id: 'qa-24',
    category: 'tamoxifen_mechanism',
    categoryLabel: 'Cân Nhắc K Vú',
    question: 'Nếu sau này Bác sĩ Ung bướu chỉ định đổi sang Thuốc ức chế men Aromatase (AI - Letrozole/Anastrozole), tử cung có bị rong kinh nữa không?',
    shortSummary: 'TUYỆT ĐỐI KHÔNG BỊ DÀY TỬ CUNG HAY RONG KINH. Thuốc AI có cơ chế làm teo mỏng niêm mạc tử cung triệt để.',
    detailedAnswer: [
      '• Khác biệt bản chất: Tamoxifen là SERM (vừa chặn ở vú vừa kích thích ở tử cung), còn thuốc AI (Letrozole, Anastrozole, Exemestane) là thuốc ức chế men Aromatase làm giảm nồng độ Estrogen toàn thân xuống mức cực thấp (< 2-5 pg/mL).',
      '• Tác động lên tử cung: Vì không còn Estrogen, lớp niêm mạc tử cung sẽ teo mỏng hoàn toàn, không có hiện tượng tăng sản, không sinh polyp và không bao giờ gây rong kinh.',
      '• Điểm cần chú ý của thuốc AI: Vì Estrogen xuống thấp nên cần theo dõi mật độ xương (ngừa loãng xương) và bổ sung Canxi + D3.'
    ],
    clinicalHighlight: 'Thuốc AI là giải pháp thay thế hoàn hảo không để lại bất kỳ tác dụng phụ nào trên tử cung.'
  },
  {
    id: 'qa-25',
    category: 'lifestyle_followup',
    categoryLabel: 'Lối Sống & Tái Khám',
    question: 'Bị đau nhức cơ xương khớp, cứng khớp ngón tay sau 5 năm uống Tamoxifen thì khắc phục bằng cách nào?',
    shortSummary: 'Vận động thể thao nhẹ nhàng hàng ngày, bổ sung Glucosamine Sulfate, Collagen Type 2, Omega-3 và ngâm chân nước ấm.',
    detailedAnswer: [
      '1. Cơ chế: Sự biến động của nồng độ nội tiết tố qua 5 năm làm giảm sự bôi trơn ổ khớp và tăng phản ứng viêm nhẹ quanh gân cơ.',
      '2. Vận động trị liệu: Đi bộ nhanh 30 phút mỗi ngày, tập Yoga dưỡng sinh hoặc bơi lội giúp kích thích bao hoạt dịch tiết dịch khớp nuôi dưỡng sụn.',
      '3. Thực phẩm bổ sung an toàn cho K vú: Glucosamine Sulfate (1500mg/ngày), Collagen Type II không biến tính, Vitamin D3 + K2, Dầu cá Omega-3 tinh khiết.',
      '4. Liệu pháp nhiệt: Ngâm chân nước ấm với gừng và muối thảo dược vào buổi tối trước khi ngủ giúp giãn mạch, giảm đau và ngủ ngon sâu giấc.'
    ]
  },
  {
    id: 'qa-26',
    category: 'case_results',
    categoryLabel: 'Cân Nhắc K Vú',
    question: 'Tôi có cần làm xét nghiệm gen di truyền (BRCA1, BRCA2, đa gen) sau 5 năm điều trị ung thư vú không?',
    shortSummary: 'RẤT NÊN CÂN NHẮC nếu được chẩn đoán K vú ở tuổi trẻ (< 50 tuổi) hoặc gia đình có người mắc ung thư vú / buồng trứng.',
    detailedAnswer: [
      '• Mục đích xét nghiệm gen mầm (Germline Genetic Testing): Xét nghiệm qua mẫu máu hoặc niêm mạc miệng để phát hiện đột biến di truyền *BRCA1, BRCA2, PALB2, TP53, CHEK2*.',
      '• Lợi ích mang lại:',
      '  1. Định hướng theo dõi buồng trứng: Nếu mang đột biến BRCA1/2, phẫu thuật phụ khoa sẽ cân nhắc cắt cả 2 buồng trứng để ngừa ung thư buồng trứng.',
      '  2. Định hướng dùng thuốc mới: Bệnh nhân có đột biến BRCA được chỉ định thuốc ức chế PARP trúng đích (Olaparib / Lynparza) giúp giảm 32% tử vong.',
      '  3. Giá trị cho người thân: Giúp con gái và chị em gái trong gia đình có kế hoạch tầm soát sớm chủ động.'
    ],
    doctorQuestionToAsk: '"Thưa bác sĩ Ung bướu, với bệnh án của tôi, tôi có thuộc nhóm chỉ định làm xét nghiệm gen di truyền BRCA1/2 không?"'
  },
  {
    id: 'qa-27',
    category: 'case_results',
    categoryLabel: 'Giải Mã Bệnh Án',
    question: 'Tôi làm thủ thuật sinh thiết Pipelle vào Ngày 17 của chu kỳ kinh nguyệt, độ dày nội mạc tử cung có bị ảnh hưởng bởi chu kỳ kinh không?',
    shortSummary: 'ẢNH HƯỞNG RẤT LỚN VÀ HOÀN TOÀN TỰ NHIÊN. Ngày 17 chu kỳ là thời điểm niêm mạc tử cung đạt độ dày sinh lý tối đa (Pha phân tiết hoàng thể).',
    detailedAnswer: [
      '• Tương quan chu kỳ sinh lý: Ngày đầu tiên của kỳ kinh nguyệt gần nhất là 24/08/2026. Đến ngày làm thủ thuật sinh thiết Pipelle (09/09/2026) chính là Ngày 17 của chu kỳ.',
      '• Đặc điểm mô học của Ngày 17 (Pha phân tiết / Secretory phase): Dưới tác động của Progesterone do hoàng thể tiết ra, niêm mạc tử cung sinh lý bình thường luôn dày lên từ 10 - 16mm, các ống tuyến cuộn xoắn và phình to chứa đầy chất nhầy dinh dưỡng.',
      '• Kết luận lâm sàng: Hình ảnh siêu âm thấy nội mạc dày và mô tả vi thể BV Hùng Vương "ống tuyến giãn rộng dạng bọc, lót biểu mô trụ cao" là sự kết hợp hoàn toàn tự nhiên giữa Pha phân tiết của Ngày 17 chu kỳ và dư âm tích tụ 5 năm Tamoxifen. Đây là hiện tượng sinh lý lành tính, tuyệt đối KHÔNG PHẢI là dấu hiệu ung thư hay bệnh lý ác tính!'
    ],
    clinicalHighlight: 'Đo độ dày niêm mạc tử cung vào pha phân tiết/hoàng thể (sau rụng trứng) luôn có giá trị sinh lý dày hơn nhiều so với pha đầu chu kỳ.',
    doctorQuestionToAsk: '"Thưa bác sĩ, tôi làm sinh thiết vào ngày 17 của chu kỳ (pha hoàng thể), vậy hình ảnh tuyến giãn rộng trên GPB có phải là phản ánh sinh lý pha phân tiết kết hợp Tamoxifen không?"'
  },
  {
    id: 'qa-28',
    category: 'lifestyle_followup',
    categoryLabel: 'Giải Mã Triệu Chứng',
    question: 'Huyết trắng màu cam nhạt hoặc đốm cam rải rác sau quan hệ / tập aerobic là gì, có nguy hiểm không?',
    shortSummary: 'ĐÂY LÀ HIỆN TƯỢNG RỈ MÁU VI THỂ HOÀN TOÀN LÀNH TÍNH do máu cực ít bị oxy hóa trong môi trường axit âm đạo hoặc rỉ máu quanh rụng trứng.',
    detailedAnswer: [
      '• Cơ chế đổi màu cam: Khi chỉ có vài giọt máu vi thể (< 0.5ml) rỉ ra, lượng hồng cầu này hòa lẫn với dịch nhầy âm đạo có tính axit (pH 3.8 - 4.5). Hemoglobin (Fe2+) bị oxy hóa thành Methemoglobin (Fe3+), tạo nên sắc tố màu vàng cam hoặc cam nhạt thay vì màu đỏ tươi.',
      '• 3 nguyên nhân xuất hiện đốm cam trong nhật ký:',
      '  1. Rỉ máu quanh ngày rụng trứng (Periovulatory spotting - ngày 03-08/09): Do nồng độ Estrogen giảm tạm thời khi nang trứng phóng noãn.',
      '  2. Sau sinh hoạt vợ chồng (ngày 07/09) hoặc tập aerobic (31/08): Cọ sát cơ học và tăng áp lực ổ bụng làm rỉ vài giọt dịch từ các mao mạch mỏng manh ở cổ tử cung / đáy tử cung.',
      '  3. Hồi phục sau sinh thiết Pipelle (ngày 10-14/09): Diện cắt sinh thiết đang liền sẹo đào thải nốt huyết tương lẫn ít hồng cầu.',
      '• Vì sao an tâm: Đốm cam chỉ dính nhẹ băng vệ sinh hàng ngày rồi tự ngưng, không kèm mùi hôi, không sốt, không phải xuất huyết ồ ạt bệnh lý.'
    ],
    clinicalHighlight: 'Đốm cam rải rác quanh ngày rụng trứng hoặc sau vận động là hiện tượng sinh lý - cơ học vô hại, không có yếu tố ác tính.'
  },
  {
    id: 'qa-29',
    category: 'tamoxifen_mechanism',
    categoryLabel: 'Cân Nhắc K Vú',
    question: 'Vào ngày 15/09/2026 tôi bị căng đau tức vú phải nhiều và vú trái ít hơn, kèm đau bụng dưới và đau lưng, có phải ung thư vú tái phát không?',
    shortSummary: 'TUYỆT ĐỐI KHÔNG PHẢI K VÚ TÁI PHÁT. Đây là triệu chứng Căng đau ngực tiền kinh nguyệt (PMS Mastalgia) điển hình ở pha hoàng thể.',
    detailedAnswer: [
      '• Bản chất y học: Ngày 15/09 là Ngày 23 của chu kỳ kinh nguyệt (khoảng 5-7 ngày trước khi kỳ kinh tiếp theo bắt đầu).',
      '• Cơ chế gây đau ngực (PMS): Ở pha hoàng thể muộn, nồng độ Progesterone và Estrogen đang ở mức cao kích thích các ống tuyến và tiểu thùy vú giữ nước, gây cương tức và căng đau cả 2 bầu ngực (vú phải và vú trái). Đồng thời, hormone này gây giữ nước nhẹ vùng chậu và co thắt cơ trơn gây đau âm ỉ bụng dưới và đau mỏi thắt lưng.',
      '• Phân biệt với K vú: Khối u ung thư vú là tổn thương khu trú cố định, tiến triển âm thầm và hầu như không gây đau theo chu kỳ. Triệu chứng đau căng vú xuất hiện đồng thời cả 2 bên theo chu kỳ kinh nguyệt là biểu hiện sinh lý nội tiết của tuyến vú bình thường.',
      '• Chăm sóc: Mặc áo ngực nâng đỡ êm ái không gọng, chườm ấm nhẹ, hạn chế muối ăn và cà phê. Triệu chứng sẽ tự biến mất sau khi hành kinh.'
    ],
    clinicalHighlight: 'Căng đau vú 2 bên vào ngày 23 chu kỳ kèm đau lưng là hội chứng tiền kinh nguyệt (PMS) 100%, khẳng định hệ trục nội tiết buồng trứng vẫn đang hoạt động sinh lý.'
  },
  {
    id: 'qa-30',
    category: 'case_results',
    categoryLabel: 'Lịch Sử Chu Kỳ',
    question: 'Lịch sử theo dõi kinh nguyệt từ 2022 đến 2024 cho thấy chu kỳ của tôi thường dài 35-40 ngày, điều này có ý nghĩa gì đối với việc chẩn đoán nội mạc tử cung và Tamoxifen?',
    shortSummary: 'ĐÂY LÀ "BẰNG CHỨNG VÀNG" KHẲNG ĐỊNH CƠ ĐỊA CHU KỲ DÀI SINH LÝ TỰ NHIÊN, buồng trứng hoạt động bền bỉ và giải thích chính xác thời điểm rụng trứng.',
    detailedAnswer: [
      '• Cơ địa chu kỳ dài sinh lý (Normal Long Cycle): Dữ liệu theo dõi liên tục 21 chu kỳ (2022 – 2024) cho thấy độ dài trung bình là 36.8 ngày (81% chu kỳ trong khoảng 34-42 ngày) và số ngày hành kinh cực kỳ ổn định (chuẩn 5 ngày). Đây là nhịp sinh học tự nhiên của cơ thể chị, không phải bệnh lý.',
      '• Tương quan cửa sổ rụng trứng: Với chu kỳ 35-40 ngày, pha hoàng thể luôn cố định 14 ngày trước kỳ kinh tiếp theo, nghĩa là thời điểm rụng trứng của chị thường rơi vào khoảng Ngày 21 – 26 của chu kỳ (hoặc ngày 15-17 ở các chu kỳ 30-31 ngày).',
      '• Ý nghĩa chẩn đoán Pipelle ngày 17: Khi làm sinh thiết ngày 17 (09/09/2026), tử cung đang ở đỉnh pha tăng sinh muộn / bắt đầu phân tiết, nội mạc sinh lý tự nhiên đạt độ dày cao. Hình ảnh vi thể "ống tuyến giãn rộng dạng bọc" là phản ánh sự hòa quyện giữa pha chu kỳ và tác động 5 năm Tamoxifen.',
      '• Bác bỏ nguy cơ ác tính: Việc duy trì chu kỳ kinh nguyệt đều đặn trong suốt thời gian uống Tamoxifen chứng minh hệ trục Hạ đồi - Tuyến yên - Buồng trứng hoạt động lành mạnh. Tình trạng rong kinh sau khi ngưng thuốc (tháng 1/2026) chỉ là sự mất cân bằng thoáng qua do nội tiết tái điều hòa kết hợp khối u xơ 45mm, hoàn toàn không phải ung thư tái phát.'
    ],
    clinicalHighlight: '21 chu kỳ theo dõi dài hạn từ 2022-2024 là bằng chứng thực chứng đập tan mọi nghi ngờ về xuất huyết do ung thư ác tính.',
    doctorQuestionToAsk: '"Thưa bác sĩ, tôi có dữ liệu theo dõi chu kỳ kinh nguyệt 35-40 ngày đều đặn qua app từ năm 2022, điều này có giúp bác sĩ đánh giá chính xác hơn về nguyên nhân rong kinh sau khi ngừng Tamoxifen không?"'
  },
  {
    id: 'qa-31',
    category: 'case_results',
    categoryLabel: 'Ảnh Hưởng Thiếu Máu',
    question: 'Rong kinh kéo dài dẫn đến thiếu máu mạn tính thì có sao không? Có nguy hiểm không?',
    shortSummary: 'RẤT NGUY HIỂM NẾU ĐỂ KÉO DÀI. Thiếu máu mạn tính gây quá tải tim mạch (nguy cơ suy tim), suy nhược thần kinh, làm suy yếu hệ miễn dịch giám sát ung thư và gây khó khăn nếu phải phẫu thuật.',
    detailedAnswer: [
      '1. Gánh nặng và quá tải Tim Mạch: Khi lượng huyết sắc tố (Hemoglobin) giảm thấp, máu không đủ oxy nuôi cơ thể. Để bù đắp, tim bắt buộc phải đập nhanh hơn, co bóp mạnh hơn liên tục 24/7. Lâu dài dẫn đến phì đại cơ tim, hồi hộp đánh trống ngực, khó thở khi gắng sức (leo cầu thang) và nguy cơ suy tim tăng cung lượng.',
      '2. Suy nhược Thần kinh & Thể lực: Não thiếu oxy làm giảm khả năng tập trung, hay quên, hoa mắt chóng mặt khi đứng dậy đột ngột, đau đầu mạn tính, mất ngủ. Cơ thể luôn mệt mỏi rã rời, uể oải, da dẻ xanh xao nhợt nhạt, tóc rụng nhiều và móng tay giòn gãy.',
      '3. Suy giảm Hệ Miễn Dịch (Đặc biệt quan trọng với tiền sử K vú): Cơ thể sau 5 năm điều trị K vú cần một hệ thống miễn dịch khỏe mạnh (tế bào Lympho T, đại thực bào) để giám sát và tiêu diệt các tế bào lạ. Thiếu máu và thiếu sắt kéo dài làm suy yếu chức năng miễn dịch, khiến sức đề kháng tổng thể sụt giảm rõ rệt.',
      '4. Nguy cơ phải truyền máu khi phẫu thuật: Nếu để Hemoglobin tụt sâu (< 8-9 g/dL), khi cần can thiệp phẫu thuật (như nội soi cắt tử cung), bệnh nhân sẽ phải truyền máu trước hoặc trong mổ, làm tăng chi phí và nguy cơ phản ứng dị ứng truyền máu.'
    ],
    clinicalHighlight: 'Đây chính là lý do vì sao dù kết quả GPB là LÀNH TÍNH, các bác sĩ vẫn khuyến nghị xử lý dứt điểm rong kinh sớm để bảo vệ trái tim và thể trạng lâu dài cho bệnh nhân.',
    doctorQuestionToAsk: '"Thưa bác sĩ, với tình trạng rong kinh nhiều tháng nay, chỉ số Huyết sắc tố (Hemoglobin/Hb) và Dự trữ sắt (Ferritin) hiện tại của tôi là bao nhiêu, tôi có cần bù sắt liều cao hoặc truyền sắt không?"'
  },
  {
    id: 'qa-32',
    category: 'lifestyle_followup',
    categoryLabel: 'Dinh Dưỡng & Tiêu Hóa',
    question: 'Tôi cần uống thuốc sắt liều lượng bao nhiêu khi bị rong kinh? Uống nhiều sắt có ảnh hưởng xấu đến Bệnh Trĩ hay Polyp Đại Tràng không?',
    shortSummary: 'Liều chuẩn là 60-100mg sắt nguyên tố/ngày (ưu tiên sắt hữu cơ). Uống quá liều hoặc dùng sắt vô cơ dễ gây táo bón làm nặng bệnh trĩ và gây kích ứng oxy hóa niêm mạc đại tràng.',
    detailedAnswer: [
      '1. Liều lượng thuốc sắt khuyến nghị cho rong kinh: Chuẩn y khoa là 60 – 100 mg SẮT NGUYÊN TỐ (Elemental Iron)/ngày. Nên ưu tiên chọn các dòng Sắt Hữu Cơ (Sắt Bisglycinate, Sắt Polymaltose hoặc Sắt Liposome) để hạn chế tối đa kích ứng dạ dày và giảm táo bón.',
      '2. Ảnh hưởng đến BỆNH TRĨ (Rất cần lưu ý): Thuốc sắt (đặc biệt là sắt vô cơ Sulfate hoặc khi dùng liều quá cao) lượng sắt thừa không hấp thu hết trong ruột sẽ làm phân khô cứng, vón cục và có màu đen xám. Táo bón buộc người bệnh phải rặn mạnh khi đi tiêu, làm tăng áp lực tĩnh mạch hậu môn, trực tiếp gây SƯNG ĐAU, CHẢY MÁU BÚI TRĨ và NỨT KẼ HẬU MÔN.',
      '3. Ảnh hưởng đến POLYP ĐẠI TRÀNG: Sắt tự do dư thừa trong lòng đại tràng có thể tạo ra các gốc tự do oxy hóa (Phản ứng Fenton), gây kích ứng nhẹ niêm mạc ruột. Dù uống sắt ngắn hạn (3-6 tháng) để bù máu không làm sinh ra polyp mới hay làm polyp ung thư hóa ngay, nhưng người có polyp đại tràng không nên tự ý uống sắt liều cao vô tội vạ kéo dài hàng năm trời.',
      '4. Bí quyết uống sắt an toàn cho người có tiền sử trĩ & polyp: (a) Chọn sắt hữu cơ Bisglycinate/Liposome; (b) Uống kèm nửa ly nước cam/ổi tươi (Vitamin C); (c) Uống đủ 2 - 2.5 lít nước/ngày và bổ sung nhiều chất xơ hòa tan (khoai lang, thanh long, rau mồng tơi, hạt chia); (d) Xét nghiệm lại chỉ số Huyết sắc tố (Hb) và Dự trữ sắt (Ferritin) sau 3 tháng để dừng uống khi cơ thể đã đủ sắt.'
    ],
    clinicalHighlight: 'Uống sắt cách ngày (uống 1 ngày nghỉ 1 ngày) theo khuyến cáo mới của WHO vừa giúp ruột hấp thu sắt tối ưu hơn vừa giảm hẳn 50% nguy cơ táo bón cho người bị trĩ.',
    doctorQuestionToAsk: '"Thưa bác sĩ, tôi có cơ địa trĩ/polyp đại tràng, bác sĩ có thể kê cho tôi loại sắt hữu cơ êm dịu cho đường tiêu hóa (như Sắt Bisglycinate/Liposome) và hướng dẫn liều uống cách ngày không?"'
  },
  {
    id: 'qa-33',
    category: 'case_results',
    categoryLabel: 'Đối Chiếu Lâm Sàng',
    question: 'Đối chiếu phiếu kết quả BV Từ Dũ: Bác sĩ ghi "Tăng sản điển hình nội mạc tử cung (Hyperplasia Without Atypia) nếu không điều trị sẽ tiến triển thành Ung thư" có ý nghĩa gì đối với tôi?',
    shortSummary: 'Phiếu GPB BV Từ Dũ là BẰNG CHỨNG VÀNG xác nhận "Tăng sản điển hình" chính là "Without Atypia" (Lành tính). Cảnh báo tiến triển chỉ xảy ra nếu bỏ mặc nhiều năm không xử lý; việc can thiệp sớm sẽ ngăn chặn triệt để 100% nguy cơ ung thư.',
    detailedAnswer: [
      '1. Bằng chứng văn bản vàng khẳng định thuật ngữ: Phiếu kết quả Giải phẫu bệnh thực tế tại BV Từ Dũ in rõ ràng từng chữ: "TĂNG SẢN ĐIỂN HÌNH NỘI MẠC TỬ CUNG (HYPERPLASIA WITHOUT ATYPIA) KHU TRÚ". Điều này dập tắt 100% mọi nghi ngờ về thuật ngữ: Kết quả "Tăng sản điển hình" tại BV Hùng Vương của chị chính xác tuyệt đối là tổn thương LÀNH TÍNH (Without Atypia - Không có dị sản nhân).',
      '2. Vì sao Bác sĩ cảnh báo "nếu không điều trị có nguy cơ tiến triển ung thư": Nếu một mảng tăng sản bị bỏ mặc không theo dõi trong 5 - 10 năm, dưới tác động liên tục của hormone Estrogen không đối kháng ở tuổi tiền mãn kinh, các tế bào có thể tích lũy thêm đột biến để chuyển thành Tăng sản không điển hình (EIN) rồi tiến triển thành K nội mạc tử cung (tỷ lệ khoảng 1 - 3%).',
      '3. Giá trị của việc phát hiện sớm và can thiệp chủ động: Chị đã làm sinh thiết tầm soát kịp thời tại BV Hùng Vương tháng 09/2026. Khi chúng ta chủ động can thiệp (đặc biệt là giải pháp phẫu thuật nội soi cắt tử cung bảo tồn 2 buồng trứng), toàn bộ niêm mạc tăng sản, u xơ 45mm và Adenomyosis được loại bỏ trọn vẹn, XÓA BỎ VĨNH VIỄN 100% NGUY CƠ TIẾN TRIỂN THÀNH UNG THƯ TỬ CUNG TRONG TƯƠNG LAI!',
      '4. Kết luận an tâm: Cảnh báo của bác sĩ là dành cho những người "bỏ mặc không điều trị". Chị đang chủ động thăm khám và có kế hoạch xử lý dứt điểm, vì vậy chị hoàn toàn có thể yên tâm 100% không bao giờ phải đối mặt với nguy cơ ung thư tử cung.'
    ],
    clinicalHighlight: 'Phiếu GPB BV Từ Dũ là minh chứng thực tế rõ ràng nhất chứng minh Tăng sản điển hình = Without Atypia lành tính và khẳng định giá trị bảo vệ tuyệt đối của việc can thiệp xử lý sớm.',
    doctorQuestionToAsk: '"Thưa bác sĩ, phiếu giải phẫu bệnh của tôi tương đồng với kết quả Tăng sản điển hình (Without atypia) của BV Từ Dũ, vậy khi tôi phẫu thuật nội soi xử lý triệt để thì nguy cơ ung thư tử cung sau này có bằng 0% không?"'
  },
  {
    id: 'qa-34',
    category: 'treatment_options',
    categoryLabel: 'Phác Đồ K Vú',
    question: 'Tăng sản điển hình do Tamoxifen có tự thoái triển không? Thời gian theo dõi bao lâu và phác đồ tối ưu cho bệnh nhân K vú là gì?',
    shortSummary: 'Tế bào hoàn toàn bình thường lành tính. Khoảng 60-70% có thể tự thoái triển sau 6-12 tháng ngưng Tamoxifen, nhưng do có u xơ 45mm và Adenomyosis gây rong kinh nên phẫu thuật nội soi cắt tử cung bảo tồn 2 buồng trứng là lựa chọn tối ưu và an toàn nhất.',
    detailedAnswer: [
      '1. Bản chất tế bào: TĂNG SẢN ĐIỂN HÌNH là tế bào hoàn toàn BÌNH THƯỜNG về mặt cấu trúc nhân (không đột biến, không dị sản), chỉ tăng về số lượng tế bào do kích thích nội tiết.',
      '2. Khả năng tự thoái triển & Yếu tố cản trở: Sau khi ngưng Tamoxifen, mảng tăng sản có thể tự teo mỏng sau 6 - 12 tháng. Tuy nhiên, ở trường hợp của chị, tình trạng thiếu Progesterone tuổi 45 cùng khối U xơ 45mm và Adenomyosis thành sau khiến triệu chứng rong kinh không thể tự dứt điểm.',
      '3. Thời gian theo dõi & Nguy cơ tiến triển: Nếu muốn theo dõi bảo tồn, thời gian an toàn là 3 - 6 tháng (tối đa 12 tháng). Quá trình để một tổn thương tăng sản điển hình biến đổi thành ác tính (nếu bỏ mặc không điều trị) diễn ra rất chậm, mất từ 5 ĐẾN 10 NĂM với tỷ lệ chỉ < 1-3%.',
      '4. Các bước theo dõi thoái triển: (a) Siêu âm đầu dò âm đạo (TVUS) mỗi 3 tháng đo độ dày niêm mạc và khối u xơ; (b) Xét nghiệm công thức máu (Hb) và Ferritin định kỳ; (c) Sinh thiết lại sau 6 tháng nếu niêm mạc không mỏng đi.',
      '5. Phác đồ tối ưu cho bệnh nhân K vú (ER+/PR+): PHẪU THUẬT NỘI SOI CẮT TỬ CUNG BẢO TỒN 2 BUỒNG TRỨNG là giải pháp số 1 vì: 0% dùng thuốc nội tiết (an toàn tuyệt đối cho vú), giữ nguyên 2 buồng trứng không lo mãn kinh sớm, đồng thời dứt điểm trọn vẹn cả Tăng sản + U xơ 45mm + Adenomyosis.'
    ],
    clinicalHighlight: 'Phẫu thuật nội soi cắt tử cung bảo tồn buồng trứng vừa giải quyết dứt điểm 100% rong kinh vừa triệt tiêu vĩnh viễn 100% nguy cơ ung thư tử cung mà không chạm đến nội tiết của bệnh nhân K vú.',
    doctorQuestionToAsk: '"Thưa bác sĩ, trên nền K vú thể nội tiết, giữa việc theo dõi 6 tháng và phẫu thuật nội soi cắt tử cung bảo tồn 2 buồng trứng ngay, phương án nào mang lại chất lượng sống và sự an tâm cao nhất cho tôi?"'
  }
];


