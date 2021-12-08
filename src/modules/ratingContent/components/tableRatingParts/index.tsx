import { Table } from 'components';
import { IRatingResponse } from 'types';

interface Props {
  partsData?: IRatingResponse['ratingParts'];
  isLoading?: boolean;
}

const headTitles = [
  'ПВК',
  'ВНРиОТД',
  'ФРиС',
  'Учеба',
  'Прим',
  'Темпы роста',
  'Место в группе',
  'Место на курсе',
  'Место на факультете',
  'Место в академии',
].map((e, i) => ({ id: i, value: e }));

export const TableRatingParts = ({ partsData, isLoading }: Props) => {
  const tableData = partsData
    ? [
        {
          id: 0,
          cells: [
            partsData.pvk,
            partsData.vnr,
            partsData.frs,
            partsData.study,
            partsData.note,
            partsData.growingRate,
            partsData.groupPlace,
            partsData.yearPlace,
            partsData.departmentPlace,
            partsData.academyPlace,
          ].map((e, i) => ({ id: i, component: e })),
        },
      ]
    : [];
  return <Table headTitles={headTitles} data={tableData} isLoading={isLoading} />;
};
