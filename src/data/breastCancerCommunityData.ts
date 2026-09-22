export interface CommunityInsight {
  id: string;
  category: 'side_effect_management' | 'lifestyle_tips' | 'treatment_experience' | 'mental_health' | 'nutrition' | 'monitoring';
  categoryLabel: string;
  insight: string; // kinh nghiệm/chia sẻ
  communityConsensus: 'strong' | 'moderate' | 'mixed'; // mức độ đồng thuận
  medicalValidation: 'confirmed' | 'plausible' | 'needs-doctor' | 'not-recommended'; // đánh giá y tế
  medicalNote: string; // ghi chú từ góc độ y tế
  source: string; // mô tả nguồn như 'Hội K Vú VN Facebook Group', 'Diễn đàn ung thư Việt Nam'
}

export interface CommunityGroup {
  id: string;
  name: string;
  platform: 'facebook' | 'zalo' | 'website' | 'youtube';
  type: string;
  description: string;
  memberCount?: string;
  url?: string;
  verified: boolean;
}

export const communityInsights: CommunityInsight[] = [
  {
    id: "ci-1",
    category: "side_effect_management",
    categoryLabel: "Quản lý tác dụng phụ",
    insight: "Xử lý cơn bốc hỏa ban đêm: Nhiều chị em chia sẻ kinh nghiệm mặc đồ cotton thoáng mát, uống nước mát trước khi ngủ, bật quạt gió nhẹ và tập thiền để giảm cơn bốc hỏa do thuốc nội tiết.",
    communityConsensus: "strong",
    medicalValidation: "confirmed",
    medicalNote: "Các biện pháp thay đổi lối sống này được y khoa khuyến cáo. Tránh sử dụng các loại thực phẩm chức năng chưa rõ nguồn gốc để trị bốc hỏa.",
    source: "Hội K Vú VN Facebook Group"
  },
  {
    id: "ci-2",
    category: "mental_health",
    categoryLabel: "Chăm sóc tinh thần",
    insight: "Tập yoga và thiền định mỗi ngày giúp cải thiện đáng kể tâm lý, giảm lo âu và cải thiện giấc ngủ sau quá trình điều trị kéo dài.",
    communityConsensus: "strong",
    medicalValidation: "confirmed",
    medicalNote: "Hoàn toàn đồng ý. Vận động nhẹ nhàng và thực hành chánh niệm có lợi ích đã được chứng minh trong quản lý mệt mỏi và lo âu do ung thư.",
    source: "Nhóm Hỗ Trợ Bệnh Nhân Ung Thư Vú"
  },
  {
    id: "ci-3",
    category: "nutrition",
    categoryLabel: "Dinh dưỡng",
    insight: "Tranh cãi về chế độ ăn giàu lignan (như hạt lanh) và isoflavone từ đậu nành: Nên ăn hay kiêng hoàn toàn khi bị K vú nội tiết dương tính?",
    communityConsensus: "mixed",
    medicalValidation: "plausible",
    medicalNote: "Nghiên cứu hiện tại cho thấy tiêu thụ đậu nành tự nhiên ở mức độ vừa phải (1-2 khẩu phần/ngày) là an toàn và có thể có lợi. Nên tránh các viên uống bổ sung isoflavone cô đặc.",
    source: "Diễn đàn ung thư Việt Nam"
  },
  {
    id: "ci-4",
    category: "side_effect_management",
    categoryLabel: "Quản lý tác dụng phụ",
    insight: "Giảm đau khớp do dùng thuốc ức chế Aromatase (AI): Tập thể dục thường xuyên, đi bộ, bổ sung Canxi/Vitamin D theo đơn bác sĩ giúp giảm đáng kể tình trạng cứng khớp buổi sáng.",
    communityConsensus: "strong",
    medicalValidation: "confirmed",
    medicalNote: "Tác dụng phụ đau xương khớp rất phổ biến với nhóm AI. Cần vận động, kiểm tra loãng xương định kỳ và tuân thủ thuốc bổ trợ xương.",
    source: "Hội chị em chiến binh K vú"
  },
  {
    id: "ci-5",
    category: "treatment_experience",
    categoryLabel: "Trải nghiệm điều trị",
    insight: "Tác dụng phụ rụng tóc sau hóa trị: Hầu hết chia sẻ tóc bắt đầu mọc lại khoảng 1-2 tháng sau toa hóa chất cuối cùng, lúc đầu tóc có thể xoăn hoặc khác màu một chút.",
    communityConsensus: "strong",
    medicalValidation: "confirmed",
    medicalNote: "Đây là hiện tượng sinh lý bình thường. Bệnh nhân không nên quá lo lắng, tóc sẽ phục hồi chu kỳ mọc bình thường sau vài tháng.",
    source: "Hội K Vú VN Facebook Group"
  },
  {
    id: "ci-6",
    category: "mental_health",
    categoryLabel: "Chăm sóc tinh thần",
    insight: "Tâm lý lo lắng tái phát (scanxiety) trước mỗi lần tái khám: Các thành viên thường động viên nhau đi chung, suy nghĩ tích cực và bận rộn với công việc để quên đi nỗi sợ.",
    communityConsensus: "strong",
    medicalValidation: "plausible",
    medicalNote: "Sự hỗ trợ từ cộng đồng rất quan trọng. Bệnh nhân có thể cân nhắc tư vấn tâm lý chuyên nghiệp nếu nỗi sợ ảnh hưởng lớn đến chất lượng cuộc sống.",
    source: "Nhóm Đồng Hành K Vú"
  },
  {
    id: "ci-7",
    category: "lifestyle_tips",
    categoryLabel: "Lối sống & Hôn nhân",
    insight: "Quan hệ vợ chồng sau điều trị K vú: Khô âm đạo do giảm estrogen (do thuốc nội tiết) làm giảm ham muốn và gây đau. Sử dụng chất bôi trơn không chứa hormone được nhiều người khuyên dùng.",
    communityConsensus: "moderate",
    medicalValidation: "confirmed",
    medicalNote: "Hoàn toàn chính xác. Gel bôi trơn và dưỡng ẩm âm đạo không chứa estrogen là biện pháp an toàn và hiệu quả hàng đầu.",
    source: "Nhóm Hỗ Trợ Chị Em K vú"
  },
  {
    id: "ci-8",
    category: "lifestyle_tips",
    categoryLabel: "Công việc & Xã hội",
    insight: "Đi làm lại sau điều trị: Nhiều người chia sẻ nên bắt đầu đi làm lại bán thời gian hoặc làm việc từ xa để cơ thể làm quen dần, tránh kiệt sức vì hội chứng não hóa trị (chemo brain).",
    communityConsensus: "moderate",
    medicalValidation: "plausible",
    medicalNote: "Rất hợp lý. Quản lý năng lượng và nhịp độ công việc giúp phục hồi chức năng thần kinh - nhận thức và thể chất bền vững hơn.",
    source: "Cộng đồng Ung Thư Việt Nam"
  },
  {
    id: "ci-9",
    category: "lifestyle_tips",
    categoryLabel: "Quản lý cân nặng",
    insight: "Kiểm soát cân nặng sau mãn kinh do thuốc: Rất dễ tăng cân dù ăn ít. Các thành viên khuyên nên cắt giảm tinh bột hấp thu nhanh và tập kháng lực (nhấc tạ nhẹ) để giữ cơ bắp.",
    communityConsensus: "strong",
    medicalValidation: "confirmed",
    medicalNote: "Kiểm soát cân nặng giảm rủi ro tái phát K vú. Tập kháng lực và ăn uống cân bằng là khuyến cáo tiêu chuẩn.",
    source: "Hội K Vú VN Facebook Group"
  },
  {
    id: "ci-10",
    category: "nutrition",
    categoryLabel: "Dinh dưỡng",
    insight: "Thực phẩm chức năng (Supplement) nào nên dùng: Một số người dùng nấm linh chi, đông trùng hạ thảo, hoặc sâm để tăng đề kháng. Cộng đồng chia rẽ về hiệu quả thực sự.",
    communityConsensus: "mixed",
    medicalValidation: "needs-doctor",
    medicalNote: "Bệnh nhân phải tham khảo ý kiến bác sĩ ung bướu trước khi dùng bất kỳ thảo dược nào, vì chúng có thể tương tác với thuốc đích hoặc nội tiết đang dùng, làm giảm tác dụng điều trị.",
    source: "Diễn đàn người bệnh ung thư"
  }
];

export const vietnamBreastCancerGroups: CommunityGroup[] = [
  {
    id: "group-1",
    name: "Mạng lưới Ung thư vú Việt Nam (BCNV)",
    platform: "website",
    type: "Tổ chức phi lợi nhuận",
    description: "Tổ chức hỗ trợ cung cấp thông tin, tổ chức hiến tóc và các chiến dịch nâng cao nhận thức về K vú tại Việt Nam.",
    verified: true
  },
  {
    id: "group-2",
    name: "Cộng đồng Ung Thư Vú Việt Nam",
    platform: "facebook",
    type: "Nhóm hỗ trợ trực tuyến",
    description: "Nơi giao lưu, chia sẻ kinh nghiệm khám chữa bệnh, động viên tinh thần của hàng chục nghìn bệnh nhân và người nhà.",
    memberCount: "> 30.000",
    verified: false
  },
  {
    id: "group-3",
    name: "Hội những người chiến thắng ung thư vú",
    platform: "facebook",
    type: "Nhóm kín",
    description: "Nhóm dành riêng cho các bệnh nhân trao đổi các mẹo về sinh hoạt, quản lý tác dụng phụ và giữ gìn sức khỏe sau điều trị.",
    verified: false
  },
  {
    id: "group-4",
    name: "Diễn đàn Y học & Bệnh nhân Ung Bướu",
    platform: "facebook",
    type: "Cộng đồng hỏi đáp",
    description: "Có sự tham gia của một số y bác sĩ giải đáp thắc mắc cơ bản cho bệnh nhân ung thư nói chung.",
    verified: false
  }
];
