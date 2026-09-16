export interface SpineTreatmentOption {
  id: string;
  name: string;
  subtitle: string;
  suitabilityScore: 'Lựa Chọn Số 1 (Chuẩn Vàng)' | 'Cân Nhắc Kỹ' | 'Hỗ Trợ / Bảo Tồn' | 'Giai Đoạn Hậu Phẫu';
  colorTheme: string;
  laymanAnalogy: string;
  mechanism: string;
  pros: string[];
  cons: string[];
  elderlySafety74yo: string;
  surgicalRecovery: string;
  recommendationNote: string;
}

export const cervicalSpineTreatmentOptions: SpineTreatmentOption[] = [
  {
    id: 'acdf-surgery',
    name: 'Phẫu Thuật ACDF Lối Trước 2 Tầng C3/4 & C5/6 (Chuẩn Vàng Quốc Tế)',
    subtitle: 'Giải ép triệt để tủy cổ mặt trước & hàn xương liên thân đốt bằng lồng PEEK/Titanium',
    suitabilityScore: 'Lựa Chọn Số 1 (Chuẩn Vàng)',
    colorTheme: 'emerald',
    laymanAnalogy: 'Giải cứu dòng điện từ mặt trước: Rạch một đường nhỏ 3-4cm theo nếp lằn cổ tự nhiên, nhẹ nhàng đi giữa khí quản và mạch máu mà KHÔNG CẮT CƠ CỔ SAU; bóc sạch 2 khối thoát vị 5mm và 3mm giải phóng tủy, đặt lồng nẹp cố định giúp cổ vững chắc vĩnh viễn.',
    mechanism: 'Bác sĩ vi phẫu rạch da ngang theo nếp gấp cổ bên phải (hoặc trái), bộc lộ mặt trước đốt sống C3-C6 dưới kính hiển vi quang học độ phóng đại cao. Cắt bỏ toàn bộ đĩa đệm thoát vị tầng C3/4 và C5/6, mài phẳng các gai xương chèn ép tủy và lỗ liên hợp. Sau đó đặt lồng nhân tạo (PEEK Cage) chứa bột ghép xương tự thân/nhân tạo vào khoảng gian đốt và bắt nẹp Titanium khóa chặt bảo vệ.',
    pros: [
      'Giải phóng trực tiếp 100% điểm chèn ép mặt trước tủy cổ (khối 5.0mm C3/4 và 3.0mm C5/6).',
      'Đường mổ nếp gấp cổ cực kỳ thẩm mỹ, lành nhanh, hầu như không để lại sẹo.',
      'Không cắt cơ vùng gáy nên ít đau sau mổ hơn 80% so với mổ lối sau.',
      'Lượng máu mất cực thấp (< 30-50ml), không cần truyền máu, an toàn tuyệt đối cho người 74 tuổi.',
      'Hồi phục thần tốc: Bệnh nhân có thể ngồi dậy ăn uống, đi lại nhẹ nhàng sau 24 giờ.'
    ],
    cons: [
      'Có thể nuốt vướng hoặc khàn giọng nhẹ tạm thời trong 3-7 ngày đầu sau mổ do dụng cụ vén thực quản/dây thanh quản (tự hồi phục 100%).',
      'Cần mang nẹp cổ mềm bảo vệ trong 4 - 6 tuần đầu để xương hàn chắc.'
    ],
    elderlySafety74yo: 'ĐỘ AN TOÀN CAO NHẤT Ở NGƯỜI CAO TUỔI (74 TUỔI): Là phẫu thuật ít xâm lấn, thời gian mổ nhanh (khoảng 90-120 phút), giảm thiểu tối đa gánh nặng gây mê trên bệnh nhân có kèm cường giáp và loãng xương.',
    surgicalRecovery: 'Nằm viện 2 - 3 ngày. Xuất viện đi lại tự chủ. Hồi phục sinh hoạt bình thường sau 3 - 4 tuần.',
    recommendationNote: 'Hiệp hội Phẫu thuật Thần kinh Hoa Kỳ (AANS) và Hội Phẫu thuật Cột sống Bắc Mỹ (NASS) khuyến nghị ACDF là lựa chọn số 1 cho bệnh nhân có chèn ép tủy cổ mặt trước đa tầng.'
  },
  {
    id: 'laminoplasty-surgery',
    name: 'Phẫu Thuật Mở Rộng Ống Sống Lối Sau (Laminoplasty / Cắt Bản Sống)',
    subtitle: 'Mở rộng thể tích ống sống từ phía sau kiểu "mở cửa sổ"',
    suitabilityScore: 'Cân Nhắc Kỹ',
    colorTheme: 'amber',
    laymanAnalogy: 'Mở rộng mái nhà từ phía sau: Mổ từ gáy phía sau, cắt một bên bản sống và mở hé ra như bản lề cửa sổ để tủy cổ có thêm không gian lùi lại phía sau tránh khối thoát vị phía trước.',
    mechanism: 'Rạch da đường giữa cổ phía sau (gáy), bóc tách khối cơ dựng sống cổ, dùng máy mài cao tốc tạo rãnh bản lề ở một bên bản sống và mở hé bên đối diện, cố định bằng các nẹp mini Titanium để nới rộng chu vi ống sống.',
    pros: [
      'Mở rộng đồng loạt toàn bộ ống sống từ C3 đến C7 trong 1 lần mổ.',
      'Bảo tồn được một phần biên độ vận động cúi ngửa của cổ (không hàn cứng khớp).'
    ],
    cons: [
      'Phải bóc tách khối cơ gáy lớn phía sau nên bệnh nhân thường bị đau mỏi cơ cổ và cứng cổ sau mổ nhiều hơn.',
      'Không loại bỏ trực tiếp được khối thoát vị 5.0mm ở mặt trước C3/4.',
      'Trên bệnh nhân 74 tuổi có loãng xương ($T-score: -2.7$), việc neo giữ nẹp mini lối sau có nguy cơ lỏng vít cao hơn.'
    ],
    elderlySafety74yo: 'Thời gian mổ dài hơn và mất máu nhiều hơn ACDF, cần đánh giá kỹ sức chịu đựng tim mạch của người 74 tuổi.',
    surgicalRecovery: 'Nằm viện 4 - 5 ngày. Đau cơ gáy kéo dài vài tuần cần vật lý trị liệu tích cực.',
    recommendationNote: 'Chỉ ưu tiên khi bệnh nhân bị hẹp ống sống bẩm sinh lan tỏa nặng từ 4 tầng trở lên hoặc có cốt hóa dây chằng dọc sau (OPLL) dày đặc.'
  },
  {
    id: 'conservative-pain-block',
    name: 'Điều Trị Nội Khoa Bảo Tồn & Tiêm Phong Bế Rễ Thần Kinh (Nội Khoa)',
    subtitle: 'Dùng thuốc giảm đau thần kinh, kháng viêm steroid và phong bế chọn lọc',
    suitabilityScore: 'Hỗ Trợ / Bảo Tồn',
    colorTheme: 'blue',
    laymanAnalogy: 'Giảm đau hạ nhiệt tạm thời: Dùng thuốc uống và tiêm thuốc kháng viêm quanh rễ thần kinh để dập tắt cơn đau buốt, nhưng khối thoát vị 5mm và gai xương chèn ép tủy vẫn còn nguyên đó.',
    mechanism: 'Phối hợp thuốc giảm đau thần kinh (Pregabalin/Gabapentin), thuốc chống viêm không steroid (NSAIDs), thuốc giãn cơ và vitamin nhóm B liều cao. Trường hợp đau rễ cấp có thể tiêm Corticoid dưới hướng dẫn của máy chụp C-arm (Transforaminal Epidural Steroid Injection).',
    pros: [
      'Không cần phẫu thuật, không gây mê.',
      'Giảm đau rễ và tê bì tạm thời trong những đợt đau cấp tính.'
    ],
    cons: [
      'KHÔNG LÀM KHỐI THOÁT VỊ 5.0mm THỤT VÀO ĐƯỢC: Không giải quyết được gốc rễ chèn ép cơ học.',
      'Nếu tiếp tục trì hoãn khi tủy cổ đang bị chèn ép, các sợi thần kinh tủy sẽ bị hoại tử dần (Myelomalacia) gây teo cơ, yếu liệt không thể phục hồi.',
      'Uống thuốc kháng viêm giảm đau kéo dài ở tuổi 74 dễ gây viêm loét dạ dày, suy thận và tăng huyết áp.'
    ],
    elderlySafety74yo: 'Cần theo dõi sát chức năng thận và dạ dày khi dùng thuốc giảm đau.',
    surgicalRecovery: 'Điều trị ngoại trú.',
    recommendationNote: 'Chỉ áp dụng trong thời gian chuẩn bị mổ hoặc cho các trường hợp chỉ chèn ép rễ nhẹ chưa có tổn thương tủy sống.'
  },
  {
    id: 'multidisciplinary-rehab',
    name: 'Lộ Trình Phục Hồi Chức Năng Cột Sống Đa Tầng & Chăm Sóc Lâu Dài',
    subtitle: 'Tập mạnh cơ cổ sâu, chỉnh tư thế, kiểm soát loãng xương & cột sống thắt lưng L4/L5',
    suitabilityScore: 'Giai Đoạn Hậu Phẫu',
    colorTheme: 'purple',
    laymanAnalogy: 'Gia cố cột nhà và rèn luyện dây chằng: Sau khi mổ giải ép, tập các bài tập giữ vững cơ cổ, điều trị loãng xương để xương cứng cáp, và chăm sóc lưng dưới L4/L5 để không bị tái phát.',
    mechanism: 'Lộ trình 4 giai đoạn: Giai đoạn bất động bảo vệ (0-6 tuần) -> Giai đoạn phục hồi tầm vận động (6-12 tuần) -> Giai đoạn tăng cường sức bền cơ cổ sâu và thắt lưng -> Giai đoạn duy trì trọn đời kết hợp truyền thuốc chống loãng xương.',
    pros: [
      'Tối ưu hóa kết quả phẫu thuật, giúp bệnh nhân lấy lại sự khéo léo của đôi bàn tay.',
      'Cải thiện thăng bằng dáng đi, ngăn ngừa té ngã ở người cao tuổi.',
      'Bảo vệ các tầng đốt sống lân cận (ngăn ngừa hội chứng tầng kế cận - Adjacent Segment Pathology).'
    ],
    cons: [
      'Đòi hỏi tính kiên trì tập luyện đúng kỹ thuật mỗi ngày 15-20 phút.'
    ],
    elderlySafety74yo: 'Bài tập được thiết kế riêng cho người cao tuổi, vận động nhẹ nhàng, không bẻ vặn cổ đột ngột.',
    surgicalRecovery: 'Áp dụng liên tục suốt đời.',
    recommendationNote: 'Là mảnh ghép bắt buộc không thể thiếu sau phẫu thuật ACDF để đảm bảo người bệnh sống khỏe mạnh, độc lập và vui vẻ bên con cháu.'
  }
];

export const cervicalSpineMechanisms = [
  {
    title: 'Tại sao Chèn ép Tủy Cổ (C3/4 & C5/6) lại nguy hiểm hơn Chèn ép Thắt lưng (L4/5)?',
    content: 'Tủy cổ là "thân cây chính" của toàn bộ hệ thần kinh trung ương, chứa hàng triệu sợi trục dẫn truyền vận động và cảm giác cho cả 2 tay, 2 chân và cơ quan nội tạng. Khối thoát vị C3/4 5mm đè trực tiếp vào tủy cổ sẽ làm nghẽn dòng máu nuôi tủy, gây nguy cơ yếu liệt tứ chi. Trong khi đó, thắt lưng L4/5 là chèn ép rễ thần kinh ngoại biên, chỉ gây đau tê chân một bên mà không đe dọa tổn thương thần kinh trung ương.'
  },
  {
    title: 'Giải mã "Bệnh lý tủy cổ do thoái hóa" (Cervical Spondylotic Myelopathy - CSM)',
    content: 'CSM là tình trạng tủy sống bị bóp nghẹt từ từ do sự kết hợp của đĩa đệm thoát vị, phì đại dây chằng và gai xương thoái hóa. Bệnh thường tiến triển âm thầm: ban đầu chỉ là tê bì đầu ngón tay, cài nút áo vụng về, cầm đũa hay rơi, đi lại cảm giác bồng bềnh như "bước trên đệm bông". Nếu không giải áp kịp thời, tủy sẽ bị xơ hóa không hồi phục.'
  },
  {
    title: 'Tại sao phẫu thuật ACDF lối trước lại là "cứu cánh vàng" cho bệnh nhân 74 tuổi?',
    content: 'Nhiều người già thường sợ mổ vì nghĩ mổ cột sống là "đại phẫu liệt giường". Thực tế, ACDF đi từ mặt trước cổ theo các nếp gấp da tự nhiên, nhẹ nhàng lách qua các khoang giải phẫu mà không phải cắt xẻ cơ bắp. Cuộc mổ chỉ mất 1-2 tiếng, mất vài chục mililit máu, hôm sau bệnh nhân đã có thể tự ngồi dậy ăn uống và đi lại, giúp giải tỏa hoàn toàn áp lực đè nặng lên tủy cổ!'
  }
];
