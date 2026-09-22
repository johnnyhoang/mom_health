export interface NewTreatment2022 {
  id: string;
  name: string;
  drugClass: string;
  approvedYear: string;
  indication: string;
  mainTrial: string;
  trialResults: string;
  sideEffects: string[];
  availableInVietnam: boolean;
  vietnamNote: string;
  luminalARelevance: 'high' | 'medium' | 'low' | 'not-applicable';
  relevanceNote: string;
}

export const newTreatments2022to2026: NewTreatment2022[] = [
  {
    id: 'elacestrant',
    name: 'Elacestrant (Orserdu)',
    drugClass: 'Oral SERD',
    approvedYear: '01/2023',
    indication: 'ER+, HER2- tiến xa/di căn, có đột biến ESR1, sau ít nhất 1 liệu pháp nội tiết',
    mainTrial: 'EMERALD (JCO 2022)',
    trialResults: 'Giảm 45% nguy cơ tiến triển bệnh hoặc tử vong (HR=0.55) so với liệu pháp nội tiết chuẩn ở nhóm có đột biến ESR1.',
    sideEffects: ['Buồn nôn', 'Tăng mỡ máu', 'Đau khớp', 'Mệt mỏi'],
    availableInVietnam: false,
    vietnamNote: 'Chưa được cấp phép rộng rãi, thường phải qua chương trình đặc biệt hoặc mua từ nước ngoài.',
    luminalARelevance: 'high',
    relevanceNote: 'Rất quan trọng cho Luminal A giai đoạn muộn nếu phát sinh đột biến ESR1 sau thời gian dài dùng AI.'
  },
  {
    id: 'capivasertib',
    name: 'Capivasertib (Truqap)',
    drugClass: 'AKT inhibitor',
    approvedYear: '11/2023',
    indication: 'HR+, HER2- tiến xa/di căn có đột biến PIK3CA, AKT1 hoặc PTEN (phối hợp với Fulvestrant)',
    mainTrial: 'CAPItello-291 (NEJM 2023)',
    trialResults: 'PFS 7.3 tháng so với 3.1 tháng (HR=0.50) ở bệnh nhân có đột biến gen tương ứng.',
    sideEffects: ['Tiêu chảy', 'Phát ban', 'Tăng đường huyết'],
    availableInVietnam: false,
    vietnamNote: 'Chưa có sẵn, đang chờ được cấp phép và đưa vào phác đồ tại VN.',
    luminalARelevance: 'high',
    relevanceNote: 'Lựa chọn mới cho Luminal A di căn có đột biến đường tín hiệu PI3K/AKT sau khi kháng nội tiết.'
  },
  {
    id: 'inavolisib',
    name: 'Inavolisib',
    drugClass: 'PI3K inhibitor',
    approvedYear: '10/2024',
    indication: 'HR+, HER2- tiến xa/di căn có đột biến PIK3CA (phối hợp Palbociclib + Fulvestrant)',
    mainTrial: 'INAVO120 (NEJM 2024)',
    trialResults: 'PFS trung bình 15.0 tháng so với 7.3 tháng (HR=0.43) - giảm 57% nguy cơ bệnh tiến triển.',
    sideEffects: ['Tăng đường huyết', 'Tiêu chảy', 'Viêm miệng', 'Phát ban'],
    availableInVietnam: false,
    vietnamNote: 'Thuốc mới phê duyệt cuối 2024, chưa có mặt tại VN.',
    luminalARelevance: 'high',
    relevanceNote: 'Đột biến PIK3CA rất phổ biến ở Luminal A (~40%), đây là lựa chọn cực kỳ hứa hẹn bước 1 giai đoạn muộn.'
  },
  {
    id: 'ribociclib-adj',
    name: 'Ribociclib (Kisqali) - Điều trị bổ trợ',
    drugClass: 'CDK4/6 inhibitor',
    approvedYear: '09/2024',
    indication: 'Bệnh nhân HR+, HER2- giai đoạn sớm có nguy cơ tái phát cao (giai đoạn II-III). Phối hợp nội tiết.',
    mainTrial: 'NATALEE (NEJM 2024)',
    trialResults: 'Cải thiện tỷ lệ sống không bệnh xâm lấn (iDFS) tại 3 năm là 90.4% so với 87.1% (HR=0.748).',
    sideEffects: ['Giảm bạch cầu', 'Kéo dài QT', 'Tăng men gan'],
    availableInVietnam: true,
    vietnamNote: 'Thuốc đã có tại VN, nhưng chỉ định bổ trợ có thể chưa được BHYT thanh toán và chi phí cao.',
    luminalARelevance: 'high',
    relevanceNote: 'Mở rộng chỉ định cho Luminal A/B sớm nguy cơ cao (có hạch hoặc u lớn), dùng trong 3 năm.'
  },
  {
    id: 'abemaciclib-adj',
    name: 'Abemaciclib (Verzenio) - Điều trị bổ trợ',
    drugClass: 'CDK4/6 inhibitor',
    approvedYear: '2021 (Cập nhật dữ liệu 2022-2023)',
    indication: 'HR+, HER2- giai đoạn sớm, có hạch dương tính và nguy cơ cao (Ki67 cao/u lớn).',
    mainTrial: 'monarchE (Lancet Oncol 2023 - 5 year update)',
    trialResults: 'Tại mốc 5 năm, tỷ lệ iDFS cải thiện tuyệt đối 7.6% (HR=0.68) so với chỉ dùng nội tiết đơn thuần.',
    sideEffects: ['Tiêu chảy', 'Mệt mỏi', 'Giảm bạch cầu', 'Huyết khối'],
    availableInVietnam: true,
    vietnamNote: 'Đã có tại các bệnh viện lớn, cần xét nghiệm Ki67 và theo tiêu chuẩn nguy cơ cao.',
    luminalARelevance: 'high',
    relevanceNote: 'Quan trọng cho Luminal A/B nguy cơ cao, dùng trong 2 năm kết hợp nội tiết.'
  },
  {
    id: 'enhertu',
    name: 'Trastuzumab Deruxtecan (Enhertu)',
    drugClass: 'Antibody-Drug Conjugate (ADC)',
    approvedYear: '08/2022',
    indication: 'HER2-low (IHC 1+ hoặc 2+/ISH-) không thể phẫu thuật/di căn, đã dùng hóa trị.',
    mainTrial: 'DESTINY-Breast04 (NEJM 2022)',
    trialResults: 'PFS 9.9 tháng vs 5.1 tháng (HR=0.50). OS 23.4 tháng vs 16.8 tháng (HR=0.64) so với hóa trị ở nhóm HR+.',
    sideEffects: ['Buồn nôn', 'Giảm bạch cầu', 'Viêm phổi mô kẽ (ILD)', 'Rụng tóc'],
    availableInVietnam: true,
    vietnamNote: 'Đã vào VN nhưng chi phí rất cao (hàng trăm triệu/tháng) và chưa có BHYT chi trả.',
    luminalARelevance: 'medium',
    relevanceNote: 'Khoảng 50-60% bệnh nhân Luminal A thuộc nhóm HER2-low, mang lại hy vọng thay thế hóa trị khi kháng nội tiết.'
  },
  {
    id: 'trodelvy',
    name: 'Sacituzumab Govitecan (Trodelvy)',
    drugClass: 'Trop-2 directed ADC',
    approvedYear: '02/2023',
    indication: 'HR+, HER2- di căn đã điều trị ít nhất 1 liệu pháp nội tiết và 2 liệu pháp toàn thân khác.',
    mainTrial: 'TROPICS-02 (Lancet 2023)',
    trialResults: 'Cải thiện OS 14.4 tháng so với 11.2 tháng (HR=0.79) so với hóa trị thông thường.',
    sideEffects: ['Giảm bạch cầu hạt', 'Tiêu chảy', 'Rụng tóc', 'Buồn nôn'],
    availableInVietnam: false,
    vietnamNote: 'Chưa có sẵn chính thức, thường phải qua con đường xách tay/đặc biệt.',
    luminalARelevance: 'medium',
    relevanceNote: 'Dành cho Luminal A giai đoạn rất muộn đã kháng nội tiết và kháng CDK4/6 inhibitor.'
  },
  {
    id: 'datopotamab',
    name: 'Datopotamab Deruxtecan (Dato-DXd)',
    drugClass: 'Trop-2 directed ADC',
    approvedYear: '2024 (Chờ FDA/Dữ liệu mới)',
    indication: 'HR+, HER2- không thể phẫu thuật/di căn, đã từng điều trị hóa trị/nội tiết trước đó.',
    mainTrial: 'TROPION-Breast01 (ESMO 2023 / ASCO 2024)',
    trialResults: 'PFS trung bình 6.9 tháng so với 4.9 tháng (HR=0.63) so với hóa trị ICC. Tác dụng phụ được kiểm soát tốt hơn.',
    sideEffects: ['Viêm niêm mạc miệng', 'Khô mắt', 'Viêm phổi mô kẽ'],
    availableInVietnam: false,
    vietnamNote: 'Đang chờ phê duyệt trên thế giới, chưa có mặt ở VN.',
    luminalARelevance: 'medium',
    relevanceNote: 'Tương tự Trodelvy nhưng có tiềm năng dung nạp tốt hơn ở các bước điều trị muộn.'
  },
  {
    id: 'pembrolizumab',
    name: 'Pembrolizumab (Keytruda)',
    drugClass: 'Anti-PD-1 (Miễn dịch)',
    approvedYear: '2022 (Cập nhật TNBC sớm)',
    indication: 'Ung thư vú bộ ba âm tính (TNBC) giai đoạn sớm nguy cơ cao.',
    mainTrial: 'KEYNOTE-522 (ESMO 2022 / NEJM)',
    trialResults: 'Cải thiện pCR lên 64.8% (vs 51.2%), EFS 3 năm 84.5% vs 76.8% (HR=0.63).',
    sideEffects: ['Viêm tuyến giáp', 'Phát ban', 'Mệt mỏi', 'Rối loạn miễn dịch'],
    availableInVietnam: true,
    vietnamNote: 'Đã có sẵn tại VN và được dùng phổ biến cho nhiều loại ung thư.',
    luminalARelevance: 'not-applicable',
    relevanceNote: 'Chỉ dành cho ung thư vú thể bộ ba âm tính (Triple Negative), không áp dụng cho Luminal A.'
  },
  {
    id: 'olaparib',
    name: 'Olaparib / Talazoparib',
    drugClass: 'PARP inhibitor',
    approvedYear: '2022 (Cập nhật bổ trợ)',
    indication: 'HER2- giai đoạn sớm có đột biến gen BRCA (mầm), sau điều trị chuẩn.',
    mainTrial: 'OlympiA (NEJM 2022 / ASCO update)',
    trialResults: 'OS 4 năm 89.8% vs 86.4% (HR=0.68), giảm 32% nguy cơ tử vong.',
    sideEffects: ['Thiếu máu', 'Buồn nôn', 'Mệt mỏi'],
    availableInVietnam: true,
    vietnamNote: 'Olaparib đã có mặt (Lynparza) nhưng chi phí đắt đỏ, cần xét nghiệm gen BRCA mầm.',
    luminalARelevance: 'low',
    relevanceNote: 'Bệnh nhân Luminal A hiếm khi có đột biến BRCA (thường gặp ở TNBC hơn), nhưng nếu có và thuộc nhóm nguy cơ cao thì sẽ có chỉ định dùng 1 năm.'
  }
];
