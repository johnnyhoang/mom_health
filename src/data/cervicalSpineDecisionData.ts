export interface SpineDecisionStep {
  id: string;
  question: string;
  explanation: string;
  options: {
    label: string;
    description: string;
    nextStepId?: string;
    recommendation?: {
      title: string;
      tier: 'Khẩn Cấp / Ưu Tiên Mổ Sớm' | 'Chuẩn Bị Phẫu Thuật Phiên' | 'Điều Trị Bảo Tồn & Theo Dõi Sát' | 'Khám Cấp Cứu Thần Kinh';
      actionSteps: string[];
      doctorQuestions: string[];
      expertNote: string;
    };
  }[];
}

export const cervicalSpineDecisionTree: Record<string, SpineDecisionStep> = {
  root: {
    id: 'root',
    question: 'Bác/Cô hiện đang có những triệu chứng thần kinh nào nổi bật nhất?',
    explanation: 'Triệu chứng chèn ép tủy cổ (Myelopathy) phản ánh mức độ nguy cấp của dây thần kinh trung ương và quyết định thời điểm can thiệp.',
    options: [
      {
        label: 'Tê bì 2 tay, cài cúc áo/cầm đũa vụng về, đi đứng có cảm giác lảo đảo như đi trên đệm bông',
        description: 'Dấu hiệu kinh điển của Chèn ép tủy cổ (Cervical Spondylotic Myelopathy) do khối thoát vị C3/4 và C5/6.',
        nextStepId: 'step_myelopathy_present'
      },
      {
        label: 'Chủ yếu đau mỏi cổ gáy lan vai/cánh tay, bàn tay còn khéo léo, đi lại vững vàng',
        description: 'Chủ yếu là chèn ép rễ thần kinh cánh tay (Radiculopathy), chưa có biểu hiện tổn thương tủy cổ nặng.',
        nextStepId: 'step_radiculopathy_only'
      }
    ]
  },
  step_myelopathy_present: {
    id: 'step_myelopathy_present',
    question: 'Tình trạng kiểm soát các bệnh lý nền (Cường giáp, Loãng xương) hiện tại?',
    explanation: 'Đánh giá độ sẵn sàng chu phẫu cho bệnh nhân 74 tuổi để đảm bảo an toàn tuyệt đối khi gây mê và liền xương.',
    options: [
      {
        label: 'Đã khám chuyên khoa, tuyến giáp đang dùng thuốc kiểm soát tốt, loãng xương đã có chẩn đoán',
        description: 'Sẵn sàng để bác sĩ Ngoại Thần Kinh (Lầu 8A BV ĐHYD) hội chẩn và xếp lịch mổ ACDF lối trước.',
        recommendation: {
          title: 'Khuyến Nghị: Tiến Hành Phẫu Thuật Giải Ép Lối Trước ACDF 2 Tầng C3/4 & C5/6',
          tier: 'Chuẩn Bị Phẫu Thuật Phiên',
          actionSteps: [
            'Đến khám tại Phòng khám Ngoại Thần Kinh (Lầu 8A - BV Đại Học Y Dược TP.HCM) theo đúng Giấy giới thiệu của PGS.TS Cao Thanh Ngọc.',
            'Làm xét nghiệm kiểm tra nồng độ hormone tuyến giáp (FT3, FT4, TSH) và chức năng đông máu, chức năng thận trước mổ.',
            'Hội chẩn liên khoa Ngoại Thần Kinh - Gây Mê Hồi Sức - Nội Tiết để thống nhất kế hoạch mổ vi phẫu ACDF lối trước.',
            'Mổ ACDF: Rạch da nếp cổ nhỏ 3-4cm, giải phóng tủy cổ C3/4 và C5/6, đặt lồng PEEK + nẹp Titanium khóa bảo vệ.',
            'Sau mổ 24h: Ngồi dậy, tập đi lại nhẹ nhàng với nẹp cổ mềm; xuất viện sau 2-3 ngày.'
          ],
          doctorQuestions: [
            '"Thưa bác sĩ, kết quả MRI của tôi có khối C3/4 chèn ép tủy 5mm và C5/6 3mm, phẫu thuật ACDF lối trước 2 tầng có phải là phương án an toàn và triệt để nhất cho tuổi 74 của tôi không?"',
            '"Tôi có bệnh nền loãng xương T-score -2.7 và cường giáp, bệnh viện sẽ phối hợp nẹp khóa và gây mê như thế nào để đảm bảo an toàn tối đa?"',
            '"Sau mổ bao lâu tôi có thể tự đi lại và sinh hoạt độc lập?"'
          ],
          expertNote: 'AOSpine & AANS khẳng định: Khi đã có chèn ép tủy cổ trên MRI kèm vụng về tay hoặc mất thăng bằng, phẫu thuật ACDF giải ép sớm trước khi tế bào tủy bị nhũn (Myelomalacia) là chìa khóa vàng bảo tồn khả năng vận động suốt đời.'
        }
      },
      {
        label: 'Chưa xét nghiệm lại tuyến giáp gần đây hoặc tim còn hồi hộp, huyết áp chưa ổn định',
        description: 'Cần một bước ổn định nội khoa nhanh chóng trước khi lên bàn mổ.',
        recommendation: {
          title: 'Khuyến Nghị: Ổn Định Nội Khoa Cường Giáp Khẩn Trương Trong 3-5 Ngày → Sau Đó Mổ ACDF',
          tier: 'Chuẩn Bị Phẫu Thuật Phiên',
          actionSteps: [
            'Khám Nội tiết để xét nghiệm khẩn cấp FT3, FT4, TSH; điều chỉnh liều thuốc kháng giáp và thuốc chẹn beta để nhịp tim về mức 70-80 lần/phút.',
            'Khám Tim mạch đo điện tâm đồ và siêu âm tim đánh giá chức năng co bóp cơ tim EF.',
            'Khi các chỉ số đạt trạng thái "Bình giáp" an toàn, chuyển ngay sang Khoa Ngoại Thần Kinh để tiến hành mổ ACDF.'
          ],
          doctorQuestions: [
            '"Chỉ số tuyến giáp của tôi đã đủ an toàn để gây mê phẫu thuật cột sống cổ chưa thưa bác sĩ?"',
            '"Tôi cần duy trì uống thuốc huyết áp và thuốc tuyến giáp vào buổi sáng ngày mổ như thế nào?"'
          ],
          expertNote: 'Kiểm soát nhịp tim và bình giáp giúp loại trừ 99% nguy cơ biến chứng tim mạch trong gây mê ở người 74 tuổi.'
        }
      }
    ]
  },
  step_radiculopathy_only: {
    id: 'step_radiculopathy_only',
    question: 'Mức độ đáp ứng với thuốc giảm đau và vật lý trị liệu cổ nhẹ nhàng?',
    explanation: 'Nếu chưa có dấu hiệu chèn ép tủy nặng và bệnh nhân chỉ đau rễ, có thể thử nghiệm đợt điều trị bảo tồn ngắn ngày có giám sát y khoa chặt chẽ.',
    options: [
      {
        label: 'Đau nhiều, uống thuốc giảm đau thông thường không đỡ, ảnh hưởng giấc ngủ nặng nề',
        description: 'Cơn đau rễ thần kinh kháng trị kèm khối đĩa đệm to chèn ép sát tủy.',
        recommendation: {
          title: 'Khuyến Nghị: Hội Chẩn Phẫu Thuật Sớm ACDF Hoặc Tiêm Phong Bế Rễ Thần Kinh Chọn Lọc',
          tier: 'Chuẩn Bị Phẫu Thuật Phiên',
          actionSteps: [
            'Hội chẩn chuyên gia Ngoại Thần Kinh Cột Sống để cân nhắc mổ ACDF giải ép dứt điểm.',
            'Nếu bệnh nhân muốn trì hoãn mổ vì lý do cá nhân: Có thể xem xét tiêm phong bế rễ thần kinh dưới hướng dẫn C-arm (Selective Nerve Root Block) để cắt đứt cơn đau cấp.',
            'Theo dõi sát dấu hiệu cảnh báo đỏ: Yếu tay, rơi đũa, đi bước thấp bước cao cần phẫu thuật ngay.'
          ],
          doctorQuestions: [
            '"Khối thoát vị C3/4 5mm của tôi nếu không mổ thì nguy cơ chuyển biến xấu đến tủy sống trong vài tháng tới là bao nhiêu %?"',
            '"Nếu tiêm phong bế giảm đau thì hiệu quả kéo dài được bao lâu?"'
          ],
          expertNote: 'Tiêm phong bế chỉ giải quyết cơn đau tạm thời, không làm teo khối thoát vị 5mm đã lọt vào ống sống.'
        }
      },
      {
        label: 'Đau âm ỉ nhẹ, còn chịu đựng được, muốn thử phục hồi chức năng và thuốc trước',
        description: 'Thử nghiệm điều trị nội khoa bảo tồn tối đa 4-6 tuần dưới sự theo dõi sát của bác sĩ thần kinh.',
        recommendation: {
          title: 'Khuyến Nghị: Phác Đồ Bảo Tồn Có Kiểm Soát (Thuốc + Vật Lý Trị Liệu Nhẹ Nhàng)',
          tier: 'Điều Trị Bảo Tồn & Theo Dõi Sát',
          actionSteps: [
            'Dùng thuốc giảm đau thần kinh (Pregabalin/Gabapentin) phối hợp thuốc giãn cơ và vitamin nhóm B liều cao.',
            'Vật lý trị liệu: Nhiệt trị liệu, siêu âm trị liệu, tập kéo giãn cột sống cổ nhẹ nhàng (tuyệt đối KHÔNG bẻ vặn cổ thô bạo).',
            'Tái khám và chụp lại MRI kiểm tra sau 6-8 tuần hoặc ngay khi thấy tê bì tay chân tăng lên.'
          ],
          doctorQuestions: [
            '"Tôi cần theo dõi những dấu hiệu nào tại nhà để biết bệnh đang trở nặng cần đi mổ gấp?"',
            '"Những bài tập hay động tác xoay cổ nào tôi tuyệt đối phải tránh xa?"'
          ],
          expertNote: 'Lưu ý tối thượng: Không đi nắn bóp, bẻ cổ kiểu giật cục tại các cơ sở không phép vì có thể làm dập tủy cổ tức thì do khối thoát vị 5mm đã nằm sát tủy.'
        }
      }
    ]
  }
};
