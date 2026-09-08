'use client';

import { useState } from 'react';

export default function FinancialSettings() {
  const [currency, setCurrency] = useState('USD');
  const [vatNumber, setVatNumber] = useState('310294857200003');
  const [taxRate, setTaxRate] = useState(15);
  const [paymentPeriod, setPaymentPeriod] = useState('Net 14');
  const [autoReminder, setAutoReminder] = useState(true);

  return (
    <section className="bg-surface-container-lowest p-6 rounded-xl shadow-sm flex flex-col gap-6">
      <div className="flex items-center justify-between pb-4 border-b border-surface-container-low">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[24px]">price_change</span>
          </div>
          <div className="flex flex-col">
            <h2 className="font-headline-sm text-headline-sm text-on-surface">التفضيلات المالية والفوترة الضريبية</h2>
            <span className="font-body-sm text-body-sm text-on-surface-variant">ضبط القواعد المالية المطبقة على الفواتير والعقود.</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-primary">
          <span className="material-symbols-outlined text-[18px]">verified</span>
          <span className="font-label-sm text-label-sm font-semibold">متوافق مع ZATCA</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* العملة الأساسية */}
        <div className="flex flex-col gap-1.5">
          <label className="font-label-md text-label-md text-on-surface">العملة الأساسية للنظام</label>
          <div className="relative">
            <select 
              className="w-full h-10 px-3 pr-9 rounded-lg bg-surface-container-lowest border border-surface-container-high text-on-surface font-body-md text-body-md focus:border-primary focus:outline-none appearance-none cursor-pointer"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="USD">دولار أمريكي (USD - $)</option>
              <option value="SAR">ريال سعودي (SAR - ر.س)</option>
              <option value="AED">درهم إماراتي (AED - د.إ)</option>
            </select>
            <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">currency_exchange</span>
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">expand_more</span>
          </div>
        </div>

        {/* الرقم الضريبي */}
        <div className="flex flex-col gap-1.5">
          <label className="font-label-md text-label-md text-on-surface">الرقم التعريفي الضريبي (VAT)</label>
          <div className="relative">
            <input 
              className="w-full h-10 px-3 pl-9 rounded-lg bg-surface-container-lowest border border-surface-container-high text-on-surface font-body-md text-body-md focus:border-primary focus:outline-none text-left tracking-wider font-semibold" 
              dir="ltr" 
              type="text" 
              value={vatNumber}
              onChange={(e) => setVatNumber(e.target.value)}
            />
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">pin</span>
          </div>
        </div>

        {/* نسبة الضريبة */}
        <div className="flex flex-col gap-1.5">
          <label className="font-label-md text-label-md text-on-surface">نسبة ضريبة القيمة المضافة الافتراضية (%)</label>
          <div className="relative">
            <input 
              className="w-full h-10 px-3 pr-9 rounded-lg bg-surface-container-lowest border border-surface-container-high text-on-surface font-body-md text-body-md focus:border-primary focus:outline-none" 
              type="number" 
              value={taxRate}
              onChange={(e) => setTaxRate(Number(e.target.value))}
            />
            <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">percent</span>
          </div>
        </div>

        {/* فترة الاستحقاق */}
        <div className="flex flex-col gap-1.5">
          <label className="font-label-md text-label-md text-on-surface">فترة استحقاق الفواتير الافتراضية</label>
          <div className="relative">
            <select 
              className="w-full h-10 px-3 pr-9 rounded-lg bg-surface-container-lowest border border-surface-container-high text-on-surface font-body-md text-body-md focus:border-primary focus:outline-none appearance-none cursor-pointer"
              value={paymentPeriod}
              onChange={(e) => setPaymentPeriod(e.target.value)}
            >
              <option value="Net 0">الدفع عند الاستلام (Net 0)</option>
              <option value="Net 7">خلال 7 أيام عمل (Net 7)</option>
              <option value="Net 14">خلال 14 يوماً تقويمياً (Net 14)</option>
              <option value="Net 30">خلال 30 يوماً (Net 30)</option>
            </select>
            <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">calendar_today</span>
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">expand_more</span>
          </div>
        </div>
      </div>

      {/* Auto Reminder Toggle */}
      <div className="p-4 bg-surface-container-low rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[20px]">auto_mode</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-md text-label-md text-on-surface">التذكير التلقائي بالدفعات المتأخرة</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">إرسال بريد إلكتروني ورسالة عبر واتساب قبل يومين من موعد الاستحقاق.</span>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            className="sr-only peer" 
            type="checkbox" 
            checked={autoReminder}
            onChange={(e) => setAutoReminder(e.target.checked)}
          />
          <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-surface-container-lowest after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
        </label>
      </div>
    </section>
  );
}