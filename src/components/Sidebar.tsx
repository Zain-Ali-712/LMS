// components/Sidebar.tsx
import { FC, useState } from 'react';
import { 
  X, 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  Settings, 
  FileText, 
  ClipboardCheck,
  ChevronLeft,
  GraduationCap
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, toggle, isCollapsed, toggleCollapse }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'lessons', label: 'Lessons', icon: FileText },
    { id: 'assessments', label: 'Assessments', icon: ClipboardCheck },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleItemClick = (label: string) => {
    setActiveItem(label);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggle}
        />
      )}
      
      <aside
        className={`bg-white shadow-xl fixed inset-y-0 left-0 z-50 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        {/* Header with logo */}
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <div className={`flex items-center ${isCollapsed ? 'justify-center w-full' : ''}`}>
            <div className="bg-blue-600 rounded-md p-2 flex items-center justify-center">
              <GraduationCap size={24} className="text-white" />
            </div>
            {!isCollapsed && (
              <h2 className="ml-3 text-xl font-bold text-gray-800">PRO ACADEMY</h2>
            )}
          </div>
          {!isCollapsed && (
            <button onClick={toggle} className="md:hidden">
              <X size={20} className="text-gray-500 hover:text-gray-700 transition-colors" />
            </button>
          )}
        </div>
        
        {/* Navigation items */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.label;
            
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.label)}
                className={`w-full flex items-center p-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-500'
                } ${isCollapsed ? 'justify-center' : ''}`}
                title={isCollapsed ? item.label : ''}
              >
                <Icon 
                  size={20} 
                  className={isActive ? "text-blue-600" : "text-gray-500"} 
                />
                {!isCollapsed && (
                  <span className="ml-3 font-medium">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>
        
        {/* Collapse toggle at bottom */}
        <div className="p-4 border-t border-gray-100">
          <button
            onClick={toggleCollapse}
            className="hidden md:flex items-center justify-center w-10 h-10 ml-auto mr-auto rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <ChevronLeft 
              size={16} 
              className={`text-gray-600 transition-transform duration-300 ${
                isCollapsed ? 'rotate-180' : ''
              }`} 
            />
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;