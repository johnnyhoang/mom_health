export interface BreastCancerDecisionStep {
  id: string;
  question: string;
  explanation: string;
  options: {
    label: string;
    description: string;
    nextStepId?: string;
    recommendation?: {
      title: string;
      tier: 'Khuyến Nghị Hoàn Thành 5 Năm & Dừng' | 'Cân Nhắc Kéo Dài 7-10 Năm (EET)' | 'Ưu Tiên Kết Hợp Thuốc Mới CDK4/6' | 'Cần Xét Nghiệm Gen Di Truyền';
      actionSteps: string[];
      doctorQuestions: string[];
      oncologyEvidence: string;
    };
  }[];
}

export const breastCancerClinicalDecisionTree: Record<string, BreastCancerDecisionStep> = {
  root: {
    id: 'root',
    question: 'Chị đã điều trị Tamoxifen được bao lâu và hiện trạng bệnh thế nào?',
    explanation: 'Thời gian dùng thuốc nội tiết và giai đoạn ban đầu quyết định chiến lược tiếp theo theo chuẩn ASCO / NCCN 2024-2026.',
    options: [
      {
        label: 'Đã hoàn thành trọn vẹn 5 năm Tamoxifen (vừa dừng tháng 1/2026) và hiện đang gặp biến chứng phụ khoa (rong kinh, dày niêm mạc)',
        description: 'Đã đạt mốc chuẩn vàng 5 năm, u ban đầu giai đoạn sớm (T1-T2, không hạch hoặc hạch ít), không có dấu hiệu tái phát vú.',
        nextStepId: 'step_finished_5_years'
      },
      {
        label: 'Mới bắt đầu điều trị hoặc đang trong giai đoạn 1 - 3 năm đầu, có hạch di căn hoặc nguy cơ tái phát cao',
        description: 'U kích thước lớn (> 2cm), có hạch nách dương tính hoặc chỉ số phân chia tế bào Ki-67 cao.',
        nextStepId: 'step_high_risk_early'
      }
    ]
  },

  step_finished_5_years: {
    id: 'step_finished_5_years',
    question: 'Nguy cơ ban đầu của khối u vú và biến chứng phụ khoa hiện tại?',
    explanation: 'Cân nhắc giữa lợi ích kéo dài nội tiết (EET) và tác dụng phụ trên tử cung / chất lượng cuộc sống.',
    options: [
      {
        label: 'Khối u ban đầu giai đoạn sớm (T1/T2N0), thụ thể nội tiết dương tính cao, hiện tử cung đang bị rong kinh / dày niêm mạc / u xơ 45mm',
        description: 'Nguy cơ tái phát vú thấp, trong khi biến chứng tử cung do Tamoxifen đang gây mất máu nhiều.',
        recommendation: {
          title: 'Khuyến Nghị: DỪNG TAMOXIFEN TẠI MỐC 5 NĂM & TẬP TRUNG XỬ TRÍ DỨT ĐIỂM TỬ CUNG',
          tier: 'Khuyến Nghị Hoàn Thành 5 Năm & Dừng',
          actionSteps: [
            'Dừng Tamoxifen tại mốc 5 năm (tháng 1/2026) là hoàn toàn đúng phác đồ chuẩn NCCN cho nhóm nguy cơ thấp/trung bình.',
            'Tập trung xử lý dứt điểm tình trạng rong kinh và khối u xơ 45mm / Adenomyosis thành sau (ưu tiên phẫu thuật nội soi bảo tồn buồng trứng).',
            'Chuyển sang chế độ theo dõi định kỳ: Chụp nhũ ảnh + Siêu âm tuyến vú hàng năm tại BV Ung Bướu.',
            'Nếu có điều kiện và muốn chắc chắn 100%, có thể làm xét nghiệm gen Breast Cancer Index (BCI) để kiểm tra xem có cần thiết phải dùng tiếp nội tiết hay không.'
          ],
          doctorQuestions: [
            '"Thưa bác sĩ, với thể bệnh K vú của tôi, việc dừng Tamoxifen ở mốc 5 năm đã đủ tối ưu chưa?"',
            '"Tôi có cần làm xét nghiệm gen BCI hoặc chuyển sang thuốc ức chế men Aromatase (Letrozole) sau này không?"'
          ],
          oncologyEvidence: 'Thử nghiệm EBCTCG và NCCN 2024 chỉ rõ 5 năm Tamoxifen đem lại lợi ích bảo vệ lớn nhất (> 80% tổng hiệu quả bảo vệ 10 năm), trong khi kéo dài thêm 5 năm tiếp theo chỉ đem lại lợi ích nhỏ nhưng làm tăng gấp đôi biến chứng tử cung và tắc mạch.'
        }
      },
      {
        label: 'Ban đầu có nhiều hạch nách dương tính (≥ 4 hạch), muốn tìm hiểu xem có nên uống tiếp thuốc nội tiết loại khác không',
        description: 'Khối u ban đầu thuộc nhóm nguy cơ cao, muốn phòng ngừa tối đa tái phát muộn sau 5 năm.',
        recommendation: {
          title: 'Khuyến Nghị: Chuyển Đổi Sang Thuốc Ức Chế Men Aromatase (Letrozole/Anastrozole) Kéo Dài',
          tier: 'Cân Nhắc Kéo Dài 7-10 Năm (EET)',
          actionSteps: [
            'KHÔNG tiếp tục dùng Tamoxifen để tránh làm nặng thêm tình trạng dày niêm mạc tử cung và u xơ.',
            'Sau khi xử lý xong tử cung (ví dụ sau phẫu thuật cắt tử cung bảo tồn buồng trứng), nếu nồng độ hormone xác nhận đã mãn kinh hoặc kết hợp tiêm Zoladex, có thể chuyển sang uống Letrozole 2.5mg/ngày thêm 2 - 5 năm (Thử nghiệm MA.17R).',
            'Đo mật độ xương DEXA trước khi bắt đầu dùng Aromatase Inhibitor.'
          ],
          doctorQuestions: [
            '"Thưa bác sĩ, nếu tôi chuyển sang uống Letrozole thì thuốc có gây rong kinh hay dày tử cung như Tamoxifen không?"',
            '"Tôi cần theo dõi mật độ xương và khớp như thế nào?"'
          ],
          oncologyEvidence: 'Thuốc ức chế men Aromatase (AI) không có tác dụng phụ kích thích niêm mạc tử cung như Tamoxifen, là lựa chọn kéo dài an toàn cho tử cung.'
        }
      }
    ]
  },

  step_high_risk_early: {
    id: 'step_high_risk_early',
    question: 'Tình trạng thụ thể và các đột biến gen của khối u?',
    explanation: 'Giúp xác định chỉ định kết hợp các thuốc nhắm trúng đích thế hệ mới nhất (CDK4/6i, PARPi, ADCs).',
    options: [
      {
        label: 'K vú HR+/HER2- giai đoạn II-III có nguy cơ cao (khối u > 2cm, Ki-67 ≥ 20% hoặc có hạch)',
        description: 'Muốn tiếp cận các phác đồ mới nhất vừa được FDA phê duyệt năm 2024.',
        recommendation: {
          title: 'Khuyến Nghị: Phối Hợp Thuốc Ức Chế CDK4/6 Mới Nhất (Ribociclib - NATALEE Trial / Abemaciclib - monarchE)',
          tier: 'Ưu Tiên Kết Hợp Thuốc Mới CDK4/6',
          actionSteps: [
            'Tham vấn Bác sĩ Ung bướu về chỉ định dùng Ribociclib 400mg/ngày (Thử nghiệm NATALEE được FDA phê duyệt 09/2024) trong 3 năm kết hợp thuốc nội tiết.',
            'Hoặc dùng Abemaciclib 150mg x 2 lần/ngày trong 2 năm nếu có nhiều hạch nách dương tính (monarchE).',
            'Kiểm tra công thức máu và chức năng gan định kỳ trong quá trình sử dụng.'
          ],
          doctorQuestions: [
            '"Thưa bác sĩ, trường hợp của tôi có đủ tiêu chuẩn tham gia phác đồ phối hợp thuốc ức chế CDK4/6 (Ribociclib / Abemaciclib) theo hướng dẫn NCCN mới nhất không?"',
            '"Chi phí và bảo hiểm y tế cho các thuốc này tại Việt Nam như thế nào?"'
          ],
          oncologyEvidence: 'Thử nghiệm NATALEE và monarchE chứng minh bổ sung CDK4/6i vào phác đồ nội tiết giúp giảm 25-33% nguy cơ tái phát bệnh xâm lấn.'
        }
      },
      {
        label: 'Có tiền sử gia đình nhiều người mắc ung thư vú/buồng trứng hoặc xét nghiệm có đột biến gen BRCA1/2',
        description: 'Nghi ngờ mang đột biến gen di truyền mầm bệnh.',
        recommendation: {
          title: 'Khuyến Nghị: Xét Nghiệm Gen Di Truyền BRCA1/2 & Cân Nhắc Thuốc Ức Chế PARP (Olaparib)',
          tier: 'Cần Xét Nghiệm Gen Di Truyền',
          actionSteps: [
            'Làm xét nghiệm giải trình tự gen BRCA1 và BRCA2 từ mẫu máu.',
            'Nếu mang đột biến gen gBRCA: Cân nhắc uống 1 năm thuốc ức chế PARP Olaparib (Lynparza) theo thử nghiệm OlympiA để giảm 32% nguy cơ tử vong.',
            'Tầm soát kép tuyến vú bằng Chụp cộng hưởng từ MRI tuyến vú hàng năm.'
          ],
          doctorQuestions: [
            '"Thưa bác sĩ, tôi có nên làm xét nghiệm gen BRCA1/2 không?"',
            '"Nếu có đột biến gen BRCA, phác đồ điều trị và bảo vệ các cơ quan khác như thế nào?"'
          ],
          oncologyEvidence: 'Thử nghiệm OlympiA trên tạp chí New England Journal of Medicine (NEJM) khẳng định Olaparib mang lại lợi ích sống còn toàn bộ cho nhóm bệnh nhân mang đột biến BRCA.'
        }
      }
    ]
  }
};
