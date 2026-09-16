export interface AnkleSafetyItem {
  id: string;
  name: string;
  riskCategory: 'Huyết Khối Tĩnh Mạch Sâu (DVT)' | 'Loãng Xương & Lỏng Ốc Vít' | 'Loét Tỳ Đè Vùng Gót' | 'Hội Chứng Đau Sudeck (CRPS)';
  threatLevel: 'Rất Quan Trọng' | 'Cần Kiểm Soát Sát' | 'Phòng Ngừa Tích Cực';
  laymanExplanation: string;
  clinicalMechanism: string;
  preventionProtocol: string[];
  warningSigns: string[];
  specialistGuideline: string;
}

export const ankleSafetyMatrix: AnkleSafetyItem[] = [
  {
    id: 'dvt-pulmonary-embolism',
    name: 'Phòng Ngừa Huyết Khối Tĩnh Mạch Sâu (DVT) & Tắc Mạch Phổi (PE)',
    riskCategory: 'Huyết Khối Tĩnh Mạch Sâu (DVT)',
    threatLevel: 'Rất Quan Trọng',
    laymanExplanation: 'Khi chân bị bất động trong nẹp bột, dòng máu chảy chậm lại giống như dòng sông bị chặn dòng, rất dễ hình thành các cục máu đông ở bắp chân. Cục máu đông này nếu trôi ngược về phổi có thể gây khó thở nguy hiểm.',
    clinicalMechanism: 'Tam chứng Virchow ở bệnh nhân 74 tuổi gãy mắt cá: (1) Ứ trệ tuần hoàn do chân không được đi lại; (2) Tổn thương nội mạc tĩnh mạch do chấn thương và mổ; (3) Tình trạng tăng đông sinh lý ở người cao tuổi. Thang điểm Caprini xếp loại nhóm NGUY CƠ CAO (High Risk).',
    preventionProtocol: [
      'Thuốc chống đông dự phòng (Thromboprophylaxis): Tiêm thuốc chống đông trọng lượng phân tử thấp (LMWH như Enoxaparin / Lovenox 40mg tiêm dưới da thành bụng 1 lần/ngày) hoặc uống thuốc chống đông thế hệ mới (DOAC như Rivaroxaban 10mg) trong 10-14 ngày hậu phẫu.',
      'Cử động ngón chân liên tục: Gập duỗi 5 ngón chân 20-30 lần mỗi giờ để kích hoạt "trái tim thứ hai" (bơm cơ bắp chân) đẩy máu lưu thông về tim.',
      'Mang vớ y khoa chống huyết khối (Anti-embolism stocking) ở chân lành bên đối diện.',
      'Uống đủ nước ấm (1.5-2 lít/ngày) để tránh máu bị cô đặc.'
    ],
    warningSigns: [
      'Bắp chân bị căng cứng, sưng to bất thường, ấn vào bắp chân đau nhói dữ dội.',
      'Dấu hiệu cấp cứu: Đột ngột khó thở, thở gấp, đau tức ngực hoặc ho ra máu $\\rightarrow$ Cần gọi cấp cứu 115 ngay lập tức.'
    ],
    specialistGuideline: 'Khuyến cáo của Hiệp hội Phẫu Thuật Chấn Thương Chỉnh Hình Hoa Kỳ (AAOS) & Hội Tim Mạch Học Việt Nam.'
  },
  {
    id: 'osteoporosis-hardware-safety',
    name: 'Bảo Vệ Nẹp Vít Trên Nền Xương Loãng Nặng (T-score -2.7)',
    riskCategory: 'Loãng Xương & Lỏng Ốc Vít',
    threatLevel: 'Rất Quan Trọng',
    laymanExplanation: 'Xương của cụ bà 74 tuổi xốp hơn người trẻ, nếu dùng ốc vít thông thường sẽ dễ bị lỏng ren giống như bắt ốc vào miếng gỗ mục. Vì vậy bác sĩ phải dùng loại nẹp vít có ren khóa đặc biệt để khóa chặt vào nhau.',
    clinicalMechanism: 'Chỉ số T-score -2.7 biểu thị tình trạng mất chất khoáng xương vỏ và bè xương xốp. Áp lực uốn bẻ khi tỳ đè sớm có thể gây hiện tượng nhổ vít (Screw pullout) hoặc gãy xương quanh nẹp (Periprosthetic fracture).',
    preventionProtocol: [
      'Bác sĩ phẫu thuật sử dụng hệ thống Nẹp Khóa Titanium (Locking Compression Plate - LCP): Các đầu vít có ren khóa trực tiếp vào lỗ nẹp tạo thành khung giàn vững chắc (Fixed-angle construct), không dựa vào lực ma sát của xương loãng.',
      'Bắt vít xuyên qua cả 2 vỏ xương (Bicortical purchase) để tối đa hóa độ vững.',
      'Tuyệt đối tuân thủ thời gian KHÔNG TỲ ĐÈ (Non-Weight Bearing) trong 4-6 tuần đầu.',
      'Duy trì phác đồ chống loãng xương của PGS.TS Cao Thanh Ngọc (Canxi hữu cơ + D3 + Thuốc ức chế hủy xương).'
    ],
    warningSigns: [
      'Có cảm giác nẹp vít bị lỏng lục cục hoặc đau nhói đột ngột tại vị trí nẹp khi vô tình va chạm nhẹ.',
      'Da vùng mắt cá bị sưng đỏ, nóng rát trở lại sau khi đã ổn định.'
    ],
    specialistGuideline: 'Tiêu chuẩn phẫu thuật kết hợp xương gãy xương loãng xương của Tổ chức AO Trauma Quốc tế.'
  },
  {
    id: 'heel-pressure-ulcer',
    name: 'Phòng Ngừa Loét Tỳ Đè Vùng Gót Chân (Heel Pressure Ulcer)',
    riskCategory: 'Loét Tỳ Đè Vùng Gót',
    threatLevel: 'Phòng Ngừa Tích Cực',
    laymanExplanation: 'Vùng da gót chân của người cao tuổi rất mỏng, nếu nằm tỳ gót liên tục xuống mặt giường hoặc đè chặt vào nẹp bột cứng, mạch máu nuôi da sẽ bị ép xẹp dẫn đến phồng rộp và loét da.',
    clinicalMechanism: 'Gót chân (Gót xương Calcaneus) là điểm tỳ đè chịu áp lực lớn nhất khi nằm ngửa. Áp lực tỳ đè kéo dài trên 32 mmHg làm thiếu máu cục bộ mô mềm dưới da gót chân chỉ sau 2-4 giờ.',
    preventionProtocol: [
      'Kỹ thuật "Treo gót chân" (Heel Floating): Đặt một chiếc gối êm dưới bắp chân sao cho gót chân lơ lửng trong không khí, không chạm trực tiếp vào mặt nệm giường.',
      'Bác sĩ và kỹ thuật viên bột khoét một ô cửa sổ hoặc đệm mút silicon dày tại vùng gót chân khi cố định nẹp.',
      'Người nhà kiểm tra da vùng gót chân mỗi ngày khi thay băng hoặc vệ sinh: Da phải hồng hào, không có nốt phồng rộp hay đổi màu tím đen.',
      'Xoa bóp nhẹ nhàng bằng kem dưỡng ẩm vùng da quanh gót (tránh chà xát mạnh).'
    ],
    warningSigns: [
      'Bệnh nhân than phiền cảm giác đau rát bỏng, tê buốt như bị kim châm liên tục ở gót chân bên trong nẹp bột.',
      'Da gót chân xuất hiện vết đỏ không biến mất khi ấn ngón tay vào (Dấu hiệu loét độ 1).'
    ],
    specialistGuideline: 'Quy trình chăm sóc điều dưỡng kiểm soát loét tỳ đè của Hội Lão Khoa & Chấn Thương Chỉnh Hình.'
  },
  {
    id: 'sudeck-crps-prevention',
    name: 'Phòng Ngừa Hội Chứng Đau Loạn Dưỡng Giao Cảm (Hội Chứng Sudeck / CRPS)',
    riskCategory: 'Hội Chứng Đau Sudeck (CRPS)',
    threatLevel: 'Phòng Ngừa Tích Cực',
    laymanExplanation: 'Sau chấn thương hoặc mổ, hệ thần kinh giao cảm đôi khi bị kích thích quá mức, khiến bàn chân bị đau buốt kéo dài, đổi màu da tím tái hoặc đỏ ửng và cứng đơ các khớp ngón chân.',
    clinicalMechanism: 'Complex Regional Pain Syndrome Type I (CRPS I / Sudeck Atrophy) là biến chứng rối loạn thần kinh thực vật và vi tuần hoàn mạn tính sau gãy mắt cá chân ở phụ nữ lớn tuổi.',
    preventionProtocol: [
      'Bổ sung Vitamin C liều 500mg/ngày liên tục trong 50 ngày (đã được y văn chứng minh giảm 80% tỷ lệ mắc hội chứng CRPS).',
      'Kiểm soát cơn đau chu phẫu hiệu quả: Không để bệnh nhân phải chịu đựng cơn đau dữ dội kéo dài gây kích thích cung phản xạ tủy sống.',
      'Tập co gập các ngón chân sớm ngay từ ngày đầu sau mổ.',
      'Giữ ấm bàn chân, tránh để bàn chân bị lạnh đột ngột.'
    ],
    warningSigns: [
      'Cơn đau buốt rát bỏng dữ dội không tương xứng với mức độ tổn thương xương.',
      'Bàn chân bị phù nề bóng lưỡng, da thay đổi màu sắc thất thường (từ đỏ ửng sang tím tái), rụng lông hoặc móng chân giòn dễ gãy.'
    ],
    specialistGuideline: 'Khuyến nghị lâm sàng của Hội Nghiên Cứu Đau Quốc Tế (IASP) & AAOS.'
  }
];
