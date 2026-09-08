'use client';

export default function AssetOptimization() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-xl shadow-sm flex flex-col justify-between gap-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-xs">
          <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface">فرص تقليل التكاليف الذكية</h2>
        </div>
        <span className="px-xs py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-bold">وفر حتى $900/شهر</span>
      </div>

      {/* Recommendation 1 */}
      <div className="p-md rounded-xl bg-surface-container-low flex flex-col gap-xs">
        <div className="flex items-start justify-between gap-xs">
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-on-surface font-bold">ترقية خطة Vercel إلى الدفع السنوي</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">تحويل اشتراك 18 مقعداً إلى السداد المسبق يمنح خصم 20%.</span>
          </div>
          <span className="inline-flex items-center px-xs py-0.5 rounded bg-surface-container-high text-primary font-mono text-label-sm font-bold whitespace-nowrap">وفر $720/سنة</span>
        </div>
        <div className="flex items-center justify-end mt-2xs">
          <button className="px-md py-2xs rounded-xl bg-primary text-on-primary hover:bg-secondary font-label-md text-label-md transition-colors shadow-sm" type="button">
            تطبيق الترقية السنوية
          </button>
        </div>
      </div>

      {/* Recommendation 2 */}
      <div className="p-md rounded-xl bg-surface-container-low flex flex-col gap-xs">
        <div className="flex items-start justify-between gap-xs">
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-on-surface font-bold">إلغاء 4 مقاعد غير نشطة في Figma</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">لم يسجل 4 مصممين دخولهم منذ أكثر من 45 يوماً.</span>
          </div>
          <span className="inline-flex items-center px-xs py-0.5 rounded bg-surface-container-high text-primary font-mono text-label-sm font-bold whitespace-nowrap">وفر $180/شهر</span>
        </div>
        <div className="flex items-center justify-end mt-2xs">
          <button className="px-md py-2xs rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-md text-label-md transition-colors" type="button">
            تعطيل المقاعد الزائدة
          </button>
        </div>
      </div>

      {/* Recommendation 3 */}
      <div className="p-md rounded-xl bg-surface-container-low flex flex-col gap-xs">
        <div className="flex items-start justify-between gap-xs">
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-on-surface font-bold">تحويل OpenAI إلى خطة الاشتراك المسبق</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">الدفع المسبق السنوي يوفر 15% من الاستهلاك الشهري.</span>
          </div>
          <span className="inline-flex items-center px-xs py-0.5 rounded bg-surface-container-high text-primary font-mono text-label-sm font-bold whitespace-nowrap">وفر $200/شهر</span>
        </div>
        <div className="flex items-center justify-end mt-2xs">
          <button className="px-md py-2xs rounded-xl bg-primary text-on-primary hover:bg-secondary font-label-md text-label-md transition-colors shadow-sm" type="button">
            تحويل الخطة الآن
          </button>
        </div>
      </div>
    </div>
  );
}