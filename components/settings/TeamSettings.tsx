'use client';

export default function TeamSettings() {
  return (
    <section className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col gap-6">
      <div className="flex items-center justify-between pb-4 border-b border-surface-container-low">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[24px]">groups</span>
          </div>
          <div className="flex flex-col">
            <h2 className="font-headline-sm text-headline-sm text-on-surface">أعضاء الفريق والأدوار</h2>
            <span className="font-body-sm text-body-sm text-on-surface-variant">إدارة الصلاحيات والمناصب المعتمدة</span>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-secondary font-label-sm text-label-sm">14 عضو نشط</span>
      </div>

      {/* Team Members List */}
      <div className="flex flex-col gap-3">
        {[
          { name: 'طارق العلي', role: 'مالك الوكالة', status: 'نشط', initial: 'ط' },
          { name: 'سارة المنصور', role: 'مديرة العمليات', status: 'نشط', initial: 'س' },
          { name: 'أحمد الخالدي', role: 'مدير التقنية', status: 'نشط', initial: 'أ' },
          { name: 'نورة السديري', role: 'مصممة UX', status: 'غير نشط', initial: 'ن' },
        ].map((member, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-lg text-label-lg">
                {member.initial}
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-surface">{member.name}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">{member.role}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm ${
                member.status === 'نشط' ? 'bg-primary-fixed text-primary' : 'bg-surface-container text-on-surface-variant'
              }`}>
                {member.status}
              </span>
              <button className="p-1 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" type="button">
                <span className="material-symbols-outlined text-[18px]">more_vert</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-2.5 rounded-xl bg-primary-container text-on-primary hover:bg-secondary font-label-md text-label-md transition-colors flex items-center justify-center gap-2" type="button">
        <span className="material-symbols-outlined text-[18px]">person_add</span>
        <span>دعوة عضو جديد إلى الفريق</span>
      </button>
    </section>
  );
}