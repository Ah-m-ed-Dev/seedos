'use client';

import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import TasksContent from '@/components/tasks/TasksContent';

export default function TasksPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      
      <div className="lg:pr-sidebar-w">
        <Header />
        
        <main className="relative pt-header-h bg-surface min-h-screen px-md pb-24 lg:p-xl">
          <TasksContent />
        </main>
        
        <MobileNav />
      </div>
    </div>
  );
}