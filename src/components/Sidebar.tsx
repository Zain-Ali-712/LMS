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
  PanelLeftClose,
  PanelLeftOpen,
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
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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

  const getIconComponent = (icon: any, isActive: boolean, isHovered: boolean) => {
    const Icon = icon;
    return (
      <Icon 
        size={20} 
        className={`
          transition-all duration-300
          ${isActive ? 'text-white' : 'text-blue-400'}
          ${isHovered ? 'scale-110' : 'scale-100'}
        `} 
      />
    );
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
        className={`
          bg-blue-50 shadow-xl fixed inset-y-0 left-0 z-50 transform 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 transition-all duration-300 ease-in-out flex flex-col
          ${isCollapsed ? 'w-20' : 'w-64'}
        `}
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
            <button 
              onClick={toggle} 
              className="md:hidden p-1 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X size={20} className="text-gray-500" />
            </button>
          )}
        </div>
        
        {/* Navigation items */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.label;
            const isHovered = hoveredItem === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.label)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`
                  w-full flex items-center p-3 rounded-xl transition-all duration-300 group
                  ${isCollapsed ? 'justify-center' : ''}
                  ${isActive 
                    ? 'bg-blue-500 text-white shadow-sm transform scale-[1.02]' 
                    : 'text-gray-600 hover:bg-blue-200 hover:text-blue-600 hover:transform hover:scale-[1.02]'
                  }
                `}
                title={isCollapsed ? item.label : ''}
              >
                <div className={`
                  relative flex items-center justify-center
                  ${isCollapsed ? '' : 'mr-3'}
                `}>
                  {getIconComponent(item.icon, isActive, isHovered)}
              
                </div>
                
                {!isCollapsed && (
                  <span className="font-medium group-hover:translate-x-1 transition-transform">
                    {item.label}
                  </span>
                )}
                
                
              </button>
            );
          })}
        </nav>
        
        {/* Collapse toggle at bottom right */}
        <div className="p-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={toggleCollapse}
            className={`
              hidden md:flex items-center justify-center w-10 h-10 rounded-full
              bg-blue-200 hover:bg-blue-300 
              transition-all duration-300 transform hover:scale-110
              shadow-md hover:shadow-lg
              ${isCollapsed ? '' : 'mr-2'}
            `}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <PanelLeftOpen size={24} className="text-blue-600" />
            ) : (
              <PanelLeftClose size={24} className="text-blue-600" />
            )}
            
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;