// components/QuickActions.tsx
import { useState } from 'react';
import { Plus, Users, ArrowRight } from 'lucide-react';

const QuickActions = () => {
  const [isHoveredAdd, setIsHoveredAdd] = useState(false);
  const [isHoveredManage, setIsHoveredManage] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
      <button 
        className="
          relative
          bg-gradient-to-r from-blue-600 to-blue-500
          text-white 
          px-5 py-3 
          rounded-xl
          shadow-lg
          hover:shadow-xl
          hover:from-blue-700 hover:to-blue-600
          transition-all
          duration-300
          transform
          hover:-translate-y-1
          flex
          items-center
          justify-center
          overflow-hidden
          group
        "
        onMouseEnter={() => setIsHoveredAdd(true)}
        onMouseLeave={() => setIsHoveredAdd(false)}
      >
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        
        {/* Shine effect on hover */}
        <div className="
          absolute 
          -inset-full 
          group-hover:inset-0 
          bg-gradient-to-r 
          from-transparent 
          via-white/20 
          to-transparent 
          transform 
          skew-x-12 
          group-hover:skew-x-0 
          transition-all 
          duration-700
        "></div>
        
        <Plus size={20} className="mr-2 transition-transform duration-300 group-hover:scale-110" />
        <span className="font-medium">Add New Course</span>
        
        {/* Animated arrow on hover */}
        <ArrowRight 
          size={16} 
          className={`
            ml-2 
            transition-all 
            duration-300 
            transform 
            ${isHoveredAdd ? 'translate-x-1 opacity-100' : 'translate-x-[-10px] opacity-0'}
          `} 
        />
      </button>
      
      <button 
        className="
          relative
          bg-gradient-to-r from-gray-100 to-white
          text-gray-800 
          border border-gray-200
          px-5 py-3 
          rounded-xl
          shadow-md
          hover:shadow-lg
          hover:from-gray-50 hover:to-gray-100
          transition-all
          duration-300
          transform
          hover:-translate-y-1
          flex
          items-center
          justify-center
          overflow-hidden
          group
        "
        onMouseEnter={() => setIsHoveredManage(true)}
        onMouseLeave={() => setIsHoveredManage(false)}
      >
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
        
        <Users size={20} className="mr-2 transition-transform duration-300 group-hover:scale-110" />
        <span className="font-medium">Manage Users</span>
        
        {/* Animated arrow on hover */}
        <ArrowRight 
          size={16} 
          className={`
            ml-2 
            transition-all 
            duration-300 
            transform 
            ${isHoveredManage ? 'translate-x-1 opacity-100' : 'translate-x-[-10px] opacity-0'}
          `} 
        />
      </button>
    </div>
  );
};

export default QuickActions;