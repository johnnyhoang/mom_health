export interface Year5To10CheckItem {
  id: string;
  timing: string; // "Mỗi 6 tháng" | "Mỗi 12 tháng" | "Mỗi 3 tháng" | "1 lần duy nhất"
  type: 'exam' | 'lab' | 'imaging' | 'lifestyle' | 'nutrition' | 'watchout';
  category: string;
  title: string;
  detail: string;
  whyImportant: string;
  urgency: 'routine' | 'important' | 'critical';
  doctorSpecialty: string;
  luminalASpecific: boolean;
}

export interface NutritionGuideline {
  id: string;
  category: 'encourage' | 'limit' | 'avoid' | 'supplement';
  food: string;
  reason: string;
  evidence: string;
  note?: string;
}

export interface LifestyleGuideline {
  id: string;
  category: 'exercise' | 'sleep' | 'stress' | 'environment' | 'sexual_health' | 'work';
  title: string;
  detail: string;
  evidence: string;
}

export interface WarningSigns {
  id: string;
  urgency: 'go_now' | '24h' | 'next_appointment';
  sign: string;
  possibleMeaning: string;
  action: string;
}

// ============================================================
// LỊCH KHÁM VÀ XÉT NGHIỆM NĂM 5 - 10
// ============================================================
export const year5to10Checklist: Year5To10CheckItem[] = [
  // --- KHÁM LÂM SÀNG ---
  {
    id: 'check-oncology-visit',
    timing: 'Mỗi 6 - 12 tháng',
    type: 'exam',
    category: 'Khám Ung Bướu',
    title: 'Khám lâm sàng định kỳ Bác sĩ Ung Bướu',
    detail: 'Khám thể chất tuyến vú hai bên, hạch nách, cổ và thượng đòn. Đánh giá triệu chứng, tác dụng phụ thuốc, chất lượng cuộc sống.',
    whyImportant: 'Phát hiện tái phát tại chỗ hoặc di căn sớm nhất. Theo ASCO, khám lâm sàng định kỳ là cách hiệu quả nhất phát hiện tái phát HR+ Luminal A.',
    urgency: 'critical',
    doctorSpecialty: 'Ung bướu / Phụ khoa Ung bướu',
    luminalASpecific: true
  },
  {
    id: 'check-mammography',
    timing: 'Mỗi 12 tháng',
    type: 'imaging',
    category: 'Hình Ảnh Học Vú',
    title: 'Chụp Nhũ Ảnh (Mammography) + Siêu Âm Doppler Tuyến Vú',
    detail: 'Chụp nhũ ảnh kỹ thuật số cả hai bên vú. Nếu mật độ vú dày đặc (BI-RADS C/D), bổ sung thêm siêu âm tuyến vú để tăng độ nhạy phát hiện.',
    whyImportant: 'Phát hiện ung thư vú đối bên (giảm 50% nhờ Tamoxifen nhưng cần theo dõi) và tái phát tại chỗ không triệu chứng. Tiêu chuẩn NCCN Breast 2025.',
    urgency: 'critical',
    doctorSpecialty: 'Chẩn đoán hình ảnh / Ung bướu',
    luminalASpecific: true
  },
  {
    id: 'check-gynecology',
    timing: 'Mỗi 6 - 12 tháng',
    type: 'exam',
    category: 'Phụ Khoa',
    title: 'Siêu Âm Đầu Dò Âm Đạo & Khám Phụ Khoa',
    detail: 'Đo độ dày nội mạc tử cung, theo dõi u xơ, buồng trứng. Sau khi ngưng Tamoxifen (tháng 1/2026), niêm mạc cần trở về < 5mm. Nếu còn dày hoặc ra máu bất thường cần sinh thiết ngay.',
    whyImportant: 'Tamoxifen tăng nguy cơ ung thư nội mạc tử cung 2-3 lần. Dù đã ngưng thuốc, cần theo dõi tiếp ít nhất 5 năm sau khi dừng. ACOG Practice Bulletin 2023.',
    urgency: 'critical',
    doctorSpecialty: 'Phụ khoa / Phụ khoa Ung bướu',
    luminalASpecific: true
  },
  {
    id: 'check-pap-hpv',
    timing: 'Mỗi 3 năm (Pap) / Mỗi 5 năm (co-test HPV)',
    type: 'lab',
    category: 'Phụ Khoa',
    title: 'Phết Tế Bào Cổ Tử Cung (Pap Smear) + Xét nghiệm HPV',
    detail: 'Tầm soát ung thư cổ tử cung định kỳ không liên quan đến K vú nhưng bắt buộc cho sức khỏe phụ khoa toàn diện. Theo ACOG 2021.',
    whyImportant: 'Tầm soát ung thư cổ tử cung tiêu chuẩn cho tất cả phụ nữ. Không liên quan trực tiếp K vú nhưng cần thiết trong theo dõi phụ khoa toàn diện.',
    urgency: 'important',
    doctorSpecialty: 'Phụ khoa',
    luminalASpecific: false
  },
  {
    id: 'check-bone-density',
    timing: 'Mỗi 2 năm',
    type: 'imaging',
    category: 'Loãng Xương',
    title: 'Đo Mật Độ Xương (DEXA Scan / DXA)',
    detail: 'Đo mật độ xương cột sống thắt lưng và cổ xương đùi bằng phương pháp DEXA. Nếu chuyển sang dùng Aromatase Inhibitor (AI) như Letrozole, cần đo mỗi 12-18 tháng.',
    whyImportant: 'Mãn kinh (tự nhiên hoặc do thuốc) làm mất xương nhanh. AI giảm estrogen sâu hơn Tamoxifen, tăng nguy cơ gãy xương đến 20-30%. NOF Guidelines và ASCO khuyến cáo tầm soát chủ động.',
    urgency: 'important',
    doctorSpecialty: 'Nội tiết / Cơ xương khớp / Ung bướu',
    luminalASpecific: true
  },
  {
    id: 'check-lipid-metabolic',
    timing: 'Mỗi 12 tháng',
    type: 'lab',
    category: 'Tim Mạch & Chuyển Hóa',
    title: 'Bộ Xét Nghiệm Tim Mạch - Chuyển Hóa Toàn Diện',
    detail: 'Công thức máu toàn phần (CBC), mỡ máu 4 chỉ số (Cholesterol total, LDL, HDL, Triglyceride), đường huyết đói và HbA1c, chức năng gan (AST, ALT, GGT), chức năng thận (creatinine, eGFR).',
    whyImportant: 'Mãn kinh làm tăng nguy cơ tim mạch và đái tháo đường type 2 đáng kể. Phụ nữ sau K vú có nguy cơ tử vong do tim mạch cao hơn nếu không kiểm soát. AHA + ASCO khuyến cáo kiểm tra tim mạch định kỳ.',
    urgency: 'important',
    doctorSpecialty: 'Nội khoa / Tim mạch / Ung bướu',
    luminalASpecific: false
  },
  {
    id: 'check-vitamin-d',
    timing: 'Mỗi 6 - 12 tháng',
    type: 'lab',
    category: 'Vi Chất',
    title: 'Vitamin D3 (25-OH Vitamin D) + Canxi ion hóa',
    detail: 'Định lượng Vitamin D3 huyết thanh. Mục tiêu duy trì > 30 ng/mL (75 nmol/L). Bổ sung 1000-2000 IU/ngày nếu thiếu hụt. Kết hợp Canxi 1000-1200mg/ngày từ thực phẩm + bổ sung.',
    whyImportant: 'Việt Nam thiếu Vitamin D rất phổ biến (>80% phụ nữ). Vitamin D thiếu làm tăng nguy cơ loãng xương, giảm miễn dịch và có thể ảnh hưởng tiên lượng K vú (meta-analysis 2023).',
    urgency: 'important',
    doctorSpecialty: 'Nội tiết / Ung bướu',
    luminalASpecific: true
  },
  {
    id: 'check-tumor-markers',
    timing: 'Không khuyến cáo thường quy',
    type: 'lab',
    category: 'Chỉ Điểm U',
    title: 'Chỉ Điểm Khối U CA 15-3, CEA (Khi Có Triệu Chứng)',
    detail: 'NCCN và ASCO KHÔNG khuyến cáo làm CA15-3 và CEA thường quy vì không giúp phát hiện tái phát sớm hơn và gây lo âu không cần thiết. Chỉ làm khi có triệu chứng lâm sàng nghi ngờ (đau xương, ho kéo dài, gan to...).',
    whyImportant: 'Nghiên cứu GIVIO (2006) và nhiều meta-analysis: Theo dõi bằng CA15-3 thường quy không cải thiện sống còn so với chỉ khám lâm sàng + nhũ ảnh. Không nên tự ý làm.',
    urgency: 'routine',
    doctorSpecialty: 'Ung bướu (khi cần)',
    luminalASpecific: false
  },
  {
    id: 'check-mental-health',
    timing: 'Mỗi lần tái khám',
    type: 'exam',
    category: 'Sức Khỏe Tâm Thần',
    title: 'Đánh Giá Lo Âu, Trầm Cảm & Chất Lượng Cuộc Sống',
    detail: 'Sử dụng thang điểm PHQ-9 (trầm cảm) và GAD-7 (lo âu). Trên 40% bệnh nhân K vú trải qua lo âu tái phát (scanxiety). Cần hỗ trợ tâm lý chủ động.',
    whyImportant: 'Sức khỏe tâm thần ảnh hưởng trực tiếp đến tuân thủ điều trị và chất lượng cuộc sống. ASCO khuyến cáo sàng lọc tâm lý định kỳ trong follow-up K vú.',
    urgency: 'important',
    doctorSpecialty: 'Ung bướu / Tâm lý lâm sàng',
    luminalASpecific: false
  }
];

// ============================================================
// CHẾ ĐỘ DINH DƯỠNG
// ============================================================
export const nutritionGuidelines: NutritionGuideline[] = [
  {
    id: 'nut-cruciferous',
    category: 'encourage',
    food: 'Rau họ Cải (bông cải xanh, bắp cải, cải xoăn kale)',
    reason: 'Giàu sulforaphane và indole-3-carbinol - tăng cường chuyển hóa estrogen theo con đường lành mạnh (2-OHE thay vì 16α-OHE), có hoạt tính chống ung thư được nghiên cứu nhiều nhất.',
    evidence: 'Meta-analysis Nutrients 2021: tiêu thụ rau họ cải cao liên quan giảm 15% nguy cơ tái phát K vú HR+.',
    note: 'Ăn ít nhất 3-5 lần/tuần, có thể nấu chín nhẹ hoặc ăn sống.'
  },
  {
    id: 'nut-soy',
    category: 'encourage',
    food: 'Đậu nành và chế phẩm (đậu phụ, sữa đậu nành, edamame)',
    reason: 'Isoflavone đậu nành (genistein, daidzein) ở dạng thực phẩm KHÔNG làm tăng estrogen trong máu và an toàn cho bệnh nhân K vú HR+. Ngược lại, WHEL Study và LACE study cho thấy phụ nữ ăn đậu nành nhiều có tỷ lệ sống cao hơn.',
    evidence: 'JAMA Oncology 2017 (WHEL/LACE study, 9,514 bệnh nhân): đậu nành thực phẩm giảm 21% tử vong. Chỉ TRÁNH supplement isoflavone liều cao.',
    note: 'Tránh nhầm: đậu nành thực phẩm = AN TOÀN; supplement isoflavone liều cao (>100mg/ngày) = cần hỏi bác sĩ.'
  },
  {
    id: 'nut-omega3',
    category: 'encourage',
    food: 'Cá béo giàu Omega-3 (cá hồi, cá thu, cá mòi, cá trích)',
    reason: 'EPA và DHA trong cá béo có đặc tính chống viêm, ức chế sinh mạch máu nuôi khối u, hỗ trợ sức khỏe tim mạch sau mãn kinh và giảm đau khớp do AI.',
    evidence: 'Meta-analysis BMC Cancer 2023 (27 nghiên cứu): Omega-3 liên quan giảm 16% tái phát K vú.',
    note: 'Ăn 2-3 lần/tuần. Bổ sung dầu cá có thể xem xét nếu không ăn được cá: 1-2g EPA+DHA/ngày.'
  },
  {
    id: 'nut-mediterranean',
    category: 'encourage',
    food: 'Chế độ ăn Địa Trung Hải tổng thể (dầu ô-liu, rau xanh, quả hạch)',
    reason: 'Chế độ ăn Địa Trung Hải được chứng minh mạnh nhất giảm nguy cơ K vú và cải thiện tiên lượng sau điều trị.',
    evidence: 'PREDIMED trial + World Cancer Research Fund 2018: chế độ ăn Địa Trung Hải giảm 62% nguy cơ K vú HR+ ở phụ nữ sau mãn kinh.',
    note: 'Không cần ăn 100% theo kiểu Địa Trung Hải - áp dụng nguyên tắc: nhiều rau, ít thịt đỏ, dầu thực vật lành mạnh.'
  },
  {
    id: 'nut-fiber',
    category: 'encourage',
    food: 'Chất xơ cao (ngũ cốc nguyên hạt, đậu đỗ, quả mọng)',
    reason: 'Chất xơ giúp ruột đào thải estrogen đã qua gan, không cho tái hấp thu vào máu (enterohepatic recirculation). Cũng giảm nguy cơ tăng cân và kháng insulin.',
    evidence: 'WCRF/AICR 2018: tăng 10g chất xơ/ngày giảm 5% nguy cơ K vú.',
    note: 'Mục tiêu 25-30g chất xơ/ngày.'
  },
  {
    id: 'nut-alcohol',
    category: 'avoid',
    food: 'Rượu bia và đồ uống có cồn',
    reason: 'Rượu tăng nồng độ estrogen trong máu, làm tổn thương DNA tế bào và là yếu tố nguy cơ tái phát K vú đã được chứng minh rõ ràng nhất.',
    evidence: 'IARC/WHO 2018: Không có ngưỡng an toàn cho rượu với K vú. Mỗi 10g rượu/ngày (1 ly nhỏ) tăng 7-10% nguy cơ K vú HR+.',
    note: 'Khuyến cáo TUYỆT ĐỐI TRÁNH - không có khái niệm "uống vừa phải" an toàn với K vú.'
  },
  {
    id: 'nut-processed-meat',
    category: 'limit',
    food: 'Thịt đỏ và thịt chế biến sẵn (xúc xích, giăm bông, bacon)',
    reason: 'Thịt chế biến sẵn chứa nitrite, hợp chất N-nitroso và heterocyclic amines (HCA) hình thành khi nấu ở nhiệt độ cao - các chất gây ung thư.',
    evidence: 'IARC Group 1 carcinogen (thịt chế biến), Group 2A (thịt đỏ). WCRF 2018: thịt đỏ >500g/tuần tăng nguy cơ ung thư.',
    note: 'Hạn chế thịt đỏ < 350-500g/tuần chín. Tránh hoàn toàn thịt chế biến.'
  },
  {
    id: 'nut-sugar',
    category: 'limit',
    food: 'Đường tinh luyện, nước ngọt, bánh kẹo công nghiệp',
    reason: 'Đường làm tăng insulin và IGF-1 (Insulin-like Growth Factor 1) - yếu tố kích thích tăng trưởng tế bào ung thư trực tiếp. Ngoài ra gây tăng cân, béo phì là yếu tố nguy cơ chính của tái phát K vú sau mãn kinh.',
    evidence: 'WCRF/AICR 2018: béo phì sau mãn kinh tăng 30-40% nguy cơ K vú HR+.',
    note: 'Thay đường trắng bằng trái cây tươi, ưu tiên thực phẩm chỉ số đường huyết thấp (GI thấp).'
  },
  {
    id: 'nut-supplement-vit-d',
    category: 'supplement',
    food: 'Vitamin D3 + K2',
    reason: 'Hầu hết phụ nữ Việt Nam thiếu Vitamin D. Vitamin D3 hỗ trợ hấp thu canxi, sức khỏe xương, miễn dịch và có nghiên cứu liên quan đến tiên lượng K vú.',
    evidence: 'Endocrine Society Guidelines 2011: bổ sung 1500-2000 IU/ngày cho phụ nữ có nguy cơ cao thiếu hụt.',
    note: 'Xét nghiệm 25-OH Vitamin D trước khi bổ sung. Mục tiêu > 30 ng/mL.'
  },
  {
    id: 'nut-calcium',
    category: 'supplement',
    food: 'Canxi (từ thực phẩm ưu tiên hơn supplement)',
    reason: 'Cần thiết cho xương khỏe, đặc biệt khi dùng AI hoặc sau mãn kinh. Nguồn thực phẩm tốt nhất: sữa ít béo, sữa chua, đậu phụ canxi, rau xanh đậm.',
    evidence: 'NOF 2013: 1000-1200mg Canxi/ngày cho phụ nữ > 50 tuổi hoặc đang dùng AI.',
    note: 'Chia nhỏ 2 lần/ngày (không quá 500mg/lần để hấp thu tốt). Không dùng quá 2000mg/ngày.'
  }
];

// ============================================================
// LỐI SỐNG
// ============================================================
export const lifestyleGuidelines: LifestyleGuideline[] = [
  {
    id: 'life-exercise',
    category: 'exercise',
    title: 'Tập thể dục 150-300 phút/tuần cường độ vừa phải',
    detail: 'Mục tiêu: 150-300 phút/tuần aerobic cường độ vừa (đi bộ nhanh, bơi lội, đạp xe) + 2 lần/tuần tập sức mạnh (tạ nhẹ, kháng dây). Bắt đầu từ 10 phút/ngày nếu chưa quen.',
    evidence: 'ASCO 2022 Physical Activity Guidelines: tập thể dục đều đặn giảm 24-40% nguy cơ tái phát K vú, cải thiện mệt mỏi và trầm cảm. Cường độ vừa phải an toàn hơn và bền vững hơn cường độ cao.'
  },
  {
    id: 'life-weight',
    category: 'exercise',
    title: 'Duy trì BMI 18.5-24.9 kg/m²',
    detail: 'Cân nặng lý tưởng là "liệu pháp chống ung thư tự nhiên" hiệu quả nhất sau mãn kinh. Mô mỡ sản xuất Estrogen qua enzyme Aromatase - giảm mỡ = giảm Estrogen = giảm nguy cơ tái phát.',
    evidence: 'WCRF/AICR 2018: mỗi 5kg tăng cân sau mãn kinh tăng 11% nguy cơ K vú HR+. Giảm 10% cân nặng ở phụ nữ thừa cân sau điều trị có thể cải thiện tiên lượng đáng kể.'
  },
  {
    id: 'life-sleep',
    category: 'sleep',
    title: 'Ngủ đủ giấc 7-8 tiếng, đúng giờ',
    detail: 'Ngủ trước 23:00 và ngủ đủ 7-8 tiếng mỗi đêm. Melatonin tiết nhiều lúc 22:00-02:00 trong bóng tối hoàn toàn. Mất ngủ mạn tính làm tăng cortisol và giảm miễn dịch.',
    evidence: 'Sleep Medicine Reviews 2021: mất ngủ mạn tính liên quan tăng 36% nguy cơ tái phát K vú. Melatonin có thể đóng vai trò bảo vệ chống lại tế bào ung thư.'
  },
  {
    id: 'life-stress',
    category: 'stress',
    title: 'Quản lý stress: Thiền định, Yoga, Mindfulness',
    detail: 'Thực hành Mindfulness-Based Stress Reduction (MBSR) 8 tuần hoặc yoga 2-3 lần/tuần. Ghi nhật ký cảm xúc, tham gia nhóm hỗ trợ bệnh nhân. Hạn chế tin tức tiêu cực về bệnh.',
    evidence: 'JAMA Internal Medicine 2014 (MBSR trial): thiền định giảm 58% lo âu và 44% trầm cảm ở bệnh nhân K vú. Stress mãn tính làm tăng cortisol, ức chế NK cell (tế bào tiêu diệt ung thư).'
  },
  {
    id: 'life-no-smoke',
    category: 'environment',
    title: 'Tuyệt đối không hút thuốc lá (chủ động và thụ động)',
    detail: 'Bỏ thuốc hoàn toàn nếu đang hút. Tránh môi trường có khói thuốc. Thuốc lá chứa >70 chất gây ung thư và làm giảm hiệu quả điều trị K vú, tăng nguy cơ K thứ phát.',
    evidence: 'IARC Monograph 100E: hút thuốc lá là yếu tố nguy cơ độc lập cho K vú và nhiều loại ung thư khác. Người hút thuốc có tiên lượng K vú kém hơn đáng kể.'
  },
  {
    id: 'life-sexual',
    category: 'sexual_health',
    title: 'Sức khỏe tình dục & quan hệ vợ chồng',
    detail: 'Khô âm đạo (do thiếu estrogen) rất phổ biến sau điều trị. Dùng gel bôi trơn không hormone (K-Y, Replens) hoặc estrogen tại chỗ liều thấp (cần hỏi bác sĩ ung bướu trước). Trao đổi thẳng thắn với bạn đời về lo âu và thay đổi cơ thể.',
    evidence: 'ASCO 2023 Sexual Health Guideline: gel bôi trơn không hormone an toàn cho tất cả bệnh nhân K vú. Estrogen âm đạo liều cực thấp (< 25mcg/tuần) có thể dùng sau khi cân nhắc cùng bác sĩ ung bướu.'
  }
];

// ============================================================
// DẤU HIỆU CẢNH BÁO CẦN LIÊN HỆ BÁC SĨ NGAY
// ============================================================
export const warningSignsYear5to10: WarningSigns[] = [
  {
    id: 'warn-bone-pain',
    urgency: 'go_now',
    sign: 'Đau xương mới xuất hiện, đặc biệt cột sống, xương hông, xương chậu, đau tăng dần về đêm',
    possibleMeaning: 'Di căn xương — vị trí di căn phổ biến nhất của K vú HR+. Cần phân biệt với đau xương khớp thông thường do AI.',
    action: 'Liên hệ BS Ung Bướu trong 24-48 giờ. Không tự uống thuốc giảm đau che lấp triệu chứng.'
  },
  {
    id: 'warn-bleeding',
    urgency: 'go_now',
    sign: 'Ra máu âm đạo bất kỳ lúc nào (đã mãn kinh) hoặc ra máu bất thường nhiều bất thường',
    possibleMeaning: 'Ung thư nội mạc tử cung (biến chứng hiếm gặp nhưng cần loại trừ ngay) hoặc tăng sản nội mạc.',
    action: 'Đến khám phụ khoa trong 24-48 giờ. Siêu âm đầu dò và sinh thiết nội mạc nếu dày > 5mm.'
  },
  {
    id: 'warn-breast-lump',
    urgency: 'go_now',
    sign: 'Sờ thấy cục u mới ở vú, nách hoặc vùng thượng đòn; thay đổi da vú (đỏ, dày lên, co rút núm vú)',
    possibleMeaning: 'Tái phát tại chỗ hoặc ung thư vú đối bên — cần sinh thiết ngay để xác định.',
    action: 'Khám BS Ung Bướu trong 24-48 giờ. Không chờ đến lịch tái khám định kỳ.'
  },
  {
    id: 'warn-breath',
    urgency: '24h',
    sign: 'Khó thở mới xuất hiện, đặc biệt khi nằm, ho khan kéo dài > 3 tuần không rõ nguyên nhân',
    possibleMeaning: 'Di căn phổi hoặc tràn dịch màng phổi. Cần chụp X-quang/CT ngực để loại trừ.',
    action: 'Khám nội khoa hoặc ung bướu trong 24 giờ, báo rõ tiền sử K vú.'
  },
  {
    id: 'warn-headache',
    urgency: '24h',
    sign: 'Đau đầu dữ dội mới xuất hiện, thay đổi thị giác, yếu tay chân một bên',
    possibleMeaning: 'Di căn não — hiếm gặp ở Luminal A nhưng cần loại trừ khẩn cấp.',
    action: 'Đến cấp cứu nếu đột ngột nặng. Chụp MRI não khi có chỉ định.'
  },
  {
    id: 'warn-jaundice',
    urgency: '24h',
    sign: 'Vàng da, vàng mắt, đau hạ sườn phải, bụng to nhanh',
    possibleMeaning: 'Di căn gan — cần siêu âm và xét nghiệm chức năng gan ngay.',
    action: 'Khám nội khoa hoặc ung bướu trong 24 giờ.'
  },
  {
    id: 'warn-fatigue',
    urgency: 'next_appointment',
    sign: 'Mệt mỏi nặng không cải thiện sau nghỉ ngơi, kéo dài > 2 tuần',
    possibleMeaning: 'Nhiều nguyên nhân: thiếu máu, thiếu vitamin D, trầm cảm, suy giáp, hoặc hiếm hơn là bệnh tiến triển. Cần đánh giá toàn diện.',
    action: 'Báo với BS Ung Bướu trong lần tái khám tiếp theo hoặc sớm hơn nếu ảnh hưởng nhiều đến sinh hoạt.'
  }
];
