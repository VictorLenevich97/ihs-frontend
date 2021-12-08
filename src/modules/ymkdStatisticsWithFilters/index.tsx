import { useState, useMemo } from 'react';
import { StatisticsFilters } from './components/statisticsFilters';
import { StatisticsTable } from './components/statisticsTable';
import { useAddYmkdStatisticsMutation } from 'store/ymkdStatictics';
import { IReqStatisticsFilter, EnumReportType } from 'types';
import { Title } from 'effects/typography';

export const YmkdStatisticsWithFilters = () => {
  const [activeReportType, setActiveReportType] = useState<any>(EnumReportType.SIMPLE);
  const [addYmkdStatistics, { data = [], isLoading, isError }] = useAddYmkdStatisticsMutation();

  const submitFiltersForm = (values: IReqStatisticsFilter) => {
    setActiveReportType(values.reportType || EnumReportType.SIMPLE);
    addYmkdStatistics(values);
  };

  const calculatePercentSecurity = (all: number, part: number) => {
    return all > 0 ? Math.round((10000 * part) / all) / 100 : 0;
  };

  const transformData = useMemo(() => {
    const result: any[] = [];

    data.map((item: any) => {
      return result.push({
        ...item,
        security: calculatePercentSecurity(item?.disciplineCount, item?.disciplineWithYmkdCount),
      });
    });

    return result;
  }, [data]);

  return (
    <div>
      <Title>Статистика по УМКД</Title>
      <StatisticsFilters submitFiltersForm={submitFiltersForm} />
      <StatisticsTable
        data={transformData}
        isLoading={isLoading}
        error={isError}
        activeReportType={activeReportType}
        calculatePercentSecurity={calculatePercentSecurity}
      />
    </div>
  );
};
