'use client';

import MetricCard from './MetricCard';
import AlertsTable from './AlertsTable';
import ProjectsOverview from './ProjectsOverview';
import OperationsHealth from './OperationsHealth';
import TeamLoad from './TeamLoad';
import AgencyTip from './AgencyTip';
import MobileAlerts from './MobileAlerts';
import MobileProjects from './MobileProjects';
import HealthMetrics from './HealthMetrics';

export default function DashboardContent() {
  return (
    <div className="flex flex-col w-full gap-lg lg:gap-xl pb-3xl">
      {/* Greeting Header - متجاوب */}
      <section className="flex flex-col gap-xs pt-xs">
        <div className="flex items-center justify-between gap-sm">
          <div className="flex flex-col">
            <div className="flex items-center gap-2xs flex-wrap">
              <span className="font-headline-lg-mobile lg:font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                مرحباً مجدداً، أحمد
              </span>
              <span className="text-xl lg:text-display animate-bounce">👋</span>
            </div>
            <div className="flex items-center gap-xs mt-2xs flex-wrap">
              <span className="bg-surface-container-high text-primary font-label-sm text-label-sm px-xs py-2xs rounded-full">
                وكالة DevSeed الرقمية
              </span>
              <span className="text-outline text-body-sm font-body-sm hidden sm:inline">
                الخميس، 24 أكتوبر
              </span>
            </div>
          </div>
          <button className="flex items-center justify-center gap-2xs bg-primary-container text-on-primary px-sm py-xs rounded-xl shadow-sm active:scale-95 transition-all" id="downloadReportBtn">
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span className="font-label-md text-label-md hidden xs:inline">التقرير</span>
          </button>
        </div>
      </section>

      {/* 4 Key Metrics - 2x2 على الجوال، 4 أعمدة على الكمبيوتر */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-sm lg:gap-gutter">
        <MetricCard
          title="مشاريع نشطة"
          value="18"
          icon="folder"
          iconBg="bg-primary-fixed"
          iconColor="text-primary"
          progress={75}
          progressLabel="معدل الإنجاز"
          progressValue="75%"
          footer="+3 جديد هذا الشهر"
          badge="+12%"
          badgeColor="bg-secondary-fixed text-primary"
        />
        <MetricCard
          title="مشاريع متأخرة"
          value="3"
          icon="timer_off"
          iconBg="bg-error-container"
          iconColor="text-error"
          alert="مواعيد حرجة"
          alertType="error"
          progress={40}
          progressLabel="نسبة التأخير"
          progressValue="40%"
          progressColor="text-error"
          barColor="bg-error"
        />
        <MetricCard
          title="أرباح الشهر"
          value="$34.5K"
          icon="payments"
          iconBg="bg-surface-container-high"
          iconColor="text-secondary"
          badge="+22.4% أداء شهري"
          badgeColor="bg-surface-container-high text-primary"
          progress={80}
          progressLabel="المستهدف"
          progressValue="80%"
          progressColor="text-secondary"
          barColor="bg-secondary-container"
        />
        <MetricCard
          title="فواتير معلقة"
          value="$12.8K"
          icon="receipt_long"
          iconBg="bg-tertiary-fixed"
          iconColor="text-tertiary"
          footer="4 بانتظار السداد"
          progress={50}
          progressLabel="نسبة التحصيل"
          progressValue="50%"
          progressColor="text-tertiary"
          barColor="bg-tertiary-container"
        />
      </section>

      {/* Alerts - نسخة الجوال والكمبيوتر */}
      <div className="hidden lg:block">
        <AlertsTable />
      </div>
      <div className="lg:hidden">
        <MobileAlerts />
      </div>

      {/* Projects - نسخة الجوال والكمبيوتر */}
      <div className="hidden lg:block">
        <ProjectsOverview />
      </div>
      <div className="lg:hidden">
        <MobileProjects />
      </div>

      {/* Main Content Grid للشاشات الكبيرة */}
      <section className="hidden lg:grid lg:grid-cols-12 gap-gutter items-start">
        <div className="lg:col-span-8 flex flex-col gap-xl">
          {/* محتوى العمود الأيمن */}
        </div>
        <div className="lg:col-span-4 flex flex-col gap-xl">
          <OperationsHealth />
          <TeamLoad />
          <AgencyTip />
        </div>
      </section>

      {/* محتوى للجوال */}
      <section className="lg:hidden flex flex-col gap-lg">
        <HealthMetrics />
        <TeamLoad />
        <AgencyTip />
      </section>
    </div>
  );
}