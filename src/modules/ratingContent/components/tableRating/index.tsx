import { Table } from 'components';
import React from 'react';

interface Props {
  ratings?: number[];
  totalRating?: number;
  isLoading?: boolean;
}

export const TableRating = ({ ratings, totalRating, isLoading }: Props) => {
  const ratingsTitles = [
    ...(ratings || [...new Array(10)]).map((_, i) => ({ id: i, value: `${i + 1} сем.` })),
    { id: 99, value: 'Общий рейтинг' },
  ];
  const data =
    totalRating && ratings
      ? [
          {
            id: 0,
            cells: [
              ...(ratings || [...new Array(10)]).map((e, i) => ({
                id: i,
                component: e,
              })),
              { id: 99, component: totalRating },
            ],
          },
        ]
      : [];
  return <Table headTitles={ratingsTitles} data={data} isLoading={isLoading} />;
};
