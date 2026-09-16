export interface DoctorProfile {
  id: string;
  name: string;
  academicTitle: string; // PGS.TS.BS, BS.CKII, TS.BS
  currentRole: string;
  workplace: string;
  hospitalCategory: 'BV Hùng Vương' | 'BV Từ Dũ' | 'BV Đại Học Y Dược' | 'BVĐK Tâm Anh' | 'BV Ung Bướu TP.HCM';
  experienceYears: number;
  highlightBadge: string;
  coreSpecialties: string[];
  clinicalStrengths: string[];
  relevanceForTamoxifenPatient: string;
  practiceLocations: {
    hospitalName: string;
    departmentOrClinic: string;
    address: string;
    scheduleNote: string;
    bookingPhone?: string;
  }[];
  consultationTips: string;
}

export const topDoctorsList: DoctorProfile[] = [
  {
    id: 'dr-nguyen-ba-my-nhi',
    name: 'Nguyễn Bá Mỹ Nhi',
    academicTitle: 'BS. CKII',
    currentRole: 'Giám đốc Trung tâm Sản Phụ khoa, BVĐK Tâm Anh TP.HCM • Nguyên Phó Giám đốc Bệnh viện Từ Dũ',
    workplace: 'Bệnh viện Đa khoa Tâm Anh TP.HCM & Nguyên BV Từ Dũ',
    hospitalCategory: 'BVĐK Tâm Anh',
    experienceYears: 35,
    highlightBadge: 'Chuyên Gia Đầu Ngành Phẫu Thuật Nội Soi & Phụ Khoa Ung Bướu',
    coreSpecialties: [
      'Phẫu thuật nội soi phụ khoa xâm lấn tối thiểu (U xơ, Adenomyosis, Cắt tử cung bảo tồn buồng trứng)',
      'Phụ khoa Ung bướu & Tầm soát tổn thương tiền ung thư nội mạc, cổ tử cung',
      'Xử trí rong kinh, rong huyết mạn tính kháng trị ở phụ nữ tiền mãn kinh'
    ],
    clinicalStrengths: [
      'Bàn tay vàng trong phẫu thuật nội soi phụ khoa phức tạp với hàng chục nghìn ca mổ thành công tại BV Từ Dũ và BV Tâm Anh.',
      'Kinh nghiệm dày dặn trong hội chẩn liên chuyên khoa giữa Phụ sản và Ung bướu cho bệnh nhân có tiền sử ung thư vú.',
      'Phong cách thăm khám điềm đạm, ân cần, giải thích cặn kẽ từng chi tiết cận lâm sàng cho bệnh nhân.'
    ],
    relevanceForTamoxifenPatient: 'Cực kỳ phù hợp để hội chẩn chỉ định phẫu thuật nội soi cắt tử cung bảo tồn buồng trứng hoặc nội soi buồng tử cung bóc tách thương tổn.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Đa khoa Tâm Anh TP.HCM',
        departmentOrClinic: 'Trung tâm Sản Phụ khoa (Tầng 2)',
        address: 'Số 2B Phổ Quang, Phường 2, Quận Tân Bình, TP.HCM',
        scheduleNote: 'Khám theo lịch hẹn các ngày trong tuần (Cần đặt lịch trước qua tổng đài)',
        bookingPhone: '028 7102 6789'
      }
    ],
    consultationTips: 'Nên đặt hẹn trước 3 - 5 ngày qua tổng đài BV Tâm Anh và mang theo đầy đủ các kết quả siêu âm Tâm Anh 2025 và giải phẫu bệnh Hùng Vương 2026.'
  },
  {
    id: 'dr-huynh-nguyen-khanh-trang',
    name: 'Huỳnh Nguyễn Khánh Trang',
    academicTitle: 'PGS. TS. BS',
    currentRole: 'Trưởng khoa Sanh Bệnh viện Hùng Vương • Chủ nhiệm Bộ môn Phụ Sản ĐH Y khoa Phạm Ngọc Thạch',
    workplace: 'Bệnh viện Hùng Vương & ĐH Y khoa Phạm Ngọc Thạch',
    hospitalCategory: 'BV Hùng Vương',
    experienceYears: 32,
    highlightBadge: 'Chuyên Gia Hàng Đầu BV Hùng Vương & Cố Vấn Học Thuật',
    coreSpecialties: [
      'Bệnh lý nội mạc tử cung, tăng sản nội mạc và rong kinh tiền mãn kinh',
      'Phẫu thuật phụ khoa kỹ thuật cao và bệnh học tử cung - buồng trứng',
      'Điều trị phụ khoa cá thể hóa cho bệnh nhân có bệnh lý nền nội khoa/ung bướu'
    ],
    clinicalStrengths: [
      'Chuyên gia học thuật đầu ngành thường xuyên cập nhật các hướng dẫn lâm sàng mới nhất của ACOG và FIGO.',
      'Trực tiếp quản lý và hội chẩn các ca bệnh khó, kéo dài tại Bệnh viện Hùng Vương.',
      'Tư vấn điều trị logic, khoa học, giúp bệnh nhân an tâm hiểu rõ căn nguyên bệnh sinh.'
    ],
    relevanceForTamoxifenPatient: 'Là chuyên gia đầu ngành tại BV Hùng Vương (nơi chị vừa thực hiện sinh thiết giải phẫu bệnh ngày 15/09/2026).',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Hùng Vương TP.HCM',
        departmentOrClinic: 'Khu Khám Chuyên Gia / Phòng Khám Theo Yêu Cầu',
        address: 'Số 128 Hồng Bàng, Phường 12, Quận 5, TP.HCM',
        scheduleNote: 'Lịch khám chuyên gia định kỳ hàng tuần (Đặt lịch qua tổng đài BV Hùng Vương)',
        bookingPhone: '028 3855 8582'
      }
    ],
    consultationTips: 'Khi đăng ký khám chuyên gia tại BV Hùng Vương, chị có thể yêu cầu mã hồ sơ lưu mẫu giải phẫu bệnh để bác sĩ tra cứu kết quả vi thể trực tiếp trên hệ thống.'
  },
  {
    id: 'dr-bui-chi-thuong',
    name: 'Bùi Chí Thương',
    academicTitle: 'TS. BS',
    currentRole: 'Trưởng Khối Sản BV Nhân Dân Gia Định • Giảng viên Cao cấp Bộ môn Phụ Sản ĐH Y Dược TP.HCM • Bác sĩ BV Từ Dũ',
    workplace: 'ĐH Y Dược TP.HCM, BV Từ Dũ & BV Nhân Dân Gia Định',
    hospitalCategory: 'BV Từ Dũ',
    experienceYears: 25,
    highlightBadge: 'Chuyên Gia Phẫu Thuật Bảo Tồn & Lạc Nội Mạc Tử Cung',
    coreSpecialties: [
      'Phẫu thuật nội soi bóc u xơ tử cung, điều trị Adenomyosis bảo tồn buồng trứng',
      'Nội soi buồng tử cung (Hysteroscopy) chẩn đoán và điều trị tăng sản niêm mạc',
      'Nội tiết phụ khoa và điều hòa kinh nguyệt sau các liệu pháp ức chế hormone'
    ],
    clinicalStrengths: [
      'Nổi tiếng với kỹ thuật mổ nội soi tinh tế, đường mổ nhỏ thẩm mỹ, bảo tồn tối đa cấu trúc giải phẫu và buồng trứng.',
      'Giải thích bệnh lý cực kỳ bình dân, gần gũi, truyền năng lượng tích cực giúp bệnh nhân vượt qua nỗi sợ phẫu thuật.',
      'Được đào tạo nội soi nâng cao tại Pháp và nhiều trung tâm y khoa hàng đầu thế giới.'
    ],
    relevanceForTamoxifenPatient: 'Rất lý tưởng để tư vấn phương án phẫu thuật nội soi bảo tồn buồng trứng, giúp chấm dứt rong kinh mà không làm mất nội tiết tự nhiên.',
    practiceLocations: [
      {
        hospitalName: 'Phòng khám Chuyên khoa Phụ sản TS.BS Bùi Chí Thương',
        departmentOrClinic: 'Phòng khám Phụ Sản & Nội soi',
        address: 'Số 214/19A Nguyễn Văn Nguyễn, Phường Tân Định, Quận 1, TP.HCM',
        scheduleNote: 'Khám ngoài giờ các buổi chiều tối trong tuần (Nên gọi hẹn trước)',
        bookingPhone: '090 395 7977'
      },
      {
        hospitalName: 'Bệnh viện Đại học Y Dược TP.HCM / BV Từ Dũ',
        departmentOrClinic: 'Khoa Phụ Sản',
        address: 'Số 215 Hồng Bàng, Phường 11, Quận 5, TP.HCM',
        scheduleNote: 'Lịch khám và mổ theo lịch phân công của Bộ môn Phụ Sản'
      }
    ],
    consultationTips: 'Có thể liên hệ đặt lịch khám ngoài giờ tại Quận 1 để được bác sĩ tư vấn riêng tư, chi tiết về chiến lược bảo tồn buồng trứng.'
  },
  {
    id: 'dr-hoang-thi-thu-huyen',
    name: 'Hoàng Thị Thu Huyền',
    academicTitle: 'ThS. BS. CKII',
    currentRole: 'Bác sĩ Chuyên khoa Cấp cao • Bệnh viện Hùng Vương',
    workplace: 'Bệnh viện Hùng Vương TP.HCM',
    hospitalCategory: 'BV Hùng Vương',
    experienceYears: 20,
    highlightBadge: 'Bác Sĩ Trực Tiếp Chỉ Định & Theo Dõi Ca Bệnh Tại BV Hùng Vương',
    coreSpecialties: [
      'Chẩn đoán hình ảnh siêu âm phụ khoa chuyên sâu & Doppler mạch máu tử cung',
      'Sinh thiết nội mạc tử cung ngoại trú bằng Pipelle & nạo sinh thiết chẩn đoán',
      'Quản lý theo dõi u xơ tử cung thành sau, Adenomyosis và các biến đổi niêm mạc do thuốc'
    ],
    clinicalStrengths: [
      'Là bác sĩ trực tiếp thăm khám và ký phiếu siêu âm / chỉ định sinh thiết giải phẫu bệnh ngày 09/09/2026 của chị tại BV Hùng Vương.',
      'Nắm rất rõ toàn bộ diễn tiến thực tế lòng tử cung và khối cơ thành sau của bệnh nhân.',
      'Thao tác lấy mẫu nhẹ nhàng, chính xác và cẩn trọng.'
    ],
    relevanceForTamoxifenPatient: 'Bác sĩ quen thuộc đã trực tiếp nắm bệnh án, rất thuận lợi cho việc tái khám theo dõi định kỳ sau khi đã có kết quả GPB lành tính.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Hùng Vương TP.HCM',
        departmentOrClinic: 'Khoa Khám Bệnh / Khu Khám Phụ Khoa Chuyên Sâu',
        address: 'Số 128 Hồng Bàng, Phường 12, Quận 5, TP.HCM',
        scheduleNote: 'Khám theo lịch phân công chuyên môn tại BV Hùng Vương',
        bookingPhone: '028 3855 8582'
      }
    ],
    consultationTips: 'Chị có thể đăng ký khám đúng bác sĩ Huyền tại BV Hùng Vương và xuất trình phiếu kết quả GPB ngày 15/09/2026 để bác sĩ ra quyết định điều trị tiếp theo.'
  },
  {
    id: 'dr-to-thi-minh-nguyet',
    name: 'Tô Thị Minh Nguyệt',
    academicTitle: 'BS. CKII',
    currentRole: 'Chuyên gia Phụ khoa Ung bướu • Nguyên Phó Trưởng khoa Khám Phụ khoa BV Từ Dũ',
    workplace: 'Bệnh viện Từ Dũ & Trung tâm Y khoa Quốc tế',
    hospitalCategory: 'BV Từ Dũ',
    experienceYears: 30,
    highlightBadge: 'Chuyên Gia Thâm Niên Phụ Khoa Ung Bướu & Tầm Soát',
    coreSpecialties: [
      'Phụ khoa Ung bướu: Tầm soát và phân loại nguy cơ tăng sản nội mạc tử cung',
      'Theo dõi và quản lý tác dụng phụ trên hệ sinh dục của các thuốc nội tiết chống K vú',
      'Điều trị bảo tồn và phẫu thuật phụ khoa ở phụ nữ trung niên'
    ],
    clinicalStrengths: [
      'Kinh nghiệm 3 thập kỷ chuyên sâu về mảng bệnh học phụ khoa kết hợp ung bướu tại BV Từ Dũ.',
      'Rất cẩn thận trong việc đánh giá từng tiêu bản giải phẫu bệnh và hình ảnh siêu âm.',
      'Tư vấn điều trị chuẩn mực, tuân thủ nghiêm ngặt phác đồ y khoa thực chứng.'
    ],
    relevanceForTamoxifenPatient: 'Có chuyên môn sâu về việc theo dõi biến đổi nội mạc tử cung ở phụ nữ điều trị thuốc SERM (Tamoxifen).',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Từ Dũ TP.HCM',
        departmentOrClinic: 'Khu Khám Dịch Vụ / Khám Chuyên Gia',
        address: 'Số 284 Cống Quỳnh, Phường Phạm Ngũ Lão, Quận 1, TP.HCM',
        scheduleNote: 'Theo lịch làm việc chuyên gia tại BV Từ Dũ',
        bookingPhone: '028 5404 2829'
      }
    ],
    consultationTips: 'Rất phù hợp nếu chị muốn có thêm ý kiến độc lập (Second Opinion) từ một chuyên gia kỳ cựu của Bệnh viện Từ Dũ.'
  },
  {
    id: 'dr-tran-nhat-thang',
    name: 'Trần Nhật Thăng',
    academicTitle: 'TS. BS',
    currentRole: 'Trưởng khoa Phụ Sản Bệnh viện Đại học Y Dược TP.HCM',
    workplace: 'Bệnh viện Đại học Y Dược TP.HCM (Cơ sở 1)',
    hospitalCategory: 'BV Đại Học Y Dược',
    experienceYears: 24,
    highlightBadge: 'Lãnh Đạo Khoa Phụ Sản UMC • Chuyên Gia Phẫu Thuật Nội Soi Tiên Tiến',
    coreSpecialties: [
      'Phẫu thuật nội soi phụ khoa kỹ thuật cao (Cắt tử cung toàn phần bảo tồn 2 buồng trứng)',
      'Hội chẩn liên viện Sản Phụ Khoa - Ung Bướu (Đại Học Y Dược TP.HCM)',
      'Bệnh lý tử cung phức tạp: Lạc tuyến trong cơ (Adenomyosis) kết hợp đa u xơ'
    ],
    clinicalStrengths: [
      'Đang trực tiếp lãnh đạo đơn vị Sản Phụ khoa tại bệnh viện đa khoa tuyến cuối hàng đầu phía Nam (UMC).',
      'Lợi thế cực lớn về hội chẩn đa chuyên khoa: Phụ khoa, Ung bướu vú, Tim mạch, Gây mê hồi sức trong cùng một bệnh viện.',
      'Ứng dụng các quy trình mổ ít đau, hồi phục sớm (ERAS) giúp bệnh nhân xuất viện sớm.'
    ],
    relevanceForTamoxifenPatient: 'Lựa chọn hàng đầu nếu chị muốn thực hiện phẫu thuật tại Bệnh viện Đại học Y Dược TP.HCM với sự phối hợp chặt chẽ giữa khoa Phụ sản và khoa Ung bướu.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Đại học Y Dược TP.HCM (Cơ sở 1)',
        departmentOrClinic: 'Khoa Phụ Sản (Tầng 1 - Khu B)',
        address: 'Số 215 Hồng Bàng, Phường 11, Quận 5, TP.HCM',
        scheduleNote: 'Khám chuyên gia tại Phòng khám Phụ Sản UMC (Đặt trước qua App UMC)',
        bookingPhone: '1900 7178'
      }
    ],
    consultationTips: 'Có thể đặt hẹn nhanh chóng qua Ứng dụng "UMC - Đăng ký khám bệnh Online" của Bệnh viện Đại học Y Dược TP.HCM.'
  },
  {
    id: 'dr-le-thi-kieu-dung',
    name: 'Lê Thị Kiều Dung',
    academicTitle: 'BS. CKII',
    currentRole: 'Nguyên Trưởng khoa Phụ sản Bệnh viện Đại học Y Dược TP.HCM • Chuyên gia Cấp cao',
    workplace: 'Bệnh viện Đại học Y Dược TP.HCM & Phòng khám tư',
    hospitalCategory: 'BV Đại Học Y Dược',
    experienceYears: 36,
    highlightBadge: 'Bác Sĩ Gạo Cội Được Hàng Nghìn Phụ Nữ Tin Cậy',
    coreSpecialties: [
      'Nội tiết sinh sản, rối loạn kinh nguyệt tiền mãn kinh và bệnh lý nội mạc tử cung',
      'Tư vấn tâm lý và điều trị bảo tồn sức khỏe phụ nữ sau điều trị ung thư',
      'Quản lý u xơ tử cung và các bệnh lý lành tính đường sinh dục'
    ],
    clinicalStrengths: [
      'Một trong những gương mặt gạo cội, uy tín bậc nhất của Sản Phụ khoa miền Nam.',
      'Khám bệnh cực kỳ tận tâm, xem người bệnh như người nhà, tư vấn kỹ lưỡng về cả thể chất lẫn tâm lý.',
      'Nhiều kinh nghiệm thực tiễn xử trí các ca rong kinh dai dẳng do rối loạn nội tiết.'
    ],
    relevanceForTamoxifenPatient: 'Rất thích hợp cho bệnh nhân muốn được tư vấn kỹ về tâm lý, lối sống, cách bảo tồn nội tiết và theo dõi sức khỏe dài hạn sau K vú.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Đại học Y Dược TP.HCM (Cơ sở 1)',
        departmentOrClinic: 'Phòng khám Chuyên gia Phụ Sản',
        address: 'Số 215 Hồng Bàng, Phường 11, Quận 5, TP.HCM',
        scheduleNote: 'Khám theo lịch định kỳ tại UMC',
        bookingPhone: '1900 7178'
      }
    ],
    consultationTips: 'Bác sĩ Dung rất đông bệnh nhân đăng ký, nên đặt hẹn trước ít nhất 1 tuần qua tổng đài UMC.'
  },
  {
    id: 'dr-nguyen-van-tuyen',
    name: 'Nguyễn Văn Tuyên',
    academicTitle: 'TS. BS',
    currentRole: 'Nguyên Trưởng khoa Phụ khoa Ung bướu • Bệnh viện Ung Bướu TP.HCM',
    workplace: 'Bệnh viện Ung Bướu TP.HCM',
    hospitalCategory: 'BV Ung Bướu TP.HCM',
    experienceYears: 30,
    highlightBadge: 'Chuyên Gia Hàng Đầu Về Ung Bướu Phụ Khoa',
    coreSpecialties: [
      'Phẫu thuật ung bướu phụ khoa (Ung thư nội mạc, cổ tử cung, buồng trứng)',
      'Đánh giá nguy cơ ác tính và chỉ định sinh thiết / phẫu thuật an toàn cho bệnh nhân ung thư',
      'Xử trí các biến chứng phụ khoa phức tạp trên bệnh nhân đang hoặc sau hóa trị / nội tiết'
    ],
    clinicalStrengths: [
      'Chuyên gia ngoại khoa ung bướu phụ khoa đầu ngành của BV Ung Bướu TP.HCM.',
      'Nhìn nhận bệnh lý dưới góc độ ung thư học chuẩn xác, phân tầng nguy cơ rõ ràng, không làm quá mức (overtreatment) các tổn thương lành tính.',
      'Thao tác phẫu thuật dứt khoát, an toàn.'
    ],
    relevanceForTamoxifenPatient: 'Nếu chị muốn một chuyên gia chuyên trách về Ung Bướu khẳng định lại độ an toàn của tử cung sau 5 năm Tamoxifen, đây là địa chỉ tin cậy số 1.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Ung Bướu TP.HCM (Cơ sở 1 & Cơ sở 2)',
        departmentOrClinic: 'Khoa Khám Bệnh Chuyên Khoa Phụ Khoa Ung Bướu',
        address: 'Số 3 Nơ Trang Long, Phường 7, Bình Thạnh hoặc Cơ sở TP. Thủ Đức',
        scheduleNote: 'Khám theo lịch phân công tại BV Ung Bướu',
        bookingPhone: '028 3843 3021'
      }
    ],
    consultationTips: 'Khi đến khám, nên mang theo đầy đủ hồ sơ bệnh án điều trị K vú 5 năm và kết quả giải phẫu bệnh nội mạc tử cung BV Hùng Vương.'
  },
  {
    id: 'dr-le-thi-thu-ha',
    name: 'Lê Thị Thu Hà',
    academicTitle: 'TS. BS',
    currentRole: 'Trưởng khoa Sản Phụ khoa BV Quốc Tế Mỹ (AIH) • Nguyên Trưởng khoa Khám Bệnh Bệnh viện Từ Dũ',
    workplace: 'BV Quốc Tế Mỹ (AIH) & Nguyên BV Từ Dũ',
    hospitalCategory: 'BV Từ Dũ',
    experienceYears: 28,
    highlightBadge: 'Kinh Nghiệm Lâm Sàng Đa Dạng & Thăm Khám Chu Đáo',
    coreSpecialties: [
      'Khám và điều trị toàn diện các bệnh lý phụ khoa, dày niêm mạc, u xơ tử cung',
      'Nội soi buồng tử cung chẩn đoán và bóc tách polyp, mảng tăng sản',
      'Tư vấn chăm sóc sức khỏe phụ nữ giai đoạn tiền mãn kinh và sau mãn kinh'
    ],
    clinicalStrengths: [
      'Nguyên là Trưởng khoa Khám bệnh BV Từ Dũ với khối lượng ca bệnh lâm sàng khổng lồ được xử trí thành công.',
      'Kỹ năng giao tiếp y khoa nhẹ nhàng, giải thích cặn kẽ từng băn khoăn của người bệnh.',
      'Môi trường thăm khám chuẩn quốc tế, cơ sở vật chất hiện đại, không phải chờ đợi lâu.'
    ],
    relevanceForTamoxifenPatient: 'Thích hợp cho bệnh nhân muốn không gian khám bệnh thoải mái, dịch vụ cao cấp, được bác sĩ lắng nghe và tư vấn kỹ càng.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Quốc tế Mỹ (AIH)',
        departmentOrClinic: 'Khoa Phụ Sản (Tầng 2)',
        address: 'Số 199 Nguyễn Hoàng, Phường An Phú, TP. Thủ Đức (Quận 2 cũ), TP.HCM',
        scheduleNote: 'Khám các ngày trong tuần theo lịch hẹn',
        bookingPhone: '028 3910 9999'
      }
    ],
    consultationTips: 'Có thể đặt hẹn trước qua tổng đài AIH để được tiếp đón chu đáo và không mất thời gian chờ đợi.'
  },
  {
    id: 'dr-nguyen-ngoc-thoai',
    name: 'Nguyễn Ngọc Thoại',
    academicTitle: 'BS. CKII',
    currentRole: 'Bác sĩ Chuyên khoa Cấp cao • Trung tâm Sản Phụ khoa BVĐK Tâm Anh TP.HCM',
    workplace: 'Bệnh viện Đa khoa Tâm Anh TP.HCM',
    hospitalCategory: 'BVĐK Tâm Anh',
    experienceYears: 22,
    highlightBadge: 'Bác Sĩ Chỉ Định Khám & Siêu Âm Đầu Dò Tại BV Tâm Anh',
    coreSpecialties: [
      'Siêu âm đầu dò âm đạo độ phân giải cao phát hiện sớm tổn thương nội mạc & cơ tử cung',
      'Chẩn đoán và phân loại Adenomyosis thành sau, u xơ tử cung theo phân loại FIGO',
      'Điều trị nội khoa phụ khoa và quản lý các bất thường ra máu buồng tử cung'
    ],
    clinicalStrengths: [
      'Là bác sĩ chỉ định phiếu siêu âm ngả âm đạo ngày 22/05/2025 của chị tại BV Tâm Anh (kết luận Adenomyosis thành sau và nội mạc 15mm).',
      'Được đào tạo bài bản, phân tích hình ảnh siêu âm chi tiết, cặn kẽ từng lớp cơ và mạch máu.',
      'Làm việc trong hệ thống trang thiết bị chẩn đoán hình ảnh cao cấp bậc nhất tại BV Tâm Anh.'
    ],
    relevanceForTamoxifenPatient: 'Bác sĩ đã trực tiếp theo dõi hình ảnh tử cung của chị từ năm 2025, rất thích hợp để đối chiếu sự thay đổi trước và sau khi ngưng Tamoxifen.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Đa khoa Tâm Anh TP.HCM',
        departmentOrClinic: 'Trung tâm Sản Phụ khoa',
        address: 'Số 2B Phổ Quang, Phường 2, Quận Tân Bình, TP.HCM',
        scheduleNote: 'Khám theo lịch hẹn tại Trung tâm Sản Phụ khoa BV Tâm Anh',
        bookingPhone: '028 7102 6789'
      }
    ],
    consultationTips: 'Khi tái khám tại BV Tâm Anh, chị có thể đăng ký gặp BS.CKII Nguyễn Ngọc Thoại để đối chiếu hình ảnh siêu âm 2025 với kết quả GPB Hùng Vương 2026.'
  }
];
