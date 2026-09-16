export interface PersonalizedDecisionStep {
  id: string;
  question: string;
  explanation: string;
  options: {
    label: string;
    description: string;
    nextStepId?: string;
    recommendation?: {
      title: string;
      tier: 'Khẩn Cấp' | 'Ưu Tiên Phẫu Thuật Nội Soi' | 'Ưu Tiên Nội Soi Buồng Tử Cung' | 'Theo Dõi Sát Có Kiểm Soát';
      actionSteps: string[];
      doctorQuestions: string[];
      oncologyNote: string;
    };
  }[];
}

export const tamoxifenClinicalDecisionTree: Record<string, PersonalizedDecisionStep> = {
  root: {
    id: 'root',
    question: 'Tình trạng rong kinh và lượng máu mất hiện tại của chị như thế nào?',
    explanation: 'Mức độ mất máu quyết định tính cấp thiết của việc can thiệp để tránh nguy cơ thiếu máu nghiêm trọng ảnh hưởng đến tim mạch và sức khỏe tổng thể.',
    options: [
      {
        label: 'Rong kinh nhiều tháng, lượng máu nhiều, mệt mỏi, hoa mắt (Dấu hiệu thiếu máu)',
        description: 'Kinh ra ồ ạt, kéo dài trên 10-14 ngày mỗi tháng hoặc ra máu liên tục, cơ thể xanh xao suy nhược.',
        nextStepId: 'step_severity_high'
      },
      {
        label: 'Rong huyết rỉ rả lượng ít hoặc vừa, không đau bụng dữ dội, không quá mệt',
        description: 'Máu ra thấm giọt vài ngày đến 1 tuần sau sạch, huyết sắc tố ổn định.',
        nextStepId: 'step_severity_low'
      }
    ]
  },
  step_severity_high: {
    id: 'step_severity_high',
    question: 'Nguyện vọng bảo tồn tử cung và mục tiêu cuộc sống lâu dài của chị?',
    explanation: 'Ở độ tuổi 45, trên nền đã điều trị K vú 5 năm Tamoxifen, phối hợp cả U xơ 45mm, Adenomyosis và Tăng sản nội mạc.',
    options: [
      {
        label: 'Muốn giải quyết DỨT ĐIỂM 100% vĩnh viễn, không muốn lo sợ rong kinh hay tái phát bệnh lý tử cung nữa',
        description: 'Đã đủ con, mong muốn dứt điểm hoàn toàn mà vẫn giữ nguyên nội tiết tố nữ tự nhiên.',
        recommendation: {
          title: 'Khuyến Nghị: Phẫu Thuật Nội Soi Cắt Tử Cung Toàn Phần - BẢO TỒN 2 BUỒNG TRỨNG',
          tier: 'Ưu Tiên Phẫu Thuật Nội Soi',
          actionSteps: [
            'Hội chẩn giữa Bác sĩ Phụ sản và Bác sĩ Ung bướu điều trị K vú để lên lịch mổ nội soi theo kế hoạch.',
            'Thực hiện phẫu thuật nội soi qua 3 lỗ nhỏ 5-10mm: Cắt bỏ thân tử cung (chứa u xơ 45mm + Adenomyosis) và niêm mạc tăng sản.',
            'GIỮ NGUYÊN HOÀN TOÀN 2 BUỒNG TRỨNG: Cơ thể tiếp tục có estrogen/progesterone tự nhiên, không bị mãn kinh sớm.',
            'Kiểm tra công thức máu và bổ sung viên sắt/truyền sắt nếu có thiếu máu trước mổ.'
          ],
          doctorQuestions: [
            '"Thưa bác sĩ, với tình trạng u xơ 45mm + Adenomyosis thành sau + tăng sản nội mạc sau 5 năm Tamoxifen, phẫu thuật nội soi cắt tử cung bảo tồn 2 buồng trứng có phải là giải pháp dứt điểm tối ưu nhất cho tôi không?"',
            '"Thời gian mổ nội soi và hồi phục dự kiến là bao lâu?"'
          ],
          oncologyNote: 'Phương pháp này hoàn toàn không dùng thuốc nội tiết, an toàn 100% đối với tiền sử ung thư vú.'
        }
      },
      {
        label: 'Mong muốn giữ lại tử cung, ưu tiên can thiệp nhẹ nhàng xâm lấn tối thiểu',
        description: 'Chưa sẵn sàng cho phẫu thuật cắt tử cung, muốn thử phương pháp bảo tồn trước.',
        recommendation: {
          title: 'Khuyến Nghị: Nội Soi Buồng Tử Cung Can Thiệp (Hysteroscopy) & Dùng Thuốc Cầm Máu Cơ Học',
          tier: 'Ưu Tiên Nội Soi Buồng Tử Cung',
          actionSteps: [
            'Thực hiện nội soi buồng tử cung chẩn đoán & cắt gọt sạch các mảng tăng sản/polyp khu trú trong lòng tử cung.',
            'Sử dụng thuốc cầm máu không nội tiết (Tranexamic Acid) trong những ngày ra máu nhiều.',
            'Bổ sung sắt hữu cơ + Acid Folic liều cao để bù lại lượng hồng cầu đã mất.',
            'Siêu âm phụ khoa theo dõi định kỳ mỗi 3 tháng để kiểm tra khối u xơ 45mm và độ dày nội mạc.'
          ],
          doctorQuestions: [
            '"Thưa bác sĩ, nếu tôi chọn nội soi buồng tử cung bóc mảng tăng sản thì nguy cơ rong kinh tái phát do khối u xơ 45mm và Adenomyosis là bao nhiêu %?"',
            '"Tôi cần dùng thuốc bổ máu nào an toàn nhất với tiền sử K vú?"'
          ],
          oncologyNote: 'Không sử dụng thuốc nội tiết estrogen hay progestin toàn thân liều cao khi chưa có chỉ định của bác sĩ ung bướu.'
        }
      }
    ]
  },
  step_severity_low: {
    id: 'step_severity_low',
    question: 'Chị đã hoàn tất sinh thiết giải phẫu bệnh (như kết quả Hùng Vương 15/09/2026 - Tăng sản điển hình)?',
    explanation: 'Kết quả giải phẫu bệnh đã xác nhận 100% LÀNH TÍNH, không có tế bào ung thư hay tiền ung thư.',
    options: [
      {
        label: 'Đã có kết quả giải phẫu bệnh LÀNH TÍNH và muốn tiếp tục theo dõi điều trị nội khoa bảo tồn',
        description: 'Triệu chứng ra máu nhẹ, không gây mất máu nhiều.',
        recommendation: {
          title: 'Khuyến Nghị: Theo Dõi Định Kỳ & Tận Dụng Giai Đoạn Hồi Phục Sau Ngưng Tamoxifen',
          tier: 'Theo Dõi Sát Có Kiểm Soát',
          actionSteps: [
            'Vì đã ngưng Tamoxifen từ tháng 1/2026, tác động kích thích niêm mạc tử cung sẽ giảm dần tự nhiên trong 6-12 tháng tới.',
            'Uống thuốc cầm máu thông thường (Tranexamic Acid) theo đơn bác sĩ nếu những ngày có kinh ra nhiều.',
            'Bổ sung dinh dưỡng giàu sắt (thịt đỏ, rau xanh đậm, đậu, củ dền) và vitamin C.',
            'Tái khám siêu âm đầu dò phụ khoa sau 3 tháng để kiểm tra độ dày nội mạc và kích thước khối cơ thành sau.'
          ],
          doctorQuestions: [
            '"Thưa bác sĩ, sau khi ngưng Tamoxifen tháng 1/2026, dự kiến mất bao lâu để niêm mạc tử cung ổn định trở lại?"',
            '"Khi nào tôi cần quay lại viện ngay lập tức (dấu hiệu cảnh báo đỏ)?"'
          ],
          oncologyNote: 'Tiếp tục tái khám định kỳ chuyên khoa ung bướu vú hàng năm (chụp nhũ ảnh + siêu âm tuyến vú).'
        }
      }
    ]
  }
};
