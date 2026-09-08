'use client';

interface TaskFiltersProps {
  filter: string;
  setFilter: (filter: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const filters = [
  { id: 'all', label: 'الكل', count: 34 },
  { id: 'todo', label: 'قيد الانتظار', count: 8 },
  { id: 'inprogress', label: 'قيد التنفيذ', count: 14 },
  { id: 'review', label: 'قيد المراجعة', count: 7 },
  { id: 'completed', label: 'المكتملة', count: 12 },
];

export default function TaskFilters({ filter, setFilter, searchQuery, setSearchQuery }: TaskFiltersProps) {
  return (
    <div className="flex flex-col gap-md bg-surface-container-lowest p-lg rounded-xl shadow-sm">
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-md">
        {/* Status Tabs */}
        <div className="flex items-center gap-xs overflow-x-auto pb-xs lg:pb-0 scrollbar-none">
          {filters.map((f) => (
            <button
              key={f.id}
              className={`px-md py-xs rounded-xl whitespace-nowrap transition-all font-label-md text-label-md ${
                filter === f.id
                  ? 'bg-surface-container-high text-primary'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
              }`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
              <span className={`mr-xs px-xs py-2xs rounded-full font-label-sm text-label-sm ${
                filter === f.id 
                  ? 'bg-surface-container-lowest text-primary' 
                  : 'bg-surface-container-lowest text-outline'
              }`}>
                {f.count}
              </span>
            </button>
          ))}
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-2xs p-2xs bg-surface-container-low rounded-xl self-end lg:self-auto">
          <button className="flex items-center gap-xs px-sm py-xs rounded-xl bg-surface-container-lowest text-primary shadow-sm font-label-md text-label-md transition-all">
            <span className="material-symbols-outlined text-[18px]">view_kanban</span>
            <span className="hidden sm:inline">لوحة كانبان</span>
          </button>
          <button className="flex items-center gap-xs px-sm py-xs rounded-xl text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all">
            <span className="material-symbols-outlined text-[18px]">table_rows</span>
            <span className="hidden sm:inline">جدول تفصيلي</span>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sm pt-xs">
        <div className="relative">
          <span className="absolute top-2.5 right-3 text-outline material-symbols-outlined text-[18px]">search</span>
          <input
            className="w-full h-10 pr-10 pl-sm rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest shadow-inner"
            placeholder="بحث باسم المهمة أو المعرف..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="relative">
          <select className="w-full h-10 px-sm rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none cursor-pointer appearance-none">
            <option value="">جميع المشاريع النشطة</option>
            <option value="danube">تطبيق متجر الدانوب</option>
            <option value="logistic">منصة لوجستيك للخدمات</option>
            <option value="saas">نظام SeedOS الداخلي</option>
            <option value="fintech">محفظة فينتك كابيتال</option>
          </select>
          <span className="absolute top-2.5 left-3 text-outline pointer-events-none material-symbols-outlined text-[18px]">expand_more</span>
        </div>
        <div className="relative">
          <select className="w-full h-10 px-sm rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none cursor-pointer appearance-none">
            <option value="">كافة أعضاء الفريق</option>
            <option value="ziad">زياد القحطاني (واجهات UI/UX)</option>
            <option value="mona">منى الحربي (تطوير برمجيات)</option>
            <option value="omar">عمر الفاروق (DevOps)</option>
            <option value="sara">سارة العتيبي (QA)</option>
          </select>
          <span className="absolute top-2.5 left-3 text-outline pointer-events-none material-symbols-outlined text-[18px]">person</span>
        </div>
        <div className="relative">
          <select className="w-full h-10 px-sm rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none cursor-pointer appearance-none">
            <option value="">درجة الأولوية (الكل)</option>
            <option value="high">عاجلة / قصوى</option>
            <option value="medium">متوسطة</option>
            <option value="low">اعتيادية</option>
          </select>
          <span className="absolute top-2.5 left-3 text-outline pointer-events-none material-symbols-outlined text-[18px]">filter_list</span>
        </div>
      </div>
    </div>
  );
}