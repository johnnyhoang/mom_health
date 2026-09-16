export interface AnkleCaseRecord {
  id: string;
  title: string;
  facility: string;
  date: string;
  summaryStatus: 'critical' | 'warning' | 'info';
  statusBadge: string;
  headline: string;
  patientDeidentifiedInfo: {
    anonymousLabel: string;
    age: number;
    gender: string;
    injuryContext: string;
    privacyNote: string;
  };
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

export const ankleFractureCaseRecords: AnkleCaseRecord[] = [
  {
    id: 'xray-ankle-trauma-2026',
    title: 'Phiếu Kết Quả X-Quang Khớp Cổ Chân (Thẳng - Nghiêng - Mortise View)',
    facility: 'Khoa Chẩn Đoán Hình Ảnh & Cấp Cứu Chấn Thương Chỉnh Hình TP.HCM',
    date: 'Hồ sơ cấp cứu chấn thương',
    summaryStatus: 'critical',
    statusBadge: 'GÃY 2 MẮT CÁ (BIMALLEOLAR) + TOÁC KHỚP SÊN CẲNG CHÂN',
    headline: 'GÃY XƯƠNG MÁC DƯỚI (DANIS-WEBER B) & GÃY BONG MẮT CÁ TRONG KÈM LỆCH TRỤC MỘNG CHÀY SÊN',
    patientDeidentifiedInfo: {
      anonymousLabel: 'Bệnh nhân P.T.X.L',
      age: 74,
      gender: 'Nữ',
      injuryContext: 'Té ngã trượt chân bậc tam cấp do mất thăng bằng, cổ chân bị xoắn vặn ra ngoài (Supination-External Rotation) kèm tiếng "rắc" gãy xương tức thì',
      privacyNote: 'Toàn bộ thông tin định danh cá nhân (Số CCCD, Mã BHYT, Địa chỉ nhà) đã được ẩn danh hóa và bảo mật 100% theo tiêu chuẩn an toàn y tế.'
    },
    keyFindings: [
      {
        term: 'Gãy chéo xoắn đầu dưới xương mác (Mắt cá ngoài) ngang mức khớp chày mác (Danis-Weber B) di lệch',
        medicalMeaning: 'Đường gãy chéo xoắn đi qua 1/3 dưới xương mác ngang mức khe khớp, các mảnh xương gãy bị trượt lệch góc ra sau và ra ngoài, làm mất độ vững bên ngoài của mộng chày - sên.',
        laymanMeaning: 'Xương mác ở mắt cá ngoài bị gãy đôi và trượt lệch vị trí giống như chiếc cọc bên hông bị gãy gập, khiến toàn bộ mắt cá chân bên ngoài bị mất chỗ tựa.',
        clinicalSignificance: 'Mắt cá ngoài chịu trách nhiệm giữ vững trục ngoài của khớp cổ chân. Nếu không nẹp vít nắn chỉnh lại đúng vị trí giải phẫu, khớp cổ chân sẽ bị lệch vĩnh viễn và thoái hóa khớp sớm.',
        actionRequired: 'Phẫu thuật nắn chỉnh mở và kết hợp xương bằng nẹp Titanium ôm sát giải phẫu (Anatomical Distal Fibula Plate) và bắt vít xốp khóa chắc chắn.'
      },
      {
        term: 'Gãy bong mảnh xương mỏm mắt cá trong (Medial Malleolus) kèm đứt rách dây chằng Delta',
        medicalMeaning: 'Mắt cá trong xương chày bị lực giật mạnh của dây chằng delta kéo bong một mảng xương rời, khoang khớp bên trong (Medial Clear Space) giãn rộng > 4mm.',
        laymanMeaning: 'Phía mắt cá trong bên đối diện bị kéo giật mạnh đến mức bứt rời một mẩu xương và làm rách toạc dây chằng bên trong, khiến khe khớp bị toác rộng.',
        clinicalSignificance: 'Khẳng định tình trạng gãy không vững 2 mắt cá (Bimalleolar Ankle Fracture), xương sên bên trong bị xô lệch khỏi hõm khớp chày.',
        actionRequired: 'Bắt vít xốp có ren bán phần (Cancellous Screws) hoặc chỉ thép néo ép (Tension Band Wiring) để kéo mẩu xương mắt cá trong liền khít vào xương chày.'
      },
      {
        term: 'Mộng chày - sên mất tương quan giải phẫu, xương sên bán trật ra ngoài 3.5mm',
        medicalMeaning: 'Xương sên (Talus) – viên bi trung tâm của khớp cổ chân – bị trượt ra phía ngoài so với vòm xương chày (Tibial Plafond).',
        laymanMeaning: '"Viên bi" cổ chân bị trật lệch khỏi chiếc hố đỡ bên trên, khiến chân không thể chịu được lực đứng và biến dạng sưng phồng.',
        clinicalSignificance: 'Chỉ cần xương sên bị lệch 1mm, diện tích tiếp xúc chịu lực của khớp cổ chân sẽ giảm tới 40%, làm tăng áp lực cục bộ gấp nhiều lần gây đau đớn dữ dội.',
        actionRequired: 'Phẫu thuật nắn chỉnh xương sên về đúng tâm ổ khớp (Anatomical Reduction) là tiêu chuẩn vàng bắt buộc.'
      },
      {
        term: 'Hình ảnh thưa bè xương, mỏng vỏ xương vùng cổ chân (Loãng xương T-score -2.7)',
        medicalMeaning: 'Mật độ khoáng chất xương giảm nghiêm trọng do loãng xương tuổi già, các bè xương xốp dễ bị vỡ vụn khi chịu lực tác động.',
        laymanMeaning: 'Chất lượng xương của cụ bà 74 tuổi bị xốp mỏng, khiến việc té ngã nhẹ cũng đủ làm xương gãy vụn hơn so với người trẻ.',
        clinicalSignificance: 'Cần sử dụng loại ốc vít khóa góc (Locking Screws) đặc chủng cho người loãng xương để tránh bị lỏng ốc hoặc tụt nẹp trong thời gian liền xương.',
        actionRequired: 'Bác sĩ phẫu thuật dùng nẹp khóa Titanium + Bổ sung Calci/Vitamin D3 và thuốc chống loãng xương sau mổ.'
      }
    ],
    clinicalVerdict: 'Gãy 2 mắt cá chân không vững (Danis-Weber B) kèm bán trật khớp sên trên nền loãng xương nặng. Chỉ định phẫu thuật kết hợp xương nẹp vít ORIF cấp cứu trì hoãn (mổ ngay khi giảm sưng nề mô mềm sau 3-5 ngày).',
    patientReassurance: 'Phẫu thuật kết hợp xương nẹp vít hiện đại sẽ trả lại hình dáng và cấu trúc khớp cổ chân nguyên vẹn 100%. Bệnh nhân sẽ được bất động an toàn và tập đi lại có trợ lực từng bước, không để lại di chứng đi khập khiễng.'
  },
  {
    id: 'mri-ankle-ligaments-2026',
    title: 'Phiếu Kết Quả Cộng Hưởng Từ MRI Khớp Cổ Chân & Dây Chằng',
    facility: 'Trung Tâm Chẩn Đoán Y Khoa Kỹ Thuật Cao TP.HCM',
    date: 'Khảo sát dây chằng & mô mềm chuyên sâu',
    summaryStatus: 'critical',
    statusBadge: 'ĐỨT HOÀN TOÀN DÂY CHẰNG MÁC SÊN TRƯỚC (ATFL) & KHỚP CHÀY MÁC',
    headline: 'ĐỨT TOÀN PHẦN DÂY CHẰNG ATFL, RÁCH DÂY CHẰNG MÁC GÓT (CFL) & TỔN THƯƠNG KHỚP NỐI CHÀY MÁC (SYNDESMOSIS)',
    patientDeidentifiedInfo: {
      anonymousLabel: 'Bệnh nhân P.T.X.L',
      age: 74,
      gender: 'Nữ',
      injuryContext: 'Chụp MRI đánh giá toàn diện sau té ngã gãy mắt cá để kiểm tra hệ thống dây chằng và sụn khớp cổ chân',
      privacyNote: 'Hồ sơ hình ảnh đã được mã hóa ẩn danh y tế an toàn.'
    },
    keyFindings: [
      {
        term: 'Dây chằng mác - sên trước (ATFL): Mất liên tục hoàn toàn, tụ dịch và phù nề mô mềm xung quanh',
        medicalMeaning: 'Dây chằng Anterior Talofibular Ligament (ATFL) – dây chằng quan trọng nhất giữ vững bờ trước ngoài cổ chân – bị đứt rời hoàn toàn khỏi điểm bám ở mỏm mắt cá ngoài.',
        laymanMeaning: '"Dây chằng chính số 1" giữ cho bàn chân không bị lật vào trong đã bị đứt toạc làm đôi, khiến mắt cá ngoài bị lỏng lẻo hoàn toàn.',
        clinicalSignificance: 'Là nguyên nhân gây sưng bầm tím lớn ở mu bàn chân và mất độ vững xoay của cổ chân.',
        actionRequired: 'Khâu phục hồi dây chằng (Brostrom-Gould repair) hoặc gia cố bằng dây neo sinh học (InternalBrace) trong cùng cuộc mổ nẹp xương.'
      },
      {
        term: 'Dây chằng mác - gót (CFL): Rách bán phần sợi bề mặt, căng giãn phù nề',
        medicalMeaning: 'Dây chằng Calcaneofibular Ligament (CFL) bị rách sợi khoảng 50% nhưng chưa đứt rời hoàn toàn.',
        laymanMeaning: '"Dây chằng số 2" nối mắt cá ngoài xuống xương gót bị rách giãn một nửa, gây đau nhói khi xoay gót chân.',
        clinicalSignificance: 'Tổn thương phối hợp thường gặp, có khả năng tự liền sẹo tốt nếu cổ chân được bất động vững chắc.',
        actionRequired: 'Bảo vệ bằng nẹp bột và giày bảo hộ CAM Boot trong 4-6 tuần để dây chằng tự liền sinh học.'
      },
      {
        term: 'Khớp nối chày - mác dưới (Syndesmosis / Màng gian cốt): Toác rộng khe chày mác 5.2mm',
        medicalMeaning: 'Dây chằng chày mác dưới trước (AITFL) và màng liên kết giữa 2 xương cẳng chân bị toác rộng (High Ankle Sprain / Syndesmotic Rupture).',
        laymanMeaning: 'Hai xương cẳng chân (xương chày to và xương mác nhỏ) bị tách rời nhau ra ở đáy cổ chân như chiếc kẹp bị gãy chốt giữ.',
        clinicalSignificance: 'Đây là tổn thương cực kỳ quan trọng; nếu không siết chặt lại khớp chày mác, 2 xương sẽ bị bẹt ra khi đứng chịu lực, gây đau buốt mạn tính.',
        actionRequired: 'Bắt vít định vị chày - mác (Syndesmotic Screw) hoặc dùng dây neo linh hoạt TightRope sợi siêu bền (Arthrex TightRope) để kéo 2 xương khép sát vào nhau.'
      },
      {
        term: 'Tràn dịch khớp cổ chân lượng nhiều kèm tụ máu bao khớp (Hemarthrosis)',
        medicalMeaning: 'Máu từ các ổ gãy xương và dây chằng bị đứt tràn ngập vào trong ổ khớp cổ chân tạo áp lực căng tức dữ dội.',
        laymanMeaning: 'Cổ chân sưng to như quả bưởi, da căng bóng và bầm tím do máu chảy tụ bên trong bao khớp.',
        clinicalSignificance: 'Gây đau nhức dữ dội, cản trở việc mổ ngay lập tức vì nguy cơ nhiễm trùng và hoại tử mép da nếu mổ khi da đang quá căng phù nề.',
        actionRequired: 'Chườm đá lạnh, kê cao chân trên gối cao 30cm, băng ép nhẹ nhàng và dùng thuốc chống phù nề (Alpha Chymotrypsin) trong 3-5 ngày chờ da nhăn lại mới tiến hành mổ.'
      }
    ],
    clinicalVerdict: 'Tổn thương phức hợp đa dây chằng cổ chân (ATFL đứt hoàn toàn + toác khớp chày mác Syndesmosis) kết hợp gãy 2 mắt cá. Cần phẫu thuật kết hợp xương nẹp vít ORIF phối hợp cố định khớp chày mác và khâu tăng cường dây chằng.',
    patientReassurance: 'Bác sĩ phẫu thuật sẽ xử lý đồng thời cả phần XƯƠNG (nẹp vít) và phần DÂY CHẰNG (dây neo/khâu phục hồi) trong 1 lần mổ duy nhất, đảm bảo cổ chân vững chắc tuyệt đối khi lành.'
  }
];
