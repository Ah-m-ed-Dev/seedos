'use client';

interface ClientFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
}

const filters = [
  { id: 'all', label: 'الكل', count: 3 },
  { id: 'active', label: 'نشط', count: 3 },
  { id: 'retainer', label: 'عقود سنوية', count: 1 },
  { id: 'new', label: 'جديد', count: 1 },
];

export default function ClientFilters({ 
  searchQuery, 
  setSearchQuery, 
  selectedFilter, 
  setSelectedFilter 
}: ClientFiltersProps) {
  return (
    <div className="flex flex-col gap-md p-md rounded-xl bg-surface-container-lowest shadow-sm">
      <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-md">
        {/* Search Input */}
        <div className="relative flex-1">
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
          <input
            className="w-full h-11 pr-11 pl-md rounded-xl bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:bg-surface-container transition-colors"
            placeholder="بحث باسم العميل، الشركة، البريد الإلكتروني..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-sm">
          <div className="relative">
            <select className="h-11 px-md pl-8 rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md outline-none cursor-pointer hover:bg-surface-container transition-colors appearance-none">
              <option value="all">كل القطاعات</option>
              <option value="fintech">تقنية مالية</option>
              <option value="retail">التجزئة الإلكترونية</option>
              <option value="logistics">لوجستيات</option>
            </select>
            <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[18px]">expand_more</span>
          </div>

          <div className="relative">
            <select className="h-11 px-md pl-8 rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md outline-none cursor-pointer hover:bg-surface-container transition-colors appearance-none">
              <option value="all">مستوى الإنفاق (الكل)</option>
              <option value="vip">كبار العملاء (+$50,000)</option>
              <option value="mid">المتوسط ($15,000 - $50,000)</option>
            </select>
            <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[18px]">tune</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-xs overflow-x-auto pb-1 pt-xs">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`px-md py-xs rounded-xl whitespace-nowrap transition-colors font-label-md text-label-md ${
              selectedFilter === filter.id
                ? 'bg-primary-container text-on-primary shadow-sm'
                : 'bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface'
            }`}
            onClick={() => setSelectedFilter(filter.id)}
          >
            {filter.label}
            <span className={`mr-1 px-1.5 py-0.5 rounded-full text-[10px] ${
              selectedFilter === filter.id
                ? 'bg-surface-container-lowest/20 text-on-primary'
                : 'bg-surface-container-high text-on-surface'
            }`}>
              {filter.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}