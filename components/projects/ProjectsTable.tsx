'use client';

import { useState } from 'react';
import { Project } from '@/lib/supabase/types';

interface ProjectsTableProps {
  projects: Project[];
}

const getStatusColor = (status: string): string => {
  const statusMap: { [key: string]: string } = {
    'قيد التطوير': 'bg-primary-fixed text-primary',
    'قيد التنفيذ': 'bg-primary-fixed text-primary',
    'قيد المراجعة': 'bg-secondary-container text-on-primary',
    'تم التسليم': 'bg-surface-container text-on-surface',
    'مكتمل': 'bg-surface-container text-on-surface',
    'دفعة أولى': 'bg-secondary-fixed text-secondary',
    'عرض سعر': 'bg-surface-container text-on-surface-variant',
  };
  return statusMap[status] || 'bg-surface-container text-on-surface';
};

const getStatusDot = (status: string): string => {
  const dotMap: { [key: string]: string } = {
    'قيد التطوير': 'w-1.5 h-1.5 rounded-full bg-primary animate-pulse',
    'قيد التنفيذ': 'w-1.5 h-1.5 rounded-full bg-primary animate-pulse',
    'قيد المراجعة': 'w-1.5 h-1.5 rounded-full bg-surface-container-lowest',
    'تم التسليم': 'material-symbols-outlined text-[14px] text-primary check_circle',
    'مكتمل': 'material-symbols-outlined text-[14px] text-primary check_circle',
    'دفعة أولى': 'w-1.5 h-1.5 rounded-full bg-secondary',
    'عرض سعر': 'w-1.5 h-1.5 rounded-full bg-outline',
  };
  return dotMap[status] || 'w-1.5 h-1.5 rounded-full bg-outline';
};

export default function ProjectsTable({ projects }: ProjectsTableProps) {
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const getAssigneeColor = (assignee: string): string => {
    const colorMap: { [key: string]: string } = {
      'ماجد عبد الله': 'bg-primary-container',
      'سارة ناصر': 'bg-tertiary-container',
      'طارق العلي': 'bg-primary',
      'أحمد الخالدي': 'bg-secondary-container',
      'نورة السديري': 'bg-tertiary-fixed',
    };
    return colorMap[assignee] || 'bg-primary';
  };

  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-right border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant font-label-md text-label-md border-none">
              <th className="py-md px-lg font-semibold">المشروع والعميل</th>
              <th className="py-md px-md font-semibold">الحالة الحالية</th>
              <th className="py-md px-md font-semibold w-48">نسبة الإنجاز</th>
              <th className="py-md px-md font-semibold">المسؤول</th>
              <th className="py-md px-md font-semibold">الموعد النهائي</th>
              <th className="py-md px-md font-semibold">الميزانية الإجمالية</th>
              <th className="py-md px-lg font-semibold text-center w-24">إجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-none">
            {projects.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-12 text-center text-on-surface-variant">
                  <div className="flex flex-col items-center gap-3">
                    <span className="material-symbols-outlined text-[48px] text-on-surface-variant">folder_open</span>
                    <span className="font-body-md">لا توجد مشاريع حالياً</span>
                  </div>
                </td>
              </tr>
            ) : (
              projects.slice(0, rowsPerPage).map((project) => {
                const isOverdue = project.isOverdue || false;
                const isCompleted = project.isCompleted || false;
                const isQuote = project.isQuote || false;
                
                return (
                  <tr key={project.id} className="project-row group hover:bg-surface-container-low transition-colors">
                    <td className="py-md px-lg">
                      <div className="flex items-center gap-sm">
                        <div className={`w-10 h-10 rounded-xl ${project.iconBg || 'bg-primary-fixed text-primary'} flex items-center justify-center shrink-0 shadow-sm`}>
                          <span className="material-symbols-outlined text-[22px]">{project.icon || 'folder'}</span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors truncate">
                            {project.title}
                          </span>
                          <div className="flex items-center gap-2xs text-on-surface-variant font-body-sm text-body-sm">
                            <span className="material-symbols-outlined text-[14px]">domain</span>
                            <span>{project.client}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-md px-md">
                      <span className={`inline-flex items-center gap-2xs px-sm py-1 rounded-full font-label-sm text-label-sm ${getStatusColor(project.status)}`}>
                        {project.status === 'تم التسليم' || project.status === 'مكتمل' ? (
                          <span className="material-symbols-outlined text-[14px] text-primary">check_circle</span>
                        ) : (
                          <span className={getStatusDot(project.status)}></span>
                        )}
                        <span>{project.status}</span>
                      </span>
                    </td>
                    <td className="py-md px-md">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between font-label-sm text-label-sm">
                          <span className="text-on-surface font-semibold">{project.progress || 0}%</span>
                          <span className="text-on-surface-variant">{project.tasks || '0 مهمة'}</span>
                        </div>
                        <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-500 ${
                              isCompleted ? 'bg-primary' : 
                              isOverdue ? 'bg-error' : 
                              isQuote ? 'bg-outline-variant' : 
                              'bg-primary'
                            }`}
                            style={{ width: `${project.progress || 0}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-md px-md">
                      <div className="flex items-center gap-xs">
                        <div className={`w-7 h-7 rounded-full ${getAssigneeColor(project.assignee)} text-on-primary flex items-center justify-center font-label-sm text-label-sm`}>
                          {project.assigneeInitial || project.assignee?.charAt(0) || '?'}
                        </div>
                        <span className="font-body-md text-body-md text-on-surface">{project.assignee || 'غير محدد'}</span>
                      </div>
                    </td>
                    <td className="py-md px-md">
                      <div className="flex flex-col">
                        <span className={`font-body-md text-body-md font-semibold ${isOverdue ? 'text-error' : 'text-on-surface'}`}>
                          {isOverdue && (
                            <span className="material-symbols-outlined text-[16px]">warning</span>
                          )}
                          {project.dueDate || 'غير محدد'}
                        </span>
                        <span className={`font-label-sm text-label-sm ${isOverdue ? 'text-error bg-error-container text-on-error-container px-1.5 py-0.5 rounded w-fit' : 'text-on-surface-variant'}`}>
                          {project.dueStatus || 'قيد التنفيذ'}
                        </span>
                      </div>
                    </td>
                    <td className="py-md px-md">
                      <div className="flex flex-col">
                        <span className="font-body-md text-body-md text-on-surface font-bold">{project.budget || '$0'}</span>
                        <span className={`font-label-sm text-label-sm ${isCompleted ? 'text-on-surface-variant' : 'text-secondary font-semibold'}`}>
                          {isCompleted ? 'مدفوع بالكامل' : `مستلم: ${project.received || '$0'}`}
                        </span>
                      </div>
                    </td>
                    <td className="py-md px-lg text-center">
                      <div className="flex items-center justify-center gap-1">
                        <button className="p-xs rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors" title="عرض التفاصيل" type="button">
                          <span className="material-symbols-outlined text-[20px]">visibility</span>
                        </button>
                        <button className="p-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="المزيد" type="button">
                          <span className="material-symbols-outlined text-[20px]">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="p-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-md text-on-surface-variant font-label-md text-label-md">
        <div className="flex items-center gap-xs">
          <span>عرض <span className="font-bold text-on-surface">{Math.min(projects.length, rowsPerPage)}</span> من أصل <span className="font-bold text-on-surface">{projects.length}</span> مشروع مسجل</span>
          <span className="mx-2xs text-outline-variant">•</span>
          <span>عرض لكل صفحة:</span>
          <select 
            className="bg-surface-container-lowest text-on-surface rounded-md px-xs py-2xs outline-none cursor-pointer"
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
          >
            <option value={6}>6</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div className="flex items-center gap-2xs">
          <button className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors disabled:opacity-40" disabled type="button">
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
          <button className="w-8 h-8 rounded-lg bg-primary text-on-primary font-bold flex items-center justify-center shadow-sm" type="button">1</button>
          <button className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors" type="button">2</button>
          <button className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors" type="button">3</button>
          <span className="px-2xs text-on-surface-variant">...</span>
          <button className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors" type="button">
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>
        </div>
      </div>
    </div>
  );
}