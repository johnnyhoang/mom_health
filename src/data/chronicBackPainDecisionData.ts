export interface BackPainDecisionNode {
  id: string;
  question: string;
  explanation: string;
  options: {
    label: string;
    description: string;
    nextStepId?: string;
    recommendation?: {
      tier: string;
      title: string;
      summary: string;
      clinicalEtiology: string;
      actionSteps: string[];
      homeCarePlan: string[];
      doctorQuestions: string[];
      evidenceBasis: string;
    };
  }[];
}

export const chronicBackPainDecisionTree: Record<string, BackPainDecisionNode> = {
  root: {
    id: 'root',
    question: 'Đặc điểm cơn đau lưng và phản ứng của cơ thể chị như thế nào?',
    explanation: 'Việc xác định tính chất cơn đau, phản ứng khi xoa bóp/đấm lưng và sự biến thiên theo chu kỳ kinh giúp định vị chính xác nguyên nhân gốc rễ:',
    options: [
      {
        label: 'Đau mạn tính từ năm 25 tuổi, đấm bóp đỡ nhưng ngứa ran, đau tăng mạnh trước kỳ kinh nguyệt',
        description: 'Đặc trưng kinh điển của Hội chứng Đau Cân Cơ (MPS) + Kích thích Thần kinh bì lưng sau (Notalgia Paresthetica) + Đau quy chiếu từ Lạc tuyến cơ tử cung (Adenomyosis/U xơ 45mm).',
        nextStepId: 'step-intervention-level'
      },
      {
        label: 'Đau nhức buốt sâu trong xương, đau liên tục tăng về đêm khi nằm yên, không liên quan kỳ kinh',
        description: 'Dấu hiệu cảnh báo đỏ (Red Flag) cần chụp cộng hưởng từ (MRI) toàn thân hoặc xạ hình xương để tầm soát chuyên sâu.',
        recommendation: {
          tier: 'Nhóm Khám Chuyên Khoa Khẩn Cấp (Red Flag Alert)',
          title: 'Khuyến Nghị Tầm Soát Ung Bướu & Cột Sống Chuyên Sâu',
          summary: 'Đau nhức sâu liên tục tăng về đêm không giảm khi thay đổi tư thế là dấu hiệu cần được Bác sĩ Ung Bướu và Cơ Xương Khớp thăm khám trực tiếp để loại trừ tổn thương xương.',
          clinicalEtiology: 'Cần phân biệt với tổn thương viêm cột sống dính khớp, áp xe ngoài màng cứng hoặc tổn thương thực thể xương.',
          actionSteps: [
            'Khám chuyên khoa Cơ Xương Khớp & Ung Bướu tại Bệnh viện tuyến đầu (ĐHYD / Chợ Rẫy)',
            'Chỉ định chụp MRI cột sống toàn bộ có tiêm thuốc tương phản từ',
            'Xét nghiệm chỉ số viêm máu (CRP, máu lắng ESR) và bilan Calci máu'
          ],
          homeCarePlan: [
            'Tránh các động tác vặn xoắn cột sống mạnh',
            'Theo dõi nhiệt độ cơ thể và các triệu chứng sụt cân không chủ ý'
          ],
          doctorQuestions: [
            'Bác sĩ có thể cho tôi chụp MRI toàn bộ cột sống để kiểm tra xương và tủy sống không?',
            'Các chỉ số viêm máu và phosphatase kiềm của tôi có bình thường không?'
          ],
          evidenceBasis: 'Khuyến cáo thực hành lâm sàng của Hội Cột Sống Bắc Mỹ (NASS) và Mạng lưới Ung Thư Quốc Gia Hoa Kỳ (NCCN).'
        }
      },
      {
        label: 'Chỉ đau mỏi ê ẩm vùng thắt lưng khi ngồi lâu hoặc bê vác nặng, không ngứa ran, không đổi theo kỳ kinh',
        description: 'Đau thắt lưng cơ học đơn thuần do thoái hóa cột sống nhẹ hoặc sai tư thế công thái học.',
        recommendation: {
          tier: 'Nhóm Điều Trị Bảo Tồn & Công Thái Học',
          title: 'Phác Đồ Phục Hồi Đau Thắt Lưng Cơ Học Đơn Thuần',
          summary: 'Tình trạng đau cơ học lành tính do tư thế và thoái hóa nhẹ, đáp ứng rất tốt với việc điều chỉnh ghế ngồi và tập các bài tập cơ lõi.',
          clinicalEtiology: 'Mỏi cơ dựng sống và quá tải đĩa đệm thắt lưng do áp lực ngồi kéo dài.',
          actionSteps: [
            'Áp dụng quy tắc 45 phút: Cứ sau 45 phút ngồi làm việc thì đứng dậy đi lại 2 phút',
            'Tập bài tập McGill Big 3 (Cat-Camel, Bird-Dog, Glute Bridge) 15 phút mỗi ngày',
            'Sử dụng gối tựa thắt lưng công thái học khi ngồi ghế'
          ],
          homeCarePlan: [
            'Chườm ấm thắt lưng 20 phút mỗi tối',
            'Đi bộ đều đặn 30 phút mỗi ngày trên mặt phẳng'
          ],
          doctorQuestions: [
            'Tình trạng thoái hóa cột sống thắt lưng của tôi có cần dùng thuốc đặc trị không hay chỉ cần tập vật lý trị liệu?'
          ],
          evidenceBasis: 'Hướng dẫn điều trị đau thắt lưng cơ học của Hội Thấp Khớp Học Hoa Kỳ (ACR).'
        }
      }
    ]
  },
  'step-intervention-level': {
    id: 'step-intervention-level',
    question: 'Tình trạng kê gối ngủ và các triệu chứng phụ khoa hiện tại của chị ra sao?',
    explanation: 'Để xây dựng lộ trình điều trị kết hợp tối ưu giữa Cơ xương khớp và Phụ khoa:',
    options: [
      {
        label: 'Kê gối ngủ thấy đỡ rõ rệt nhưng thức dậy lại đau; đồng thời đang có rong kinh và u xơ 45mm / Adenomyosis',
        description: 'Trường hợp điển hình của chị: Vòng xoắn bệnh lý đa cơ chế giữa Hội chứng đau cân cơ mạn tính và Đau quy chiếu từ buồng tử cung.',
        recommendation: {
          tier: 'Khuyến Nghị Tối Ưu Hóa Cá Thể Hóa Toàn Diện (Khuyến Nghị Vàng)',
          title: 'Phác Đồ Đa Mô Thức: Giải Phóng Cân Cơ + Kiểm Soát Đau Quy Chiếu Tử Cung + Tối Ưu Tư Thế Giấc Ngủ',
          summary: 'Bệnh nhân có sự kết hợp hoàn hảo giữa 3 yếu tố: (1) Nút thắt cơ dựng sống gây chèn ép thần kinh bì lưng gây ngứa ran; (2) Đau quy chiếu từ Adenomyosis và U xơ 45mm bùng phát trước kỳ kinh; (3) Mất cân bằng chuỗi động lực từ tiền sử cổ vai gáy.',
          clinicalEtiology: 'Hội chứng đau cân cơ mạn tính (từ 25 tuổi) + Kích thích nhánh thần kinh bì lưng sau (Notalgia Paresthetica) + Đau quy chiếu nội tạng - thân thể (Viscero-Somatic Referred Pain) qua dây chằng tử cung - cùng.',
          actionSteps: [
            'Vật lý trị liệu chuyên sâu: Giải phóng màng cân cơ thủ công (Myofascial Release - MFR) và ấn nhả điểm kích hoạt (Trigger Points) dọc rãnh sống lưng',
            'Kiểm soát đau phụ khoa: Sử dụng phác đồ kháng viêm ức chế Prostaglandin trước ngày dự kiến hành kinh 2-3 ngày theo chỉ định của Bác sĩ Phụ khoa',
            'Xử lý dứt điểm nguyên nhân phụ khoa (Lạc tuyến cơ tử cung & U xơ 45mm) qua các lựa chọn điều trị bảo tồn hoặc can thiệp nội soi',
            'Tập luyện chuỗi bài tập ổn định cơ lõi (McGill Big 3: Cat-Camel, Bird-Dog, Glute Bridge) 20 phút mỗi ngày'
          ],
          homeCarePlan: [
            'Kỹ thuật gối ngủ kép chuẩn y khoa: 1 gối mỏng dưới thắt lưng + 1 gối ôm dưới khoeo chân (khi nằm ngửa) hoặc kẹp giữa 2 gối (khi nằm nghiêng)',
            'Chườm ấm ngải cứu / muối gừng vùng thắt lưng và hạ vị 20 phút mỗi tối',
            'Tư thế Gác chân lên tường (Legs-Up-The-Wall) 10-15 phút trước khi ngủ để hồi lưu máu vùng chậu',
            'Bổ sung Magie Glycinate (300-400mg) và Omega-3 giúp giãn cơ và giảm phản ứng viêm Prostaglandin'
          ],
          doctorQuestions: [
            'Thưa Bác sĩ, tình trạng đau thắt lưng tăng mạnh trước kỳ kinh của tôi có phải do đau quy chiếu từ khối u xơ 45mm và Adenomyosis thành sau qua dây chằng tử cung - cùng không?',
            'Tôi có thể kết hợp điều trị giải phóng điểm kích hoạt cơ (Trigger Point Therapy) với điều trị phụ khoa để dứt điểm cơn đau lưng không?',
            'Cảm giác ngứa ran khi xoa bóp đấm lưng của tôi có phải là do kích thích nhánh thần kinh bì lưng sau (Notalgia paresthetica) do cơ lưng co cứng lâu năm không?'
          ],
          evidenceBasis: 'Tổng hợp từ Khuyến cáo Điều Trị Đau Cân Cơ Quốc Tế (IMS), Hướng Dẫn Phụ Khoa ACOG về Lạc Tuyến Cơ Tử Cung & Nghiên Cứu Thần Kinh - Cột Sống Hoa Kỳ.'
        }
      },
      {
        label: 'Triệu chứng phụ khoa đã ổn định sau khi ngưng Tamoxifen, chủ yếu còn đau căng cơ lưng và ngứa ran khi đấm bóp',
        description: 'Tập trung chuyên sâu vào giải phóng màng cân cơ và phục hồi chuỗi động lực trục cột sống.',
        recommendation: {
          tier: 'Phác Đồ Phục Hồi Thần Kinh - Cơ Chuyên Sâu',
          title: 'Liệu Trình Giải Phóng Màng Cân Cơ (MFR) & Tái Lập Đường Cong Sinh Lý',
          summary: 'Tập trung triệt tiêu các dải xơ cứng dọc cơ dựng sống và phục hồi sức mạnh nhóm cơ lõi sâu để giải phóng hoàn toàn các nhánh thần kinh bì.',
          clinicalEtiology: 'Co thắt cơ dựng sống mạn tính và xơ hóa mô liên kết cân cơ dọc cột sống.',
          actionSteps: [
            'Thực hiện liệu trình trị liệu thần kinh - cơ (Neuromuscular Therapy) tại cơ sở vật lý trị liệu uy tín',
            'Tập các bài tập giãn cơ chuỗi sau và tăng cường cơ mông, cơ bụng',
            'Điều chỉnh tư thế làm việc và sinh hoạt'
          ],
          homeCarePlan: [
            'Tự massage giải phóng điểm kích hoạt bằng bóng tennis 10 phút mỗi ngày',
            'Chườm ấm và tập yoga giãn cơ nhẹ nhàng'
          ],
          doctorQuestions: [
            'Bác sĩ Vật lý trị liệu có thể hướng dẫn tôi các kỹ thuật tự giải phóng điểm kích hoạt cơ lưng tại nhà không?'
          ],
          evidenceBasis: 'Khuyến cáo Hội Phục Hồi Chức Năng Hoa Kỳ (AAPM&R).'
        }
      }
    ]
  }
};
