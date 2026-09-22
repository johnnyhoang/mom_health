export interface OutcomeStat {
  id: string;
  year: string;
  title: string;
  source: string; // tên tổ chức/tạp chí thực sự
  keyFindings: string[]; // số liệu cụ thể, thực tế
  population: string; // dân số nghiên cứu
  relevanceToLuminalA: string;
  sourceUrl?: string;
}

export interface VietnamStat {
  id: string;
  title: string;
  source: string;
  year: string;
  findings: string[];
  hospital?: string;
}

export const globalOutcomeStats: OutcomeStat[] = [
  {
    id: "seer-2018-2022",
    year: "2018-2022",
    title: "Tỷ lệ sống 5 năm theo giai đoạn và phân nhóm",
    source: "SEER Database (Surveillance, Epidemiology, and End Results Program)",
    keyFindings: [
      "Tỷ lệ sống sót 5 năm tổng thể đối với ung thư vú khu trú là 99%.",
      "Đối với phân nhóm HR+/HER2- (bao gồm Luminal A), tỷ lệ sống sót sau 5 năm ở giai đoạn 1 và 2 vượt quá 95%.",
      "Bệnh nhân Luminal A có tiên lượng tốt nhất so với các phân nhóm phân tử khác."
    ],
    population: "Phụ nữ Hoa Kỳ",
    relevanceToLuminalA: "Khẳng định tiên lượng rất khả quan cho phân nhóm Luminal A khi phát hiện sớm.",
    sourceUrl: "https://seer.cancer.gov/"
  },
  {
    id: "ebctcg-2023",
    year: "2023",
    title: "Hiệu quả dài hạn của liệu pháp nội tiết",
    source: "EBCTCG (Early Breast Cancer Trialists' Collaborative Group) Meta-analysis",
    keyFindings: [
      "Điều trị Tamoxifen 5 năm giúp giảm một phần ba tỷ lệ tái phát trong 15 năm.",
      "Kéo dài liệu pháp nội tiết lên 10 năm ở một số nhóm nguy cơ mang lại lợi ích sống sót lâu dài.",
      "Rủi ro tái phát muộn (từ năm thứ 5 đến năm thứ 20) vẫn tồn tại đối với ung thư vú HR+, nhấn mạnh sự cần thiết theo dõi dài hạn."
    ],
    population: "Phân tích gộp từ hàng chục nghìn bệnh nhân toàn cầu",
    relevanceToLuminalA: "Tamoxifen và liệu pháp nội tiết là nền tảng điều trị thiết yếu cho Luminal A."
  },
  {
    id: "acs-2024",
    year: "2024",
    title: "Báo cáo thống kê Ung thư thường niên",
    source: "American Cancer Society (ACS)",
    keyFindings: [
      "Tỷ lệ tử vong do ung thư vú đã giảm 42% từ năm 1989 đến nay, phần lớn nhờ phát hiện sớm và điều trị nhắm trúng đích.",
      "Tỷ lệ sống 10 năm của ung thư vú giai đoạn sớm (HR+) hiện lên tới hơn 90%."
    ],
    population: "Phụ nữ tại Mỹ",
    relevanceToLuminalA: "Dữ liệu củng cố mức độ an toàn và thành công của phác đồ hiện tại cho ung thư vú hormone phụ thuộc."
  },
  {
    id: "esmo-rwe-2023",
    year: "2023",
    title: "Hiệu quả CDK4/6i trong thực tế lâm sàng",
    source: "ESMO (European Society for Medical Oncology)",
    keyFindings: [
      "Các chất ức chế CDK4/6 kết hợp liệu pháp nội tiết cải thiện đáng kể thời gian sống bệnh không tiến triển (PFS) và OS ở ung thư vú HR+/HER2- tiến xa.",
      "Dữ liệu đời thực (Real-world data) đồng nhất với kết quả các thử nghiệm lâm sàng ngẫu nhiên."
    ],
    population: "Bệnh nhân ung thư vú tiến xa/di căn HR+/HER2-",
    relevanceToLuminalA: "Cung cấp hy vọng lớn cho các trường hợp bệnh nhân Luminal A chuyển sang giai đoạn muộn."
  },
  {
    id: "globocan-2022",
    year: "2022",
    title: "Thống kê Ung thư Toàn cầu 2022",
    source: "WHO (GLOBOCAN)",
    keyFindings: [
      "Ung thư vú là loại ung thư phổ biến nhất ở nữ giới trên toàn cầu, với hơn 2.3 triệu ca mắc mới.",
      "Tỷ lệ tử vong đang giảm ở các nước phát triển nhưng vẫn cao ở nhiều nước đang phát triển do phát hiện muộn."
    ],
    population: "Toàn cầu",
    relevanceToLuminalA: "Phản ánh bối cảnh chung, trong đó Luminal A chiếm tỷ trọng lớn nhất trong các ca mắc mới."
  },
  {
    id: "asco-2024",
    year: "2024",
    title: "Báo cáo tiến bộ lâm sàng thường niên",
    source: "ASCO (American Society of Clinical Oncology)",
    keyFindings: [
      "Sự cải thiện về tỷ lệ sống toàn bộ (OS) vượt bậc trong thập kỷ qua, đặc biệt nhờ các liệu pháp nhắm trúng đích và tối ưu hóa liệu pháp hormone.",
      "Đánh giá sinh học phân tử (như Oncotype DX) giúp cá thể hóa điều trị hiệu quả hơn, giảm sử dụng hóa trị không cần thiết."
    ],
    population: "Đa dạng các thử nghiệm lâm sàng",
    relevanceToLuminalA: "Chính yếu trong việc quản lý bệnh nhân Luminal A giai đoạn sớm."
  }
];

export const vietnamBreastCancerStats: VietnamStat[] = [
  {
    id: "vn-bvhcm-2023",
    title: "Đặc điểm dịch tễ lâm sàng và kết quả điều trị",
    source: "Báo cáo Bệnh viện Ung Bướu TP.HCM",
    year: "2022-2023",
    findings: [
      "Tỷ lệ bệnh nhân phát hiện ở giai đoạn 1 và 2 ngày càng tăng nhờ các chương trình tầm soát.",
      "Ung thư vú HR+/HER2- chiếm khoảng 60-70% các ca mắc mới.",
      "Tỷ lệ sống sau 5 năm của nhóm giai đoạn sớm được cải thiện đáng kể, tiếp cận mức chung của thế giới."
    ],
    hospital: "Bệnh viện Ung Bướu TP.HCM"
  },
  {
    id: "vn-yt-2023",
    title: "Nghiên cứu tỷ lệ sống sót ở bệnh nhân ung thư vú",
    source: "Tạp chí Y học Việt Nam / Hội Ung thư Việt Nam",
    year: "2023",
    findings: [
      "Bệnh nhân có thụ thể nội tiết dương tính (ER/PR+) có thời gian sống bệnh không tiến triển dài hơn rõ rệt.",
      "Việc tuân thủ liệu pháp nội tiết sau phẫu thuật gặp thách thức ở khoảng 15-20% bệnh nhân do tác dụng phụ, ảnh hưởng đến kết quả dài hạn."
    ]
  },
  {
    id: "vn-moh-2022",
    title: "Tình hình mắc và tử vong do ung thư vú tại Việt Nam",
    source: "Cục Quản lý Khám chữa bệnh - Bộ Y tế",
    year: "2022",
    findings: [
      "Ung thư vú là nguyên nhân tử vong hàng đầu do ung thư ở phụ nữ Việt Nam.",
      "Độ tuổi mắc bệnh ở Việt Nam có xu hướng trẻ hóa hơn so với các nước phương Tây, phổ biến ở nhóm 40-50 tuổi."
    ]
  },
  {
    id: "vn-bachmai-2021",
    title: "Đánh giá hiệu quả hóa trị bổ trợ và nội tiết ung thư vú",
    source: "Bệnh viện Bạch Mai & Bệnh viện K",
    year: "2021",
    findings: [
      "Đa số bệnh nhân HR+ có đáp ứng tốt với các phác đồ nội tiết chuẩn.",
      "Sự đa dạng hóa trong các thuốc ức chế Aromatase và Tamoxifen giúp cá thể hóa lựa chọn dựa trên tình trạng mãn kinh, mang lại kết quả tối ưu."
    ],
    hospital: "Bệnh viện K / Bạch Mai"
  }
];
