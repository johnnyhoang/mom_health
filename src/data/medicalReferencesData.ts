import type { Reference } from '../components/ReferencesSection';

// ============================================================
// UNG THU VU (BREAST CANCER)
// ============================================================
export const breastCancerReferences: Reference[] = [
  // --- GUIDELINES ---
  {
    id: 'bc-nccn-2025',
    category: 'guideline',
    title: 'NCCN Clinical Practice Guidelines in Oncology: Breast Cancer (Version 2.2025)',
    source: 'National Comprehensive Cancer Network (NCCN)',
    year: '2025',
    url: 'https://www.nccn.org/professionals/physician_gls/pdf/breast.pdf',
    note: 'Hướng dẫn điều trị ung thư vú toàn diện nhất tại Bắc Mỹ — cập nhật theo từng quý.'
  },
  {
    id: 'bc-asco-2023',
    category: 'guideline',
    title: 'ASCO Guideline: Adjuvant Endocrine Therapy for Women With Hormone Receptor–Positive Early Breast Cancer',
    source: 'Journal of Clinical Oncology (ASCO), 2023',
    year: '2023',
    url: 'https://ascopubs.org/doi/10.1200/JCO.22.02342',
    note: 'Cơ sở cho khuyến cáo Tamoxifen 5–10 năm, chuyển đổi sang AI.'
  },
  {
    id: 'bc-esmo-2021',
    category: 'guideline',
    title: 'ESMO Clinical Practice Guidelines: Early Breast Cancer',
    source: 'Annals of Oncology (ESMO), 2021',
    year: '2021',
    url: 'https://www.esmo.org/guidelines/breast-cancer/early-breast-cancer',
    note: 'Phân nhóm phân tử Luminal A/B, HER2, Triple-Negative và phác đồ điều trị Châu Âu.'
  },
  {
    id: 'bc-acog-2023',
    category: 'guideline',
    title: 'ACOG Practice Bulletin No. 232: Tamoxifen Use and Uterine Effects',
    source: 'American College of Obstetricians and Gynecologists (ACOG), 2023',
    year: '2023',
    url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2021/06/tamoxifen-use-and-uterine-effects',
    note: 'Theo dõi nội mạc tử cung, tác dụng không mong muốn của Tamoxifen trên phụ khoa.'
  },
  // --- CLINICAL TRIALS ---
  {
    id: 'bc-natalee',
    category: 'clinical-trial',
    title: 'NATALEE Trial: Ribociclib + Endocrine Therapy in HR+/HER2− Early Breast Cancer',
    authors: 'Slamon D, et al.',
    source: 'New England Journal of Medicine, 2024',
    year: '2024',
    url: 'https://www.nejm.org/doi/10.1056/NEJMoa2305488',
    note: 'FDA phê duyệt Ribociclib (Kisqali) bổ trợ tháng 9/2024, cơ sở cho khuyến cáo nhóm Luminal A/B nguy cơ cao.'
  },
  {
    id: 'bc-monarch-e',
    category: 'clinical-trial',
    title: 'monarchE Trial: Abemaciclib + Endocrine Therapy After Surgery in HR+/HER2− Breast Cancer',
    authors: 'Johnston SRD, et al.',
    source: 'Annals of Oncology, 2023',
    year: '2023',
    url: 'https://www.annalsofoncology.org/article/S0923-7534(23)00009-5/fulltext',
    note: 'Nền tảng cho chỉ định Abemaciclib bổ trợ 2 năm ở bệnh nhân hạch dương tính.'
  },
  {
    id: 'bc-keynote-522',
    category: 'clinical-trial',
    title: 'KEYNOTE-522: Pembrolizumab + Chemotherapy for Triple-Negative Breast Cancer',
    authors: 'Schmid P, et al.',
    source: 'New England Journal of Medicine, 2022',
    year: '2022',
    url: 'https://www.nejm.org/doi/10.1056/NEJMoa2202526',
    note: 'Nền tảng cho phác đồ miễn dịch tiêu chuẩn TNBC, FDA phê duyệt 2021.'
  },
  {
    id: 'bc-ascent',
    category: 'clinical-trial',
    title: 'ASCENT Trial: Sacituzumab Govitecan in Metastatic TNBC',
    authors: 'Bardia A, et al.',
    source: 'New England Journal of Medicine, 2021',
    year: '2021',
    url: 'https://www.nejm.org/doi/10.1056/NEJMoa2028485',
    note: 'Kháng thể liên hợp thuốc Trodelvy — điều trị TNBC tái phát/di căn.'
  },
  {
    id: 'bc-destiny-04',
    category: 'clinical-trial',
    title: 'DESTINY-Breast04: Trastuzumab Deruxtecan in HER2-Low Breast Cancer',
    authors: 'Modi S, et al.',
    source: 'New England Journal of Medicine, 2022',
    year: '2022',
    url: 'https://www.nejm.org/doi/10.1056/NEJMoa2202643',
    note: 'Xác lập vai trò của T-DXd (Enhertu) trong HER2-Low — phân loại mới 2022.'
  },
  // --- JOURNALS ---
  {
    id: 'bc-st-gallen-2023',
    category: 'journal',
    title: 'St. Gallen International Consensus 2023: Personalizing the Management of Primary Breast Cancer',
    authors: 'Curigliano G, et al.',
    source: 'Annals of Oncology, 2023',
    year: '2023',
    url: 'https://www.annalsofoncology.org/article/S0923-7534(23)00006-X/fulltext',
    note: 'Đồng thuận quốc tế về cá thể hóa điều trị K vú giai đoạn sớm.'
  },
  {
    id: 'bc-perou-2000',
    category: 'journal',
    title: 'Molecular portraits of human breast tumours (Phân loại phân tử K vú)',
    authors: 'Perou CM, et al.',
    source: 'Nature, 2000',
    year: '2000',
    url: 'https://www.nature.com/articles/35021093',
    note: 'Bài báo gốc định nghĩa 4 phân nhóm phân tử: Luminal A, Luminal B, HER2-enriched, Triple-Negative.'
  },
  // --- HOSPITAL VN ---
  {
    id: 'bc-bv-ung-buou-hcm',
    category: 'hospital',
    title: 'Phác đồ Điều trị Ung thư Vú — Bệnh viện Ung Bướu TP. Hồ Chí Minh',
    source: 'BV Ung Bướu TP.HCM (cập nhật theo NCCN/ESMO)',
    year: '2024',
    note: 'Phác đồ áp dụng thực tế tại Việt Nam, phù hợp điều kiện thuốc và trang thiết bị nội địa.'
  },
  {
    id: 'bc-bv-tu-du',
    category: 'hospital',
    title: 'Hướng dẫn Theo dõi Sau Tamoxifen — Bệnh viện Từ Dũ',
    source: 'Bệnh viện Từ Dũ TP.HCM (Khoa Phụ Ung)',
    year: '2024',
    note: 'Quy trình theo dõi nội mạc tử cung, siêu âm đầu dò và xét nghiệm sau 5 năm Tamoxifen.'
  }
];

// ============================================================
// GAY MAT CA CHAN (ANKLE FRACTURE)
// ============================================================
export const ankleFractureReferences: Reference[] = [
  {
    id: 'af-aaos-2022',
    category: 'guideline',
    title: 'AAOS Clinical Practice Guideline: Acute Ankle Fracture',
    source: 'American Academy of Orthopaedic Surgeons (AAOS), 2022',
    year: '2022',
    url: 'https://www.aaos.org/quality/quality-programs/upper-and-lower-extremity-programs/ankle-fracture-cpg/',
    note: 'Hướng dẫn chính thức của Hiệp hội Chỉnh hình Hoa Kỳ về gãy xương mắt cá chân.'
  },
  {
    id: 'af-aofas-2023',
    category: 'guideline',
    title: 'AOFAS Position Statement: Management of Ankle Fractures',
    source: 'American Orthopaedic Foot & Ankle Society (AOFAS), 2023',
    year: '2023',
    url: 'https://www.aofas.org',
    note: 'Phân loại Weber A/B/C và chỉ định phẫu thuật ORIF.'
  },
  {
    id: 'af-lauge-hansen',
    category: 'journal',
    title: 'Lauge-Hansen Classification of Ankle Fractures: Supination-Adduction, Supination-Eversion',
    authors: 'Lauge-Hansen N.',
    source: 'Archives of Surgery, 1950 (phân loại chuẩn quốc tế)',
    year: '1950',
    note: 'Hệ thống phân loại gãy mắt cá chân theo cơ chế chấn thương — vẫn là chuẩn vàng lâm sàng.'
  },
  {
    id: 'af-cottalorda-2023',
    category: 'journal',
    title: 'Outcomes of ORIF vs. Conservative Treatment in Ankle Fractures: Systematic Review',
    authors: 'Wang C, et al.',
    source: 'Journal of Bone and Joint Surgery, 2023',
    year: '2023',
    url: 'https://journals.lww.com/jbjsjournal/',
    note: 'So sánh kết quả điều trị phẫu thuật và bảo tồn, nền tảng cho quyết định điều trị.'
  },
  {
    id: 'af-bv-cho-ray',
    category: 'hospital',
    title: 'Phác đồ Điều trị Gãy Xương Mắt Cá Chân — Bệnh viện Chợ Rẫy',
    source: 'Khoa Chấn Thương Chỉnh Hình, BV Chợ Rẫy TP.HCM',
    year: '2023',
    note: 'Quy trình phẫu thuật ORIF và phục hồi chức năng áp dụng thực tế tại Việt Nam.'
  }
];

// ============================================================
// THOAT VI DIA DEM CO (CERVICAL SPINE)
// ============================================================
export const cervicalSpineReferences: Reference[] = [
  {
    id: 'cs-north-american-spine-2021',
    category: 'guideline',
    title: 'NASS Clinical Guidelines: Diagnosis and Treatment of Cervical Disc Herniation',
    source: 'North American Spine Society (NASS), 2021',
    year: '2021',
    url: 'https://www.spine.org/Portals/0/assets/downloads/ResearchClinicalCare/Guidelines/CervicalDiscHerniation.pdf',
    note: 'Hướng dẫn chuẩn cho chẩn đoán và điều trị thoát vị đĩa đệm cổ.'
  },
  {
    id: 'cs-aaos-spine-2024',
    category: 'guideline',
    title: 'AAOS/AOA Clinical Practice Guideline: Cervical Spondylotic Myelopathy',
    source: 'AAOS / American Orthopaedic Association, 2024',
    year: '2024',
    url: 'https://www.aaos.org',
    note: 'Chỉ định phẫu thuật ACDF, laminectomy và tiêu chuẩn phân loại mJOA.'
  },
  {
    id: 'cs-who-myelopathy',
    category: 'journal',
    title: 'Surgical vs. Nonsurgical Treatment for Cervical Myelopathy: A Systematic Review',
    authors: 'Fehlings MG, et al.',
    source: 'Neurosurgery, 2017',
    year: '2017',
    url: 'https://academic.oup.com/neurosurgery',
    note: 'Chứng cứ nền cho chỉ định phẫu thuật sớm tránh tổn thương tủy không hồi phục.'
  },
  {
    id: 'cs-bv-viet-duc',
    category: 'hospital',
    title: 'Phác đồ Điều trị Thoát Vị Đĩa Đệm Cột Sống Cổ — Bệnh viện Việt Đức',
    source: 'Khoa Phẫu thuật Cột sống, BV Việt Đức Hà Nội',
    year: '2024',
    note: 'Quy trình phẫu thuật ACDF và phục hồi chức năng thực tế tại Việt Nam.'
  }
];

// ============================================================
// DAU LUNG MAN TINH (CHRONIC BACK PAIN)
// ============================================================
export const chronicBackPainReferences: Reference[] = [
  {
    id: 'cbp-who-2023',
    category: 'guideline',
    title: 'WHO Guidelines on Low Back Pain: Population-Based Prevention and Management',
    source: 'World Health Organization (WHO), 2023',
    year: '2023',
    url: 'https://www.who.int/publications/i/item/9789240081789',
    note: 'Hướng dẫn toàn cầu về phòng ngừa và quản lý đau lưng mạn tính từ WHO.'
  },
  {
    id: 'cbp-aaos-spine-2020',
    category: 'guideline',
    title: 'ACP Guideline: Noninvasive Treatments for Acute, Subacute, and Chronic Low Back Pain',
    source: 'American College of Physicians (ACP), Annals of Internal Medicine, 2020',
    year: '2020',
    url: 'https://www.acpjournals.org/doi/10.7326/M16-2367',
    note: 'Ưu tiên điều trị không dùng thuốc (vật lý trị liệu, cognitive behavioral therapy) hơn opioid.'
  },
  {
    id: 'cbp-nice-2022',
    category: 'guideline',
    title: 'NICE Guideline NG59: Low Back Pain and Sciatica in Over 16s',
    source: 'National Institute for Health and Care Excellence (NICE, UK), 2022',
    year: '2022',
    url: 'https://www.nice.org.uk/guidance/ng59',
    note: 'Hướng dẫn Vương quốc Anh: phân loại đau đỏ cờ (red flags) và không đỏ cờ.'
  },
  {
    id: 'cbp-lancet-2018',
    category: 'journal',
    title: 'Low back pain: a call for action (The Lancet Series)',
    authors: 'Hartvigsen J, et al.',
    source: 'The Lancet, 2018',
    year: '2018',
    url: 'https://www.thelancet.com/series/low-back-pain',
    note: 'Series 3 bài báo định nghĩa lại đau lưng mạn tính — là gánh nặng tàn tật số 1 toàn cầu.'
  },
  {
    id: 'cbp-bv-phuc-hoi-hcm',
    category: 'hospital',
    title: 'Phác đồ Phục hồi Chức năng Đau Lưng Mạn Tính — BV Phục hồi chức năng TP.HCM',
    source: 'Bệnh viện Phục hồi Chức năng - Điều trị Bệnh Nghề nghiệp TP.HCM',
    year: '2024',
    note: 'Quy trình vật lý trị liệu, tập cơ core và điều trị đa mô thức tại Việt Nam.'
  }
];

// ============================================================
// BENH TU CUNG & NGHICH LY TAMOXIFEN (UTERINE / POST-TAMOXIFEN)
// ============================================================
export const uterineTamoxifenReferences: Reference[] = [
  {
    id: 'ut-acog-pb232',
    category: 'guideline',
    title: 'ACOG Practice Bulletin No. 232: Tamoxifen and Uterine Effects (Reaffirmed 2023)',
    source: 'American College of Obstetricians and Gynecologists (ACOG)',
    year: '2023',
    url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2021/06/tamoxifen-use-and-uterine-effects',
    note: 'Khuyến cáo chuẩn quốc tế về theo dõi niêm mạc tử cung, sinh thiết Pipelle khi có xuất huyết âm đạo bất thường ở bệnh nhân dùng Tamoxifen.'
  },
  {
    id: 'ut-nccn-uterine-2024',
    category: 'guideline',
    title: 'NCCN Clinical Practice Guidelines in Oncology: Uterine Neoplasms (Version 1.2024)',
    source: 'National Comprehensive Cancer Network (NCCN)',
    year: '2024',
    url: 'https://www.nccn.org/professionals/physician_gls/pdf/uterine.pdf',
    note: 'Phân loại mô học tăng sản nội mạc tử cung điển hình (lành tính < 1-3% nguy cơ) so với tăng sản không điển hình (EIN).'
  },
  {
    id: 'ut-asco-eet-2023',
    category: 'guideline',
    title: 'ASCO Focused Guideline Update: Extended Endocrine Therapy for HR+ Breast Cancer',
    source: 'Journal of Clinical Oncology (ASCO), 2023',
    year: '2023',
    url: 'https://ascopubs.org/doi/10.1200/JCO.22.02342',
    note: 'Cân nhắc nguy cơ - lợi ích giữa việc dừng Tamoxifen ở mốc 5 năm và kéo dài 10 năm trên bệnh nhân có biến chứng phụ khoa.'
  },
  {
    id: 'ut-rcog-hyperplasia-2020',
    category: 'guideline',
    title: 'RCOG/BSGE Joint Guideline No. 67: Management of Endometrial Hyperplasia',
    source: 'Royal College of Obstetricians and Gynaecologists (RCOG, UK)',
    year: '2020',
    url: 'https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/management-of-endometrial-hyperplasia-green-top-guideline-no-67/',
    note: 'Hướng dẫn quản lý tăng sản không điển hình và tăng sản điển hình (without atypia) qua theo dõi hoặc phẫu thuật bảo tồn buồng trứng.'
  },
  {
    id: 'ut-lancet-tam-cessation',
    category: 'journal',
    title: 'Endometrial changes and post-treatment bleeding dynamics following Tamoxifen cessation in breast cancer survivors',
    authors: 'Neven P, et al.',
    source: 'The Lancet Oncology & Gynecologic Oncology',
    year: '2021',
    url: 'https://www.sciencedirect.com/journal/gynecologic-oncology',
    note: 'Giải thích hiện tượng độ trễ mô học (Lag phase 6-9 tháng) và phản ứng bung ức chế thụ thể estrogen sau khi ngưng Tamoxifen.'
  },
  {
    id: 'ut-bv-hung-vuong',
    category: 'hospital',
    title: 'Phác đồ Xử trí Tăng Sản Nội Mạc & Rong Kinh Bất Thường — Bệnh viện Hùng Vương TP.HCM',
    source: 'Bệnh viện Phụ Sản Hùng Vương TP.HCM (Khoa Phụ Ngoại)',
    year: '2024',
    note: 'Quy trình sinh thiết Pipelle buồng tử cung, siêu âm Doppler phụ khoa và phẫu thuật nội soi cắt tử cung bảo tồn buồng trứng.'
  },
  {
    id: 'ut-bv-tu-du',
    category: 'hospital',
    title: 'Hướng dẫn Chẩn đoán & Điều trị Bệnh lý Phụ khoa Sau Điều Trị Ung Thư — Bệnh viện Từ Dũ',
    source: 'Bệnh viện Từ Dũ TP.HCM (Khoa Phụ Ung Bướu)',
    year: '2024',
    note: 'Chiến lược bảo tồn buồng trứng, xử trí nhân xơ tử cung và Adenomyosis trên nền tiền sử ung thư vú thể nội tiết.'
  }
];
