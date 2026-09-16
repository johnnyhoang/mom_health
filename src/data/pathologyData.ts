import type { PathologyDisease } from '../types/medical';

export const pathologyDiseases: PathologyDisease[] = [
  {
    id: 'endometriosis_adenomyosis',
    name: 'Endometriosis & Adenomyosis',
    vietnameseName: 'Lạc Nội Mạc Tử Cung & Bệnh Tuyến Trong Cơ Tử Cung',
    icd10: 'N80 (Endometriosis) / N80.0 (Adenomyosis)',
    prevalence: 'Khoảng 10-15% phụ nữ trong độ tuổi sinh sản; lên tới 35-50% ở nhóm phụ nữ vô sinh và đau mạn tính vùng chậu.',
    pathophysiology: {
      summary: 'Sự hiện diện và phát triển bất thường của mô tuyến và mô đệm nội mạc tử cung bên ngoài buồng tử cung (Lạc nội mạc tử cung - Endometriosis: tại buồng trứng, phúc mạc chậu, dây chằng cùng tử cung, vách trực tràng âm đạo) hoặc xâm lấn trực tiếp sâu vào lớp cơ tử cung (Adenomyosis). Mô này chịu tác động của hormone chu kỳ kinh, gây phản ứng viêm mạn tính, xuất huyết vi thể tái diễn, xơ hóa và dính tạng nghiêm trọng.',
      theoriesAndMechanisms: [
        {
          title: 'Thuyết Trào Ngược Kinh Nguyệt (Sampson\'s Retrograde Menstruation Theory)',
          description: 'Máu kinh chứa các tế bào niêm mạc còn sống trào ngược qua vòi trứng vào ổ bụng trong kỳ hành kinh, bám dính vào phúc mạc và phát triển dưới sự hỗ trợ của mạng lưới vi mạch tăng sinh.',
          moleculesInvolved: ['VEGF', 'Integrin αvβ3', 'ICAM-1', 'MMP-2, MMP-9']
        },
        {
          title: 'Thuyết Dị Sản Biểu Mô Thể Khoang (Coelomic Metaplasia & Stem Cell Origin)',
          description: 'Biểu mô phúc mạc nguyên thủy (có cùng nguồn gốc phôi học với ống Müller) bị dị sản dưới tác động của các yếu tố kích thích nội tiết hoặc viêm nhiễm; kết hợp với tế bào gốc nội mạc (eSPCs) di chuyển theo đường máu/bạch huyết tới các tạng xa (phổi, não, rốn).',
          moleculesInvolved: ['Wnt/β-catenin', 'SDF-1/CXCR4', 'CD133']
        },
        {
          title: 'Rối Loạn Viêm Mạn Tính & Hiện Tượng Tự Sinh Estrogen Cục Bộ (Local Estrogen Dominance)',
          description: 'Mô lạc nội mạc biểu hiện quá mức Enzym Aromatase và giảm enzym 17β-HSD type 2, tự sản xuất Estradiol tại chỗ kích thích tế bào tăng sinh không kiểm soát và chống lại quá trình tự hủy (Apoptosis). Đồng thời gia tăng Prostaglandin PGE2 tạo vòng lặp viêm - đau - tăng sinh.',
          moleculesInvolved: ['Aromatase CYP19A1', 'COX-2', 'PGE2', 'IL-1β, IL-6, TNF-α']
        },
        {
          title: 'Sinh Bệnh Học Adenomyosis (Tissue Injury and Repair - TIAR Mechanism)',
          description: 'Các đợt co thắt nhu động cơ tử cung quá mức tại vùng chuyển tiếp (Junctional Zone - JZ) gây vi chấn thương cơ học lặp đi lặp lại tại ranh giới niêm mạc - cơ, kích hoạt phản ứng viêm và xâm lấn lớp đáy niêm mạc vào cơ trơn thành tử cung.',
          moleculesInvolved: ['Oxytocin Receptor', 'Endothelin-1', 'TGF-β1']
        }
      ],
      riskFactors: [
        'Có kinh sớm (< 11 tuổi) hoặc mãn kinh muộn',
        'Chu kỳ kinh ngắn (< 27 ngày) và lượng máu kinh nhiều (> 80ml)',
        'Tiền sử gia đình có mẹ hoặc chị em gái mắc lạc nội mạc tử cung (nguy cơ tăng gấp 7-10 lần)',
        'Dị tật đường sinh dục gây bít tắc đường thoát máu kinh (màng trinh không thủng, vách ngăn âm đạo)',
        'Chỉ số khối cơ thể (BMI) thấp, tiếp xúc với hóa chất làm rối loạn nội tiết (Dioxin, BPA)'
      ],
      protectiveFactors: [
        'Mang thai và sinh con nhiều lần (nghỉ ngơi chu kỳ nội tiết kéo dài)',
        'Cho con bú bằng sữa mẹ kéo dài',
        'Sử dụng thuốc tránh thai kết hợp (COCs) lâu dài',
        'Tập thể dục thể thao đều đặn cường độ vừa phải'
      ]
    },
    classificationSystems: [
      {
        name: 'Hệ thống rASRM (Revised American Society for Reproductive Medicine)',
        details: [
          { category: 'Stage I (Minimal - Tối thiểu)', criteria: 'Điểm 1 - 5: Các tổn thương nông rải rác trên phúc mạc, chưa dính.', malignancyRiskOrPrognosis: 'Khả năng có thai tự nhiên còn tương đối tốt.' },
          { category: 'Stage II (Mild - Nhẹ)', criteria: 'Điểm 6 - 15: Tổn thương nông và sâu hơn tại phúc mạc và túi cùng Douglas.', malignancyRiskOrPrognosis: 'Bắt đầu có dính nhẹ vòi trứng - buồng trứng.' },
          { category: 'Stage III (Moderate - Trung bình)', criteria: 'Điểm 16 - 40: Nang lạc nội mạc buồng trứng (Endometrioma - "U nang sô-cô-la"), dính dày đặc quanh buồng trứng và tai vòi.', malignancyRiskOrPrognosis: 'Giảm dự trữ buồng trứng (AMH) và cản trở cơ học thụ tinh.' },
          { category: 'Stage IV (Severe - Nặng)', criteria: 'Điểm > 40: Dính xóa sổ hoàn toàn túi cùng sau (Obliterated cul-de-sac), nang buồng trứng lớn 2 bên, thâm nhiễm dính ruột và bàng quang.', malignancyRiskOrPrognosis: 'Đòi hỏi phẫu thuật nội soi phức tạp, ưu tiên làm IVF.' }
        ]
      },
      {
        name: 'Hệ thống Phân Loại Enzian # (Cập nhật cho Lạc nội mạc thâm nhiễm sâu - DIE)',
        details: [
          { category: 'Khoang A (Vách âm đạo - trực tràng & Âm đạo)', criteria: 'Mức độ 1 (<1cm), 2 (1-3cm), 3 (>3cm)', malignancyRiskOrPrognosis: 'Gây đau giao hợp sâu và chảy máu trực tràng/âm đạo chu kỳ.' },
          { category: 'Khoang B (Dây chằng cùng - tử cung & Thành chậu)', criteria: 'Mức độ 1 (<1cm), 2 (1-3cm), 3 (>3cm) tổn thương 1 hoặc 2 bên', malignancyRiskOrPrognosis: 'Nguy cơ chèn ép và co kéo niệu quản dẫn đến ứ nước thận im lặng.' },
          { category: 'Khoang C (Trực tràng & Đại tràng Sigma)', criteria: 'Mức độ 1 (<1cm), 2 (1-3cm), 3 (>3cm) xâm lấn lớp cơ/dưới niêm ruột', malignancyRiskOrPrognosis: 'Cần phối hợp phẫu thuật viên tiêu hóa (bóc vỏ, cắt đĩa hoặc cắt đoạn ruột).' }
        ]
      }
    ],
    clinicalManifestations: {
      primarySymptoms: [
        'Thống kinh thứ phát tiến triển (Dysmenorrhea): Đau bụng kinh dữ dội, tăng dần theo thời gian, không đáp ứng với giảm đau thông thường.',
        'Đau khi giao hợp sâu (Deep Dyspareunia): Cảm giác đau nhói sâu trong tiểu khung khi thâm nhập do kéo căng dây chằng cùng tử cung và túi cùng sau.',
        'Đau mạn tính vùng chậu (Chronic Pelvic Pain): Đau âm ỉ kéo dài > 6 tháng không phụ thuộc chu kỳ kinh.',
        'Rối loạn đại tiện / tiểu tiện theo chu kỳ (Dyschezia / Dysuria): Đau khi đi tiêu, mót rặn, tiểu buốt hoặc tiểu ra máu khi hành kinh do tổn thương DIE.',
        'Rong kinh, cường kinh (Menorrhagia): Đặc biệt nổi trội trong Adenomyosis làm tử cung to hình cầu, tăng diện tích bề mặt buồng tử cung và giảm co bóp cầm máu.'
      ],
      asymptomaticRates: 'Khoảng 20-25% trường hợp phát hiện tình cờ khi khám hiếm muộn hoặc siêu âm định kỳ.',
      complications: [
        'Vô sinh và hiếm muộn (giảm chất lượng noãn, rối loạn nhu động tai vòi, độc tính dịch ổ bụng đối với tinh trùng và phôi).',
        'Vỡ nang lạc nội mạc buồng trứng gây viêm phúc mạc cấp tính.',
        'Tắc niệu quản gây suy thận âm thầm (Silent Hydronephrosis).',
        'Nguy cơ ác tính hóa (Ovarian Endometriosis-Associated Cancers - EAOC: Ung thư biểu mô buồng trứng tế bào sáng Clear Cell và Dạng nội mạc Endometrioid).'
      ]
    },
    diagnosticAlgorithms: {
      firstLine: [
        'Khám phụ khoa bằng mỏ vịt và thăm khám hai tay: Đánh giá độ di động của tử cung, phát hiện nốt đau tại dây chằng cùng tử cung, túi cùng sau hoặc khối dính buồng trứng.',
        'Siêu âm chuyên sâu vùng chậu ngả âm đạo (Expert TVUS with dynamic sliding sign): Tiêu chuẩn IDEA protocol để tìm nang sô-cô-la, nốt DIE và kiểm tra dấu hiệu trượt tử cung - trực tràng (Sliding sign).'
      ],
      goldStandard: 'Nội soi ổ bụng (Laparoscopy) kết hợp sinh thiết giải phẫu bệnh xác nhận sự hiện diện của biểu mô tuyến và mô đệm nội mạc tử cung.',
      keyImagingFindings: [
        {
          modality: 'Siêu âm TVUS (Transvaginal Ultrasound)',
          findings: [
            'Endometrioma: Khối nang buồng trứng hồi âm kém dạng kính mờ đồng nhất (Ground-glass echogenicity), không có vách tăng sinh mạch máu bên trong.',
            'Adenomyosis: Tử cung to hình cầu không đều, cơ tử cung dày không đối xứng (thành sau > thành trước), xuất hiện các nang nhỏ trong cơ (<5mm), bóng lưng hình rèm cửa (Rain-shower appearance), tăng sinh mạch máu lan tỏa không đồng tâm.',
            'Dấu hiệu trượt (Sliding sign) âm tính: Báo hiệu dính tắc hoàn toàn khoang sau Douglas.'
          ]
        },
        {
          modality: 'Cộng hưởng từ MRI vùng chậu',
          findings: [
            'Nang lạc nội mạc: Tăng tín hiệu mạnh trên T1W và giảm tín hiệu trên T2W ("Hiện tượng Shading" do nồng độ sắt và protein cao trong máu cũ).',
            'Adenomyosis: Vùng chuyển tiếp (Junctional Zone) dày trên 12mm trên chuỗi xung T2W.',
            'DIE: Các nốt giảm tín hiệu trên T2W có bờ tua gai, ngấm thuốc tương phản kém tại vách trực tràng âm đạo và dây chằng.'
          ]
        }
      ],
      histopathologyCriteria: [
        'Hiện diện ít nhất 2 trong 3 tiêu chuẩn: Biểu mô tuyến nội mạc tử cung, Mô đệm nội mạc tử cung, Đại thực bào ứ đọng sắc tố Hemosiderin (Hemosiderin-laden macrophages).'
      ]
    },
    evidenceBasedManagement: {
      medicalTherapy: [
        {
          drugClass: 'Progestin Đơn Thuần Thế Hệ Mới',
          agent: 'Dienogest 2mg/ngày đường uống liên tục',
          mechanism: 'Ức chế rụng trứng vừa phải, làm teo mô nội mạc tử cung trực tiếp, kháng viêm mạnh và giảm đau rõ rệt.',
          evidenceLevel: 'Level 1A (Khuyến cáo hàng đầu theo ESHRE 2022 & ACOG)',
          indications: 'Điều trị bước 1 cho đau do lạc nội mạc tử cung và Adenomyosis ở phụ nữ chưa có nhu cầu mang thai ngay.'
        },
        {
          drugClass: 'Dụng Cụ Tử Cung Phóng Thích Levonorgestrel',
          agent: 'LNG-IUS (Mirena 52mg)',
          mechanism: 'Phóng thích Levonorgestrel tại chỗ 20 mcg/ngày, làm teo niêm mạc tối đa, giảm thụ thể Estrogen, giảm lượng máu kinh tới 90%.',
          evidenceLevel: 'Level 1A',
          indications: 'Lựa chọn tối ưu cho Adenomyosis gây rong kinh nặng và đau bụng kinh kéo dài.'
        },
        {
          drugClass: 'Chất Đồng Vận GnRH (GnRH Agonists)',
          agent: 'Goserelin 3.6mg hoặc Leuprolide 3.75mg tiêm bắp mỗi 28 ngày kèm Liệu pháp bảo vệ (Add-back therapy)',
          mechanism: 'Tạo tình trạng "mãn kinh nhân tạo" tạm thời, ức chế hoàn toàn trục hạ đồi - tuyến yên - buồng trứng làm teo khối lạc nội mạc.',
          evidenceLevel: 'Level 1A',
          indications: 'Trường hợp đau nặng không đáp ứng Progestin, hoặc chuẩn bị trước phẫu thuật/trước chuyển phôi IVF.'
        },
        {
          drugClass: 'Chất Đối Vận GnRH Đường Uống (Oral GnRH Antagonists)',
          agent: 'Relugolix phối hợp (Relugolix 40mg + E2 1mg + NETA 0.5mg)',
          mechanism: 'Ức chế cạnh tranh thụ thể GnRH tại tuyến yên tức thì, kiểm soát nhanh triệu chứng mà không gây bùng phát nội tiết ban đầu.',
          evidenceLevel: 'Level 1B (FDA phê duyệt 2022)',
          indications: 'Điều trị đau trung bình đến nặng do lạc nội mạc tử cung.'
        }
      ],
      surgicalIntervention: [
        {
          procedure: 'Phẫu thuật Nội soi Bóc Nang Lạc Nội Mạc Tử Cung (Cystectomy) & Gỡ Dính',
          approach: 'Nội soi ổ bụng bảo tồn mô lành buồng trứng',
          indications: 'Nang Endometrioma ≥ 4-5cm, đau kháng trị nội khoa, nghi ngờ ác tính hoặc chuẩn bị trước khi chọc hút noãn IVF.',
          fertilityPreservationNotes: 'Cần phẫu thuật viên giàu kinh nghiệm, hạn chế dùng dao điện lưỡng cực đốt cầm máu tại rốn buồng trứng để tránh làm suy giảm vĩnh viễn dự trữ buồng trứng (AMH).'
        },
        {
          procedure: 'Phẫu Thuật Triệt Để: Cắt Tử Cung Toàn Phần (TLH) $\\pm$ 2 Phần Phụ',
          approach: 'Nội soi hoặc mổ mở',
          indications: 'Phụ nữ đã đủ con, Adenomyosis hoặc lạc nội mạc nặng kháng trị với mọi biện pháp nội khoa bảo tồn.',
          fertilityPreservationNotes: 'Chỉ áp dụng khi không còn nguyện vọng sinh sản.'
        }
      ],
      fertilityConsiderations: 'Đối với bệnh nhân vô sinh kèm lạc nội mạc tử cung trung bình - nặng (Stage III/IV), Thụ tinh trong ống nghiệm (IVF) là phương pháp điều trị hiệu quả nhất. Phác đồ Ultra-long GnRH agonist (ức chế 2-3 tháng trước chuyển phôi đông lạnh) giúp cải thiện đáng kể tỷ lệ làm tổ.',
      guidelineRecommendations: [
        {
          organization: 'ESHRE Guidelines (2022)',
          keyGuideline: 'Khuyến cáo không nên phẫu thuật lặp lại nhiều lần đối với u nang lạc nội mạc tái phát vì làm suy kiệt mô buồng trứng; ưu tiên điều trị nội khoa kéo dài hoặc chuyển hướng hỗ trợ sinh sản IVF.'
        },
        {
          organization: 'ACOG Practice Bulletin #114',
          keyGuideline: 'Chẩn đoán lâm sàng và điều trị nội khoa kinh nghiệm (Empiric medical therapy) với Progestin hoặc thuốc tránh thai kết hợp được khuyến cáo trước khi quyết định phẫu thuật nội soi chẩn đoán.'
        }
      ]
    },
    caseScenariosOrPearls: [
      'Ngọc lâm sàng: Một bệnh nhân đau bụng kinh dữ dội nhưng siêu âm bình thường không loại trừ lạc nội mạc tử cung nông (Peritoneal Superficial Endometriosis). Luôn lắng nghe triệu chứng lâm sàng.',
      'Lưu ý quan trọng: Luôn xét nghiệm AMH trước khi phẫu thuật bóc u nang buồng trứng 2 bên để tư vấn trữ noãn bảo tồn sinh sản nếu cần thiết.'
    ]
  },
  {
    id: 'endometrial_hyperplasia',
    name: 'Endometrial Hyperplasia',
    vietnameseName: 'Tăng Sinh Nội Mạc Tử Cung (Quá Sản Niêm Mạc Tử Cung)',
    icd10: 'N85.0 (Endometrial hyperplasia, unspecified) / N85.00 - N85.02',
    prevalence: 'Tần suất mắc ước tính 133/100.000 phụ nữ-năm, đạt đỉnh ở nhóm tuổi quanh mãn kinh (50-54 tuổi).',
    pathophysiology: {
      summary: 'Sự tăng sinh quá mức của các tuyến nội mạc tử cung dẫn đến tỷ lệ tuyến/mô đệm vượt quá 1:1 (so với bình thường là < 1:1). Nguyên nhân cốt lõi là do tác động kéo dài liên tục của Estrogen không có sự đối kháng cân bằng của Progesterone (Unopposed Estrogen Stimulation). Tình trạng này kích hoạt con đường tín hiệu sinh ung PI3K/AKT/mTOR, làm mất đoạn gen ức chế khối u PTEN.',
      theoriesAndMechanisms: [
        {
          title: 'Học Thuyết Estrogen Không Đối Kháng (Unopposed Estrogen Hypothesis)',
          description: 'Khi không có phóng noãn (chu kỳ không rụng trứng), Progesterone không được tạo ra từ thể vàng, khiến niêm mạc liên tục phân chia và phát triển dưới tác động của Estrogen. Niêm mạc dày lên quá mức, vượt quá khả năng cấp máu của hệ mao mạch, dẫn đến hoại tử và bong tróc không đều gây chảy máu tử cung bất thường.',
          moleculesInvolved: ['ER-α', 'PR-A/PR-B', 'Cyclin D1', 'Bcl-2']
        },
        {
          title: 'Cơ Chế Biến Đổi Di Truyền & Tân Sinh (Molecular Carcinogenesis / EIN)',
          description: 'Tăng sinh có tế bào không điển hình đặc trưng bởi sự tích lũy đột biến gen PTEN (mất chức năng ức chế khối u), đột biến gen KRAS, mất ổn định vi vệ tinh (MSI) và bất hoạt gen Pax2, biến đổi mô từ tổn thương tăng sinh lành tính sang tổn thương tiền ung thư thực thụ.',
          moleculesInvolved: ['PTEN', 'Pax2', 'KRAS', 'PIK3CA', 'ARID1A']
        }
      ],
      riskFactors: [
        'Béo phì (BMI ≥ 30 kg/m²): Mô mỡ chuyển đổi Androstenedione thành Estrone (E1) qua enzym Aromatase ngoại vi.',
        'Hội chứng buồng trứng đa nang (PCOS): Rối loạn phóng noãn mạn tính kèm tăng Insulin máu.',
        'Sử dụng liệu pháp hormone thay thế chỉ có Estrogen đơn độc (Unopposed HRT) ở người còn tử cung.',
        'Sử dụng Tamoxifen trong điều trị ung thư vú (có tác dụng chủ vận Estrogen chọn lọc trên niêm mạc tử cung).',
        'U buồng trứng tiết Estrogen (U tế bào hạt - Granulosa cell tumor).',
        'Tiền sử gia đình mắc Hội chứng Lynch (Hereditary Nonpolyposis Colorectal Cancer - HNPCC).'
      ],
      protectiveFactors: [
        'Sử dụng thuốc tránh thai kết hợp đường uống (COCs) - giảm 50% nguy cơ.',
        'Sử dụng vòng tránh thai chứa Levonorgestrel (LNG-IUS).',
        'Chế độ ăn giàu chất xơ, kiểm soát cân nặng và đường huyết.'
      ]
    },
    classificationSystems: [
      {
        name: 'Phân Loại WHO 2014 / 2020 & EIN System (Hệ thống chuẩn quốc tế hiện nay)',
        details: [
          {
            category: '1. Tăng Sinh Không Điển Hình (Non-Atypical Endometrial Hyperplasia - NEH / Benign Hyperplasia)',
            criteria: 'Tỷ lệ tuyến/mô đệm tăng nhưng tế bào biểu mô giữ nguyên hình thái bình thường (nhân tròn đều, phân cực cực đáy, không có nhân quái hay hạch nhân nổi rõ).',
            malignancyRiskOrPrognosis: 'Nguy cơ tiến triển thành ung thư biểu mô nội mạc tử cung rất thấp: < 1 - 3% sau 20 năm theo dõi.'
          },
          {
            category: '2. Tăng Sinh Điển Hình / Tân Sinh Nội Mạc Tử Cung (Atypical Endometrial Hyperplasia - AEH / Endometrial Intraepithelial Neoplasia - EIN)',
            criteria: 'Tuyến xếp chen chúc dày đặc đè bẹp mô đệm (diện tích tuyến > 50%), tế bào nhân to, mất phân cực, chất nhiễm sắc thô, hạch nhân to nổi rõ, tế bào sưng phồng ái kiềm.',
            malignancyRiskOrPrognosis: 'Nguy cơ ung thư xâm lấn đồng thời (Co-existing Carcinoma) lên tới 25 - 43% khi cắt tử cung; nguy cơ tiến triển thành ung thư xâm lấn là 29% nếu không điều trị.'
          }
        ]
      }
    ],
    clinicalManifestations: {
      primarySymptoms: [
        'Ra máu tử cung bất thường (Abnormal Uterine Bleeding - AUB): Chiếm 90% triệu chứng khởi phát.',
        'Ra máu sau mãn kinh (Postmenopausal Bleeding - PMB): Bất kỳ hiện tượng ra máu nào sau khi đã mãn kinh > 12 tháng đều là dấu hiệu cảnh báo đỏ.',
        'Rong kinh, rong huyết (Metrorrhagia / Menorrhagia): Máu kinh kéo dài > 8 ngày hoặc chu kỳ kinh không đều, ra máu giữa chu kỳ.',
        'Khí hư lẫn máu hoặc dịch âm đạo bất thường có mùi hôi.'
      ],
      asymptomaticRates: 'Khoảng 5% phát hiện tình cờ qua siêu âm định kỳ thấy niêm mạc dày bất thường sau mãn kinh.',
      complications: [
        'Thiếu máu mạn tính mức độ trung bình đến nặng do mất máu rỉ rả kéo dài.',
        'Tiến triển thành Ung thư biểu mô nội mạc tử cung dạng nội mạc (Endometrioid Endometrial Carcinoma).'
      ]
    },
    diagnosticAlgorithms: {
      firstLine: [
        'Siêu âm phụ khoa qua ngả âm đạo (TVUS): Đánh giá độ dày nội mạc tử cung (Endometrial Thickness - ET) và hình thái phản âm theo IETA.',
        'Ngưỡng phân loại nguy cơ sau mãn kinh: Nếu ET ≤ 4mm $\\rightarrow$ Nguy cơ ung thư < 1%, có thể theo dõi; nếu ET > 4mm $\\rightarrow$ Bắt buộc phải lấy mẫu mô nội mạc tử cung.'
      ],
      goldStandard: 'Sinh thiết nội mạc tử cung có hướng dẫn qua Nội soi buồng tử cung (Hysteroscopy with Directed Biopsy) hoặc Sinh thiết ngoại trú bằng ống hút Pipelle.',
      keyImagingFindings: [
        {
          modality: 'Siêu âm TVUS',
          findings: [
            'Tăng sinh không điển hình: Niêm mạc dày lan tỏa, tăng âm đồng nhất hoặc có vài nang nhỏ li ti (dạng "Swiss cheese"), đường ranh giới nội mạc - cơ tử cung còn nguyên vẹn, Doppler mạch máu ít phân nhánh.',
            'Tăng sinh có tế bào không điển hình / Ung thư sớm: Niêm mạc dày không đồng nhất, bờ nham nhở, đốm tăng giảm âm hỗn hợp, Doppler thấy mạch máu rải rác đâm xuyên bờ cơ.'
          ]
        }
      ],
      histopathologyCriteria: [
        'Đánh giá diện tích tương đối của tuyến so với mô đệm (Volume percentage stroma VPS < 55%).',
        'Đánh giá hình thái nhân: Mất phân cực, hạt nhân nổi rõ, kích thước nhân không đều so với biểu mô tuyến bình thường lân cận.'
      ]
    },
    evidenceBasedManagement: {
      medicalTherapy: [
        {
          drugClass: 'Vòng Tránh Thai Chứa Levonorgestrel (Khuyến cáo ưu tiên hàng đầu)',
          agent: 'LNG-IUS 52mg (Mirena)',
          mechanism: 'Nồng độ Progestin tại chỗ cao gấp 1000 lần đường uống, đạt tỷ lệ thoái lui bệnh > 90-95% đối với Tăng sinh không điển hình và 85-90% đối với Tăng sinh điển hình.',
          evidenceLevel: 'Level 1A (RCOG/BSGE 2020 Guideline)',
          indications: 'Điều trị bước 1 cho Tăng sinh không điển hình, và cho Tăng sinh điển hình ở phụ nữ muốn bảo tồn tử cung/sinh sản.'
        },
        {
          drugClass: 'Progestin Đường Uống Liên Tục',
          agent: 'Medroxyprogesterone Acetate (MPA 10-20mg/ngày) hoặc Megestrol Acetate (80-160mg/ngày) liên tục trong 6 tháng',
          mechanism: 'Chuyển hóa niêm mạc sang dạng chế tiết và teo niêm mạc toàn thân.',
          evidenceLevel: 'Level 1B',
          indications: 'Bệnh nhân từ chối hoặc có chống chỉ định đặt vòng LNG-IUS.'
        }
      ],
      surgicalIntervention: [
        {
          procedure: 'Phẫu Thuật Cắt Tử Cung Toàn Phần & Hai Phần Phụ (Total Hysterectomy with Bilateral Salpingo-Oophorectomy - TH/BSO)',
          approach: 'Nội soi ổ bụng (Laparoscopy - TLH) là tiêu chuẩn vàng',
          indications: 'Phương pháp điều trị chuẩn cho Tăng sinh điển hình (Atypical Hyperplasia / EIN) ở phụ nữ đã mãn kinh hoặc không còn nhu cầu sinh con; hoặc Tăng sinh không điển hình tái phát/kháng trị progestin sau 12 tháng.',
          fertilityPreservationNotes: 'Không khuyến cáo bóc tách hay đốt niêm mạc tử cung (Endometrial Ablation) vì tạo sẹo dính che lấp tổn thương ung thư tái phát bên dưới.'
        }
      ],
      fertilityConsiderations: 'Ở bệnh nhân trẻ tuổi mắc Tăng sinh điển hình (AEH/EIN) có nguyện vọng mang thai: Áp dụng phác đồ bảo tồn sinh sản bằng LNG-IUS phối hợp Metformin (đặc biệt ở người có PCOS/béo phì). Bắt buộc phải sinh thiết lại nội mạc tử cung mỗi 3-6 tháng bằng Pipelle hoặc nội soi buồng tử cung. Khi sinh thiết âm tính 2 lần liên tiếp, cần chuyển ngay sang các trung tâm Hỗ trợ Sinh sản để làm IVF chuyển phôi sớm.',
      guidelineRecommendations: [
        {
          organization: 'RCOG / BSGE Joint Guideline (Green-top Guideline No. 67)',
          keyGuideline: 'LNG-IUS là lựa chọn đầu tay vượt trội hơn progestin đường uống nhờ tỷ lệ thoái lui cao hơn và tác dụng phụ toàn thân ít hơn.'
        },
        {
          organization: 'ACOG Committee Opinion No. 631',
          keyGuideline: 'Bệnh nhân Atypical Hyperplasia điều trị bảo tồn bắt buộc phải được tư vấn kỹ về nguy cơ 40% có thể có ung thư xâm lấn tiềm ẩn đồng thời.'
        }
      ]
    },
    caseScenariosOrPearls: [
      'Ngọc lâm sàng: Không bao giờ được kê đơn Estrogen đơn độc cho phụ nữ còn tử cung. Luôn luôn phải phối hợp Progestin ít nhất 12-14 ngày mỗi tháng.',
      'Cảnh giác: Bệnh nhân béo phì nặng có AUB dù siêu âm thấy niêm mạc 6mm vẫn cần sinh thiết vì siêu âm ngả âm đạo ở người béo phì có thể bị hạn chế độ phân giải.'
    ]
  },
  {
    id: 'endometrial_polyps',
    name: 'Endometrial Polyps',
    vietnameseName: 'Polyp Nội Mạc Tử Cung (Polyp Lòng Tử Cung)',
    icd10: 'N84.0',
    prevalence: 'Chiếm từ 10% đến 40% ở phụ nữ có triệu chứng ra máu tử cung bất thường; tần suất tăng dần theo tuổi.',
    pathophysiology: {
      summary: 'Khối tăng sinh khu trú nhô vào buồng tử cung, cấu tạo gồm 3 thành phần vi thể: (1) Các tuyến nội mạc giãn rộng không đều, (2) Mô đệm xơ hóa giàu nguyên bào sợi, và (3) Các cuống mạch máu có thành dày hyalin hóa đặc trưng. Polyp phát sinh do sự mất cân bằng giữa thụ thể Estrogen/Progesterone tại chỗ và giảm hiện tượng chết theo chương trình (Apoptosis).',
      theoriesAndMechanisms: [
        {
          title: 'Tăng Biểu Hiện Thụ Thể Nội Tiết & Đột Biến Di Truyền Tế Bào',
          description: 'Mô đệm của polyp biểu hiện quá mức thụ thể Estrogen (ER) và giảm thụ thể Progesterone (PR), dẫn đến đáp ứng kém với progesterone trong nửa sau chu kỳ, khiến polyp không bị bong tróc trong kỳ hành kinh mà tiếp tục phát triển to dần. Tái sắp xếp nhiễm sắc thể 6p21 (gen HMGA1) và 12q15 (gen HMGA2) thường gặp trong nguyên bào sợi của polyp.',
          moleculesInvolved: ['HMGA1', 'HMGA2', 'Bcl-2', 'Ki-67']
        }
      ],
      riskFactors: [
        'Tuổi cao (quanh mãn kinh và sau mãn kinh)',
        'Sử dụng thuốc Tamoxifen (tỷ lệ mắc polyp lên tới 30-60%, nguy cơ ác tính hóa cao hơn)',
        'Béo phì và liệu pháp thay thế hormone (HRT)',
        'Hội chứng Lynch và Hội chứng Cowden'
      ],
      protectiveFactors: [
        'Sử dụng vòng tránh thai chứa Levonorgestrel (LNG-IUS) có tác dụng ngăn ngừa hình thành polyp ở bệnh nhân điều trị Tamoxifen.'
      ]
    },
    classificationSystems: [
      {
        name: 'Phân Loại Dựa Trên Giải Phẫu Bệnh & Vị Trí',
        details: [
          { category: 'Polyp Có Cuống (Pedunculated)', criteria: 'Có cuống hẹp rõ rệt gắn vào thành tử cung, khối lơ lửng tự do trong buồng tử cung, có thể thò qua lỗ ngoài cổ tử cung.', malignancyRiskOrPrognosis: 'Dễ dàng cắt trọn qua nội soi buồng tử cung.' },
          { category: 'Polyp Chân Rộng (Sessile)', criteria: 'Đáy bám rộng sát cơ tử cung, không có cuống phân cách.', malignancyRiskOrPrognosis: 'Cần kỹ thuật cắt đốt chân polyp triệt để tránh sót tổn thương.' },
          { category: 'Polyp Ác Tính / Tiền Ung Thư', criteria: 'Chứa vùng tăng sinh không điển hình (EIN) hoặc ung thư biểu mô tuyến nội mạc tử cung bên trong cấu trúc polyp.', malignancyRiskOrPrognosis: 'Tỷ lệ ác tính hóa chung khoảng 1.5 - 3.5%; tuy nhiên ở phụ nữ sau mãn kinh có ra máu âm đạo, tỷ lệ ác tính lên tới 5 - 10%.' }
        ]
      }
    ],
    clinicalManifestations: {
      primarySymptoms: [
        'Ra máu thấm giọt giữa chu kỳ kinh (Intermenstrual bleeding / Spotting).',
        'Kinh nguyệt kéo dài hoặc lượng kinh nhiều (AUB-P theo phân loại PALM-COEIN của FIGO).',
        'Ra máu sau khi mãn kinh.',
        'Vô sinh do polyp đóng vai trò như dị vật cản trở cơ học sự di chuyển của tinh trùng hoặc làm tổ của phôi.'
      ],
      asymptomaticRates: 'Khoảng 25-30% polyp được phát hiện hoàn toàn tình cờ qua siêu âm kiểm tra sức khỏe phụ khoa.',
      complications: [
        'Xoắn cuống polyp gây hoại tử, nhiễm trùng buồng tử cung cấp tính.',
        'Ác tính hóa thành ung thư nội mạc tử cung.'
      ]
    },
    diagnosticAlgorithms: {
      firstLine: [
        'Siêu âm bơm nước buồng tử cung (Saline Infusion Sonohysterography - SIS): Độ nhạy > 95% và độ đặc hiệu > 98%, giúp phân biệt rõ polyp niêm mạc với u xơ dưới niêm mạc (Leiomyoma FIGO Type 0/1).'
      ],
      goldStandard: 'Nội soi buồng tử cung chẩn đoán và can thiệp (Diagnostic and Operative Hysteroscopy): Cho phép nhìn trực tiếp màu sắc, mạch máu bề mặt, cuống polyp và cắt trọn làm giải phẫu bệnh.',
      keyImagingFindings: [
        {
          modality: 'Siêu âm Doppler màu TVUS',
          findings: [
            'Dấu hiệu cuống mạch nuôi đơn độc (Single feeding vessel sign): Trên siêu âm Doppler màu thấy một nhánh mạch máu duy nhất đi từ cơ tử cung xuyên vào tâm khối polyp (phân biệt với u xơ dưới niêm mạc có mạng lưới mạch máu hình vòng bao quanh).'
          ]
        },
        {
          modality: 'Siêu âm Bơm Nước (SIS)',
          findings: [
            'Khối tròn hoặc bầu dục hồi âm dày nhô vào lòng tử cung chứa dịch muối sinh lý, có bề mặt nhẵn bóng và di động nhẹ theo dòng nước.'
          ]
        }
      ],
      histopathologyCriteria: [
        'Tuyến nội mạc tử cung không đều kích thước, mô đệm xơ dày đặc, cụm động mạch thành dày có lớp cơ thoái hóa hyalin.'
      ]
    },
    evidenceBasedManagement: {
      medicalTherapy: [
        {
          drugClass: 'Theo dõi bảo tồn (Expectant Management)',
          agent: 'Theo dõi định kỳ bằng siêu âm mỗi 6 tháng',
          mechanism: 'Polyp nhỏ (< 10mm) ở phụ nữ tiền mãn kinh không có triệu chứng có khả năng tự thoái lui tự nhiên (khoảng 25-27%).',
          evidenceLevel: 'Level 2B (AAGL Practice Guideline)',
          indications: 'Polyp nhỏ < 10mm, không triệu chứng, không có yếu tố nguy cơ ác tính ở phụ nữ trẻ.'
        }
      ],
      surgicalIntervention: [
        {
          procedure: 'Cắt Polyp Qua Nội Soi Buồng Tử Cung (Hysteroscopic Polypectomy)',
          approach: 'Sử dụng thòng lọng điện (Bipolar Resectoscope) hoặc dao cơ học cắt hút mô (Hysteroscopic Tissue Removal System / Morcellator)',
          indications: 'Chỉ định tuyệt đối cho: Mọi polyp ở phụ nữ sau mãn kinh; Polyp gây triệu chứng AUB; Polyp ở bệnh nhân vô sinh/chuẩn bị IVF; Polyp kích thước ≥ 15mm; Bệnh nhân đang dùng Tamoxifen.',
          fertilityPreservationNotes: 'Cắt trọn vẹn cả chân bám polyp nhưng tránh làm tổn thương lan rộng lớp đáy xung quanh để phòng ngừa dính buồng tử cung.'
        }
      ],
      fertilityConsiderations: 'Nhiều thử nghiệm lâm sàng ngẫu nhiên (RCT) chứng minh việc cắt bỏ polyp nội mạc tử cung trước khi bơm tinh trùng (IUI) hoặc chuyển phôi (IVF) giúp tăng gấp đôi tỷ lệ có thai lâm sàng (Clinical Pregnancy Rate từ 28% lên 63%).',
      guidelineRecommendations: [
        {
          organization: 'AAGL (American Association of Gynecologic Laparoscopists) Guidelines',
          keyGuideline: 'Nạo buồng tử cung mù (Blind D&C) có tỷ lệ bỏ sót polyp lên tới 50-60%. Cắt polyp qua nội soi buồng tử cung có quan sát trực tiếp là tiêu chuẩn vàng bắt buộc.'
        }
      ]
    },
    caseScenariosOrPearls: [
      'Ngọc lâm sàng: Khi phát hiện polyp ở bệnh nhân đang điều trị ung thư vú bằng Tamoxifen, luôn chỉ định nội soi buồng tử cung cắt polyp và sinh thiết toàn bộ buồng tử cung do tỷ lệ ác tính hóa cao hơn nhóm thông thường.'
    ]
  },
  {
    id: 'endometrial_cancer',
    name: 'Endometrial Carcinoma',
    vietnameseName: 'Ung Thư Biểu Mô Nội Mạc Tử Cung (Ung Thư Thân Tử Cung)',
    icd10: 'C54.1',
    prevalence: 'Là ung thư phụ khoa phổ biến nhất tại các nước phát triển và đứng thứ 2 tại Việt Nam (sau ung thư cổ tử cung). Đạt đỉnh mắc ở độ tuổi 60-70.',
    pathophysiology: {
      summary: 'Khối u ác tính nguyên phát xuất phát từ biểu mô lót buồng tử cung. Bệnh tiến triển từ tăng sinh điển hình (EIN) hoặc phát sinh de novo, sau đó xâm lấn lớp cơ tử cung, lan xuống cổ tử cung, di căn hạch chậu, hạch cạnh động mạch chủ bụng và di căn xa (phổi, gan, phúc mạc).',
      theoriesAndMechanisms: [
        {
          title: 'Phân Loại Nhị Phân Cổ Điển Bokhman (Bokhman\'s Dualistic Model)',
          description: 'Type I (80-85%): Dạng nội mạc (Endometrioid adenocarcinoma), Grade 1-2, phát triển trên nền tiếp xúc Estrogen kéo dài/tăng sinh niêm mạc, dương tính mạnh với ER/PR, tiến triển chậm, tiên lượng tốt. Type II (15-20%): Dạng thanh dịch (Serous) hoặc Tế bào sáng (Clear cell), Grade 3, phát sinh trên nền niêm mạc teo, không phụ thuộc Estrogen, âm tính ER/PR, đột biến gen TP53, tiến triển cực kỳ hung hãn và di căn sớm.',
          moleculesInvolved: ['Type I: PTEN, KRAS, CTNNB1, ARID1A', 'Type II: TP53, HER2/neu, p16']
        },
        {
          title: 'Phân Nhóm Sinh Học Phân Tử Đột Phá TCGA / ProMisE (Molecular Classification)',
          description: 'Thay đổi hoàn toàn thực hành lâm sàng hiện đại bằng cách chia thành 4 nhóm tiên lượng độc lập: (1) POLE ultramutated (tiên lượng tuyệt vời, tỷ lệ sống sót >98%), (2) MMR-d / MSI-H (đột biến protein sửa chữa bắt cặp sai ADN, tiên lượng trung bình, đáp ứng vượt trội với Miễn dịch Pembrolizumab), (3) p53 abnormal (đột biến p53, tiên lượng rất xấu), (4) NSMP / Copy-number low (không có dấu ấn phân tử đặc hiệu, tiên lượng trung gian).',
          moleculesInvolved: ['POLE exonuclease domain', 'MLH1/MSH2/MSH6/PMS2', 'p53 IHC']
        }
      ],
      riskFactors: [
        'Tuổi cao (> 55 tuổi, sau mãn kinh)',
        'Béo phì (nguy cơ tăng gấp 3-10 lần tùy chỉ số BMI)',
        'Tiểu đường type 2 và Hội chứng chuyển hóa',
        'Hội chứng Lynch (đột biến gen sửa chữa ADN dòng mầm: MLH1, MSH2, MSH6, PMS2) - có nguy cơ ung thư nội mạc tử cung suốt đời lên tới 40-60%',
        'Không sinh con (Nulliparity), có kinh sớm, mãn kinh muộn',
        'Điều trị Tamoxifen kéo dài > 2 năm'
      ],
      protectiveFactors: [
        'Sinh đẻ nhiều lần',
        'Sử dụng thuốc tránh thai kết hợp (COCs) - hiệu quả bảo vệ kéo dài hàng chục năm sau khi dừng thuốc',
        'Duy trì cân nặng khỏe mạnh và hoạt động thể lực đều đặn',
        'Phẫu thuật cắt tử cung dự phòng ở phụ nữ mang đột biến gen Lynch sau khi đã hoàn thành kế hoạch sinh con'
      ]
    },
    classificationSystems: [
      {
        name: 'Hệ Thống Phân Chia Giai Đoạn Phẫu Thuật FIGO 2023 (Cập nhật tích hợp mô học & phân tử)',
        details: [
          { category: 'Giai đoạn I (Stage I)', criteria: 'Khối u khu trú tại thân tử cung. IA: Xâm lấn < 50% bề dày cơ tử cung; IB: Xâm lấn ≥ 50% bề dày cơ tử cung; IC: U dạng thanh dịch/tế bào sáng hoặc p53abn khu trú niêm mạc.', malignancyRiskOrPrognosis: 'Tỷ lệ sống thêm 5 năm > 90-95% nếu ở nhóm IA/POLE.' },
          { category: 'Giai đoạn II (Stage II)', criteria: 'Khối u xâm lấn đến mô đệm cổ tử cung (Cervical stroma) nhưng chưa vượt ra ngoài tử cung.', malignancyRiskOrPrognosis: 'Tỷ lệ sống thêm 5 năm khoảng 75-85%.' },
          { category: 'Giai đoạn III (Stage III)', criteria: 'Khối u lan ra thanh mạc tử cung, phần phụ (IIIA), âm đạo/vùng cận tử cung (IIIB), hoặc di căn hạch chậu / hạch cạnh động mạch chủ bụng (IIIC: IIIC1 hạch chậu, IIIC2 hạch chủ).', malignancyRiskOrPrognosis: 'Tỷ lệ sống thêm 5 năm giảm còn 50-65%.' },
          { category: 'Giai đoạn IV (Stage IV)', criteria: 'Khối u xâm lấn niêm mạc bàng quang, trực tràng (IVA) hoặc di căn xa tạng khác (IVB: phổi, gan, xương, hạch bẹn).', malignancyRiskOrPrognosis: 'Tỷ lệ sống thêm 5 năm < 15-20%.' }
        ]
      }
    ],
    clinicalManifestations: {
      primarySymptoms: [
        'Chảy máu âm đạo sau mãn kinh (Postmenopausal Bleeding - PMB): Là dấu hiệu chỉ điểm vàng gặp ở > 90% bệnh nhân ung thư nội mạc tử cung.',
        'Kinh nguyệt ra nhiều bất thường, kéo dài hoặc chảy máu giữa kỳ ở phụ nữ tiền mãn kinh.',
        'Khí hư lẫn máu hoặc dịch mủ âm đạo (Pyometra do chít hẹp cổ tử cung ở người già).',
        'Đau vùng chậu, đau lưng dưới hoặc sờ thấy khối vùng hạ vị (ở giai đoạn muộn xâm lấn).'
      ],
      asymptomaticRates: 'Dưới 5% tình cờ phát hiện qua xét nghiệm tế bào học cổ tử cung (Pap smear thấy tế bào tuyến bất thường AGC) hoặc siêu âm.',
      complications: [
        'Thiếu máu cấp hoặc mạn tính nặng nề.',
        'Thủng tử cung tự phát do khối u xâm lấn toàn bộ cơ tử cung.',
        'Chèn ép niệu quản gây thận ứ nước và suy thận cấp/mạn.'
      ]
    },
    diagnosticAlgorithms: {
      firstLine: [
        'Khám lâm sàng toàn diện kết hợp siêu âm TVUS: Đo bề dày nội mạc tử cung, đánh giá mức độ thâm nhiễm cơ tử cung.',
        'Sinh thiết nội mạc tử cung bằng ống Pipelle hoặc nong nạo sinh thiết từng phần (Fractional D&C).'
      ],
      goldStandard: 'Nội soi buồng tử cung kèm sinh thiết mô bệnh học kết hợp Nhuộm hóa mô miễn dịch 4 dấu ấn phân tử (p53, MLH1, MSH2, MSH6, PMS2) và giải trình tự gen POLE.',
      keyImagingFindings: [
        {
          modality: 'Cộng hưởng từ MRI Vùng Chậu Có Tiêm Thuốc Đối Quang Từ',
          findings: [
            'Đánh giá chính xác độ sâu xâm lấn cơ tử cung (Myometrial invasion depth): Khối u giảm tín hiệu trên T1W sau tiêm thuốc so với cơ tử cung ngấm thuốc mạnh lân cận; phá vỡ vùng chuyển tiếp JZ.',
            'Đánh giá xâm lấn mô đệm cổ tử cung và phát hiện hạch di căn vùng chậu/cạnh động mạch chủ.'
          ]
        },
        {
          modality: 'Chụp Cắt Lớp Vi Tính CT Ngực - Bụng - Chậu hoặc PET-CT',
          findings: [
            'Tầm soát di căn hạch ổ bụng, di căn phổi, gan và di căn phúc mạc trước phẫu thuật.'
          ]
        }
      ],
      histopathologyCriteria: [
        'Cấu trúc tuyến bất thường phức tạp, mất mô đệm gian tuyến hoàn toàn, tạo nhú, cầu nối tế bào (cribriform pattern), hoại tử trong lòng tuyến, nhân đa hình thái quái ác, chỉ số phân bào cao.'
      ]
    },
    evidenceBasedManagement: {
      medicalTherapy: [
        {
          drugClass: 'Liệu Pháp Miễn Dịch (Immunotherapy / Checkpoint Inhibitors)',
          agent: 'Pembrolizumab (Keytruda) $\\pm$ Lenvatinib hoặc Dostarlimab (Jemperli)',
          mechanism: 'Khóa thụ thể PD-1/PD-L1, kích hoạt tế bào lympho T tiêu diệt khối u; đặc biệt hiệu quả vượt bậc ở nhóm ung thư có khiếm khuyết sửa chữa ADN (MMR-d / MSI-H).',
          evidenceLevel: 'Level 1A (FDA & NCCN 2024 Preferred First-line / Second-line)',
          indications: 'Ung thư nội mạc tử cung giai đoạn tiến xa, tái phát hoặc di căn.'
        },
        {
          drugClass: 'Hóa Trị Phối Hợp Chuẩn (Chemotherapy)',
          agent: 'Paclitaxel + Carboplatin (TC Protocol) 6 chu kỳ mỗi 3 tuần',
          mechanism: 'Gây độc tế bào toàn thân tiêu diệt vi di căn.',
          evidenceLevel: 'Level 1A',
          indications: 'Bổ trợ sau phẫu thuật cho giai đoạn III-IV, hoặc giai đoạn I-II có nhóm nguy cơ cao (Type II serous/clear cell, p53 abnormal).'
        }
      ],
      surgicalIntervention: [
        {
          procedure: 'Phẫu Thuật Phân Chia Giai Đoạn Chuẩn: Cắt Tử Cung Toàn Phần + 2 Phần Phụ + Sinh Thiết Hạch Lính Gác (TLH + BSO + Sentinel Lymph Node - SLN Mapping)',
          approach: 'Phẫu thuật Nội soi ổ bụng hoặc Phẫu thuật Robot (Minimally Invasive Surgery)',
          indications: 'Là phương pháp điều trị nền tảng bắt buộc cho mọi giai đoạn có thể phẫu thuật được.',
          fertilityPreservationNotes: 'Kỹ thuật Sinh thiết Hạch lính gác bằng chất nhuộm huỳnh quang xanh Indocyanine Green (ICG) dưới camera cận hồng ngoại giúp giảm thiểu phù bạch huyết chân voi so với nạo hạch chậu toàn bộ kinh điển.'
        }
      ],
      fertilityConsiderations: 'Bảo tồn sinh sản chỉ được cân nhắc ở bệnh nhân rất trẻ (< 40 tuổi) đáp ứng đủ tiêu chuẩn nghiêm ngặt: (1) Ung thư biểu mô dạng nội mạc Grade 1, (2) Khối u khu trú hoàn toàn tại niêm mạc (chưa xâm lấn cơ trên MRI), (3) Không có di căn hạch hay buồng trứng. Điều trị bằng LNG-IUS liều cao + Progestin uống kèm sinh thiết buồng tử cung mỗi 3 tháng. Sau khi sinh đủ con, bắt buộc phải cắt tử cung triệt căn.',
      guidelineRecommendations: [
        {
          organization: 'NCCN Guidelines Version 2.2024 - Uterine Neoplasms',
          keyGuideline: 'Bắt buộc phải thực hiện xét nghiệm hóa mô miễn dịch MMR (Mismatch Repair) và xét nghiệm phân tử POLE/p53 cho tất cả các ca ung thư nội mạc tử cung mới chẩn đoán để định hướng điều trị đích và tầm soát hội chứng Lynch gia đình.'
        },
        {
          organization: 'ESGO / ESTRO / ESP Guidelines 2021',
          keyGuideline: 'Phẫu thuật xâm lấn tối thiểu (Nội soi / Robot) là phương pháp tiếp cận ưu tiên chuẩn cho ung thư nội mạc tử cung giai đoạn sớm nhờ giảm biến chứng mất máu, nhiễm trùng và thời gian nằm viện.'
        }
      ]
    },
    caseScenariosOrPearls: [
      'Quy tắc vàng: Mọi trường hợp ra máu âm đạo sau mãn kinh (dù chỉ là một vài giọt dịch hồng) đều phải được xem là Ung thư nội mạc tử cung cho đến khi có bằng chứng sinh thiết chứng minh ngược lại!'
    ]
  },
  {
    id: 'chronic_endometritis',
    name: 'Chronic Endometritis (CE)',
    vietnameseName: 'Viêm Nội Mạc Tử Cung Mạn Tính',
    icd10: 'N71.1',
    prevalence: 'Gặp ở khoảng 10-11% phụ nữ nói chung, nhưng lên tới 30-60% ở nhóm phụ nữ Thất bại làm tổ liên tiếp (RIF) trong IVF và Sảy thai liên tiếp (RPL).',
    pathophysiology: {
      summary: 'Tình trạng viêm nhiễm mạn tính âm ỉ, không triệu chứng rầm rộ tại lớp đệm nội mạc tử cung, đặc trưng bởi sự thâm nhiễm của các tương bào (Plasma cells). Viêm mạn tính phá vỡ môi trường miễn dịch dung nạp phôi tại buồng tử cung, làm biến đổi các phân tử bám dính và cytokine tiếp nhận phôi, dẫn đến thất bại làm tổ và sảy thai sớm.',
      theoriesAndMechanisms: [
        {
          title: 'Mất Cân Bằng Vi Sinh Vật Buồng Tử Cung (Uterine Microbiome Dysbiosis)',
          description: 'Sự suy giảm của chủng vi khuẩn bảo vệ Lactobacillus spp. và sự xâm lấn của các vi khuẩn cơ hội/gây bệnh (Gram âm, vi khuẩn kỵ khí: Streptococcus, E. coli, Enterococcus faecalis, Mycoplasma genitalium, Ureaplasma urealyticum, Chlamydia trachomatis).',
          moleculesInvolved: ['Lipopolysaccharide (LPS)', 'TLR-4', 'IL-6', 'TNF-α']
        },
        {
          title: 'Rối Loạn Miễn Dịch Tiếp Nhận Phôi Tại Cửa Sổ Làm Tổ',
          description: 'Sự thâm nhiễm tương bào kích thích tiết quá mức các kháng thể cục bộ, tăng tế bào B, làm biến đổi tỷ lệ tế bào diệt tự nhiên tử cung (uNK cells), gây độc tế bào với nguyên bào nuôi của phôi nang và ngăn cản quá trình màng rụng hóa (Decidualization).',
          moleculesInvolved: ['CD138 / Syndecan-1', 'MUC1', 'Integrin αvβ3', 'LIF']
        }
      ],
      riskFactors: [
        'Tiền sử nạo hút thai, sảy thai hoặc can thiệp thủ thuật buồng tử cung',
        'Viêm vùng chậu mạn tính (PID) hoặc viêm âm đạo do vi khuẩn tái diễn',
        'Có đặt vòng tránh thai (IUD) lâu năm',
        'Polyp buồng tử cung hoặc u xơ dưới niêm mạc tạo ổ đọng vi khuẩn'
      ],
      protectiveFactors: [
        'Hệ vi sinh vật buồng tử cung giàu Lactobacillus (> 90%)',
        'Thực hiện thủ thuật phụ khoa đảm bảo vô khuẩn tuyệt đối'
      ]
    },
    classificationSystems: [
      {
        name: 'Phân Loại Mức Độ Dựa Trên Mật Độ Tương Bào CD138',
        details: [
          { category: 'Viêm Nhẹ', criteria: '1 - 4 tương bào CD138+ trên 10 vi trường quang học phóng đại cao (HPF x400).', malignancyRiskOrPrognosis: 'Đáp ứng tốt với 1 đợt kháng sinh Doxycycline.' },
          { category: 'Viêm Nặng / Kháng Trị', criteria: '≥ 5 tương bào CD138+ trên 10 HPF hoặc có ổ tập trung tương bào thành cụm lớn.', malignancyRiskOrPrognosis: 'Nguy cơ cao thất bại IVF, cần cấy dịch buồng tử cung hoặc kháng sinh phối hợp thế hệ 2.' }
        ]
      }
    ],
    clinicalManifestations: {
      primarySymptoms: [
        'Phần lớn hoàn toàn không có triệu chứng lâm sàng rõ rệt (Silent Infection).',
        'Khí hư âm đạo ra dai dẳng, đổi màu vàng nhạt hoặc trắng đục.',
        'Đau tức âm ỉ vùng hạ vị không liên quan chu kỳ kinh.',
        'Ra máu thấm giọt nhẹ bất thường (Spotting).'
      ],
      asymptomaticRates: 'Khoảng 70-80% bệnh nhân không hề có triệu chứng điển hình.',
      complications: [
        'Thất bại làm tổ nhiều lần (Recurrent Implantation Failure - RIF) trong IVF (phôi chất lượng tốt nhưng không bám dính).',
        'Sảy thai liên tiếp (Recurrent Pregnancy Loss - RPL) trong 3 tháng đầu thai kỳ.',
        'Sinh non và nhiễm trùng ối trong thai kỳ.'
      ]
    },
    diagnosticAlgorithms: {
      firstLine: [
        'Nội soi buồng tử cung chẩn đoán (Fluid Diagnostic Hysteroscopy): Quan sát trực tiếp các dấu hiệu vi thể gợi ý viêm.'
      ],
      goldStandard: 'Sinh thiết nội mạc tử cung kết hợp Nhuộm hóa mô miễn dịch với dấu ấn CD138 (Syndecan-1 Immunohistochemistry) để nhận diện chính xác tương bào.',
      keyImagingFindings: [
        {
          modality: 'Nội Soi Buồng Tử Cung (Hysteroscopy Signs)',
          findings: [
            'Sung huyết niêm mạc lan tỏa hoặc từng mảng đỏ rực (Hyperemia).',
            'Phù nề mô đệm (Stromal Edema): Niêm mạc nhợt nhạt, dày phồng.',
            'Các đốm xuất huyết vi thể dạng dâu tây (Micropolyp / Strawberry pattern): Các vi polyp nhỏ li ti < 1mm mọc san sát trên bề mặt niêm mạc.'
          ]
        }
      ],
      histopathologyCriteria: [
        'Tìm thấy tế bào tương bào (Plasma cells) trong mô đệm: Tế bào hình bầu dục, nhân lệch tâm có chất nhiễm sắc xếp hình "bánh xe" (Clock-face chromatin), bào tương bắt màu kiềm và dương tính mạnh với CD138 trên màng tế bào.'
      ]
    },
    evidenceBasedManagement: {
      medicalTherapy: [
        {
          drugClass: 'Phác Đồ Kháng Sinh Bước 1 (First-line Antibiotic)',
          agent: 'Doxycycline 100mg x 2 lần/ngày uống liên tục trong 14 ngày',
          mechanism: 'Kháng sinh phổ rộng bao phủ vi khuẩn nội bào (Chlamydia, Mycoplasma, Ureaplasma) và vi khuẩn Gram dương/âm thường gặp.',
          evidenceLevel: 'Level 1B (Khuyến cáo chuẩn ASRM / ESHRE)',
          indications: 'Điều trị ban đầu cho tất cả các trường hợp chẩn đoán xác định CE trên CD138.'
        },
        {
          drugClass: 'Phác Đồ Kháng Sinh Phối Hợp Bước 2 (Cho Trường Hợp Kháng Doxycycline)',
          agent: 'Ciprofloxacin 500mg x 2 lần/ngày + Metronidazole 500mg x 2 lần/ngày trong 14 ngày',
          mechanism: 'Tiêu diệt vi khuẩn Gram âm hiếu khí và vi khuẩn kỵ khí sâu trong buồng tử cung.',
          evidenceLevel: 'Level 2A',
          indications: 'Các ca sinh thiết lại sau đợt 1 vẫn còn dương tính với CD138.'
        },
        {
          drugClass: 'Liệu Pháp Bổ Trợ Lợi Khuẩn (Probiotics)',
          agent: 'Lactobacillus crispatus / rhamnosus đặt âm đạo hoặc uống sau đợt kháng sinh',
          mechanism: 'Phục hồi hệ vi sinh vật có lợi, tái lập hàng rào bảo vệ chống vi khuẩn cơ hội.',
          evidenceLevel: 'Level 2B',
          indications: 'Cải thiện môi trường buồng tử cung trước khi chuyển phôi.'
        }
      ],
      surgicalIntervention: [
        {
          procedure: 'Nội Soi Buồng Tử Cung Bơm Rửa & Sinh Thiết Kiểm Tra',
          approach: 'Thủ thuật ngoại trú nhẹ nhàng',
          indications: 'Sinh thiết kiểm tra lại (Test of Cure) sau khi kết thúc đợt kháng sinh 1 chu kỳ để đảm bảo đã khỏi hoàn toàn trước khi cho phép chuyển phôi.',
          fertilityPreservationNotes: 'Tránh nạo buồng tử cung thô bạo.'
        }
      ],
      fertilityConsiderations: 'Các nghiên cứu công bố trên Human Reproduction và Fertility & Sterility chứng minh: Sau khi điều trị dứt điểm viêm nội mạc tử cung mạn (CD138 âm tính), tỷ lệ mang thai lâm sàng và tỷ lệ trẻ sinh sống (Live Birth Rate) trong chu kỳ chuyển phôi IVF tiếp theo tăng vọt từ 15% lên đến > 60%, tương đương với nhóm người bình thường.',
      guidelineRecommendations: [
        {
          organization: 'ESHRE Working Group on Recurrent Implantation Failure',
          keyGuideline: 'Tầm soát viêm nội mạc tử cung mạn tính bằng nhuộm CD138 là bước đánh giá thiết yếu đối với các cặp vợ chồng có tiền sử thất bại làm tổ nhiều lần.'
        }
      ]
    },
    caseScenariosOrPearls: [
      'Ngọc lâm sàng: Nhuộm HE thông thường rất dễ nhầm lẫn tương bào với tế bào lympho hoặc tế bào đệm màng rụng. Bắt buộc phải yêu cầu giải phẫu bệnh thực hiện nhuộm Hóa mô miễn dịch CD138 để tránh chẩn đoán sai.'
    ]
  },
  {
    id: 'asherman_syndrome',
    name: 'Asherman\'s Syndrome (Intrauterine Adhesions - IUA)',
    vietnameseName: 'Hội Chứng Asherman (Dính Buồng Tử Cung)',
    icd10: 'N85.6',
    prevalence: 'Gặp ở khoảng 15-20% phụ nữ sau nạo hút thai can thiệp thủ thuật; lên tới 30-40% sau nạo thai lưu hoặc sót nhau sau sinh.',
    pathophysiology: {
      summary: 'Sự hình thành các dải dính xơ hóa (Fibrotic bands) kết nối các thành đối diện của buồng tử cung hoặc ống cổ tử cung, làm biến dạng hoặc xóa sổ một phần/toàn bộ khoang buồng tử cung. Tình trạng này xảy ra do tổn thương cơ học phá hủy lớp đáy niêm mạc tử cung (Stratum Basale), làm mất nguồn tế bào gốc tái tạo và kích hoạt phản ứng xơ hóa mô đệm.',
      theoriesAndMechanisms: [
        {
          title: 'Cơ Chế Phá Hủy Lớp Tế Bào Mầm Đáy & Mất Cân Bằng Tạo Sợi (Trauma-Induced Fibrogenesis)',
          description: 'Nạo hút buồng tử cung khi niêm mạc đang ở trạng thái mẫn cảm (hậu sản, sau sảy thai) làm rách lớp đáy đến tận cơ tử cung. Mô tổn thương bị thiếu máu cục bộ, tăng tiết TGF-β1, kích hoạt nguyên bào sợi chuyển thành tế bào cơ-nguyên bào sợi (Myofibroblasts), lắng đọng Collagen type I và III dày đặc tạo thành các dải xơ cứng vô mạch.',
          moleculesInvolved: ['TGF-β1', 'CTGF', 'Collagen I/III', 'α-SMA']
        }
      ],
      riskFactors: [
        'Nạo hút phá thai nhiều lần hoặc nạo buồng tử cung thô bạo',
        'Nạo buồng tử cung giải quyết sót nhau trong vòng 2-4 tuần sau sinh (giai đoạn tử cung mềm, nguy cơ dính cao nhất)',
        'Phẫu thuật bóc u xơ tử cung dưới niêm mạc hoặc mổ cắt vách ngăn tử cung',
        'Nhiễm khuẩn lao sinh dục (Genital Tuberculosis - nguyên nhân gây dính xơ buồng tử cung nặng không hồi phục tại các nước đang phát triển)'
      ],
      protectiveFactors: [
        'Sử dụng phương pháp phá thai bằng thuốc thay vì hút nạo ngoại khoa khi có thể',
        'Thực hiện thủ thuật buồng tử cung dưới hướng dẫn của siêu âm hoặc nội soi',
        'Đặt màng ngăn chống dính dạng gel Hyaluronic Acid sau can thiệp buồng tử cung'
      ]
    },
    classificationSystems: [
      {
        name: 'Hệ Thống Phân Loại Theo Hội Nội Soi Sinh Sản Hoa Kỳ (ASRM / March Classification)',
        details: [
          { category: 'Độ I (Nhẹ - Mild)', criteria: 'Dính dải màng mỏng, diện tích chiếm < 1/3 buồng tử cung, hai lỗ vòi trứng còn nhìn thấy rõ ràng.', malignancyRiskOrPrognosis: 'Tiên lượng phục hồi giải phẫu và kinh nguyệt rất cao (> 90%).' },
          { category: 'Độ II (Trung bình - Moderate)', criteria: 'Dính dải mô xơ dày hơn, diện tích chiếm 1/3 đến 2/3 buồng tử cung, che khuất một phần 1 hoặc cả 2 lỗ vòi trứng.', malignancyRiskOrPrognosis: 'Cần phẫu thuật gỡ dính cẩn thận kèm đặt giá đỡ chống dính tái phát.' },
          { category: 'Độ III (Nặng - Severe)', criteria: 'Dính xơ đặc chiếm > 2/3 buồng tử cung, xóa sổ hoàn toàn lòng tử cung, không còn nhìn thấy lỗ vòi trứng, thành tử cung dính chặt vào nhau.', malignancyRiskOrPrognosis: 'Nguy cơ dính tái phát lên tới 50-60%, khả năng mang thai tự nhiên rất thấp.' }
        ]
      }
    ],
    clinicalManifestations: {
      primarySymptoms: [
        'Thiểu kinh (Hypomenorrhea) hoặc Vô kinh thứ phát (Secondary Amenorrhea): Máu kinh ít dần hoặc biến mất hoàn toàn sau can thiệp thủ thuật buồng tử cung.',
        'Đau bụng kinh chu kỳ kiểu bế kinh (Cryptomenorrhea): Đau quặn hạ vị từng cơn mỗi tháng đúng ngày dự kiến hành kinh nhưng không có máu kinh chảy ra ngoài do bị bít tắc đường thoát cổ tử cung.',
        'Vô sinh thứ phát: Không thể có thai trở lại sau nạo hút thai.',
        'Sảy thai liên tiếp, thai bám vết mổ hoặc bất thường bám nhau trong các thai kỳ sau (Nhau cài răng lược - Placenta Accreta Spectrum do mất màng rụng đáy).'
      ],
      asymptomaticRates: 'Hiếm gặp (dưới 5%), hầu hết bệnh nhân đều có biến đổi về kinh nguyệt.',
      complications: [
        'Vô sinh vĩnh viễn do buồng tử cung xơ chai không thể tiếp nhận phôi.',
        'Ứ máu kinh buồng tử cung gây nhiễm trùng và vỡ tử cung (hiếm gặp).'
      ]
    },
    diagnosticAlgorithms: {
      firstLine: [
        'Siêu âm phụ khoa 3D (3D-TVUS): Dựng hình khoang buồng tử cung mặt phẳng trán (Coronal plane) giúp đánh giá chính xác thể tích buồng tử cung và vị trí dải dính.',
        'Chụp X-quang tử cung vòi trứng (HSG): Phát hiện các khuyết thuốc cản quang không đều bên trong buồng tử cung.'
      ],
      goldStandard: 'Nội soi buồng tử cung chẩn đoán (Diagnostic Hysteroscopy): Tiêu chuẩn vàng tuyệt đối để trực tiếp đánh giá bản chất dải dính (dải màng niêm mạc, dải xơ hay dải cơ) và mức độ che lấp lỗ vòi trứng.',
      keyImagingFindings: [
        {
          modality: 'Siêu âm 3D Tử Cung',
          findings: [
            'Mất tính liên tục của đường niêm mạc trung tâm, dải xơ tăng âm bắc cầu qua buồng tử cung, khoang buồng tử cung biến dạng hình chữ T hoặc hình ống hẹp.'
          ]
        },
        {
          modality: 'Chụp Tử Cung Vòi Trứng (HSG)',
          findings: [
            'Hình ảnh khuyết thuốc cản quang bờ nham nhở, buồng tử cung không giãn nở đều, hình ảnh mạng nhện hoặc tắc nghẽn thuốc hoàn toàn ở đoạn dưới.'
          ]
        }
      ],
      histopathologyCriteria: [
        'Mô đệm xơ hóa vô mạch, thiếu vắng các tuyến nội mạc chức năng, thay thế bằng tế bào biểu mô dẹt bất hoạt.'
      ]
    },
    evidenceBasedManagement: {
      medicalTherapy: [
        {
          drugClass: 'Liệu Pháp Hormone Estrogen Liều Cao Sau Phẫu Thuật (Hormone Replacement Therapy)',
          agent: 'Estradiol Valerate 4 - 6mg/ngày uống liên tục trong 21 - 28 ngày, phối hợp Progestin (Duphaston 10mg/ngày) trong 7-10 ngày cuối, kéo dài 2-3 chu kỳ',
          mechanism: 'Kích thích tối đa các tế bào gốc còn sót lại tại lớp đáy tăng sinh biểu mô hóa che phủ bề mặt vết thương trước khi mô xơ kịp tái tạo liên kết dính.',
          evidenceLevel: 'Level 1B (Khuyến cáo chuẩn ESGE/AAGL)',
          indications: 'Bắt buộc áp dụng cho mọi bệnh nhân ngay sau phẫu thuật gỡ dính buồng tử cung.'
        }
      ],
      surgicalIntervention: [
        {
          procedure: 'Phẫu Thuật Nội Soi Gỡ Dính Buồng Tử Cung Bằng Kéo Vi Phẫu Cơ Học (Hysteroscopic Adhesiolysis)',
          approach: 'Nội soi buồng tử cung đường kính nhỏ (Mini-hysteroscopy), ưu tiên dùng kéo lạnh (Cold scissors) cắt tỉa dải dính, TUYỆT ĐỐI HẠN CHẾ dùng dao điện nhiệt vì nhiệt lượng làm hoại tử mô và xơ dính nặng hơn.',
          indications: 'Chỉ định cho mọi mức độ dính buồng tử cung có kèm rối loạn kinh nguyệt hoặc vô sinh.',
          fertilityPreservationNotes: 'Đặt rào cản cơ học chống dính tái phát ngay sau khi gỡ dính: Bơm Gel Cross-linked Hyaluronic Acid (như MateRegel/Hyalobarrier) kết hợp hoặc không kết hợp đặt bóng Foley chuyên dụng trong buồng tử cung từ 3-5 ngày.'
        }
      ],
      fertilityConsiderations: 'Sau phẫu thuật gỡ dính thành công và kết thúc liệu trình hormone, cần nội soi buồng tử cung kiểm tra lại (Second-look Hysteroscopy) sau 1-2 tháng để giải phóng các dải dính mới nếu có. Khi buồng tử cung đã phục hồi hình thái bình thường, khuyến khích bệnh nhân có thai sớm hoặc thực hiện IVF chuyển phôi ngay.',
      guidelineRecommendations: [
        {
          organization: 'AAGL Practice Guideline on Intrauterine Adhesions',
          keyGuideline: 'Phẫu thuật gỡ dính bằng nội soi buồng tử cung có sử dụng các biện pháp ngăn ngừa dính bổ trợ (Gel chống dính + Estrogen liều cao) cải thiện tỷ lệ phục hồi kinh nguyệt lên tới 80-90% và tỷ lệ có thai sau đó đạt 40-60% ở các ca mức độ nhẹ - trung bình.'
        }
      ]
    },
    caseScenariosOrPearls: [
      'Ngọc lâm sàng: Nếu bệnh nhân sau hút thai bị vô kinh nhưng đến ngày hành kinh vẫn có triệu chứng đau tức ngực và đau bụng dưới dữ dội $\\rightarrow$ Nghĩ ngay đến bế kinh do dính lỗ trong cổ tử cung hoặc dính buồng tử cung!'
    ]
  },
  {
    id: 'thin_endometrium',
    name: 'Thin Endometrium (Refractory Thin Endometrium)',
    vietnameseName: 'Niêm Mạc Tử Cung Mỏng Kháng Trị',
    icd10: 'N85.8',
    prevalence: 'Gặp ở khoảng 2.4% - 5% các chu kỳ thụ tinh trong ống nghiệm (IVF); là rào cản lớn gây hủy chu kỳ chuyển phôi.',
    pathophysiology: {
      summary: 'Tình trạng nội mạc tử cung không đạt được độ dày tối thiểu cần thiết (được định nghĩa đồng thuận là < 7mm, hoặc < 8mm) vào ngày kích hoạt rụng trứng (tiêm hCG) hoặc ngày bắt đầu sử dụng Progesterone trong chu kỳ chuẩn bị niêm mạc chuyển phôi đông lạnh (FET). Niêm mạc mỏng phản ánh tình trạng tưới máu dưới niêm mạc kém, giảm nồng độ thụ thể Estrogen, hoặc tổn thương không hồi phục của các tế bào gốc lớp đáy.',
      theoriesAndMechanisms: [
        {
          title: 'Giảm Tưới Máu Vi Mạch & Tăng Kháng Trở Động Mạch Tử Cung',
          description: 'Lưu lượng máu cung cấp từ các động mạch tỏa và động mạch xoắn bị suy giảm nghiêm trọng, biểu hiện qua chỉ số trở kháng dòng chảy (Resistance Index - RI và Pulsatility Index - PI) tăng cao trên Doppler mạch máu, dẫn đến tình trạng thiếu oxy cục bộ kìm hãm sự tăng sinh tế bào.',
          moleculesInvolved: ['VEGF', 'eNOS / Nitric Oxide', 'HIF-1α']
        },
        {
          title: 'Suy Kiệt Tế Bào Gốc & Đề Kháng Estrogen Cục Bộ',
          description: 'Hậu quả sau các can thiệp thủ thuật nạo hút lặp lại hoặc sau khi sử dụng thuốc Clomiphene Citrate kéo dài (do tác dụng kháng Estrogen kéo dài tại thụ thể niêm mạc tử cung), khiến niêm mạc không thể đáp ứng tăng sinh dù nồng độ Estrogen huyết thanh rất cao.',
          moleculesInvolved: ['ER-α downregulation', 'IGF-1', 'EGF']
        }
      ],
      riskFactors: [
        'Tiền sử nạo hút thai hoặc phẫu thuật buồng tử cung nhiều lần',
        'Sử dụng thuốc Clomiphene Citrate (kích trứng) nhiều chu kỳ liên tiếp',
        'Sử dụng thuốc tránh thai phối hợp hoặc Progestin liên tục trong nhiều năm',
        'Bệnh lý mạch máu hệ thống, hút thuốc lá mạn tính gây co thắt vi mạch',
        'Nhiễm khuẩn lao nội mạc tử cung cũ'
      ],
      protectiveFactors: [
        'Sử dụng phác đồ kích trứng bằng Letrozole hoặc Gonadotropins (không kháng Estrogen)',
        'Bảo tồn lớp đáy trong mọi can thiệp ngoại khoa'
      ]
    },
    classificationSystems: [
      {
        name: 'Phân Tầng Nguy Cơ Theo Độ Dày Niêm Mạc Vào Ngày Chuyển Phôi',
        details: [
          { category: 'Tối Ưu (Optimal)', criteria: 'Độ dày 8 - 12 mm, hình ảnh 3 lá rõ nét.', malignancyRiskOrPrognosis: 'Tỷ lệ có thai lâm sàng và trẻ sinh sống cao nhất (50-65%).' },
          { category: 'Ranh Giới (Borderline)', criteria: 'Độ dày 7.0 - 7.9 mm.', malignancyRiskOrPrognosis: 'Tỷ lệ có thai giảm nhẹ nhưng vẫn có thể chấp nhận chuyển phôi.' },
          { category: 'Mỏng Nghiêm Trọng (Severely Thin)', criteria: 'Độ dày < 7.0 mm (đặc biệt < 6.0 mm).', malignancyRiskOrPrognosis: 'Tỷ lệ làm tổ của phôi giảm sâu (< 15-20%), tăng nguy cơ sảy thai và thai sinh hóa.' }
        ]
      }
    ],
    clinicalManifestations: {
      primarySymptoms: [
        'Lượng máu kinh rất ít (Hypomenorrhea - kinh nguyệt chỉ kéo dài 1-2 ngày, chỉ thấm giọt băng vệ sinh hàng ngày).',
        'Thất bại làm tổ liên tiếp trong các chu kỳ thụ tinh trong ống nghiệm (IVF).',
        'Không có triệu chứng đau đớn cụ thể nào khác.'
      ],
      asymptomaticRates: 'Chỉ được phát hiện khi đi siêu âm canh noãn hoặc chuẩn bị niêm mạc làm IVF.',
      complications: [
        'Hủy chu kỳ chuyển phôi nhiều lần, kéo dài thời gian điều trị hiếm muộn.',
        'Nguy cơ cao thai chậm phát triển trong tử cung (IUGR) và tiền sản giật nếu phôi làm tổ trên nền niêm mạc mạch máu kém.'
      ]
    },
    diagnosticAlgorithms: {
      firstLine: [
        'Siêu âm phụ khoa 2D/3D qua ngả âm đạo đo độ dày niêm mạc tử cung tại mặt cắt dọc chính giữa (Midsagittal view), đo khoảng cách từ bờ ngoài lớp đáy trước đến bờ ngoài lớp đáy sau tại vị trí dày nhất.',
        'Đánh giá phổ Doppler màu tưới máu vùng dưới niêm mạc (Subendometrial Blood Flow).'
      ],
      goldStandard: 'Siêu âm đánh giá động học niêm mạc kết hợp Nội soi buồng tử cung kiểm tra loại trừ dính buồng tử cung vi thể hoặc xơ hóa.',
      keyImagingFindings: [
        {
          modality: 'Siêu âm TVUS & Doppler Màu',
          findings: [
            'Độ dày niêm mạc < 7mm dù nồng độ Estradiol huyết thanh > 300 pg/mL.',
            'Mất hoặc mờ hình ảnh niêm mạc 3 lá.',
            'Doppler màu không thấy mạch máu đâm xuyên vào vùng 3 và vùng 4 (khu vực nằm sát biểu mô buồng tử cung).'
          ]
        }
      ],
      histopathologyCriteria: [
        'Biểu mô tuyến teo nhỏ, mật độ tuyến thưa thớt, tế bào mô đệm nghèo nàn chất nền ngoại bào, mạng lưới mao mạch xoắn kém phát triển.'
      ]
    },
    evidenceBasedManagement: {
      medicalTherapy: [
        {
          drugClass: 'Tối Ưu Hóa Phác Đồ Estrogen Phối Hợp Đa Đường Dùng',
          agent: 'Estradiol uống (Progynova 6-8mg/ngày) phối hợp Estradiol đặt âm đạo hoặc Gel bôi ngoài da (Oestrogel)',
          mechanism: 'Đạt nồng độ Estrogen cao tại chỗ buồng tử cung qua hệ thống tĩnh mạch chậu mà không bị chuyển hóa qua gan lần đầu.',
          evidenceLevel: 'Level 1B',
          indications: 'Phác đồ chuẩn bị niêm mạc đầu tay cho chu kỳ chuyển phôi trữ (FET).'
        },
        {
          drugClass: 'Thuốc Giãn Mạch Cải Thiện Tưới Máu Tử Cung',
          agent: 'Aspirin liều thấp (81-100mg/ngày) $\\pm$ Sildenafil (Viagra đặt âm đạo 25mg x 4 lần/ngày) $\\pm$ Pentoxifylline + Vitamin E 800-1000 IU/ngày',
          mechanism: 'Ức chế Thromboxane A2, giãn cơ trơn mạch máu xoắn, chống oxy hóa và cải thiện lưu lượng tuần hoàn tử cung.',
          evidenceLevel: 'Level 2A',
          indications: 'Bệnh nhân có kháng trở động mạch tử cung cao trên siêu âm Doppler.'
        },
        {
          drugClass: 'Bơm Huyết Tương Giàu Tiểu Cầu Tự Thân Vào Buồng Tử Cung (Intrauterine PRP)',
          agent: 'Bơm 0.5 - 1.0 mL PRP tự thân vào buồng tử cung vào ngày 10 và ngày 12 của chu kỳ chuẩn bị niêm mạc',
          mechanism: 'Tiểu cầu hoạt hóa giải phóng nồng độ cực cao các yếu tố tăng trưởng (VEGF, PDGF, TGF-β, EGF, FGF) kích hoạt tế bào gốc nội mạc phân chia và tăng sinh mạch máu mới.',
          evidenceLevel: 'Level 2A (Nhiều thử nghiệm RCT và Phân tích gộp Meta-analysis 2021-2023)',
          indications: 'Lựa chọn điều trị triển vọng hàng đầu cho niêm mạc mỏng kháng trị với mọi biện pháp nội khoa thông thường.'
        },
        {
          drugClass: 'Bơm Yếu Tố Kích Thích Dòng Bạch Cầu Hạt Vào Buồng Tử Cung (G-CSF)',
          agent: 'Filgrastim (G-CSF 300 mcg) bơm buồng tử cung',
          mechanism: 'Kích thích huy động tế bào gốc tủy xương tới niêm mạc tử cung và thúc đẩy biểu mô hóa.',
          evidenceLevel: 'Level 2B',
          indications: 'Niêm mạc mỏng không đáp ứng với Estrogen liều cao.'
        }
      ],
      surgicalIntervention: [
        {
          procedure: 'Nội Soi Buồng Tử Cung Gây Tổn Thương Nhẹ Niêm Mạc (Endometrial Scratching / Mini-Hysteroscopy)',
          approach: 'Tạo vi tổn thương có kiểm soát tại đáy buồng tử cung',
          indications: 'Kích hoạt phản ứng viêm lành tính giải phóng cytokine và chemokine thúc đẩy tái tạo tế bào ở chu kỳ tiếp theo.',
          fertilityPreservationNotes: 'Chỉ thực hiện ở chu kỳ trước chu kỳ chuyển phôi.'
        }
      ],
      fertilityConsiderations: 'Ở những bệnh nhân niêm mạc mỏng kéo dài không thể cải thiện (> 6-7mm), nếu chất lượng phôi tốt (Phôi nang ngày 5 đã sàng lọc di truyền PGT-A bình thường), vẫn có thể cân nhắc chuyển phôi vì nghiên cứu cho thấy tỷ lệ sinh sống vẫn đạt khoảng 25-30%. Nếu thất bại nhiều lần, lựa chọn mang thai hộ (Surrogacy) là giải pháp y khoa cuối cùng.',
      guidelineRecommendations: [
        {
          organization: 'ASRM Practice Committee Opinion on Thin Endometrium',
          keyGuideline: 'Độ dày niêm mạc tử cung là một chỉ số tiên lượng độc lập quan trọng cho tỷ lệ làm tổ trong IVF; các biện pháp can thiệp sinh học mới như PRP tự thân đang mang lại nhiều triển vọng cải thiện độ dày và tỷ lệ mang thai lâm sàng.'
        }
      ]
    },
    caseScenariosOrPearls: [
      'Ngọc lâm sàng: Hình thái niêm mạc (dạng 3 lá - Triple line) có giá trị tiên lượng quan trọng hơn cả độ dày đơn thuần. Một niêm mạc 6.8mm có cấu trúc 3 lá sắc nét và tưới máu tốt vẫn có cơ hội làm tổ cao hơn một niêm mạc 9mm nhưng tăng âm đặc xơ chai!'
    ]
  }
];
