'use client';

const alerts = [
  {
    client: 'شركة الدانوب للتجزئة',
    project: 'تطبيق الجوال - iOS / Android',
    initial: 'د',
    type: 'تأخر في الرد > 24 ساعة',
    typeColor: 'bg-error-container text-on-error-container',
    dotColor: 'bg-error',
    assignee: 'ماجد عبد الله',
    assigneeInitial: 'م',
    time: 'منذ 28 ساعة',
    timeColor: 'text-error',
    action: 'رد الآن',
    actionColor: 'bg-primary text-on-primary hover:bg-secondary',
  },
  {
    client: 'منصة لوجستيك الدولية',
    project: 'بوابة التتبع والشحنات',
    initial: 'ل',
    type: 'طلب مراجعة تسليم',
    typeColor: 'bg-surface-container-high text-tertiary',
    dotColor: 'bg-tertiary',
    assignee: 'سارة ناصر',
    assigneeInitial: 'س',
    time: 'اليوم 04:00 م',
    timeColor: 'text-on-surface-variant',
    action: 'مراجعة',
    actionColor: 'bg-surface-container text-on-surface hover:bg-surface-container-high',
  },
  {
    client: 'حلول تكنو العقارية',
    project: 'إعادة تصميم موقع واستراتيجية SEO',
    initial: 'ت',
    type: 'دفعة مستحقة ($5,400)',
    typeColor: 'bg-error-container text-error',
    dotColor: 'bg-error',
    assignee: 'طارق العلي',
    assigneeInitial: 'ط',
    time: 'متأخر 3 أيام',
    timeColor: 'text-error',
    action: 'تذكير بالدفع',
    actionColor: 'bg-surface-container-highest text-primary hover:bg-surface-container-high',
  },
  {
    client: 'سحابة الأفق للإعلام',
    project: 'سيرفرات البث وحملة الإطلاق',
    initial: 'س',
    type: 'تجديد دومين وشيك',
    typeColor: 'bg-surface-container text-on-surface-variant',
    dotColor: 'bg-on-surface-variant',
    assignee: 'خالد الهدى',
    assigneeInitial: 'خ',
    time: 'خلال 48 ساعة',
    timeColor: 'text-on-surface-variant',
    action: 'تجديد تلقائي',
    actionColor: 'bg-surface-container text-on-surface hover:bg-surface-container-high',
  },
];

export default function AlertsTable() {
  return (
    <div className="rounded-full bg-surface-container-lowest shadow-sm overflow-hidden flex flex-col">
      <div className="p-xl flex flex-col sm:flex-row sm:items-center justify-between gap-sm bg-surface-container-lowest">
        <div className="flex flex-col gap-2xs">
          <div className="flex items-center gap-xs">
            <h2 className="font-headline-md text-headline-md text-on-surface">تنبيهات ومتابعات فورية</h2>
            <span className="px-sm py-2xs rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold animate-pulse">4 تنبيهات نشطة</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">العملاء الذين لم يتم الرد عليهم لأكثر من 24 ساعة ومشاريع تتطلب مراجعة فورية</p>
        </div>
        <button className="flex items-center gap-2xs text-primary hover:text-secondary font-label-md text-label-md self-start sm:self-center transition-colors" type="button">
          <span>تحديد الكل كمقروء</span>
          <span className="material-symbols-outlined text-[18px]">done_all</span>
        </button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant font-label-md text-label-md">
              <th className="py-md px-lg">العميل / المشروع</th>
              <th className="py-md px-md">نوع التنبيه</th>
              <th className="py-md px-md">المسؤول</th>
              <th className="py-md px-md">الوقت المنقضي</th>
              <th className="py-md px-lg text-center">الإجراء السريع</th>
            </tr>
          </thead>
          <tbody className="divide-y-0 text-on-surface font-body-md text-body-md">
            {alerts.map((alert, index) => (
              <tr key={index} className="hover:bg-surface-container-low/60 transition-colors">
                <td className="py-md px-lg">
                  <div className="flex items-center gap-sm">
                    <div className="w-9 h-9 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center font-bold text-label-lg">
                      {alert.initial}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-lg text-label-lg text-on-surface truncate">{alert.client}</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant truncate">{alert.project}</span>
                    </div>
                  </div>
                </td>
                <td className="py-md px-md">
                  <span className={`inline-flex items-center gap-2xs px-xs py-2xs rounded-full font-label-sm text-label-sm ${alert.typeColor}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${alert.dotColor}`}></span>
                    <span>{alert.type}</span>
                  </span>
                </td>
                <td className="py-md px-md">
                  <div className="flex items-center gap-xs">
                    <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-[10px]">
                      {alert.assigneeInitial}
                    </div>
                    <span className="font-label-md text-label-md text-on-surface">{alert.assignee}</span>
                  </div>
                </td>
                <td className="py-md px-md">
                  <span className={`font-label-md text-label-md ${alert.timeColor}`}>{alert.time}</span>
                </td>
                <td className="py-md px-lg">
                  <div className="flex items-center justify-center gap-xs">
                    <button className={`px-md py-xs rounded-xl transition-colors font-label-sm text-label-sm ${alert.actionColor}`} type="button">
                      {alert.action}
                    </button>
                    <button className="p-xs rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors" title="عرض التفاصيل" type="button">
                      <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}