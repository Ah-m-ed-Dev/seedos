'use client';

interface AssetFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
}

const filters = [
  { id: 'all', label: 'الكل', count: 52 },
  { id: 'cloud', label: 'البنية السحابية والخوادم', count: 18 },
  { id: 'license', label: 'تراخيص البرمجيات والتصميم', count: 20 },
  { id: 'domains', label: 'النطاقات وشهادات SSL', count: 14 },
  { id: 'urgent', label: 'تجديد قريب', count: 5 },
];

export default function AssetFilters({ 
  searchQuery, 
  setSearchQuery, 
  selectedFilter, 
  setSelectedFilter 
}: AssetFiltersProps) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-lg shadow-sm flex flex-col gap-lg">
      <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-md">
        {/* Search Input */}
        <div className="relative w-full xl:w-96">
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
          <input
            className="w-full h-10 pr-10 pl-md rounded-xl bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:bg-surface-container transition-all"
            placeholder="بحث باسم الخدمة، الحساب، النطاق..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-xs overflow-x-auto pb-1 xl:pb-0 scrollbar-none">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`flex items-center gap-2xs px-md py-xs rounded-xl whitespace-nowrap transition-colors font-label-md text-label-md ${
                selectedFilter === filter.id
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
              }`}
              onClick={() => setSelectedFilter(filter.id)}
            >
              <span>{filter.label}</span>
              <span className={`px-xs py-0.5 rounded-full text-label-sm font-label-sm ${
                selectedFilter === filter.id
                  ? 'bg-primary-container text-on-primary'
                  : 'bg-surface-container-highest text-on-surface-variant'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* View Switcher */}
        <div className="flex items-center bg-surface-container-low p-2xs rounded-xl self-start xl:self-auto">
          <button className="p-xs rounded-lg bg-surface-container-lowest text-primary shadow-sm" title="عرض الجدول التفصيلي" type="button">
            <span className="material-symbols-outlined text-[20px]">view_list</span>
          </button>
          <button className="p-xs rounded-lg text-on-surface-variant hover:text-on-surface" title="عرض البطاقات الشبكية" type="button">
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
          </button>
        </div>
      </div>

      {/* Secondary Filters */}
      <div className="flex flex-wrap items-center gap-sm pt-xs bg-surface-container-lowest">
        <div className="relative">
          <select className="appearance-none h-9 pr-md pl-8 rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md outline-none cursor-pointer hover:bg-surface-container transition-colors">
            <option>كل المشاريع والعملاء</option>
            <option>مجموعة الدانوب للتجزئة</option>
            <option>تطبيق فنتك باي</option>
            <option>خدمات DevSeed المركزية</option>
          </select>
          <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">expand_more</span>
        </div>

        <div className="relative">
          <select className="appearance-none h-9 pr-md pl-8 rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md outline-none cursor-pointer hover:bg-surface-container transition-colors">
            <option>طريقة الدفع (الكل)</option>
            <option>بطاقة الائتمان الرئيسية</option>
            <option>التحويل البنكي المؤسسي</option>
          </select>
          <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">expand_more</span>
        </div>

        <div className="relative">
          <select className="appearance-none h-9 pr-md pl-8 rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md outline-none cursor-pointer hover:bg-surface-container transition-colors">
            <option>حالة التجديد (الكل)</option>
            <option>تجديد تلقائي نشط</option>
            <option>مطلوب تجديد يدوي عاجل</option>
          </select>
          <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">expand_more</span>
        </div>

        <button className="mr-auto text-primary font-label-sm text-label-sm hover:underline flex items-center gap-2xs" type="button">
          <span className="material-symbols-outlined text-[16px]">restart_alt</span>
          <span>إعادة تعيين الفلاتر</span>
        </button>
      </div>
    </div>
  );
}