'use client';

import { useState, useEffect } from 'react';

interface ClientModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClientModal({ isOpen, onClose }: ClientModalProps) {
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
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-md bg-inverse-surface/60 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl rounded-xl bg-surface-container-lowest shadow-2xl border border-surface-container-high my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-xl border-b border-surface-container-high bg-surface-container-low/50 flex items-start justify-between gap-md">
          <div className="flex items-start gap-md">
            <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[26px]">domain_add</span>
            </div>
            <div className="flex flex-col gap-2xs">
              <div className="flex items-center gap-xs">
                <span className="px-xs py-2xs rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold">
                  SeedOS CRM
                </span>
                <span className="text-label-sm text-on-surface-variant">شريك جديد</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                إضافة عميل / شريك جديد
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
                أدخل بيانات الشركة وجهة الاتصال الرئيسية لبدء إدارة المشاريع وإصدار عروض الأسعار والفواتير.
              </p>
            </div>
          </div>
          <button 
            className="p-xs rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
            onClick={onClose}
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Form Body */}
        <form className="p-xl flex flex-col gap-xl max-h-[75vh] overflow-y-auto" onSubmit={(e) => e.preventDefault()}>
          {/* Section 1: Company Information */}
          <div className="flex flex-col gap-sm">
            <div className="flex items-center gap-xs pb-2xs border-b border-surface-container-high">
              <span className="material-symbols-outlined text-primary text-[20px]">apartment</span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">معلومات الشركة والمنشأة</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md pt-xs">
              <div className="flex flex-col gap-2xs">
                <label className="font-label-md text-label-md text-on-surface font-semibold">اسم الشركة / المنشأة <span className="text-error">*</span></label>
                <input className="w-full h-11 px-md rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container focus:ring-2 focus:ring-primary/20 transition-all" placeholder="مثال: شركة التقنية الحديثة" type="text" />
              </div>
              <div className="flex flex-col gap-2xs">
                <label className="font-label-md text-label-md text-on-surface font-semibold">القطاع والمجال <span className="text-error">*</span></label>
                <div className="relative">
                  <select className="w-full h-11 px-md pl-8 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container cursor-pointer transition-colors appearance-none">
                    <option value="fintech">حلول مالية وفنتك (FinTech)</option>
                    <option value="retail">تجارة وتجزئة إلكترونية</option>
                    <option value="logistics">لوجستيات ونقل ذكي</option>
                    <option value="other">قطاعات تقنية أخرى</option>
                  </select>
                  <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[18px]">expand_more</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Primary Contact */}
          <div className="flex flex-col gap-sm">
            <div className="flex items-center gap-xs pb-2xs border-b border-surface-container-high">
              <span className="material-symbols-outlined text-secondary text-[20px]">badge</span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">جهة الاتصال والمسؤول الرئيسي</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md pt-xs">
              <div className="flex flex-col gap-2xs">
                <label className="font-label-md text-label-md text-on-surface font-semibold">اسم ممثل العميل <span className="text-error">*</span></label>
                <input className="w-full h-11 px-md rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container focus:ring-2 focus:ring-primary/20 transition-all" placeholder="مثال: عبدالله الدوسري" type="text" />
              </div>
              <div className="flex flex-col gap-2xs">
                <label className="font-label-md text-label-md text-on-surface font-semibold">المسمى الوظيفي</label>
                <input className="w-full h-11 px-md rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container focus:ring-2 focus:ring-primary/20 transition-all" placeholder="مدير التحول الرقمي" type="text" />
              </div>
              <div className="flex flex-col gap-2xs">
                <label className="font-label-md text-label-md text-on-surface font-semibold">البريد الإلكتروني <span className="text-error">*</span></label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">mail</span>
                  <input className="w-full h-11 pr-10 pl-md rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container focus:ring-2 focus:ring-primary/20 transition-all" placeholder="contact@company.com" type="email" />
                </div>
              </div>
              <div className="flex flex-col gap-2xs">
                <label className="font-label-md text-label-md text-on-surface font-semibold">رقم الهاتف <span className="text-error">*</span></label>
                <div className="relative flex items-center">
                  <input className="w-full h-11 pr-md pl-16 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container focus:ring-2 focus:ring-primary/20 transition-all text-left" dir="ltr" placeholder="50 123 4567" type="tel" />
                  <span className="absolute left-3 font-label-md text-label-md text-on-surface-variant font-bold">+966</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Budget */}
          <div className="flex flex-col gap-sm">
            <div className="flex items-center gap-xs pb-2xs border-b border-surface-container-high">
              <span className="material-symbols-outlined text-tertiary text-[20px]">monetization_on</span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">تفاصيل التعاقد والميزانية</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md pt-xs">
              <div className="flex flex-col gap-2xs">
                <label className="font-label-md text-label-md text-on-surface font-semibold">الميزانية التقديرية</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">attach_money</span>
                  <input className="w-full h-11 pr-10 pl-md rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container focus:ring-2 focus:ring-primary/20 transition-all" placeholder="35,000 USD" type="text" />
                </div>
              </div>
              <div className="flex flex-col gap-2xs">
                <label className="font-label-md text-label-md text-on-surface font-semibold">مدير الحساب المسؤول</label>
                <div className="relative">
                  <select className="w-full h-11 px-md pl-8 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container cursor-pointer transition-colors appearance-none">
                    <option value="tariq">طارق العلي (مالك الوكالة)</option>
                    <option value="sara">سارة أحمد (مديرة حسابات العملاء)</option>
                  </select>
                  <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[18px]">expand_more</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-md border-t border-surface-container-high flex flex-col sm:flex-row items-center justify-between gap-sm">
            <button className="w-full sm:w-auto px-lg py-xs rounded-xl bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors cursor-pointer" onClick={onClose} type="button">
              إلغاء
            </button>
            <button className="w-full sm:w-auto px-xl py-xs rounded-xl bg-primary-container text-on-primary font-label-md text-label-md hover:bg-secondary transition-all shadow-md flex items-center justify-center gap-2xs cursor-pointer" onClick={handleSave} type="button">
              {isSaving ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                  <span>جاري الحفظ...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  <span>حفظ وإضافة العميل</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}