'use client';

const projects = [
  {
    name: 'تطبيق نكست ستور',
    client: 'شركة الأفق الرقمي',
    icon: 'shopping_cart',
    iconBg: 'bg-surface-container-high text-primary',
    status: 'قيد التطوير',
    statusColor: 'bg-surface-container text-primary',
    progress: 80,
    team: '4 مهندسين',
    delivery: '1 نوفمبر 2024',
  },
  {
    name: 'بوابة مدفوعات كابيتال',
    client: 'مجموعة الرواد المالية',
    icon: 'account_balance',
    iconBg: 'bg-tertiary-fixed text-tertiary',
    status: 'مراجعة أمنية',
    statusColor: 'bg-surface-container-highest text-tertiary',
    progress: 92,
    team: '6 أعضاء',
    delivery: '28 أكتوبر 2024',
  },
];

export default function MobileProjects() {
  return (
    <section className="flex flex-col gap-sm">
      <div className="flex items-center justify-between">
        <h2 className="font-headline-sm text-headline-sm text-on-surface">المشاريع النشطة والمراحل</h2>
        <a className="font-label-md text-label-md text-primary flex items-center gap-2xs hover:underline" href="#">
          <span>عرض الكل</span>
          <span className="material-symbols-outlined text-[16px]">chevron_left</span>
        </a>
      </div>
      <div className="flex flex-col gap-xs">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col bg-surface-container-lowest p-md rounded-xl shadow-sm gap-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-xs">
                <div className={`w-8 h-8 rounded-xl ${project.iconBg} flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-[18px]">{project.icon}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface leading-tight">{project.name}</span>
                  <span className="font-body-sm text-body-sm text-outline">{project.client}</span>
                </div>
              </div>
              <span className={`font-label-sm text-label-sm ${project.statusColor} px-xs py-0.5 rounded-full`}>{project.status}</span>
            </div>
            <div className="flex flex-col gap-2xs">
              <div className="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm">
                <span>إنجاز المعالم</span>
                <span className="font-label-md text-label-md text-primary">{project.progress}%</span>
              </div>
              <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                <div className={`${project.iconBg.replace('text-', 'bg-')} h-full rounded-full transition-all duration-500`} style={{ width: `${project.progress}%` }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between text-outline font-label-sm text-label-sm pt-xs">
              <div className="flex items-center gap-2xs">
                <span className="material-symbols-outlined text-[16px]">event</span>
                <span>التسليم: {project.delivery}</span>
              </div>
              <div className="flex items-center gap-2xs text-on-surface">
                <span className="material-symbols-outlined text-[16px]">groups</span>
                <span>{project.team}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}