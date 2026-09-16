export interface AnkleQAItem {
  id: string;
  category: 'Bản Chất Gãy Xương & Dây Chằng' | 'Phẫu Thuật Nẹp Vít ORIF' | 'Lộ Trình Phục Hồi & Tỳ Đè' | 'An Toàn Tuổi 74 & Bệnh Nền' | 'Dinh Dưỡng & Tháo Nẹp Vít';
  question: string;
  shortAnswer: string;
  detailedAnswer: string[];
  patientTips: string;
  guidelineEvidence?: string;
}

export const ankleFractureQAList: AnkleQAItem[] = [
  {
    id: 'qa-ankle-surgery-necessity',
    category: 'Bản Chất Gãy Xương & Dây Chằng',
    question: 'Té gãy 2 mắt cá chân kèm đứt dây chằng có bắt buộc phải mổ không? Bó bột có tự liền được không?',
    shortAnswer: 'BẮT BUỘC PHẢI MỔ. Gãy 2 mắt cá kèm đứt dây chằng là tổn thương không vững; nếu chỉ bó bột, xương rất dễ bị lệch thứ phát gây thoái hóa khớp và đi khập khiễng suốt đời.',
    detailedAnswer: [
      'Khớp cổ chân giống như một chiếc mộng gỗ (mộng chày - sên). Khi bị gãy cả mắt cá ngoài (xương mác) lẫn mắt cá trong kèm đứt dây chằng ATFL, hai cột trụ giữ vững khớp đã bị sụp đổ hoàn toàn.',
      'Nếu chỉ nắn và bó bột thông thường: Khi khối sưng nề xẹp đi sau 1-2 tuần, bột sẽ bị lỏng và các mảnh xương gãy sẽ bị trượt lệch trở lại (tỷ lệ di lệch thứ phát trên 40%).',
      'Đặc biệt, nếu xương sên bị lệch tâm dù chỉ 1mm, diện tích tiếp xúc chịu lực của khớp cổ chân sẽ giảm tới 40%, dẫn đến mòn sụn, đau đớn dữ dội và thoái hóa khớp cổ chân tàn phế chỉ sau vài năm.',
      'Phẫu thuật nẹp vít ORIF là phương pháp duy nhất khôi phục 100% trục giải phẫu ban đầu và cho phép bệnh nhân tập cử động khớp sớm.'
    ],
    patientTips: 'Mổ nẹp vít giúp gia đình và bệnh nhân hoàn toàn yên tâm vì xương được khóa chặt vững chắc ngay trên bàn mổ.',
    guidelineEvidence: 'Tiêu chuẩn AO Trauma & AAOS Clinical Practice Guidelines: Chỉ định phẫu thuật ORIF tuyệt đối cho gãy mắt cá chân không vững (Bimalleolar / Trimalleolar fractures).'
  },
  {
    id: 'qa-ankle-delay-swelling',
    category: 'Phẫu Thuật Nẹp Vít ORIF',
    question: 'Tại sao sau khi té chân sưng to như quả bưởi bác sĩ không mổ ngay mà bắt chờ 3 đến 5 ngày?',
    shortAnswer: 'Chờ da cổ chân xẹp phù nề và xuất hiện "nếp nhăn sinh lý" để tránh biến chứng toác mép mổ, hoại tử da và nhiễm trùng.',
    detailedAnswer: [
      'Vùng cổ chân có lớp da và mô dưới da rất mỏng, nằm sát ngay trên xương.',
      'Khi té gãy xương và đứt dây chằng, máu tụ và phản ứng viêm làm da cổ chân căng mọng như quả bóng bay. Nếu rạch da mổ ngay lúc này, mép da bị căng thiếu máu nuôi sẽ rất dễ bị hoại tử đen, không thể khâu kín lại được và vi khuẩn dễ xâm nhập vào nẹp vít gây nhiễm trùng xương.',
      'Bác sĩ sẽ bất động tạm bằng nẹp bột, kê cao chân và chườm lạnh trong 3-5 ngày.',
      'Khi véo nhẹ da thấy xuất hiện các nếp nhăn li ti (Dấu hiệu nếp nhăn da - Wrinkle Sign), đó là lúc tuần hoàn da đã hồi phục an toàn tuyệt đối để tiến hành rạch da phẫu thuật.'
    ],
    patientTips: 'Gia đình kiên nhẫn gác chân cụ bà cao hơn tim trong những ngày chờ mổ; đây là bước chuẩn bị sống còn giúp ca mổ thành công 100%.'
  },
  {
    id: 'qa-ankle-anesthesia-pain',
    category: 'Phẫu Thuật Nẹp Vít ORIF',
    question: 'Mổ kết hợp xương mắt cá chân có đau không? Gây tê hay gây mê? Thời gian mổ bao lâu?',
    shortAnswer: 'Phẫu thuật thường thực hiện dưới GÂY TÊ TỦY SỐNG HOẶC GÂY TÊ VÙNG (không cần mê man), hoàn toàn không đau trong lúc mổ, thời gian mổ khoảng 60 - 90 phút.',
    detailedAnswer: [
      'Bác sĩ gây mê chỉ cần gây tê tủy sống liều thấp hoặc gây tê phong bế thần kinh chi dưới (Thần kinh đùi và thần kinh ngồi). Bệnh nhân hoàn toàn tỉnh táo, êm ái, hai chân mất cảm giác tạm thời trong lúc mổ.',
      'Phương pháp gây tê vùng cực kỳ an toàn cho người 74 tuổi vì không ảnh hưởng đến chức năng hô hấp hay tim mạch.',
      'Sau khi mổ xong, bác sĩ sẽ duy trì giảm đau bằng thuốc giảm đau đa mô thức (Multimodal Analgesia) hoặc truyền tê ngoài màng cứng ngắt quãng, giúp bệnh nhân trải qua những ngày đầu rất nhẹ nhàng.'
    ],
    patientTips: 'Bệnh nhân có thể đeo tai nghe nghe nhạc nhẹ trong phòng mổ để tinh thần thoải mái nhất.'
  },
  {
    id: 'qa-ankle-osteoporosis-74',
    category: 'An Toàn Tuổi 74 & Bệnh Nền',
    question: 'Bệnh nhân 74 tuổi bị loãng xương nặng T-score -2.7 thì nẹp vít có bị lỏng hoặc tụt ốc không?',
    shortAnswer: 'Bác sĩ sử dụng hệ thống NẸP KHÓA TITANIUM (Locking Plate) thế hệ mới có các ốc vít khóa cứng vào nẹp tạo khung giàn chịu lực, kết hợp phác đồ chống loãng xương sau mổ nên hoàn toàn vững chắc.',
    detailedAnswer: [
      'Ở người loãng xương, vỏ xương mỏng và bè xương xốp. Nẹp vít truyền thống có thể bị lỏng nếu chỉ bám vào xương xốp.',
      'Tuy nhiên, Nẹp Khóa Titanium giải phẫu (LCP) hiện đại hoạt động theo nguyên lý "Bộ khung cố định bên trong": Ốc vít có ren khóa thẳng vào lỗ nẹp kim loại, biến nẹp và vít thành một khối liền khối vững chắc, không phụ thuộc vào độ đặc của xương.',
      'Đồng thời, sau khi mổ, bệnh nhân tiếp tục dùng thuốc chống loãng xương đặc hiệu (Canxi hữu cơ + D3 + K2 và thuốc chống hủy xương) theo phác đồ của PGS.TS Cao Thanh Ngọc để kích thích xương mau liền quanh nẹp vít.'
    ],
    patientTips: 'Tuân thủ nghiêm ngặt việc không chống chân xuống đất trong 4-6 tuần đầu để nẹp vít bảo vệ xương tối đa.'
  },
  {
    id: 'qa-ankle-hyperthyroid-e05',
    category: 'An Toàn Tuổi 74 & Bệnh Nền',
    question: 'Đang uống thuốc điều trị cường giáp (E05) thì khi mổ mắt cá có nguy hiểm gì không?',
    shortAnswer: 'Chỉ cần nồng độ hormone tuyến giáp (FT3, FT4, TSH) đạt ngưỡng "bình giáp" và nhịp tim ổn định trước mổ thì cuộc phẫu thuật kết hợp xương hoàn toàn an toàn.',
    detailedAnswer: [
      'Trước ngày mổ, bệnh viện sẽ làm xét nghiệm máu kiểm tra chức năng tuyến giáp và đo điện tâm đồ.',
      'Vì phẫu thuật mắt cá chân thường dùng phương pháp gây tê vùng (không dùng thuốc mê toàn thân nặng), gánh nặng lên tim mạch và tuyến giáp được giảm thiểu tới 90%.',
      'Bệnh nhân vẫn uống cữ thuốc kháng giáp và thuốc chẹn beta đều đặn vào buổi sáng ngày mổ với một ngụm nước nhỏ.'
    ],
    patientTips: 'Nhớ mang theo toàn bộ đơn thuốc và vỉ thuốc tuyến giáp đang dùng khi vào viện nhập viện.'
  },
  {
    id: 'qa-ankle-dvt-blood-clot',
    category: 'An Toàn Tuổi 74 & Bệnh Nền',
    question: 'Tại sao sau khi mổ mắt cá chân bác sĩ lại tiêm thuốc chống đông máu ở bụng? Có bắt buộc không?',
    shortAnswer: 'BẮT BUỘC để phòng ngừa cục máu đông trong tĩnh mạch sâu (DVT) và tắc mạch phổi nguy hiểm tính mạng khi chân phải bất động.',
    detailedAnswer: [
      'Khi chân bị gãy và phải nằm bất động trong nẹp bột, dòng máu chảy ở các tĩnh mạch bắp chân bị chậm lại rất nhiều.',
      'Ở người 74 tuổi, máu có xu hướng dễ đông đặc hơn. Cục máu đông nếu hình thành ở bắp chân có thể trôi theo tĩnh mạch về tim rồi lên phổi gây thuyên tắc động mạch phổi (Pulmonary Embolism) – một biến chứng cực kỳ nguy hiểm.',
      'Bác sĩ sẽ chỉ định tiêm thuốc chống đông Enoxaparin (Lovenox) 40mg dưới da bụng 1 lần/ngày trong 10-14 ngày đầu sau mổ.',
      'Mũi tiêm rất nhỏ dưới da bụng, không gây đau buốt và là "lá chắn vàng" bảo vệ tính mạng cho người bệnh.'
    ],
    patientTips: 'Kết hợp co gập ngón chân 20-30 cái mỗi giờ để hỗ trợ bắp chân tống máu về tim liên tục.'
  },
  {
    id: 'qa-ankle-nwb-duration',
    category: 'Lộ Trình Phục Hồi & Tỳ Đè',
    question: 'Người bệnh cần kiêng chống chân xuống đất (Non-Weight Bearing - NWB) trong bao lâu? Nếu lỡ chống chân thì sao?',
    shortAnswer: 'Cần kiêng tỳ đè hoàn toàn (0%) trong 4 đến 6 tuần đầu sau mổ. Tuyệt đối không chống chân xuống đất khi chưa có chỉ định của bác sĩ.',
    detailedAnswer: [
      'Trong 4-6 tuần đầu, các đầu xương gãy đang trong giai đoạn mọc các cầu can xương mềm sinh học (Fibrocartilaginous Callus). Lúc này, nẹp vít kim loại đóng vai trò giữ vị trí chứ chưa thể chịu được toàn bộ 50-60kg trọng lượng cơ thể.',
      'Nếu lỡ chống chân mạnh xuống đất: Lực tỳ đè có thể làm cong nẹp Titanium, bung ốc vít hoặc làm gãy sập mộng chày - sên vừa được nắn chỉnh.',
      'Người bệnh phải dùng 2 nạng nách, khung tập đi hoặc xe đẩy đầu gối (Knee Scooter) để di chuyển trong nhà mà chân mổ luôn co lơ lửng không chạm đất.'
    ],
    patientTips: 'Khi đi vệ sinh hoặc tắm rửa, hãy ngồi trên ghế nhựa vững chắc để không bao giờ phải đứng dồn lực lên chân đau.'
  },
  {
    id: 'qa-ankle-cam-boot',
    category: 'Lộ Trình Phục Hồi & Tỳ Đè',
    question: 'Giày bảo hộ cổ chân CAM Boot là gì? Khi nào được tháo bột chuyển sang mang giày CAM Boot?',
    shortAnswer: 'Là loại giày bốt chuyên dụng có khung nhôm và túi khí nén êm ái, được chuyển sang dùng sau khi cắt chỉ (tuần thứ 2 sau mổ) để có thể tháo ra tập uốn cổ chân mỗi ngày.',
    detailedAnswer: [
      'Sau 10-14 ngày mổ, khi vết mổ khô và được cắt chỉ, bác sĩ sẽ cho tháo bỏ nẹp thạch cao cứng và chuyển sang mang Giày bảo hộ CAM Boot (Controlled Ankle Motion Boot).',
      'Ưu điểm vượt trội của giày CAM boot so với bó bột truyền thống:',
      '- Có thể mở khóa tháo rời khi ngồi trên giường để tập các bài tập gập duỗi cổ chân (ngăn ngừa cứng khớp).',
      '- Có van bơm túi khí ôm khít mắt cá, giảm rung lắc tối đa khi di chuyển.',
      '- Có thể tháo ra để lau rửa vệ sinh chân sạch sẽ, thoáng mát, chống ngứa ngáy và loét da.'
    ],
    patientTips: 'Nên chọn loại giày CAM boot có túi hơi khí nén (Air CAM Boot) đúng cỡ chân để ôm êm ái nhất.'
  },
  {
    id: 'qa-ankle-swelling-evening',
    category: 'Lộ Trình Phục Hồi & Tỳ Đè',
    question: 'Tại sao cổ chân mổ hay bị sưng to và tím tái vào buổi chiều tối? Bao lâu mới hết sưng hoàn toàn?',
    shortAnswer: 'Do trọng lực kéo máu và dịch dồn xuống vùng thấp khi ngồi hoặc đứng; hiện tượng này rất phổ biến và sẽ giảm dần sau 3-6 tháng.',
    detailedAnswer: [
      'Sau phẫu thuật chấn thương, hệ thống các vi mạch máu và mạch bạch huyết ở cổ chân cần từ 6 đến 12 tháng để tái tạo mạng lưới hoàn chỉnh.',
      'Khi người bệnh thõng chân xuống đất ngồi ăn cơm hoặc tập đi vào ban ngày, máu tĩnh mạch khó thắng được trọng lực để chảy ngược về tim, làm dịch ứ đọng gây sưng phù và da hơi tím đỏ vào cuối ngày.',
      'Khi nằm nghỉ gác chân cao qua đêm, cổ chân sẽ xẹp lại bình thường vào sáng hôm sau.',
      'Để cải thiện: Sau tuần thứ 6, người bệnh nên mang Vớ y khoa áp lực nhẹ (15-20 mmHg) vào ban ngày để ép dịch lưu thông.'
    ],
    patientTips: 'Cứ sau mỗi 45 phút ngồi thõng chân, hãy nằm nghỉ gác chân lên gối cao 15 phút.'
  },
  {
    id: 'qa-ankle-hardware-removal',
    category: 'Dinh Dưỡng & Tháo Nẹp Vít',
    question: 'Sau này có cần phải phẫu thuật mổ tháo nẹp vít Titanium ra không? Có để trong chân suốt đời được không?',
    shortAnswer: 'Ở người 74 tuổi, nẹp vít Titanium là vật liệu trơ sinh học cao cấp, HOÀN TOÀN CÓ THỂ ĐỂ LẠI SUỐT ĐỜI mà không cần mổ tháo, trừ khi có cộm cấn khó chịu.',
    detailedAnswer: [
      'Nẹp vít Titanium hiện đại không bị oxy hóa, không gỉ sét, tương thích sinh học 100% với mô người và không ảnh hưởng đến việc chụp MRI hay đi qua cổng an ninh sân bay.',
      'Ở người cao tuổi, việc phẫu thuật lần 2 để tháo nẹp thường không khuyến khích vì làm bệnh nhân phải chịu thêm một lần rạch da và gây tê không cần thiết.',
      'Chỉ xem xét tháo nẹp vít trong các trường hợp:',
      '- Nẹp hoặc đầu ốc ở mắt cá ngoài quá sát da gây cộm rát khi cọ xát với giày dép.',
      '- Bị đau nhức cục bộ tại vị trí nẹp sau khi xương đã liền hoàn toàn (thường sau 12-18 tháng).'
    ],
    patientTips: 'Nếu chân sinh hoạt hoàn toàn êm ái thì cụ bà cứ yên tâm giữ nẹp vít trong chân suốt đời.'
  },
  {
    id: 'qa-ankle-nutrition-diet',
    category: 'Dinh Dưỡng & Tháo Nẹp Vít',
    question: 'Người bị gãy xương mắt cá nên ăn gì để xương mau liền? Có cần kiêng thịt gà, rau muống, đồ nếp không?',
    shortAnswer: 'Cần ăn nhiều đạm (thịt nạc, trứng, cá), canxi hữu cơ, vitamin D3, K2 và vitamin C. KHÔNG CẦN KIÊNG KHEM THỊT GÀ, RAU MUỐNG VÔ CĂN CỨ.',
    detailedAnswer: [
      'Quan niệm dân gian kiêng thịt gà (sợ nhức), kiêng rau muống (sợ sẹo lồi), kiêng đồ nếp (sợ mưng mủ) là KHÔNG CÓ CƠ SỞ KHOA HỌC và làm người già bị suy dinh dưỡng thiếu chất tạo xương.',
      'Cơ thể cần một lượng lớn Protein chất lượng cao (thịt gà, thịt bò, cá, trứng) để tổng hợp mạng lưới Collagen màng xương và dây chằng.',
      'Bổ sung Canxi hữu cơ (sữa hạt, tôm tép nhỏ, rau xanh đậm) kết hợp Vitamin D3 + K2 để đưa canxi vào xương.',
      'Bổ sung Vitamin C (ổi, cam, kiwi) 500mg/ngày để kích hoạt tế bào tạo xương và phòng ngừa hội chứng đau loạn dưỡng Sudeck.'
    ],
    patientTips: 'Ăn uống đa dạng, giàu đạm và uống đủ nước ấm giúp xương liền nhanh gấp đôi.'
  },
  {
    id: 'qa-ankle-cost-insurance',
    category: 'Phẫu Thuật Nẹp Vít ORIF',
    question: 'Chi phí phẫu thuật kết hợp xương nẹp vít mắt cá tại TP.HCM khoảng bao nhiêu? BHYT chi trả thế nào?',
    shortAnswer: 'Tổng chi phí dao động khoảng 25 - 45 triệu VNĐ (tùy loại nẹp khóa Titanium và dây neo TightRope). BHYT thanh toán phần lớn tiền công mổ, giường bệnh và hỗ trợ một phần vật tư theo quy định.',
    detailedAnswer: [
      'Chi phí bao gồm:',
      '- Tiền công phẫu thuật và gây tê tủy sống: khoảng 5 - 8 triệu VNĐ (BHYT thanh toán theo định mức).',
      '- Vật tư cấy ghép kết hợp xương (1 nẹp khóa Titanium mắt cá ngoài + 4-6 ốc vít khóa + 2 vít xốp mắt cá trong + dây neo chỉ TightRope): khoảng 15 - 30 triệu VNĐ.',
      '- Tiền phòng bệnh, thuốc men kháng sinh chống đông và chăm sóc 3 ngày: khoảng 4 - 8 triệu VNĐ.',
      'Nếu có thêm Bảo hiểm sức khỏe tư nhân, bệnh nhân có thể được bảo lãnh viện phí thanh toán gần như toàn bộ phần chi phí đồng chi trả.'
    ],
    patientTips: 'Xuất trình thẻ BHYT ngay khi nhập viện cấp cứu để được hưởng chế độ thanh toán tối đa.'
  }
];
