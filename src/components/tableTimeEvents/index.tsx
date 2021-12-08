import { AlertDismissible, Loader } from 'components';
import React from 'react';
import { Item, NoContent, TableContainer } from './tableTimeEvents.styled';

interface TableEventsProps {
  events: {
    id: number;
    startTime: [number, number] | null;
    endTime: [number, number] | null;
    eventName: string;
  }[];
  loading: boolean;
  isError: boolean;
  smallIndents?: boolean;
}

const formatDate = (time: [number, number]) =>
  time
    .map(t => {
      if (t < 10) return '0' + t;
      return t.toString();
    })
    .join(':');

export const TableTimeEvents = ({ events, loading, isError, smallIndents }: TableEventsProps) => {
  const getContent = () => {
    if (isError) return <AlertDismissible content="Ошибка загрузки мероприятий..." />;
    if (loading) return <Loader />;
    if (!events.length) return <NoContent>В этот день нет мероприятий</NoContent>;

    return events.map(event => (
      <Item key={event.id}>
        <Item.Time>
          {event.startTime
            ? `${formatDate(event.startTime)}${
                event.endTime ? ` - ${formatDate(event.endTime)}` : ''
              }`
            : '--'}
        </Item.Time>
        <Item.Title>{event.eventName}</Item.Title>
      </Item>
    ));
  };

  return <TableContainer smallIndents={!!smallIndents}>{getContent()}</TableContainer>;
};
