// components/RecentActivity.tsx
import { useState } from 'react';
import { Eye, Download, MoreVertical, Calendar, Clock, BookOpen } from 'lucide-react';

const RecentActivity = () => {
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
      enrollments: 42
    },
    { 
      id: 2,
      course: 'Advanced Tailwind CSS', 
      date: '2023-08-10',
      time: '02:15 PM',
      category: 'Design',
      status: 'Draft',
      enrollments: 28
    },
    { 
      id: 3,
      course: 'Next.js Fundamentals', 
      date: '2023-08-05',
      time: '09:45 AM',
      category: 'Development',
      status: 'Published',
      enrollments: 67
    },
    { 
      id: 4,
      course: 'TypeScript Mastery', 
      date: '2023-08-01',
      time: '04:20 PM',
      category: 'Development',
      status: 'Published',
      enrollments: 53
    },
  ];

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setVisibleItems(isExpanded ? 3 : activities.length);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-800';
      case 'Draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'Archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Development':
        return <div className="w-3 h-3 rounded-full bg-blue-500"></div>;
      case 'Design':
        return <div className="w-3 h-3 rounded-full bg-purple-500"></div>;
      default:
        return <div className="w-3 h-3 rounded-full bg-gray-500"></div>;
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800">Recent Activity</h3>
          <p className="text-sm text-gray-500 mt-1">Latest courses added to the platform</p>
        </div>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
          <Download size={16} className="mr-1" />
          Export
        </button>
      </div>

      <div className="overflow-hidden">
        <div className="grid grid-cols-1 gap-3">
          {activities.slice(0, visibleItems).map((activity, index) => (
            <div
              key={activity.id}
              className={`
                p-4 rounded-xl border border-gray-200 transition-all duration-300
                ${hoveredRow === index ? 'bg-blue-50 border-blue-200 shadow-sm' : 'bg-white'}
                transform ${hoveredRow === index ? 'scale-[1.02]' : 'scale-100'}
              `}
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    {getCategoryIcon(activity.category)}
                    <span className="text-xs font-medium text-gray-500 ml-2">{activity.category}</span>
                    <span className={`ml-3 px-2 py-1 text-xs rounded-full ${getStatusColor(activity.status)}`}>
                      {activity.status}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">{activity.course}</h4>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={14} className="mr-1" />
                    <span className="mr-4">{activity.date}</span>
                    <Clock size={14} className="mr-1" />
                    <span>{activity.time}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800">{activity.enrollments}</div>
                    <div className="text-xs text-gray-500">Enrollments</div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors">
                      <Eye size={16} />
                    </button>
                    <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activities.length > 3 && (
        <div className="mt-6 text-center">
          <button
            onClick={toggleExpand}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center w-full py-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            {isExpanded ? (
              <>
                <span>Show Less</span>
              </>
            ) : (
              <>
                <span>View All Activities ({activities.length})</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentActivity;