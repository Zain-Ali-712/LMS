// components/StatsCard.tsx
import { FC, ReactNode, useEffect, useState } from 'react';

interface StatsCardProps {
  icon: ReactNode;
  number: number;
  label: string;
  trend?: 'up' | 'down';
  trendValue?: string;
  delay?: number;
}

const StatsCard: FC<StatsCardProps> = ({ 
  icon, 
  number, 
  label, 
  trend, 
  trendValue, 
  delay = 0 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Animate counting up
      let start = 0;
      const end = number;
      const duration = 1500;
      const incrementTime = 20;
      const steps = duration / incrementTime;
      const increment = end / steps;
      
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.ceil(start));
        }
      }, incrementTime);
      
    }, delay);
    
    return () => clearTimeout(timer);
  }, [number, delay]);

  return (
    <div className={`
      bg-white p-6 rounded-xl shadow-lg transition-all duration-500 transform 
      hover:-translate-y-1 hover:shadow-xl border border-gray-100
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
    `}>
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <p className="text-gray-500 text-sm font-medium mb-2">{label}</p>
          <h3 className="text-3xl font-bold text-gray-800">
            {count.toLocaleString()}
          </h3>
          
          {trend && trendValue && (
            <div className={`flex items-center mt-2 text-sm font-medium ${
              trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {trend === 'up' ? (
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              ) : (
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              )}
              {trendValue} from yesterday
            </div>
          )}
        </div>
        
        <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;