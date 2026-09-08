'use client';

interface InvoiceFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
}

const filters = [
  { id: 'all', label: 'الكل', count: 32 },
  { id: 'paid', label: 'مدفوعة', count: 23 },
  { id: 'pending', label: 'معلقة', count: 6 },
  { id: 'overdue', label: 'متأخرة', count: 3 },
  { id: 'draft', label: 'مسودات', count: 0 },
];

export default function InvoiceFilters({ 
  searchQuery, 
  setSearchQuery, 
  selectedFilter, 
  setSelectedFilter 
}: InvoiceFiltersProps) {
  return (
    <section className="flex flex-col gap-md bg-surface-container-lowest p-md rounded-xl shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-md">
        {/* Status Tabs */}
        <div className="flex flex-wrap items-center gap-2xs bg-surface-container-low p-2xs rounded-xl">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-md py-xs rounded-lg transition-colors font-label-md text-label-md ${
                selectedFilter === filter.id
                  ? 'bg-surface-container-lowest text-primary shadow-sm'
                  : filter.id === 'overdue'
                  ? 'text-error hover:bg-error-container/40'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
              }`}
              onClick={() => setSelectedFilter(filter.id)}
            >
              {filter.label}
              <span className="text-on-surface-variant mr-1">({filter.count})</span>
            </button>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="flex flex-wrap items-center gap-xs">
          <div className="relative min-w-[280px]">
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
            <input
              className="w-full h-10 pr-10 pl-md rounded-xl bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest transition-colors"
              placeholder="رقم الفاتورة، العميل، المشروع..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2xs">
            <button className="flex items-center gap-xs h-10 px-md rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-colors" type="button">
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">person</span>
              <span className="hidden sm:inline">العملاء: الجميع</span>
              <span className="material-symbols-outlined text-[16px] text-on-surface-variant">keyboard_arrow_down</span>
            </button>
          </div>

          <div className="flex items-center bg-surface-container-low p-2xs rounded-xl">
            <button className="p-xs rounded-lg bg-surface-container-lowest text-primary shadow-sm" title="عرض الجدول" type="button">
              <span className="material-symbols-outlined text-[18px]">table_rows</span>
            </button>
            <button className="p-xs rounded-lg text-on-surface-variant hover:text-on-surface" title="عرض التحليل" type="button">
              <span className="material-symbols-outlined text-[18px]">bar_chart</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}