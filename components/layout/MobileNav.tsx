'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  path: string;
  label: string;
  icon: string;
  href: string;
}

const navItems: NavItem[] = [
   { path: 'dashboard', label: 'لوحة التحكم', icon: 'dashboard', href: '/' },
  { path: 'projects', label: 'المشاريع', icon: 'folder', href: '/projects' },
  { path: 'tasks', label: 'المهام', icon: 'check_box', href: '/tasks' },
  { path: 'clients', label: 'العملاء', icon: 'groups', href: '/clients' },
  { path: 'invoices', label: 'الفواتير والمالية', icon: 'receipt_long', href: '/invoices' },
  { path: 'assets', label: 'الأصول والاشتراكات', icon: 'inventory_2', href: '/assets' },
  { path: 'settings', label: 'الإعدادات', icon: 'settings', href: '/settings' },
];

export default function MobileNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href) || false;
  };

  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.05)] lg:hidden">
      <div className="flex justify-around items-center h-16 px-xs">
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.path}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-2xs min-w-[56px] min-h-[44px] transition-colors ${
                active
                  ? 'text-primary font-bold'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
              <span className="font-label-sm text-label-sm mt-0.5">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}