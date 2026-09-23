import React from 'react';
import {
  year5to10Checklist,
  nutritionGuidelines,
  lifestyleGuidelines,
  warningSignsYear5to10,
} from '../data/breastCancerYear5to10Data';
import type {
  Year5To10CheckItem,
  NutritionGuideline,
  LifestyleGuideline,
  WarningSigns,
} from '../data/breastCancerYear5to10Data';

const urgencyConfig = {
  critical: { label: 'Bắt buộc' },
  important: { label: 'Quan trọng' },
  routine: { label: 'Thường quy' },
};

const nutritionCategoryConfig = {
  encourage: { label: 'Nên ăn nhiều' },
  limit: { label: 'Hạn chế' },
  avoid: { label: 'Tuyệt đối tránh' },
  supplement: { label: 'Bổ sung có chỉ định' },
};

const lifestyleCategoryConfig: Record<LifestyleGuideline['category'], { label: string }> = {
  exercise: { label: 'Vận động' },
  sleep: { label: 'Giấc ngủ' },
  stress: { label: 'Quản lý stress' },
  environment: { label: 'Môi trường' },
  sexual_health: { label: 'Sức khỏe tình dục' },
  work: { label: 'Công việc' },
};

const groupByCategory = (items: Year5To10CheckItem[]) => {
  const groups: Record<string, Year5To10CheckItem[]> = {};
  items.forEach((item) => {
    if (!groups[item.category]) groups[item.category] = [];
    groups[item.category].push(item);
  });
  return groups;
};

const groupNutritionByCategory = (items: NutritionGuideline[]) => {
  const groups: Record<NutritionGuideline['category'], NutritionGuideline[]> = {
    encourage: [], limit: [], avoid: [], supplement: [],
  };
  items.forEach((item) => { groups[item.category].push(item); });
  return groups;
};

const ChecklistItem: React.FC<{ item: Year5To10CheckItem; indexStr: string }> = ({ item, indexStr }) => {
  const cfg = urgencyConfig[item.urgency];
  return (
    <article className="py-3.5 px-4 rounded-lg border-l-2 border-slate-700 bg-slate-900/10 space-y-2">
      <div className="flex items-start justify-between gap-2 flex-wrap text-xs">
        <h4 className="font-bold text-slate-200 text-sm leading-snug">
          {indexStr}. {item.title}
        </h4>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
          <span>{cfg.label}</span>
          {item.luminalASpecific && (
            <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              Luminal A
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
        <span>Thời điểm: {item.timing}</span>
        <span>•</span>
        <span>Chuyên khoa: {item.doctorSpecialty}</span>
      </div>

      <p className="text-base md:text-sm text-slate-300 leading-relaxed">{item.detail}</p>

      <p className="text-xs text-slate-400 pt-1 border-t border-slate-800/40">
        <strong className="text-slate-300">Vì sao quan trọng: </strong>
        {item.whyImportant}
      </p>
    </article>
  );
};

const NutritionItem: React.FC<{ item: NutritionGuideline; indexStr: string }> = ({ item, indexStr }) => {
  const cfg = nutritionCategoryConfig[item.category];
  return (
    <article className="py-3.5 px-4 rounded-lg border-l-2 border-slate-700 bg-slate-900/10 space-y-2">
      <div className="flex items-center gap-2 justify-between flex-wrap text-xs">
        <h4 className="font-bold text-slate-200 text-sm">{indexStr}. {item.food}</h4>
        <span className="text-slate-400 font-mono text-[11px]">{cfg.label}</span>
      </div>
      <p className="text-base md:text-sm text-slate-300 leading-relaxed">{item.reason}</p>
      <div className="text-xs text-slate-400 pt-1 border-t border-slate-800/40">
        <strong className="text-slate-300">Bằng chứng: </strong>{item.evidence}
        {item.note && <span className="text-slate-400 block pt-0.5">→ {item.note}</span>}
      </div>
    </article>
  );
};

const LifestyleItem: React.FC<{ item: LifestyleGuideline; indexStr: string }> = ({ item, indexStr }) => {
  const cfg = lifestyleCategoryConfig[item.category] ?? { label: item.category };
  return (
    <article className="py-3.5 px-4 rounded-lg border-l-2 border-slate-700 bg-slate-900/10 space-y-2">
      <div className="text-xs text-slate-400 font-mono text-[11px] uppercase">
        {cfg.label}
      </div>
      <h4 className="font-bold text-slate-200 text-sm leading-snug">{indexStr}. {item.title}</h4>
      <p className="text-base md:text-sm text-slate-300 leading-relaxed">{item.detail}</p>
      <p className="text-xs text-slate-400 pt-1 border-t border-slate-800/40">
        <strong className="text-slate-300">Bằng chứng ASCO: </strong>{item.evidence}
      </p>
    </article>
  );
};

const WarningItem: React.FC<{ item: WarningSigns; indexStr: string }> = ({ item, indexStr }) => {
  return (
    <article className="py-3.5 px-4 rounded-lg border-l-2 border-slate-700 bg-slate-900/10 space-y-2">
      <h4 className="font-bold text-slate-200 text-sm leading-snug">{indexStr}. {item.sign}</h4>
      <p className="text-base md:text-sm text-slate-300 leading-relaxed">
        <strong className="text-slate-300">Có thể là: </strong>{item.possibleMeaning}
      </p>
      <p className="text-xs text-slate-400 pt-1 border-t border-slate-800/40">
        <strong className="text-slate-300">Hành động cần làm: </strong>{item.action}
      </p>
    </article>
  );
};

export const BreastCancerYear5to10Section: React.FC = () => {
  const checklistGroups = groupByCategory(year5to10Checklist);
  const nutritionGroups = groupNutritionByCategory(nutritionGuidelines);

  let checkCounter = 1;
  let nutCounter = 1;
  let lifeCounter = 1;
  let warnCounter = 1;

  return (
    <section id="bc-chapter-7" className="w-full max-w-5xl sm:max-w-6xl mx-auto py-8 px-4 sm:px-6 space-y-8 border-t border-slate-900">
      {/* Header */}
      <div className="space-y-2">
        <div className="text-slate-400 font-mono text-xs font-medium uppercase tracking-wider">
          Chương 7 • Giai Đoạn Năm Thứ 5 – 10
        </div>
        <h2 className="text-lg sm:text-xl md:text-xl font-bold text-slate-100 tracking-tight">
          Hướng Dẫn Toàn Diện Cho Giai Đoạn Sau Hoàn Thành Điều Trị (Năm 5–10)
        </h2>
        <p className="text-base md:text-sm text-slate-300 leading-relaxed max-w-3xl">
          Sau khi hoàn thành 5 năm Tamoxifen (tháng 1/2026), đây là giai đoạn then chốt để theo dõi và ngăn ngừa tái phát muộn.
        </p>
      </div>

      {/* Late Relapse Notice */}
      <div className="py-3 px-4 rounded-lg border-l-2 border-slate-700 bg-slate-900/20 text-base md:text-sm text-slate-300 leading-relaxed space-y-1">
        <div className="text-slate-200 font-bold text-sm">
          Đặc điểm tái phát muộn (Late Relapse) của Luminal A
        </div>
        <p className="text-slate-300">
          Nghiên cứu EBCTCG 2023 cho thấy K vú thể Luminal A (HR+) có tỷ lệ tái phát duy trì khoảng 1–2%/năm kéo dài đến năm 15–20. Việc duy trì khám định kỳ là lá chắn bảo vệ an toàn nhất.
        </p>
      </div>

      {/* 7.1. Lịch khám định kỳ & Theo dõi y tế */}
      <div className="space-y-4 pt-2 border-t border-slate-800/40">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-200">
            7.1. Lịch khám định kỳ & Theo dõi y tế (Năm 5–10)
          </h3>
          <p className="text-xs text-slate-400">
            Các hạng mục xét nghiệm, chẩn đoán hình ảnh và khám chuyên khoa định kỳ.
          </p>
        </div>

        <div className="space-y-6">
          {Object.entries(checklistGroups).map(([category, items]) => (
            <div key={category} className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800/60 pb-1">
                {category}
              </h4>
              <div className="space-y-3">
                {items.map((item) => {
                  const idxStr = `7.1.${checkCounter++}`;
                  return <ChecklistItem key={item.id} item={item} indexStr={idxStr} />;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7.2. Hướng dẫn chế độ dinh dưỡng */}
      <div className="space-y-4 pt-4 border-t border-slate-800/40">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-200">
            7.2. Hướng dẫn chế độ dinh dưỡng cho người đã hoàn thành điều trị
          </h3>
          <p className="text-xs text-slate-400">
            Khuyến cáo về thực phẩm nên ăn, hạn chế và tuyệt đối tránh.
          </p>
        </div>

        <div className="space-y-6">
          {(Object.keys(nutritionCategoryConfig) as NutritionGuideline['category'][]).map((cat) => {
            const items = nutritionGroups[cat];
            if (!items || items.length === 0) return null;
            const cfg = nutritionCategoryConfig[cat];
            return (
              <div key={cat} className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800/60 pb-1">
                  {cfg.label}
                </h4>
                <div className="space-y-3">
                  {items.map((item) => {
                    const idxStr = `7.2.${nutCounter++}`;
                    return <NutritionItem key={item.id} item={item} indexStr={idxStr} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 7.3. Quản lý lối sống & Giấc ngủ */}
      <div className="space-y-4 pt-4 border-t border-slate-800/40">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-200">
            7.3. Quản lý lối sống, giấc ngủ & Tâm lý
          </h3>
          <p className="text-xs text-slate-400">
            Khuyến cáo từ hướng dẫn phục hồi sức khỏe ASCO Survivorship.
          </p>
        </div>

        <div className="space-y-3">
          {lifestyleGuidelines.map((item) => {
            const idxStr = `7.3.${lifeCounter++}`;
            return <LifestyleItem key={item.id} item={item} indexStr={idxStr} />;
          })}
        </div>
      </div>

      {/* 7.4. Dấu hiệu cảnh báo tái phát muộn & Hành động */}
      <div className="space-y-4 pt-4 border-t border-slate-800/40">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-200">
            7.4. Dấu hiệu cảnh báo tái phát muộn & Khuyến cáo hành động
          </h3>
          <p className="text-xs text-slate-400">
            Các triệu chứng cần theo dõi và mức độ xử lý y tế tương ứng.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800/60 pb-1">
              Cần đến gặp bác sĩ ngay (Khẩn cấp)
            </h4>
            {warningSignsYear5to10.filter((w) => w.urgency === 'go_now').map((w) => {
              const idxStr = `7.4.${warnCounter++}`;
              return <WarningItem key={w.id} item={w} indexStr={idxStr} />;
            })}
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800/60 pb-1">
              Liên hệ trong vòng 24 giờ
            </h4>
            {warningSignsYear5to10.filter((w) => w.urgency === '24h').map((w) => {
              const idxStr = `7.4.${warnCounter++}`;
              return <WarningItem key={w.id} item={w} indexStr={idxStr} />;
            })}
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800/60 pb-1">
              Thảo luận trong lần tái khám tiếp theo
            </h4>
            {warningSignsYear5to10.filter((w) => w.urgency === 'next_appointment').map((w) => {
              const idxStr = `7.4.${warnCounter++}`;
              return <WarningItem key={w.id} item={w} indexStr={idxStr} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
