'use client';

import { useState } from 'react';
import TaskStats from './TaskStats';
import TaskFilters from './TaskFilters';
import TaskList from './TaskList';
import TaskModal from './TaskModal';
import CompletedTasks from './CompletedTasks';

export default function TasksContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col w-full gap-lg lg:gap-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
        <div className="flex flex-col gap-2xs">
          <div className="flex items-center gap-xs text-on-surface-variant font-label-md text-label-md">
            <span className="hover:text-primary transition-colors cursor-pointer">SeedOS</span>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <span className="text-primary font-bold">المهام</span>
          </div>
          <div className="flex items-center gap-xs flex-wrap">
            <h1 className="font-headline-lg text-headline-lg text-on-surface">إدارة المهام والعمليات اليومية</h1>
            <span className="px-sm py-2xs rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm">
              النسخة التشغيلية v2.4
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant hidden sm:block max-w-2xl">
            تتبع وتنسيق كافة الأنشطة التقنية والإبداعية لفريق DevSeed Agency، ومراقبة مواعيد التسليم اللوجستية وتوزيع الأحمال البرمجية بدقة فورية.
          </p>
        </div>
        <div className="flex items-center gap-xs flex-wrap">
          <button className="h-10 px-md rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-xs font-label-md text-label-md">
            <span className="material-symbols-outlined text-[18px]">ios_share</span>
            <span className="hidden sm:inline">تصدير المهام</span>
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="h-10 px-md rounded-xl bg-primary hover:bg-secondary text-on-primary shadow-sm hover:shadow transition-all flex items-center gap-xs font-label-md text-label-md"
          >
            <span className="material-symbols-outlined text-[18px]">add_task</span>
            <span>+ إضافة مهمة جديدة</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <TaskStats />

      {/* Filters */}
      <TaskFilters 
        filter={filter}
        setFilter={setFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Task List */}
      <TaskList filter={filter} searchQuery={searchQuery} />

      {/* Completed Tasks */}
      <CompletedTasks />

      {/* Task Modal */}
      <TaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}