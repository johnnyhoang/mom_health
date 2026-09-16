export interface SpineCaseRecord {
  id: string;
  title: string;
  facility: string;
  date: string;
  imageSrc: string;
  summaryStatus: 'critical' | 'warning' | 'info';
  statusBadge: string;
  headline: string;
  keyFindings: {
    term: string;
    medicalMeaning: string;
    laymanMeaning: string;
    clinicalSignificance: string;
    actionRequired: string;
  }[];
  clinicalVerdict: string;
  patientReassurance: string;
}

export const cervicalSpineCaseRecords: SpineCaseRecord[] = [
  {
    id: 'mri-cotsongco-cih-2026',
    title: 'Phiếu Kết Quả MRI Cột Sống Cổ (Đa Tầng)',
    facility: 'Bệnh viện Quốc tế City (BS.CKI Ông Kiến Huy & ThS.BS Trần Thị Mai Thy)',
    date: '06/05/2026',
    imageSrc: '/records/mri_cotsongco_cih_2026.jpg',
    summaryStatus: 'critical',
    statusBadge: 'CHÈN ÉP TỦY CỔ C3/4 (5mm) & C5/6 (3mm) - CẦN GIẢI ÉP',
    headline: 'Kết luận: THOÁT VỊ ĐĨA ĐỆM C3/4 & C5/6 GÂY CHÈN ÉP MẶT TRƯỚC TỦY CỔ + HẸP LỖ LIÊN HỢP ĐA TẦNG',
    keyFindings: [
      {
        term: 'Tầng C3/4: Thoát vị đĩa đệm trung tâm # 5,0 mm cổ rộng gây chèn ép mặt trước-(P) tủy cổ',
        medicalMeaning: 'Nhân đệm tầng C3/C4 thoát vị lồi ra sau 5mm qua vòng sợi bị rách, chiếm diện tích lớn trong lòng ống sống cổ, trực tiếp đè ép vào bề mặt trước và bên phải của tủy sống cổ (Cervical Spinal Cord Compression).',
        laymanMeaning: 'Khối đĩa đệm bị lệch ra sau tới nửa centimet, đè trực tiếp vào "dây cáp điện chính" (tủy sống) truyền tín hiệu từ não xuống 2 tay và 2 chân.',
        clinicalSignificance: 'Đây là tổn thương quan trọng nhất và cấp bách nhất trên toàn bộ cột sống. Tủy cổ bị chèn ép kéo dài có thể gây thiếu máu tủy, tê yếu tay chân, đi đứng mất thăng bằng.',
        actionRequired: 'Chỉ định phẫu thuật giải ép lối trước (ACDF) để giải phóng tủy cổ kịp thời, ngăn chặn tổn thương thần kinh vĩnh viễn.'
      },
      {
        term: 'Tầng C5/6: Thoát vị đĩa đệm sau-bên (T) # 3 mm gây chèn ép mặt trước-(T) tủy cổ',
        medicalMeaning: 'Khối thoát vị đĩa đệm 3mm lệch sang bên trái, đè ép mặt trước bên trái tủy cổ và rễ thần kinh C6 bên trái.',
        laymanMeaning: 'Một khối thoát vị thứ hai ở đốt sống cổ thấp hơn, chèn ép thêm vào tủy và rễ thần kinh chạy xuống vai - cánh tay trái.',
        clinicalSignificance: 'Gây nên các cơn đau mỏi lan từ cổ gáy xuống bả vai, cánh tay và ngón cái/ngón trỏ bàn tay trái.',
        actionRequired: 'Phẫu thuật ACDF 2 tầng (kết hợp xử lý cả C3/4 và C5/6 trong cùng một cuộc mổ nhẹ nhàng).'
      },
      {
        term: 'Gai hóa bờ bên-sau mâm sống làm hẹp ống liên hợp hai bên đa tầng (C3/4, C4/5, C5/6, C6/7)',
        medicalMeaning: 'Hiện tượng thoái hóa đốt sống cổ do tuổi 74: các chồi xương (Osteophytes) mọc ra ở rìa thân đốt sống, chui vào lỗ liên hợp làm hẹp đường thoát của các rễ thần kinh cánh tay.',
        laymanMeaning: 'Gai xương thoái hóa tuổi già mọc quanh các khe đốt sống, làm hẹp các lỗ thoát dây thần kinh ra hai cánh tay.',
        clinicalSignificance: 'Góp phần gây tê bì bàn tay và yếu cơ tay ở người cao tuổi.',
        actionRequired: 'Bác sĩ vi phẫu sẽ mài gọt các gai xương này trong quá trình phẫu thuật để giải phóng hoàn toàn lỗ liên hợp.'
      },
      {
        term: 'Axial FLAIR não: Các nốt tín hiệu cao rải rác chất trắng dưới vỏ hai bên',
        medicalMeaning: 'Thoái hóa chất trắng vi mạch não (Microvascular White Matter Disease / Leukoaraiosis) – biến đổi thiếu máu cục bộ vi mạch mạn tính rất phổ biến ở người cao tuổi (74 tuổi).',
        laymanMeaning: 'Vết thoái hóa mạch máu nhỏ lành tính theo tuổi tác sinh lý của não bộ, không phải đột quỵ cấp tính.',
        clinicalSignificance: 'Không cản trở cuộc phẫu thuật cột sống cổ, cần duy trì kiểm soát huyết áp ổn định.',
        actionRequired: 'Theo dõi nội khoa tim mạch định kỳ.'
      }
    ],
    clinicalVerdict: 'Kết quả MRI Cột sống cổ cho thấy bệnh nhân bị Bệnh lý tủy cổ do thoái hóa (Cervical Spondylotic Myelopathy - CSM) với 2 điểm chèn ép tủy chính tại C3/4 (5mm) và C5/6 (3mm). Đây là chỉ định phẫu thuật giải ép tối ưu nhất để bảo tồn chức năng vận động tứ chi.',
    patientReassurance: 'Phẫu thuật cột sống cổ ngày nay bằng phương pháp ACDF vi phẫu lối trước là kỹ thuật xâm lấn tối thiểu vô cùng tinh tế, đường mổ nhỏ theo nếp nhăn cổ, ít mất máu và hồi phục rất nhanh ngay cả ở bệnh nhân 74 tuổi!'
  },
  {
    id: 'gioithieu-dhyd-2026',
    title: 'Giấy Giới Thiệu Chuyên Khoa Ngoại Thần Kinh ĐHYD',
    facility: 'Phòng Khám PGS.TS.BS Cao Thanh Ngọc (ThS.BS Huỳnh Khôi Nguyên)',
    date: '25/06/2026',
    imageSrc: '/records/gioithieu_dhyd_2026.png',
    summaryStatus: 'warning',
    statusBadge: 'CHUYỂN KHOA NGOẠI THẦN KINH LẦU 8A - BV ĐHYD TP.HCM',
    headline: 'Chẩn đoán: (G54.2) THOÁT VỊ ĐĨA ĐỆM C3/C4, C5/C6 CHÈN ÉP TỦY CỔ + THOÁT VỊ L4/L5 + LOÃNG XƯƠNG + CƯỜNG GIÁP',
    keyFindings: [
      {
        term: 'Kính chuyển chuyên khoa Ngoại thần kinh Lầu 8A, Bệnh viện Đại học Y Dược TP.HCM',
        medicalMeaning: 'Khoa Ngoại Thần Kinh (Lầu 8A - BV ĐHYD 215 Hồng Bàng, Q.5) là trung tâm phẫu thuật thần kinh - cột sống kỹ thuật cao hàng đầu khu vực phía Nam.',
        laymanMeaning: 'Bác sĩ nội cơ xương khớp chuyển bà đến đúng tuyến chuyên khoa phẫu thuật thần kinh cột sống uy tín nhất để hội chẩn mổ giải ép tủy.',
        clinicalSignificance: 'Bệnh viện ĐHYD có đầy đủ các chuyên khoa phối hợp: Ngoại thần kinh, Nội tiết (Cường giáp), Lão khoa - Loãng xương và Gây mê hồi sức.',
        actionRequired: 'Mang toàn bộ các phim chụp MRI và xét nghiệm đến Khoa Ngoại thần kinh Lầu 8A để đăng ký khám chuyên gia.'
      },
      {
        term: '(M81.0) Loãng xương (T-score: -2.7 / -2.4)',
        medicalMeaning: 'Mật độ khoáng xương giảm dưới ngưỡng -2.5 SD, xương bị xốp và giảm sức chịu lực cơ học.',
        laymanMeaning: 'Xương của bà bị xốp và giòn do tuổi 74, cần lưu ý khi bắt vít cố định cột sống và cần uống/truyền thuốc tạo xương.',
        clinicalSignificance: 'Khi phẫu thuật ACDF, bác sĩ sẽ chọn lồng ghép và nẹp vít chuyên dụng cho xương loãng, đồng thời phối hợp phác đồ chống loãng xương sau mổ.',
        actionRequired: 'Điều trị loãng xương song hành (bổ sung Canxi, Vitamin D3 + K2 và thuốc chống hủy xương Bisphosphonate/Denosumab).'
      },
      {
        term: '(E05) Cường giáp đang điều trị',
        medicalMeaning: 'Tình trạng tăng tiết hormone tuyến giáp đang được kiểm soát bằng thuốc kháng giáp tổng hợp.',
        laymanMeaning: 'Tuyến giáp hoạt động hơi quá mức, đang uống thuốc để đưa hormone về mức bình thường.',
        clinicalSignificance: 'Cần kiểm tra xét nghiệm FT3, FT4, TSH trước khi mổ để đảm bảo tuyến giáp ở trạng thái "bình giáp", giúp gây mê an toàn tuyệt đối cho tim mạch.',
        actionRequired: 'Tiếp tục uống thuốc cường giáp đúng giờ theo đơn bác sĩ nội tiết.'
      },
      {
        term: '(G56.0) Hội chứng ống cổ tay hai bên nhẹ (Carpal Tunnel Syndrome)',
        medicalMeaning: 'Dây thần kinh giữa bị chèn ép nhẹ khi đi qua đường hầm cổ tay ở cả 2 bên.',
        laymanMeaning: 'Dây thần kinh ở cổ tay bị chèn nhẹ gây tê các đầu ngón tay cái, trỏ, giữa.',
        clinicalSignificance: 'Hiện tượng "Chèn ép kép" (Double crush): tê tay do cộng hưởng từ cả tủy cổ C3-C6 và cổ tay. Giải phóng tủy cổ sẽ giúp tay đỡ tê rất nhiều.',
        actionRequired: 'Ưu tiên mổ cổ trước; sau mổ nếu cổ tay còn tê nhiều mới xử lý nhẹ cổ tay sau.'
      }
    ],
    clinicalVerdict: 'Giấy giới thiệu từ Phòng khám PGS.TS Cao Thanh Ngọc là bước chuyển tuyến chuẩn xác, định hướng bệnh nhân đến trung tâm Ngoại Thần Kinh uy tín nhất để giải quyết dứt điểm chèn ép tủy cổ.',
    patientReassurance: 'Bệnh viện Đại học Y Dược TP.HCM có đội ngũ giáo sư, tiến sĩ đầu ngành về phẫu thuật cột sống và hệ thống hồi sức gây mê hiện đại bậc nhất, đảm bảo độ an toàn cao nhất cho người cao tuổi!'
  },
  {
    id: 'mri-thatlung-saigonmedic-2026',
    title: 'Phiếu Kết Quả MRI Cột Sống Thắt Lưng',
    facility: 'Trung Tâm Y Khoa Sài Gòn (Saigon Medic) / BS.CKI Hồ Trung Hiếu',
    date: '21/06/2026',
    imageSrc: '/records/mri_thatlung_saigonmedic_2026.jpg',
    summaryStatus: 'warning',
    statusBadge: 'THOÁT VỊ L4/5 (4mm) LỆCH TRÁI ÉP RỄ L5',
    headline: 'Kết luận: THOÁT VỊ ĐĨA ĐỆM TẦNG L4/5 RA SAU TRUNG TÂM LỆCH TRÁI # 4MM, HẸP NGÁCH BÊN TRÁI, ÉP RỄ L5',
    keyFindings: [
      {
        term: 'Thoát vị đĩa đệm tầng L4/5 ra sau, dạng trung tâm lệch T, kích thước 4mm, ép rễ thần kinh L5 bên T',
        medicalMeaning: 'Đĩa đệm giữa đốt sống thắt lưng L4 và L5 bị rách bao xơ, nhân nhầy lồi ra sau 4mm lệch về bên trái, đè ép vào rễ thần kinh L5 bên trái.',
        laymanMeaning: 'Khối thoát vị ở lưng dưới đè vào dây thần kinh tọa chạy xuống mông và chân trái, gây đau mỏi lưng và tê chân trái.',
        clinicalSignificance: 'Đây là tổn thương thần kinh NGOẠI BIÊN (chèn ép rễ). Không nguy hiểm tính mạng hay gây liệt tứ chi như chèn ép tủy cổ.',
        actionRequired: 'Ưu tiên điều trị nội khoa, vật lý trị liệu thắt lưng, tránh khom lưng mang vác nặng trong khi tập trung xử lý cột sống cổ.'
      },
      {
        term: 'Lồi nhẹ lan tỏa đĩa đệm tầng L3/4 (1.5mm), ép nhẹ bao màng cứng, không chèn ép rễ',
        medicalMeaning: 'Đĩa đệm L3/4 thoái hóa phồng nhẹ 1.5mm, chưa chèn ép rễ thần kinh.',
        laymanMeaning: 'Đĩa đệm tầng trên phồng nhẹ do tuổi tác, chưa gây hại.',
        clinicalSignificance: 'Tổn thương mức độ nhẹ theo tuổi già sinh lý.',
        actionRequired: 'Theo dõi định kỳ và tập các bài tập cơ lưng nhẹ nhàng.'
      },
      {
        term: 'Thoái hóa mất nước đĩa đệm thắt lưng, gai thoái hóa thân sống',
        medicalMeaning: 'Quá trình lão hóa tự nhiên của cột sống thắt lưng ở tuổi 74.',
        laymanMeaning: 'Các đĩa đệm bị xẹp bớt nước và có gai xương thoái hóa tuổi già.',
        clinicalSignificance: 'Cần kết hợp bổ sung dưỡng chất xương khớp và điều trị loãng xương.',
        actionRequired: 'Tập vật lý trị liệu phục hồi chức năng sau khi mổ cổ ổn định.'
      }
    ],
    clinicalVerdict: 'Cột sống thắt lưng có thoát vị L4/L5 4mm gây chèn ép rễ L5 trái, nhưng đây là tổn thương thứ phát có thể kiểm soát bảo tồn. Chiến lược đúng đắn nhất là tập trung mổ giải áp Cột Sống Cổ (C3/4 & C5/6) trước vì tủy cổ bị chèn ép nguy hiểm hơn gấp nhiều lần.',
    patientReassurance: 'Bà và gia đình không cần quá lo lắng về việc phải mổ cả lưng lẫn cổ cùng lúc. Bác sĩ sẽ giải quyết điểm nghẽn nguy hiểm nhất ở cổ trước, lưng sẽ được chăm sóc phục hồi nhẹ nhàng!'
  }
];
