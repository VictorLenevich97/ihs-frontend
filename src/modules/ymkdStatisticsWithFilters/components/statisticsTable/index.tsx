import { Table } from 'components';
import { sumBy, isEmpty, round } from 'lodash';
import { parseDate } from 'lib/parseDate';
import { EnumReportType, IResSimpleStatistics, IResDetailStatistics } from 'types';
import { uniqId } from 'lib/generateId';

import * as S from './statisticsTable.styled';

interface Props {
  data: any;
  error: boolean;
  isLoading: boolean;
  activeReportType: string;
  calculatePercentSecurity: (all: number, part: number) => number;
}

export const StatisticsTable = ({
  data,
  error,
  isLoading,
  activeReportType,
  calculatePercentSecurity,
}: Props) => {
  const tableHeadTitles =
    activeReportType === EnumReportType.SIMPLE
      ? [
          { id: 0, value: '№ кафедры' },
          { id: 1, value: 'Количество дисциплин' },
          { id: 2, value: 'Количество УМКД' },
          { id: 3, value: '% обеспеченности' },
        ]
      : [
          { id: 0, value: 'Кафедра' },
          { id: 1, value: 'Дисциплина' },
          { id: 2, value: 'УМКД' },
          { id: 3, value: 'Дата регистрации' },
          { id: 3, value: 'Последнее обновление' },
        ];

  const tableBodyData = () => {
    if (activeReportType === EnumReportType.SIMPLE) {
      const sumDisciplineCount = sumBy(
        data,
        ({ disciplineCount }: IResSimpleStatistics) => disciplineCount,
      );
      const sumDisciplineWithYmkdCount = sumBy(
        data,
        ({ disciplineWithYmkdCount }: IResSimpleStatistics) => disciplineWithYmkdCount,
      );

      let result =
        data?.map(
          ({
            departmentNumber,
            disciplineCount,
            disciplineWithYmkdCount,
            security,
          }: IResSimpleStatistics) => ({
            id: uniqId(),
            cells: [
              {
                id: 0,
                component: departmentNumber,
              },
              { id: 1, component: disciplineCount },
              {
                id: 2,
                component: disciplineWithYmkdCount,
              },
              {
                id: 3,
                component: `${security}%`,
              },
            ],
          }),
        ) || [];

      // Summary row for SIMPLE report type

      !isEmpty(data) &&
        result.push({
          id: uniqId(),
          cells: [
            {
              id: 0,
              component: 'Итого',
            },
            { id: 1, component: sumDisciplineCount },
            {
              id: 2,
              component: sumDisciplineWithYmkdCount,
            },
            {
              id: 3,
              component: `${calculatePercentSecurity(
                sumDisciplineCount,
                sumDisciplineWithYmkdCount,
              )}%`,
            },
          ],
        });

      return result;
    } else {
      return (
        data.map(
          ({
            departmentName,
            disciplineName,
            ymkdName,
            registrationDate,
            lastUpdateDate,
          }: IResDetailStatistics) => ({
            id: uniqId(),
            cells: [
              {
                id: 0,
                component: departmentName,
              },
              { id: 1, component: disciplineName },
              {
                id: 2,
                component: ymkdName,
              },
              { id: 3, component: parseDate(new Date(registrationDate)) },
              { id: 4, component: parseDate(new Date(lastUpdateDate)) },
            ],
          }),
        ) || []
      );
    }
  };

  return (
    <S.Container activeSummaryRow={activeReportType === EnumReportType.SIMPLE}>
      <Table
        headTitles={tableHeadTitles}
        data={tableBodyData()}
        isLoading={isLoading}
        error={error}
      />
    </S.Container>
  );
};
