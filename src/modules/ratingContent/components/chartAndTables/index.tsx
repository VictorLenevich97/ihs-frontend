import { IRatingResponse } from 'types';
import { LineChart } from '../lineChart';
import { TableRatingParts } from '../tableRatingParts';
import { TableRating } from '../tableRating';
import { TableEvents } from '../tableEvents';
import { AlertDismissible } from 'components';

import * as S from '../../ratingContent.styled';

interface Props {
  studentData: IRatingResponse;
  isLoading?: boolean;
  isError?: boolean;
}

export const ChartAndTables = ({ studentData, isLoading, isError }: Props) => {
  if (isError) return <AlertDismissible content="Ошибка загрузки рейтинга..." />;

  const lineChartData = {
    labels: (studentData.ratingTerms.rates || [...new Array(10)]).map((e, i) => `${i + 1} семестр`),
    data: (studentData.ratingTerms.rates || [...new Array(10)]).map(e => e),
  };

  return (
    <>
      <LineChart data={lineChartData.data} labels={lineChartData.labels} />
      <S.TableTitle>
        Составляющие рейтинга и места в группе, на факультете, в академии в текущем семестре
      </S.TableTitle>
      <TableRatingParts partsData={studentData.ratingParts} isLoading={isLoading} />
      <S.TableTitle>Рейтинг за семестры обучения</S.TableTitle>
      <TableRating
        ratings={studentData.ratingTerms.rates}
        totalRating={studentData.totalRating}
        isLoading={isLoading}
      />
      <S.TableTitle>События:</S.TableTitle>
      <TableEvents events={studentData.events} isLoading={isLoading} />
    </>
  );
};
