// app/dashboard/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import StatsOverview from '@/components/StatsOverview';
import ChartsSection from '@/components/ChartsSection';
import RecentActivity from '@/components/RecentActivity';
import QuickActions from '@/components/QuickActions';
import AddCourseModal from '@/components/AddCourseModal';
import CoursesPage from '../courses/page';

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isAddCourseOpen, setIsAddCourseOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Dashboard');
  const pathname = usePathname();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleSidebarCollapse = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  // Sync active section with the current route
  useEffect(() => {
    if (pathname === '/dashboard') setActiveSection('Dashboard');
    else if (pathname === '/courses') setActiveSection('Courses');
    // Add more conditions for other sections as needed (e.g., Lessons, Assessments, etc.)
  }, [pathname]);

  const renderContent = () => {
    switch (activeSection) {
      case 'Dashboard':
        return (
          <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
              <QuickActions onAddCourse={() => setIsAddCourseOpen(true)} />
            </div>
            <StatsOverview />
            <ChartsSection isSidebarCollapsed={isSidebarCollapsed} />
            <RecentActivity />
          </>
        );
      case 'Courses':
        return <CoursesPage />;
      default:
        return (
          <div className="text-center text-gray-500 py-10">
            <h1 className="text-2xl font-bold">Coming Soon</h1>
            <p>This section is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggle={toggleSidebar} 
        isCollapsed={isSidebarCollapsed}
        toggleCollapse={toggleSidebarCollapse}
        activeItem={activeSection}
      />

      {/* Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${
        isSidebarCollapsed ? 'md:ml-20' : 'md:ml-64'
      }`}>
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Dashboard Content */}
        <main className="p-4 md:p-6 lg:p-8 flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>

      {/* Add Course Modal */}
      <AddCourseModal 
        isOpen={isAddCourseOpen} 
        onClose={() => setIsAddCourseOpen(false)} 
      />
    </div>
  );
}