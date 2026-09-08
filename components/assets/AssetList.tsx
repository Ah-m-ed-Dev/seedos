'use client';

import { useState } from 'react';

interface Asset {
  id: string;
  name: string;
  icon: string;
  iconBg: string;
  category: string;
  categoryColor: string;
  project: string;
  projectColor: string;
  cost: string;
  costPeriod: string;
  paymentMethod: string;
  paymentIcon: string;
  renewalDate: string;
  renewalStatus: string;
  renewalColor: string;
  status: string;
  statusColor: string;
  isUrgent: boolean;
  details: string;
}

interface AssetListProps {
  searchQuery: string;
  selectedFilter: string;
}

const assetsData: Asset[] = [
  {
    id: '1',
    name: 'AWS EC2 & RDS Production',
    icon: 'cloud_queue',
    iconBg: 'bg-surface-container-high text-primary',
    category: 'بنية تحتية سحابية',
    categoryColor: 'bg-secondary-fixed text-on-secondary-fixed-variant',
    project: 'تطبيق فنتك باي',
    projectColor: 'bg-primary',
    cost: '$3,200',
    costPeriod: 'فوترة شهرية حسب الاستهلاك',
    paymentMethod: '**** 4821',
    paymentIcon: 'credit_card',
    renewalDate: '1 نوفمبر 2024',
    renewalStatus: 'متبقي 8 أيام',
    renewalColor: 'text-on-surface-variant',
    status: 'تجديد تلقائي نشط',
    statusColor: 'bg-surface-container-high text-primary',
    isUrgent: false,
    details: 'us-east-1',
  },
  {
    id: '2',
    name: 'GitHub Enterprise Cloud',
    icon: 'terminal',
    iconBg: 'bg-inverse-surface text-inverse-on-surface',
    category: 'أدوات برمجية',
    categoryColor: 'bg-surface-container text-on-surface-variant',
    project: 'خدمات DevSeed المركزية',
    projectColor: 'bg-secondary',
    cost: '$504',
    costPeriod: 'شهرياً ($21/مقعد)',
    paymentMethod: '**** 4821',
    paymentIcon: 'credit_card',
    renewalDate: '15 نوفمبر 2024',
    renewalStatus: 'متبقي 22 يوماً',
    renewalColor: 'text-on-surface-variant',
    status: 'تجديد تلقائي نشط',
    statusColor: 'bg-surface-container-high text-primary',
    isUrgent: false,
    details: '24 مطور',
  },
  {
    id: '3',
    name: 'Figma Organization Plan',
    icon: 'palette',
    iconBg: 'bg-tertiary-container text-on-tertiary',
    category: 'تصميم وواجهات',
    categoryColor: 'bg-tertiary-fixed text-on-tertiary-fixed',
    project: 'فريق التصميم والتجربة',
    projectColor: 'bg-secondary',
    cost: '$1,080',
    costPeriod: 'شهرياً (24 مقعد)',
    paymentMethod: 'تنتهي الصلاحية',
    paymentIcon: 'credit_card_off',
    renewalDate: '28 أكتوبر 2024',
    renewalStatus: 'متبقي 4 أيام',
    renewalColor: 'text-error font-bold',
    status: 'يتطلب تجديد يدوي عاجل',
    statusColor: 'bg-error-container text-on-error-container',
    isUrgent: true,
    details: '4 مقاعد غير نشطة',
  },
  {
    id: '4',
    name: 'OpenAI Enterprise API',
    icon: 'smart_toy',
    iconBg: 'bg-surface-container-high text-primary',
    category: 'ذكاء اصطناعي ونماذج',
    categoryColor: 'bg-surface-container text-on-surface-variant',
    project: 'مشروع روبوت الاستشارات',
    projectColor: 'bg-tertiary',
    cost: '$1,650',
    costPeriod: 'استهلاك شهري مقدر',
    paymentMethod: 'تحويل بنكي مسبق',
    paymentIcon: 'account_balance',
    renewalDate: '31 أكتوبر 2024',
    renewalStatus: 'متبقي 7 أيام',
    renewalColor: 'text-on-surface-variant',
    status: 'رصيد مسبق الدفع',
    statusColor: 'bg-surface-container-high text-primary',
    isUrgent: false,
    details: 'Tier-5 API',
  },
  {
    id: '5',
    name: 'Vercel Pro Team',
    icon: 'change_history',
    iconBg: 'bg-inverse-surface text-inverse-on-surface',
    category: 'استضافة الواجهات',
    categoryColor: 'bg-secondary-fixed text-on-secondary-fixed-variant',
    project: 'خدمات DevSeed المركزية',
    projectColor: 'bg-secondary',
    cost: '$360',
    costPeriod: 'شهرياً (18 مقعد)',
    paymentMethod: '**** 4821',
    paymentIcon: 'credit_card',
    renewalDate: '12 نوفمبر 2024',
    renewalStatus: 'متبقي 19 يوماً',
    renewalColor: 'text-on-surface-variant',
    status: 'تجديد تلقائي نشط',
    statusColor: 'bg-surface-container-high text-primary',
    isUrgent: false,
    details: 'اقتراح ترقية سنوية',
  },
  {
    id: '6',
    name: 'Namecheap Domains Bundle',
    icon: 'language',
    iconBg: 'bg-surface-container-high text-primary',
    category: 'نطاقات وحماية SSL',
    categoryColor: 'bg-surface-container text-on-surface-variant',
    project: 'مجموعة الدانوب للتجزئة',
    projectColor: 'bg-primary',
    cost: '$840',
    costPeriod: 'سنوياً (متجدد)',
    paymentMethod: 'باي بال المؤسسي',
    paymentIcon: 'account_balance_wallet',
    renewalDate: '26 ديسمبر 2024',
    renewalStatus: 'متبقي 63 يوماً',
    renewalColor: 'text-on-surface-variant',
    status: 'تجديد تلقائي سنوي',
    statusColor: 'bg-surface-container-high text-primary',
    isUrgent: false,
    details: '14 نطاق نشط',
  },
];

export default function AssetList({ searchQuery, selectedFilter }: AssetListProps) {
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const filteredAssets = assetsData.filter((asset) => {
    const matchesSearch = searchQuery === '' || 
      asset.name.includes(searchQuery) || 
      asset.project.includes(searchQuery) ||
      asset.category.includes(searchQuery);
    
    const matchesFilter = selectedFilter === 'all' || 
      (selectedFilter === 'cloud' && asset.category.includes('سحابية')) ||
      (selectedFilter === 'license' && asset.category.includes('برمجية')) ||
      (selectedFilter === 'domains' && asset.category.includes('نطاقات')) ||
      (selectedFilter === 'urgent' && asset.isUrgent);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-right border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant font-label-md text-label-md">
              <th className="py-md px-lg">الأصل / الخدمة السحابية</th>
              <th className="py-md px-md">المشروع / المستفيد</th>
              <th className="py-md px-md">دورية وتكلفة الاشتراك</th>
              <th className="py-md px-md">طريقة الدفع والحساب</th>
              <th className="py-md px-md">موعد التجديد القادم</th>
              <th className="py-md px-md">حالة الاشتراك</th>
              <th className="py-md px-lg text-left">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y-0 text-on-surface font-body-md text-body-md">
            {filteredAssets.map((asset) => (
              <tr 
                key={asset.id} 
                className={`hover:bg-surface-container-low/60 transition-colors ${asset.isUrgent ? 'bg-error-container/20' : ''}`}
              >
                <td className="py-md px-lg">
                  <div className="flex items-center gap-md">
                    <div className={`w-10 h-10 rounded-xl ${asset.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <span className="material-symbols-outlined text-[24px]">{asset.icon}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-on-surface leading-tight">{asset.name}</span>
                      <div className="flex items-center gap-xs mt-2xs">
                        <span className={`font-label-sm text-label-sm px-xs py-0.5 rounded-md ${asset.categoryColor}`}>
                          {asset.category}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">{asset.details}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-md px-md">
                  <div className="flex items-center gap-xs">
                    <span className={`w-2 h-2 rounded-full ${asset.projectColor}`}></span>
                    <span className="font-label-lg text-label-lg text-on-surface">{asset.project}</span>
                  </div>
                </td>
                <td className="py-md px-md">
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold font-mono">{asset.cost}</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">{asset.costPeriod}</span>
                  </div>
                </td>
                <td className="py-md px-md">
                  <div className="flex items-center gap-xs text-on-surface-variant font-label-md text-label-md">
                    <span className={`material-symbols-outlined text-[18px] ${asset.isUrgent ? 'text-error' : 'text-primary'}`}>
                      {asset.paymentIcon}
                    </span>
                    <span className={`font-mono ${asset.isUrgent ? 'text-error' : ''}`}>{asset.paymentMethod}</span>
                  </div>
                </td>
                <td className="py-md px-md">
                  <div className="flex flex-col">
                    <span className={`font-label-md text-label-md ${asset.isUrgent ? 'text-error font-bold' : 'text-on-surface'}`}>
                      {asset.renewalDate}
                    </span>
                    <span className={`font-label-sm text-label-sm ${asset.renewalColor}`}>
                      {asset.renewalStatus}
                    </span>
                  </div>
                </td>
                <td className="py-md px-md">
                  <span className={`inline-flex items-center gap-2xs px-sm py-2xs rounded-full font-label-sm text-label-sm font-bold ${asset.statusColor}`}>
                    {asset.isUrgent ? (
                      <span className="material-symbols-outlined text-[14px]">warning</span>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    )}
                    <span>{asset.status}</span>
                  </span>
                </td>
                <td className="py-md px-lg text-left">
                  <div className="flex items-center justify-end gap-xs">
                    <button className="p-xs rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="تفاصيل الفاتورة" type="button">
                      <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                    </button>
                    {asset.isUrgent && (
                      <button className="px-sm py-xs rounded-xl bg-error text-on-error font-label-sm text-label-sm hover:opacity-90 transition-opacity" type="button">
                        تحديث البطاقة
                      </button>
                    )}
                    <button className="p-xs rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="تعديل" type="button">
                      <span className="material-symbols-outlined text-[20px]">edit</span>
                    </button>
                    <button className="p-xs rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="فتح الخدمة" type="button">
                      <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="p-md bg-surface-container-low flex items-center justify-between flex-wrap gap-sm">
        <span className="font-body-sm text-body-sm text-on-surface-variant">عرض {Math.min(filteredAssets.length, rowsPerPage)} من أصل {filteredAssets.length} أصل واشتراك نشط</span>
        <div className="flex items-center gap-xs">
          <button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface flex items-center justify-center shadow-sm" type="button">
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
          <button className="w-8 h-8 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold" type="button">1</button>
          <button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm flex items-center justify-center hover:bg-surface-container" type="button">2</button>
          <button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm flex items-center justify-center hover:bg-surface-container" type="button">3</button>
          <span className="text-on-surface-variant font-label-sm px-xs">...</span>
          <button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm flex items-center justify-center hover:bg-surface-container" type="button">9</button>
          <button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface flex items-center justify-center shadow-sm" type="button">
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>
        </div>
      </div>
    </div>
  );
}