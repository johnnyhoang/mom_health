import type { ClinicalTreatmentProtocol } from '../types/medical';

export const clinicalTreatmentProtocols: ClinicalTreatmentProtocol[] = [
  {
    category: 'medical',
    title: 'Phác Đồ Progestin Kiểm Soát Tăng Sinh Niêm Mạc Tử Cung Không Điển Hình',
    targetConditions: ['Tăng sinh nội mạc tử cung không điển hình', 'Rong kinh rong huyết do chu kỳ không phóng noãn'],
    protocolDetails: [
      {
        phase: 'Khởi đầu (Lựa chọn 1 - Ưu tiên hàng đầu)',
        action: 'Đặt Dụng cụ tử cung giải phóng Levonorgestrel (LNG-IUS 52mg / Mirena)',
        dosageOrTechnique: 'Đặt vào buồng tử cung trong vòng 7 ngày đầu của chu kỳ kinh nguyệt',
        monitoring: 'Siêu âm TVUS kiểm tra vị trí vòng sau 4-6 tuần'
      },
      {
        phase: 'Khởi đầu (Lựa chọn 2 - Đường uống)',
        action: 'Medroxyprogesterone Acetate (MPA) hoặc Norethisterone (NETA)',
        dosageOrTechnique: 'MPA 10 - 20 mg/ngày hoặc NETA 10 - 15 mg/ngày uống liên tục hàng ngày trong 6 tháng',
        monitoring: 'Kiểm tra chức năng gan định kỳ và cân nặng'
      },
      {
        phase: 'Đánh giá đáp ứng (Sau 6 tháng)',
        action: 'Sinh thiết lại nội mạc tử cung bằng ống Pipelle hoặc nội soi buồng tử cung',
        dosageOrTechnique: 'Nếu mô bệnh học thoái lui hoàn toàn (Regression) $\\rightarrow$ tiếp tục duy trì LNG-IUS ít nhất 5 năm hoặc chuyển sang progestin chu kỳ; Nếu bệnh dai dẳng $\\rightarrow$ tăng liều progestin hoặc chuyển phẫu thuật cắt tử cung',
        monitoring: 'Sinh thiết kiểm tra mỗi 6 tháng trong 2 năm đầu'
      }
    ],
    successRatesAndOutcomes: 'Tỷ lệ thoái lui bệnh đạt > 90% đối với LNG-IUS và ~70-80% đối với progestin đường uống.',
    sideEffectsAndRisks: [
      'Ra máu thấm giọt bất thường trong 3-6 tháng đầu đặt vòng LNG-IUS (hiện tượng sinh lý bình thường)',
      'Tăng cân nhẹ, giữ nước, căng tức ngực, thay đổi tâm trạng khi dùng progestin đường uống'
    ],
    keyReferences: [
      'RCOG / BSGE Green-top Guideline No. 67 (2020)',
      'ACOG Practice Bulletin No. 128'
    ]
  },
  {
    category: 'medical',
    title: 'Phác Đồ Kháng Sinh Đặc Hiệu Điều Trị Viêm Nội Mạc Tử Cung Mạn Tính (Chronic Endometritis)',
    targetConditions: ['Viêm nội mạc tử cung mạn tính (CD138+)', 'Thất bại làm tổ liên tiếp (RIF)', 'Sảy thai liên tiếp (RPL)'],
    protocolDetails: [
      {
        phase: 'Đợt 1 (First-line Regimen)',
        action: 'Kháng sinh nhóm Tetracycline phổ rộng',
        dosageOrTechnique: 'Doxycycline 100 mg x 2 lần/ngày (uống sau bữa ăn với nhiều nước) liên tục trong 14 ngày cho cả 2 vợ chồng',
        monitoring: 'Theo dõi tác dụng phụ tiêu hóa, tránh tiếp xúc ánh nắng mặt trời gắt'
      },
      {
        phase: 'Kiểm tra hiệu quả (Test of Cure)',
        action: 'Sinh thiết lại nội mạc tử cung vào pha chế tiết của chu kỳ kinh kế tiếp',
        dosageOrTechnique: 'Nhuộm lại CD138: Nếu CD138 âm tính (< 1 tế bào/10 HPF) $\\rightarrow$ Đủ điều kiện chuyển phôi IVF',
        monitoring: 'Nếu CD138 vẫn còn dương tính $\\rightarrow$ Chuyển sang Đợt 2'
      },
      {
        phase: 'Đợt 2 (Second-line Regimen - Cho ca kháng Doxycycline)',
        action: 'Kháng sinh phối hợp Gram âm + Kỵ khí',
        dosageOrTechnique: 'Ciprofloxacin 500 mg x 2 lần/ngày + Metronidazole 500 mg x 2 lần/ngày trong 14 ngày',
        monitoring: 'Bổ sung men vi sinh Lactobacillus âm đạo sau khi kết thúc đợt kháng sinh'
      }
    ],
    successRatesAndOutcomes: 'Tỷ lệ sạch viêm (CD138 âm tính) sau đợt 1 đạt 80-85%; sau đợt 2 đạt > 95%. Tỷ lệ mang thai lâm sàng sau điều trị khỏi viêm mạn tính tăng từ 15% lên > 60%.',
    sideEffectsAndRisks: [
      'Cảm giác buồn nôn, vị kim loại ở miệng (do Metronidazole), rối loạn tiêu hóa nhẹ',
      'Viêm nấm âm đạo sau dùng kháng sinh (dự phòng bằng probiotic hoặc Fluconazole 150mg)'
    ],
    keyReferences: [
      'Cicinelli E, et al. Human Reproduction 2015 & 2018',
      'ESHRE Guidelines on Recurrent Pregnancy Loss (2023)'
    ]
  },
  {
    category: 'surgical',
    title: 'Quy Trình Phẫu Thuật Gỡ Dính Buồng Tử Cung & Tái Tạo Niêm Mạc Sau Dính (Asherman Syndrome Protocol)',
    targetConditions: ['Dính buồng tử cung (Asherman Syndrome)', 'Vô kinh bế kinh sau nạo hút thai', 'Vô sinh thứ phát do dính lòng tử cung'],
    protocolDetails: [
      {
        phase: 'Giai đoạn Phẫu thuật (Intra-operative)',
        action: 'Nội soi buồng tử cung gỡ dính bằng kéo lạnh vi phẫu (Cold Scissors Adhesiolysis)',
        dosageOrTechnique: 'Dùng kéo vi phẫu cơ học tỉa tách dải xơ từ trung tâm ra ngoại vi và mở rộng đáy tử cung đến 2 lỗ vòi trứng; tuyệt đối KHÔNG dùng dao điện đơn cực/lưỡng cực',
        monitoring: 'Theo dõi liên tục cân bằng dịch vào - ra để phòng ngừa ngộ độc nước'
      },
      {
        phase: 'Giai đoạn Ngăn ngừa tái dính ngay sau mổ (Anti-adhesion barrier)',
        action: 'Bơm Gel chống dính sinh học + Đặt ống thông lưu buồng tử cung',
        dosageOrTechnique: 'Bơm 2-3 mL Gel Hyaluronic Acid tự tiêu (như Hyalobarrier / MateRegel) vào buồng tử cung $\\pm$ Đặt Catheter Foley nhi khoa số 8 (bơm 2-3 mL nước cất vào bóng) lưu trong 3-5 ngày',
        monitoring: 'Dùng kháng sinh dự phòng nhiễm khuẩn ngược dòng'
      },
      {
        phase: 'Giai đoạn Kích thích phục hồi niêm mạc (Post-operative Epithelialization)',
        action: 'Liệu pháp Hormone Estrogen liều cao',
        dosageOrTechnique: 'Estradiol Valerate (Progynova) 4-6 mg/ngày trong 21 ngày, 10 ngày cuối phối hợp Dydrogesterone (Duphaston) 10 mg x 2 lần/ngày. Lặp lại trong 2-3 chu kỳ liên tiếp',
        monitoring: 'Siêu âm 3D kiểm tra độ dày và hình thái buồng tử cung'
      },
      {
        phase: 'Giai đoạn Đánh giá lại (Second-look Hysteroscopy)',
        action: 'Nội soi buồng tử cung kiểm tra sau 4-8 tuần',
        dosageOrTechnique: 'Kiểm tra trực tiếp độ thông thoáng và dùng đầu ống soi tách nhẹ các dải dính màng mới hình thành nếu có',
        monitoring: 'Cho phép bắt đầu kế hoạch mang thai hoặc làm IVF ngay khi buồng tử cung thông thoáng'
      }
    ],
    successRatesAndOutcomes: 'Tỷ lệ phục hồi chu kỳ kinh nguyệt bình thường đạt 85-92%; Tỷ lệ mang thai tự nhiên hoặc qua IVF đạt 50-60% ở nhóm dính nhẹ - trung bình.',
    sideEffectsAndRisks: [
      'Nguy cơ dính tái phát (khoảng 20-30% ở ca dính nặng độ III)',
      'Nguy cơ bất thường bám nhau (nhau cài răng lược) trong thai kỳ sau do lớp màng rụng đáy bị tổn thương trước đó'
    ],
    keyReferences: [
      'AAGL Practice Guideline: Management of Intrauterine Synechiae',
      'ESGE Guidelines on Hysteroscopic Surgery'
    ]
  },
  {
    category: 'fertility_preservation',
    title: 'Chiến Lược Tối Ưu Hóa Niêm Mạc Tử Cung Mỏng Bằng Huyết Tương Giàu Tiểu Cầu (Intrauterine PRP Protocol)',
    targetConditions: ['Niêm mạc tử cung mỏng kháng trị (< 7mm) trong chu kỳ IVF', 'Thất bại làm tổ nhiều lần do niêm mạc kém tưới máu'],
    protocolDetails: [
      {
        phase: 'Chuẩn bị bệnh nhân (Nội khoa nền tảng)',
        action: 'Liệu pháp Estrogen đa đường dùng + Tăng cường tuần hoàn',
        dosageOrTechnique: 'Estradiol Valerate 6-8 mg/ngày đường uống kết hợp Estrogen bôi qua da (Oestrogel 2-3 thước/ngày) bắt đầu từ Ngày 2 chu kỳ kinh + Aspirin 100 mg/ngày + Vitamin E 800 IU/ngày',
        monitoring: 'Siêu âm TVUS đo độ dày niêm mạc vào Ngày 8-10 chu kỳ'
      },
      {
        phase: 'Lần Bơm PRP 1 (Ngày 10-11 chu kỳ)',
        action: 'Chiết tách PRP tự thân và bơm buồng tử cung',
        dosageOrTechnique: 'Lấy 15-20 mL máu ngoại vi của chính bệnh nhân, quay ly tâm 2 bước vô khuẩn thu nhận 0.5 - 1.0 mL PRP (nồng độ tiểu cầu gấp 4-5 lần máu nền). Dùng Catheter mềm bơm chậm trực tiếp vào buồng tử cung',
        monitoring: 'Bệnh nhân nằm nghỉ tại chỗ 15-20 phút'
      },
      {
        phase: 'Lần Bơm PRP 2 (Ngày 12-13 chu kỳ - Cách 48 giờ)',
        action: 'Bơm nhắc lại lần 2 nếu độ dày niêm mạc vẫn < 7mm',
        dosageOrTechnique: 'Thực hiện lặp lại quy trình tách và bơm 0.5 - 1.0 mL PRP tự thân',
        monitoring: 'Siêu âm đánh giá lại độ dày và phổ Doppler mạch máu vào Ngày 14'
      },
      {
        phase: 'Chuyển Pha Chế Tiết (Progesterone Timing)',
        action: 'Bắt đầu sử dụng Progesterone',
        dosageOrTechnique: 'Khi niêm mạc đạt độ dày $\\geq$ 7-8mm và có hình ảnh 3 lá $\\rightarrow$ Bắt đầu dùng Progesterone (đặt âm đạo + tiêm) và lên lịch chuyển phôi sau 5 ngày (120 giờ tiếp xúc Progesterone)',
        monitoring: 'Duy trì thuốc dưỡng thai sau chuyển phôi'
      }
    ],
    successRatesAndOutcomes: 'Cải thiện độ dày niêm mạc trung bình từ +1.5 mm đến +2.8 mm; Tỷ lệ có thai lâm sàng tăng từ 18% lên > 45% ở các chu kỳ chuyển phôi đông lạnh.',
    sideEffectsAndRisks: [
      'Phương pháp sử dụng máu tự thân nên hầu như không có nguy cơ dị ứng hay lây nhiễm chéo',
      'Đau tức nhẹ hạ vị thoáng qua trong vài giờ sau bơm'
    ],
    keyReferences: [
      'Chang Y, et al. J Assist Reprod Genet 2015',
      'Maleki-Hajiagha A, et al. Systematic Review & Meta-analysis (Hum Reprod Open 2021)'
    ]
  }
];
