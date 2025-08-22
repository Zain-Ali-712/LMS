// components/LineChartCard.tsx
import { FC, useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';
import { TrendingUp, Download, BarChart3 } from 'lucide-react';

const data = [
  { month: 'Jan', enrollments: 100, target: 90 },
  { month: 'Feb', enrollments: 150, target: 130 },
  { month: 'Mar', enrollments: 200, target: 180 },
  { month: 'Apr', enrollments: 180, target: 190 },
  { month: 'May', enrollments: 220, target: 200 },
  { month: 'Jun', enrollments: 250, target: 230 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const current = payload[0].value;
    const target = payload[1].value;
    const percentage = Math.round((current / target) * 100);
    
    return (
      <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-100">
        <p className="font-bold text-gray-800 text-sm mb-3">{label}</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
              <span className="text-sm text-gray-600">Enrollments</span>
            </div>
            <span className="text-sm font-bold text-blue-600">{current}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-300 mr-2"></div>
              <span className="text-sm text-gray-600">Target</span>
            </div>
            <span className="text-sm font-bold text-green-600">{target}</span>
          </div>
          <div className="pt-2 border-t border-gray-100">
            <div className={`flex items-center text-xs font-semibold ${
              percentage >= 100 ? 'text-green-600' : 'text-amber-600'
            }`}>
              {percentage >= 100 ? '✓ Exceeded' : '↗ Close to'} target by {Math.abs(percentage - 100)}%
            </div>
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
      bg-white p-5 rounded-2xl shadow-lg border border-gray-100 
      transition-all duration-700 transform 
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
    `}>
      {/* Header */}
      <div className="flex justify-between items-start mb-5">
        <div>
          <div className="flex items-center mb-2">
            <BarChart3 size={20} className="text-blue-500 mr-2" />
            <h3 className="text-lg font-bold text-gray-800">Enrollment Trends</h3>
          </div>
          <p className="text-xs text-gray-500">Last 6 months performance vs targets</p>
        </div>
        <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
          <TrendingUp size={12} className="mr-1" />
          +25% Growth
        </div>
      </div>
      
      {/* Mini Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-blue-50 p-3 rounded-xl">
          <p className="text-xs text-blue-600 font-medium mb-1">Total</p>
          <p className="text-md font-bold text-gray-800">1,100</p>
        </div>
        <div className="bg-green-50 p-3 rounded-xl">
          <p className="text-xs text-green-600 font-medium mb-1">Avg/Month</p>
          <p className="text-md font-bold text-gray-800">183</p>
        </div>
      </div>
      
      {/* Chart */}
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="colorEnrollments" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis 
              dataKey="month" 
              tick={{ fill: '#6b7280', fontSize: 11 }} 
              axisLine={false} 
              tickLine={false}
            />
            <YAxis 
              tick={{ fill: '#6b7280', fontSize: 11 }} 
              axisLine={false} 
              tickLine={false}
              width={35}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="target" 
              stroke="#10b981" 
              fill="url(#colorTarget)" 
              strokeWidth={2} 
              strokeDasharray="4 4"
              activeDot={{ r: 4, stroke: '#10b981', strokeWidth: 2, fill: '#fff' }}
              name="Target"
            />
            <Line 
              type="monotone" 
              dataKey="enrollments" 
              stroke="#3b82f6" 
              strokeWidth={3} 
              dot={{ r: 3, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }} 
              activeDot={{ r: 5, fill: '#3b82f6', stroke: '#fff', strokeWidth: 2 }}
              name="Enrollments"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Footer */}
      <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
            <span className="text-xs text-gray-600">Enrollments</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-300 mr-2 border border-green-400"></div>
            <span className="text-xs text-gray-600">Target</span>
          </div>
        </div>
        <button className="text-xs text-blue-500 hover:text-blue-700 font-medium flex items-center px-3 py-1 hover:bg-blue-50 rounded-lg transition-colors">
          <Download size={12} className="mr-1" />
          Export
        </button>
      </div>
    </div>
  );
};

export default LineChartCard;