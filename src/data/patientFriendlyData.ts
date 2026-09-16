export interface FriendlyDisease {
  id: string;
  title: string;
  medicalName: string;
  badge: string;
  simpleAnalogy: string; // Real-world analogy (e.g., "Hạt mầm mọc nhầm chỗ")
  whatIsIt: string; // Plain Vietnamese explanation
  whyItHappens: string; // Clear cause without overly cryptic jargon
  warningSigns: {
    symptom: string;
    explanation: string;
  }[];
  dangerLevel: 'mild' | 'moderate' | 'high' | 'critical';
  dangerText: string;
  howDoctorChecks: string[]; // Plain steps
  bestTreatments: {
    name: string;
    description: string;
    whoNeedsIt: string;
  }[];
  fertilityImpact: string; // Direct guidance for getting pregnant & IVF
  doctorAdvice: string; // Practical tip for the patient
  videoEmbedId?: string;
}

export const friendlyDiseases: FriendlyDisease[] = [
  {
    id: 'endometriosis',
    title: 'Lạc Nội Mạc Tử Cung & U Tuyến Trong Cơ',
    medicalName: 'Endometriosis & Adenomyosis',
    badge: 'Phổ biến nhất ở tuổi sinh đẻ',
    simpleAnalogy: 'Hạt mầm niêm mạc đi lạc và mọc nhầm chỗ trong ổ bụng hoặc cắm sâu vào thành cơ tử cung.',
    whatIsIt: 'Bình thường, lớp niêm mạc chỉ nằm lót bên trong lòng tử cung và bong ra thành máu kinh mỗi tháng. Nhưng ở người mắc bệnh này, những tế bào niêm mạc lại "đi lạc" ra buồng trứng, vòi trứng, phúc mạc ổ bụng, hoặc chui sâu vào lớp cơ tử cung. Cứ mỗi lần đến kỳ kinh, các khối mô lạc này cũng sưng lên và chảy máu y như trong tử cung, nhưng máu không có đường thoát ra ngoài, gây viêm mạn tính, dính ruột và đau bụng dữ dội.',
    whyItHappens: 'Nguyên nhân lớn nhất là do "máu kinh trào ngược" qua vòi trứng vào ổ bụng trong lúc hành kinh; kết hợp với cơ địa miễn dịch không tự dọn dẹp được các tế bào đi lạc này và tình trạng cơ thể tự sản xuất quá nhiều nội tiết Estrogen cục bộ.',
    warningSigns: [
      { symptom: 'Đau bụng kinh dữ dội tăng dần theo năm tháng', explanation: 'Đau quặn thắt, uống thuốc giảm đau thông thường không đỡ, đau đến mức ngất xỉu hoặc không thể đi làm.' },
      { symptom: 'Đau nhói sâu khi quan hệ vợ chồng', explanation: 'Do các khối lạc nội mạc nằm ở vách sau tử cung và dây chằng bị va chạm, kéo căng khi quan hệ.' },
      { symptom: 'Đau vùng bụng dưới âm ỉ kéo dài', explanation: 'Đau cả những ngày không hành kinh, kèm đau buốt khi đi tiểu hoặc mót rặn khi đi cầu lúc có kinh.' },
      { symptom: 'Chậm có con / Khó thụ thai', explanation: 'Khối lạc nội mạc làm giảm chất lượng trứng, gây dính tắc vòi trứng và biến đổi môi trường buồng tử cung.' }
    ],
    dangerLevel: 'high',
    dangerText: 'Nguy cơ gây vô sinh, dính tạng vùng chậu và suy giảm dự trữ buồng trứng nếu mổ bóc u nang buồng trứng nhiều lần không đúng cách.',
    howDoctorChecks: [
      'Khám phụ khoa nhẹ nhàng: Bác sĩ dùng tay kiểm tra xem tử cung có bị dính cứng hoặc có nốt đau ở phía sau không.',
      'Siêu âm đầu dò âm đạo chuyên sâu: Tìm các nang "u nang sô-cô-la" tại buồng trứng hoặc dấu hiệu cơ tử cung dày bất thường.',
      'Chụp cộng hưởng từ (MRI) vùng chậu: Khi nghi ngờ khối lạc nội mạc ăn sâu vào trực tràng, bàng quang hoặc niệu quản.'
    ],
    bestTreatments: [
      {
        name: 'Thuốc ức chế nội tiết (Uống Dienogest 2mg mỗi ngày)',
        description: 'Thuốc chuyên biệt làm teo nhỏ các ổ lạc nội mạc, giảm đau bụng kinh đến 80-90% mà không cần phẫu thuật.',
        whoNeedsIt: 'Phụ nữ chưa muốn mang thai ngay, muốn kiểm soát cơn đau và bảo tồn buồng trứng.'
      },
      {
        name: 'Đặt vòng nội tiết Mirena (LNG-IUS)',
        description: 'Vòng nhỏ đặt êm ái trong lòng tử cung, tiết thuốc tại chỗ giúp giảm lượng máu kinh và giảm đau hiệu quả trong 5 năm.',
        whoNeedsIt: 'Rất tốt cho phụ nữ bị u tuyến trong cơ tử cung (Adenomyosis) gây rong kinh nhiều.'
      },
      {
        name: 'Phẫu thuật nội soi bóc u nang & gỡ dính',
        description: 'Bác sĩ dùng camera siêu nhỏ vào ổ bụng để bóc tách nang và giải phóng các tạng bị dính.',
        whoNeedsIt: 'Khi u nang buồng trứng lớn (≥ 4-5cm), đau không đỡ bằng thuốc hoặc chuẩn bị làm IVF.'
      }
    ],
    fertilityImpact: 'Nếu bị lạc nội mạc tử cung mức độ trung bình đến nặng và muốn có thai, phương pháp hiệu quả nhất là Thụ tinh trong ống nghiệm (IVF). Trước khi chuyển phôi, bác sĩ có thể cho tiêm thuốc ức chế tạm thời 2-3 tháng để niêm mạc phục hồi môi trường đón phôi tốt nhất.',
    doctorAdvice: 'Đau bụng kinh dữ dội KHÔNG PHẢI là điều bình thường. Hãy đi khám siêu âm chuyên sâu sớm, đừng tự chịu đựng cơn đau hoặc lạm dụng thuốc giảm đau quá mức.',
    videoEmbedId: 'oM4T95c_Pcw'
  },
  {
    id: 'hyperplasia',
    title: 'Dày Niêm Mạc / Quá Sản Niêm Mạc Tử Cung',
    medicalName: 'Endometrial Hyperplasia',
    badge: 'Cần cảnh giác nguy cơ tiền ung thư',
    simpleAnalogy: 'Lớp đất niêm mạc bị "bón quá nhiều phân Estrogen" khiến cỏ cây mọc um tùm, chen chúc mất kiểm soát.',
    whatIsIt: 'Bình thường mỗi tháng, niêm mạc chỉ dày lên một mức vừa phải rồi bong ra khi hành kinh. Ở người bị quá sản, các tuyến niêm mạc phân chia quá nhanh làm lớp lót tử cung dày cộm bất thường. Bệnh chia làm 2 mức độ: (1) Quá sản lành tính (rất ít nguy cơ ung thư) và (2) Quá sản không điển hình (là tổn thương tiền ung thư thực sự, có thể chứa sẵn tế bào ác tính tiềm ẩn).',
    whyItHappens: 'Xảy ra khi cơ thể có quá nhiều hormone Estrogen mà lại thiếu hụt Progesterone để cân bằng. Tình trạng này rất hay gặp ở người béo phì (mỡ thừa tự chuyển hóa thành Estrogen), người mắc buồng trứng đa nang (PCOS - lâu lâu mới rụng trứng một lần), hoặc người bước vào giai đoạn tiền mãn kinh.',
    warningSigns: [
      { symptom: 'Ra máu âm đạo sau khi đã mãn kinh (Dấu hiệu báo động đỏ)', explanation: 'Đã hết kinh hơn 1 năm mà tự nhiên thấy ra máu, dù chỉ là vài giọt dịch hồng dính đáy quần lót.' },
      { symptom: 'Rong kinh, rong huyết kéo dài', explanation: 'Kinh nguyệt kéo dài trên 8 ngày, ra máu giữa chu kỳ hoặc lượng máu kinh ra quá nhiều kèm máu cục lớn.' },
      { symptom: 'Kinh nguyệt rất thưa (2-4 tháng mới có 1 lần)', explanation: 'Chu kỳ không rụng trứng khiến niêm mạc cứ tích tụ dày dần lên mà không chịu bong ra.' }
    ],
    dangerLevel: 'critical',
    dangerText: 'Nếu là dạng "Quá sản không điển hình (EIN)", có tới 25-43% khả năng đang có sẵn tế bào ung thư tiềm ẩn bên trong tử cung.',
    howDoctorChecks: [
      'Siêu âm ngả âm đạo: Đo độ dày niêm mạc. Nếu phụ nữ sau mãn kinh có niêm mạc dày > 4mm thì bắt buộc phải làm bước tiếp theo.',
      'Sinh thiết bằng ống hút Pipelle: Dùng ống nhựa dẻo siêu nhỏ hút nhẹ một chút niêm mạc gửi đi nhuộm kính hiển vi (chỉ mất 1 phút tại phòng khám, không đau đớn, không cần gây mê).',
      'Nội soi buồng tử cung: Đưa ống soi có camera vào nhìn tận mắt chỗ nào dày bất thường để bấm mẫu sinh thiết chính xác nhất.'
    ],
    bestTreatments: [
      {
        name: 'Đặt vòng nội tiết Mirena (Lựa chọn số 1 thế giới)',
        description: 'Vòng giải phóng thuốc Progestin trực tiếp vào niêm mạc tử cung, giúp làm teo mỏng niêm mạc và chữa khỏi bệnh lên tới 90-95% mà không gây mệt mỏi toàn thân.',
        whoNeedsIt: 'Người bị quá sản lành tính, hoặc người trẻ bị quá sản không điển hình nhưng muốn giữ tử cung để sinh con.'
      },
      {
        name: 'Phẫu thuật cắt tử cung an toàn qua nội soi',
        description: 'Mổ nội soi nhẹ nhàng cắt bỏ tử cung và 2 buồng trứng để loại bỏ triệt để nguy cơ ung thư.',
        whoNeedsIt: 'Khuyến cáo chuẩn cho phụ nữ đã mãn kinh hoặc đã sinh đủ con mắc dạng "Quá sản không điển hình".'
      }
    ],
    fertilityImpact: 'Phụ nữ trẻ chưa sinh con vẫn có thể chữa khỏi bằng vòng Mirena hoặc thuốc uống liều cao. Bác sĩ sẽ bấm sinh thiết kiểm tra lại mỗi 3-6 tháng; khi tế bào niêm mạc trở về bình thường sẽ tiến hành làm IVF để mang thai ngay.',
    doctorAdvice: 'Bất kỳ hiện tượng ra máu nào sau khi đã mãn kinh ĐỀU BẮT BUỘC PHẢI ĐI KHÁM NGAY LẬP TỨC để sinh thiết loại trừ ung thư.',
    videoEmbedId: 'z2YkEa6q15c'
  },
  {
    id: 'polyps',
    title: 'Polyp Lòng Tử Cung (Polyp Niêm Mạc)',
    medicalName: 'Endometrial Polyps',
    badge: 'Rất dễ cắt bỏ nhẹ nhàng',
    simpleAnalogy: 'Những khối "thịt thừa mềm có cuống" mọc nhô vào bên trong lòng tử cung, cản trở đường đi của tinh trùng và phôi thai.',
    whatIsIt: 'Polyp lòng tử cung là những khối thịt nhỏ hình tròn hoặc bầu dục mọc nhô lên từ lớp niêm mạc. Bên trong polyp có một nhánh mạch máu riêng nuôi dưỡng. Đa số polyp là lành tính (trên 95%), nhưng ở người sau mãn kinh hoặc người dùng thuốc Tamoxifen điều trị ung thư vú, polyp có tỷ lệ biến đổi thành ác tính cao hơn.',
    whyItHappens: 'Do các tế bào mô đệm tại một điểm nhỏ trên niêm mạc nhạy cảm quá mức với hormone Estrogen, dẫn đến việc chúng không chịu bong ra khi hành kinh mà cứ lớn dần lên thành khối thịt thừa.',
    warningSigns: [
      { symptom: 'Ra máu thấm giọt giữa kỳ kinh', explanation: 'Sạch kinh được vài ngày lại thấy ra một chút máu hồng hoặc nâu nhạt trước khi bước vào kỳ kinh tiếp theo.' },
      { symptom: 'Kinh nguyệt ra nhiều hoặc kéo dài hơn bình thường', explanation: 'Khối polyp cản trở sự co bóp tự nhiên của tử cung để cầm máu.' },
      { symptom: 'Không có triệu chứng gì', explanation: 'Gần 30% polyp được phát hiện hoàn toàn tình cờ khi đi khám phụ khoa hoặc siêu âm định kỳ.' },
      { symptom: 'Khó thụ thai, chuyển phôi IVF nhiều lần không đậu', explanation: 'Khối polyp đóng vai trò như một "dị vật" cản trở phôi thai bám vào thành tử cung.' }
    ],
    dangerLevel: 'moderate',
    dangerText: 'Có thể gây chảy máu rỉ rả kéo dài dẫn đến thiếu máu; polyp chiếm chỗ trong lòng tử cung làm giảm 50% tỷ lệ có thai.',
    howDoctorChecks: [
      'Siêu âm đầu dò Doppler màu: Nhìn thấy hình ảnh một nhánh mạch máu duy nhất chạy thẳng vào tâm khối polyp.',
      'Siêu âm bơm nước muối vào buồng tử cung (SIS): Bác sĩ bơm một chút nước muối sinh lý làm căng nhẹ lòng tử cung, giúp khối polyp hiện rõ mồn một trên màn hình siêu âm.',
      'Nội soi buồng tử cung (Tiêu chuẩn vàng): Camera đưa vào nhìn thấy trực tiếp màu sắc, kích thước và vị trí chân bám của polyp.'
    ],
    bestTreatments: [
      {
        name: 'Nội soi buồng tử cung cắt polyp (Hysteroscopic Polypectomy)',
        description: 'Thao tác nhẹ nhàng qua đường âm đạo tự nhiên (không rạch mổ trên bụng). Bác sĩ dùng quai cắt chuyên dụng cắt sát gốc khối polyp và gắp ra ngoài làm xét nghiệm tế bào. Toàn bộ thủ thuật chỉ mất 10-15 phút.',
        whoNeedsIt: 'Mọi polyp gây ra máu, polyp ở người sau mãn kinh, polyp kích thước ≥ 1.5cm hoặc người đang chuẩn bị mang thai/làm IVF.'
      },
      {
        name: 'Theo dõi định kỳ nếu polyp rất nhỏ (< 1cm)',
        description: 'Polyp nhỏ ở phụ nữ trẻ không có triệu chứng có khoảng 25% cơ hội tự rụng biến mất theo kỳ kinh.',
        whoNeedsIt: 'Người trẻ, polyp < 10mm, không ra máu bất thường.'
      }
    ],
    fertilityImpact: 'Các nghiên cứu y khoa quốc tế chứng minh: Cắt bỏ polyp qua nội soi trước khi bơm tinh trùng (IUI) hoặc chuyển phôi (IVF) giúp TĂNG GẤP ĐÔI tỷ lệ có thai thành công (từ 28% lên 63%).',
    doctorAdvice: 'Tuyệt đối KHÔNG nên nạo hút buồng tử cung "mù" để chữa polyp vì rất dễ sót chân polyp và làm trầy xước gây dính tử cung. Hãy chọn cơ sở có máy nội soi buồng tử cung để cắt trọn vẹn.',
    videoEmbedId: 'rCg6j_o3V60'
  },
  {
    id: 'endometrial_cancer',
    title: 'Ung Thư Nội Mạc Tử Cung (Ung Thư Thân Tử Cung)',
    medicalName: 'Endometrial Carcinoma',
    badge: 'Chữa khỏi rất cao nếu phát hiện sớm',
    simpleAnalogy: 'Khối tế bào ác tính phát triển từ lớp niêm mạc tử cung, nếu phát hiện sớm ở giai đoạn 1 thì tỷ lệ chữa khỏi trên 95%.',
    whatIsIt: 'Là bệnh ung thư phụ khoa phổ biến nhất tại các nước phát triển, thường gặp nhất ở phụ nữ từ 55 - 70 tuổi (đã mãn kinh). May mắn là căn bệnh này thường phát ra tín hiệu cảnh báo rất sớm (ra máu âm đạo bất thường) nên phần lớn bệnh nhân được phát hiện ngay từ giai đoạn đầu khi khối u còn nằm gọn trong lòng tử cung.',
    whyItHappens: 'Chủ yếu liên quan đến thừa cân béo phì (mô mỡ tích tụ Estrogen), tiểu đường, có kinh sớm, mãn kinh muộn, hoặc mang gen di truyền Hội chứng Lynch (gia đình có nhiều người mắc ung thư đại tràng hoặc ung thư tử cung).',
    warningSigns: [
      { symptom: 'Ra máu sau mãn kinh (Dấu hiệu điển hình nhất - chiếm 90%)', explanation: 'Bất kỳ giọt máu nào xuất hiện sau khi đã mãn kinh đều phải đi khám ngay, không được chủ quan.' },
      { symptom: 'Kinh nguyệt ra nhiều xối xả, kéo dài ở tuổi quanh mãn kinh (45-50 tuổi)', explanation: 'Nhiều người lầm tưởng là "rối loạn tiền mãn kinh bình thường" nên bỏ lỡ thời điểm vàng.' },
      { symptom: 'Khí hư ra nhiều, hôi hoặc lẫn dịch hồng mủ', explanation: 'Do khối u hoại tử và nhiễm khuẩn bên trong buồng tử cung.' }
    ],
    dangerLevel: 'critical',
    dangerText: 'Nếu để muộn, khối u sẽ ăn sâu qua lớp cơ tử cung, di căn đến hạch ổ bụng và các tạng khác.',
    howDoctorChecks: [
      'Siêu âm đầu dò âm đạo: Kiểm tra độ dày niêm mạc (người sau mãn kinh có niêm mạc > 4mm là đáng ngờ).',
      'Sinh thiết Pipelle hoặc Nội soi buồng tử cung bấm sinh thiết: Xác định chính xác 100% loại tế bào ung thư dưới kính hiển vi.',
      'Chụp cộng hưởng từ MRI vùng chậu & PET-CT: Đánh giá xem khối u đã ăn sâu vào cơ tử cung chưa và đã di căn hạch chưa.',
      'Xét nghiệm sinh học phân tử 4 nhóm (TCGA/ProMisE): Tìm đột biến gen POLE, gen sửa chữa ADN (MMR/Lynch) để chọn thuốc miễn dịch đích tốt nhất.'
    ],
    bestTreatments: [
      {
        name: 'Phẫu thuật nội soi cắt tử cung & Sinh thiết hạch lính gác (SLN)',
        description: 'Bác sĩ mổ nội soi êm ái cắt bỏ tử cung và 2 buồng trứng, đồng thời tiêm chất huỳnh quang ICG để tìm chính xác hạch bạch huyết đầu tiên nghi ngờ di căn, giúp tránh phải nạo vét toàn bộ hạch gây phù chân voi sau này.',
        whoNeedsIt: 'Phương pháp điều trị cơ bản cho hầu hết các ca phát hiện sớm giai đoạn 1 và 2.'
      },
      {
        name: 'Liệu pháp Miễn dịch Đích thế hệ mới (Pembrolizumab / Keytruda)',
        description: 'Thuốc truyền tĩnh mạch giúp kích hoạt hệ miễn dịch của chính cơ thể tự nhận diện và tiêu diệt tế bào ung thư, đặc biệt hiệu quả vượt trội ở người có khiếm khuyết gen MMR-d/MSI-H.',
        whoNeedsIt: 'Giai đoạn tiến xa, tái phát hoặc không thể phẫu thuật.'
      }
    ],
    fertilityImpact: 'Đối với bệnh nhân rất trẻ (< 40 tuổi) mắc ung thư giai đoạn rất sớm (khối u mới nằm ở niêm mạc, loại tế bào lành tính Grade 1) và tha thiết muốn sinh con: Bác sĩ có thể dùng phác đồ bảo tồn bằng vòng Mirena + thuốc nội tiết liều cao. Sau khi sinh con xong, bắt buộc phải mổ cắt tử cung để ngừa tái phát.',
    doctorAdvice: 'Ung thư niêm mạc tử cung là một trong những loại ung thư có tiên lượng tốt nhất nếu phát hiện sớm. Đừng bao giờ trì hoãn việc đi khám khi thấy ra máu sau mãn kinh!',
    videoEmbedId: 'gM2W8qT9aZ0'
  },
  {
    id: 'chronic_endometritis',
    title: 'Viêm Niêm Mạc Tử Cung Mạn Tính (CD138)',
    medicalName: 'Chronic Endometritis (CE)',
    badge: 'Kẻ thù giấu mặt gây hỏng phôi IVF',
    simpleAnalogy: 'Lớp đất niêm mạc bị nhiễm khuẩn âm ỉ làm đất bị chua, khiến hạt mầm phôi thai đặt vào không thể bén rễ được.',
    whatIsIt: 'Là tình trạng viêm nhiễm âm thầm, kéo dài tại lớp niêm mạc buồng tử cung. Khác với viêm cấp tính làm sốt cao đau bụng, viêm mạn tính hầu như KHÔNG CÓ TRIỆU CHỨNG RÕ RỆT nào, người bệnh vẫn sinh hoạt bình thường. Tuy nhiên, nó lại làm biến đổi môi trường miễn dịch, khiến buồng tử cung coi phôi thai như một "vật lạ" và từ chối không cho làm tổ.',
    whyItHappens: 'Do các vi khuẩn cơ hội xâm nhập (như vi khuẩn đường ruột, Mycoplasma, Ureaplasma, Chlamydia) làm suy giảm lượng lợi khuẩn Lactobacillus bảo vệ buồng tử cung, thường gặp sau nạo hút thai, sảy thai hoặc đặt vòng lâu năm.',
    warningSigns: [
      { symptom: 'Chuyển phôi IVF nhiều lần loại tốt mà không đậu (Thất bại làm tổ liên tiếp - RIF)', explanation: 'Phôi ngày 5 rất đẹp, đã sàng lọc di truyền bình thường nhưng đưa vào tử cung vẫn không đậu.' },
      { symptom: 'Sảy thai liên tiếp 2-3 lần trong 3 tháng đầu', explanation: 'Tình trạng viêm làm hỏng mạng lưới mạch máu nuôi dưỡng phôi sớm.' },
      { symptom: 'Hoàn toàn không có triệu chứng (Gặp ở 80% người bệnh)', explanation: 'Chỉ có thể phát hiện khi đi làm xét nghiệm chuyên biệt.' },
      { symptom: 'Khí hư ra dai dẳng hoặc đau tức nhẹ bụng dưới', explanation: 'Một số ít người cảm thấy nặng bụng dưới hoặc khí hư đổi màu.' }
    ],
    dangerLevel: 'moderate',
    dangerText: 'Gặp ở 30 - 60% phụ nữ bị thất bại làm tổ nhiều lần trong IVF. Nếu không chữa khỏi thì chuyển phôi bao nhiêu lần cũng rất khó thành công.',
    howDoctorChecks: [
      'Nội soi buồng tử cung: Bác sĩ nhìn thấy niêm mạc tử cung đỏ rực (sung huyết) hoặc có những nốt vi polyp li ti như quả dâu tây.',
      'Sinh thiết nhuộm hóa mô miễn dịch CD138 (Tiêu chuẩn vàng bắt buộc): Lấy mẫu niêm mạc gửi đi nhuộm tìm tế bào tương bào (Plasma cells). Nếu thấy có tế bào CD138+ là khẳng định bị viêm mạn tính.'
    ],
    bestTreatments: [
      {
        name: 'Phác đồ kháng sinh Doxycycline 14 ngày (Uống cho cả 2 vợ chồng)',
        description: 'Uống thuốc kháng sinh liên tục trong 2 tuần để tiêu diệt sạch vi khuẩn ẩn sâu trong niêm mạc.',
        whoNeedsIt: 'Tất cả các ca xét nghiệm có tế bào CD138 dương tính.'
      },
      {
        name: 'Kháng sinh phối hợp thế hệ 2 + Men vi sinh Lactobacillus',
        description: 'Dùng Ciprofloxacin phối hợp Metronidazole 14 ngày và bổ sung viên đặt lợi khuẩn âm đạo để tái lập môi trường sinh thái khỏe mạnh cho buồng tử cung.',
        whoNeedsIt: 'Trường hợp sau 1 đợt thuốc kiểm tra lại vẫn còn viêm.'
      }
    ],
    fertilityImpact: 'Tin vui là: Sau khi uống đủ liệu trình kháng sinh và xét nghiệm lại thấy CD138 âm tính (sạch viêm), tỷ lệ mang thai và sinh con khỏe mạnh trong lần chuyển phôi IVF tiếp theo TĂNG VỌT TỪ 15% LÊN HƠN 60% (tương đương người bình thường)!',
    doctorAdvice: 'Nếu bạn đã chuyển phôi phôi tốt 2 lần không đậu, hãy đề nghị bác sĩ làm xét nghiệm sinh thiết nhuộm CD138 ngay để tìm đúng nguyên nhân trước khi chuyển những phôi quý còn lại.',
    videoEmbedId: 'z2YkEa6q15c'
  },
  {
    id: 'asherman',
    title: 'Dính Buồng Tử Cung (Hội Chứng Asherman)',
    medicalName: 'Asherman\'s Syndrome / Intrauterine Adhesions',
    badge: 'Hậu quả thường gặp sau nạo hút thai',
    simpleAnalogy: 'Hai bờ tường của buồng tử cung bị mất lớp vôi bảo vệ nên dính chặt lại với nhau, làm hẹp hoặc bít kín hoàn toàn căn phòng tử cung.',
    whatIsIt: 'Bình thường lòng tử cung là một khoang rỗng thông thoáng. Khi lớp tế bào mầm đáy bị tổn thương (thường do nạo hút phá thai, nạo sót nhau sau sinh hoặc phẫu thuật), cơ thể phản ứng bằng cách hình thành các dải xơ sẹo kéo dính thành trước và thành sau của tử cung lại với nhau. Hậu quả là máu kinh không thoát ra được hoặc buồng tử cung bị co rút biến dạng.',
    whyItHappens: 'Nguyên nhân hàng đầu (> 90%) là do nạo hút buồng tử cung (đặc biệt khi tử cung còn mềm yếu sau sinh hoặc sau sảy thai). Dụng cụ nạo kim loại cạo quá sâu làm rách mất lớp tế bào gốc ở đáy niêm mạc.',
    warningSigns: [
      { symptom: 'Kinh nguyệt ít hẳn hoặc mất kinh hoàn toàn sau khi nạo hút thai', explanation: 'Tự nhiên sau khi đi hút thai về thì thấy máu kinh mỗi tháng chỉ ra vài giọt rồi hết, hoặc mất kinh hẳn 3-6 tháng.' },
      { symptom: 'Đau bụng dưới dữ dội theo chu kỳ mỗi tháng nhưng không thấy máu kinh (Bế kinh)', explanation: 'Đến ngày hành kinh vẫn thấy tức ngực, đau quặn bụng dưới nhưng máu kinh bị kẹt bên trong do lỗ cổ tử cung bị dính tịt.' },
      { symptom: 'Không thể có thai lại (Vô sinh thứ phát)', explanation: 'Buồng tử cung bị xơ dính làm tinh trùng không thể bơi lên gặp trứng và phôi thai không có chỗ làm tổ.' }
    ],
    dangerLevel: 'high',
    dangerText: 'Nguy cơ vô sinh vĩnh viễn nếu để xơ dính nặng kéo dài; tăng nguy cơ nhau cài răng lược nguy hiểm trong thai kỳ sau.',
    howDoctorChecks: [
      'Siêu âm 3D tử cung: Dựng hình không gian 3 chiều xem buồng tử cung có bị méo mó, co hẹp hình chữ T hoặc có dải xơ bắc cầu không.',
      'Nội soi buồng tử cung chẩn đoán (Tiêu chuẩn vàng): Camera đưa vào nhìn thấy chính xác các dải dính xơ màu trắng đang giăng ngang buồng tử cung.'
    ],
    bestTreatments: [
      {
        name: 'Phẫu thuật nội soi gỡ dính bằng kéo vi phẫu không nhiệt (Cold Scissors)',
        description: 'Bác sĩ dùng kéo cơ học siêu nhỏ tỉa tách nhẹ nhàng các dải xơ sẹo, mở rộng lại lòng tử cung. TUYỆT ĐỐI KHÔNG dùng dao điện nhiệt vì nhiệt độ cao sẽ làm cháy xém tế bào đáy và gây dính tái phát nặng hơn.',
        whoNeedsIt: 'Mọi trường hợp dính buồng tử cung có triệu chứng hoặc muốn có con.'
      },
      {
        name: 'Bơm Gel chống dính sinh học + Đặt bóng phòng ngừa tái dính',
        description: 'Ngay sau khi gỡ dính, bác sĩ bơm gel Hyaluronic Acid vào lòng tử cung để ngăn 2 thành tử cung dính lại vào nhau trong những ngày đầu lành vết thương.',
        whoNeedsIt: 'Thực hiện ngay trong lúc phẫu thuật gỡ dính.'
      },
      {
        name: 'Uống thuốc nội tiết Estrogen liều cao',
        description: 'Uống thuốc hormone trong 2-3 chu kỳ để kích thích các tế bào mầm còn lại mọc nhanh lớp niêm mạc mới che phủ các vết sẹo.',
        whoNeedsIt: 'Bắt buộc uống sau mổ gỡ dính.'
      }
    ],
    fertilityImpact: 'Sau khi được phẫu thuật gỡ dính đúng kỹ thuật bởi bác sĩ chuyên khoa sâu, tỷ lệ hồi phục kinh nguyệt bình thường đạt 85-90% và tỷ lệ mang thai thành công đạt 50-60% ở các trường hợp dính nhẹ đến trung bình.',
    doctorAdvice: 'Nếu sau khi nạo hút thai mà thấy lượng kinh nguyệt ít đi bất thường hoặc đau bụng bế kinh, bạn cần đi khám siêu âm 3D và nội soi buồng tử cung càng sớm càng tốt khi dải dính còn mềm, dễ gỡ!',
    videoEmbedId: 'U_QZ352i-W4'
  },
  {
    id: 'thin_endometrium',
    title: 'Niêm Mạc Tử Cung Mỏng Kháng Trị (< 7mm)',
    medicalName: 'Thin / Refractory Endometrium',
    badge: 'Rào cản lớn trong chuyển phôi IVF',
    simpleAnalogy: 'Lớp đất phù sa quá mỏng và thiếu nước tưới (< 7mm), hạt mầm đặt vào khó có đủ dinh dưỡng để bám rễ sâu.',
    whatIsIt: 'Trong quá trình chuẩn bị niêm mạc để chuyển phôi thụ tinh ống nghiệm (IVF) hoặc thụ thai tự nhiên, độ dày lý tưởng của niêm mạc là từ 8 - 12mm kèm hình thái "3 lá" sắc nét. Nếu đến ngày rụng trứng hoặc ngày dùng thuốc Progesterone mà niêm mạc vẫn mỏng dưới 7mm (thậm chí dưới 6mm) dù đã uống rất nhiều thuốc Estrogen, thì gọi là niêm mạc mỏng kháng trị.',
    whyItHappens: 'Do mạch máu nuôi dưỡng niêm mạc bị co thắt kém lưu thông, do lớp tế bào đáy bị tổn thương sau nhiều lần nạo hút thai, hoặc do dùng thuốc kích trứng Clomiphene kéo dài gây tác dụng kháng nội tiết tại chỗ.',
    warningSigns: [
      { symptom: 'Kinh nguyệt ra rất ít (chỉ 1-2 ngày là sạch, chỉ dùng băng vệ sinh hàng ngày)', explanation: 'Lượng mô niêm mạc phát triển quá mỏng nên khi bong ra chỉ có một chút máu.' },
      { symptom: 'Đi siêu âm canh trứng nhiều chu kỳ thấy niêm mạc không bao giờ vượt quá 6.5mm', explanation: 'Dấu hiệu nhận biết rõ ràng nhất trên siêu âm.' },
      { symptom: 'Bác sĩ liên tục phải hủy lịch chuyển phôi IVF vì niêm mạc không đạt chuẩn', explanation: 'Kéo dài thời gian và gây mệt mỏi tâm lý cho người làm IVF.' }
    ],
    dangerLevel: 'moderate',
    dangerText: 'Niêm mạc < 7mm làm giảm tỷ lệ đậu thai xuống dưới 20% và làm tăng nguy cơ thai lưu, sảy thai sớm.',
    howDoctorChecks: [
      'Siêu âm đầu dò âm đạo đo độ dày niêm mạc tại mặt cắt dọc chuẩn: Đánh giá xem có cấu trúc 3 lá (Triple line) không.',
      'Siêu âm Doppler màu mạch máu tử cung: Kiểm tra xem các mạch máu nhỏ có đâm xuyên vào nuôi dưỡng sát bề mặt niêm mạc không (tưới máu Zone 3 & 4).'
    ],
    bestTreatments: [
      {
        name: 'Liệu pháp bơm Huyết tương giàu tiểu cầu tự thân (Intrauterine PRP)',
        description: 'Bác sĩ lấy 15-20ml máu của chính bạn, quay ly tâm lọc lấy phần huyết tương đậm đặc tiểu cầu chứa hàng triệu yếu tố tăng trưởng tự nhiên, rồi bơm nhẹ vào buồng tử cung vào ngày 10 và 12 của chu kỳ. Tiểu cầu hoạt hóa sẽ đánh thức các tế bào gốc và kích thích mọc mạch máu mới.',
        whoNeedsIt: 'Giải pháp đột phá hàng đầu hiện nay cho người có niêm mạc mỏng kháng thuốc trong chu kỳ IVF.'
      },
      {
        name: 'Tối ưu hóa thuốc nội tiết đa đường dùng (Uống + Bôi da Oestrogel + Đặt âm đạo)',
        description: 'Kết hợp bôi gel Estrogen ngoài da và đặt âm đạo để thuốc ngấm thẳng vào tử cung mà không bị gan lọc bớt.',
        whoNeedsIt: 'Áp dụng cho mọi chu kỳ chuẩn bị chuyển phôi đông lạnh.'
      },
      {
        name: 'Dùng thuốc tăng tuần hoàn mạch máu (Aspirin liều thấp, Sildenafil, Vitamin E)',
        description: 'Giúp giãn mở các mạch máu nhỏ li ti nuôi dưỡng tử cung.',
        whoNeedsIt: 'Người có trở kháng mạch máu tử cung cao trên siêu âm Doppler.'
      }
    ],
    fertilityImpact: 'Phương pháp bơm PRP tự thân giúp cải thiện độ dày niêm mạc trung bình từ +1.5mm đến +2.8mm, giúp tăng tỷ lệ đậu thai từ 18% lên hơn 45%. Đặc biệt, nếu chất lượng phôi tốt (phôi ngày 5 đã sàng lọc PGT-A), dù niêm mạc chỉ đạt 6.8 - 7mm nhưng có cấu trúc 3 lá đẹp thì cơ hội đậu thai vẫn rất khả quan!',
    doctorAdvice: 'Độ dày chỉ là một phần, "chất lượng đất" (hình thái 3 lá và tưới máu tốt) còn quan trọng hơn. Đừng quá bi quan khi niêm mạc hơi mỏng; hãy trao đổi với bác sĩ về phác đồ bơm PRP tự thân.',
    videoEmbedId: 'z2YkEa6q15c'
  }
];
