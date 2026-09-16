export interface ComorbiditySafetyPlan {
  id: string;
  name: string;
  icd10: string;
  currentStatus: string;
  impactOnCervicalSurgery: string;
  laymanExplanation: string;
  preOperativeAction: string[];
  intraOperativeProtection: string[];
  postOperativeRehab: string[];
  multidisciplinaryDoctors: string;
}

export const cervicalSpineComorbidities: ComorbiditySafetyPlan[] = [
  {
    id: 'osteoporosis',
    name: 'Loãng Xương Nặng Tuổi Mãn Kinh (Osteoporosis)',
    icd10: 'M81.0',
    currentStatus: 'T-score Lưng -2.7, Cổ xương đùi -2.4 (Giảm mật độ khoáng chất xương)',
    impactOnCervicalSurgery: 'Xương đốt sống xốp và mỏng hơn người trẻ, làm tăng nguy cơ lún lồng đệm (Cage Subsidence) nếu chỉ đặt miếng đệm đơn thuần mà không có nẹp khóa hỗ trợ.',
    laymanExplanation: 'Tương tự như đóng một chiếc đinh vào bờ tường hơi mục. Nếu bác sĩ chỉ nhét miếng đệm vào giữa 2 đốt sống mà không có nẹp vít khóa giữ lực, miếng đệm có thể bị lún dần vào xương xốp.',
    preOperativeAction: [
      'Đo lại mật độ xương DXA gần nhất để bác sĩ phẫu thuật tính toán độ dài và đường kính vít Titanium khóa phù hợp.',
      'Xét nghiệm nồng độ Calci máu toàn phần, Calci ion hóa, Vitamin 25(OH)D và chức năng thận (Creatinine/eGFR) trước mổ.',
      'Duy trì uống bổ sung Canxi hữu cơ kết hợp Vitamin D3 + K2 theo đơn của PGS.TS Cao Thanh Ngọc.'
    ],
    intraOperativeProtection: [
      'Bác sĩ phẫu thuật sử dụng lồng liên thân đốt PEEK bề mặt vi cấu trúc Titanium (hoặc lồng Titan 3D porous) có diện tích tiếp xúc mâm sống tối đa để phân tán đều áp lực.',
      'Sử dụng nẹp cổ khóa góc (Locking Plate System) với các ốc vít cố định chắc chắn vào 2 vỏ xương đốt sống C3 và C6.',
      'Kỹ thuật chuẩn xác mài gọt mâm sống: Giữ nguyên lớp vỏ xương cứng dưới sụn, tránh làm thủng mâm sụn gây lún.'
    ],
    postOperativeRehab: [
      'Đeo nẹp cổ mềm bảo vệ cổ liên tục khi ngồi dậy và đi lại trong 4 - 6 tuần đầu hậu phẫu.',
      'Phối hợp điều trị chống loãng xương đặc hiệu sau mổ: Dùng thuốc ức chế hủy xương (nhóm Bisphosphonate như Aclasta 5mg truyền tĩnh mạch 1 năm/lần hoặc Denosumab tiêm dưới da 6 tháng/lần) theo chỉ định chuyên khoa Cơ Xương Khớp.',
      'Tập đi bộ nhẹ nhàng ngoài trời buổi sáng sớm (15-20 phút) để kích thích tế bào tạo xương và hấp thụ ánh nắng.'
    ],
    multidisciplinaryDoctors: 'Phối hợp Chặt chẽ: Khoa Ngoại Thần Kinh (BV ĐHYD) & Khoa Cơ Xương Khớp (PGS.TS Cao Thanh Ngọc)'
  },
  {
    id: 'hyperthyroidism',
    name: 'Bệnh Lý Tuyến Giáp / Cường Giáp (Hyperthyroidism)',
    icd10: 'E05',
    currentStatus: 'Đang dùng thuốc điều trị nội khoa duy trì',
    impactOnCervicalSurgery: 'Hormone tuyến giáp tăng cao có thể làm tim đập nhanh, tăng huyết áp kịch phát hoặc kích hoạt "Cơn bão giáp" nguy hiểm trong quá trình gây mê toàn thân.',
    laymanExplanation: 'Tuyến giáp như "chân ga" của động cơ cơ thể. Nếu chân ga đang bị nhấn mạnh (cường giáp), tim sẽ đập dồn dập. Cần phải nhả chân ga về mức chạy êm ái bình thường trước khi đưa xe vào xưởng bảo dưỡng lớn (phẫu thuật).',
    preOperativeAction: [
      'Thực hiện xét nghiệm máu kiểm tra chức năng tuyến giáp: Định lượng FT3, FT4, TSH trước ngày mổ 48-72 giờ.',
      'Chỉ tiến hành phẫu thuật phiên khi bệnh nhân đạt trạng thái "Bình giáp" (Euthyroid State) an toàn.',
      'Tiếp tục dùng thuốc kháng giáp tổng hợp (như Thiamazole / PTU) và thuốc chẹn beta giao cảm (như Propranolol / Bisoprolol) đúng liều lượng chỉ định đến tận sáng ngày mổ (uống với một ngụm nước nhỏ).'
    ],
    intraOperativeProtection: [
      'Bác sĩ gây mê hồi sức theo dõi liên tục điện tim (ECG 5 chuyển đạo), huyết áp động mạch xâm lấn và độ bão hòa oxy máu SpO2.',
      'Chuẩn bị sẵn các thuốc hạ áp nhanh và thuốc chẹn beta truyền tĩnh mạch để kiểm soát nhịp tim luôn ổn định ở mức 65 - 80 lần/phút.',
      'Sử dụng các thuốc mê chuyển hóa nhanh, không kích thích giao cảm.'
    ],
    postOperativeRehab: [
      'Tiếp tục theo dõi điện tim và nhịp tim tại phòng hồi sức trong 24 giờ đầu.',
      'Uống lại thuốc tuyến giáp bình thường ngay khi bệnh nhân bắt đầu ăn uống trở lại sau mổ.',
      'Tái khám chuyên khoa Nội tiết sau xuất viện 4 tuần.'
    ],
    multidisciplinaryDoctors: 'Phối hợp: Khoa Ngoại Thần Kinh & Khoa Gây Mê Hồi Sức & Khoa Nội Tiết'
  },
  {
    id: 'carpal-tunnel',
    name: 'Hội Chứng Ống Cổ Tay 2 Bên (Carpal Tunnel Syndrome - CTS)',
    icd10: 'G56.0',
    currentStatus: 'Mức độ nhẹ 2 bên (Theo kết quả đo điện cơ EMG BV ĐHYD)',
    impactOnCervicalSurgery: 'Tạo nên hiện tượng "Chèn ép thần kinh kép" (Double Crush Phenomenon): Rễ thần kinh C6 ở cổ bị ép làm dây thần kinh giữa chạy xuống cổ tay trở nên cực kỳ nhạy cảm và dễ bị tê buốt.',
    laymanExplanation: 'Dây thần kinh như vòi nước tưới cây. Khi vòi nước bị giẫm bẹp một nửa ở đầu nguồn (tại đốt sống cổ C5/6), thì chỉ cần một chèn ép nhỏ ở đầu vòi (tại cổ tay) cũng đủ làm nước ngừng chảy hoàn toàn (gây tê bì, châm chích bàn tay).',
    preOperativeAction: [
      'Giải thích cho bệnh nhân hiểu: Tê tay của cụ Loan xuất phát từ CẢ 2 NƠI (Cổ là chính, Cổ tay là phụ).',
      'Đeo nẹp cổ tay mềm giữ cổ tay thẳng khi ngủ vào ban đêm để giảm áp lực lên ống cổ tay.',
      'KHÔNG CẦN VỘI MỔ CỔ TAY trước khi mổ cột sống cổ.'
    ],
    intraOperativeProtection: [
      'Khi giải phóng hoàn toàn rễ C6 và tủy cổ trong mổ ACDF, xung động thần kinh từ tủy xuống tay sẽ được khơi thông tối đa.',
      'Đặt tư thế tay bệnh nhân khi phẫu thuật trên đệm mềm, tránh đè ép thêm vào vùng cổ tay và khuỷu tay.'
    ],
    postOperativeRehab: [
      'Sau khi giải ép cổ thành công, 70 - 80% triệu chứng tê bàn tay sẽ thuyên giảm rõ rệt sau 2 - 8 tuần.',
      'Tập các bài tập trượt dây thần kinh giữa (Median Nerve Gliding Exercises) nhẹ nhàng.',
      'Chỉ xem xét tiêm Corticoid tại chỗ hoặc tiểu phẫu cắt dây chằng vòng cổ tay nếu sau mổ cổ 6 tháng mà cổ tay vẫn còn tê buốt nhiều.'
    ],
    multidisciplinaryDoctors: 'Chẩn đoán & Phục hồi: Khoa Ngoại Thần Kinh & Khoa Phục Hồi Chức Năng'
  },
  {
    id: 'lumbar-herniation',
    name: 'Thoát Vị Đĩa Đệm Cột Sống Thắt Lưng L4/L5',
    icd10: 'M51.2',
    currentStatus: 'Thoát vị đĩa đệm ra sau trung tâm lệch Trái 4.0mm ép rễ L5 Trái, lồi L3/4 1.5mm (MRI Saigon Medic 21/06/2026)',
    impactOnCervicalSurgery: 'Gây đau thắt lưng lan mông và đùi trái khi đi lại, nhưng KHÔNG CHÈN ÉP TỦY SỐNG (vì tủy sống đã kết thúc ở tầng thắt lưng cao L1/L2, tại L4/L5 chỉ còn rễ thần kinh chùm đuôi ngựa).',
    laymanExplanation: 'Cổ là "TỦY SỐNG TRUNG ƯƠNG" (rất nguy hiểm nếu bị ép), còn Lưng là "DÂY THẦN KINH NGOẠI BIÊN" (ít nguy hiểm đến tính mạng hay tê liệt toàn thân hơn). Do đó phải CỨU CỔ TRƯỚC, CHỮA LƯNG SAU BẰNG THUỐC & TẬP LUYỆN.',
    preOperativeAction: [
      'Phân tầng ưu tiên rõ ràng: Giải ép tủy cổ C3/4 và C5/6 là CẤP THIẾT SỐ 1 để tránh liệt tứ chi.',
      'L4/L5 được giữ nguyên, KHÔNG CAN THIỆP MỔ CÙNG LÚC để tránh đại phẫu kéo dài gây kiệt sức bệnh nhân 74 tuổi.',
      'Sử dụng thuốc giảm đau thần kinh liều thấp an toàn (như Pregabalin 50-75mg hoặc Gabapentin) để kiểm soát triệu chứng đau rễ L5.'
    ],
    intraOperativeProtection: [
      'Kê đệm đỡ chuyên dụng dưới vùng thắt lưng và khoeo chân khi bệnh nhân nằm ngửa mổ cổ, giữ cột sống thắt lưng ở tư thế sinh lý thư giãn nhất.'
    ],
    postOperativeRehab: [
      'Sau khi vết mổ cổ lành vững chắc (sau 4-6 tuần), bắt đầu chương trình tập vật lý trị liệu cho vùng thắt lưng: Kéo giãn cột sống, tập nhóm cơ bụng sâu và cơ dựng sống lưng.',
      'Tránh mang vác vật nặng quá 3kg, không cúi gập lưng đột ngột, luôn ngồi ghế có tựa lưng êm ái.',
      'Theo dõi tiến triển: Nếu sau này xuất hiện yếu cổ chân hoặc bí tiểu (rất hiếm), mới cần xem xét can thiệp nội soi thắt lưng.'
    ],
    multidisciplinaryDoctors: 'Khoa Ngoại Thần Kinh & Đơn vị Vật Lý Trị Liệu - Phục Hồi Chức Năng'
  }
];
