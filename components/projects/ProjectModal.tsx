'use client';

import { useState, useEffect } from 'react';
import { createProject } from '@/lib/supabase/db';
import { ProjectDB } from '@/lib/supabase/types';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProjectCreated?: () => void;
}

export default function ProjectModal({ isOpen, onClose, onProjectCreated }: ProjectModalProps) {
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    client: '',
    status: 'قيد التطوير',
    progress: 0,
    tasks: '',
    assignee: 'ماجد عبد الله',
    assignee_initial: 'م',
    due_date: '',
    due_status: 'قيد التنفيذ',
    budget: '',
    received: '$0',
    icon: 'shopping_bag',
    icon_bg: 'bg-primary-fixed text-primary',
    is_overdue: false,
    is_completed: false,
    is_quote: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // منع التمرير خلف المودال
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

  // تحديث الحرف الأول من المسؤول تلقائياً
  useEffect(() => {
    if (formData.assignee) {
      const initial = formData.assignee.charAt(0);
      setFormData(prev => ({ ...prev, assignee_initial: initial }));
    }
  }, [formData.assignee]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // مسح الخطأ عند التعديل
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'اسم المشروع مطلوب';
    }
    if (!formData.client.trim()) {
      newErrors.client = 'اسم العميل مطلوب';
    }
    if (!formData.assignee.trim()) {
      newErrors.assignee = 'المسؤول مطلوب';
    }
    if (!formData.due_date) {
      newErrors.due_date = 'تاريخ التسليم مطلوب';
    }
    if (!formData.budget || Number(formData.budget) <= 0) {
      newErrors.budget = 'الميزانية مطلوبة وقيمتها يجب أن تكون أكبر من 0';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setIsSaving(true);

    try {
      const newProject: Omit<ProjectDB, 'id' | 'created_at' | 'updated_at'> = {
        title: formData.title,
        client: formData.client,
        status: formData.status,
        progress: Number(formData.progress),
        tasks: formData.tasks || '0 مهمة',
        assignee: formData.assignee,
        assignee_initial: formData.assignee_initial || formData.assignee.charAt(0),
        due_date: formData.due_date,
        due_status: 'قيد التنفيذ',
        budget: formData.budget.startsWith('$') ? formData.budget : `$${formData.budget}`,
        received: '$0',
        icon: formData.icon,
        icon_bg: formData.icon_bg,
        is_overdue: false,
        is_completed: false,
        is_quote: false,
      };

      await createProject(newProject);
      
      // إعادة تحميل البيانات
      if (onProjectCreated) {
        onProjectCreated();
      }
      
      // إغلاق المودال
      onClose();
      
      // إعادة تعيين النموذج
      setFormData({
        title: '',
        client: '',
        status: 'قيد التطوير',
        progress: 0,
        tasks: '',
        assignee: 'ماجد عبد الله',
        assignee_initial: 'م',
        due_date: '',
        due_status: 'قيد التنفيذ',
        budget: '',
        received: '$0',
        icon: 'shopping_bag',
        icon_bg: 'bg-primary-fixed text-primary',
        is_overdue: false,
        is_completed: false,
        is_quote: false,
      });
      setErrors({});

    } catch (error) {
      console.error('Error creating project:', error);
      setErrors({ submit: error instanceof Error ? error.message : 'حدث خطأ في حفظ المشروع' });
    } finally {
      setIsSaving(false);
    }
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
              <span className="material-symbols-outlined text-[26px]">create_new_folder</span>
            </div>
            <div className="flex flex-col gap-2xs">
              <div className="flex items-center gap-xs">
                <span className="px-xs py-2xs rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold">
                  SeedOS CRM
                </span>
                <span className="text-label-sm text-on-surface-variant">مشروع جديد</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                إضافة مشروع جديد
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
                أدخل بيانات المشروع واربطه بالعميل لتتبع الميزانية والمواعيد النهائية بكفاءة.
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
        <form className="p-xl flex flex-col gap-xl max-h-[75vh] overflow-y-auto" onSubmit={handleSubmit}>
          {/* Section 1: Project Info */}
          <div className="flex flex-col gap-sm">
            <div className="flex items-center gap-xs pb-2xs border-b border-surface-container-high">
              <span className="material-symbols-outlined text-primary text-[20px]">info</span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">معلومات المشروع الأساسية</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md pt-xs">
              {/* Project Name */}
              <div className="flex flex-col gap-2xs md:col-span-2">
                <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
                  <span>اسم المشروع</span>
                  <span className="text-error">*</span>
                </label>
                <input
                  className={`w-full h-11 px-md rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container focus:ring-2 focus:ring-primary/20 transition-all ${
                    errors.title ? 'border-2 border-error' : 'border border-surface-container-high'
                  }`}
                  placeholder="مثال: تطبيق متجر الدانوب للتجزئة"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
                {errors.title && (
                  <span className="text-error font-label-sm text-label-sm mt-1">{errors.title}</span>
                )}
              </div>

              {/* Client */}
              <div className="flex flex-col gap-2xs">
                <div className="flex items-center justify-between">
                  <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
                    <span>العميل</span>
                    <span className="text-error">*</span>
                  </label>
                  <button className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-0.5" type="button">
                    <span className="material-symbols-outlined text-[14px]">add</span>
                    <span className="hidden xs:inline">عميل جديد</span>
                  </button>
                </div>
                <select
                  className={`w-full h-11 px-md rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer ${
                    errors.client ? 'border-2 border-error' : 'border border-surface-container-high'
                  }`}
                  name="client"
                  value={formData.client}
                  onChange={handleChange}
                >
                  <option value="">اختر العميل</option>
                  <option value="مجموعة الدانوب">مجموعة الدانوب للتجزئة</option>
                  <option value="شركة الشحن السريع">شركة الشحن السريع</option>
                  <option value="تكنو للاستثمار">تكنو للاستثمار العقاري</option>
                  <option value="الأفق للإعلام">الأفق للإعلام الرقمي</option>
                  <option value="فنتك باي">فنتك باي للحلول المالية</option>
                  <option value="مركز النخبة">مركز النخبة الطبي</option>
                </select>
                <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">expand_more</span>
                {errors.client && (
                  <span className="text-error font-label-sm text-label-sm">{errors.client}</span>
                )}
              </div>

              {/* Status */}
              <div className="flex flex-col gap-2xs">
                <label className="font-label-md text-label-md text-on-surface font-semibold">الحالة الابتدائية</label>
                <select
                  className="w-full h-11 px-md rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer border border-surface-container-high"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="عرض سعر">عرض سعر (Proposal)</option>
                  <option value="دفعة أولى">دفعة أولى (Deposit)</option>
                  <option value="قيد التطوير">قيد التطوير (In Progress)</option>
                  <option value="قيد المراجعة">قيد المراجعة (Review)</option>
                  <option value="تم التسليم">تم التسليم (Completed)</option>
                </select>
                <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">expand_more</span>
              </div>
            </div>
          </div>

          {/* Section 2: Team & Schedule */}
          <div className="flex flex-col gap-sm">
            <div className="flex items-center gap-xs pb-2xs border-b border-surface-container-high">
              <span className="material-symbols-outlined text-secondary text-[20px]">assignment_ind</span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">الفريق والجدول الزمني</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md pt-xs">
              {/* Assignee */}
              <div className="flex flex-col gap-2xs">
                <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
                  <span>مدير المشروع</span>
                  <span className="text-error">*</span>
                </label>
                <select
                  className={`w-full h-11 px-md rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer ${
                    errors.assignee ? 'border-2 border-error' : 'border border-surface-container-high'
                  }`}
                  name="assignee"
                  value={formData.assignee}
                  onChange={handleChange}
                >
                  <option value="ماجد عبد الله">ماجد عبد الله (Senior PM)</option>
                  <option value="سارة ناصر">سارة ناصر (Technical Lead)</option>
                  <option value="طارق العلي">طارق العلي (Agency Owner)</option>
                  <option value="أحمد الخالدي">أحمد الخالدي (Infra Lead)</option>
                  <option value="نورة السديري">نورة السديري (UX Designer)</option>
                </select>
                <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">expand_more</span>
                {errors.assignee && (
                  <span className="text-error font-label-sm text-label-sm">{errors.assignee}</span>
                )}
              </div>

              {/* Due Date */}
              <div className="flex flex-col gap-2xs">
                <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
                  <span>تاريخ التسليم المستهدف</span>
                  <span className="text-error">*</span>
                </label>
                <input
                  className={`w-full h-11 px-md rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container focus:ring-2 focus:ring-primary/20 transition-all ${
                    errors.due_date ? 'border-2 border-error' : 'border border-surface-container-high'
                  }`}
                  type="date"
                  name="due_date"
                  value={formData.due_date}
                  onChange={handleChange}
                />
                {errors.due_date && (
                  <span className="text-error font-label-sm text-label-sm">{errors.due_date}</span>
                )}
              </div>
            </div>
          </div>

          {/* Section 3: Budget */}
          <div className="flex flex-col gap-sm">
            <div className="flex items-center gap-xs pb-2xs border-b border-surface-container-high">
              <span className="material-symbols-outlined text-tertiary text-[20px]">monetization_on</span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">الميزانية والتفاصيل المالية</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md pt-xs">
              {/* Budget */}
              <div className="flex flex-col gap-2xs">
                <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
                  <span>الميزانية الإجمالية ($)</span>
                  <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <input
                    className={`w-full h-11 pr-md pl-10 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container focus:ring-2 focus:ring-primary/20 transition-all ${
                      errors.budget ? 'border-2 border-error' : 'border border-surface-container-high'
                    }`}
                    placeholder="مثال: 18000"
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  />
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">attach_money</span>
                </div>
                {errors.budget && (
                  <span className="text-error font-label-sm text-label-sm">{errors.budget}</span>
                )}
              </div>

              {/* Progress */}
              <div className="flex flex-col gap-2xs">
                <label className="font-label-md text-label-md text-on-surface font-semibold">نسبة الإنجاز الأولية (%)</label>
                <div className="relative">
                  <input
                    className="w-full h-11 pr-md pl-10 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container focus:ring-2 focus:ring-primary/20 transition-all border border-surface-container-high"
                    type="number"
                    min="0"
                    max="100"
                    name="progress"
                    value={formData.progress}
                    onChange={handleChange}
                  />
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">percent</span>
                </div>
              </div>

              {/* Tasks */}
              <div className="flex flex-col gap-2xs md:col-span-2">
                <label className="font-label-md text-label-md text-on-surface font-semibold">المهام الأساسية</label>
                <textarea
                  className="w-full p-md rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container focus:ring-2 focus:ring-primary/20 transition-all resize-none border border-surface-container-high"
                  placeholder="اذكر المهام الرئيسية للمشروع..."
                  rows={2}
                  name="tasks"
                  value={formData.tasks}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Errors Summary */}
          {errors.submit && (
            <div className="p-md rounded-xl bg-error-container text-on-error-container font-body-sm text-body-sm">
              <span className="material-symbols-outlined text-[18px] align-middle">error</span>
              <span className="mr-2">{errors.submit}</span>
            </div>
          )}

          {/* Footer Actions */}
          <div className="pt-md border-t border-surface-container-high flex flex-col sm:flex-row items-center justify-between gap-sm">
            <button
              type="button"
              className="w-full sm:w-auto px-lg py-xs rounded-xl bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors cursor-pointer"
              onClick={onClose}
            >
              إلغاء
            </button>
            <div className="flex flex-col sm:flex-row items-center gap-xs w-full sm:w-auto justify-end">
              <button
                type="button"
                className="w-full sm:w-auto px-md py-xs rounded-xl bg-surface-container-high text-primary font-label-md text-label-md hover:bg-primary-fixed transition-colors flex items-center justify-center gap-2xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                <span>حفظ والبدء فوراً</span>
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="w-full sm:w-auto px-xl py-xs rounded-xl bg-primary-container text-on-primary font-label-md text-label-md hover:bg-secondary transition-all shadow-md flex items-center justify-center gap-2xs cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? (
                  <>
                    <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                    <span>جاري الحفظ...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    <span>حفظ وإنشاء المشروع</span>
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