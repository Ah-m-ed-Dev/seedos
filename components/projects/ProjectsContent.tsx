'use client';

import { useState, useEffect } from 'react';
import { getProjects } from '@/lib/supabase/db';
import { Project } from '@/lib/supabase/types';
import KpiCards from './KpiCards';
import FilterBar from './FilterBar';
import ProjectsTable from './ProjectsTable';
import ProjectModal from './ProjectModal';

export default function ProjectsContent() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedAssignee, setSelectedAssignee] = useState('all');
  const [selectedClient, setSelectedClient] = useState('all');

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await getProjects();
      setProjects(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'حدث خطأ في جلب البيانات');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // فلترة المشاريع
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = searchQuery === '' || 
      project.title.includes(searchQuery) || 
      project.client.includes(searchQuery) ||
      project.assignee.includes(searchQuery);
    
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    const matchesAssignee = selectedAssignee === 'all' || project.assignee === selectedAssignee;
    const matchesClient = selectedClient === 'all' || project.client === selectedClient;
    
    return matchesSearch && matchesStatus && matchesAssignee && matchesClient;
  });
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-3">
          <span className="material-symbols-outlined text-primary text-[40px] animate-spin">refresh</span>
          <span className="font-body-md text-on-surface-variant">جاري تحميل البيانات...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-3">
          <span className="material-symbols-outlined text-error text-[40px]">error</span>
          <span className="font-body-md text-error">{error}</span>
          <button 
            className="px-4 py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md"
            onClick={() => window.location.reload()}
          >
            إعادة المحاولة
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full gap-lg lg:gap-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
        <div className="flex flex-col gap-2xs">
          <div className="flex items-center gap-xs text-on-surface-variant font-label-md text-label-md">
            <span className="hover:text-primary transition-colors cursor-pointer">SeedOS</span>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <span className="text-primary font-bold">المشاريع</span>
          </div>
          <div className="flex items-center gap-xs flex-wrap">
            <h1 className="font-headline-lg text-headline-lg text-on-surface">إدارة المشاريع والعمليات</h1>
            <span className="px-sm py-2xs rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm">
              {projects.length} مشروع
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant hidden sm:block max-w-3xl">
            متابعة دقيقة ومباشرة لسير خطوط الإنتاج، الإيرادات المخصصة، والمراحل التنفيذية لكل عميل.
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
            <span className="material-symbols-outlined text-[20px]">add_circle</span>
            <span>+ مشروع جديد</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <KpiCards projects={filteredProjects} />

      {/* Filter Bar */}
      <FilterBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        selectedAssignee={selectedAssignee}
        setSelectedAssignee={setSelectedAssignee}
        selectedClient={selectedClient}
        setSelectedClient={setSelectedClient}
      />

      {/* Projects Table */}
      <ProjectsTable projects={filteredProjects} />

      {/* Project Modal */}
      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onProjectCreated={() => {
          // إعادة تحميل البيانات بعد إضافة مشروع جديد
          getProjects().then(setProjects);
        }}
      />
    </div>
  );
}