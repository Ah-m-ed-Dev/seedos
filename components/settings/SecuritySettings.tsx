'use client';

import { useState } from 'react';

export default function SecuritySettings() {
  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <section className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col gap-4 border border-error-container">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-lg bg-error-container text-error flex items-center justify-center">
          <span className="material-symbols-outlined text-[20px]">security</span>
        </div>
        <div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">الأمان والنسخ الاحتياطي</h3>
          <span className="font-body-sm text-body-sm text-on-surface-variant">النسخ الاحتياطي الكامل وإجراءات دورة حياة الحساب.</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-2">
        {/* 2FA */}
        <div className="flex items-center justify-between p-3.5 bg-surface-container-low rounded-xl">
          <div className="flex flex-col">
            <span className="font-label-md text-label-md text-on-surface font-semibold">المصادقة الثنائية (2FA)</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">تطبيق Google Authenticator مرتبط</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm ${
              twoFactor ? 'bg-primary-fixed text-primary' : 'bg-surface-container text-on-surface-variant'
            }`}>
              {twoFactor ? 'مُفعل' : 'غير مفعل'}
            </span>
            <button 
              className="px-2 py-0.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors"
              onClick={() => setTwoFactor(!twoFactor)}
            >
              {twoFactor ? 'تعطيل' : 'تفعيل'}
            </button>
          </div>
        </div>

        {/* Backup */}
        <div className="flex items-center justify-between p-3.5 bg-surface-container-low rounded-xl">
          <div className="flex flex-col">
            <span className="font-label-md text-label-md text-on-surface font-semibold">تنزيل نسخة احتياطية للبيانات</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">تصدير كامل لقاعدة البيانات بصيغة JSON/CSV</span>
          </div>
          <button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1.5" type="button">
            <span className="material-symbols-outlined text-[16px]">download</span>
            <span>تصدير</span>
          </button>
        </div>

        {/* Logout All */}
        <div className="flex items-center justify-between p-3.5 bg-error/5 rounded-xl">
          <div className="flex flex-col">
            <span className="font-label-md text-label-md text-error font-semibold">تسجيل الخروج من كافة الأجهزة</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">إلغاء جميع الجلسات النشطة</span>
          </div>
          <button className="px-3 py-1.5 rounded-lg bg-error text-on-error hover:bg-red-700 font-label-sm text-label-sm transition-colors" type="button">
            تسجيل الخروج
          </button>
        </div>
      </div>
    </section>
  );
}