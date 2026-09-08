'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import KpiCards from './KpiCards';
import FilterBar from './FilterBar';
import ProjectsTable from './ProjectsTable';
import ProjectModal from './ProjectModal';

interface Project {
  id: number;
  title: string;
  client: string;
  status: string;
  progress: number;
  tasks: string;
  assignee: string;
  assigneeInitial: string;
  dueDate: string;
  dueStatus: string;
  dueColor?: string;
  budget: string;
  received: string;
  icon: string;
  iconBg: string;
  isOverdue?: boolean;
  isCompleted?: boolean;
  isQuote?: boolean;
}

export default function ProjectsContent() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedAssignee, setSelectedAssignee] = useState<string>('all');
  const [selectedClient, setSelectedClient] = useState<string>('all');
  const [projects, setProjects] = useState<Project[]>([]);

  const projectsData: Project[] = [
    {
      id: 1,
      title: 'تطبيق متجر الدانوب للتجزئة',
      client: 'مجموعة الدانوب',
      status: 'قيد التطوير',
      progress: 75,
      tasks: '18 من 24 مهمة',
      assignee: 'ماجد عبد الله',
      assigneeInitial: 'م',
      dueDate: '15 نوفمبر 2024',
      dueStatus: 'باقي 12 يوماً',
      budget: '$18,000',
      received: '$9,000',
      icon: 'shopping_bag',
      iconBg: 'bg-primary-fixed text-primary',
    },
    {
      id: 2,
      title: 'بوابة اللوجستيات الذكية',
      client: 'شركة الشحن السريع',
      status: 'قيد المراجعة',
      progress: 90,
      tasks: 'مراجعة الجودة UAT',
      assignee: 'سارة ناصر',
      assigneeInitial: 'س',
      dueDate: '28 أكتوبر 2024',
      dueStatus: 'متأخر يومين',
      dueColor: 'text-error',
      budget: '$24,500',
      received: '$18,000',
      icon: 'local_shipping',
      iconBg: 'bg-secondary-fixed text-secondary',
      isOverdue: true,
    },
    {
      id: 3,
      title: 'إعادة تصميم هوية تكنو العقارية',
      client: 'تكنو للاستثمار',
      status: 'تم التسليم',
      progress: 100,
      tasks: 'مكتمل بالكامل',
      assignee: 'طارق العلي',
      assigneeInitial: 'ط',
      dueDate: '20 أكتوبر 2024',
      dueStatus: 'تم اعتماده نهائياً',
      budget: '$9,200',
      received: 'مدفوع بالكامل',
      icon: 'brush',
      iconBg: 'bg-surface-container-high text-on-surface',
      isCompleted: true,
    },
    {
      id: 4,
      title: 'سحابة الأفق - منصة البث',
      client: 'الأفق للإعلام',
      status: 'قيد التطوير',
      progress: 45,
      tasks: 'واجهة برمجة التطبيقات API',
      assignee: 'ماجد عبد الله',
      assigneeInitial: 'م',
      dueDate: '30 نوفمبر 2024',
      dueStatus: 'المرحلة الثانية',
      budget: '$32,000',
      received: '$12,000',
      icon: 'play_circle',
      iconBg: 'bg-tertiary-fixed text-tertiary',
    },
    {
      id: 5,
      title: 'حملة إطلاق حلول الدفع الرقمي',
      client: 'فنتك باي',
      status: 'دفعة أولى',
      progress: 15,
      tasks: 'مرحلة التهيئة',
      assignee: 'طارق العلي',
      assigneeInitial: 'ط',
      dueDate: '10 ديسمبر 2024',
      dueStatus: 'قيد إعداد الخطة',
      budget: '$11,500',
      received: '$3,500',
      icon: 'credit_card',
      iconBg: 'bg-surface-container-highest text-primary',
    },
    {
      id: 6,
      title: 'نظام إدارة العيادات الطبية',
      client: 'مركز النخبة',
      status: 'عرض سعر',
      progress: 0,
      tasks: 'في انتظار التوقيع',
      assignee: 'سارة ناصر',
      assigneeInitial: 'س',
      dueDate: '5 نوفمبر 2024',
      dueStatus: 'صلاحية العرض',
      budget: '$16,000',
      received: 'مبدئي',
      icon: 'local_hospital',
      iconBg: 'bg-surface-container-high text-primary-container',
      isQuote: true,
    },
  ];

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  // حساب إحصائيات KPI من البيانات الفعلية
  const getKpiData = () => {
    const total = projects.length;
    const inProgress = projects.filter(p => p.status === 'قيد التطوير').length;
    const inReview = projects.filter(p => p.status === 'قيد المراجعة').length;
    const completed = projects.filter(p => p.status === 'تم التسليم').length;
    const quotes = projects.filter(p => p.status === 'عرض سعر' || p.status === 'دفعة أولى').length;
    
    // حساب القيم المالية
    const totalBudget = projects.reduce((sum, p) => {
      const num = parseFloat(p.budget.replace('$', '').replace(',', ''));
      return sum + (isNaN(num) ? 0 : num);
    }, 0);

    return {
      total,
      inProgress,
      inReview,
      completed,
      quotes,
      totalBudget: `$${totalBudget.toLocaleString()}`,
    };
  };

  const kpiStats = getKpiData();

  const filteredProjects: Project[] = projects.filter((project) => {
    const matchesSearch: boolean = searchQuery === '' || 
      project.title.includes(searchQuery) || 
      project.client.includes(searchQuery) ||
      project.assignee.includes(searchQuery);
    
    const matchesStatus: boolean = selectedStatus === 'all' || project.status === selectedStatus;
    const matchesAssignee: boolean = selectedAssignee === 'all' || project.assignee === selectedAssignee;
    const matchesClient: boolean = selectedClient === 'all' || project.client === selectedClient;
    
    return matchesSearch && matchesStatus && matchesAssignee && matchesClient;
  });

  return (
    <div className="flex flex-col w-full gap-lg lg:gap-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
        <div className="flex flex-col gap-2xs">
          <div className="flex items-center gap-xs text-on-surface-variant font-label-md text-label-md">
            <Link href="/" className="hover:text-primary transition-colors cursor-pointer">
              SeedOS
            </Link>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <span className="text-primary font-bold">المشاريع</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">إدارة المشاريع والعمليات</h1>
          <p className="font-body-md text-body-md text-on-surface-variant hidden sm:block">
            متابعة دقيقة ومباشرة لسير خطوط الإنتاج، الإيرادات المخصصة، والمراحل التنفيذية لكل عميل.
          </p>
        </div>
        <div className="flex items-center gap-sm self-start md:self-auto">
          <button className="flex items-center gap-2xs px-md py-xs rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors font-label-lg text-label-lg shadow-sm active:scale-95" type="button">
            <span className="material-symbols-outlined text-[20px] text-on-surface-variant">file_download</span>
            <span className="hidden sm:inline">تصدير البيانات</span>
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2xs px-xl py-xs rounded-xl bg-primary-container text-on-primary hover:bg-secondary transition-all shadow-md hover:shadow-lg font-label-lg text-label-lg active:scale-95"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">add_circle</span>
            <span>مشروع جديد</span>
          </button>
        </div>
      </div>

      {/* KPI Cards - مع البيانات الفعلية */}
      <KpiCards 
        projects={projects}
        stats={kpiStats}
      />

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
      />
    </div>
  );
}