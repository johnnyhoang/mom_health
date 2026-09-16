export interface MedicalRecordAnalysis {
  id: string;
  title: string;
  hospital: string;
  date: string;
  imageSrc: string;
  summaryStatus: 'benign' | 'warning' | 'info';
  statusBadge: string;
  headline: string;
  keyFindings: {
    term: string;
    medicalMeaning: string;
    laymanMeaning: string;
    tamoxifenLink: string;
    actionRequired: string;
  }[];
  clinicalVerdict: string;
  patientReassurance: string;
}

export const patientCaseRecords: MedicalRecordAnalysis[] = [
  {
    id: 'gpb-hungvuong-2026',
    title: 'Phiếu Giải Phẫu Bệnh Lòng Tử Cung',
    hospital: 'Bệnh viện Hùng Vương (Khoa Giải phẫu bệnh - Tế bào)',
    date: '15/09/2026 (Lấy mẫu: 09/09/2026)',
    imageSrc: '/records/gpb_hungvuong_2026.png',
    summaryStatus: 'benign',
    statusBadge: 'HOÀN TOÀN LÀNH TÍNH (Nguy cơ ác tính < 1-3%)',
    headline: 'Kết luận: TĂNG SẢN ĐIỂN HÌNH KHU TRÚ NỘI MẠC TỬ CUNG',
    keyFindings: [
      {
        term: 'Tăng sản điển hình khu trú (Typical Focal Hyperplasia)',
        medicalMeaning: 'Tế bào biểu mô tuyến tăng số lượng nhưng hình thái nhân bình thường, không có dị sản nhân (Without Atypia), xếp lớp bình thường và chỉ xảy ra cục bộ một vùng.',
        laymanMeaning: 'Lớp niêm mạc mọc dày lên một đám nhỏ như chồi non tốt lá, nhưng các tế bào vẫn là tế bào LÀNH TÍNH nguyên bản, KHÔNG PHẢI tế bào lạ hay tiền ung thư.',
        tamoxifenLink: 'Tamoxifen kích thích nhẹ thụ thể Estrogen ở tử cung trong suốt 5 năm, khiến các tế bào niêm mạc tăng sinh tạo thành mảng dày khu trú.',
        actionRequired: 'Không cần hóa trị, xạ trị hay lo sợ ung thư. Chỉ cần xử lý cầm máu nếu còn rong kinh.'
      },
      {
        term: 'Ống tuyến giãn rộng, tạo bọc (Cystic dilated glands)',
        medicalMeaning: 'Các tuyến nội mạc phình to chứa dịch, tạo thành các vi nang nhỏ dạng bọc dưới kính hiển vi quang học.',
        laymanMeaning: 'Các lỗ tuyến niêm mạc bị ứ dịch phình to giống như những bọc bong bóng nước nhỏ li ti.',
        tamoxifenLink: 'Đây là DẤU ẤN KINH ĐIỂN VÔ HẠI của Tamoxifen (Tamoxifen-associated cystic glandular dilation). Thuốc làm ứ đọng dịch trong lòng tuyến chứ không phải khối u ác tính.',
        actionRequired: 'Tổn thương này hoàn toàn vô hại về mặt ác tính, nhưng bề mặt tuyến mỏng có thể dễ rỉ máu gây rong kinh.'
      },
      {
        term: 'Lót thượng mô trụ cao, nhân tăng sắc nhẹ',
        medicalMeaning: 'Tế bào biểu mô hình trụ có bắt màu phẩm nhuộm đậm hơn bình thường đôi chút do đang có hoạt động tăng sinh tế bào dưới ảnh hưởng nội tiết.',
        laymanMeaning: 'Tế bào đang phát triển khỏe mạnh và bắt màu thuốc nhuộm rõ nét hơn, hoàn toàn không có đột biến hay nhân quái dị.',
        tamoxifenLink: 'Phản ánh tế bào nội mạc vừa trải qua giai đoạn chịu tác động của chất điều hòa nội tiết SERM.',
        actionRequired: 'Theo dõi phụ khoa định kỳ bình thường.'
      }
    ],
    clinicalVerdict: 'Kết quả giải phẫu bệnh khẳng định 100% không có ung thư nội mạc tử cung, không có tế bào ác tính di căn từ K vú. Đây là tình trạng tăng sản lành tính do tác dụng phụ kinh điển của thuốc Tamoxifen.',
    patientReassurance: 'Chị hoàn toàn có thể trút bỏ gánh nặng tâm lý lo sợ ung thư tái phát hay K tử cung. Báo cáo giải phẫu bệnh này là bằng chứng vàng xác nhận lòng tử cung của chị không có tế bào ác tính!'
  },
  {
    id: 'sieuam-hungvuong-2026',
    title: 'Phiếu Siêu Âm Phụ Khoa',
    hospital: 'Bệnh viện Hùng Vương (ThS.BS.CK2 Hoàng Thị Thu Huyền)',
    date: '09/09/2026',
    imageSrc: '/records/sieuam_hungvuong_2026.png',
    summaryStatus: 'warning',
    statusBadge: 'KHỐI CƠ THÀNH SAU 41x45mm (Cần kiểm soát rong kinh)',
    headline: 'Kết luận: NHÂN XƠ TỬ CUNG (Khối cơ thành sau 41x45mm)',
    keyFindings: [
      {
        term: 'Thành sau tử cung có khối echo hỗn hợp 41x45mm',
        medicalMeaning: 'Khối tăng sinh mô cơ trơn (U xơ tử cung) hoặc vùng lạc tuyến cơ tử cung khu trú (Adenomyoma) phát triển ở thành sau thân tử cung.',
        laymanMeaning: 'Một cục nhân xơ lành tính kích thước khoảng 4cm (bằng quả trứng gà nhỏ) nằm ở vách sau tử cung.',
        tamoxifenLink: 'Tamoxifen có thể duy trì kích thước hoặc kích thích nhẹ các nhân xơ có sẵn do tác động estrogenic một phần trên cơ tử cung.',
        actionRequired: 'Khối u này cùng với tình trạng Adenomyosis là thủ phạm chính làm tử cung co bóp yếu, dẫn đến rong kinh dai dẳng.'
      },
      {
        term: 'Nội mạc tử cung: mỏng',
        medicalMeaning: 'Độ dày lớp niêm mạc đã giảm sau các đợt bong tróc rong kinh hoặc sau thao tác lấy mẫu.',
        laymanMeaning: 'Lớp niêm mạc lót trong lòng tử cung hiện tại không còn bị quá dày, giảm nguy cơ ứ đọng dịch máu.',
        tamoxifenLink: 'Cho thấy sau khi ngưng Tamoxifen từ tháng 1/2026, tác động kích thích dày niêm mạc đang có xu hướng giảm dần.',
        actionRequired: 'Rất thuận lợi để đánh giá lòng tử cung và quyết định hướng can thiệp tiếp theo.'
      },
      {
        term: 'Buồng trứng (P) & (T): Không u - Dịch túi cùng (-)',
        medicalMeaning: 'Cả hai buồng trứng đều bình thường về mặt cấu trúc, không có khối u thực thể, không có dịch tự do trong ổ bụng.',
        laymanMeaning: 'Hai bên buồng trứng hoàn toàn khỏe mạnh, không có dấu hiệu bệnh lý nguy hiểm.',
        tamoxifenLink: 'Buồng trứng hoạt động ổn định ở độ tuổi 45.',
        actionRequired: 'Bảo tồn nguyên vẹn 2 buồng trứng để duy trì nội tiết tố tự nhiên của người phụ nữ.'
      }
    ],
    clinicalVerdict: 'Khối cơ thành sau 41x45mm kết hợp với Adenomyosis là nguyên nhân cơ học chính gây nên tình trạng rong kinh nhiều tháng nay.',
    patientReassurance: 'Nhân xơ tử cung kích thước 4cm là bệnh lý lành tính rất phổ biến ở phụ nữ tuổi 45. Khối u không phải là ác tính nhưng cần xử lý để chấm dứt tình trạng mất máu rong kinh.'
  },
  {
    id: 'sieuam-tamanh-2025',
    title: 'Phiếu Siêu Âm Ngả Âm Đạo & Hình Ảnh Chi Tiết',
    hospital: 'Bệnh viện Đa Khoa Tâm Anh TP.HCM (BS.CKII Nguyễn Ngọc Thoại & BS Phan Ngọc Sơn)',
    date: '22/05/2025',
    imageSrc: '/records/sieuam_tamanh_doc_2025.png',
    summaryStatus: 'warning',
    statusBadge: 'GIAI ĐOÀN DÀY NIÊM MẠC 15mm & LẠC TUYẾN CƠ THÀNH SAU',
    headline: 'Kết luận: LẠC TUYẾN TRONG CƠ TỬ CUNG THÀNH SAU (ADENOMYOSIS) & DÀY NIÊM MẠC 15MM',
    keyFindings: [
      {
        term: 'Nội mạc tử cung dày 15mm',
        medicalMeaning: 'Tăng bề dày lớp nội mạc đo trên mặt cắt dọc siêu âm đầu dò (lúc đang dùng Tamoxifen năm thứ 4).',
        laymanMeaning: 'Lớp đệm bên trong tử cung dày lên gấp 2-3 lần bình thường.',
        tamoxifenLink: 'Đây là hiện tượng "Dày nội mạc giả tạo do Tamoxifen" (Tamoxifen-induced pseudo-thickening). Thuốc làm phù nề lớp mô đệm dưới niêm mạc, trên siêu âm nhìn tưởng rất dày nhưng thực chất bên trong là dịch phù và nang giãn.',
        actionRequired: 'Cần sinh thiết lòng tử cung (như chị đã làm tại BV Hùng Vương tháng 09/2026) để loại trừ tế bào lạ.'
      },
      {
        term: 'Thành sau dày hơn thành trước, nhiều đường sọc bóng lưng, mật độ không đồng nhất',
        medicalMeaning: 'Dấu hiệu kinh điển của Adenomyosis (Lạc nội mạc trong cơ tử cung). Các tuyến nội mạc đi lạc và cắm sâu vào thành cơ tử cung phía sau.',
        laymanMeaning: 'Mô niêm mạc tử cung chui sâu vào lớp cơ thành sau, làm thành sau bị sưng phồng, dày cộm và cơ tử cung không siết chặt lại được khi có kinh.',
        tamoxifenLink: 'Tamoxifen làm tăng nhẹ tính thấm và kích thích các ổ lạc tuyến này phát triển.',
        actionRequired: 'Đây là gốc rễ gây ra những cơn đau bụng kinh âm ỉ, nặng bụng dưới và kinh ra ồ ạt kéo dài.'
      },
      {
        term: 'Xuất huyết trong nang buồng trứng phải (23x19mm)',
        medicalMeaning: 'Nang hoàng thể xuất huyết sinh lý trong chu kỳ kinh nguyệt, bờ ngoài đều, không có vách chồi hay dòng mạch tăng sinh ác tính.',
        laymanMeaning: 'Một nang trứng sinh lý rụng trứng bị rỉ chút máu bên trong nang, kích thước nhỏ 2cm.',
        tamoxifenLink: 'Không liên quan đến K vú hay ung thư.',
        actionRequired: 'Nang này đã tự tiêu biến hoàn toàn (bằng chứng là siêu âm Hùng Vương 09/2026 buồng trứng đã hoàn toàn sạch không u).'
      }
    ],
    clinicalVerdict: 'Kết quả siêu âm năm 2025 đã chỉ rõ sự kết hợp giữa dày niêm mạc do Tamoxifen và bệnh lý Lạc tuyến cơ tử cung thành sau (Adenomyosis).',
    patientReassurance: 'Tình trạng dày 15mm vào tháng 5/2025 đã được giải quyết qua kết quả giải phẫu bệnh 2026 (hoàn toàn lành tính). Nang buồng trứng cũng đã tự biến mất đúng như quy luật sinh lý tự nhiên.'
  }
];
