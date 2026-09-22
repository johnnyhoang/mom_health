export type QACategory = 
  | 'case_results' 
  | 'tamoxifen_mechanism' 
  | 'treatment_options' 
  | 'surgery_reassurance' 
  | 'lifestyle_followup'
  | 'new_treatments_2022';

export interface QAItem {
  id: string;
  category: QACategory;
  question: string;
  answer: string;
}

export const newTreatmentsQADataset: QAItem[] = [
  {
    id: 'qa_new_01',
    category: 'new_treatments_2022',
    question: 'Thuốc mới Elacestrant (Orserdu) được chỉ định trong trường hợp nào? Bệnh nhân Luminal A có nên quan tâm không?',
    answer: 'Elacestrant là thuốc nội tiết đường uống mới (SERD) được FDA phê duyệt 01/2023. Thuốc được dùng cho bệnh nhân ung thư vú HR+/HER2- (bao gồm Luminal A) ở giai đoạn tiến xa hoặc di căn, ĐẶC BIỆT khi xuất hiện đột biến gen ESR1. Đột biến này thường xảy ra sau thời gian dài sử dụng Aromatase Inhibitors (như Letrozole, Anastrozole). Nếu chị đang ở giai đoạn sớm và đang dùng Tamoxifen an toàn, chị chưa cần bận tâm đến thuốc này ngay. (Nguồn: Thử nghiệm EMERALD, JCO 2022).'
  },
  {
    id: 'qa_new_02',
    category: 'new_treatments_2022',
    question: 'Điều trị bổ trợ bằng thuốc nhắm trúng đích CDK4/6 inhibitor (Ribociclib, Abemaciclib) sau phẫu thuật có ý nghĩa gì đối với nhóm Luminal A/B?',
    answer: 'Trước đây CDK4/6i chỉ dùng cho giai đoạn di căn. Từ 2021-2024, FDA đã phê duyệt Abemaciclib và Ribociclib cho điều trị "bổ trợ" (giai đoạn sớm sau phẫu thuật). Các thuốc này kết hợp với nội tiết trong 2-3 năm giúp tiêu diệt tế bào ung thư vi mô, làm giảm nguy cơ tái phát khoảng 25-32%. Tuy nhiên, thuốc chỉ được chỉ định cho người có "nguy cơ tái phát cao" (có hạch nách dương tính, u lớn, Ki67 cao). (Nguồn: NATALEE trial - NEJM 2024; monarchE - Lancet Oncol 2023).'
  },
  {
    id: 'qa_new_03',
    category: 'new_treatments_2022',
    question: 'Người đã hoàn thành 5 năm uống Tamoxifen hoặc AI cho giai đoạn sớm thì có cần dùng thêm thuốc mới như CDK4/6 inhibitor không?',
    answer: 'Theo các hướng dẫn hiện tại (NCCN, ASCO), các thuốc bổ trợ CDK4/6i (như Abemaciclib hay Ribociclib) được khuyên dùng BẮT ĐẦU CÙNG LÚC với liệu pháp nội tiết bổ trợ trong vài năm đầu sau phẫu thuật. Nếu chị đã hoàn thành an toàn 5 năm nội tiết mà không tái phát, hiện tại KHÔNG CÓ khuyến cáo lâm sàng nào chỉ định quay lại dùng thêm CDK4/6 inhibitor nữa. Chị chỉ cần trao đổi với bác sĩ xem có cần kéo dài uống Tamoxifen/AI lên 10 năm hay không.'
  },
  {
    id: 'qa_new_04',
    category: 'new_treatments_2022',
    question: 'Các loại thuốc mới nhất từ 2022-2024 (Enhertu, Truqap, Orserdu...) đã có mặt ở Việt Nam chưa?',
    answer: 'Tình trạng thuốc tại Việt Nam:\n- Enhertu (Trastuzumab Deruxtecan): Đã có mặt (được cấp số đăng ký), nhưng chi phí rất cao (hàng trăm triệu/tháng) và chưa được BHYT chi trả.\n- Kisqali (Ribociclib) / Verzenio (Abemaciclib): Đã có mặt tại các viện lớn cho K vú di căn; chỉ định "bổ trợ sớm" đang dần được cập nhật.\n- Orserdu (Elacestrant), Truqap (Capivasertib), Inavolisib: Mới được FDA phê duyệt 2023-2024, CHƯA có sẵn rộng rãi tại Việt Nam, thường phải chờ chương trình dùng thuốc theo tên hoặc mua từ nước ngoài.'
  },
  {
    id: 'qa_new_05',
    category: 'new_treatments_2022',
    question: 'Khi nào bệnh nhân ung thư vú Luminal A cần làm thêm các xét nghiệm gen như ESR1, PIK3CA, hay BRCA?',
    answer: 'Đối với Luminal A:\n- BRCA1/2: Nên làm nếu chị được chẩn đoán khi còn trẻ tuổi (< 50 tuổi), hoặc có tiền sử gia đình (mẹ, chị em gái) mắc K vú/K buồng trứng. Nếu mang gen đột biến, có thể bác sĩ sẽ cân nhắc Olaparib.\n- ESR1, PIK3CA, AKT1, PTEN: CHỈ nên làm xét nghiệm gen khối u này khi bệnh ở giai đoạn tiến xa (di căn) và kháng nội tiết bước 1. Nếu có đột biến PIK3CA/AKT1, bệnh nhân dùng được Truqap (Capivasertib) hoặc Inavolisib. Nếu có ESR1, dùng Orserdu (Elacestrant).'
  },
  {
    id: 'qa_new_06',
    category: 'new_treatments_2022',
    question: 'Là bệnh nhân Luminal A giai đoạn sớm (đã mổ), hiện tại tôi chỉ cần theo dõi và uống Tamoxifen. Với nhiều loại thuốc mới đắt tiền như vậy ra đời, tôi có bị thiệt thòi nếu không dùng không?',
    answer: 'Chị hoàn toàn KHÔNG bị thiệt thòi. Đặc thù của ung thư vú thể Luminal A giai đoạn sớm là đáp ứng CỰC KỲ TỐT với các liệu pháp kinh điển (phẫu thuật, xạ trị và nội tiết Tamoxifen). Hầu hết bệnh nhân khỏi bệnh hoàn toàn mà không bao giờ cần đến các thuốc mới đắt tiền này. Các thuốc mới (ADC, PI3K/AKT inhibitor) phần lớn là "vũ khí dự phòng" dành cho giai đoạn muộn hoặc nhóm nguy cơ rất cao. Phương pháp tốt nhất không phải là thuốc đắt nhất hay mới nhất, mà là phác đồ "đúng và đủ" với tình trạng thực tế của chị.'
  }
];
