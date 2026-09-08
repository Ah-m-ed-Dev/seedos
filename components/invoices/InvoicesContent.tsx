'use client';

import { useState } from 'react';
import InvoiceStats from './InvoiceStats';
import InvoiceFilters from './InvoiceFilters';
import InvoiceList from './InvoiceList';
import InvoiceModal from './InvoiceModal';
import InvoiceChart from './InvoiceChart';
import QuickActions from './QuickActions';

export default function InvoicesContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <div className="flex flex-col w-full gap-lg lg:gap-xl pb-3xl">
      {/* Header */}
      <section className="flex flex-col xl:flex-row xl:items-center justify-between gap-lg bg-surface-container-lowest p-xl rounded-full shadow-sm">
        <div className="flex flex-col gap-2xs max-w-3xl">
          <div className="flex items-center gap-xs">
            <span className="px-xs py-2xs rounded-md bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm tracking-wide">
              القسم المالي والتدفقات النقدية
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">الربع الرابع (Q4 2024)</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">إدارة الفواتير والمالية</h1>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed hidden sm:block">
            متابعة التدفق النقدي، الفواتير الصادرة، التحصيل المالي، ومستحقات العملاء والمشاريع بدقة وشفافية متناهية.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-xs">
          <button className="flex items-center gap-2xs px-md py-xs rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-label-md text-label-md" type="button">
            <span className="material-symbols-outlined text-[20px] text-tertiary">download</span>
            <span className="hidden sm:inline">تصدير التقرير المالي</span>
          </button>
          <button className="flex items-center gap-2xs px-md py-xs rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-label-md text-label-md" type="button">
            <span className="material-symbols-outlined text-[20px] text-primary">credit_card</span>
            <span className="hidden sm:inline">تسجيل دفعة سريعة</span>
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2xs px-lg py-xs rounded-xl bg-primary-container text-on-primary hover:bg-secondary transition-all shadow-sm shadow-primary/20 font-label-md text-label-md"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">post_add</span>
            <span className="font-bold">+ إنشاء فاتورة جديدة</span>
          </button>
        </div>
      </section>

      {/* Stats */}
      <InvoiceStats />

      {/* Filters */}
      <InvoiceFilters 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />

      {/* Invoice List */}
      <InvoiceList searchQuery={searchQuery} selectedFilter={selectedFilter} />

      {/* Chart & Quick Actions */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-lg">
        <div className="xl:col-span-2">
          <InvoiceChart />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>

      {/* Modal */}
      <InvoiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}