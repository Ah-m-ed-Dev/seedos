'use client';

export default function IntegrationsSettings() {
  return (
    <section className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col gap-5">
      <div className="flex items-center justify-between pb-3 border-b border-surface-container-low">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[20px]">sync_alt</span>
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">التكاملات البرمجية النشطة</h3>
            <span className="font-body-sm text-body-sm text-on-surface-variant">الخدمات الخارجية المتصلة بمنظومة الوكالة.</span>
          </div>
        </div>
        <a className="font-label-md text-label-md text-primary hover:text-secondary flex items-center gap-0.5" href="#">
          <span>عرض الكل (8)</span>
          <span className="material-symbols-outlined text-[16px] rtl:rotate-180">chevron_left</span>
        </a>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {[
          { name: 'Slack Workspace', detail: '#seedos-agency-alerts', color: '#4A154B', icon: '#' },
          { name: 'GitHub Enterprise', detail: '@DevSeed-Agency (32 Repos)', color: '#24292e', icon: 'terminal' },
          { name: 'Stripe Payments & Al Rajhi', detail: 'التحويل البنكي الآلي', color: '#635BFF', icon: 'credit_card' },
          { name: 'OpenAI Infrastructure', detail: 'GPT-4o & Embeddings (Tier 5)', color: '#10A37F', icon: 'neurology' },
        ].map((integration, index) => (
          <div key={index} className="flex items-center justify-between p-3.5 bg-surface-container-low hover:bg-surface-container transition-colors rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white" style={{ backgroundColor: integration.color }}>
                {integration.icon === '#' ? '#' : <span className="material-symbols-outlined text-[18px]">{integration.icon}</span>}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-label-lg text-label-lg text-on-surface font-semibold">{integration.name}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant" dir="ltr">{integration.detail}</span>
              </div>
            </div>
            <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-lowest transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}