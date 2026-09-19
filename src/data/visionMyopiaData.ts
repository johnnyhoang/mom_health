export interface PatientVisionProfile {
  name: string;
  birthDate: string;
  age: number; // 14 in 2026
  detectedAge: number; // 11 in 2023
  currentStatus: string;
  astigmatismNote: string;
  screenTimeHabits: string[];
  keyRiskFactors: string[];
  growthPhase: string;
}

export const minhAnhVisionProfile: PatientVisionProfile = {
  name: "Minh Anh",
  birthDate: "19/01/2012",
  age: 14,
  detectedAge: 11,
  currentStatus: "Cận thị tiến triển nhanh (khởi phát từ 11 tuổi, mỗi năm tăng 0.75D - 1.25D) kèm loạn thị cận (Compound Myopic Astigmatism)",
  astigmatismNote: "Có kèm độ loạn thị (Astigmatism), yêu cầu tròng kính phải có khả năng cắt đúng trục loạn (Cylinder & Axis) kết hợp định tâm vi thấu kính chính xác",
  screenTimeHabits: [
    "Sử dụng điện thoại thông minh thường xuyên ở cự ly gần (< 30cm)",
    "Học tập và giải trí với máy tính để bàn / laptop nhiều giờ liên tục",
    "Xem tivi trong không gian ánh sáng trong nhà, ít nghỉ ngơi ngắt quãng",
    "Thời gian hoạt động ngoài trời (Outdoor daylight) hạn chế (< 60 phút/ngày)"
  ],
  keyRiskFactors: [
    "Độ tuổi vàng tăng trưởng trục nhãn cầu mạnh (11 - 16 tuổi trong giai đoạn dậy thì)",
    "Cường độ nhìn gần (Near-work load) cao kéo dài kích thích co thắt cơ thể mi",
    "Hiện tượng Defocus viền võng mạc thúc đẩy kéo dài trục trước - sau của mắt",
    "Độ loạn thị đi kèm làm tăng mỏi thị giác nếu không được hiệu chỉnh chuẩn xác"
  ],
  growthPhase: "Giai đoạn then chốt (14 - 18 tuổi): Trục nhãn cầu vẫn tiếp tục dài ra theo đà tăng trưởng thể chất; nếu không can thiệp bằng công nghệ Defocus, nguy cơ cán mốc cận thị nặng (> -6.00D) là rất cao."
};

export interface DefocusLensTech {
  id: string;
  name: string;
  brand: string;
  origin: string;
  technologyCode: string;
  technologyFull: string;
  mechanism: string;
  clinicalStudy: {
    institution: string;
    journal: string;
    sampleDuration: string;
    efficacyRate: string;
    axialLengthControl: string;
    keyFinding: string;
  };
  pros: string[];
  cons: string[];
  rxRange: {
    sphere: string;
    cylinder: string;
  };
  priceRangeVND: string;
  bestFitFor: string;
  blueFilterFeature: string;
}

export const myopiaControlLensesList: DefocusLensTech[] = [
  {
    id: 'essilor-stellest',
    name: 'Essilor Stellest',
    brand: 'Essilor',
    origin: 'Pháp (France)',
    technologyCode: 'H.A.L.T (Highly Aspherical Lenslet Target)',
    technologyFull: 'Công nghệ 1.021 vi thấu kính phi cầu xếp trên 11 vòng đồng tâm',
    mechanism: 'Tạo ra chùm thể tích ánh sáng Defocus trước võng mạc (Volume of Myopic Defocus) theo đúng hình dạng cong của đáy mắt, làm tín hiệu phanh sinh học ngăn trục mắt dài ra.',
    clinicalStudy: {
      institution: 'Wenzhou Medical University (Trung Quốc) phối hợp R&D Essilor Quốc Tế',
      journal: 'JAMA Ophthalmology & IOVS (2022 - 2024)',
      sampleDuration: 'Thử nghiệm lâm sàng ngẫu nhiên có đối chứng (RCT) theo dõi 2 - 3 năm liên tục',
      efficacyRate: 'Giảm trung bình 67% độ tăng cận thị (khi đeo >= 12h/ngày so với tròng đơn tròng)',
      axialLengthControl: 'Kiểm soát 60% mức độ dài ra của trục nhãn cầu',
      keyFinding: '9/10 trẻ em đạt mức độ tăng trưởng trục mắt tương đương hoặc chậm hơn trẻ không bị cận thị; 100% trẻ thích nghi hoàn toàn trong vòng 3 ngày.'
    },
    pros: [
      'Hiệu quả kiểm soát cận thị thuộc top đầu thế giới đã được kiểm chứng qua JAMA Ophthalmology',
      'Vùng nhìn trung tâm trong suốt 9mm cho thị lực 10/10 cực kỳ sắc nét khi học tập',
      'Lớp váng phủ cao cấp Crizal Rock siêu chống trầy xước gấp 3 lần và chống bám bụi, nước tối ưu cho học sinh',
      'Bảo vệ mắt toàn diện trước tia UV và tích hợp công nghệ chống ánh sáng xanh thông minh'
    ],
    cons: [
      'Mức giá thuộc phân khúc cao cấp',
      'Yêu cầu kỹ thuật viên đo khám và mài lắp lấy tâm đồng tử (Fitting Height / PD) tuyệt đối chuẩn xác'
    ],
    rxRange: {
      sphere: 'Plano đến -10.00D',
      cylinder: 'Đến -4.00D (hỗ trợ độ loạn thị rất tốt cho Minh Anh)'
    },
    priceRangeVND: '3.980.000 - 4.950.000 VNĐ / cặp',
    bestFitFor: 'Trẻ từ 8 - 16 tuổi có độ cận tiến triển nhanh, học tập dùng máy tính/điện thoại nhiều, cần giải pháp tròng kính an toàn không can thiệp giác mạc.',
    blueFilterFeature: 'Tích hợp sẵn vật liệu Blue UV Capture / váng Crizal Rock lọc ánh sáng xanh tím có hại từ màn hình thiết bị số.'
  },
  {
    id: 'hoya-miyosmart',
    name: 'Hoya MiYOSMART',
    brand: 'Hoya',
    origin: 'Nhật Bản (Japan)',
    technologyCode: 'D.I.M.S (Defocus Incorporated Multiple Segments)',
    technologyFull: 'Công nghệ hàng trăm vi thấu kính phân đoạn Defocus đa điểm hình tổ ong',
    mechanism: '396 vi thấu kính nhỏ li ti (công suất +3.50D) bao quanh vùng trung tâm 9.4mm, tạo ra hiệu ứng Myopic Defocus liên tục trên võng mạc ngoại vi.',
    clinicalStudy: {
      institution: 'The Hong Kong Polytechnic University (PolyU)',
      journal: 'British Journal of Ophthalmology (BJO) 2020 & Theo dõi dài hạn 6 năm (2023)',
      sampleDuration: 'Nghiên cứu lâm sàng 2 năm RCT và kéo dài theo dõi liên tục 6 năm',
      efficacyRate: 'Giảm 59% - 60% mức độ tiến triển độ cận thị',
      axialLengthControl: 'Làm chậm 60% tốc độ kéo dài trục nhãn cầu',
      keyFinding: 'Hiệu quả duy trì bền vững suốt 6 năm theo dõi; khi ngưng đeo kính không xuất hiện hiện tượng dội ngược (No rebound effect).'
    },
    pros: [
      'Bằng chứng lâm sàng theo dõi dài nhất hiện nay (6 năm liên tục khẳng định tính an toàn và bền vững)',
      'Chất liệu Polycarbonate chịu lực siêu bền (EyeShield), chống vỡ tuyệt đối khi va đập thể thao học đường',
      'Đạt giải thưởng vàng Grand Prize tại Triển lãm Sáng chế Quốc tế Geneva',
      'Vùng nhìn trung tâm sáng rõ, chuyển tiếp êm ái'
    ],
    cons: [
      'Giá thành phân khúc cao cấp',
      'Thời gian chờ đặt tròng Rx riêng biệt từ 5 - 10 ngày tùy độ loạn'
    ],
    rxRange: {
      sphere: 'Plano đến -10.00D',
      cylinder: 'Đến -4.00D'
    },
    priceRangeVND: '4.500.000 - 5.500.000 VNĐ / cặp',
    bestFitFor: 'Học sinh năng động, thích chơi thể thao cần tròng chống vỡ tuyệt đối, kiểm soát cận thị đường dài dựa trên nghiên cứu 6 năm uy tín.',
    blueFilterFeature: 'Lớp phủ tráng cứng chống tia UV, có phiên bản tích hợp lọc ánh sáng xanh hoặc đổi màu Sunbird ngoài trời.'
  },
  {
    id: 'zeiss-myocare',
    name: 'Zeiss MyoCare & MyoCare S',
    brand: 'Carl Zeiss',
    origin: 'Đức (Germany)',
    technologyCode: 'C.A.R.E (Cylindrical Annular Refractive Elements)',
    technologyFull: 'Công nghệ vi thấu kính đồng tâm hình nhẫn khúc xạ hình trụ xen kẽ',
    mechanism: 'Các vòng nhẫn vi khúc xạ hình trụ mở rộng tạo ra độ defocus hội tụ phía trước võng mạc ngoại vi, đồng thời tối ưu hóa độ nhòe quang sai giúp mắt nhìn thoải mái ở mọi góc liếc.',
    clinicalStudy: {
      institution: 'Wenzhou Eye Hospital phối hợp Carl Zeiss Vision Science Lab (Đức)',
      journal: 'Investigative Ophthalmology & Visual Science (IOVS 2023 - 2024)',
      sampleDuration: 'Thử nghiệm lâm sàng đa trung tâm 2 năm',
      efficacyRate: 'Giảm 63% - 68% tiến triển độ cận thị',
      axialLengthControl: 'Kiểm soát 58% - 64% sự dài ra trục nhãn cầu',
      keyFinding: 'Thiết kế cá thể hóa chia 2 phân khúc: MyoCare (cho trẻ < 10 tuổi) và MyoCare S (cho trẻ từ 10 tuổi trở lên - phù hợp hoàn hảo với độ tuổi 14 của Minh Anh).'
    },
    pros: [
      'Công nghệ quang học hàng đầu thế giới từ thương hiệu Đức Carl Zeiss danh tiếng',
      'Phân tầng thiết kế chuyên biệt (MyoCare S) tối ưu riêng cho mắt thanh thiếu niên từ 10 tuổi trở lên',
      'Vùng nhìn rõ trung tâm 7mm và vùng chuyển tiếp mượt mà, hạn chế cảm giác gợn viền khi liếc mắt nhanh',
      'Tích hợp công nghệ bảo vệ mắt toàn diện Zeiss UVProtect và chống ánh sáng xanh BlueGuard'
    ],
    cons: [
      'Cần đo chính xác trục nhìn và khoảng cách từ mắt đến tròng kính (Back Vertex Distance)',
      'Giá thành cao'
    ],
    rxRange: {
      sphere: 'Plano đến -10.00D',
      cylinder: 'Đến -4.00D'
    },
    priceRangeVND: '3.800.000 - 5.200.000 VNĐ / cặp',
    bestFitFor: 'Trẻ em và học sinh THCS/THPT (từ 10-18 tuổi), thường xuyên dùng thiết bị số, cần độ trong suốt quang học cực cao và thiết kế nhắm trúng lứa tuổi.',
    blueFilterFeature: 'Công nghệ Zeiss BlueGuard chặn tới 40% ánh sáng xanh có hại tích hợp trực tiếp vào phôi tròng kính mà không gây ám vàng.'
  },
  {
    id: 'rodenstock-mycon',
    name: 'Rodenstock MyCon',
    brand: 'Rodenstock',
    origin: 'Đức (Germany)',
    technologyCode: 'Freeform Radial Aspheric Defocus',
    technologyFull: 'Thiết kế vùng giảm độ ngoại vi theo trục thái dương và trục mũi',
    mechanism: 'Tập trung tạo defocus kiểm soát ở hai vùng rìa thái dương (Temporal) và mũi (Nasal) nơi có mật độ tế bào võng mạc ngoại vi nhạy cảm nhất với tín hiệu tăng trưởng trục mắt.',
    clinicalStudy: {
      institution: 'Nghiên cứu lâm sàng độc lập tại châu Âu 5 năm',
      journal: 'European Journal of Ophthalmology',
      sampleDuration: 'Theo dõi 2 - 5 năm',
      efficacyRate: 'Làm chậm tiến triển cận thị khoảng 40% - 50%',
      axialLengthControl: 'Làm chậm 35% - 45% tốc độ dài trục mắt',
      keyFinding: 'Ưu thế về độ mỏng và tính thẩm mỹ cao, phù hợp cho học sinh cận thị nhẹ đến vừa.'
    },
    pros: [
      'Thương hiệu quang học cao cấp 140+ năm của Đức',
      'Bề mặt tròng kính nhìn tự nhiên như tròng đơn tròng thông thường, không lộ vi thấu kính',
      'Độ mỏng và thẩm mỹ vượt trội'
    ],
    cons: [
      'Tỷ lệ kiểm soát trung bình thấp hơn một chút so với công nghệ H.A.L.T và D.I.M.S ở các ca cận tăng quá nhanh'
    ],
    rxRange: {
      sphere: 'Plano đến -8.00D',
      cylinder: 'Đến -3.00D'
    },
    priceRangeVND: '3.200.000 - 4.600.000 VNĐ / cặp',
    bestFitFor: 'Học sinh cận thị độ nhẹ đến vừa, chú trọng tính thẩm mỹ cao, cần tròng kính mỏng nhẹ không lộ hoa văn vi thấu kính.',
    blueFilterFeature: 'Có tùy chọn lớp phủ Solitaire Protect Balance 2 lọc ánh sáng xanh kỹ thuật số.'
  },
  {
    id: 'chemi-myo',
    name: 'Chemi Myo / U2 Myopia Control',
    brand: 'Chemi Lens',
    origin: 'Hàn Quốc (South Korea)',
    technologyCode: 'Aspherical Peripheral Management',
    technologyFull: 'Công nghệ phi cầu quản lý hội tụ rìa ngoài',
    mechanism: 'Điều chỉnh công suất vùng rìa nhằm giảm hiện tượng quang sai cầu ngoại vi, hỗ trợ giảm áp lực điều tiết khi nhìn gần.',
    clinicalStudy: {
      institution: 'Trung tâm nghiên cứu Chemi R&D Hàn Quốc',
      journal: 'Korean Ophthalmic Research',
      sampleDuration: '1 - 2 năm',
      efficacyRate: 'Giảm khoảng 30% - 40% tiến triển độ cận',
      axialLengthControl: 'Hỗ trợ kiểm soát một phần trục nhãn cầu',
      keyFinding: 'Giải pháp kinh tế tiếp cận dễ dàng cho học sinh, giảm mệt mỏi điều tiết khi học tập.'
    },
    pros: [
      'Mức giá rất dễ tiếp cận và phổ biến ở mọi tiệm kính tại Việt Nam',
      'Lớp phủ Crystal U2 chống trầy tốt, chống tia UV400',
      'Thời gian cắt tròng có sẵn nhanh chóng'
    ],
    cons: [
      'Hiệu quả kiểm soát tăng độ cận thấp hơn các dòng công nghệ vi thấu kính thế hệ mới (H.A.L.T, D.I.M.S, C.A.R.E)',
      'Không tối ưu chuyên sâu cho các ca cận tiến triển nhanh trên 1.00D/năm'
    ],
    rxRange: {
      sphere: 'Plano đến -8.00D',
      cylinder: 'Đến -2.00D'
    },
    priceRangeVND: '1.200.000 - 1.800.000 VNĐ / cặp',
    bestFitFor: 'Gia đình có ngân sách vừa phải, cận thị độ nhẹ và tốc độ tăng độ chậm.',
    blueFilterFeature: 'Tích hợp váng phủ Perfect UV chặn ánh sáng xanh cơ bản.'
  }
];

export interface MyopiaInterventionComparison {
  method: string;
  vietnameseName: string;
  mechanism: string;
  efficacy: string;
  safetyProfile: string;
  suitabilityForMinhAnh: string;
  costVND: string;
  complianceRequirement: string;
}

export const myopiaInterventionsComparison: MyopiaInterventionComparison[] = [
  {
    method: "Myopia Control Glasses (Defocus Lenses)",
    vietnameseName: "Kính Gọng Công Nghệ Defocus (Stellest / MiYOSMART / MyoCare)",
    mechanism: "Tạo thể tích vi thấu kính Defocus hội tụ trước võng mạc ngoại vi, ngăn tín hiệu dài trục nhãn cầu.",
    efficacy: "Giảm 60% - 67% tiến triển độ cận & trục mắt (Rất cao)",
    safetyProfile: "An toàn tuyệt đối 100%, hoàn toàn không chạm vào giác mạc, không nguy cơ nhiễm trùng mắt.",
    suitabilityForMinhAnh: "LỰA CHỌN TỐI ƯU SỐ 1: Vừa kiểm soát tăng độ, vừa chỉnh độ loạn thị triệt để, vừa bảo vệ mắt trước ánh sáng xanh máy tính/điện thoại.",
    costVND: "3.800.000 - 5.500.000 VNĐ / cặp (dùng 1 - 2 năm)",
    complianceRequirement: "Đeo đủ >= 12 giờ mỗi ngày trong suốt thời gian học tập và sinh hoạt."
  },
  {
    method: "Ortho-K (Orthokeratology)",
    vietnameseName: "Kính Áp Tròng Ban Đêm Định Hình Giác Mạc",
    mechanism: "Kính tiếp xúc cứng đặt vào mắt khi ngủ để nén biểu mô trung tâm giác mạc, tạo vùng phồng ngoại vi gây myopic defocus.",
    efficacy: "Giảm 50% - 60% tiến triển độ cận",
    safetyProfile: "Có nguy cơ viêm loét giác mạc do vi khuẩn/Acanthamoeba nếu vệ sinh không nghiêm ngặt (tỷ lệ ~1/1.000 ca/năm).",
    suitabilityForMinhAnh: "Cân nhắc thứ 2: Giúp ban ngày không cần đeo kính gọng, tuy nhiên cần sự tự giác vệ sinh rửa kính mỗi tối rất khắt khe.",
    costVND: "16.000.000 - 24.000.000 VNĐ / cặp + Nước ngâm rửa 3-4 triệu/năm",
    complianceRequirement: "Đeo đều đặn 7 - 8 tiếng mỗi đêm và vệ sinh ngâm rửa dung dịch chuyên dụng hàng ngày."
  },
  {
    method: "Low-Dose Atropine Eye Drops (0.01% - 0.05%)",
    vietnameseName: "Thuốc Nhỏ Mắt Atropine Nồng Độ Thấp",
    mechanism: "Tác động lên thụ thể Muscarinic tại màng bồ đào / củng mạc, ức chế tái cấu trúc ngoại bào làm dài trục nhãn cầu.",
    efficacy: "Giảm 40% - 65% (theo nghiên cứu LAMP Study: nồng độ 0.05% cho hiệu quả tối ưu)",
    safetyProfile: "An toàn ở liều thấp; có thể gây chói nhẹ khi ra nắng hoặc giảm điều tiết nhìn gần nhẹ.",
    suitabilityForMinhAnh: "Phối hợp bổ trợ: Có thể kết hợp nhỏ mỗi tối nếu sau 6 tháng đeo kính Defocus độ cận vẫn còn xu hướng nhích tăng.",
    costVND: "350.000 - 600.000 VNĐ / lọ dùng 1 tháng (~4 - 7 triệu/năm)",
    complianceRequirement: "Nhỏ đều đặn 1 giọt mỗi mắt trước khi đi ngủ, tái khám kiểm tra phản xạ đồng tử định kỳ."
  },
  {
    method: "Outdoor Daylight Exposure & Ergonomics",
    vietnameseName: "Hoạt Động Ngoài Trời Ánh Sáng Tự Nhiên & Công Thái Học",
    mechanism: "Ánh sáng tự nhiên (>= 10.000 lux) kích thích tế bào Amacrine võng mạc tiết Dopamine – chất ức chế tự nhiên sự dài ra của trục nhãn cầu.",
    efficacy: "Giảm 30% - 40% nguy cơ khởi phát và tiến triển cận thị",
    safetyProfile: "100% tự nhiên, nâng cao toàn diện thể chất và tinh thần.",
    suitabilityForMinhAnh: "BẮT BUỘC PHỐI HỢP: Tăng cường ra ngoài trời >= 90-120 phút/ngày và áp dụng nghiêm ngặt quy tắc 20-20-20 khi dùng thiết bị điện tử.",
    costVND: "0 VNĐ (Miễn phí hoàn toàn)",
    complianceRequirement: "Duy trì thói quen vận động ban ngày, nghỉ ngơi sau mỗi 20 phút nhìn màn hình."
  }
];

export interface VisionQADatasetItem {
  id: string;
  category: string;
  question: string;
  shortSummary: string;
  detailedPoints: string[];
  clinicalHighlight: string;
  doctorQuestionToAsk?: string;
}

export const visionQAItems: VisionQADatasetItem[] = [
  {
    id: 'qa-vision-1',
    category: 'Cơ Chế & Độ Cận',
    question: 'Tại sao Minh Anh phát hiện cận từ 11 tuổi và độ cận lại tăng nhanh liên tục qua các năm?',
    shortSummary: 'Độ tuổi 11 - 16 là giai đoạn phát triển thể chất và dậy thì mạnh nhất. Khi cơ thể phát triển chiều cao, trục nhãn cầu cũng dài ra nhanh chóng, cộng hưởng với việc học tập nhìn gần và sử dụng màn hình nhiều.',
    detailedPoints: [
      'Trục nhãn cầu (Axial Length) bình thường của người trưởng thành là ~23.5mm - 24.0mm. Cứ mỗi 1mm trục mắt dài thêm, độ cận sẽ tăng khoảng 2.50D đến 3.00D.',
      'Ở lứa tuổi 11-14, nếu đeo kính đơn tròng thông thường, ánh sáng ở vùng rìa võng mạc sẽ hội tụ ra phía sau đáy mắt (Hyperopic Defocus). Tín hiệu quang sai này khiến mắt lầm tưởng là hình ảnh chưa đủ nét, ra lệnh cho củng mạc tiếp tục dài ra về phía sau.',
      'Thói quen dùng điện thoại, máy tính liên tục trong nhà làm cơ thể mi co thắt liên tục và mắt bị thiếu ánh sáng tự nhiên kích thích tiết Dopamine võng mạc.'
    ],
    clinicalHighlight: 'Tăng độ cận ở trẻ em thực chất là sự dài ra vĩnh viễn của trục nhãn cầu. Ngăn chặn trục mắt dài ra chính là chìa khóa vàng duy nhất để giữ độ cận không tăng.'
  },
  {
    id: 'qa-vision-2',
    category: 'Độ Loạn Thị Đi Kèm',
    question: 'Minh Anh có thêm độ loạn thị (Astigmatism), tròng kính kiểm soát cận thị có xử lý được độ loạn không?',
    shortSummary: 'HOÀN TOÀN XỬ LÝ ĐƯỢC. Các dòng tròng kính kiểm soát cận thị hiện đại (Essilor Stellest, Zeiss MyoCare, Hoya MiYOSMART) đều hỗ trợ độ loạn thị lên tới -4.00D.',
    detailedPoints: [
      'Loạn thị xảy ra do giác mạc hoặc thể thủy tinh cong không đều (hình quả bóng bầu dục thay vì hình cầu). Loạn thị làm hình ảnh bị bóng mờ, nhòe và gây mỏi mắt gấp đôi nếu không được chỉnh đúng trục.',
      'Khi cắt kính kiểm soát cận thị có độ loạn: Bác sĩ/Kỹ thuật viên khúc xạ sẽ mài công suất khúc xạ kết hợp cả độ Cận (Sphere) và độ Loạn (Cylinder) kèm đúng Trục loạn (Axis 0 - 180 độ).',
      'Vùng nhìn trung tâm của kính sẽ đưa hình ảnh nét căng 10/10 vào hố hoàng điểm, trong khi hàng trăm vi thấu kính xung quanh vẫn thực hiện trọn vẹn nhiệm vụ tạo Defocus hãm tăng độ cận.'
    ],
    clinicalHighlight: 'Cần chọn trung tâm khúc xạ uy tín có máy đo tâm tự động 3D (như máy Visufit 1000 của Zeiss hoặc máy đo của Essilor) để xác định tâm đồng tử PD và chiều cao đồng tử FH chính xác tới từng 0.1mm.'
  },
  {
    id: 'qa-vision-3',
    category: 'Công Nghệ & Nghiên Cứu',
    question: 'Nghiên cứu khoa học chứng minh tròng kính Defocus giảm tăng độ cận như thế nào? Có thật sự hiệu quả?',
    shortSummary: 'Các thử nghiệm lâm sàng ngẫu nhiên có đối chứng (RCT) công bố trên các tạp chí y khoa hàng đầu thế giới (JAMA Ophthalmology, BJO) chứng minh tròng Defocus giảm 60% - 67% độ tăng cận thị và làm chậm 60% mức dài trục mắt.',
    detailedPoints: [
      'Nghiên cứu của Đại học Y Ôn Châu (Wenzhou) và Essilor công bố trên JAMA Ophthalmology theo dõi 3 năm cho thấy trẻ đeo tròng Stellest đủ >= 12h/ngày giảm được 67% độ cận so với nhóm đeo kính thường.',
      'Nghiên cứu 6 năm của Đại học Bách Khoa Hồng Kông (PolyU) với Hoya MiYOSMART công bố trên BJO khẳng định hiệu quả duy trì bền vững trong suốt 6 năm, không xảy ra hiện tượng độ cận bật tăng trở lại khi dừng đeo.',
      'Cơ chế chung là tạo ra tín hiệu quang học "Myopic Defocus" (tiêu điểm ngoại vi nằm trước võng mạc), gửi tín hiệu sinh học ức chế các men Metalloproteinase tại củng mạc, chặn đứng quá trình giãn dài của vỏ bọc nhãn cầu.'
    ],
    clinicalHighlight: 'Đây là công nghệ quang học tiên tiến nhất thế kỷ 21 trong nhãn khoa nhi, được Hội Khúc Xạ Nhãn Khoa Quốc Tế (IMI) và Học Viện Nhãn Khoa Hoa Kỳ (AAO) khuyến nghị hàng đầu.'
  },
  {
    id: 'qa-vision-4',
    category: 'Màn Hình & Lối Sống',
    question: 'Minh Anh dùng nhiều điện thoại, xem tivi, máy tính thì cần áp dụng nguyên tắc bảo vệ mắt như thế nào?',
    shortSummary: 'Áp dụng bộ 3 nguyên tắc: Quy tắc 20-20-20, khoảng cách công thái học (Ergonomics) và bổ sung ánh sáng ban ngày ngoài trời >= 90 - 120 phút/ngày.',
    detailedPoints: [
      'Quy tắc 20-20-20: Cứ 20 phút nhìn màn hình điện thoại/máy tính, nhắc em tạm dừng và phóng tầm mắt nhìn xa một vật thể cách 20 feet (~6 mét) trong tối thiểu 20 giây để cơ thể mi được thả lỏng hoàn toàn.',
      'Khoảng cách màn hình: Điện thoại cầm cách mắt tối thiểu 35 - 40cm (không để sát mặt), màn hình máy tính cách mắt 50 - 60cm và đặt thấp hơn tầm mắt 15 độ. Tuyệt đối không dùng điện thoại trong phòng tối tắt đèn.',
      'Ánh sáng ngoài trời (Outdoor Daylight): Cường độ ánh sáng tự nhiên ngoài trời đạt từ 10.000 đến 100.000 lux (so với trong nhà chỉ 300 - 500 lux). Tiếp xúc đủ ánh sáng ban ngày kích thích võng mạc phóng thích Dopamine tự nhiên ức chế tăng độ cận.'
    ],
    clinicalHighlight: 'Tròng kính Defocus kết hợp với thay đổi thói quen nhìn gần và tăng thời gian ngoài trời sẽ tạo ra hiệu quả hiệp đồng (Synergy Effect) bảo vệ mắt tối đa.'
  },
  {
    id: 'qa-vision-5',
    category: 'Lựa Chọn Thương Hiệu',
    question: 'Nên chọn thương hiệu nào cho Minh Anh: Essilor Stellest, Zeiss MyoCare hay Hoya MiYOSMART?',
    shortSummary: 'Cả 3 thương hiệu đều là đỉnh cao thế giới. Với độ tuổi 14 của Minh Anh, Essilor Stellest (công nghệ H.A.L.T) hoặc Zeiss MyoCare S (thiết kế chuyên biệt cho trẻ >= 10 tuổi) là 2 ứng cử viên hoàn hảo nhất.',
    detailedPoints: [
      'Essilor Stellest: Ưu thế về dữ liệu giảm độ cận 67% công bố trên JAMA, lớp phủ Crizal Rock siêu chống trầy xước, dải độ loạn rộng đến -4.00D.',
      'Zeiss MyoCare S: Tối ưu chuyên sâu cho lứa tuổi thanh thiếu niên (10-18 tuổi), giảm thiểu độ nhòe quang sai ngoại vi khi học tập cường độ cao trên máy tính, tích hợp sẵn công nghệ lọc ánh sáng xanh BlueGuard.',
      'Hoya MiYOSMART: Ưu thế về dữ liệu bền bỉ 6 năm và phôi Polycarbonate EyeShield chống vỡ tuyệt đối.',
      'Khuyến nghị: Gia đình nên chọn Essilor Stellest hoặc Zeiss MyoCare S có lớp phủ lọc ánh sáng xanh kỹ thuật số cao cấp.'
    ],
    clinicalHighlight: 'Quan trọng không kém thương hiệu tròng kính là tay nghề bác sĩ khúc xạ đo đúng độ chính xác và kỹ thuật viên mài lắp đúng tâm quang học.'
  },
  {
    id: 'qa-vision-6',
    category: 'Quy Trình Khám Khúc Xạ',
    question: 'Khi đưa Minh Anh đi khám mắt, cần yêu cầu những bước kiểm tra chuyên sâu nào?',
    shortSummary: 'Bắt buộc phải đo khúc xạ khách quan có thể kèm liệt điều tiết (nếu cần), đo sinh trắc trục nhãn cầu (Axial Length Biometry) bằng máy IOL Master và chụp bản đồ giác mạc.',
    detailedPoints: [
      '1. Đo độ dài trục nhãn cầu (Axial Length): Dùng máy sinh trắc quang học không tiếp xúc (như Zeiss IOLMaster hoặc Haag-Streit Lenstar). Đây là chỉ số chuẩn vàng để đánh giá mức độ tiến triển cận thị thật sự, không bị ảnh hưởng bởi co quắp điều tiết.',
      '2. Đo khúc xạ chủ quan & chỉnh trục loạn thị: Kiểm tra độ loạn thị bằng bảng thị lực LogMAR, vòng quay chữ thập quay trục Cyl chính xác đến từng độ.',
      '3. Khám đèn khe sinh hiển vi & đáy mắt: Kiểm tra giác mạc, thể thủy tinh và võng mạc để phát hiện sớm các thoái hóa võng mạc chu biên nếu có.',
      '4. Canh tâm 3D: Đo khoảng cách đồng tử PD và chiều cao tâm đồng tử FH trên chính gọng kính em đã chọn.'
    ],
    clinicalHighlight: 'Đo sinh trắc trục nhãn cầu (Axial Length) là tiêu chuẩn vàng tối thượng để theo dõi sự tăng độ cận thực chất của mắt.',
    doctorQuestionToAsk: 'Bác sĩ cho tôi xin kết quả đo độ dài trục nhãn cầu (Axial Length) của cháu hôm nay là bao nhiêu mm và tốc độ dài trục mắt dự báo trong năm tới?'
  }
];

export const visionScientificReferences = [
  {
    id: 'ref-vis-1',
    category: 'clinical-trial' as const,
    source: 'JAMA Ophthalmology, 2022-2023',
    url: 'https://doi.org/10.1001/jamaophthalmol.2022.0401',
    note: 'Thử nghiệm lâm sàng RCT 3 năm tại ĐH Y Ôn Châu về tròng vi thấu kính phi cầu Stellest.',
    authors: "Bao J, Yang A, Huang Y, Li X, Pan Y, Ding C, et al. (Wenzhou Medical University)",
    title: "One-year and Two-year Clinical Trials of Highly Aspherical Lenslet Target (H.A.L.T.) Spectacle Lenses for Myopia Control",
    journal: "JAMA Ophthalmology",
    year: "2022-2023",
    pmidOrDoi: "doi:10.1001/jamaophthalmol.2022.0401",
    keyTakeaway: "Tròng kính H.A.L.T (Essilor Stellest) làm chậm tiến triển độ cận 67% và kiểm soát trục nhãn cầu 60% khi trẻ đeo kính từ 12h/ngày."
  },
  {
    id: 'ref-vis-2',
    category: 'clinical-trial' as const,
    source: 'British Journal of Ophthalmology (BJO), 2020-2023',
    url: 'https://doi.org/10.1136/bjophthalmol-2018-313739',
    note: 'Nghiên cứu theo dõi dài hạn 6 năm bền vững nhất của ĐH Bách Khoa Hồng Kông PolyU.',
    authors: "Lam CSY, Tang WC, Tse DY, Lee RPK, Chun RKM, To CH. (The Hong Kong Polytechnic University)",
    title: "Defocus Incorporated Multiple Segments (DIMS) spectacle lenses slow myopia progression: a 2-year randomised clinical trial & 6-year follow-up",
    journal: "British Journal of Ophthalmology (BJO)",
    year: "2020-2023",
    pmidOrDoi: "doi:10.1136/bjophthalmol-2018-313739",
    keyTakeaway: "Công nghệ D.I.M.S (Hoya MiYOSMART) kiểm soát 59% độ cận và 60% trục mắt, duy trì hiệu quả an toàn bền vững suốt 6 năm không dội ngược."
  },
  {
    id: 'ref-vis-3',
    category: 'guideline' as const,
    source: 'Investigative Ophthalmology & Visual Science (IOVS), 2021-2024',
    url: 'https://myopiainstitute.org/imi-white-papers/',
    note: 'Báo cáo đồng thuận toàn cầu của các chuyên gia nhãn khoa nhi thế giới.',
    authors: "International Myopia Institute (IMI)",
    title: "IMI Clinical Management Guidelines and Yearly White Papers on Pediatric Myopia Interventions",
    journal: "Investigative Ophthalmology & Visual Science (IOVS)",
    year: "2021-2024",
    pmidOrDoi: "https://myopiainstitute.org/imi-white-papers/",
    keyTakeaway: "Khuyến cáo toàn cầu: Phải kiểm soát cận thị ngay từ giai đoạn khởi phát bằng tròng Defocus, Ortho-K hoặc Atropine, phối hợp lối sống ngoài trời >= 2h/ngày."
  },
  {
    id: 'ref-vis-4',
    category: 'clinical-trial' as const,
    source: 'Ophthalmology (AAO), 2019-2023',
    url: 'https://doi.org/10.1016/j.ophtha.2018.10.050',
    note: 'Nghiên cứu kinh điển LAMP Study về Atropine nồng độ thấp tại Hồng Kông.',
    authors: "Yam JC, Jiang Y, Tang SM, Law AKP, Chan KK, Wong E, et al. (LAMP Study)",
    title: "Low-Concentration Atropine for Myopia Progression (LAMP) Study: A Randomized, Double-Masked Clinical Trial",
    journal: "Ophthalmology (AAO)",
    year: "2019-2023",
    pmidOrDoi: "doi:10.1016/j.ophtha.2018.10.050",
    keyTakeaway: "Thuốc nhỏ mắt Atropine 0.05% cho hiệu quả kiểm soát tiến triển độ cận và trục mắt vượt trội với tác dụng phụ tối thiểu."
  },
  {
    id: 'ref-vis-5',
    category: 'journal' as const,
    source: 'Acta Ophthalmologica, 2017-2022',
    url: 'https://doi.org/10.1111/aos.13403',
    note: 'Tổng quan hệ thống và phân tích gộp về thời gian ngoài trời và kiểm soát cận thị.',
    authors: "Xiong S, Sankaridurg P, Naduvilath T, et al.",
    title: "Time spent in outdoor activities in relation to myopia prevention and control: a meta-analysis and systematic review",
    journal: "Acta Ophthalmologica",
    year: "2017-2022",
    pmidOrDoi: "doi:10.1111/aos.13403",
    keyTakeaway: "Tăng 76 phút ngoài trời mỗi ngày giúp giảm 50% nguy cơ khởi phát cận thị nhờ cơ chế Dopamine quang sinh học từ ánh sáng mặt trời."
  }
];
