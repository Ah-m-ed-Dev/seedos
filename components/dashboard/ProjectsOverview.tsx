'use client';

const projects = [
  {
    name: 'تطبيق متجر الدانوب',
    client: 'مجموعة التجزئة الموحدة',
    icon: 'shopping_bag',
    iconBg: 'bg-primary-container text-on-primary',
    status: 'قيد التطوير',
    statusColor: 'bg-surface-container-high text-primary',
    stage: 'تكامل بوابات الدفع',
    progress: 80,
    budget: '$18,000',
    delivery: '15 نوفمبر',
    deliveryColor: 'text-primary',
  },
  {
    name: 'منصة لوجستية سريعة',
    client: 'شركة الشحن البري الدولي',
    icon: 'local_shipping',
    iconBg: 'bg-tertiary-container text-on-tertiary',
    status: 'قيد المراجعة',
    statusColor: 'bg-surface-container-highest text-tertiary',
    stage: 'اختبارات الأمان وقاعدة البيانات',
    progress: 45,
    budget: '$24,500',
    delivery: '28 نوفمبر',
    deliveryColor: 'text-on-surface',
    progressColor: 'text-tertiary',
    barColor: 'bg-tertiary',
  },
  {
    name: 'إعادة تصميم موقع تكنو',
    client: 'تكنو لتكنولوجيا المعلومات',
    icon: 'devices',
    iconBg: 'bg-secondary-container text-on-secondary',
    status: 'اللمسات الأخيرة',
    statusColor: 'bg-surface-container-high text-secondary',
    stage: 'تدريب فريق العميل والمحتوى',
    progress: 92,
    budget: '$9,200',
    delivery: 'غداً 02:00 م',
    deliveryColor: 'text-error',
    progressColor: 'text-secondary',
    barColor: 'bg-secondary',
  },
];

export default function ProjectsOverview() {
  return (
    <div className="rounded-full bg-surface-container-lowest shadow-sm p-xl flex flex-col gap-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-sm">
        <div className="flex flex-col gap-2xs">
          <h2 className="font-headline-md text-headline-md text-on-surface">مشاريع قيد التطوير والمراحل الحالية</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">متابعة الميزانيات، المواعيد النهائية، ونسب تقدم التنفيذ للعملاء الرئيسيين</p>
        </div>
        <button className="flex items-center gap-2xs text-primary hover:text-secondary font-label-md text-label-md self-start sm:self-center" type="button">
          <span>عرض كل المشاريع (18)</span>
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        </button>
      </div>
      <div className="flex flex-col gap-md">
        {projects.map((project, index) => (
          <div key={index} className="p-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col md:flex-row md:items-center justify-between gap-md">
            <div className="flex items-center gap-md min-w-0 md:w-5/12">
              <div className={`w-12 h-12 rounded-xl ${project.iconBg} flex items-center justify-center flex-shrink-0`}>
                <span className="material-symbols-outlined text-[24px]">{project.icon}</span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-xs">
                  <span className="font-headline-sm text-headline-sm text-on-surface truncate">{project.name}</span>
                  <span className={`px-xs py-2xs rounded-full font-label-sm text-label-sm ${project.statusColor}`}>{project.status}</span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">العميل: {project.client}</span>
              </div>
            </div>
            <div className="flex flex-col gap-xs md:w-4/12">
              <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                <span>المرحلة: {project.stage}</span>
                <span className={`font-bold ${project.progressColor || 'text-primary'}`}>{project.progress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                <div className={`h-full ${project.barColor || 'bg-primary'} rounded-full`} style={{ width: `${project.progress}%` }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between md:justify-end gap-lg md:w-3/12">
              <div className="flex flex-col text-left md:text-right">
                <span className="font-label-sm text-label-sm text-on-surface-variant">الميزانية</span>
                <span className="font-label-lg text-label-lg text-on-surface font-bold">{project.budget}</span>
              </div>
              <div className="flex flex-col text-left md:text-right">
                <span className="font-label-sm text-label-sm text-on-surface-variant">التسليم</span>
                <span className={`font-label-md text-label-md font-semibold ${project.deliveryColor}`}>{project.delivery}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}