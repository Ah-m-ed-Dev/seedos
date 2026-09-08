'use client';

import { useState } from 'react';

interface Invoice {
  id: string;
  number: string;
  date: string;
  client: string;
  clientInitial: string;
  project: string;
  projectIcon: string;
  amount: string;
  amountSAR: string;
  dueDate: string;
  dueStatus: string;
  status: string;
  statusColor: string;
  paymentMethod: string;
  paymentIcon: string;
  isOverdue: boolean;
  isPaid: boolean;
}

interface InvoiceListProps {
  searchQuery: string;
  selectedFilter: string;
}

const invoicesData: Invoice[] = [
  {
    id: '1',
    number: '#INV-2024-094',
    date: 'صدرت في 14 أكتوبر 2024',
    client: 'شركة الدانوب للتجزئة',
    clientInitial: 'د',
    project: 'تطبيق المتجر الغذائي',
    projectIcon: 'terminal',
    amount: '$34,000',
    amountSAR: 'SAR 127,500',
    dueDate: '18 أكتوبر 2024',
    dueStatus: 'متبقي 4 أيام',
    status: 'معلقة',
    statusColor: 'bg-surface-container text-tertiary',
    paymentMethod: 'تحويل بنكي - الراجحي',
    paymentIcon: 'account_balance',
    isOverdue: false,
    isPaid: false,
  },
  {
    id: '2',
    number: '#INV-2024-093',
    date: 'صدرت في 01 أكتوبر 2024',
    client: 'منصة لوجستيك الدولية',
    clientInitial: 'ل',
    project: 'بوابة الشحنات السحابية',
    projectIcon: 'cloud',
    amount: '$28,500',
    amountSAR: 'SAR 106,875',
    dueDate: '10 أكتوبر 2024',
    dueStatus: 'تم التحصيل بتاريخه',
    status: 'مدفوعة',
    statusColor: 'bg-surface-container-high text-primary',
    paymentMethod: 'بوابة ميسر (فيزا)',
    paymentIcon: 'credit_card',
    isOverdue: false,
    isPaid: true,
  },
  {
    id: '3',
    number: '#INV-2024-091',
    date: 'صدرت في 15 سبتمبر 2024',
    client: 'فنتك باي للحلول المالية',
    clientInitial: 'ف',
    project: 'الربط المصرفي Open Banking',
    projectIcon: 'account_tree',
    amount: '$12,500',
    amountSAR: 'SAR 46,875',
    dueDate: '02 أكتوبر 2024',
    dueStatus: 'متأخرة 12 يوماً',
    status: 'متأخرة',
    statusColor: 'bg-error-container text-on-error-container',
    paymentMethod: 'تحويل بنكي - الأهلي',
    paymentIcon: 'swap_horiz',
    isOverdue: true,
    isPaid: false,
  },
  {
    id: '4',
    number: '#INV-2024-088',
    date: 'صدرت في 10 سبتمبر 2024',
    client: 'حلول تكنو العقارية',
    clientInitial: 'ت',
    project: 'إعادة تصميم المنصة وتطبيق الملاك',
    projectIcon: 'apartment',
    amount: '$22,000',
    amountSAR: 'SAR 82,500',
    dueDate: '25 سبتمبر 2024',
    dueStatus: 'تم السداد',
    status: 'مدفوعة',
    statusColor: 'bg-surface-container-high text-primary',
    paymentMethod: 'تحويل بنكي - الرياض',
    paymentIcon: 'account_balance',
    isOverdue: false,
    isPaid: true,
  },
  {
    id: '5',
    number: '#INV-2024-085',
    date: 'صدرت في 05 أكتوبر 2024',
    client: 'مجمع النخبة التخصصي',
    clientInitial: 'ن',
    project: 'المنظومة الطبية السحابية',
    projectIcon: 'local_hospital',
    amount: '$14,800',
    amountSAR: 'SAR 55,500',
    dueDate: '28 أكتوبر 2024',
    dueStatus: 'متبقي 14 يوماً',
    status: 'معلقة',
    statusColor: 'bg-surface-container text-tertiary',
    paymentMethod: 'مدى / بطاقة ائتمان',
    paymentIcon: 'credit_card',
    isOverdue: false,
    isPaid: false,
  },
  {
    id: '6',
    number: '#INV-2024-082',
    date: 'صدرت في 20 سبتمبر 2024',
    client: 'شبكة الأفق للإعلام الرقمي',
    clientInitial: 'أ',
    project: 'منصة المحتوى الصوتي',
    projectIcon: 'podcasts',
    amount: '$6,000',
    amountSAR: 'SAR 22,500',
    dueDate: '05 أكتوبر 2024',
    dueStatus: 'متأخرة 9 أيام',
    status: 'متأخرة',
    statusColor: 'bg-error-container text-on-error-container',
    paymentMethod: 'تحويل بنكي - ساب',
    paymentIcon: 'account_balance',
    isOverdue: true,
    isPaid: false,
  },
];

export default function InvoiceList({ searchQuery, selectedFilter }: InvoiceListProps) {
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);
  // ✅ إضافة state للـ select
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const filteredInvoices = invoicesData.filter((invoice) => {
    const matchesSearch = searchQuery === '' || 
      invoice.number.includes(searchQuery) || 
      invoice.client.includes(searchQuery) ||
      invoice.project.includes(searchQuery);
    
    const matchesFilter = selectedFilter === 'all' || 
      (selectedFilter === 'paid' && invoice.isPaid) ||
      (selectedFilter === 'pending' && !invoice.isPaid && !invoice.isOverdue) ||
      (selectedFilter === 'overdue' && invoice.isOverdue) ||
      (selectedFilter === 'draft' && false);
    
    return matchesSearch && matchesFilter;
  });

  const toggleSelect = (id: string) => {
    setSelectedInvoices(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant font-label-md text-label-md">
              <th className="py-md px-lg">رقم الفاتورة وتاريخها</th>
              <th className="py-md px-lg">العميل والمشروع</th>
              <th className="py-md px-lg">القيمة الإجمالية</th>
              <th className="py-md px-lg">تاريخ الاستحقاق</th>
              <th className="py-md px-lg">حالة السداد</th>
              <th className="py-md px-lg">طريقة التحصيل</th>
              <th className="py-md px-lg text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y-0">
            {filteredInvoices.map((invoice) => (
              <tr 
                key={invoice.id} 
                className={`hover:bg-surface-container-low/60 transition-colors group ${
                  invoice.isOverdue ? 'bg-error-container/10' : invoice.isPaid ? 'bg-surface-container-low/20' : ''
                }`}
              >
                <td className="py-md px-lg">
                  <div className="flex flex-col">
                    <span className="font-label-lg text-label-lg text-primary font-bold">{invoice.number}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{invoice.date}</span>
                  </div>
                </td>
                <td className="py-md px-lg">
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">{invoice.client}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2xs">
                      <span className="material-symbols-outlined text-[14px]">{invoice.projectIcon}</span>
                      {invoice.project}
                    </span>
                  </div>
                </td>
                <td className="py-md px-lg">
                  <div className="flex flex-col">
                    <span className={`font-label-lg text-label-lg font-bold ${invoice.isOverdue ? 'text-error' : 'text-on-surface'}`}>
                      {invoice.amount}
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">شامل الضريبة 15%</span>
                  </div>
                </td>
                <td className="py-md px-lg">
                  <div className="flex flex-col">
                    <span className={`font-body-md text-body-md ${invoice.isOverdue ? 'text-error font-semibold' : 'text-on-surface'}`}>
                      {invoice.dueDate}
                    </span>
                    <span className={`font-label-sm text-label-sm ${invoice.isOverdue ? 'text-error font-bold' : invoice.isPaid ? 'text-on-surface-variant' : 'text-primary font-semibold'}`}>
                      {invoice.dueStatus}
                    </span>
                  </div>
                </td>
                <td className="py-md px-lg">
                  <span className={`inline-flex items-center gap-2xs px-xs py-2xs rounded-full font-label-sm text-label-sm ${invoice.statusColor}`}>
                    {invoice.isPaid ? (
                      <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    ) : invoice.isOverdue ? (
                      <span className="material-symbols-outlined text-[14px]">error</span>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    )}
                    <span>{invoice.status}</span>
                  </span>
                </td>
                <td className="py-md px-lg">
                  <div className="flex items-center gap-xs font-body-sm text-body-sm text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-on-surface-variant">{invoice.paymentIcon}</span>
                    <span>{invoice.paymentMethod}</span>
                  </div>
                </td>
                <td className="py-md px-lg">
                  <div className="flex items-center justify-center gap-2xs">
                    <button className="p-2xs rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" title="تحميل PDF" type="button">
                      <span className="material-symbols-outlined text-[20px]">download</span>
                    </button>
                    {!invoice.isPaid && (
                      <button className={`p-2xs rounded-lg ${invoice.isOverdue ? 'bg-error text-on-error hover:bg-error/90' : 'hover:bg-surface-container text-on-surface-variant hover:text-primary'} transition-colors`} title={invoice.isOverdue ? 'إرسال إنذار فوري' : 'إرسال تذكير للعميل'} type="button">
                        <span className="material-symbols-outlined text-[18px]">
                          {invoice.isOverdue ? 'notification_important' : 'mail'}
                        </span>
                      </button>
                    )}
                    <button className="p-2xs rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="خيارات إضافية" type="button">
                      <span className="material-symbols-outlined text-[20px]">more_vert</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-md p-md bg-surface-container-low font-body-sm text-body-sm text-on-surface-variant">
        <div className="flex items-center gap-xs">
          <span>عرض 1 إلى {Math.min(filteredInvoices.length, rowsPerPage)} من أصل {filteredInvoices.length} فاتورة</span>
          <span className="mx-2xs text-outline-variant">•</span>
          <span>عرض لكل صفحة:</span>
          {/* ✅ إصلاح: استخدام value بدلاً من selected */}
          <select 
            className="bg-surface-container-lowest text-on-surface rounded-md px-xs py-2xs outline-none cursor-pointer"
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div className="flex items-center gap-2xs">
          <button className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors disabled:opacity-40" disabled type="button">
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
          <button className="w-8 h-8 rounded-lg bg-primary text-on-primary font-bold flex items-center justify-center shadow-sm" type="button">1</button>
          <button className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors" type="button">2</button>
          <button className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors" type="button">3</button>
          <span className="px-2xs text-on-surface-variant">...</span>
          <button className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors" type="button">
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>
        </div>
      </div>
    </section>
  );
}