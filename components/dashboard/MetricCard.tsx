'use client';

interface MetricCardProps {
  title: string;
  value: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  progress?: number;
  progressLabel?: string;
  progressValue?: string;
  progressColor?: string;  // ✅ أضف هذا
  barColor?: string;       // ✅ أضف هذا
  footer?: string;
  badge?: string;
  badgeColor?: string;
  alert?: string;
  alertType?: string;
  description?: string;
  subtitle?: string;
  status?: string;
}

export default function MetricCard({
  title,
  value,
  icon,
  iconBg,
  iconColor,
  progress,
  progressLabel,
  progressValue,
  progressColor = 'text-primary',  // ✅ قيمة افتراضية
  barColor = 'bg-primary',        // ✅ قيمة افتراضية
  footer,
  badge,
  badgeColor = 'bg-secondary-fixed text-primary',
  alert,
  alertType = 'error',
  description,
  subtitle,
  status,
}: MetricCardProps) {
  return (
    <div className="flex flex-col justify-between p-lg rounded-full bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <span className="font-label-md text-label-md text-on-surface-variant">{title}</span>
          <span className="font-numeric-stat text-numeric-stat text-on-surface mt-2xs">{value}</span>
        </div>
        <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center ${iconColor}`}>
          <span className="material-symbols-outlined text-[24px]">{icon}</span>
        </div>
      </div>
      <div className="mt-md flex flex-col gap-xs">
        {progress !== undefined && (
          <>
            <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
              <span>{progressLabel}</span>
              <span className={`font-label-md text-label-md ${progressColor}`}>{progressValue}</span>
            </div>
            <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
              <div className={`h-full ${barColor} rounded-full transition-all duration-500`} style={{ width: `${progress}%` }}></div>
            </div>
          </>
        )}
        
        {alert && (
          <>
            <div className="flex items-center gap-xs">
              <span className={`px-xs py-2xs rounded-full bg-${alertType} text-on-${alertType} font-label-sm text-label-sm flex items-center gap-2xs`}>
                <span className="material-symbols-outlined text-[14px]">warning</span>
                <span>{alert}</span>
              </span>
              <span className="font-label-sm text-label-sm text-error">مواعيد نهائية حرجة</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{description}</p>
          </>
        )}

        {badge && (
          <>
            <div className="flex items-center gap-xs">
              <span className={`px-xs py-2xs rounded-full bg-surface-container-high font-label-sm text-label-sm flex items-center gap-2xs ${badgeColor || ''}`}>
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                <span>{badge}</span>
              </span>
              {subtitle && <span className="font-body-sm text-body-sm text-on-surface-variant">{subtitle}</span>}
            </div>
            {status && (
              <div className="flex items-center gap-2xs text-body-sm font-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
                <span>{status}</span>
              </div>
            )}
          </>
        )}

        {footer && !badge && (
          <div className="flex items-center justify-between mt-2xs">
            <span className="font-body-sm text-body-sm text-on-surface-variant">{footer}</span>
            {badge && <span className={`px-xs py-2xs rounded-full ${badgeColor} font-label-sm text-label-sm`}>{badge}</span>}
          </div>
        )}

        {footer && badge && (
          <div className="flex items-center justify-between mt-2xs">
            <span className="font-body-sm text-body-sm text-on-surface-variant">{footer}</span>
            <span className={`px-xs py-2xs rounded-full ${badgeColor} font-label-sm text-label-sm`}>{badge}</span>
          </div>
        )}

        {subtitle && !badge && !alert && (
          <span className="font-label-sm text-label-sm text-on-surface-variant">{subtitle}</span>
        )}
      </div>
    </div>
  );
}