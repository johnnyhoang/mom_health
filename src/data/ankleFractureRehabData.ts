export interface RehabPhase {
  phaseId: string;
  timeframe: string;
  phaseName: string;
  weightBearingStatus: 'NWB (Không Tỳ Đè 0%)' | 'PWB (Tỳ Đè Một Phần 20-50%)' | 'FWB (Tỳ Đè Hoàn Toàn 100%)' | 'Chức Năng Nâng Cao';
  immobilizationDevice: string;
  keyGoals: string[];
  laymanSummary: string;
  dailyExercises: {
    name: string;
    description: string;
    setsAndReps: string;
    clinicalPurpose: string;
    caution: string;
  }[];
  painAndSwellingControl: string[];
  milestonesToAdvance: string[];
}

export const ankleRehabPhases: RehabPhase[] = [
  {
    phaseId: 'phase-0-to-2-weeks',
    timeframe: 'Tuần 0 - 2 Hậu Phẫu',
    phaseName: 'Giai Đoạn 1: Bảo Vệ Vết Mổ & Chống Phù Nề Cấp Tính (NWB 0%)',
    weightBearingStatus: 'NWB (Không Tỳ Đè 0%)',
    immobilizationDevice: 'Nẹp bột sau cẳng bàn chân (Posterior Splint) hoặc nẹp chữ U (Sugar-tong splint) có đệm êm',
    laymanSummary: 'Nằm nghỉ giữ yên tuyệt đối cho xương và vết mổ ổn định, chân luôn gác cao hơn tim, không để chân chạm đất dù chỉ một bước.',
    keyGoals: [
      'Bảo vệ vị trí nẹp vít và đường khâu dây chằng không bị xê dịch.',
      'Kiểm soát tối đa tình trạng sưng nề và tụ máu theo nguyên tắc R.I.C.E.',
      'Giữ vết mổ khô ráo 100%, phòng ngừa nhiễm trùng da.',
      'Kích hoạt bơm tuần hoàn tĩnh mạch bằng cách co gập ngón chân và gồng cơ đùi liên tục.'
    ],
    dailyExercises: [
      {
        name: '1. Gập duỗi ngón chân tích cực (Toe Curls & Extensions)',
        description: 'Chủ động gập cụp 5 ngón chân xuống rồi xòe căng hết cỡ các ngón chân lên trên trong nẹp bột.',
        setsAndReps: 'Mỗi giờ làm 1 đợt 20-30 lần (làm cả ngày khi thức)',
        clinicalPurpose: 'Kích hoạt bơm cơ gan chân và cẳng chân giúp đẩy máu tĩnh mạch về tim, giảm sưng nề và chống đông máu.',
        caution: 'Chỉ cử động các ngón chân, không cố xoay lắc khớp cổ chân.'
      },
      {
        name: '2. Gồng cơ tứ đầu đùi (Isometric Quad Sets)',
        description: 'Nằm ngửa duỗi thẳng chân, gồng siết chặt cơ mặt trước đùi (cơ bắp đùi) ép sát khoeo chân xuống mặt nệm, giữ căng trong 5 giây rồi thả lỏng.',
        setsAndReps: '3 hiệp x 15 lần/ngày',
        clinicalPurpose: 'Ngăn ngừa hiện tượng teo cơ đùi (ức chế cơ tứ đầu) do nằm bất động.',
        caution: 'Thở đều khi gồng, không nín thở gây tăng huyết áp.'
      },
      {
        name: '3. Nâng thẳng chân (Straight Leg Raises - SLR)',
        description: 'Gồng chắc cơ đùi, nâng toàn bộ chân mổ lên cao khỏi mặt giường khoảng 20-30cm, giữ 3 giây rồi từ từ hạ xuống.',
        setsAndReps: '3 hiệp x 10 lần/ngày',
        clinicalPurpose: 'Tăng cường sức mạnh cơ gấp háng và giữ vững toàn bộ trục chân.',
        caution: 'Nếu thấy nặng nề có thể nhờ người nhà đỡ nhẹ ở gót chân trong vài ngày đầu.'
      }
    ],
    painAndSwellingControl: [
      'Kê cao chân (Elevation): Luôn gác chân lên 2-3 chiếc gối êm sao cho khớp cổ chân cao hơn mức quả tim (kể cả khi ngủ).',
      'Chườm lạnh gián tiếp (Ice): Đặt túi gel lạnh bọc trong khăn mềm lên vùng mu bàn chân và khoeo chân (không để nước dính vào băng nẹp bột), mỗi lần 20 phút x 4-5 lần/ngày.',
      'Uống thuốc giảm đau thần kinh, kháng viêm và thuốc chống phù nề theo đúng đơn xuất viện của bác sĩ.'
    ],
    milestonesToAdvance: [
      'Vết mổ khô, mép da liền tốt, đã cắt chỉ sau 10-14 ngày.',
      'Mức độ phù nề giảm rõ rệt, da xuất hiện nếp nhăn sinh lý (Wrinkle sign).'
    ]
  },
  {
    phaseId: 'phase-2-to-6-weeks',
    timeframe: 'Tuần 2 - 6 Hậu Phẫu',
    phaseName: 'Giai Đoạn 2: Mở Khóa Biên Độ Cổ Chân & Tập Tỳ Đè Một Phần (PWB 20-50%)',
    weightBearingStatus: 'PWB (Tỳ Đè Một Phần 20-50%)',
    immobilizationDevice: 'Chuyển sang Giày Bảo Hộ Cổ Chân Khí Nén (CAM Boot / Walking Boot) có thể tháo rời khi tập',
    laymanSummary: 'Tháo bỏ bột cứng, mang giày bốt bảo hộ cổ chân êm ái; bắt đầu tập uốn cổ chân lên xuống nhẹ nhàng và tập chống chân nhẹ 20-30kg lên cân bàn khi đi nạng.',
    keyGoals: [
      'Phục hồi biên độ gập mu chân (Dorsiflexion > 10 độ) và gập lòng bàn chân (Plantarflexion > 30 độ).',
      'Bắt đầu kích thích tế bào tạo xương (Osteogenesis) bằng lực tỳ đè vi thể có kiểm soát.',
      'Ngăn ngừa xơ dính bao khớp và co rút gân gót Achilles.'
    ],
    dailyExercises: [
      {
        name: '1. Gập mu và gập lòng bàn chân chủ động (Active Ankle ROM)',
        description: 'Tháo giày CAM boot khi ngồi trên giường: Nhẹ nhàng uốn bàn chân hướng mũi chân về phía mũi mình (gập mu) hết mức có thể, giữ 3 giây, sau đó duỗi mũi chân chúi xuống sàn (gập lòng), giữ 3 giây.',
        setsAndReps: '3 hiệp x 15-20 lần/ngày',
        clinicalPurpose: 'Tái lập chất nhờn ổ khớp, chống dính gân và ngăn co ngắn gân Achilles.',
        caution: 'Chỉ tập gập - duỗi thẳng trục (lên - xuống), TUYỆT ĐỐI CHƯA ĐƯỢC xoay vặn cổ chân vào trong hay ra ngoài.'
      },
      {
        name: '2. Vẽ bảng chữ cái bằng ngón chân cái (Alphabet Ankle Exercise)',
        description: 'Ngồi thả lỏng chân, dùng ngón chân cái làm "ngòi bút" nhẹ nhàng cử động cổ chân để vẽ lần lượt từ chữ A đến chữ Z trong không khí với biên độ nhỏ.',
        setsAndReps: '1-2 lần toàn bộ bảng chữ cái mỗi ngày',
        clinicalPurpose: 'Phục hồi khả năng phối hợp thần kinh - cơ tinh tế của các nhóm cơ cẳng chân.',
        caution: 'Cử động êm ái, dừng lại ngay nếu cảm thấy đau nhói ở mắt cá trong hoặc mắt cá ngoài.'
      },
      {
        name: '3. Kéo giãn gân gót nhẹ nhàng bằng khăn mềm (Towel Calf Stretch)',
        description: 'Ngồi duỗi thẳng chân, vòng một dải khăn tắm quanh nửa trước bàn chân, hai tay cầm hai đầu khăn kéo nhẹ về phía thân mình để gót chân được kéo giãn êm ái.',
        setsAndReps: 'Giữ 15-20 giây x 5 lần/ngày',
        clinicalPurpose: 'Duy trì chiều dài sinh lý của gân gót Achilles.',
        caution: 'Kéo bằng lực tay nhẹ nhàng, không giật mạnh.'
      },
      {
        name: '4. Tập kiểm soát lực tỳ đè một phần bằng Cân Bàn Sức Khỏe',
        description: 'Đặt chiếc cân điện tử dưới chân mổ: Mang giày CAM boot, chống 2 nạng hai bên, đặt chân mổ lên cân và ấn nhẹ xuống sao cho kim cân chỉ đúng 15 - 20kg (khoảng 30-40% trọng lượng cơ thể) để cảm nhận lực tỳ đè chuẩn khi bước đi với nạng.',
        setsAndReps: 'Tập 5-10 phút mỗi ngày trước khi đi lại',
        clinicalPurpose: 'Giúp não bộ và hệ cơ xương quen dần với tải trọng mà không làm hỏng nẹp vít.',
        caution: 'Luôn có người nhà đứng bên cạnh hỗ trợ giữ thăng bằng cho cụ bà 74 tuổi.'
      }
    ],
    painAndSwellingControl: [
      'Tiếp tục kê cao chân khi nghỉ ngơi sau mỗi đợt tập luyện.',
      'Ngâm chân luân phiên nước ấm - nước mát nhẹ nhàng (Contrast bath) từ tuần thứ 4 nếu chân còn sưng nề nhiều (chỉ thực hiện khi vết mổ đã lành sẹo kín 100%).',
      'Massage vuốt nhẹ từ ngón chân ngược lên bắp chân để hỗ trợ dẫn lưu hệ bạch huyết.'
    ],
    milestonesToAdvance: [
      'Gập mu bàn chân đạt ít nhất 10-15 độ không đau.',
      'Phim X-quang tuần thứ 6 cho thấy cầu can xương mờ bắt đầu hình thành qua khe gãy.'
    ]
  },
  {
    phaseId: 'phase-6-to-12-weeks',
    timeframe: 'Tuần 6 - 12 Hậu Phẫu',
    phaseName: 'Giai Đoạn 3: Tỳ Đè Hoàn Toàn & Tăng Cường Cơ Bắp Chân (FWB 100%)',
    weightBearingStatus: 'FWB (Tỳ Đè Hoàn Toàn 100%)',
    immobilizationDevice: 'Cai dần giày CAM boot, chuyển sang mang giày thể thao có đế đệm êm nâng đỡ vòm chân',
    laymanSummary: 'Xương đã liền vững trên phim X-quang: Bỏ nạng tập đi chống chân hoàn toàn, tập nhón gót đứng trên 2 chân và tập đứng thăng bằng.',
    keyGoals: [
      'Chịu toàn bộ 100% trọng lượng cơ thể (Full Weight Bearing) khi đi lại không đau.',
      'Khôi phục sức mạnh cơ tam đầu cẳng chân (Cơ bắp chuối / Gastrocnemius - Soleus).',
      'Tập luyện phản xạ cảm thụ bản thể (Proprioception) chống tái ngã cho người cao tuổi.'
    ],
    dailyExercises: [
      {
        name: '1. Bài tập nhón gót hai chân (Double-Leg Heel Raises)',
        description: 'Đứng vịn 2 tay vào mép bàn hoặc lưng ghế vững chắc: Từ từ nhón nâng cả hai gót chân lên cao, đứng trên các ngón chân trong 2 giây rồi từ từ hạ gót xuống sàn.',
        setsAndReps: '3 hiệp x 10-15 lần/ngày',
        clinicalPurpose: 'Tăng cường sức mạnh cơ bắp chân để tạo lực đẩy khi bước đi.',
        caution: 'Luôn vịn tay chắc chắn, không tập ở nơi sàn nhà trơn trượt.'
      },
      {
        name: '2. Tập đứng thăng bằng 1 chân (Single-Leg Stance)',
        description: 'Đứng cạnh mép tường hoặc tay vịn: Nhấc nhẹ chân lành lên, đứng trụ thăng bằng trên chân mổ trong 10-20 giây, sau đó đổi chân.',
        setsAndReps: '5 lần mỗi bên x 2 đợt/ngày',
        clinicalPurpose: 'Kích hoạt các thụ thể cảm thụ bản thể ở khớp cổ chân và tiền đình não bộ giúp người 74 tuổi giữ thăng bằng vững chắc.',
        caution: 'Luôn sẵn sàng chạm tay vào tường nếu thấy lảo đảo.'
      },
      {
        name: '3. Bài tập kháng lực dây thun (Theraband Resistance Exercises)',
        description: 'Móc dây thun đàn hồi y tế quanh bàn chân: Tập kéo ngược mu chân lên trên (gập mu có kháng lực), đẩy bàn chân xuống dưới (gập lòng có kháng lực) và xoay nghiêng bàn chân ra ngoài (eversion).',
        setsAndReps: '3 hiệp x 12 lần mỗi động tác',
        clinicalPurpose: 'Tăng lực các nhóm cơ chày trước, cơ mác bên giúp giữ vững cổ chân khi đi đường gồ ghề.',
        caution: 'Bắt đầu bằng dây thun có lực cản nhẹ (màu vàng/đỏ) trước khi tăng lực cản.'
      },
      {
        name: '4. Tập bước đi trên đường thẳng (Heel-to-Toe Walking)',
        description: 'Tập bước đi chậm rãi theo đường thẳng, đặt gót chân chạm đất trước rồi lăn dần qua lòng bàn chân và đẩy bằng ngón chân cái (đúng chu kỳ dáng đi sinh lý).',
        setsAndReps: 'Đi lại 10-15 phút x 2 lần/ngày',
        clinicalPurpose: 'Sửa chữa triệt để tật đi khập khiễng hoặc né tránh tỳ gót.',
        caution: 'Đi trên mặt sàn phẳng, mang giày thể thao có đế bám tốt.'
      }
    ],
    painAndSwellingControl: [
      'Mang vớ y khoa áp lực nhẹ (Class 1: 15-20 mmHg) vào ban ngày khi đi lại nhiều để ngăn máu ứ đọng gây sưng phù cổ chân chiều tối.',
      'Tháo vớ và gác chân cao khi nằm ngủ ban đêm.'
    ],
    milestonesToAdvance: [
      'Đi bộ trong nhà 20-30 phút không cần nạng hoặc gậy chống.',
      'Khớp cổ chân không bị sưng to hay nóng đỏ sau khi tập luyện.'
    ]
  },
  {
    phaseId: 'phase-3-to-6-months-plus',
    timeframe: 'Tháng 3 - 6+ Hậu Phẫu',
    phaseName: 'Giai Đoạn 4: Trở Lại Đời Sống Năng Động & Quản Lý Dài Hạn (Tháo Vít Khi Cần)',
    weightBearingStatus: 'Chức Năng Nâng Cao',
    immobilizationDevice: 'Giày dép sinh hoạt thường ngày có quai hậu êm ái, chống trơn trượt',
    laymanSummary: 'Khớp cổ chân và dây chằng đã phục hồi hoàn toàn: Đi bộ thể dục ngoài trời, tự chủ đi chợ mua sắm, leo cầu thang vững vàng; kiểm tra định kỳ nẹp vít.',
    keyGoals: [
      'Khôi phục 100% chức năng sinh hoạt độc lập của người cao tuổi.',
      'Đi bộ thể dục 30-45 phút mỗi ngày không mệt mỏi.',
      'Đánh giá tình trạng nẹp vít và quyết định có cần phẫu thuật tháo dụng cụ hay không.'
    ],
    dailyExercises: [
      {
        name: '1. Đi bộ thể dục nhịp điệu ngoài trời',
        description: 'Đi bộ trên đường bằng phẳng, công viên hoặc sân chung cư vào buổi sáng sớm kết hợp hít thở sâu và tắm nắng nhẹ.',
        setsAndReps: '30 phút mỗi ngày',
        clinicalPurpose: 'Kích thích tạo xương, tăng tuần hoàn tim mạch và hấp thu Vitamin D tự nhiên.',
        caution: 'Tránh đi bộ lúc trời mưa hoặc mặt đường trơn ướt.'
      },
      {
        name: '2. Tập bước lên xuống bậc thang (Step-Ups & Step-Downs)',
        description: 'Đứng trước bậc cầu thang cao khoảng 10-15cm có tay vịn: Bước chân mổ lên bậc trước, sau đó bước chân lành lên theo; khi bước xuống làm ngược lại (chân lành xuống trước, chân mổ xuống sau).',
        setsAndReps: '2 hiệp x 10 bậc/ngày',
        clinicalPurpose: 'Rèn luyện sức mạnh cơ đùi và độ linh hoạt cổ chân khi thay đổi độ cao.',
        caution: 'Luôn giữ chắc tay vịn cầu thang.'
      }
    ],
    painAndSwellingControl: [
      'Hiện tượng sưng nề nhẹ vào cuối ngày có thể kéo dài từ 6 - 12 tháng sau mổ và là phản ứng sinh lý lành tính bình thường của hệ mạch máu đang tái tạo.',
      'Tiếp tục mang vớ áp lực y khoa nếu có dự định đi du lịch hoặc đứng nấu ăn lâu.'
    ],
    milestonesToAdvance: [
      'Chụp X-quang kiểm tra sau 6 tháng: Xương liền đặc hoàn toàn (Bone Consolidation).',
      'Bệnh nhân hoàn toàn tự tin sải bước đi lại mà không còn cảm giác sợ hãi té ngã.'
    ]
  }
];

export const ankleNutritionGuidelines = {
  title: 'Chế Độ Dinh Dưỡng Thúc Đẩy Liền Xương & Tái Tạo Dây Chằng Cho Người 74 Tuổi',
  subtitle: 'Cung cấp nguyên liệu tối thượng cho tế bào tạo xương (Osteoblast) và sợi Collagen',
  keyPillars: [
    {
      category: '1. Canxi Hữu Cơ & Vitamin D3 + K2 (MK7)',
      foodSources: 'Sữa hạt giàu canxi, sữa chua không đường, cá hồi, cá mòi kho nhừ cả xương, tôm nhỏ ăn cả vỏ, rau cải xoăn, cải bó xôi.',
      dosage: 'Canxi nguyên tố: 1000 - 1200mg/ngày • Vitamin D3: 1000 - 2000 IU/ngày • Vitamin K2: 75-100 mcg/ngày.',
      mechanism: 'Canxi là vật liệu xây dựng xương; Vitamin D3 giúp ruột hấp thu Canxi vào máu; Vitamin K2 đóng vai trò "người vận chuyển" kích hoạt Osteocalcin đưa Canxi gắn trực tiếp vào khung xương, tránh đóng cặn ở thành mạch máu.'
    },
    {
      category: '2. Protein Chất Lượng Cao & Collagen Peptides',
      foodSources: 'Thịt bò nạc, ức gà, trứng gà ta, đậu phụ, nước hầm xương ống, gelatin hữu cơ.',
      dosage: '1.2 - 1.5g protein / kg thể trọng / ngày (khoảng 60 - 75g protein nguyên chất/ngày cho người 50kg).',
      mechanism: 'Protein cung cấp các axit amin (Glycine, Proline, Hydroxyproline) để tổng hợp mạng lưới Collagen Type I ở màng xương và Collagen Type I/III ở dây chằng ATFL.'
    },
    {
      category: '3. Vitamin C & Kẽm (Zinc) - Đẩy Nhanh Lành Vết Mổ',
      foodSources: 'Ổi, kiwi, cam sành, ớt chuông, dâu tây, hạt bí ngô, ngũ cốc nguyên hạt.',
      dosage: 'Vitamin C: 500mg/ngày • Kẽm: 15 - 20mg/ngày.',
      mechanism: 'Vitamin C là co-factor bắt buộc để chuyển hóa liên kết chéo của sợi collagen, giúp vết rạch da mau liền sẹo và tăng độ dai của dây chằng.'
    },
    {
      category: '4. Kiểm Soát Nước & Hạn Chế Muối Chống Phù Nề',
      foodSources: 'Uống đủ 1.5 - 2.0 lít nước ấm mỗi ngày, nước râu ngô, nước đậu đen rang.',
      dosage: 'Giảm muối ăn (< 5g muối/ngày), tránh thực phẩm đóng hộp, mì ăn liền và đồ muối chua.',
      mechanism: 'Ăn nhạt giúp giảm giữ muối và nước ở ngoại vi, làm cổ chân xẹp nhanh hơn và giảm áp lực lên vết mổ.'
    }
  ]
};

export const hardwareRemovalGuide = {
  title: 'Cẩm Nang Về Việc Tháo Nẹp Vít Titanium (Hardware Removal)',
  shortVerdict: 'Ở người 74 tuổi, nẹp vít Titanium giải phẫu là vật liệu trơ sinh học có thể để lại trong cơ thể suốt đời, trừ một số trường hợp cụ thể.',
  indicationsToKeep: [
    'Nếu nẹp vít không gây cộm cấn, không đau nhức khi thay đổi thời tiết và liền xương tốt: KHÔNG CẦN PHẢI MỔ THÁO ĐỂ TRÁNH THÊM MỘT CUỘC MỔ KHÔNG CẦN THIẾT.',
    'Nẹp Titanium hiện đại tương thích 100% với việc chụp MRI và không kích hoạt cổng từ an ninh sân bay.'
  ],
  indicationsToRemove: [
    'Nẹp hoặc đầu vít ở mắt cá ngoài quá sát da gây cộm rát khi đi tất hoặc mang giày bốt.',
    'Vít định vị khớp chày mác (Syndesmotic screw) loại cũ nếu chưa tháo sau 8-12 tuần có thể cần tháo trước khi tập đi nặng (nếu không dùng loại dây neo TightRope tự tiêu).',
    'Nhiễm trùng muộn quanh nẹp (cực kỳ hiếm < 0.5%).'
  ],
  timing: 'Nếu có chỉ định tháo: Thực hiện sau 12 - 18 tháng kể từ ngày mổ ban đầu, khi xương đã liền đặc hoàn toàn.'
};
