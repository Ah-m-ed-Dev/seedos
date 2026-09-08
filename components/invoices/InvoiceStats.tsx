'use client';

export default function InvoiceStats() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-lg">
      {/* KPI 1: Revenue */}
      <div className="relative overflow-hidden bg-surface-container-lowest p-lg rounded-xl shadow-sm flex flex-col justify-between gap-md group hover:shadow-md transition-all">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-label-md text-label-md text-on-surface-variant">إجمالي إيرادات الربع الحالي</span>
            <span className="font-numeric-stat text-numeric-stat text-on-surface font-bold tracking-tight mt-2xs">$248,500</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[24px]">account_balance_wallet</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-xs">
          <div className="flex items-center gap-2xs px-xs py-2xs rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[16px] text-primary">trending_up</span>
            <span className="font-bold text-primary">+18.2%</span>
            <span className="text-on-surface-variant">عن الربع السابق</span>
          </div>
          <svg className="w-16 h-6 text-primary" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewBox="0 0 64 24">
            <path d="M2 18 L16 14 L30 16 L44 8 L62 4"></path>
          </svg>
        </div>
      </div>

      {/* KPI 2: Collected */}
      <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm flex flex-col justify-between gap-md group hover:shadow-md transition-all">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-label-md text-label-md text-on-surface-variant">الفواتير المحصلة</span>
            <span className="font-numeric-stat text-numeric-stat text-on-surface font-bold tracking-tight mt-2xs">$186,200</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container">
            <span className="material-symbols-outlined text-[24px]">verified</span>
          </div>
        </div>
        <div className="flex flex-col gap-2xs pt-xs">
          <div className="flex justify-between items-center font-label-sm text-label-sm">
            <span className="text-on-surface-variant">معدل التحصيل (75% من الصادرة)</span>
            <span className="font-bold text-on-surface">23 فاتورة</span>
          </div>
          <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>

      {/* KPI 3: Pending */}
      <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm flex flex-col justify-between gap-md group hover:shadow-md transition-all">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-label-md text-label-md text-on-surface-variant">فواتير معلقة بانتظار السداد</span>
            <span className="font-numeric-stat text-numeric-stat text-on-surface font-bold tracking-tight mt-2xs">$43,800</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-tertiary">
            <span className="material-symbols-outlined text-[24px]">pending_actions</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-xs">
          <div className="flex items-center gap-2xs px-xs py-2xs rounded-full bg-surface-container text-tertiary-container font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            <span>6 فواتير مستحقة خلال 14 يوماً</span>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">18% من الإجمالي</span>
        </div>
      </div>

      {/* KPI 4: Overdue */}
      <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm flex flex-col justify-between gap-md group hover:shadow-md transition-all relative overflow-hidden">
        <div className="absolute top-0 right-0 left-0 h-1 bg-error"></div>
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-xs">
              <span className="font-label-md text-label-md text-on-surface-variant">فواتير متأخرة الدفع</span>
              <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
            </div>
            <span className="font-numeric-stat text-numeric-stat text-error font-bold tracking-tight mt-2xs">$18,500</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-error-container/30 flex items-center justify-center text-error">
            <span className="material-symbols-outlined text-[24px]">warning</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-xs">
          <span className="font-label-sm text-label-sm text-error font-bold">3 فواتير تتطلب تذكيراً</span>
          <button className="flex items-center gap-2xs px-xs py-2xs rounded-lg bg-error-container text-on-error-container hover:bg-error hover:text-on-error transition-colors font-label-sm text-label-sm" type="button">
            <span className="material-symbols-outlined text-[14px]">send</span>
            <span>تذكير جماعي</span>
          </button>
        </div>
      </div>
    </section>
  );
}