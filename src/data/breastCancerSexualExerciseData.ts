export interface SexualHealthTopic {
  id: string;
  category: 'impact_on_cancer' | 'post_treatment_challenges' | 'solutions' | 'endometrial_specific' | 'psychology' | 'when_to_pause';
  categoryLabel: string;
  title: string;
  summary: string;
  detailedContent: string[];
  evidence: string;
  recommendation: 'encouraged' | 'safe_with_precautions' | 'needs_doctor' | 'avoid_temporarily';
  recommendationNote: string;
}

export const sexualHealthTopics: SexualHealthTopic[] = [
  {
    id: 'sh_1',
    category: 'impact_on_cancer',
    categoryLabel: 'Tác động lên ung thư',
    title: 'Tác động sinh lý của quan hệ tình dục lên K vú',
    summary: 'Sinh hoạt tình dục hoàn toàn an toàn, không làm tăng nguy cơ tái phát K vú.',
    detailedContent: [
      'Nhiều bệnh nhân lo lắng quan hệ tình dục có thể ảnh hưởng đến bệnh K vú, đặc biệt là loại nội tiết dương tính (HR+).',
      'Thực tế, quan hệ tình dục kích thích giải phóng oxytocin và endorphin, giúp giảm căng thẳng và đau đớn, đồng thời giảm mức cortisol (hormone stress).',
      'Quan trọng nhất, sinh hoạt vợ chồng không làm tăng nồng độ estrogen trong máu ở phụ nữ đã mãn kinh hoặc đang điều trị nội tiết.',
      'Việc duy trì đời sống tình dục lành mạnh hoàn toàn không ảnh hưởng tiêu cực đến tiến triển hay khả năng tái phát của ung thư vú Luminal A.'
    ],
    evidence: 'Brody S, Psychoneuroendocrinology 2006; Kroenke CH, JAMA Oncol 2016',
    recommendation: 'encouraged',
    recommendationNote: 'Rất khuyến khích duy trì để tăng cường sức khỏe thể chất và tinh thần.'
  },
  {
    id: 'sh_2',
    category: 'psychology',
    categoryLabel: 'Tâm lý & Chất lượng sống',
    title: 'Lợi ích tâm lý và chất lượng cuộc sống',
    summary: 'Giúp giảm lo âu (scanxiety), cải thiện hình ảnh cơ thể và gắn kết tình cảm vợ chồng.',
    detailedContent: [
      'Gắn kết thể chất thông qua quan hệ tình dục kích thích sản sinh oxytocin (hormone tình yêu), giúp củng cố mối quan hệ vợ chồng sau những khó khăn của quá trình điều trị bệnh.',
      'Sự âu yếm và gần gũi giúp người phụ nữ cảm thấy được yêu thương, từ đó cải thiện sự tự ti về hình ảnh cơ thể (body image) do phẫu thuật hoặc tác dụng phụ của thuốc.',
      'Ngoài ra, tình dục lành mạnh giúp giảm "scanxiety" (nỗi lo âu mỗi khi đến kỳ kiểm tra sức khỏe/chụp chiếu) và cải thiện đáng kể chất lượng giấc ngủ.'
    ],
    evidence: 'Reese JB, Oncologist 2014; ASCO Survivorship 2023',
    recommendation: 'encouraged',
    recommendationNote: 'Nên chia sẻ cởi mở với bạn đời về những e ngại để cùng vượt qua rào cản tâm lý.'
  },
  {
    id: 'sh_3',
    category: 'post_treatment_challenges',
    categoryLabel: 'Thách thức sau điều trị',
    title: 'Khô âm đạo và hội chứng tiết niệu sinh dục (GSM)',
    summary: 'Tình trạng rất phổ biến ở phụ nữ điều trị K vú, có thể khắc phục bằng gel bôi trơn và kem dưỡng ẩm.',
    detailedContent: [
      'Từ 50-70% phụ nữ sau điều trị ung thư vú, đặc biệt là dùng liệu pháp nội tiết, gặp phải hội chứng tiết niệu sinh dục (GSM), với triệu chứng điển hình là khô âm đạo, đau rát khi quan hệ.',
      'Sự sụt giảm estrogen làm cho niêm mạc âm đạo mỏng đi, mất độ đàn hồi và giảm khả năng bôi trơn tự nhiên.',
      'Điều này hoàn toàn là tác dụng phụ sinh lý bình thường của thuốc, không phải do cơ thể hay sự hấp dẫn suy giảm.',
      'Sử dụng các loại kem dưỡng ẩm âm đạo (dùng hàng ngày hoặc vài ngày một lần, không chứa hormone) và gel bôi trơn gốc nước (dùng ngay khi quan hệ) là giải pháp đầu tay rất hiệu quả.'
    ],
    evidence: 'ASCO Sexual Health 2023; Suckling J, Cochrane 2006',
    recommendation: 'safe_with_precautions',
    recommendationNote: 'Sử dụng gel bôi trơn và dưỡng ẩm không chứa hormone một cách thường xuyên.'
  },
  {
    id: 'sh_4',
    category: 'solutions',
    categoryLabel: 'Giải pháp y khoa',
    title: 'Estrogen âm đạo liều thấp sau K vú',
    summary: 'Giải pháp bước 2 cho tình trạng teo khô âm đạo nặng, cần sự đồng thuận của bác sĩ ung bướu.',
    detailedContent: [
      'Với những trường hợp khô rát, teo âm đạo nghiêm trọng không đáp ứng với dưỡng ẩm và gel bôi trơn thông thường (non-hormonal), estrogen âm đạo liều rất thấp (dạng kem, viên đặt, hoặc vòng) có thể được xem xét.',
      'Việc sử dụng estrogen tại chỗ liều thấp có làm tăng nhẹ nồng độ estrogen trong máu ở thời gian ngắn ban đầu, tuy nhiên vẫn đang gây tranh cãi về nguy cơ đối với ung thư vú nội tiết dương tính (HR+).',
      'Đặc biệt lưu ý: Bệnh nhân đang dùng AI (Aromatase Inhibitors) có nguy cơ nhạy cảm với estrogen hơn bệnh nhân dùng Tamoxifen.',
      'Tuyệt đối không tự ý sử dụng, quyết định này phải dựa trên sự hội chẩn giữa bác sĩ phụ khoa và bác sĩ ung bướu lâm sàng.'
    ],
    evidence: 'ASCO 2023 Guidelines; Stuenkel CA NEJM 2023',
    recommendation: 'needs_doctor',
    recommendationNote: 'Chỉ cân nhắc khi các biện pháp không chứa hormone thất bại và có sự cho phép của bác sĩ ung bướu.'
  },
  {
    id: 'sh_5',
    category: 'endometrial_specific',
    categoryLabel: 'Vấn đề Nội mạc tử cung',
    title: 'Tác động lên nội mạc tử cung khi quan hệ',
    summary: 'Lưu ý đặc biệt khi có u xơ, lạc nội mạc tử cung (Adenomyosis) hoặc tăng sản nội mạc.',
    detailedContent: [
      'Trong trường hợp bệnh nhân ngưng Tamoxifen sau 5 năm, nhưng có u xơ tử cung lớn (ví dụ 45mm) và tình trạng lạc nội mạc tử cung trong cơ (Adenomyosis), sinh hoạt tình dục có thể gây ra một số khó chịu nhất định.',
      'Adenomyosis và u xơ tử cung có thể gây đau vùng chậu hoặc cảm giác đau sâu (deep dyspareunia) khi quan hệ thâm nhập.',
      'Việc quan hệ không làm tình trạng bệnh lý nội mạc tử cung xấu đi về mặt bản chất, nhưng những cơn co thắt tử cung khi đạt khoái cảm có thể gây trằn bụng hoặc ra máu nhẹ sau quan hệ.',
      'Nếu xuất hiện đau nhiều, ra máu bất thường hoặc chuột rút vùng chậu kéo dài, cần báo ngay cho bác sĩ phụ khoa để siêu âm và kiểm tra lại tình trạng nội mạc tử cung.'
    ],
    evidence: 'Ferrero S, Curr Opin Obstet Gynecol 2015',
    recommendation: 'safe_with_precautions',
    recommendationNote: 'Lắng nghe cơ thể, điều chỉnh tư thế để tránh đau sâu, đi khám ngay nếu có chảy máu âm đạo bất thường.'
  },
  {
    id: 'sh_6',
    category: 'psychology',
    categoryLabel: 'Tâm lý & Giao tiếp',
    title: 'Tâm lý sau ung thư vú và phẫu thuật',
    summary: 'Chấp nhận thay đổi về hình thể và vượt qua rào cản giao tiếp với bạn đời.',
    detailedContent: [
      'Phẫu thuật (đoạn nhũ, bảo tồn) và sẹo sau mổ thường để lại sang chấn tâm lý, khiến người phụ nữ cảm thấy mất đi sự nữ tính và e ngại khi gần gũi.',
      'Bên cạnh đó, việc rụng tóc (nếu có hóa trị trước đây) hay thay đổi về cân nặng cũng góp phần làm giảm tự tin (body image distress).',
      'Chìa khóa quan trọng nhất là sự giao tiếp cởi mở với bạn đời. Việc chia sẻ chân thành về những nỗi sợ, sự khó chịu về thể chất giúp người chồng thấu hiểu, kiên nhẫn và điều chỉnh để phù hợp với người vợ.',
      'Sự gần gũi không chỉ là thâm nhập tình dục (intercourse) mà còn là ôm ấp, vuốt ve, massage, tạo nền tảng vững chắc cho quá trình hồi phục tinh thần.'
    ],
    evidence: 'Schover LR, Cancer 2008; NCCN Survivorship 2024',
    recommendation: 'encouraged',
    recommendationNote: 'Giao tiếp là chìa khóa. Có thể nhờ đến chuyên gia tâm lý tư vấn nếu rào cản quá lớn.'
  },
  {
    id: 'sh_7',
    category: 'solutions',
    categoryLabel: 'Giải pháp y khoa',
    title: 'Các loại Lubricant (chất bôi trơn) an toàn',
    summary: 'Lựa chọn gel bôi trơn gốc nước, không chứa hormone để giảm đau rát an toàn.',
    detailedContent: [
      'Với bệnh nhân có tiền sử K vú HR+, nguyên tắc vàng là sử dụng chất bôi trơn và dưỡng ẩm không chứa nội tiết tố (non-hormonal).',
      'Chất bôi trơn (Lubricant): Sử dụng ngay trước và trong khi quan hệ để giảm ma sát. Nên chọn loại gốc nước (water-based) như YES WB, KY Jelly hoặc gốc silicone. Tránh loại có chứa chất tạo mùi, paraben, hoặc chất tạo cảm giác ấm/lạnh vì niêm mạc đang mỏng và dễ kích ứng.',
      'Dưỡng ẩm âm đạo (Vaginal Moisturizer): Sử dụng định kỳ 2-3 lần/tuần (ví dụ Replens, Hyalofemme) để cấp ẩm mô âm đạo lâu dài, phục hồi môi trường pH.',
      'Tuyệt đối đọc kỹ bảng thành phần để tránh các sản phẩm gắn mác tự nhiên nhưng chứa phytoestrogen (như chiết xuất mầm đậu nành hàm lượng cao).'
    ],
    evidence: 'ASCO 2023 Guidelines',
    recommendation: 'safe_with_precautions',
    recommendationNote: 'Nên thử một lượng nhỏ ở vùng da ngoài trước khi dùng để kiểm tra kích ứng.'
  },
  {
    id: 'sh_8',
    category: 'when_to_pause',
    categoryLabel: 'Lưu ý khi quan hệ',
    title: 'Khi nào cần KIÊNG quan hệ tạm thời',
    summary: 'Những thời điểm y khoa bắt buộc phải tạm ngừng sinh hoạt tình dục để đảm bảo an toàn.',
    detailedContent: [
      'Dù tình dục mang lại nhiều lợi ích, có những giai đoạn bắt buộc phải kiêng hoặc cực kỳ thận trọng:',
      '1. Ngay sau phẫu thuật (vú, nạo hạch, tái tạo, hoặc phẫu thuật phụ khoa liên quan nội mạc tử cung): Cần kiêng đến khi bác sĩ cho phép, vết mổ lành lặn để tránh rách vết thương, nhiễm trùng.',
      '2. Đang trong giai đoạn hóa trị bị giảm bạch cầu sâu (neutropenia) hoặc giảm tiểu cầu: Nguy cơ nhiễm trùng và chảy máu âm đạo rất cao.',
      '3. Đang trong liệu trình xạ trị vùng chậu (nếu có bệnh lý vùng chậu đi kèm): Mô âm đạo đang tổn thương cấp tính.',
      '4. Đang có viêm nhiễm nấm, vi khuẩn âm đạo hoặc chảy máu bất thường chưa rõ nguyên nhân.'
    ],
    evidence: 'NCCN Clinical Practice Guidelines in Oncology 2024',
    recommendation: 'avoid_temporarily',
    recommendationNote: 'Tuân thủ nghiêm ngặt chỉ định tạm kiêng của bác sĩ điều trị trong các giai đoạn nhạy cảm.'
  },
  {
    id: 'sh_9',
    category: 'post_treatment_challenges',
    categoryLabel: 'Thách thức sau điều trị',
    title: 'Quan hệ tình dục và loãng xương (khi dùng AI/ngưng Tamoxifen)',
    summary: 'Hoạt động tình dục không ảnh hưởng đến xương, nhưng rủi ro loãng xương là có thật sau điều trị nội tiết.',
    detailedContent: [
      'Phụ nữ đã từng điều trị K vú, đặc biệt khi sử dụng các thuốc ức chế aromatase (AI) hoặc sau khi ngưng Tamoxifen, thường đối mặt với nguy cơ giảm mật độ xương và loãng xương.',
      'Bản thân việc quan hệ tình dục không gây tác động xấu lên xương khớp hay làm tăng nguy cơ gãy xương trong sinh hoạt bình thường.',
      'Tuy nhiên, bệnh nhân cần tránh các tư thế gây áp lực mạnh lên cột sống hoặc các khớp có biểu hiện đau mỏi (đặc biệt nếu đang có đau khớp do AI).',
      'Để bảo vệ sức khỏe xương khớp lâu dài, cần tập trung vào việc bổ sung Canxi/Vitamin D, đo mật độ xương (DEXA) định kỳ và quan trọng nhất là tập thể dục kháng lực (tập tạ).'
    ],
    evidence: 'National Osteoporosis Foundation (NOF) Guidelines',
    recommendation: 'encouraged',
    recommendationNote: 'Quan hệ tình dục nhẹ nhàng và thoải mái là an toàn. Ưu tiên tập thể dục sức mạnh để bảo vệ xương.'
  }
];

export interface ExerciseType {
  id: string;
  name: string;
  emoji: string;
  category: 'cardio' | 'strength' | 'mindBody' | 'dance' | 'water';
  intensityLevel: 'low' | 'moderate' | 'high';
  benefits: string[];
  benefitsEvidence: string;
  precautions: string[];
  breastCancerBenefit: string;
  endometrialBenefit: string;
  recommendation: 'strongly_recommended' | 'recommended' | 'optional' | 'with_caution';
  weeklyTarget: string;
  startingTip: string;
}

export const exerciseTypes: ExerciseType[] = [
  {
    id: 'ex_1',
    name: 'Chạy bộ',
    emoji: '🏃‍♀️',
    category: 'cardio',
    intensityLevel: 'high',
    benefits: ['Tăng cường tim mạch', 'Đốt calo, kiểm soát cân nặng', 'Cải thiện sức bền'],
    benefitsEvidence: 'ASCO 2022',
    precautions: ['Tránh nếu có vấn đề khớp gối nghiêm trọng', 'Lắng nghe cơ thể, tránh quá sức gây lymphedema'],
    breastCancerBenefit: 'Giúp giảm mỡ cơ thể, giảm nồng độ estrogen nội sinh, liên quan đến giảm nguy cơ tái phát K vú.',
    endometrialBenefit: 'Giảm kháng insulin và béo phì - yếu tố nguy cơ của tăng sản nội mạc tử cung.',
    recommendation: 'recommended',
    weeklyTarget: '75-150 phút/tuần (nếu sức khỏe cho phép)',
    startingTip: 'Bắt đầu bằng đi bộ xen kẽ chạy chậm. Sử dụng giày chạy bộ chuyên dụng giảm chấn động.'
  },
  {
    id: 'ex_2',
    name: 'Đi bộ nhanh',
    emoji: '🚶‍♀️',
    category: 'cardio',
    intensityLevel: 'moderate',
    benefits: ['Dễ thực hiện', 'Tốt cho tim mạch và tuần hoàn', 'Giảm căng thẳng'],
    benefitsEvidence: 'Holmes JAMA 2005',
    precautions: ['Chú ý tư thế đi để tránh đau lưng'],
    breastCancerBenefit: 'Bài tập tiêu chuẩn vàng cho bệnh nhân K vú, dễ duy trì, giúp giảm tỷ lệ tử vong do K vú rõ rệt.',
    endometrialBenefit: 'Giảm xung huyết vùng chậu nhẹ nhàng, kiểm soát cân nặng tốt.',
    recommendation: 'strongly_recommended',
    weeklyTarget: '150-300 phút/tuần',
    startingTip: 'Đi nhanh sao cho vẫn có thể nói chuyện thành câu nhưng không thể hát.'
  },
  {
    id: 'ex_3',
    name: 'Yoga & Thiền định',
    emoji: '🧘‍♀️',
    category: 'mindBody',
    intensityLevel: 'low',
    benefits: ['Giảm stress (cortisol)', 'Tăng sự linh hoạt', 'Cải thiện giấc ngủ'],
    benefitsEvidence: 'Chandwani JNCI 2014',
    precautions: ['Tránh các tư thế đảo ngược lâu hoặc đè nén bụng mạnh nếu u xơ tử cung to (45mm)'],
    breastCancerBenefit: 'Đã được chứng minh làm giảm mệt mỏi do điều trị (cancer-related fatigue), giảm viêm và cải thiện tâm trạng.',
    endometrialBenefit: 'Giúp giãn cơ vùng chậu, có thể hỗ trợ giảm đau trằn bụng do Adenomyosis.',
    recommendation: 'strongly_recommended',
    weeklyTarget: '2-3 buổi/tuần',
    startingTip: 'Nên chọn các lớp Hatha Yoga hoặc Yoga phục hồi (Restorative Yoga) nhẹ nhàng.'
  },
  {
    id: 'ex_4',
    name: 'Bơi lội / Thể dục dưới nước',
    emoji: '🏊‍♀️',
    category: 'water',
    intensityLevel: 'moderate',
    benefits: ['Không tạo áp lực lên khớp', 'Mát mẻ, dễ chịu', 'Tập toàn thân'],
    benefitsEvidence: 'Chung cho hoạt động thể chất cường độ vừa',
    precautions: ['Lưu ý vệ sinh hồ bơi nếu đang có nguy cơ viêm nhiễm âm đạo'],
    breastCancerBenefit: 'Cực kỳ tốt cho những người bị phù bạch huyết (lymphedema) nhờ áp lực nước massage tự nhiên.',
    endometrialBenefit: 'Hoạt động toàn thân nhẹ nhàng, không gây áp lực mạnh lên vùng chậu.',
    recommendation: 'recommended',
    weeklyTarget: '2-3 buổi/tuần (30-45 phút/buổi)',
    startingTip: 'Nếu bơi ếch gây đau mỏi, có thể chuyển sang đi bộ dưới nước hoặc bơi ngửa.'
  },
  {
    id: 'ex_5',
    name: 'Nhảy Zumba / Khiêu vũ',
    emoji: '💃',
    category: 'dance',
    intensityLevel: 'moderate',
    benefits: ['Cải thiện tâm trạng cực tốt', 'Tập tim mạch vui vẻ', 'Tăng phản xạ'],
    benefitsEvidence: 'ASCO 2022',
    precautions: ['Cẩn thận với các động tác vặn xoắn vùng chậu mạnh nếu có u xơ to gây đau'],
    breastCancerBenefit: 'Kích thích não bộ tiết endorphin mạnh mẽ, giảm trầm cảm sau ung thư vú, duy trì vận động một cách vui vẻ.',
    endometrialBenefit: 'Cải thiện lưu thông máu, hỗ trợ sức khỏe tổng thể.',
    recommendation: 'recommended',
    weeklyTarget: '1-2 buổi/tuần',
    startingTip: 'Tham gia lớp học cộng đồng để tăng sự kết nối, tự do nhảy theo sức mình không cần hoàn hảo.'
  },
  {
    id: 'ex_6',
    name: 'Tập tạ / Kháng lực',
    emoji: '🏋️‍♀️',
    category: 'strength',
    intensityLevel: 'moderate',
    benefits: ['Tăng mật độ xương', 'Duy trì khối lượng cơ bắp', 'Tăng tỷ lệ trao đổi chất'],
    benefitsEvidence: 'Schmitz NEJM 2009',
    precautions: ['Phải bắt đầu với tạ rất nhẹ để tránh chấn thương, nhất là tay cùng bên từng phẫu thuật nạo hạch vú'],
    breastCancerBenefit: 'Bảo vệ xương khỏi loãng xương do di chứng nội tiết, chứng minh an toàn và không làm tệ lymphedema.',
    endometrialBenefit: 'Cơ bắp tăng giúp kiểm soát đường huyết cực tốt, giảm tích tụ mỡ nội tạng (nơi sản sinh estrogen dư thừa).',
    recommendation: 'strongly_recommended',
    weeklyTarget: '2 buổi/tuần',
    startingTip: 'Thuê PT (huấn luyện viên) trong vài buổi đầu để chỉnh tư thế chuẩn. Có thể tập với dây kháng lực trước.'
  },
  {
    id: 'ex_7',
    name: 'Đạp xe (Trong nhà hoặc Ngoài trời)',
    emoji: '🚴‍♀️',
    category: 'cardio',
    intensityLevel: 'moderate',
    benefits: ['Bảo vệ khớp gối', 'Tăng cường sức bền', 'Gần gũi thiên nhiên (ngoài trời)'],
    benefitsEvidence: 'ASCO 2022',
    precautions: ['Chọn yên xe thoải mái để không chèn ép vùng đáy chậu, nhất là khi có vấn đề phụ khoa'],
    breastCancerBenefit: 'Dạng cardio an toàn, đốt mỡ hiệu quả, hỗ trợ ngăn ngừa bệnh lý tim mạch.',
    endometrialBenefit: 'Tăng tuần hoàn máu nửa dưới cơ thể mà không gây va đập như chạy bộ.',
    recommendation: 'recommended',
    weeklyTarget: '2-3 buổi/tuần (30-60 phút/buổi)',
    startingTip: 'Đạp xe đạp tĩnh trong nhà (Spinning) là lựa chọn an toàn để kiểm soát nhịp tim và tránh rủi ro tai nạn.'
  }
];

export interface SupplementForExercise {
  id: string;
  name: string;
  purpose: string;
  evidence: 'strong' | 'moderate' | 'weak' | 'none';
  safeForBreastCancer: 'safe' | 'ask_doctor' | 'avoid';
  note: string;
  source: string;
}

export const exerciseSupplements: SupplementForExercise[] = [
  {
    id: 'sup_1',
    name: 'Whey Protein (Đạm váng sữa)',
    purpose: 'Phục hồi cơ bắp sau khi tập kháng lực',
    evidence: 'strong',
    safeForBreastCancer: 'safe',
    note: 'Chọn loại Isolate không đường. Rất an toàn, giúp chống suy mòn cơ bắp. Không chứa estrogen.',
    source: 'Tài liệu dinh dưỡng lâm sàng'
  },
  {
    id: 'sup_2',
    name: 'Creatine Monohydrate',
    purpose: 'Tăng cường sức mạnh cơ bắp, hỗ trợ chức năng não',
    evidence: 'strong',
    safeForBreastCancer: 'safe',
    note: 'Chất bổ sung an toàn nhất được nghiên cứu, không ảnh hưởng đến nội tiết. Dùng liều thấp 3-5g/ngày.',
    source: 'International Society of Sports Nutrition (ISSN)'
  },
  {
    id: 'sup_3',
    name: 'Collagen Peptide',
    purpose: 'Hỗ trợ khớp xương và độ đàn hồi da',
    evidence: 'moderate',
    safeForBreastCancer: 'safe',
    note: 'Hỗ trợ bôi trơn khớp (đặc biệt nếu đau khớp do từng dùng AI). Hoàn toàn an toàn.',
    source: 'Các nghiên cứu về sức khỏe khớp khớp xương'
  },
  {
    id: 'sup_4',
    name: 'Glucosamine & Chondroitin',
    purpose: 'Bảo vệ sụn khớp',
    evidence: 'moderate',
    safeForBreastCancer: 'ask_doctor',
    note: 'Có thể dùng để giảm đau khớp. An toàn với K vú nhưng cần lưu ý nếu có bệnh lý đường huyết.',
    source: 'Phác đồ quản lý tác dụng phụ AI'
  },
  {
    id: 'sup_5',
    name: 'BCAA (Amino Acid phân nhánh)',
    purpose: 'Giảm mệt mỏi trong lúc tập, giảm đau nhức cơ',
    evidence: 'moderate',
    safeForBreastCancer: 'safe',
    note: 'Có trong thức ăn tự nhiên. Dùng khi tập luyện kéo dài khá an toàn.',
    source: 'Dinh dưỡng thể thao cơ bản'
  },
  {
    id: 'sup_6',
    name: 'Caffeine / Cà phê đen (Pre-workout)',
    purpose: 'Tăng tỉnh táo, cải thiện hiệu suất tập luyện',
    evidence: 'strong',
    safeForBreastCancer: 'safe',
    note: 'Sử dụng cà phê đen (không đường/sữa). Tránh uống chiều tối gây mất ngủ.',
    source: 'Nghiên cứu về Caffeine trong thể thao'
  },
  {
    id: 'sup_7',
    name: 'Điện giải (Electrolytes)',
    purpose: 'Bù nước và khoáng chất khi ra mồ hôi nhiều',
    evidence: 'strong',
    safeForBreastCancer: 'safe',
    note: 'Chọn loại không chứa đường (Zero sugar) để tránh tăng cân không mong muốn.',
    source: 'Hướng dẫn bù nước y tế'
  },
  {
    id: 'sup_8',
    name: 'DHEA / Thực phẩm bổ sung tăng nội tiết',
    purpose: 'Được quảng cáo tăng sức mạnh, tăng sinh lý',
    evidence: 'none',
    safeForBreastCancer: 'avoid',
    note: 'TUYỆT ĐỐI TRÁNH. Có thể chuyển hóa thành estrogen/androgen, nguy hiểm cho bệnh nhân K vú HR+.',
    source: 'Khuyến cáo của bác sĩ ung bướu nội tiết'
  },
  {
    id: 'sup_9',
    name: 'Sản phẩm có hàm lượng cao Phytoestrogen',
    purpose: 'Bổ sung mầm đậu nành chiết xuất cao',
    evidence: 'none',
    safeForBreastCancer: 'avoid',
    note: 'Đậu nành tự nhiên (đậu phụ, sữa đậu nành) trong thức ăn là an toàn, nhưng dạng viên nén chiết xuất cô đặc cần tránh.',
    source: 'ASCO Nutrition Guidelines'
  }
];

export interface ExerciseResearch {
  id: string;
  title: string;
  finding: string;
  magnitude: string;
  source: string;
  year: string;
  applicableTo: string;
}

export const exerciseResearchData: ExerciseResearch[] = [
  {
    id: 'res_1',
    title: 'Khuyến cáo của Hiệp hội Ung thư Lâm sàng Hoa Kỳ',
    finding: 'Tập thể dục cường độ vừa phải từ 150-300 phút/tuần giúp cải thiện khả năng sống còn.',
    magnitude: 'Giảm 24% nguy cơ tái phát K vú.',
    source: 'ASCO',
    year: '2022',
    applicableTo: 'Bệnh nhân sau điều trị K vú nói chung'
  },
  {
    id: 'res_2',
    title: 'Nghiên cứu Nurses\\' Health Study (NHS)',
    finding: 'Những người sống sót sau ung thư vú tham gia hoạt động thể chất tương đương 3-5 giờ đi bộ mỗi tuần có tỷ lệ tử vong thấp hơn đáng kể.',
    magnitude: 'Giảm khoảng 50% nguy cơ tử vong do ung thư vú, giảm tử vong do mọi nguyên nhân.',
    source: 'Holmes JAMA',
    year: '2005',
    applicableTo: 'Phụ nữ đã được chẩn đoán ung thư vú'
  },
  {
    id: 'res_3',
    title: 'Tập tạ và Phù bạch huyết (Lymphedema)',
    finding: 'Chương trình tập nâng tạ được kiểm soát từ từ KHÔNG làm tăng nguy cơ hay làm trầm trọng thêm tình trạng phù tay vòi voi.',
    magnitude: 'An toàn 100%, tỷ lệ bùng phát lymphedema thấp hơn nhóm không tập.',
    source: 'Schmitz NEJM',
    year: '2009',
    applicableTo: 'Bệnh nhân có nguy cơ hoặc đang bị phù bạch huyết'
  },
  {
    id: 'res_4',
    title: 'Tác động của Yoga đối với chất lượng sống',
    finding: 'Chương trình Yoga kéo dài 6 tuần (trong thời gian xạ trị) giúp điều hòa nồng độ cortisol, giảm mệt mỏi và cải thiện sức khỏe thể chất mạnh mẽ.',
    magnitude: 'Giảm 15% nồng độ cortisol (hormone stress).',
    source: 'Chandwani JNCI',
    year: '2014',
    applicableTo: 'Bệnh nhân đang hoặc sau điều trị hóa/xạ trị'
  },
  {
    id: 'res_5',
    title: 'Phân tích gộp (Meta-analysis) về thể dục và nội tiết',
    finding: 'Hoạt động thể chất giúp giảm BMI, giảm mỡ khối và hạ thấp nồng độ estradiol tuần hoàn máu, giảm các marker viêm.',
    magnitude: 'Giảm đáng kể estrogen máu và cải thiện hồ sơ viêm.',
    source: 'Lahart BMC Cancer',
    year: '2015',
    applicableTo: 'Bệnh nhân ung thư vú nhạy cảm nội tiết (HR+)'
  },
  {
    id: 'res_6',
    title: 'Nghiên cứu Women\\'s Healthy Eating and Living (WHEL)',
    finding: 'Chế độ ăn nhiều rau củ kết hợp với việc duy trì hoạt động thể chất vừa phải đem lại lợi ích sống còn rõ rệt.',
    magnitude: 'Giảm 44% nguy cơ tử vong ở những phụ nữ thực hiện kết hợp cả hai.',
    source: 'Pierce JAMA',
    year: '2007',
    applicableTo: 'Bệnh nhân sống sót sau K vú'
  }
];
