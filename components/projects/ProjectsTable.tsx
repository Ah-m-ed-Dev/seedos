'use client';

interface Project {
  id: number;
  title: string;
  client: string;
  status: string;
  progress: number;
  tasks: string;
  assignee: string;
  assigneeInitial: string;
  dueDate: string;
  dueStatus: string;
  dueColor?: string;
  budget: string;
  received: string;
  icon: string;
  iconBg: string;
  isOverdue?: boolean;
  isCompleted?: boolean;
  isQuote?: boolean;
}

interface ProjectsTableProps {
  projects: Project[];
}

const getStatusColor = (status: string): string => {
  switch (status) {
    case 'قيد التطوير':
      return 'bg-primary-fixed text-primary';
    case 'قيد المراجعة':
      return 'bg-secondary-container text-on-primary';
    case 'تم التسليم':
      return 'bg-surface-container text-on-surface';
    case 'دفعة أولى':
      return 'bg-secondary-fixed text-secondary';
    case 'عرض سعر':
      return 'bg-surface-container text-on-surface-variant';
    default:
      return 'bg-surface-container text-on-surface';
  }
};

const getStatusDot = (status: string): string => {
  switch (status) {
    case 'قيد التطوير':
      return 'w-1.5 h-1.5 rounded-full bg-primary animate-pulse';
    case 'قيد المراجعة':
      return 'w-1.5 h-1.5 rounded-full bg-surface-container-lowest';
    case 'تم التسليم':
      return 'material-symbols-outlined text-[14px] text-primary check_circle';
    case 'دفعة أولى':
      return 'w-1.5 h-1.5 rounded-full bg-secondary';
    case 'عرض سعر':
      return 'w-1.5 h-1.5 rounded-full bg-outline';
    default:
      return 'w-1.5 h-1.5 rounded-full bg-outline';
  }
};

export default function ProjectsTable({ projects }: ProjectsTableProps) {
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
            {projects.map((project) => (
              <tr key={project.id} className="project-row group hover:bg-surface-container-low transition-colors">
                <td className="py-md px-lg">
                  <div className="flex items-center gap-sm">
                    <div className={`w-10 h-10 rounded-xl ${project.iconBg} flex items-center justify-center shrink-0 shadow-sm`}>
                      <span className="material-symbols-outlined text-[22px]">{project.icon}</span>
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
                    {project.status === 'تم التسليم' ? (
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
                      <span className="text-on-surface font-semibold">{project.progress}%</span>
                      <span className="text-on-surface-variant">{project.tasks}</span>
                    </div>
                    <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          project.isCompleted ? 'bg-primary' : 
                          project.isOverdue ? 'bg-error' : 
                          project.isQuote ? 'bg-outline-variant' : 
                          'bg-primary'
                        }`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="py-md px-md">
                  <div className="flex items-center gap-xs">
                    <div className={`w-7 h-7 rounded-full ${project.assignee === 'ماجد عبد الله' ? 'bg-primary-container' : project.assignee === 'سارة ناصر' ? 'bg-tertiary-container' : 'bg-primary'} text-on-primary flex items-center justify-center font-label-sm text-label-sm`}>
                      {project.assigneeInitial}
                    </div>
                    <span className="font-body-md text-body-md text-on-surface">{project.assignee}</span>
                  </div>
                </td>
                <td className="py-md px-md">
                  <div className="flex flex-col">
                    <span className={`font-body-md text-body-md font-semibold ${project.isOverdue ? 'text-error' : 'text-on-surface'}`}>
                      {project.isOverdue && (
                        <span className="material-symbols-outlined text-[16px]">warning</span>
                      )}
                      {project.dueDate}
                    </span>
                    <span className={`font-label-sm text-label-sm ${project.isOverdue ? 'text-error bg-error-container text-on-error-container px-1.5 py-0.5 rounded w-fit' : 'text-on-surface-variant'}`}>
                      {project.dueStatus}
                    </span>
                  </div>
                </td>
                <td className="py-md px-md">
                  <div className="flex flex-col">
                    <span className="font-body-md text-body-md text-on-surface font-bold">{project.budget}</span>
                    <span className={`font-label-sm text-label-sm ${project.isCompleted ? 'text-on-surface-variant' : 'text-secondary font-semibold'}`}>
                      {project.isCompleted ? 'مدفوع بالكامل' : `مستلم: ${project.received}`}
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
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="p-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-md text-on-surface-variant font-label-md text-label-md">
        <div className="flex items-center gap-xs">
          <span>عرض <span className="font-bold text-on-surface">1-{Math.min(projects.length, 6)}</span> من أصل <span className="font-bold text-on-surface">{projects.length}</span> مشروع مسجل</span>
        </div>
        <div className="flex items-center gap-xs">
          <button className="p-xs rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors shadow-sm disabled:opacity-50" disabled type="button">
            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
          </button>
          <button className="w-8 h-8 rounded-xl bg-primary text-on-primary font-bold shadow-sm" type="button">1</button>
          <button className="w-8 h-8 rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors shadow-sm" type="button">2</button>
          <button className="w-8 h-8 rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors shadow-sm" type="button">3</button>
          <button className="w-8 h-8 rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors shadow-sm" type="button">4</button>
          <button className="p-xs rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors shadow-sm" type="button">
            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
          </button>
        </div>
      </div>
    </div>
  );
}