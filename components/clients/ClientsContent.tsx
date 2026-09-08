'use client';

import { useState } from 'react';
import ClientStats from './ClientStats';
import ClientFilters from './ClientFilters';
import ClientCards from './ClientCards';
import ClientModal from './ClientModal';

export default function ClientsContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <div className="flex flex-col w-full gap-lg lg:gap-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
        <div className="flex flex-col gap-2xs">
          <div className="flex items-center gap-xs text-on-surface-variant font-label-md text-label-md">
            <span className="hover:text-primary transition-colors cursor-pointer">SeedOS</span>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <span className="text-primary font-bold">العملاء</span>
          </div>
          <div className="flex items-center gap-xs flex-wrap">
            <h1 className="font-headline-lg text-headline-lg text-on-surface">إدارة علاقات العملاء والشركاء</h1>
            <span className="px-sm py-2xs rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm">
              نظام إدارة العملاء CRM
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant hidden sm:block max-w-3xl">
            سجل كامل ببيانات الشركاء، المشاريع النشطة، إجمالي الإيرادات، وسجل التواصل المباشر مع حسابات الوكالة.
          </p>
        </div>
        <div className="flex items-center gap-sm self-start md:self-auto flex-wrap">
          <button className="flex items-center justify-center gap-xs px-md py-xs rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors shadow-sm font-label-md text-label-md">
            <span className="material-symbols-outlined text-[20px] text-on-surface-variant">ios_share</span>
            <span className="hidden sm:inline">تصدير (CSV)</span>
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-xs px-lg py-xs rounded-xl bg-primary-container text-on-primary hover:bg-secondary transition-all shadow-md hover:shadow-lg font-label-md text-label-md"
          >
            <span className="material-symbols-outlined text-[20px]">person_add</span>
            <span>+ إضافة عميل جديد</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <ClientStats />

      {/* Filters */}
      <ClientFilters 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />

      {/* Client Cards - 3 عملاء فقط */}
      <ClientCards searchQuery={searchQuery} selectedFilter={selectedFilter} />

      {/* Modal */}
      <ClientModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}