import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, Filler } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, Filler);

const Chart3 = () => {
  const canvasRef = React.useRef(null);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March'],
    datasets: [
      {
        label: 'Curved Line Chart',
        data: [90, 70, 40, 50, 50, 55, 70, 45, 60, 80, 30, 25, 40, 20], 
        borderColor: '#6EB9AD',
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return;
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0,'rgb(232, 244, 244)');
          gradient.addColorStop(1, 'rgb(232, 244, 244)');
          return gradient;
        },
        fill: true,
        tension: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        radius: (context) => {
          const index = context.dataIndex;
          return index === 0 || index === context.dataset.data.length - 1 ? 0.5 : 0;
        },
        backgroundColor: '#6EB9AD',
      },
    },
  };

  return (
    <div className="w-[156px] h-[51px]">
      <Line data={data} options={options} ref={canvasRef} />
    </div>
  );
};

export default Chart3;