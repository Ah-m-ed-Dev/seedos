'use client';

import { useState } from 'react';
import AssetStats from './AssetStats';
import AssetFilters from './AssetFilters';
import AssetList from './AssetList';
import AssetModal from './AssetModal';
import AssetChart from './AssetChart';
import AssetOptimization from './AssetOptimization';

export default function AssetsContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <div className="flex flex-col w-full gap-2xl">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-md">
        <div className="flex flex-col gap-2xs">
          <div className="flex items-center gap-xs text-on-surface-variant font-label-md text-label-md">
            <span>العمليات والتقنية</span>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <span className="text-primary font-bold">الأصول السحابية</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">إدارة الأصول والاشتراكات البرمجية</h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl hidden sm:block">
            تتبع الخوادم، النطاقات، تراخيص البرمجيات، والاشتراكات السحابية لوكالة DevSeed ومشاريع العملاء.
          </p>
        </div>
        <div className="flex items-center gap-sm flex-wrap">
          <button className="flex items-center gap-xs px-lg py-xs rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface transition-colors font-label-lg text-label-lg shadow-sm" type="button">
            <span className="material-symbols-outlined text-[20px] text-primary">download</span>
            <span className="hidden sm:inline">تصدير تقرير النفقات</span>
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-xs px-xl py-xs rounded-xl bg-primary text-on-primary hover:bg-secondary transition-all shadow-md font-label-lg text-label-lg hover:shadow-lg hover:-translate-y-0.5"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            <span>إضافة أصل / اشتراك جديد</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <AssetStats />

      {/* Filters */}
      <AssetFilters 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />

      {/* Asset List */}
      <AssetList searchQuery={searchQuery} selectedFilter={selectedFilter} />

      {/* Chart & Optimization */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
        <div className="lg:col-span-7">
          <AssetChart />
        </div>
        <div className="lg:col-span-5">
          <AssetOptimization />
        </div>
      </div>

      {/* Modal */}
      <AssetModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}