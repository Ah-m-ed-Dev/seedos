'use client';

import { useState } from 'react';
import AgencyProfile from './AgencyProfile';
import TeamSettings from './TeamSettings';
import FinancialSettings from './FinancialSettings';
import IntegrationsSettings from './IntegrationsSettings';
import PreferencesSettings from './PreferencesSettings';
import SecuritySettings from './SecuritySettings';

const tabs = [
  { id: 'profile', label: 'ملف الوكالة', icon: 'domain' },
  { id: 'team', label: 'الفريق والصلاحيات', icon: 'groups' },
  { id: 'financial', label: 'المالية والفوترة', icon: 'account_balance' },
  { id: 'integrations', label: 'التكاملات والـ API', icon: 'hub' },
  { id: 'preferences', label: 'التفضيلات', icon: 'settings' },
  { id: 'security', label: 'الأمان والنسخ الاحتياطي', icon: 'security' },
];

export default function SettingsContent() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      // عرض رسالة نجاح
      alert('تم حفظ جميع الإعدادات بنجاح!');
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
            <span>النظام والعمليات</span>
            <span className="material-symbols-outlined text-[16px] rtl:rotate-180">chevron_left</span>
            <span className="text-primary font-semibold">الإعدادات العامة</span>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="font-headline-lg text-headline-lg text-on-surface">الإعدادات العامة للوكالة</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">v2.4 Production</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl hidden sm:block">
            إدارة بيانات وكالة DevSeed، صلاحيات الفريق، مفاتيح التكامل والـ Webhooks، والتفضيلات المالية والإشعارات المركزية للمنظومة.
          </p>
        </div>
        <div className="flex items-center gap-3 self-end md:self-center">
          <button className="px-4 py-2 rounded-xl bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-colors flex items-center gap-1.5" type="button">
            <span className="material-symbols-outlined text-[18px]">undo</span>
            <span className="hidden sm:inline">إلغاء التغييرات</span>
          </button>
          <button 
            onClick={handleSave}
            className="px-5 py-2 rounded-xl bg-primary hover:bg-secondary text-on-primary font-label-lg text-label-lg shadow-sm transition-all flex items-center gap-1.5"
            type="button"
          >
            {isSaving ? (
              <>
                <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                <span>جاري الحفظ...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">save</span>
                <span>حفظ التعديلات</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-surface-container-lowest p-1.5 rounded-xl shadow-sm overflow-x-auto">
        <div className="flex items-center gap-1 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all font-label-lg text-label-lg ${
                activeTab === tab.id
                  ? 'bg-surface-container-high text-primary'
                  : 'hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface'
              }`}
              onClick={() => setActiveTab(tab.id)}
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 flex flex-col gap-8">
          {activeTab === 'profile' && <AgencyProfile />}
          {activeTab === 'team' && <TeamSettings />}
          {activeTab === 'financial' && <FinancialSettings />}
        </div>
        <div className="lg:col-span-5 flex flex-col gap-8">
          {activeTab === 'integrations' && <IntegrationsSettings />}
          {activeTab === 'preferences' && <PreferencesSettings />}
          {activeTab === 'security' && <SecuritySettings />}
        </div>
      </div>

      {/* Bottom Save Bar */}
      <div className="sticky bottom-20 z-40 w-full pt-xs">
        <div className="bg-surface-container-lowest/95 backdrop-blur-md p-xs rounded-full shadow-xl flex items-center justify-between gap-sm">
          <div className="flex items-center gap-xs pr-xs min-w-0">
            <span className="material-symbols-outlined text-primary text-[22px]">check_circle</span>
            <span className="font-label-sm text-label-sm text-on-surface truncate">تمت مزامنة كل التعديلات</span>
          </div>
          <button 
            onClick={handleSave}
            className="bg-primary hover:bg-secondary text-on-primary font-label-lg text-label-lg px-lg py-xs rounded-full shadow-md active:scale-95 transition-all flex items-center gap-xs shrink-0"
          >
            {isSaving ? (
              <>
                <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                <span>جاري الحفظ...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">save</span>
                <span>حفظ التغييرات</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}