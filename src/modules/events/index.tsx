import { Container } from 'effects/container';
import { Title } from 'effects/typography';
import { Divider } from 'effects/divider';
import { TodayContainer } from './events.styled';
import useCurrentDate from 'hooks/useCurrentDate';
import { TableTimeEvents } from '../../components';
import { useGetTimetableEventsByDateQuery } from 'store/timetable';
import { parseDate } from '../../lib/parseDate';
import { useMemo } from 'react';

export const Events = () => {
  const { formattedDate, numberDate } = useCurrentDate();
  const calendarDateString = useMemo(() => parseDate(numberDate, 'yyyy-MM-dd'), [numberDate]);

  const {
    data = [],
    isError = false,
    isLoading = false,
  } = calendarDateString ? useGetTimetableEventsByDateQuery(calendarDateString) : {};

  return (
    <Container>
      <Title size={16} center={false} mb={12}>
        Мероприятия дня
      </Title>
      <TodayContainer>Сегодня {formattedDate}</TodayContainer>
      <Divider />
      <TableTimeEvents events={data} loading={isLoading} isError={isError} smallIndents />
    </Container>
  );
};
