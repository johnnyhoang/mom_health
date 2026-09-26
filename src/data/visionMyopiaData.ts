export interface RefractiveExamMilestone {
  id: string;
  date: string;
  facility: string;
  facilityAddress?: string;
  facilityPhone?: string;
  recordNumber?: string;
  patientAge: number;
  diagnosis: string;
  rightEye: {
    uncorrectedVA?: string;
    sphere: string;
    cylinder?: string;
    axis?: string;
    correctedVA?: string;
  };
  leftEye: {
    uncorrectedVA?: string;
    sphere: string;
    cylinder?: string;
    axis?: string;
    correctedVA?: string;
  };
  pd: number; // Pupillary Distance in mm
  lensRecommendation: string;
  lensTypeFitted?: string;
  medicationOrAdvice?: string[];
  doctorOrKtv?: string;
  costVND?: string;
  progressionNote?: string;
}

export interface PatientVisionProfile {
  name: string;
  birthDate: string;
  age: number; // 14 in 2026
  gender: string;
  address: string;
  medicalRecordNo: string;
  detectedAge: number; // 10 in 2022
  currentStatus: string;
  astigmatismNote: string;
  screenTimeHabits: string[];
  keyRiskFactors: string[];
  growthPhase: string;
  examHistory: RefractiveExamMilestone[];
  progressionSummary: {
    totalDurationMonths: number;
    rightEyeSphereChange: string;
    leftEyeSphereChange: string;
    annualProgressionRate: string;
    pdProgression: string;
    riskCategory: string;
    primaryHospitalRecommendation: string;
  };
}

export const minhAnhVisionProfile: PatientVisionProfile = {
  name: "HOÀNG NGỌC MINH ANH",
  birthDate: "19/01/2012",
  age: 14,
  gender: "Nữ",
  address: "621 Bình Thới, Phường 10, Quận 11, TP. Hồ Chí Minh",
  medicalRecordNo: "",
  detectedAge: 10,
  currentStatus: "Cận thị kèm loạn thị mắt trái. Ghi nhận độ cận tăng từ năm 2022 đến 2025.",
  astigmatismNote: "Mắt trái có độ loạn thị (Cylinder -0.75D x 170°).",
  screenTimeHabits: [
    "Sử dụng điện thoại thông minh và máy tính cho việc học tập, giải trí",
    "Thời gian hoạt động ngoài trời ban ngày chưa nhiều"
  ],
  keyRiskFactors: [
    "Độ tuổi 10 - 16 là giai đoạn phát triển thể chất và chiều dài trục nhãn cầu",
    "Tăng độ cận qua các lần đo định kỳ từ năm 2022 đến 2025"
  ],
  growthPhase: "Giai đoạn học đường (10 - 18 tuổi): Cần theo dõi khúc xạ định kỳ 3 - 6 tháng/lần.",
  examHistory: [
    {
      id: "milestone-2022-owndays",
      date: "30/05/2022",
      facility: "OWNDAYS AEON Tân Phú",
      patientAge: 10,
      diagnosis: "Đo khúc xạ máy tự động (Auto Refraction)",
      rightEye: {
        sphere: "-1.25 D",
        cylinder: "-0.25 D",
        axis: "24°"
      },
      leftEye: {
        sphere: "-0.25 D",
        cylinder: "-0.75 D",
        axis: "171°"
      },
      pd: 58,
      lensRecommendation: "Kết quả đo máy khúc xạ tự động (Phiếu tên My My)",
      progressionNote: "Phiếu đo máy (tên My My): MP -1.25D / Cyl -0.25D x 24°; MT -0.25D / Cyl -0.75D x 171°; PD 58mm."
    },
    {
      id: "milestone-2022",
      date: "05/10/2022",
      facility: "Bệnh viện Mắt Cao Thắng",
      facilityAddress: "135B Trần Bình Trọng, P.2, Q.5, TP.HCM",
      facilityPhone: "(+84 28) 3923 9135",
      recordNumber: "96672",
      patientAge: 10,
      diagnosis: "Khô mắt hai mắt (ICD: H52.6). Khúc xạ chưa có độ cận.",
      rightEye: {
        uncorrectedVA: "10-/10",
        sphere: "Plano (0.00D)",
        cylinder: "-0.50 D",
        axis: "50°",
        correctedVA: "10/10"
      },
      leftEye: {
        uncorrectedVA: "10-/10",
        sphere: "Plano (0.00D)",
        cylinder: "-0.50 D",
        axis: "175°",
        correctedVA: "10/10"
      },
      pd: 59,
      lensRecommendation: "Không kính (Chưa cần đeo kính gọng)",
      medicationOrAdvice: [
        "Vismed 0.18% 0.3ml: Nhỏ 2 mắt x 3 lần/ngày x 1 giọt (20 ngày)",
        "EyeBi (Vaccinium Myrtillus): Uống x 1 viên/ngày (30 ngày)",
        "Dặn dò: Nghỉ ngơi thị giác, tái khám khi cần"
      ],
      doctorOrKtv: "BS. Nguyễn Thị Xuân Hương / KTV. Vũ Nguyễn Minh Châu",
      progressionNote: "Thị lực không kính 10-/10. Chưa xuất hiện độ cận."
    },
    {
      id: "milestone-2024",
      date: "20/08/2024",
      facility: "Mắt Kính HMK",
      facilityAddress: "395 - 397 Sư Vạn Hạnh, P.12, Q.10, TP.HCM",
      patientAge: 12,
      diagnosis: "Cận thị hai mắt, mắt trái có loạn thị",
      rightEye: {
        sphere: "-2.50 D",
        correctedVA: "10/10"
      },
      leftEye: {
        sphere: "-1.50 D",
        cylinder: "-0.75 D",
        correctedVA: "10/10"
      },
      pd: 60,
      lensRecommendation: "Kính gọng nhìn xa",
      lensTypeFitted: "Kính đơn tròng",
      progressionNote: "Bắt đầu đeo kính cận: MP -2.50D, MT -1.50D / Loạn -0.75D."
    },
    {
      id: "milestone-2025",
      date: "23/12/2025",
      facility: "Mắt Kính MINH ANH",
      facilityAddress: "543B Minh Phụng, P.10, Q.11, TP.HCM - ĐT: 028 3963 3062",
      patientAge: 13,
      diagnosis: "Cận thị tiến triển hai mắt, mắt trái loạn thị cận",
      rightEye: {
        uncorrectedVA: "1/10",
        sphere: "-3.50 D",
        correctedVA: "10/10"
      },
      leftEye: {
        uncorrectedVA: "2/10",
        sphere: "-2.00 D",
        cylinder: "-0.75 D",
        axis: "170°",
        correctedVA: "10/10"
      },
      pd: 62,
      lensRecommendation: "Kính gọng đeo thường xuyên nhìn xa",
      lensTypeFitted: "Tròng kính 1.60 ASX (Phi cầu / Lọc ánh sáng xanh)",
      doctorOrKtv: "KTV Khúc Xạ Vũ Đoán Chi / Minh Chi",
      progressionNote: "MP: -3.50D (thị lực 1/10); MT: -2.00D / Loạn -0.75D x 170° (thị lực 2/10)."
    }
  ],
  progressionSummary: {
    totalDurationMonths: 43,
    rightEyeSphereChange: "Mắt phải: -1.25D (05/2022) -> Plano (10/2022) -> -2.50D (08/2024) -> -3.50D (12/2025)",
    leftEyeSphereChange: "Mắt trái: -0.25D / Loạn -0.75D x 171° (05/2022) -> -1.50D / Loạn -0.75D (08/2024) -> -2.00D / Loạn -0.75D x 170° (12/2025)",
    annualProgressionRate: "Mức thay đổi độ cận trung bình từ 0.67D đến 1.16D/năm trong giai đoạn 2022 - 2025.",
    pdProgression: "Khoảng cách đồng tử (PD): 58mm (05/2022) -> 59mm (10/2022) -> 60mm (2024) -> 62mm (2025).",
    riskCategory: "Cận thị tiến triển tuổi học đường",
    primaryHospitalRecommendation: "Dữ liệu lưu trữ phục vụ theo dõi khúc xạ định kỳ khi đi khám mắt."
  }
};

export const thuyNgaVisionProfile: PatientVisionProfile = {
  name: "NGUYỄN THỊ THÚY NGA",
  birthDate: "12/06/1981",
  age: 45,
  gender: "Nữ",
  address: "621 Bình Thới, Phường 10, Quận 11, TP. Hồ Chí Minh",
  medicalRecordNo: "",
  detectedAge: 36,
  currentStatus: "Cận thị hai mắt, xuất hiện lão thị nhẹ khi nhìn gần (Add +1.00D).",
  astigmatismNote: "Có độ loạn nhẹ ở mắt phải (01/2023: Cyl -0.25D x 160°).",
  screenTimeHabits: [
    "Làm việc văn phòng, sử dụng điện thoại và máy tính thường xuyên",
    "Có thói quen đeo kính gọng nhìn xa và sử dụng kính nhìn gần khi cần"
  ],
  keyRiskFactors: [
    "Đã bước vào độ tuổi lão thị (> 40 tuổi), cần kết hợp độ nhìn gần (Add)",
    "Độ cận tăng từ -2.00D / -2.25D (2017) lên -3.00D / -3.50D (2023)"
  ],
  growthPhase: "Trưởng thành & Lão thị (> 40 tuổi): Cần kiểm tra thị lực nhìn xa và nhìn gần định kỳ.",
  examHistory: [
    {
      id: "milestone-nga-2017",
      date: "17/06/2017",
      facility: "Mắt Kính MINH ANH",
      facilityAddress: "543B Minh Phụng, P.10, Q.11, TP.HCM",
      patientAge: 36,
      diagnosis: "Cận thị hai mắt",
      rightEye: {
        sphere: "-2.00 D",
        correctedVA: "10/10"
      },
      leftEye: {
        sphere: "-2.25 D",
        correctedVA: "10/10"
      },
      pd: 65,
      lensRecommendation: "Kính gọng nhìn xa",
      doctorOrKtv: "KTV Khúc Xạ Vũ Đoán Thị Minh Châu",
      progressionNote: "MP: -2.00D -> 10/10; MT: -2.25D -> 10/10; PD: 65mm. (In máy kèm: MP -2.25D, MT -2.25D, PD 64mm)."
    },
    {
      id: "milestone-nga-2018",
      date: "13/07/2018",
      facility: "Mắt Kính MINH ANH",
      facilityAddress: "543B Minh Phụng, P.10, Q.11, TP.HCM",
      patientAge: 37,
      diagnosis: "Cận thị hai mắt",
      rightEye: {
        sphere: "-2.00 D",
        correctedVA: "10/10"
      },
      leftEye: {
        sphere: "-2.25 D",
        correctedVA: "10/10"
      },
      pd: 65,
      lensRecommendation: "Kính gọng nhìn xa",
      lensTypeFitted: "Tròng kính VDSC",
      doctorOrKtv: "KTV Khúc Xạ Vũ Đoán Thị Minh Châu / Minh Chi",
      progressionNote: "Đơn kính giữ nguyên: MP -2.00D, MT -2.25D; PD: 65mm. Tròng VDSC."
    },
    {
      id: "milestone-nga-2020",
      date: "28/12/2020",
      facility: "Mắt Kính MINH ANH",
      facilityAddress: "543B Minh Phụng, P.10, Q.11, TP.HCM",
      patientAge: 39,
      diagnosis: "Cận thị hai mắt, ghi nhận độ nhìn gần (Add +1.00D)",
      rightEye: {
        sphere: "-2.25 D",
        correctedVA: "10/10"
      },
      leftEye: {
        sphere: "-2.75 D",
        correctedVA: "10/10"
      },
      pd: 65,
      lensRecommendation: "Kính nhìn xa + Kính nhìn gần (Add +1.00D)",
      lensTypeFitted: "Tròng kính 1.60 ASX",
      doctorOrKtv: "KTV Khúc Xạ Vũ Đoán Thị Minh Châu",
      progressionNote: "MP: -2.25D -> 10/10; MT: -2.75D -> 10/10; Add +1.00D; PD 65mm."
    },
    {
      id: "milestone-nga-2022-apr",
      date: "16/04/2022",
      facility: "OWNDAYS AEON MALL Tân Phú",
      patientAge: 41,
      diagnosis: "Cận thị hai mắt (Thẻ bảo hành C 069093)",
      rightEye: {
        sphere: "-2.25 D",
        correctedVA: "10/10"
      },
      leftEye: {
        sphere: "-2.75 D",
        correctedVA: "10/10"
      },
      pd: 65,
      lensRecommendation: "Tròng kính bảo vệ mắt EyeShield",
      lensTypeFitted: "EyeShield OWNDAYS",
      progressionNote: "Kính gọng kim loại / Kính tím: MP -2.25D, MT -2.75D; PD 65mm."
    },
    {
      id: "milestone-nga-2023-jan",
      date: "10/01/2023",
      facility: "OWNDAYS AEON MALL Tân Phú",
      patientAge: 41,
      diagnosis: "Cận thị hai mắt (Thẻ bảo hành B 044891)",
      rightEye: {
        sphere: "-3.00 D",
        cylinder: "-0.25 D",
        axis: "160°",
        correctedVA: "10/10+"
      },
      leftEye: {
        sphere: "-3.50 D",
        correctedVA: "10/10+"
      },
      pd: 65,
      lensRecommendation: "Đơn kính mới Owndays (MP -3.00D, MT -3.50D)",
      lensTypeFitted: "Tròng kính 1.60 ESL OWNDAYS",
      progressionNote: "Đo máy: MP -3.25D / Cyl -0.25D x 160°; MT -3.75D. Đơn cắt: MP -3.00D, MT -3.50D."
    }
  ],
  progressionSummary: {
    totalDurationMonths: 67,
    rightEyeSphereChange: "Mắt phải: -2.00D (2017) -> -2.00D (2018) -> -2.25D (2020) -> -3.00D (2023)",
    leftEyeSphereChange: "Mắt trái: -2.25D (2017) -> -2.25D (2018) -> -2.75D (2020) -> -3.50D (2023)",
    annualProgressionRate: "Tăng khoảng 0.20D - 0.25D/năm, phù hợp với diễn tiến mắt người trưởng thành.",
    pdProgression: "Khoảng cách đồng tử (PD): 64mm - 65mm (Cố định).",
    riskCategory: "Khúc xạ người trưởng thành & Lão thị",
    primaryHospitalRecommendation: "Dữ liệu lưu trữ phục vụ theo dõi khúc xạ định kỳ khi đi khám mắt."
  }
};

export const trungHoaVisionProfile: PatientVisionProfile = {
  name: "HOÀNG NGỌC TRUNG HÒA",
  birthDate: "26/01/1979",
  age: 47,
  gender: "Nam",
  address: "621 Bình Thới, Phường 10, Quận 11, TP. Hồ Chí Minh",
  medicalRecordNo: "",
  detectedAge: 40,
  currentStatus: "Khúc xạ người trưởng thành, theo dõi dấu hiệu lão thị khi nhìn gần.",
  astigmatismNote: "Cần kiểm tra thị lực và độ loạn thị định kỳ.",
  screenTimeHabits: [
    "Làm việc với máy tính và điện thoại thông minh",
    "Hoạt động sinh hoạt gia đình và lái xe"
  ],
  keyRiskFactors: [
    "Độ tuổi > 45 là giai đoạn xuất hiện lão thị sinh lý",
    "Cần đo khúc xạ nhìn xa và nhìn gần để lựa chọn kính đa tròng hoặc kính đọc sách phù hợp"
  ],
  growthPhase: "Trưởng thành & Trung niên (> 45 tuổi): Theo dõi khúc xạ và nhãn áp định kỳ hàng năm.",
  examHistory: [
    {
      id: "milestone-hoa-2026",
      date: "26/09/2026",
      facility: "Hồ Sơ Gia Đình",
      patientAge: 47,
      diagnosis: "Khúc xạ người trưởng thành (Theo dõi định kỳ)",
      rightEye: {
        sphere: "Định kỳ",
        correctedVA: "10/10"
      },
      leftEye: {
        sphere: "Định kỳ",
        correctedVA: "10/10"
      },
      pd: 64,
      lensRecommendation: "Khám kiểm tra khúc xạ nhìn xa và độ đọc sách nhìn gần",
      progressionNote: "Hồ sơ lưu trữ cá nhân thuộc gia đình Hoàng Ngọc."
    }
  ],
  progressionSummary: {
    totalDurationMonths: 12,
    rightEyeSphereChange: "Mắt phải: Theo dõi định kỳ",
    leftEyeSphereChange: "Mắt trái: Theo dõi định kỳ",
    annualProgressionRate: "Độ khúc xạ ổn định.",
    pdProgression: "Khoảng cách đồng tử (PD): 64mm.",
    riskCategory: "Khúc xạ người trưởng thành",
    primaryHospitalRecommendation: "Dữ liệu lưu trữ phục vụ theo dõi khúc xạ định kỳ khi đi khám mắt."
  }
};

export const familyMembersProfiles: PatientVisionProfile[] = [
  minhAnhVisionProfile,
  thuyNgaVisionProfile,
  trungHoaVisionProfile
];

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
    mechanism: 'Tạo vùng defocus cận thị ngoại vi phía trước võng mạc, gửi tín hiệu làm chậm tốc độ dài ra của trục nhãn cầu.',
    clinicalStudy: {
      institution: 'Đại học Y Ôn Châu phối hợp R&D Essilor',
      journal: 'JAMA Ophthalmology & IOVS',
      sampleDuration: 'Thử nghiệm lâm sàng ngẫu nhiên có đối chứng (RCT) theo dõi 2 - 3 năm',
      efficacyRate: 'Giảm trung bình khoảng 67% độ tăng cận thị (khi đeo >= 12h/ngày so với kính đơn tròng)',
      axialLengthControl: 'Làm chậm khoảng 60% tốc độ dài trục nhãn cầu',
      keyFinding: 'Thích nghi thuận lợi trong những ngày đầu sử dụng; duy trì hiệu quả trong suốt thời gian theo dõi.'
    },
    pros: [
      'Được kiểm chứng qua các nghiên cứu lâm sàng công bố trên JAMA Ophthalmology',
      'Vùng nhìn trung tâm trong suốt 9mm đảm bảo thị lực rõ ràng',
      'Lớp váng Crizal Rock hỗ trợ chống trầy xước và bám bẩn',
      'Có tùy chọn lọc ánh sáng xanh và chống tia UV'
    ],
    cons: [
      'Giá thành cao hơn kính đơn tròng thông thường',
      'Yêu cầu đo tâm đồng tử (PD và chiều cao tâm FH) chính xác'
    ],
    rxRange: {
      sphere: 'Plano đến -10.00D',
      cylinder: 'Đến -4.00D'
    },
    priceRangeVND: '3.980.000 - 4.950.000 VNĐ / cặp',
    bestFitFor: 'Trẻ em và học sinh cận thị tiến triển cần giải pháp kính gọng kiểm soát độ cận.',
    blueFilterFeature: 'Tích hợp tính năng lọc ánh sáng xanh tím từ màn hình thiết bị điện tử.'
  },
  {
    id: 'hoya-miyosmart',
    name: 'Hoya MiYOSMART',
    brand: 'Hoya',
    origin: 'Nhật Bản (Japan)',
    technologyCode: 'D.I.M.S (Defocus Incorporated Multiple Segments)',
    technologyFull: 'Công nghệ vi thấu kính phân đoạn Defocus đa điểm dạng tổ ong',
    mechanism: '396 vi thấu kính nhỏ li ti (+3.50D) bao quanh vùng trung tâm 9.4mm, tạo hiệu ứng defocus cận thị ngoại vi.',
    clinicalStudy: {
      institution: 'Đại học Bách Khoa Hồng Kông (PolyU)',
      journal: 'British Journal of Ophthalmology (BJO) & Theo dõi 6 năm',
      sampleDuration: 'Nghiên cứu lâm sàng 2 năm RCT và kéo dài theo dõi đến 6 năm',
      efficacyRate: 'Giảm khoảng 59% - 60% mức độ tiến triển độ cận',
      axialLengthControl: 'Làm chậm khoảng 60% tốc độ dài trục nhãn cầu',
      keyFinding: 'Dữ liệu theo dõi dài hạn 6 năm ghi nhận hiệu quả ổn định.'
    },
    pros: [
      'Dữ liệu theo dõi lâm sàng dài hạn (6 năm)',
      'Chất liệu Polycarbonate chịu lực tốt (EyeShield), độ bền cao',
      'Vùng nhìn trung tâm rõ ràng, chuyển tiếp mượt mà'
    ],
    cons: [
      'Giá thành cao',
      'Đặt tròng Rx riêng biệt mất từ 5 - 10 ngày'
    ],
    rxRange: {
      sphere: 'Plano đến -10.00D',
      cylinder: 'Đến -4.00D'
    },
    priceRangeVND: '4.500.000 - 5.500.000 VNĐ / cặp',
    bestFitFor: 'Học sinh năng động, cần tròng kính độ bền cao và kiểm soát cận thị đường dài.',
    blueFilterFeature: 'Lớp phủ chống UV, có tùy chọn tròng lọc ánh sáng xanh hoặc đổi màu ngoài trời.'
  },
  {
    id: 'zeiss-myocare',
    name: 'Zeiss MyoCare & MyoCare S',
    brand: 'Carl Zeiss',
    origin: 'Đức (Germany)',
    technologyCode: 'C.A.R.E (Cylindrical Annular Refractive Elements)',
    technologyFull: 'Công nghệ vi thấu kính đồng tâm hình nhẫn khúc xạ hình trụ xen kẽ',
    mechanism: 'Các vòng nhẫn vi khúc xạ hình trụ tạo độ defocus hội tụ trước võng mạc ngoại vi, đồng thời tối ưu hóa quang sai.',
    clinicalStudy: {
      institution: 'Bệnh viện Mắt Ôn Châu phối hợp Carl Zeiss Vision Lab',
      journal: 'Investigative Ophthalmology & Visual Science (IOVS)',
      sampleDuration: 'Thử nghiệm lâm sàng 2 năm',
      efficacyRate: 'Giảm khoảng 63% - 68% tiến triển độ cận',
      axialLengthControl: 'Làm chậm khoảng 58% - 64% sự dài ra của trục nhãn cầu',
      keyFinding: 'Thiết kế MyoCare S tối ưu cho thanh thiếu niên từ 10 tuổi trở lên.'
    },
    pros: [
      'Công nghệ quang học từ thương hiệu Carl Zeiss (Đức)',
      'Có dòng MyoCare S thiết kế riêng cho độ tuổi từ 10-18',
      'Tích hợp công nghệ bảo vệ chống tia UV và ánh sáng xanh BlueGuard'
    ],
    cons: [
      'Cần đo chính xác khoảng cách từ mắt đến tròng kính',
      'Giá thành cao'
    ],
    rxRange: {
      sphere: 'Plano đến -10.00D',
      cylinder: 'Đến -4.00D'
    },
    priceRangeVND: '3.800.000 - 5.200.000 VNĐ / cặp',
    bestFitFor: 'Học sinh THCS/THPT thường xuyên sử dụng máy tính, cần độ trong suốt quang học cao.',
    blueFilterFeature: 'Công nghệ Zeiss BlueGuard hỗ trợ lọc ánh sáng xanh kỹ thuật số.'
  },
  {
    id: 'rodenstock-mycon',
    name: 'Rodenstock MyCon',
    brand: 'Rodenstock',
    origin: 'Đức (Germany)',
    technologyCode: 'Freeform Radial Aspheric Defocus',
    technologyFull: 'Thiết kế vùng giảm độ ngoại vi theo trục thái dương và sống mũi',
    mechanism: 'Tạo độ defocus ở vùng rìa thái dương và sống mũi nhằm hỗ trợ kiểm soát tăng độ cận.',
    clinicalStudy: {
      institution: 'Nghiên cứu lâm sàng tại châu Âu',
      journal: 'European Journal of Ophthalmology',
      sampleDuration: 'Theo dõi 2 - 5 năm',
      efficacyRate: 'Làm chậm tiến triển cận thị khoảng 40% - 50%',
      axialLengthControl: 'Làm chậm khoảng 35% - 45% tốc độ dài trục mắt',
      keyFinding: 'Tròng kính mỏng, thẩm mỹ tốt.'
    },
    pros: [
      'Thương hiệu Rodenstock (Đức)',
      'Bề mặt tròng kính tự nhiên như kính đơn tròng thông thường',
      'Độ mỏng và thẩm mỹ cao'
    ],
    cons: [
      'Tỷ lệ kiểm soát ở mức trung bình so với tròng vi thấu kính thế hệ mới'
    ],
    rxRange: {
      sphere: 'Plano đến -8.00D',
      cylinder: 'Đến -3.00D'
    },
    priceRangeVND: '3.200.000 - 4.600.000 VNĐ / cặp',
    bestFitFor: 'Học sinh cận nhẹ đến vừa, ưu tiên tính thẩm mỹ của tròng kính.',
    blueFilterFeature: 'Có tùy chọn lớp phủ Solitaire Protect Balance 2 lọc ánh sáng xanh.'
  },
  {
    id: 'chemi-myo',
    name: 'Chemi Myo / U2 Myopia Control',
    brand: 'Chemi Lens',
    origin: 'Hàn Quốc (South Korea)',
    technologyCode: 'Aspherical Peripheral Management',
    technologyFull: 'Công nghệ phi cầu quản lý hội tụ vùng rìa',
    mechanism: 'Điều chỉnh công suất vùng rìa nhằm giảm mỏi mắt và hỗ trợ điều tiết khi nhìn gần.',
    clinicalStudy: {
      institution: 'Trung tâm nghiên cứu Chemi R&D',
      journal: 'Korean Ophthalmic Research',
      sampleDuration: '1 - 2 năm',
      efficacyRate: 'Giảm khoảng 30% - 40% tiến triển độ cận',
      axialLengthControl: 'Hỗ trợ kiểm soát một phần trục nhãn cầu',
      keyFinding: 'Giải pháp kinh tế cho học sinh.'
    },
    pros: [
      'Chi phí hợp lý, dễ tiếp cận',
      'Lớp phủ Crystal U2 chống trầy xước và tia UV400',
      'Sẵn có, thời gian gia công nhanh'
    ],
    cons: [
      'Hiệu quả kiểm soát tăng độ cận ở mức khiêm tốn'
    ],
    rxRange: {
      sphere: 'Plano đến -8.00D',
      cylinder: 'Đến -2.00D'
    },
    priceRangeVND: '1.200.000 - 1.800.000 VNĐ / cặp',
    bestFitFor: 'Gia đình có ngân sách vừa phải, cận thị độ nhẹ.',
    blueFilterFeature: 'Tích hợp lớp phủ Perfect UV chặn ánh sáng xanh cơ bản.'
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
    mechanism: "Tạo vùng defocus cận thị ngoại vi phía trước võng mạc, làm chậm kéo dài trục nhãn cầu.",
    efficacy: "Làm chậm khoảng 60% - 67% tiến triển độ cận",
    safetyProfile: "An toàn, không tiếp xúc trực tiếp bề mặt giác mạc.",
    suitabilityForMinhAnh: "Giải pháp kính gọng kiểm soát độ cận và điều chỉnh độ loạn thị đi kèm.",
    costVND: "3.800.000 - 5.500.000 VNĐ / cặp (sử dụng 1 - 2 năm)",
    complianceRequirement: "Đeo kính thường xuyên trong quá trình học tập và sinh hoạt hàng ngày."
  },
  {
    method: "Ortho-K (Orthokeratology)",
    vietnameseName: "Kính Áp Tròng Ban Đêm Định Hình Giác Mạc",
    mechanism: "Kính áp tròng cứng đeo ban đêm khi ngủ để thay đổi tạm thời độ cong giác mạc.",
    efficacy: "Làm chậm khoảng 50% - 60% tiến triển độ cận",
    safetyProfile: "Cần tuân thủ quy trình vệ sinh kính nghiêm ngặt để tránh nguy cơ viêm nhiễm giác mạc.",
    suitabilityForMinhAnh: "Giúp không phải đeo kính gọng ban ngày, yêu cầu sự tự giác vệ sinh kính mỗi tối.",
    costVND: "16.000.000 - 24.000.000 VNĐ / cặp + dung dịch ngâm rửa hàng năm",
    complianceRequirement: "Đeo 7 - 8 tiếng mỗi đêm và vệ sinh ngâm rửa dung dịch chuyên dụng."
  },
  {
    method: "Low-Dose Atropine Eye Drops (0.01% - 0.05%)",
    vietnameseName: "Thuốc Nhỏ Mắt Atropine Nồng Độ Thấp",
    mechanism: "Tác động lên màng bồ đào và củng mạc, hỗ trợ giảm tốc độ dài ra của trục mắt.",
    efficacy: "Làm chậm khoảng 40% - 65% tiến triển độ cận (nồng độ 0.05% ghi nhận hiệu quả tốt)",
    safetyProfile: "An toàn ở liều thấp; một số trẻ có thể nhạy cảm nhẹ với ánh sáng.",
    suitabilityForMinhAnh: "Nhỏ mắt mỗi tối theo chỉ định và theo dõi của bác sĩ chuyên khoa.",
    costVND: "350.000 - 600.000 VNĐ / lọ 1 tháng",
    complianceRequirement: "Nhỏ đều đặn 1 giọt mỗi tối trước khi đi ngủ, tái khám định kỳ."
  },
  {
    method: "Outdoor Daylight Exposure & Ergonomics",
    vietnameseName: "Hoạt Động Ngoài Trời & Thói Quên Sinh Hoạt",
    mechanism: "Ánh sáng tự nhiên kích thích giải phóng Dopamine võng mạc, giúp hỗ trợ kiểm soát độ cận.",
    efficacy: "Hỗ trợ giảm nguy cơ tăng độ cận",
    safetyProfile: "Thói quen sinh hoạt tự nhiên, tốt cho sức khỏe tổng thể.",
    suitabilityForMinhAnh: "Tăng thời gian hoạt động ngoài trời ban ngày và áp dụng thói quen nghỉ ngơi thị giác.",
    costVND: "0 VNĐ",
    complianceRequirement: "Duy trì hoạt động ngoài trời ban ngày và nghỉ mắt ngắt quãng khi học tập."
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
    question: 'Tại sao độ cận thị lại có xu hướng tăng nhanh ở lứa tuổi học sinh?',
    shortSummary: 'Độ tuổi 10 - 16 là giai đoạn phát triển thể chất. Chiều dài trục nhãn cầu (Axial Length) phát triển theo sự tăng trưởng của cơ thể, kết hợp với cường độ học tập nhìn gần nhiều.',
    detailedPoints: [
      'Trục nhãn cầu người trưởng thành dài khoảng 23.5mm - 24.0mm. Khi trục mắt dài thêm 1mm, độ cận tăng thêm khoảng 2.50D - 3.00D.',
      'Kính đơn tròng thông thường đưa ánh sáng trung tâm về đúng võng mạc nhưng ánh sáng ngoại vi hội tụ phía sau võng mạc, tạo tín hiệu kích thích trục mắt tiếp tục dài ra.',
      'Thói quen nhìn gần liên tục và thiếu thời gian hoạt động ngoài trời ban ngày làm gia tăng áp lực điều tiết lên mắt.'
    ],
    clinicalHighlight: 'Tăng độ cận ở trẻ em liên quan trực tiếp đến sự dài ra của trục nhãn cầu.'
  },
  {
    id: 'qa-vision-2',
    category: 'Độ Loạn Thị Đi Kèm',
    question: 'Mắt có độ loạn thị đi kèm thì tròng kính kiểm soát độ cận có đáp ứng được không?',
    shortSummary: 'Tròng kính kiểm soát cận thị hiện nay hỗ trợ độ loạn thị (Cylinder) lên tới -4.00D.',
    detailedPoints: [
      'Loạn thị xảy ra khi bề mặt giác mạc cong không đều ở các kinh tuyến khác nhau.',
      'Kỹ thuật viên sẽ đo và đặt tròng kính kết hợp cả công suất Cận (Sphere), Loạn (Cylinder) và Trục loạn (Axis).',
      'Vùng nhìn trung tâm điều chỉnh thị lực rõ ràng, vùng xung quanh thực hiện chức năng defocus kiểm soát tăng độ.'
    ],
    clinicalHighlight: 'Cần đo khoảng cách đồng tử (PD) và chiều cao tâm kính (FH) chính xác khi mài lắp tròng kính.'
  },
  {
    id: 'qa-vision-3',
    category: 'Nghiên Cứu Khoa Học',
    question: 'Các nghiên cứu khoa học đánh giá hiệu quả của tròng kính Defocus như thế nào?',
    shortSummary: 'Các thử nghiệm lâm sàng ngẫu nhiên công bố trên các tạp chí y khoa (JAMA Ophthalmology, BJO) ghi nhận tròng Defocus giúp làm chậm 59% - 67% độ tăng cận thị.',
    detailedPoints: [
      'Nghiên cứu của Đại học Y Ôn Châu theo dõi tròng Stellest ghi nhận hiệu quả làm chậm tiến triển cận thị 67% khi đeo kính >= 12h/ngày.',
      'Nghiên cứu 6 năm của Đại học Bách Khoa Hồng Kông với tròng MiYOSMART ghi nhận hiệu quả ổn định qua các năm.',
      'Cơ chế chính là tạo tín hiệu defocus cận thị ngoại vi phía trước võng mạc để làm chậm sự kéo dài trục nhãn cầu.'
    ],
    clinicalHighlight: 'Tròng kính Defocus là giải pháp quang học được các hội nhãn khoa quốc tế đưa vào hướng dẫn lâm sàng.'
  },
  {
    id: 'qa-vision-4',
    category: 'Thói Quên Sinh Hoạt',
    question: 'Cần lưu ý những thói quen sinh hoạt nào để bảo vệ thị lực cho học sinh?',
    shortSummary: 'Áp dụng quy tắc nghỉ ngơi thị giác, giữ khoảng cách nhìn chuẩn và tăng thời gian hoạt động ngoài trời ban ngày.',
    detailedPoints: [
      'Quy tắc 20-20-20: Sau 20 phút nhìn màn hình hoặc đọc sách, tạm nghỉ 20 giây nhìn xa khoảng 6 mét.',
      'Khoảng cách thiết bị: Giữ khoảng cách điện thoại 35 - 40cm, màn hình máy tính 50 - 60cm và đảm bảo đủ ánh sáng phòng học.',
      'Thời gian ngoài trời: Dành khoảng 90 - 120 phút mỗi ngày tham gia hoạt động ngoài trời ban ngày.'
    ],
    clinicalHighlight: 'Tăng thời gian hoạt động ngoài trời ban ngày giúp mắt tiếp nhận ánh sáng tự nhiên, tốt cho sự phát triển của nhãn cầu.'
  },
  {
    id: 'qa-vision-5',
    category: 'Lựa Chọn Tròng Kính',
    question: 'Nên cân nhắc những yếu tố nào khi chọn thương hiệu tròng kính kiểm soát cận thị?',
    shortSummary: 'Cần cân nhắc dữ liệu nghiên cứu lâm sàng, độ tuổi phù hợp, tính năng váng phủ và điều kiện kinh tế của gia đình.',
    detailedPoints: [
      'Essilor Stellest: Dữ liệu nghiên cứu công bố trên JAMA Ophthalmology, váng phủ Crizal Rock chống trầy xước.',
      'Zeiss MyoCare S: Thiết kế tối ưu riêng cho lứa tuổi thanh thiếu niên từ 10 tuổi trở lên, tích hợp lọc ánh sáng xanh.',
      'Hoya MiYOSMART: Dữ liệu theo dõi 6 năm, phôi Polycarbonate chịu lực tốt.'
    ],
    clinicalHighlight: 'Đo khúc xạ chính xác và mài lắp đúng tâm quang học là yếu tố quan trọng khi sử dụng tròng kính.'
  },
  {
    id: 'qa-vision-6',
    category: 'Quy Trình Khám Khúc Xạ',
    question: 'Quy trình kiểm tra khúc xạ định kỳ gồm những bước nào?',
    shortSummary: 'Đo khúc xạ chủ quan, đo độ dài trục nhãn cầu (Axial Length Biometry) và khám sức khỏe bề mặt mắt.',
    detailedPoints: [
      '1. Đo độ dài trục nhãn cầu (Axial Length): Sử dụng máy sinh trắc quang học không tiếp xúc (IOLMaster / Lenstar) để theo dõi chiều dài trục mắt.',
      '2. Đo khúc xạ chủ quan: Kiểm tra độ cận, độ loạn và thử thị lực tối đa.',
      '3. Đo tâm kính 3D: Xác định khoảng cách hai đồng tử (PD) và chiều cao tâm kính (FH) trên gọng kính.'
    ],
    clinicalHighlight: 'Đo độ dài trục nhãn cầu là chỉ số quan trọng để đánh giá sự phát triển thực tế của mắt.'
  }
];

export interface DeepScientificInsight {
  id: string;
  topic: string;
  keyMetric: string;
  authoritativeSource: string;
  coreMechanism: string;
  clinicalSignificance: string;
}

export const deepScientificInsights: DeepScientificInsight[] = [
  {
    id: 'insight-bullimore-rule',
    topic: 'Nghiên cứu Bullimore & Brennan: Ý nghĩa của việc giảm độ tăng cận',
    keyMetric: 'Giảm nguy cơ biến chứng võng mạc cho mỗi 1.00D độ cận được giữ lại',
    authoritativeSource: 'Bullimore MA, Brennan NA. Ophthalmic & Physiological Optics (2019)',
    coreMechanism: 'Cận thị độ cao làm kéo căng màng võng mạc và củng mạc. Kiểm soát độ cận giúp hạn chế sự kéo dãn nhãn cầu.',
    clinicalSignificance: 'Mục tiêu kiểm soát cận thị là giữ độ cận ở mức thấp hơn, hạn chế nguy cơ biến chứng mắt khi trưởng thành.'
  },
  {
    id: 'insight-dopamine-photobiology',
    topic: 'Vai trò của ánh sáng tự nhiên và Dopamine võng mạc',
    keyMetric: 'Ánh sáng ngoài trời ban ngày kích thích tế bào Amacrine võng mạc',
    authoritativeSource: 'Rose KA, Morgan IG et al. Progress in Retinal and Eye Research (2018)',
    coreMechanism: 'Ánh sáng mặt trời tự nhiên kích thích võng mạc giải phóng Dopamine, một chất hỗ trợ điều hòa sự phát triển chiều dài nhãn cầu.',
    clinicalSignificance: 'Khẳng định vai trò của thói quen hoạt động ngoài trời ban ngày đối với sức khỏe thị lực lứa tuổi học đường.'
  },
  {
    id: 'insight-axial-biometry',
    topic: 'Đo chiều dài trục nhãn cầu (Axial Length Biometry)',
    keyMetric: 'Độ chính xác cao, theo dõi trực tiếp chiều dài trước - sau của mắt',
    authoritativeSource: 'International Myopia Institute (IMI 2021-2023)',
    coreMechanism: 'Đo trục mắt bằng máy sinh trắc quang học không tiếp xúc (IOLMaster / Lenstar) xác định khoảng cách từ giác mạc đến võng mạc.',
    clinicalSignificance: 'Là công cụ theo dõi sự phát triển thực tế của nhãn cầu qua các lần khám định kỳ.'
  },
  {
    id: 'insight-combination-therapy',
    topic: 'Phối hợp tròng kính Defocus và thuốc nhỏ mắt Atropine nồng độ thấp',
    keyMetric: 'Hỗ trợ kiểm soát tiến triển ở các trường hợp tăng độ nhanh',
    authoritativeSource: 'Nucci C et al. (IOVS 2023), Tan Q et al. (BJO 2023)',
    coreMechanism: 'Tròng kính Defocus tác động bằng quang học ngoại vi, trong khi Atropine nồng độ thấp tác động sinh học theo chỉ định bác sĩ.',
    clinicalSignificance: 'Là lựa chọn phối hợp khi được bác sĩ chuyên khoa đánh giá và chỉ định.'
  },
  {
    id: 'insight-cochrane-sustainability',
    topic: 'Tổng quan hệ thống Cochrane về các phương pháp kiểm soát cận thị',
    keyMetric: 'Đánh giá mức độ bằng chứng y học từ các thử nghiệm lâm sàng',
    authoritativeSource: 'Cochrane Database of Systematic Reviews (Walline JJ et al., 2020)',
    coreMechanism: 'Tròng kính quang học Defocus và Atropine nồng độ thấp được ghi nhận có hiệu quả làm chậm tiến triển độ cận ở trẻ em.',
    clinicalSignificance: 'Cung cấp cơ sở khoa học độc lập cho các phương pháp can thiệp hiện nay.'
  }
];

export interface SingleVsDefocusComparisonItem {
  criteria: string;
  singleVisionLens: string;
  myopiaControlLens: string;
  clinicalImpact: string;
  isDefocusAdvantage: boolean;
}

export const singleVsDefocusComparison: SingleVsDefocusComparisonItem[] = [
  {
    criteria: "Cơ chế quang học",
    singleVisionLens: "Đưa tiêu điểm trung tâm về đúng võng mạc, ánh sáng rìa ngoại vi hội tụ phía sau võng mạc.",
    myopiaControlLens: "Đưa tiêu điểm trung tâm về đúng võng mạc, tạo thêm tiêu điểm cận thị ngoại vi phía trước võng mạc.",
    clinicalImpact: "Kính Defocus tạo tín hiệu quang học hỗ trợ làm chậm sự kéo dài trục nhãn cầu.",
    isDefocusAdvantage: true
  },
  {
    criteria: "Hiệu quả làm chậm tăng độ",
    singleVisionLens: "Điều chỉnh thị lực nhìn rõ, không có cơ chế làm chậm tăng độ.",
    myopiaControlLens: "Làm chậm khoảng 60% – 67% tiến triển độ cận (theo các nghiên cứu lâm sàng).",
    clinicalImpact: "Hỗ trợ giữ độ cận ở mức thấp hơn qua các năm học đường.",
    isDefocusAdvantage: true
  },
  {
    criteria: "Kiểm soát trục nhãn cầu",
    singleVisionLens: "Trục nhãn cầu tiếp tục phát triển theo tự nhiên và sinh hoạt.",
    myopiaControlLens: "Làm chậm khoảng 60% tốc độ dài ra của trục nhãn cầu.",
    clinicalImpact: "Hạn chế sự kéo dãn cơ học của nhãn cầu.",
    isDefocusAdvantage: true
  },
  {
    criteria: "Hỗ trợ loạn thị & Lọc ánh sáng xanh",
    singleVisionLens: "Cắt độ loạn thị bình thường; váng lọc ánh sáng xanh tùy chọn.",
    myopiaControlLens: "Hỗ trợ độ loạn thị lên tới -4.00D; tích hợp các lớp váng bảo vệ mắt.",
    clinicalImpact: "Đáp ứng tốt nhu cầu nhìn rõ và học tập trên máy tính.",
    isDefocusAdvantage: true
  },
  {
    criteria: "Chi phí đầu tư",
    singleVisionLens: "Chi phí thấp, phổ biến ở mọi cửa hàng kính.",
    myopiaControlLens: "Chi phí cao hơn kính đơn tròng.",
    clinicalImpact: "Cần cân nhắc điều kiện kinh tế gia đình.",
    isDefocusAdvantage: false
  },
  {
    criteria: "Yêu cầu mài lắp & Thích nghi",
    singleVisionLens: "Gia công đơn giản, trẻ thích nghi ngay.",
    myopiaControlLens: "Yêu cầu đo tâm đồng tử (PD/FH) chính xác; trẻ cần vài ngày để quen với vùng vi thấu kính.",
    clinicalImpact: "Đòi hỏi kỹ thuật đo mài lắp chính xác.",
    isDefocusAdvantage: false
  }
];

export interface DecisionTreeOption {
  recommendation: string;
  badge: string;
  badgeColor: string;
  targetGroup: string;
  keyCriteria: string[];
  rationale: string;
}

export const decisionTreeMatrix: DecisionTreeOption[] = [
  {
    recommendation: "TRÒNG KÍNH KIỂM SOÁT ĐỘ CẬN (DEFOCUS LENSES)",
    badge: "Lựa Chọn Khuyên Dùng Cho Trẻ Cận Tiến Triển",
    badgeColor: "bg-cyan-950 text-cyan-300 border-cyan-700",
    targetGroup: "Học sinh trong độ tuổi phát triển (8 - 18 tuổi) có độ cận tăng qua các lần khám",
    keyCriteria: [
      "Độ cận tăng qua các lần kiểm tra định kỳ",
      "Phát hiện cận thị ở lứa tuổi học đường",
      "Cường độ học tập và sử dụng thiết bị điện tử nhiều",
      "Mong muốn làm chậm tốc độ tăng độ cận bằng kính gọng"
    ],
    rationale: "Giải pháp kính gọng có bằng chứng lâm sàng về khả năng làm chậm tiến triển độ cận."
  },
  {
    recommendation: "KÍNH CẬN ĐƠN TRÒNG THÔNG THƯỜNG",
    badge: "Phù Hợp Khi Độ Cận Đã Ổn Định",
    badgeColor: "bg-slate-900 text-slate-300 border-slate-700",
    targetGroup: "Người trưởng thành (> 18 tuổi) hoặc người có độ cận không thay đổi",
    keyCriteria: [
      "Độ cận ổn định, không thay đổi trong 1-2 năm",
      "Người trưởng thành trục nhãn cầu đã ngừng phát triển",
      "Nhu cầu nhìn rõ cơ bản với chi phí hợp lý"
    ],
    rationale: "Kính đơn tròng đáp ứng tốt nhu cầu chỉnh khúc xạ khi độ cận không còn xu hướng tăng."
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
    category: 'journal' as const,
    source: 'Ophthalmic & Physiological Optics, 2019',
    url: 'https://doi.org/10.1111/opo.12634',
    note: 'Nghiên cứu nền tảng chứng minh tầm quan trọng của việc giảm từng 1 Diop độ cận.',
    authors: "Bullimore MA, Brennan NA.",
    title: "Myopia Control: Why Each Diopter Matters",
    journal: "Ophthalmic & Physiological Optics (OPO)",
    year: "2019",
    pmidOrDoi: "doi:10.1111/opo.12634",
    keyTakeaway: "Làm chậm tiến triển cận thị chỉ 1 Diop (1.00D) giúp giảm 40% nguy cơ mắc bệnh thoái hóa hoàng điểm cận thị, giảm 20% nguy cơ Glaucoma và giảm 30% nguy cơ bong võng mạc suốt cuộc đời."
  },
  {
    id: 'ref-vis-5',
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
    id: 'ref-vis-6',
    category: 'journal' as const,
    source: 'Cochrane Database of Systematic Reviews, 2020',
    url: 'https://doi.org/10.1002/14651858.CD004916.pub4',
    note: 'Phân tích gộp và tổng quan hệ thống quy mô lớn nhất của Cochrane về các biện pháp can thiệp cận thị.',
    authors: "Walline JJ, Lindsley KB, Vedula SS, Cotter SA, Mutti DO, Ng SM, Twelker JD.",
    title: "Interventions to slow myopia progression in children",
    journal: "Cochrane Database of Systematic Reviews",
    year: "2020",
    pmidOrDoi: "doi:10.1002/14651858.CD004916.pub4",
    keyTakeaway: "Tròng kính quang học Defocus và Atropine nồng độ thấp được chứng minh độc lập có hiệu quả cao và an toàn trong việc làm chậm tiến triển độ cận ở trẻ em."
  },
  {
    id: 'ref-vis-7',
    category: 'journal' as const,
    source: 'Progress in Retinal and Eye Research, 2018',
    url: 'https://doi.org/10.1016/j.preteyeres.2017.12.002',
    note: 'Khám phá cơ chế quang sinh học Dopamine võng mạc dưới tác động của ánh sáng mặt trời.',
    authors: "Rose KA, French AN, Morgan IG.",
    title: "The role of outdoor exposure in myopia prevention and control: Evidence, mechanisms and clinical implications",
    journal: "Progress in Retinal and Eye Research",
    year: "2018",
    pmidOrDoi: "doi:10.1016/j.preteyeres.2017.12.002",
    keyTakeaway: "Ánh sáng tự nhiên (> 10.000 lux) kích thích tế bào Amacrine võng mạc giải phóng Dopamine, ức chế tín hiệu kéo dài củng mạc qua con đường TGF-beta."
  },
  {
    id: 'ref-vis-8',
    category: 'clinical-trial' as const,
    source: 'British Journal of Ophthalmology (BJO), 2023',
    url: 'https://doi.org/10.1136/bjo-2022-321815',
    note: 'Thử nghiệm lâm sàng phối hợp tròng kính Defocus DIMS và Atropine 0.01% ở trẻ cận tiến triển nhanh.',
    authors: "Tan Q, Ng ALK, Cheng GPM, Woo VCP, Cho P.",
    title: "Combined 0.01% atropine with DIMS spectacle lenses for myopia control in children: a 2-year randomised clinical trial",
    journal: "British Journal of Ophthalmology (BJO)",
    year: "2023",
    pmidOrDoi: "doi:10.1136/bjo-2022-321815",
    keyTakeaway: "Phối hợp tròng Defocus với Atropine 0.01% - 0.05% đạt hiệu quả kiểm soát vượt trội 78% so với đơn trị liệu ở trẻ có nguy cơ tiến triển cao."
  },
  {
    id: 'ref-vis-9',
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
