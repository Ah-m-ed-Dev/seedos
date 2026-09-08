'use client';

export default function OperationsHealth() {
  return (
    <div className="rounded-full bg-surface-container-lowest shadow-sm p-xl flex flex-col gap-lg">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="font-headline-sm text-headline-sm text-on-surface">صحة العمليات هذا الأسبوع</h3>
          <span className="font-body-sm text-body-sm text-on-surface-variant">مؤشرات الجودة والالتزام للوكالة</span>
        </div>
        <span className="material-symbols-outlined text-primary text-[24px]">verified</span>
      </div>
      
      <div className="flex items-center justify-center p-md bg-surface-container-low rounded-xl">
        <div className="relative flex items-center justify-center">
          <svg className="w-36 h-36 -rotate-90" viewBox="0 0 120 120">
            <circle className="text-surface-container stroke-current" cx="60" cy="60" fill="none" r="50" strokeWidth="10"></circle>
            <circle className="text-primary stroke-current" cx="60" cy="60" fill="none" r="50" strokeDasharray="314.159" strokeDashoffset="28" strokeLinecap="round" strokeWidth="10"></circle>
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <span className="font-numeric-stat text-[26px] leading-tight text-on-surface font-bold">91%</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">المعدل العام</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-md divide-y divide-transparent">
        <div className="flex items-center justify-between pt-xs">
          <div className="flex items-center gap-xs">
            <span className="w-3 h-3 rounded-full bg-primary"></span>
            <span className="font-label-md text-label-md text-on-surface">كفاءة سرعة الرد</span>
          </div>
          <div className="flex items-center gap-xs">
            <span className="font-headline-sm text-headline-sm text-on-surface">88%</span>
            <span className="text-label-sm font-label-sm text-primary">ممتاز</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-xs">
          <div className="flex items-center gap-xs">
            <span className="w-3 h-3 rounded-full bg-secondary"></span>
            <span className="font-label-md text-label-md text-on-surface">التسليم في الموعد</span>
          </div>
          <div className="flex items-center gap-xs">
            <span className="font-headline-sm text-headline-sm text-on-surface">91%</span>
            <span className="text-label-sm font-label-sm text-secondary">+4%</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-xs">
          <div className="flex items-center gap-xs">
            <span className="w-3 h-3 rounded-full bg-tertiary"></span>
            <span className="font-label-md text-label-md text-on-surface">رضا العملاء (NPS)</span>
          </div>
          <div className="flex items-center gap-xs">
            <span className="font-headline-sm text-headline-sm text-on-surface">4.9/5</span>
            <div className="flex text-amber-500">
              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-sm">
        <button className="w-full flex items-center justify-center gap-xs px-md py-xs rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors font-label-md text-label-md" type="button">
          <span className="material-symbols-outlined text-[18px]">add_task</span>
          <span>تسجيل تنبيه جديد أو مهمة سريعة</span>
        </button>
      </div>
    </div>
  );
}