'use client';

import { useState } from 'react';
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

export default function Sidebar() {
  const pathname = usePathname();
  
  const getActivePath = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href) || false;
  };

  return (
    <aside className="fixed right-0 top-0 h-full w-sidebar-w bg-surface-container-lowest z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] hidden lg:flex">
      <div className="flex flex-col">
        <div className="h-header-h px-xl flex items-center gap-xs bg-surface-container-lowest">
          <Link href="/" className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-on-primary shadow-sm">
            <span className="material-symbols-outlined text-[24px]">hub</span>
          </Link>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-surface leading-tight">SeedOS</span>
            <span className="font-label-sm text-label-sm text-outline leading-tight">DevSeed Agency</span>
          </div>
        </div>
        <nav className="flex flex-col gap-2xs px-md mt-md">
          {navItems.map((item) => {
            const isActive = getActivePath(item.href);
            return (
              <Link
                key={item.path}
                href={item.href}
                className={`flex items-center gap-sm px-md py-xs rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-surface-container-high text-primary font-bold shadow-sm'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                <span className="font-body-md text-body-md">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="p-md m-md rounded-xl bg-surface-container-low flex items-center justify-between">
        <div className="flex items-center gap-xs">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-md text-label-md text-on-surface leading-tight">طارق العلي</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">مالك الوكالة</span>
          </div>
        </div>
        <span className="material-symbols-outlined text-on-surface-variant text-[20px]">more_vert</span>
      </div>
    </aside>
  );
}