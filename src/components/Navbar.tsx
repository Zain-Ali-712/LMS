// components/Navbar.tsx
import { FC, useState, useRef, useEffect } from 'react';
import { 
  Menu, 
  Search, 
  Bell, 
  ChevronDown, 
  LogOut, 
  Settings, 
  User, 
  HelpCircle, 
  Mail,
  Calendar,
  Shield,
  CreditCard,
  Moon,
  Sun
} from 'lucide-react';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: FC<NavbarProps> = ({ toggleSidebar }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const notifications = [
    { id: 1, type: 'enrollment', message: 'New course enrollment', time: '2 hours ago', read: false },
    { id: 2, type: 'message', message: 'You have a new message from Sarah', time: '5 hours ago', read: false },
    { id: 3, type: 'update', message: 'System update completed successfully', time: '1 day ago', read: true },
    { id: 4, type: 'reminder', message: 'Meeting with design team in 30 minutes', time: 'Just now', read: false },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'enrollment':
        return <User size={16} className="text-blue-500" />;
      case 'message':
        return <Mail size={16} className="text-green-500" />;
      case 'update':
        return <Shield size={16} className="text-purple-500" />;
      case 'reminder':
        return <Calendar size={16} className="text-orange-500" />;
      default:
        return <Bell size={16} className="text-gray-500" />;
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 px-5 py-3 flex items-center justify-between">
      {/* Left section */}
      <div className="flex items-center">
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleSidebar} 
          className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 mr-3 transition-colors"
        >
          <Menu size={20} />
        </button>

        {/* Search Bar */}
        <div className="relative hidden md:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={16} className="text-blue-400" />
          </div>
          <input
            type="text"
            placeholder="Search courses, users, settings..."
            className="pl-10 pr-4 py-1.5 w-80 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all text-sm text-gray-600"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-3">
        {/* Search icon for mobile */}
        <button className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors">
          <Search size={20} />
        </button>

        {/* Notifications */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => {
              setIsNotificationsOpen(!isNotificationsOpen);
              setIsProfileOpen(false);
            }}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 relative transition-colors"
          >
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">
              3
            </span>
          </button>

          {/* Notifications Dropdown */}
          {isNotificationsOpen && (
            <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-lg border border-gray-200 z-50 overflow-hidden">
              {/* Blurred header section */}
              <div className="px-4 py-3 bg-gradient-to-b from-blue-200 to-blue-50 border-b border-gray-100">
                <h3 className="font-semibold text-gray-800 text-sm">Notifications</h3>
                <p className="text-xs text-gray-500 mt-1">You have 3 unread messages</p>
              </div>
              
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0 ${
                      notification.read ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="mt-0.5">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm ${notification.read ? 'text-gray-600' : 'text-gray-800 font-medium'}`}>
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                      </div>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium w-full text-center py-2">
                  Mark all as read
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => {
              setIsProfileOpen(!isProfileOpen);
              setIsNotificationsOpen(false);
            }}
            className="flex items-center space-x-2 p-1.5 rounded-xl hover:bg-gray-100 transition-colors group"
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium text-sm shadow-sm">
              JD
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium text-gray-800">John Doe</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
            <ChevronDown 
              size={16} 
              className={`text-gray-400 transition-transform duration-200 ${
                isProfileOpen ? 'rotate-180' : 'group-hover:rotate-12'
              }`} 
            />
          </button>

          {/* Profile Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-200 z-50 overflow-hidden">
              {/* Header with profile info */}
              <div className="px-4 py-3 bg-gradient-to-b from-blue-200 to-blue-50 border-b border-blue-200">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium text-sm shadow-sm">
                    <User size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">John Doe</p>
                    <p className="text-xs text-gray-600">john.doe@example.com</p>
                  </div>
                </div>
              </div>
              
              <div className="py-2">
                {[
                  { icon: User, label: 'Profile', href: '#' },
                  { icon: Settings, label: 'Settings', href: '#' },
                  { icon: CreditCard, label: 'Billing', href: '#' },
                  { icon: Shield, label: 'Privacy', href: '#' },
                  { icon: HelpCircle, label: 'Help & Support', href: '#' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-colors group"
                    >
                      <Icon size={16} className="mr-3 text-gray-500 group-hover:text-blue-600" />
                      <span className="group-hover:text-blue-800">{item.label}</span>
                    </a>
                  );
                })}
                
                {/* Separator */}
                <div className="h-px bg-gray-100 my-1"></div>
                
                {/* Logout option */}
                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 transition-colors group"
                >
                  <LogOut size={16} className="mr-3 text-gray-500 group-hover:text-red-600" />
                  <span className="group-hover:text-red-800">Logout</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;