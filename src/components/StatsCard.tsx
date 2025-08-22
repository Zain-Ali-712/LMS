// components/StatsCard.tsx
import { FC, ReactNode, useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, BookOpen, Users, UserCheck } from 'lucide-react';

interface StatsCardProps {
  icon: ReactNode;
  number: number;
  label: string;
  trend?: 'up' | 'down';
  trendValue?: string;
  delay?: number;
  index?: number;
}

const StatsCard: FC<StatsCardProps> = ({ 
  icon, 
  number, 
  label, 
  trend, 
  trendValue, 
  delay = 0,
  index = 0
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Different gradients for each card
  const cardGradients = [
    'from-blue-500 to-blue-100',
    'from-green-500 to-green-300', 
    'from-purple-500 to-purple-300',
    'from-orange-500 to-orange-300',
    'from-pink-500 to-pink-300',
    'from-teal-500 to-teal-300'
  ];

  const iconBgGradients = [
    'from-blue-500 to-blue-600',
    'from-green-500 to-green-600',
    'from-purple-500 to-purple-600',
    'from-orange-500 to-orange-600',
    'from-pink-500 to-pink-600',
    'from-teal-500 to-teal-600'
  ];

  const iconColors = [
    'text-blue-100',
    'text-green-100',
    'text-purple-100', 
    'text-orange-100',
    'text-pink-100',
    'text-teal-100'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Animate counting up
      let start = 0;
      const end = number;
      const duration = 1800;
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
    <div 
      className={`
        relative overflow-hidden p-6 rounded-2xl shadow-lg transition-all duration-500 transform 
        hover:-translate-y-2 hover:shadow-2xl
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        bg-gradient-to-r ${cardGradients[index % cardGradients.length]}
        group
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background effect */}
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[1, 2, 3].map((particle) => (
          <div
            key={particle}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              top: `${20 + particle * 20}%`,
              left: `${particle * 30}%`,
              animationDelay: `${particle * 0.5}s`,
              animationDuration: '3s'
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 flex justify-between items-start">
        <div className="flex flex-col">
          <p className="text-white text-sm font-medium mb-2 opacity-90">{label}</p>
          <h3 className="text-3xl font-bold text-white mb-2">
            {count.toLocaleString()}
          </h3>
          
          {trend && trendValue && (
            <div className={`flex items-center mt-1 text-sm font-medium ${
              trend === 'up' ? 'text-green-200' : 'text-red-600'
            }`}>
              {trend === 'up' ? (
                <TrendingUp size={16} className="mr-1" />
              ) : (
                <TrendingDown size={16} className="mr-1" />
              )}
              <span className="text-white">{trendValue}</span>
              <span className="ml-1 text-blue-100 opacity-80">from yesterday</span>
            </div>
          )}
        </div>
        
        <div className={`
          p-3 rounded-xl bg-gradient-to-br ${iconBgGradients[index % iconBgGradients.length]} 
          shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6
          ${isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}
        `}>
          <div className={iconColors[index % iconColors.length]}>
            {icon}
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className={`
        absolute bottom-0 left-0 w-full h-1 bg-white opacity-50 transition-all duration-500
        ${isHovered ? 'opacity-80' : 'opacity-50'}
      `}></div>
    </div>
  );
};

export default StatsCard;