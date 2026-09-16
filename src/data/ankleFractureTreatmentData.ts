export interface AnkleTreatmentOption {
  id: string;
  name: string;
  subtitle: string;
  suitabilityScore: 'Lựa Chọn Số 1 (Chuẩn Vàng)' | 'Chỉ Áp Dụng Khi Gãy Vững / Chống Chỉ Định Mổ' | 'Ít Xâm Lấn Nâng Cao' | 'Bắt Buộc Xuyên Suốt Hậu Phẫu';
  colorTheme: string;
  laymanAnalogy: string;
  mechanism: string;
  pros: string[];
  cons: string[];
  elderlySafety74yo: string;
  surgicalRecovery: string;
  recommendationNote: string;
}

export const ankleFractureTreatmentOptions: AnkleTreatmentOption[] = [
  {
    id: 'orif-ankle-surgery',
    name: 'Phẫu Thuật Kết Hợp Xương Nẹp Vít (ORIF) & Tái Tạo Khớp Chày Mác / Dây Chằng (Chuẩn Vàng)',
    subtitle: 'Nắn chỉnh mở giải phẫu, bắt nẹp Titanium khóa cho xương mác và vít xốp cho mắt cá trong',
    suitabilityScore: 'Lựa Chọn Số 1 (Chuẩn Vàng)',
    colorTheme: 'emerald',
    laymanAnalogy: 'Tái thiết khung nhà chuẩn xác từng milimet: Rạch 2 đường mổ nhỏ hai bên mắt cá, dùng nẹp kim loại titan có khóa đặc chủng như thanh xà thép để cố định 2 cọc xương gãy về đúng khớp mộng ban đầu; dùng dây neo siêu bền siết 2 xương cẳng chân lại với nhau và khâu lành chiếc dây chằng bị đứt.',
    mechanism: 'Bác sĩ phẫu thuật Chấn Thương Chỉnh Hình rạch da ngoài dọc xương mác và đường rạch trong nhỏ qua mắt cá trong. Dưới màn huỳnh quang tăng sáng C-arm, bộc lộ các mảnh xương gãy, làm sạch các cục máu đông và mảnh xương vụn. Đặt nẹp giải phẫu mác ngoài (Distal Fibula Anatomical Locking Plate) và bắt các vít khóa Titanium. Mắt cá trong được nắn khít và bắt 2 vít xốp ren bán phần. Đối với toác khớp chày mác, dùng hệ thống nút neo chỉ siêu bền (TightRope) hoặc 1 vít định vị chày mác xuyên qua 3-4 vỏ xương. Khâu tăng cường dây chằng ATFL bằng chỉ tự tiêu.',
    pros: [
      'Khôi phục 100% trục giải phẫu hoàn hảo của mộng chày - sên, ngăn ngừa hoàn toàn nguy cơ thoái hóa khớp cổ chân sớm.',
      'Cố định cơ học cực kỳ vững chắc ngay sau mổ, cho phép bệnh nhân bắt đầu tập cử động gập duỗi cổ chân sớm (sau 2 tuần) mà không lo lệch xương.',
      'Giải quyết triệt để cả 3 thương tổn: Gãy mắt cá ngoài, Gãy mắt cá trong và Đứt dây chằng / Toác khớp chày mác.',
      'Nẹp khóa Titanium thế hệ mới ôm sát xương, không gây cộm cấn da, tương thích sinh học trọn đời.'
    ],
    cons: [
      'Cần chờ 3-5 ngày sau chấn thương để da cổ chân hết sưng phù (dấu hiệu nếp nhăn da - Wrinkle Sign) mới mổ an toàn.',
      'Cần tuân thủ nghiêm ngặt lịch trình không tỳ đè (NWB) trong 4-6 tuần đầu để xương liền sinh học.'
    ],
    elderlySafety74yo: 'ĐỘ AN TOÀN CAO CHO NGƯỜI 74 TUỔI: Phẫu thuật thực hiện dưới gây tê tủy sống hoặc tê vùng thần kinh đùi - ngồi (không cần gây mê toàn thân nặng nề), lượng máu mất rất ít (< 30ml), cực kỳ an toàn cho tim mạch và tuyến giáp.',
    surgicalRecovery: 'Nằm viện 2 - 3 ngày. Mang nẹp bột/giày CAM boot. Bắt đầu tập đi tỳ đè tăng dần sau 4-6 tuần. Đi lại bình thường sau 10-12 tuần.',
    recommendationNote: 'Hiệp hội Chấn Thương Chỉnh Hình Hoa Kỳ (AAOS) và Hội Phẫu Thuật Cổ Chân & Bàn Chân (AOFAS) khuyến nghị ORIF là tiêu chuẩn vàng tuyệt đối cho gãy 2 mắt cá chân kèm di lệch hoặc đứt dây chằng.'
  },
  {
    id: 'conservative-cast',
    name: 'Điều Trị Bó Bột Bất Động Bảo Tồn (Không Mổ)',
    subtitle: 'Nắn kín và bó bột đùi - cẳng - bàn chân hoặc cẳng - bàn chân trong 6 - 8 tuần',
    suitabilityScore: 'Chỉ Áp Dụng Khi Gãy Vững / Chống Chỉ Định Mổ',
    colorTheme: 'amber',
    laymanAnalogy: 'Đóng khung chờ xương tự lành: Nắn xương từ bên ngoài qua lớp da thịt rồi bọc một lớp thạch cao/bột sợi thủy tinh cứng từ ngón chân lên tận đầu gối, giữ yên 2 tháng chờ các đầu xương tự mọc mầm dính lại.',
    mechanism: 'Bác sĩ nắn chỉnh cổ chân bằng tay dưới gây tê tại chỗ hoặc tiền mê, sau đó bó bột cẳng bàn chân có rạch dọc (tránh chèn ép khoang) và chụp X-quang kiểm tra. Nếu đạt vị trí chấp nhận được, bệnh nhân được bó bột kín và bất động hoàn toàn 6-8 tuần.',
    pros: [
      'Không phải trải qua phẫu thuật, không có vết mổ da, không có nguy cơ nhiễm trùng vết mổ.',
      'Chi phí ban đầu thấp.'
    ],
    cons: [
      'Tỷ lệ di lệch thứ phát rất cao (trên 40%): Khi khối sưng nề xẹp dần, bột sẽ bị lỏng và các mảnh xương gãy rất dễ bị trượt lệch trở lại.',
      'Bất động khớp cổ chân quá lâu (6-8 tuần) dẫn đến teo cơ cẳng chân, cứng khớp cổ chân nghiêm trọng và nguy cơ cao bị huyết khối tĩnh mạch sâu (DVT).',
      'Không thể khâu phục hồi dây chằng ATFL hay siết khớp chày mác bị toác, dẫn đến cổ chân bị lỏng lẻo mạn tính.'
    ],
    elderlySafety74yo: 'Nguy cơ cao biến chứng trên người 74 tuổi: Bó bột lâu làm mất cơ nhanh, dễ gây loét tỳ đè vùng gót chân và tăng nguy cơ hình thành cục máu đông tắc mạch phổi.',
    surgicalRecovery: 'Bó bột 6 - 8 tuần. Sau khi tháo bột phải mất thêm 2 - 3 tháng tập vật lý trị liệu phục hồi độ dẻo của khớp cổ chân bị cứng.',
    recommendationNote: 'Chỉ áp dụng cho các ca gãy 1 mắt cá đơn thuần không di lệch, hoặc bệnh nhân có bệnh lý toàn thân quá nặng không thể chịu được bất kỳ thủ thuật phẫu thuật nào.'
  },
  {
    id: 'arthroscopic-assisted',
    name: 'Phẫu Thuật Nội Soi Khớp Cổ Chân Hỗ Trợ Kết Hợp Xương (Arthroscopy-Assisted ORIF)',
    subtitle: 'Nội soi làm sạch ổ khớp, kiểm tra mặt sụn khớp sên và bắt nẹp vít vi phẫu',
    suitabilityScore: 'Ít Xâm Lấn Nâng Cao',
    colorTheme: 'cyan',
    laymanAnalogy: 'Gắn camera siêu nhỏ vào trong khớp: Đưa ống soi 2.7mm vào trong lòng ổ khớp cổ chân để rửa sạch các mảnh sụn vỡ vụn, soi rõ từng khe nứt và hỗ trợ bắt vít nẹp chuẩn xác đến từng phân số milimet.',
    mechanism: 'Thực hiện qua 2 lỗ rạch nhỏ 4mm trước cổ chân, bơm nước căng bao khớp và đưa camera nội soi vào quan sát bề mặt sụn khớp sên và vòm chày. Bác sĩ gắp bỏ các mảnh xương/sụn bong rời, nắn chỉnh mặt khớp dưới sự kiểm soát trực tiếp của camera và sau đó tiến hành bắt nẹp vít bên ngoài qua đường mổ nhỏ.',
    pros: [
      'Đánh giá và xử lý trực tiếp tổn thương bong sụn khớp sên (Osteochondral Lesions of the Talus - OLT) mà phim X-quang không nhìn thấy.',
      'Làm sạch triệt để các mảnh vụn sụn trong khớp, giảm thiểu tối đa tình trạng kẹt khớp và viêm thoái hóa khớp sau chấn thương.',
      'Đường mổ nhỏ hơn, giảm tổn thương mô mềm.'
    ],
    cons: [
      'Đòi hỏi phẫu thuật viên phải có tay nghề cao về nội soi khớp cổ chân và trang thiết bị máy móc hiện đại.',
      'Thời gian mổ có thể kéo dài hơn khoảng 20-30 phút.'
    ],
    elderlySafety74yo: 'Rất tốt cho việc bảo tồn lớp sụn khớp vốn đã mỏng manh ở người 74 tuổi.',
    surgicalRecovery: 'Nằm viện 2 ngày. Giảm đau sau mổ tốt hơn, bắt đầu tập vận động sớm.',
    recommendationNote: 'Được chỉ định ưu tiên tại các bệnh viện lớn (BV ĐHYD, BV Tâm Anh, BV CTCH) khi có nghi ngờ tổn thương sụn khớp sên phối hợp.'
  },
  {
    id: 'comprehensive-rehab-protocol',
    name: 'Phác Đồ Phục Hồi Chức Năng 4 Giai Đoạn Chuẩn Hóa Quốc Tế',
    subtitle: 'Lộ trình bài tập từ giường bệnh đến đi lại vững vàng, kết hợp giày bảo hộ CAM Boot',
    suitabilityScore: 'Bắt Buộc Xuyên Suốt Hậu Phẫu',
    colorTheme: 'purple',
    laymanAnalogy: 'Từng bước đưa chân trở lại cuộc sống: Phân chia làm 4 chặng rõ ràng: Chặng 1 (Nằm nghỉ giữ yên, tập ngón chân) $\\rightarrow$ Chặng 2 (Tập uốn cổ chân, đi nạng chân chạm nhẹ) $\\rightarrow$ Chặng 3 (Chống cả bàn chân, tập nhón gót thăng bằng) $\\rightarrow$ Chặng 4 (Bỏ nạng đi bộ tự nhiên, leo cầu thang dẻo dai).',
    mechanism: 'Phối hợp nhịp nhàng giữa: (1) Kiểm soát sưng nề theo nguyên lý R.I.C.E & Kê cao chân; (2) Kỹ thuật tỳ đè phân đoạn: Non-Weight Bearing (NWB) $\\rightarrow$ Partial Weight Bearing (PWB) $\\rightarrow$ Full Weight Bearing (FWB); (3) Bài tập biên độ khớp ROM và kéo giãn gân gót Achilles; (4) Bài tập cảm thụ bản thể (Proprioception) tăng phản xạ chống vấp ngã.',
    pros: [
      'Ngăn ngừa 100% tình trạng teo cơ đùi - bắp chân và cứng đơ khớp cổ chân sau mổ.',
      'Tập phản xạ thăng bằng giúp người 74 tuổi không bị tái té ngã trong tương lai.',
      'Tái lập dáng đi chuẩn, không bị tật đi bước thấp bước cao.'
    ],
    cons: [
      'Đòi hỏi sự kiên trì, kỷ luật và kiên nhẫn của người bệnh và người chăm sóc tại nhà.',
      'Tuyệt đối không được "đốt cháy giai đoạn" tỳ chân xuống đất quá sớm khi xương chưa liền.'
    ],
    elderlySafety74yo: 'CHÌA KHÓA VÀNG CHO NGƯỜI CAO TUỔI: Phục hồi chức năng đúng cách giúp người già lấy lại khả năng tự chủ sinh hoạt, tránh biến chứng nằm liệt giường gây suy kiệt.',
    surgicalRecovery: 'Tiến hành liên tục từ ngày thứ 2 sau mổ kéo dài đến 6 tháng sau mổ.',
    recommendationNote: 'Khuyến cáo cấp độ 1A (Level 1A Evidence) của Hiệp hội Phục Hồi Chức Năng Cột Sống & Chi Dưới Hoa Kỳ.'
  }
];
