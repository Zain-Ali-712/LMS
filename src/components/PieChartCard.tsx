// components/PieChartCard.tsx
import { FC, useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Marketing', value: 8, color: '#3b82f6' },
  { name: 'Finance', value: 6, color: '#10b981' },
  { name: 'Tech', value: 10, color: '#ef4444' },
  { name: 'Design', value: 5, color: '#8b5cf6' },
  { name: 'Business', value: 7, color: '#f59e0b' },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central" 
      className="text-xs font-bold drop-shadow-md"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
        <div className="flex items-center mb-1">
          <div 
            className="w-3 h-3 rounded-full mr-2" 
            style={{ backgroundColor: payload[0].payload.color }}
          ></div>
          <p className="font-semibold" style={{ color: payload[0].payload.color }}>
            {payload[0].name}
          </p>
        </div>
        <p className="text-gray-700">
          Courses: <span className="font-bold">{payload[0].value}</span>
        </p>
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
      bg-white p-6 rounded-2xl shadow-lg border border-gray-100 
      transition-all duration-700 transform 
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
    `}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800">Course Categories</h3>
          <p className="text-sm text-gray-500 mt-1">Distribution across categories</p>
        </div>
        <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
          +20% vs last month
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-500">Total Courses</p>
          <p className="text-lg font-bold text-gray-800">36</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-500">Top Category</p>
          <p className="text-lg font-bold text-gray-800">Tech</p>
        </div>
      </div>
      
      <div className="flex items-center">
        <div className="w-1/2 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                innerRadius={50}
                fill="#8884d8"
                dataKey="value"
                label={renderCustomizedLabel}
                startAngle={90}
                endAngle={-270}
                activeIndex={activeIndex !== null ? activeIndex : undefined}
                activeShape={(props) => {
                  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
                  return (
                    <g>
                      <path
                        d={`
                          M${cx},${cy}
                          L${cx + outerRadius * Math.cos(-startAngle * RADIAN)},${cy + outerRadius * Math.sin(-startAngle * RADIAN)}
                          A${outerRadius},${outerRadius} 0 0,1 ${cx + outerRadius * Math.cos(-endAngle * RADIAN)},${cy + outerRadius * Math.sin(-endAngle * RADIAN)}
                          L${cx},${cy}
                          Z
                        `}
                        fill={fill}
                        stroke="#fff"
                        strokeWidth={3}
                      />
                    </g>
                  );
                }}
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color} 
                    stroke="#fff" 
                    strokeWidth={2} 
                    opacity={activeIndex === null || activeIndex === index ? 1 : 0.6}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="w-1/2 pl-4">
          <div className="space-y-3">
            {data.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-gray-800">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
        <div className="text-xs text-gray-500">*Compared to last month</div>
        <button className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center">
          Download Report
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PieChartCard;