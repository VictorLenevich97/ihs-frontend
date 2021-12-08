import { AlertDismissible } from 'components';
import { Chart } from './components/Chart';
import { ChartDatePicker } from './components/ChartDatePicker';
import { useAddYmkdStatisticsMutation } from 'store/ymkdStatictics';
import { IReqStatisticsFilter } from 'types';

export const YmkdChartWithDatePicker = () => {
  const [addYmkdStatistics, { data, isError }] = useAddYmkdStatisticsMutation();

  const changeDateHandler = (values: IReqStatisticsFilter) => {
    addYmkdStatistics(values);
  };

  if (isError) <AlertDismissible content="Ошибка загрузки обеспеченности УМКД..." />;

  return (
    <div className="dottedBackground">
      <Chart data={data} />
      <ChartDatePicker onChangeDateHandler={changeDateHandler} />
    </div>
  );
};
