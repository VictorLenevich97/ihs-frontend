import { Bar } from 'react-chartjs-2';
import { isEmpty } from 'lodash';
import { IResSimpleStatistics } from 'types';

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

interface Props {
  data: IResSimpleStatistics[] | any;
}

export const Chart = ({ data }: Props) => {
  const transformChartData = () => ({
    labels: [...data.map(({ departmentNumber }: { departmentNumber: string }) => departmentNumber)],
    datasets: [
      {
        label: 'Количество дисциплин',
        data: [...data.map(({ disciplineCount }: { disciplineCount: number }) => disciplineCount)],
        backgroundColor: ['rgba(54, 162, 235, 0.5)'],
        borderColor: ['rgba(54, 162, 235, 0.7)'],
        borderWidth: 1,
      },
      {
        label: 'Количество УМК',
        data: [
          ...data.map(
            ({ disciplineWithYmkdCount }: { disciplineWithYmkdCount: number }) =>
              disciplineWithYmkdCount,
          ),
        ],
        backgroundColor: ['rgba(255, 99, 132, 0.5)'],
        borderColor: ['rgba(255, 99, 132, 0.7)'],
        borderWidth: 1,
      },
    ],
  });

  return (
    <div>
      <Bar data={isEmpty(data) ? [] : transformChartData} options={options} />
    </div>
  );
};
