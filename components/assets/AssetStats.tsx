'use client';

export default function AssetStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
      {/* Card 1: Total MRR */}
      <div className="bg-surface-container-lowest rounded-xl p-lg shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-sm">
          <span className="font-label-md text-label-md text-on-surface-variant">إجمالي الإنفاق الشهري (MRR Cost)</span>
          <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[22px]">credit_card</span>
          </div>
        </div>
        <div className="flex flex-col gap-2xs">
          <span className="font-numeric-stat text-numeric-stat text-on-surface tracking-tight">$14,850 <span className="font-body-sm text-body-sm text-on-surface-variant">/ شهر</span></span>
          <div className="flex items-center gap-xs mt-2xs">
            <span className="inline-flex items-center gap-2xs px-xs py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[14px]">trending_up</span>
              +4.2%
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">(52 اشتراك نشط)</span>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-l from-primary to-transparent opacity-40"></div>
      </div>

      {/* Card 2: Hosting */}
      <div className="bg-surface-container-lowest rounded-xl p-lg shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-sm">
          <span className="font-label-md text-label-md text-on-surface-variant">الاستضافات والبنية التحتية</span>
          <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-[22px]">dns</span>
          </div>
        </div>
        <div className="flex flex-col gap-2xs">
          <span className="font-numeric-stat text-numeric-stat text-on-surface tracking-tight">$8,400</span>
          <div className="flex items-center gap-xs mt-2xs">
            <span className="font-body-sm text-body-sm text-on-surface-variant">AWS, Vercel, Supabase, Cloudflare</span>
          </div>
          <span className="font-label-sm text-label-sm text-primary font-bold">28 خادم وبيئة سحابية</span>
        </div>
        <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-l from-secondary to-transparent opacity-40"></div>
      </div>

      {/* Card 3: Software */}
      <div className="bg-surface-container-lowest rounded-xl p-lg shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-sm">
          <span className="font-label-md text-label-md text-on-surface-variant">أدوات وتراخيص الفرق البرمجية</span>
          <div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
            <span className="material-symbols-outlined text-[22px]">draw</span>
          </div>
        </div>
        <div className="flex flex-col gap-2xs">
          <span className="font-numeric-stat text-numeric-stat text-on-surface tracking-tight">$4,250</span>
          <div className="flex items-center gap-xs mt-2xs">
            <span className="font-body-sm text-body-sm text-on-surface-variant">Figma, GitHub, Jira, OpenAI API</span>
          </div>
          <span className="font-label-sm text-label-sm text-tertiary font-bold">20 ترخيص نشط للفريق</span>
        </div>
        <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-l from-tertiary to-transparent opacity-40"></div>
      </div>

      {/* Card 4: Urgent */}
      <div className="bg-surface-container-lowest rounded-xl p-lg shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-sm">
          <span className="font-label-md text-label-md text-on-surface-variant">تنبيهات التجديد القريب</span>
          <div className="w-10 h-10 rounded-xl bg-error-container flex items-center justify-center text-error">
            <span className="material-symbols-outlined text-[22px]">notification_important</span>
          </div>
        </div>
        <div className="flex flex-col gap-xs">
          <div className="flex items-center gap-xs">
            <span className="font-numeric-stat text-numeric-stat text-error tracking-tight">5</span>
            <span className="font-label-md text-label-md text-error">اشتراكات خلال 7 أيام</span>
          </div>
          <button className="mt-2xs w-full py-2xs px-sm rounded-xl bg-error text-on-error hover:opacity-90 font-label-sm text-label-sm flex items-center justify-center gap-2xs transition-opacity" type="button">
            <span>مراجعة التجديدات العاجلة</span>
            <span className="material-symbols-outlined text-[14px]">arrow_back</span>
          </button>
        </div>
        <div className="absolute bottom-0 right-0 left-0 h-1 bg-error opacity-40"></div>
      </div>
    </div>
  );
}