export interface SpineDoctorProfile {
  id: string;
  name: string;
  academicTitle: string;
  currentRole: string;
  workplace: string;
  hospitalCategory: 'BV Đại Học Y Dược' | 'BV Chợ Rẫy' | 'BV Chấn Thương Chỉnh Hình' | 'BV Quân Y 175' | 'BVĐK Tâm Anh';
  experienceYears: number;
  highlightBadge: string;
  coreSpecialties: string[];
  clinicalStrengths: string[];
  relevanceForSpinePatient: string;
  practiceLocations: {
    hospitalName: string;
    departmentOrClinic: string;
    address: string;
    scheduleNote: string;
    bookingPhone?: string;
  }[];
  consultationTips: string;
}

export const topSpineDoctorsList: SpineDoctorProfile[] = [
  {
    id: 'dr-nguyen-phong',
    name: 'Nguyễn Phong',
    academicTitle: 'PGS. TS. BS',
    currentRole: 'Trưởng Khoa Ngoại Thần Kinh, Bệnh viện Đại Học Y Dược TP.HCM • Giảng viên Cao cấp Bộ môn Ngoại Thần Kinh ĐHYD TP.HCM',
    workplace: 'Khoa Ngoại Thần Kinh (Lầu 8A), Bệnh viện Đại Học Y Dược TP.HCM',
    hospitalCategory: 'BV Đại Học Y Dược',
    experienceYears: 32,
    highlightBadge: 'Chuyên Gia Hàng Đầu Phẫu Thuật Vi Phẫu Cột Sống Cổ & Thần Kinh Sọ Não',
    coreSpecialties: [
      'Phẫu thuật vi phẫu ACDF lối trước giải ép tủy cổ & hàn xương liên thân đốt',
      'Phẫu thuật ít xâm lấn bệnh lý cột sống cổ và thắt lưng người cao tuổi',
      'U tủy sống, hẹp ống sống cổ phức tạp và dị dạng mạch máu tủy'
    ],
    clinicalStrengths: [
      'Lãnh đạo Khoa Ngoại Thần Kinh Lầu 8A BV ĐHYD - nơi tiếp nhận giấy giới thiệu của PGS.TS Cao Thanh Ngọc.',
      'Bàn tay vàng trong vi phẫu giải ép tủy cổ bảo tồn tối đa cấu trúc thần kinh, tỷ lệ thành công trên 99%.',
      'Kinh nghiệm dày dặn trong mổ ACDF cho bệnh nhân cao tuổi có nhiều bệnh nền (loãng xương, tim mạch, cường giáp).'
    ],
    relevanceForSpinePatient: 'Lựa chọn số 1 tuyệt đối cho ca mổ ACDF tầng C3/4 và C5/6 của cụ Loan tại BV ĐHYD TP.HCM.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Đại Học Y Dược TP.HCM',
        departmentOrClinic: 'Phòng khám Ngoại Thần Kinh (Khu A / Lầu 8A)',
        address: '215 Hồng Bàng, Phường 11, Quận 5, TP.HCM',
        scheduleNote: 'Khám chuyên gia các buổi sáng trong tuần (Cần đăng ký qua app UMC Care)',
        bookingPhone: '1900 7178'
      }
    ],
    consultationTips: 'Mang theo Giấy giới thiệu của PGS.TS Cao Thanh Ngọc và 2 đĩa phim MRI cổ (City) & thắt lưng (Medic) để bác sĩ đọc phim trực tiếp trên màn hình chuyên dụng.'
  },
  {
    id: 'dr-nguyen-minh-anh',
    name: 'Nguyễn Minh Anh',
    academicTitle: 'TS. BS',
    currentRole: 'Trưởng Đơn vị Phẫu thuật Cột sống & Phó Trưởng Khoa Ngoại Thần Kinh BV Đại Học Y Dược TP.HCM',
    workplace: 'Bệnh viện Đại Học Y Dược TP.HCM',
    hospitalCategory: 'BV Đại Học Y Dược',
    experienceYears: 25,
    highlightBadge: 'Chuyên Gia Phẫu Thuật Cột Sống Vi Phẫu & Kỹ Thuật Cố Định Cột Sống Hiện Đại',
    coreSpecialties: [
      'Phẫu thuật ACDF lối trước, Laminoplasty lối sau và thay đĩa đệm nhân tạo',
      'Điều trị loãng xương kèm xẹp đốt sống bằng bơm xi măng sinh học (Vertebroplasty/Kyphoplasty)',
      'Phẫu thuật nội soi cột sống ít xâm lấn (MISS)'
    ],
    clinicalStrengths: [
      'Được đào tạo chuyên sâu về phẫu thuật cột sống tại Pháp, Mỹ, Hàn Quốc và Nhật Bản.',
      'Rất cẩn trọng trong việc lựa chọn loại nẹp Titanium và lồng PEEK phù hợp với mật độ xương T-score -2.7 của bệnh nhân.',
      'Giải thích tường tận, dễ hiểu cho thân nhân và bệnh nhân lớn tuổi.'
    ],
    relevanceForSpinePatient: 'Chuyên gia trực tiếp phẫu thuật cột sống cổ hàng đầu tại Lầu 8A BV ĐHYD, tối ưu hóa cố định nẹp vít cho người loãng xương.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Đại Học Y Dược TP.HCM',
        departmentOrClinic: 'Phòng khám Cột Sống - Khoa Ngoại Thần Kinh',
        address: '215 Hồng Bàng, Phường 11, Quận 5, TP.HCM',
        scheduleNote: 'Khám theo lịch phân công tại Phòng khám Chuyên khoa Thần kinh - Cột sống',
        bookingPhone: '1900 7178'
      }
    ],
    consultationTips: 'Đặt lịch khám chuyên gia TS.BS Nguyễn Minh Anh qua tổng đài hoặc app UMC Care trước 2-3 ngày.'
  },
  {
    id: 'dr-huynh-khoi-nguyen',
    name: 'Huỳnh Khôi Nguyên',
    academicTitle: 'ThS. BS',
    currentRole: 'Bác sĩ Điều trị Khoa Ngoại Thần Kinh (Lầu 8A), Bệnh viện Đại Học Y Dược TP.HCM',
    workplace: 'Khoa Ngoại Thần Kinh (Lầu 8A), Bệnh viện Đại Học Y Dược TP.HCM',
    hospitalCategory: 'BV Đại Học Y Dược',
    experienceYears: 18,
    highlightBadge: 'Bác Sĩ Trực Tiếp Ký Giấy Giới Thiệu Khám Lầu 8A BV ĐHYD',
    coreSpecialties: [
      'Thoát vị đĩa đệm cột sống cổ chèn ép tủy và rễ thần kinh',
      'Hội chứng chèn ép kép (Double Crush Syndrome): Cổ kết hợp Ống cổ tay',
      'Kỹ thuật vi phẫu ACDF lối trước ít xâm lấn hồi phục nhanh'
    ],
    clinicalStrengths: [
      'Là bác sĩ chuyên khoa ký giấy tiếp nhận hồ sơ giới thiệu của cụ Loan ngày 25/06/2026.',
      'Thấu hiểu toàn diện hồ sơ bệnh án của cụ từ chèn ép tủy C3-C6, loãng xương, cường giáp đến ống cổ tay.',
      'Tận tâm, theo dõi sát bệnh nhân từ lúc nhập viện, trong phòng mổ đến tập phục hồi chức năng sau mổ.'
    ],
    relevanceForSpinePatient: 'Bác sĩ phụ trách chính ca bệnh tại Khoa Ngoại Thần Kinh Lầu 8A BV ĐHYD.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Đại Học Y Dược TP.HCM',
        departmentOrClinic: 'Khoa Ngoại Thần Kinh (Lầu 8A - Tòa nhà A)',
        address: '215 Hồng Bàng, Phường 11, Quận 5, TP.HCM',
        scheduleNote: 'Lịch khám và hội chẩn nội trú tại Khoa Ngoại Thần Kinh Lầu 8A',
        bookingPhone: '1900 7178'
      }
    ],
    consultationTips: 'Đến trực tiếp bàn hướng dẫn Lầu 8A Khoa Ngoại Thần Kinh nộp giấy chuyển để được sắp xếp gặp BS Huỳnh Khôi Nguyên nhanh nhất.'
  },
  {
    id: 'dr-nguyen-kim-chung',
    name: 'Nguyễn Kim Chung',
    academicTitle: 'BS. CKII',
    currentRole: 'Phó Trưởng Khoa Ngoại Thần Kinh, Bệnh viện Chợ Rẫy • Chuyên gia Phẫu thuật Cột sống Vi phẫu',
    workplace: 'Bệnh viện Chợ Rẫy TP.HCM',
    hospitalCategory: 'BV Chợ Rẫy',
    experienceYears: 30,
    highlightBadge: 'Bàn Tay Vàng Vi Phẫu Cột Sống Cổ Hàng Đầu BV Chợ Rẫy',
    coreSpecialties: [
      'Phẫu thuật vi phẫu giải ép tủy cổ lối trước ACDF và lối sau',
      'Chấn thương và bệnh lý thoái hóa cột sống cổ - tủy sống người già',
      'Phẫu thuật cố định cột sống phức tạp tái tạo độ cong sinh lý'
    ],
    clinicalStrengths: [
      'Hơn 30 năm kinh nghiệm mổ vi phẫu cột sống tại trung tâm ngoại thần kinh lớn nhất miền Nam.',
      'Xử lý xuất sắc hàng nghìn ca chèn ép tủy cổ nặng có nguy cơ liệt tứ chi.',
      'Thao tác mổ cực kỳ nhanh gọn, chuẩn xác, kiểm soát chảy máu tối ưu cho bệnh nhân cao tuổi.'
    ],
    relevanceForSpinePatient: 'Chuyên gia tư vấn ý kiến thứ hai (Second Opinion) và phẫu thuật uy tín bậc nhất tại BV Chợ Rẫy.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Chợ Rẫy',
        departmentOrClinic: 'Phòng khám Chuyên gia Ngoại Thần Kinh (Khu Khám Theo Yêu Cầu)',
        address: '201B Nguyễn Chí Thanh, Phường 12, Quận 5, TP.HCM',
        scheduleNote: 'Khám theo lịch đăng ký tại Khu Khám Chuyên gia BV Chợ Rẫy',
        bookingPhone: '028 3855 4137'
      }
    ],
    consultationTips: 'Nên đi khám sớm vào buổi sáng tại Khu Khám Chuyên Gia BV Chợ Rẫy để hoàn tất thủ tục trong buổi sáng.'
  },
  {
    id: 'dr-vo-xuan-son',
    name: 'Võ Xuân Sơn',
    academicTitle: 'BS. CKII',
    currentRole: 'Nguyên Bác sĩ Phẫu thuật Cột sống Khoa Ngoại Thần Kinh BV Chợ Rẫy • Giám đốc Phòng khám Quốc tế Exson',
    workplace: 'Phòng khám Quốc tế Exson & Nguyên BV Chợ Rẫy',
    hospitalCategory: 'BV Chợ Rẫy',
    experienceYears: 33,
    highlightBadge: 'Chuyên Gia Tiên Phong Phẫu Thuật Cột Sống Ít Xâm Lấn Tại Việt Nam',
    coreSpecialties: [
      'Phẫu thuật ACDF lối trước ít xâm lấn và nội soi cột sống',
      'Tư vấn chiến lược điều trị bảo tồn vs phẫu thuật cá thể hóa',
      'Vật lý trị liệu và phục hồi chức năng cột sống thoái hóa người cao tuổi'
    ],
    clinicalStrengths: [
      'Là một trong những bác sĩ đầu tiên tại Việt Nam tiếp cận và phổ biến kỹ thuật mổ cột sống vi phẫu.',
      'Khám và tư vấn cực kỳ kỹ lưỡng, phân tích cặn kẽ từng lát cắt MRI cho bệnh nhân và người nhà.',
      'Luôn ưu tiên các phương án an toàn nhất cho người bệnh lớn tuổi.'
    ],
    relevanceForSpinePatient: 'Rất phù hợp để tham vấn chuyên sâu về phương án mổ ACDF và lộ trình phục hồi tại nhà.',
    practiceLocations: [
      {
        hospitalName: 'Phòng khám Chuyên khoa Cột Sống Exson',
        departmentOrClinic: 'Khoa Phẫu thuật Cột sống & Thần kinh',
        address: '722 Sư Vạn Hạnh, Phường 12, Quận 10, TP.HCM',
        scheduleNote: 'Khám từ Thứ 2 đến Thứ 7 theo lịch hẹn trước',
        bookingPhone: '028 3857 0670'
      }
    ],
    consultationTips: 'Đặt hẹn trước qua điện thoại để được bác sĩ dành 30-45 phút phân tích chi tiết toàn bộ phim MRI và phim X-quang.'
  },
  {
    id: 'dr-le-duc-to',
    name: 'Lê Đức Tố',
    academicTitle: 'BS. CKII',
    currentRole: 'Nguyên Trưởng Khoa Cột Sống BV Chấn Thương Chỉnh Hình TP.HCM • Cố vấn Chuyên môn Bệnh viện STO Phương Đông',
    workplace: 'Bệnh viện Ngoại Khoa & Cột Sống STO Phương Đông / Nguyên BV CTCH',
    hospitalCategory: 'BV Chấn Thương Chỉnh Hình',
    experienceYears: 40,
    highlightBadge: 'Cây Cây Đại Thụ Phẫu Thuật Cột Sống Miền Nam',
    coreSpecialties: [
      'Phẫu thuật cột sống cổ, ngực và thắt lưng phức tạp',
      'Chỉnh hình biến dạng thoái hóa cột sống người cao tuổi',
      'Phục hồi vận động sau mổ giải ép tủy sống'
    ],
    clinicalStrengths: [
      'Hơn 40 năm kinh nghiệm mổ cột sống chỉnh hình, từng xử lý vô số ca thoái hóa đa tầng phức tạp.',
      'Khả năng đánh giá lâm sàng thần kinh và độ vững cơ học cột sống cực kỳ sắc bén.',
      'Phương châm can thiệp chính xác, bảo tồn tối đa sức lực cho người cao tuổi.'
    ],
    relevanceForSpinePatient: 'Chuyên gia gạo cội uy tín cao để xin ý kiến về chiến lược giải ép cổ và bảo tồn thắt lưng.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện STO Phương Đông',
        departmentOrClinic: 'Trung tâm Phẫu thuật Cột sống',
        address: '79 Thành Thái, Phường 14, Quận 10, TP.HCM',
        scheduleNote: 'Khám các buổi sáng Thứ 2, 4, 6 theo lịch hẹn',
        bookingPhone: '028 3868 6386'
      }
    ],
    consultationTips: 'Cần liên hệ đặt lịch trước 1-2 ngày vì lượng bệnh nhân khám giáo sư khá đông.'
  },
  {
    id: 'dr-dinh-ngoc-tri',
    name: 'Đinh Ngọc Tri',
    academicTitle: 'BS. CKI',
    currentRole: 'Phó Trưởng Khoa Cột Sống B, Bệnh viện Chấn Thương Chỉnh Hình TP.HCM',
    workplace: 'Bệnh viện Chấn Thương Chỉnh Hình TP.HCM',
    hospitalCategory: 'BV Chấn Thương Chỉnh Hình',
    experienceYears: 22,
    highlightBadge: 'Chuyên Gia Phẫu Thuật Vi Phẫu Cột Sống Cổ BV CTCH TP.HCM',
    coreSpecialties: [
      'Mổ ACDF lối trước 1 tầng và đa tầng với nẹp khóa titan',
      'Giải ép rễ thần kinh và tạo hình bản sống lối sau',
      'Điều trị thoát vị đĩa đệm cột sống thắt lưng L4/L5 ít xâm lấn'
    ],
    clinicalStrengths: [
      'Bác sĩ phẫu thuật chủ lực tại BV Chấn Thương Chỉnh Hình TP.HCM - cái nôi chỉnh hình cột sống phía Nam.',
      'Thao tác vi phẫu tinh tế, tỷ lệ liền xương sau mổ ACDF đạt trên 98%.',
      'Tư vấn tận tình về các loại vật tư nẹp vít và chế độ BHYT hỗ trợ tối đa cho người bệnh.'
    ],
    relevanceForSpinePatient: 'Lựa chọn hàng đầu nếu gia đình muốn tham vấn hoặc phẫu thuật tại Bệnh viện Chấn Thương Chỉnh Hình TP.HCM.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Chấn Thương Chỉnh Hình TP.HCM',
        departmentOrClinic: 'Phòng khám Cột Sống (Khoa Cột Sống B)',
        address: '929 Trần Hưng Đạo, Phường 1, Quận 5, TP.HCM',
        scheduleNote: 'Khám theo lịch tại Khu Khám Chuyên Khoa Cột Sống',
        bookingPhone: '028 3923 5821'
      }
    ],
    consultationTips: 'Đến đăng ký tại quầy khám chuyên khoa Cột Sống vào sáng sớm và yêu cầu khám BS Đinh Ngọc Tri.'
  },
  {
    id: 'dr-truong-van-tri',
    name: 'Trương Văn Trí',
    academicTitle: 'TS. BS',
    currentRole: 'Trưởng Khoa Phẫu thuật Cột sống, Bệnh viện Quân Y 175',
    workplace: 'Bệnh viện Quân Y 175 (Bộ Quốc Phòng)',
    hospitalCategory: 'BV Quân Y 175',
    experienceYears: 24,
    highlightBadge: 'Chuyên Gia Phẫu Thuật Cột Sống Kỹ Thuật Cao & Hệ Thống Định Vị Navigation',
    coreSpecialties: [
      'Phẫu thuật ACDF vi phẫu ứng dụng hệ thống định vị 3D Navigation O-arm',
      'Phẫu thuật giải ép tủy cổ trên bệnh nhân cao tuổi có bệnh lý nền phối hợp',
      'Kỹ thuật hàn xương liên thân đốt ít xâm lấn giảm đau sau mổ'
    ],
    clinicalStrengths: [
      'BV Quân Y 175 sở hữu Viện Chấn thương Chỉnh hình với trang thiết bị phòng mổ Hybrid hiện đại bậc nhất.',
      'TS Trí áp dụng hệ thống định vị không gian 3D giúp bắt vít nẹp Titanium chính xác đến từng milimet.',
      'Quy trình hồi sức chu phẫu quân y nghiêm ngặt, chăm sóc bệnh nhân cao tuổi toàn diện.'
    ],
    relevanceForSpinePatient: 'Cơ sở y tế kỹ thuật cao lý tưởng khu vực Gò Vấp - Tân Bình với cơ sở vật chất 5 sao.',
    practiceLocations: [
      {
        hospitalName: 'Viện Chấn Thương Chỉnh Hình - Bệnh viện Quân Y 175',
        departmentOrClinic: 'Khoa Phẫu thuật Cột sống (Tầng 4)',
        address: '786 Nguyễn Kiệm, Phường 3, Quận Gò Vấp, TP.HCM',
        scheduleNote: 'Khám từ Thứ 2 đến Thứ 6 tại Khu Khám Kỹ Thuật Cao',
        bookingPhone: '1900 1175'
      }
    ],
    consultationTips: 'Đặt lịch trước qua tổng đài 1900 1175 để được hướng dẫn vào khu khám dịch vụ cao cấp.'
  },
  {
    id: 'dr-mai-hoang-vu',
    name: 'Mai Hoàng Vũ',
    academicTitle: 'BS. CKII',
    currentRole: 'Trưởng Khoa Ngoại Thần Kinh - Cột Sống, Bệnh viện Đa Khoa Tâm Anh TP.HCM',
    workplace: 'Bệnh viện Đa khoa Tâm Anh TP.HCM',
    hospitalCategory: 'BVĐK Tâm Anh',
    experienceYears: 26,
    highlightBadge: 'Chuyên Gia Vi Phẫu Cột Sống Cổ Dưới Kính Hiển Vi 3D Kinevo 900',
    coreSpecialties: [
      'Phẫu thuật ACDF lối trước sử dụng kính vi phẫu tích hợp huỳnh quang 3D Kinevo 900',
      'Theo dõi điện sinh lý thần kinh trong mổ (Intraoperative Neuromonitoring - IONM) chống tổn thương tủy',
      'Phục hồi chức năng vận động sớm sau mổ cột sống cổ'
    ],
    clinicalStrengths: [
      'BV Tâm Anh trang bị hệ thống IONM theo dõi sóng dẫn truyền tủy sống liên tục trong lúc mổ, triệt tiêu nguy cơ chạm thương tủy.',
      'Dịch vụ nội trú 5 sao, điều dưỡng chăm sóc 1-kèm-1 rất phù hợp cho người cao tuổi cần phục hồi nhẹ nhàng.',
      'Bác sĩ tận tình, giải thích chi tiết phác đồ chăm sóc cho gia đình.'
    ],
    relevanceForSpinePatient: 'Lựa chọn xuất sắc cho gia đình mong muốn dịch vụ phẫu thuật cao cấp, an toàn tối đa với hệ thống giám sát thần kinh IONM.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Đa khoa Tâm Anh TP.HCM',
        departmentOrClinic: 'Khoa Ngoại Thần Kinh - Cột Sống (Tầng 2)',
        address: 'Số 2B Phổ Quang, Phường 2, Quận Tân Bình, TP.HCM',
        scheduleNote: 'Khám tất cả các ngày trong tuần theo lịch hẹn tổng đài',
        bookingPhone: '028 7102 6789'
      }
    ],
    consultationTips: 'Đặt lịch khám chuyên khoa Thần kinh Cột sống BV Tâm Anh qua tổng đài và mang theo toàn bộ hồ sơ cận lâm sàng.'
  },
  {
    id: 'dr-cao-thanh-ngoc',
    name: 'Cao Thanh Ngọc',
    academicTitle: 'PGS. TS. BS',
    currentRole: 'Trưởng Khoa Lão - Cơ Xương Khớp BV Đại Học Y Dược TP.HCM • Phó Chủ tịch Hội Loãng Xương TP.HCM',
    workplace: 'Khoa Lão - Cơ Xương Khớp, Bệnh viện Đại Học Y Dược TP.HCM',
    hospitalCategory: 'BV Đại Học Y Dược',
    experienceYears: 28,
    highlightBadge: 'Chuyên Gia Ký Giấy Chuyển Tuyến Ngoại Thần Kinh & Quản Lý Loãng Xương Chu Phẫu',
    coreSpecialties: [
      'Quản lý bệnh lý Cơ Xương Khớp & Loãng xương nặng đa yếu tố ở người cao tuổi',
      'Đánh giá toàn diện sức khỏe người cao tuổi trước và sau phẫu thuật lớn',
      'Phác đồ điều trị chống hủy xương tăng mật độ xương liền nẹp vít cột sống'
    ],
    clinicalStrengths: [
      'Chính là bác sĩ chuyên khoa ký giấy chuyển cụ Loan sang Khoa Ngoại Thần Kinh Lầu 8A ngày 25/06/2026.',
      'Chuyên gia hàng đầu Việt Nam về điều trị loãng xương tuổi mãn kinh ($T-score: -2.7$).',
      'Đảm nhiệm vai trò then chốt điều trị nội khoa củng cố xương vững chắc trước và sau ca mổ ACDF.'
    ],
    relevanceForSpinePatient: 'Bác sĩ chủ trì quản lý nội khoa cơ xương khớp và theo dõi toàn diện sức khỏe người cao tuổi cho cụ Loan tại BV ĐHYD.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Đại Học Y Dược TP.HCM',
        departmentOrClinic: 'Phòng khám Cơ Xương Khớp / Phòng khám Lão khoa (Khu A)',
        address: '215 Hồng Bàng, Phường 11, Quận 5, TP.HCM',
        scheduleNote: 'Khám theo lịch phân công tại Khu Khám Chuyên Gia Cơ Xương Khớp',
        bookingPhone: '1900 7178'
      }
    ],
    consultationTips: 'Tiếp tục tái khám định kỳ theo lịch hẹn của PGS.TS Cao Thanh Ngọc để duy trì phác đồ chống loãng xương song song với điều trị ngoại khoa.'
  }
];
