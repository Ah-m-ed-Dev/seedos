'use client';

export default function InvoiceChart() {
  return (
    <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm flex flex-col justify-between gap-md">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="font-headline-sm text-headline-sm text-on-surface">ملخص التدفق النقدي والتوقعات المالية</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">مقارنة السيولة المتوقعة مع الفواتير الصادرة للشهور الثلاثة الأخيرة</p>
        </div>
        <div className="flex items-center gap-xs">
          <span className="flex items-center gap-2xs font-label-sm text-label-sm text-on-surface-variant">
            <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
            <span>المحصل فعلياً</span>
          </span>
          <span className="flex items-center gap-2xs font-label-sm text-label-sm text-on-surface-variant">
            <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></span>
            <span>المتوقع استحقاقه</span>
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="flex items-end justify-between gap-md h-36 pt-md px-md">
        {/* Month 1 */}
        <div className="flex-1 flex flex-col items-center gap-xs h-full justify-end">
          <div className="w-full flex items-end justify-center gap-2xs h-28">
            <div className="w-8 bg-surface-container-highest rounded-t-md" style={{ height: '60%' }} title="المتوقع: $65,000"></div>
            <div className="w-8 bg-primary rounded-t-md" style={{ height: '55%' }} title="المحصل: $62,000"></div>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant">أغسطس</span>
        </div>

        {/* Month 2 */}
        <div className="flex-1 flex flex-col items-center gap-xs h-full justify-end">
          <div className="w-full flex items-end justify-center gap-2xs h-28">
            <div className="w-8 bg-surface-container-highest rounded-t-md" style={{ height: '80%' }} title="المتوقع: $85,000"></div>
            <div className="w-8 bg-primary rounded-t-md" style={{ height: '75%' }} title="المحصل: $80,200"></div>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant">سبتمبر</span>
        </div>

        {/* Month 3 (Current) */}
        <div className="flex-1 flex flex-col items-center gap-xs h-full justify-end">
          <div className="w-full flex items-end justify-center gap-2xs h-28">
            <div className="w-8 bg-surface-container-highest rounded-t-md" style={{ height: '100%' }} title="المتوقع: $105,000"></div>
            <div className="w-8 bg-primary-container rounded-t-md relative" style={{ height: '65%' }} title="المحصل حتى الآن: $68,000">
              <span className="absolute -top-6 right-1/2 translate-x-1/2 font-label-sm text-[10px] text-primary font-bold">جاري</span>
            </div>
          </div>
          <span className="font-label-sm text-label-sm text-primary font-bold">أكتوبر (الحالي)</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-xs border-t-0 font-body-sm text-body-sm text-on-surface-variant">
        <span>متوسط سرعة التحصيل للعملاء: <strong className="text-on-surface">11 يوماً</strong> من تاريخ الفاتورة</span>
        <a className="text-primary hover:underline font-label-md text-label-md flex items-center gap-2xs" href="#">
          <span>التقرير المالي الكامل</span>
          <span className="material-symbols-outlined text-[16px]">arrow_left</span>
        </a>
      </div>
    </div>
  );
}