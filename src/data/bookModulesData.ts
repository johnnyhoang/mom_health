import { 
  Eye, 
  Stethoscope, 
  Ribbon, 
  Activity, 
  Bone, 
  Footprints, 
  HelpCircle, 
  UserCheck,
  type LucideIcon
} from 'lucide-react';

export interface BookModule {
  id: string;
  vol?: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  category: 'monographs' | 'services';
  icon: LucideIcon;
  badge?: string;
  accentColor: string;
  spineColor: string;
}

export const BOOK_MODULE_CATEGORIES = [
  { id: 'monographs', title: 'Kệ Sách Chuyên Khảo Y Khoa', description: 'Các cuốn sách chuyên luận & phác đồ lâm sàng chuẩn ACOG / FIGO / ESMO' },
  { id: 'services', title: 'Dịch Vụ & Tra Cứu Y Tế', description: 'Tập Q&A thắc mắc & Danh bạ bác sĩ chuyên khoa' },
];

export const BOOK_MODULES: BookModule[] = [
  {
    id: 'vision_myopia',
    vol: 'Tập I',
    title: 'Thị Lực Học Đường & Cận Thị Tiến Triển',
    shortTitle: 'Thị Lực Học Đường',
    subtitle: 'Nghiên cứu khúc xạ, trục nhãn cầu & 4 công nghệ tròng Defocus',
    category: 'monographs',
    icon: Eye,
    badge: 'Sách 01',
    accentColor: 'from-cyan-500 to-blue-600',
    spineColor: 'bg-cyan-600'
  },
  {
    id: 'monograph',
    vol: 'Tập II',
    title: 'Phụ Khoa & Bảo Vệ Nội Mạc Tử Cung',
    shortTitle: 'Nội Mạc Tử Cung',
    subtitle: 'Nghiên cứu mô học, nghịch lý Tamoxifen 5 năm & rủi ro EIN',
    category: 'monographs',
    icon: Stethoscope,
    badge: 'Sách 02',
    accentColor: 'from-teal-500 to-emerald-600',
    spineColor: 'bg-teal-600'
  },
  {
    id: 'breast_cancer',
    vol: 'Tập III',
    title: 'Chuyên Khảo Ung Thư Vú (K Vú)',
    shortTitle: 'Ung Thư Vú',
    subtitle: 'Chẩn đoán phân tử, liệu pháp nội tiết, CDK4/6i & sống còn 10 năm',
    category: 'monographs',
    icon: Ribbon,
    badge: 'Sách 03',
    accentColor: 'from-rose-500 to-pink-600',
    spineColor: 'bg-rose-600'
  },
  {
    id: 'chronic_back_pain',
    vol: 'Tập IV',
    title: 'Đau Lưng Kinh Niên & Thoát Vị Đĩa Đệm',
    shortTitle: 'Đau Lưng Kinh Niên',
    subtitle: 'Cơ chế thần kinh bì, tương quan tử cung & bộ 3 McGill Big 3',
    category: 'monographs',
    icon: Activity,
    badge: 'Sách 04',
    accentColor: 'from-indigo-500 to-purple-600',
    spineColor: 'bg-indigo-600'
  },
  {
    id: 'cervical_spine',
    vol: 'Tập V',
    title: 'Chuyên Khảo Phẫu Thuật Cột Sống Cổ ACDF',
    shortTitle: 'Cột Sống Cổ ACDF',
    subtitle: 'Chèn ép tủy CSM, mổ lối trước nếp cổ 3cm & ma trận 4 bệnh nền',
    category: 'monographs',
    icon: Bone,
    badge: 'Sách 05',
    accentColor: 'from-amber-500 to-orange-600',
    spineColor: 'bg-amber-600'
  },
  {
    id: 'ankle_trauma',
    vol: 'Tập VI',
    title: 'Chấn Thương Mắt Cá Chân & Phục Hồi',
    shortTitle: 'Mắt Cá Chân',
    subtitle: 'Phân loại Danis-Weber, mổ nẹp khóa ORIF & thang tỳ đè 4 giai đoạn',
    category: 'monographs',
    icon: Footprints,
    badge: 'Sách 06',
    accentColor: 'from-rose-600 to-red-700',
    spineColor: 'bg-red-600'
  },
  {
    id: 'qa',
    vol: 'Chuyên Đề',
    title: 'Hỏi Đáp Y Khoa Trực Tuyến (Q&A 68 Câu)',
    shortTitle: 'Hỏi Đáp Q&A',
    subtitle: 'Tập câu hỏi chuyên gia biên soạn giải đáp thắc mắc cho gia đình',
    category: 'services',
    icon: HelpCircle,
    accentColor: 'from-amber-400 to-amber-600',
    spineColor: 'bg-amber-500'
  },
  {
    id: 'doctors',
    vol: 'Danh Bạ',
    title: 'Danh Bạ 30 Bác Sĩ & Chuyên Gia Đầu Ngành',
    shortTitle: 'Danh Bạ Bác Sĩ',
    subtitle: 'Danh sách PGS.TS.BS chuyên khoa tuyến cuối TP.HCM & lịch khám',
    category: 'services',
    icon: UserCheck,
    accentColor: 'from-purple-500 to-indigo-600',
    spineColor: 'bg-purple-600'
  }
];
