// components/QuickActions.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Users, ArrowRight, Sparkles, Zap } from 'lucide-react';

const QuickActions = () => {
  const [isHoveredAdd, setIsHoveredAdd] = useState(false);
  const [isHoveredManage, setIsHoveredManage] = useState(false);
  const [isPressedAdd, setIsPressedAdd] = useState(false);
  const [isPressedManage, setIsPressedManage] = useState(false);
  const router = useRouter();

  const handleAddCourseClick = () => {
    router.push('/addCourse');
  };

  return (
    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
      {/* Add New Course Button */}
      <button 
        onClick={handleAddCourseClick}
        className="
          relative
          bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700
          text-white 
          p-4 
          rounded-2xl
          shadow-2xl
          hover:shadow-3xl
          hover:from-blue-700 hover:via-blue-600 hover:to-blue-800
          transition-all
          duration-500
          transform
          hover:-translate-y-1.5
          flex
          items-center
          justify-center
          overflow-hidden
          group
          border border-blue-500 border-opacity-30
          ${isPressedAdd ? 'scale-95' : ''}
        "
        onMouseEnter={() => setIsHoveredAdd(true)}
        onMouseLeave={() => setIsHoveredAdd(false)}
        onMouseDown={() => setIsPressedAdd(true)}
        onMouseUp={() => setIsPressedAdd(false)}
        onMouseOut={() => setIsPressedAdd(false)}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[1, 2, 3, 4].map((particle) => (
            <div
              key={particle}
              className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-40 animate-float-fast"
              style={{
                top: `${20 + particle * 15}%`,
                left: `${particle * 25}%`,
                animationDelay: `${particle * 0.3}s`,
                animationDuration: '2s'
              }}
            ></div>
          ))}
        </div>

        {/* Shine effect on hover */}
        <div className="
          absolute 
          -inset-full 
          group-hover:inset-0 
          bg-gradient-to-r 
          from-transparent 
          via-white/30 
          to-transparent 
          transform 
          skew-x-12 
          group-hover:skew-x-0 
          transition-all 
          duration-1000
          opacity-0 group-hover:opacity-100
        "></div>

        {/* Pulse animation effect */}
        <div className="
          absolute 
          inset-0 
          bg-white 
          opacity-0 
          group-hover:opacity-10 
          transition-opacity 
          duration-500
          animate-pulse-slow
        "></div>

        {/* Sparkle icon */}
        <Sparkles 
          size={16} 
          className="
            absolute 
            -top-2 
            -right-2 
            text-yellow-300 
            opacity-0 
            group-hover:opacity-100 
            transition-opacity 
            duration-500
            animate-spin-slow
          " 
        />

        <div className="relative z-10 flex items-center">
          <div className="relative">
            <Plus 
              size={22} 
              className="
                mr-3 
                transition-all 
                duration-500 
                group-hover:scale-125 
                group-hover:rotate-90
                drop-shadow-sm
              " 
            />
            {/* Icon glow effect */}
            <div className="
              absolute 
              inset-0 
              bg-white 
              rounded-full 
              opacity-0 
              group-hover:opacity-20 
              transition-opacity 
              duration-500
              blur-sm
            "></div>
          </div>
          
          <span className="font-semibold text-lg tracking-wide">Add New Course</span>
          
          {/* Animated arrow on hover */}
          <ArrowRight 
            size={18} 
            className={`
              ml-3 
              transition-all 
              duration-500 
              transform 
              ${isHoveredAdd ? 'translate-x-2 opacity-100' : 'translate-x-[-15px] opacity-0'}
              group-hover:scale-110
            `} 
          />
        </div>

        {/* Bottom glow effect */}
        <div className="
          absolute 
          bottom-0 
          left-1/2 
          transform 
          -translate-x-1/2 
          w-3/4 
          h-1 
          bg-white 
          opacity-0 
          group-hover:opacity-40 
          transition-opacity 
          duration-500
          rounded-full
          blur-sm
        "></div>
      </button>
      
      {/* Manage Users Button */}
      <button 
        className="
          relative
          bg-gradient-to-br from-gray-50 via-white to-gray-100
          text-gray-800 
          border border-gray-300
          px-6 py-4 
          rounded-2xl
          shadow-xl
          hover:shadow-2xl
          hover:from-white hover:via-gray-50 hover:to-gray-200
          transition-all
          duration-500
          transform
          hover:-translate-y-1.5
          flex
          items-center
          justify-center
          overflow-hidden
          group
          ${isPressedManage ? 'scale-95' : ''}
        "
        onMouseEnter={() => setIsHoveredManage(true)}
        onMouseLeave={() => setIsHoveredManage(false)}
        onMouseDown={() => setIsPressedManage(true)}
        onMouseUp={() => setIsPressedManage(false)}
        onMouseOut={() => setIsPressedManage(false)}
      >
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>

        {/* Hover effect */}
        <div className="
          absolute 
          inset-0 
          bg-gradient-to-r 
          from-blue-500/5 
          to-purple-500/5 
          opacity-0 
          group-hover:opacity-100 
          transition-opacity 
          duration-500
        "></div>

        <div className="relative z-10 flex items-center">
          <div className="relative">
            <Users 
              size={22} 
              className="
                mr-3 
                transition-all 
                duration-500 
                group-hover:scale-110 
                group-hover:text-blue-600
                drop-shadow-sm
              " 
            />
          </div>
          
          <span className="font-semibold text-lg tracking-wide text-gray-700 group-hover:text-gray-900">
            Manage Users
          </span>
          
          {/* Animated arrow on hover */}
          <ArrowRight 
            size={18} 
            className={`
              ml-3 
              transition-all 
              duration-500 
              transform 
              ${isHoveredManage ? 'translate-x-2 opacity-100 text-blue-600' : 'translate-x-[-15px] opacity-0'}
              group-hover:scale-110
            `} 
          />
        </div>

        {/* Active state indicator */}
        <div className="
          absolute 
          bottom-2 
          left-1/2 
          transform 
          -translate-x-1/2 
          w-1/2 
          h-0.5 
          bg-blue-500 
          opacity-0 
          group-hover:opacity-100 
          transition-opacity 
          duration-500
          rounded-full
        "></div>

        {/* Zap icon effect */}
        <Zap 
          size={14} 
          className="
            absolute 
            -top-1 
            -right-1 
            text-blue-500 
            opacity-0 
            group-hover:opacity-100 
            transition-opacity 
            duration-500
            animate-bounce
          " 
        />
      </button>
    </div>
  );
};

export default QuickActions;