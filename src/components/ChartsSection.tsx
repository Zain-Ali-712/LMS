// components/ChartsSection.tsx
import { FC } from 'react';
import LineChartCard from './LineChartCard';
import PieChartCard from './PieChartCard';

interface ChartsSectionProps {
  isSidebarCollapsed: boolean;
}

const ChartsSection: FC<ChartsSectionProps> = ({ isSidebarCollapsed }) => {
  return (
    <div className={`grid grid-cols-1 ${isSidebarCollapsed ? 'xl:grid-cols-2' : 'lg:grid-cols-2'} gap-6 mb-8`}>
      <LineChartCard />
      <PieChartCard />
    </div>
  );
};

export default ChartsSection;