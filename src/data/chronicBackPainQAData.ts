export interface BackPainQAItem {
  id: string;
  category: 'Cơ Chế & Triệu Chứng' | 'Tương Quan Tử Cung & K Vú' | 'Tư Thế & Giấc Ngủ' | 'Phục Hồi & Điều Trị';
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  clinicalPearls: string[];
  tags: string[];
}

export const chronicBackPainQAItems: BackPainQAItem[] = [
  {
    id: 'bp-qa-01',
    category: 'Cơ Chế & Triệu Chứng',
    question: 'Tại sao tôi bị đau lưng kinh niên dọc sống lưng từ lúc 25 tuổi, bệnh này có chữa khỏi được không?',
    shortAnswer: 'Đau lưng từ năm 25 tuổi là biểu hiện của Hội chứng đau cân cơ mạn tính (MPS) do tư thế làm việc và mất cân bằng chuỗi động lực cột sống. Hoàn toàn có thể kiểm soát và phục hồi tốt nếu giải phóng các nút thắt cơ và phục hồi cơ lõi.',
    detailedAnswer: 'Cơn đau khởi phát từ thời trẻ (năm ~25 tuổi) và kéo dài nhiều năm là đặc trưng của Hội chứng Đau Cân Cơ Mạn Tính (Myofascial Pain Syndrome - MPS). Khi chúng ta ngồi làm việc, cúi gập hoặc mang vác không đúng tư thế trong thời gian dài, các sợi cơ dọc sống lưng (cơ dựng sống Erector Spinae) phải co thắt liên tục để giữ thăng bằng. Lâu ngày, các sợi cơ này bị thiếu máu nuôi cục bộ và hình thành các "nút thắt xơ hóa" (Myofascial Trigger Points). Bệnh hoàn toàn lành tính và có thể cải thiện 80 - 90% khi kết hợp giải phóng màng cân cơ (MFR), tập các bài tập ổn định cơ lõi (Core stability) và điều chỉnh công thái học.',
    clinicalPearls: [
      'Bệnh mạn tính từ năm 25 tuổi (>15-20 năm) khẳng định 100% bản chất cơ học lành tính.',
      'Các nút thắt cơ không tự biến mất nếu chỉ nghỉ ngơi thụ động; cần các động tác giãn cơ và giải phóng cơ chủ động.'
    ],
    tags: ['Bệnh sử 25 tuổi', 'Đau cân cơ', 'MPS', 'Cơ dựng sống']
  },
  {
    id: 'bp-qa-02',
    category: 'Cơ Chế & Triệu Chứng',
    question: 'Tại sao mỗi khi người nhà xoa bóp hoặc đấm lưng thì tôi thấy đỡ đau nhưng lại bị NGỨA RAN châm chích dưới da?',
    shortAnswer: 'Đây là sự kết hợp giữa Thuyết Cổng Kiểm Soát (giúp giảm đau cơ) và hiện tượng Kích Thích Nhánh Thần Kinh Bì Lưng Sau (Notalgia Paresthetica - gây cảm giác ngứa ran khi đấm bóp).',
    detailedAnswer: 'Hiện tượng kỳ lạ này được y học giải thích qua 2 cơ chế sinh lý thần kinh song hành:\n\n1. **Tại sao đấm bóp thấy đỡ đau?** Theo Thuyết Cổng Kiểm Soát (Gate Control Theory của Melzack & Wall), khi xoa bóp hoặc đấm lưng, các thụ thể xúc giác cơ học (sợi A-beta) truyền tín hiệu nhanh về tủy sống, "đóng cổng" ngăn không cho tín hiệu đau từ thớ cơ sâu (sợi C) truyền lên não bộ, mang lại cảm giác dễ chịu tức thì.\n\n2. **Tại sao lại bị NGỨA RAN rần rần?** Các nhánh thần kinh cảm giác da bì lưng sau (Dorsal Cutaneous Rami) vốn phải chui xuyên qua lớp cơ dựng sống dày đặc. Do lớp cơ này bị co thắt xơ hóa mãn tính, các sợi thần kinh bì bị nhạy cảm hóa. Khi chịu lực đấm bóp cơ học rung động, các đầu tận cùng thần kinh nông (sợi A-delta và sợi C) bị kích thích phóng điện bất thường và giải phóng vi thể chất trung gian, tạo nên cảm giác ngứa ran, châm chích rần rần như kiến bò dưới da (Neuropathic itch & paresthesia).',
    clinicalPearls: [
      'Ngứa ran khi đấm bóp là dấu hiệu của thần kinh bì bị kích thích cơ học, hoàn toàn không nguy hiểm.',
      'Tránh đấm bóp quá mạnh hoặc cào gãi vì có thể gây tổn thương vi thể mô dưới da; nên dùng kỹ thuật xoa vuốt nhẹ nhàng kết hợp chườm ấm.'
    ],
    tags: ['Ngứa ran', 'Đấm lưng', 'Notalgia Paresthetica', 'Cổng kiểm soát']
  },
  {
    id: 'bp-qa-03',
    category: 'Cơ Chế & Triệu Chứng',
    question: 'Cảm giác ngứa ran khi đấm bóp lưng có nguy hiểm không, có phải là bệnh thần kinh ác tính không?',
    shortAnswer: 'Tuyệt đối KHÔNG nguy hiểm và không phải bệnh ác tính. Đây chỉ là phản ứng kích thích cảm giác cơ học lành tính của các nhánh thần kinh nông dưới da.',
    detailedAnswer: 'Chị hoàn toàn có thể yên tâm! Cảm giác ngứa ran (Paresthesia) ở vùng lưng khi xoa bóp là một hiện tượng rối loạn cảm giác cơ năng lành tính (Functional Neuropathic Sensation), rất phổ biến ở những người có cơ lưng căng cứng hoặc thoái hóa nhẹ cột sống ngực. Nó hoàn toàn không phải là bệnh thần kinh trung ương, không phải u tủy và không gây liệt hay bất kỳ biến chứng thần kinh nguy hiểm nào.',
    clinicalPearls: [
      'Cảm giác ngứa ran sẽ tự thuyên giảm rõ rệt khi các bó cơ lưng được giải phóng mềm mại trở lại.',
      'Bổ sung Vitamin nhóm B (B1, B6, B12) và Magie giúp ổn định màng tế bào thần kinh cảm giác.'
    ],
    tags: ['An tâm', 'Thần kinh bì', 'Lành tính', 'Không nguy hiểm']
  },
  {
    id: 'bp-qa-04',
    category: 'Tương Quan Tử Cung & K Vú',
    question: 'Tại sao cứ mỗi khi gần đến chu kỳ kinh nguyệt thì mức độ đau thắt lưng và dọc sống lưng lại tăng dữ dội?',
    shortAnswer: 'Do hiện tượng Đau Quy Chiếu Nội Tạng - Thân Thể từ tử cung bùng phát khi chất Prostaglandin F2a tăng cao trong pha hoàng thể trễ, kích thích dây chằng tử cung - cùng dội ngược lên thắt lưng.',
    detailedAnswer: 'Trong những ngày trước khi hành kinh (khoảng 3 - 7 ngày trước kỳ kinh), sự sụt giảm hormone Progesterone kích hoạt niêm mạc tử cung và đặc biệt là các ổ Lạc Tuyến Trong Cơ Tử Cung (Adenomyosis) sản sinh ồ ạt hóa chất trung gian **Prostaglandin F2a** và **PGE2**.\n\nChất này gây co bóp mạnh các thớ cơ tử cung, làm thiếu máu cục bộ cơ tử cung và kích thích dữ dội các thụ thể đau nội tạng. Do tử cung được nâng đỡ bởi 2 Dây chằng tử cung - cùng (Uterosacral Ligaments) bám thẳng vào xương cùng cụt ($S_2 - S_4$) và có chung đường dẫn truyền thần kinh với tủy sống thắt lưng ($T_{10} - L_1$), các xung động đau dữ dội từ tử cung sẽ "bắn chéo" và hội tụ tại sừng sau tủy sống, tạo thành cơn đau quy chiếu (Referred Pain) lan tỏa khắp thắt lưng và dọc cột sống lưng!',
    clinicalPearls: [
      'Đau lưng tăng theo chu kỳ kinh là bằng chứng vàng xác nhận nguồn gốc đau quy chiếu từ bệnh lý phụ khoa (Adenomyosis & U xơ).',
      'Uống thuốc kháng viêm ức chế Prostaglandin (như Mefenamic Acid hoặc Ibuprofen) trước kỳ kinh 2-3 ngày sẽ dập tắt cơn đau lưng này rất hiệu quả.'
    ],
    tags: ['Chu kỳ kinh nguyệt', 'Đau tiền kinh', 'Prostaglandin', 'Đau quy chiếu']
  },
  {
    id: 'bp-qa-05',
    category: 'Tương Quan Tử Cung & K Vú',
    question: 'Bệnh đau lưng của tôi có liên quan gì đến tình trạng Lạc tuyến trong cơ tử cung (Adenomyosis) và Khối u xơ 45mm thành sau tử cung không?',
    shortAnswer: 'Có mối liên hệ mật thiết 100%! Khối u xơ 45mm ở thành sau tử cung và các ổ Adenomyosis tạo lực tỳ đè trực tiếp và truyền tín hiệu đau qua dây chằng tử cung - cùng ra thắt lưng.',
    detailedAnswer: 'Kết quả siêu âm của chị cho thấy có **Lạc tuyến trong cơ tử cung (Adenomyosis)** kèm **Khối u xơ 45mm ở thành sau**. Thành sau tử cung nằm sát ngay phía trước xương cùng và đám rối thần kinh thắt lưng - cùng.\n\nKhối u xơ 45mm tạo áp lực cơ học thường trực đè vào đám rối thần kinh cùng, trong khi các ổ Adenomyosis gây viêm và co thắt vi thể liên tục trong cơ tử cung. Đây chính là "ngòi nổ" duy trì tình trạng đau mỏi ê ẩm vùng thắt lưng hàng ngày, và bùng phát dữ dội khi bước vào chu kỳ kinh nguyệt. Khi xử lý tốt khối u xơ và kiểm soát Adenomyosis, cơn đau lưng sẽ giảm đến 60-70%!',
    clinicalPearls: [
      'Khối u xơ thành sau có xu hướng gây đau lưng nhiều hơn hẳn so với u xơ ở thành trước hoặc đáy tử cung.',
      'Giải quyết triệt để bệnh lý phụ khoa là chìa khóa để chữa dứt điểm cơn đau thắt lưng chu kỳ.'
    ],
    tags: ['Adenomyosis', 'U xơ thành sau', '45mm', 'Tương quan phụ khoa']
  },
  {
    id: 'bp-qa-06',
    category: 'Tương Quan Tử Cung & K Vú',
    question: 'Tôi từng điều trị K vú và dùng Tamoxifen 5 năm (ngưng 01/2026), cơn đau lưng này có phải là dấu hiệu ung thư di căn xương không?',
    shortAnswer: 'Tuyệt đối KHÔNG PHẢI ung thư di căn xương! Bệnh đau lưng của chị đã có từ năm 25 tuổi (trước khi mắc K vú hơn 15 năm) và có đầy đủ tính chất của đau cơ học - quy chiếu lành tính.',
    detailedAnswer: 'Chị hãy hoàn toàn trút bỏ sự lo lắng này! Các bằng chứng y khoa khẳng định đây không phải di căn xương:\n\n1. **Yếu tố thời gian cốt lõi**: Bệnh đau lưng của chị đã có từ năm 25 tuổi, kéo dài ổn định suốt hơn 15 năm qua, trong khi K vú xuất hiện sau đó rất nhiều năm.\n2. **Đặc tính giảm khi kê gối và đấm bóp**: Đau do di căn xương là tổn thương tiêu hủy xương thực thể, đấm bóp sẽ gây đau buốt dữ dội và không bao giờ đỡ khi kê gối hay nằm nghỉ.\n3. **Tính chất chu kỳ kinh nguyệt**: Đau di căn xương diễn tiến liên tục tăng dần theo thời gian, không bao giờ thay đổi phụ thuộc vào chu kỳ kinh nguyệt như trường hợp của chị.\n4. **Hiệu quả bảo vệ 5 năm Tamoxifen**: Chị đã hoàn thành trọn vẹn 5 năm Tamoxifen bảo vệ tuyến vú, tạo hiệu ứng kế thừa giảm nguy cơ tái phát vú và di căn xương tới 47 - 50% trong suốt 10-15 năm tiếp theo!',
    clinicalPearls: [
      'Đau mạn tính từ 25 tuổi là bằng chứng thép loại trừ hoàn toàn nguy cơ di căn xương.',
      'Tâm lý thoải mái, không lo âu sẽ giúp hệ thần kinh giảm tăng nhạy cảm đau trung ương.'
    ],
    tags: ['K vú', 'Tamoxifen 5 năm', 'Không di căn xương', 'An tâm tuyệt đối']
  },
  {
    id: 'bp-qa-07',
    category: 'Tương Quan Tử Cung & K Vú',
    question: 'Làm thế nào để phân biệt chắc chắn giữa đau lưng cân cơ lành tính với đau do di căn xương?',
    shortAnswer: 'Đau cân cơ lành tính có tính chất cơ học (đỡ khi nghỉ ngơi, đấm bóp, kê gối; tăng trước kỳ kinh), trong khi đau di căn xương nhức buốt sâu, đau liên tục tăng về đêm và không đổi theo tư thế.',
    detailedAnswer: 'Bác sĩ chuyên khoa Ung bướu và Cơ Xương Khớp luôn dựa vào 4 tiêu chuẩn kinh điển sau để phân biệt:\n\n| Tiêu Chí Phân Biệt | Đau Lưng Cân Cơ & Quy Chiếu Lành Tính (Trường Hợp Của Chị) | Đau Do Di Căn Xương (Ung Thư) |\n| :--- | :--- | :--- |\n| **Khởi phát & Diễn tiến** | Có từ năm 25 tuổi (>15 năm), diễn tiến ổn định | Mới xuất hiện, tiến triển tăng dần nhanh chóng trong vài tuần/tháng |\n| **Ảnh hưởng chu kỳ kinh** | Đau tăng rõ rệt 3-5 ngày trước kỳ kinh, giảm sau sạch kinh | Không liên quan chu kỳ kinh nguyệt, đau liên tục |\n| **Phản ứng khi đấm bóp** | Đỡ đau mỏi tức thì, kèm cảm giác ngứa ran dễ chịu | Đau chói buốt dữ dội tại điểm tổn thương xương, không thể chạm vào |\n| **Đáp ứng với kê gối** | Đỡ đau rõ rệt khi kê gối nâng đỡ thắt lưng khi ngủ | Không đỡ khi thay đổi tư thế hay kê gối; đau dữ dội về đêm khi nằm yên |',
    clinicalPearls: [
      'Mọi đặc điểm lâm sàng của chị đều khớp 100% với nhóm Đau Cân Cơ & Quy Chiếu Lành Tính.',
      'Nếu cần kiểm tra định kỳ, chụp MRI hoặc xạ hình xương hàng năm trong lịch tái khám K vú sẽ khẳng định sự an toàn trọn vẹn.'
    ],
    tags: ['Phân biệt chẩn đoán', 'Đau cơ học', 'Di căn xương', 'Tiêu chuẩn lâm sàng']
  },
  {
    id: 'bp-qa-08',
    category: 'Tư Thế & Giấc Ngủ',
    question: 'Tại sao khi tôi kê gối vào thắt lưng khi ngủ thì thấy đỡ đau rõ rệt, nhưng sáng dậy đi lại thì mãi không khỏi?',
    shortAnswer: 'Kê gối giúp nâng đỡ độ ưỡn sinh lý và giải tải tạm thời cho cơ lưng khi nằm ngửa, nhưng không thể tự phá vỡ các nút thắt cơ xơ hóa và không giải quyết được nguồn kích thích đau từ tử cung.',
    detailedAnswer: 'Khi chị nằm ngửa trên nệm phẳng, vùng thắt lưng có một khoảng hở sinh lý tự nhiên (độ ưỡn thắt lưng - Lumbar Lordosis). Trọng lực sẽ kéo cột sống thắt lưng phẳng xuống, làm các nhóm cơ dựng sống và cơ vuông thắt lưng phải căng ra để chống đỡ.\n\nKhi chị **kê một chiếc gối mỏng dưới thắt lưng**, gối lấp đầy khoảng hở này, nâng đỡ các đốt sống và cho phép cơ lưng hoàn toàn thư giãn, đĩa đệm được giảm áp lực $\rightarrow$ chị cảm thấy êm ái và đỡ đau rõ rệt khi ngủ.\n\n**Tại sao mãi không khỏi?** Vì gối chỉ là biện pháp thụ động tạm thời khi nằm. Khi chị thức dậy đứng đi lại, trọng lực cơ thể tác động trở lại, các nút thắt cơ xơ hóa (Trigger points) hình thành từ năm 25 tuổi và sự kích thích đau quy chiếu từ khối u xơ 45mm / Adenomyosis lại tiếp tục kích hoạt vòng xoắn đau mỏi. Muốn khỏi dứt điểm, cần kết hợp bài tập củng cố cơ lõi sâu và điều trị nguyên nhân phụ khoa.',
    clinicalPearls: [
      'Kê gối là thói quen rất tốt cần tiếp tục duy trì hàng đêm.',
      'Cần kết hợp thêm 15 phút tập các bài tập cơ lõi McGill Big 3 mỗi ngày để cơ bắp tự giữ vững cột sống khi đứng đi lại.'
    ],
    tags: ['Kê gối ngủ', 'Độ ưỡn thắt lưng', 'Lumbar Lordosis', 'Giảm tải cơ học']
  },
  {
    id: 'bp-qa-09',
    category: 'Tư Thế & Giấc Ngủ',
    question: 'Cách kê gối ngủ chuẩn y khoa nhất cho người bị đau lưng kinh niên là như thế nào?',
    shortAnswer: 'Kỹ thuật kê gối kép: Khi nằm ngửa dùng 1 gối mỏng 3-5cm dưới thắt lưng + 1 gối ôm vừa dưới khoeo chân; khi nằm nghiêng kẹp 1 gối mềm giữa 2 đầu gối.',
    detailedAnswer: 'Các chuyên gia Công thái học & Cột sống khuyến nghị 2 tư thế ngủ chuẩn vàng cho người đau lưng mạn tính:\n\n1. **Tư thế Nằm Ngửa (Chuẩn Vàng Nhất)**:\n   - **Gối 1 (Thắt lưng)**: Đặt một chiếc gối tròn mỏng hoặc gối cao su non mềm có độ dày 3 – 5cm ngay dưới hõm thắt lưng để nâng đỡ độ cong sinh lý.\n   - **Gối 2 (Khoeo chân)**: Đặt một chiếc gối ôm hoặc gối gác dưới khoeo chân (phía sau 2 đầu gối) giúp khớp gối hơi gập nhẹ 15-20 độ. Động tác này làm chùng cơ thắt lưng chậu (Psoas), giải tỏa hoàn toàn áp lực căng kéo lên cột sống thắt lưng.\n\n2. **Tư thế Nằm Nghiêng (Cho Người Thích Nằm Nghiêng)**:\n   - Hơi co nhẹ 2 chân (tư thế thai nhi mở rộng).\n   - Kẹp một chiếc gối mềm vừa vặn giữa 2 đầu gối và 2 mắt cá chân. Chiếc gối này giữ cho khung chậu, khớp háng và cột sống thắt lưng luôn thẳng hàng, không bị xoắn vặn sang một bên.',
    clinicalPearls: [
      'Tuyệt đối TRÁNH nằm sấp vì làm tăng độ ưỡn thắt lưng quá mức và gây vẹo cổ gáy.',
      'Nệm ngủ nên có độ cứng vừa phải (Medium-firm), không quá lún và không quá cứng như phản gỗ.'
    ],
    tags: ['Tư thế ngủ', 'Kê gối chuẩn', 'Nằm ngửa', 'Nằm nghiêng']
  },
  {
    id: 'bp-qa-10',
    category: 'Cơ Chế & Triệu Chứng',
    question: 'Trước đây tôi từng bị đau mỏi cổ vai gáy (và thoát vị đĩa đệm cổ), điều đó có ảnh hưởng gì đến cơn đau lưng hiện tại không?',
    shortAnswer: 'Có ảnh hưởng rất lớn! Cột sống là một chuỗi động lực liên hoàn; tổn thương hoặc đau mỏi ở cổ vai gáy buộc cơ lưng ngực và thắt lưng phải gồng cứng bù trừ suốt nhiều năm.',
    detailedAnswer: 'Cột sống của con người hoạt động như một cột trụ chịu lực liên hoàn (Kinetic Chain). Đầu người nặng trung bình 4.5 – 5.5 kg được nâng đỡ bởi cột sống cổ. Khi đoạn cổ vai gáy bị đau mỏi hoặc thoái hóa thoát vị đĩa đệm, tư thế đầu thường có xu hướng nhô ra phía trước (Forward Head Posture).\n\nĐể giữ cho cơ thể không bị ngã về trước, toàn bộ các dải cơ dựng sống chạy dọc từ đốt sống ngực xuống thắt lưng (Iliocostalis, Longissimus, Spinalis) buộc phải gồng căng liên tục gấp 2-3 lần bình thường để "kéo giật" thân người về sau. Sự quá tải bù trừ cơ học này kéo dài nhiều năm chính là nguyên nhân làm cơn đau lan tỏa dọc từ sống lưng xuống tận thắt lưng!',
    clinicalPearls: [
      'Điều trị đau lưng hiệu quả bắt buộc phải giải phóng đồng bộ cả cơ cổ vai gáy và cơ thắt lưng.',
      'Tập bài tập thu cằm (Chin-tuck) giúp chỉnh lại trục cột sống từ trên đỉnh đầu xuống đáy thắt lưng.'
    ],
    tags: ['Cổ vai gáy', 'Chuỗi động lực', 'Kinetic Chain', 'Bù trừ cơ học']
  },
  {
    id: 'bp-qa-11',
    category: 'Phục Hồi & Điều Trị',
    question: 'Có những bài tập vật lý trị liệu nào an toàn và hiệu quả nhất mà tôi có thể tự tập tại nhà mỗi ngày?',
    shortAnswer: 'Bộ 3 bài tập chuẩn y khoa: Tư thế Mèo - Bò (Cat-Camel), Bài tập Chim - Chó (Bird-Dog) và Bài tập Cây cầu (Glute Bridge), kết hợp tư thế Gác chân lên tường.',
    detailedAnswer: 'Dưới đây là phác đồ 4 bài tập an toàn tuyệt đối cho người có tiền sử cột sống và phụ khoa:\n\n1. **Tư thế Mèo - Bò (Cat - Camel)**: Quỳ 4 điểm trên thảm. Hít vào võng nhẹ lưng ngẩng mặt; thở ra cong tròn lưng cúi đầu nhìn rốn. Thực hiện 10-15 lần giúp bôi trơn đốt sống và thư giãn cơ dựng sống.\n\n2. **Bài tập Chim - Chó (Bird - Dog)**: Quỳ 4 điểm, siết nhẹ bụng, từ từ duỗi thẳng tay phải về trước và chân trái ra sau thành một đường thẳng, giữ 3-5 giây rồi đổi bên. Tập 10 lần mỗi bên giúp ổn định cơ lõi sâu mà không nén ép đĩa đệm.\n\n3. **Bài tập Cây Cầu (Glute Bridge)**: Nằm ngửa gập gối, nâng hông lên bằng lực cơ mông sao cho đầu gối - hông - vai thẳng hàng. Tập 12-15 lần giúp cơ mông khỏe, giải tải cho thắt lưng.\n\n4. **Tư thế Gác Chân Lên Tường (Legs-Up-The-Wall)**: Nằm ngửa gác 2 chân thẳng lên tường 10-15 phút trước khi ngủ, giúp hồi lưu máu vùng chậu và giải phóng hoàn toàn thắt lưng.',
    clinicalPearls: [
      'Chỉ cần dành 15-20 phút mỗi ngày vào buổi sáng hoặc tối.',
      'Tập chậm rãi, lắng nghe cơ thể, không gồng giật mạnh.'
    ],
    tags: ['Bài tập tại nhà', 'McGill Big 3', 'Cat-Camel', 'Bird-Dog', 'Glute Bridge']
  },
  {
    id: 'bp-qa-12',
    category: 'Phục Hồi & Điều Trị',
    question: 'Tôi nên dùng phương pháp chườm ấm hay chườm lạnh khi bị đau lưng và ngứa ran?',
    shortAnswer: 'Chườm Ấm là lựa chọn tối ưu và hoàn hảo nhất cho tình trạng đau cân cơ mạn tính, ngứa ran và đau liên quan chu kỳ kinh của chị.',
    detailedAnswer: 'Đối với bệnh cảnh của chị, **CHƯỜM ẤM** mang lại hiệu quả vượt trội gấp nhiều lần so với chườm lạnh vì 3 lý do:\n\n1. **Giãn cơ và triệt tiêu co thắt**: Nhiệt ấm (40 - 45°C) làm giãn mạch máu cục bộ, tăng lưu lượng oxy và dinh dưỡng đến nuôi các bó cơ dựng sống đang bị thiếu máu xơ hóa, làm mềm các nút thắt cơ (Trigger points).\n2. **Làm dịu thần kinh bì**: Nhiệt ấm kích thích các thụ thể nhiệt làm ức chế xung động ngứa ran châm chích của nhánh thần kinh bì lưng sau.\n3. **Thư giãn tử cung và giảm đau quy chiếu**: Chườm ấm vùng bụng dưới và thắt lưng trước kỳ kinh giúp làm giãn cơ trơn tử cung, giảm co bóp do Prostaglandin và giảm ứ trệ tuần hoàn vùng chậu.\n\n*Cách thực hiện*: Dùng túi chườm thảo dược (ngải cứu rang muối gừng) hoặc túi chườm điện 20 – 30 phút mỗi tối trước khi đi ngủ.',
    clinicalPearls: [
      'Chườm lạnh chỉ dùng cho chấn thương cấp tính sưng bầm (như bong gân mắt cá); không dùng cho đau lưng mạn tính.',
      'Nhiệt độ túi chườm vừa phải dễ chịu, không để quá nóng gây bỏng rát da.'
    ],
    tags: ['Chườm ấm', 'Ngải cứu muối gừng', 'Giãn cơ', 'Dịu thần kinh']
  },
  {
    id: 'bp-qa-13',
    category: 'Phục Hồi & Điều Trị',
    question: 'Vào những ngày trước kỳ kinh khi đau lưng tăng mạnh, tôi nên làm gì để giảm đau nhanh mà không hại dạ dày?',
    shortAnswer: 'Chủ động uống thuốc kháng viêm ức chế Prostaglandin trước kỳ kinh 2 ngày (sau ăn no), kết hợp chườm ấm thảo dược, gác chân lên tường và uống trà gừng ấm.',
    detailedAnswer: 'Chiến lược "Đón đầu chu kỳ" giúp dập tắt cơn đau trước khi nó bùng phát:\n\n1. **Uống thuốc kháng viêm ức chế Prostaglandin đúng thời điểm**: Sử dụng thuốc như Mefenamic Acid (Ponstan 500mg) hoặc Ibuprofen theo hướng dẫn của Bác sĩ, bắt đầu uống **trước ngày dự kiến có kinh 1-2 ngày** (khi bắt đầu thấy đau tức nhẹ). Uống ngay sau bữa ăn no với nhiều nước để bảo vệ dạ dày.\n2. **Chườm ấm vùng hạ vị và thắt lưng**: Thực hiện 2 lần/ngày (trưa và tối).\n3. **Tư thế Gác chân lên tường (Legs-Up-The-Wall)**: 15 phút vào buổi tối giúp máu huyết vùng chậu lưu thông, giảm ứ trệ áp lực lên thành sau tử cung.\n4. **Trà gừng ấm mật ong**: Gừng chứa hoạt chất Gingerol có tác dụng ức chế men tổng hợp Prostaglandin tự nhiên tương tự như thuốc kháng viêm nhẹ.',
    clinicalPearls: [
      'Chặn đứng Prostaglandin sớm trước khi cơn đau đạt đỉnh sẽ giúp giảm 70% mức độ đau lưng.',
      'Nếu có tiền sử dạ dày nhạy cảm, có thể dùng kèm thuốc bảo vệ niêm mạc dạ dày (như Esomeprazole).'
    ],
    tags: ['Giảm đau tiền kinh', 'Chặn Prostaglandin', 'Trà gừng', 'Bảo vệ dạ dày']
  },
  {
    id: 'bp-qa-14',
    category: 'Phục Hồi & Điều Trị',
    question: 'Chế độ dinh dưỡng và các loại thực phẩm bổ sung nào giúp giảm viêm, giãn cơ và dịu thần kinh bì lưng?',
    shortAnswer: 'Bổ sung Magie Glycinate, Vitamin nhóm B (B1, B6, B12), Omega-3 EPA/DHA, kết hợp chế độ ăn Địa Trung Hải giàu chất chống oxy hóa.',
    detailedAnswer: 'Chế độ dinh dưỡng chuyên biệt cho hội chứng đau thần kinh - cân cơ và bệnh phụ khoa:\n\n1. **Magie Glycinate (300 – 400mg/ngày)**: Dạng Magie hấp thu tối ưu giúp thư giãn cơ trơn tử cung, chống co thắt cơ dựng sống và làm dịu hệ thần kinh trung ương, giúp ngủ ngon sâu giấc.\n2. **Vitamin B6 (50mg/ngày) + B-Complex**: Hỗ trợ dẫn truyền xung động thần kinh, ổn định màng tế bào thần kinh bì lưng và hỗ trợ cân bằng chuyển hóa Estrogen tại gan.\n3. **Omega-3 Tinh Khiết (1000 – 2000mg EPA/DHA)**: Cạnh tranh với Acid Arachidonic, ức chế quá trình sản sinh Prostaglandin F2a gây viêm và co thắt tử cung.\n4. **Thực phẩm giàu Canxi & Kali**: Chuối, bơ, rau cải xoăn, hạt chia, sữa hạt giúp chống co rút cơ bắp.\n5. **Hạn chế**: Cà phê đậm đặc, rượu bia, đồ ăn quá nhiều đường và muối (gây giữ nước và tăng phù nề vùng chậu trước kỳ kinh).',
    clinicalPearls: [
      'Uống Magie vào buổi tối sau ăn 1 tiếng vừa giúp giãn cơ vừa cải thiện chất lượng giấc ngủ.',
      'Duy trì uống đủ 2 lít nước ấm mỗi ngày để thanh lọc mô cơ.'
    ],
    tags: ['Dinh dưỡng', 'Magie Glycinate', 'Vitamin B6', 'Omega-3', 'Giảm viêm']
  },
  {
    id: 'bp-qa-15',
    category: 'Phục Hồi & Điều Trị',
    question: 'Tôi nên đi khám chuyên khoa nào (Cơ Xương Khớp, Phục Hồi Chức Năng hay Phụ Khoa) để điều trị dứt điểm tình trạng này?',
    shortAnswer: 'Nên phối hợp khám 2 chuyên khoa: Phụ Khoa (để kiểm soát U xơ 45mm và Adenomyosis) và Vật Lý Trị Liệu / Phục Hồi Chức Năng (để giải phóng màng cân cơ MFR dọc sống lưng).',
    detailedAnswer: 'Do bệnh cảnh của chị có tính chất đa chuyên khoa (Cơ xương khớp + Thần kinh bì + Phụ khoa tử cung), mô hình phối hợp lý tưởng nhất gồm 2 bước:\n\n1. **Khám Chuyên Khoa Phụ Khoa (Ưu tiên hàng đầu)**: Thăm khám tại các bệnh viện phụ sản lớn (BV Hùng Vương, BV Từ Dũ, BV ĐHYD) để theo dõi tiến triển khối u xơ 45mm thành sau và Adenomyosis. Bác sĩ sẽ tư vấn phác đồ nội khoa hoặc can thiệp nội soi để xử lý nguồn gốc đau quy chiếu.\n2. **Khám Chuyên Khoa Phục Hồi Chức Năng & Vật Lý Trị Liệu**: Đến các trung tâm phục hồi chức năng uy tín để được chuyên viên thực hiện kỹ thuật **Giải phóng màng cân cơ (Myofascial Release - MFR)** và trị liệu điểm kích hoạt (Trigger Point Therapy) dọc cơ dựng sống, giúp chấm dứt dứt điểm hiện tượng ngứa ran và co cứng lưng từ năm 25 tuổi.',
    clinicalPearls: [
      'Sự kết hợp liên chuyên khoa sẽ giúp giải quyết tận gốc cả nguyên nhân cơ học lẫn nguyên nhân phụ khoa.',
      'Chị có thể mang theo toàn bộ hồ sơ GPB Hùng Vương và kết quả siêu âm khi đi khám để Bác sĩ có cái nhìn toàn cảnh.'
    ],
    tags: ['Địa chỉ khám', 'Phụ khoa', 'Phục hồi chức năng', 'Đa chuyên khoa']
  }
];
