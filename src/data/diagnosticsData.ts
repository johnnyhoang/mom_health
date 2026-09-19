import type { DiagnosticModality } from '../types/medical';

export const diagnosticModalities: DiagnosticModality[] = [
  {
    id: 'tvus_ieta',
    name: 'Transvaginal Ultrasound (TVUS) & IETA Consensus',
    vietnameseName: 'Siêu Âm Phụ Khoa Qua Ngả Âm Đạo & Tiêu Chuẩn Đồng Thuận IETA',
    type: 'imaging',
    sensitivity: '85 - 95% (tùy bệnh lý: 96% đối với u nang lạc nội mạc, 80-90% đối với dày niêm mạc sau mãn kinh)',
    specificity: '78 - 92%',
    indications: [
      'Khảo sát đầu tay cho mọi trường hợp Ra máu tử cung bất thường (AUB) ở mọi lứa tuổi.',
      'Đánh giá ra máu âm đạo sau mãn kinh (Postmenopausal bleeding - PMB).',
      'Đánh giá đau mạn tính vùng chậu, thống kinh tiến triển nghi ngờ Lạc nội mạc tử cung / Adenomyosis.',
      'Khảo sát hình thái và độ dày niêm mạc trong các chu kỳ Hỗ trợ Sinh sản (IUI, IVF).',
      'Kiểm tra định kỳ ở phụ nữ điều trị Tamoxifen.'
    ],
    contraindications: [
      'Phụ nữ chưa từng quan hệ hoặc có màng trinh nguyên vẹn (thay thế bằng siêu âm qua ngả trực tràng Transrectal Ultrasound - TRUS hoặc siêu âm bụng).',
      'Dị tật chít hẹp âm đạo hoàn toàn.'
    ],
    procedureSteps: [
      'Bệnh nhân đi tiểu sạch trước khi thực hiện để làm trống bàng quang tối đa.',
      'Đặt đầu dò âm đạo tần số cao (5 - 9 MHz) có bao cao su bọc vô khuẩn và gel bôi trơn.',
      'Khảo sát tử cung ở 2 mặt cắt chuẩn: Mặt cắt dọc chính giữa (Midsagittal view) và Mặt cắt ngang (Transverse view).',
      'Đo độ dày niêm mạc tử cung (Endometrial Thickness - ET) tại điểm dày nhất vuông góc với đường trục lòng tử cung từ bờ ngoài lớp đáy trước đến bờ ngoài lớp đáy sau.',
      'Ứng dụng tiêu chuẩn IETA (International Endometrial Tumor Analysis): đánh giá cấu trúc phản âm (đồng nhất vs không đồng nhất), đường bờ nội mạc - cơ tử cung, dịch lòng tử cung, và phổ Doppler màu (Color Score 1 đến 4: từ không mạch máu đến mạch máu phong phú).'
    ],
    keyNormalFindings: 'Độ dày và hình thái thay đổi nhịp nhàng theo chu kỳ: Giai đoạn hành kinh (1-4mm, mỏng đều), Giai đoạn tăng sinh (5-10mm, hình ảnh 3 lá sắc nét), Giai đoạn chế tiết (8-14mm, tăng âm đồng nhất). Phụ nữ sau mãn kinh: Niêm mạc mỏng teo, đều đặn, độ dày ET ≤ 4mm, không có dịch hoặc chỉ có lớp dịch mỏng sinh lý.',
    keyAbnormalFindings: [
      {
        pattern: 'Niêm mạc dày > 4mm ở phụ nữ sau mãn kinh có ra máu',
        suggestiveOf: 'Tăng sinh nội mạc tử cung, Polyp hoặc Ung thư nội mạc tử cung',
        clinicalAction: 'Chỉ định sinh thiết nội mạc tử cung bằng ống hút Pipelle hoặc Nội soi buồng tử cung.'
      },
      {
        pattern: 'Hình ảnh cuống mạch máu nuôi đơn độc (Single feeding vessel) trên Doppler',
        suggestiveOf: 'Polyp nội mạc tử cung',
        clinicalAction: 'Chỉ định siêu âm bơm nước buồng tử cung (SIS) hoặc nội soi cắt polyp.'
      },
      {
        pattern: 'Cơ tử cung dày bất đối xứng, bóng lưng dạng rèm cửa, đảo tăng âm nhỏ trong cơ',
        suggestiveOf: 'Bệnh tuyến trong cơ tử cung (Adenomyosis)',
        clinicalAction: 'Đánh giá mức độ triệu chứng, tư vấn điều trị nội khoa Progestin / Mirena.'
      },
      {
        pattern: 'Niêm mạc dày không đồng nhất, bờ nham nhở, mạch máu Doppler hỗn loạn đâm xuyên cơ (Score 3-4)',
        suggestiveOf: 'Ung thư biểu mô nội mạc tử cung (Endometrial Carcinoma)',
        clinicalAction: 'Sinh thiết khẩn cấp và chụp MRI vùng chậu đánh giá xâm lấn.'
      }
    ],
    pitfallsAndLimitations: [
      'Khó đo chính xác độ dày niêm mạc khi có kèm u xơ tử cung lớn chèn ép biến dạng buồng tử cung.',
      'Sự hiện diện của dịch trong lòng tử cung đòi hỏi phải đo riêng độ dày từng thành trước và thành sau rồi cộng lại, không đo gộp lớp dịch.',
      'Độ phân giải bị giảm ở bệnh nhân béo phì nặng.'
    ],
    guidelineStandard: 'Đồng thuận Quốc tế IETA (Ultrasound Obstet Gynecol 2010; 35: 103-112) & Hướng dẫn ACOG Practice Bulletin #128.'
  },
  {
    id: 'sis_hycosy',
    name: 'Saline Infusion Sonohysterography (SIS)',
    vietnameseName: 'Siêu Âm Bơm Nước Buồng Tử Cung (SIS / Sonohysterogram)',
    type: 'imaging',
    sensitivity: '95 - 98% (vượt trội hơn TVUS thông thường trong chẩn đoán tổn thương khu trú lòng tử cung)',
    specificity: '93 - 97%',
    indications: [
      'Phân biệt chính xác giữa tổn thương lan tỏa (Tăng sinh niêm mạc) và tổn thương khu trú (Polyp vs U xơ dưới niêm mạc FIGO Type 0/1/2).',
      'Đánh giá buồng tử cung ở bệnh nhân thất bại chuyển phôi IVF nhiều lần.',
      'Khảo sát sẹo dính buồng tử cung (Asherman) và khuyết sẹo mổ lấy thai (Cesarean scar defect / Isthmocele).'
    ],
    contraindications: [
      'Đang mang thai hoặc nghi ngờ có thai.',
      'Đang có viêm nhiễm cấp tính vùng chậu hoặc viêm âm đạo mủ (nguy cơ đẩy vi khuẩn lên ổ bụng).',
      'Đang chảy máu âm đạo lượng nhiều (máu cục làm nhiễu hình ảnh).'
    ],
    procedureSteps: [
      'Thực hiện vào đầu chu kỳ kinh nguyệt (ngày 5 - 10 của chu kỳ, khi niêm mạc mỏng nhất).',
      'Đặt mỏ vịt, sát khuẩn cổ tử cung bằng dung dịch Povidone Iodine.',
      'Đưa ống thông mềm chuyên dụng (Catheter 5-7 French có bóng chèn) qua lỗ cổ tử cung vào lòng tử cung.',
      'Rút mỏ vịt, đưa đầu dò siêu âm âm đạo vào, tiến hành bơm từ từ 10 - 20 mL dung dịch nước muối sinh lý vô khuẩn 0.9%.',
      'Dòng nước làm tách rộng 2 thành buồng tử cung (tạo môi trường phản âm trống màu đen), bộc lộ rõ nét toàn bộ bề mặt niêm mạc và các khối nhô vào lòng tử cung.'
    ],
    keyNormalFindings: 'Khoang buồng tử cung giãn nở đều, hình tam giác đối xứng, bề mặt niêm mạc nhẵn mỏng đều không có cấu trúc nhô lồi.',
    keyAbnormalFindings: [
      {
        pattern: 'Khối tăng âm có cuống, bề mặt nhẵn bóng, đáy bám chỉ ở lớp niêm mạc',
        suggestiveOf: 'Polyp nội mạc tử cung',
        clinicalAction: 'Nội soi buồng tử cung cắt trọn khối polyp.'
      },
      {
        pattern: 'Khối giảm âm hoặc phản âm hỗn hợp, có lớp cơ tử cung liên tục bao quanh đáy khối',
        suggestiveOf: 'U xơ tử cung dưới niêm mạc (Submucosal Fibroid)',
        clinicalAction: 'Phân loại theo FIGO (Type 0, 1 hay 2) để lên kế hoạch phẫu thuật cắt qua nội soi.'
      },
      {
        pattern: 'Các dải mô tăng âm bắc cầu nối giữa 2 thành tử cung ngăn cản lòng tử cung giãn nở',
        suggestiveOf: 'Dính buồng tử cung (Intrauterine Adhesions / Asherman)',
        clinicalAction: 'Nội soi buồng tử cung phẫu thuật gỡ dính.'
      }
    ],
    pitfallsAndLimitations: [
      'Bệnh nhân có thể cảm thấy đau co thắt nhẹ vùng hạ vị khi bơm nước (khắc phục bằng dùng NSAID trước thủ thuật 30 phút).',
      'Dịch trào ngược ra ngoài âm đạo nếu bóng catheter không chặn kín lỗ trong cổ tử cung.'
    ],
    guidelineStandard: 'ACOG Technology Assessment #13 & AIUM Practice Parameter for SIS.'
  },
  {
    id: 'pipelle_biopsy',
    name: 'Endometrial Pipelle Biopsy (Office Biopsy)',
    vietnameseName: 'Sinh Thiết Nội Mạc Tử Cung Bằng Ống Hút Pipelle Ngoại Trú',
    type: 'histopathology',
    sensitivity: '99% đối với ung thư nội mạc tử cung toàn thể; 90-95% đối với tăng sinh niêm mạc lan tỏa',
    specificity: '98 - 100%',
    indications: [
      'Chỉ định đầu tay để chẩn đoán mô bệnh học ở phụ nữ > 45 tuổi có ra máu tử cung bất thường (AUB).',
      'Phụ nữ < 45 tuổi có AUB kèm các yếu tố nguy cơ (Béo phì, PCOS, tiền sử tiếp xúc Estrogen không đối kháng, hội chứng Lynch).',
      'Phụ nữ sau mãn kinh có ra máu âm đạo và độ dày niêm mạc trên siêu âm TVUS > 4mm.',
      'Theo dõi đáp ứng điều trị nội khoa Progestin ở bệnh nhân Tăng sinh nội mạc tử cung bảo tồn tử cung.'
    ],
    contraindications: [
      'Đang có thai (chống chỉ định tuyệt đối).',
      'Đang có nhiễm trùng sinh dục cấp tính (Viêm cổ tử cung mủ, Viêm vùng chậu cấp).',
      'Rối loạn đông máu nặng không kiểm soát.'
    ],
    procedureSteps: [
      'Thủ thuật được thực hiện nhanh chóng ngay tại phòng khám ngoại trú, KHÔNG CẦN gây mê và KHÔNG CẦN nong cổ tử cung.',
      'Sát khuẩn âm đạo và cổ tử cung bằng dung dịch vô trùng.',
      'Nhẹ nhàng đưa ống Pipelle (ống nhựa dẻo đường kính siêu nhỏ ~3.1mm có lỗ hút ở đầu) qua ống cổ tử cung vào tận đáy tử cung.',
      'Rút nòng piston bên trong ra sau để tạo áp lực hút chân không cực mạnh.',
      'Vừa xoay tròn 360 độ vừa di chuyển ống tịnh tiến từ đáy tử cung xuống lỗ trong cổ tử cung 3-4 lần để cạo hút lấy các dải mô niêm mạc từ khắp 4 góc buồng tử cung.',
      'Đẩy mẫu mô vào lọ dung dịch Formol đệm trung tính 10% gửi phòng xét nghiệm Giải phẫu bệnh.'
    ],
    keyNormalFindings: 'Mô nội mạc tử cung bình thường tương ứng theo chu kỳ kinh (Pha tăng sinh hoặc Pha chế tiết) hoặc teo mỏng do tuổi mãn kinh (Atrophic endometrium).',
    keyAbnormalFindings: [
      {
        pattern: 'Tăng sinh tuyến chen chúc không có tế bào không điển hình (Non-atypical Hyperplasia)',
        suggestiveOf: 'Tăng sinh niêm mạc lành tính do thừa Estrogen',
        clinicalAction: 'Điều trị nội khoa bằng Progestin (đặt vòng LNG-IUS Mirena hoặc uống).'
      },
      {
        pattern: 'Tân sinh nội mạc tử cung (EIN / Atypical Hyperplasia)',
        suggestiveOf: 'Tổn thương tiền ung thư nguy cơ cao',
        clinicalAction: 'Tư vấn phẫu thuật cắt tử cung hoặc điều trị bảo tồn nghiêm ngặt nếu còn trẻ.'
      },
      {
        pattern: 'Ung thư biểu mô tuyến nội mạc tử cung (Endometrioid Carcinoma)',
        suggestiveOf: 'Ác tính nguyên phát',
        clinicalAction: 'Chuyển chuyên khoa Ung bướu Phụ khoa để phẫu thuật phân chia giai đoạn và hóa mô miễn dịch.'
      }
    ],
    pitfallsAndLimitations: [
      'Ống Pipelle chỉ lấy mẫu được khoảng 4% - 5% tổng diện tích buồng tử cung, do đó có thể bỏ sót các tổn thương nhỏ khu trú như Polyp nhỏ hoặc ổ ung thư khu trú nhỏ (< 15-20% diện tích).',
      'Khó đưa ống qua lỗ cổ tử cung ở phụ nữ già teo hẹp cổ tử cung (Cervical stenosis).'
    ],
    guidelineStandard: 'ACOG Committee Opinion No. 631 & SOGC Clinical Practice Guideline.'
  },
  {
    id: 'hysteroscopy_gold',
    name: 'Diagnostic & Operative Hysteroscopy',
    vietnameseName: 'Nội Soi Buồng Tử Cung Chẩn Đoán & Can Thiệp Phẫu Thuật',
    type: 'invasive',
    sensitivity: '98 - 100% (Tiêu chuẩn vàng tuyệt đối cho các bệnh lý trong lòng tử cung)',
    specificity: '96 - 99%',
    indications: [
      'Tiêu chuẩn vàng để chẩn đoán và điều trị "Một bước" (See and Treat) cho Polyp buồng tử cung, U xơ dưới niêm mạc, Dính buồng tử cung (Asherman), Vách ngăn tử cung.',
      'Sinh thiết định hướng trực tiếp (Targeted Biopsy) các vùng niêm mạc nghi ngờ ung thư khi sinh thiết Pipelle âm tính nhưng lâm sàng vẫn nghi ngờ cao.',
      'Lấy dị vật lòng tử cung (vòng tránh thai bị đứt gãy, lắng đọng canxi).',
      'Đánh giá buồng tử cung chi tiết ở bệnh nhân hiếm muộn chuẩn bị làm IVF.'
    ],
    contraindications: [
      'Đang mang thai.',
      'Ung thư cổ tử cung đã biết rõ xâm lấn.',
      'Nhiễm khuẩn sinh dục cấp tính.'
    ],
    procedureSteps: [
      'Sử dụng ống soi quang học siêu nhỏ (đường kính 2.9 - 5mm) tích hợp camera độ nét cao và kênh can thiệp.',
      'Sử dụng nước muối sinh lý (NaCl 0.9%) làm môi trường căng buồng tử cung với áp lực kiểm soát chính xác (80 - 100 mmHg).',
      'Đi qua ống cổ tử cung dưới sự quan sát trực tiếp (Kỹ thuật No-touch / vaginoscopic approach), kiểm tra ống cổ tử cung, lòng tử cung, 2 góc sừng và 2 lỗ vòi trứng.',
      'Khi phát hiện tổn thương: Tiến hành cắt bỏ polyp/u xơ bằng dao vi phẫu cơ học hoặc quai cắt lưỡng cực (Bipolar resectoscope), hoặc gỡ dải dính xơ hóa bằng kéo lạnh vi phẫu.'
    ],
    keyNormalFindings: 'Niêm mạc hồng hào, mịn màng, mạch máu phân nhánh đều đặn, nhìn rõ 2 lỗ vòi trứng thông thoáng hai bên góc đáy.',
    keyAbnormalFindings: [
      {
        pattern: 'Tổn thương dạng sùi loét, bờ nham nhở, có các mạch máu ngoằn ngoèo dị dạng dễ chảy máu (Atypical vessels)',
        suggestiveOf: 'Ung thư nội mạc tử cung xâm lấn',
        clinicalAction: 'Sinh thiết đích chính xác vào vị trí tổn thương.'
      },
      {
        pattern: 'Các dải dính xơ trắng vô mạch bắc ngang buồng tử cung',
        suggestiveOf: 'Hội chứng Asherman',
        clinicalAction: 'Dùng kéo lạnh cắt gỡ dính giải phóng hoàn toàn khoang buồng tử cung.'
      },
      {
        pattern: 'Sung huyết đốm đỏ dạng dâu tây, vi polyp nhỏ li ti (<1mm)',
        suggestiveOf: 'Viêm nội mạc tử cung mạn tính (Chronic Endometritis)',
        clinicalAction: 'Sinh thiết làm nhuộm hóa mô miễn dịch CD138.'
      }
    ],
    pitfallsAndLimitations: [
      'Yêu cầu trang thiết bị hiện đại và phẫu thuật viên phụ khoa được đào tạo chuyên sâu.',
      'Nguy cơ biến chứng (dù rất thấp < 1%): thủng tử cung, chảy máu, quá tải dịch tuần hoàn do hấp thu nước muối.'
    ],
    guidelineStandard: 'AAGL Practice Report: Practice Guidelines for the Management of Hysteroscopy (J Minim Invasive Gynecol 2020).'
  },
  {
    id: 'pelvic_mri',
    name: 'Pelvic Magnetic Resonance Imaging (Pelvic MRI)',
    vietnameseName: 'Chụp Cộng Hưởng Từ (MRI) Vùng Chậu Chuyên Sâu',
    type: 'imaging',
    sensitivity: '90 - 95% (Đặc biệt chính xác trong đánh giá xâm lấn cơ tử cung và lạc nội mạc sâu DIE)',
    specificity: '92 - 97%',
    indications: [
      'Phân chia giai đoạn trước phẫu thuật (Preoperative Staging) của Ung thư nội mạc tử cung: đánh giá độ sâu xâm lấn cơ tử cung (< 50% vs ≥ 50%), xâm lấn mô đệm cổ tử cung, hạch chậu.',
      'Bản đồ hóa Lạc nội mạc tử cung thâm nhiễm sâu (Deep Infiltrating Endometriosis - DIE) liên quan vách trực tràng âm đạo, niệu quản, bàng quang.',
      'Chẩn đoán phân biệt chính xác giữa Tuyến trong cơ tử cung (Adenomyosis) và U xơ tử cung (Leiomyoma).'
    ],
    contraindications: [
      'Bệnh nhân cấy ghép thiết bị điện tử không tương thích MRI (Máy tạo nhịp tim cũ, máy cấy ốc tai).',
      'Dị ứng nặng với thuốc đối quang từ Gadolinium hoặc suy thận nặng (GFR < 30 mL/phút).'
    ],
    procedureSteps: [
      'Chụp trên hệ thống máy cộng hưởng từ từ trường cao 1.5 Tesla hoặc 3.0 Tesla.',
      'Chuẩn bị: Bệnh nhân nhịn ăn 4-6 giờ, tiêm thuốc chống co thắt ruột (Hyoscine / Buscopan) để giảm xảo ảnh nhu động ruột.',
      'Thực hiện các chuỗi xung đa bình diện độ phân giải cao: T2W (Sagittal, Axial, Coronal), T1W có và không xóa mỡ (Fat-suppressed), Chuỗi xung khuếch tán DWI (Diffusion-Weighted Imaging) và Chuỗi xung động ngấm thuốc tương phản từ (Dynamic Contrast-Enhanced DCE-MRI).'
    ],
    keyNormalFindings: 'Cấu trúc tử cung 3 lớp rõ nét trên T2W: Lớp niêm mạc trong cùng tăng tín hiệu cao; Vùng chuyển tiếp (Junctional Zone - JZ) giảm tín hiệu tối đen dày ≤ 8-10mm; Lớp cơ ngoài tử cung có tín hiệu trung gian.',
    keyAbnormalFindings: [
      {
        pattern: 'Vùng chuyển tiếp JZ dày > 12mm kèm các đốm tăng tín hiệu nhỏ dạng chấm',
        suggestiveOf: 'Adenomyosis cơ tử cung',
        clinicalAction: 'Định hướng phác đồ điều trị nội khoa hoặc can thiệp bảo tồn.'
      },
      {
        pattern: 'Khối u phá vỡ đường JZ, xâm lấn > 50% bề dày cơ tử cung, hạn chế khuếch tán trên DWI/ADC',
        suggestiveOf: 'Ung thư nội mạc tử cung Giai đoạn IB',
        clinicalAction: 'Lập kế hoạch phẫu thuật cắt tử cung triệt căn kèm nạo vét hạch chậu/hạch lính gác.'
      }
    ],
    pitfallsAndLimitations: [
      'Chi phí cao hơn siêu âm, thời gian chụp kéo dài (30-45 phút).',
      'Đòi hỏi bác sĩ chẩn đoán hình ảnh chuyên khoa sâu về tiểu khung phụ khoa.'
    ],
    guidelineStandard: 'ESUR (European Society of Urogenital Radiology) Guidelines for Endometrial Cancer Staging.'
  },
  {
    id: 'biomarkers_ihc',
    name: 'Immunohistochemistry (IHC) & Molecular Biomarkers Panel',
    vietnameseName: 'Hóa Mô Miễn Dịch & Dấu Ấn Phân Tử Chuyên Sâu (CD138, MMR, p53, POLE)',
    type: 'biomarker',
    sensitivity: '98 - 100% trong phân loại phân tử và xác định viêm mạn tính',
    specificity: '99 - 100%',
    indications: [
      'Nhuộm CD138: Tiêu chuẩn vàng bắt buộc trong chẩn đoán Viêm nội mạc tử cung mạn tính ở bệnh nhân hiếm muộn/RIF.',
      'Bộ 4 dấu ấn MMR (MLH1, MSH2, MSH6, PMS2) & p53: Bắt buộc thực hiện trên 100% bệnh nhân ung thư nội mạc tử cung mới chẩn đoán (Khuyến cáo NCCN 2024 / FIGO 2023).',
      'Xét nghiệm đột biến gen POLE (Exonuclease domain sequencing): Phân tầng tiên lượng xuất sắc cho ung thư nội mạc tử cung.',
      'Thụ thể ER / PR: Đánh giá khả năng đáp ứng với liệu pháp nội tiết Progestin.'
    ],
    contraindications: [
      'Không có mẫu mô sinh thiết đạt chuẩn chất lượng.'
    ],
    procedureSteps: [
      'Cắt lát bệnh phẩm mô đúc khối Paraffin với độ dày 3-4 micromet lên lam kính tích điện.',
      'Xử lý bộc lộ kháng nguyên nhiệt độ cao và ủ với các kháng thể đơn dòng đặc hiệu (Anti-CD138, Anti-p53, Anti-MLH1, Anti-MSH2, Anti-MSH6, Anti-PMS2, Anti-ER, Anti-PR).',
      'Khuếch đại tín hiệu bằng hệ thống Polymer gắn enzym Peroxidase và tạo màu nâu bằng cơ chất Chromogen DAB.',
      'Bác sĩ giải phẫu bệnh đọc kết quả dưới kính hiển vi quang học và chấm điểm định lượng.'
    ],
    keyNormalFindings: 'CD138 âm tính (0 tương bào trong mô đệm). Biểu hiện nguyên vẹn của cả 4 protein MMR (Intact Nuclear Expression). Nhuộm p53 dạng Wild-type (dương tính rải rác 10-50% nhân tế bào).',
    keyAbnormalFindings: [
      {
        pattern: 'CD138 dương tính màng tế bào tương bào (Plasma cells) trong mô đệm',
        suggestiveOf: 'Viêm nội mạc tử cung mạn tính (Chronic Endometritis)',
        clinicalAction: 'Điều trị ngay phác đồ kháng sinh Doxycycline 14 ngày.'
      },
      {
        pattern: 'Mất biểu hiện của 1 hoặc nhiều protein MMR (MLH1/PMS2 hoặc MSH2/MSH6) - MMR-deficient (MMR-d)',
        suggestiveOf: 'Ung thư có tính mất ổn định vi vệ tinh cao (MSI-H) / Nguy cơ Hội chứng Lynch di truyền',
        clinicalAction: 'Tư vấn xét nghiệm đột biến gen dòng mầm cho gia đình; Ưu tiên chỉ định Liệu pháp miễn dịch Pembrolizumab nếu tái phát.'
      },
      {
        pattern: 'Nhuộm p53 đột biến (Mutant pattern: biểu hiện quá mức > 80% tế bào hoặc mất hoàn toàn 0% Null-mutation)',
        suggestiveOf: 'Ung thư nhóm p53abn (Nhóm nguy cơ cao, tiên lượng xấu)',
        clinicalAction: 'Bắt buộc hóa trị bổ trợ Paclitaxel + Carboplatin và xạ trị sau phẫu thuật.'
      }
    ],
    pitfallsAndLimitations: [
      'Đòi hỏi phòng xét nghiệm Giải phẫu bệnh có quy trình kiểm chuẩn chất lượng nghiêm ngặt (Quality Control).',
      'Một số trường hợp đột biến protein hiếm có thể cho kết quả nhuộm giả âm tính.'
    ],
    guidelineStandard: 'WHO Classification of Female Genital Tumours (5th Edition, 2020) & NCCN Guidelines 2024.'
  }
];
