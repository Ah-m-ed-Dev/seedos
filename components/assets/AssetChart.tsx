'use client';

export default function AssetChart() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-xl shadow-sm flex flex-col justify-between gap-lg">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2xs">
          <h2 className="font-headline-md text-headline-md text-on-surface">توزيع النفقات التقنية الشهرية</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">تحليل نسبي لميزانية الاشتراكات والأصول السحابية النشطة</p>
        </div>
        <span className="font-numeric-stat text-headline-lg text-primary">$14,850</span>
      </div>

      {/* Segmented Bar */}
      <div className="w-full flex flex-col gap-xs">
        <div className="h-4 w-full rounded-full bg-surface-container-high overflow-hidden flex flex-row-reverse">
          <div className="h-full bg-primary" style={{ width: '56%' }} title="البنية السحابية 56%"></div>
          <div className="h-full bg-secondary-container" style={{ width: '29%' }} title="أدوات SaaS والتصميم 29%"></div>
          <div className="h-full bg-tertiary-container" style={{ width: '11%' }} title="واجهات البرمجة والذكاء الاصطناعي 11%"></div>
          <div className="h-full bg-outline-variant" style={{ width: '4%' }} title="النطاقات وشهادات الأمان 4%"></div>
        </div>
        <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
          <span>الإنفاق الموزع الحالي</span>
          <span>100% الميزانية المعتمدة</span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-md pt-md">
        <div className="flex flex-col gap-2xs p-sm rounded-xl bg-surface-container-low">
          <div className="flex items-center gap-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">بنية تحتية</span>
          </div>
          <span className="font-headline-sm text-headline-sm text-on-surface font-bold font-mono">$8,316</span>
          <span className="font-label-sm text-label-sm text-primary font-bold">56% من الإجمالي</span>
        </div>

        <div className="flex flex-col gap-2xs p-sm rounded-xl bg-surface-container-low">
          <div className="flex items-center gap-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">أدوات SaaS</span>
          </div>
          <span className="font-headline-sm text-headline-sm text-on-surface font-bold font-mono">$4,306</span>
          <span className="font-label-sm text-label-sm text-secondary font-bold">29% من الإجمالي</span>
        </div>

        <div className="flex flex-col gap-2xs p-sm rounded-xl bg-surface-container-low">
          <div className="flex items-center gap-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">نماذج و APIs</span>
          </div>
          <span className="font-headline-sm text-headline-sm text-on-surface font-bold font-mono">$1,633</span>
          <span className="font-label-sm text-label-sm text-tertiary font-bold">11% من الإجمالي</span>
        </div>

        <div className="flex flex-col gap-2xs p-sm rounded-xl bg-surface-container-low">
          <div className="flex items-center gap-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-outline-variant"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">نطاقات و SSL</span>
          </div>
          <span className="font-headline-sm text-headline-sm text-on-surface font-bold font-mono">$595</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">4% من الإجمالي</span>
        </div>
      </div>
    </div>
  );
}