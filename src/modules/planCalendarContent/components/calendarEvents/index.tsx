import { parseDate } from 'lib/parseDate';
import { TableTimeEvents } from 'components';
import { useMemo } from 'react';
import { useGetTimetableEventsByDateQuery } from 'store/timetable';

import * as S from './calendarEvents.styled';

interface CalendarEventsProps {
  calendarDate: Date;
}

export const CalendarEvents = ({ calendarDate }: CalendarEventsProps) => {
  const calendarDateString = useMemo(() => parseDate(calendarDate, 'yyyy-MM-dd'), [calendarDate]);
  const {
    data: currentEvents = [],
    error: currentEventsError,
    isLoading: currentEventsLoading,
  } = useGetTimetableEventsByDateQuery(calendarDateString || '');

  const formattedEvents = useMemo(() => {
    return currentEvents.map(event => {
      const { id, eventName, startTime, endTime } = event;
      return {
        id,
        eventName,
        startTime,
        endTime,
      };
    });
  }, [JSON.stringify(currentEvents)]);

  return (
    <>
      <S.EventsTitle size={20} lineHeight={24}>
        Мероприятия на {parseDate(calendarDate, 'd MMMM')}
      </S.EventsTitle>
      <TableTimeEvents
        events={formattedEvents}
        loading={currentEventsLoading}
        isError={!!currentEventsError}
      />
    </>
  );
};
