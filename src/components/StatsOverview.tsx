// components/StatsOverview.tsx
import { BookOpen, Users, UserCheck, TrendingUp, BarChart3, Eye, Star, Clock, UserPlus } from 'lucide-react';
import StatsCard from './StatsCard';

const StatsOverview = () => {
  return (
    <div className="mb-8 p-8 bg-gradient-to-b from-blue-100 to-transparent rounded-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <BarChart3 size={24} className="mr-3 text-blue-600" />
            Performance Overview
          </h2>
          <p className="text-gray-500 text-sm mt-1">Key metrics and statistics for your academy</p>
        </div>
        <button className="bg-white text-blue-600 hover:text-blue-800 px-4 py-2 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors text-sm font-medium flex items-center shadow-sm hover:shadow-md">
          View detailed report
          <TrendingUp size={16} className="ml-1" />
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <StatsCard 
          icon={<BookOpen size={24} />} 
          number={24} 
          label="Total Courses" 
          trend="up"
          trendValue="8.5%"
          delay={100}
          index={0}
        />
        <StatsCard 
          icon={<Users size={24} />} 
          number={350} 
          label="Total Users" 
          trend="up"
          trendValue="1.3%"
          delay={200}
          index={1}
        />
        <StatsCard 
          icon={<UserCheck size={24} />} 
          number={980} 
          label="Total Enrollments" 
          trend="down"
          trendValue="4.3%"
          delay={300}
          index={2}
        />
      </div>

      {/* Additional mini stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Eye size={16} className="text-blue-600" />
            </div>
            <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">+12%</span>
          </div>
          <p className="text-gray-500 text-xs">Completion Rate</p>
          <p className="text-lg font-bold text-gray-800">78%</p>
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-amber-100 rounded-lg">
              <Star size={16} className="text-amber-600" />
            </div>
            <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">+5%</span>
          </div>
          <p className="text-gray-500 text-xs">Avg. Rating</p>
          <p className="text-lg font-bold text-gray-800">4.7/5</p>
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-green-100 rounded-lg">
              <Clock size={16} className="text-green-600" />
            </div>
            <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Live</span>
          </div>
          <p className="text-gray-500 text-xs">Active Now</p>
          <p className="text-lg font-bold text-gray-800">42</p>
        </div>
        
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-purple-100 rounded-lg">
              <UserPlus size={16} className="text-purple-600" />
            </div>
            <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">Today</span>
          </div>
          <p className="text-gray-500 text-xs">New Today</p>
          <p className="text-lg font-bold text-gray-800">12</p>
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;