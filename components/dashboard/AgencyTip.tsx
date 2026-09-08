'use client';

export default function AgencyTip() {
  return (
    <div className="rounded-full bg-primary-container text-on-primary p-lg shadow-sm flex flex-col gap-xs relative overflow-hidden">
      <div className="flex items-center gap-xs">
        <span className="material-symbols-outlined text-[20px]">lightbulb</span>
        <span className="font-headline-sm text-headline-sm">تلميحة لإدارة الوكالة</span>
      </div>
      <p className="font-body-sm text-body-sm opacity-90 leading-relaxed">
        الردود على استفسارات العملاء خلال أول 60 دقيقة من استلامها تزيد من فرص تجديد العقود الشهرية بنسبة 34%.
      </p>
    </div>
  );
}