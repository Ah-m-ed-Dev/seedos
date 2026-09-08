'use client';

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  progress?: number;
  badge?: string;
  badgeColor?: string;
  footer?: string;
  footerValue?: string;
}

const StatCard = ({ 
  title, 
  value, 
  subtitle, 
  icon, 
  iconBg, 
  iconColor,
  progress,
  badge,
  badgeColor,
  footer,
  footerValue
}: StatCardProps) => (
  <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm flex flex-col justify-between gap-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <span className="font-label-md text-label-md text-outline">{title}</span>
      <div className={`w-8 h-8 rounded-full ${iconBg} flex items-center justify-center ${iconColor}`}>
        <span className="material-symbols-outlined text-[18px]">{icon}</span>
      </div>
    </div>
    <div className="flex items-baseline gap-xs">
      <span className="font-numeric-stat text-numeric-stat text-on-surface leading-none">{value}</span>
      <span className="font-label-sm text-label-sm text-outline">{subtitle}</span>
    </div>
    {footer && (
      <div className="flex items-center justify-between text-body-sm font-body-sm pt-xs">
        <span className="text-on-surface-variant">{footer}</span>
        {footerValue && (
          <span className={`px-xs py-2xs rounded-full ${badgeColor || 'bg-surface-container-high text-primary'} font-label-sm text-label-sm`}>
            {footerValue}
          </span>
        )}
      </div>
    )}
    {progress !== undefined && (
      <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
        <div className={`h-full ${iconColor.replace('text-', 'bg-')} rounded-full transition-all duration-500`} style={{ width: `${progress}%` }}></div>
      </div>
    )}
    {badge && (
      <div className={`flex items-center gap-xs font-body-sm text-body-sm ${badgeColor || 'text-on-surface-variant'}`}>
        <span className="material-symbols-outlined text-[16px]">{badge}</span>
        <span>{badge}</span>
      </div>
    )}
  </div>
);

export default function TaskStats() {
  const stats = [
    {
      title: 'إجمالي مهام اليوم',
      value: '34',
      subtitle: 'مهمة نشطة',
      icon: 'format_list_bulleted',
      iconBg: 'bg-surface-container',
      iconColor: 'text-primary',
      progress: 35,
      footer: 'تم إنجاز 12 مهمة',
      footerValue: '35%',
      badgeColor: 'bg-surface-container-high text-primary',
    },
    {
      title: 'مهام قيد التنفيذ',
      value: '14',
      subtitle: 'تتطلب تركيزاً',
      icon: 'pending_actions',
      iconBg: 'bg-surface-container-high',
      iconColor: 'text-secondary',
      progress: 58,
      badge: 'موزعة عبر 5 مشاريع استراتيجية',
    },
    {
      title: 'مهام حرجة متأخرة',
      value: '3',
      subtitle: 'تتطلب تدخلاً فورياً',
      icon: 'warning',
      iconBg: 'bg-error-container',
      iconColor: 'text-error',
      progress: 82,
      footer: 'تأخير تخطى 24 ساعة',
      footerValue: 'عاجل جداً',
      badgeColor: 'bg-error-container text-on-error-container',
    },
    {
      title: 'معدل الإنجاز الأسبوعي',
      value: '88%',
      subtitle: 'مقارنة بالأسبوع الماضي',
      icon: 'trending_up',
      iconBg: 'bg-surface-container',
      iconColor: 'text-primary',
      progress: 88,
      badge: '+6.4%',
      badgeColor: 'bg-surface-container-high text-primary',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sm md:gap-md">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}