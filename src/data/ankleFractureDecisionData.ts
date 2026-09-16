export interface AnkleDecisionStep {
  id: string;
  question: string;
  explanation: string;
  options: {
    label: string;
    description: string;
    nextStepId?: string;
    recommendation?: {
      title: string;
      tier: 'Ưu Tiên Phẫu Thuật Kết Hợp Xương (ORIF)' | 'Chăm Sóc Giảm Phù Nề Chờ Mổ' | 'Điều Trị Bảo Tồn & Theo Dõi Sát' | 'Chuyển Giai Đoạn Phục Hồi Chức Năng';
      actionSteps: string[];
      doctorQuestions: string[];
      expertNote: string;
    };
  }[];
}

export const ankleFractureDecisionTree: Record<string, AnkleDecisionStep> = {
  root: {
    id: 'root',
    question: 'Bác/Cô hiện đang ở giai đoạn nào của quá trình chấn thương mắt cá chân?',
    explanation: 'Giai đoạn chấn thương quyết định hướng xử trí cấp thiết và lộ trình can thiệp.',
    options: [
      {
        label: 'Mới bị té ngã gần đây (Trong vòng 1 - 7 ngày), cổ chân sưng bầm tím, chưa phẫu thuật',
        description: 'Cần đánh giá chỉ định phẫu thuật kết hợp xương và chuẩn bị da cổ chân an toàn.',
        nextStepId: 'step_acute_trauma'
      },
      {
        label: 'Đã được phẫu thuật nẹp vít / bó bột và đang trong quá trình dưỡng thương tại nhà',
        description: 'Cần hướng dẫn lộ trình tập luyện, thời điểm tỳ đè và chăm sóc phục hồi chức năng.',
        nextStepId: 'step_postop_rehab'
      }
    ]
  },
  step_acute_trauma: {
    id: 'step_acute_trauma',
    question: 'Tình trạng sưng nề và da vùng cổ chân hiện tại như thế nào?',
    explanation: 'Mức độ sưng phù của da quyết định thời điểm mổ an toàn để tránh biến chứng toác vết mổ hoặc nhiễm trùng da.',
    options: [
      {
        label: 'Cổ chân sưng to, da căng bóng, có thể có nốt phỏng nước (Blisters) do tụ dịch',
        description: 'Chưa đủ điều kiện rạch da mổ ngay; cần phác đồ giảm sưng tích cực trong 3-5 ngày.',
        recommendation: {
          title: 'Khuyến Nghị: Bất Động Nẹp Bột Kê Cao Chân Giảm Phù Nề → Mổ Sau 3-5 Ngày',
          tier: 'Chăm Sóc Giảm Phù Nề Chờ Mổ',
          actionSteps: [
            'Bất động cổ chân bằng nẹp bột chữ U hoặc nẹp sau cẳng bàn chân có lót đệm êm.',
            'Kê cao chân trên gối cao hơn tim liên tục (Elevation), chườm lạnh gián tiếp 20 phút mỗi 2-3 giờ.',
            'Dùng thuốc chống phù nề (Alpha Chymotrypsin) và thuốc giảm đau theo chỉ định bác sĩ.',
            'Theo dõi da mỗi ngày: Khi nào véo nhẹ da cổ chân thấy xuất hiện các nếp nhăn sinh lý (Dấu hiệu nếp nhăn - Wrinkle Sign) là thời điểm vàng an toàn để tiến hành mổ kết hợp xương ORIF.'
          ],
          doctorQuestions: [
            '"Thưa bác sĩ, chân tôi sưng như thế này thì dự kiến sau bao nhiêu ngày da sẽ đủ an toàn để mổ?"',
            '"Trong thời gian chờ mổ, tôi có cần tiêm thuốc chống đông máu để ngừa cục máu đông ở bắp chân không?"'
          ],
          expertNote: 'Tiêu chuẩn AO Trauma: Tuyệt đối không mổ trên nền da đang căng bóng phù nề cấp tính vì nguy cơ hoại tử mép da và nhiễm trùng vết mổ cao gấp 5 lần.'
        }
      },
      {
        label: 'Cổ chân đã bớt sưng, da mềm có nếp nhăn, phim X-quang/MRI có gãy di lệch hoặc đứt dây chằng',
        description: 'Đã sẵn sàng để tiến hành phẫu thuật kết hợp xương nẹp vít giải phẫu.',
        recommendation: {
          title: 'Khuyến Nghị: Tiến Hành Phẫu Thuật Kết Hợp Xương ORIF & Khâu Tái Tạo Dây Chằng',
          tier: 'Ưu Tiên Phẫu Thuật Kết Hợp Xương (ORIF)',
          actionSteps: [
            'Nhập viện Khoa Chấn Thương Chỉnh Hình (BV Chấn Thương Chỉnh Hình, BV ĐHYD hoặc BV Tâm Anh).',
            'Làm xét nghiệm tiền phẫu (công thức máu, đông máu, chức năng thận, tuyến giáp và điện tim).',
            'Thực hiện phẫu thuật kết hợp xương nẹp khóa Titanium cho mắt cá ngoài, vít xốp cho mắt cá trong và siết khớp chày mác bằng dây neo TightRope / vít định vị.',
            'Sau mổ 48 giờ: Bắt đầu tập co gập ngón chân và gồng cơ đùi trong nẹp bảo vệ.'
          ],
          doctorQuestions: [
            '"Với mật độ xương loãng T-score -2.7 của tôi, bác sĩ sẽ dùng loại nẹp khóa Titanium và vít xốp như thế nào để giữ xương chắc nhất?"',
            '"Tôi có bị đứt dây chằng ATFL hay toác khớp chày mác không, và bác sĩ sẽ xử lý phần dây chằng trong mổ như thế nào?"'
          ],
          expertNote: 'ORIF giúp khôi phục 100% độ khít khao của mộng chày - sên, loại trừ 99% nguy cơ tàn tật và thoái hóa khớp cổ chân sau này.'
        }
      }
    ]
  },
  step_postop_rehab: {
    id: 'step_postop_rehab',
    question: 'Bác/Cô đã mổ được bao nhiêu tuần và kết quả tái khám gần nhất ra sao?',
    explanation: 'Thời gian sau mổ và mức độ can xương trên phim X-quang quyết định mức độ tỳ đè cho phép.',
    options: [
      {
        label: 'Mới mổ được từ 0 đến 4 tuần, chân còn hơi sưng, chưa chụp X-quang kiểm tra can xương',
        description: 'Giai đoạn xương đang trong quá trình liền sinh học ban đầu.',
        recommendation: {
          title: 'Khuyến Nghị: Tuân Thủ Nghiêm Ngặt KHÔNG TỲ ĐÈ (NWB) & Tập Biên Độ Cổ Chân Trong Giày CAM Boot',
          tier: 'Chuyển Giai Đoạn Phục Hồi Chức Năng',
          actionSteps: [
            'Sau 2 tuần cắt chỉ: Chuyển từ nẹp bột sang Giày bảo hộ cổ chân CAM Boot có thể tháo rời.',
            'TUYỆT ĐỐI KHÔNG CHỐNG CHÂN XUỐNG ĐẤT KHI ĐI LẠI (Dùng 2 nạng hoặc xe tập đi hỗ trợ).',
            'Khi ngồi trên giường: Tháo giày CAM boot, tập uốn cổ chân lên - xuống (gập mu, gập lòng) 15-20 lần x 3 đợt/ngày.',
            'Bổ sung Canxi hữu cơ (1000mg/ngày) + D3 + K2 và tiêm/uống thuốc chống đông theo đơn.'
          ],
          doctorQuestions: [
            '"Vết mổ của tôi đã lành tốt chưa và khi nào tôi có thể bắt đầu chống chân nhẹ xuống đất?"',
            '"Tôi tập gập duỗi cổ chân mỗi ngày bao nhiêu lần là tốt nhất?"'
          ],
          expertNote: 'Không được nôn nóng tỳ chân sớm ở giai đoạn này vì nẹp vít có thể bị cong hoặc lún vào xương xốp của người 74 tuổi.'
        }
      },
      {
        label: 'Đã mổ được trên 6 tuần, phim X-quang tái khám cho thấy xương đã có can xương liền tốt',
        description: 'Đã đủ điều kiện an toàn để chuyển sang giai đoạn tỳ đè hoàn toàn và tăng lực cơ.',
        recommendation: {
          title: 'Khuyến Nghị: Tập Tỳ Đè Hoàn Toàn (FWB 100%), Tập Nhón Gót & Tập Thăng Bằng',
          tier: 'Chuyển Giai Đoạn Phục Hồi Chức Năng',
          actionSteps: [
            'Cai dần giày CAM boot trong 1-2 tuần, chuyển sang mang giày thể thao có đệm vòm êm ái.',
            'Bỏ dần từ 2 nạng xuống 1 nạng, rồi bỏ hẳn nạng khi bước đi không còn đau.',
            'Tập bài tập nhón gót 2 chân (Heel raises) và đứng thăng bằng 1 chân cạnh mép tường.',
            'Mang vớ y khoa áp lực ban ngày nếu cổ chân có xu hướng sưng nhẹ vào chiều tối.'
          ],
          doctorQuestions: [
            '"Can xương của tôi đã liền đặc hoàn toàn chưa thưa bác sĩ?"',
            '"Tôi có cần phải mổ tháo nẹp vít sau này không, hay có thể để lại trong chân suốt đời?"'
          ],
          expertNote: 'Ở người cao tuổi, tập phản xạ thăng bằng (Proprioception) quan trọng tương đương với tập cơ, giúp phòng ngừa 100% nguy cơ tái té ngã trong sinh hoạt.'
        }
      }
    ]
  }
};
