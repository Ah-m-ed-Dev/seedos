'use client';

interface Status {
  value: string;
  label: string;
  count: number;
}

interface Assignee {
  value: string;
  label: string;
}

interface Client {
  value: string;
  label: string;
}

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedStatus: string;
  setSelectedStatus: (value: string) => void;
  selectedAssignee: string;
  setSelectedAssignee: (value: string) => void;
  selectedClient: string;
  setSelectedClient: (value: string) => void;
}

const statuses: Status[] = [
  { value: 'all', label: 'الكل', count: 24 },
  { value: 'عرض سعر', label: 'عروض أسعار', count: 2 },
  { value: 'دفعة أولى', label: 'دفعة أولى مستلمة', count: 3 },
  { value: 'قيد التطوير', label: 'قيد التطوير', count: 12 },
  { value: 'قيد المراجعة', label: 'قيد المراجعة', count: 4 },
  { value: 'تم التسليم', label: 'تم التسليم', count: 3 },
];

const assignees: Assignee[] = [
  { value: 'all', label: 'كل المسؤولين' },
  { value: 'ماجد عبد الله', label: 'ماجد عبد الله' },
  { value: 'سارة ناصر', label: 'سارة ناصر' },
  { value: 'طارق العلي', label: 'طارق العلي' },
];

const clients: Client[] = [
  { value: 'all', label: 'كل العملاء' },
  { value: 'مجموعة الدانوب', label: 'مجموعة الدانوب' },
  { value: 'شركة الشحن السريع', label: 'شركة الشحن السريع' },
  { value: 'تكنو للاستثمار', label: 'تكنو للاستثمار' },
  { value: 'الأفق للإعلام', label: 'الأفق للإعلام' },
  { value: 'فنتك باي', label: 'فنتك باي' },
  { value: 'مركز النخبة', label: 'مركز النخبة' },
];

export default function FilterBar({
  searchQuery,
  setSearchQuery,
  selectedStatus,
  setSelectedStatus,
  selectedAssignee,
  setSelectedAssignee,
  selectedClient,
  setSelectedClient,
}: FilterBarProps) {
  // تحديث العدد في الفلتر حسب المشاريع الفعلية
  // يمكنك إضافة منطق لحساب الأعداد الحقيقية هنا

  return (
    <div className="bg-surface-container-lowest p-md rounded-xl shadow-sm flex flex-col gap-md">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-md">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[280px]">
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
          <input
            className="w-full h-10 pr-10 pl-md rounded-xl bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:bg-surface-container-high transition-colors"
            placeholder="البحث باسم المشروع، العميل، أو مدير المشروع..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-xs">
          <div className="relative">
            <select
              className="appearance-none h-10 pl-8 pr-md rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md outline-none cursor-pointer hover:bg-surface-container transition-colors"
              value={selectedAssignee}
              onChange={(e) => setSelectedAssignee(e.target.value)}
            >
              {assignees.map((assignee) => (
                <option key={assignee.value} value={assignee.value}>{assignee.label}</option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">expand_more</span>
          </div>
          
          <div className="relative">
            <select
              className="appearance-none h-10 pl-8 pr-md rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md outline-none cursor-pointer hover:bg-surface-container transition-colors"
              value={selectedClient}
              onChange={(e) => setSelectedClient(e.target.value)}
            >
              {clients.map((client) => (
                <option key={client.value} value={client.value}>{client.label}</option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">expand_more</span>
          </div>
          
          {/* View Switcher */}
          <div className="flex items-center p-1 bg-surface-container-low rounded-xl mr-auto lg:mr-0">
            <button className="flex items-center gap-2xs px-sm py-1 rounded-lg bg-surface-container-lowest text-primary font-label-sm text-label-sm shadow-sm transition-all" type="button">
              <span className="material-symbols-outlined text-[18px]">table_rows</span>
              <span className="hidden sm:inline">جدول</span>
            </button>
            <button className="flex items-center gap-2xs px-sm py-1 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors" type="button">
              <span className="material-symbols-outlined text-[18px]">grid_view</span>
              <span className="hidden sm:inline">بطاقات</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Status Tabs */}
      <div className="flex items-center gap-xs overflow-x-auto pb-xs pt-2xs">
        {statuses.map((status) => (
          <button
            key={status.value}
            className={`status-tab flex items-center gap-xs px-md py-xs rounded-xl whitespace-nowrap transition-colors font-label-md text-label-md ${
              selectedStatus === status.value
                ? 'bg-primary text-on-primary shadow-sm'
                : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
            }`}
            onClick={() => setSelectedStatus(status.value)}
          >
            <span>{status.label}</span>
            <span className={`px-1.5 py-0.5 rounded-full font-label-sm text-label-sm ${
              selectedStatus === status.value
                ? 'bg-surface-container-lowest/20 text-on-primary'
                : 'bg-surface-container-high text-on-surface'
            }`}>
              {status.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}