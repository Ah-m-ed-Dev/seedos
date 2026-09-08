'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 lg:right-sidebar-w left-0 h-header-h bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-md lg:px-xl flex items-center justify-between">
      {/* Logo - يظهر فقط على الجوال */}
      <div className="flex items-center gap-xs lg:hidden">
        <Link href="/">
          <div className="w-9 h-9 rounded-xl bg-primary-container flex items-center justify-center text-on-primary shadow-sm">
            <span className="material-symbols-outlined text-[20px]">hub</span>
          </div>
        </Link>
        <Link href="/">
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-surface leading-none">SeedOS</span>
            <span className="font-label-sm text-label-sm text-outline leading-tight">DevSeed Agency</span>
          </div>
        </Link>
      </div>

      {/* Search */}
      <div className={`flex items-center gap-md ${isSearchOpen ? 'w-full' : 'w-auto lg:w-96'}`}>
        {isSearchOpen ? (
          <div className="relative w-full lg:w-96">
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
            <input
              className="w-full h-10 pr-10 pl-md rounded-xl bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest transition-colors"
              placeholder="بحث في المشاريع، العملاء..."
              type="text"
              autoFocus
              onBlur={() => setIsSearchOpen(false)}
            />
          </div>
        ) : (
          <>
            <div className="relative w-96 hidden lg:block">
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
              <input
                className="w-full h-10 pr-10 pl-md rounded-xl bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest transition-colors"
                placeholder="بحث في المشاريع، العملاء..."
                type="text"
              />
            </div>
            <button 
              className="lg:hidden p-2 rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors"
              onClick={() => setIsSearchOpen(true)}
            >
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>
          </>
        )}
      </div>

      <div className="flex items-center gap-xs lg:gap-md">
        {/* Agency Selector */}
        <div className="hidden sm:flex items-center gap-xs px-md py-2xs rounded-xl bg-surface-container-high text-on-surface">
          <span className="material-symbols-outlined text-primary text-[18px]">apartment</span>
          <span className="font-label-md text-label-md hidden md:inline">وكالة DevSeed</span>
          <span className="material-symbols-outlined text-[16px] text-on-surface-variant">expand_more</span>
        </div>

        {/* Notifications */}
        <button className="relative p-xs rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined text-[22px]">notifications</span>
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error ring-2 ring-surface"></span>
        </button>

        {/* New Project Button - يوجه إلى صفحة المشاريع */}
        <Link href="/projects">
          <button className="flex items-center gap-2xs px-md py-xs rounded-xl bg-primary-container text-on-primary hover:bg-secondary transition-colors font-label-md text-label-md shadow-sm active:scale-95 transition-transform" type="button">
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span className="hidden sm:inline">مشروع جديد</span>
          </button>
        </Link>

        {/* User Avatar */}
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
        </div>
      </div>
    </header>
  );
}