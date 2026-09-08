'use client';

import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';
import ProjectsContent from '@/components/projects/ProjectsContent';

export default function ProjectsPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      
      <div className="lg:pr-sidebar-w">
        <Header />
        
        <main className="relative pt-header-h bg-surface min-h-screen px-md pb-24 lg:p-xl">
          <ProjectsContent />
        </main>
        
        <MobileNav />
      </div>
    </div>
  );
}