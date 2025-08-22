// components/PieChartCard.tsx
import { FC, useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Download, PieChart as PieChartIcon } from 'lucide-react';

const data = [
  { name: 'Technology', value: 10, color: '#3b82f6' },
  { name: 'Business', value: 7, color: '#10b981' },
  { name: 'Design', value: 5, color: '#f59e0b' },
  { name: 'Marketing', value: 8, color: '#8b5cf6' },
  { name: 'Languages', value: 6, color: '#ef4444' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const { name, value, color } = payload[0].payload;
    const percentage = ((value / 36) * 100).toFixed(1);
    
    return (
      <div className="bg-white p-3 rounded-xl shadow-2xl border border-gray-100">
        <div className="flex items-center mb-2">
          <div 
            className="w-3 h-3 rounded-full mr-2" 
            style={{ backgroundColor: color }}
          ></div>
          <p className="font-bold text-sm" style={{ color }}>
            {name}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <span className="text-gray-600">Courses:</span>
          <span className="font-bold text-gray-800">{value}</span>
          <span className="text-gray-600">Share:</span>
          <span className="font-bold text-gray-800">{percentage}%</span>
        </div>
      </div>
    );
  }
  return null;
};

const PieChartCard: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className={`
      bg-white p-5 rounded-2xl shadow-lg border border-gray-100 
      transition-all duration-700 transform 
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
    `}>
      {/* Header */}
      <div className="flex justify-between items-start mb-5">
        <div>
          <div className="flex items-center mb-2">
            <PieChartIcon size={20} className="text-purple-500 mr-2" />
            <h3 className="text-lg font-bold text-gray-800">Course Categories</h3>
          </div>
          <p className="text-xs text-gray-500">Distribution by category</p>
        </div>
        <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
          <TrendingUp size={12} className="mr-1" />
          +20% Growth
        </div>
      </div>
      
      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center">
        {/* Chart */}
        <div className="w-full lg:w-2/5 h-40 mb-4 lg:mb-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={60}
                innerRadius={35}
                paddingAngle={2}
                dataKey="value"
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color} 
                    stroke="#fff"
                    strokeWidth={2}
                    opacity={activeIndex === null || activeIndex === index ? 1 : 0.7}
                    style={{
                      filter: activeIndex === null || activeIndex === index 
                        ? 'drop-shadow(0px 2px 4px rgba(0,0,0,0.15))'
                        : 'none'
                    }}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend */}
        <div className="w-full lg:w-3/5 pl-0 lg:pl-4">
          <div className="grid grid-cols-2 gap-3">
            {data.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                onMouseEnter={() => onPieEnter(null, index)}
                onMouseLeave={onPieLeave}
              >
                <div 
                  className="w-3 h-3 rounded-full mr-2 flex-shrink-0" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-gray-700 truncate">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.value} courses</p>
                </div>
                <span className="text-xs font-bold text-gray-800 ml-2">
                  {((item.value / 36) * 100).toFixed(0)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Total courses */}
      <div className="mt-4 p-3 bg-gray-50 rounded-xl text-center">
        <p className="text-xs text-gray-600">Total Courses</p>
        <p className="text-lg font-bold text-gray-800">36</p>
      </div>
      
      {/* Footer */}
      <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
        <div className="text-xs text-gray-500">Updated today</div>
        <button className="text-xs text-blue-500 hover:text-blue-700 font-medium flex items-center px-3 py-1 hover:bg-blue-50 rounded-lg transition-colors">
          <Download size={12} className="mr-1" />
          Export
        </button>
      </div>
    </div>
  );
};

export default PieChartCard;