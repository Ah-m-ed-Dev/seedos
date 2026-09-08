'use client';

export default function HealthMetrics() {
  return (
    <section className="flex flex-col bg-surface-container-lowest p-md rounded-xl shadow-sm gap-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-xs">
          <div className="w-8 h-8 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[18px]">analytics</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-surface">مؤشر صحة العمليات</span>
            <span className="font-body-sm text-body-sm text-outline">تقييم الربع الحالي</span>
          </div>
        </div>
        <span className="bg-surface-container text-primary font-label-md text-label-md px-xs py-0.5 rounded-full">ممتاز</span>
      </div>
      <div className="grid grid-cols-2 gap-sm pt-xs">
        <div className="flex items-center gap-sm bg-surface p-sm rounded-xl">
          <div className="relative w-12 h-12 shrink-0 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
              <path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="91, 100" strokeLinecap="round" strokeWidth="3.5"></path>
            </svg>
            <span className="absolute font-label-sm text-label-sm text-on-surface">91%</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-md text-label-md text-on-surface">كفاءة الأداء</span>
            <span className="font-body-sm text-body-sm text-outline">التزام بالجداول</span>
          </div>
        </div>
        <div className="flex items-center gap-sm bg-surface p-sm rounded-xl">
          <div className="w-12 h-12 rounded-full bg-surface-container-high flex flex-col items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2xs">
              <span className="font-headline-sm text-headline-sm text-on-surface leading-none">4.9</span>
              <span className="text-outline text-body-sm">/ 5</span>
            </div>
            <span className="font-body-sm text-body-sm text-outline">رضا العملاء</span>
          </div>
        </div>
      </div>
    </section>
  );
}