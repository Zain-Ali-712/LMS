// components/StatsOverview.tsx
import { BookOpen, Users, UserCheck } from 'lucide-react';
import StatsCard from './StatsCard';

const StatsOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatsCard 
        icon={<BookOpen size={24} />} 
        number={24} 
        label="Total Courses" 
        trend="up"
        trendValue="8.5%"
        delay={100}
      />
      <StatsCard 
        icon={<Users size={24} />} 
        number={350} 
        label="Total Users" 
        trend="up"
        trendValue="1.3%"
        delay={200}
      />
      <StatsCard 
        icon={<UserCheck size={24} />} 
        number={980} 
        label="Total Enrollments" 
        trend="down"
        trendValue="4.3%"
        delay={300}
      />
    </div>
  );
};

export default StatsOverview;