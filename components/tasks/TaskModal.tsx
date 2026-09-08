'use client';

import { useState, useEffect } from 'react';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TaskModal({ isOpen, onClose }: TaskModalProps) {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-md bg-inverse-surface/40 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-surface-container-lowest w-full max-w-lg rounded-xl shadow-xl p-xl flex flex-col gap-md animate-in fade-in zoom-in duration-150">
        <div className="flex items-center justify-between">
          <h3 className="font-headline-sm text-headline-sm text-on-surface">إضافة مهمة تشغيلية جديدة</h3>
          <button 
            className="w-8 h-8 rounded-lg flex items-center justify-center text-outline hover:text-on-surface hover:bg-surface-container transition-colors"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="flex flex-col gap-sm">
          <div className="flex flex-col gap-2xs">
            <label className="font-label-md text-label-md text-on-surface">عنوان المهمة</label>
            <input 
              className="w-full h-10 px-sm rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest shadow-inner" 
              placeholder="مثال: ضبط خوارزميات التوصيل الجغرافي..." 
              type="text"
            />
          </div>

          <div className="grid grid-cols-2 gap-sm">
            <div className="flex flex-col gap-2xs">
              <label className="font-label-md text-label-md text-on-surface">المشروع التابع</label>
              <select className="w-full h-10 px-sm rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none">
                <option>تطبيق متجر الدانوب</option>
                <option>منصة لوجستيك</option>
                <option>SeedOS الداخلي</option>
              </select>
            </div>
            <div className="flex flex-col gap-2xs">
              <label className="font-label-md text-label-md text-on-surface">درجة الأولوية</label>
              <select className="w-full h-10 px-sm rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none">
                <option>عاجلة وحرجة</option>
                <option>متوسطة</option>
                <option>اعتيادية</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-sm">
            <div className="flex flex-col gap-2xs">
              <label className="font-label-md text-label-md text-on-surface">تعيين إلى</label>
              <select className="w-full h-10 px-sm rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none">
                <option>زياد القحطاني</option>
                <option>منى الحربي</option>
                <option>عمر الفاروق</option>
                <option>سارة العتيبي</option>
              </select>
            </div>
            <div className="flex flex-col gap-2xs">
              <label className="font-label-md text-label-md text-on-surface">تاريخ الاستحقاق</label>
              <input className="w-full h-10 px-sm rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none" type="date" />
            </div>
          </div>

          <div className="flex flex-col gap-2xs">
            <label className="font-label-md text-label-md text-on-surface">الوصف والمخرجات المطلوبة</label>
            <textarea 
              className="w-full p-sm rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest shadow-inner resize-none" 
              placeholder="اكتب تفاصيل المعايير التقنية للتسليم هنا..." 
              rows={3}
            ></textarea>
          </div>
        </div>

        <div className="flex items-center justify-end gap-xs pt-xs">
          <button 
            className="h-10 px-md rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md"
            onClick={onClose}
          >
            إلغاء
          </button>
          <button 
            className="h-10 px-lg rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-colors shadow-sm"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? 'جاري الحفظ...' : 'حفظ ونشر المهمة'}
          </button>
        </div>
      </div>
    </div>
  );
}