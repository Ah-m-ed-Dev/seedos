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

interface KpiStats {
  total: number;
  inProgress: number;
  inReview: number;
  completed: number;
  quotes: number;
  totalBudget: string;
}

interface KpiCardsProps {
  projects: Project[];
  stats: KpiStats;
}

interface KpiItem {
  title: string;
  value: string | number;
  icon: string;
  iconColor: string;
  barColor: string;
  badge?: string;
  badgeIcon?: string;
  badgeColor?: string;
  progress?: number;
  progressLabel?: string;
  subtitle?: string;
  subtitleIcon?: string;
}

export default function KpiCards({ projects, stats }: KpiCardsProps) {
  // حساب نسبة الإنجاز الكلي
  const totalProgress = projects.length > 0 
    ? Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length)
    : 0;

  // حساب عدد المشاريع المتأخرة
  const overdueCount = projects.filter(p => p.isOverdue).length;

  const kpiData: KpiItem[] = [
    {
      title: 'إجمالي المشاريع',
      value: stats.total,
      icon: 'folder_open',
      iconColor: 'text-primary',
      barColor: 'bg-primary',
      badge: `+${projects.filter(p => p.progress > 0).length} نشط`,
      badgeIcon: 'trending_up',
      badgeColor: 'text-secondary',
    },
    {
      title: 'قيد التطوير',
      value: stats.inProgress,
      icon: 'code_blocks',
      iconColor: 'text-primary-container',
      barColor: 'bg-primary-container',
      progress: stats.total > 0 ? Math.round((stats.inProgress / stats.total) * 100) : 0,
      progressLabel: `من ${stats.total}`,
    },
    {
      title: 'قيد المراجعة',
      value: stats.inReview,
      icon: 'rate_review',
      iconColor: 'text-secondary-container',
      barColor: 'bg-secondary-container',
      subtitle: overdueCount > 0 ? `${overdueCount} متأخرة` : 'جميعها في الموعد',
      subtitleIcon: overdueCount > 0 ? 'schedule' : 'check_circle',
    },
    {
      title: 'عروض وأوليات',
      value: stats.quotes,
      icon: 'payments',
      iconColor: 'text-tertiary',
      barColor: 'bg-tertiary',
      badge: stats.totalBudget,
      badgeIcon: 'monetization_on',
      badgeColor: 'text-tertiary',
    },
    {
      title: 'تم التسليم',
      value: stats.completed,
      icon: 'verified',
      iconColor: 'text-secondary',
      barColor: 'bg-secondary',
      badge: `نسبة إنجاز ${totalProgress}%`,
      badgeIcon: 'task_alt',
      badgeColor: 'text-secondary',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-sm md:gap-md">
      {kpiData.map((kpi, index) => (
        <div 
          key={index}
          className={`bg-surface-container-lowest p-lg rounded-xl flex flex-col gap-2xs shadow-sm hover:shadow-md transition-shadow relative overflow-hidden ${index === 4 ? 'col-span-2 md:col-span-1' : ''}`}
        >
          <div className={`w-1 absolute top-0 bottom-0 right-0 ${kpi.barColor || 'bg-primary'}`}></div>
          <div className="flex items-center justify-between">
            <span className="font-label-md text-label-md text-on-surface-variant">{kpi.title}</span>
            <span className={`material-symbols-outlined text-[20px] ${kpi.iconColor}`}>{kpi.icon}</span>
          </div>
          <div className="flex items-baseline gap-xs">
            <span className="font-numeric-stat text-numeric-stat text-on-surface">{kpi.value}</span>
            {kpi.progressLabel && (
              <span className="font-label-sm text-label-sm text-on-surface-variant">{kpi.progressLabel}</span>
            )}
          </div>
          
          {kpi.progress !== undefined && (
            <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden mt-xs">
              <div className={`${kpi.barColor} h-full rounded-full transition-all duration-500`} style={{ width: `${Math.min(kpi.progress, 100)}%` }}></div>
            </div>
          )}
          
          {kpi.badge && (
            <div className={`flex items-center gap-2xs mt-xs font-label-sm text-label-sm ${kpi.badgeColor || 'text-secondary'}`}>
              <span className="material-symbols-outlined text-[14px]">{kpi.badgeIcon}</span>
              <span>{kpi.badge}</span>
            </div>
          )}
          
          {kpi.subtitle && (
            <div className={`flex items-center gap-2xs mt-xs font-label-sm text-label-sm ${overdueCount > 0 && kpi.title === 'قيد المراجعة' ? 'text-error' : 'text-on-surface-variant'}`}>
              <span className="material-symbols-outlined text-[14px]">{kpi.subtitleIcon}</span>
              <span>{kpi.subtitle}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}