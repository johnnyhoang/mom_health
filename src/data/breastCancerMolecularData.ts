export interface BreastCancerSubtype {
  id: string;
  name: string;
  shortName: string;
  vietnameseName: string;
  prevalence: string;
  receptorProfile: {
    er: string;
    pr: string;
    her2: string;
    ki67: string;
  };
  biologicalBehavior: string;
  prognosis: string;
  tamoxifenResponse: string;
  standardTherapy: string[];
  novelTargetedTherapies2024_2026: string[];
}

export const breastCancerSubtypesData: BreastCancerSubtype[] = [
  {
    id: 'luminal-a',
    name: 'Luminal A (Thể Lòng Ống A)',
    shortName: 'Luminal A',
    vietnameseName: 'Thể Nhạy Cảm Nội Tiết Cao - Tiên Lượng Tốt Nhất',
    prevalence: '50% - 60% tổng số ca K vú',
    receptorProfile: {
      er: 'Dương tính (ER+)',
      pr: 'Dương tính (PR+)',
      her2: 'Âm tính (HER2-)',
      ki67: 'Thấp (< 14-20%)'
    },
    biologicalBehavior: 'Tế bào phát triển chậm, phân chia ít, phụ thuộc gần như hoàn toàn vào hormone Estrogen và Progesterone để sinh trưởng.',
    prognosis: 'Tiên lượng sống còn 5 năm và 10 năm cao nhất trong tất cả các phân nhóm (> 90-95% ở giai đoạn sớm). Nguy cơ tái phát muộn sau 5 năm cần được theo dõi.',
    tamoxifenResponse: 'ĐÁP ỨNG XUẤT SẮC VỚI TAMOXIFEN & AI: Tamoxifen khóa thụ thể Estrogen giúp cắt đứt nguồn dinh dưỡng của tế bào u, giảm 40-50% nguy cơ tái phát và giảm 30% tử vong.',
    standardTherapy: [
      'Phẫu thuật bảo tồn tuyến vú hoặc đoạn nhũ + Xạ trị bổ trợ',
      'Liệu pháp nội tiết chuẩn 5 năm (Tamoxifen cho tiền mãn kinh, hoặc Aromatase Inhibitor như Letrozole/Anastrozole cho mãn kinh)',
      'Thường KHÔNG CẦN HÓA TRỊ nếu xét nghiệm gen (Oncotype DX Recurrence Score < 25 hoặc MammaPrint Low Risk)'
    ],
    novelTargetedTherapies2024_2026: [
      'Xét nghiệm BCI (Breast Cancer Index): Đánh giá chính xác xem bệnh nhân có được hưởng lợi từ việc kéo dài Tamoxifen/AI từ 5 năm lên 10 năm hay không.',
      'Ức chế CDK4/6 bổ trợ (Ribociclib - Thử nghiệm NATALEE được FDA phê duyệt 09/2024) cho nhóm có hạch hoặc u > 2cm có nguy cơ tái phát.'
    ]
  },
  {
    id: 'luminal-b-her2-negative',
    name: 'Luminal B (HER2 Âm Tính)',
    shortName: 'Luminal B\nHER2−',
    vietnameseName: 'Thể Lòng Ống B - Phân Chia Nhanh / Ki-67 Cao',
    prevalence: '15% - 20% tổng số ca K vú',
    receptorProfile: {
      er: 'Dương tính (ER+)',
      pr: 'Dương tính (PR-) hoặc thấp',
      her2: 'Âm tính (HER2-)',
      ki67: 'Cao (≥ 20%)'
    },
    biologicalBehavior: 'Tế bào nhạy cảm nội tiết nhưng có tốc độ phân chia nhanh hơn (chỉ số Ki-67 cao), có xu hướng xâm lấn hạch nách sớm hơn Luminal A.',
    prognosis: 'Tiên lượng khá nhưng nguy cơ tái phát trong 5 năm đầu cao hơn Luminal A.',
    tamoxifenResponse: 'Có đáp ứng với Tamoxifen nhưng thường cần kết hợp thêm liệu pháp toàn thân mạnh mẽ hơn (Hóa trị bổ trợ + Ức chế CDK4/6).',
    standardTherapy: [
      'Phẫu thuật + Hóa trị bổ trợ (Phác đồ chứa Anthracycline/Taxane)',
      'Liệu pháp nội tiết: Tamoxifen + Ức chế buồng trứng (OFS - Zoladex) hoặc chuyển đổi sang Aromatase Inhibitor (Letrozole)',
      'Thời gian điều trị nội tiết thường được khuyến cáo kéo dài 7 - 10 năm'
    ],
    novelTargetedTherapies2024_2026: [
      'Thuốc ức chế CDK4/6 (Abemaciclib - monarchE trial hoặc Ribociclib - NATALEE trial FDA 2024): Giảm 25-30% nguy cơ tái phát xâm lấn khi phối hợp với thuốc nội tiết.',
      'Xét nghiệm đột biến gen ESR1, PIK3CA, AKT1 để sẵn sàng cho các thuốc nhắm trúng đích thế hệ mới (Capivasertib, Elacestrant).'
    ]
  },
  {
    id: 'luminal-b-her2-positive',
    name: 'Luminal B (HER2 Dương Tính / Triple Positive)',
    shortName: 'Luminal B\nHER2+',
    vietnameseName: 'Thể Dương Tính Cả 3 Thụ Thể (ER+, PR+, HER2+)',
    prevalence: '10% - 15% tổng số ca K vú',
    receptorProfile: {
      er: 'Dương tính (ER+)',
      pr: 'Dương tính hoặc âm tính',
      her2: 'Dương tính (HER2+)',
      ki67: 'Cao (≥ 20%)'
    },
    biologicalBehavior: 'Chịu sự thúc đẩy kép từ cả thụ thể hormone Estrogen và thụ thể tăng trưởng biểu bì HER2.',
    prognosis: 'Trước đây tiên lượng dè dặt, nhưng hiện nay cải thiện vượt bậc nhờ các thuốc kháng thể đơn dòng nhắm trúng đích HER2.',
    tamoxifenResponse: 'Sử dụng Tamoxifen hoặc AI sau khi đã hoàn thành phác đồ truyền kháng thể nhắm trúng đích HER2.',
    standardTherapy: [
      'Hóa trị kết hợp Kháng thể đơn dòng kép kháng HER2 (Trastuzumab + Pertuzumab)',
      'Phẫu thuật + Xạ trị',
      'Liệu pháp nội tiết duy trì (Tamoxifen hoặc AI) kéo dài sau kháng HER2'
    ],
    novelTargetedTherapies2024_2026: [
      'Kháng thể liên hợp thuốc thế hệ mới: Trastuzumab Emtansine (T-DM1 / Kadcyla) hoặc Trastuzumab Deruxtecan (T-DXd / Enhertu).',
      'Thuốc ức chế Tyrosine Kinase: Tucatinib kết hợp Trastuzumab bảo vệ thần kinh trung ương (ngăn di căn não).'
    ]
  },
  {
    id: 'her2-enriched',
    name: 'HER2-Enriched (HER2 Đơn Thuần)',
    shortName: 'HER2-Enriched',
    vietnameseName: 'Thể HER2 Dương Tính Thuần Túy (ER-, PR-, HER2+)',
    prevalence: '10% - 15% tổng số ca K vú',
    receptorProfile: {
      er: 'Âm tính (ER-)',
      pr: 'Âm tính (PR-)',
      her2: 'Dương tính (HER2+)',
      ki67: 'Cao (≥ 30%)'
    },
    biologicalBehavior: 'Tế bào tăng sinh mạnh mẽ do khuếch đại gen HER2 (ERBB2), không phụ thuộc vào hormone Estrogen.',
    prognosis: 'Rất nhạy cảm với liệu pháp nhắm trúng đích HER2.',
    tamoxifenResponse: 'HOÀN TOÀN KHÔNG DÙNG TAMOXIFEN (do thụ thể Estrogen âm tính ER-).',
    standardTherapy: [
      'Liệu pháp tân bổ trợ / bổ trợ: Hóa trị + Trastuzumab + Pertuzumab',
      'Phẫu thuật triệt căn'
    ],
    novelTargetedTherapies2024_2026: [
      'Trastuzumab Deruxtecan (T-DXd / Enhertu): Đột phá điều trị hàng đầu với tỷ lệ kiểm soát bệnh vượt trội.',
      'Pyrotinib và Margetuximab.'
    ]
  },
  {
    id: 'triple-negative',
    name: 'Triple-Negative Breast Cancer (TNBC)',
    shortName: 'Triple-Negative\n(TNBC)',
    vietnameseName: 'Thể Tam Âm (ER-, PR-, HER2-)',
    prevalence: '10% - 15% tổng số ca K vú',
    receptorProfile: {
      er: 'Âm tính (ER-)',
      pr: 'Âm tính (PR-)',
      her2: 'Âm tính (HER2-)',
      ki67: 'Rất cao (≥ 40-70%)'
    },
    biologicalBehavior: 'Không mang 3 thụ thể thông thường, tế bào phân chia rất nhanh, thường gặp ở người trẻ hoặc mang đột biến gen BRCA1.',
    prognosis: 'Cần điều trị tích cực ngay từ giai đoạn đầu.',
    tamoxifenResponse: 'HOÀN TOÀN KHÔNG DÙNG TAMOXIFEN (không phụ thuộc Estrogen).',
    standardTherapy: [
      'Hóa trị đa chất (Anthracycline, Taxane, Platinum/Carboplatin)',
      'Liệu pháp Miễn dịch (Immunotherapy): Pembrolizumab (Keytruda - Thử nghiệm KEYNOTE-522)',
      'Phẫu thuật và Xạ trị'
    ],
    novelTargetedTherapies2024_2026: [
      'Kháng thể liên hợp thuốc Trop-2: Sacituzumab Govitecan (Trodelvy - Thử nghiệm ASCENT/TROPiCS-02).',
      'Thuốc ức chế PARP (Olaparib, Talazoparib) cho bệnh nhân có đột biến gen BRCA1/2.',
      'Liệu pháp miễn dịch thế hệ mới kết hợp ức chế điểm kiểm soát miễn dịch.'
    ]
  }
];
