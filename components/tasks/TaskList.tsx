'use client';

import { useState } from 'react';

interface Task {
  id: number;
  title: string;
  project: string;
  projectIcon: string;
  priority: string;
  priorityColor: string;
  status: string;
  statusColor: string;
  assignee: string;
  assigneeInitial: string;
  assigneeImage?: string;
  dueDate: string;
  dueStatus: string;
  isOverdue?: boolean;
  comments?: number;
  attachments?: number;
  description?: string;
}

interface TaskListProps {
  filter: string;
  searchQuery: string;
}

const tasksData: Task[] = [
  {
    id: 1,
    title: 'إصلاح ثغرة الربط مع بوابة الدفع ميسر (Moyasar API)',
    project: 'منصة المدفوعات السريعة',
    projectIcon: 'layers',
    priority: 'عاجل جداً',
    priorityColor: 'bg-error text-on-error',
    status: 'قيد التنفيذ',
    statusColor: 'bg-surface-container-high text-secondary',
    assignee: 'عمر الشريف',
    assigneeInitial: 'ع',
    dueDate: 'اليوم، ٠٢:٠٠ م',
    dueStatus: 'متأخر 28 ساعة',
    isOverdue: true,
    comments: 7,
    attachments: 0,
    description: 'انهيار مفاجئ للتطبيق عند تأكيد الطلب للطلبيات التي تتجاوز 15 عنصراً',
  },
  {
    id: 2,
    title: 'تسليم النماذج النهائية لواجهات تجربة المستخدم',
    project: 'تطبيق متجر الدانوب الغذائي',
    projectIcon: 'storefront',
    priority: 'مراجعة المدير',
    priorityColor: 'bg-error-container text-error',
    status: 'قيد المراجعة',
    statusColor: 'bg-surface-container text-tertiary',
    assignee: 'سارة القحطاني',
    assigneeInitial: 'س',
    dueDate: 'اليوم، ٠٤:٣٠ م',
    dueStatus: 'مطلوب مراجعة',
    comments: 0,
    attachments: 3,
    description: 'إعادة هيكلة كائن الدفع لدعم بوابات مدى، فيزا، وماستركارد',
  },
  {
    id: 3,
    title: 'إعداد تقرير مؤشرات الأداء الفني لشهر أكتوبر',
    project: 'نظام مراقبة السيرفرات السحابية',
    projectIcon: 'query_stats',
    priority: 'أولوية عادية',
    priorityColor: 'bg-surface-container-high text-primary',
    status: 'قيد التنفيذ',
    statusColor: 'bg-surface-container-high text-secondary',
    assignee: 'فهد الدوسري',
    assigneeInitial: 'ف',
    dueDate: 'غداً، ١١:٠٠ ص',
    dueStatus: 'مجدولة',
    comments: 0,
    attachments: 0,
  },
];

export default function TaskList({ filter, searchQuery }: TaskListProps) {
  const [checkedTasks, setCheckedTasks] = useState<number[]>([]);

  const filteredTasks = tasksData.filter((task) => {
    const matchesFilter = filter === 'all' || 
      (filter === 'todo' && task.status === 'قيد الانتظار') ||
      (filter === 'inprogress' && task.status === 'قيد التنفيذ') ||
      (filter === 'review' && task.status === 'قيد المراجعة') ||
      (filter === 'completed' && checkedTasks.includes(task.id));
    
    const matchesSearch = task.title.includes(searchQuery) || 
      task.project.includes(searchQuery) ||
      task.assignee.includes(searchQuery);
    
    return matchesFilter && matchesSearch;
  });

  const toggleTask = (taskId: number) => {
    setCheckedTasks(prev =>
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId) 
        : [...prev, taskId]
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-md">
      {filteredTasks.map((task) => (
        <div 
          key={task.id}
          className={`bg-surface-container-lowest p-md rounded-xl shadow-sm flex flex-col gap-sm hover:shadow-md transition-all group ${
            checkedTasks.includes(task.id) ? 'opacity-60' : ''
          }`}
        >
          <div className="flex items-center justify-between">
            <span className={`px-xs py-2xs rounded-md bg-surface-container text-primary font-label-sm text-label-sm font-semibold flex items-center gap-2xs`}>
              <span className="material-symbols-outlined text-[14px]">{task.projectIcon}</span>
              <span className="truncate max-w-[100px]">{task.project}</span>
            </span>
            <span className={`px-xs py-2xs rounded-full font-label-sm text-label-sm flex items-center gap-2xs ${task.priorityColor}`}>
              {task.isOverdue && (
                <span className="material-symbols-outlined text-[12px]">emergency</span>
              )}
              <span>{task.priority}</span>
            </span>
          </div>

          <div className="flex items-start gap-xs">
            <button 
              className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                checkedTasks.includes(task.id) 
                  ? 'bg-primary border-primary text-on-primary' 
                  : 'border-outline hover:border-primary'
              }`}
              onClick={() => toggleTask(task.id)}
            >
              {checkedTasks.includes(task.id) && (
                <span className="material-symbols-outlined text-[14px]">check</span>
              )}
            </button>
            <div className="flex-1 min-w-0">
              <h4 className={`font-label-lg text-label-lg leading-tight hover:text-primary cursor-pointer transition-colors ${
                checkedTasks.includes(task.id) ? 'line-through text-on-surface-variant' : 'text-on-surface'
              }`}>
                {task.title}
              </h4>
              {task.description && (
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-1">
                  {task.description}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between pt-xs text-outline font-body-sm text-body-sm">
            <div className="flex items-center gap-xs min-w-0">
              <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm flex-shrink-0">
                {task.assigneeInitial}
              </div>
              <span className="font-label-sm text-label-sm text-on-surface truncate">{task.assignee}</span>
            </div>
            <div className="flex items-center gap-xs text-outline flex-shrink-0">
              {task.attachments && task.attachments > 0 && (
                <span className="flex items-center gap-2xs font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px]">attach_file</span> {task.attachments}
                </span>
              )}
              {task.comments && task.comments > 0 && (
                <span className="flex items-center gap-2xs font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px]">chat_bubble_outline</span> {task.comments}
                </span>
              )}
            </div>
          </div>

          <div className={`flex items-center justify-between text-label-sm font-label-sm pt-2xs px-xs py-1 rounded-md ${
            task.isOverdue ? 'bg-error-container text-on-error-container' : 'bg-surface-container-low'
          }`}>
            <span className="flex items-center gap-2xs text-outline">
              <span className="material-symbols-outlined text-[14px]">event</span>
              <span>{task.dueDate}</span>
            </span>
            <span className={task.isOverdue ? 'text-error font-semibold' : 'text-on-surface-variant'}>
              {task.dueStatus}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}