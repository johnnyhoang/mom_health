import type { MediaItem } from '../types/medical';

export const cervicalSpineMediaItems: MediaItem[] = [
  {
    id: 'vid-acdf-3d-surgery',
    title: 'Mô Phỏng 3D Quy Trình Phẫu Thuật Cột Sống Cổ Lối Trước (ACDF)',
    type: 'video',
    category: 'Phẫu Thuật Vi Phẫu Chuẩn Vàng',
    videoEmbedId: 'jA02sC73qO4',
    url: 'https://www.youtube-nocookie.com/embed/jA02sC73qO4',
    duration: '3:50',
    thumbnailUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    description: 'Video đồ họa 3D y khoa mô tả từng bước phẫu thuật ACDF: Rạch da nếp gấp cổ nhỏ 3cm, bộc lộ đĩa đệm qua khe giải phẫu tự nhiên không cắt cơ gáy, bóc tách khối thoát vị giải ép tủy sống, đặt lồng PEEK và nẹp Titanium khóa chắc chắn.',
    clinicalNote: 'Phương pháp ít xâm lấn số 1 thế giới được thực hiện tại Khoa Ngoại Thần Kinh BV Đại Học Y Dược TP.HCM.',
    source: 'Hiệp hội Phẫu thuật Cột sống Bắc Mỹ (NASS) & AOSpine',
    keyAnatomicalOrClinicalPoints: [
      'Đường tiếp cận lối trước đi giữa cơ ức đòn chũm và bó mạch cảnh',
      'Kỹ thuật lấy sạch đĩa đệm thoát vị C3/4 và C5/6 dưới kính vi phẫu',
      'Mài phẳng gai xương giải phóng lỗ liên hợp rễ thần kinh',
      'Đặt lồng đệm PEEK và bắt nẹp Titanium góc khóa chịu lực tức thì'
    ]
  },
  {
    id: 'vid-cervical-myelopathy-mechanism',
    title: 'Cơ Chế Chèn Ép Tủy Cổ (CSM) & Sự Khác Biệt Giữa Tủy Cổ Và Thắt Lưng',
    type: 'video',
    category: 'Cơ Chế Bệnh Học Thần Kinh',
    videoEmbedId: '7XqJ9gQ9jUo',
    url: 'https://www.youtube-nocookie.com/embed/7XqJ9gQ9jUo',
    duration: '4:15',
    thumbnailUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80',
    description: 'Mô phỏng động thái học khi đĩa đệm thoái hóa lồi ra sau 5mm chèn ép vào mặt trước tủy sống. Giải thích vì sao chèn ép tủy cổ gây tê bì cả 2 bàn tay, vụng về khi cầm đũa/cài cúc áo và đi lại loạng choạng.',
    clinicalNote: 'Tủy sống là mô thần kinh trung ương không thể tái sinh, giải ép sớm là tiêu chuẩn bảo tồn chức năng vận động.',
    source: 'Học viện Phẫu thuật Thần kinh Hoa Kỳ (AANS)',
    keyAnatomicalOrClinicalPoints: [
      'Mặt trước tủy sống chứa các bó vận động vỏ - tủy (Corticospinal Tracts)',
      'Sự suy giảm tưới máu vi mạch tủy khi bị đĩa đệm đè ép liên tục',
      'Sự khác biệt: Tủy cổ (Trung ương - nguy hiểm) vs Rễ thắt lưng L4/5 (Ngoại biên - có thể bảo tồn)',
      'Tầm quan trọng của việc can thiệp trước khi xuất hiện dấu hiệu tổn thương tủy không hồi phục'
    ]
  },
  {
    id: 'vid-cervical-rehab-exercises',
    title: 'Chương Trình Phục Hồi Chức Năng Sau Mổ Cổ & Bài Tập Vận Động Người Cao Tuổi',
    type: 'video',
    category: 'Phục Hồi Chức Năng Hậu Phẫu',
    videoEmbedId: 'e81P3eS1v3Q',
    url: 'https://www.youtube-nocookie.com/embed/e81P3eS1v3Q',
    duration: '6:30',
    thumbnailUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    description: 'Hướng dẫn chi tiết cách ngồi dậy từ giường trong 24h đầu, cách đeo nẹp cổ mềm đúng chuẩn, các bài tập trượt rễ thần kinh tay và bài tập đi bộ thăng bằng an toàn cho cụ bà 74 tuổi.',
    clinicalNote: 'Vận động sớm sau 24h giúp phòng ngừa huyết khối tĩnh mạch sâu và viêm phổi ứ đọng ở người cao tuổi.',
    source: 'Bộ môn Phục Hồi Chức Năng - Đại Học Y Dược TP.HCM',
    keyAnatomicalOrClinicalPoints: [
      'Kỹ thuật lăn nghiêng người kiểu khúc gỗ (Log Rolling) khi ngồi dậy',
      'Thời gian mang nẹp cổ mềm (4-6 tuần khi đi lại, tháo ra khi nghỉ ngơi)',
      'Bài tập trượt dây thần kinh giữa giảm tê tay sau mổ',
      'Lộ trình đi bộ tăng dần từ 10 phút lên 30 phút mỗi ngày'
    ]
  },
  {
    id: 'vid-double-crush-syndrome',
    title: 'Hội Chứng Chèn Ép Kép (Double Crush): Cổ C5/6 & Ống Cổ Tay',
    type: 'video',
    category: 'Giải Mã Triệu Chứng Thần Kinh',
    videoEmbedId: '7x8LzK9p_v8',
    url: 'https://www.youtube-nocookie.com/embed/7x8LzK9p_v8',
    duration: '3:20',
    thumbnailUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    description: 'Minh họa y học vì sao bệnh nhân vừa bị thoát vị cổ C5/6 vừa bị tê ống cổ tay. Khi rễ thần kinh bị tổn thương tại cổ, sợi trục thần kinh dễ bị nhạy cảm hơn gấp nhiều lần tại cổ tay.',
    clinicalNote: 'Giải phóng cổ sẽ giúp 80% triệu chứng tê ống cổ tay tự hồi phục mà không cần mổ cổ tay.',
    source: 'Tạp chí Phẫu thuật Chấn thương Chỉnh hình Cột sống Quốc tế',
    keyAnatomicalOrClinicalPoints: [
      'Dòng vận chuyển sợi trục (Axoplasmic Flow) từ rễ cổ xuống ngọn chi',
      'Ảnh hưởng của chèn ép tầng C5/C6 đến đường đi của dây thần kinh giữa',
      'Chiến lược điều trị: Ưu tiên mổ giải ép cổ trước, theo dõi cổ tay sau',
      'Cách sử dụng nẹp cổ tay hỗ trợ ban đêm trong giai đoạn chờ mổ cổ'
    ]
  }
];
