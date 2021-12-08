import { Table } from 'components';
import { IRatingResponse } from 'types';

interface Props {
  events?: IRatingResponse['events'];
  isLoading?: boolean;
}

const headTitles = [
  '№ п/п',
  'Дата',
  'Наименование мероприятия',
  'Название работы',
  'Место',
  'Баллы',
].map((e, i) => ({
  id: i,
  value: e,
}));
export const TableEvents = ({ events, isLoading }: Props) => {
  const data = events
    ? events.map((event, i) => ({
        id: i,
        cells: [i + 1, event.date, event.name, event.workTitle, event.place, event.score].map(
          (e, index) => ({ id: index, component: e }),
        ),
      }))
    : [];
  return <Table headTitles={headTitles} data={data} isLoading={isLoading} />;
};
