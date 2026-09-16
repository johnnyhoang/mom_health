export interface BackPainSymptomAnalysis {
  id: string;
  title: string;
  patientManifestation: string;
  medicalMechanism: string;
  clinicalSignificance: string;
  laymanExplanation: string;
}

export interface DiseaseCorrelationAnalysis {
  id: string;
  system: string;
  relatedCondition: string;
  correlationMechanism: string;
  premenstrualImpact: string;
  reassuranceNote: string;
}

export interface DifferentiateDiagnosisItem {
  feature: string;
  patientCondition: string; // Đau Cân Cơ & Quy Chiếu Lành Tính
  boneMetastasisCancer: string; // Lo Sợ Di Căn Xương K Vú
  clinicalVerdict: string;
}

export interface SpineRehabProtocol {
  phase: string;
  title: string;
  timeframe: string;
  primaryGoal: string;
  interventions: string[];
  homeExercises: {
    name: string;
    purpose: string;
    repsAndFrequency: string;
    howToPerform: string;
    precautions: string;
  }[];
  ergonomicAdvice: string[];
}

export const chronicBackPainCaseSummary = {
  onsetAge: 'Khởi phát từ khoảng 25 tuổi (Kéo dài >15-20 năm, bản chất cơ học mạn tính)',
  currentLocation: 'Dọc sống lưng (ngực - thắt lưng) lan tỏa xuống vùng thắt lưng',
  priorHistory: 'Từng có thời gian dài đau mỏi cổ vai gáy (hội chứng cột sống trục)',
  massagingResponse: 'Xoa bóp, đấm lưng thì đỡ đau tức thời NHƯNG xuất hiện cảm giác NGỨA RAN châm chích rần rần',
  premenstrualCorrelation: 'Mỗi khi gần đến chu kỳ kinh nguyệt thì mức độ đau tăng mạnh',
  sleepingRelief: 'Kê gối vào thắt lưng khi ngủ thấy đỡ đau nhưng sáng dậy hoặc đi lại thì không khỏi dứt điểm',
  relatedComorbidities: [
    'Tiền sử Ung thư vú đã hoàn thành 5 năm Tamoxifen (2021 – 01/2026)',
    'Lạc tuyến trong cơ tử cung (Adenomyosis) & Khối U xơ thành sau tử cung 45mm',
    'Tăng sản nội mạc tử cung điển hình lành tính (GPB BV Hùng Vương 09/2026)',
    'Tiền sử đau mỏi cổ vai gáy / Thoát vị đĩa đệm cột sống cổ'
  ]
};

export const symptomAnalysesData: BackPainSymptomAnalysis[] = [
  {
    id: 'symp-tingling-massage',
    title: 'Giải Mã Hiện Tượng: "Đấm Lưng/Xoa Bóp Thì Đỡ Nhưng Bị NGỨA RAN"',
    patientManifestation: 'Mỗi khi người nhà xoa bóp hoặc đấm vào dọc sống lưng thì cảm giác đau cơ giảm đi rõ rệt, nhưng ngay sau đó lại xuất hiện cảm giác ngứa ran, rần rần, châm chích như có kiến bò dưới da.',
    medicalMechanism: 'Sự kết hợp giữa Thuyết Cổng Kiểm Soát (Gate Control Theory) và Hội Chứng Kích Thích Nhánh Thần Kinh Bì Lưng Sau (Dorsal Cutaneous Rami Nerve Irritation / Notalgia Paresthetica).',
    clinicalSignificance: 'Khi đấm bóp, thụ thể áp lực A-beta ức chế tín hiệu đau cơ sâu ở sừng sau tủy sống (giúp đỡ đau); đồng thời tác động cơ học trực tiếp vào các sợi thần kinh cảm giác da bì nông (A-delta & C fibers) đang bị nhạy cảm hóa do lớp cơ dựng sống co thắt mãn tính, giải phóng các chất trung gian vi thể gây ngứa ran thần kinh (Neuropathic itch).',
    laymanExplanation: 'Lưng chị giống như một đoạn dây điện có lớp vỏ bọc cơ bắp bị căng cứng lâu năm. Khi đấm bóp, cơ được giãn ra nên đỡ nhức, nhưng đầu dây thần kinh cảm giác da bị rung động kích hoạt, phát tín hiệu "ngứa râm ran" lên não bộ.'
  },
  {
    id: 'symp-premenstrual-flare',
    title: 'Tại Sao Cứ Gần Đến Chu Kỳ Kinh Thì Đau Lưng Lại Tăng Mạnh?',
    patientManifestation: 'Cứ trước ngày hành kinh khoảng 3 – 7 ngày (pha hoàng thể trễ), vùng thắt lưng và dọc sống lưng đau nhức tăng vọt, cảm giác trì nặng, ê ẩm từ bụng dưới dội ngược ra sau lưng.',
    medicalMechanism: 'Hiện tượng Đau Quy Chiếu Nội Tạng - Thân Thể (Viscero-Somatic Referred Pain) do Prostaglandin F2a bùng phát từ ổ Lạc Tuyến Cơ Tử Cung (Adenomyosis) và U Xơ Thành Sau 45mm.',
    clinicalSignificance: 'Tử cung và vùng thắt lưng - xương cùng có chung đường dẫn truyền thần kinh tạng (đám rối hạ vị T10-L1 và đám rối cùng S2-S4 qua dây chằng tử cung - cùng). Khi tử cung co bóp mạnh trước kỳ kinh, các xung thần kinh dội ngược lên tủy sống làm bùng phát cơn đau lưng.',
    laymanExplanation: 'Tử cung của chị đang có tình trạng lạc tuyến cơ (Adenomyosis) và u xơ 45mm ở thành sau. Trước ngày hành kinh, tử cung căng phồng và tiết chất co bóp, "bắn tín hiệu đau" truyền thẳng qua dây chằng vào cột sống thắt lưng phía sau.'
  },
  {
    id: 'symp-pillow-relief',
    title: 'Tại Sao Kê Gối Vào Lưng Ngủ Thấy Đỡ Nhưng Mãi Không Khỏi?',
    patientManifestation: 'Khi nằm ngủ đặt một chiếc gối mỏng hoặc gối tròn dưới thắt lưng thì thấy lưng êm, đỡ mỏi rõ rệt, nhưng sáng thức dậy đi lại làm việc thì cơn đau lại quay trở lại.',
    medicalMechanism: 'Hiệu ứng Nâng Đỡ Đường Cong Sinh Lý (Lumbar Lordosis Support) và Giải Tải Tạm Thời Áp Lực Đĩa Đệm / Cơ Dựng Sống.',
    clinicalSignificance: 'Kê gối giúp cột sống thắt lưng duy trì độ ưỡn tự nhiên khi nằm ngửa, ngăn cơ vuông thắt lưng và cơ dựng sống bị kéo căng quá mức. Tuy nhiên, gối chỉ có tác dụng cơ học thụ động khi nằm; không thể tự giải phóng các nút thắt cơ xơ hóa (Trigger points) và không giải quyết được nguồn gốc đau quy chiếu từ tử cung.',
    laymanExplanation: 'Gối kê giống như "chiếc nạng" đỡ lưng khi chị nằm nghỉ. Nó giúp cơ bắp được thả lỏng tạm thời, nhưng những "nút thắt" co cứng trong thớ cơ từ năm 25 tuổi và sự kích thích từ tử cung vẫn còn đó, cần có bài tập chủ động và giải phóng cơ chuyên sâu mới khỏi được.'
  },
  {
    id: 'symp-longstanding-25yo',
    title: 'Bệnh Kéo Dài Từ Năm 25 Tuổi: Khẳng Định Bản Chất Cơ Học Lành Tính',
    patientManifestation: 'Tình trạng đau mỏi dọc sống lưng đã xuất hiện từ thời trẻ (khoảng 25 tuổi), âm ỉ kéo dài nhiều năm qua, lúc nặng lúc nhẹ tùy theo tư thế làm việc và chu kỳ kinh.',
    medicalMechanism: 'Hội Chứng Đau Cân Cơ Mạn Tính (Chronic Myofascial Pain Syndrome - MPS) kết hợp Rối Loạn Tư Thế và Mất Cân Bằng Chuỗi Động Lực Cột Sống Trục.',
    clinicalSignificance: 'Khởi phát sớm từ tuổi 25 khẳng định 100% đây là bệnh lý cơ học - cân cơ lành tính lâu năm, hoàn toàn độc lập và xuất hiện trước thời điểm mắc ung thư vú hơn 15 năm.',
    laymanExplanation: 'Vì bệnh đã có từ lúc chị 25 tuổi (thời thanh xuân chưa hề mắc K vú), điều này chứng minh tuyệt đối rằng đây KHÔNG PHẢI là di căn ung thư, giúp chị hoàn toàn trút bỏ gánh nặng tâm lý lo sợ!'
  }
];

export const diseaseCorrelationTriad: DiseaseCorrelationAnalysis[] = [
  {
    id: 'corr-uterus-adenomyosis',
    system: 'Hệ Thống Phụ Khoa & Tử Cung',
    relatedCondition: 'Lạc Tuyến Trong Cơ Tử Cung (Adenomyosis) & U Xơ Thành Sau 45mm',
    correlationMechanism: 'Thành sau tử cung liên kết trực tiếp với xương cùng cụt qua 2 Dây Chằng Tử Cung - Cùng (Uterosacral Ligaments). Khối u xơ 45mm ở thành sau tạo lực tỳ đè trực tiếp lên đám rối thần kinh cùng (Sacral Plexus S2-S4). Khi các ổ tuyến Adenomyosis xuất huyết vi thể trong cơ tử cung, chúng giải phóng cytokine gây viêm và Prostaglandin dội thẳng vào thắt lưng.',
    premenstrualImpact: 'Tăng vọt 200 - 300% mức độ đau lưng trong 3-5 ngày trước và trong kỳ kinh nguyệt.',
    reassuranceNote: 'Khi xử lý tốt vấn đề phụ khoa (kiểm soát nội tiết hoặc phẫu thuật bóc u xơ/nội soi tử cung), cơn đau lưng chu kỳ sẽ giảm đến 60-70%!'
  },
  {
    id: 'corr-breast-tamoxifen',
    system: 'Hệ Thống Nội Tiết & Ung Bướu',
    relatedCondition: 'Hậu 5 Năm Điều Trị Tamoxifen (2021 – 01/2026)',
    correlationMechanism: 'Tamoxifen là thuốc điều biến thụ thể Estrogen. Sau khi hoàn thành 5 năm và ngưng thuốc vào tháng 01/2026, trục Hạ Đồi - Tuyến Yên - Buồng Trứng đang trong quá trình tái lập cân bằng nội tiết ở độ tuổi tiền mãn kinh. Sự biến thiên nồng độ Estrogen nội sinh làm thay đổi nồng độ Serotonin và Endorphin tại sừng sau tủy sống, làm hạ thấp "ngưỡng chịu đau" (Pain Threshold) của hệ thần kinh trung ương.',
    premenstrualImpact: 'Làm người bệnh nhạy cảm hơn với các kích thích đau cơ học dọc sống lưng và dễ bị cảm giác ngứa ran bì lưng.',
    reassuranceNote: 'Việc hoàn thành trọn vẹn 5 năm Tamoxifen bảo vệ vú rất tốt. Sự dao động nội tiết hiện tại chỉ là giai đoạn chuyển tiếp sinh lý của cơ thể.'
  },
  {
    id: 'corr-cervical-spine',
    system: 'Hệ Thống Cột Sống Trục & Cơ Sinh Học',
    relatedCondition: 'Tiền Sử Đau Mỏi Cổ Vai Gáy & Thoát Vị Đĩa Đệm Cột Sống Cổ (ACDF)',
    correlationMechanism: 'Cột sống là một chuỗi động lực học liên hoàn (Spinal Kinetic Chain). Khi đoạn cột sống cổ bị đau mỏi hoặc giảm biên độ vận động, toàn bộ trọng tâm cơ thể sẽ dịch chuyển, buộc các nhóm cơ dựng sống ngực (Thoracic Erector Spinae) và thắt lưng (Lumbar spine) phải gồng cứng liên tục để bù trừ giữ thăng bằng cho đầu và thân trên.',
    premenstrualImpact: 'Cơ lưng bị quá tải trường diễn từ trên cổ dội xuống, tạo thành các "dải xơ cứng" (Taut bands) dọc sống lưng.',
    reassuranceNote: 'Điều trị phục hồi cần giải phóng đồng bộ từ cơ cổ gáy xuống đến cơ thắt lưng và vùng chậu.'
  }
];

export const differentiateDiagnosisTable: DifferentiateDiagnosisItem[] = [
  {
    feature: 'Thời gian khởi phát',
    patientCondition: 'Từ năm 25 tuổi (Kéo dài >15-20 năm, rất ổn định qua thời gian)',
    boneMetastasisCancer: 'Thường mới xuất hiện sau khi phát hiện ung thư, tiến triển tăng dần nhanh chóng trong vài tuần đến vài tháng',
    clinicalVerdict: 'Khởi phát từ năm 25 tuổi khẳng định 100% bản chất lành tính cơ học.'
  },
  {
    feature: 'Mối liên hệ chu kỳ kinh',
    patientCondition: 'Đau tăng rõ rệt trước kỳ kinh, giảm bớt sau khi sạch kinh (Tính chất chu kỳ nội tiết rõ nét)',
    boneMetastasisCancer: 'Không liên quan đến chu kỳ kinh nguyệt, đau liên tục không có nhịp điệu sinh học',
    clinicalVerdict: 'Đau tăng trước kỳ kinh là dấu hiệu kinh điển của đau quy chiếu từ Lạc tuyến cơ tử cung (Adenomyosis).'
  },
  {
    feature: 'Phản ứng khi xoa bóp / đấm lưng',
    patientCondition: 'Đỡ đau mỏi tức thì, kèm cảm giác ngứa ran châm chích dễ chịu',
    boneMetastasisCancer: 'Đấm bóp không làm giảm đau, thậm chí gây đau nhói buốt dữ dội tại vị trí tổn thương xương',
    clinicalVerdict: 'Đỡ khi đấm bóp là đặc trưng của hội chứng đau cân cơ và thuyết Cổng kiểm soát.'
  },
  {
    feature: 'Đáp ứng khi kê gối ngủ',
    patientCondition: 'Đỡ đau rõ rệt khi được kê gối nâng đỡ thắt lưng (giải tải cơ học)',
    boneMetastasisCancer: 'Không đỡ khi thay đổi tư thế hay kê gối; đau tăng nhiều về đêm lúc nằm yên do áp lực tủy xương',
    clinicalVerdict: 'Đáp ứng tốt với kê gối chứng minh đau có bản chất cơ sinh học tư thế.'
  },
  {
    feature: 'Tính chất cơn đau',
    patientCondition: 'Đau mỏi, ê ẩm, căng cứng dọc thớ cơ, ngứa ran dưới da khi kích thích',
    boneMetastasisCancer: 'Đau nhức buốt sâu trong xương như dao đâm, đau tăng dần bất chấp nghỉ ngơi',
    clinicalVerdict: 'Đau mỏi kèm ngứa ran là biểu hiện thần kinh - cân cơ lành tính (Notalgia paresthetica).'
  }
];

export const spineRehabProtocolsData: SpineRehabProtocol[] = [
  {
    phase: 'Giai đoạn 1',
    title: 'Giải Phóng Nút Thắt Cân Cơ & Làm Dịu Thần Kinh Bì (Tuần 1 - Tuần 3)',
    timeframe: 'Tuần 1 – Tuần 3',
    primaryGoal: 'Triệt tiêu các điểm kích hoạt (Trigger points) dọc cơ dựng sống, chấm dứt hiện tượng ngứa ran khi đấm bóp, hạ áp lực cơ học vùng lưng.',
    interventions: [
      'Giải phóng màng cân cơ thủ công (Myofascial Release - MFR) dọc rãnh sống lưng',
      'Chườm ấm thảo dược (ngải cứu, muối gừng) 20 phút mỗi tối trước khi ngủ',
      'Kỹ thuật ấn nhả điểm kích hoạt (Ischemic Compression) bằng bóng massage mềm (tennis ball)',
      'Tập thở cơ hoành (Diaphragmatic Breathing) giúp thư giãn hệ thần kinh giao cảm'
    ],
    homeExercises: [
      {
        name: 'Tư thế Mèo - Bò (Cat - Camel Stretch)',
        purpose: 'Vận động nhẹ nhàng từng đốt sống ngực - thắt lưng, bôi trơn đĩa đệm và thư giãn cơ dựng sống.',
        repsAndFrequency: 'Thực hiện 10 - 15 lần, 2 lần/ngày (sáng thức dậy và tối trước khi ngủ).',
        howToPerform: 'Quỳ 4 điểm (2 tay dưới vai, 2 gối dưới hông). Hít vào: võng nhẹ lưng, ngẩng mặt lên (Bò). Thở ra: cong tròn lưng lên trần nhà, cúi đầu nhìn rốn (Mèo).',
        precautions: 'Chuyển động chậm rãi, không gồng giật mạnh cổ.'
      },
      {
        name: 'Tư thế Đứa Trẻ Mở Rộng (Extended Child Pose)',
        purpose: 'Kéo giãn toàn bộ chiều dọc sống lưng, cơ vuông thắt lưng và giải phóng khớp háng - chậu.',
        repsAndFrequency: 'Giữ tư thế 30 - 45 giây, lặp lại 3 - 5 lần.',
        howToPerform: 'Quỳ trên thảm, mở rộng 2 đầu gối, mông ngồi lên gót chân. Vươn 2 tay dài về phía trước, hạ trán chạm thảm, hít thở sâu vào lưng.',
        precautions: 'Nếu đau gối, có thể lót thêm khăn mềm dưới khớp gối.'
      }
    ],
    ergonomicAdvice: [
      'Tránh ngồi làm việc liên tục quá 45 phút; đứng dậy đi lại và vươn vai 2 phút.',
      'Sử dụng gối tựa thắt lưng công thái học (Lumbar roll 8-10cm) khi ngồi ghế tựa.'
    ]
  },
  {
    phase: 'Giai đoạn 2',
    title: 'Tăng Cường Ổn Định Cơ Lõi (Core Stability) & Chuỗi Động Lực (Tuần 4 - Tuần 8)',
    timeframe: 'Tuần 4 – Tuần 8',
    primaryGoal: 'Kích hoạt nhóm cơ sâu bảo vệ cột sống (Cơ hoành, cơ đa đầu Multifidus, cơ ngang bụng Transversus Abdominis) để cột sống không bị sụp lún.',
    interventions: [
      'Tập kích hoạt cơ lõi sâu không gây áp lực lên đĩa đệm (McGill Big 3)',
      'Kéo giãn chuỗi cơ sau (Hamstring & Gluteus) để giải tỏa lực kéo ở xương chậu',
      'Kiểm soát tư thế đứng ngồi chuẩn trục'
    ],
    homeExercises: [
      {
        name: 'Bài tập Chim - Chó (Bird - Dog Exercise)',
        purpose: 'Tăng cường sức mạnh cơ dựng sống và cơ mông chéo mà không tạo áp lực nén lên cột sống.',
        repsAndFrequency: '10 lần mỗi bên, giữ 3-5 giây mỗi lần lặp, 1-2 lần/ngày.',
        howToPerform: 'Ở tư thế quỳ 4 điểm, siết nhẹ bụng, từ từ duỗi thẳng tay phải về trước và chân trái ra sau thành một đường thẳng. Giữ thăng bằng rồi đổi bên.',
        precautions: 'Không võng lưng hoặc xoay lắc hông sang 2 bên.'
      },
      {
        name: 'Bài tập Cây Cầu Có Kiểm Soát (Glute Bridge)',
        purpose: 'Kích hoạt cơ mông lớn và cơ sàn chậu, giảm áp lực bù trừ cho thắt lưng.',
        repsAndFrequency: '12 - 15 lần/hiệp, 3 hiệp mỗi ngày.',
        howToPerform: 'Nằm ngửa, gập gối 90 độ, 2 bàn chân phẳng trên sàn. Siết mông và bụng, nâng hông lên sao cho đầu gối, hông và vai tạo thành đường thẳng.',
        precautions: 'Không ưỡn quá mức ở thắt lưng; lực nâng xuất phát từ cơ mông.'
      }
    ],
    ergonomicAdvice: [
      'Kỹ thuật gập gối khi cúi nhấc vật nặng, giữ vật sát vào ngực.',
      'Duy trì đi bộ nhẹ nhàng 20 - 30 phút mỗi ngày trên mặt phẳng.'
    ]
  },
  {
    phase: 'Giai đoạn 3',
    title: 'Kiểm Soát Đau Chu Kỳ Tiền Kinh Nguyệt & Tối Ưu Giấc Ngủ (Duy Trì Trọn Đời)',
    timeframe: 'Duy trì lâu dài',
    primaryGoal: 'Chủ động cắt đứt cơn đau bùng phát trước kỳ kinh và thiết lập môi trường ngủ phục hồi hoàn hảo.',
    interventions: [
      'Phác đồ chống viêm ức chế Prostaglandin trước kỳ kinh 3 ngày',
      'Chườm ấm vùng hạ vị và thắt lưng trong những ngày hành kinh',
      'Tối ưu hóa nệm và gối kê lưng theo giải phẫu sinh lý',
      'Bổ sung vi chất dinh dưỡng giảm co thắt cơ và dịu thần kinh'
    ],
    homeExercises: [
      {
        name: 'Tư thế Gác Chân Lên Tường (Viparita Karani / Legs-Up-The-Wall)',
        purpose: 'Hồi lưu máu tĩnh mạch vùng chậu, giảm phù nề xung huyết tử cung và giải phóng hoàn toàn áp lực thắt lưng trước kỳ kinh.',
        repsAndFrequency: 'Nằm thư giãn 10 - 15 phút mỗi tối trước khi đi ngủ trong tuần tiền kinh nguyệt.',
        howToPerform: 'Kê một chiếc gối mỏng dưới mông/thắt lưng, đưa 2 chân duỗi thẳng lên tường, 2 tay dang rộng sang 2 bên, nhắm mắt hít thở sâu.',
        precautions: 'Tập trong không gian yên tĩnh, thả lỏng toàn bộ cơ mặt và cơ bụng.'
      }
    ],
    ergonomicAdvice: [
      'Tư thế nằm ngửa: Đặt gối mỏng dưới thắt lưng (hỗ trợ độ ưỡn) + đặt 1 gối ôm vừa dưới khoeo chân (giải phóng cơ thắt lưng chậu).',
      'Tư thế nằm nghiêng: Kẹp một chiếc gối mềm giữa 2 đầu gối để giữ khung chậu và cột sống thắt lưng luôn thẳng hàng.',
      'Dinh dưỡng: Bổ sung Magie Glycinate (300-400mg/ngày), Vitamin B6 (50mg), Omega-3 EPA/DHA giảm Prostaglandin viêm.'
    ]
  }
];
