import { Line } from 'react-chartjs-2';
import { themeVariables } from 'effects/variables';

const options = {
  scales: {
    y: {
      min: 0,
      max: 100,
      ticks: {
        beginAtZero: true,
      },
    },
  },
  plugins: {
    legend: {
      align: 'end',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
      },
    },
  },
};

interface Props {
  data: number[];
  labels: string[];
}
export const LineChart = ({ data, labels }: Props) => {
  const lineData = {
    labels,
    datasets: [
      {
        label: 'Рейтинг за семестры обучения',
        data: data,
        fill: true,
        borderColor: themeVariables.primaryColor,
        backgroundColor: themeVariables.secondColor,
      },
    ],
  };
  return <Line data={lineData} options={options} />;
};
