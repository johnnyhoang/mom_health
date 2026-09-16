import type { MediaItem } from '../types/medical';

export const breastCancerMediaItems: MediaItem[] = [
  {
    id: 'vid-cdk46-mechanism',
    title: 'Cơ Chế Phân Tử: Thuốc Ức Chế CDK4/6 (Ribociclib / Abemaciclib) Khóa Tế Bào K Vú',
    type: 'video',
    category: 'Liệu Pháp Nhắm Trúng Đích',
    videoEmbedId: 'Z9Y9q0Gqf4U',
    url: 'https://www.youtube-nocookie.com/embed/Z9Y9q0Gqf4U',
    duration: '4:20',
    thumbnailUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    description: 'Đồ họa y khoa 3D giải thích chi tiết cách phức hợp Cyclin D1-CDK4/6 thúc đẩy tế bào phân chia và cách các thuốc ức chế CDK4/6 thế hệ mới khóa chặt chu kỳ tế bào ở pha G1, ngăn chặn hoàn toàn tế bào u phân chia.',
    clinicalNote: 'Liệu pháp kết hợp CDK4/6i + Nội tiết là tiêu chuẩn vàng mới nhất của NCCN 2024-2026.',
    source: 'Hiệp hội Ung thư Lâm sàng Hoa Kỳ (ASCO)',
    keyAnatomicalOrClinicalPoints: [
      'Vị trí gắn kết của Ribociclib / Abemaciclib vào túi ATP của enzym CDK4 và CDK6',
      'Sự ức chế quá trình phosphoryl hóa protein Rb (Retinoblastoma)',
      'Hiện tượng tế bào ung thư đi vào trạng thái bất hoạt vĩnh viễn (Senescence)',
      'Hiệu quả hiệp đồng cộng hưởng khi kết hợp với thuốc nội tiết'
    ]
  },
  {
    id: 'vid-adc-tdxd-mechanism',
    title: 'Kháng Thể Liên Hợp Thuốc (ADC): "Tên Lửa Dẫn Đường" T-DXd (Enhertu) Tiêu Diệt K Vú',
    type: 'video',
    category: 'Đột Phá ADCs Thế Hệ Mới',
    videoEmbedId: 'r5c1f0m7H-A',
    url: 'https://www.youtube-nocookie.com/embed/r5c1f0m7H-A',
    duration: '5:10',
    thumbnailUrl: 'https://images.unsplash.com/photo-1579165466791-788226ab77b5?auto=format&fit=crop&w=800&q=80',
    description: 'Mô phỏng 3D cơ chế hoạt động của kháng thể liên hợp thuốc Trastuzumab Deruxtecan (T-DXd): kháng thể nhận diện thụ thể HER2 (kể cả HER2-low và ultralow), thẩm thấu vào trong tế bào u và giải phóng chất độc hóa trị cực mạnh, kết hợp hiệu ứng tiêu diệt lân cận (Bystander effect).',
    clinicalNote: 'Đột phá lịch sử được công bố tại ASCO 2024 (DESTINY-Breast06) mở rộng điều trị cho hơn 60% bệnh nhân K vú thể nội tiết.',
    source: 'Tạp chí Ung thư Lâm sàng Quốc tế',
    keyAnatomicalOrClinicalPoints: [
      'Cấu trúc kháng thể đơn dòng gắn liên kết phân cắt được (cleavable linker)',
      'Tải trọng thuốc cực cao (8 phân tử hóa trị Deruxtecan trên 1 kháng thể)',
      'Khả năng khuếch tán qua màng tế bào tiêu diệt các tế bào ung thư xung quanh',
      'Ứng dụng thành công trên bệnh nhân HER2-low và HER2-ultralow'
    ]
  },
  {
    id: 'vid-tamoxifen-molecular-action',
    title: 'Cách Tamoxifen Khóa Thụ Thể Estrogen Ngăn K Vú Tái Phát Trong 5 Năm',
    type: 'video',
    category: 'Cơ Chế SERM Phân Tử',
    videoEmbedId: '8dE2qG5Y_w4',
    url: 'https://www.youtube-nocookie.com/embed/8dE2qG5Y_w4',
    duration: '3:45',
    thumbnailUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
    description: 'Video phân tích cấp độ phân tử: Sự gắn kết của Tamoxifen với thụ thể Estrogen Alpha (ER-alpha) trong nhân tế bào biểu mô tuyến vú, làm thay đổi cấu hình không gian và thu hút các protein đồng ức chế (Co-repressors) để khóa phiên mã gen ung thư.',
    clinicalNote: 'Nền tảng giúp giảm 50% tỷ lệ tái phát ung thư vú qua hơn 4 thập kỷ thực hành lâm sàng.',
    source: 'Viện Nghiên cứu Ung thư Quốc gia Hoa Kỳ (NCI)',
    keyAnatomicalOrClinicalPoints: [
      'Cấu hình không gian của thụ thể Estrogen khi gắn Estrogen vs khi gắn Tamoxifen',
      'Vai trò của enzym chuyển hóa gan CYP2D6 tạo ra chất có hoạt tính cao Endoxifen',
      'Nguyên nhân tế bào vú bị "bỏ đói" và ngừng phát triển',
      'Lý do tại sao cần uống đều đặn mỗi ngày suốt 5 năm'
    ]
  },
  {
    id: 'vid-breast-reconstruction-ultrasound',
    title: 'Kỹ Thuật Tầm Soát Kép: Siêu Âm Độ Phân Giải Cao & Chụp Nhũ Ảnh Định Kỳ',
    type: 'video',
    category: 'Quy Trình Tầm Soát Định Kỳ',
    videoEmbedId: 'L8gP3k-nC2M',
    url: 'https://www.youtube-nocookie.com/embed/L8gP3k-nC2M',
    duration: '4:00',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    description: 'Quy trình thực tế khi đi tái khám định kỳ sau điều trị K vú: Bác sĩ thực hiện siêu âm Doppler tuyến vú tìm kiếm các vi tổn thương tái phát tại chỗ hoặc vùng sẹo mổ và kỹ thuật chụp nhũ ảnh 3D (Tomosynthesis) an toàn, nhẹ nhàng.',
    clinicalNote: 'Khám định kỳ 6-12 tháng/lần là chìa khóa vàng giúp phát hiện sớm và bảo vệ sức khỏe trọn đời.',
    source: 'Hiệp hội Chẩn đoán Hình ảnh & Tầm soát Ung thư Tuyến vú',
    keyAnatomicalOrClinicalPoints: [
      'Hình ảnh siêu âm mô tuyến vú lành mạnh vs mô xơ sẹo sau mổ',
      'Đánh giá hệ thống hạch nách, hạch thượng đòn và hạch vú trong',
      'Ý nghĩa của chụp nhũ ảnh định kỳ phát hiện các vi vôi hóa nghi ngờ',
      'Các dấu hiệu cần thông báo ngay cho Bác sĩ điều trị'
    ]
  }
];
