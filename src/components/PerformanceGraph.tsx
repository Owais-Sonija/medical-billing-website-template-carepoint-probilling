'use client';

import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface PerformanceGraphProps {
  type: 'revenue' | 'claims';
}

export default function PerformanceGraph({ type }: PerformanceGraphProps) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  const revenueData = {
    labels: months,
    datasets: [
      {
        label: 'Revenue Growth',
        data: [30000, 35000, 45000, 55000, 70000, 85000],
        fill: true,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const claimsData = {
    labels: months,
    datasets: [
      {
        label: 'Accepted Claims',
        data: [85, 88, 92, 95, 97, 98],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
      },
      {
        label: 'Rejected Claims',
        data: [15, 12, 8, 5, 3, 2],
        backgroundColor: 'rgba(239, 68, 68, 0.8)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'rgb(209, 213, 219)',
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(107, 114, 128, 0.1)',
        },
        ticks: {
          color: 'rgb(209, 213, 219)',
        },
      },
      x: {
        grid: {
          color: 'rgba(107, 114, 128, 0.1)',
        },
        ticks: {
          color: 'rgb(209, 213, 219)',
        },
      },
    },
  };

  return (
    <div className="h-[300px] w-full">
      {type === 'revenue' ? (
        <Line data={revenueData} options={options} />
      ) : (
        <Bar data={claimsData} options={options} />
      )}
    </div>
  );
}
