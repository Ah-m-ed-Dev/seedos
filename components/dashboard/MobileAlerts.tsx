'use client';

const alerts = [
  {
    client: 'شركة الدانوب للتجزئة',
    details: 'تأخر في الرد > 28 ساعة',
    icon: 'mark_chat_unread',
    iconBg: 'bg-error-container text-on-error-container',
    action: 'رد الآن',
    actionColor: 'bg-primary-container text-on-primary',
  },
  {
    client: 'منصة لوجستيك الدولية',
    details: 'طلب اعتماد تسليم المرحلة 2',
    icon: 'rate_review',
    iconBg: 'bg-surface-container-high text-primary',
    action: 'مراجعة',
    actionColor: 'bg-secondary-container text-on-secondary-container',
  },
  {
    client: 'حلول تكنو العقارية',
    details: 'دفعة مستحقة: 5,400$',
    icon: 'attach_money',
    iconBg: 'bg-tertiary-fixed text-on-tertiary-fixed',
    action: 'تذكير',
    actionColor: 'bg-surface-container-high text-on-surface',
  },
];

export default function MobileAlerts() {
  return (
    <section className="flex flex-col gap-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-xs">
          <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface">متابعات عاجلة مطلوبة</h2>
        </div>
        <span className="font-label-sm text-label-sm bg-error-container text-on-error-container px-xs py-0.5 rounded-full">3 مهام فورية</span>
      </div>
      <div className="flex flex-col gap-xs">
        {alerts.map((alert, index) => (
          <div key={index} className="flex items-center justify-between bg-surface-container-lowest p-sm rounded-xl shadow-sm">
            <div className="flex items-center gap-sm min-w-0">
              <div className={`w-10 h-10 rounded-xl ${alert.iconBg} flex items-center justify-center shrink-0`}>
                <span className="material-symbols-outlined text-[20px]">{alert.icon}</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-lg text-label-lg text-on-surface truncate">{alert.client}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant truncate">{alert.details}</span>
              </div>
            </div>
            <button className={`${alert.actionColor} px-sm py-xs rounded-xl font-label-md text-label-md shrink-0 shadow-sm active:scale-95 transition-transform flex items-center gap-2xs`}>
              <span>{alert.action}</span>
              <span className="material-symbols-outlined text-[16px]">
                {alert.action === 'رد الآن' ? 'reply' : alert.action === 'مراجعة' ? 'arrow_forward' : 'send'}
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}