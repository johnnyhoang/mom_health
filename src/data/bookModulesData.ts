import { 
  Eye, 
  Stethoscope, 
  Ribbon, 
  Activity, 
  Bone, 
  Footprints, 
  Calendar, 
  HelpCircle, 
  UserCheck,
  type LucideIcon
} from 'lucide-react';

export interface BookModule {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  category: 'monographs' | 'tools' | 'services';
  icon: LucideIcon;
  badge?: string;
  accentColor: string;
}

export const BOOK_MODULE_CATEGORIES = [
  { id: 'monographs', title: 'Tủ Sách Chuyên Khảo Y Khoa', description: 'Chuyên luận & Phác đồ Lâm sàng chuẩn ACOG / FIGO / ESHRE' },
  { id: 'tools', title: 'Công Cụ Theo Dõi & Nhật Ký', description: 'Ứng dụng hỗ trợ bệnh nhân & theo dõi các chỉ số sinh học' },
  { id: 'services', title: 'Hỏi Đáp & Danh Bạ Bác Sĩ', description: 'Kết nối chuyên gia y tế & giải đáp thắc mắc' },
];

export const BOOK_MODULES: BookModule[] = [
  {
    id: 'vision_myopia',
    title: 'Tựa Sách 01: Thị Lực Học Đường & Cận Thị',
    shortTitle: 'Thị Lực Học Đường',
    subtitle: 'Kiểm soát cận thị tiến triển ở trẻ em & học sinh',
    category: 'monographs',
    icon: Eye,
    badge: 'Mới 2026',
    accentColor: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'monograph',
    title: 'Tựa Sách 02: Phụ Khoa & Nội Mạc Tử Cung',
    shortTitle: 'Nội Mạc Tử Cung',
    subtitle: 'Nghiên cứu mô học, tăng sản & ung thư nội mạc',
    category: 'monographs',
    icon: Stethoscope,
    badge: 'Chuyên Khảo',
    accentColor: 'from-teal-500 to-emerald-600'
  },
  {
    id: 'breast_cancer',
    title: 'Tựa Sách 03: Chuyên Khảo Ung Thư Vú (K Vú)',
    shortTitle: 'Ung Thư Vú',
    subtitle: 'Chẩn đoán, hóa trị, liệu pháp nội tiết & sống còn',
    category: 'monographs',
    icon: Ribbon,
    badge: 'Cập nhật',
    accentColor: 'from-rose-500 to-pink-600'
  },
  {
    id: 'chronic_back_pain',
    title: 'Tựa Sách 04: Đau Lưng Kinh Niên & Đĩa Đệm',
    shortTitle: 'Đau Lưng Kinh Niên',
    subtitle: 'Thoát vị đĩa đệm, đau thần kinh tọa & phục hồi',
    category: 'monographs',
    icon: Activity,
    accentColor: 'from-indigo-500 to-purple-600'
  },
  {
    id: 'cervical_spine',
    title: 'Tựa Sách 05: Chuyên Khảo Cột Sống Cổ ACDF',
    shortTitle: 'Cột Sống Cổ ACDF',
    subtitle: 'Phẫu thuật hàn xương liên thân đốt & bảo tồn',
    category: 'monographs',
    icon: Bone,
    accentColor: 'from-amber-500 to-orange-600'
  },
  {
    id: 'ankle_trauma',
    title: 'Tựa Sách 06: Chấn Thương Mắt Cá Chân',
    shortTitle: 'Mắt Cá Chân',
    subtitle: 'Gãy xương mắt cá, dây chằng & tập vật lý trị liệu',
    category: 'monographs',
    icon: Footprints,
    accentColor: 'from-rose-500 to-red-600'
  },
  {
    id: 'cycle_tracker',
    title: 'Công Cụ 01: Theo Dõi Chu Kỳ Kinh Nguyệt',
    shortTitle: 'Theo Dõi Chu Kỳ',
    subtitle: 'Nhật ký triệu chứng, xuất huyết & nhắc lịch khám',
    category: 'tools',
    icon: Calendar,
    badge: 'Ứng Dụng',
    accentColor: 'from-rose-500 to-teal-500'
  },
  {
    id: 'qa',
    title: 'Hỏi Đáp Y Khoa Trực Tuyến (Q&A)',
    shortTitle: 'Hỏi Đáp Q&A',
    subtitle: 'Tổng hợp thắc mắc thường gặp & lời khuyên bác sĩ',
    category: 'services',
    icon: HelpCircle,
    accentColor: 'from-amber-400 to-amber-600'
  },
  {
    id: 'doctors',
    title: 'Danh Bạ Bác Sĩ & Chuyên Gia',
    shortTitle: 'Danh Bạ Bác Sĩ',
    subtitle: 'Danh sách bác sĩ chuyên khoa & cơ sở y tế uy tín',
    category: 'services',
    icon: UserCheck,
    accentColor: 'from-purple-500 to-indigo-600'
  }
];
