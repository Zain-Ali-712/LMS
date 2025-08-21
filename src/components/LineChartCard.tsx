// components/LineChartCard.tsx
import { FC, useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';

const data = [
  { month: 'Jan', enrollments: 100, previous: 80 },
  { month: 'Feb', enrollments: 150, previous: 120 },
  { month: 'Mar', enrollments: 200, previous: 160 },
  { month: 'Apr', enrollments: 180, previous: 190 },
  { month: 'May', enrollments: 220, previous: 200 },
  { month: 'Jun', enrollments: 250, previous: 210 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <p className="font-semibold text-gray-800 mb-2">{label}</p>
        <div className="space-y-1">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
            <span className="text-sm text-gray-600">Enrollments: </span>
            <span className="text-sm font-bold ml-1 text-blue-600">{payload[0].value}</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
            <span className="text-sm text-gray-600">Previous: </span>
            <span className="text-sm font-medium ml-1 text-gray-600">{payload[1]?.value}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const LineChartCard: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`
      bg-white p-6 rounded-2xl shadow-lg border border-gray-100 
      transition-all duration-700 transform 
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
    `}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800">Enrollment Analytics</h3>
          <p className="text-sm text-gray-500 mt-1">Last 6 months performance</p>
        </div>
        <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
          +25% Growth
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-500">Total Enrollments</p>
          <p className="text-lg font-bold text-gray-800">1,100</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-500">Avg. Monthly</p>
          <p className="text-lg font-bold text-gray-800">183</p>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="colorEnrollments" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis 
              dataKey="month" 
              tick={{ fill: '#6b7280', fontSize: 12 }} 
              axisLine={false} 
              tickLine={false}
            />
            <YAxis 
              tick={{ fill: '#6b7280', fontSize: 12 }} 
              axisLine={false} 
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="previous" 
              stroke="#d1d5db" 
              fill="#f9fafb" 
              strokeWidth={1} 
              activeDot={{ r: 4 }}
              name="Previous"
            />
            <Line 
              type="monotone" 
              dataKey="enrollments" 
              stroke="#3b82f6" 
              strokeWidth={3} 
              dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }} 
              activeDot={{ r: 6, fill: '#3b82f6', stroke: '#fff', strokeWidth: 2 }}
              name="Current"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
            <span className="text-xs text-gray-600">Current</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
            <span className="text-xs text-gray-600">Previous</span>
          </div>
        </div>
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

export default LineChartCard;