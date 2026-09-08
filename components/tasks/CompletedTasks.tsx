'use client';

import { useState } from 'react';

const completedTasks = [
  {
    id: 1,
    title: 'مزامنة شهادات SSL مع مزود كلاود فلاير',
    assignee: 'عمر الشريف',
    time: '٠٩:١٥ ص',
  },
  {
    id: 2,
    title: 'اعتماد فواتير المستقلين لقسم التصميم',
    assignee: 'نورة السديري',
    time: '١١:٤٠ ص',
  },
  {
    id: 3,
    title: 'تحديث قاعدة بيانات العملاء الجدد',
    assignee: 'سارة القحطاني',
    time: '٠٢:٣٠ م',
  },
];

export default function CompletedTasks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col space-y-xs pt-xs">
      <button 
        className="w-full flex items-center justify-between p-sm rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-xs">
          <span className="w-6 h-6 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary font-bold text-[12px]">
            {completedTasks.length}
          </span>
          <span className="font-headline-sm text-headline-sm text-on-surface">المهام المنجزة اليوم</span>
        </div>
        <div className="flex items-center gap-xs text-on-surface-variant">
          <span className="font-label-sm text-label-sm">عرض القائمة</span>
          <span className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            expand_more
          </span>
        </div>
      </button>
      
      {isOpen && (
        <div className="space-y-xs animate-in slide-in-from-top-2 duration-200">
          {completedTasks.map((task) => (
            <div 
              key={task.id}
              className="flex items-center justify-between p-sm rounded-xl bg-surface-container-lowest/80 opacity-80 transition-all"
            >
              <div className="flex items-center gap-sm min-w-0">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-on-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-body-md text-body-md text-on-surface-variant line-through truncate">
                    {task.title}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant/70">
                    أُنجزت بواسطة {task.assignee} • {task.time}
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-primary text-[20px] flex-shrink-0">verified</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}