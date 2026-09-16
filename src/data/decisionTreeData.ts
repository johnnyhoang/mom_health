import type { DecisionNode } from '../types/medical';

export const clinicalDecisionTree: Record<string, DecisionNode> = {
  root: {
    id: 'root',
    question: 'Tình trạng sinh lý và độ tuổi của bệnh nhân là gì?',
    explanation: 'Việc đánh giá nguy cơ và lựa chọn phương pháp chẩn đoán nội mạc tử cung phụ thuộc chặt chẽ vào độ tuổi và tình trạng mãn kinh của người bệnh.',
    options: [
      {
        label: 'Sau mãn kinh (Đã mãn kinh > 12 tháng, bất kể độ tuổi)',
        nextStepId: 'postmenopausal_bleeding'
      },
      {
        label: 'Đang trong độ tuổi sinh sản hoặc Quanh mãn kinh (Còn kinh nguyệt)',
        nextStepId: 'premenopausal_symptoms'
      },
      {
        label: 'Chuẩn bị làm Thụ tinh trong ống nghiệm (IVF) / Khám vô sinh hiếm muộn',
        nextStepId: 'fertility_evaluation'
      }
    ]
  },
  postmenopausal_bleeding: {
    id: 'postmenopausal_bleeding',
    question: 'Bệnh nhân sau mãn kinh có xuất hiện triệu chứng ra máu âm đạo bất thường (PMB) không?',
    explanation: 'Ra máu sau mãn kinh (Postmenopausal Bleeding) là dấu hiệu cảnh báo đỏ kinh điển của Ung thư nội mạc tử cung (gặp ở khoảng 10-15% bệnh nhân có triệu chứng này).',
    options: [
      {
        label: 'Có ra máu âm đạo (dù chỉ là vài giọt dịch hồng hoặc ra máu lượng nhiều)',
        nextStepId: 'pmb_ultrasound'
      },
      {
        label: 'Hoàn toàn không ra máu, chỉ phát hiện tình cờ qua siêu âm định kỳ',
        nextStepId: 'asymptomatic_postmenopausal'
      }
    ]
  },
  pmb_ultrasound: {
    id: 'pmb_ultrasound',
    question: 'Kết quả đo độ dày nội mạc tử cung (ET) trên siêu âm ngả âm đạo (TVUS) là bao nhiêu?',
    explanation: 'Theo khuyến cáo của ACOG và SOGC, ngưỡng cắt (cut-off) 4mm có độ nhạy > 96% để loại trừ ung thư nội mạc tử cung.',
    options: [
      {
        label: 'Độ dày niêm mạc ET ≤ 4 mm (và bề mặt niêm mạc mỏng đều, đồng nhất)',
        recommendation: {
          riskLevel: 'low',
          riskTitle: 'Nguy Cơ Thấp - Khả năng cao do Teo Niêm Mạc Tử Cung (Endometrial Atrophy)',
          evidenceGuideline: 'ACOG Committee Opinion No. 734: Khi ET ≤ 4mm ở phụ nữ sau mãn kinh có ra máu âm đạo, nguy cơ ung thư nội mạc tử cung là < 1/1000.',
          recommendedInvestigations: [
            'Theo dõi lâm sàng sát sao.',
            'Nếu hiện tượng ra máu tái phát lần 2 hoặc kéo dài $\\rightarrow$ Bắt buộc phải tiến hành sinh thiết nội mạc tử cung dù niêm mạc ≤ 4mm.',
            'Kiểm tra cẩn thận tổn thương teo niêm mạc âm đạo / viêm teo cổ tử cung.'
          ],
          urgentActions: [
            'Hẹn tái khám lại sau 4-6 tuần hoặc ngay khi ra máu lại.'
          ]
        }
      },
      {
        label: 'Độ dày niêm mạc ET > 4 mm (hoặc không đo rõ, hoặc phản âm không đồng nhất)',
        recommendation: {
          riskLevel: 'critical',
          riskTitle: 'Nguy Cơ Cao - Chỉ Định Tuyệt Đối Lấy Mẫu Mô Giải Phẫu Bệnh',
          evidenceGuideline: 'ACOG Practice Bulletin #128 & FIGO 2023: Niêm mạc dày > 4mm sau mãn kinh kèm ra máu có nguy cơ ung thư hoặc tiền ung thư từ 15% đến 25%.',
          recommendedInvestigations: [
            'Sinh thiết nội mạc tử cung ngoại trú bằng ống hút Pipelle (First-line).',
            'Nếu kết quả Pipelle không xác định hoặc không đủ mẫu $\\rightarrow$ Chỉ định Nội soi buồng tử cung kết hợp Sinh thiết đích (Hysteroscopy with Directed Biopsy).',
            'Siêu âm bơm nước buồng tử cung (SIS) nếu nghi ngờ có polyp hoặc khối khu trú.'
          ],
          urgentActions: [
            'Thực hiện sinh thiết mô học trong vòng 1-2 tuần, không được trì hoãn.'
          ]
        }
      }
    ]
  },
  asymptomatic_postmenopausal: {
    id: 'asymptomatic_postmenopausal',
    question: 'Độ dày niêm mạc trên siêu âm ở người sau mãn kinh KHÔNG triệu chứng là bao nhiêu?',
    explanation: 'Ở người không có triệu chứng ra máu, ngưỡng cắt sinh thiết thường được nới rộng hơn để tránh can thiệp thủ thuật không cần thiết.',
    options: [
      {
        label: 'Độ dày niêm mạc ET ≤ 11 mm (phản âm đồng nhất, không có mạch máu bất thường)',
        recommendation: {
          riskLevel: 'low',
          riskTitle: 'Nguy Cơ Rất Thấp - Không Cần Can Thiệp Xâm Lấn',
          evidenceGuideline: 'ACOG & SOGC Clinical Consensus: Ở phụ nữ sau mãn kinh không triệu chứng, niêm mạc dày đơn thuần ≤ 11mm mà không có yếu tố nguy cơ thì không cần sinh thiết thường quy.',
          recommendedInvestigations: [
            'Siêu âm kiểm tra lại sau 6-12 tháng.',
            'Dặn dò bệnh nhân đi khám ngay nếu xuất hiện bất kỳ dấu hiệu ra máu âm đạo nào.'
          ],
          urgentActions: [
            'Giáo dục bệnh nhân về dấu hiệu cảnh báo ra máu sau mãn kinh.'
          ]
        }
      },
      {
        label: 'Độ dày niêm mạc ET > 11 mm hoặc có mạch máu phong phú / có dịch đục / đang dùng Tamoxifen',
        recommendation: {
          riskLevel: 'moderate',
          riskTitle: 'Nguy Cơ Trung Bình - Khuyến Cáo Đánh Giá Mô Học Chuyên Sâu',
          evidenceGuideline: 'Khi niêm mạc dày > 11mm hoặc có kèm yếu tố nguy cơ (Tamoxifen, béo phì nặng, hội chứng Lynch), nguy cơ tổn thương tiền ung thư tăng lên rõ rệt.',
          recommendedInvestigations: [
            'Chỉ định siêu âm bơm nước buồng tử cung (SIS) hoặc Nội soi buồng tử cung chẩn đoán.',
            'Lấy mẫu sinh thiết giải phẫu bệnh kiểm tra.'
          ],
          urgentActions: [
            'Đặt lịch hẹn làm thủ thuật chẩn đoán hình ảnh và sinh thiết trong vòng 2-4 tuần.'
          ]
        }
      }
    ]
  },
  premenopausal_symptoms: {
    id: 'premenopausal_symptoms',
    question: 'Bệnh nhân có biểu hiện rối loạn kinh nguyệt hoặc triệu chứng chính nào sau đây?',
    explanation: 'Phân loại nguyên nhân theo hệ thống PALM-COEIN của FIGO (Polyp, Adenomyosis, Leiomyoma, Malignancy / Coagulopathy, Ovulatory, Endometrial, Iatrogenic, Not classified).',
    options: [
      {
        label: 'Rong kinh, cường kinh, kinh nguyệt ra nhiều kéo dài > 8 ngày (AUB / Menorrhagia)',
        nextStepId: 'premenopausal_aub_factors'
      },
      {
        label: 'Thống kinh tiến triển dữ dội, đau khi giao hợp sâu, đau mạn tính vùng chậu',
        recommendation: {
          riskLevel: 'moderate',
          riskTitle: 'Nghi Ngờ Cao Lạc Nội Mạc Tử Cung (Endometriosis) Hoặc Adenomyosis',
          evidenceGuideline: 'ESHRE Endometriosis Guidelines 2022: Thống kinh thứ phát tăng dần kèm đau sâu là chỉ điểm kinh điển của lạc nội mạc thâm nhiễm sâu (DIE) hoặc adenomyosis.',
          recommendedInvestigations: [
            'Siêu âm phụ khoa chuyên sâu ngả âm đạo (Expert TVUS) kiểm tra dấu hiệu trượt tử cung (Sliding sign), nang sô-cô-la buồng trứng và dày vùng JZ.',
            'Chụp MRI vùng chậu nếu nghi ngờ tổn thương DIE xâm lấn niệu quản, trực tràng.',
            'Xét nghiệm chỉ số dự trữ buồng trứng AMH.'
          ],
          urgentActions: [
            'Khởi trị liệu pháp nội khoa bước 1 (Dienogest 2mg/ngày hoặc LNG-IUS Mirena) giảm đau và bảo tồn chức năng sinh sản.'
          ]
        }
      },
      {
        label: 'Thiểu kinh hoặc Vô kinh đột ngột sau nạo hút thai / can thiệp thủ thuật',
        recommendation: {
          riskLevel: 'high',
          riskTitle: 'Nghi Ngờ Cao Hội Chứng Asherman (Dính Buồng Tử Cung)',
          evidenceGuideline: 'AAGL Practice Guideline on Intrauterine Adhesions: Vô kinh hoặc kinh ít sau nạo hút thai là dấu hiệu cảnh báo phá hủy lớp tế bào mầm đáy.',
          recommendedInvestigations: [
            'Siêu âm phụ khoa 3D dựng hình khoang buồng tử cung mặt phẳng trán.',
            'Nội soi buồng tử cung chẩn đoán (Tiêu chuẩn vàng) đánh giá vị trí và mức độ dải dính.'
          ],
          urgentActions: [
            'Lên kế hoạch phẫu thuật nội soi gỡ dính bằng kéo vi phẫu không nhiệt kết hợp liệu pháp hormone Estrogen liều cao sớm để tránh xơ hóa vĩnh viễn.'
          ]
        }
      }
    ]
  },
  premenopausal_aub_factors: {
    id: 'premenopausal_aub_factors',
    question: 'Bệnh nhân có kèm theo yếu tố nguy cơ nào của Tăng sinh / Ung thư niêm mạc không?',
    explanation: 'ACOG khuyến cáo sinh thiết nội mạc tử cung cho bệnh nhân có AUB dưới 45 tuổi nếu có các yếu tố phơi nhiễm Estrogen không đối kháng kéo dài.',
    options: [
      {
        label: 'Tuổi ≥ 45, HOẶC Tuổi < 45 nhưng có Béo phì (BMI ≥ 30) / PCOS / Không rụng trứng mạn tính / Tiền sử gia đình ung thư',
        recommendation: {
          riskLevel: 'high',
          riskTitle: 'Chỉ Định Bắt Buộc Sinh Thiết Nội Mạc Tử Cung (ACOG Level A)',
          evidenceGuideline: 'ACOG Practice Bulletin No. 128: Mọi phụ nữ có AUB từ 45 tuổi trở lên hoặc < 45 tuổi có yếu tố nguy cơ béo phì/PCOS đều phải được sinh thiết loại trừ tổn thương tiền ung thư (EIN) và ung thư.',
          recommendedInvestigations: [
            'Sinh thiết nội mạc tử cung bằng ống Pipelle tại phòng khám.',
            'Siêu âm TVUS đánh giá độ dày và hình thái cấu trúc buồng tử cung.',
            'Nội soi buồng tử cung nếu sinh thiết Pipelle không ra kết quả rõ ràng.'
          ],
          urgentActions: [
            'Thực hiện sinh thiết mô bệnh học trước khi bắt đầu bất kỳ điều trị nội khoa kéo dài nào.'
          ]
        }
      },
      {
        label: 'Tuổi < 45, không béo phì, không có tiền sử bệnh gia đình, chu kỳ kinh tương đối đều',
        recommendation: {
          riskLevel: 'low',
          riskTitle: 'Nguy Cơ Ác Tính Thấp - Ưu Tiên Tìm Tổn Thương Cấu Trúc Lành Tính',
          evidenceGuideline: 'FIGO PALM-COEIN Classification: Khảo sát polyp, u xơ dưới niêm mạc hoặc rối loạn đông máu cơ năng.',
          recommendedInvestigations: [
            'Siêu âm phụ khoa ngả âm đạo (TVUS) $\\pm$ Siêu âm bơm nước (SIS) tìm polyp niêm mạc hoặc nhân xơ tử cung.',
            'Xét nghiệm công thức máu kiểm tra mức độ thiếu máu thiếu sắt.',
            'Xét nghiệm chức năng tuyến giáp (TSH) và Prolactin.'
          ],
          urgentActions: [
            'Điều trị cầm máu và điều hòa kinh nguyệt bằng thuốc tránh thai phối hợp hoặc Progestin chu kỳ.'
          ]
        }
      }
    ]
  },
  fertility_evaluation: {
    id: 'fertility_evaluation',
    question: 'Bệnh nhân đang gặp vấn đề gì trong quá trình điều trị hiếm muộn / IVF?',
    explanation: 'Nội mạc tử cung đóng vai trò quyết định đến 50% sự thành công của một chu kỳ thụ tinh trong ống nghiệm (IVF).',
    options: [
      {
        label: 'Thất bại làm tổ liên tiếp (RIF - Đã chuyển ≥ 2-3 phôi chất lượng tốt nhưng không đậu thai)',
        recommendation: {
          riskLevel: 'high',
          riskTitle: 'Chỉ Định Đánh Giá Toàn Diện Buồng Tử Cung & Viêm Mạn Tính',
          evidenceGuideline: 'ESHRE Good Practice Recommendations for Recurrent Implantation Failure: Tầm soát viêm mạn tính và bất thường cấu trúc là chìa khóa tháo gỡ RIF.',
          recommendedInvestigations: [
            'Nội soi buồng tử cung chẩn đoán kết hợp Sinh thiết nhuộm Hóa mô miễn dịch CD138 phát hiện Viêm nội mạc tử cung mạn tính (Chronic Endometritis).',
            'Xét nghiệm phân tích biểu hiện gen cửa sổ làm tổ (ERA test) xác định thời điểm tiếp nhận phôi tối ưu.',
            'Xét nghiệm hệ vi sinh vật buồng tử cung (EMMA / ALICE test).'
          ],
          urgentActions: [
            'Nếu CD138 dương tính $\\rightarrow$ Điều trị ngay phác đồ Doxycycline 14 ngày cho cả 2 vợ chồng trước khi chuyển phôi tiếp theo.'
          ]
        }
      },
      {
        label: 'Niêm mạc mỏng (< 7mm) kéo dài vào ngày kích trứng hoặc chuẩn bị chuyển phôi',
        recommendation: {
          riskLevel: 'moderate',
          riskTitle: 'Hội Chứng Niêm Mạc Tử Cung Mỏng Kháng Trị',
          evidenceGuideline: 'ASRM Practice Guidelines: Niêm mạc < 7mm làm giảm đáng kể tỷ lệ phôi làm tổ và tăng tỷ lệ sảy thai sớm.',
          recommendedInvestigations: [
            'Siêu âm Doppler màu đánh giá kháng trở động mạch tử cung và lưu lượng tưới máu dưới niêm mạc.',
            'Nội soi buồng tử cung loại trừ dính buồng tử cung vi thể hoặc xơ hóa lớp đáy.'
          ],
          urgentActions: [
            'Áp dụng phác đồ sinh học mới: Bơm huyết tương giàu tiểu cầu tự thân (Intrauterine PRP) 2 lần vào Ngày 10 và 12 chu kỳ, kết hợp Estrogen đa đường dùng (uống + bôi da) và thuốc giãn mạch.'
          ]
        }
      }
    ]
  }
};
