'use client';

import { useState } from 'react';

export default function AgencyProfile() {
  const [agencyNameAr, setAgencyNameAr] = useState('وكالة ديف سيد الرقمية المحدودة');
  const [agencyNameEn, setAgencyNameEn] = useState('DevSeed Digital Agency Ltd.');
  const [domain, setDomain] = useState('https://devseed.agency');
  const [email, setEmail] = useState('info@devseed.agency');
  const [country, setCountry] = useState('المملكة العربية السعودية (الرياض)');
  const [timezone, setTimezone] = useState('توقيت الرياض العربي (GMT +03:00)');

  return (
    <section className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col gap-6">
      <div className="flex items-center justify-between pb-4 border-b border-surface-container-low">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[24px]">corporate_fare</span>
          </div>
          <div className="flex flex-col">
            <h2 className="font-headline-sm text-headline-sm text-on-surface">الهوية الرسمية للوكالة</h2>
            <span className="font-body-sm text-body-sm text-on-surface-variant">البيانات التعريفية الظاهرة في فواتير العملاء والعقود.</span>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm">معتمد رسمياً</span>
      </div>

      {/* Logo */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-5 p-4 bg-surface-container-low rounded-xl">
        <div className="relative w-20 h-20 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-center p-2">
          <div className="w-full h-full rounded-lg bg-primary flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined text-[36px]">energy_savings_leaf</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-on-surface">شعار الوكالة الرسمي</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">يُفضل ملف بصيغة SVG أو PNG بأبعاد لا تقل عن 512×512 بكسل.</span>
          </div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <button className="px-3 py-1.5 rounded-lg bg-primary hover:bg-secondary text-on-primary font-label-sm text-label-sm transition-colors flex items-center gap-1" type="button">
              <span className="material-symbols-outlined text-[16px]">upload</span>
              <span>تغيير الشعار</span>
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest hover:bg-error/10 text-error font-label-sm text-label-sm transition-colors flex items-center gap-1" type="button">
              <span className="material-symbols-outlined text-[16px]">delete_outline</span>
              <span>إزالة</span>
            </button>
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* اسم الوكالة (عربي) */}
        <div className="flex flex-col gap-1.5">
          <label className="font-label-md text-label-md text-on-surface flex items-center justify-between">
            <span>اسم الوكالة (عربي)</span>
            <span className="text-error font-label-sm text-label-sm">* إلزامي</span>
          </label>
          <div className="relative">
            <input 
              className="w-full h-10 px-3 pr-9 rounded-lg bg-surface-container-lowest border border-surface-container-high text-on-surface font-body-md text-body-md focus:border-primary focus:outline-none transition-colors" 
              type="text" 
              value={agencyNameAr}
              onChange={(e) => setAgencyNameAr(e.target.value)}
            />
            <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">badge</span>
          </div>
        </div>

        {/* اسم الوكالة (إنجليزي) */}
        <div className="flex flex-col gap-1.5">
          <label className="font-label-md text-label-md text-on-surface flex items-center justify-between">
            <span>اسم الوكالة (إنجليزي)</span>
            <span className="text-error font-label-sm text-label-sm">* إلزامي</span>
          </label>
          <div className="relative">
            <input 
              className="w-full h-10 px-3 pl-9 rounded-lg bg-surface-container-lowest border border-surface-container-high text-on-surface font-body-md text-body-md focus:border-primary focus:outline-none text-left transition-colors" 
              dir="ltr" 
              type="text" 
              value={agencyNameEn}
              onChange={(e) => setAgencyNameEn(e.target.value)}
            />
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">badge</span>
          </div>
        </div>

        {/* النطاق الأساسي */}
        <div className="flex flex-col gap-1.5">
          <label className="font-label-md text-label-md text-on-surface">النطاق الأساسي</label>
          <div className="relative">
            <input 
              className="w-full h-10 px-3 pl-9 rounded-lg bg-surface-container-lowest border border-surface-container-high text-on-surface font-body-md text-body-md focus:border-primary focus:outline-none text-left transition-colors" 
              dir="ltr" 
              type="text" 
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">language</span>
          </div>
        </div>

        {/* البريد الرسمي */}
        <div className="flex flex-col gap-1.5">
          <label className="font-label-md text-label-md text-on-surface">البريد الرسمي للتواصل</label>
          <div className="relative">
            <input 
              className="w-full h-10 px-3 pl-9 rounded-lg bg-surface-container-lowest border border-surface-container-high text-on-surface font-body-md text-body-md focus:border-primary focus:outline-none text-left transition-colors" 
              dir="ltr" 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">mail</span>
          </div>
        </div>

        {/* الدولة والمقر */}
        <div className="flex flex-col gap-1.5">
          <label className="font-label-md text-label-md text-on-surface">الدولة والمقر التشغيلي</label>
          <div className="relative">
            <select 
              className="w-full h-10 px-3 pr-9 rounded-lg bg-surface-container-lowest border border-surface-container-high text-on-surface font-body-md text-body-md focus:border-primary focus:outline-none appearance-none cursor-pointer"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="المملكة العربية السعودية (الرياض)">المملكة العربية السعودية (الرياض)</option>
              <option value="الإمارات العربية المتحدة (دبي)">الإمارات العربية المتحدة (دبي)</option>
              <option value="جمهورية مصر العربية (القاهرة)">جمهورية مصر العربية (القاهرة)</option>
            </select>
            <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">location_on</span>
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">expand_more</span>
          </div>
        </div>

        {/* المنطقة الزمنية */}
        <div className="flex flex-col gap-1.5">
          <label className="font-label-md text-label-md text-on-surface">المنطقة الزمنية الافتراضية</label>
          <div className="relative">
            <select 
              className="w-full h-10 px-3 pr-9 rounded-lg bg-surface-container-lowest border border-surface-container-high text-on-surface font-body-md text-body-md focus:border-primary focus:outline-none appearance-none cursor-pointer"
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
            >
              <option value="توقيت الرياض العربي (GMT +03:00)">توقيت الرياض العربي (GMT +03:00)</option>
              <option value="توقيت القاهرة الرسمي (GMT +02:00)">توقيت القاهرة الرسمي (GMT +02:00)</option>
              <option value="توقيت دبي القياسي (GMT +04:00)">توقيت دبي القياسي (GMT +04:00)</option>
            </select>
            <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">schedule</span>
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">expand_more</span>
          </div>
        </div>
      </div>
    </section>
  );
}