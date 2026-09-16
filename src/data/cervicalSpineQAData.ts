export interface SpineQAItem {
  id: string;
  category: 'Bản Chất Bệnh & Tủy Sống' | 'Phẫu Thuật ACDF Lối Trước' | 'Tuổi 74 & 4 Bệnh Nền' | 'Hồi Phục & Chăm Sóc Lâu Dài' | 'Chi Phí & Quy Trình Khám BV ĐHYD';
  question: string;
  shortAnswer: string;
  detailedAnswer: string[];
  patientTips: string;
  guidelineEvidence?: string;
}

export const cervicalSpineQAList: SpineQAItem[] = [
  {
    id: 'qa-csm-danger',
    category: 'Bản Chất Bệnh & Tủy Sống',
    question: 'Khối thoát vị đĩa đệm C3/4 5.0mm và C5/6 3.0mm chèn ép tủy cổ nguy hiểm như thế nào? Nếu không mổ có bị liệt không?',
    shortAnswer: 'Khối 5.0mm ở C3/4 là kích thước rất lớn trong ống sống cổ hẹp. Nếu không giải ép kịp thời, tủy cổ bị thiếu máu kéo dài có thể dẫn đến dập tủy và nguy cơ yếu liệt tứ chi không hồi phục.',
    detailedAnswer: [
      'Đường kính trước - sau của ống sống cổ người bình thường chỉ khoảng 14 - 16mm. Một khối thoát vị 5.0mm tại tầng C3/4 đã chiếm gần 1/3 không gian của ống sống và trực tiếp đè ép vào mặt trước tủy cổ.',
      'Tủy cổ là "dây cáp điện tổng" điều khiển toàn bộ vận động và cảm giác của tứ chi. Khi tủy cổ bị chèn ép kéo dài (Cervical Spondylotic Myelopathy), các tế bào thần kinh vận động sẽ bị thiếu oxy và dinh dưỡng, dẫn đến tình trạng nhũn tủy (Myelomalacia).',
      'Nếu không can thiệp giải ép, các triệu chứng như vụng về tay (rơi đũa, khó cài nút áo), đi đứng loạng choạng sẽ nặng dần lên, và một cú ngã nhẹ hoặc va quẹt xe cũng có thể gây liệt tứ chi đột ngột.'
    ],
    patientTips: 'Mổ giải ép tủy cổ ở thời điểm này là "mổ phòng ngừa thảm họa tàn phế", giúp cứu lấy những tế bào tủy sống còn khỏe mạnh.',
    guidelineEvidence: 'AOSpine & AANS Clinical Guidelines: Bệnh nhân có chèn ép tủy cổ trên MRI kèm triệu chứng lâm sàng được khuyến cáo phẫu thuật giải ép sớm để bảo tồn chức năng vận động.'
  },
  {
    id: 'qa-neck-vs-lumbar',
    category: 'Bản Chất Bệnh & Tủy Sống',
    question: 'Tại sao bác sĩ chỉ định mổ cột sống cổ trước mà không mổ cột sống thắt lưng L4/L5?',
    shortAnswer: 'Cổ chứa TỦY SỐNG TRUNG ƯƠNG (chèn ép đe dọa liệt toàn thân), còn thắt lưng L4/L5 chỉ chứa RỄ THẦN KINH NGOẠI BIÊN (chỉ gây đau chân, không đe dọa tủy sống).',
    detailedAnswer: [
      'Về mặt giải phẫu học: Tủy sống kết thúc ở đốt sống thắt lưng cao (L1-L2). Tại tầng L4/L5, bên trong ống sống chỉ còn các sợi rễ thần kinh (chùm đuôi ngựa). Khối thoát vị L4/L5 4.0mm chỉ chèn ép rễ thần kinh L5 bên trái gây đau mỏi mông đùi, không thể gây liệt tủy.',
      'Ngược lại, ở cột sống cổ C3-C6, cấu trúc bị chèn ép trực tiếp là TỦY CỔ. Tổn thương tủy cổ không thể tái sinh nếu để quá trễ.',
      'Chiến lược Y khoa chuẩn: Cứu cơ quan trọng yếu nhất trước (Mổ giải ép cổ C3/4 & C5/6). Đối với thắt lưng L4/L5, bệnh nhân 74 tuổi hoàn toàn có thể điều trị bảo tồn bằng thuốc giảm đau thần kinh, bổ sung canxi và tập vật lý trị liệu nhẹ nhàng mà không cần phải trải qua 2 cuộc mổ cùng lúc.'
    ],
    patientTips: 'Gia đình hoàn toàn yên tâm: Tập trung mọi nguồn lực phẫu thuật cổ trước, lưng để điều trị thuốc và phục hồi chức năng sau.'
  },
  {
    id: 'qa-acdf-procedure',
    category: 'Phẫu Thuật ACDF Lối Trước',
    question: 'Phẫu thuật ACDF lối trước là gì? Bác sĩ sẽ mổ từ phía trước cổ hay phía sau gáy?',
    shortAnswer: 'Mổ từ PHÍA TRƯỚC CỔ qua một vết rạch nhỏ 3-4cm theo nếp nhăn da tự nhiên. Đây là phẫu thuật nhẹ nhàng, ít đau nhất vì không phải cắt cơ gáy.',
    detailedAnswer: [
      'ACDF viết tắt của "Anterior Cervical Discectomy and Fusion" (Phẫu thuật lấy đĩa đệm và hàn xương liên thân đốt lối trước).',
      'Bác sĩ rạch một đường ngang nhỏ 3-4cm theo nếp lằn cổ tự nhiên bên phải (hoặc bên trái).',
      'Qua đường này, bác sĩ nhẹ nhàng tách giữa khí quản/thực quản và động mạch cảnh để tiếp cận thẳng vào mặt trước đĩa đệm mà KHÔNG HỀ CẮT XẺ BẤT KỲ KHỐI CƠ CỔ NÀO.',
      'Dưới kính hiển vi vi phẫu, bác sĩ lấy sạch khối thoát vị C3/4 và C5/6, giải phóng hoàn toàn tủy sống và mài gọt gai xương lỗ liên hợp.',
      'Sau đó, đặt vào 2 khoảng trống 2 lồng nhân tạo (PEEK) chứa xương ghép và bắt một nẹp Titanium mỏng khóa chặt để cố định 2 đốt sống.'
    ],
    patientTips: 'Đường mổ theo nếp nhăn da cổ sau khi lành sẽ mờ như một nếp gấp tự nhiên, hầu như không nhận ra sẹo.'
  },
  {
    id: 'qa-acdf-pain-recovery',
    category: 'Phẫu Thuật ACDF Lối Trước',
    question: 'Mổ cổ lối trước ACDF có đau nhiều không? Bao lâu thì ngồi dậy và xuất viện được?',
    shortAnswer: 'Rất ít đau do không cắt cơ. Bệnh nhân có thể ngồi dậy ăn uống sau 24 giờ và xuất viện sau 2 - 3 ngày.',
    detailedAnswer: [
      'Vì không cắt xẻ khối cơ gáy dày phía sau nên mức độ đau sau mổ ACDF chỉ khoảng 2-3/10 (nhẹ hơn rất nhiều so với mổ lưng hay mổ gáy sau). Bệnh nhân chỉ cần dùng thuốc giảm đau đường uống thông thường.',
      'Ngay ngày hôm sau (sau 24h mổ), điều dưỡng sẽ hướng dẫn bệnh nhân đeo nẹp cổ mềm và ngồi dậy trên giường, đứng dậy đi lại nhẹ nhàng trong phòng bệnh.',
      'Thời gian nằm viện trung bình chỉ từ 2 đến 3 ngày là có thể xuất viện về nhà tự chăm sóc.',
      'Sau 3 - 4 tuần, bệnh nhân sinh hoạt cá nhân hoàn toàn bình thường.'
    ],
    patientTips: 'Không cần nằm bất động cả tháng như quan niệm dân gian ngày xưa. Vận động sớm sau 24h còn giúp phòng chống huyết khối và viêm phổi ở người lớn tuổi.'
  },
  {
    id: 'qa-age-74-safety',
    category: 'Tuổi 74 & 4 Bệnh Nền',
    question: 'Bệnh nhân 74 tuổi mổ cột sống cổ có an toàn không? Sức khỏe người già có chịu nổi cuộc mổ không?',
    shortAnswer: 'ACDF là phẫu thuật ít xâm lấn, mất máu rất ít (< 50ml), thời gian mổ ngắn (90-120 phút), độ an toàn chu phẫu trên người 74 tuổi đạt trên 98%.',
    detailedAnswer: [
      'Y học hiện đại không còn xem tuổi tác là rào cản tuyệt đối của phẫu thuật cột sống cổ lối trước.',
      'Phẫu thuật ACDF có ưu điểm vượt trội: Lượng máu mất chỉ từ 30-50ml (không cần truyền máu), đường mổ nhỏ, không gây sốc mất máu hay tổn thương mô lớn.',
      'Tại các trung tâm chuyên khoa hàng đầu như BV Đại Học Y Dược TP.HCM hay BV Chợ Rẫy, các bác sĩ thường xuyên phẫu thuật ACDF thành công cho các cụ ông cụ bà từ 75 - 85 tuổi.',
      'Trước khi mổ, bệnh nhân luôn được làm bộ xét nghiệm tiền phẫu toàn diện (tim mạch, phổi, đông máu, nội tiết) và hội chẩn gây mê hồi sức kỹ lưỡng.'
    ],
    patientTips: 'Cụ Loan hoàn toàn đủ điều kiện phẫu thuật an toàn khi các chỉ số tim mạch và nội tiết được chuẩn bị chu đáo.'
  },
  {
    id: 'qa-osteoporosis-74',
    category: 'Tuổi 74 & 4 Bệnh Nền',
    question: 'Bệnh nhân bị loãng xương T-score -2.7 thì nẹp vít và lồng đệm Titanium có bị lún hoặc tuột ốc không?',
    shortAnswer: 'Bác sĩ sử dụng hệ thống nẹp khóa góc (Locking Plate) và lồng PEEK tiếp xúc rộng chuyên dụng cho người loãng xương, kết hợp điều trị thuốc chống hủy xương sau mổ nên hoàn toàn vững chắc.',
    detailedAnswer: [
      'Loãng xương ($T-score: -2.7$) là hiện tượng phổ biến ở phụ nữ 74 tuổi sau mãn kinh. Các kỹ thuật phẫu thuật cột sống cổ hiện đại đã được thiết kế riêng để giải quyết vấn đề này:',
      '1. Nẹp Titan có ốc vít khóa góc (Locking Screws): Vít khóa chặt vào nẹp tạo thành một khung giàn vững chắc (Rigid Construct), không phụ thuộc hoàn toàn vào độ bám ren của xương xốp.',
      '2. Lồng PEEK bề mặt vi cấu trúc Titanium: Có diện tích tiếp xúc lớn giúp phân tán đều trọng lực, tránh hiện tượng lún lồng vào thân đốt sống.',
      '3. Phác đồ bảo vệ sau mổ: Sau khi mổ, PGS.TS Cao Thanh Ngọc (Cơ Xương Khớp BV ĐHYD) sẽ chỉ định phác đồ chống loãng xương đặc hiệu (như truyền Aclasta 5mg hoặc tiêm Denosumab 60mg) kết hợp Canxi + D3 để xương nhanh chóng liền đặc quanh lồng ghép.'
    ],
    patientTips: 'Đeo nẹp cổ mềm khi đi lại trong 4-6 tuần đầu để chia sẻ tải trọng cho nẹp vít trong thời gian xương đang hàn dính.'
  },
  {
    id: 'qa-hyperthyroidism-e05',
    category: 'Tuổi 74 & 4 Bệnh Nền',
    question: 'Đang điều trị cường giáp (E05) thì khi gây mê mổ cổ có nguy hiểm gì cho tim mạch không?',
    shortAnswer: 'Chỉ cần xét nghiệm nồng độ hormone FT3, FT4, TSH đạt ngưỡng "bình giáp" và kiểm soát nhịp tim ổn định trước mổ thì quá trình gây mê hoàn toàn an toàn.',
    detailedAnswer: [
      'Cường giáp nếu chưa kiểm soát có thể làm tim đập nhanh hoặc rối loạn nhịp tim khi gây mê.',
      'Tuy nhiên, cụ Loan đang được điều trị nội khoa duy trì. Trước ngày mổ 48 giờ, bệnh viện sẽ xét nghiệm lại bộ ba FT3, FT4, TSH.',
      'Khi các chỉ số đạt mức bình giáp (Euthyroid), bác sĩ gây mê sẽ sử dụng phác đồ gây mê bảo vệ tim mạch, duy trì nhịp tim ở mức 65 - 80 lần/phút.',
      'Sáng ngày mổ, bệnh nhân vẫn được uống thuốc kháng giáp và thuốc chẹn beta theo đúng y lệnh với 1 ngụm nước nhỏ.'
    ],
    patientTips: 'Nhớ mang theo toàn bộ các vỉ thuốc tuyến giáp đang uống tại nhà khi nhập viện Lầu 8A BV ĐHYD.'
  },
  {
    id: 'qa-carpal-tunnel-g56',
    category: 'Tuổi 74 & 4 Bệnh Nền',
    question: 'Tê bì 2 bàn tay là do Thoát vị đĩa đệm cổ hay do Hội chứng ống cổ tay? Mổ cổ xong tay có hết tê không?',
    shortAnswer: 'Do cả 2 nguyên nhân cùng phối hợp (Hội chứng chèn ép kép - Double Crush). Sau khi mổ giải ép cổ C5/6, 70-80% cảm giác tê buốt ở bàn tay sẽ thuyên giảm rõ rệt.',
    detailedAnswer: [
      'Rễ thần kinh C6 xuất phát từ cổ, chạy dài xuống cánh tay và chui qua ống cổ tay để chi phối ngón cái và ngón trỏ.',
      'Khi rễ C6 bị khối thoát vị 3mm ở cổ chèn ép, sợi dây thần kinh bị suy yếu từ "đầu nguồn". Do đó, khi đi qua cổ tay, dù ống cổ tay chỉ bị hẹp nhẹ (G56.0) cũng khiến bàn tay bị tê rần, châm chích dữ dội.',
      'Khi bác sĩ mổ giải phóng tủy và rễ C5/6 ở cổ, "đầu nguồn" được khơi thông, xung động thần kinh hồi phục giúp bàn tay giảm tê rõ rệt sau vài tuần.',
      'Bệnh nhân KHÔNG CẦN PHẢI MỔ CỔ TAY. Chỉ cần mang nẹp cổ tay mềm khi ngủ và tập các bài trượt dây thần kinh.'
    ],
    patientTips: 'Đừng vội vàng mổ ống cổ tay trước khi chưa giải quyết xong đốt sống cổ.'
  },
  {
    id: 'qa-risks-paralysis',
    category: 'Phẫu Thuật ACDF Lối Trước',
    question: 'Mổ cột sống cổ có nguy cơ bị đụng trúng tủy gây liệt không? Tỷ lệ rủi ro là bao nhiêu?',
    shortAnswer: 'Tỷ lệ biến chứng liệt tủy trong mổ ACDF hiện đại dưới 0.1% (cực kỳ hiếm) nhờ kính vi phẫu phóng đại 20 lần và hệ thống định vị chính xác.',
    detailedAnswer: [
      'Phẫu thuật ACDF được thực hiện dưới kính vi phẫu quang học phóng đại cao và hệ thống màn hình huỳnh quang tăng sáng C-arm.',
      'Bác sĩ nhìn thấy rõ từng sợi màng tủy, mạch máu và rễ thần kinh với kích thước lớn gấp nhiều lần thực tế, thao tác bằng dụng cụ vi phẫu tinh xảo mài gọt từng mi-li-mét.',
      'Mổ lối trước đi theo khoang liên mô tự nhiên, hoàn toàn không đẩy hay bẻ cong tủy sống.',
      'Theo thống kê của Hiệp hội Phẫu thuật Cột sống Bắc Mỹ (NASS), tỷ lệ biến chứng thần kinh nghiêm trọng của ACDF là dưới 1/1000.'
    ],
    patientTips: 'Khoa Ngoại Thần Kinh BV Đại Học Y Dược TP.HCM là một trong những trung tâm phẫu thuật vi phẫu cột sống hàng đầu Việt Nam với trang thiết bị phòng mổ hiện đại chuẩn quốc tế.'
  },
  {
    id: 'qa-voice-swallowing',
    category: 'Phẫu Thuật ACDF Lối Trước',
    question: 'Sau khi mổ ACDF lối trước có bị khàn tiếng hoặc khó nuốt thức ăn không?',
    shortAnswer: 'Có thể bị nuốt vướng hoặc khàn giọng nhẹ tạm thời trong vài ngày đầu do dụng cụ vén thực quản/dây thanh âm, sẽ tự hồi phục hoàn toàn 100%.',
    detailedAnswer: [
      'Khi tiếp cận đĩa đệm từ mặt trước cổ, bác sĩ sử dụng dụng cụ vén mềm để giữ thực quản và dây thần kinh thanh quản quặt ngược sang một bên.',
      'Điều này có thể gây phù nề niêm mạc nhẹ trong 3 đến 7 ngày đầu sau mổ, khiến bệnh nhân cảm thấy nuốt nước bọt hơi vướng hoặc giọng nói hơi trầm/khàn nhẹ.',
      'Hiện tượng này là phản ứng sinh lý lành tính tạm thời và sẽ tự hồi phục hoàn toàn khi hết sưng nề.',
      'Trong 2-3 ngày đầu, nên cho cụ Loan ăn cháo loãng, súp dinh dưỡng, uống sữa ấm hoặc sinh tố để nuốt dễ dàng nhất.'
    ],
    patientTips: 'Ăn từng thìa nhỏ thức ăn mềm, nghiêng nhẹ đầu khi nuốt giúp cảm giác dễ chịu hơn rất nhiều.'
  },
  {
    id: 'qa-collar-duration',
    category: 'Hồi Phục & Chăm Sóc Lâu Dài',
    question: 'Cụ bà 74 tuổi cần đeo nẹp cổ mềm (nẹp Philadelphia) trong bao lâu sau mổ?',
    shortAnswer: 'Đeo nẹp cổ mềm từ 4 đến 6 tuần khi ngồi dậy, đi lại hoặc đi xe; có thể tháo ra khi nằm nghỉ trên giường hoặc khi tắm rửa.',
    detailedAnswer: [
      'Nẹp cổ mềm có tác dụng nhắc nhở bệnh nhân không quay lắc cổ đột ngột và giúp nâng đỡ một phần trọng lượng đầu trong khi xương đang hàn dính vào lồng PEEK.',
      'Tuần 1 - 4: Đeo nẹp mỗi khi ngồi dậy ăn uống, đi bộ trong nhà hoặc khi đi tái khám bằng ô tô.',
      'Khi nằm ngủ hoặc nằm nghỉ ngơi trên giường: Có thể tháo nẹp cổ ra, kê gối mỏng êm ái dưới gáy.',
      'Sau 6 tuần: Bác sĩ chụp X-quang kiểm tra độ liền xương, nếu tốt sẽ hướng dẫn cai nẹp cổ dần dần và tập các bài tập vận động cổ nhẹ nhàng.'
    ],
    patientTips: 'Chọn loại nẹp cổ thoáng khí, lót vải cotton mềm để tránh làm hằn đỏ da cổ người lớn tuổi.'
  },
  {
    id: 'qa-postop-medications',
    category: 'Hồi Phục & Chăm Sóc Lâu Dài',
    question: 'Sau mổ cần uống những thuốc gì để tủy sống hồi phục nhanh và xương hàn dính chắc chắn?',
    shortAnswer: 'Bổ sung Canxi + D3 + K2, thuốc chống loãng xương đặc hiệu, thuốc tăng dẫn truyền thần kinh nhóm B và thuốc bảo vệ bao myelin thần kinh.',
    detailedAnswer: [
      '1. Thuốc phục hồi thần kinh: Methylcobalamin (Vitamin B12 liều cao) hoặc Nucleo C.M.P Forte giúp tái tạo bao Myelin của tủy sống và rễ thần kinh.',
      '2. Thuốc giảm đau thần kinh hỗ trợ: Pregabalin (50-75mg) dùng trong vài tuần đầu để cắt cơn tê buốt.',
      '3. Phác đồ xương khớp: Bổ sung Canxi hữu cơ (800-1000mg/ngày) + Vitamin D3 (1000 IU/ngày) + Vitamin K2 (MK7).',
      '4. Thuốc chống hủy xương: Thực hiện phác đồ chống loãng xương theo đơn của PGS.TS Cao Thanh Ngọc (Aclasta truyền 1 năm/lần hoặc Denosumab).',
      '5. Thuốc tuyến giáp: Tiếp tục duy trì đều đặn theo đơn chuyên khoa Nội tiết.'
    ],
    patientTips: 'Uống canxi sau bữa ăn sáng 30 phút cùng nhiều nước, không uống canxi vào buổi tối.'
  },
  {
    id: 'qa-forbidden-activities',
    category: 'Hồi Phục & Chăm Sóc Lâu Dài',
    question: 'Những động tác hoặc thói quen nào người bệnh thoát vị cổ TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM?',
    shortAnswer: 'Tuyệt đối KHÔNG bẻ cổ/giật cổ kiểu dân gian, không cúi gập cổ nhìn điện thoại lâu, không mang vác vật nặng, không nằm gối quá cao.',
    detailedAnswer: [
      '1. TUYỆT ĐỐI KHÔNG đi nắn bóp, bẻ cổ kiểu giật mạnh tại các tiệm massage hoặc cơ sở lang băm: Khối thoát vị C3/4 5mm đã nằm sát tủy, động tác giật cổ có thể làm khối đĩa đệm thúc mạnh vào tủy gây liệt tức thì.',
      '2. Không nằm gối quá cao (trên 10cm): Nên nằm gối cao su non hoặc gối bông mềm cao khoảng 6-8cm vừa vặn độ cong sinh lý của cổ.',
      '3. Không cúi gục đầu nhìn điện thoại, xem tivi hoặc đọc sách trong thời gian dài (hội chứng Text Neck làm áp lực lên đĩa đệm tăng gấp 5 lần).',
      '4. Không xách đồ nặng quá 3kg bằng tay hoặc với tay lên cao với đồ vật nặng.'
    ],
    patientTips: 'Khi muốn nhìn sang hai bên, hãy xoay cả thân mình thay vì xoay vặn cổ đột ngột.'
  },
  {
    id: 'qa-dhyd-process',
    category: 'Chi Phí & Quy Trình Khám BV ĐHYD',
    question: 'Quy trình khám và nhập viện tại Khoa Ngoại Thần Kinh Lầu 8A BV Đại Học Y Dược TP.HCM như thế nào?',
    shortAnswer: 'Cầm Giấy giới thiệu của PGS.TS Cao Thanh Ngọc đến Phòng khám Ngoại Thần Kinh (Lầu 8A) để bác sĩ trưởng tua khám, đọc phim MRI và xếp lịch mổ chương trình.',
    detailedAnswer: [
      'Bước 1: Đăng ký khám chuyên khoa Ngoại Thần Kinh tại Tòa nhà A - BV Đại Học Y Dược TP.HCM (215 Hồng Bàng, Q.5). Nộp Giấy giới thiệu ghi rõ chuyển Khoa Ngoại Thần Kinh Lầu 8A.',
      'Bước 2: Mang theo toàn bộ hồ sơ: Phim MRI Cột sống cổ (BV Quốc Tế City), Phim MRI Thắt lưng (Saigon Medic), Kết quả đo mật độ xương và xét nghiệm tuyến giáp gần nhất.',
      'Bước 3: Bác sĩ Ngoại Thần Kinh (như ThS.BS Huỳnh Khôi Nguyên / TS.BS Nguyễn Minh Anh / PGS.TS Nguyễn Phong) trực tiếp thăm khám phản xạ thần kinh, đánh giá độ vững cột sống và tư vấn phương án mổ ACDF.',
      'Bước 4: Làm thủ tục xét nghiệm tiền phẫu (máu, điện tim, X-quang phổi) và xếp lịch nhập viện mổ phiên (thường trong vòng 3-5 ngày làm việc).'
    ],
    patientTips: 'Nên đặt hẹn khám trước qua tổng đài hoặc ứng dụng UMC Care của BV Đại Học Y Dược để không phải chờ đợi lâu.'
  },
  {
    id: 'qa-costs-insurance',
    category: 'Chi Phí & Quy Trình Khám BV ĐHYD',
    question: 'Chi phí phẫu thuật ACDF 2 tầng tại BV Đại Học Y Dược TP.HCM khoảng bao nhiêu? BHYT chi trả như thế nào?',
    shortAnswer: 'Tổng chi phí dao động khoảng 60 - 90 triệu VNĐ (tùy loại lồng PEEK và nẹp vít Titanium). BHYT đúng tuyến hoặc thông tuyến hỗ trợ chi trả đáng kể các danh mục kỹ thuật và vật tư theo quy định.',
    detailedAnswer: [
      'Chi phí phẫu thuật ACDF bao gồm:',
      '- Tiền công phẫu thuật vi phẫu và gây mê hồi sức: khoảng 10 - 15 triệu VNĐ (BHYT thanh toán theo định mức).',
      '- Vật tư cấy ghép cột sống (2 lồng PEEK + 1 nẹp Titanium + 4-6 ốc vít khóa góc): khoảng 40 - 65 triệu VNĐ (BHYT hỗ trợ thanh toán một phần danh mục vật tư y tế kỹ thuật cao).',
      '- Tiền phòng bệnh, thuốc men, xét nghiệm và chăm sóc hậu phẫu 3 ngày: khoảng 8 - 15 triệu VNĐ.',
      'Nếu có thêm Bảo hiểm sức khỏe tư nhân (Bảo Việt, Dai-ichi, Manulife, PVI...), bệnh nhân có thể được bảo lãnh viện phí trực tiếp gần như 100% phần đồng chi trả.'
    ],
    patientTips: 'Xin giấy chuyển tuyến BHYT từ bệnh viện quận/huyện nơi đăng ký KCB ban đầu lên BV Đại Học Y Dược TP.HCM để được hưởng mức thanh toán BHYT cao nhất (80-100%).'
  }
];
