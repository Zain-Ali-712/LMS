// components/RecentActivity.tsx
'use client';
import { useState } from 'react';
import { Eye, Download, MoreVertical, Calendar, Clock, Users, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

const RecentActivity = () => {
  const router = useRouter();
  const [visibleItems, setVisibleItems] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const activities = [
    { 
      id: 1,
      course: 'Introduction to React', 
      date: '2023-08-15',
      time: '10:30 AM',
      category: 'Development',
      status: 'Published',
      enrollments: 42,
      progress: 85
    },
    { 
      id: 2,
      course: 'Advanced Tailwind CSS', 
      date: '2023-08-10',
      time: '02:15 PM',
      category: 'Design',
      status: 'Draft',
      enrollments: 28,
      progress: 40
    },
    { 
      id: 3,
      course: 'Next.js Fundamentals', 
      date: '2023-08-05',
      time: '09:45 AM',
      category: 'Development',
      status: 'Published',
      enrollments: 67,
      progress: 92
    },
    { 
      id: 4,
      course: 'TypeScript Mastery', 
      date: '2023-08-01',
      time: '04:20 PM',
      category: 'Development',
      status: 'Published',
      enrollments: 53,
      progress: 78
    },
  ];

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setVisibleItems(isExpanded ? 3 : activities.length);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'Draft':
        return 'bg-amber-500/10 text-amber-600 border-amber-500/20';
      case 'Archived':
        return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
      default:
        return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Development':
        return 'bg-blue-500';
      case 'Design':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  const handleViewCourse = (id: number) => {
    router.push(`/courses/${id}`);
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <h3 className="text-lg font-bold text-gray-800 flex items-center">
            <Sparkles size={18} className="text-blue-500 mr-2" />
            Recent Activity
          </h3>
          <p className="text-xs text-gray-500 mt-1">Latest course updates</p>
        </div>
        <button className="text-blue-500 hover:text-blue-700 text-xs font-medium flex items-center px-3 py-1.5 hover:bg-blue-50 rounded-lg transition-all duration-300 hover:scale-105">
          <Download size={14} className="mr-1.5" />
          Export
        </button>
      </div>

      {/* Activities List */}
      <div className="space-y-2">
        {activities.slice(0, visibleItems).map((activity, index) => (
          <div
            key={activity.id}
            className={`
              p-3 rounded-xl border transition-all duration-300 cursor-pointer
              ${hoveredRow === index 
                ? 'bg-gradient-to-r from-blue-50/50 to-blue-100/30 border-blue-200 shadow-md transform scale-[1.02]' 
                : 'bg-white border-gray-100'
              }
              hover:shadow-md hover:border-blue-100
            `}
            onMouseEnter={() => setHoveredRow(index)}
            onMouseLeave={() => setHoveredRow(null)}
          >
            <div className="flex items-center justify-between">
              {/* Left Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center mb-2">
                  <div className={`w-2 h-2 rounded-full ${getCategoryColor(activity.category)} mr-2`}></div>
                  <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(activity.status)}`}>
                    {activity.status}
                  </span>
                </div>
                
                <h4 className="font-semibold text-gray-800 text-sm mb-1.5 truncate">
                  {activity.course}
                </h4>
                
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <Calendar size={12} className="mr-1.5 text-blue-400" />
                  <span className="mr-3">{activity.date}</span>
                  <Clock size={12} className="mr-1.5 text-blue-400" />
                  <span>{activity.time}</span>
                </div>

                {/* Progress Bar */}
                <div className="flex items-center space-x-2">
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-1.5 rounded-full transition-all duration-700"
                      style={{ width: `${activity.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-medium text-blue-600">{activity.progress}%</span>
                </div>
              </div>
              
              {/* Right Content */}
              <div className="flex items-center space-x-2 ml-3">
                <div className="text-center min-w-[50px]">
                  <div className="flex items-center justify-center text-sm font-bold text-gray-800">
                    <Users size={14} className="mr-1 text-blue-500" />
                    {activity.enrollments}
                  </div>
                </div>
                
                <div className="flex space-x-1">
                  <button 
                    onClick={() => handleViewCourse(activity.id)}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-100 transition-all duration-200 hover:scale-110"
                  >
                    <Eye size={14} />
                  </button>
                  <button className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200 hover:scale-110">
                    <MoreVertical size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Expand/Collapse Button */}
      {activities.length > 3 && (
        <div className="mt-4 pt-3 border-t border-gray-100">
          <button
            onClick={toggleExpand}
            className="w-full text-blue-500 hover:text-blue-700 font-medium text-sm flex items-center justify-center py-2 hover:bg-blue-50 rounded-lg transition-all duration-300 group"
          >
            {isExpanded ? (
              <>
                <span>Show Less</span>
                <ChevronUp size={16} className="ml-2 transition-transform group-hover:-translate-y-0.5" />
              </>
            ) : (
              <>
                <span>View All Activities</span>
                <ChevronDown size={16} className="ml-2 transition-transform group-hover:translate-y-0.5" />
              </>
            )}
          </button>
        </div>
      )}

      {/* Quick Stats */}
      <div className="mt-4 pt-3 border-t border-gray-100">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-blue-50/50 p-2 rounded-lg">
            <div className="text-sm font-bold text-blue-600">{activities.length}</div>
            <div className="text-xs text-gray-600">Total</div>
          </div>
          <div className="bg-green-50/50 p-2 rounded-lg">
            <div className="text-sm font-bold text-green-600">
              {activities.filter(a => a.status === 'Published').length}
            </div>
            <div className="text-xs text-gray-600">Published</div>
          </div>
          <div className="bg-amber-50/50 p-2 rounded-lg">
            <div className="text-sm font-bold text-amber-500">
              {activities.filter(a => a.status === 'Draft').length}
            </div>
            <div className="text-xs text-gray-600">Draft</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;