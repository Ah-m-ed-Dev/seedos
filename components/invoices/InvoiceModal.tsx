'use client';

import { useState, useEffect } from 'react';

interface InvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InvoiceModal({ isOpen, onClose }: InvoiceModalProps) {
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      onClose();
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-md bg-surface-variant/40 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-surface-container-lowest rounded-xl shadow-md border border-outline-variant/30 overflow-hidden flex flex-col my-md text-on-surface">
        {/* Header */}
        <div className="flex items-start justify-between p-lg bg-surface-container-low border-b border-outline-variant/20">
          <div className="flex items-start gap-md">
            <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-on-primary shadow-sm shadow-primary/20">
              <span className="material-symbols-outlined text-[24px]">post_add</span>
            </div>
            <div className="flex flex-col gap-2xs">
              <div className="flex items-center gap-xs flex-wrap">
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">إنشاء فاتورة جديدة</h2>
                <span className="px-xs py-2xs rounded-md bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold tracking-wide">#INV-2024-095</span>
                <span className="px-xs py-2xs rounded-md bg-surface-container text-tertiary-container font-label-sm text-label-sm">نظام الفوترة الذكي</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">إصدار مطالبة مالية جديدة، تحديد البنود وضريبة القيمة المضافة وخيارات السداد للعميل.</p>
            </div>
          </div>
          <button className="p-2xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" onClick={onClose} type="button">
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-lg flex flex-col gap-lg overflow-y-auto max-h-[70vh]">
          {/* Client Info */}
          <div className="bg-surface-container-low/40 p-md rounded-xl border border-outline-variant/20 flex flex-col gap-md">
            <div className="flex items-center gap-2xs text-primary font-label-md text-label-md font-bold">
              <span className="material-symbols-outlined text-[18px]">business</span>
              <span>بيانات العميل والمشروع</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="flex flex-col gap-2xs">
                <label className="font-label-sm text-label-sm text-on-surface-variant">العميل المستهدف *</label>
                <select className="h-10 px-md rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm border border-outline-variant/30 outline-none focus:ring-2 ring-surface">
                  <option>شركة الدانوب للتجزئة</option>
                  <option>منصة لوجستيك الدولية</option>
                  <option>فنتك باي للحلول المالية</option>
                  <option>حلول تكنو العقارية</option>
                  <option>مجمع النخبة التخصصي</option>
                </select>
              </div>
              <div className="flex flex-col gap-2xs">
                <label className="font-label-sm text-label-sm text-on-surface-variant">المشروع المرتبط *</label>
                <select className="h-10 px-md rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm border border-outline-variant/30 outline-none focus:ring-2 ring-surface">
                  <option>تطبيق المتجر الغذائي (Danube App)</option>
                  <option>بوابة الشحنات السحابية</option>
                  <option>الربط المصرفي Open Banking</option>
                  <option>إعادة تصميم المنصة وتطبيق الملاك</option>
                </select>
              </div>
              <div className="flex flex-col gap-2xs">
                <label className="font-label-sm text-label-sm text-on-surface-variant">تاريخ الإصدار</label>
                <input className="h-10 px-md rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm border border-outline-variant/30 outline-none focus:ring-2 ring-surface" type="date" defaultValue="2024-10-18" />
              </div>
              <div className="flex flex-col gap-2xs">
                <label className="font-label-sm text-label-sm text-on-surface-variant">تاريخ الاستحقاق وفترة السداد</label>
                <div className="flex gap-xs">
                  <input className="flex-1 h-10 px-md rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm border border-outline-variant/30 outline-none" type="date" defaultValue="2024-11-01" />
                  <select className="h-10 px-xs rounded-xl bg-surface-container-lowest text-on-surface font-label-sm text-label-sm border border-outline-variant/30 outline-none">
                    <option>14 يوماً</option>
                    <option>7 أيام</option>
                    <option>30 يوماً</option>
                    <option>سداد فوري</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Invoice Items */}
          <div className="flex flex-col gap-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2xs text-primary font-label-md text-label-md font-bold">
                <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                <span>بنود الفاتورة والخدمات المقدمة</span>
              </div>
              <button className="flex items-center gap-2xs px-xs py-2xs rounded-lg bg-surface-container text-primary hover:bg-surface-container-high transition-colors font-label-sm text-label-sm font-bold" type="button">
                <span className="material-symbols-outlined text-[16px]">add</span>
                <span>إضافة بند جديد</span>
              </button>
            </div>
            <div className="overflow-x-auto border border-outline-variant/20 rounded-xl">
              <table className="w-full text-right border-collapse">
                <thead className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
                  <tr>
                    <th className="py-xs px-md">الوصف والخدمة</th>
                    <th className="py-xs px-md w-24 text-center">الكمية / الساعات</th>
                    <th className="py-xs px-md w-32 text-center">سعر الوحدة</th>
                    <th className="py-xs px-md w-28 text-center">الإجمالي</th>
                    <th className="py-xs px-xs w-10 text-center"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10 font-body-sm text-body-sm">
                  <tr className="bg-surface-container-lowest">
                    <td className="py-xs px-md">
                      <input className="w-full bg-surface-container-low/30 px-xs py-2xs rounded-lg outline-none font-body-sm text-on-surface" type="text" value="تصميم وتطوير واجهات المستخدم UI/UX - المرحلة الثانية" />
                    </td>
                    <td className="py-xs px-md text-center">
                      <input className="w-16 text-center bg-surface-container-low/30 px-xs py-2xs rounded-lg outline-none font-body-sm text-on-surface" type="number" value={1} />
                    </td>
                    <td className="py-xs px-md text-center">
                      <input className="w-24 text-center bg-surface-container-low/30 px-xs py-2xs rounded-lg outline-none font-body-sm text-on-surface" type="text" value="$12,000" />
                    </td>
                    <td className="py-xs px-md text-center font-bold text-on-surface">$12,000</td>
                    <td className="py-xs px-xs text-center">
                      <button className="p-2xs text-error hover:bg-error-container/20 rounded-lg transition-colors" type="button">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-surface-container-lowest">
                    <td className="py-xs px-md">
                      <input className="w-full bg-surface-container-low/30 px-xs py-2xs rounded-lg outline-none font-body-sm text-on-surface" type="text" value="دمج بوابات الدفع الإلكتروني والرسائل النصية SMS Gateway" />
                    </td>
                    <td className="py-xs px-md text-center">
                      <input className="w-16 text-center bg-surface-container-low/30 px-xs py-2xs rounded-lg outline-none font-body-sm text-on-surface" type="number" value={1} />
                    </td>
                    <td className="py-xs px-md text-center">
                      <input className="w-24 text-center bg-surface-container-low/30 px-xs py-2xs rounded-lg outline-none font-body-sm text-on-surface" type="text" value="$4,500" />
                    </td>
                    <td className="py-xs px-md text-center font-bold text-on-surface">$4,500</td>
                    <td className="py-xs px-xs text-center">
                      <button className="p-2xs text-error hover:bg-error-container/20 rounded-lg transition-colors" type="button">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary & Payment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <div className="flex flex-col gap-sm">
              <div className="flex items-center gap-2xs text-primary font-label-md text-label-md font-bold">
                <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
                <span>طريقة التحصيل والشروط</span>
              </div>
              <div className="flex flex-col gap-2xs">
                <label className="font-label-sm text-label-sm text-on-surface-variant">طريقة الدفع المقترحة</label>
                <select className="h-10 px-md rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-outline-variant/30 outline-none">
                  <option>تحويل بنكي - مصرف الراجحي (SA44 8000 0201 ...)</option>
                  <option>تحويل بنكي - البنك الأهلي السعودي</option>
                  <option>بوابة الدفع الإلكتروني (مدى / فيزا / ماستركارد)</option>
                </select>
              </div>
              <div className="flex flex-col gap-2xs">
                <label className="font-label-sm text-label-sm text-on-surface-variant">ملاحظات وشروط الفاتورة</label>
                <textarea className="p-xs rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-outline-variant/30 outline-none resize-none" placeholder="ملاحظات تظهر في ذيل الفاتورة للعميل..." rows={2}>
                  يستحق السداد خلال 14 يوماً عمل من تاريخ الإصدار. تطبق سياسة الوكالة للدفعات المجدولة.
                </textarea>
              </div>
            </div>

            <div className="bg-surface-container-low/50 p-md rounded-xl border border-outline-variant/20 flex flex-col justify-between gap-sm">
              <span className="font-label-md text-label-md text-on-surface font-bold">ملخص القيمة المستحقة</span>
              <div className="flex flex-col gap-xs font-body-sm text-body-sm">
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span>المجموع الفرعي (Subtotal):</span>
                  <span className="font-bold text-on-surface">$16,500</span>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span>الخصم الممنوح:</span>
                  <span className="text-tertiary font-semibold">$0.00</span>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span>ضريبة القيمة المضافة (15% VAT):</span>
                  <span className="font-bold text-on-surface">$2,475</span>
                </div>
                <div className="h-px bg-outline-variant/20 my-2xs"></div>
                <div className="flex items-center justify-between font-headline-sm text-headline-sm text-primary font-bold">
                  <span>الإجمالي النهائي المستحق:</span>
                  <span className="text-numeric-stat text-[22px]">$18,975</span>
                </div>
                <div className="text-left font-label-sm text-label-sm text-on-surface-variant">يعادل تقريباً 71,156 ر.س</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-md bg-surface-container-low border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-md">
          <label className="flex items-center gap-xs cursor-pointer font-label-sm text-label-sm text-on-surface-variant select-none">
            <input checked className="w-4 h-4 rounded text-primary cursor-pointer" type="checkbox" />
            <span>إرسال نسخة وتنبيه آلي للعميل عبر البريد الإلكتروني وواتساب</span>
          </label>
          <div className="flex items-center gap-xs">
            <button className="px-md py-xs rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors font-label-md text-label-md" onClick={onClose} type="button">إلغاء</button>
            <button className="px-md py-xs rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-label-md text-label-md" type="button">حفظ كمسودة</button>
            <button className="flex items-center gap-2xs px-lg py-xs rounded-xl bg-primary-container text-on-primary hover:bg-secondary transition-all shadow-sm shadow-primary/20 font-label-md text-label-md font-bold" onClick={handleSave} type="button">
              {isSaving ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                  <span>جاري الإصدار...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  <span>إصدار وإرسال الفاتورة</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}