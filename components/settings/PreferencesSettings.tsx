'use client';

import { useState } from 'react';

export default function PreferencesSettings() {
  const [language, setLanguage] = useState('ar');
  const [theme, setTheme] = useState('light');
  const [pushNotifications, setPushNotifications] = useState(true);

  return (
    <section className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col gap-5">
      <div className="flex items-center justify-between pb-3 border-b border-surface-container-low">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[20px]">settings</span>
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">تفضيلات التطبيق والتجربة</h3>
            <span className="font-body-sm text-body-sm text-on-surface-variant">إعدادات واجهة المستخدم واللغة.</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {/* Language */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[20px]">translate</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-headline-sm text-headline-sm text-on-surface truncate">لغة الواجهة</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                {language === 'ar' ? 'العربية' : 'English'}
              </span>
            </div>
          </div>
          <select 
            className="font-label-md text-label-md text-primary bg-primary-fixed/50 hover:bg-primary-fixed px-3 py-1.5 rounded-lg transition-colors outline-none cursor-pointer"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
        </div>

        {/* Theme */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary shrink-0">
              <span className="material-symbols-outlined text-[20px]">
                {theme === 'light' ? 'light_mode' : 'dark_mode'}
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-headline-sm text-headline-sm text-on-surface truncate">مظهر النظام</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                {theme === 'light' ? 'الوضع النهاري الفاتح' : 'الوضع الليلي الداكن'}
              </span>
            </div>
          </div>
          <select 
            className="font-label-sm text-label-sm bg-surface-container-low text-on-surface-variant px-3 py-1.5 rounded-md outline-none hover:bg-surface-container transition-colors cursor-pointer"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="light">فاتح</option>
            <option value="dark">داكن</option>
          </select>
        </div>

        {/* Push Notifications */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary-container shrink-0">
              <span className="material-symbols-outlined text-[20px]">notifications_active</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-headline-sm text-headline-sm text-on-surface truncate">الإشعارات الفورية (Push)</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant truncate">تنبيهات فورية لمدفوعات العملاء والمشاريع</span>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer shrink-0">
            <input 
              className="sr-only peer" 
              type="checkbox" 
              checked={pushNotifications}
              onChange={(e) => setPushNotifications(e.target.checked)}
            />
            <div className="w-12 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:-translate-x-6 rtl:peer-checked:after:translate-x-6 peer-checked:after:border-surface peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-surface-container-lowest after:rounded-full after:h-5 after:w-5 after:transition-all shadow-inner"></div>
          </label>
        </div>
      </div>
    </section>
  );
}