'use client';

import { useState, useEffect } from 'react';

interface FormData {
  projectName: string;
  client: string;
  assignee: string;
  status: string;
  dueDate: string;
  budget: string;
  cost: string;
  notes: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    projectName: 'منصة التجارة المتعددة',
    client: 'مجموعة الدانوب',
    assignee: 'طارق العلي',
    status: 'قيد التطوير',
    dueDate: '2025-01-15',
    budget: '28000',
    cost: '9500',
    notes: 'تطوير البنية التحتية لربط المتاجر المتعددة وبوابة الدفع ونظام تتبع الطلبات المباشر.',
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
      className="fixed inset-0 z-50 flex items-center justify-center p-md bg-inverse-surface/40 backdrop-blur-sm transition-opacity"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-surface-container-lowest w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[942px] overflow-hidden transform transition-all duration-200 scale-100">
        {/* Header */}
        <div className="p-xl bg-surface-container-low flex items-center justify-between border-none">
          <div className="flex items-center gap-sm">
            <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[22px]">create_new_folder</span>
            </div>
            <div className="flex flex-col">
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold">إضافة مشروع جديد</h2>
              <span className="font-body-sm text-body-sm text-on-surface-variant hidden sm:block">
                أدخل بيانات وتفاصيل المشروع الجديد لربطه بالعميل وفريق العمل
              </span>
            </div>
          </div>
          <button 
            className="p-xs rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
            onClick={onClose}
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-xl overflow-y-auto flex flex-col gap-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {/* Project Name */}
            <div className="flex flex-col gap-xs md:col-span-2">
              <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
                <span>اسم المشروع</span>
                <span className="text-error">*</span>
              </label>
              <input
                className="w-full h-10 px-md rounded-xl bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:bg-surface-container-high transition-colors"
                placeholder="مثال: منصة التجارة المتعددة"
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
              />
            </div>

            {/* Client */}
            <div className="flex flex-col gap-xs">
              <div className="flex items-center justify-between">
                <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
                  <span>العميل</span>
                  <span className="text-error">*</span>
                </label>
                <button className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-0.5" type="button">
                  <span className="material-symbols-outlined text-[14px]">add</span>
                  <span className="hidden xs:inline">إضافة عميل جديد</span>
                </button>
              </div>
              <div className="relative">
                <select
                  className="w-full appearance-none h-10 pr-md pl-8 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container-high transition-colors"
                  name="client"
                  value={formData.client}
                  onChange={handleChange}
                >
                  <option value="مجموعة الدانوب">مجموعة الدانوب للتجزئة</option>
                  <option value="شركة الشحن السريع">شركة الشحن السريع</option>
                  <option value="تكنو للاستثمار">تكنو للاستثمار العقاري</option>
                  <option value="الأفق للإعلام">الأفق للإعلام الرقمي</option>
                  <option value="فنتك باي">فنتك باي للحلول المالية</option>
                  <option value="مركز النخبة">مركز النخبة الطبي</option>
                </select>
                <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">expand_more</span>
              </div>
            </div>

            {/* Project Manager */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
                <span>مدير المشروع</span>
                <span className="text-error">*</span>
              </label>
              <div className="relative">
                <select
                  className="w-full appearance-none h-10 pr-md pl-8 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container-high transition-colors"
                  name="assignee"
                  value={formData.assignee}
                  onChange={handleChange}
                >
                  <option value="طارق العلي">طارق العلي</option>
                  <option value="سارة ناصر">سارة ناصر</option>
                  <option value="ماجد عبد الله">ماجد عبد الله</option>
                </select>
                <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">expand_more</span>
              </div>
            </div>

            {/* Status */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface font-semibold">حالة المشروع</label>
              <div className="relative">
                <select
                  className="w-full appearance-none h-10 pr-md pl-8 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container-high transition-colors"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="عرض سعر">عرض سعر</option>
                  <option value="دفعة أولى">دفعة أولى</option>
                  <option value="قيد التطوير">قيد التطوير</option>
                  <option value="قيد المراجعة">قيد المراجعة</option>
                </select>
                <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">expand_more</span>
              </div>
            </div>

            {/* Due Date */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface font-semibold">تاريخ التسليم المستهدف</label>
              <input
                className="w-full h-10 px-md rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container-high transition-colors"
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
              />
            </div>

            {/* Budget */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface font-semibold">ميزانية المشروع وسعر البيع ($)</label>
              <div className="relative">
                <input
                  className="w-full h-10 pr-md pl-10 rounded-xl bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:bg-surface-container-high transition-colors"
                  placeholder="25000"
                  type="number"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                />
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">attach_money</span>
              </div>
            </div>

            {/* Cost */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface font-semibold">التكلفة التشغيلية المتوقعة ($)</label>
              <div className="relative">
                <input
                  className="w-full h-10 pr-md pl-10 rounded-xl bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:bg-surface-container-high transition-colors"
                  placeholder="8500"
                  type="number"
                  name="cost"
                  value={formData.cost}
                  onChange={handleChange}
                />
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">attach_money</span>
              </div>
            </div>

            {/* Notes */}
            <div className="flex flex-col gap-xs md:col-span-2">
              <label className="font-label-md text-label-md text-on-surface font-semibold">ملاحظات أولية ونطاق العمل</label>
              <textarea
                className="w-full p-md rounded-xl bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:bg-surface-container-high transition-colors resize-none"
                placeholder="أدخل ملخص مخرجات المشروع، متطلبات الربط، وروابط التصاميم المعتمدة..."
                rows={3}
                name="notes"
                value={formData.notes}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-md px-xl bg-surface-container-low flex flex-col sm:flex-row items-center justify-end gap-sm border-none">
          <button 
            className="w-full sm:w-auto px-lg py-xs rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-lg text-label-lg"
            onClick={onClose}
            type="button"
          >
            إلغاء
          </button>
          <button 
            className="w-full sm:w-auto flex items-center justify-center gap-xs px-xl py-xs rounded-xl bg-primary-container text-on-primary hover:bg-secondary transition-colors font-label-lg text-label-lg shadow-md active:scale-95"
            onClick={handleSave}
            disabled={isSaving}
            type="button"
          >
            {isSaving ? (
              <>
                <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                <span>جاري الحفظ...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">save</span>
                <span>إنشاء وبدء المشروع</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}