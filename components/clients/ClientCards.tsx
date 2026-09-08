'use client';

interface Client {
  id: number;
  name: string;
  initial: string;
  sector: string;
  status: string;
  statusColor: string;
  contactName: string;
  contactInitial: string;
  contactTitle: string;
  phone: string;
  email: string;
  projects: number;
  activeProjects: number;
  totalRevenue: string;
  paidAmount: string;
  remainingAmount: string;
  progress: number;
  lastContact: string;
}

interface ClientCardsProps {
  searchQuery: string;
  selectedFilter: string;
}

const clientsData: Client[] = [
  {
    id: 1,
    name: 'مجموعة الدانوب للتجزئة',
    initial: 'د',
    sector: 'سلاسل تجزئة ومتاجر سريعة التوسع',
    status: 'نشط ومستمر',
    statusColor: 'bg-surface-container-high text-primary',
    contactName: 'عمر المنصوري',
    contactInitial: 'ع',
    contactTitle: 'مدير التسويق الرقمي والتجارة',
    phone: '+966500123456',
    email: 'omar@aldanube-group.com',
    projects: 3,
    activeProjects: 2,
    totalRevenue: '$42,000',
    paidAmount: '$37,000',
    remainingAmount: '$5,000',
    progress: 88,
    lastContact: 'منذ ساعتين (اجتماع sprint)',
  },
  {
    id: 2,
    name: 'منصة لوجستيك الدولية',
    initial: 'ل',
    sector: 'حلول الشحن وسلاسل الإمداد العالمية',
    status: 'عقد صيانة سنوي',
    statusColor: 'bg-tertiary-fixed text-on-tertiary-fixed',
    contactName: 'سارة الرشيد',
    contactInitial: 'س',
    contactTitle: 'نائب الرئيس للعمليات الرقمية',
    phone: '+971501239874',
    email: 'sara@logistic-intl.io',
    projects: 5,
    activeProjects: 4,
    totalRevenue: '$58,400',
    paidAmount: '$58,400',
    remainingAmount: '$0',
    progress: 100,
    lastContact: 'موعد مراجعة ربع سنوي غداً',
  },
  {
    id: 3,
    name: 'فنتك باي للمدفوعات',
    initial: 'ف',
    sector: 'بوابة دفع رقمية ومحفظة مصرفية',
    status: 'اتفاقية جديدة',
    statusColor: 'bg-primary-fixed text-on-primary-fixed-variant',
    contactName: 'خالد السبيعي',
    contactInitial: 'خ',
    contactTitle: 'المدير التنفيذي التقني CTO',
    phone: '+966551829304',
    email: 'khalid@fintechpay.sa',
    projects: 1,
    activeProjects: 1,
    totalRevenue: '$24,500',
    paidAmount: '$12,250',
    remainingAmount: '$12,250',
    progress: 50,
    lastContact: 'تواصل عبر Slack منذ 4 ساعات',
  },
];

export default function ClientCards({ searchQuery, selectedFilter }: ClientCardsProps) {
  const filteredClients = clientsData.filter((client) => {
    const matchesSearch = searchQuery === '' || 
      client.name.includes(searchQuery) || 
      client.contactName.includes(searchQuery) ||
      client.email.includes(searchQuery);
    
    const matchesFilter = selectedFilter === 'all' || 
      (selectedFilter === 'active' && client.status.includes('نشط')) ||
      (selectedFilter === 'retainer' && client.status.includes('عقد')) ||
      (selectedFilter === 'new' && client.status.includes('جديدة'));
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-md" id="clients-grid-view">
      {filteredClients.map((client) => (
        <div key={client.id} className="flex flex-col justify-between p-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group">
          <div>
            {/* Header */}
            <div className="flex items-start justify-between gap-sm mb-md">
              <div className="flex items-center gap-sm">
                <div className={`w-12 h-12 rounded-xl ${client.id === 1 ? 'bg-primary-fixed text-primary' : client.id === 2 ? 'bg-secondary-fixed text-secondary' : 'bg-tertiary-fixed text-tertiary'} flex items-center justify-center font-display text-headline-sm shrink-0 shadow-sm`}>
                  {client.initial}
                </div>
                <div className="flex flex-col min-w-0">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface truncate group-hover:text-primary transition-colors">
                    {client.name}
                  </h2>
                  <span className="font-body-sm text-body-sm text-on-surface-variant truncate">{client.sector}</span>
                </div>
              </div>
              <span className={`px-xs py-2xs rounded-full font-label-sm text-label-sm shrink-0 ${client.statusColor}`}>
                {client.status}
              </span>
            </div>

            {/* Contact Person */}
            <div className="flex items-center gap-xs p-xs rounded-xl bg-surface-container-low mb-md">
              <div className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface font-label-md text-label-md">
                {client.contactInitial}
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="font-label-md text-label-md text-on-surface truncate">{client.contactName}</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant truncate">{client.contactTitle}</span>
              </div>
              <div className="flex items-center gap-2xs">
                <a className="p-xs rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" href={`tel:${client.phone}`} title="اتصال هاتفي">
                  <span className="material-symbols-outlined text-[18px]">phone</span>
                </a>
                <a className="p-xs rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" href={`mailto:${client.email}`} title="إرسال بريد">
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                </a>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-sm p-sm rounded-xl bg-surface-container-lowest shadow-inner mb-md">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant">المشاريع التعاقدية</span>
                <div className="flex items-baseline gap-2xs mt-2xs">
                  <span className="font-headline-sm text-headline-sm text-on-surface">{client.projects} مشاريع</span>
                  <span className="font-label-sm text-label-sm text-primary">({client.activeProjects} نشط)</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant">إجمالي الإيرادات (LTV)</span>
                <div className="flex items-baseline gap-2xs mt-2xs">
                  <span className="font-headline-sm text-headline-sm text-on-surface">{client.totalRevenue}</span>
                </div>
              </div>
            </div>

            {/* Financial Progress */}
            <div className="flex flex-col gap-2xs mb-md">
              <div className="flex items-center justify-between font-label-sm text-label-sm">
                <span className="text-on-surface-variant">التحصيل المالي</span>
                <span className="text-on-surface font-bold">{client.paidAmount} / متبقي {client.remainingAmount}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                <div className={`h-full rounded-full ${client.id === 1 ? 'bg-primary-container' : client.id === 2 ? 'bg-secondary-container' : 'bg-tertiary-container'}`} style={{ width: `${client.progress}%` }}></div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-sm flex items-center justify-between border-t border-surface-container-high">
            <div className="flex items-center gap-2xs text-on-surface-variant font-label-sm text-label-sm">
              <span className={`material-symbols-outlined text-[16px] ${client.id === 1 ? 'text-primary' : client.id === 2 ? 'text-secondary' : 'text-tertiary'}`}>
                {client.id === 1 ? 'schedule' : client.id === 2 ? 'event_available' : 'chat'}
              </span>
              <span>{client.lastContact}</span>
            </div>
            <div className="flex items-center gap-2xs">
              <button className="px-sm py-2xs rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm transition-colors" type="button">
                ملف العميل
              </button>
              <button className="p-2xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
                <span className="material-symbols-outlined text-[18px]">more_vert</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}