export interface OrthoDoctorProfile {
  id: string;
  name: string;
  academicTitle: string;
  currentRole: string;
  workplace: string;
  hospitalCategory: 'BV Chấn Thương Chỉnh Hình' | 'BV Đại Học Y Dược' | 'BV Chợ Rẫy' | 'BV Quân Y 175' | 'BVĐK Tâm Anh';
  experienceYears: number;
  highlightBadge: string;
  coreSpecialties: string[];
  clinicalStrengths: string[];
  relevanceForAnklePatient: string;
  practiceLocations: {
    hospitalName: string;
    departmentOrClinic: string;
    address: string;
    scheduleNote: string;
    bookingPhone?: string;
  }[];
  consultationTips: string;
}

export const topOrthoDoctorsList: OrthoDoctorProfile[] = [
  {
    id: 'dr-do-phuoc-hung',
    name: 'Đỗ Phước Hùng',
    academicTitle: 'PGS. TS. BS',
    currentRole: 'Chủ nhiệm Bộ môn Chấn Thương Chỉnh Hình ĐH Y Dược TP.HCM • Chuyên gia Phẫu thuật Khớp Cổ Chân & Chi Dưới',
    workplace: 'Bệnh viện Chợ Rẫy & Bệnh viện Đại Học Y Dược TP.HCM',
    hospitalCategory: 'BV Đại Học Y Dược',
    experienceYears: 32,
    highlightBadge: 'Chuyên Gia Đầu Ngành Phẫu Thuật Chi Dưới & Khớp Cổ Chân Miền Nam',
    coreSpecialties: [
      'Phẫu thuật kết hợp xương nẹp vít ORIF gãy mắt cá phức tạp và gãy hở',
      'Tái tạo dây chằng cổ chân (ATFL, CFL, Khớp chày mác) và nội soi khớp cổ chân',
      'Xử trí gãy xương trên nền loãng xương nặng ở người cao tuổi'
    ],
    clinicalStrengths: [
      'Đào tạo hàng thế hệ bác sĩ phẫu thuật chấn thương chỉnh hình tại Việt Nam.',
      'Kỹ thuật mổ kết hợp xương đạt độ chuẩn xác giải phẫu tuyệt đối, giảm thiểu tối đa tổn thương mô mềm.',
      'Kinh nghiệm lâm sàng phong phú trong xử lý các ca gãy xương loãng xương kèm đứt nhiều dây chằng.'
    ],
    relevanceForAnklePatient: 'Lựa chọn số 1 hàng đầu để phẫu thuật hoặc hội chẩn chuyên sâu ca gãy 2 mắt cá kèm toác khớp chày mác.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Đại Học Y Dược TP.HCM',
        departmentOrClinic: 'Phòng khám Chuyên gia Chấn Thương Chỉnh Hình (Khu A)',
        address: '215 Hồng Bàng, Phường 11, Quận 5, TP.HCM',
        scheduleNote: 'Khám chuyên gia các buổi sáng Thứ 3, Thứ 5 theo lịch hẹn',
        bookingPhone: '1900 7178'
      }
    ],
    consultationTips: 'Đặt lịch trước qua ứng dụng UMC Care và mang theo toàn bộ phim X-quang và MRI cổ chân.'
  },
  {
    id: 'dr-bui-hong-thien-khanh',
    name: 'Bùi Hồng Thiên Khanh',
    academicTitle: 'TS. BS',
    currentRole: 'Trưởng Khoa Chấn Thương Chỉnh Hình, Bệnh viện Đại Học Y Dược TP.HCM',
    workplace: 'Bệnh viện Đại Học Y Dược TP.HCM',
    hospitalCategory: 'BV Đại Học Y Dược',
    experienceYears: 28,
    highlightBadge: 'Bàn Tay Vàng Phẫu Thuật Khớp & Chấn Thương Chi Dưới BV ĐHYD',
    coreSpecialties: [
      'Phẫu thuật nẹp khóa Titanium giải phẫu cho gãy mắt cá chân người cao tuổi',
      'Nội soi khớp cổ chân điều trị tổn thương sụn sên và tái tạo dây chằng',
      'Phục hồi chức năng vận động sớm sau kết hợp xương'
    ],
    clinicalStrengths: [
      'Trực tiếp phụ trách Khoa Chấn Thương Chỉnh Hình BV ĐHYD với trang thiết bị phòng mổ hiện đại chuẩn quốc tế.',
      'Áp dụng phương pháp giảm đau đa mô thức chu phẫu giúp bệnh nhân cao tuổi hồi phục nhanh, ít đau.',
      'Giải thích tận tình, chu đáo cho bệnh nhân và gia đình.'
    ],
    relevanceForAnklePatient: 'Chuyên gia phụ trách chính phẫu thuật kết hợp xương mắt cá tại BV Đại Học Y Dược TP.HCM.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Đại Học Y Dược TP.HCM',
        departmentOrClinic: 'Khoa Chấn Thương Chỉnh Hình (Khu B)',
        address: '215 Hồng Bàng, Phường 11, Quận 5, TP.HCM',
        scheduleNote: 'Khám theo lịch phân công tại Khu Khám Chuyên Khoa Chấn Thương Chỉnh Hình',
        bookingPhone: '1900 7178'
      }
    ],
    consultationTips: 'Đăng ký khám chuyên khoa Chấn Thương Chỉnh Hình tại BV ĐHYD để được TS Khanh trực tiếp đánh giá.'
  },
  {
    id: 'dr-le-gia-anh-thao',
    name: 'Lê Gia Ánh Thao',
    academicTitle: 'TS. BS',
    currentRole: 'Trưởng Khoa Chấn Thương Chỉnh Hình, Bệnh viện Đa khoa Tâm Anh TP.HCM',
    workplace: 'Bệnh viện Đa khoa Tâm Anh TP.HCM',
    hospitalCategory: 'BVĐK Tâm Anh',
    experienceYears: 25,
    highlightBadge: 'Chuyên Gia Phẫu Thuật Cổ Chân - Bàn Chân Ít Xâm Lấn & Dây Neo TightRope',
    coreSpecialties: [
      'Phẫu thuật kết hợp xương nẹp khóa ít xâm lấn (MIPO) bảo tồn tối đa màng xương',
      'Kỹ thuật siết khớp chày mác bằng hệ thống dây neo TightRope không cần mổ tháo vít',
      'Chăm sóc toàn diện người bệnh chấn thương chỉnh hình cao tuổi'
    ],
    clinicalStrengths: [
      'Áp dụng các kỹ thuật phẫu thuật hiện đại của Mỹ và Châu Âu, hạn chế đường rạch dài.',
      'Sử dụng hệ thống chụp C-arm 3D trong mổ đảm bảo độ khít khao của ổ gãy từng milimet.',
      'Dịch vụ nội trú 5 sao, điều dưỡng chăm sóc chu đáo, rất phù hợp cho người 74 tuổi.'
    ],
    relevanceForAnklePatient: 'Lựa chọn xuất sắc nếu gia đình mong muốn phẫu thuật kỹ thuật cao tại BVĐK Tâm Anh.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Đa khoa Tâm Anh TP.HCM',
        departmentOrClinic: 'Trung tâm Chấn Thương Chỉnh Hình (Tầng 2)',
        address: 'Số 2B Phổ Quang, Phường 2, Quận Tân Bình, TP.HCM',
        scheduleNote: 'Khám các ngày trong tuần theo lịch hẹn tổng đài',
        bookingPhone: '028 7102 6789'
      }
    ],
    consultationTips: 'Đặt lịch khám TS.BS Lê Gia Ánh Thao qua tổng đài BV Tâm Anh để được tư vấn gói mổ trọn gói.'
  },
  {
    id: 'dr-vo-hoa-khanh',
    name: 'Võ Hòa Khánh',
    academicTitle: 'BS. CKII',
    currentRole: 'Trưởng Phòng Quản Lý Chất Lượng & Bác sĩ Phẫu thuật Chi Dưới, BV Chấn Thương Chỉnh Hình TP.HCM',
    workplace: 'Bệnh viện Chấn Thương Chỉnh Hình TP.HCM',
    hospitalCategory: 'BV Chấn Thương Chỉnh Hình',
    experienceYears: 24,
    highlightBadge: 'Chuyên Gia Phẫu Thuật Chấn Thương Cổ Chân BV CTCH TP.HCM',
    coreSpecialties: [
      'Phẫu thuật kết hợp xương gãy mắt cá trong, mắt cá ngoài, mắt cá sau (Trimalleolar)',
      'Phục hồi và tái tạo dây chằng cổ chân sau chấn thương thể thao và té ngã',
      'Điều trị can lệch, thoái hóa khớp cổ chân sau chấn thương'
    ],
    clinicalStrengths: [
      'Bác sĩ phẫu thuật dày dặn kinh nghiệm tại trung tâm chấn thương chỉnh hình đầu ngành miền Nam.',
      'Thao tác mổ nhanh nhẹn, chuẩn xác, kiểm soát sưng nề mô mềm sau mổ rất tốt.',
      'Nhiệt tình hướng dẫn lộ trình tập phục hồi chức năng và đi lại cho bệnh nhân.'
    ],
    relevanceForAnklePatient: 'Chuyên gia uy tín hàng đầu tại Bệnh viện Chấn Thương Chỉnh Hình TP.HCM.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Chấn Thương Chỉnh Hình TP.HCM',
        departmentOrClinic: 'Khoa Cấp Cứu / Khu Khám Chuyên Khoa Chi Dưới',
        address: '929 Trần Hưng Đạo, Phường 1, Quận 5, TP.HCM',
        scheduleNote: 'Khám theo lịch tại Bệnh viện Chấn Thương Chỉnh Hình',
        bookingPhone: '028 3923 5821'
      }
    ],
    consultationTips: 'Đến khám sớm tại BV Chấn Thương Chỉnh Hình để hoàn tất các xét nghiệm trong buổi sáng.'
  },
  {
    id: 'dr-phan-van-tiep',
    name: 'Phan Văn Tiếp',
    academicTitle: 'BS. CKII',
    currentRole: 'Chuyên gia Cao cấp Chấn Thương Chỉnh Hình BV Tâm Anh • Nguyên Trưởng Khoa BV Chấn Thương Chỉnh Hình',
    workplace: 'BVĐK Tâm Anh TP.HCM / Nguyên BV Chấn Thương Chỉnh Hình',
    hospitalCategory: 'BVĐK Tâm Anh',
    experienceYears: 40,
    highlightBadge: 'Cây Đại Thụ Phẫu Thuật Chấn Thương Chỉnh Hình Việt Nam',
    coreSpecialties: [
      'Phẫu thuật các ca gãy xương phức tạp, gãy nhiều mảnh vùng khớp cổ chân',
      'Đánh giá độ vững cơ học và khả năng chịu tải của xương người cao tuổi',
      'Chỉnh sửa các di chứng can xương lệch và cứng khớp cổ chân'
    ],
    clinicalStrengths: [
      'Hơn 40 năm kinh nghiệm phẫu thuật hàng vạn ca chấn thương xương khớp.',
      'Khả năng nhận định lâm sàng và tiên lượng hồi phục cực kỳ sắc bén.',
      'Phong cách nhẹ nhàng, điềm tĩnh, tạo niềm tin lớn cho bệnh nhân cao tuổi.'
    ],
    relevanceForAnklePatient: 'Chuyên gia gạo cội uy tín để tham vấn ý kiến chuyên môn thứ hai (Second Opinion).',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Đa khoa Tâm Anh TP.HCM',
        departmentOrClinic: 'Trung tâm Chấn Thương Chỉnh Hình',
        address: 'Số 2B Phổ Quang, Phường 2, Quận Tân Bình, TP.HCM',
        scheduleNote: 'Khám theo lịch phân công chuyên gia tại BV Tâm Anh',
        bookingPhone: '028 7102 6789'
      }
    ],
    consultationTips: 'Đặt lịch trước qua tổng đài BV Tâm Anh để được bác sĩ Tiếp thăm khám trực tiếp.'
  },
  {
    id: 'dr-nguyen-quoc-dung',
    name: 'Nguyễn Quốc Dũng',
    academicTitle: 'TS. BS',
    currentRole: 'Phó Giám đốc Viện Chấn Thương Chỉnh Hình, Bệnh viện Quân Y 175',
    workplace: 'Bệnh viện Quân Y 175 (Bộ Quốc Phòng)',
    hospitalCategory: 'BV Quân Y 175',
    experienceYears: 26,
    highlightBadge: 'Chuyên Gia Phẫu Thuật Kết Hợp Xương Kỹ Thuật Cao Viện CTCH 175',
    coreSpecialties: [
      'Phẫu thuật kết hợp xương nẹp vít giải phẫu thế hệ mới cho vùng cổ chân',
      'Điều trị gãy xương người cao tuổi kết hợp phác đồ chống loãng xương quân y',
      'Hồi sức ngoại khoa và kiểm soát huyết khối tĩnh mạch sâu chu phẫu'
    ],
    clinicalStrengths: [
      'Viện Chấn Thương Chỉnh Hình 175 sở hữu trang thiết bị phòng mổ hiện đại hàng đầu quân đội.',
      'Quy trình kiểm soát nhiễm khuẩn và phòng ngừa huyết khối tĩnh mạch DVT nghiêm ngặt.',
      'Tập vật lý trị liệu phục hồi chức năng sớm ngay tại giường bệnh.'
    ],
    relevanceForAnklePatient: 'Cơ sở y tế chất lượng cao khu vực Gò Vấp - Tân Bình với cơ sở vật chất khang trang.',
    practiceLocations: [
      {
        hospitalName: 'Viện Chấn Thương Chỉnh Hình - Bệnh viện Quân Y 175',
        departmentOrClinic: 'Khoa Chấn Thương Chi Dưới (Tầng 3)',
        address: '786 Nguyễn Kiệm, Phường 3, Quận Gò Vấp, TP.HCM',
        scheduleNote: 'Khám từ Thứ 2 đến Thứ 6 tại Khu Khám Kỹ Thuật Cao',
        bookingPhone: '1900 1175'
      }
    ],
    consultationTips: 'Đặt lịch trước qua tổng đài 1900 1175 để vào khu khám dịch vụ nhanh chóng.'
  },
  {
    id: 'dr-tran-quang-dung',
    name: 'Trần Quang Dũng',
    academicTitle: 'BS. CKII',
    currentRole: 'Phó Trưởng Khoa Chấn Thương Chỉnh Hình, Bệnh viện Chợ Rẫy',
    workplace: 'Bệnh viện Chợ Rẫy TP.HCM',
    hospitalCategory: 'BV Chợ Rẫy',
    experienceYears: 27,
    highlightBadge: 'Chuyên Gia Phẫu Thuật Cấp Cứu Chấn Thương Khớp Cổ Chân BV Chợ Rẫy',
    coreSpecialties: [
      'Phẫu thuật kết hợp xương ORIF gãy 2 mắt cá, gãy 3 mắt cá có di lệch lớn',
      'Xử trí toác khớp chày mác cấp tính và đứt phức hợp dây chằng cổ chân',
      'Nắn chỉnh bảo tồn mộng chày - sên phòng ngừa viêm khớp'
    ],
    clinicalStrengths: [
      'Kinh nghiệm xử lý khối lượng lớn ca chấn thương phức tạp tại trung tâm cấp cứu tuyến cuối Chợ Rẫy.',
      'Bàn tay phẫu thuật nhanh gọn, kiểm soát chảy máu và giảm thiểu thời gian gây tê.',
      'Đánh giá tổn thương mô mềm và thời điểm mổ da an toàn rất chuẩn xác.'
    ],
    relevanceForAnklePatient: 'Chuyên gia phẫu thuật chấn thương thực chiến giàu kinh nghiệm tại BV Chợ Rẫy.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Chợ Rẫy',
        departmentOrClinic: 'Khu Khám Chuyên Gia Ngoại Chấn Thương',
        address: '201B Nguyễn Chí Thanh, Phường 12, Quận 5, TP.HCM',
        scheduleNote: 'Khám theo lịch đăng ký tại Khu Khám Chuyên Gia Chợ Rẫy',
        bookingPhone: '028 3855 4137'
      }
    ],
    consultationTips: 'Đăng ký khám tại Khu Khám Chuyên Gia BV Chợ Rẫy để giảm thời gian chờ đợi.'
  },
  {
    id: 'dr-nguyen-van-thai',
    name: 'Nguyễn Văn Thái',
    academicTitle: 'BS. CKII',
    currentRole: 'Trưởng Khoa Chi Dưới, Bệnh viện Chấn Thương Chỉnh Hình TP.HCM',
    workplace: 'Bệnh viện Chấn Thương Chỉnh Hình TP.HCM',
    hospitalCategory: 'BV Chấn Thương Chỉnh Hình',
    experienceYears: 29,
    highlightBadge: 'Bác Sĩ Trưởng Khoa Chi Dưới - Chuyên Sâu Khớp Cổ Chân BV CTCH',
    coreSpecialties: [
      'Phẫu thuật vi phẫu nẹp khóa nắn chỉnh mộng chày sên',
      'Khâu phục hồi dây chằng ATFL và tái tạo gân mác',
      'Vật lý trị liệu chuyên sâu cho bệnh nhân gãy mắt cá chân'
    ],
    clinicalStrengths: [
      'Chuyên môn sâu về cơ sinh học chi dưới và khớp cổ chân.',
      'Áp dụng các loại nẹp Titanium uốn sẵn theo giải phẫu xương mác người Việt Nam.',
      'Tư vấn kỹ lưỡng các bài tập tỳ đè phân đoạn cho bệnh nhân khi xuất viện.'
    ],
    relevanceForAnklePatient: 'Trưởng khoa chuyên môn trực tiếp điều trị bệnh lý chi dưới tại BV Chấn Thương Chỉnh Hình.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Chấn Thương Chỉnh Hình TP.HCM',
        departmentOrClinic: 'Khoa Chi Dưới (Tầng 2)',
        address: '929 Trần Hưng Đạo, Phường 1, Quận 5, TP.HCM',
        scheduleNote: 'Khám theo lịch tại Khoa Khám Bệnh Chuyên Khoa Chi Dưới',
        bookingPhone: '028 3923 5821'
      }
    ],
    consultationTips: 'Đến đăng ký khám chuyên khoa Chi Dưới yêu cầu bác sĩ Thái thăm khám.'
  },
  {
    id: 'dr-bui-van-duc',
    name: 'Bùi Văn Đức',
    academicTitle: 'PGS. TS. BS',
    currentRole: 'Nguyên Trưởng Phân khoa Chấn Thương Chỉnh Hình BV ĐHYD TP.HCM • Cố vấn Chuyên môn',
    workplace: 'Bệnh viện Đại Học Y Dược TP.HCM',
    hospitalCategory: 'BV Đại Học Y Dược',
    experienceYears: 38,
    highlightBadge: 'Chuyên Gia Cố Vấn Cao Cấp Chấn Thương Chỉnh Hình ĐHYD',
    coreSpecialties: [
      'Hội chẩn các ca chấn thương xương khớp khó trên người cao tuổi',
      'Điều trị loãng xương nặng kèm gãy xương chi dưới',
      'Phục hồi chức năng khớp cổ chân sau mổ nẹp vít'
    ],
    clinicalStrengths: [
      'Uy tín học thuật và kinh nghiệm lâm sàng hàng đầu tại ĐHYD TP.HCM.',
      'Đánh giá toàn diện sức khỏe người bệnh lớn tuổi trước khi phẫu thuật.',
      'Lời khuyên điều trị điềm tĩnh, chuẩn xác và nhân văn.'
    ],
    relevanceForAnklePatient: 'Chuyên gia cố vấn cấp cao cho các ca bệnh chấn thương người cao tuổi tại BV ĐHYD.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Đại Học Y Dược TP.HCM',
        departmentOrClinic: 'Phòng khám Chuyên Gia Chấn Thương Chỉnh Hình (Khu A)',
        address: '215 Hồng Bàng, Phường 11, Quận 5, TP.HCM',
        scheduleNote: 'Khám các buổi sáng theo lịch hẹn chuyên gia',
        bookingPhone: '1900 7178'
      }
    ],
    consultationTips: 'Liên hệ tổng đài 1900 7178 để đặt lịch khám chuyên gia PGS.TS Bùi Văn Đức.'
  },
  {
    id: 'dr-cao-thanh-ngoc-ortho',
    name: 'Cao Thanh Ngọc',
    academicTitle: 'PGS. TS. BS',
    currentRole: 'Trưởng Khoa Lão - Cơ Xương Khớp BV Đại Học Y Dược TP.HCM • Phó Chủ tịch Hội Loãng Xương TP.HCM',
    workplace: 'Khoa Lão - Cơ Xương Khớp, Bệnh viện Đại Học Y Dược TP.HCM',
    hospitalCategory: 'BV Đại Học Y Dược',
    experienceYears: 28,
    highlightBadge: 'Chuyên Gia Quản Lý Loãng Xương & Kích Thích Liền Xương Chu Phẫu',
    coreSpecialties: [
      'Điều trị chống loãng xương nặng (T-score -2.7) sau gãy xương chi dưới',
      'Kích thích tế bào tạo xương (Osteoblast) đẩy nhanh tốc độ liền can xương',
      'Phối hợp đa chuyên khoa bảo vệ sức khỏe người cao tuổi sau chấn thương'
    ],
    clinicalStrengths: [
      'Chuyên gia hàng đầu Việt Nam về điều trị loãng xương và lão khoa.',
      'Chỉ định phác đồ chống hủy xương (Aclasta / Denosumab) và bổ sung Canxi + D3 tối ưu cho bệnh nhân 74 tuổi.',
      'Đồng hành theo dõi sức khỏe xương khớp lâu dài sau khi phẫu thuật kết hợp xương.'
    ],
    relevanceForAnklePatient: 'Bác sĩ chủ trì điều trị nội khoa loãng xương giúp xương mắt cá liền nhanh và chắc chắn quanh nẹp vít.',
    practiceLocations: [
      {
        hospitalName: 'Bệnh viện Đại Học Y Dược TP.HCM',
        departmentOrClinic: 'Phòng khám Cơ Xương Khớp / Lão Khoa (Khu A)',
        address: '215 Hồng Bàng, Phường 11, Quận 5, TP.HCM',
        scheduleNote: 'Khám theo lịch tại Khu Khám Chuyên Gia Cơ Xương Khớp',
        bookingPhone: '1900 7178'
      }
    ],
    consultationTips: 'Tái khám định kỳ theo hẹn của PGS.TS Cao Thanh Ngọc để duy trì mật độ khoáng chất xương sau chấn thương.'
  }
];
