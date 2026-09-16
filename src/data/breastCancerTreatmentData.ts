export interface AdvancedBreastTherapy {
  id: string;
  name: string;
  tradeNames: string;
  drugClass: string;
  laymanAnalogy: string;
  mechanismOfAction: string;
  clinicalTrialMilestone: string;
  fdaApprovalStatus: string;
  targetPatientPopulation: string;
  routeAndDosage: string;
  benefitsAndOutcomes: string[];
  sideEffectsAndManagement: string[];
  relevanceToTamoxifenPatients: string;
}

export const advancedBreastTherapies: AdvancedBreastTherapy[] = [
  // =========================================================================
  // 1. LIỆU PHÁP NỘI TIẾT CHUẨN (TAMOXIFEN & AROMATASE INHIBITORS)
  // =========================================================================
  {
    id: 'therapy-tamoxifen',
    name: 'Tamoxifen (Liệu Pháp SERM Chuẩn 5 - 10 Năm)',
    tradeNames: 'Nolvadex, Tamoxifen Hexal, Valodex',
    drugClass: 'SERM (Selective Estrogen Receptor Modulator)',
    laymanAnalogy: 'Chiếc chìa khóa 2 mặt: Cắm vào ổ khóa thụ thể ở vú thì KHÓA CHẶT (bỏ đói tế bào ung thư), nhưng cắm vào tử cung thì VẶN MỞ HÉ (kích thích nhẹ làm dày niêm mạc sau 5 năm).',
    mechanismOfAction: 'Gắn kết cạnh tranh với thụ thể Estrogen (ER) ở mô tuyến vú, ngăn không cho Estrogen tự nhiên kích thích tế bào ung thư nhân đôi.',
    clinicalTrialMilestone: 'Thử nghiệm EBCTCG (theo dõi 20 năm), thử nghiệm ATLAS (20.000 bệnh nhân) và aTTom: 5 năm Tamoxifen giảm 40-50% nguy cơ tái phát; kéo dài 10 năm giảm tiếp 25% tái phát muộn và 29% tử vong do K vú.',
    fdaApprovalStatus: 'FDA phê duyệt điều trị bổ trợ K vú thụ thể nội tiết dương tính (ER+) cho cả phụ nữ tiền mãn kinh và mãn kinh.',
    targetPatientPopulation: 'Bệnh nhân K vú ER+/PR+ mọi lứa tuổi, đặc biệt là tiêu chuẩn vàng cho phụ nữ tiền mãn kinh.',
    routeAndDosage: 'Uống 20mg / ngày, 1 lần duy nhất mỗi ngày, liên tục trong 5 năm (hoặc cân nhắc 10 năm nếu có nguy cơ cao).',
    benefitsAndOutcomes: [
      'Giảm một nửa nguy cơ tái phát K vú trong 10-15 năm đầu tiên.',
      'Bảo vệ mật độ xương ở phụ nữ sau mãn kinh và giảm nguy cơ mắc K vú đối bên 50%.',
      'Chi phí hợp lý, độ sẵn có cao, kinh nghiệm lâm sàng trên toàn cầu hơn 40 năm.'
    ],
    sideEffectsAndManagement: [
      'Biến chứng tử cung: Tăng sản nội mạc tử cung, polyp buồng tử cung, rong kinh (như trường hợp của chị sau 5 năm). Cần siêu âm và sinh thiết kiểm tra.',
      'Cơn bốc hỏa, đổ mồ hôi đêm: Tập thể dục nhẹ, mặc đồ thoáng mát, hạn chế cay nóng.',
      'Nguy cơ huyết khối tắc mạch sâu (DVT): Tránh ngồi bất động lâu, uống đủ nước.'
    ],
    relevanceToTamoxifenPatients: 'Chị đã hoàn thành xuất sắc liệu trình 5 năm (2021 - 01/2026). Sứ mệnh bảo vệ tuyến vú của Tamoxifen đã hoàn tất!'
  },
  {
    id: 'therapy-aromatase-inhibitors',
    name: 'Thuốc Ức Chế Men Aromatase (AI) ± Ức Chế Buồng Trứng (OFS)',
    tradeNames: 'Letrozole (Femara), Anastrozole (Arimidex), Exemestane (Aromasin) ± Goserelin (Zoladex)',
    drugClass: 'Aromatase Inhibitors (AI) & GnRH Agonist (OFS)',
    laymanAnalogy: 'Cắt đứt nguồn cung cấp: Khóa triệt để các nhà máy sản xuất Estrogen ở mô mỡ và cơ, dọn sạch hormone trong máu, làm teo mỏng niêm mạc tử cung hoàn toàn (không bao giờ gây dày tử cung hay rong kinh).',
    mechanismOfAction: 'AI ức chế triệt để men Aromatase (chuyển đổi androgen thành estrogen ở mô mỡ và cơ). Với phụ nữ tiền mãn kinh, cần kết hợp tiêm Zoladex để tạm thời "ru ngủ" buồng trứng ngừng sản xuất estrogen.',
    clinicalTrialMilestone: 'Thử nghiệm SOFT & TEXT: Phối hợp AI + OFS (Zoladex) giúp cải thiện tỷ lệ sống không bệnh (DFS) vượt trội so với Tamoxifen đơn thuần ở phụ nữ trẻ có nguy cơ tái phát cao.',
    fdaApprovalStatus: 'FDA phê duyệt điều trị bổ trợ bước 1 cho phụ nữ sau mãn kinh hoặc tiền mãn kinh kết hợp OFS.',
    targetPatientPopulation: 'Phụ nữ mãn kinh hoặc phụ nữ trẻ tuổi có hạch di căn/nguy cơ tái phát cao.',
    routeAndDosage: 'Letrozole 2.5mg/ngày hoặc Anastrozole 1mg/ngày đường uống + Tiêm dưới da Zoladex 3.6mg mỗi 28 ngày (nếu chưa mãn kinh).',
    benefitsAndOutcomes: [
      'Hiệu quả giảm estrogen trong máu sâu hơn Tamoxifen (> 98%).',
      'KHÔNG GÂY DÀY NỘI MẠC TỬ CUNG HAY RONG KINH (vì không có tính chất chủ vận estrogen trên tử cung như Tamoxifen).'
    ],
    sideEffectsAndManagement: [
      'Đau nhức cơ khớp, cứng khớp buổi sáng: Bổ sung vận động nhẹ nhàng, dùng Glucosamine/Collagen.',
      'Giảm mật độ xương / Loãng xương: Đo DEXA định kỳ, bổ sung Canxi + Vitamin D3 và truyền Axit Zoledronic (Zometa).'
    ],
    relevanceToTamoxifenPatients: 'Nếu sau này cần điều trị nội tiết kéo dài mà muốn tránh hoàn toàn biến chứng tử cung, AI là lựa chọn thay thế hàng đầu.'
  },

  // =========================================================================
  // 2. THUỐC ỨC CHẾ CDK4/6 THẾ HỆ MỚI (ĐỘT PHÁ 2024 - 2026)
  // =========================================================================
  {
    id: 'therapy-ribociclib',
    name: 'Ribociclib (Kisqali) - Đột Phá Mới Được FDA Phê Duyệt 09/2024',
    tradeNames: 'Kisqali (Novartis) / Kisqali Femara Co-Pack',
    drugClass: 'Thuốc ức chế chọn lọc CDK4/6 (Cyclin-Dependent Kinase 4/6 Inhibitor)',
    laymanAnalogy: 'Bộ phanh hãm tế bào khẩn cấp: Khi tế bào ung thư vú chuẩn bị nhân đôi, Ribociclib đạp phanh tại trạm kiểm soát G1/S, ép tế bào u rơi vào trạng thái ngủ đông vĩnh viễn và tự tiêu biến.',
    mechanismOfAction: 'Khóa chọn lọc hai enzym CDK4 và CDK6, ngăn tế bào ung thư vú chuyển từ pha G1 sang pha S trong chu kỳ tế bào, làm tế bào u ngừng phân chia vĩnh viễn.',
    clinicalTrialMilestone: 'Thử nghiệm Pha III NATALEE (NCT03701334) công bố tại ASCO và được FDA chính thức phê duyệt ngày 17/09/2024: Phối hợp Ribociclib 400mg + Thuốc nội tiết giúp giảm 25.1% nguy cơ tái phát xâm lấn (iDFS) ở bệnh nhân K vú giai đoạn sớm (Giai đoạn II & III, bao gồm cả nhóm chưa di căn hạch nhưng có u > 2cm kèm Ki-67 cao).',
    fdaApprovalStatus: 'FDA phê duyệt tháng 09/2024 & NCCN Cập nhật Category 1 Preferred (Ưu tiên số 1).',
    targetPatientPopulation: 'Bệnh nhân K vú HR+/HER2- giai đoạn II và III có nguy cơ tái phát (cả nhóm có hạch và không có hạch nguy cơ cao).',
    routeAndDosage: 'Uống 400mg/ngày (2 viên 200mg) trong 21 ngày liên tục, nghỉ 7 ngày (chu kỳ 28 ngày), kéo dài trong 3 năm kết hợp thuốc nội tiết.',
    benefitsAndOutcomes: [
      'Kéo dài thời gian sống không bệnh xâm lấn vượt trội.',
      'Liều 400mg trong thử nghiệm NATALEE giúp giảm đáng kể tác dụng phụ so với liều 600mg ở giai đoạn di căn.',
      'Là thuốc ức chế CDK4/6 duy nhất được NCCN khuyến cáo cho cả bệnh nhân chưa di căn hạch (Node-Negative High Risk).'
    ],
    sideEffectsAndManagement: [
      'Giảm bạch cầu trung tính (Neutropenia): Xét nghiệm công thức máu định kỳ trước mỗi chu kỳ.',
      'Tăng men gan nhẹ: Theo dõi chức năng gan ALT/AST định kỳ.',
      'Kéo dài khoảng QT trên điện tâm đồ: Đo ECG trước khi dùng và sau chu kỳ 1.'
    ],
    relevanceToTamoxifenPatients: 'Là vũ khí hiện đại bậc nhất hiện nay giúp ngăn chặn tái phát từ gốc rễ cho các trường hợp K vú thể nội tiết.'
  },
  {
    id: 'therapy-abemaciclib',
    name: 'Abemaciclib (Verzenio) - Ức Chế CDK4/6 Bổ Trợ Giai Đoạn Có Hạch',
    tradeNames: 'Verzenio (Eli Lilly)',
    drugClass: 'Thuốc ức chế chọn lọc CDK4/6',
    laymanAnalogy: 'Lưới phong tỏa 24/7: Khóa liên tục động cơ phân chia tế bào u ở bệnh nhân có di căn hạch nách nguy cơ cao, ngăn chặn tế bào u di chuyển xa.',
    mechanismOfAction: 'Ức chế liên tục enzym CDK4 và CDK6, có ái lực mạnh đặc biệt với phức hợp Cyclin D1-CDK4.',
    clinicalTrialMilestone: 'Thử nghiệm monarchE: Điều trị 2 năm Abemaciclib 150mg x 2 lần/ngày kết hợp thuốc nội tiết giúp giảm 33.6% nguy cơ tái phát xâm lấn sau 5 năm theo dõi.',
    fdaApprovalStatus: 'FDA phê duyệt điều trị bổ trợ cho K vú HR+/HER2- giai đoạn sớm có nguy cơ cao (≥ 4 hạch dương tính, hoặc 1-3 hạch kèm u ≥ 5cm hoặc Grade 3).',
    targetPatientPopulation: 'Bệnh nhân K vú thể nội tiết có di căn hạch nách nguy cơ cao.',
    routeAndDosage: 'Uống 150mg x 2 lần/ngày (uống liên tục hàng ngày không có ngày nghỉ) trong vòng 2 năm.',
    benefitsAndOutcomes: [
      'Duy trì hiệu quả bảo vệ kéo dài ngay cả sau khi đã ngừng uống 2 năm thuốc.',
      'Uống liên tục không cần chu kỳ ngắt quãng.'
    ],
    sideEffectsAndManagement: [
      'Tiêu chảy (thường gặp trong tháng đầu): Chuẩn bị sẵn thuốc Loperamide (Imodium), uống nhiều nước bù điện giải.',
      'Mệt mỏi nhẹ, giảm bạch cầu mức độ nhẹ.'
    ],
    relevanceToTamoxifenPatients: 'Thường được chỉ định ngay sau phẫu thuật/hóa trị cho các ca có hạch nách dương tính.'
  },

  // =========================================================================
  // 3. THUỐC SERD ĐƯỜNG UỐNG THẾ HỆ MỚI & PROTAC (ĐIỀU TRỊ KHÁNG NỘI TIẾT)
  // =========================================================================
  {
    id: 'therapy-elacestrant',
    name: 'Elacestrant (Orserdu) - Thuốc SERD Đường Uống Đầu Tiên Thế Giới',
    tradeNames: 'Orserdu (Stemline Therapeutics / Menarini)',
    drugClass: 'Oral SERD (Selective Estrogen Receptor Degrader)',
    laymanAnalogy: 'Chiếc kìm tiêu hủy ổ khóa: Khi tế bào u bị đột biến gen ESR1 làm ổ khóa Estrogen bị kẹt không thể khóa bằng Tamoxifen, Elacestrant bẻ gãy và nghiền nát luôn ổ khóa này.',
    mechanismOfAction: 'Không chỉ khóa thụ thể Estrogen như Tamoxifen mà còn gắn chặt và LÀM PHÂN HỦY / TIÊU BIẾN hoàn toàn thụ thể ER trên màng tế bào, đặc biệt hiệu quả trên các tế bào đã bị đột biến gen *ESR1*.',
    clinicalTrialMilestone: 'Thử nghiệm Pha III EMERALD: Elacestrant giúp kéo dài thời gian sống không tiến triển (PFS) gấp nhiều lần so với các thuốc nội tiết tiêu chuẩn ở bệnh nhân có đột biến gen *ESR1* sau khi đã kháng CDK4/6.',
    fdaApprovalStatus: 'FDA phê duyệt chính thức cho bệnh nhân K vú tiến triển/di căn ER+/HER2- có đột biến gen *ESR1*.',
    targetPatientPopulation: 'Bệnh nhân K vú thể nội tiết có phát hiện đột biến *ESR1* qua xét nghiệm sinh thiết lỏng (ctDNA / Guardant360).',
    routeAndDosage: 'Uống 345mg (1 viên) x 1 lần/ngày cùng với thức ăn.',
    benefitsAndOutcomes: [
      'Dạng viên uống tiện lợi thay thế cho mũi tiêm bắp sâu đau đớn Fulvestrant (Faslodex) trước đây.',
      'Giải quyết triệt để cơ chế kháng thuốc phổ biến nhất của Tamoxifen và Aromatase Inhibitors (đột biến *ESR1*).'
    ],
    sideEffectsAndManagement: [
      'Buồn nôn nhẹ, khó tiêu: Uống sau bữa ăn no.',
      'Tăng lipid máu, đau cơ xương khớp nhẹ.'
    ],
    relevanceToTamoxifenPatients: 'Là giải pháp dự phòng tương lai tuyệt vời nếu có hiện tượng đột biến thụ thể nội tiết.'
  },
  {
    id: 'therapy-capivasertib',
    name: 'Capivasertib (Truqap) - Ức Chế Đột Phá Con Đường Tín Hiệu AKT',
    tradeNames: 'Truqap (AstraZeneca)',
    drugClass: 'Pan-AKT Kinase Inhibitor',
    laymanAnalogy: 'Chặn đứng đường tắt trốn thoát: Khi bị thuốc nội tiết chặn cửa chính, tế bào ung thư mở con đường hầm PI3K/AKT/PTEN để sống sót; Capivasertib bịt kín con đường hầm này.',
    mechanismOfAction: 'Ức chế cả 3 đồng phân AKT1, AKT2, AKT3 – chặn đứng con đường tín hiệu PI3K/AKT/PTEN vốn là "đường vòng" giúp tế bào ung thư sống sót khi bị khóa Estrogen.',
    clinicalTrialMilestone: 'Thử nghiệm Pha III CAPItello-291: Phối hợp Capivasertib + Fulvestrant giúp tăng gấp đôi thời gian sống không tiến triển (PFS) ở bệnh nhân có biến đổi gen *PIK3CA*, *AKT1* hoặc *PTEN*.',
    fdaApprovalStatus: 'FDA phê duyệt chính thức tháng 11/2023 kết hợp Fulvestrant.',
    targetPatientPopulation: 'Bệnh nhân K vú HR+/HER2- có mang ít nhất 1 đột biến trong con đường PIK3CA/AKT1/PTEN.',
    routeAndDosage: 'Uống 400mg x 2 lần/ngày trong 4 ngày liên tục, nghỉ 3 ngày mỗi tuần.',
    benefitsAndOutcomes: [
      'Hiệu quả vượt trội trên các ca ung thư vú thể nội tiết kháng thuốc.',
      'Lịch uống 4 ngày uống - 3 ngày nghỉ giúp cơ thể phục hồi nhanh, ít độc tính.'
    ],
    sideEffectsAndManagement: [
      'Tăng đường huyết (Hyperglycemia): Theo dõi đường huyết mao mạch định kỳ.',
      'Phát ban da, tiêu chảy nhẹ: Dùng thuốc kháng histamin và bôi dưỡng ẩm da.'
    ],
    relevanceToTamoxifenPatients: 'Minh chứng cho kỷ nguyên y học chính xác: cá thể hóa điều trị theo từng mã gen của khối u.'
  },

  // =========================================================================
  // 4. KHÁNG THỂ LIÊN HỢP THUỐC (ADCs) - KỶ NGUYÊN HER2-LOW & ULTRALOW
  // =========================================================================
  {
    id: 'therapy-tdxd-enhertu',
    name: 'Trastuzumab Deruxtecan (T-DXd / Enhertu) - Vũ Khí Đột Phá HER2-Low & Ultralow',
    tradeNames: 'Enhertu (Daiichi Sankyo / AstraZeneca)',
    drugClass: 'Kháng thể liên hợp thuốc (ADC - Antibody-Drug Conjugate)',
    laymanAnalogy: 'Tên lửa hành trình mang đầu đạn thông minh: Tìm đúng thụ thể HER2 (ngay cả khi rất ít ở thể HER2-low), gắn vào và phóng thích thuốc hóa trị cực mạnh phát nổ bên trong tế bào u, đồng thời quét sạch các tế bào ác tính lân cận.',
    mechanismOfAction: 'Gồm kháng thể đơn dòng nhắm trúng đích HER2 gắn với chất độc tế bào hóa trị cực mạnh (Deruxtecan - ức chế Topoisomerase I) với tỷ lệ tải thuốc cực cao (8 phân tử thuốc/1 kháng thể). Có "hiệu ứng tiêu diệt lân cận" (Bystander effect) tiêu diệt cả các tế bào u xung quanh.',
    clinicalTrialMilestone: 'Thử nghiệm DESTINY-Breast04 & DESTINY-Breast06 (Báo cáo tại ASCO 2024): Đột phá lịch sử khi T-DXd kéo dài sống còn vượt trội ở cả bệnh nhân **HER2-low** (IHC 1+, IHC 2+/ISH-) và **HER2-ultralow** (IHC 0 có bắt màng nhẹ) thể thụ thể nội tiết dương tính.',
    fdaApprovalStatus: 'FDA phê duyệt cho K vú di căn HER2-low và mở rộng trong các hướng dẫn NCCN mới nhất.',
    targetPatientPopulation: 'Bệnh nhân K vú có mức bộc lộ HER2 từ thấp đến siêu thấp (chiếm hơn 60% tổng số bệnh nhân K vú thể nội tiết).',
    routeAndDosage: 'Truyền tĩnh mạch 5.4 mg/kg mỗi 3 tuần một lần (chu kỳ 21 ngày).',
    benefitsAndOutcomes: [
      'Định nghĩa lại hoàn toàn điều trị ung thư vú: Ngay cả khi xét nghiệm HER2 âm tính trước đây (HER2-low), bệnh nhân vẫn được hưởng lợi từ "tên lửa dẫn đường" T-DXd.',
      'Tỷ lệ đáp ứng khối u thu nhỏ lên tới hơn 50-60%.'
    ],
    sideEffectsAndManagement: [
      'Viêm phổi kẽ (ILD / Pneumonitis): Chụp CT ngực và báo ngay bác sĩ nếu có ho khan hoặc khó thở.',
      'Buồn nôn, rụng tóc, giảm bạch cầu: Sử dụng thuốc chống nôn dự phòng trước truyền.'
    ],
    relevanceToTamoxifenPatients: 'Mở ra cánh cửa hy vọng rộng lớn cho phụ nữ có khối u vú thể nội tiết nếu bệnh có dấu hiệu tiến triển.'
  },
  {
    id: 'therapy-olaparib',
    name: 'Olaparib (Lynparza) - Ức Chế PARP Cho Đột Biến Gen BRCA',
    tradeNames: 'Lynparza (AstraZeneca / Merck)',
    drugClass: 'Thuốc ức chế PARP (Poly ADP-ribose Polymerase)',
    laymanAnalogy: 'Đòn khóa kép: Tế bào u mang đột biến gen BRCA vốn đã hỏng 1 cơ chế sửa chữa ADN; Olaparib khóa nốt cơ chế sửa chữa thứ hai (PARP), khiến tế bào ung thư tích tụ tổn thương và tự sụp đổ hoàn toàn.',
    mechanismOfAction: 'Ức chế enzym PARP sửa chữa ADN sợi đơn. Khi kết hợp với khiếm khuyết sửa chữa ADN sợi đôi do đột biến gen BRCA1/2, tế bào ung thư bị "tiêu diệt tổng hợp" (Synthetic lethality) và tự chết.',
    clinicalTrialMilestone: 'Thử nghiệm Pha III OlympiA: Uống 1 năm Olaparib bổ trợ giúp giảm 32% nguy cơ tử vong và giảm 42% nguy cơ tái phát ở bệnh nhân K vú giai đoạn sớm có đột biến gen mầm gBRCA1/2 nguy cơ cao.',
    fdaApprovalStatus: 'FDA phê duyệt điều trị bổ trợ cho K vú giai đoạn sớm có đột biến gen BRCA.',
    targetPatientPopulation: 'Bệnh nhân K vú có đột biến gen di truyền BRCA1 hoặc BRCA2 (xét nghiệm máu/nước bọt).',
    routeAndDosage: 'Uống 300mg (2 viên 150mg) x 2 lần/ngày trong đúng 1 năm liên tục.',
    benefitsAndOutcomes: [
      'Điều trị trúng đích tận gốc đột biến gen di truyền.',
      'Cải thiện đáng kể tỷ lệ sống còn toàn bộ (Overall Survival).'
    ],
    sideEffectsAndManagement: [
      'Thiếu máu, mệt mỏi: Kiểm tra công thức máu hàng tháng.',
      'Buồn nôn nhẹ: Uống thuốc sau ăn.'
    ],
    relevanceToTamoxifenPatients: 'Nếu gia đình có nhiều người mắc K vú hoặc K buồng trứng, việc xét nghiệm gen BRCA sẽ giúp xác định có cần dùng Olaparib hay không.'
  }
];
