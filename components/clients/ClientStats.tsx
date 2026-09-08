'use client';

export default function ClientStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-sm md:gap-md">
      {/* Stat 1 */}
      <div className="flex flex-col justify-between p-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <span className="font-label-md text-label-md text-on-surface-variant">إجمالي محفظة العملاء</span>
          <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[22px]">corporate_fare</span>
          </div>
        </div>
        <div className="my-sm flex items-baseline gap-xs">
          <span className="font-numeric-stat text-numeric-stat text-on-surface">3</span>
          <span className="font-label-md text-label-md text-on-surface-variant">شريك تجاري</span>
        </div>
        <div className="flex items-center justify-between pt-xs">
          <div className="flex items-center gap-2xs px-xs py-2xs rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[14px]">trending_up</span>
            <span>+2 هذا الشهر</span>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">معدل نمو 66%</span>
        </div>
      </div>

      {/* Stat 2 */}
      <div className="flex flex-col justify-between p-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <span className="font-label-md text-label-md text-on-surface-variant">عملاء نشطون حالياً</span>
          <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-[22px]">hub</span>
          </div>
        </div>
        <div className="my-sm flex items-baseline gap-xs">
          <span className="font-numeric-stat text-numeric-stat text-on-surface">3</span>
          <span className="font-label-md text-label-md text-on-surface-variant">حساب قيد التنفيذ</span>
        </div>
        <div className="flex items-center justify-between pt-xs">
          <div className="flex items-center gap-2xs px-xs py-2xs rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[14px]">bolt</span>
            <span>100% نسبة التفاعل</span>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">5 مشاريع جاري</span>
        </div>
      </div>

      {/* Stat 3 */}
      <div className="flex flex-col justify-between p-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <span className="font-label-md text-label-md text-on-surface-variant">القيمة العمرية (LTV)</span>
          <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container">
            <span className="material-symbols-outlined text-[22px]">payments</span>
          </div>
        </div>
        <div className="my-sm flex items-baseline gap-xs">
          <span className="font-numeric-stat text-numeric-stat text-on-surface">$124,200</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">USD</span>
        </div>
        <div className="flex items-center justify-between pt-xs">
          <div className="flex items-center gap-2xs px-xs py-2xs rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
            <span>+18% نمو ربع سنوي</span>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">متوسط: $41,400/عميل</span>
        </div>
      </div>

      {/* Stat 4 */}
      <div className="flex flex-col justify-between p-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <span className="font-label-md text-label-md text-on-surface-variant">رضا العملاء والولاء</span>
          <div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
            <span className="material-symbols-outlined text-[22px]">verified</span>
          </div>
        </div>
        <div className="my-sm flex items-baseline gap-xs">
          <span className="font-numeric-stat text-numeric-stat text-on-surface">96%</span>
          <span className="font-label-md text-label-md text-on-surface-variant">معدل استبقاء</span>
        </div>
        <div className="flex items-center justify-between pt-xs">
          <div className="flex items-center gap-2xs px-xs py-2xs rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[14px]">star</span>
            <span>4.9 / 5 تقييم</span>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">بناءً على 12 مراجعة</span>
        </div>
      </div>
    </div>
  );
}