'use client';

import { useState, useEffect } from 'react';

interface AssetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AssetModal({ isOpen, onClose }: AssetModalProps) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-inverse-surface/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-surface-container-lowest rounded-xl shadow-2xl p-xl my-8 text-right border border-surface-container flex flex-col gap-lg">
        {/* Header */}
        <div className="flex items-start justify-between pb-sm border-b border-surface-container">
          <div className="flex items-start gap-md">
            <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[28px]">cloud_done</span>
            </div>
            <div className="flex flex-col gap-2xs">
              <div className="flex items-center gap-xs flex-wrap">
                <span className="px-xs py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-bold">SeedOS Cloud & Assets</span>
                <span className="px-xs py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm">أصل جديد</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface leading-tight">إضافة اشتراك سحابي أو أصل تقني جديد</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant hidden sm:block">
                تسجيل بيانات الخادم، خدمة SaaS، النطاق، أو مفاتيح API وربطها بالمشروع والميزانية المعتمدة.
              </p>
            </div>
          </div>
          <button className="p-xs rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" onClick={onClose} type="button">
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-lg" onSubmit={(e) => e.preventDefault()}>
          {/* Category Selection */}
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-label-md text-on-surface font-bold">1. تصنيف الأصل ونوع الخدمة السحابية</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-xs">
              <button className="flex flex-col items-center justify-center p-sm rounded-xl bg-surface-container-high border-2 border-primary text-primary font-label-sm text-label-sm gap-2xs" type="button">
                <span className="material-symbols-outlined text-[20px]">dns</span>
                <span>خادم / استضافة</span>
              </button>
              <button className="flex flex-col items-center justify-center p-sm rounded-xl bg-surface-container-low text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm gap-2xs transition-colors" type="button">
                <span className="material-symbols-outlined text-[20px]">terminal</span>
                <span>أداة SaaS وفريق</span>
              </button>
              <button className="flex flex-col items-center justify-center p-sm rounded-xl bg-surface-container-low text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm gap-2xs transition-colors" type="button">
                <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                <span>AI & API Models</span>
              </button>
              <button className="flex flex-col items-center justify-center p-sm rounded-xl bg-surface-container-low text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm gap-2xs transition-colors" type="button">
                <span className="material-symbols-outlined text-[20px]">language</span>
                <span>نطاق و SSL</span>
              </button>
            </div>
          </div>

          {/* Service Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2xs">اسم الخدمة أو الأصل</label>
              <input className="w-full h-10 px-md rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container border border-surface-container-high" placeholder="مثال: AWS RDS Production" type="text" />
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2xs">مزود الخدمة (Provider)</label>
              <div className="relative">
                <select className="appearance-none w-full h-10 pr-md pl-8 rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md outline-none cursor-pointer border border-surface-container-high">
                  <option>Amazon Web Services (AWS)</option>
                  <option>Vercel Pro</option>
                  <option>Google Cloud Platform</option>
                  <option>Supabase Infrastructure</option>
                </select>
                <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">expand_more</span>
              </div>
            </div>
          </div>

          {/* Cost & Billing */}
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-label-md text-on-surface font-bold">2. التكلفة، طريقة الدفع، ودورة الفوترة</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-md">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2xs">التكلفة التقديرية ($ USD)</label>
                <div className="relative">
                  <input className="w-full h-10 pr-md pl-10 rounded-xl bg-surface-container-low text-on-surface font-headline-sm text-headline-sm font-bold outline-none border border-surface-container-high" type="number" defaultValue={1250} />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-mono font-bold">$</span>
                </div>
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2xs">دورة الفوترة</label>
                <div className="relative">
                  <select className="appearance-none w-full h-10 pr-md pl-8 rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md outline-none cursor-pointer border border-surface-container-high">
                    <option>شهرياً (Monthly)</option>
                    <option>سنوياً مع خصم (Annual)</option>
                    <option>حسب الاستهلاك</option>
                  </select>
                  <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">expand_more</span>
                </div>
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2xs">تاريخ الاستحقاق أو التجديد</label>
                <input className="w-full h-10 px-md rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md outline-none border border-surface-container-high" type="date" defaultValue="2024-11-20" />
              </div>
            </div>
          </div>

          {/* Project & Assignment */}
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-label-md text-on-surface font-bold">3. التخصيص والمشروع المستفيد</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-md">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2xs">المشروع أو العميل المرتبط</label>
                <div className="relative">
                  <select className="appearance-none w-full h-10 pr-md pl-8 rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md outline-none cursor-pointer border border-surface-container-high">
                    <option>تطبيق فنتك باي</option>
                    <option>مجموعة الدانوب للتجزئة</option>
                    <option>خدمات DevSeed المركزية</option>
                  </select>
                  <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">expand_more</span>
                </div>
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2xs">المسؤول التقني المعتمد</label>
                <div className="relative">
                  <select className="appearance-none w-full h-10 pr-md pl-8 rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md outline-none cursor-pointer border border-surface-container-high">
                    <option>طارق العلي (Lead DevOps)</option>
                    <option>سارة المنصور (Backend)</option>
                  </select>
                  <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">expand_more</span>
                </div>
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2xs">المنطقة / تفاصيل البيئة</label>
                <input className="w-full h-10 px-md rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none border border-surface-container-high font-mono" placeholder="us-east-1 / prod" type="text" />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-sm border-t border-surface-container">
            <button className="px-lg py-xs rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors" onClick={onClose} type="button">
              إلغاء
            </button>
            <div className="flex items-center gap-xs">
              <button className="px-md py-xs rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-md text-label-md transition-colors" type="button">
                حفظ كمسودة
              </button>
              <button className="flex items-center gap-2xs px-xl py-xs rounded-xl bg-primary text-on-primary hover:bg-secondary font-label-md text-label-md shadow-md hover:shadow-lg transition-all" onClick={handleSave} type="button">
                {isSaving ? (
                  <>
                    <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                    <span>جاري الحفظ...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    <span>حفظ وتفعيل تتبع الأصل</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}