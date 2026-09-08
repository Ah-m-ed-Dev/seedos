'use client';

export default function QuickActions() {
  return (
    <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm flex flex-col justify-between gap-md">
      <div className="flex items-center justify-between">
        <h3 className="font-headline-sm text-headline-sm text-on-surface">إجراءات المتابعة السريعة</h3>
        <span className="material-symbols-outlined text-primary text-[20px]">bolt</span>
      </div>

      <div className="flex flex-col gap-xs">
        <div className="flex items-center justify-between p-xs rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
          <div className="flex items-center gap-xs">
            <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[18px]">receipt_long</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface">مطابقة الدفعات البنكية</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">2 عمليات غير مربوطة</span>
            </div>
          </div>
          <button className="text-primary font-label-sm text-label-sm hover:underline" type="button">مطابقة</button>
        </div>

        <div className="flex items-center justify-between p-xs rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
          <div className="flex items-center gap-xs">
            <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-[18px]">contactless</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface">تفعيل بوابة الدفع التلقائي</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">خصم دوري لعقود الصيانة</span>
            </div>
          </div>
          <button className="text-primary font-label-sm text-label-sm hover:underline" type="button">إعداد</button>
        </div>

        <div className="flex items-center justify-between p-xs rounded-xl bg-error-container/20 hover:bg-error-container/30 transition-colors">
          <div className="flex items-center gap-xs">
            <div className="w-8 h-8 rounded-lg bg-error-container flex items-center justify-center text-error">
              <span className="material-symbols-outlined text-[18px]">forward_to_inbox</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface">تذكير الفواتير الحرجة</span>
              <span className="font-label-sm text-label-sm text-error">3 فواتير متأخرة</span>
            </div>
          </div>
          <button className="text-error font-label-sm text-label-sm font-bold hover:underline" type="button">إرسال الآن</button>
        </div>
      </div>

      <div className="pt-xs flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
        <span>آخر مزامنة محاسبية: اليوم 11:30 ص</span>
        <span className="material-symbols-outlined text-[16px] text-primary">sync</span>
      </div>
    </div>
  );
}