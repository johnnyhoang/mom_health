import type { HistologyLayer, MenstrualCyclePhase } from '../types/medical';

export const histologyLayers: HistologyLayer[] = [
  {
    name: 'Stratum Functionale (Lớp chức năng)',
    vietnameseName: 'Lớp Chức Năng',
    depth: 'Chiếm 2/3 bề mặt trên của nội mạc tử cung (khoảng 2 - 8mm tùy pha chu kỳ)',
    cellularComposition: [
      'Lớp đặc (Stratum Compactum): Nằm sát bề mặt buồng tử cung, tập trung các tế bào biểu mô bề mặt hình trụ đơn có lông mao, tế bào đệm dày đặc hóa màng rụng.',
      'Lớp xốp (Stratum Spongiosum): Nằm bên dưới lớp đặc, gồm các tuyến tử cung ngoằn ngoèo giãn rộng và mô đệm phù nề, xốp.',
      'Biểu mô tuyến (Glandular Epithelium): Tuyến hình ống đơn phân nhánh, nhạy cảm với hormone, bài tiết dịch giàu Glycogen và Mucin.',
      'Tế bào đệm (Stromal Fibroblasts): Biệt hóa thành tế bào màng rụng (Decidual cells) dưới tác động của Progesterone.'
    ],
    vascularSupply: 'Được cấp máu độc quyền bởi hệ thống Động mạch xoắn (Spiral Arteries). Các động mạch này có tính đáp ứng cực nhạy với sự thay đổi của nồng độ Estrogen & Progesterone.',
    hormonalResponse: 'Phát triển mạnh dưới kích thích của Estradiol (E2) trong pha tăng sinh, phì đại chế tiết dưới Progesterone (P4), và thoái hóa, hoại tử bong tróc hoàn toàn trong pha hành kinh do co thắt mạch xoắn.',
    clinicalSignificance: 'Là nơi làm tổ trực tiếp của phôi nang (Blastocyst). Khi nạo hút thai quá mức hoặc viêm nhiễm xâm lấn sâu, tổn thương mất lớp này có thể phục hồi nếu lớp đáy còn nguyên vẹn; nhưng nếu tổn thương lan xuống lớp đáy sẽ gây dính buồng tử cung (Asherman).'
  },
  {
    name: 'Stratum Basale (Lớp đáy)',
    vietnameseName: 'Lớp Đáy / Lớp Sinh Tế Bào',
    depth: 'Chiếm 1/3 chiều sâu sát cơ tử cung (khoảng 0.5 - 1.5mm, không đổi qua chu kỳ)',
    cellularComposition: [
      'Chứa quần thể Tế bào gốc nội mạc tử cung (Endometrial Stem/Progenitor Cells - eSPCs, biểu hiện CD140b/PDGFR-β, CD146, SUSD2).',
      'Đáy của các ống tuyến tử cung (Glandular fundi) - nơi lưu trữ tế bào gốc biểu mô.',
      'Mô đệm đậm đặc (Dense stroma) với mật độ tế bào cao, nhiều sợi collagen nâng đỡ.'
    ],
    vascularSupply: 'Được cấp máu bởi hệ thống Động mạch thẳng (Straight Arteries). Các mạch máu này KHÔNG có thụ thể nhạy cảm với biến động chu kỳ Progesterone, do đó luôn duy trì dòng máu ổn định.',
    hormonalResponse: 'Không bị bong tróc trong chu kỳ kinh nguyệt; đáp ứng tối thiểu với Progesterone nhưng có thụ thể Estrogen để kích hoạt phân bào tái tạo toàn bộ lớp chức năng mới sau khi sạch kinh.',
    clinicalSignificance: 'Chìa khóa tái sinh niêm mạc sau mỗi chu kỳ hoặc sau can thiệp thủ thuật. Phá hủy lớp đáy do nạo hút thai vô cảm, phẫu thuật bóc u xơ hoặc lao nội mạc dẫn tới hội chứng Asherman (vô kinh, vô sinh do mất khả năng mọc lại niêm mạc).'
  },
  {
    name: 'Junctional Zone / Myometrial Interface (Vùng chuyển tiếp Niêm mạc - Cơ tử cung)',
    vietnameseName: 'Vùng Chuyển Tiếp Niêm Mạc - Cơ (Vùng JZ)',
    depth: 'Lớp cơ trong cùng của tử cung (Subendometrial Myometrium), dày bình thường ≤ 8-10mm',
    cellularComposition: [
      'Các sợi cơ trơn xếp hướng vòng, mật độ tế bào cơ cao hơn và ít chất nền ngoại bào hơn lớp cơ ngoài.',
      'Có nguồn gốc phôi học từ ống Muller (cùng nguồn gốc với nội mạc tử cung), khác với lớp cơ ngoài có nguồn gốc từ trung mô.'
    ],
    vascularSupply: 'Động mạch cung (Arcuate arteries) phân nhánh thành động mạch tỏa (Radial arteries) xuyên qua vùng JZ trước khi chia thành động mạch thẳng và xoắn.',
    hormonalResponse: 'Thể hiện nhu động co bóp ngược chiều (Retrostalsis) có tính chu kỳ: trong pha noãn co bóp từ cổ tử cung lên đáy để hỗ trợ tinh trùng di chuyển; trong pha hoàng thể co bóp giảm hẳn tạo điều kiện cho phôi làm tổ.',
    clinicalSignificance: 'Vùng tổn thương then chốt trong bệnh lý Tuyến trong cơ tử cung (Adenomyosis) khi độ dày JZ > 12mm trên MRI, gây đau bụng kinh dữ dội, rong kinh và giảm tỷ lệ làm tổ của phôi.'
  }
];

export const menstrualCyclePhases: MenstrualCyclePhase[] = [
  {
    id: 'menstrual',
    name: 'Menstrual Phase (Pha Hành Kinh)',
    vietnameseName: 'Giai đoạn Hành kinh / Thoái triển',
    days: 'Ngày 1 - 4 của chu kỳ kinh nguyệt',
    dominantHormone: 'Nồng độ Estrogen (E2) và Progesterone (P4) cùng chạm đáy do thể vàng thoái hóa',
    endometrialThickness: '1 - 4 mm (đạt độ mỏng nhất vào ngày 3-4 chu kỳ)',
    histologicalFeatures: [
      'Thiếu máu cục bộ vi mạch do co thắt kéo dài của các động mạch xoắn.',
      'Giải phóng ồ ạt Enzym tiêu hủy nền (Matrix Metalloproteinases: MMP-1, MMP-3, MMP-9) từ bạch cầu lympho tử cung (uNK cells) và tế bào đệm.',
      'Bong tróc từng mảng của lớp đặc (compactum) và lớp xốp (spongiosum).',
      'Thâm nhiễm bạch cầu trung tính, đại thực bào dọn dẹp mảnh vụn tế bào.'
    ],
    ultrasoundPattern: 'Dải phản âm mỏng, không đều, có thể có chút dịch mỏng hoặc máu cục nhỏ trong lòng tử cung.',
    molecularSignaling: [
      'Gia tăng tổng hợp Prostaglandin PGF2α (gây co bóp cơ tử cung và đau bụng kinh) và PGE2.',
      'Kích hoạt tầng tín hiệu Apoptosis qua con đường Caspase-3.',
      'Khởi phát tiết VEGF và bFGF chuẩn bị cho quá trình tái tạo biểu mô mới.'
    ],
    clinicalRelevance: 'Thời điểm lý tưởng để siêu âm phụ khoa kiểm tra cơ bản (đếm nang thứ cấp AFC, loại trừ u nang cơ năng, đánh giá polyp buồng tử cung hay u xơ dưới niêm mạc mà không bị niêm mạc dày che khuất).'
  },
  {
    id: 'early_proliferative',
    name: 'Early to Mid-Proliferative Phase (Pha Tăng Sinh Sớm & Giữa)',
    vietnameseName: 'Giai đoạn Tăng sinh sớm - giữa (Sau sạch kinh)',
    days: 'Ngày 5 - 10 của chu kỳ',
    dominantHormone: 'Estradiol (E2) tăng dần do các nang noãn buồng trứng phát triển',
    endometrialThickness: '5 - 8 mm',
    histologicalFeatures: [
      'Tái tạo biểu mô bề mặt hoàn chỉnh trong vòng 48 giờ sau khi sạch kinh từ các tế bào gốc đáy tuyến.',
      'Các tuyến tử cung hẹp, thẳng đứng, thành tuyến lót bởi biểu mô trụ đơn đều đặn.',
      'Nhiều hình ảnh phân bào (Mitotic figures) ở cả tế bào biểu mô tuyến và tế bào mô đệm.',
      'Mô đệm đặc chắc, ít mạch máu xoắn.'
    ],
    ultrasoundPattern: 'Đường niêm mạc bắt đầu dày dần, phản âm đồng nhất, đường viền niêm mạc - cơ tử cung sắc nét.',
    molecularSignaling: [
      'Biểu hiện mạnh Thụ thể Estrogen Alpha (ER-α) và Thụ thể Progesterone (PR).',
      'Gia tăng biểu hiện Cyclin D1, Ki-67 (chỉ số tăng sinh tế bào đạt > 40%).',
      'Hoạt hóa trục truyền tín hiệu Wnt/β-catenin thúc đẩy tế bào gốc phân chia.'
    ],
    clinicalRelevance: 'Giai đoạn vàng để tiến hành chụp X-quang tử cung vòi trứng (HSG), siêu âm bơm nước buồng tử cung (SIS) hoặc phẫu thuật nội soi buồng tử cung vì niêm mạc mỏng, không chảy máu nhiều và loại trừ khả năng mang thai sớm.'
  },
  {
    id: 'late_proliferative',
    name: 'Late Proliferative / Periovulatory Phase (Pha Tăng Sinh Muộn / Quanh Rụng Trứng)',
    vietnameseName: 'Giai đoạn Tăng sinh muộn / Ba lá quanh rụng trứng',
    days: 'Ngày 11 - 14 của chu kỳ (đạt đỉnh tại đỉnh LH)',
    dominantHormone: 'Estradiol (E2) đạt đỉnh (> 200-400 pg/mL) kích hoạt đỉnh LH tuyến yên',
    endometrialThickness: '8 - 14 mm',
    histologicalFeatures: [
      'Các tuyến tử cung dài ra nhanh chóng, uốn lượn nhẹ nhưng chưa tiết dịch.',
      'Mô đệm hơi phù nhẹ do tăng tính thấm mạch máu.',
      'Động mạch xoắn dài ra, phát triển cuộn dần về phía bề mặt.',
      'Mật độ thụ thể PR đạt mức tối đa trên toàn bộ biểu mô và mô đệm.'
    ],
    ultrasoundPattern: 'Hình ảnh kinh điển "Niêm mạc 3 lá" (Triple-line pattern): gồm 2 lớp phản âm kém ở giữa phân tách bởi đường phản âm dày ở trung tâm và bao bọc bởi lớp đáy phản âm dày ngoài cùng.',
    molecularSignaling: [
      'Đỉnh tiết Nitric Oxide (eNOS) làm giãn mạch tưới máu tối đa.',
      'Tăng lưu lượng dòng chảy động mạch tử cung (giảm chỉ số kháng trở PI/RI trên Doppler).',
      'Chuẩn bị bộ máy enzym tiếp nhận tín hiệu Progesterone sắp tới.'
    ],
    clinicalRelevance: 'Hình ảnh siêu âm "Niêm mạc 3 lá dày 8-12mm" là tiêu chuẩn quan trọng nhất để kích hoạt rụng trứng (tiêm hCG) trong phác đồ IUI/IVF hoặc chỉ định rụng trứng tự nhiên.'
  },
  {
    id: 'early_secretory',
    name: 'Early Secretory Phase (Pha Chế Tiết Sớm)',
    vietnameseName: 'Giai đoạn Chế tiết sớm (Sau phóng noãn)',
    days: 'Ngày 15 - 19 của chu kỳ (Ngày P+1 đến P+4)',
    dominantHormone: 'Progesterone (P4) tăng vọt từ thể vàng, nồng độ Estrogen giảm nhẹ rồi bình ổn',
    endometrialThickness: '9 - 14 mm (dừng tăng chiều dày, chuyển sang biến đổi chất lượng)',
    histologicalFeatures: [
      'Dấu hiệu mô học đặc trưng: Xuất hiện các Không bào dưới nhân (Subnuclear vacuoles) chứa đầy Glycogen trong tế bào biểu mô tuyến.',
      'Ngừng quá trình phân bào (Ki-67 giảm mạnh).',
      'Đẩy dần nhân tế bào lên phía đỉnh tế bào.',
      'Tuyến bắt đầu nở rộng, ngoằn ngoèo hình răng cưa nhẹ.'
    ],
    ultrasoundPattern: 'Hình ảnh 3 lá mờ dần từ rìa vào trong, toàn bộ niêm mạc bắt đầu chuyển sang dạng phản âm dày (tăng âm đồng nhất).',
    molecularSignaling: [
      'Ức chế thụ thể ER-α qua trung gian Progesterone, chống lại sự tăng sinh quá mức.',
      'Tổng hợp 17β-HSD type 2 (chuyển đổi Estradiol mạnh thành Estrone yếu).',
      'Khởi động quá trình màng rụng hóa (Decidualization).'
    ],
    clinicalRelevance: 'Chuyển giao từ pha tăng sinh sang pha chế tiết. Nếu tiếp xúc sớm với Progesterone trước thời điểm noãn trưởng thành sẽ làm lệch pha niêm mạc và phôi, gây hỏng chu kỳ IVF.'
  },
  {
    id: 'mid_secretory_woi',
    name: 'Mid-Secretory Phase & Window of Implantation (Cửa Sổ Làm Tổ - WOI)',
    vietnameseName: 'Giai đoạn Chế tiết giữa & Cửa Sổ Làm Tổ (WOI)',
    days: 'Ngày 20 - 24 của chu kỳ (Tương đương LH+7 hoặc P+5)',
    dominantHormone: 'Progesterone & Estrogen cùng phối hợp ở mức cao tối ưu từ thể vàng trưởng thành',
    endometrialThickness: '10 - 14 mm',
    histologicalFeatures: [
      'Sự xuất hiện của các Ụ Chồi Bào Tương (Pinopodes / Uterodomes) trên bề mặt cực đỉnh của tế bào biểu mô.',
      'Các tuyến cực kỳ ngoằn ngoèo, lòng tuyến chứa đầy dịch nhầy giàu Glycogen, Lipid, Glycoprotein.',
      'Màng rụng hóa mô đệm hoàn chỉnh (Pre-decidual stroma): tế bào đệm phì đại hình đa diện.',
      'Động mạch xoắn phát triển tối đa, cuộn chặt sát bề mặt biểu mô.',
      'Tập trung dày đặc tế bào miễn dịch đặc hiệu: Tế bào diệt tự nhiên tử cung (uNK cells CD56+bright CD16-), điều hòa dung nạp miễn dịch với phôi dị gen.'
    ],
    ultrasoundPattern: 'Niêm mạc phản âm dày hoàn toàn (Hyperechoic homogeneous), tưới máu Doppler dưới niêm mạc (Zone 3 & Zone 4) đạt mức tối đa.',
    molecularSignaling: [
      'Biểu hiện phân tử kết dính: Integrin αvβ3, MUC1, L-selectin ligand, Osteopontin.',
      'Các Cytokine then chốt: LIF (Leukemia Inhibitory Factor), IL-11, CSF-1.',
      'Enzym chuyển hóa IGFBP-1 điều hòa sự xâm nhập của nguyên bào nuôi thai.'
    ],
    clinicalRelevance: 'Thời điểm DUY NHẤT trong chu kỳ mà niêm mạc tử cung có khả năng tiếp nhận phôi nang bám dính và xâm nhập (Cửa sổ làm tổ mở trong ~36-48h). Ứng dụng xét nghiệm phân tích biểu hiện gen ERA (Endometrial Receptivity Analysis) để cá thể hóa ngày chuyển phôi cho bệnh nhân thất bại làm tổ nhiều lần.'
  },
  {
    id: 'late_secretory',
    name: 'Late Secretory Phase (Pha Chế Tiết Muộn / Tiền Kinh Nguyệt)',
    vietnameseName: 'Giai đoạn Chế tiết muộn / Tiền kinh nguyệt',
    days: 'Ngày 25 - 28 của chu kỳ',
    dominantHormone: 'Nồng độ Progesterone và Estrogen lao dốc không phanh do thể vàng teo',
    endometrialThickness: '8 - 12 mm (bắt đầu co rút do mất nước mô đệm)',
    histologicalFeatures: [
      'Mô đệm thoái hóa, xâm nhập dày đặc bạch cầu hạt và tế bào mast.',
      'Động mạch xoắn co thắt ngắt quãng rồi co thắt kéo dài, gây thiếu máu và hoại tử cục bộ.',
      'Thành tuyến tử cung sụp đổ, ứ đọng hồng cầu thoát mạch.',
      'Tích tụ Prostaglandin gây đau vùng chậu tiền kinh nguyệt (PMS).'
    ],
    ultrasoundPattern: 'Niêm mạc dày phản âm không đồng nhất, xuất hiện các đốm giảm âm nhỏ rải rác báo hiệu hiện tượng chảy máu vi thể dưới niêm mạc.',
    molecularSignaling: [
      'Sự giải phóng NF-κB kích hoạt dòng thác phản ứng viêm.',
      'Tổng hợp COX-2 tăng vọt thúc đẩy tạo PGF2α.',
      'Phá vỡ liên kết tế bào qua việc giáng hóa E-cadherin.'
    ],
    clinicalRelevance: 'Giải thích nguyên nhân của hội chứng tiền kinh nguyệt (PMS) và cảm giác căng tức vùng chậu trước kỳ hành kinh.'
  }
];
