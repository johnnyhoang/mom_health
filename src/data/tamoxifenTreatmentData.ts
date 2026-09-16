export interface TreatmentOption {
  id: string;
  name: string;
  subtitle: string;
  suitabilityScore: 'Rất Phù Hợp' | 'Cân Nhắc Kỹ' | 'Lựa Chọn Tối Ưu Lâu Dài' | 'Tạm Thời';
  colorTheme: string;
  mechanism: string;
  pros: string[];
  cons: string[];
  breastCancerSafety: string;
  surgicalRecovery: string;
  recommendationNote: string;
}

export const tamoxifenTreatmentOptions: TreatmentOption[] = [
  {
    id: 'laparoscopic-hysterectomy',
    name: 'Phẫu Thuật Nội Soi Cắt Tử Cung Toàn Phần - BẢO TỒN 2 BUỒNG TRỨNG',
    subtitle: 'Giải pháp triệt để 100% triệu chứng & vĩnh viễn không còn lo âu ung thư tử cung',
    suitabilityScore: 'Lựa Chọn Tối Ưu Lâu Dài',
    colorTheme: 'emerald',
    mechanism: 'Bác sĩ đưa dụng cụ nội soi qua 3 lỗ nhỏ 5-10mm ở thành bụng để cắt trọn vẹn thân và cổ tử cung chứa khối u xơ 45mm, vùng lạc tuyến Adenomyosis và lớp niêm mạc tăng sản. GIỮ NGUYÊN HOÀN TOÀN 2 BUỒNG TRỨNG.',
    pros: [
      'Chấm dứt vĩnh viễn 100% tình trạng rong kinh, thiếu máu và đau bụng dưới.',
      'Loại bỏ hoàn toàn nguy cơ ung thư nội mạc tử cung và ung thư cổ tử cung trong tương lai.',
      'Giải quyết dứt điểm đồng thời cả 3 vấn đề: Tăng sản nội mạc + Nhân xơ 45mm + Adenomyosis thành sau.',
      'KHÔNG GÂY MÃN KINH SỚM: Giữ nguyên 2 buồng trứng giúp cơ thể tiếp tục sản xuất nội tiết tố nữ tự nhiên, không bị bốc hỏa, không khô âm đạo hay loãng xương sớm.',
      'KHÔNG CẦN DÙNG THÊM BẤT KỲ THUỐC NỘI TIẾT NÀO: Tuyệt đối an toàn cho bệnh nhân có tiền sử K vú.'
    ],
    cons: [
      'Là một cuộc can thiệp phẫu thuật nội soi cần gây mê toàn thân.',
      'Mất khả năng mang thai tự nhiên (không còn là vấn đề khi bệnh nhân 45 tuổi và đã đủ con).'
    ],
    breastCancerSafety: 'AN TOÀN TUYỆT ĐỐI 100% VỚI TUYẾN VÚ: Phương pháp này hoàn toàn không đưa bất kỳ hoạt chất nội tiết nào vào cơ thể, không làm tăng nguy cơ tái phát K vú.',
    surgicalRecovery: 'Thời gian nằm viện chỉ 1 - 2 ngày. Vết mổ nhỏ thẩm mỹ hầu như không để lại sẹo. Hồi phục sinh hoạt nhẹ sau 7 - 10 ngày.',
    recommendationNote: 'Theo khuyến cáo của các hiệp hội phụ khoa và ung bướu quốc tế, đây là phác đồ được ưu tiên hàng đầu cho phụ nữ từ 40-45 tuổi trở lên sau điều trị K vú có rong kinh mạn tính do phối hợp tổn thương cơ tử cung và nội mạc.'
  },
  {
    id: 'hysteroscopy-resection',
    name: 'Nội Soi Buồng Tử Cung Can Thiệp & Cạo Sinh Thiết Chọn Lọc (Hysteroscopy)',
    subtitle: 'Bảo tồn nguyên vẹn tử cung, xử lý trực tiếp mảng niêm mạc tăng sản',
    suitabilityScore: 'Rất Phù Hợp',
    colorTheme: 'teal',
    mechanism: 'Đưa ống nội soi siêu nhỏ gắn camera qua ngả âm đạo vào buồng tử cung (không rạch bụng), quan sát trực tiếp bề mặt niêm mạc, cắt gọt polyp hoặc bóc tách mảng tăng sản khu trú và cầm máu tại chỗ.',
    pros: [
      'Thủ thuật nhẹ nhàng qua đường tự nhiên, không có vết mổ trên bụng.',
      'Quan sát trực diện 100% lòng tử cung, lấy mẫu bệnh phẩm chính xác nhất.',
      'Cầm máu nhanh chóng các vùng niêm mạc đang rỉ máu.',
      'Bảo tồn trọn vẹn tử cung, thời gian hồi phục rất nhanh (về trong ngày).'
    ],
    cons: [
      'Không giải quyết được khối nhân xơ 45mm và ổ Adenomyosis nằm sâu trong thành cơ tử cung.',
      'Nếu sau này các ổ Adenomyosis tiếp tục rỉ máu hoặc nội mạc tái tăng sinh thì rong kinh có thể tái phát.'
    ],
    breastCancerSafety: 'AN TOÀN TUYỆT ĐỐI VỚI TIỀN SỬ K VÚ (Không sử dụng thuốc nội tiết toàn thân).',
    surgicalRecovery: 'Thủ thuật diễn ra trong 15 - 30 phút, theo dõi 2 - 4 tiếng và xuất viện trong ngày.',
    recommendationNote: 'Lựa chọn tuyệt vời nếu bệnh nhân chưa muốn phẫu thuật cắt tử cung và muốn kiểm tra trực quan lòng tử cung một cách xâm lấn tối thiểu.'
  },
  {
    id: 'mirena-iud',
    name: 'Đặt Vòng Nội Tiết Giải Phóng Progestin Tại Chỗ (Mirena - LNG-IUD)',
    subtitle: 'Làm teo mỏng niêm mạc và kiểm soát rong kinh tại chỗ',
    suitabilityScore: 'Cân Nhắc Kỹ',
    colorTheme: 'amber',
    mechanism: 'Đặt một dụng cụ hình chữ T nhỏ vào buồng tử cung để phóng thích đều đặn vi liều Levonorgestrel (Progestin) trực tiếp tại niêm mạc tử cung.',
    pros: [
      'Nồng độ thuốc tại buồng tử cung cao gấp 1000 lần so với trong máu, làm teo mỏng niêm mạc cực kỳ mạnh mẽ.',
      'Giảm lượng máu kinh 90 - 95%, cải thiện rõ rệt tình trạng thiếu máu và đau bụng do Adenomyosis.',
      'Tác dụng kéo dài 5 - 8 năm chỉ với 1 lần đặt nhẹ nhàng trong vài phút.'
    ],
    cons: [
      'Khối nhân xơ 45mm ở thành sau có thể làm biến dạng buồng tử cung, khiến vòng dễ bị lệch hoặc tụt.',
      'Có thể xuất hiện rong huyết thấm giọt li ti trong 1-3 tháng đầu sau đặt.'
    ],
    breastCancerSafety: 'CẦN HỘI CHẨN CHẶT CHẼ VỚI BÁC SĨ UNG BƯỚU: Mặc dù nồng độ Progestin đi vào máu toàn thân là cực kỳ thấp (< 1/10 so với uống), nhưng vì bệnh nhân có tiền sử ung thư vú nhạy cảm nội tiết, việc dùng bất kỳ progestin nào đều cần có sự đồng thuận của bác sĩ điều trị K vú.',
    surgicalRecovery: 'Không phẫu thuật, thực hiện tại phòng khám phụ khoa trong 3 - 5 phút.',
    recommendationNote: 'Chỉ nên thực hiện khi có sự đồng ý bằng văn bản của bác sĩ chuyên khoa ung bướu phụ trách điều trị K vú.'
  },
  {
    id: 'watchful-waiting',
    name: 'Theo Dõi Sát Định Kỳ & Điều Trị Nội Khoa Không Nội Tiết',
    subtitle: 'Chờ đợi cơ thể tự ổn định sau khi ngưng Tamoxifen (tháng 1/2026)',
    suitabilityScore: 'Tạm Thời',
    colorTheme: 'blue',
    mechanism: 'Sử dụng các thuốc cầm máu không nội tiết (Tranexamic Acid khi có kinh nhiều, viên sắt bổ máu) và theo dõi siêu âm mỗi 3 tháng.',
    pros: [
      'Không can thiệp thủ thuật hay phẫu thuật.',
      'Tận dụng hiệu ứng giảm dần của Tamoxifen: sau khi dừng thuốc tháng 1/2026, kích thích estrogenic lên nội mạc sẽ giảm theo thời gian.'
    ],
    cons: [
      'Không giải quyết được nguyên nhân gốc rễ (khối u 45mm và Adenomyosis thành sau).',
      'Nguy cơ thiếu máu mạn tính kéo dài gây mệt mỏi, suy nhược nếu rong kinh tiếp diễn.'
    ],
    breastCancerSafety: 'Hoàn toàn an toàn vì chỉ dùng thuốc cầm máu cơ học và sắt.',
    surgicalRecovery: 'Không can thiệp.',
    recommendationNote: 'Chỉ thích hợp nếu lượng máu rong kinh ít, không gây thiếu máu và bệnh nhân muốn theo dõi thêm 3-6 tháng trước khi quyết định can thiệp.'
  }
];

export const tamoxifenMechanisms = [
  {
    title: 'Tại sao Tamoxifen chống ung thư vú nhưng lại tác động lên tử cung?',
    content: 'Tamoxifen thuộc nhóm SERM (Chất điều hòa thụ thể Estrogen chọn lọc). Điểm độc đáo của nhóm thuốc này là nó hoạt động như "chiếc chìa khóa 2 mặt": Khi đến mô tuyến vú, nó KHÓA CHẶT thụ thể Estrogen, ngăn không cho Estrogen kích thích tế bào K vú phát triển. Nhưng khi đến mô nội mạc tử cung và xương, nó lại kích hoạt nhẹ thụ thể Estrogen (hoạt tính chủ vận một phần), khiến niêm mạc tử cung dày lên và tuyến phát triển.'
  },
  {
    title: 'Tại sao vừa kết thúc 5 năm uống thuốc (tháng 1/2026) lại bị rong kinh?',
    content: 'Trong suốt 5 năm dùng thuốc, niêm mạc tử cung đã trải qua quá trình tích tụ các biến đổi mô học (giãn nang tuyến, phù mô đệm). Khi ngưng thuốc vào tháng 1/2026, trục nội tiết bắt đầu tái thiết lập. Sự thay đổi đột ngột này, kết hợp với độ tuổi 45 (giai đoạn tiền mãn kinh với các chu kỳ không phóng noãn gây thiếu Progesterone tự nhiên), cùng với khối u xơ 45mm và tình trạng Adenomyosis có sẵn, đã kích hoạt hiện tượng bong tróc niêm mạc không đều, gây nên tình trạng rong kinh nhiều tháng liên tiếp.'
  },
  {
    title: 'Phân biệt "Tăng sản điển hình" và "Tăng sản không điển hình"',
    content: 'Trong giải phẫu bệnh: "ĐIỂN HÌNH" (Typical/Non-atypical) đồng nghĩa với LÀNH TÍNH – các tế bào phát triển nhiều hơn về số lượng nhưng cấu trúc nhân tế bào hoàn toàn bình thường, nguy cơ biến đổi ung thư chỉ dưới 1-3%. Ngược lại, "KHÔNG ĐIỂN HÌNH" (Atypical) mới là tổn thương tiền ung thư (nguy cơ 25-40%). Kết quả của chị là TĂNG SẢN ĐIỂN HÌNH, khẳng định 100% an toàn lành tính!'
  }
];
