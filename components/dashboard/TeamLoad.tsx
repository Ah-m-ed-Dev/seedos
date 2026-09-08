'use client';

const teamMembers = [
  { name: 'طارق العلي', role: 'إدارة المشاريع', initial: 'ط', tasks: '4 مهام اليوم', bg: 'bg-primary', textColor: 'text-primary', badgeColor: 'bg-surface-container-high' },
  { name: 'سارة ناصر', role: 'تصميم تجربة المستخدم', initial: 'س', tasks: '3 مهام اليوم', bg: 'bg-secondary', textColor: 'text-secondary', badgeColor: 'bg-surface-container-high' },
  { name: 'ماجد عبد الله', role: 'تطوير Full-stack', initial: 'م', tasks: 'مكتمل الحمل (6)', bg: 'bg-tertiary', textColor: 'text-tertiary', badgeColor: 'bg-error-container text-on-error-container' },
];

export default function TeamLoad() {
  return (
    <div className="rounded-full bg-surface-container-lowest shadow-sm p-xl flex flex-col gap-md">
      <div className="flex items-center justify-between">
        <h3 className="font-headline-sm text-headline-sm text-on-surface">فريق العمل النشط اليوم</h3>
        <span className="font-label-sm text-label-sm text-on-surface-variant">7 متاحين</span>
      </div>
      <div className="flex flex-col gap-sm">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex items-center justify-between p-xs rounded-xl bg-surface-container-low">
            <div className="flex items-center gap-xs">
              <div className={`w-8 h-8 rounded-full ${member.bg} text-on-primary flex items-center justify-center font-bold text-label-sm`}>
                {member.initial}
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-surface">{member.name}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">{member.role}</span>
              </div>
            </div>
            <span className={`px-xs py-2xs rounded-full font-label-sm text-label-sm ${member.badgeColor}`}>{member.tasks}</span>
          </div>
        ))}
      </div>
      <button className="w-full text-center font-label-md text-label-md text-primary hover:text-secondary pt-xs transition-colors" type="button">
        توزيع أحمال العمل وإعادة التعيين ←
      </button>
    </div>
  );
}